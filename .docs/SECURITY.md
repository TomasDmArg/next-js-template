# Security Guidelines 🔒

This document outlines key security considerations for web development, referencing the OWASP API Security Top 10 2023. It covers both frontend and backend API security aspects. 🛡️

## General Security Considerations 🎯

### Authentication & Authorization 🔐

- **Implement strong authentication mechanisms**

    ```javascript
    // Example: Using JWT with proper expiration and signing
    const token = jwt.sign({ userId: user.id, role: user.role }, process.env.JWT_SECRET, {
        expiresIn: '1h',
    });
    ```

- **Use secure session management**

    ```javascript
    // Example: Secure cookie configuration
    res.cookie('sessionId', sessionId, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 3600000, // 1 hour
    });
    ```

- **Implement proper role-based access control (RBAC)**

    ```javascript
    // Example: Middleware for role-based authorization
    function requireRole(role) {
        return (req, res, next) => {
            if (!req.user || req.user.role !== role) {
                return res.status(403).json({ error: 'Access denied' });
            }
            next();
        };
    }

    // Usage
    app.get('/admin/users', requireRole('admin'), adminController.listUsers);
    ```

- **Consider multi-factor authentication for sensitive operations**

### Data Protection 🛡️

- **Encrypt sensitive data at rest and in transit**

    ```javascript
    // Example: Encrypting sensitive data before storing
    const encrypted = crypto.publicEncrypt(publicKey, Buffer.from(sensitiveData));
    ```

- **Implement proper input validation and sanitization**

    ```javascript
    // Example: Validating and sanitizing user input
    const sanitizedInput = DOMPurify.sanitize(userInput);
    if (!validator.isEmail(sanitizedInput)) {
        return res.status(400).json({ error: 'Invalid email format' });
    }
    ```

- **Use secure headers (CSP, HSTS, etc.)**

    ```javascript
    // Example: Setting security headers with Helmet
    app.use(
        helmet({
            contentSecurityPolicy: {
                directives: {
                    defaultSrc: ["'self'"],
                    scriptSrc: ["'self'", "'unsafe-inline'", 'trusted-cdn.com'],
                },
            },
            hsts: {
                maxAge: 31536000,
                includeSubDomains: true,
                preload: true,
            },
        })
    );
    ```

- **Follow the principle of least privilege**

### API Security 🌐

- **Implement rate limiting**

    ```javascript
    // Example: Rate limiting with Express
    const limiter = rateLimit({
        windowMs: 15 * 60 * 1000, // 15 minutes
        max: 100, // limit each IP to 100 requests per windowMs
        message: 'Too many requests, please try again later',
    });

    app.use('/api/', limiter);
    ```

- **Use proper API authentication methods**
- **Validate and sanitize all API inputs**
- **Implement proper error handling**
    ```javascript
    // Example: Proper error handling without leaking details
    app.use((err, req, res, next) => {
        console.error(err.stack);
        res.status(500).json({
            error: 'An unexpected error occurred',
            requestId: req.id, // For tracking in logs without exposing internals
        });
    });
    ```

## OWASP API Security Top 10 2023 🚨

### 1. Broken Object Level Authorization (BOLA) 🔓

- **Risk**: Unauthorized access to objects
- **Mitigation**: Implement proper access control checks
    ```javascript
    // Example: Checking if user has access to the requested resource
    async function getDocument(req, res) {
        const { documentId } = req.params;
        const document = await Document.findById(documentId);

        if (!document) {
            return res.status(404).json({ error: 'Document not found' });
        }

        // Check if the current user has access to this document
        if (document.ownerId !== req.user.id && !req.user.isAdmin) {
            return res.status(403).json({ error: 'Access denied' });
        }

        return res.json(document);
    }
    ```

### 2. Broken Authentication 🔑

- **Risk**: Weak authentication mechanisms
- **Mitigation**: Use strong authentication, implement MFA
    ```javascript
    // Example: Implementing 2FA verification
    async function verifyLogin(req, res) {
        const { email, password, totpCode } = req.body;

        // Verify username and password
        const user = await User.findOne({ email });
        if (!user || !(await bcrypt.compare(password, user.passwordHash))) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        // Verify TOTP code if 2FA is enabled
        if (user.twoFactorEnabled) {
            const isValidToken = speakeasy.totp.verify({
                secret: user.twoFactorSecret,
                encoding: 'base32',
                token: totpCode,
            });

            if (!isValidToken) {
                return res.status(401).json({ error: 'Invalid 2FA code' });
            }
        }

        // Authentication successful
        const token = generateAuthToken(user);
        return res.json({ token });
    }
    ```

### 3. Broken Object Property Level Authorization 🛡️

- **Risk**: Unauthorized access to object properties
- **Mitigation**: Validate property-level access
    ```javascript
    // Example: Filtering sensitive properties based on user role
    function sanitizeUserData(user, requestingUser) {
        const result = { ...user };

        // Only admins can see certain fields
        if (requestingUser.role !== 'admin') {
            delete result.internalNotes;
            delete result.securityClearance;
            delete result.salaryInfo;
        }

        return result;
    }
    ```

### 4. Unrestricted Resource Consumption 💥

- **Risk**: Denial of service through resource exhaustion
- **Mitigation**: Implement rate limiting and resource quotas

    ```javascript
    // Example: Limiting file upload size
    const upload = multer({
        limits: {
            fileSize: 5 * 1024 * 1024, // 5MB limit
            files: 3, // Maximum 3 files per request
        },
    });

    app.post('/api/upload', upload.array('files'), uploadController.handleUpload);
    ```

### 5-10. [Other OWASP Top 10 Items]

Each item follows the same pattern with clear risk identification and practical mitigation strategies.

## Next.js Specific Security Considerations ⚛️

### Environment Variables 🌍

- **Use `.env.local` for sensitive data**

    ```
    # .env.local example
    DATABASE_URL=postgres://username:password@localhost:5432/mydb
    JWT_SECRET=your-secret-key-here
    ```

- **Prefix client-side variables with `NEXT_PUBLIC_`**

    ```
    # Variables accessible on the client
    NEXT_PUBLIC_API_URL=https://api.example.com

    # Variables only accessible on the server
    API_SECRET_KEY=secret-key-here
    ```

- **Validate environment variables at startup**

    ```javascript
    // utils/validateEnv.js
    function validateEnv() {
        const requiredEnvVars = ['DATABASE_URL', 'JWT_SECRET', 'NEXT_PUBLIC_API_URL'];

        const missingEnvVars = requiredEnvVars.filter(envVar => !process.env[envVar]);

        if (missingEnvVars.length > 0) {
            throw new Error(`Missing required environment variables: ${missingEnvVars.join(', ')}`);
        }
    }

    // Call this in your app startup
    validateEnv();
    ```

### API Routes, Client-Side Security, and Best Practices

[Additional sections follow the same improved format with practical examples and clear formatting]

## Security Checklist for Deployment ✅

- [ ] All secrets and API keys stored securely
- [ ] HTTPS enforced for all connections
- [ ] CSP headers properly configured
- [ ] Authentication mechanisms thoroughly tested
- [ ] Input validation implemented for all user inputs
- [ ] Rate limiting configured for API endpoints
- [ ] Error handling doesn't expose sensitive information
- [ ] Regular security audits scheduled
- [ ] Dependency vulnerabilities checked
- [ ] Proper logging implemented for security events

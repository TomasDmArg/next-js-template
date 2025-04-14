# Guías de Seguridad 🔒

Este documento describe las consideraciones clave de seguridad para el desarrollo web, haciendo referencia al OWASP API Security Top 10 2023. Cubre aspectos de seguridad tanto del frontend como de las APIs del backend. 🛡️

## Consideraciones Generales de Seguridad 🎯

### Autenticación y Autorización 🔐

- **Implementar mecanismos de autenticación robustos**

    ```javascript
    // Ejemplo: Usando JWT con expiración y firma adecuadas
    const token = jwt.sign({ userId: user.id, role: user.role }, process.env.JWT_SECRET, {
        expiresIn: '1h',
    });
    ```

- **Usar gestión de sesiones segura**

    ```javascript
    // Ejemplo: Configuración segura de cookies
    res.cookie('sessionId', sessionId, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 3600000, // 1 hora
    });
    ```

- **Implementar control de acceso basado en roles (RBAC)**

    ```javascript
    // Ejemplo: Middleware para autorización basada en roles
    function requireRole(role) {
        return (req, res, next) => {
            if (!req.user || req.user.role !== role) {
                return res.status(403).json({ error: 'Acceso denegado' });
            }
            next();
        };
    }

    // Uso
    app.get('/admin/users', requireRole('admin'), adminController.listUsers);
    ```

- **Considerar autenticación multifactor para operaciones sensibles**

### Protección de Datos 🛡️

- **Encriptar datos sensibles en reposo y en tránsito**

    ```javascript
    // Ejemplo: Encriptando datos sensibles antes de almacenarlos
    const encrypted = crypto.publicEncrypt(publicKey, Buffer.from(sensitiveData));
    ```

- **Implementar validación y sanitización adecuada de entradas**

    ```javascript
    // Ejemplo: Validando y sanitizando entrada de usuario
    const sanitizedInput = DOMPurify.sanitize(userInput);
    if (!validator.isEmail(sanitizedInput)) {
        return res.status(400).json({ error: 'Formato de email inválido' });
    }
    ```

- **Usar headers de seguridad (CSP, HSTS, etc.)**

    ```javascript
    // Ejemplo: Configurando headers de seguridad con Helmet
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

- **Seguir el principio de privilegio mínimo**

### Seguridad de API 🌐

- **Implementar limitación de tasa**

    ```javascript
    // Ejemplo: Limitación de tasa con Express
    const limiter = rateLimit({
        windowMs: 15 * 60 * 1000, // 15 minutos
        max: 100, // limita cada IP a 100 solicitudes por windowMs
        message: 'Demasiadas solicitudes, por favor intente más tarde',
    });

    app.use('/api/', limiter);
    ```

- **Usar métodos de autenticación de API apropiados**
- **Validar y sanitizar todas las entradas de API**
- **Implementar manejo adecuado de errores**
    ```javascript
    // Ejemplo: Manejo adecuado de errores sin filtrar detalles
    app.use((err, req, res, next) => {
        console.error(err.stack);
        res.status(500).json({
            error: 'Ocurrió un error inesperado',
            requestId: req.id, // Para seguimiento en logs sin exponer detalles internos
        });
    });
    ```

## OWASP API Security Top 10 2023 🚨

### 1. Autorización de Nivel de Objeto Rota (BOLA) 🔓

- **Riesgo**: Acceso no autorizado a objetos
- **Mitigación**: Implementar verificaciones de control de acceso adecuadas

    ```javascript
    // Ejemplo: Verificando si el usuario tiene acceso al recurso solicitado
    async function getDocument(req, res) {
        const { documentId } = req.params;
        const document = await Document.findById(documentId);

        if (!document) {
            return res.status(404).json({ error: 'Documento no encontrado' });
        }

        // Verificar si el usuario actual tiene acceso a este documento
        if (document.ownerId !== req.user.id && !req.user.isAdmin) {
            return res.status(403).json({ error: 'Acceso denegado' });
        }

        return res.json(document);
    }
    ```

### 2. Autenticación Rota 🔑

- **Riesgo**: Mecanismos de autenticación débiles
- **Mitigación**: Usar autenticación fuerte, implementar MFA

    ```javascript
    // Ejemplo: Implementando verificación 2FA
    async function verifyLogin(req, res) {
        const { email, password, totpCode } = req.body;

        // Verificar usuario y contraseña
        const user = await User.findOne({ email });
        if (!user || !(await bcrypt.compare(password, user.passwordHash))) {
            return res.status(401).json({ error: 'Credenciales inválidas' });
        }

        // Verificar código TOTP si 2FA está habilitado
        if (user.twoFactorEnabled) {
            const isValidToken = speakeasy.totp.verify({
                secret: user.twoFactorSecret,
                encoding: 'base32',
                token: totpCode,
            });

            if (!isValidToken) {
                return res.status(401).json({ error: 'Código 2FA inválido' });
            }
        }

        // Autenticación exitosa
        const token = generateAuthToken(user);
        return res.json({ token });
    }
    ```

### 3. Autorización de Nivel de Propiedad de Objeto Rota 🛡️

- **Riesgo**: Acceso no autorizado a propiedades de objetos
- **Mitigación**: Validar acceso a nivel de propiedad

    ```javascript
    // Ejemplo: Filtrando propiedades sensibles basado en el rol del usuario
    function sanitizeUserData(user, requestingUser) {
        const result = { ...user };

        // Solo los administradores pueden ver ciertos campos
        if (requestingUser.role !== 'admin') {
            delete result.internalNotes;
            delete result.securityClearance;
            delete result.salaryInfo;
        }

        return result;
    }
    ```

### 4. Consumo de Recursos sin Restricciones 💥

- **Riesgo**: Denegación de servicio por agotamiento de recursos
- **Mitigación**: Implementar limitación de tasa y cuotas de recursos

    ```javascript
    // Ejemplo: Limitando tamaño de carga de archivos
    const upload = multer({
        limits: {
            fileSize: 5 * 1024 * 1024, // límite de 5MB
            files: 3, // Máximo 3 archivos por solicitud
        },
    });

    app.post('/api/upload', upload.array('files'), uploadController.handleUpload);
    ```

### 5. Autorización de Nivel de Función Rota 🚫

- **Riesgo**: Acceso no autorizado a funciones
- **Mitigación**: Implementar control de acceso a nivel de función

### 6. Acceso sin Restricciones a Flujos de Negocio Sensibles 📊

- **Riesgo**: Abuso de lógica de negocio
- **Mitigación**: Implementar validación de flujos de negocio

### 7. Falsificación de Solicitudes del Lado del Servidor (SSRF) 🌐

- **Riesgo**: Solicitudes no autorizadas del servidor
- **Mitigación**: Validar y restringir solicitudes del servidor

### 8. Configuración de Seguridad Incorrecta ⚙️

- **Riesgo**: Configuraciones predeterminadas inseguras
- **Mitigación**: Seguir mejores prácticas de seguridad

### 9. Gestión de Inventario Impropia 📋

- **Riesgo**: Endpoints de API no gestionados
- **Mitigación**: Mantener documentación adecuada de API

### 10. Consumo Inseguro de APIs ⚠️

- **Riesgo**: Consumo inseguro de APIs
- **Mitigación**: Validar respuestas de API

## Consideraciones Específicas de Next.js ⚛️

### Variables de Entorno 🌍

- **Usar `.env.local` para datos sensibles**

    ```
    # Ejemplo de .env.local
    DATABASE_URL=postgres://username:password@localhost:5432/mydb
    JWT_SECRET=your-secret-key-here
    ```

- **Prefijar variables del lado del cliente con `NEXT_PUBLIC_`**

    ```
    # Variables accesibles en el cliente
    NEXT_PUBLIC_API_URL=https://api.example.com

    # Variables solo accesibles en el servidor
    API_SECRET_KEY=secret-key-here
    ```

- **Validar variables de entorno al iniciar**

    ```javascript
    // utils/validateEnv.js
    function validateEnv() {
        const requiredEnvVars = ['DATABASE_URL', 'JWT_SECRET', 'NEXT_PUBLIC_API_URL'];

        const missingEnvVars = requiredEnvVars.filter(envVar => !process.env[envVar]);

        if (missingEnvVars.length > 0) {
            throw new Error(`Faltan variables de entorno requeridas: ${missingEnvVars.join(', ')}`);
        }
    }

    // Llamar esto al inicio de la aplicación
    validateEnv();
    ```

### Rutas de API 🔄

- **Implementar autenticación adecuada**
- **Usar middleware para verificaciones de seguridad comunes**
- **Validar todas las entradas**
- **Implementar manejo adecuado de errores**

### Seguridad del Lado del Cliente 🖥️

- **Usar Política de Seguridad de Contenido (CSP)**
- **Implementar políticas CORS adecuadas**
- **Sanitizar entradas de usuario**
- **Usar cookies seguras**

## Lista de Verificación de Seguridad para Despliegue ✅

- [ ] Todos los secretos y claves API almacenados de forma segura
- [ ] HTTPS forzado para todas las conexiones
- [ ] Headers CSP configurados adecuadamente
- [ ] Mecanismos de autenticación probados exhaustivamente
- [ ] Validación de entrada implementada para todas las entradas de usuario
- [ ] Limitación de tasa configurada para endpoints de API
- [ ] Manejo de errores no expone información sensible
- [ ] Auditorías de seguridad programadas regularmente
- [ ] Vulnerabilidades de dependencias verificadas
- [ ] Registro adecuado implementado para eventos de seguridad

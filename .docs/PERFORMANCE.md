# Performance Guide ⚡

This document outlines practical strategies for optimizing application performance.

## Common Optimizations 🚀

### 1. Parallel Requests

```typescript
// Sequential (Slower) ⏱️
// const user = await fetchUser(userId);
// const posts = await fetchPosts(userId);

// Parallel (Faster) ⚡
const [user, posts] = await Promise.all([fetchUser(userId), fetchPosts(userId)]);
```

### 2. Optimistic UI Updates

```typescript
// Example with React Query
const { mutate } = useMutation({
    mutationFn: updateUser,
    onMutate: async newUser => {
        // Cancel outgoing refetches
        await queryClient.cancelQueries(['user', userId]);

        // Snapshot previous value
        const previousUser = queryClient.getQueryData(['user', userId]);

        // Optimistically update
        queryClient.setQueryData(['user', userId], newUser);

        return { previousUser };
    },
    onError: (err, newUser, context) => {
        // Revert on error
        queryClient.setQueryData(['user', userId], context.previousUser);
    },
});
```

## Caching Strategies 📦

### 1. Browser Caching

```typescript
// middleware/cache.ts
export function middleware(request: NextRequest) {
    const response = NextResponse.next();

    // Cache static assets for 1 year
    if (request.nextUrl.pathname.startsWith('/static')) {
        response.headers.set('Cache-Control', 'public, max-age=31536000');
    }

    // Cache API responses for 5 minutes
    if (request.nextUrl.pathname.startsWith('/api')) {
        response.headers.set('Cache-Control', 'public, max-age=300');
    }

    return response;
}
```

### 2. Data Caching

```typescript
// Example with React Query
const { data } = useQuery({
    queryKey: ['todos'],
    queryFn: fetchTodos,
    staleTime: 5 * 60 * 1000, // 5 minutes
    cacheTime: 30 * 60 * 1000, // 30 minutes
});
```

## Image Optimization 🖼️

### 1. Next.js Image Component

```typescript
import Image from 'next/image';

// Automatically optimizes images
<Image
  src="/profile.jpg"
  alt="Profile"
  width={500}
  height={500}
  priority // For above-the-fold images
/>
```

### 2. Responsive Images

```typescript
<Image
  src="/hero.jpg"
  alt="Hero"
  sizes="(max-width: 768px) 100vw, 50vw"
  fill
  style={{ objectFit: 'cover' }}
/>
```

## Performance Analysis 🛠️

### 1. Lighthouse

- Open Chrome DevTools (F12)
- Go to the "Lighthouse" tab
- Select categories to analyze
- Click "Generate report"
- Review recommendations

### 2. Network Tab

- Open Chrome DevTools (F12)
- Go to the "Network" tab
- Check request waterfall
- Look for:
    - Large files
    - Slow requests
    - Unnecessary requests
    - Missing caching headers

## Database Optimization 🗄️

### 1. Efficient Queries

```typescript
// Bad: Fetching all fields
const users = await prisma.user.findMany();

// Good: Only fetch needed fields
const users = await prisma.user.findMany({
    select: {
        id: true,
        name: true,
        email: true,
    },
    take: 100, // Limit results
});
```

### 2. Pagination

```typescript
const users = await prisma.user.findMany({
    skip: (page - 1) * pageSize,
    take: pageSize,
    orderBy: {
        createdAt: 'desc',
    },
});
```

## References 📚

- [Next.js Image Optimization](https://nextjs.org/docs/basic-features/image-optimization)
- [React Query Documentation](https://tanstack.com/query/latest)
- [Chrome DevTools](https://developer.chrome.com/docs/devtools/)

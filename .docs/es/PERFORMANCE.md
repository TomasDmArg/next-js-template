# Guía de Rendimiento ⚡

Este documento describe estrategias prácticas para optimizar el rendimiento de la aplicación.

## Optimizaciones Comunes 🚀

### 1. Peticiones Paralelas

```typescript
// Secuencial (Más lento) ⏱️
// const user = await fetchUser(userId);
// const posts = await fetchPosts(userId);

// Paralelo (Más rápido) ⚡
const [user, posts] = await Promise.all([fetchUser(userId), fetchPosts(userId)]);
```

### 2. Actualizaciones Optimistas de UI

```typescript
// Ejemplo con React Query
const { mutate } = useMutation({
    mutationFn: updateUser,
    onMutate: async newUser => {
        // Cancelar refetches pendientes
        await queryClient.cancelQueries(['user', userId]);

        // Guardar valor anterior
        const previousUser = queryClient.getQueryData(['user', userId]);

        // Actualizar optimistamente
        queryClient.setQueryData(['user', userId], newUser);

        return { previousUser };
    },
    onError: (err, newUser, context) => {
        // Revertir en caso de error
        queryClient.setQueryData(['user', userId], context.previousUser);
    },
});
```

## Estrategias de Caché 📦

### 1. Caché del Navegador

```typescript
// middleware/cache.ts
export function middleware(request: NextRequest) {
    const response = NextResponse.next();

    // Caché para assets estáticos (1 año)
    if (request.nextUrl.pathname.startsWith('/static')) {
        response.headers.set('Cache-Control', 'public, max-age=31536000');
    }

    // Caché para respuestas API (5 minutos)
    if (request.nextUrl.pathname.startsWith('/api')) {
        response.headers.set('Cache-Control', 'public, max-age=300');
    }

    return response;
}
```

### 2. Caché de Datos

```typescript
// Ejemplo con React Query
const { data } = useQuery({
    queryKey: ['todos'],
    queryFn: fetchTodos,
    staleTime: 5 * 60 * 1000, // 5 minutos
    cacheTime: 30 * 60 * 1000, // 30 minutos
});
```

## Optimización de Imágenes 🖼️

### 1. Componente Next.js Image

```typescript
import Image from 'next/image';

// Optimiza imágenes automáticamente
<Image
  src="/profile.jpg"
  alt="Profile"
  width={500}
  height={500}
  priority // Para imágenes "above the fold"
/>
```

### 2. Imágenes Responsivas

```typescript
<Image
  src="/hero.jpg"
  alt="Hero"
  sizes="(max-width: 768px) 100vw, 50vw"
  fill
  style={{ objectFit: 'cover' }}
/>
```

## Análisis de Rendimiento 🛠️

### 1. Lighthouse

- Abre Chrome DevTools (F12)
- Ve a la pestaña "Lighthouse"
- Selecciona las categorías a analizar
- Haz clic en "Generate report"
- Revisa las recomendaciones

### 2. Pestaña Network

- Abre Chrome DevTools (F12)
- Ve a la pestaña "Network"
- Revisa el waterfall de peticiones
- Busca:
    - Archivos grandes
    - Peticiones lentas
    - Peticiones innecesarias
    - Headers de caché faltantes

## Optimización de Base de Datos 🗄️

### 1. Consultas Eficientes

```typescript
// Mal: Obtener todos los campos
const users = await prisma.user.findMany();

// Bien: Solo obtener los campos necesarios
const users = await prisma.user.findMany({
    select: {
        id: true,
        name: true,
        email: true,
    },
    take: 100, // Limitar resultados
});
```

### 2. Paginación

```typescript
const users = await prisma.user.findMany({
    skip: (page - 1) * pageSize,
    take: pageSize,
    orderBy: {
        createdAt: 'desc',
    },
});
```

## Referencias 📚

- [Optimización de Imágenes en Next.js](https://nextjs.org/docs/basic-features/image-optimization)
- [Documentación de React Query](https://tanstack.com/query/latest)
- [Chrome DevTools](https://developer.chrome.com/docs/devtools/)

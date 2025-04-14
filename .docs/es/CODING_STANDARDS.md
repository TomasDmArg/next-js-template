# Estándares de Código 📝

Este documento establece los estándares generales de código y mejores prácticas a seguir. 🚀

## Convenciones de Nombrado 📛

- **Variables y Funciones:** Usar `camelCase`. Las variables deben ser sustantivos descriptivos, y las funciones idealmente verbos que describan su acción (ej: `perfilUsuario`, `calcularTotal`, `obtenerDatosUsuario`) 🔤
- **Constantes:** Usar `UPPER_SNAKE_CASE` para constantes verdaderamente inmutables y de uso generalizado (ej: `MAX_REINTENTOS`, `TIMEOUT_API`) 📌
- **Componentes (React/TSX):** Usar `PascalCase` (ej: `TarjetaPerfilUsuario`, `FormularioLogin`) 🧩
- **Clases/Interfaces/Tipos (TypeScript):** Usar `PascalCase` (ej: `ServicioUsuario`, `IPerfilUsuario`, `RespuestaApi`) 📦
- **Archivos:** Usar `kebab-case` para la mayoría de los archivos (ej: `perfil-usuario.tsx`, `cliente-api.ts`). Los archivos de componentes pueden usar `PascalCase.tsx` si se prefiere (ej: `TarjetaPerfilUsuario.tsx`). Ser consistente 📁
- **Variables de Entorno:** Usar `UPPER_SNAKE_CASE`, con prefijos apropiados (ej: `NEXT_PUBLIC_URL_API`, `URL_BASE_DATOS`) 🔧

## Variables de Entorno 🌍

- Usar un archivo `.env.local` para secretos de desarrollo local (este archivo debe estar en `.gitignore`) 🔒
- Usar `.env.example` para documentar las variables de entorno requeridas con valores de ejemplo 📋
- Prefijar con `NEXT_PUBLIC_` las variables accesibles del lado del cliente (para proyectos Next.js) 🌐
- Validar las variables de entorno al iniciar la aplicación para asegurar que todas las variables requeridas estén presentes y correctamente formateadas ✅

## Mejores Prácticas Generales 🏆

- **Legibilidad:** Escribir código fácil de leer y entender. Usar nombres significativos, mantener funciones cortas y enfocadas, y agregar comentarios para lógica compleja o decisiones no obvias 📖
- **DRY (Don't Repeat Yourself):** Evitar duplicar código. Extraer lógica reutilizable en funciones, hooks o componentes 🔄
- **KISS (Keep It Simple, Stupid):** Preferir soluciones simples sobre complejas cuando sea posible 🎯
- **YAGNI (You Aren't Gonna Need It):** Evitar implementar features o abstracciones que no son requeridas actualmente 🚫
- **Principio de Responsabilidad Única (SRP):** Las funciones, clases y componentes deben tener idealmente una única responsabilidad primaria 🎯
- **Divide y Vencerás:** Descomponer problemas complejos en sub-problemas más pequeños y manejables. Resolver cada sub-problema individualmente y luego combinar las soluciones 🧩

## TypeScript 💪

- **Buscar Tipado Fuerte:** Evitar `any` cuando sea posible. Usar tipos específicos, interfaces o genéricos 🎯
- **Usar `unknown` en lugar de `any`:** Cuando el tipo es verdaderamente desconocido, `unknown` es más seguro ya que fuerza la verificación de tipos antes de su uso 🔒
- **Aprovechar Tipos Utilitarios:** Usar tipos utilitarios incorporados como `Partial`, `Required`, `Readonly`, `Pick`, `Omit` para crear nuevos tipos basados en existentes 🛠️
- **Definir Interfaces/Tipos Claros:** Asegurar que las interfaces y alias de tipos definan claramente la forma de los datos 📋

## Documentación (JSDoc) 📚

- Usar comentarios JSDoc (`/** ... */`) para documentar funciones, clases, tipos y lógica compleja, especialmente para miembros exportados 📝
- Describir el propósito, parámetros (`@param`), valores de retorno (`@returns`), y cualquier efecto secundario o excepción potencial (`@throws`) 📋

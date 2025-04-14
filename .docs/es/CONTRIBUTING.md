# Guía de Contribución 📝

Este documento establece las pautas para contribuir a proyectos que utilizan este boilerplate. Seguir estos estándares garantiza consistencia en el código, mantenibilidad y un proceso de desarrollo más fluido. 🚀

## Commits 💾

Los mensajes de commit deben seguir la especificación de **Conventional Commits**. El formato básico es:

```

<tipo>[opcional scope]: <descripción>

[opcional cuerpo]

[opcional footer(s)]
```

**Tipos Comunes:** 📋

- `feat`: Una nueva funcionalidad ✨

- `fix`: Corrección de un bug 🐛

- `refactor`: Cambios en el código que no corrigen un bug ni agregan una funcionalidad (ej: renombrar una variable, mejorar la estructura) 🔨

- `style`: Cambios que no afectan el significado del código (espacios, formato, punto y coma faltante, etc.) 💅

- `lint`: Cambios específicos de ESLint o Prettier 🧹

- `build`: Cambios que afectan el sistema de build o dependencias externas (ejemplo de scopes: gulp, broccoli, npm) 📦

- `ci`: Cambios en archivos y scripts de configuración de CI (ejemplo de scopes: Travis, Circle, BrowserStack, SauceLabs) 🔄

- `docs`: Cambios solo en documentación 📚

- `test`: Agregar tests faltantes o corregir tests existentes 🧪

- `perf`: Cambio en el código que mejora el rendimiento ⚡

- `chore`: Otros cambios que no modifican archivos de `src` o `test` (ej: actualizar dependencias) 🔧

**Ejemplos:** 📝

```

feat: agregar endpoint de autenticación de usuario

fix: corregir error de cálculo en total de checkout

refactor: extraer lógica de validación a utilidad separada

style: formatear código según reglas de prettier

docs: actualizar instrucciones de instalación en README

```

## Branches 🌿

Los nombres de las branches deben seguir este patrón:

```

<tipo>/<descripción-breve-o-número-de-ticket>

```

- `<tipo>`: Debe alinearse con los tipos de commit (`feat`, `fix`, `refactor`, `docs`, etc.)

- `<descripción-breve-o-número-de-ticket>`: Una descripción breve con guiones o el número del issue/ticket correspondiente (ej: `feat/login-usuario`, `fix/bug-checkout-123`)

**Ejemplos:** 📋

- `feat/agregar-página-perfil`

- `fix/alineación-navbar`

- `refactor/capa-servicio-api`

- `docs/actualizar-guía-contribución`

## Pull Requests (PRs) 🔄

- **Nombrado:** Los títulos de PR deben ser claros y descriptivos, idealmente reflejando el mensaje principal del commit o el objetivo general de la branch. Ejemplo: `feat: Implementar Página de Perfil de Usuario` 📝

- **Descripción:** Proporcionar un resumen conciso de los cambios, el problema que se resuelve y cualquier contexto relevante. Vincular a issues relacionados si corresponde 📋

- **Alcance:** Mantener los PRs enfocados en una única funcionalidad, corrección de bug o esfuerzo de refactorización. Evitar mezclar cambios no relacionados 🎯

- **Revisión:** Asegurarse de que el código haya sido revisado por al menos otro miembro del equipo antes de mergear (si corresponde) 👥

## Linting y Formateo 🧹

Este proyecto utiliza ESLint para análisis de código y Prettier para formateo.

- **Pre-commit Hook:** Un hook de pre-commit (usando Husky y lint-staged, si está configurado) debe ejecutar automáticamente las verificaciones de linting y formateo en los archivos staged antes de cada commit. Asegurarse de que este hook esté activo en el entorno local ⚡

- **Verificaciones Manuales:** Se pueden ejecutar verificaciones manualmente usando:

    - `npm run lint` o `bun lint` 🧹

    - `npm run lint:fix` o `bun lint:fix` 🔧

    - `npm run prettier` o `bun prettier` 💅

- **Verificación CI:** El pipeline de Integración Continua (CI) debe pasar todas las verificaciones de linting y formateo antes de que un PR pueda ser mergeado ✅

**Asegurarse de que el código esté correctamente linted y formateado _antes_ de pushear la branch y crear un PR.** Esto minimiza el ruido en las revisiones de código y mantiene la consistencia. 🎯

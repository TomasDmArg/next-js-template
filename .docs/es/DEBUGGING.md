# Técnicas de Depuración 🔍

La depuración efectiva es una habilidad crítica para cualquier desarrollador. Esta guía cubre técnicas y herramientas comunes para depurar tanto código frontend como backend en esta aplicación Next.js. 🛠️

## Depuración Frontend (Navegador) 🌐

Tu herramienta principal para depuración frontend son las Developer Tools de tu navegador (generalmente abiertas con F12). 🔧

- **Pestaña Console:** 📝
    - Ver logs (`console.log`, `console.warn`, `console.error`). Usar logs descriptivos para rastrear el flujo de ejecución e inspeccionar valores de variables
    - Ejecutar snippets de JavaScript interactivamente
    - Inspeccionar mensajes de error y stack traces
- **Pestaña Elements:** 🏗️
    - Inspeccionar la estructura HTML renderizada (DOM)
    - Analizar y modificar estilos CSS aplicados a elementos
    - Verificar atributos de elementos y event listeners
- **Pestaña Network:** 🌐
    - Inspeccionar todas las requests de red realizadas por la página (llamadas API, imágenes, scripts, etc.)
    - Verificar headers de request/response, payloads, códigos de estado y timing
    - Filtrar requests, analizar waterfalls para identificar cuellos de botella
- **Pestaña Sources:** 📄
    - Establecer breakpoints (sentencia `debugger;` en código o clickeando números de línea) para pausar la ejecución de JavaScript
    - Avanzar paso a paso en la ejecución del código (step over, step into, step out)
    - Inspeccionar valores de variables en puntos específicos en el tiempo (inspección de scope)
    - Analizar call stacks
    - Ver código fuente original incluso después de transpilación/bundling (requiere source maps, generalmente habilitados en desarrollo)
- **Pestaña Application:** 💾
    - Inspeccionar local storage, session storage, cookies, IndexedDB y otros mecanismos de almacenamiento del navegador

## Depuración Backend (Rutas API de Next.js y Server Components) ⚙️

Depurar código que corre en el servidor (Rutas API, Server Components con `"use server"` si aplica) requiere diferentes técnicas.

- **Logging:** 📝
    - Usar `console.log`, `console.warn`, `console.error` extensivamente dentro de tu código del lado del servidor
    - Estos logs aparecerán en la **terminal** donde ejecutaste `bun dev` (o el sistema de logging de tu entorno de producción), _no_ en la consola del navegador
    - Usar logging estructurado para mejor análisis en producción si es necesario
- **Debugger de Node.js / Bun:** 🔧
    - Puedes adjuntar un debugger al proceso de Node.js/Bun en ejecución
    - **Usando VS Code:** Configurar tu `launch.json` para adjuntar al proceso del servidor de desarrollo de Next.js. Esto permite establecer breakpoints, inspeccionar variables y avanzar paso a paso en el código directamente en tu editor
    - **Manual:** Ejecutar el servidor de desarrollo con el flag `--inspect` (`bun --inspect dev`) y conectar usando Chrome DevTools (`chrome://inspect`) u otros clientes compatibles
    - Colocar sentencias `debugger;` en tu código del lado del servidor para disparar breakpoints cuando el debugger está adjunto

## React Developer Tools 🛠️

- Una extensión de navegador disponible para Chrome, Firefox y Edge
- **Pestaña Components:** Inspeccionar la jerarquía de componentes React, ver props y estado para componentes seleccionados, e incluso modificarlos en vivo 🧩
- **Pestaña Profiler:** Grabar interacciones de la aplicación para identificar cuellos de botella de rendimiento causados por re-renderizados innecesarios de componentes 📊
- Esencial para entender cómo están estructurados y se comportan tus componentes React 🎯

## Consejos Generales de Depuración 💡

- **Reproducir Consistentemente:** Intentar encontrar los pasos exactos para reproducir el bug de manera confiable 🔄
- **Aislar el Problema:** Reducir el alcance. ¿El bug está en el frontend o backend? ¿En qué componente o función específica? 🎯
- **Simplificar:** Remover temporalmente código o features para ver si el bug desaparece. Comentar secciones 🔍
- **Leer Mensajes de Error Cuidadosamente:** Entender el tipo de error y stack trace 📝
- **Verificar Requests de Red:** Verificar que las llamadas API se están realizando correctamente y las responses son las esperadas 🌐
- **Verificar Estado:** Usar React DevTools o logging para verificar estado de componentes y valores de contexto 📊
- **Hablar el Problema:** Explicar el problema a otra persona (o incluso rubber duck debugging) a menudo puede revelar la solución 🦆

# Estrategias de Testing 🧪

Escribir tests es esencial para asegurar la calidad del código, prevenir regresiones y permitir refactorizaciones con confianza. Esta guía describe las estrategias y herramientas de testing recomendadas para este boilerplate.

## Pirámide de Testing 🔺

Generalmente seguimos los principios de la pirámide de testing:

- **Tests Unitarios (Base) ⚛️:** Testean funciones, componentes o módulos individuales en aislamiento. Son rápidos, numerosos y se enfocan en verificar lógica específica
- **Tests de Integración (Medio) 🔄:** Testean la interacción entre varias unidades o componentes. Aseguran que diferentes partes de la aplicación funcionen juntas correctamente
- **Tests End-to-End (E2E) (Cima) 🏁:** Testean flujos completos de usuario a través de la aplicación, simulando interacciones reales de usuario en un entorno similar a un navegador. Son más lentos, menos numerosos y validan el sistema como un todo

## Tipos de Tests y Herramientas 🛠️

1.  **Tests Unitarios:**

    - **Propósito:** Verificar la lógica de funciones individuales (ej: funciones utilitarias, funciones helper) o componentes aislados (props in -> output/render esperado) ✅
    - **Herramientas:** [Vitest](https://vitest.dev/) o [Jest](https://jestjs.io/) (Test runners y librerías de aserción) 🧰
    - **Ubicación:** Típicamente en archivos `*.test.ts` o `*.test.tsx` junto al código siendo testeado o en un directorio dedicado `__tests__` 📁

2.  **Tests de Componentes / Integración:**

    - **Propósito:** Testear componentes React renderizándolos e interactuando con ellos como lo haría un usuario (clickear botones, llenar formularios), verificando el output renderizado y las interacciones entre componentes 🖱️
    - **Herramientas:** [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) (usado con Vitest/Jest). Se enfoca en testear componentes desde la perspectiva del usuario en lugar de detalles de implementación 👁️
    - **Ubicación:** Archivos `*.test.tsx`, a menudo junto a los archivos de componentes 📄

3.  **Tests de Rutas API (Integración):**

    - **Propósito:** Testear la lógica dentro de tus rutas API de Next.js (`/app/api/...`). Esto implica mockear requests y verificar responses, códigos de estado y efectos secundarios potenciales (como interacciones con base de datos, si aplica - potencialmente requiriendo mocking) 🌐
    - **Herramientas:** Vitest/Jest junto con librerías para mockear requests/responses HTTP (ej: `node-mocks-http` o utilidades de testing proporcionadas por frameworks si se usan) 🔌

4.  **Tests End-to-End (E2E):**
    - **Propósito:** Simular recorridos reales de usuario a través de la aplicación desplegada o corriendo localmente en un navegador 🧭
    - **Herramientas:** [Playwright](https://playwright.dev/) o [Cypress](https://www.cypress.io/) 🎭
    - **Ubicación:** Usualmente en un directorio separado `e2e` o `tests/e2e` 📂
    - **Cuándo:** Enfocar los tests E2E en caminos críticos de usuario (ej: login, checkout, flujos de features core) ya que son más lentos y frágiles que los tests unitarios/de integración ⏱️

## Por Dónde Empezar 🚀

- **Componentes:** Comenzar testeando componentes individuales usando React Testing Library. Testear que renderizan correctamente basados en props y que las interacciones de usuario (clicks, inputs) disparan el comportamiento o callbacks esperados 🧩
- **Funciones Utilitarias:** Escribir tests unitarios para cualquier lógica compleja dentro de funciones utilitarias o helper 🔧
- **Rutas API:** Agregar tests de integración para tus rutas API para asegurar que manejan requests correctamente, realizan validación y retornan las responses/códigos de estado esperados 📡
- **Flujos Críticos:** Una vez que las piezas core están testeadas, identificar los flujos de usuario más críticos e implementar tests E2E para ellos 🛣️

## Cobertura de Tests 📊

- Apuntar a cobertura de tests significativa en lugar de enfocarse únicamente en un número de porcentaje. Asegurar que la lógica crítica y los flujos de usuario importantes estén bien testeados 🎯
- Usar reportes de cobertura (generados vía Vitest/Jest) como guía para identificar partes no testeadas del codebase, pero priorizar escribir tests _efectivos_ sobre simplemente aumentar el porcentaje de cobertura 📈

## Ejecución de Tests ▶️

Referirse a los scripts de `package.json` para los comandos para ejecutar tests (ej: `bun test`, `bun test:e2e`, `bun test:coverage`). Asegurar que los tests pasen en el pipeline de CI antes de mergear código ✨

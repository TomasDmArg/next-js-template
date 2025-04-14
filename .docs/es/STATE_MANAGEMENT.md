# Guías de Gestión de Estado 🧠

Gestionar el estado efectivamente es crucial para construir aplicaciones React escalables y mantenibles. Esta guía describe diferentes enfoques y proporciona orientación sobre cuándo usarlos dentro de este boilerplate. 📋

## Niveles de Estado 📊

Pensar en el estado en términos de su alcance y ciclo de vida:

1.  **Estado Local de Componente:** 🏠

    - **Qué:** Estado gestionado completamente dentro de un único componente
    - **Herramientas:** `useState`, `useReducer` ⚛️
    - **Cuándo usar:** Para estado que no necesita ser compartido con otros componentes (ej: valores de inputs de formulario, estados de toggle dentro de un componente específico, estado de interacción de UI como "¿está abierto el dropdown?") 🎯
    - **Pros:** Simple, colocado junto a la lógica del componente ✨
    - **Contras:** No es adecuado para estado compartido 🚫

2.  **Estado Compartido (vía Prop Drilling):** 🔄

    - **Qué:** Estado elevado a un componente ancestro común y pasado hacia abajo vía props
    - **Herramientas:** Props estándar de React ⚛️
    - **Cuándo usar:** Para compartir simple entre un padre y algunos descendientes directos o cercanos 🎯
    - **Pros:** Flujo de datos explícito ✨
    - **Contras:** Puede volverse engorroso ("prop drilling") si el estado necesita pasar por muchos componentes intermedios 🚫

3.  **Estado de Contexto:** 🌐

    - **Qué:** Estado compartido a través de un subárbol de componentes sin prop drilling explícito
    - **Herramientas:** `React.createContext`, `useContext` ⚛️
    - **Cuándo usar:** Para actualizaciones de baja frecuencia de estado necesario por muchos componentes en un subárbol (ej: información de tema, estado de autenticación de usuario, preferencia de idioma) 🎯
    - **Pros:** Evita prop drilling para consumidores profundamente anidados ✨
    - **Contras:** Puede causar problemas de rendimiento si el valor del contexto se actualiza frecuentemente, ya que todos los componentes consumidores podrían re-renderizarse. Mejor para datos relativamente estables 🚫

4.  **Librerías de Gestión de Estado Global:** 🌍

    - **Qué:** Librerías dedicadas para gestionar estado a nivel de aplicación accesible desde cualquier lugar
    - **Herramientas:** Zustand, Jotai, Redux Toolkit 🛠️
    - **Cuándo usar:** Para estado complejo necesario en muchas partes no relacionadas de la aplicación, o cuando se requiere control fino sobre actualizaciones y rendimiento 🎯
    - **Pros:** Lógica de estado centralizada, herramientas de desarrollo potentes, a menudo optimizadas para rendimiento (ej: selectores que previenen re-renderizados innecesarios) ✨
    - **Contras:** Agrega complejidad y boilerplate comparado con métodos más simples. Elegir una librería que se ajuste a la escala del proyecto y familiaridad del equipo 🚫

5.  **Librerías de Gestión de Estado de Servidor:** 🌐
    - **Qué:** Librerías específicamente diseñadas para gestionar el estado relacionado con la obtención de datos, caché, sincronización y actualizaciones con un servidor
    - **Herramientas:** React Query (TanStack Query), SWR 🛠️
    - **Cuándo usar:** **Fuertemente recomendado** para gestionar datos obtenidos de APIs. Maneja caché, re-obtención en segundo plano, mutaciones (incluyendo actualizaciones optimistas), estados de carga/error, etc., simplificando significativamente la lógica de obtención de datos 🎯
    - **Pros:** Reduce boilerplate para obtención de datos, mejora el rendimiento a través de caché, mejora la experiencia de usuario con features como stale-while-revalidate ✨
    - **Contras:** Otra dependencia para aprender, pero los beneficios usualmente superan el costo para aplicaciones que interactúan fuertemente con APIs 🚫

## Recomendaciones 💡

- **Empezar Local:** Mantener el estado lo más local posible inicialmente 🏠
- **Elevar Estado:** Elevar el estado solo cuando sea necesario para compartir 🔄
- **Usar Contexto con Moderación:** Preferir Context para datos globales de baja frecuencia y relativamente estables como temas o estado de autenticación 🌐
- **Adoptar Librerías de Estado de Servidor:** Usar React Query o SWR para gestionar estado de datos de API. A menudo elimina la necesidad de soluciones complejas de estado global para datos de servidor 🌍
- **Considerar Librerías Globales para Estado de UI Complejo:** Si se tiene estado de UI complejo a nivel de aplicación que _no está_ directamente vinculado a datos de servidor, entonces librerías como Zustand o Jotai pueden ser beneficiosas 🎨

Elegir el enfoque más simple que cumpla con los requisitos primero, y escalar a soluciones más complejas solo cuando sea necesario 🎯

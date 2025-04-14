# Guía del Sistema y Formato de Tickets 🎫📝

Este documento describe el formato recomendado para crear e interpretar tareas de desarrollo (tickets) dentro de nuestro sistema de gestión de proyectos (por ejemplo, Jira, GitHub Issues, Linear). Un formato de ticket consistente mejora la claridad, reduce la ambigüedad y facilita flujos de desarrollo más fluidos.

Principalmente usamos un formato inspirado en **Historias de Usuario** y **Casos de Uso**.

## Entendiendo los Componentes de un Ticket 🧩

Un ticket bien definido típicamente incluye:

- **Título:** 📌 Resumen claro y conciso de la tarea.
- **Descripción:** 📄 Explica el objetivo desde la perspectiva del usuario (Historia de Usuario) o describe el flujo de interacción (Caso de Uso).
- **Criterios de Aceptación (AC):** ✅ Condiciones específicas y medibles que deben cumplirse para que la tarea se considere completa desde una perspectiva de usuario/negocio.
- **Requisitos Técnicos:** 🔧 Requisitos no funcionales o restricciones técnicas (rendimiento, estilo, linting, consistencia de plataforma, etc.).
- **Casos de Prueba / Escenarios:** 🧪 Pasos específicos o escenarios para verificar la funcionalidad (pueden ser de alto nivel o detallados).

## Plantilla 1: Formato de Historia de Usuario 👤

Esto es ideal para funcionalidades o cambios que impactan directamente la experiencia del usuario final.

### Descripción 📝 📋

```
Como [tipo de usuario/rol]
Quiero [realizar alguna acción]
Para [poder lograr algún objetivo/beneficio]
```

### Criterios de Aceptación ✓

- [Define las condiciones específicas para el éxito. ¿Qué debe ser verdadero para que la historia se considere terminada?]
- [Ejemplo: El usuario ve un mensaje de confirmación después de enviar exitosamente.]
- [Ejemplo: Se muestra un mensaje de error si la entrada no es válida.]
- [...]

### Requisitos Técnicos 🛠️

- Mantener consistencia con los temas claro y oscuro.
- Asegurar el funcionamiento y visualización adecuados en dispositivos de escritorio y móviles.
- Implementar las traducciones necesarias (si corresponde).
- Evitar impactos negativos en el rendimiento del sitio.
- No introducir cambios fuera del alcance de este ticket.
- El código debe pasar las verificaciones de linting (`bun run lint`).
- El código debe pasar las verificaciones de compilación (`bun run build`).
- [Agregar cualquier otra restricción técnica relevante]

### Casos de Prueba / Escenarios 🔍

- [Escenario 1: Describir los pasos y el resultado esperado.]
- [Escenario 2: Describir un flujo alternativo o caso límite.]
- [...]

---

## Plantilla 2: Formato de Caso de Uso 📊

Esto puede ser útil para describir interacciones o flujos específicos del sistema, a veces involucrando múltiples pasos o actores.

### Título 🏷️

[Breve descripción del objetivo del caso de uso]

### Actor(es) Principal(es) 🎭

- [Rol de usuario principal o sistema que desencadena la acción]

### Descripción

[Breve resumen de la interacción y objetivo]

### Flujo Principal (Camino Feliz) 🛣️

1.  [Paso 1: Acción del actor]
2.  [Paso 2: Respuesta del sistema o siguiente acción]
3.  [...]

### Flujos Alternativos / Casos Límite 🔄

- **Escenario A:** [Descripción de un camino alternativo o condición de error]
    1.  [Paso 1]
    2.  [...]
- **Escenario B:** [...]

### Requisitos de Seguridad (Si corresponde) 🔒

- [Especificar cualquier restricción o verificación relacionada con la seguridad]

### Requisitos Técnicos

- Mantener consistencia con los temas claro y oscuro.
- Asegurar el funcionamiento y visualización adecuados en dispositivos de escritorio y móviles.
- Implementar las traducciones necesarias (si corresponde).
- Evitar impactos negativos en el rendimiento del sitio.
- No introducir cambios fuera del alcance de este ticket.
- El código debe pasar las verificaciones de linting (`bun run lint`).
- El código debe pasar las verificaciones de compilación (`bun run build`).
- [Agregar cualquier otra restricción técnica relevante]

---

## Leyendo los Tickets 👓

Cuando tomás un ticket:

1.  **Leé el Título y la Descripción:** 📌 Entendé el objetivo general.
2.  **Revisá los Criterios de Aceptación:** ✅ Estos son los requisitos _mínimos_ para completarlo desde una perspectiva funcional.
3.  **Verificá los Requisitos Técnicos:** 🔧 Asegurate de entender las restricciones no funcionales.
4.  **Considerá los Casos de Prueba/Escenarios:** 🧪 Usalos para guiar tu desarrollo y pruebas.
5.  **Hacé Preguntas:** 💬 Si algo no está claro, consultá con el Product Owner, Tech Lead o creador del ticket _antes_ de comenzar el desarrollo.

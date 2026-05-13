---
title: "Cosas que desearía haber sabido antes de usar Supabase"
description: "algunas notas sobre Supabase"
pubDate: 2026-05-11
heroImage: "/assets/images/posts/2026-05-11-supabase-lessons/supabase-logo-wordmark--light.svg"
heroImageForList: "/assets/images/posts/2026-05-11-supabase-lessons/supabase-logo-icon.svg"
heroImageFit: "contain"
heroImageAlt: "Supabase logo"
lang: "es"
---

Supabase es un BaaS (backend como servicio) que usa Postgres como su base de datos. Proporciona una API REST basada en tu esquema SQL lista para usar.

Aquí hay algunas cosas que aprendí mientras construía mis aplicaciones con él:

### 1. Row Level Security es algo importante

Aunque esto no es de Supabase sino del propio Postgres, aquí se aplica obligatoriamente a menos que digas lo contrario. Necesitas agregar políticas o deshabilitar RLS (si vas a manejar el acceso de otra manera) porque sin política no hay acceso y por diseño no obtendrás ningún error sino una lista vacía, lo cual lo hace difícil de depurar al principio.

### 2. Desarrollo Local vs Dashboard
Puedes beneficiarte de una configuración local para probar cosas. Usa Docker y toma un tiempo descargar todas las imágenes necesarias la primera vez.

En el momento que lo intenté, había problemas con vector y analytics así que terminé deshabilitándolos. Pero por ahora, ambos funcionan bien localmente. Me pareció útil saber cómo deshabilitar características innecesarias y empezar ligero.

Esto se puede hacer usando los argumentos del CLI:
```bash
npx supabase start -x storage,vector
```

o configurando el archivo `supabase.toml`:
```toml
[storage]
enabled = false

[analytics]
enabled = false
```

Hay un [issue cerrado sobre el fallo de vector](https://github.com/supabase/cli/issues/2538) de donde tomé esta solución temporal.

### 3. Migraciones y Sincronización Local

Las migraciones son el historial de los cambios que tuvo el esquema, lo que sumado a un sistema de control de versiones las hace geniales. Puedes rastrear cambios y revertirlos si es necesario.

Las migraciones son algo que una vez entendido hacen que el desarrollo de la base de datos sea predecible y testeable. Aunque hay algunas preocupaciones sobre migraciones repetibles y no repetibles, proporcionan una forma de rastrear cambios de esquema y volver a un estado anterior si algo sale mal. Pero es tu deber revisar los diffs de las migraciones.

Me gusta tener algunas migraciones autocontenidas, eliminando todas las cosas que crean. Esto me ayuda a iterar en una antes de hacer commit, de esa manera puedo editarla y aplicarla en diferentes entornos antes de desplegar a prod.

### 4. Apóyate en tu conocimiento de Postgres

Siempre estuve a favor de cualquier cosa que me permitiera escribir SQL para mi backend. Un ORM que me gusta mucho es JOOQ porque todo está orientado a Java pero se asemeja a las consultas SQL. Esto es lo que estaba buscando en Supabase pero adaptado a Typescript, y fue lo que encontré.

Cuando necesito algo más que obtener datos de tablas con objetos simples, intento aprovechar el hecho de que puedes hacer join de tablas en las consultas. Para algunas cosas me gusta que ocurran más acciones a la vez, usé llamadas a procedimientos escritos en pl/pgsql, que es el lenguaje procedimental de Postgres, básicamente SQL enriquecido con sintaxis de lenguaje de programación para permitir lógica más compleja. Me pareció práctico en las primeras etapas construir en Javascript, pero a costa de más tráfico de red y retraso para obtener el resultado.

### 5. DTOs vs. Tipos Generados

Lo usé por un tiempo sin tipos generados y realmente extrañé el autocompletado, aunque para mi caso de uso estaba bien escribiéndolos yo mismo contra el costo de actualizarlos. Planeo usar tipos generados para un nuevo proyecto.

Supabase tiene su propio comando CLI para generar todos los tipos de tu base de datos. `npx supabase gen types typescript --project-id TU_PROJECT_REF --schema public --out-dir lib/database`.

### Resumen
Supabase es una gran herramienta para construir alrededor de una base de datos realmente rápido. Obtienes todo el poder de Postgres y una API REST que puedes consumir fácilmente en tu proyecto. Definitivamente lo recomiendo.

### Recursos Útiles

Aquí hay algunos recursos adicionales que encontré muy útiles mientras aprendía y trabajaba con Supabase:
- [Un gran hilo de Reddit sobre lecciones de Supabase](https://www.reddit.com/r/Supabase/s/NsdRMejSMx)
- [Control de Acceso Basado en Roles de Supabase (RBAC) - YouTube](https://www.youtube.com/watch?v=kwoKmi6inAw&t=572s&ab_channel=Supabase)
- [Custom Claims & RBAC - Docs de Supabase](https://supabase.com/docs/guides/auth/custom-claims-and-role-based-access-control-rbac?utm_source=youtube&utm_medium=video&utm_campaign=youtube&utm_content=kwokmi6inaw)
- [Ejemplo de Slack Clone con RBAC](https://github.com/supabase/supabase/tree/master/examples/slack-clone/nextjs-slack-clone)
- [Generando Tipos para tu API - Docs de Supabase](https://supabase.com/docs/guides/api/rest/generating-types)
- [¡SINCRONIZADO! Flujo de Trabajo local fácil de Supabase - YouTube](https://www.youtube.com/watch?v=nyX_EygplXQ)

Mantente atento para más.

---
title: "Explorando Supabase Realtime: Un Playground con Todo & Juego"
description: "Una inmersión rápida en las funcionalidades Realtime de Supabase con una app de notas todo y un pequeño juego."
heroImageForList: "/assets/images/posts/2026-05-31-supabase-realtime/pixelsync.png"
pubDate: 2026-05-31
lang: "es"
---

Algunas cosas necesitan una actualización en tiempo real muy rápida y estuve investigando lo que Supabase ofrece para incorporar esta funcionalidad en proyectos reales. Ya lo incorporé en otros proyectos, pero empecé a usar esta funcionalidad hace poco.

### Lo que construí
<div class="img-row">
<img src="/assets/images/posts/2026-05-31-supabase-realtime/todo.png" alt="Supabase Realtime todo app" />
<img src="/assets/images/posts/2026-05-31-supabase-realtime/pixelsync.png" alt="Supabase Realtime game" />
</div>

Creé una sencilla aplicación de notas Todo que se sincroniza instantáneamente entre clientes usando Supabase Realtime. Además, añadí una pequeña demo de juego multijugador para mostrar el seguimiento de cursor en tiempo real y la difusión de estado. Este es mi repositorio playground para probar funcionalidades de Supabase.

### Observaciones
- **Postgres changes** son fáciles de configurar y usar aplicando RLS. En el nivel gratuito no hay garantía de cuántos cambios de Postgres se emiten y eso puede hacer que algunos cambios pasen desapercibidos.
- **Broadcast** es mejor en términos de fiabilidad. Necesita un poco más de configuración que Postgres changes pero vale la pena.
- **Presence** no siempre se envía, puede verse afectado por cambios de red y no todos los clientes se verán entre sí. Necesito explorar más esto.

### Cómo probarlo

**Todo** https://luismtapiab.github.io/supabase-ng-realtime-todo

**Juego** https://luismtapiab.github.io/supabase-ng-realtime-todo/game

o

1. Clona el repositorio: `git clone https://github.com/luismtapiab/supabase-ng-realtime-todo`
2. Sigue el README para configurar las credenciales de Supabase.
3. Enlaza tu instancia de Supabase y ejecuta las migraciones con `supabase db push`.
4. Ejecuta `pnpm install && pnpm dev` y abre la aplicación en tu navegador.

Justo esta semana lo usé para emitir cambios de stock en un sistema de inventario. La parte más importante para mi caso de uso actual está cubierta por Broadcast y Supabase RLS (parte de por qué creé este playground para replicar las condiciones del proyecto).

Puedo dar fe de que el realtime funciona muy bien en circunstancias normales, pero como siempre recomendaré revisar la documentación y el código, siempre es una buena fuente de aprendizaje.

**algunos recursos:**
- https://supabase.com/realtime
- https://supabase.com/docs/guides/realtime/authorization?queryGroups=language&language=js
- https://supabase.com/blog/supabase-realtime-multiplayer-general-availability
- https://supabase.com/docs/guides/realtime/presence

- https://www.freecodecamp.org/news/how-to-build-a-realtime-chat-app-with-angular-20-and-supabase/
- Porque angular y supabase: https://christianlydemann.com/supabase-and-angular-a-powerful-combination-for-building-web-applications/


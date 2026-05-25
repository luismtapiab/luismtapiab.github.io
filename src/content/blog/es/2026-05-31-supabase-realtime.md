---
title: "Explorando Supabase Realtime: Un Playground con Todo & Juego"
description: "Una inmersión rápida en las funcionalidades Realtime de Supabase con una app de notas todo y un pequeño juego."
pubDate: 2026-05-31
lang: "es"
---

<img src="/assets/images/posts/2026-05-31-supabase-realtime/logo.png" alt="Supabase Realtime playground" class="centered" />

**Introducción**: Algunas cosas necesitan una actualización en tiempo real muy rápida y estuve investigando lo que Supabase ofrece. Encontré varias cosas interesantes y también jugué un poco, así que aquí tienes mi playground.

### Lo que construí

Creé una sencilla aplicación de notas Todo que se sincroniza instantáneamente entre clientes usando Supabase Realtime. Además, añadí una pequeña demostración de juego multijugador para mostrar el seguimiento de cursor en tiempo real y la difusión de estado.

### Observaciones

- **Broadcast** es mejor en términos de fiabilidad. En el nivel gratuito no hay garantía de cuántos cambios de Postgres se emiten.
- La latencia es baja, pero los picos de escritura pueden alcanzar el límite del plan gratuito.


### Cómo probarlo

[App Todo & Juego](https://luismtapiab.github.io/supabase-ng-realtime-todo)

https://luismtapiab.github.io/supabase-ng-realtime-todo

<img src="/assets/images/posts/2026-05-31-supabase-realtime/todo.png" alt="Supabase Realtime Todo app" class="centered" />

https://luismtapiab.github.io/supabase-ng-realtime-todo/game

<img src="/assets/images/posts/2026-05-31-supabase-realtime/pixelsync.png" alt="Supabase Realtime game" class="centered" />


o

1. Clona el repositorio: `git clone https://github.com/luismtapiab/supabase-ng-realtime-todo`
2. Sigue el README para configurar las credenciales de Supabase.
3. Enlaza tu instancia de Supabase y ejecuta la migración `supabase db push`
4. Ejecuta `pnpm install && pnpm dev` y abre la aplicación en tu navegador.

¡Siéntete libre de experimentar y házmelo saber lo que descubras!

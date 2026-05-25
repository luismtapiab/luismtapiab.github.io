---
title: "Exploring Supabase Realtime: A Todo & Game Playground"
description: "A quick dive into Supabase Realtime features with a playful todo-note app and a small game."
heroImageForList: "https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/supabase.svg"
pubDate: 2026-05-31
lang: "en"
---

<img src="/assets/images/posts/2026-05-31-supabase-realtime/logo.png" alt="Supabase Realtime playground" class="centered" />

**Intro**: Some things need fast realtime update and I was looking into what Supabase offers. I found some things worth noting but also played a little, so here is my playground.

### What I Built

I created a simple Todo note app that syncs instantly across clients using Supabase Realtime. Additionally, I added a tiny multiplayer game demo to showcase real‑time cursor tracking and state broadcasting.

### Observations

- **Broadcast** is better in terms of reliability. In the free tier there’s no guarantee how many Postgres changes are emitted.
- Latency is low, but heavy write bursts can hit the throttle on the free plan.

### How to Try It

[App Todo & Juego](https://luismtapiab.github.io/supabase-ng-realtime-todo)

https://luismtapiab.github.io/supabase-ng-realtime-todo

<img src="/assets/images/posts/2026-05-31-supabase-realtime/todo.png" alt="Supabase Realtime Todo app" class="centered" />

https://luismtapiab.github.io/supabase-ng-realtime-todo/game

<img src="/assets/images/posts/2026-05-31-supabase-realtime/pixelsync.png" alt="Supabase Realtime game" class="centered" />


or

1. Clone the repo: `git clone https://github.com/luismtapiab/supabase-ng-realtime-todo`
2. Follow the README to set up Supabase credentials.
3. Link your supabase instance and run the migration `supabase db push`
4. Run `pnpm install && pnpm dev` and open the app in your browser.

Feel free to experiment and let me know what you discover!

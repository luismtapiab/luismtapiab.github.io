---
title: "Exploring Supabase Realtime: A Todo & Game Playground"
description: "A quick dive into Supabase Realtime features with a playful todo-note app and a small game."
heroImageForList: "/assets/images/posts/2026-05-31-supabase-realtime/pixelsync.png"
pubDate: 2026-05-31
lang: "en"
---

Some things need fast realtime update and I was looking into what Supabase offers to incorporate this feature in actual projects. I already incorpored it to other projects, but started using this feature quite recently.

### What I Built
<div class="img-row">
<img src="/assets/images/posts/2026-05-31-supabase-realtime/todo.png" alt="Supabase Realtime todo app" />
<img src="/assets/images/posts/2026-05-31-supabase-realtime/pixelsync.png" alt="Supabase Realtime game" />
</div>

I created a simple Todo note app that syncs instantly across clients using Supabase Realtime. Additionally, I added a tiny multiplayer game demo to showcase real‑time cursor tracking and state broadcasting. This is my playground repo for testing Supabase features.

### Observations
- **Postgres changes** are easy to set up and use enforcing RLS.  In the free tier there’s no guarantee how many Postgres changes are emitted and that can make some changes go unnoticed.
- **Broadcast** is better in terms of reliability. It needs a bit more configuration than Postgres changes but is worth it.
- **Presence** is not always sent, can be affected by network changes and not all clients will see each other. I need further exploration on this.

### How to Try It

**Todo** https://luismtapiab.github.io/supabase-ng-realtime-todo

**Game** https://luismtapiab.github.io/supabase-ng-realtime-todo/game

or

1. Clone the repo: `git clone https://github.com/luismtapiab/supabase-ng-realtime-todo`
2. Follow the README to set up Supabase credentials.
3. Link your supabase instance and run the migrations with `supabase db push`.
4. Run `pnpm install && pnpm dev` and open the app in your browser.

Just this week i used for emitting changes of stock in an inventory system. The most important part for my use case right now is covered by Broadcast and Supabase RLS (part of why I created this playground to replicate the conditions of the project).

I can attest the realtime works great under normal circumstances, but as always I'll recomend to check docs and the code, it's always a good source of learning.

**some resources:**
- https://supabase.com/realtime
- https://supabase.com/docs/guides/realtime/authorization?queryGroups=language&language=js
-https://supabase.com/blog/supabase-realtime-multiplayer-general-availability
-https://christianlydemann.com/
-https://supabase.com/docs/guides/realtime/presence
- https://www.freecodecamp.org/news/how-to-build-a-realtime-chat-app-with-angular-20-and-supabase/
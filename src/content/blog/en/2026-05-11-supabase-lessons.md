---
title: "Things I wish I knew before using Supabase"
description: "some notes about Supabase"
pubDate: 2026-05-11
heroImage: "/assets/images/posts/2026-05-11-supabase-lessons/supabase-logo-wordmark--light.svg"
heroImageForList: "/assets/images/posts/2026-05-11-supabase-lessons/supabase-logo-icon.svg"
heroImageFit: "contain"
heroImageAlt: "Supabase logo"
lang: "en"
---

Supabase is a BaaS (backend as a service) that uses Postgres as its database. It provides a REST API based on your SQL schema ready to use.

Here are a few things I learned while building my apps with it:

### 1. Row Level Security is a big thing

Although this is not from Supabase but Postgres itself, here it is enforced unless you say otherwise. You need to add policies or disable RLS (if you are gonna handle access another way) because no policy means no access and by design you won't get any error but an empty list, which makes it tricky to debug at first.

### 2. Local development vs Dashboard
You can benefit from a local setup to test things. It uses Docker and takes a while to download all the images needed for the first time.

At the moment I tried, there were issues with vector and analytics so I ended up disabling them. But by now, both are working fine locally. I found it useful to know how to disable unnecessary features and start light.

This can be done using the CLI arguments:
```bash
npx supabase start -x storage,vector
```

or by configuring the `supabase.toml` file:
```toml
[storage]
enabled = false

[analytics]
enabled = false
```

There's an [closed issue about vector crash](https://github.com/supabase/cli/issues/2538) from where I took this workaround.

### 3. Migrations and Local Sync

Migrations are the history of what changes the schema had, that paired with a version control system makes them great. You can track changes and revert them if needed.

Migrations are something that once understood make the database development predictable and testable. Although there are some concerns about repeatable and non-repeatable migrations, it provides a way to track schema changes and roll back to a previous state if something goes wrong. But you are on duty to review the migration diffs. 

I like to have some migrations auto contained, by removing all the things they create. This helps me iterate on one before committing, that way I can edit and apply it on different environments before deploying to prod.  

### 4. Lean into your Postgres knowledge

I was always rooting for anything that let me write SQL for my backend. One ORM that I really like is JOOQ because everything is Java oriented but resembles SQL queries. This is what I was looking for in Supabase but adapted to Typescript, and was what I found.

When I need something else than getting data from tables with simple objects, I try to leverage the fact that you can join tables in the queries. For some things I like to have more actions happen at once, I used procedure calls written in pl/pgsql, which is Postgres's procedural language, basically SQL enriched with programming language syntax to allow more complex logic. I found it practical in the early stages to build in Javascript, but at the cost of more network traffic and delay to get the result. 


### 5. DTOs vs. Generated Types

I used it for a while without generated types and I really missed the autocompletion, although for my use case I was fine writing them myself against the cost to update them. I plan to use generated types for a new project.

Supabase has its own CLI command to generate all the types from your database. `npx supabase gen types typescript --project-id YOUR_PROJECT_REF --schema public --out-dir lib/database`.

### Summary
Supabase is a great tool to build around a database really fast. You get all the power of Postgres and a REST API you can easily consume in your project. I definitely recommend it.

### Useful Resources

Here are some extra resources I found very useful while learning and working with Supabase:
- [A great Reddit thread on Supabase lessons](https://www.reddit.com/r/Supabase/s/NsdRMejSMx)
- [Supabase Role-Based Access Control (RBAC) - YouTube](https://www.youtube.com/watch?v=kwoKmi6inAw&t=572s&ab_channel=Supabase)
- [Custom Claims & RBAC - Supabase Docs](https://supabase.com/docs/guides/auth/custom-claims-and-role-based-access-control-rbac?utm_source=youtube&utm_medium=video&utm_campaign=youtube&utm_content=kwokmi6inaw)
- [Slack Clone Example with RBAC](https://github.com/supabase/supabase/tree/master/examples/slack-clone/nextjs-slack-clone)
- [Generating Types for your API - Supabase Docs](https://supabase.com/docs/guides/api/rest/generating-types)
- [SYNCED! Easy local Supabase Workflow - YouTube](https://www.youtube.com/watch?v=nyX_EygplXQ)

Stay tuned for more.

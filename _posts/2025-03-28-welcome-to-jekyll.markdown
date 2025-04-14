---
layout: post
title:  "Learning Angular"
date:   2025-04-12 19:00:22 -0400
categories: learning
---

I'm currently being part of a startup and we decided on using Angular so I started learning it. I have listenend great things before and specially about the newest versions.

I was retiscent at the start because I had great time with React and I'm relearning some basics I skipped before about vanilla web development HTML, CSS, JS.

But I catch up quickly. there's something Angular does well I'm pretty sure some may appreciate like preconfigured and ready to be served without another thing also if you use SSR the express server comes ready


### Deployings 
There is some considerations about secrets that arent in the default Angular config, one should chose its prefered way to handle this. As we know secrets are never going to be on th esource code. 

There is what I used until now:
## Vercel
Little to nothing to add here, 

## githubPages
The newest Angular docs suggest using the `angular-gh-pages` package but before there was a way of doing with a regular build

Github pagesd is not configurable like other servers so they warn about this and remcommend coping the index.html into 404.html

Som things I had to configure was the output directory without wich a browser subfolder were created, a bad choice some say but benefits the change when one opts in for SSR.

```
    "builder": application

    "outputPath": {
        "base": "docs",
        "browser": "",
    }
    "browser": "main.ts",
```

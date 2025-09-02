---
layout: post
title:  "Learning Angular"
date:   2025-04-12 19:00:22 -0400
categories: learning
---

I'm currently being part of a startup and we decided on using Angular so I started learning it. I have listened and read great things before and specially about the newest version Angular 19.

I was skeptical at first because I had great time with React and I'm relearning some basics I skipped before about vanilla web development HTML, CSS, JS.

But I catch up quickly. there's something Angular does well I'm pretty sure some may appreciate like project structure and ready to be served without another thing also if you use SSR the express server comes ready.


### Deployment
There are some considerations about secrets that aren't in the default Angular config, one should chose its preferred way to handle this. As we know secrets are never going to be on the source code. 

There are some ways of deploying Angular apps, I used Vercel and githubPages.

## Vercel
Vercel is a great platform although there's no official example for Angular it works well.

Something to add here its if you want to load environment variables that could be tricky at first, you need to add them to the vercel project settings.

And also use other builders than the standard one, I used the `@angular-devkit/custom-webpack` builder.

with the next configuration

```json
"builder": "@angular-devkit/custom-webpack:browser",
"options": {
    "customWebpackConfig": {
        "path": "./extra-webpack.config.js",
    },
}
```

and in custom webpack, manage the desired variables to pass to the angular project

```ts
import { EnvironmentPlugin } from 'webpack';
import { config } from 'dotenv';

config();

module.exports = {
    plugins: [
      new EnvironmentPlugin({
        API_URL: 'no_url',
        ANON_KEY: 'no_key',
        DEVELOPMENT: false
      })
    ]
}
```

<!-- todo add environment details -->


## Github Pages
The newest Angular docs suggest using the `angular-gh-pages` package but before there was a way of doing with a regular build

Github pages is not configurable like other servers so they warn about this and recommend coping the index.html into 404.html

Some things I had to configure was the output directory without which a browser subfolder were created, a bad choice some say but benefits the change when one opts in for SSR.

```
    "builder": application

    "outputPath": {
        "base": "docs",
        "browser": "",
    }
    "browser": "main.ts",
```

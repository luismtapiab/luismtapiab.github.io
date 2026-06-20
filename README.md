# luismtapiab.github.io

My personal site — a bilingual space where I share who I am, what I build, and what I think about.

🌐 **[Visit the site →](https://luismtapiab.github.io)**

---

## About

I'm Luis Tapia, a software developer interested in compilers, medical informatics, and AI. This site is my corner of the internet — part portfolio, part blog, fully me.

It's available in **English and Spanish**, and covers topics like:
- Software development & architecture
- Learning stories behind my projects
- Thoughts on technology, medicine, and AI

## Stack

Built with [Astro](https://astro.build) and deployed on GitHub Pages.

## Dev

```sh
npm install
npm run dev     # localhost:4321
npm run build   # production build
```

## Docker (optional)

Build a Docker image that produces the same static output as GitHub Pages and serves it with nginx:

```bash
# build image (run from repo root)
docker build -t luistapia-site:latest .

# run container (map port 80 -> container 80)
docker run --rm -p 80:80 luistapia-site:latest
```

The site will be available at http://localhost. The Docker build runs `pnpm build`, which also regenerates the PDFs into `public/assets`.


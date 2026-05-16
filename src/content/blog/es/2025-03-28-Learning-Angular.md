---
title: "Aprendiendo Angular"
description: "Mi experiencia aprendiendo Angular 19 y consejos de despliegue."
pubDate: 2025-04-12
heroImage: "/assets/images/posts/2025-03-28-Angular/angular_wordmark_gradient.png"
heroImageForList: "/assets/images/posts/2025-03-28-Angular/angular_gradient.png"
heroImageFit: "contain"
lang: "es"
---

Actualmente soy parte de una startup y decidimos usar Angular, así que comencé a aprenderlo. Había escuchado y leído cosas geniales antes, y especialmente sobre la versión más nueva, Angular 19.

Al principio era escéptico porque la había pasado muy bien con React y estoy volviendo a aprender algunos conceptos básicos que había omitido antes sobre el desarrollo web vanilla HTML, CSS, JS.

Pero me puse al día rápidamente. Hay algo que Angular hace bien y estoy bastante seguro de que algunos apreciarán, como la estructura del proyecto y que está listo para ser servido. Además, si usas SSR, el servidor Express ya viene listo.

### Despliegue
Hay algunas consideraciones sobre los secretos (variables de entorno) que no están en la configuración predeterminada de Angular. Como sabemos, los secretos nunca deben estar en el código fuente.

Hay algunas formas de desplegar aplicaciones Angular, yo utilicé Vercel y GitHub Pages.

## Vercel
Vercel es una gran plataforma, y aunque no hay un ejemplo oficial para Angular, funciona bien.

Si deseas cargar variables de entorno, puede ser complicado al principio — necesitas agregarlas a la configuración del proyecto en Vercel.

También debes usar otros constructores (builders) que no sean el estándar. Yo usé el constructor `@angular-devkit/custom-webpack`:

```json
"builder": "@angular-devkit/custom-webpack:browser",
"options": {
    "customWebpackConfig": {
        "path": "./extra-webpack.config.js",
    },
}
```

y en custom webpack, administrar las variables deseadas para pasarlas al proyecto Angular:

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

## Github Pages
La documentación más reciente de Angular sugiere usar el paquete `angular-gh-pages`, pero antes había una forma de hacerlo con un build regular.

Github Pages no es configurable como otros servidores, por lo que advierten sobre esto y recomiendan copiar el archivo `index.html` en `404.html`.

Algunas cosas que tuve que configurar fueron el directorio de salida, sin el cual se creaba una subcarpeta del navegador (browser), una mala elección dirán algunos, pero beneficia el cambio cuando uno opta por usar SSR.

```
    "builder": application

    "outputPath": {
        "base": "docs",
        "browser": "",
    }
    "browser": "main.ts",
```

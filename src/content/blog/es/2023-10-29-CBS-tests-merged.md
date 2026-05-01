---
title: "Pruebas de CBS fusionadas"
description: "Contribución a la documentación de CBS y reflexiones sobre semántica ejecutable."
pubDate: 2023-10-29
heroImage: "/assets/images/posts/2023-10-29-CBS/workflow.jpg"
lang: "es"
---

Escribí una entrada sobre pruebas para el framework de especificación de lenguajes de programación CBS. Significa algo para mí porque no solo obtuve mi título, sino que una parte del trabajo que realicé fue lo suficientemente útil como para permanecer en la documentación oficial.

Hoy, mientras leía algunos correos electrónicos, de repente reconocí un nombre de PLanCompS y un texto que decía "PR Aprobado". Resulta que una contribución que había hecho hace unos meses a la documentación de CBS fue fusionada sin que me diera cuenta.

El semestre pasado estaba terminando mi tesis de pregrado sobre la semántica ejecutable del framework CBS, escribiendo mi propio lenguaje de juguete con él. Tuve que leer mucho y también probar con las herramientas reales del framework.

En resumen, CBS se basa en pequeños componentes (`funcons`) que describen una pequeña parte del comportamiento del lenguaje y trabajan juntos de manera componible.

Por ejemplo, a continuación se muestra el funcon `if-true-else`, su firma es muy similar a la de una función.

<pre><code>Funcon 
  if-true-else(_:booleans, _:=>T, _:=>T) : =>T 
Alias
  if-else = if-true-else
/*
  `if-true-else(B, X, Y)` evalúa `B` a un valor Booleano, luego se reduce
  a `X` o `Y`, dependiendo del valor de `B`.
*/
Rule
  if-true-else(true, X, Y) ~> X
Rule
  if-true-else(false, X, Y) ~> Y
</code></pre>

Las herramientas permiten al diseñador generar un intérprete funcional basado en una especificación compacta. Dado que las partes que componen un lenguaje podrían estar también en otros, este enfoque fomenta la reutilización. El flujo de trabajo (mostrado al principio) describe cuatro etapas de generación de programas; cada etapa utiliza las herramientas generadas en la anterior. El enfoque para el diseñador está en las dos últimas: escribir la especificación que genera un traductor a funcons y usar ese traductor seguido por el intérprete de funcons para finalmente ejecutar el programa.

Pude escribir mi pequeño lenguaje comenzando solo con expresiones, y luego agregando más cosas una por una: declaración y asignación de variables, control de flujo y llamadas a funciones como última característica. Puedes echarle un vistazo a continuación: [mi lenguaje de juguete TL](https://github.com/luismtapiab/TL-cbs) con una lista de verificación completa de características. Se parece un poco a Kotlin por coincidencia.
<!-- TODO be more especific? -->

Me entusiasmé tanto que escribí mis propios `funcons`. Fue útil para entender cómo extender la biblioteca actual de `funcons`. Esto también significa que llegué a la parte de generar un intérprete de funcons extendiendo el proporcionado, lo cual no estaba en los objetivos del estudio pero era algo que me debía a mí mismo. Puede que no describan el comportamiento de otros lenguajes, como se discutió con el Prof. Mosses de PLanCompS.

Estoy feliz de expandir mi comprensión de los lenguajes de programación. Creo firmemente en la mejora de las especificaciones de los lenguajes de programación y reconozco que, aunque todavía queda un largo camino por recorrer, estamos parados sobre hombros de gigantes para estar donde estamos ahora.

Tuve una gran experiencia con el equipo de PLanCompS que está detrás de este desarrollo, brindan apoyo sobre los antecedentes necesarios y el material de lectura.

<!-- Todo: fix examples link-->
Recomiendo revisar [CBS home](https://plancomps.github.io/CBS-beta/math/Funcons-beta/index.html), [Notation](https://plancomps.github.io/CBS-beta/docs/Notation.html) y sus [ejemplos de especificación](). Una buena lectura para empezar con la semántica formal es [Winskell's Formal Semantics of Programming Languages](https://mitpress.mit.edu/9780262731034/the-formal-semantics-of-programming-languages).

Mantente curioso.

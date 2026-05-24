---
title: "Cómo Construir un Compilador Me Hizo Mejor Programador"
description: ""
pubDate: 2026-05-24
lang: "es"
---

La idea de construir un compilador para un lenguaje de programación era asombrosa en los primeros años, mis compañeros y yo solíamos ver a la gente que hacía algo así como locos. De hecho, casi repruebo el curso de parsers hasta que me obligué a completar los ejercicios del libro, y saqué la nota máxima en mi examen final. No imaginaba que terminaría construyendo uno (en realidad dos) antes de graduarme ni el impacto que tendría en mi viaje de programación.

<img src="/assets/images/posts/2026-05-24-compilers/compilacion.svg" alt="compilation phases and docs" class="centered"/>

Mi amor por los compiladores no vino de ese primer curso sino del siguiente que tuve la fortuna de tomar pese al encierro obligatorio por la pandemia, llamado Diseño de Compiladores y nuestro profesor fue Pablo Azero, quien fue un gran guía para nosotros en este tema. El proyecto principal era implementar un compilador para un subconjunto de Java hacia SSM, una máquina virtual simple que tenía instrucciones como push, pop, add, sub, mult, div, call, ret, etc.

Primero cada uno estuvo haciendo un parser para una gramática dada, algún subconjunto de Java, y luego los intercambiamos para llegar a una buena solución, pero cada uno siguió trabajando en el suyo hasta el final. Recuerdo ver cómo lo hacían mis compañeros y también cómo algunas partes de mi solución se usaron en el núcleo de los parsers de mis compañeros. Leíamos fuera de clase y cada semana veníamos con la tarea y empezábamos a revisar los problemas que todos tenían y a compartir nuestros enfoques. Recuerdo que no se sentía como si el profesor nos estuviera evaluando, sino ayudándonos a construir una mejor solución; eso me hizo disfrutar mucho el proceso. Hicimos pair programming con él también, tal vez pair debugging sea un nombre más apropiado para ello.

Aprendí mucho sobre análisis de nombres, análisis semántico, manejo de memoria, apilacion de alcances, obscuring, shadowing, generación de código, manejo de errores y más. Aún más importante, aprendí a pensar en el producto de un programa en términos de lo que hace.

Por supuesto mi nueva disposición a aprender hizo la diferencia, pero también la forma en que estaba diseñado el curso me ayudó mucho. Cuando pienso en un método de enseñanza que te hace disfrutar el proceso de aprendizaje, recuerdo el curso de compiladores. Quedaron pocas personas al final, pero los que se quedaron aprendieron lo máximo. Tengo pendiente crear un curso igualmente cautivador para mis estudiantes.

En mi tesis aprendí sobre nuevas técnicas para construir un compilador a partir de una breve especificación del lenguaje. Además, fue una gran experiencia usar un proyecto no revelado en ese momento, contactando a algunos autores y aprendiendo de ellos directamente. Algunas veces estuve perdido, pero puse todo mi esfuerzo para entender tanto teoria como practica que en este framework son sinonimos. Hablé antes sobre esto en una publicación anterior [CBS](/es/blog/2023-10-29-cbs-tests-merged/).

También fui oyente en algunos cursos que valen la pena revisar, recomiendo: el framework Spoofax [TU Delf Eelco visser Cs4200](https://tudelft-cs4200-2020.github.io/) y sobre técnicas de optimización [Cornell CS6120](https://www.cs.cornell.edu/courses/cs6120/2020fa/self-guided/). Debo admitir que solo me enfoqué en las partes que necesitaba en ese momento, y sé que hay más que aún no he aprendido pero me emociona estudiar más.

Construir un compilador es una excelente manera de aprender cómo funcionan los lenguajes de programación; te enseña a pensar en el producto de un programa en términos de lo que hace, no de cómo está escrito, e incluso si no terminas construyendo uno, aprender del proceso y los conceptos no puede hacer otra cosa que mejorarte como programador.

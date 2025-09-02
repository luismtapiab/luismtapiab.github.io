---
layout: post
title: CBS test merged
date: 2023-10-29
description: contribution to CBS documentation
tags: CBS
categories: metalanguages
asset_path: /assets/images/posts/2023-10-29-CBS/
---
I wrote an entry about test for the CBS programming language specification framework. It means something to me because not only I got my degree but a part of the work I made were helpful enought to stay in the docs. 

Today while reading some emails suddenly I recognized a name from PLanCompS and some text saying "PR Approved". Turns out a contribution I had made few months ago to the CBS documentation was merged without me noticing. 

Last semester I was finishing my undergraduate thesis about CBS framework executable semantics, writing my own toy language with it. I had a lot to read, and also to try with the actual tools of the framework.

To summarize, CBS relies in small components (`funcons`) that describe a little bit of the language behaviour and work togheter in a composable manner. 

For example below there is the `if-true-else` funcon, its signature is very similar to a function.

<!-- Show some funcons -->
<pre><code>Funcon 
  if-true-else(_:booleans, _:=>T, _:=>T) : =>T 
Alias
  if-else = if-true-else
/*
  `if-true-else(B, X, Y)` evaluates `B` to a Boolean value, then reduces
  to `X` or `Y`, depending on the value of `B`.
*/
Rule
  if-true-else(true, X, Y) ~> X
Rule
  if-true-else(false, X, Y) ~> Y
</code></pre>

The tools enable to the designer to generate a working interpreter based on a compact specification. Since the parts that make a language could be also in others this approach encourages reusability. The workflow below describes four stages of program generation every stage uses the tools generated in the previous one. The focus for the designer is on the last two, writing the specification that generates a translator to funcons and using that translator followed by the funcons interpreter to finally executing the program.
<!-- TODO add a image of the workflow -->
![CBS tools generation]({{ page.asset_path }}workflow.jpg "CBS tools generation workflow")

I was able to write my tiny language starting from just expressions, then adding more things one by one: declaration and asignment of variables, flow control and function calling as the least feature. You could checkout below: [my toy language TL](https://github.com/luismtapiab/TL-cbs) with a complete checklist of features. It resembles a little bit of Kotlin by coincidence.
<!-- TODO be more especific? -->

I got too much excited that I wrote my own `funcons`. It was helpful to understand how to extend the current `funcons` library. This also means I got to the part of generating an funcons intepreter extending the provided one wich wasn't on the objectives of the study but it was something I owed to myself. They may not describe other languages behaviour as was discussed with Prof. Mosses from PLanCompS.

I'm happy to expand my understanding of programming languages. I believe firmly in the improvement of the specifications of programming language and I acknowledge as there is a long journey yet to be walked, we are standing in the shoulders of giants to be where we are now.

I had a great experience with PLanCompS team wich is behind this development, they provide support about the needed background and reading material.

<!-- Todo: fix examples link-->
I recomend to check [CBS home](https://plancomps.github.io/CBS-beta/math/Funcons-beta/index.html), [Notation](https://plancomps.github.io/CBS-beta/docs/Notation.html) and its [specification examples]()  . A good reading to start with formal semantics is [Winskell's Formal Semantics of Programming Languages](https://mitpress.mit.edu/9780262731034/the-formal-semantics-of-programming-languages).

Stay curious.


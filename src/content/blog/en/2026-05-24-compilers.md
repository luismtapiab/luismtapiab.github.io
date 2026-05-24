---
title: "How Building a Compiler Made Me a Better Programmer"
description: ""
pubDate: 2026-05-24
lang: "en"
---
The tought of builidng a compiler for a programming language was mind blowing to in the first years my classmates and I used to look to people who made something like that as crazy. In fact, I almost failed the course on parsers until i forced myself to complete the book exercises, and i aced my final. I wont imagine I would end up building one (actually two) before graduating neither the impact it would have on my programming journey.



<img src="/assets/images/posts/2026-05-24-compilers/compilation.svg" alt="compilation phases and docs" class="centered"/>

My love for compilers didnt come from that first course but the next one i had the luck to take despite being on lockdown due to the pandemic, named Compilers Design and our teacher was Pablo Azero he was a great guide for us into this topic. The main project was to implement a complier for a subset of Java to SSM2 a simple virtual machine that had instructions like push, pop, add, sub, mult, div, call, ret, etc.

First we were doing each one a parser for a given grammar, some subset of java and then we exchange them to reach a good solution but everyone kept working on its one until the end. I remember seeing how my classmates did and also how some parts of my solution were used in the core of my classmates parsers. We were reading outside of class and every week we come with the homework and we start reviewing the problems everyone had and sharing our approaches. I remember it didnt feel like the teacher was testing us but helping us build a better solution, that made me enjoy the process a lot. We made pair programming with him too, maybe pair debugging is a more appropiate name for it.

I learned a lot about name analysis, semantic analysis, memory management, scope stacking, obscuring, shadowing, code generation, error handling and more. Even more importantly, I learned how to think about the product of a program in terms of what it does.

Of course my new eagerness to learn made difference but also the way the course was designed helped me a lot. When I thought of one teaching method that makes you enjoy the process of learning I remembered the course on compilers. There were few people in the end but those who stayed learned the most from it. I have pending to make a course equally compelling for my students.

In my thesis i learnt about new techniques on building a compiler from a brief specification of the language. Also it was a great experience using an undisclosed project at the time, reaching out to some authors and learning from them directly. some times i was lost but i put all my effort to understand theory and practice that are in this case synonims. I talked before about this on a previous post [CBS](/en/blog/2023-10-29-cbs-tests-merged/).

I also audited some courses that are worth checking, I recommend: the Spoofax framework [TU Delf Eelco visser Cs4200](https://tudelft-cs4200-2020.github.io/) and on optimization techniques [Cornell CS6120](https://www.cs.cornell.edu/courses/cs6120/2020fa/self-guided/). I have to admit that I only focued on the parts I needed at that time, and i know theres more I didnt learn yet but makes me excited to study more.

Building a compiler is a great way to learn how programming languages work, it teaches you how to think about the product of a program in terms of what it does, not how it is written, and even if you dont end up building one, learning from the process and concepts cant do other thing than improve you as a programmer.



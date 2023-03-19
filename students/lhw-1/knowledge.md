## Tools / Technology used within MarkBind

### Vue.js

One of the main technology I learned during the course of CS3281 was Vue.js, an open source JavaScript framework for building UI components. Previously, I have dabbled a bit in Vue.js, but not to the point where I could even call myself "familiar" with it. In order to work on some of the components (mainly for the implementation of the new Toasts component), I had to learn Vue.js and how to implement a Vue component in MarkBind, e.g. how the different parts in a Vue component (namely `<template>`, `<script>`, and `<style>` sections) work and interact with each other, what are the different lifecycle hooks and event handling available in Vue.js, the fundamentals of reactivity in Vue.js, etc.

The resources I used consist of:
- [Vue.js Documentation](https://vuejs.org/guide/introduction.html): This helped me get started with Vue.js, and reading through each section gave me a clearer understanding of how Vue.js worked, and the basics. However, to actually use it in MarkBind was a different problem...
- [MarkBind Developer Guide - Writing Components](https://markbind.org/devdocs/devGuide/development/writingComponents.html): ...which is where this section of the Developer guide came in. This section was very helpful in guiding me through the specific aspects of Vue.js that we are concerned with (and the [Section on SSR](https://markbind.org/devdocs/devGuide/development/writingComponents.html#ssr) was tremendously helpful in resolving some of the issues!).

Of course, as I became slowly more familiar with Vue.js and the Vue components, I started realizing the benefits of using Vue 3 would bring over Vue 2. For instance, [Dynamic CSS classes](https://vueschool.io/lessons/dynamic-css-classes-with-vue-3) available in Vue 3 but not Vue 2 is something that I encountered the need for during the implementation of the toasts component. As the course progresses, I expect to help out where I can with the currently ongoing Vue 2 to Vue 3 migration.

### Nunjucks

Nunjucks is a templating engine for JavaScript, developed by Mozilla. I encountered a need to investigate Nunjucks further when I was working on a issue with the `{ raw } { endraw }` tags in MarkBind, which was a way to work around the double curly braces `{{ }}` being processed as a Nunjucks variable. While I did not fully learn Nunjucks during this investigation, I nevertheless managed to learn about how variables are processed in Nunjucks, and how the Nunjucks syntax works. 

The resources I used consist of:
- [Nunjucks Documentation](https://mozilla.github.io/nunjucks/templating.html#autoescaping): This was the primary resource I consulted to learn more about the behavior of Nunjucks and the available syntax.
- [MarkBind User Guide - Tips and Tricks](https://markbind.org/userGuide/tipsAndTricks.html#using-raw-endraw-to-display-content): This section gave me hints on where to proceed for investigating why the Nunjucks syntax was causing problems for MarkBind. The section has since been re-written to be more informative (by me!) regarding how to avoid having variables be pre-processed by Nunjucks.

### TypeScript

While I was fairly familiar with TypeScript (along with HTML / CSS / JavaScript) prior to working on MarkBind, contributing to the ongoing TypeScript migration of the core MarkBind package has helped me better understand the strict features (and philosophy) of TypeScript. Hence, I thought that it at least deserves a mention in this section.

The resources I used consist of:
- [TypeScript Reference](https://www.typescriptlang.org/docs/handbook/utility-types.html): This helped me quite a bit when trying to understand how to get started with the TypeScript migration for MarkBind.
- [MarkBind Developer Guide - Migrating to TypeScript](https://markbind.org/devdocs/devGuide/development/migratingToTypeScript.html): This section was excellently written - frankly, I think that the step-by-step process was vital for my understanding of how the TypeScript migration should work.

## External Tools / Technology

### Static Site Generators ("Competitor Analysis")

While working on the templates and the CLI aspects of MarkBind, I found that I needed to be at least familiar with how other Static Site generators do things. I ended up spending quite a bit of time looking into 5 of our "competitors" (though they do fulfill different niches) in particular: Hugo, Gatsby, Jekyll, Docusaurus, MKDocs. 

What I learnt from their documentations (and subsequently trying them out myself to generate sites) is difficult to list, as it mainly involves learning about the available features as well as how they tackled certain issues. However, some of the comments I have left on MarkBind issues do showcase parts of my learnings:
- [This comment on Issue #2166](https://github.com/MarkBind/markbind/issues/2166#issuecomment-1464909988) regarding how empty `title` tags are handled in different static site generators 
- [This comment on Issue #2214](https://github.com/MarkBind/markbind/issues/2214#issuecomment-1474242306) regarding the differences between "Quick Start", "Feature Overview", and "Tutorial" for some of the other static site generators

The resources I used mainly consist of the documentations for each of the static site generators:
- [Hugo Documentation](https://gohugo.io/documentation/)
- [Gatsby Documentation](https://www.gatsbyjs.com/docs/)
- [Jekyll Documentation](https://jekyllrb.com/docs/)
- [Docusaurus Documentation](https://docusaurus.io/docs/docs-introduction)
- [MKDocs Documentation](https://www.mkdocs.org/)

I believe that as I progress through the module, I will learn more about other static site generators (that can help to give further insights into the directions that we want to push MarkBind towards).

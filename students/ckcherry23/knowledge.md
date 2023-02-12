### Frontend

#### Document Object Model

The DOM represents the structure of a web document. Its APIs are designed 
to be independent of any programming language, and can be used to 
manipulate it in interesting ways.

**Cross-browser support**

While working on a [PR to pin the file title](https://github.com/reposense/RepoSense/pull/1860), 
an API that would have been useful to me is 
`Element.scrollIntoViewIfNeeded()`, but since it was a non-standard 
feature that does not work on Firefox, I had to implement similar 
functionalities with `Element.scrollIntoView()` and 
`Element.getBoundingClientRect()`. This was a reminder that web 
developers must consider not only different screen sizes but also 
cross-browser compatibility while testing their work.

#### JavaScript

JavaScript is the most common scripting language used to access/modify 
DOM. Having done some web development work before, I had experience 
working with it before. Some interesting capabilities of JavaScript that 
I have used less commonly include the below:

**Use of Dot notation vs Bracket notation when accessing properties:**

The dot notation (eg. `objectName.propertyName`) is the most common way 
to access properties cleanly. However, property identifiers can only 
contain alphanumeric characters, `_` and `$`. On the contrary, bracket 
notation (eg. `objectName['propertyName']`) can use all UTF-8 characters 
in the property name, or even variables that finally resolve to a string.
This is useful when we will only know the property name during runtime, 
as in this https://github.com/reposense/RepoSense/pull/1860, which uses 
`this.$refs[file.path]` because the reference `file.path` is only 
resolved based on which file is being interacted with.

#### TypeScript

Since we heavily make use of OOP in our Java backend, it would make sense
to have similar classes, interfaces and inheritance support in our 
frontend. Using TypeScript allows for this, along with static typing and 
type inference. Hence, was the decision to slowly migrate our codebase 
from JavaScipt to TypeScript. Because I haven’t used TypeScript before, 
I got to learn some basic concepts while working on 
[my first PR](https://github.com/reposense/RepoSense/pull/1852), when I 
defined classes to be used for declaring Vue prop types explicitly.

#### Vue.js

I had used Vue.js with Vuetify components and 
[Options API](https://vuejs.org/api/options-state.html) previously, which 
made it easier for me to get started with the RepoSense frontend. 
However, working on RepoSense helped me to get more familiar with the 
software engineering principles related to working with Vue.

**Template refs**

While Vue has a rendering model that abstracts away direct manipulation 
of the DOM, sometimes it is necessary to have access to the DOM to 
programmatically control an element. This is why Vue gives us access to 
`$refs` . These `ref`s are similar to `document.querySelector('.element')`
in JavaScript, but are more efficient since they give direct access to 
the element needed rather than returning the first element that matches 
the given selector.

#### Pug.js (Jade)

Pug is an HTML templating language for Node.js, It makes it easy to 
write reusable HTML components with cleaner syntax. Such templating 
ngines may be useful while working with data-driven web applications, 
like RepoSense.

Perhaps something unfortunate is that most online resources for Vue 
(and others) have their documentation given in HTML by default, with no 
option to toggle to Pug syntax. This makes it (comparatively) difficult 
to find good [resources to learn how Vue and Pug can be used together.](https://medium.com/@martinsOnuoha/building-vue-components-with-pug-stylus-564615ed289)

#### Cypress

Cypress is a web testing framework used for E2E testing. Unlike Selenium,
it can opearte within the application itself. This gives Cypress high 
flexibility to access any of the objects in the app, including DOM 
objects, window, etc., similar to how we do in the code itself. I had 
written some Cypress tests to verify the newly added front-end features 
that made use of direct manipulation of DOM.

---

### Backend

#### Git

`**git log**`

For working on the [PR to include merge commits](https://github.com/reposense/RepoSense/pull/1882) 
in the web dashboard, some backend changes were required as merge 
commits were not included in the generated report itself. Hence I had
to look into the docs of git commands, specifically `git log`, to 
understand what flags I could make use of to include all the desired 
commits in the report. Previously, we were using the `--no-merges` flag 
to remove all merges from the report. However, simply removing this 
flag did not help in including all the merge commits in the new report. 
This may be because git continues to simplify “uninteresting” merges in 
the default mode. Finally, the use of `--full-history` helped include 
all commits without merging any same content commits together. `git log`
also had to option to format its output with a `<format-string>`, and 
this formatted output makes it easy for us to parse the results and 
generate our repository analysis reports.

---

### General

These are some of my learnings that do not fit into a single category 
from above, but are more general in nature.

**Object parameter vs multiple parameters for constructors**

While creating a `User` object in TypeScript, many arguments (~10) had 
to be passed in to construct the object. This made me wonder what the 
best way of initialising such objects with large number of attributes 
is. I was exploring the use of a single object parameter, as it makes 
the code much cleaner. However, there is a tradeoff of whether it would 
be type safe to just pass an object without any type as a parameter 
into the function, yet I decided to continue with the method of using 
an object argument. This issue of type safety could be mitigated in the
future by checking that the object being passed in as the argument 
implements the `UserType` interface, when migrating to TypeScript.

---

### 1. Tools and Technologies
The Frontend for RepoSense is created with Vue.js and Pug. Most of the JavaScript files have been migrated to TypeScript over
the semester. The frontend is tested using Cypress, and the packages are maintained using Node.js. For static code analysis,
we relied on ESLint configs.

#### 1.1 Vue
While I had used Vue.js with Vuetify components and [Options API](https://vuejs.org/api/options-state.html) previously,
working on RepoSense helped me to get more familiar with the intricacies of Vue, and how we can take full advantage of it.

**1.1.1 MVVM architecture**

Vue.js focusses on the `ViewModel` layer of the MVVM (Model-View-ViewModel) architectural pattern. This is because it connects
the Views and Models via 2-way data bindings. In this case, the view is the DOM (Document Object Model), and the models are
the plain JavaScript objects.

**1.1.2 Template refs**

While Vue has a rendering model that abstracts away direct manipulation of the DOM, sometimes it is necessary to have access
to the DOM to programmatically control an element. This is why Vue gives us access to `$refs` . These `ref`s are similar to
`document.querySelector('.element')` in JavaScript, but are more efficient since they give direct access to the element needed
rather than returning the first element that matches the given selector. This allowed me to work on custom behaviour such as
pinning the file title.

**1.1.3 Custom directives**

An important concept to keep in mind while building software is reusability. This is where the use of custom directives comes
in. Custom directives allow the reuse of logic that involves low-level DOM access. It is an object containing lifecycle hooks
which are similar to those of a component.

One of the custom directives that RepoSense was already using was an external one called
[`vue-observe-visibility`](https://github.com/Akryum/vue-observe-visibility/tree/next). This made use of the
[IntersectionObserverEntry Web API](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserverEntry) to observe
whether an element is in view and perform a function accordingly.

While I was working on the pin file title PR, I was tasked to fix a bug that was made more apparent by the new feature, which
was that tooltips appear out of the viewport when they are at the top of the page. Since the file title would be pinned to the
top of the page, this issue had to be fixed before my PR could be merged. Hence, I thought of using a custom directive for this.
I made use of the `vue-observe-visibility` custom directive to change the CSS of the tooltip to be bottom aligned based on
whether the tooltip visibility has changed. Though this worked well, we required more customizability as the tooltip had to
move back to be top-aligned when scrolling up, but this was not detected by the directive. Ultimately, I has to use template
refs for this feature as well, but nevertheless, I learnt a lot about custom directives.

#### 1.2 Vuex
Vuex is a state management pattern and library for Vue. It serves as the centralized source for all components and has rules
to ensure that the state can only be mutated in a predictable manner.

**1.2.1 Single source of truth**

While working on a PR to differentiate between authors when using the 'merge group' option. I had initially stored the colors
assigned to authors in Vuex store, but also has a local data() variable to store these colors. This may have led to 2
unsynchronized copies of the same data, if the data were ever to be manipulated elsewhere. Hence I resolved this by getting
Vuex state into the Vue components, which can be done by using `mapState` as a Vue `computed` property. This allows the
computed property to be re-evaluated everytime the data changes and would trigger any DOM updates. However, one downside is  
that this pattern causes the component to rely on the global store singleton, which is generally considered an anti-pattern.

#### 1.3 JavaScript
**1.3.1 Dot notation vs Bracket notation when accessing properties:**

The dot notation (eg. `objectName.propertyName`) is the most common way to access properties cleanly. However, property
identifiers can only contain alphanumeric characters, `_` and `$`. On the contrary, bracket notation (eg.
`objectName['propertyName']`) can use all UTF-8 characters in the property name, or even variables that finally resolve to a
string. This is useful when we will only know the property name during runtime, as in this
[PR](https://github.com/reposense/RepoSense/pull/1860), which uses `this.$refs[file.path]` because the reference `file.path`
is only resolved based on which file is being interacted with.

**1.3.2 ES6 string interpolation**

Template strings are a great way to insert values into strings in a concise and readable manner. A;ternatively, if we use the
string concatenation approach, the code may be hard to read and edit. Moreover, concatenation of strings requires creating
multiple strings and then putting them together which takes up more memory and computation compared to creating just one string.

#### 1.4 TypeScript
Since we heavily make use of OOP in our Java backend, it would make sense to have similar classes, interfaces and inheritance
support in our frontend. Using TypeScript allows for this, along with static typing and type inference. Hence, was the decision
to slowly migrate our codebase from JavaScipt to TypeScript.

**1.4.1 Class vs interface for typing**

Since I haven’t used TypeScript before, I got to learn some basic concepts while working on
[my first PR](https://github.com/reposense/RepoSense/pull/1852), where I defined classes to be used for declaring Vue prop
types explicitly. However, I did not consider to use of interfaces for this purpose.

Classes and interfaces in TypeScript are mostly equivalent, but the difference is that classes still exists at runtime while
interfaces are only used for type-checking at compile time, and erased at runtime, when the code is transpiled to JS. Hence
there would be slightly less overhead when using the interface. Classes do have an advantage over interfaces, which is that we
can define methods that are relevant to the class objects, but this feature was not useful to us yet. This is why is a later
PR, we discussed the benefits and decided to switch to an interface for better performance of the frontend.

#### 1.5 Pug
Pug is an HTML templating language for Node.js, It makes it easy to write reusable HTML components with cleaner syntax. Such
templating engines may be useful while working with data-driven web applications, like RepoSense.

Perhaps something unfortunate is that most online resources for Vue (and others) have their documentation given in HTML by
default, with no option to toggle to Pug syntax. This makes it comparatively difficult to find good resources to learn
[how Vue and Pug can be used together](https://medium.com/@martinsOnuoha/building-vue-components-with-pug-stylus-564615ed289).
However, after getting used to the syntax, it was much faster to develop in Pug compared to HTML, due to the less repetitive
syntax.

#### 1.6 Sass and CSS
Sass is an extension to CSS and is a pre-processor. It helps reduce the repetition in CSS and saves programming time. Some
features include variables, mixins, imports, inheritance, etc. A Sass pre-processor transpiles Sass code into standard CSS as
browsers can only understand plain CSS code.

**1.6.1 Placeholders vs mixins**

The difference between mixins and placeholders is that placeholders consolidates mutually-shared code, whereas mixins just
assign the properties to the individual classes — along with whatever was specific to that class. Because of this, it’s
preferred to use placeholders whenever possible. But since placeholders aren’t able to take parameters, it’s better to use
mixins in those cases.

I had to decide between placeholders and mixins when trying to consolidate the code required for a tooltip tail, and assign
it along with some specific properties depending on whether the tooltip was top-aligned or bottom-aligned. Hence, I made use
of placeholders for this as they group together mutually-shared code. In another situation, I used mixins to standardize
the fonts used throughout the frontend as fonts just need to be assigned to the CSS classes along with their other properties.

#### 1.7 Cypress
Cypress is a web testing framework used for E2E testing. Unlike Selenium, it can opearte within the application itself. This
gives Cypress high flexibility to access any of the objects in the app, including DOM objects, window, etc., similar to how we
do in the code itself. 

**1.7.1 Effective and efficient test case design**

I have tried to design my test cases such that each of them target a new potential fault point. However, one potential problem
I have noticed is repetitive commands. While the rest of the codebase also uses such repetitive commands in all test cases
for setup, we should plan to extract all the setup commands into a common function to allow for reusability.

#### 1.8 Linting
Linting is the process of performing static analysis on code to identify programming or code style errors. While I have used
the code analysis tools of IDEs, I had not enforced custom coding rules using lints before.

**1.8.1 ESLint config choices**

During our migration to TypeScript, we decided to use the AirBnb style guide (similar to how we have used it for JavaScript as
well). On top of that, we defined other [custom rules](https://typescript-eslint.io/rules/), and one of the first-timer issues
I created also deals with using lint rules for the consistent use of `T[]` or `Array` throughout our codebase.

---

The Backend for RepoSense is made with Java, and testing is done with JUnit. Since this project is for code analysis, Git
features are highly used within the project. Gradle is used for maintaining the project dependencies and devops tasks.

#### 1.9 Git
**1.9.1 `git log`**

For working on the [PR to include merge commits](https://github.com/reposense/RepoSense/pull/1882) in the web dashboard, some
backend changes were required as merge commits were not included in the generated report itself. Hence I hadto look into the
docs of git commands, specifically `git log`, to understand what flags I could make use of to include all the desired
commits in the report. Previously, we were using the `--no-merges` flag to remove all merges from the report. However, simply
removing this flag did not help in including all the merge commits in the new report. This may be because git continues to
simplify “uninteresting” merges in the default mode. Finally, the use of `--full-history` helped include all commits without
merging any same content commits together. `git log`also had to option to format its output with a `<format-string>`, and
this formatted output makes it easy for us to parse the results and generate our repository analysis reports.

**1.9.2 Spoofing**

I was surprised by how easy it is to commit as someone else using Git as long as one has write access. I had to make use of this
technique when I had to create a test commit, but only commits from a selected group of users were part of the Cypress test
dashboard.

---

### 2. Software Engineering

#### 2.1 Design choices
**2.1.1 Object parameter vs multiple parameters for constructors**

While creating a `User` object in TypeScript, many arguments (~10) had to be passed in to construct the object. This made me
wonder what the best way of initialising such objects with large number of attributes is. I was exploring the use of a single
object parameter, as it makes the code much cleaner. However, there is a tradeoff of whether it would be type safe to just
pass an object without any type as a parameter into the function. Yet, I decided to continue with the method of using an object
argument. This issue of type safety could be mitigated in the future by checking that the object being passed in as the
argument implements the `UserType` interface, when migrating to TypeScript.

#### 2.2 Reflections
**2.2.1 Understanding how a language/tool works before working with it**

Earlier on, I had the mindset of just making something work and getting things done rather than understanding how a
certain language actually works and figuring out based on my knowledge of its inner workings. However, this would make my
knowledge very superficial, and I would not accumulate any knowledge. Hence each challenge would be as difficult as the last.
However, from my learnings this semester, I have realised how things can get easier down the road if we take the right path of
understanding what we are doing and have a good balance of theiry and practical knowledge to accumulate my knowledge and get
better with time.

**2.2.2 _"Make it work, make it right, make it fast"_**

I got a chance to put this saying in practice while working on a PR to differentiate between authors while using 'merge group'.
While initially I was trying to make it work and fix any edge cases, I later on went to refactor the code to ensure that my
code is optimized. I had also conducted performance analysis for the PR after it was complete which can be accessed
[here](https://github.com/reposense/RepoSense/pull/1939#issuecomment-1518718579).

**2.2.3 Full-stack development**

I am grateful to have gotten a chance to work on an issue such as the show merge commits one, which gave me a chance to touch
on all aspects of the codebase even while focussing as a frontend developer. I got to reserach on Git, to find out how to
include all merge commits, edit the Java backend parsers to include an additional field for whether a commit is a merge commit,
and make frontend changes to show whether a commit is a merge commit. In addition, I got to write test cases for frontend
Cypress, backend unit tests and system tests. This was a rewarding experience as I had a chance to do full-stack development and
learn how all the components work together while solving a single problem.

---

### 3. Project Management

#### 3.1 Lessons learned

**3.1.1 Picking up the workflow**

Since RepoSense has been one of first open source projects I have contributed to, picking up the contribution workflow has been
an interesting learning point for me. This helped me get familiar with the level of quality that needs to be fulfilled for
such open-source projects that lives on its contributor's work. However, having such strict deadlines could also limit the
flow of PRs and slow down the PR lifecycle. It is important to set guidelines that allow us to strike a good balance between
quality expected and speed of PR reviews.

**3.1.2 Documentation ignored**

I realised that in general, many of us (even those before this semester's iteration) forgot to update the documentation after
making changes in a PR. This has led to a some of our documentation becoming obsolete and needs to be updated soon to ensure the
next released version includes all the latest information for future contributors to refer to. Since it may be difficult for
someone else to document the code one has written, we need to keep close track of whether a PR needs any documentation updates
from now on, perhaps with a checklist within the PR issue template.

**3.1.3 Ideal PR length**

During the semester, I had received feedback from my mentors that my PRs were too big, especially because I was trying to have
a single PR per issue. I realised how this could be difficult to review, and have tried breaking down my PRs into smaller ones
in the next half of the semester for easier peer reviews.

**3.1.4 Versioning**

I learnt how versioning is done from the various versions of RepoSense that I had seen as well as how we maintained separate
webpages for documentation for the released version as well as the currently developing `master` version of RepoSense. In the
near future, I am planning on making a release to understand the managerial workflow better.
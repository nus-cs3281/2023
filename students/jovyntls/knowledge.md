### Vue Lifecycle Hooks

I learnt about Vue's lifecycle hooks while working on popovers as I was facing errors with undefined instance properties. 
For instance, the `$el` property is only resolved after the instance is mounted.
When working with instance properties such as `$el`, I also learnt more about the different lifecycle hooks and when different properties are instantiated.

I came across this important note while browsing the [docs on lifecycle hooks](https://vuejs.org/v2/guide/instance.html#Instance-Lifecycle-Hooks):

> Don’t use **arrow functions** on an options property or callback, such as `created: () => console.log(this.a)` or `vm.$watch('a', newValue => this.myMethod())`. Since an arrow function doesn’t have a this, this will be treated as any other variable and lexically looked up through parent scopes until found, often resulting in errors such as `Uncaught TypeError: Cannot read property of undefined` or `Uncaught TypeError: this.myMethod is not a function`.

Resources
* [Vue lifecycle hooks](https://www.digitalocean.com/community/tutorials/vuejs-component-lifecycle)
* [Vue lifecycle diagram](https://vuejs.org/v2/guide/instance.html#Lifecycle-Diagram)

### Vue Templates & Slots 

Templates/slots are a way to pass content from parent to child components, and are used by bootstrap-vue (in place of props) in cases that require reactivity.
Using slots could make the code more readable. 
It's also a convenient way to pass components into another component, and enables reactivity in the popover use case.

Resources
* [Vue slots](https://vuejs.org/v2/guide/components-slots.html)

### Data attributes

I came across the use of data attributes (`data-*`) to pass data between different components/nodes in MarkBind.
I thought it was an interesting feature of HTML that allows for extensibility as users can store extra properties on the DOM without interfering with standard attributes.
It also guards against future changes in standard HTML attributes (i.e., avoids the problem of using a non-existent attribute that may become a standard attribute in a future version of HTML).
This was something that I was previously not aware of so it was interesting to see how it could be used in a practical scenario.

Resources
* [Using data attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes)

### Server-Side Rendering

Some things that helped me solve SSR/hydration issues this week:
* Conditionally render data when it has been fully loaded
* Take note of the different lifecycle hooks (`mounted` only runs on the client)
  * Vue's docs for lifecycle hooks (linked above) were once again a good resource
* Take note of how the Vue component will be compiled, ensure that the HTML is correct and aligns on both client- and server- side

Resources
* [Data reactivity on the server](https://ssr.vuejs.org/guide/universal.html#data-reactivity-on-the-server)
  * Data reactivity is unnecessary on the server, and is disabled by default.
  * `mount` and `beforeMount` will only be executed on the client
* [Client-side Hydration](https://ssr.vuejs.org/guide/hydration.html)
  * Instead of throwing away the markup that the server has already rendered and re-creating all the DOM elements, we “hydrate” the static mark-up and make it interactive
  * In development mode, Vue  will assert that the client-side generated virtual DOM tree matches the DOM structure rendered from the server
    * If mismatch: bail hydration, discard existing DOM, render from scratch
    * This is disabled in production for performance reasons
* [What to do when Vue hydration fails | blog.Lichter.io](https://blog.lichter.io/posts/vue-hydration-error/)
  * This resource was very helpful in debugging the source of hydration errors: [Solving the hydration failure](https://blog.lichter.io/posts/vue-hydration-error/#solving-the-hydration-failure) 

### Useful Git tricks

#### `--skip-worktree`

After adding some config files (e.g. `.ignore` for [Ag](https://github.com/ggreer/the_silver_searcher)), I wanted to ignore these config files to keep my git history clean. 
I first tried using `git update-index --skip-worktree` to "hide" the `.ignore` file, but this didn't work because the file wasn't indexed yet (so `update-index` doesn't make sense).

Instead, the following approach worked:
1. Add `.ignore` to `.gitignore`
2. `git update-index --skip-worktree .gitignore`
  * You can "undo" this in the future using the `--no-skip-worktree` flag

From here, `git status` shows no changes to the `.gitignore` file, and `.ignore` is no longer tracked.

Another option was `--assume-unchanged` instead of `--skip-worktree` (comparison is linked under "Resources"). 

Resources: 

* [Difference Between 'assume-unchanged' and 'skip-worktree'](https://stackoverflow.com/questions/13630849/git-difference-between-assume-unchanged-and-skip-worktree)
* [Summarised table comparison](https://fallengamer.livejournal.com/93321.html)

### npm Dependencies

While updating package.json, I had to clarify the meaning of some versioning syntaxes:

* `~1.2.3` means "approximately equivalent to v1.2.3" => accepts all future patch versions, i.e. ≥1.2.3 and <1.3.0
* `^1.2.3` means "compatible with v1.2.3" => accepts all future minor/patch versions, i.e. ≥1.2.3 and <2.0.0
* `@org/package` => 'org' is a scope, and 'package' is a package name within the scope

Some learning points on the different types of dependencies:

* **devDependencies** - only required during development (e.g. external tests, documentation)
  * installed on `npm install`, unless the `--production` flag is passed
* **peerDependencies** - compatible with, but not required (e.g. the module may expose a specific interface specified by the host documentation)
  * installed if missing, unless there is a dependency conflict
* **bundledDependencies** - will be bundled when publishing the package
  * Can be specified as a boolean or an array of strings (package names). `true` will bundle all dependencies, `false` will bundle none and an array of package names specifies which packages to bundle.

Resources: 

* [Specifying version ranges for dependencies](https://docs.npmjs.com/cli/v8/configuring-npm/package-json#dependencies)
* [Scope](https://docs.npmjs.com/cli/v8/using-npm/scope)
* [devDependencies, peerDependencies, bundledDependencies](https://docs.npmjs.com/cli/v8/configuring-npm/package-json#devdependencies)
* [Explanation on different types of dependencies](https://stackoverflow.com/questions/18875674/whats-the-difference-between-dependencies-devdependencies-and-peerdependencies)
* [When to use bundled dependencies](https://stackoverflow.com/questions/11207638/advantages-of-bundleddependencies-over-normal-dependencies-in-npm?lq=1)

### Simple scripting

Bash scripting was very useful when I needed to modify a large number of files (like `vue.min.js` for upgrading the Vue version, or `bootstrap.min.*` for upgrading Bootstrap). 
I picked up a bit of bash scripting and used this to mass copy the minified files:

```bash
find . -name "*vue.min.js" | xargs -n 1 cp ~/Downloads/vue.min.js
```

* `find . -name "*vue.min.js"` finds all filepaths ending with `vue.min.js`
* `|` uses the output of `find . -name "*vue.min.js"` as input for the right side
  * `|` is called a **pipe**. 
  * Redirects the left-hand side stdout to stdin of the right-hand side
* `xargs -n 1` converts each line of input to arguments for the command `cp ~/Downloads/vue.min.js`
  * `xargs` converts input from stdin to arguments for a command.
  * `-n 1` means to use only one argument for each iteration. Since arguments are space-separated, this essentially breaks the input up by lines
  * `-p` can be used to echo each command iteration and prompt a confirmation before proceeding. (`y` to confirm)

Another helpful command: using `sed`, delete all lines containing 'bootstrap-vue' in HTML files

```bash
find . -name "*.html" | sed -i '' '/bootstrap-vue/d'
find . -name "*bootstrap-vue.min.css" | xargs -n1 rm
```

Replace all instances of `font-weight-` with `fw-`:

```bash
ag -l 'font-weight-' | xargs -n1 sed -i '' 's/font-weight-/fw-/g'
```

Resources
* [Linux commands: `xargs`](https://flaviocopes.com/linux-command-xargs/)
* [Using sed: How to delete all lines containing a string](https://stackoverflow.com/questions/5410757/how-to-delete-from-a-text-file-all-lines-that-contain-a-specific-string)

### Traversing the DOM

While working on the Bootstrap 5 migration, due to changes in how Bootstrap handles event listeners, several components' logic had to be modified to maintain the same behaviour. 
This was done by using selectors and methods to modify the DOM.

* Using selectors: recursively (`.find`) or only on immediate children (`.children`)
* Toggling classes on a Vue slot: by using selectors and `.toggle`

One useful trick for CSS selectors is that you can right-click on an element in Chrome Devtools and copy its CSS selector! 

Resources
* [Quick reference of CSS selectors](https://www.w3schools.com/cssref/css_selectors.asp)

### Chrome Devtools

While testing and debugging, I found many features of Chrome Devtools to be useful:

* Copy the CSS selector of an element
* View all event listeners on an element
* Force a state on an element (e.g. hover, focus)
* View the properties of an element, which can be queried and/or modified with JavaScript

### Type Safety

As MarkBind is undergoing a migration to TypeScript, a lot of files have to be adapted to a `.ts` format and many new types have to be created. 
The migration uncovered some inconsistencies in how we process nodes, as adding types to our core package has allowed us to realise that methods are sometimes returning redundant or wrongly-typed outputs that are never used.

### Types in TypeScript

There are many method arguments and parameters that need to be typed but due to the many interactions between different classes and methods, we need to union, intersect or even assert types to ensure that the code can compile. 

Some useful and possibly obscure TS syntaxes:

**Intersection types: `&`**

An intersection type combines several types into one. For instance, `DomElement & cheerio.Element` will have members of both `DomElement` and `cheerio.Element`.
In the current migration, intersection types are particularly useful when handling `node` parameters as the type of `node`s needs to satisfy the `cheerio` APIs and 

**Union types: `|`**

A value that can be any one of several types is a union type. 
Union can be used when a function may return different types (often `undefined`). 
For example:
```typescript
function convertToCaps(str: string | undefined): string | undefined {
  return str && str.toUpperCase();
}
```

**Discriminating Unions**

A type can be one of multiple types. For instance,

```typescript
type Red = {
  code: '#FF0000'
}

type Blue = {
  code: '#0000FF'
}

// Color will be either Red or Blue
type Color = 
  | Red
  | Blue;
```

Discriminating unions could potentially be useful for typing `node` later on when we decide to unify the `node` types!
This is especially so because currently `node` takes on various types, but there are some commonalities between each type (along with differences).

### Accessing ambiguous object attributes in TypeScript

Often, we may need to try to access attributes that may or may not exist on an object. 
Some tricks that can help make code cleaner:

**Non-null assertion: `!`**

This asserts that a variable is not null, which stops compiler warnings.
It can be used when we can confirm that the variable is not null through other means, and need to tell the compiler that we have done so.

```typescript
const word: string | null = "Hello";
console.log(word.toLowerCase())  // Error: Object is possibly 'null'.ts(2531)
console.log(word!.toLowerCase()) // Compiler doesn't complain for this!
```

**Check the presence of an optional variable: `?`**

Suppose we have the following type: 

```typescript
type User = {
  data?: {
    email: string
  }
}
```

If we have a User object and we want to access the `email` attribute, we can access it using the `?` check:

```typescript
const emailAddress = user.data.email;   // Throws error because `user.data` may be undefined
const emailAddress = user.data?.email;  // No error! Returns the email string or `undefined`
```

### Strict mode in JavaScript

Strict mode can be invoked using `'use strict'` at the start of a JS file (applies to the entire script), or at the start of a function (applies to the _individual function_). 
The contents of JS modules are automatically in strict mode.

Strict mode changes both syntax and runtime behaviour, generally in the following ways: 

* changes converting mistakes into errors (as syntax errors or at runtime)
* changes simplifying how variable references are resolved
* changes simplifying eval and arguments
* changes making it easier to write "secure" JavaScript
* changes anticipating future ECMAScript evolution.

In a nutshell, strict mode helps us write more secure JS that may be compatible with future versions of EMCAScript. 
It also helps to catch mistakes by not ignoring exceptions.

It's also worth noting that we shouldn't add `'use strict'` to every function body, because it won't be stripped out in minified JS (and thus wastes bytes).

Resources
- [List of changes in strict mode](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode#changes_in_strict_mode)
- [Should I 'use strict' for every javascript function I write?](https://stackoverflow.com/questions/34301881/should-i-use-strict-for-every-single-javascript-function-i-write)


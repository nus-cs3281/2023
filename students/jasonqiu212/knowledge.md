### Angular

TEAMMATES uses Angular as its frontend framework. Some Angular features I learned:

- Mostly fixed folder structure (which is different from React.js):
  - HTML template
  - TypeScript class
  - CSS
  - Module: Used to organize an application and extend it with capabilities from external libraries
- `*ngFor`: Repeats element given a list defined in component class
- `*ngIf`: Conditional rendering
- Two-way Binding: Listen for events and update values simultaneously between parent and child components
  - Notation: `[()]`
  - Works together with `@Input` and `@Output` tags
- Pipes: Used to transform data displayed in templates

Resources:

- [Angular Docs](https://angular.io/docs)

### Web Accessability

#### Context

Before this project, I did not know what web accessibility meant or what even a screen reader was. This project showed me a new perspective on how we can help people with audio and visual impairments to navigate the web with ease.

#### How to Achieve Web Accessibility

> 4 Main Principles: Perceivable, Operable, Understandable, Robust

- Interactive elements should be focusable by the keyboard (e.g. when tabbing)
- Tabbing order should match visual layout of the page
- Support for screen reader:
  - All inputs should have corresponding label
  - Labels should be descriptive for the screen reader to read out aloud

#### Implementation Details

- Add `aria-label` for custom labels
- Use `<h1>` to `<h6>` tags for headings
  - Rationale: Screen readers can pick them up for more accessible navigation
- `<b>` should be avoided
  - Rationale: Standardize using CSS for styling
- Tables with two headers:
  - Problem: Difficult for screen reader users to understand relationship between header and data cells
  - `<th>`: Indicates header cells
  - Use `scope` attribute to designate header cell as the header for column or row
  - When navigating the table's data cells using the screen reader, the screen reader reads out the least recently visited row/col header cell
- Bind `<label>` tag to label related element using `for` attribute

Resources:

- [Screen Reader Basics: VoiceOver](https://www.youtube.com/watch?v=5R-6WvAihms&list=PLNYkxOF6rcICWx0C9LVWWVqvHlYJyqw7g&index=8&ab_channel=GoogleChromeDevelopers)
- [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/standards-guidelines/wcag/)
  - [Tables with Two Headers](https://www.w3.org/WAI/tutorials/tables/two-headers/)
- [Coding Accessibility: Becky](https://www.youtube.com/watch?v=MmHqthzJER4&ab_channel=GitHub) - This video helped me gain a greater appreciation and motivation for the User-friendliness Hero project.

### Bootstrap

- Prioritize using bootstrap utility classes over custom CSS
  - Rationale: Bootstrap is responsive by default. Minimize CSS customization.
  - E.g. `table-responsive`
  - Caveat: Bootstrap is not invincible! There were instances where Bootstrap utility classes cannot be used (e.g. `min-width`)
- Breakpoints: Used to achieve mobile-responsiveness
  - Class infix: `sm`, `md`, `lg`, `xl`, `xxl`
  - Most Bootstrap utility classes support class infixes for mobile responsiveness
- Grid system: Mobile-first 12-column system

Resources:

- [Bootstrap Docs](https://getbootstrap.com/docs/5.3/getting-started/introduction/)

### Snapshot Testing

While updating the frontend for the User-friendliness Hero project, many snapshot tests were updated. It was interesting to see how static HTML web content can be tested using snapshot testing.

- Use auto-update mode when updating snapshot tests

### End-to-end Testing

E2E testing tests the application as a whole.

#### Selenium

TEAMMATES uses [Selenium](https://www.selenium.dev/) for E2E testing.

- Selenium: For automating web applications for testing purposes. Some features include:
  - Navigating and clicking on elements
  - Inputting data into input boxes
  - Finding elements by id and class name: Used to verify state of the UI
- However, Selenium and ChromeDriver are unstable. Thus, the tests are not deterministic and may fail at times.

### Search

TEAMMATES uses [Apache Solr](https://solr.apache.org/guide/8_11/) to support full-text searches for instructors, students, and account requests. Here is what I learned about the search feature:

- Solr keeps a separate storage of searchable fields in the form of documents
  - Rationale: Though more space is needed, the search can be more optimized and customized
- This means that Solr documents need to be added/edited/deleted if the associated database entity changes

### Git

- Fetch a remote PR into local repository: `git fetch upstream pull/XXX/head:prXXX` (Credits to Wei Qing!)
  - Before: I always add a remote to the fork, then pull from the fork, which is quite troublesome

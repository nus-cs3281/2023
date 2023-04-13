### Project 1: [MDN Web Docs](https://github.com/mdn/content)

> MDN Web Docs is an open-source, collaborative project that documents web technologies including CSS, HTML, JavaScript, and Web APIs. Alongside detailed reference documentation, we provide extensive learning resources for students and beginners getting started with web development.

### My Contributions

As MDN Web Docs is an educational resource, my main contribution focus has been on
- researching and replying to issues to help developers with their problems
- improving the clarity of existing documentation by linking, cross-refencing official specification, adding examples, and rewriting confusing sections
- fixing documentation bugs (e.g. typos, broken links, incorrect outputs in interactive examples)

#### Small-scale
As part of getting familiar with the MDN Web Docs workflow, I have made several (10+) PRs fixing small-scale issues. Most of such work has been done at the start of my contribution period, and I have since kept them to a minimum on a weekly basis, to explore more complex issues.

Selected PRs:
- [Add warning for CSS image-orientation's limitation on cross-origin images #23513](https://github.com/mdn/content/pull/23513)
- [Add details about the behavior of Selection.setBaseAndExtent() on text nodes #23509](https://github.com/mdn/content/pull/23509)

#### Medium-to-large scale

This includes PRs that are more complex and require more research and effort to complete.

Selected PRs:
- [move Web/API/Element/openOrClosedShadowRoot by tlylt · Pull Request #23989 · mdn/content](https://github.com/mdn/content/pull/23989)
- [Add more examples to illustrate CSS var() usage by tlylt · Pull Request #23860 · mdn/content](https://github.com/mdn/content/pull/23860)

Selected Issues:
- [inaccurate example on the :not() page · Issue #24277 · mdn/content](https://github.com/mdn/content/issues/24277)

#### Summary
Complete list of
- [issues](https://github.com/mdn/content/issues?q=is%3Aissue+involves%3Atlylt+sort%3Aupdated-desc) I have opened or investigated
- [PRs](https://github.com/mdn/content/pulls?q=is%3Apr+sort%3Aupdated-desc+author%3Atlylt+is%3Aclosed) I have made and merged

### My Learning Record

#### Reflection
Tools/technologies I learned:
- All things web related (HTML, CSS, JavaScript, DOM, HTTP, etc.)

It's also a first for me to actually read the HTML and CSS formal specifications, and I have to say being precise and defining standards is not easy!

Resources:
- [MDN Web Docs](https://developer.mozilla.org/en-US/)
  - It itself is a great web development resource!
- [HTML Living Standard](https://html.spec.whatwg.org/multipage/)
  - The official specification for HTML

#### Project Workflow
It's quite easy to start contributing to the project, as it can be done entirely on GitHub. With the use of Markdown, it is also easy to make simple changes to the documentation. The general workflow goes as follows:
- Editing files and tracking changes in git
- Creating a pull request
- Check the preview of the changes
- Get the PR reviewed and merged by one of the owners

[Contributing Guide](https://github.com/mdn/content/blob/main/CONTRIBUTING.md)

#### Lessons Learned


#### What can be adopted by MarkBind

- Automatic PR flaw detection (e.g. broken links, typos, etc.)
- Establishing code owners and auto-assigning reviewers
- A dedicated documentation dashboard for writing documentation

#### Suggested areas of improvement for the external project

I think the project has merit in its own right, especially given the number of page views it gets. However, I think there are indeed areas of improvement that can be made.
For example, the search functionality and UX is not as good as it could be. While the search input box gives immediate results in the form of a dropdown, if the search term is
not found, the user will have to go to the dedicated search page, which shows a list of search results in plain text. This feels awkward, and I think I would be forced to search
for the same term on Google instead. Another thing for improvement is the sidebar. The left sidebar of pages can be quite long and at times, it is not clear how the pages are structured.
I think better categorization of the items in the sidebar would help.

### Project 2: [Dendron](https://github.com/dendronhq/dendron)

> Dendron is an open-source, local-first, markdown-based, note-taking tool. It's a personal knowledge management solution (PKM) built specifically for developers and integrates natively with IDEs like VS Code and VSCodium.

### My Contributions

A list of some of my involvements in the project:
- [Issues · dendronhq/dendron](https://github.com/dendronhq/dendron/issues?q=is%3Aopen+involves%3A%40me+sort%3Aupdated-desc)
- [(Not merged) enhance(create): show error when applying template but no template found by tlylt · Pull Request #3881 · dendronhq/dendron](https://github.com/dendronhq/dendron/pull/3881)

I also participated in the project Discord server and helped answer questions from new users for a short period of time.

### My Learning Record

#### Reflection
Tools/technologies I learned:
- VS Code extension development

Even though I did not dive deep into the codebase and contribute further (due to the fact that the project team decided to pivot to a different direction as the tool did not get to product-market fit), I did learn a lot about the project. I am impressed by the amount of work that has been put into the project, and the documentation is very well-written and detailed. I also adopted the tool for my own personal use since then.

I think the silver lining of this experience is that I have a better understanding of how VS Code extensions work, and I am now more aware of what it takes to build and maintain a large-scale project. For example, some of the events that the project team holds are quite interesting and perhaps we should consider doing something similar for our projects:
- [Dendron Greenhouse](https://wiki.dendron.so/notes/PqtlCsRPWBjKp3RR/)
  - > In Greenhouse talks, Dendron community members share the fruits of their learning. This may include showcasing workflows, tooling setups, systems, and other topics in personal knowledge management, but also anything that the speaker has in-depth knowledge of that may be of interest to the wider community.
- [New User Tuesdays](https://wiki.dendron.so/notes/JkX8ODMH9oO45LGicNRIy/)
  - >  The Dendron team highlights commonly used features and open the floor to community Q&A in the Dendron Discord.
- [CROP Event](https://wiki.dendron.so/notes/tayowNP4tMvcqH7AraoQ4/)
  - > A CROP (Community Request ) is an issue that is submitted and voted on by the community.

Resources:
- [Your First Extension](https://code.visualstudio.com/api/get-started/your-first-extension)

#### Project Workflow
The project is well-documented, with a dedicated developer guide and details on how to get started contributing. 
To highlight some of the useful inclusions in the developer guide:
- RFCs (Request for Comments) for major changes
- Package level architecture, development guidelines, cookbook, etc.
- References, FAQs, and troubleshooting

[Contributing Guide](https://docs.dendron.so/)

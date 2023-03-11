# Project: Checkstyle

Quote from [the official documentation](https://checkstyle.org/checks.html)

> Checkstyle is a development tool to help programmers write Java code that adheres to a coding standard. It automates the process of checking Java code to spare humans of this boring (but important) task. This makes it ideal for projects that want to enforce a coding standard.

RepoSense uses Checkstyle to enforce its [Java coding standard](https://se-education.org/guides/conventions/java/index.html). The detailed configuration is in [checkstyle.xml](https://github.com/reposense/RepoSense/blob/master/config/checkstyle/checkstyle.xml).

## My Contributions

My contributions are mainly on enhancing the existing documentation of `Checkstyle`. To be more specific, after experimenting with the tool, I added a significant number of new examples to document the various usage of `JavadocType`, a check on `Javadoc` of definitions of types such as `Interface`, `class`, and `enum`. Here is the list of examples that I added.

1. 1 example for the default check
1. 1 example for the usage of the `scope` property
1. 1 example for the usage of the `authorFormat` property
1. 1 example for the usage of the `versionFormat` property
1. 1 example for the combined usage of the `scope` and `excludeScope` properties
1. 1 example for the usage of the `allowMissingParamTags` property
1. 1 example for the usage of the `allowUnknownTags` property
1. 1 example for the usage of the `allowedAnnotations` property

Pull request: [Issue #7601: Add examples for JavadocType #12736](https://github.com/checkstyle/checkstyle/pull/12736); Issue: [Update doc for JavadocType #7601](https://github.com/checkstyle/checkstyle/issues/7601)

## My Learning Record

#### Checkstyle

Checkstyle is a tool that helps to enforce Java coding standard. Through contributing to this project, I learned the usage of the tool as well as its powered enabled by the numerous checks that can be specified in the configuration file.

Resources:
- [The official checks documentation](https://checkstyle.org/checks.html)
  - This shows the list of checks and their respective properties.
- [The RepoSense Checkstyle configuration](https://github.com/reposense/RepoSense/blob/master/config/checkstyle/checkstyle.xml)
  - This configuration is currently used by RepoSense, and I can experiment with different checks with RepoSense and this configuration.

#### Maven

Maven is the management tool for Java-based project, and it is used by Checkstyle. Maven provides support for project build, dependency maintenance, and continuous integration. I had to install Maven during initial setup of Checkstyle and build the project using `mvn install`. Additionally, I need to use commands such as `mvn clean verify` to verify whether the CI will pass and `mvn clean site -Pno-validations` to build the documentation site for preview when adding new changes. This also motivated me to learn about Maven along the way.

Resources:
- [The Checkstyle Wiki](https://github.com/checkstyle/checkstyle/wiki/How-to-run-certain-phases-and-validations#how-to-generate-website-only)
  - This shows the list of commands for Checkstyle utility.
- [The official documentation](https://maven.apache.org/index.html)
  - This is the official documentation that provides comprehensive details of the tool usage.

## Reflection

#### External Project Workflow

[Contribution Guide](https://checkstyle.org/contributing.html);
[Development Workflow](https://checkstyle.org/beginning_development.html);
[Pull request template](https://github.com/checkstyle/checkstyle/blob/master/.github/PULL_REQUEST_TEMPLATE.md);
[Pull request rules](https://github.com/checkstyle/checkstyle/wiki/PR-rules)

Workflow:

1. Create a fork of the [repository](https://github.com/checkstyle/checkstyle.git), clone it locally and initialize the project
1. Select an issue that has an `approved` label
1. Create and switch to the new branch
1. Implement the changes and commit it with `git`
1. Push the changes to the fork repository
1. Repeat step 4 and step 5 until the development is completed
1. Squash the commits into 1 and force push it to the fork repository
1. Rebase the feature branch onto the master branch
1. Run `mvn clean verify` to ensure that the CI will pass. If there are errors, return to step 4
1. Push the commit to the fork repository
1. Start a pull request

Note:

1. The commit message must be in the format "Issue #Number: Brief single-line message"
1. The pull request description needs to reference the associated issue if it exists
1. Most pull requests should contain a single commit to help the review process

#### What can be adopted by RepoSense

The contribution workflow seems quite strict.

Here are what can be adopted by RepoSense.

1. Given that certain issues may be proposed by external users, a new `approved` label can be used to filter the list of relevant issues that are suitable for a pull request.
1. To help the review process, the contrbutors should squash their commits into a single commit locally, even through RepoSense already adopts the squash merge strategy.
1. It should be mandatory for the contributors to run backend and frontend test to ensure that CI will pass before commiting to the remote respository. This can save the CI resource.

#### Suggested areas of enhancement for the external project

Checkstyle, as an open source project, is maintained relatively well, despite its large community. Most of the issues and pull requests are well formatted, thanks to its comprehensive contribution guideline. However, I noticed that its [main documentation](https://checkstyle.org/index.html) and [Java API](https://checkstyle.org/apidocs/index.html) are from separate sources, although a significant part of the content in the API is a duplicate of that in the main documentaiton. A possible suggestion will be to centralize API related documentation in order to prevent inconsistency and reduce maintenance cost.







# Project: MDN Web Docs

Quote from [Wikipedia](https://en.wikipedia.org/wiki/MDN_Web_Docs)

> MDN Web Docs, previously Mozilla Developer Network and formerly Mozilla Developer Center, is a documentation repository and learning resource for web developers.

## My Contributions

My contributions are mainly on enhancing the documentation related to `HTML`, `ARIA`, and `JavaScript`.

1. Pull request: [Grammar fix in TextDecoder #24348](https://github.com/mdn/content/pull/24348)
1. Pull request: [Add a more detailed explanation of boolean in glossary #24350](https://github.com/mdn/content/pull/24350); Issue: [Boolean definition in HTML #24085](https://github.com/mdn/content/issues/24085)
1. Pull request: [Adjust the description for srcset of <source> element #24420](https://github.com/mdn/content/pull/24420); Issue: [srcset description for <source> element is incorrect and misleading. #22820](https://github.com/mdn/content/issues/22820)

## My Learning Record

#### HTML

Through working on [Adjust the description for srcset of <source> element #24420](https://github.com/mdn/content/pull/24420), I learned the usage of `srcset` for image rendering on a HTML page.

Resources:
- [The MDN documentation](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/source#attributesl)
  - This provides the documentation of `srcset` that originally deviated from other sources.
- [The external documentation](https://html.spec.whatwg.org/multipage/images.html#image-candidate-string)
  - This provides a more accurate description of the attribute.
- Other resources such as [this post](https://webdesign.tutsplus.com/tutorials/quick-tip-how-to-use-html5-picture-for-responsive-images--cms-21015) and [this post](https://livefiredev.com/srcset-x-vs-w-which-to-use-in-what-situation-a-simple-guide/)
  - This shows examples of the detailed usage of the attribute.

#### ARIA

Through working on [Add a more detailed explanation of boolean in glossary #24350](https://github.com/mdn/content/pull/24350), I learned the definition of `ARIA` and how its enumarted attributes works.

Resources:
- [The MDN enumerated attributes documentation](https://developer.mozilla.org/en-US/docs/Glossary/Enumerated#aria_enumerated_attributes)
  - This gives an explanation of the `ARIA` enumerate attributes.
- [The MDN ARIA documentation](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA)
  - This gives an comprehensive explanation of `ARIA`.

## Reflection

#### External Project Workflow

[Contribution Guide](https://github.com/mdn/content/blob/main/CONTRIBUTING.md)

1. Create a fork of the [repository](https://github.com/mdn/content.git) needs to be created before contributing
1. Make and commit the changes by taking either of the following steps
   * Simple changes involving a single file: Edit the source file directly on GitHub UI of the upstream repository and then commit the changes to a feature branch of the fork repository
   * Complicated changes: Make the changes on a local cloned repository and the commit it to the fork repository.
1. Preview the changes locally using `yarn start`. If changes need to be made, go back to step 2
1. Start a pull request

#### What can be adopted by RepoSense

The contribution workflow is quite straightforward.

Here are what can be adopted by RepoSense.

1. The contributors can be encouraged to generate sample report locally before commiting it to the fork repository. This can prevent premature commit triggers unnecessary CI run, and reduce the CI resource consumption.

#### Suggested areas of enhancement for the external project

MDN Web Docs has quite a large community. Additionally, the current contribution guideline does not seem to impose too many rules on the commit and pull request standard. Consequently, different issues and pull requests from different contributors may have different styles, which can cause overhead for the reviewers. Therefore, a possible suggestion will be to introduce more rules to standarize the contribution and increase the maintenance efficiency.

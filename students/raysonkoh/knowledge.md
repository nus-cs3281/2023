### AY22/23 Sem 2 Knowledge

#### Tool 1: Dependabot

Dependabot is a Github Bot that automates the process of keeping a project's dependencies up-to-date. This is a great tool to improve the maintainability of a project as well as ensuring that the project is safe from the latest vulnerabilities.

There are 3 main features of Dependabot:

1. Dependabot alerts - sends an alert to the project maintainer whenever a new version of a dependency is available
2. Dependabot version updates - sends an automated PR to update the version of a dependency whenever a new version is available
3. Dependabot security updates - sends an automated PR to update the version of a dependency when the current version is vulnerable to known attacks

Depending on the needs of the project, maintainers can choose the most suitable features to use.

In addition, there is another github action [Dependabot Auto Merge](https://github.com/marketplace/actions/dependabot-auto-merge) that automatically merges Dependabot's PR.

Resources:

- [Explore and document steps to handle dependabot security alerts #2043](https://github.com/MarkBind/markbind/issues/2043)
- [Dependabot Docs](https://docs.github.com/en/code-security/dependabot/dependabot-alerts/about-dependabot-alerts)

#### Tool 2: NPM Workspaces

NPM Workspaces refers to the set of features in the `npm` cli that supports the management of mono-repos. This was researched as an alternative to the current mono-repo tool used for Markbind - Lerna.

NPM workspaces allows users to create, manage, and publish multiple packages as separate entities, but with shared dependencies and development workflows. Hence, this set of features results in a much more streamlined deployment workflow. Also, it automates the linking process as part of `npm install` and thus removes the need to manually use `npm link` to symlink modules.

Due to its seamless usage with the `npm` cli, NPM Workspaces is now the de-facto tool for users who want to manage their mono-repo projects.

Resources:

- [Explore using Turborepo to improve build system #1984](https://github.com/MarkBind/markbind/issues/1984)
- [Building a MonoRepo with NPM Workspaces](https://www.youtube.com/watch?v=4DOBsEGyKF0)
- [NPM Workspaces docs](https://docs.npmjs.com/cli/v7/using-npm/workspaces)

#### Tool 3: Codespaces

Github Codespaces is a cloud-based development environment that is accessbile to all Github users. It helps to greatly simplify the setting-up process of a development environment, thus greatly improving the onboarding experience of a new contributor.

It also improves developer productivity due to its deep integration with Github project management tools as well as its liveshare feature which allows for real-time collaboration.

Cost-wise, Github Codespaces is basically free-to-use for students, and additional computing hours can be purchased at a low-cost of $0.18 / hr.

Resources:

- [Lightning Talk: Onboard and start coding instantly with Codespaces #33](https://github.com/nus-cs3281/2023/issues/33)
- [Codespaces docs](https://github.com/features/codespaces)


### AY20/21 Sem 2 Knowledge

#### Tool 1: Github Actions

##### Aspect 1: Exposing secrets to workflows triggered from a forked repo
Due to security concerns, Github Actions does not expose repo secrets to workflows which are triggered from a forked repo. However, there may be actual use-cases where certain automated workflows, which require certain repo secrets, may be useful such as PR previews, automated labelling of PRs, generate code coverage report, etc.

Github Actions provide the `pull_request_target` and `workflow_run` to cater for such use-cases. To summarize,  `pull_request_target` runs the trusted workflow code in **your** actual repo (not the forked repo), and as such, it is able to expose the repo secrets during the workflow run. On the other hand, `workflow_run` can be triggered after a prior workflow run has completed and it has access to the repo secrets. The ideal use-case that Github recommends for `workflow_run` is for the prior workflow to generate some <tooltip content="A file or collection of files produced during a workflow run">artifacts</tooltip>, and for the privileged workflow to take the generated artifacts, do some analysis and post some comments on the pull request.

Some useful resources:
- [Github Actions Docs - secrets not passed to workflows triggered from forked repo ](https://docs.github.com/en/actions/reference/events-that-trigger-workflows#pull-request-events-for-forked-repositories-1)
- [Github Actions Docs - about storing workflow data as Artifacts](https://docs.github.com/en/actions/guides/storing-workflow-data-as-artifacts#about-workflow-artifacts)
- [Github's research and recommendations on securing workflows from forked repo](https://securitylab.github.com/research/github-actions-preventing-pwn-requests)
- [Github blog introducing `pull_request_target` and `workflow_run`](https://github.blog/2020-08-03-github-actions-improvements-for-fork-and-pull-request-workflows/)

##### Aspect 2: Sharing data across different steps
Github actions provide the abilitiy for a task to communicate with the runner machine to set environmental variables and output values that other tasks can reference, via `workflow commands`. This might be useful for segmenting the workflow up into multiple steps, to improve code readability and maintainability.

Some useful resources:
- [Github Actions Docs - workflow commands](https://docs.github.com/en/actions/reference/workflow-commands-for-github-actions)
- [Blog Post - Output Multiline Strings in GitHub Actions](https://trstringer.com/github-actions-multiline-strings/)

##### Aspect 3: Github Tokens
For Github Actions, there is a default `GITHUB_TOKEN` secret that the user can use to authenticate in a workflow run. The token expires after the job is finished. With this, one doesn't need to explicitly generate Personal Access Token for workflows which require **write** repo permissions.

Some useful resources:
- [Github Actions Docs - About `GITHUB_TOKEN` secret](https://docs.github.com/en/actions/reference/authentication-in-a-workflow#about-the-github_token-secret)
- [Github Docs - Personal Access Token](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token)


#### Tool 2: Jest

##### Aspect 1: Testing using data that are structurally similar

It may be quite repetitive to write tests for data which have a similar structure. One example is unit testing an `add(x, y)` function. You may wish to use the following testcases: `{0,0}, {-1,-3}, {1000000000,1000000000}`. Jest offers a feature to simplify testing for such cases where the data share a similar structure using the `.each` operator. In the same example, the tests can be simplified to as follows:

```javascript {.no-line-numbers}
test.each([
  [0, 0, 0],
  [-1, -3, -4],
  [1000000000, 1000000000, 2000000000],
])('.add(%i, %i)', (a, b, expected) => {
  expect(a + b).toBe(expected);
});
```

Some useful resources:
- [Blog Post - Reduce boilerplate test code with Jest it.each](https://elfi-y.medium.com/reduce-boilerplate-test-code-with-jest-it-each-30a0eec9776d)
- [Jest Docs - `test.each`](https://jestjs.io/docs/api#testeachtablename-fn-timeout)

##### Aspect 2: Testing specific files or functions

For testing purposes, sometimes it might be more efficient to drill down to a single test-file, rather than running the whole test-suite. Jest offers this feature where you can simply type `npm test -- <PATH_TO_FILE>` and it will run the test only on that specific file.

To test a specific method in the test file, you have to set a flag so that Jest knows to skip all other unrelated functions. This can be done using the `.only` operator.

Some useful resources:
- [Stackoverflow - How to test a single file using jest](https://stackoverflow.com/questions/28725955/how-do-i-test-a-single-file-using-jest)
- [Jest Docs - `test.only`](https://jestjs.io/docs/api#testonlyname-fn-timeout)

#### Tool 3: Markbind

##### Aspect 1: Testing CI scripts during development
There are not a lot of resources online regarding the testing CI scripts from a forked repo during development, especially for a mono-repo such as Markbind. The following is a general guideline for a CI build script that allows you to test your code changes:

1. Navigate out of the current directory and [git clone your forked repo](https://stackoverflow.com/questions/1911109/how-do-i-clone-a-specific-git-branch)
2. Navigate into the your cloned repo and run the setup instructions in your repo
3. Navigate into the original directory - most CI platforms provide an environment variable for this (eg. Travis-CI provides `TRAVIS_BUILD_DIR`)
4. Run the deploy steps

Some useful resources:
- [Atlassian Tutorial - What is a monorepo?](https://www.atlassian.com/git/tutorials/monorepos)
- [Stackoverflow - How to install NPM package from Github directly](https://stackoverflow.com/questions/17509669/how-to-install-an-npm-package-from-github-directly) - A far simpler method that works for npm package repos which are not a monorepo

##### Aspect 2: Useful CI environmental variables
Implementation of `markbind deploy --ci` uses some useful CI environmental envariables to extract information such as:
1. Which CI platform is the code being run on
1. Getting the repo slug in the form `owner_name/repo_name`

Some useful resources:
- [Snippet of Codecov's bash script which leverages heavily on CI environmental variables](https://github.com/codecov/codecov-bash/blob/master/codecov#L499-L951) - Credit to HSU ZHONG JUN for suggesting the resource in [Support more CI platforms for markbind deploy #1432](https://github.com/MarkBind/markbind/issues/1432).

##### Aspect 3: Regex
Markbind relies on some regex expressions for parsing. It would be good to have a basic understanding of regex to understand some of the parsing-related functions.

Some useful resources:
- [Regex101 (useful and convenient for testing regex expressions)](https://regex101.com/)
- [Youtube - Regular Expressions (Regex) in JavaScript - tutorial](https://www.youtube.com/watch?v=909NfO1St0A)
- [Youtube - Regular Expressions (Regex) Tutorial: How to Match Any Pattern of Text](https://www.youtube.com/watch?v=sa-TUpSx1JA)

## Project: Pandas

Pandas is a popular Python-based software library for data analytics.

1. [Contributing Guide for Pandas](https://pandas.pydata.org/docs/dev/development/contributing.html)
2. [Development Worflow](https://pandas.pydata.org/docs/dev/development/contributing_codebase.html)

### Summary of Contributions

1. PR #51384: [Write test for cut() function](https://github.com/pandas-dev/pandas/pull/51384)
2. PR #51356: [Fix errors in doctests](https://github.com/pandas-dev/pandas/pull/51356)
3. PR #51389: [Improve examples for documentation & fix ‘undefined variable' errors](https://github.com/pandas-dev/pandas/pull/51389)
4. Issue #51377: [flake8 flagging template strings in docstrings as syntax errors](https://github.com/pandas-dev/pandas/issues/51377)

### My Learning Record

#### Pytest

Pytest is a Python testing framework which encompasses unit tests, integration tests, end-to-end tests, and functional tests. 

Pandas project uses pytest to test their software. For PR #51384, I had to learn how to write a simple Pytest test to test the functionality of the ‘cut()’ function. I read the documentation to gain basic knowledge about its syntax, and looked through the tests folder under pandas project to gain a deeper understanding of how tests are written and managed in pandas.

#### Doctests

Doctests refer to chunks of text that are modelled after interactive Python sessions. Although they are embedded in text, they can be executed just like any other Python code snippets.

In pandas, doctests are mainly included in documentation to illustrate the functionality and features of different functions and data structures.

For PR #51389, I was involved with resolving ‘undefined variable’ errors in doctests, as well as improving existing examples in the documentation. With the help of flake8 (a style guide enforcement tool), as well as the doctests library documentation, I was able to pick out errors in the doctests and fix them.

### Differences in Processes

1. Core developers are each in charge of a certain aspect of the project e.g. Tests, documentation for Pull Request (PR) Reviews

Thus, the developers are able to show more depth in their area of expertise, which allowes new developers to engage in more meaningful conversations with regards to the issue they are working on. Due to their specialisation in reviewing PRs in a certain aspect, they are able to link problems to other existing related issues right away and provide more insight to new developers.

In addition, through PR reviews, the core developers also actively encourage new developers to investigate issues further and participate in the project in other ways. This way, new developers feel more committed to the project.

For example, while working on PR #51356, I detected an error in the way flake8 (a style guide enforcement tool) was processing template strings in doctests. I pursued the issue further and with my findings, the core developers requested that I open issue #51377 for it.

2. Use of GitHub bots to streamline processes e.g. assigning developers to issues
Due to the large scale of the projects, it is hard for the core developers to assign people to issues manually. Hence, they employ github-actions bot that assigns the issue automatically to the account that posts “take” under comments.

This helps to streamline processes and allow developers to start on development tasks faster.

3. Adding / Updating tests right after bug fixes

After bug fixes are merged, relevant issues are still kept open with a new tag “Needs tests”.

The test added is specific to the bug fixed, such that in the future, it will be able to catch the same bug and prevent possible regression.

4. Large number of checks for Continuous Integration (CI)

As compared to 4 set-up checks we have set up under CATcher’s GitHub Actions Continuous Integration process, pandas project has 39 checks in place. This is helpful in maintaining the codebase with many developers committing code often.

However, I also noticed that the presence of many checks often causes random failures. In addition, the checks take hours to complete. This could negatively affect efficiency when merging code.

### Suggestions for Internal Project

Three main suggestions/tools to be adopted for CATcher would be:

1. Senior developers building expertise in a particular aspect of CATcher

Right now, senior developers review any PR they come across without being in charge of any particular area of expertise. Sometimes, this could lead to similar issues / PRs being responded by different senior developers, which causes ineffective knowledge sharing and possible miscommunication.

The CATcher team could make it a point to divide up the PRs into different aspects (i.e. by adding tags such as ‘tests’ or ‘documentation’) and each take responsibility over reviewing PRs in that particular aspect.

This would allow senior developers to build expertise, and also impart knowledge to junior developers more effectively.

2. Making it a habit to add tests right after bug fixes or tweaks in functionality

Tests are not prioritised in the CATcher codebase although the maintainability of our application is crucial due to its usage during examinations.

The CATcher team should make it a habit to add or improve on tests right after  bug fixes or tweaks in features to keep our codebase robust.

3. Adopting GitHub bots for assigning new developers to issues

This would reduce the steps where a new contributor needs to request and wait for approval before getting assigned. It could also encourage more students to start contributing.
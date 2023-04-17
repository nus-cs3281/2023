## Summary

I mainly worked on backend features for RepoSense. A summary of key PR contributions are:

Backend:
- Removed authorship tag validation regex, to make RepoSense conform less towards GitHub's ID specification.
- Made RepoSense less reliant on static variables across various classes, to better follow object-oriented principles.
- Investigated and prepared a working parallelized version of `systemtest`. Reported on the feasibility of the parallelization effort.
- Implemented a CLI wizard for new RepoSense users to lower the effort needed to start using RepoSense.
- Removed unnecessary test mode behavior through validating the JSON output produced.
- Implemented feature to allow multiple repository's location to be specified in a single row in `author-config.csv`.

DevOps:
- Updated GitHub Actions workflow to use GitHub environmental files instead of using soon-to-be deprecated set-output.

| Week | Project   | Achievements                                                                                                                                                       |
| ---- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 2    | RepoSense | Merged PR: [Remove authorship tag validation regex #1857](https://github.com/reposense/RepoSense/pull/1857)                                                        |
| 3    | RepoSense | Merged PR: [Fix badges with correct class names #1864](https://github.com/reposense/RepoSense/pull/1864)                                                           |
| 4    | RepoSense | Submitted Issue: [Update unconventional author names to match logic in GitTestTemplate.java #1874](https://github.com/reposense/RepoSense/issues/1874)             |
| 4    | RepoSense | Merged PR: [Update authorship tags #15](https://github.com/reposense/testrepo-Alpha/pull/15)                                                                       |
| 4    | RepoSense | Merged PR: [Overwrite annotationTest.java with fakeAuthor #16](https://github.com/reposense/testrepo-Alpha/pull/16)                                                |
| 4    | RepoSense | Merged PR: [Use clearer author names in test template #1875](https://github.com/reposense/RepoSense/pull/1875)                                                     |
| 5    | RepoSense | Submitted Issue: [Different author with same username but different emails will not trigger any warning #1897](https://github.com/reposense/RepoSense/issues/1897) |
| 5    | RepoSense | Investigated Issue: [Backend: Parallelize System Tests #1873](https://github.com/reposense/RepoSense/issues/1873)                                                  |
| 5    | RepoSense | Reviewed PR: [Add JSON validation and migrate api.js to TypeScript #1903](https://github.com/reposense/RepoSense/pull/1903)                                        |
| 6    | RepoSense | Reviewed PR: [Convert run-checks.sh into a Gradle task #1907](https://github.com/reposense/RepoSense/pull/1907)                                                    |
| R    | RepoSense | Discussion on issue: [Refactor CliArguments and subclasses to better utilize polymorphism #1909](https://github.com/reposense/RepoSense/pull/1909)                 |
| R    | RepoSense | Opened PR (pending merge): [Remove unnecessary test mode behavior in ConfigSystemTest #1911](https://github.com/reposense/RepoSense/pull/1911)                     |
| R    | RepoSense | Opened PR (pending merge): [Make ReportGenerator and its corresponding Reporters non-static #1916](https://github.com/reposense/RepoSense/pull/1916)               |
| 7    | RepoSense | Reviewed PR: [Additonal options to merge/map git-users #1920](https://github.com/reposense/RepoSense/pull/1920)                                                    |
| 7    | RepoSense | Reviewed PR: [Gradle: remove unneeded commons-text dependency #1918](https://github.com/reposense/RepoSense/pull/1918)                                             |
| 7    | RepoSense | Merged PR: [Change hasAuthorConfigFile to become a local variable #1910](https://github.com/reposense/RepoSense/pull/1910)                                         |
| 7    | RepoSense | Discussion on PR: [Make ReportGenerator and its corresponding Reporters non-static](https://github.com/reposense/RepoSense/pull/1916)                              |
| 8    | RepoSense | Reviewed PR: [[Gradle] Upgrade to Gradle 7.6.1 #1919](https://github.com/reposense/RepoSense/pull/1919)                                                            |
| 8    | RepoSense | Reviewed PR: [Change serveTestReportInBackground workingDir #1925](https://github.com/reposense/RepoSense/pull/1925)                                               |
| 8    | RepoSense | Submitted Issue: [Add missing CommitResultAggregratorTest #1932](https://github.com/reposense/RepoSense/pull/1932)                                                 |
| 8    | RepoSense | Submitted Issue: [Link to DevOps guide is broken #1933](https://github.com/reposense/RepoSense/pull/1933)                                                          |
| 8    | RepoSense | Merged PR (to fork): [Add DES skeleton code #1](https://github.com/sikai00/RepoSense/pull/1)                                                                       |
| 8    | RepoSense | Reviewed PR (on fork): [Add cli wizard flag and optional, view and repo prompts #2](https://github.com/sikai00/RepoSense/pull/2)                                   |
| 8    | RepoSense | Investigated Issue: [Add missing CommitResultAggregratorTest #1932](https://github.com/reposense/RepoSense/pull/1932)                                              |
| 9    | RepoSense | Merged PR: [Remove unnecessary test mode behavior in ConfigSystemTest #1911](https://github.com/reposense/RepoSense/pull/1911)                                     |
| 9    | RepoSense | Merged PR: [Make ReportGenerator and its corresponding Reporters non-static #1916](https://github.com/reposense/RepoSense/pull/1916)                               |
| 9    | RepoSense | Submitted Issue: [Make ErrorSummary non-static by removing singleton design pattern #1943](https://github.com/reposense/RepoSense/issues/1943)                     |
| 9    | RepoSense | Submitted Issue: [Add missing CommitResultAggregatorTest #1932](https://github.com/reposense/RepoSense/issues/1932)                     |
| 9    | RepoSense | Opened PR (pending merge): [Make ErrorSummary non-static by removing singleton design pattern #1943](https://github.com/reposense/RepoSense/pull/1943)                     |
| 9    | RepoSense | Merged PR (to fork): [Add UntilPrompt #3](https://github.com/sikai00/RepoSense/pull/3)                                                                       |
| 10   | RepoSense | Opened PR (pending merge): [Add RepoSense CLI Wizard Walkthrough #1950](https://github.com/reposense/RepoSense/pull/1950)                     |
| 10   | RepoSense | Opened PR (pending merge): [Allow multiple repos in one row for author-config.csv #1961](https://github.com/reposense/RepoSense/pull/1961)                     |
| 10    | RepoSense | Reviewed PR: [Refactor CliArguments and subclasses for polymorphism #1942](https://github.com/reposense/RepoSense/pull/1942)                                               |
| 10    | RepoSense | Reviewed PR: [Remove Gradle wrapper version definition #1951](https://github.com/reposense/RepoSense/pull/1951)                                               |
| 11    | RepoSense | Merged PR (to fork): [Add documentation for init command #4](https://github.com/sikai00/RepoSense/pull/4)                                                                       |
| 11    | RepoSense | Merged PR (to fork): [Reorganise file structure #5](https://github.com/sikai00/RepoSense/pull/5)                                                                       |
| 11    | RepoSense | Submitted Issue: [Surge.sh previews are no longer working #1964](https://github.com/reposense/RepoSense/issues/1964)                     |
| 11    | RepoSense | Submitted Issue: [Use GitHub environmental files instead of using soon-to-be deprecated set-output #1967](https://github.com/reposense/RepoSense/issues/1967)                     |
| 12    | RepoSense | Submitted Issue: [Formatting of granting write access on GitHub subsection is broken #1972](https://github.com/reposense/RepoSense/issues/1972)                     |
| 12    | RepoSense | Concluded PR with report: [Backend: Parallelize System Tests #1900](https://github.com/reposense/RepoSense/pull/1900)                               |
| 13    | RepoSense | Merged PR: [Allow multiple repos in one row for author-config.csv #1961](https://github.com/reposense/RepoSense/pull/1961)                               |
| 13    | RepoSense | Reviewed PR: [Update how logger output is recorded #1978](https://github.com/reposense/RepoSense/pull/1978)                                               |
| 13    | RepoSense | Opened PR (pending merge): [Use GitHub environmental files instead of using soon-to-be deprecated set-output #1992](https://github.com/reposense/RepoSense/pull/1992)                     |

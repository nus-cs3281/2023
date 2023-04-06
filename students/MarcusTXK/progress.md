## Summary

I worked on DevOps, frontend, and backend features for RepoSense. A summary of key PR contributions are:

DevOps:

- Updated gradle to use `npm ci` and updated git ignore
- Updated gradle tasks and added batch scripts for checking

Frontend:

- Added Vue Router and ability to embed widgets
- Fixed a medium priority bug where contribution bars for merged groups disappear after refreshing + Added cypress tests to prevent this from going undetected again
- Added backward navigability, where users can click back to return to previous views after modifying their input

Backend:

- Refactored `RepoSense.java` class to better utilize Polymorphism shift decision logic for run configurations into `RunConfigurationDecider` and Updated `CliArguments` to utilize the Builder pattern
- Co-Authored RepoSense Cli Wizard for new users to more easily use RepoSense
- Investigated and added documentation on additional options to merge/map git-users

| Week | Project   | Achievements                                                                                                                                             |
| ---- | --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1    | RepoSense | Merged PR: [[#452] Add date range validation to sinceDate and untilDate #1850](https://github.com/reposense/RepoSense/pull/1850)                         |
| 2    | RepoSense | Merged PR: [[#1791] Switch to package-lock.json and npm ci #1863](https://github.com/reposense/RepoSense/pull/1863)                                      |
| 3    | RepoSense | Submitted Issue: [Merge .gitignore files for easier maintainability #1868](https://github.com/reposense/RepoSense/issues/1868)                           |
| 3    | RepoSense | Merged PR: [[#1868] Merge .gitignore files into single root file #1869](https://github.com/reposense/RepoSense/pull/1869)                                |
| 4    | RepoSense | Submitted Issue: [Add embeddable ramp widget #1894](https://github.com/reposense/RepoSense/issues/1894)                                                  |
| 4    | RepoSense | Discussed issue: [Walk users through creating and deploying their first report #1430](https://github.com/reposense/RepoSense/issues/1430)                |
| 5    | RepoSense | Submitted and Implemented protoype on Issue: [URL shortening for easy sharing of report links #1898](https://github.com/reposense/RepoSense/issues/1898) |
| 5    | RepoSense | Reviewed PR: [[#1815] Fix ESLint Indentation Level Options #1896](https://github.com/reposense/RepoSense/pull/1896)                                      |
| 6    | RepoSense | Merged PR: [[#1887] Convert run-checks.sh into a Gradle task #1907](https://github.com/reposense/RepoSense/pull/1907)                                    |
| 6    | RepoSense | Discussed on Issue: [Option to merge/map git-users #1788](https://github.com/reposense/RepoSense/issues/1788)                                            |
| 6    | RepoSense | Reviewed PR: [[#1886] Consolidate Node.js installation source of truth #1906](https://github.com/reposense/RepoSense/pull/1906)                          |
| 7    | RepoSense | Reviewed PR: [[#1915] Make ReportGenerator and its Reporters non-static #1916](https://github.com/reposense/RepoSense/pull/1916)                         |
| 7    | RepoSense | Reviewed PR: [Upgrade Gradle to 7.6.1 #1919](https://github.com/reposense/RepoSense/pull/1919)                                                           |
| 7    | RepoSense | Merged PR: [[#1788] Additonal options to merge/map git-users #1920](https://github.com/reposense/RepoSense/pull/1920)                                    |
| 7    | RepoSense | Submitted and Discussed on Issue: [Run code coverage test failing on forked repositories #1921](https://github.com/reposense/RepoSense/issues/1921)      |
| 8    | RepoSense | Made PR: [[#1909] Refactor CliArguments and subclasses to better utilize polymorphism #1942](https://github.com/reposense/RepoSense/pull/1942)           |
| 9    | RepoSense | Submitted and Investigated on Issue: [Illegal reflective access operation has occurred #1944](https://github.com/reposense/RepoSense/issues/1944)        |
| 9    | RepoSense | Co-Authored PR: [[#1715] Add RepoSense CLI Wizard Walkthrough #1950](https://github.com/reposense/RepoSense/pull/1950)                                   |
| 10   | RepoSense | Made PR: [[#1894] Add embeddable ramp widget #1954](https://github.com/reposense/RepoSense/pull/1954)                                                    |
| 10   | RepoSense | Submitted First Timer Issue: [Usage of directive shorthand syntax #1955](https://github.com/reposense/RepoSense/issues/1955)                             |
| 10   | RepoSense | Submitted Medium bug Issue: [Missing contribution bar for merged groups after refresh #1959](https://github.com/reposense/RepoSense/issues/1959)         |
| 10   | RepoSense | Merged PR: [[#1959] Missing contribution bar for merged groups after refresh #1960](https://github.com/reposense/RepoSense/pull/1960)                    |
| 10   | RepoSense | Reviewed PR: [[#1963] Migrate c-zoom.vue to TypeScript #1965](https://github.com/reposense/RepoSense/pull/1965)                                          |
| 11   | RepoSense | Reviewed PR: [[#528] Allow multiple repos in one row for author-config.csv #1961](https://github.com/reposense/RepoSense/pull/1961)                      |
| 11   | RepoSense | Submitted Issue: [Add cypress test for merged groups #1966](https://github.com/reposense/RepoSense/issues/1966)                                          |
| 11   | RepoSense | Made PR: [[#1966] Add cypress test for merged groups contribution bars #1970](https://github.com/reposense/RepoSense/pull/1970)                          |
| 12   | RepoSense | Submitted Issue: [Add Vue Router for RepoSense #1971](https://github.com/reposense/RepoSense/issues/1971)                                                |
| 12   | RepoSense | Made PR: [[#1971] Add Vue router #1974](https://github.com/reposense/RepoSense/pull/1974)                                                                |
| 12   | RepoSense | Made Draft PR: [[#642] Click back in browser to return to previous view #1975](https://github.com/reposense/RepoSense/pull/1975)                         |
| 12   | RepoSense | Submitted First Timer Issue: [Changing global functions to modular imports #1977](https://github.com/reposense/RepoSense/issues/1977)                    |

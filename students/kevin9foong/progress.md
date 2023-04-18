## Summary

During my CS3281 journey, I worked on:
* Migrating TEAMMATES from its previous GCP Datastore dependency to PostgreSQL as part of TEAMMATES v9.
* Finding and fixing various hard-to-find bugs via testing.
* Raising and guiding other (open-sourced) developers to improve TEAMMATES.
* Proposing suggestions and implementing upgrades to TEAMMATES (in terms of performance, code quality etc) whilst doing the migrations.
* Creating a admin support dashboard for new emails from scratch.

## Weekly progress

| Week | Achievements |
| ---- | ------------ |
| 1-4 | Familiarised myself with TEAMMATES. Recognised the GCP services being used and its various features. I reported and guided other devs on fixing some issues to improve the new developer experience such as the below issue #12020. |
| 1-4 | Worked on the [Onboarding task](https://github.com/cedricongjh/teammates/commits/cedric/api-integration). I worked on the planning of features, designing UI wireframe, creating the admin support dashboard to view support requests and implemented power user functionality for the admin such as sorting, searching tracking ID, highlighting of searched terms and optimizing the UI's performance via debouncing. |
| 5-6 | Worked on database migration of AccountRequest entity to support TEAMMATES v9. Created SQL entities, discussed database layer implemnentation and used Criteria API and wrote > 10 IT and Database unit tests to test functionality. [AccountRequest PR](https://github.com/TEAMMATES/teammates/pull/12107) |
| 7-8 | Migrated 4 actions for AccountRequests over a single PR [#12141](https://github.com/TEAMMATES/teammates/pull/12141). |
| 7-8 | Discussed with my mentor Hieu and Samuel and suggested splitting certain Exceptions into each layer for cleaner code (e.g., InvalidOperationError being a logic exception instead of a web layer exception). |
| 9 | Migrated GetFeedbackSessionAction in [PR #12212](https://github.com/TEAMMATES/teammates/pull/12212), wrote >8 unit tests to cover the full suite of behavior. Improved the readability of various expressions such as isClosed, isClosedGivenExtendedDeadline etc. |
| 10 | Migrated CreateFeedbackSessionAction in [PR #12255](https://github.com/TEAMMATES/teammates/pull/12255), refactored code based on good SWE practice using polymorphism for each Question type to improve code quality and maintenability. |
| 10 | Migrated DeleteFeedbackSessionAction and fixed an undetected bug that has been previously merged which caused infinite loop (crash) when the action is invoked, debugged HibernateUtil not clearing and added utility in [PR #12226](https://github.com/TEAMMATES/teammates/pull/12226). |
| 11 | Migrated several actions including writing unit/integration tests [PR #12258](https://github.com/TEAMMATES/teammates/pull/12258), [PR #12303](https://github.com/TEAMMATES/teammates/pull/12303), [PR #12304](https://github.com/TEAMMATES/teammates/pull/12304). |
| 11 | Identified and fixed undetected bugs with DeadlineExtension CriteriaAPI causing fetching to fail that have been previously merged in [PR #12326](https://github.com/TEAMMATES/teammates/pull/12326). |
| 12 | Migrated UpdateFeedbackSessionAction: Overhauled the EmailGeneration class to fit the new DB schema, updated architectural tests and refactored behavior of methods [PR #12360](https://github.com/TEAMMATES/teammates/pull/12360) |
| 13 | |

## Issues raised
| Week | Achievements |
| ---- | ------------ |
| 2 | Identified and raised some typos found in GitHub page. Issue fixed. |
| 3 | Raised [Issue #12020](https://github.com/TEAMMATES/teammates/issues/12020) to improve future developer ease of onboarding. Responded to open-source devs and provided assistance on how to fix the issue. Issue fixed. |

## PR Reviews
| Week | Review |
| ---- | ------------ |
| 9 | [PR #12191](https://github.com/TEAMMATES/teammates/pull/12191) Verified frontend issue has been resolved and looked at source code. |
| 9-11 | [PR #12256](https://github.com/TEAMMATES/teammates/pull/12256),[PR #12273](https://github.com/TEAMMATES/teammates/pull/12273), [PR #12256](https://github.com/TEAMMATES/teammates/pull/12273) |
| 12 | [PR #12342](https://github.com/TEAMMATES/teammates/pull/12342) |

## Misc
* Regular maintenance work for TEAMMATES (Looking through PRs, checking statuses etc)
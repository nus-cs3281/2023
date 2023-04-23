# CS3281 Semester's Progress

## Summary

**Onboarding Task**
Created a form page to handle support requests from users with tests. 

**V9 Migration**
Contributed to v9 migration from Google's datastore database to PostgreSQL database.
Work is mostly done on `Course`, `DeadlineExtension` and `EmailGenerator`:
- Adding / Migrating DB layer methods.
- Adding / Migrating business logic methods, including EmailGenerator.
- Migrating API endpoints (ie. Actions).
- Wrote Unit tests for methods migrated.

| Week | Achievements                                                                                                                                                                  |
| ---- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1-4  | Familiarised with TEAMMATES. |         |
| 1-4  | Co-authored PR: [Onboarding Task Submission: Support Request](https://github.com/jasonqiu212/teammates/pull/6) |    
| 5-10 | Merged PR: [Migrate Course Action classes #12092](https://github.com/TEAMMATES/teammates/pull/12092). Migrated multiple different Action layer classes for Course. Put on hold temporarily. |         
| R | Merged PR: [Migrate deadline extension entity db #12127](https://github.com/TEAMMATES/teammates/pull/12127). |
| 7-8 | Merged PR: [Migrate email generator #12175](https://github.com/TEAMMATES/teammates/pull/12175). |
| 8 | Reviewed PR: [[#12067] Inconsistent spacing in headings of rubric question statistics #12187](https://github.com/TEAMMATES/teammates/pull/12187) |
| 10 | Merged PR: [Migrate *JoinEmailWorkerAction classes #12229](https://github.com/TEAMMATES/teammates/pull/12229). |
| 10-11 | Merged PR: [Migrate Feedback Session publish-related email worker actions. #12244](https://github.com/TEAMMATES/teammates/pull/12244). |
| 10-11 | Merged PR: [Migrate Feedback Session remind-related email worker actions #12246](https://github.com/TEAMMATES/teammates/pull/12246). |
| 11 | Merged PR: [Migrate *EmailAction classes. #12300](https://github.com/TEAMMATES/teammates/pull/12300). |
| 11 | Reviewed PR: [[#12282] Instructor sessions page: Fix create feedback session card header #12324](https://github.com/TEAMMATES/teammates/pull/12324) |
| 12-13 | Authored PR: [Migrate FeedbackSession*RemindersAction classes #12364](https://github.com/TEAMMATES/teammates/pull/12364). |
| 13 | Authored PR: [[#12048] Restore sent*email fields #12365](https://github.com/TEAMMATES/teammates/pull/12365). |
| 14 | Reviewed PR: [[#8532] Sessions: instructor view results: stop showing a random identifier for anonymous responses #12368](https://github.com/TEAMMATES/teammates/pull/12368). |


**OSS-related**
Contributed to maintenance for TEAMMATES, including responding to contributers, checking of open PRs, etc.

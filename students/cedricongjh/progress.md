## CS3281 Progress

## Summary

**Onboarding Task**
Worked on an onboarding task that involved creating an admin dashboard to deal with support requests from users.

**V9 migration**
Worked on migrating TEAMMATES backend from Google's datastore to postgresSQL, to reduce dependancy on GCP.
Work was focused on FeedbackQuestions, FeedbackResponses and FeedbackResponseComments:
- Created the Database entities for the above.
- Migrated DB functionalies for the entities.
- Migrated the business logic in the logic layer for the entities.
- Migrated the API endpoints for the entities, ensuring that they still work with the old database.

|Week|Achievements|
|----|------------|
|4|Merged PR: [Onboarding task #12055](https://github.com/TEAMMATES/teammates/pull/12055)|
|5|Merged PR: [Add stricter checks for potentially destructive question edits #12030](https://github.com/TEAMMATES/teammates/pull/12030)|
|Recess|Merged PR: [Create FeedbackQuestion Entity for PostgreSQL Migration #12093](https://github.com/TEAMMATES/teammates/pull/12093)|
|Recess|Reviewed PR: [Instructor edit session times: timing restrictions are not as expected #12133](https://github.com/TEAMMATES/teammates/pull/12133)|
|Recess|Merged PR: [Create FeedbackResponse and FeedbackResponseComment entities #12135](https://github.com/TEAMMATES/teammates/pull/12135)|
|Recess|Merged PR: [create remaining question and response subtype entities #12138](https://github.com/TEAMMATES/teammates/pull/12138)|
|8|Reviewed PR: [Instructor adding a new session: stray X in the form UI #12191](https://github.com/TEAMMATES/teammates/pull/12191)|
|9|Merged PR: [Create feedback response question comment db and logic layer #12198](https://github.com/TEAMMATES/teammates/pull/12198)|
|9|Reviewed PR: [Add 'course -\> copy' option to the instructor home page #12177](https://github.com/TEAMMATES/teammates/pull/12177)|
|9|Reviewed PR: [Update FeedbackSession entity and add methods for FeedbackQuestion use #12202](https://github.com/TEAMMATES/teammates/pull/12202)|
|9|Reviewed PR: [Migrate CreateFeedbackQuestionAction #12217](https://github.com/TEAMMATES/teammates/pull/12217)|
|10|Reviewed PR: [Migrate GetFeedbackQuestionAction #12208](https://github.com/TEAMMATES/teammates/pull/12208)|
|10|Merged PR: [Migrate GetFeedbackQuestionAction #12208](https://github.com/TEAMMATES/teammates/pull/12208)|
|10|Reviewed PR: [Fix Typo in Naming of DB Tables #12232](https://github.com/TEAMMATES/teammates/pull/12232)|
|10|Merged PR: [Migrate get feedback question recipients action #12231](https://github.com/TEAMMATES/teammates/pull/12231)|
|11|Merged PR: [Migrate get feedback responses action #12252](https://github.com/TEAMMATES/teammates/pull/12252)|
|11|Reviewed PR: [Migrate GetFeedbackSessionSubmittedGiverSetAction #12258](https://github.com/TEAMMATES/teammates/pull/12258)|
|11|Merged PR: [Migrate get feedback response comments action #12296](https://github.com/TEAMMATES/teammates/pull/12296)|
|11|Reviewed PR: [Modified session timing modal does not use updated session name #12310](https://github.com/TEAMMATES/teammates/pull/12310)|
|11|Reviewed PR: [Students viewing submission form: Some answered essay questions are not shown in green #12316](https://github.com/TEAMMATES/teammates/pull/12316)|
|11|Merged PR: [Migrate get has responses action #12294](https://github.com/TEAMMATES/teammates/pull/12294)|
|11|Reviewed PR: [Migrate delete feedback response comment action #12328](https://github.com/TEAMMATES/teammates/pull/12328)|
|12|Merged PR: [#[12048] Migrate update feedback response comment action #12319](https://github.com/TEAMMATES/teammates/pull/12319)|
|12|Reviewed PR: [StudentsLogic.java: Refactor program to remove code smells and enhance maintainability #12338](https://github.com/TEAMMATES/teammates/pull/12338)|
|12|Merged PR: [Migrate delete feedback response comment action #12328](https://github.com/TEAMMATES/teammates/pull/12328)|
|12|Merged PR: [Migrate create feedback response comment action #12311](https://github.com/TEAMMATES/teammates/pull/12311)|
|12|Reviewed PR: [Migrate DeleteFeedbackQuestionAction #12337](https://github.com/TEAMMATES/teammates/pull/12337)|
|12|Reviewed PR: [fix copy questions modal checkbox #12346](https://github.com/TEAMMATES/teammates/pull/12346)|
|12|Reviewed PR: [fix copy questions modal checkbox #12348](https://github.com/TEAMMATES/teammates/pull/12348)|
|12|Reviewed PR: [Instructor results page stats tables: differentiate students with same team and name #12249](https://github.com/TEAMMATES/teammates/pull/12249)|
|12|Reviewed PR: [Add session: time picker constraint not applied correctly #12352](https://github.com/TEAMMATES/teammates/pull/12352)|
|13|Reviewed PR: [Instructor courses page: fix copy instructors from other courses modal checkbox #12369](https://github.com/TEAMMATES/teammates/pull/12369)|

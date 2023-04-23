## Summary
- Per-receiver submission project
- v9 migration implementation and review
- v9 staging server deployment
- Miscellaneous bug fixing and review general PRs

## CS3282 Pre-Sem Progress

|Date|Achievements|
|----|------------|
|Aug 1, 2021|Reviewed PR: [[#11319] Logs Interface: Support more filters + better exception tracing](https://github.com/TEAMMATES/teammates/pull/11320)|
|Aug 13, 2021|Reviewed PR: [[#11364] Track version of web front-end used to call APIs](https://github.com/TEAMMATES/teammates/pull/11365)|
|Aug 17, 2021|Reviewed PR: [[#11372] Add more system logs](https://github.com/TEAMMATES/teammates/pull/11373)|
|Aug 21, 2021|Merged PR: [Create tests for FeedbackResponseCommentsLogicTest::isNameVisibleToUser #11171](https://github.com/TEAMMATES/teammates/pull/11171)|
|Oct 10, 2021|Merged PR: [Release the results-view-tracking feature to users #11413](https://github.com/TEAMMATES/teammates/pull/11413)|
|Sep 10, 2022|Reviewed PR: [[#11719] student submitting responses: inform that submitting individual responses is optional](https://github.com/TEAMMATES/teammates/pull/11944)|
|Jan 27, 2022|Reviewed PR: [[#8431] InstructorFeedbackEditPage: include question type help in lightbox](https://github.com/TEAMMATES/teammates/pull/11949)|
|Oct 12, 2022|Reviewed PR: [[#11960] Improve submit button's UX for single question sessions](https://github.com/TEAMMATES/teammates/pull/11966)|
|Dec 25, 2022|Authored PR: [Set up base test case with local SQL DB access](https://github.com/zhaojj2209/teammates/pull/29)|
|Jan 3, 2023|Reviewed PR: [Implement session-per-request model](https://github.com/zhaojj2209/teammates/pull/27)|
|Sep 4, 2022|Reviewed PR: [[#16] Develop a PoC for schema migration](https://github.com/zhaojj2209/teammates/pull/23)|


## CS3282/CS3282 Progress

|Week|Achievements|
|----|------------|
|2|Merged PR: [Fix team members cannot see responses received by team issue and add relevant tests #12032](https://github.com/TEAMMATES/teammates/pull/12032)|
|3|Reviewed PR: [InstructorFeedbackEditPage: include question type help in lightbox #11949](https://github.com/TEAMMATES/teammates/pull/11949)|
|4|Submitted Issue: [Create frontend for Per Receiver Submission #12052](https://github.com/TEAMMATES/teammates/issues/12052)|
|5|Reviewed PR: [v9: Skeleton implementation #12056](https://github.com/TEAMMATES/teammates/pull/12056)|
|5|Reviewed PR: [Add stricter checks for potentially destructive question edits #12030](https://github.com/TEAMMATES/teammates/pull/12030)|
|5|Reviewed PR: [V9: temporarily disable liquibase migrations #12072](https://github.com/TEAMMATES/teammates/pull/12072)|
|5|Reviewed PR: [Create Notification Entity for PostgreSQL migration #12061](https://github.com/TEAMMATES/teammates/pull/12061)|
|5|Merged PR: [Create Notification Entity for PostgreSQL migration #12061](https://github.com/TEAMMATES/teammates/pull/12061)|
|5|Merged PR: [Create notification DB layer for v9 migration #12074](https://github.com/TEAMMATES/teammates/pull/12074)|
|5|Merged PR: [Create notification DB layer for v9 migration #12075](https://github.com/TEAMMATES/teammates/pull/12075)|
|5|Reviewed PR: [Add UsageStatistics entity and db #12076](https://github.com/TEAMMATES/teammates/pull/12076)|
|6|Reviewed PR: [Add Account Entity #12087](https://github.com/TEAMMATES/teammates/pull/12087)|
|6|Merged PR: [Create SQL logic for CreateNotificationAction and add relevant tests for v9 migration #12077](https://github.com/TEAMMATES/teammates/pull/12077)|
|6|Reviewed PR: [Create Student, Instructor and User Entities for PostgreSQL Migration #12071](https://github.com/TEAMMATES/teammates/pull/12071)|
|6|Reviewed PR: [Create SQL logic for GetNotificationAction and add relevant tests for v9 migration #12080](https://github.com/TEAMMATES/teammates/pull/12080)|
|6|Reviewed PR: [V9: Cleanup and refactor #12090](https://github.com/TEAMMATES/teammates/pull/12090)|
|6|Reviewed PR: [Update GetUsageStatisticsAction to include SQL entities #12084](https://github.com/TEAMMATES/teammates/pull/12084)|
|Recess|Merged PR: [Create SQL logic for GetNotificationAction and add relevant tests for v9 migration #12080](https://github.com/TEAMMATES/teammates/pull/12080)|
|Recess|Reviewed PR: [Migrate accounts Db #12114](https://github.com/TEAMMATES/teammates/pull/12114)|
|Recess|Reviewed PR: [Create SQL logic for UpdateNotificationAction and add relevant tests for v9 migration #12085](https://github.com/TEAMMATES/teammates/pull/12085)|
|Recess|Merged PR: [Create SQL logic for UpdateNotificationAction and add relevant tests for v9 migration #12085](https://github.com/TEAMMATES/teammates/pull/12085)|
|Recess|Merged PR: [Create DeleteNotificationAction SQL logic and add relevant tests and update other tests #12137](https://github.com/TEAMMATES/teammates/pull/12137)|
|7|Reviewed PR: [Update entities to use UUID instead of Integer as ID #12154](https://github.com/TEAMMATES/teammates/pull/12154)|
|7|Merged PR: [Update GetReadNotificationsAction and MarkNotificationAsReadAction for v9 migration #12156](https://github.com/TEAMMATES/teammates/pull/12156)|
|7|Reviewed PR: [Add logic layer classes #12165](https://github.com/TEAMMATES/teammates/pull/12165)|
|8|Reviewed PR: [Migrate action layer helper methods #12168](https://github.com/TEAMMATES/teammates/pull/12168)|
|8|Merged PR: [Migrate GetNotificationsAction #12178](https://github.com/TEAMMATES/teammates/pull/12178)|
|8|Merged PR: [Update MarkNotificationAsReadAction logic for unmigrated accounts #12190](https://github.com/TEAMMATES/teammates/pull/12190)|
|9|Reviewed PR: [Create feedback response question comment db and logic layer #12198](https://github.com/TEAMMATES/teammates/pull/12198)|
|9|Reviewed PR: [Add simple workflow to vet pull requests #12196](https://github.com/TEAMMATES/teammates/pull/12196)|
|9|Reviewed PR: [Migrate get instructor action #12203](https://github.com/TEAMMATES/teammates/pull/12203)|
|9|Merged PR: [Update FeedbackSession entity and add methods for FeedbackQuestion use #12202](https://github.com/TEAMMATES/teammates/pull/12202)|
|9|Reviewed PR: [Fix PR checking workflow permissions #12215](https://github.com/TEAMMATES/teammates/pull/12215)|
|9|Reviewed PR: [Migrate CreateFeedbackQuestionAction #12217](https://github.com/TEAMMATES/teammates/pull/12217)|
|9|Merged PR: [Migrate CreateFeedbackQuestionAction #12217](https://github.com/TEAMMATES/teammates/pull/12217)|
|10|Reviewed PR: [Migrate GetFeedbackQuestionAction #12208](https://github.com/TEAMMATES/teammates/pull/12208)|
|10|Reviewed PR: [Migrate Course Action classes #12092](https://github.com/TEAMMATES/teammates/pull/12092)|
|10|Reviewed PR: [Migrate get feedback question recipients action #12231](https://github.com/TEAMMATES/teammates/pull/12231)|
|11|Reviewed PR: [Migrate get feedback responses action #12252](https://github.com/TEAMMATES/teammates/pull/12252)|
|11|Reviewed PR: [Migrate get feedback response comments action #12296](https://github.com/TEAMMATES/teammates/pull/12296)|
|11|Reviewed PR: [Migrate get has responses action #12294](https://github.com/TEAMMATES/teammates/pull/12294)|
|12|Reviewed PR: [#[12048] Migrate update feedback response comment action #12319](https://github.com/TEAMMATES/teammates/pull/12319)|
|12|Reviewed PR: [Migrate UpdateFeedbackQuestionAction #12318](https://github.com/TEAMMATES/teammates/pull/12318)|
|12|Merged PR: [Migrate UpdateFeedbackQuestionAction #12318](https://github.com/TEAMMATES/teammates/pull/12318)|
|12|Reviewed PR: [Migrate delete feedback response comment action #12328](https://github.com/TEAMMATES/teammates/pull/12328)|
|12|Reviewed PR: [Migrate create feedback response comment action #12311](https://github.com/TEAMMATES/teammates/pull/12311)|
|12|Reviewed PR: [Migrate DeleteFeedbackQuestionAction #12337](https://github.com/TEAMMATES/teammates/pull/12337)|
|12|Merged PR: [Migrate DeleteFeedbackQuestionAction #12337](https://github.com/TEAMMATES/teammates/pull/12337)|

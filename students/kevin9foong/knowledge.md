## Frontend
### Angular (Frontend framework)
* I learnt Angular from having zero prior knowledge to build the dashboard for the onboarding task.
Having previous experience with React, it is interesting to see the different approaches between frameworks and use the frameworks to implement functionality such as sorting, search etc.
For example, Angular splits the CSS, HTML and JS into 3 distinct files while React mixes JS and HTML in a single file for each component.

* I also learnt about and implemented some frontend optimization techniques such as deboucing and throttling so that queries to the backend for not made for every input in the search bar.
Compared to React, Angular has more built in functionality such as debouncing function already in-built into the EventEmitter whereas in React we would have to use 3rd party libraries such as Lodash.

## Backend

### Presentation-Logic-Data Layering
* I learnt more about writing well abstracted code and in how to structure a backend system by splitting the system into distinct layers for each responsibility. I was also able to discuss of how to improve and abstract responsibilities with my mentors to improve the software architecture of TEAMMATES.

### Exception wrapping
* I learnt and implemented the practice of exception wrapping (related to the above layering concept) to abstract lower level details from higher level components.

For example, I delegated the DB layer be responsible only for database operations. Exceptions thrown during the primitive DB layer operations are wrapped in the logic layer into relevant logic layer exceptions so as to abstract away the details of data access from the rest of the application.

I referred to this online guide by [Jenkov on Exception Wrapping](https://jenkov.com/tutorials/java-exception-handling/exception-wrapping.html).

### How to ensure product stays live even during migration
* Working on a product which serves live users every month, I learnt how we can migrate from the existing GCP Datastore product to PGSQL while still serving actual users (without downtime). This can be done through implementing logic in code to check if the entity has been migrated yet, allowing the code to be able to serve users throughout the migration process.

### Hibernate ORM
* I've learnt how to use Hibernate ORM and understood the layers of abstraction it provides for us. Hibernate helps map entity classes to actual records in a database. Each entity has 2 main states, managed and unmanaged. If changes are made to managed entities in hibernate, they will be flushed at the end of the session and do not need to be explicitly flushed.

* Through understanding Hibernate ORM, I learnt about the concept of Eager and Lazy loading and am able to effectively use Hibernate to manage entities in TEAMMATES. I am able to understand how to reduce/optimize the number of queries needed to fetch data.

* I have also learnt how to use CriteriaAPI to create SQL queries and even write dynamic queries to reduce the number of queries needed to fetch a large number of records based on dynamic selection predicates.

## General SWE skills and tools

### Gradlew
* After bringing up [Issue #12020](https://github.com/TEAMMATES/teammates/issues/12020), I reviewed the solution from an open-sourced dev. However, to guide the dev to be able to fix the issue (as seen in the thread), I also learnt more about how gradle is configured and more about jobs. Hence, working on CS3281 allowed me to understand how to build and configure gradlew to run desired jobs such as lint and test.
### Testing concepts & Mockito
* I've learnt of how to better utilise various tests such as unit and integration tests.

* I've learnt how to effectively use Mockito to mock lower layer and third party dependencies, use spies to ensure certain methods are invoked etc to isolate a specific unit to be under test.

For example, I used mocks and spies to isolate my software under test into units. Then, using Mockito, I was able to verify that methods were invoked for a number of times with specific arguments etc.

* Applying concepts learnt in CS2103T, I focused on testing areas which have the highest likelihood of bugs, this allowed me to discover bugs in my own and others' code and be able to fix and resolve them.

* Utility of static analyzers in detecting bugs

Through my CS3281 journey, I also realized how static analyzers such as pmd are not only able to enforce coding standards, but are also very effective in finding where potential bugs are. For example, pmd highlighted areas where null was possible and allowed me to discover and fix several bugs.

### Architecture testing with ArchUnit
* Prior to CS3281, I was unaware of the existence of Architectural tests.

* I've learnt these tests can be very useful in enforcing the interactions and layering of our software architecture. For example, TEAMMATES does not allow logic classes directly interacting with the UI or the UI interacting directly with the storage classes etc.

* Using Architectural tests can help us enforce the architecture of our application (eg, n-tier architecture with UI, logic, database).
I managed to adapt the existing architectural tests to fit the new requirements where instead of having an atttribute DTO class, we are using the SQL entity class directly to pass data. Hence, I learnt more about architectural testing through writing DescribedPredicates to fit our needs.

### Importance of testing
* Through writing and testing my featurs extensively, I've realised the importance of testing in preventing and identifying bugs.
For example, by writing tests for the various FeedbackSession actions I've migrated, I've discovered bugs that were previously undetected and merged into the main branch. For example, since the various entitys' toString() method were invoking each other, it caused a cyclic infinite loop which would have crashed the application if pushed into production.

* Additionally, I discovered other hard to detect bugs such as incorrect parameter orderings and CriteriaAPI bugs where the wrong key was being referenced and where Join needs to be explicitly indicated first that have been previously merged. This would not have been possible without good testing practice.

* Writing tests for regression and ensuring tests pass even if test data is changed.
I've learnt that regression testing is extremely important. Especially when there is collective effort in performing migration work and there are many changes, we need to ensure new changes don't break existing functionality.

### OSS project maintenance
* I gained new experience learning to work with open-sourced devs from across the world. I helped guide and provide technical support and feedback and raised issues.

* Also, from TEAMMATES, I have learnt how tools such as Github Actions can be used to maintain a large-scale project, such as using the OSS-bot for regular maintenance updates and suggestions.

### SWE/Project management best practices
* I learnt of the importance of splitting PRs across smaller PRs so reviewers could review code easier.
As a reviewer and someone writing PRs, I've grown across the weeks as shown by splitting the PRs into smaller PRs for easier reviews. Though this might seem like a small tweak, I believe that my experience in CS3281 has made me better as a team player and software engineer.

* I learnt some SWE practices and proposed changes to make the code quality better.
For example, I discussed with my mentors of best practices and refactored functions that existed solely to throw an exception vs returning a boolean. I learnt and discussed different SWE ideas and did research such as [considering which SWE practice is best](https://codereview.stackexchange.com/questions/11724/is-it-better-practice-to-have-void-method-throw-an-exception-or-to-have-the-meth).

* Communication skills
I learnt of the importance of keeping the entire team updated with what each member is doing and the importance of sprint planning and standup meetings. For example, having regularly procedures for updates allows the team to better understand what everyone is doing and prevents potential duplicate/missing work. During CS3282, I hope to recommend and practice having standup meetings with my teammates.

## Improving my fluency with using SWE tooling
### Debugger
* From CS3281, I've discovered and faced multiple bugs during my implementation journey.
I've managed to use the debugger extensively, stepping in/out and over lines of code and setting breakpoints and monitoring variables. For example, when implementing [PR #12360](https://github.com/TEAMMATES/teammates/pull/12360), I managed to discover that certain conditionals were incorrect by monitoring the number of DeadlineExtensions in each map/list and correcting the conditionals using the debugger.

* Also, I've learnt many shortcuts to improve my developer workflow.
### VSC shortcuts
Ctrl + P for file search
opt + click for multi-cursor etc
And many more
### Terminal and keyboard shortcuts
To delete words and navigate quickly (opt + backspace, opt + arrow keys)
Deleting entire sentences (alt + u)
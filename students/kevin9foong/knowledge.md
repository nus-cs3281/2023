## Frontend
### Angular (Frontend framework)
I learnt Angular from having zero prior knowledge to build the dashboard for the onboarding task.
Having previous experience with React, it is interesting to see the different approaches between frameworks and use the frameworks to implement functionality such as sorting, search etc.
For example, Angular splits the CSS, HTML and JS into 3 distinct files while React mixes JS and HTML in a single file for each component.

I also learnt about and implemented some frontend optimization techniques such as deboucing and throttling so that queries to the backend for not made for every input in the search bar.
Compared to React, Angular has more built in functionality such as debouncing function already in-built into the EventEmitter whereas in React we would have to use 3rd party libraries such as Lodash.

## Backend

### Presentation-Logic-Data Layering
I learnt more about writing well abstracted code and in how to structure a backend system by splitting the system into distinct layers for each responsibility. I was also able to discuss of how to improve and abstract responsibilities with my mentors to improve the software architecture of TEAMMATES.

### How to ensure product stays live even during migration
Working on a product which serves live users every month, I learnt how we can migrate from the existing GCP Datastore product to PGSQL while still serving actual users (without downtime). This can be done through implementing logic in code to check if the entity has been migrated yet, allowing the code to be able to serve users throughout the migration process.

### Hibernate ORM
I've learnt how to use Hibernate ORM and understood the layers of abstraction it provides for us. Hibernate helps map entity classes to actual records in a database. Each entity has 2 main states, managed and unmanaged. If changes are made to managed entities in hibernate, they will be flushed at the end of the session and do not need to be explicitly flushed.

Through understanding Hibernate ORM, I learnt about the concept of Eager and Lazy loading and better understand how Hibernate joins work.

I have also used CriteriaAPI to formula SQL queries and even write dynamic queries to reduce the number of queries needed to fetch a large number of records based on dynamic selection predicates.

## General SWE skills and tools

### Gradlew
After bringing up [Issue #12020](https://github.com/TEAMMATES/teammates/issues/12020), I reviewed the solution from an open-sourced dev. However, to guide the dev to be able to fix the issue (as seen in the thread), I had to learn more about how gradle is configured and more about jobs. Hence, working on CS3281 allowed me to understand how to build and configure gradlew to run desired jobs such as lint and test.
### Testing concepts & Mockito
I've learnt of how to better utilise various tests such as unit and integration tests.

I've learnt how to effectively use Mockito to mock lower layer and third party dependencies, use spies to ensure certain methods are invoked etc to isolate a specific unit to be under test.

### Importance of testing
Through writing and testing my featurs extensively, I've realised the importance of testing in preventing and identifying bugs.
For example, by writing tests for the various FeedbackSession actions I've migrated, I've discovered bugs that were previously undetected and merged into the main branch. For example, since the various entitys' toString() method were invoking each other, it caused a cyclic infinite loop which would have crashed the application if pushed into production.

Additionally, I discovered many hard to detect bugs such as the parameter ordering being incorrect and CriteriaAPI bugs where Join needs to be explicitly indicated first that have been previously merged. This would not have been possible without good testing practice.

* Writing tests for regression and ensuring tests pass even if test data is changed.
I've learnt that regression testing is extremely important. Especially when there is collective effort in performing migration work and there are many changes, we need to ensure new changes don't break existing functionality.
Additionally,

### OSS project maintenance
I gained new experience learning to work with open-sourced devs from across the world. I helped guide and provide technical support and feedback and raised issues.

### Project best practices
I learnt of the importance of splitting PRs across smaller PRs so reviewers could review code easier.
As a reviewer and someone writing PRs, I've grown across the weeks as shown by splitting the PRs into smaller PRs for easier reviews. Though this might seem like a small tweak, I believe it has made me better as a team player and software engineer.

> To be updated.
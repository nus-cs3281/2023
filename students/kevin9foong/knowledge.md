## Technologies:

## Frontend
### Angular (Frontend framework)
* I learnt Angular from having zero prior knowledge to build the dashboard for the onboarding task.
Having previous experience with React, it is interesting to see the different approaches between frameworks and use the frameworks to implement functionality such as sorting, search etc.
For example, Angular splits the CSS, HTML and JS into 3 distinct files while React mixes JS and HTML in a single file for each component.

* I also learnt about and implemented some frontend optimization techniques such as deboucing and throttling so that queries to the backend for not made for every input in the search bar.
Compared to React, Angular has more built in functionality such as debouncing function already in-built into the EventEmitter whereas in React we would have to use 3rd party libraries such as Lodash.

## Backend
### Hibernate ORM
I've learnt how to use Hibernate ORM and understood the layers of abstraction it provides for us. Hibernate helps map entity classes to actual records in a database. Each entity has 2 main states, managed and unmanaged. If changes are made to the code in hibernate,

Through understanding Hibernate ORM, I learnt about the concept of Eager and Lazy loading and better understand how Hibernate joins work.

I have also used CriteriaAPI to formula SQL queries and even write dynamic queries to reduce the number of queries needed to fetch a large number of records based on dynamic selection predicates.

## General SWE skills
### Testing concepts & Mockito
I've learnt of how to better utilise various tests such as unit and integration tests.
* I've learnt how to effectively use Mockito to mock lower layer and third party dependencies, use spies to ensure certain methods are invoked etc to isolate a specific unit to be under test.

### Importance of testing
* Through writing and testing my featurs extensively, I've realised the importance of testing in preventing and identifying bugs.
For example, by writing tests for the various FeedbackSession actions I've migrated, I've discovered bugs that were previously undetected and merged into the main branch. For example, since the various entitys' toString() method were invoking each other, it caused a cyclic infinite loop which would have crashed the application if pushed into production.

Additionally, I discovered many hard to detect bugs such as the parameter ordering being incorrect and CriteriaAPI bugs where Join needs to be explicitly indicated first that have been previously merged. This would not have been possible without good testing practice.

* Writing tests for regression and ensuring tests pass even if test data is changed.
I've learnt that regression testing is extremely important. Especially when there is collective effort in performing migration work and there are many changes, we need to ensure new changes don't break existing functionality.
Additionally,

## OSS project maintenance
* I gained new experience learning to work with open-sourced devs from across the world. I helped guide and provide technical support and feedback and raised issues.

### Project best practices
* I learnt of the importance of splitting PRs across smaller PRs so reviewers could review code easier.
As a reviewer and someone writing PRs, I've grown across the weeks as shown by splitting the PRs into smaller PRs for easier reviews. Though this might seem like a small tweak, I believe it has made me better as a team player and software engineer.
...

> To be updated.
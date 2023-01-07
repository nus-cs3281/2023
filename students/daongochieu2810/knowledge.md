### Angular

Aspects: Components, Templates, Directives, Dependency Injection
Source: Official Docs

- An Angular app usually has 3 main types of component: UI, service and module. RxJs is heavily used in service classes to help UI classes communicate with the backend server
- Learnt about `ngTemplate` to make reusable widgets
- Learnt about specificity of CSS to change component styles without directives or Typescripts code changes
- Learnt about `@Input` and `@Output` decorators for communication among the UI components:
  - `@Input` is usually used for the parent component to pass data to the child component.
  - `@Output` is useful when a child component wants to communicate witht the parent component. An EventEmitter is usually decorated with this decorator to act as a callback for changes in the child component.
- Learnt about modules in Angular: a component can be treated as a standalone module or as a part of a parent module. Modules aid dependency injection in Angular

### RxJs

- Learnt about `observable` to receive APIs responses
- Learnt about `concat` and `merge` to call paginated API requests:
  - `concat` is used for synchronous API stream, which is useful where API calls need to be in order and slow performance is tolerable
  - `merge` is used for asynchronous API stream, which is useful where performance is important and a burst of instances (due to a large number of asyn calls) is guaranteed to not happen
- Learnt about `catchError` to handle errors without ending the stream of API requests allowing the FE to retry sending requests upon failures such as timeout:
  - `catchError` returns a new stream when an error is encountered. The stream can be ended by returning an empty stream or continue by reconstructing the original stream
- Learnt about various concepts in RxJs:
  - Schedulers: centralized controllers for concurrency which allow the coordination of computation
  - Subject: equivalent to EventEmitter
  - Purity: RxJs allows usage of pure function to generate stateful values through `pipe`
  - Flow: RxJs provides various flow controll such as `throttleTime`, `filter`, `delay`. These are usually used through `pipe` before `subcribe` for more robust behaviours

### Google App Engine

Aspects: Database access and modification, APIs, Cron jobs, Task Queue.
Source: Teammates code base, Official Docs

- Learnt about GAE timeout and its response to timed-out events which can be utilized to recover from such events
- Learnt about `appengine-web.xml` to configure environment variables such as Java runtime version and scaling policy

### Java

- Learnt that high-level data structures should be prioritized over primitive ones to make the code more extendable e.g ArrayList should be used instead of array
- Revised best programming practices and OOP principles in Java

### Objectify

- Learnt about CRUD actions on the datastore
- Learnt about server-side filtering feature
- Other basic operations:
  - Defining entities
  - Loading/Deleting/Updating entities
  - Key-only queries
- Transactions:
  - Entity groups: to allow atomic transactions to be carried out. The groups are defined based on each entity's parent
  - Optimistic concurrency: Objectify allows concurrent transactions, and any conflicts in timestamps of entities will cause the transaction to be rolled back. Optimistic concurrency generally has a higher throughput than pessimistic concurrency
- Indexing:
  - To index an entity with an attribute, use the tag `@Index` (`@Cache` can also be used to cache entities)
  - Appengine indexing rules enforce the use of efficient queries, and make it almost impossible to write slow queries

### Google Cloud Platform

- Learnt that parallelism can cause mutiple instances to be created and thus increase the cost. Thus, large requests are broken down into smaller ones and run synchronously to avoid a burst of instance creation
- Used API services such as Gmail API to send notifications to customers and production logs to admin
- Used Cloud Trace to find performance bottle-neck of API calls
- Used Cloud Profiler to identify and analyze performance bottlenecks
- Used staging server to simulate a production environment for stress testing on performance bottlenecks

### Backend Techniques & Testing

- Paginatied API calls: break a huge request down into smaller requests. This allows for more data to be sent at the cost of additional performance overhead
- Created sripts to generate mock data and retrieve information about the database for the admin
- Created LnP test scripts to assess performance of heavily used APIs such as student enrolment
- Configured `test.properties` and `JMeterElements.java` for running LnP scripts against staging server by adding domain and port of the staging server as target point
- E2E testing with Selenium:
  - Learnt about the usage of `id`, `xpath` and `css selector` to identify web components for testing purposes
  - Learnt about the usage of page objects to simulate user actions
  - Learnt about the usage of service stubs to simulate http responses
- Learnt about `JMeter` as an application for LnP testing:
  - Create test data
  - Create csv test data to be send with APIs to BE
  - Construct LnP test plan:
    - Add csrf token and login sampler for CRUD actions
    - Add request headers
    - Add http sampler to carry out the request to BE with created test data
    - Run the test concurrently by configuring the number of threads
  - Remove data from datastore and delete test files after the test

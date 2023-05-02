
    var pageVueRenderFn = function anonymous(
) {
with(this){return _c('div',{attrs:{"id":"app"}},[_c('header',{attrs:{"fixed":""}},[_c('navbar',{attrs:{"placement":"top","type":"primary"},scopedSlots:_u([{key:"brand",fn:function(){return [_c('a',{staticClass:"navbar-brand",attrs:{"href":"/2023/index.html","title":"Home"}},[_v("CS3281&2-2023/Students")])]},proxy:true},{key:"right",fn:function(){return [_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://github.com/nus-cs3281/2023"}},[_c('span',[_c('span',{staticClass:"fab fa-github",attrs:{"aria-hidden":"true"}})])])])]},proxy:true}])},[_v(" "),_c('dropdown',{staticClass:"nav-link",scopedSlots:_u([{key:"header",fn:function(){return [_v("CS3281")]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2023/index.html"}},[_v("Students")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2023/students/knowledge.html"}},[_v("Knowledge")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"https://nus-cs3281.github.io/2023-dashboard/?search=&sort=groupTitle&sortWithin=title&timeframe=commit&mergegroup=&groupSelect=groupByAuthors&breakdown=false"}},[_v("Code Dashboard")])])]),_v(" "),_c('dropdown',{staticClass:"nav-link",scopedSlots:_u([{key:"header",fn:function(){return [_v("CS3282")]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2023/cs3282-index.html"}},[_v("Students")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2023/students/talksSchedule.html"}},[_v("Lightning Talks")])])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/2023/instructions.html"}},[_v("Instructions")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://nus-cs3281.github.io/website/"}},[_v("CS3281&2 Website "),_c('span',[_c('span',{staticClass:"glyphicon glyphicon-share-alt",attrs:{"aria-hidden":"true"}})])])])],1)],1),_v(" "),_c('div',{attrs:{"id":"flex-body"}},[_m(0),_v(" "),_c('overlay-source',{staticClass:"fixed-header-padding",attrs:{"id":"page-nav","tag-name":"nav","to":"page-nav"}},[_c('div',{staticClass:"nav-component slim-scroll"})])],1),_v(" "),_m(1)])}
};
    var pageVueStaticRenderFns = [function anonymous(
) {
with(this){return _c('div',{staticClass:"fixed-header-padding",attrs:{"id":"content-wrapper"}},[_c('h3',{attrs:{"id":"angular"}},[_c('span',{staticClass:"anchor",attrs:{"id":"angular"}}),_v("Angular"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#angular","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Aspects: Components, Templates, Directives, Dependency Injection\nSource: Official Docs")]),_v(" "),_c('ul',[_c('li',[_v("An Angular app usually has 3 main types of component: UI, service and module. RxJs is heavily used in service classes to help UI classes communicate with the backend server")]),_v(" "),_c('li',[_v("Learnt about "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("ngTemplate")]),_v(" to make reusable widgets")]),_v(" "),_c('li',[_v("Learnt about specificity of CSS to change component styles without directives or Typescripts code changes")]),_v(" "),_c('li',[_v("Learnt about "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("@Input")]),_v(" and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("@Output")]),_v(" decorators for communication among the UI components:\n"),_c('ul',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("@Input")]),_v(" is usually used for the parent component to pass data to the child component.")]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("@Output")]),_v(" is useful when a child component wants to communicate witht the parent component. An EventEmitter is usually decorated with this decorator to act as a callback for changes in the child component.")])])]),_v(" "),_c('li',[_v("Learnt about modules in Angular: a component can be treated as a standalone module or as a part of a parent module. Modules aid dependency injection in Angular")])]),_v(" "),_c('h3',{attrs:{"id":"rxjs"}},[_c('span',{staticClass:"anchor",attrs:{"id":"rxjs"}}),_v("RxJs"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#rxjs","onclick":"event.stopPropagation()"}})]),_v(" "),_c('ul',[_c('li',[_v("Learnt about "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("observable")]),_v(" to receive APIs responses")]),_v(" "),_c('li',[_v("Learnt about "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("concat")]),_v(" and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("merge")]),_v(" to call paginated API requests:\n"),_c('ul',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("concat")]),_v(" is used for synchronous API stream, which is useful where API calls need to be in order and slow performance is tolerable")]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("merge")]),_v(" is used for asynchronous API stream, which is useful where performance is important and a burst of instances (due to a large number of asyn calls) is guaranteed to not happen")])])]),_v(" "),_c('li',[_v("Learnt about "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("catchError")]),_v(" to handle errors without ending the stream of API requests allowing the FE to retry sending requests upon failures such as timeout:\n"),_c('ul',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("catchError")]),_v(" returns a new stream when an error is encountered. The stream can be ended by returning an empty stream or continue by reconstructing the original stream")])])]),_v(" "),_c('li',[_v("Learnt about various concepts in RxJs:\n"),_c('ul',[_c('li',[_v("Schedulers: centralized controllers for concurrency which allow the coordination of computation")]),_v(" "),_c('li',[_v("Subject: equivalent to EventEmitter")]),_v(" "),_c('li',[_v("Purity: RxJs allows usage of pure function to generate stateful values through "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("pipe")])]),_v(" "),_c('li',[_v("Flow: RxJs provides various flow controll such as "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("throttleTime")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("filter")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("delay")]),_v(". These are usually used through "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("pipe")]),_v(" before "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("subcribe")]),_v(" for more robust behaviours")])])])]),_v(" "),_c('h3',{attrs:{"id":"google-app-engine"}},[_c('span',{staticClass:"anchor",attrs:{"id":"google-app-engine"}}),_v("Google App Engine"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#google-app-engine","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Aspects: Database access and modification, APIs, Cron jobs, Task Queue.\nSource: Teammates code base, Official Docs")]),_v(" "),_c('ul',[_c('li',[_v("Learnt about GAE timeout and its response to timed-out events which can be utilized to recover from such events")]),_v(" "),_c('li',[_v("Learnt about "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("appengine-web.xml")]),_v(" to configure environment variables such as Java runtime version and scaling policy")])]),_v(" "),_c('h3',{attrs:{"id":"java"}},[_c('span',{staticClass:"anchor",attrs:{"id":"java"}}),_v("Java"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#java","onclick":"event.stopPropagation()"}})]),_v(" "),_c('ul',[_c('li',[_v("Learnt that high-level data structures should be prioritized over primitive ones to make the code more extendable e.g ArrayList should be used instead of array")]),_v(" "),_c('li',[_v("Revised best programming practices and OOP principles in Java")])]),_v(" "),_c('h3',{attrs:{"id":"objectify"}},[_c('span',{staticClass:"anchor",attrs:{"id":"objectify"}}),_v("Objectify"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#objectify","onclick":"event.stopPropagation()"}})]),_v(" "),_c('ul',[_c('li',[_v("Learnt about CRUD actions on the datastore")]),_v(" "),_c('li',[_v("Learnt about server-side filtering feature")]),_v(" "),_c('li',[_v("Other basic operations:\n"),_c('ul',[_c('li',[_v("Defining entities")]),_v(" "),_c('li',[_v("Loading/Deleting/Updating entities")]),_v(" "),_c('li',[_v("Key-only queries")])])]),_v(" "),_c('li',[_v("Transactions:\n"),_c('ul',[_c('li',[_v("Entity groups: to allow atomic transactions to be carried out. The groups are defined based on each entity's parent")]),_v(" "),_c('li',[_v("Optimistic concurrency: Objectify allows concurrent transactions, and any conflicts in timestamps of entities will cause the transaction to be rolled back. Optimistic concurrency generally has a higher throughput than pessimistic concurrency")])])]),_v(" "),_c('li',[_v("Indexing:\n"),_c('ul',[_c('li',[_v("To index an entity with an attribute, use the tag "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("@Index")]),_v(" ("),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("@Cache")]),_v(" can also be used to cache entities)")]),_v(" "),_c('li',[_v("Appengine indexing rules enforce the use of efficient queries, and make it almost impossible to write slow queries")])])])]),_v(" "),_c('h3',{attrs:{"id":"google-cloud-platform"}},[_c('span',{staticClass:"anchor",attrs:{"id":"google-cloud-platform"}}),_v("Google Cloud Platform"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#google-cloud-platform","onclick":"event.stopPropagation()"}})]),_v(" "),_c('ul',[_c('li',[_v("Learnt that parallelism can cause mutiple instances to be created and thus increase the cost. Thus, large requests are broken down into smaller ones and run synchronously to avoid a burst of instance creation")]),_v(" "),_c('li',[_v("Used API services such as Gmail API to send notifications to customers and production logs to admin")]),_v(" "),_c('li',[_v("Used Cloud Trace to find performance bottle-neck of API calls")]),_v(" "),_c('li',[_v("Used Cloud Profiler to identify and analyze performance bottlenecks")]),_v(" "),_c('li',[_v("Used staging server to simulate a production environment for stress testing on performance bottlenecks")])]),_v(" "),_c('h3',{attrs:{"id":"backend-techniques-and-amp-testing"}},[_c('span',{staticClass:"anchor",attrs:{"id":"backend-techniques-and-amp-testing"}}),_v("Backend Techniques & Testing"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#backend-techniques-and-amp-testing","onclick":"event.stopPropagation()"}})]),_v(" "),_c('ul',[_c('li',[_v("Paginatied API calls: break a huge request down into smaller requests. This allows for more data to be sent at the cost of additional performance overhead")]),_v(" "),_c('li',[_v("Created sripts to generate mock data and retrieve information about the database for the admin")]),_v(" "),_c('li',[_v("Created LnP test scripts to assess performance of heavily used APIs such as student enrolment")]),_v(" "),_c('li',[_v("Configured "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("test.properties")]),_v(" and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("JMeterElements.java")]),_v(" for running LnP scripts against staging server by adding domain and port of the staging server as target point")]),_v(" "),_c('li',[_v("E2E testing with Selenium:\n"),_c('ul',[_c('li',[_v("Learnt about the usage of "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("id")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("xpath")]),_v(" and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("css selector")]),_v(" to identify web components for testing purposes")]),_v(" "),_c('li',[_v("Learnt about the usage of page objects to simulate user actions")]),_v(" "),_c('li',[_v("Learnt about the usage of service stubs to simulate http responses")])])]),_v(" "),_c('li',[_v("Learnt about "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("JMeter")]),_v(" as an application for LnP testing:\n"),_c('ul',[_c('li',[_v("Create test data")]),_v(" "),_c('li',[_v("Create csv test data to be send with APIs to BE")]),_v(" "),_c('li',[_v("Construct LnP test plan:\n"),_c('ul',[_c('li',[_v("Add csrf token and login sampler for CRUD actions")]),_v(" "),_c('li',[_v("Add request headers")]),_v(" "),_c('li',[_v("Add http sampler to carry out the request to BE with created test data")]),_v(" "),_c('li',[_v("Run the test concurrently by configuring the number of threads")])])]),_v(" "),_c('li',[_v("Remove data from datastore and delete test files after the test")])])])]),_v(" "),_c('i',{staticClass:"fa fa-arrow-circle-up fa-lg d-print-none",attrs:{"id":"scroll-top-button","onclick":"handleScrollTop()","aria-hidden":"true"}})])}
},function anonymous(
) {
with(this){return _c('footer',[_c('div',{staticClass:"text-center"},[_c('p',[_v("["),_c('strong',[_v("This site was generated using "),_c('img',{attrs:{"src":"https://markbind.org/favicon.ico","width":"25"}}),_v(" "),_c('a',{attrs:{"href":"https://markbind.org/"}},[_v("MarkBind 4.1.0")])]),_v(" on Tue, May 2, 2023, 2:23:27 PM UTC]"),_c('br'),_v(" "),_c('span',{staticClass:"dimmed"},[_c('small',[_c('small',[_v("favicon.ico of this site was made by "),_c('a',{attrs:{"href":"https://www.flaticon.com/authors/smashicons","title":"Smashicons"}},[_v("Smashicons")]),_v(" from "),_c('a',{attrs:{"href":"https://www.flaticon.com/","title":"Flaticon"}},[_v("www.flaticon.com")]),_v(" is licensed by "),_c('a',{attrs:{"href":"http://creativecommons.org/licenses/by/3.0/","title":"Creative Commons BY 3.0","target":"_blank"}},[_v("CC 3.0 BY")])])])])])])])}
}];
  

    var pageVueRenderFn = function anonymous(
) {
with(this){return _c('div',{attrs:{"id":"app"}},[_c('header',{attrs:{"fixed":""}},[_c('navbar',{attrs:{"placement":"top","type":"primary"},scopedSlots:_u([{key:"brand",fn:function(){return [_c('a',{staticClass:"navbar-brand",attrs:{"href":"/2023/index.html","title":"Home"}},[_v("CS3281&2-2023/Students")])]},proxy:true},{key:"right",fn:function(){return [_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://github.com/nus-cs3281/2023"}},[_c('span',[_c('span',{staticClass:"fab fa-github",attrs:{"aria-hidden":"true"}})])])])]},proxy:true}])},[_v(" "),_c('dropdown',{staticClass:"nav-link",scopedSlots:_u([{key:"header",fn:function(){return [_v("CS3281")]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2023/index.html"}},[_v("Students")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2023/students/knowledge.html"}},[_v("Knowledge")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"https://nus-cs3281.github.io/2023-dashboard/?search=&sort=groupTitle&sortWithin=title&timeframe=commit&mergegroup=&groupSelect=groupByAuthors&breakdown=false"}},[_v("Code Dashboard")])])]),_v(" "),_c('dropdown',{staticClass:"nav-link",scopedSlots:_u([{key:"header",fn:function(){return [_v("CS3282")]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2023/cs3282-index.html"}},[_v("Students")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2023/students/talksSchedule.html"}},[_v("Lightning Talks")])])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/2023/instructions.html"}},[_v("Instructions")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://nus-cs3281.github.io/website/"}},[_v("CS3281&2 Website "),_c('span',[_c('span',{staticClass:"glyphicon glyphicon-share-alt",attrs:{"aria-hidden":"true"}})])])])],1)],1),_v(" "),_c('div',{attrs:{"id":"flex-body"}},[_m(0),_v(" "),_c('overlay-source',{staticClass:"fixed-header-padding",attrs:{"id":"page-nav","tag-name":"nav","to":"page-nav"}},[_c('div',{staticClass:"nav-component slim-scroll"})])],1),_v(" "),_m(1)])}
};
    var pageVueStaticRenderFns = [function anonymous(
) {
with(this){return _c('div',{staticClass:"fixed-header-padding",attrs:{"id":"content-wrapper"}},[_c('h3',{attrs:{"id":"git-cloning-windows-credential-manager"}},[_c('span',{staticClass:"anchor",attrs:{"id":"git-cloning-windows-credential-manager"}}),_v("Git Cloning/Windows Credential Manager"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#git-cloning-windows-credential-manager","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("These are the pointers that I learned while testing out git cloning for private repositories:")]),_v(" "),_c('ul',[_c('li',[_v("When cloning private repositories for the first time, access is determined by GitHub account credentials.")]),_v(" "),_c('li',[_v("These credentials are stored on Windows Credential Manager, which allows cloning private repositories again without having to log in.")]),_v(" "),_c('li',[_v("The stored credentials can be deleted. In that case, for the next private repo cloning attempt, the credentials have to be keyed in again.")])]),_v(" "),_c('h3',{attrs:{"id":"java-date-time-apis"}},[_c('span',{staticClass:"anchor",attrs:{"id":"java-date-time-apis"}}),_v("Java Date/Time APIs"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#java-date-time-apis","onclick":"event.stopPropagation()"}})]),_v(" "),_c('h4',{attrs:{"id":"below-is-a-table-comparing-some-java-8-date-time-apis-that-i-worked-with-in-pr-1625"}},[_c('span',{staticClass:"anchor",attrs:{"id":"below-is-a-table-comparing-some-java-8-date-time-apis-that-i-worked-with-in-pr-1625"}}),_v("Below is a table comparing some Java 8 date/time APIs that I worked with in "),_c('a',{attrs:{"href":"https://github.com/reposense/RepoSense/pull/1625"}},[_v("PR #1625")]),_v(":"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#below-is-a-table-comparing-some-java-8-date-time-apis-that-i-worked-with-in-pr-1625","onclick":"event.stopPropagation()"}})]),_v(" "),_c('div',{staticClass:"table-responsive"},[_c('table',{staticClass:"markbind-table table table-bordered table-striped"},[_c('thead',[_c('tr',[_c('th',[_v("Point of Comparison")]),_v(" "),_c('th',[_c('a',{attrs:{"href":"https://docs.oracle.com/javase/8/docs/api/java/util/Date.html"}},[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Date")])])]),_v(" "),_c('th',[_c('a',{attrs:{"href":"https://docs.oracle.com/javase/8/docs/api/java/util/Calendar.html"}},[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Calendar")])])]),_v(" "),_c('th',[_c('a',{attrs:{"href":"https://docs.oracle.com/javase/8/docs/api/java/time/LocalDateTime.html"}},[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("LocalDateTime")])])]),_v(" "),_c('th',[_c('a',{attrs:{"href":"https://docs.oracle.com/javase/8/docs/api/java/time/ZonedDateTime.html"}},[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("ZonedDateTime")])])])])]),_v(" "),_c('tbody',[_c('tr',[_c('td',[_v("Packaged In")]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("java.util")])]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("java.util")])]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("java.time")])]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("java.time")])])]),_v(" "),_c('tr',[_c('td',[_v("Formatter")]),_v(" "),_c('td',[_c('a',{attrs:{"href":"https://docs.oracle.com/javase/8/docs/api/java/text/SimpleDateFormat.html"}},[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("SimpleDateFormat")])])]),_v(" "),_c('td',[_c('a',{attrs:{"href":"https://docs.oracle.com/javase/8/docs/api/java/text/SimpleDateFormat.html"}},[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("SimpleDateFormat")])])]),_v(" "),_c('td',[_c('a',{attrs:{"href":"https://docs.oracle.com/javase/8/docs/api/java/time/format/DateTimeFormatter.html"}},[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("DateTimeFormatter")])])]),_v(" "),_c('td',[_c('a',{attrs:{"href":"https://docs.oracle.com/javase/8/docs/api/java/time/format/DateTimeFormatter.html"}},[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("DateTimeFormatter")])])])]),_v(" "),_c('tr',[_c('td',[_v("Time-Zone")]),_v(" "),_c('td',[_v("Dependent on time zone. Intended to use UTC, but may depend on host environment.")]),_v(" "),_c('td',[_v("Dependent on time zone.")]),_v(" "),_c('td',[_v("Itself not dependent on time zone, but can be combined with a time zone to give "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("ZonedDateTime")]),_v(".")]),_v(" "),_c('td',[_v("Dependent on time zone.")])]),_v(" "),_c('tr',[_c('td',[_v("Month Indexing")]),_v(" "),_c('td',[_v("Zero-based indexing (E.g. January is represented by the int 0)")]),_v(" "),_c('td',[_v("Zero-based indexing")]),_v(" "),_c('td',[_v("One-based indexing (E.g. January is represented by 1)")]),_v(" "),_c('td',[_v("One-based indexing")])]),_v(" "),_c('tr',[_c('td',[_v("Thread-Safety")]),_v(" "),_c('td',[_v("No")]),_v(" "),_c('td',[_v("No")]),_v(" "),_c('td',[_v("Yes")]),_v(" "),_c('td',[_v("Yes")])]),_v(" "),_c('tr',[_c('td',[_v("Usage in RepoSense")]),_v(" "),_c('td',[_c('strong',[_v("No longer in use.")]),_v(" "),_c('br'),_v(" "),_c('em',[_v("Before "),_c('a',{attrs:{"href":"https://github.com/reposense/RepoSense/pull/1625"}},[_v("PR #1625")]),_v(":")]),_v(" "),_c('br'),_v(" Store commit timestamp.")]),_v(" "),_c('td',[_c('strong',[_v("No longer in use.")]),_v(" "),_c('em',[_v("Before "),_c('a',{attrs:{"href":"https://github.com/reposense/RepoSense/pull/1625"}},[_v("PR #1625")]),_v(":")]),_v(" "),_c('br'),_v(" Add/subtract date-time.")]),_v(" "),_c('td',[_v("Store commit timestamp. Time-zone is stored separately.")]),_v(" "),_c('td',[_v("Format dates for git commands and convert commit timestamps to user's time-zone.")])])])])]),_c('h4',{attrs:{"id":"what-happened-when-simpledateformat-was-used-in-reposense"}},[_c('span',{staticClass:"anchor",attrs:{"id":"what-happened-when-simpledateformat-was-used-in-reposense"}}),_v("What happened when "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("SimpleDateFormat")]),_v(" was used in RepoSense:"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#what-happened-when-simpledateformat-was-used-in-reposense","onclick":"event.stopPropagation()"}})]),_v(" "),_c('ul',[_c('li',[_v("When formatting or parsing dates, the internal state of the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("SimpleDateFormat")]),_v(" is mutated.")]),_v(" "),_c('li',[_v("This causes race conditions, as described in "),_c('a',{attrs:{"href":"https://github.com/reposense/RepoSense/issues/1601#issuecomment-1016130764"}},[_v("this post")]),_v(".")]),_v(" "),_c('li',[_v("There are two possible error scenarios:\n"),_c('ul',[_c('li',[_v("A "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("NumberFormatException")]),_v(" is thrown, just like in "),_c('a',{attrs:{"href":"https://github.com/reposense/RepoSense/issues/1601"}},[_v("issue #1601")]),_v(".")]),_v(" "),_c('li',[_v("A date string is parsed with no exceptions, but the date turns out to be wrong/weird. This can be detected by running tests or system tests involving date parsing/formatting and checking the test output against the expected output.")])])])]),_v(" "),_c('h4',{attrs:{"id":"additional-resources"}},[_c('span',{staticClass:"anchor",attrs:{"id":"additional-resources"}}),_v("Additional Resources:"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#additional-resources","onclick":"event.stopPropagation()"}})]),_v(" "),_c('ul',[_c('li',[_c('a',{attrs:{"href":"https://www.baeldung.com/java-8-date-time-intro"}},[_v("https://www.baeldung.com/java-8-date-time-intro")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"https://www.baeldung.com/migrating-to-java-8-date-time-api"}},[_v("https://www.baeldung.com/migrating-to-java-8-date-time-api")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"https://www.callicoder.com/java-simpledateformat-thread-safety-issues/"}},[_v("https://www.callicoder.com/java-simpledateformat-thread-safety-issues/")])])]),_v(" "),_c('h3',{attrs:{"id":"toolstack-upgrades-over-many-versions"}},[_c('span',{staticClass:"anchor",attrs:{"id":"toolstack-upgrades-over-many-versions"}}),_v("Toolstack upgrades over many versions"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#toolstack-upgrades-over-many-versions","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Sometimes, the toolstack used in a project may be very out-of-date, requiring a jump over many versions to reach the latest version. Here are some tips for upgrading the toolstack:")]),_v(" "),_c('ul',[_c('li',[_v("Start a separate branch for your upgrades.")]),_v(" "),_c('li',[_v("Check the current versions of the tools that your project is currently using.")]),_v(" "),_c('li',[_v("Also take note of any requirements from your current toolstack/project that need to be preserved.")]),_v(" "),_c('li',[_v("Check through the release notes for all versions from the current version to the target version that you intend to upgrade to.\n"),_c('ul',[_c('li',[_v("Although it is ideal to upgrade to the latest version, it may be unrealistic to jump straight there, given that major compatibility-breaking changes can accumulate.")]),_v(" "),_c('li',[_v("Instead, aim for an intermediate version to gradually resolve issues with backward compatibility.")]),_v(" "),_c('li',[_v("While searching through the release notes, take note of any deprecations and compatibility-breaking changes.")]),_v(" "),_c('li',[_v("Take note of any third-party dependencies. Some of them may not have been upgraded alongside the main tools.")])])]),_v(" "),_c('li',[_v("After upgrading the relevant tools, check that the toolstack/project requirements are preserved.")])]),_v(" "),_c('h3',{attrs:{"id":"gradle-task-configuration-avoidance"}},[_c('span',{staticClass:"anchor",attrs:{"id":"gradle-task-configuration-avoidance"}}),_v("Gradle Task Configuration Avoidance"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#gradle-task-configuration-avoidance","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Gradle has "),_c('a',{attrs:{"href":"https://docs.gradle.org/current/userguide/build_lifecycle.html#sec:configuration_and_execution_of_a_single_project_build"}},[_v("3 build phases")]),_v(":")]),_v(" "),_c('ul',[_c('li',[_v("Initialization - determine which projects are part of the build")]),_v(" "),_c('li',[_v("Configuration - evaluate build script file and the task properties and dependencies")]),_v(" "),_c('li',[_v("Execution - run the relevant tasks")])]),_v(" "),_c('p',[_v("While trying to upgrade Gradle for RepoSense, I came across the "),_c('a',{attrs:{"href":"https://docs.gradle.org/current/userguide/task_configuration_avoidance.html"}},[_v("task configuration avoidance")]),_v(" feature, which allows skipping the configuration of unwanted tasks:")]),_v(" "),_c('pre',[_c('code',{pre:true,attrs:{"class":"hljs"}},[_c('span',[_v("tasks.register(\"taskA\") {\n")]),_c('span',[_v("    // Configure the task here\n")]),_c('span',[_v("}\n")])])]),_c('p',[_v("What "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("tasks.register")]),_v(" does is to indicate that such a task exists. However, the task is only created and configured proper if something else in the build needs it.")]),_v(" "),_c('p',[_v("Using the below syntax eagerly configures the task, regardless of whether the task is ultimately needed or not:")]),_v(" "),_c('pre',[_c('code',{pre:true,attrs:{"class":"hljs"}},[_c('span',[_v("task taskA {\n")]),_c('span',[_v("    // Configure the task here\n")]),_c('span',[_v("}\n")])])]),_c('p',[_v("By avoiding task configuration for unwanted tasks, build time for the necessary tasks can be reduced.")]),_v(" "),_c('h3',{attrs:{"id":"java-8-vs-11-why-java-8-is-still-popular"}},[_c('span',{staticClass:"anchor",attrs:{"id":"java-8-vs-11-why-java-8-is-still-popular"}}),_v("Java 8 vs 11: Why Java 8 is still popular"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#java-8-vs-11-why-java-8-is-still-popular","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("While exploring the possibility of "),_c('a',{attrs:{"href":"https://github.com/reposense/RepoSense/issues/1304"}},[_v("migrating RepoSense to Java 11")]),_v(", one consideration was whether potential RepoSense users are also migrating beyond Java 8.\nIf most users stay with Java 8, this would decrease the size of our user base.")]),_v(" "),_c('p',[_v("A few surveys attest to the popularity of Java 8 vs other versions (including Java 11). These surveys can be found below:")]),_v(" "),_c('ul',[_c('li',[_c('a',{attrs:{"href":"https://www.infoworld.com/article/3652408/java-8-still-dominates-but-java-17-wave-is-coming-survey.html"}},[_v("https://www.infoworld.com/article/3652408/java-8-still-dominates-but-java-17-wave-is-coming-survey.html")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"https://snyk.io/blog/developers-dont-want-to-leave-java-8-as-64-hold-firm-on-their-preferred-release/"}},[_v("https://snyk.io/blog/developers-dont-want-to-leave-java-8-as-64-hold-firm-on-their-preferred-release/")])])]),_v(" "),_c('p',[_v("While long-term support (LTS) was cited as a key factor in staying with Java 8, this can only explain why Java 8 is more popular than non-LTS versions. Java 11 and 17 are also LTS versions after all.")]),_v(" "),_c('p',[_v("Another possible factor is the "),_c('a',{attrs:{"href":"https://blogs.oracle.com/java/post/oracle-jdk-releases-for-java-11-and-later"}},[_v("change in Java licensing for Java 11 and beyond")]),_v(". As explained in "),_c('a',{attrs:{"href":"https://www.frameworktraining.co.uk/blog/why-is-java-8-more-popular-than-java-14/"}},[_v("this article")]),_v(", organisations using the Oracle JDK version of Java 11+ for commercial purposes need to pay for it.\nThere is also OpenJDK, but in the same article, it was mentioned that some organisations are reluctant to use OpenJDK.")]),_v(" "),_c('p',[_v("On an additional note, "),_c('a',{attrs:{"href":"https://www.oracle.com/java/technologies/java-se-support-roadmap.html"}},[_v("Java 8's Extended Support")]),_v(" is expected to last longer compared to other LTS versions at this point in time.\nFor example, while Java 8 has Extended Support until December 2030, Java 11's Extended Support will end in September 2026. However, support for Java 11 may be extended in the future.")]),_v(" "),_c('i',{staticClass:"fa fa-arrow-circle-up fa-lg d-print-none",attrs:{"id":"scroll-top-button","onclick":"handleScrollTop()","aria-hidden":"true"}})])}
},function anonymous(
) {
with(this){return _c('footer',[_c('div',{staticClass:"text-center"},[_c('p',[_v("["),_c('strong',[_v("This site was generated using "),_c('img',{attrs:{"src":"https://markbind.org/favicon.ico","width":"25"}}),_v(" "),_c('a',{attrs:{"href":"https://markbind.org/"}},[_v("MarkBind 4.1.0")])]),_v(" on Tue, May 2, 2023, 2:23:27 PM UTC]"),_c('br'),_v(" "),_c('span',{staticClass:"dimmed"},[_c('small',[_c('small',[_v("favicon.ico of this site was made by "),_c('a',{attrs:{"href":"https://www.flaticon.com/authors/smashicons","title":"Smashicons"}},[_v("Smashicons")]),_v(" from "),_c('a',{attrs:{"href":"https://www.flaticon.com/","title":"Flaticon"}},[_v("www.flaticon.com")]),_v(" is licensed by "),_c('a',{attrs:{"href":"http://creativecommons.org/licenses/by/3.0/","title":"Creative Commons BY 3.0","target":"_blank"}},[_v("CC 3.0 BY")])])])])])])])}
}];
  
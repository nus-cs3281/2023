
    var pageVueRenderFn = function anonymous(
) {
with(this){return _c('div',{attrs:{"id":"app"}},[_c('header',{attrs:{"fixed":""}},[_c('navbar',{attrs:{"placement":"top","type":"primary"},scopedSlots:_u([{key:"brand",fn:function(){return [_c('a',{staticClass:"navbar-brand",attrs:{"href":"/2023/index.html","title":"Home"}},[_v("CS3281&2-2023/Students")])]},proxy:true},{key:"right",fn:function(){return [_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://github.com/nus-cs3281/2023"}},[_c('span',[_c('span',{staticClass:"fab fa-github",attrs:{"aria-hidden":"true"}})])])])]},proxy:true}])},[_v(" "),_c('dropdown',{staticClass:"nav-link",scopedSlots:_u([{key:"header",fn:function(){return [_v("CS3281")]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2023/index.html"}},[_v("Students")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2023/students/knowledge.html"}},[_v("Knowledge")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"https://nus-cs3281.github.io/2023-dashboard/?search=&sort=groupTitle&sortWithin=title&timeframe=commit&mergegroup=&groupSelect=groupByAuthors&breakdown=false"}},[_v("Code Dashboard")])])]),_v(" "),_c('dropdown',{staticClass:"nav-link",scopedSlots:_u([{key:"header",fn:function(){return [_v("CS3282")]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2023/cs3282-index.html"}},[_v("Students")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2023/students/talksSchedule.html"}},[_v("Lightning Talks")])])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/2023/instructions.html"}},[_v("Instructions")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://nus-cs3281.github.io/website/"}},[_v("CS3281&2 Website "),_c('span',[_c('span',{staticClass:"glyphicon glyphicon-share-alt",attrs:{"aria-hidden":"true"}})])])])],1)],1),_v(" "),_c('div',{attrs:{"id":"flex-body"}},[_m(0),_v(" "),_c('overlay-source',{staticClass:"fixed-header-padding",attrs:{"id":"page-nav","tag-name":"nav","to":"page-nav"}},[_c('div',{staticClass:"nav-component slim-scroll"})])],1),_v(" "),_m(1)])}
};
    var pageVueStaticRenderFns = [function anonymous(
) {
with(this){return _c('div',{staticClass:"fixed-header-padding",attrs:{"id":"content-wrapper"}},[_c('h3',{attrs:{"id":"project-wikimedia-commons-app"}},[_c('span',{staticClass:"anchor",attrs:{"id":"project-wikimedia-commons-app"}}),_v("Project: Wikimedia Commons App"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#project-wikimedia-commons-app","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_c('a',{attrs:{"href":"https://github.com/commons-app/apps-android-commons"}},[_v("Github: Wikimedia Commons App")])]),_v(" "),_c('p',[_v("Wikimedia Commons is part of the Wikimedia family for non-profit free content that handles uploading, reviewing and sharing of pictures.\nThe app allows users to upload their work directly from their mobile device where they might have taken the photo.")]),_v(" "),_c('h3',{attrs:{"id":"my-contributions"}},[_c('span',{staticClass:"anchor",attrs:{"id":"my-contributions"}}),_v("My Contributions"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#my-contributions","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("PRs merged:")]),_v(" "),_c('ul',[_c('li',[_c('a',{attrs:{"href":"https://github.com/commons-app/apps-android-commons/pull/5141"}},[_v("Fix #4347: Remove leading and trailing spaces in title #5141")]),_v(" (first timer issue)\n"),_c('ul',[_c('li',[_v("Performed basic removal of whitespace from title of image to avoid strange URLs generated for these images.")]),_v(" "),_c('li',[_v("Of note is that the current Android SDK minimum version of the application did not have Java's "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("strip")]),_v(" (introduced only in Java 11) so a manual implementation was required.")])])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"https://github.com/commons-app/apps-android-commons/pull/5145"}},[_v("Fix #493: Fix erroneous no location reminder #5145")]),_v(" "),_c('ul',[_c('li',[_v("There is a feature where if a user uploads too many images without location information, the user will be given a reminder that location information is helpful for Wiki editors.")]),_v(" "),_c('li',[_v("The bug causes a reminder to be sent when the threshold is hit regardless of whether the current image being uploaded has location information.")]),_v(" "),_c('li',[_v("This PR fixes the bug, add unit tests to check for the above behavior and slightly altered the code to more closely fit the MVP design of the project.")])])]),_v(" "),_c('li',[_v("Reuse "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("DialogUtil::showAlertDialog")]),_v(" in the codebase where applicable (Minor code quality PRs)\n"),_c('ul',[_c('li',[_v("PR 1: "),_c('a',{attrs:{"href":"https://github.com/commons-app/apps-android-commons/pull/5149"}},[_v("Fix #5148: Use DialogUtil method in Uploadactivity #5149")])]),_v(" "),_c('li',[_v("PR 2: "),_c('a',{attrs:{"href":"https://github.com/commons-app/apps-android-commons/pull/5152"}},[_v("Fix #5151: Use DialogUtil methods instead of AlertDialog.Builder #5152")])]),_v(" "),_c('li',[_v("PR 3: "),_c('a',{attrs:{"href":"https://github.com/commons-app/apps-android-commons/pull/5153"}},[_v("Fix #5151: Use DialogUtil for MediaDetailFragment #5153")])])])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"https://github.com/commons-app/apps-android-commons/pull/5179"}},[_v("Fixes #4607: Copied description, caption and language structure removed after canceling upload of one media #5179")]),_v(" "),_c('ul',[_c('li',[_v("There is a feature where a user uploading multiple images can choose to copy their title and description to remaining images.")]),_v(" "),_c('li',[_v("Upon removal of an image in the list of images, the next entry is displayed but without the copied title and description. The actual behavior and reasoning is far more complex and details can be found in the PR.")]),_v(" "),_c('li',[_v("Identified the cause of the bug and implemented a fix that changes the least amount of code that fits with the design.")])])])]),_v(" "),_c('p',[_v("Issues created:")]),_v(" "),_c('ul',[_c('li',[_v("Code quality issue relating to "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("DialogUtil::showAlertDialog")]),_v(" "),_c('ul',[_c('li',[_c('a',{attrs:{"href":"https://github.com/commons-app/apps-android-commons/issues/5151"}},[_v("Code Quality: Update various implementations of AlertDialog.Builder to use DialogUtil methods #5151")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"https://github.com/commons-app/apps-android-commons/issues/5148"}},[_v("Code quality (UploadActivity): Use DialogUtil method instead of re-implementing in showInfoAlert #5148")])])])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"https://github.com/commons-app/apps-android-commons/issues/5180"}},[_v("[Bug]: Duplicate filename notification completely replaces image-found-on-internet warning #5180")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"https://github.com/commons-app/apps-android-commons/issues/5181"}},[_v("[Bug]: Misleading warning title for duplicate file name #5181")])])]),_v(" "),_c('h3',{attrs:{"id":"my-learning-record"}},[_c('span',{staticClass:"anchor",attrs:{"id":"my-learning-record"}}),_v("My Learning Record"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#my-learning-record","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Give tools/technologies you learned here. Include resources you used, and a brief summary of the resource.")]),_v(" "),_c('ul',[_c('li',[_v("Kotlin - language rising in popularity that runs on the JVM and compatible with Java. It is frequently used in Android app development.\n"),_c('ul',[_c('li',[_v("Built-in null safety. A nice "),_c('a',{attrs:{"href":"https://typealias.com/guides/java-optionals-and-kotlin-nulls/"}},[_v("summary resource")]),_v(" I found showing the comparisons between the null safety methods in Kotlin and equivalent ones in Java's "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Optional")]),_v(".")])])]),_v(" "),_c('li',[_v("Android Studio - IDE for Android app development. Interface is almost identical to IntelliJ but includes built-in support for device emulator at various Android SDK levels. The debugger is incredibly powerful as you can run the built application on the emulated device and the breakpoints would pause the emulated device itself.\n"),_c('ul',[_c('li',[_v("Official information can be found at the "),_c('a',{attrs:{"href":"https://developer.android.com/studio/intro"}},[_v("Android Studio website")])]),_v(" "),_c('li',[_v("I found this "),_c('a',{attrs:{"href":"https://stackoverflow.com/a/55771001"}},[_v("Stack Overflow answer")]),_v(" particularly helpful for anyone new to Android app development. With Android Studio, we have to first download and install the required SDK version followed by a compatible OS in order to get started.")])])]),_v(" "),_c('li',[_v("Mockito - Java/Kotlin testing-support framework that allows for powerful mocking of dependencies while defining as little code for it as possible.\n"),_c('ul',[_c('li',[_v("I found this "),_c('a',{attrs:{"href":"https://www.baeldung.com/mockito-verify"}},[_v("quick summary @ baeldung.com")]),_v(" of some basic uses of Mockito to be very helpful.")])])])]),_v(" "),_c('h3',{attrs:{"id":"reflections"}},[_c('span',{staticClass:"anchor",attrs:{"id":"reflections"}}),_v("Reflections"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#reflections","onclick":"event.stopPropagation()"}})]),_v(" "),_c('h4',{attrs:{"id":"1-documents-about-workflow-of-external-project"}},[_c('span',{staticClass:"anchor",attrs:{"id":"1-documents-about-workflow-of-external-project"}}),_v("1. Documents about workflow of external project"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#1-documents-about-workflow-of-external-project","onclick":"event.stopPropagation()"}})]),_v(" "),_c('ul',[_c('li',[_c('a',{attrs:{"href":"https://github.com/commons-app/commons-app-documentation/blob/master/android/README.md#-developer-documentation"}},[_v("Main developer documentation")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"https://github.com/commons-app/commons-app-documentation/blob/master/android/Developer-workflow.md"}},[_v("Developer Workflow")])])]),_v(" "),_c('h4',{attrs:{"id":"2-important-things-learnt-from-contributing"}},[_c('span',{staticClass:"anchor",attrs:{"id":"2-important-things-learnt-from-contributing"}}),_v("2. Important things learnt from contributing"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#2-important-things-learnt-from-contributing","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("The technical knowledge gained has been covered in the previous section. Here, I will cover some of the things I observed from working on a much larger OSS project.")]),_v(" "),_c('ul',[_c('li',[_v("There are many outdated/unverified issues, stale PRs, and stale assignees.\n"),_c('ul',[_c('li',[_v("In particular, I think the problems relating to issues and issue assignees actually makes it more difficult for new contributors to enter as many viable issues are taken up by people who might have given up on it, and these people are also responsible for finding out if an issue is still relevant or not.")]),_v(" "),_c('li',[_v("I think this is a symptom of a very large open source project without a large enough dedicated team to maintain the project as it is mostly volunteer base.")])])]),_v(" "),_c('li',[_v("Good documentation is quite rare unless actively enforced by the maintainers from the start.\n"),_c('ul',[_c('li',[_v("Many of the class and methods do not have javadocs documentations, and many that do are not well elaborated or possibly even outdated.")]),_v(" "),_c('li',[_v("There is also very little incentive for contributors to work on improving the documentation as new contributors generally prefer to choose things that are more impactful.")])])])]),_v(" "),_c('p',[_v("I think these two main things are extremely relevant for RepoSense. While not quite as large or attractive to new OSS contributors, I think lowering the barrier to entry via good maintenance and assignment of issues, and good documentation can go a long way to make a contributor's experience better.")]),_v(" "),_c('h4',{attrs:{"id":"3-practices-tools-of-external-project-that-can-be-adopted-by-reposense"}},[_c('span',{staticClass:"anchor",attrs:{"id":"3-practices-tools-of-external-project-that-can-be-adopted-by-reposense"}}),_v("3. Practices/tools of external project that can be adopted by RepoSense"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#3-practices-tools-of-external-project-that-can-be-adopted-by-reposense","onclick":"event.stopPropagation()"}})]),_v(" "),_c('ul',[_c('li',[_v("Mockito - mocking framework for Java which can be used to add more specialized unit tests for classes that have dependencies that might be better off mocked when running these tests.\n"),_c('ul',[_c('li',[_v("However, at the moment I believe there is no strong need for such a tool.")])])]),_v(" "),_c('li',[_v("MVP architecture for GUI applications - might be relevant for a potential GUI for RepoSense.\n"),_c('ul',[_c('li',[_v("The supposed benefits are that the more decoupled responsibilities of the Presenter (as opposed to the Controller in MVC) makes it much more testable, especially in conjunction with a mocking framework that is able to mock the View and Model interfaces.")])])])]),_v(" "),_c('h4',{attrs:{"id":"4-suggested-areas-of-improvement-for-external-project"}},[_c('span',{staticClass:"anchor",attrs:{"id":"4-suggested-areas-of-improvement-for-external-project"}}),_v("4. Suggested areas of improvement for external project"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#4-suggested-areas-of-improvement-for-external-project","onclick":"event.stopPropagation()"}})]),_v(" "),_c('ul',[_c('li',[_v("Documentation:\n"),_c('ul',[_c('li',[_v("I think there can be incentives for new contributors to add JavaDocs documentation as part of the 5 necessary PRs before they can work on enhancements (instead of just bug fixes).")]),_v(" "),_c('li',[_v("The "),_c('a',{attrs:{"href":"https://github.com/commons-app/commons-app-documentation/blob/master/android/Software-design-document.md"}},[_v("software design document")]),_v(" is still a work-in-progress and there are no resources regarding the architectural design of the codebase.")]),_v(" "),_c('li',[_v("The two points above compound to make it very difficult to understand what classes are responsible for what part of the application.")])])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"https://github.com/commons-app/commons-app-documentation/blob/master/android/Quick-start-guide-for-Developers.md"}},[_v("Quick start guide")]),_v(" "),_c('ul',[_c('li',[_v("I believe this can be improved by including a section about installing an SDK version and compatible OS for emulation before building.")])])])]),_v(" "),_c('i',{staticClass:"fa fa-arrow-circle-up fa-lg d-print-none",attrs:{"id":"scroll-top-button","onclick":"handleScrollTop()","aria-hidden":"true"}})])}
},function anonymous(
) {
with(this){return _c('footer',[_c('div',{staticClass:"text-center"},[_c('p',[_v("["),_c('strong',[_v("This site was generated using "),_c('img',{attrs:{"src":"https://markbind.org/favicon.ico","width":"25"}}),_v(" "),_c('a',{attrs:{"href":"https://markbind.org/"}},[_v("MarkBind 4.1.0")])]),_v(" on Tue, May 2, 2023, 2:23:27 PM UTC]"),_c('br'),_v(" "),_c('span',{staticClass:"dimmed"},[_c('small',[_c('small',[_v("favicon.ico of this site was made by "),_c('a',{attrs:{"href":"https://www.flaticon.com/authors/smashicons","title":"Smashicons"}},[_v("Smashicons")]),_v(" from "),_c('a',{attrs:{"href":"https://www.flaticon.com/","title":"Flaticon"}},[_v("www.flaticon.com")]),_v(" is licensed by "),_c('a',{attrs:{"href":"http://creativecommons.org/licenses/by/3.0/","title":"Creative Commons BY 3.0","target":"_blank"}},[_v("CC 3.0 BY")])])])])])])])}
}];
  
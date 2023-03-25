### Project: Wikimedia Commons App
[Github: Wikimedia Commons App](https://github.com/commons-app/apps-android-commons)

Wikimedia Commons is part of the Wikimedia family for non-profit free content that handles uploading, reviewing and sharing of pictures. 
The app allows users to upload their work directly from their mobile device where they might have taken the photo.

### My Contributions

PRs merged:
- [Fix #4347: Remove leading and trailing spaces in title #5141](https://github.com/commons-app/apps-android-commons/pull/5141) (first timer issue)
  - Performed basic removal of whitespace from title of image to avoid strange URLs generated for these images. 
  - Of note is that the current Android SDK minimum version of the application did not have Java's `strip` (introduced only in Java 11) so a manual implementation was required.
- [Fix #493: Fix erroneous no location reminder #5145](https://github.com/commons-app/apps-android-commons/pull/5145) 
  - There is a feature where if a user uploads too many images without location information, the user will be given a reminder that location information is helpful for Wiki editors.
  - The bug causes a reminder to be sent when the threshold is hit regardless of whether the current image being uploaded has location information.
  - This PR fixes the bug, add unit tests to check for the above behavior and slightly altered the code to more closely fit the MVP design of the project.
- Reuse `DialogUtil::showAlertDialog` in the codebase where applicable (Minor code quality PRs)
  - PR 1: [Fix #5148: Use DialogUtil method in Uploadactivity #5149](https://github.com/commons-app/apps-android-commons/pull/5149)
  - PR 2: [Fix #5151: Use DialogUtil methods instead of AlertDialog.Builder #5152](https://github.com/commons-app/apps-android-commons/pull/5152)
  - PR 3: [Fix #5151: Use DialogUtil for MediaDetailFragment #5153](https://github.com/commons-app/apps-android-commons/pull/5153)
- [Fixes #4607: Copied description, caption and language structure removed after canceling upload of one media #5179](https://github.com/commons-app/apps-android-commons/pull/5179)
  - There is a feature where a user uploading multiple images can choose to copy their title and description to remaining images.
  - Upon removal of an image in the list of images, the next entry is displayed but without the copied title and description. The actual behavior and reasoning is far more complex and details can be found in the PR.
  - Identified the cause of the bug and implemented a fix that changes the least amount of code that fits with the design. 

Issues created:
- Code quality issue delating to `DialogUtil::showAlertDialog`
  - [Code Quality: Update various implementations of AlertDialog.Builder to use DialogUtil methods #5151](https://github.com/commons-app/apps-android-commons/issues/5151)
  - [Code quality (UploadActivity): Use DialogUtil method instead of re-implementing in showInfoAlert #5148](https://github.com/commons-app/apps-android-commons/issues/5148)
- [[Bug]: Duplicate filename notification completely replaces image-found-on-internet warning #5180](https://github.com/commons-app/apps-android-commons/issues/5180)
- [[Bug]: Misleading warning title for duplicate file name #5181](https://github.com/commons-app/apps-android-commons/issues/5181)

### My Learning Record

Give tools/technologies you learned here. Include resources you used, and a brief summary of the resource.

- Kotlin - language rising in popularity that runs on the JVM and compatible with Java. It is frequently used in Android app development.
  - Built-in null safety. A nice [summary resource](https://typealias.com/guides/java-optionals-and-kotlin-nulls/) I found showing the comparisons between the null safety methods in Kotlin and equivalent ones in Java's `Optional`.
- Android Studio - IDE for Android app development. Interface is almost identical to IntelliJ but includes built-in support for device emulator at various Android SDK levels. The debugger is incredibly powerful as you can run the built application on the emulated device and the breakpoints would pause the emulated device itself.
  - Official information can be found at the [Android Studio website](https://developer.android.com/studio/intro)
  - I found this [Stack Overflow answer](https://stackoverflow.com/a/55771001) particularly helpful for anyone new to Android app development. With Android Studio, we have to first download and install the required SDK version followed by a compatible OS in order to get started.
- Mockito - Java/Kotlin testing-support framework that allows for powerful mocking of dependencies while defining as little code for it as possible.
  - I found this [quick summary @ baeldung.com](https://www.baeldung.com/mockito-verify) of some basic uses of Mockito to be very helpful. 

### Reflections
#### 1. Documents about workflow of external project
- [Main developer documentation](https://github.com/commons-app/commons-app-documentation/blob/master/android/README.md#-developer-documentation)
- [Developer Workflow](https://github.com/commons-app/commons-app-documentation/blob/master/android/Developer-workflow.md)

#### 2. Important things learnt from contributing
The technical knowledge gained has been covered in the previous section. Here, I will cover some of the things I observed from working on a much larger OSS project.
- There are many outdated/unverified issues, stale PRs, and stale assignees. 
  - In particular, I think the problems relating to issues and issue assignees actually makes it more difficult for new contributors to enter as many viable issues are taken up by people who might have given up on it, and these people are also responsible for finding out if an issue is still relevant or not.
  - I think this is a symptom of a very large open source project without a large enough dedicated team to maintain the project as it is mostly volunteer base. 
- Good documentation is quite rare unless actively enforced by the maintainers from the start.
  - Many of the class and methods do not have javadocs documentations, and many that do are not well elaborated or possibly even outdated.
  - There is also very little incentive for contributors to work on improving the documentation as new contributors generally prefer to choose things that are more impactful. 

I think these two main things are extremely relevant for RepoSense. While not quite as large or attractive to new OSS contributors, I think lowering the barrier to entry via good maintenance and assignment of issues, and good documentation can go a long way to make a contributor's experience better.

#### 3. Practices/tools of external project that can be adopted by RepoSense
- Mockito - mocking framework for Java which can be used to add more specialized unit tests for classes that have dependencies that might be better off mocked when running these tests.
  - However, at the moment I believe there is no strong need for such a tool.
- MVP architecture for GUI applications - might be relevant for a potential GUI for RepoSense.
  - The supposed benefits are that the more decoupled responsibilities of the Presenter (as opposed to the Controller in MVC) makes it much more testable, especially in conjunction with a mocking framework that is able to mock the View and Model interfaces.

#### 4. Suggested areas of improvement for external project
- Documentation: 
  - I think there can be incentives for new contributors to add JavaDocs documentation as part of the 5 necessary PRs before they can work on enhancements (instead of just bug fixes).
  - The [software design document](https://github.com/commons-app/commons-app-documentation/blob/master/android/Software-design-document.md) is still a work-in-progress and there are no resources regarding the architectural design of the codebase.
  - The two points above compound to make it very difficult to understand what classes are responsible for what part of the application.
- [Quick start guide](https://github.com/commons-app/commons-app-documentation/blob/master/android/Quick-start-guide-for-Developers.md)
  - I believe this can be improved by including a section about installing an SDK version and compatible OS for emulation before building.

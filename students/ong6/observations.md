### Project: [Tachiyomi](https://github.com/tachiyomiorg/tachiyomi)

> Tachiyomi is a free and open-source manga reader application for Android
> devices. It allows users to read manga from various sources, including popular
> websites like Mangadex, MangaPark, and Kissmanga, and also supports importing
> manga files from local storage. Tachiyomi provides a clean and customizable
> user interface and offers features like automatic updates, tracking reading
> progress, and support for multiple languages. Additionally, Tachiyomi offers
> extensions that enable users to access manga from additional sources and
> offers customization options such as dark mode, custom reading settings, and
> more.

https://github.com/tachiyomiorg/tachiyomi/pulls?page=1&q=is:pr+author:Two-Ai

### Motivation

I have been using Tachiyomi for at least 8 years now and I really like the app.
Hence wanted to contribute back to the project. I also wanted to learn more
about andriod development and kotlin.

### My Contributions

As Tachiyomi is a manga reader that is fairly full featured, my main
contributions where on bug fixes and code refactoring. I used an alternate
github account just for this task as I didn't want my identity to get exposed
(especially since this app is used by so many people and heavily forked).

Github account used: https://github.com/Two-Ai

I started contributions before starting CS3282, as I thought it would take alot
longer to get my PRs merged, but the dev team was surprisingly fast at merging
PRs. I started by fixing some bugs that I encountered while using the app. I
also did some code refactoring to make the code more readable and easier to
maintain.

I made roughly **30 PR's** in the period from December 2022 to March of 2023.
Most of my contributions were focused on small fixes in the download logic of
the app, with some medium sized PRs which i will go into detail below.

#### Medium sized PR

[Inline DownloadQueue into Downloader](https://github.com/tachiyomiorg/tachiyomi/pull/9159)

One of my larger refactors which focused on moving the queue state into the
downloader.

[Simplify filter logic](https://github.com/tachiyomiorg/tachiyomi/pull/9141)

In this PR I simplified the logic for filtering manga. This reduced the
complexity of the code by quite a bit.

[Make DownloadManager the sole entry point for DownloadService](https://github.com/tachiyomiorg/tachiyomi/pull/9140)

The PR proposed making the DownloadManager the sole entry point for the
DownloadService, which improves the codebase in several ways. It provides a
clear structure for the Downloader system, simplifies interactions between
classes, reduces code duplication, avoids race conditions, and improves
accessibility by exposing the Downloader interface to DownloadService without
exposing the full Downloader in DownloadManager. These changes make the system
easier to understand, modify, and maintain while reducing the risk of bugs
caused by concurrent access to the system.

Complete list of

- [issues](https://github.com/tachiyomiorg/tachiyomi/issues/created_by/two-ai) I
  have opened or investigated
- [PRs](https://github.com/tachiyomiorg/tachiyomi/pulls?q=is:issue+author:two-ai+is:closed+)
  I have made and merged

### My Learning Record

#### Reflection

Tools/technologies I learned:

- All things android development related (kotlin, android studio, gradle, etc)
- Git submodules

Skills learned:

Planning: I have learned the importance of planning when working on a complex
codebase. Planning helps to identify potential issues and ensure that the
changes made to the codebase will improve its structure and maintainability.

Separation of Concerns: I have learned the importance of separating concerns
when designing a system. The proposed structure for the Downloader system
separates the responsibilities of each class and provides a clear structure for
the codebase. This separation of concerns makes the system easier to understand
and modify.

Maintainability: I have learned the importance of writing maintainable code. The
proposed changes that I've made to the codebase simplify interactions between
classes, reduce duplication of code, and make the code more concise and easier
to read and understand.

Avoiding Race Conditions: I have learned the importance of avoiding race
conditions when working on a concurrent systems. The refactored code avoids race
conditions by ensuring that the system state is consistent and by limiting the
number of dependencies between classes.

Android Architecture Components: I have learned how to use Android Architecture
Components such as LiveData, ViewModel, and Room to build more robust,
maintainable, and testable Android applications.

Multithreading: I have learned how to manage multithreading in Android
applications, including using AsyncTask, Handler, and Executor to perform
long-running operations in the background.

Networking (experimental): I have learned how to use Android's networking
libraries, such as Volley and OkHttp, to make network requests and fetch data
from web services.

#### Project Workflow

Tachiyomi's development workflow is quite simple. It uses github issues and pull
requests to track bugs and features. The project is also split into multiple
repositories, each with their own maintainers. The main repository contains the
core code and the UI. The other repositories are for the extensions, which are
used to fetch manga from different sources. The repositories are linked together
using git submodules.

Most of the development talk actually happens on their discord where users
issues and items that the lead devs want to work on will be layed out. The lead
devs will then assign the issues to themselves or other contributors. The
contributors will then work on the issue and submit a pull request. The pull
request will then be reviewed by the lead devs and merged if it is good.

https://github.com/tachiyomiorg/tachiyomi/blob/master/CONTRIBUTING.md

#### What can be adopted by MarkBind

- A community for developers to chat (discord)
- Fast and efficient code review process

#### Suggested areas of improvement for the external project

I think the setting up and beginners doc should be improved. Also I would like
them to give more feedback on the pull requeusts through github instead of
having to see my DM's on discord.

### Project 2 - [devFi](https://github.com/solana-devfi/frontend)

Devfi is a platform that allows developers to earn crypto by contributing to
open source projects. We believe that open source projects are the backbone of
the software industry and that developers should be rewarded for their
contributions.

View it [here](https://devfi-protocol.netlify.app/)

This project was developed by me and my friends as we try to give open source
developers some incentive to contribute. We plan on making it open source and to
launch it as something that web3 developers can use to reward contributors (much
like the current bounty systems, but now much easier to use).

### How it works

We created a github bot that can be added by any github organization. The said
organization can then create a bounty for any issue in their repository. The
bounty will be paid out in the form of a crypto token that is created by us. The
developer can then claim the bounty by submitting a pull request that fixes the
issue. The bot will then verify the pull request and pay out the bounty to the
developer.

### My Learning Record

Tools/technologies I learned:

- All things web development and smart contract related (typescript, nextjs,
  rust, solidity, etc)
- Github apps and octokit api

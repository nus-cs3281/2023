### Project: Ockam

Ockam is a suite of open source programming libraries and command line tools that handles end-to-end encryption, mutual authentication, key management, credential management, and authorization policy enforcement.

Modern applications are distributed and have an unwieldy number of interconnections that must trustfully exchange data. To trust data-in-motion, applications need end-to-end guarantees of data authenticity, integrity, and confidentiality. To be private and secure by-design, applications must have granular control over every trust and access decision. Ockam allows the app developer to add these controls and guarantees to any application.

As of March 2023, Ockam has a total of 3K stars of Github, 203 OSS contributors (including me) and 272K downloads on Crate (Rust's Package Registry).

[Project website](https://github.com/build-trust/ockam)

### External Project Workflow

The workflow for contributing to Ockam is pretty standard as far as open-source projects goes. A few things that I noticed that were really great were that the project maintainers were very helpful and the PRs were being reviewed quickly (often in less than 1 week's time).

1. Find an issue to work on, ideally issues that are tagged `good-first-issues`.
2. Work on fixing the bug
    - If there are any setup issues, the Ockam team has set up a [discussion forum](https://github.com/build-trust/ockam/discussions/1642) to help troubleshoot any issues.
3. Accept the [Ockam Contributor License Agreement](https://github.com/build-trust/ockam-contributors/blob/main/CLA.md)
4. Craft proper commit messages.
    - Each commit should have a `type` and `scope`. It should be organized as `type(scope): <subject>`. For example `feat(rust): ...` or `refactor(elixer): ...`.
5. Work with PR reviewer to get the PR approved.

Resources:

- [Contributing Guide](https://github.com/build-trust/.github/blob/main/CONTRIBUTING.md#contributing-to-ockam-on-github)

### My Contributions

I contributed mainly to the enhancement of the Ockam CLI.

Merged PRs:

- [refactor(rust): rename ockam tcp-listener create command arguments #3194](https://github.com/build-trust/ockam/pull/3194)

  This is a refactor PR that updates certain CLI hints in Ockam to be more intuitive.

  Original issue: [Rename ockam tcp-listener create command arguments to --at <NODE> and <ADDRESS> #3149](https://github.com/build-trust/ockam/issues/3149)

- [feat(rust): implement secure-channel-listener list command #3256](https://github.com/build-trust/ockam/pull/3256)

  My second contribution is implementing a new feature in Ockam's CLI - the ability to create secure channel listeners. Basically the idea of secure channel listeners that they are secure components that are able to consume any event that passes through a secure channel. This allows users to create channel listeners that are more secure since all of the traffic will be end-to-end encrypted.

  This involved creating new structs in Rust for user commands to the `secure-channel-listener` command, interacting with the backend to modify secure channel listeners and doing proper error handling when the user supplies erroneous inputs. More details in the PR.

  Original issue: [Implement ockam secure-channel-listener list command #3192](https://github.com/build-trust/ockam/issues/3192)

- [refactor(rust): set default_node_name using clap #4120](https://github.com/build-trust/ockam/pull/4120)

  My third contribution is a refactor code change that improves the code quality of Ockam's codebase by abstracting away the use of Optionals and replacing it with a utility function that handles the interaction with optional objects. Hence, a new developer would not have to be familiar with the proper way of handling optionals and could focus more on actual API development.

  Original issue: [ockam node start command: set default value to node argument using Clap attributes #4080](https://github.com/build-trust/ockam/issues/4080)

In addition to all the merged PRs, I'm pleased to say that I have been recognized by the team at Ockam for my contributions during one of their [release](https://github.com/build-trust/ockam/discussions/3381) :tada:!

### My Learning Record


#### How to improve visibility of the project

While Ockam as a project only started in 2021, it has now garnered over 3k stars on Github and hundreds of contributors have previously contributed to it. I think one of the main things that I saw the team at Ockam doing to improve the visibility of the project is to maintain a healthy supply of `good-first-issues` issues.

This is because many sites such as https://goodfirstissue.dev/ and https://goodfirstissues.com/ essentially scrapes Github repos for `good-first-issues` tag and highlights those projects with a higher number of `good-first-issues`.


#### Rust

Ockam's codebase is mainly written in Rust as it is more secure over other systems languages such as C++, while still retaining much of the performance benefits of being a low-level systems language which is important in the context of cryptographic operations.

The main resource that I used for learning Rust is the [official Rust website](https://www.rust-lang.org/learn/get-started). There's a more comprehensive [textbook](https://doc.rust-lang.org/book/) that I occasionally referred to when investigating certain semantics of the language. In particular, as someone who is very into Programming Languages and Compilers, I really appreciated Rust's approach to safe memory management through what they call the Ownership System. This is beautifully explained in [Chapter 4 of the textbook](https://doc.rust-lang.org/book/ch04-01-what-is-ownership.html).

#### Cargo

Cargo is Rust's build system and package manager. Most Rust projects use this tool because Cargo handles a lot of tasks for them, such as building code, downloading the libraries their code depends on, and building those libraries. Ockam also uses Cargo.

I really appreciated the fact that Cargo is shipped together with Rust as a bundle, since other similar languages such as C++ do not and it led to a lot of pain in finding the right build tool and package manager. The main resource that I used can be found in the [Rust textbook](https://doc.rust-lang.org/book/ch01-03-hello-cargo.html).

#### End-to-end Encryption

This topic is relevant to my project since one of the main uses of Ockam is to allow app developers to easily introduce end-to-end encryption to their project.

End-to-end encryption is a security method that basically ensures that only the sender and the receiver of a message are able to read the message. This means that any third-party intermediaries that the message passes through will not be able to read that message. In particular, it will mean that the government / relevant authorities will not be able to read that message.

End-to-end encryption has become a really hot topic in security recently due to the greater awareness and focus on the topic of user privacy.

Some relevant resources on end-to-end encryption:

- [End-to-end encryption wiki](https://en.wikipedia.org/wiki/End-to-end_encryption)
- [Whatsapp's end-to-end encryption](https://faq.whatsapp.com/820124435853543)
- [Google's end-to-end encryption](https://support.google.com/messages/answer/10262381?hl=en)


### Recommendations for Markbind Project

1. Ensure that there is a healthy supply of `good-first-issue` issues

Seeing how Ockam was able to greatly improve its visibility by having a lot of `good-first-issue` issues, it would be good to have a healthy supply of `good-first-issue` issues for Markbind too. This would involve Markbind developers to leave certain low-hanging fruits for new contributors to tackle.

2. Use Github Actions liberally to enforce checks

Ockam uses a total of 17 Github Actions workflows to check various things when a PR is submitted such as style checks, commit message style check, ensuring that new tests were added and the tests passes, etc. I think there is still room to improve for Markbind in terms of using Github Actions to make certain checks. In particular, I think it would be helpful to have a workflow to check that commit messages follow the proper convention, since that is a pretty common issue that keeps coming up when reviewing PRs.

3. Tagging commits with the issue type

Ockam enforces a convention for commits where the commit has to be tagged with a relevant issue type such as `feat` for feature, `fix` for bug fix, `refactor` for refactor and so on. I think this is a good way of organizing commits since one would know at a glance, what's the purpose of that commit. In addition, it would be easier when making a release since the commits are already properly tagged.

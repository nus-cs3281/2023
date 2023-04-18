### Regular Expression

Java provides regular expression through the `java.util.regex` package, which consists of three classes: `Pattern`, `Matcher` and `PatternSyntaxException`.

- `Pattern` is a compiled representation of a regular expression. It must be created via static methods, most commonly `Pattern.compile(String regex)`.
- `Matcher` then interprets the compiled pattern and matches against an input String.

I would like to touch on the more interesting aspects of Java's implementation of regex that I encountered along the way.

- I found it confusing initially that in Java, in order to specify predefined character classes such as `\s` for whitespace characters, we have to first escape the backslash within the String representation of the regex argument (so `"\\s"` instead of just `"\s"`). While this is consistent with the way Java handles escape characters in String, it caused me some minor confusion and readability issues as it was unlike other major programming language such as JavaScript and Python.
- Greedy quantifiers: `X?`, `X*`, `X+` and more. Special care must be taken while using them due to its greedy nature. In one instance, I was attempting to rewrite a regex that matches using stricter rules. I was under the pretext that my regex was working fine as it matches correctly with positive test cases, however upon further investigation, it only matched because it disregarded the remaining regex sequence due to its greedy nature.
- - I found https://regex101.com/ to be an excellent as a sanity check in this department. It breaks down our specified regex input into different capturing groups, and highlights the matches and groups accordingly.
- Looking through the JavaDoc, I also found two other related quantifers:
- - Reluctant quantifiers: `X??`, `X*?`, `X+?` and more, where the extra `?` at the end demarcates it as a reluctant quantifer.
- - Possessive quantifiers: `X?+`, `X*+`, `X++` and more, where the extra `?+` at the end demarcates it as a possessive quantifer.
- The difference between greedy and reluctant is that:
- - For greedy, the matcher "eats" the entire input before attempting to match. If there is no match, the matcher backs off the input string by one character and tries again until a match is found or no more characters are left.
- - For reluctant, the matcher starts off at the beginning of the input string, "eating" one character at a time to look for a match. It stops the moment a match is found or there is no more characters left to "eat".
- Possessive quantifiers starts with the entire input and never "tracks back" even if doing so allows the match to succeed.

### Git Clone Bare

This clones only the `.git` subfolder, and makes it the main directory cloned.

### Git Shallow Clone

This allows us to pull down only the latest commits and not the entire repo history. This can be achieved by specifying depth. The benefit of doing shallow clone is that we can clone faster due to fewer files being cloned. In RepoSense's case, we utilize `--shallow-since` flag, as it fits our use case better than `--depth` flag.

### Synchronization

Communication via threads happens primarily through sharing access to fields and the objects reference fields refer to. However, this introduces new kinds of errors in thread interference and memory consistency errors.

Thread interference happens when two operations running in different threads, and acting on the same data interleaves.

Memory consistency errors occurs when different threads have inconsistent views of what should be the same data.

- Requires the happens-before relationship which is simply a guarantee that memory writes by one specific statement are visible to another statement.

Java provides synchronization as a tool to prevent these new forms of errors. It is an action that creates a happens-before relationship.

- Synchronized methods:
- - It becomes not possible for two invocations of synchronized methods on the same object to interleave by blocking all other threads first.
- - When a synchronized method exits, it automatically establishes a happens-before relationship with any subsequent invocation of a synchronized method for the _same object_. This ensures that the changes to the state of the object are visible to all threads.
- - Constructors cannot be synchronized as it does not make sense, since only the thread that creates an object should have access to it while it is being constructed.
- - `final` fields cannot be modified after the object is constructed, so it can be safely read through non-synchronized methods.

- Intrinsic/monitor lock
- - Enforces exclusive access to an object's state and establishing happens-before relationship which are essential to visibility.
- - Every object has an intrinsic lock associated with it. A thread that needs exclusive and consistent access to an object's fields has to acquire (and said to own) the object's intrinsic lock before accessing them, and release the lock when it is done with them. No other threads can acquire the same lock during this time.
- - For static synchronized methods, the thread acquires the intrinsic lock for the `Class` object associated with the class.

- Synchronized blocks
- - Allows us to synchronize only some instructions within a method. Requires a monitor object to be passed to the synchronized block, most commonly _this_ parameter. Class object is used in place of _this_ for static synchronized blocks

- Reentrant synchronization
- - Threads cannot acquire a lock owned by a thread. However, a thread can acquire (again) a lock it already owns.
- - Happens in a situation where synchronized code directly or indirectly invokes a method that also contains synchronized code, and both sets of code use the same lock.

### GitHub Actions

GitHub Actions workflows (defined in `.github/workflow`) are triggered when an event occurs in the repository. For example, when an issue or a pull request is created, we can define the actions to be taken through the workflow `.yml` files. 

- Jobs

- - A job is a set of steps in a workflow executed on the same runner. Each step is either a shell script or an action. Since each step is executed on the same runner and is dependent on each other, we can configure what should happen if a step fails, etc.

- Runner

- -A runner is a server that runs a workflow when they are triggered. GitHub provides [Ubuntu Linux, Microsoft Windows and macOS runners]([https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idruns-on](https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idruns-on)) to run the workflows. Each workflow run executes in a fresh virtual machine.

- General .yml file

- I will highlight some essential aspects of a typical `.yml` file.

- - `on:` This allows us to specify what event will trigger the workflow.

- This is followed by a list of jobs.

- - Within each job, we can specify:

- - `runs-on:` what type of runner the job should be run on,

- - `steps:` a list of steps, within which we can specify:

- - - `run:` We can use this to run scripts and shell commands. To run scripts, we will have to store the script in our repository and supply the path.

- Sharing data between steps

- - By using GitHub environment variables, we can share data and information between steps. RepoSense uses the GitHub output environmental variable to extract the PR number for use in a future step to help download deployment status artifacts to deploy development previews. We can access it by `steps.<step_id>.outputs.<variable name>`.

- Sharing data between jobs

- - It is possible that we might want to share data and information across different workflows. To set up deployment previews on Surge.sh, RepoSense requires some information (e.g., PR number, generated MarkBind documentations) that is obtained in the main `integration.yml` workflow. To do so, we can upload artifacts to GitHub using `upload-artifact` found in the GitHub marketplace, then download it on another workflow.
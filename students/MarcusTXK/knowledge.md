<!--
	List the aspects you learned, and the resources you used to learn them, and a brief summary of each resource.
-->

### Gradle
Gradle is a build tool designed specifically to meet the requirements of building Java applications. Once it’s setup, building an application is as simple as running a single command on the command line. Gradle performs well and is also useful for managing the dependencies via its advanced dependency management system.

Learned about Gradle through a really [helpful tutorial](https://tomgregory.com/gradle-tutorial-for-complete-beginners/)


### Bash Script

Learned how to write basic bash scripts via [tutorialspoint](https://www.tutorialspoint.com/batch_script/index.htm), and had to implement batch scripts  to perform environmental checks for all files tracked by git, to ensure they end with a newline, no prohibited line endings (`\r\n`) are present and no trailing whitespaces are present. 

Some interesting bugs were encountered when attempting to use pipes in batch files, particularly one that prevents delayed expansion of variables from being properly evaluated as per usual. This is due to variables not being evaluated in the batch context, as the lines are executed only in the cmd-line context. A more detailed analysis of the bug is done by a user of  [stackoverflow](https://stackoverflow.com/questions/8192318/why-does-delayed-expansion-fail-when-inside-a-piped-block-of-code).


### Git Commmands/Functionalities

In RepoSense, a variety of git commands are utilized to get information about the repository. Through undertaking DevOps tasks, I was also exposed to other interesting git commands. Here are some of the interesting ones that I was not aware of before.

`git shortlog`  - Summarizes `git log` output, where each commit will be grouped by author and title. This is used in RepoSense to easily count the commits by the users.

`git grep` - A powerful tool that looks for specified patterns in the tracked files in the work tree, blobs registered in the index file, or blobs in given tree objects. Patterns are lists of one or more search expressions separated by newline characters. An empty string as search expression matches all lines. Utilised to write Reposense scripts to perform environmental checks for all files tracked by git, to ensure they end with a newline, no prohibited line endings (`\r\n`) are present and no trailing whitespaces are present. Used [git docs](https://git-scm.com/docs/git-grep) to learn how to use `git grep` properly and what its various flags do.

`.mailmap` - If the file .mailmap exists at the toplevel of the repository, it can be used to map author and committer names and email addresses to canonical real names and email addresses. This is useful to map multiple authors and commenters and provides a way to share the mapping with all other users of the repository. Used [git docs](https://git-scm.com/docs/git-grep) to learn how to configure git mailmap properly.


### Misc

Researched about intresting solutions for free url shortening, looking into 3 main ways to do it. Read about an in-depth writeup in [the 
 Github issue here](https://github.com/reposense/RepoSense/issues/1898). 

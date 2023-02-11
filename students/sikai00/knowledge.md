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

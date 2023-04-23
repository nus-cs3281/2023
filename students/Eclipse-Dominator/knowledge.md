### Angular and Typescript

Having once worked with Angular and Typescript in one of my personal project, I have some prior experiences with Angular. However, to refresh my memory as well as to familiarise myself with the Angular environment. I frequently referred to Angular documentation online for help.

Both Angular and another popular framework React uses a component-based architecture where developers will develop reusable components, classes as well as directives to assist in building the application. By modularising different aspect of the application into different modules, Angular enables developers to allow each componenet to have its own specialisation as well as to allow easy unit testing on each individual components.

While Angular seems to be very convoluted and heavy compared to React, a lot of its potential and ease of use is actually automated via the Angular CLI, which allows developers create template files for each component they are building.

The benefit of Typescripts is noticeable in the long run. While Javascript has dynamic typings as well as inferred types, in the long run, it is extremely difficult for developers to maintain and manage without proper documentation due to the lack of typings. Typescript essentially fixes this issue by forcefully introducing types to variables as well as enabling better linting compared to the base Javascript. Typescript adds on an additional layer of compilation where Typescript code will be compiled efficiently into Javascript code before it is launched and run. While this seems like a waste of effort, the benefits Typescript provide is very valuable as mentioned before. Besides this, Typescript also enables certain default Macros such as the `?.` and `??` operators where the expression is discontinued if the base item is `undefined` or `null`.

### HTML Text area history events

While working on adding a custom undo and redo stack for CATcher, I learnt about how HTML manages it's build in undo and redo feature in it's text area. Initially it was rather mysterious on when and how data and information is stored in the text area which enables them to do features and like undo and redo out of the box. I discovered how such features will be nullified when the value of the component is manually changed via code. However, when using libraries like the Markdown Toolbar, the history is still preserved.

It turns out that the way these is achieved is via events specified by a specific set of platfomr APIs that is accessible via the Javascript method `document.execCommand`. In this case, storing of history is done via the Internet Explorer Command Idenfifiers found [here](<https://learn.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/platform-apis/hh801229(v=vs.85)?redirectedfrom=MSDN#EndUndoUnit>). Specifically, users can wrap the changes made to the text-area via 2 commands `ms-beginUndoUnit` and `ms-endUndoUnit`. These 2 tags essentially serves as a "mutex" where changes done to the text area during this period is viewed as a singular change instead of multiple changes as well as the changes being stored in the history stack of the default html elements.

### Javascript Events

In a lot of the Javascript components involving input output (IO), how events are being propagated is quite important to understand. Specifically, how each event is "bubbled" and "captured" through different components and how to control the flow of such events. In details, suppose a user click on a certain component (let's say a `div` tag). This component could be located in many different components and tags. So if a user click on that `div`, how should it's parent component react to that event?
There are generally 2 forms of argument on how the behavior should be implemented.

Firstly, it is the capturing of events, where the "click" will be captured from the most outest parent component slowly to the target component that was actually clicked.

Secondly, there is the idea of bubbling, where events will originate from the source of the click (target component) and slowly "bubbles" up to it's parent components.

Javascript generally implements both of this in 2 phases. When some event is going to trigger, it first "captures" all the relevant component and then it creates a event which "bubbles" back up. For more details regarding this behaviors as well as controlling them, I referred to the link [here](https://javascript.info/bubbling-and-capturing) for reference

### GraphQL

Traditionally, interations with servers are usually done via REST APIs using POST and GET to retrive information. However, the problem here is the additional information that is unrelated to the what the user is actually want. For instance, if someone wants to query for certain objects on the server, information that is not important is still retrieved due to the fixed API responses.
A much more desirable behavior is to supply the users with exactly what the users want in a singular, compact request. This is where GraphQl comes in. GraphQL enables the clients to have the freedom to select data that he or she needs and allow a much faster and fluid development compared to traditional REST.

A specific GraphQL server is setup on the host to expose the data as a GraphQL API to the clients. This server will follow the graphQL requirements and allow clients to freely query for the specific information needed. CATcher and WATcher specifically uses the Github GraphQL server to query for information. Due to a rate limit of page size=100, we still need to make multiple requests fetch all the required information.

Github GraphQL explorer: [Explorer](https://docs.github.com/en/graphql/overview/explorer)

### RXJS

A major difference in UI/UX developement is the need to handle interactions with users. Things like waiting for data from servers, updating elements based on changes can be rather difficult and tiring to code out using the asynchronous programming methods. RxJs adds Observers patterns to the code while abstracting away all the intricacies as well as asynchronous code. This enables developers to easily leverage observer patterns while maintaining a clean and readable code.

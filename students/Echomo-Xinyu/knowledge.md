### Tool/Angular Framework Overview

Without any prior knowledge to Angular, I have quickly gone through the introduction part of [TypeScript tutorial](https://www.typescriptlang.org/docs/handbook/intro.html) and a hands-on practice with Angular by [official Angular website](https://angular.io/start) to quickly familiarise myself with the framework.

Angular adopts the MVVM (Model-View-ViewModel) architecture, similar to MVC (Model-View-Controller) but with some differences: in MVVM, the ViewModel replaces the role of Controller in MVC and acts as a mediator between the Model and the View. The ViewModel provides data and functionality to the View and the View communicates user actions back to the ViewModel.

Angular also makes use of Components, Services, Directives and RxJS to build an Angular application:

- Components are the building blocks of an Angular application. Components are responsible for defining the view, handling user input, and interacting with the model.
- Services are used to share data and functionality across components. They provide a way to centralize common functionality and make it available to the entire application.
- Directives are used to add behavior to the DOM elements and allow us to manipulate the DOM and add custom functionality to applications.
- RxJS is a creative programming library to provide a way to work with asynchronous data streams and handle events in a declarative way.

Angular recommends the usage of TypeScript for its forceful type checks to variables as compared to original JavaScript.

The [TypeScript tutorial](https://www.typescriptlang.org/docs/handbook/intro.html) provides very in-depth explanation of the language as well as listing out the notable difference between TypeScript and other common programming languages. It includes great number of details but can be overwhelming to beginners. I briefly looked through the program and wrote some common algorithms in TypeScript to make sure I roughly knew the basic component before proceeding to read about Angular. This resource is better served as a handbook to check when one encounters complex problems related to TypeScript specifically.

The [Official Angular Start Guide](https://angular.io/start) provides a walk-through of building a shopping website with Angular which involves component, service, data management and transfer -- essentially everything needed for a basic website. It is a fun experience and the guide is very clear and helpful.

### Angular Upgrade

In WATcher, I drafted PRs to upgrade Angular version from 8 to 10. While following the instructions by the [official guide](https://update.angular.io/), I worked with various problems along the way: outdated versions of certain dependency, linting errors, wrong modifier and manual upgrade of certain new imports after merge, and managed to solve them accordingly.

### Tool/GitHub Actions + Markbind

During rendering the [WATcher-docs website](https://catcher-org.github.io/WATcher-docs/), I read about Github Actions and they would be triggered upon pull requests or change to specified branches. I have also read about [markbind documentation](https://markbind.org/userGuide/deployingTheSite.html) to understand how we may deploy a website written with markbind using GitHub Actions.

References:
- https://docs.github.com/en/actions/quickstart
- https://markbind.org/userGuide/deployingTheSite.html

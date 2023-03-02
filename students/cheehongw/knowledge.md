### Angular Essentials
I had contributed to CATcher as part of IWM, but I have never really approached the Angular aspects of the project. I only started learning about Angular basics when CS3281 demanded for it. 

Essentially, the core ideas behind Angular involves:
- Components, a TypeScript class with `@Component` decorator, an HTML template and styles. 
  - The decorator accepts parameters that help Angular know which HTML file is the component's template and which css file is the component's styles.
  - The decorator also accepts a parameter that is the component's selector, which is how we can reuse this component as an HTML element in other HTML files.
- An HTML template that instructs Angular how to render the component
- An optional set of CSS styles that define the appearance of the template's HTML elements

The other key concepts include event bindings and property binding that link the template to the TypeScript class. Knowing these essentials allowed me to fix [WATcher PR#57](https://github.com/CATcher-org/WATcher/pull/57).

-------
Another key part of Angular is its Dependency Injection system and services. Angular allows us to provide dependencies at different levels of the application, and how the dependencies are instantiated.
- For example, when you providing a service at the root level, Angular creates a single, shared instance of the service and injects it into any class that asks for it.
  - It seems like most of WATcher and CATcher's services are provided at the root level.

Resources:
- https://angular.io/guide/what-is-angular
- https://angular.io/guide/dependency-injection


### Tool/Technology 2
List the aspects you learned, and the resources you used to learn them, and a brief summary of each resource.
...
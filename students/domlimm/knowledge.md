<!-- List the aspects you learned, and the resources you used to learn them, and a brief summary of each resource. -->

### Angular

#### Context

Before TEAMMATES, I have only ever used React. To help me get started on Angular, I looked up videos on YouTube, specifically [Fireship's Angular playlist](https://www.youtube.com/playlist?list=PL0vfts4VzfNjsTV_6i9a9iczMnthWqHzM), to get an overview. I tried doing a Udemy course too but I thought it was a little far-fetched.

With a background in React, I went onto look for the similarities and differences between these two popular frontend web frameworks which led me to decide to dive into TEAMMATES' codebase.

#### Passing data between Parent and Child components

Similar to passing of props in React, Angular has its way to pass data between parent and child components.

In Angular, we use `Output` for sending data to parent and `Input` for sending data to child. It took me awhile to get used to the terms of `in/output`.

What helped me through this was the [Angular docs](https://angular.io/guide/inputs-outputs) on this exact matter, it was a perfect read! It starts off with the introduction of Input and Output, and was surprised it's said to be like a pattern. This page was really well written as it goes straight to the subject and it takes a step by step approach with sufficient amount of examples.

### Testing

#### Spy-es/Spies

I have used `spy` before. Ironically, I never knew how to use it properly till I had to write tests on the work done.

I was struggling to figure how to pass a check in a method of this object, let's define object as A. Object A has a method, `a()`, that has a condition in it `if b(...)`.

Method `b()` belongs to object A. I could not set this condition to be true when I was writing the test. However, spy did the trick!

All I had to do was write this powerful line of code:

```java
A spyA = spy(A.class);
doReturn(true).when(spyA).b(...);
```

And it worked! Sounds pretty trivial and silly I know... But Today I Learned (TIL)!

Spying on an object allows us to dig deep into its methods and intentionally set the outcome of what we expect a variable/object or method outcome to be, we are in control and we define the result.

Here is a good read on [spies](https://www.baeldung.com/mockito-spy). Love baeldung!

#### E2E

// TODO

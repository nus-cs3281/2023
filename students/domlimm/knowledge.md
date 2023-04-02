<!-- List the aspects you learned, and the resources you used to learn them, and a brief summary of each resource. -->

# Angular

## Context

Before TEAMMATES, I have only ever used React. To help me get started on Angular, I looked up videos on YouTube, specifically [Fireship's Angular playlist](https://www.youtube.com/playlist?list=PL0vfts4VzfNjsTV_6i9a9iczMnthWqHzM), to get an overview. I tried doing a Udemy course too but I thought it was a little far-fetched.

With a background in React, I went onto look for the similarities and differences between these two popular frontend web frameworks which led me to decide to dive into TEAMMATES' codebase.

## Passing data between Parent and Child components

Similar to passing of props in React, Angular has its way to pass data between parent and child components.

In Angular, we use `Output` for sending data to parent and `Input` for sending data to child. It took me awhile to get used to the terms of `in/output`.

What helped me through this was the [Angular docs](https://angular.io/guide/inputs-outputs) on this exact matter, it was a perfect read! It starts off with the introduction of Input and Output, and was surprised it's said to be like a pattern. This page was really well written as it goes straight to the subject and it takes a step by step approach with sufficient amount of examples.

# Testing

I have never written tests of this extent. Aside from CS4218 which I am currently reading, the work done in TEAMMATES has really helped me to improve the way I write tests, and fully understand the importance of tests.

## Spy-es/Spies

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

## Integration Tests

My mentor said something that will have me remember for life - "We should not use mocks for Integration Tests.". This was a 'Today I Learned' fully moment.

# Hibernate

## Context

I have only ever used Java in my school work, mainly those small OOP projects. If I can recall, the extent was up till using [JDBC](https://www.javatpoint.com/java-jdbc) connecting to MySQL, building a MVC architecture, that was pretty much it.

But wow! Java has its own framework for building a backend. I have also heard of Spring Boot (I believe it's another backend framework!) but never used or looked into it before.

At least for me, learning Hibernate has been really eye opening and refreshing! It has not only expanded my technical skillset in the realm of Java but it drills me on my fundamentals of Object Oriented Programming.

The evidence is that Hibernate expects developers to write out the entity classes in an OOP fashion and it does all the setup behind the scenes, e.g., Setting up of the schemas in the chosen database.

## Annotations

These said classes contain [annotations](https://thorben-janssen.com/key-jpa-hibernate-annotations/) provided by Hibernate where we specify what we would like to see in our relational schemas from non-nullable columns, connecting schemas via associations and foreign keys, working with natural keys, etc. Pretty cool and interesting stuff!

## Database Functionalities of Hibernate's API

Enough of the OOP stuff! Let's dive into the database functionalities.

Hibernate provides out of the box in-built database functionalities in its API. These functions are closely similar to how we write SQL queries.

Let's take a look at an example.

Here, we have 2 entities - Instructor and Account. An Account is linked to an Instructor via a One to Many relationship i.e., An Account to many Instructors, and an attribute is in the Instructors schema. Hibernate does the work of linking these entities via the association we just specified.

We would like to find all Instructors of a specified `accountId` and `courseId`.

In Hibernate, this is what we will write:

```java
cr.select(instructorTable).where(cb.and(
        cb.equal(instructorTable.get("courseId"), courseId),
        cb.equal(instructorTable.get("accountId"), accountId)));
```

In native SQL, this is what we would have written (PostgreSQL format, might not be entirely correct, off the top of my head):

```sql
SELECT * FROM instructors
    JOIN accounts
        ON instructors.account = accounts.accountId;
```

Hence, Hibernate provides plug-and-play functionalities that closely relate to SQL operations.

## Data Persistence through JPA

Another thing to highlight is the data persistency that Hibernate promises.

> Hibernate is a standard implementation of the Java Persistence API (JPA) specification.

An example on persistency is...

For example, we have a Person that we would like to update his/her name. Since we have written Person class in an OOP fashion as mentioned above, we could simply just update the name via the setter of the `name` attribute by `person.setName("NewName");`, and that's it!

You might ask, "How about telling your database above this person's name change?".

Hibernate does this behind the scenes for you! This is all thanks to JPA.

## Conclusion

Hibernate does provide way more than the above but let's look forward to what else we can learn in the future tasks!

Alright that's it for now, stick around folks!

## Resources

Below are some wonderful resources that have helped me along the way:

- Baeldung's take on Hibernate [here](https://www.baeldung.com/learn-jpa-hibernate)
- Official Documentation of Hibernate [here](https://docs.jboss.org/hibernate/orm/6.1/userguide/html_single/Hibernate_User_Guide.html), literally the bible but I find some examples to be quite bare and the rest of the resources here and have helped me tremendously!
- The man himself Thorben Janssen! Over [here](https://thorben-janssen.com/tutorials/)

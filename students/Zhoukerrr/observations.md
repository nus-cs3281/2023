# Project: NUSMods

NUSMods is the official course catalogue, module search and timetable builder for the National University of Singapore.

## My Contributions

### Add support for customisable modules (useful for TAs)

|                                                                                                              |     |
| ------------------------------------------------------------------------------------------------------------ | --- |
| Merged PR: [Change ModuleLessonConfig value to array](https://github.com/nusmodifications/nusmods/pull/3420) |
| Merged PR: [Add support for Timetable for TAs](https://github.com/nusmodifications/nusmods/pull/3434)        |
|                                                                                                              |

## My Learning Record

### Jest

NUSMods uses Jest for their testing. I have never used Jest before and I was quite surprised by the ease of use of the tool. It is very easy to set up and the documentation is very clear.

Jest runs very fast and requires little set up. It is also very easy to write tests for React components. I was able to write tests for my code in a short amount of time.

The teams enforced a high coverage requirement for PRs. This is a good practice as it ensures that the code is well tested and the code quality is high. This is often neglected in RepoSense and we have to manually open issues for frontend code coverage.

RepoSense uses only Cypress for frontend testing. From my experience and research, Cypress is more suitable for end-to-end testing. This is due to the fact that cypress actually interact with the components in a browser. However, it is not as suitable for unit testing. Jest is a better choice for unit testing as it consumes less time and resources. I would suggest that we use Jest for unit testing and Cypress for end-to-end testing. This will also boost our frontend code coverage and seal up any corner cases that we are unable to test in Cypress due to time/resource limitations.

### Redux

While I have some experience working with redux before, I was unaware of the need for a schema migration when updating the structure of a redux store.

In the process of implementing the feature, I needed to change the structure of the redux store. The project ran normally on my local browser as I had no data when I was developing. I was told by the maintainer to include a redux schema migration.

NUSMods loads the persisted data into the redux state in order to maintain students timetable data. Therefore, a change in the redux structure without any workaround will break the data of thousands of active users of NUSMods.

This tool is not applicable to RepoSense as we uses Vuex. As the report is loaded everytime based on the data, no data is persisted through this way. However, it is still good to keep in mind the change of store structure and its effect on different parts of the system.

## Suggested Area(s) of Improvement

Stortage of manpower

It is rather surprising that such a popular website is only maintained by 2 developers. The reviewing process is often very long and it could be discouraging to less experienced developers. More contributors could be trained for this role.


    var pageVueRenderFn = function anonymous(
) {
with(this){return _c('div',{attrs:{"id":"app"}},[_c('header',{attrs:{"fixed":""}},[_c('navbar',{attrs:{"placement":"top","type":"primary"},scopedSlots:_u([{key:"brand",fn:function(){return [_c('a',{staticClass:"navbar-brand",attrs:{"href":"/2023/index.html","title":"Home"}},[_v("CS3281&2-2023/Students")])]},proxy:true},{key:"right",fn:function(){return [_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://github.com/nus-cs3281/2023"}},[_c('span',[_c('span',{staticClass:"fab fa-github",attrs:{"aria-hidden":"true"}})])])])]},proxy:true}])},[_v(" "),_c('dropdown',{staticClass:"nav-link",scopedSlots:_u([{key:"header",fn:function(){return [_v("CS3281")]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2023/index.html"}},[_v("Students")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2023/students/knowledge.html"}},[_v("Knowledge")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"https://nus-cs3281.github.io/2023-dashboard/?search=&sort=groupTitle&sortWithin=title&timeframe=commit&mergegroup=&groupSelect=groupByAuthors&breakdown=false"}},[_v("Code Dashboard")])])]),_v(" "),_c('dropdown',{staticClass:"nav-link",scopedSlots:_u([{key:"header",fn:function(){return [_v("CS3282")]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2023/cs3282-index.html"}},[_v("Students")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2023/students/talksSchedule.html"}},[_v("Lightning Talks")])])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/2023/instructions.html"}},[_v("Instructions")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://nus-cs3281.github.io/website/"}},[_v("CS3281&2 Website "),_c('span',[_c('span',{staticClass:"glyphicon glyphicon-share-alt",attrs:{"aria-hidden":"true"}})])])])],1)],1),_v(" "),_c('div',{attrs:{"id":"flex-body"}},[_m(0),_v(" "),_c('overlay-source',{staticClass:"fixed-header-padding",attrs:{"id":"page-nav","tag-name":"nav","to":"page-nav"}},[_c('div',{staticClass:"nav-component slim-scroll"})])],1),_v(" "),_m(1)])}
};
    var pageVueStaticRenderFns = [function anonymous(
) {
with(this){return _c('div',{staticClass:"fixed-header-padding",attrs:{"id":"content-wrapper"}},[_c('h1',{attrs:{"id":"project-nusmods"}},[_c('span',{staticClass:"anchor",attrs:{"id":"project-nusmods"}}),_v("Project: NUSMods"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#project-nusmods","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("NUSMods is the official course catalogue, module search and timetable builder for the National University of Singapore.")]),_v(" "),_c('h2',{attrs:{"id":"my-contributions"}},[_c('span',{staticClass:"anchor",attrs:{"id":"my-contributions"}}),_v("My Contributions"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#my-contributions","onclick":"event.stopPropagation()"}})]),_v(" "),_c('h3',{attrs:{"id":"add-support-for-customisable-modules-useful-for-tas"}},[_c('span',{staticClass:"anchor",attrs:{"id":"add-support-for-customisable-modules-useful-for-tas"}}),_v("Add support for customisable modules (useful for TAs)"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#add-support-for-customisable-modules-useful-for-tas","onclick":"event.stopPropagation()"}})]),_v(" "),_c('div',{staticClass:"table-responsive"},[_c('table',{staticClass:"markbind-table table table-bordered table-striped"},[_c('thead',[_c('tr',[_c('th'),_v(" "),_c('th')])]),_v(" "),_c('tbody',[_c('tr',[_c('td',[_v("Merged PR: "),_c('a',{attrs:{"href":"https://github.com/nusmodifications/nusmods/pull/3420"}},[_v("Change ModuleLessonConfig value to array")])]),_v(" "),_c('td')]),_v(" "),_c('tr',[_c('td',[_v("Merged PR: "),_c('a',{attrs:{"href":"https://github.com/nusmodifications/nusmods/pull/3434"}},[_v("Add support for Timetable for TAs")])]),_v(" "),_c('td')]),_v(" "),_c('tr',[_c('td'),_v(" "),_c('td')])])])]),_c('h2',{attrs:{"id":"my-learning-record"}},[_c('span',{staticClass:"anchor",attrs:{"id":"my-learning-record"}}),_v("My Learning Record"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#my-learning-record","onclick":"event.stopPropagation()"}})]),_v(" "),_c('h3',{attrs:{"id":"jest"}},[_c('span',{staticClass:"anchor",attrs:{"id":"jest"}}),_v("Jest"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#jest","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("NUSMods uses Jest for their testing. I have never used Jest before and I was quite surprised by the ease of use of the tool. It is very easy to set up and the documentation is very clear.")]),_v(" "),_c('p',[_v("Jest runs very fast and requires little set up. It is also very easy to write tests for React components. I was able to write tests for my code in a short amount of time.")]),_v(" "),_c('p',[_v("The teams enforced a high coverage requirement for PRs. This is a good practice as it ensures that the code is well tested and the code quality is high. This is often neglected in RepoSense and we have to manually open issues for frontend code coverage.")]),_v(" "),_c('p',[_v("RepoSense uses only Cypress for frontend testing. From my experience and research, Cypress is more suitable for end-to-end testing. This is due to the fact that cypress actually interact with the components in a browser. However, it is not as suitable for unit testing. Jest is a better choice for unit testing as it consumes less time and resources. I would suggest that we use Jest for unit testing and Cypress for end-to-end testing. This will also boost our frontend code coverage and seal up any corner cases that we are unable to test in Cypress due to time/resource limitations.")]),_v(" "),_c('h3',{attrs:{"id":"redux"}},[_c('span',{staticClass:"anchor",attrs:{"id":"redux"}}),_v("Redux"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#redux","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("While I have some experience working with redux before, I was unaware of the need for a schema migration when updating the structure of a redux store.")]),_v(" "),_c('p',[_v("In the process of implementing the feature, I needed to change the structure of the redux store. The project ran normally on my local browser as I had no data when I was developing. I was told by the maintainer to include a redux schema migration.")]),_v(" "),_c('p',[_v("NUSMods loads the persisted data into the redux state in order to maintain students timetable data. Therefore, a change in the redux structure without any workaround will break the data of thousands of active users of NUSMods.")]),_v(" "),_c('p',[_v("This tool is not applicable to RepoSense as we uses Vuex. As the report is loaded everytime based on the data, no data is persisted through this way. However, it is still good to keep in mind the change of store structure and its effect on different parts of the system.")]),_v(" "),_c('h2',{attrs:{"id":"suggested-area-s-of-improvement"}},[_c('span',{staticClass:"anchor",attrs:{"id":"suggested-area-s-of-improvement"}}),_v("Suggested Area(s) of Improvement"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#suggested-area-s-of-improvement","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Stortage of manpower")]),_v(" "),_c('p',[_v("It is rather surprising that such a popular website is only maintained by 2 developers. The reviewing process is often very long and it could be discouraging to less experienced developers. More contributors could be trained for this role.")]),_v(" "),_c('i',{staticClass:"fa fa-arrow-circle-up fa-lg d-print-none",attrs:{"id":"scroll-top-button","onclick":"handleScrollTop()","aria-hidden":"true"}})])}
},function anonymous(
) {
with(this){return _c('footer',[_c('div',{staticClass:"text-center"},[_c('p',[_v("["),_c('strong',[_v("This site was generated using "),_c('img',{attrs:{"src":"https://markbind.org/favicon.ico","width":"25"}}),_v(" "),_c('a',{attrs:{"href":"https://markbind.org/"}},[_v("MarkBind 4.1.0")])]),_v(" on Tue, May 2, 2023, 2:23:27 PM UTC]"),_c('br'),_v(" "),_c('span',{staticClass:"dimmed"},[_c('small',[_c('small',[_v("favicon.ico of this site was made by "),_c('a',{attrs:{"href":"https://www.flaticon.com/authors/smashicons","title":"Smashicons"}},[_v("Smashicons")]),_v(" from "),_c('a',{attrs:{"href":"https://www.flaticon.com/","title":"Flaticon"}},[_v("www.flaticon.com")]),_v(" is licensed by "),_c('a',{attrs:{"href":"http://creativecommons.org/licenses/by/3.0/","title":"Creative Commons BY 3.0","target":"_blank"}},[_v("CC 3.0 BY")])])])])])])])}
}];
  
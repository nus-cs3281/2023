
    var pageVueRenderFn = function anonymous(
) {
with(this){return _c('div',{attrs:{"id":"app"}},[_c('header',{attrs:{"fixed":""}},[_c('navbar',{attrs:{"placement":"top","type":"primary"},scopedSlots:_u([{key:"brand",fn:function(){return [_c('a',{staticClass:"navbar-brand",attrs:{"href":"/2023/index.html","title":"Home"}},[_v("CS3281&2-2023/Students")])]},proxy:true},{key:"right",fn:function(){return [_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://github.com/nus-cs3281/2023"}},[_c('span',[_c('span',{staticClass:"fab fa-github",attrs:{"aria-hidden":"true"}})])])])]},proxy:true}])},[_v(" "),_c('dropdown',{staticClass:"nav-link",scopedSlots:_u([{key:"header",fn:function(){return [_v("CS3281")]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2023/index.html"}},[_v("Students")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2023/students/knowledge.html"}},[_v("Knowledge")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"https://nus-cs3281.github.io/2023-dashboard/?search=&sort=groupTitle&sortWithin=title&timeframe=commit&mergegroup=&groupSelect=groupByAuthors&breakdown=false"}},[_v("Code Dashboard")])])]),_v(" "),_c('dropdown',{staticClass:"nav-link",scopedSlots:_u([{key:"header",fn:function(){return [_v("CS3282")]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2023/cs3282-index.html"}},[_v("Students")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2023/students/talksSchedule.html"}},[_v("Lightning Talks")])])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/2023/instructions.html"}},[_v("Instructions")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://nus-cs3281.github.io/website/"}},[_v("CS3281&2 Website "),_c('span',[_c('span',{staticClass:"glyphicon glyphicon-share-alt",attrs:{"aria-hidden":"true"}})])])])],1)],1),_v(" "),_c('div',{attrs:{"id":"flex-body"}},[_m(0),_v(" "),_c('overlay-source',{staticClass:"fixed-header-padding",attrs:{"id":"page-nav","tag-name":"nav","to":"page-nav"}},[_c('div',{staticClass:"nav-component slim-scroll"})])],1),_v(" "),_m(1)])}
};
    var pageVueStaticRenderFns = [function anonymous(
) {
with(this){return _c('div',{staticClass:"fixed-header-padding",attrs:{"id":"content-wrapper"}},[_c('h2',{attrs:{"id":"project-pandas"}},[_c('span',{staticClass:"anchor",attrs:{"id":"project-pandas"}}),_v("Project: Pandas"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#project-pandas","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Pandas is a popular Python-based software library for data analytics.")]),_v(" "),_c('ol',[_c('li',[_c('a',{attrs:{"href":"https://pandas.pydata.org/docs/dev/development/contributing.html"}},[_v("Contributing Guide for Pandas")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"https://pandas.pydata.org/docs/dev/development/contributing_codebase.html"}},[_v("Development Worflow")])])]),_v(" "),_c('h3',{attrs:{"id":"summary-of-contributions"}},[_c('span',{staticClass:"anchor",attrs:{"id":"summary-of-contributions"}}),_v("Summary of Contributions"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#summary-of-contributions","onclick":"event.stopPropagation()"}})]),_v(" "),_c('ol',[_c('li',[_v("PR #51384: "),_c('a',{attrs:{"href":"https://github.com/pandas-dev/pandas/pull/51384"}},[_v("Write test for cut() function")])]),_v(" "),_c('li',[_v("PR #51356: "),_c('a',{attrs:{"href":"https://github.com/pandas-dev/pandas/pull/51356"}},[_v("Fix errors in doctests")])]),_v(" "),_c('li',[_v("PR #51389: "),_c('a',{attrs:{"href":"https://github.com/pandas-dev/pandas/pull/51389"}},[_v("Improve examples for documentation & fix ‘undefined variable' errors")])]),_v(" "),_c('li',[_v("Issue #51377: "),_c('a',{attrs:{"href":"https://github.com/pandas-dev/pandas/issues/51377"}},[_v("flake8 flagging template strings in docstrings as syntax errors")])])]),_v(" "),_c('h3',{attrs:{"id":"my-learning-record"}},[_c('span',{staticClass:"anchor",attrs:{"id":"my-learning-record"}}),_v("My Learning Record"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#my-learning-record","onclick":"event.stopPropagation()"}})]),_v(" "),_c('h4',{attrs:{"id":"pytest"}},[_c('span',{staticClass:"anchor",attrs:{"id":"pytest"}}),_v("Pytest"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#pytest","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Pytest is a Python testing framework which encompasses unit tests, integration tests, end-to-end tests, and functional tests.")]),_v(" "),_c('p',[_v("Pandas project uses pytest to test their software. For PR #51384, I had to learn how to write a simple Pytest test to test the functionality of the ‘cut()’ function. I read the documentation to gain basic knowledge about its syntax, and looked through the tests folder under pandas project to gain a deeper understanding of how tests are written and managed in pandas.")]),_v(" "),_c('h4',{attrs:{"id":"doctests"}},[_c('span',{staticClass:"anchor",attrs:{"id":"doctests"}}),_v("Doctests"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#doctests","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Doctests refer to chunks of text that are modelled after interactive Python sessions. Although they are embedded in text, they can be executed just like any other Python code snippets.")]),_v(" "),_c('p',[_v("In pandas, doctests are mainly included in documentation to illustrate the functionality and features of different functions and data structures.")]),_v(" "),_c('p',[_v("For PR #51389, I was involved with resolving ‘undefined variable’ errors in doctests, as well as improving existing examples in the documentation. With the help of flake8 (a style guide enforcement tool), as well as the doctests library documentation, I was able to pick out errors in the doctests and fix them.")]),_v(" "),_c('h3',{attrs:{"id":"differences-in-processes"}},[_c('span',{staticClass:"anchor",attrs:{"id":"differences-in-processes"}}),_v("Differences in Processes"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#differences-in-processes","onclick":"event.stopPropagation()"}})]),_v(" "),_c('ol',[_c('li',[_v("Core developers are each in charge of a certain aspect of the project e.g. Tests, documentation for Pull Request (PR) Reviews")])]),_v(" "),_c('p',[_v("Thus, the developers are able to show more depth in their area of expertise, which allowes new developers to engage in more meaningful conversations with regards to the issue they are working on. Due to their specialisation in reviewing PRs in a certain aspect, they are able to link problems to other existing related issues right away and provide more insight to new developers.")]),_v(" "),_c('p',[_v("In addition, through PR reviews, the core developers also actively encourage new developers to investigate issues further and participate in the project in other ways. This way, new developers feel more committed to the project.")]),_v(" "),_c('p',[_v("For example, while working on PR #51356, I detected an error in the way flake8 (a style guide enforcement tool) was processing template strings in doctests. I pursued the issue further and with my findings, the core developers requested that I open issue #51377 for it.")]),_v(" "),_c('ol',{attrs:{"start":"2"}},[_c('li',[_v("Use of GitHub bots to streamline processes e.g. assigning developers to issues\nDue to the large scale of the projects, it is hard for the core developers to assign people to issues manually. Hence, they employ github-actions bot that assigns the issue automatically to the account that posts “take” under comments.")])]),_v(" "),_c('p',[_v("This helps to streamline processes and allow developers to start on development tasks faster.")]),_v(" "),_c('ol',{attrs:{"start":"3"}},[_c('li',[_v("Adding / Updating tests right after bug fixes")])]),_v(" "),_c('p',[_v("After bug fixes are merged, relevant issues are still kept open with a new tag “Needs tests”.")]),_v(" "),_c('p',[_v("The test added is specific to the bug fixed, such that in the future, it will be able to catch the same bug and prevent possible regression.")]),_v(" "),_c('ol',{attrs:{"start":"4"}},[_c('li',[_v("Large number of checks for Continuous Integration (CI)")])]),_v(" "),_c('p',[_v("As compared to 4 set-up checks we have set up under CATcher’s GitHub Actions Continuous Integration process, pandas project has 39 checks in place. This is helpful in maintaining the codebase with many developers committing code often.")]),_v(" "),_c('p',[_v("However, I also noticed that the presence of many checks often causes random failures. In addition, the checks take hours to complete. This could negatively affect efficiency when merging code.")]),_v(" "),_c('h3',{attrs:{"id":"suggestions-for-internal-project"}},[_c('span',{staticClass:"anchor",attrs:{"id":"suggestions-for-internal-project"}}),_v("Suggestions for Internal Project"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#suggestions-for-internal-project","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Three main suggestions/tools to be adopted for CATcher would be:")]),_v(" "),_c('ol',[_c('li',[_v("Senior developers building expertise in a particular aspect of CATcher")])]),_v(" "),_c('p',[_v("Right now, senior developers review any PR they come across without being in charge of any particular area of expertise. Sometimes, this could lead to similar issues / PRs being responded by different senior developers, which causes ineffective knowledge sharing and possible miscommunication.")]),_v(" "),_c('p',[_v("The CATcher team could make it a point to divide up the PRs into different aspects (i.e. by adding tags such as ‘tests’ or ‘documentation’) and each take responsibility over reviewing PRs in that particular aspect.")]),_v(" "),_c('p',[_v("This would allow senior developers to build expertise, and also impart knowledge to junior developers more effectively.")]),_v(" "),_c('ol',{attrs:{"start":"2"}},[_c('li',[_v("Making it a habit to add tests right after bug fixes or tweaks in functionality")])]),_v(" "),_c('p',[_v("Tests are not prioritised in the CATcher codebase although the maintainability of our application is crucial due to its usage during examinations.")]),_v(" "),_c('p',[_v("The CATcher team should make it a habit to add or improve on tests right after  bug fixes or tweaks in features to keep our codebase robust.")]),_v(" "),_c('ol',{attrs:{"start":"3"}},[_c('li',[_v("Adopting GitHub bots for assigning new developers to issues")])]),_v(" "),_c('p',[_v("This would reduce the steps where a new contributor needs to request and wait for approval before getting assigned. It could also encourage more students to start contributing.")]),_v(" "),_c('i',{staticClass:"fa fa-arrow-circle-up fa-lg d-print-none",attrs:{"id":"scroll-top-button","onclick":"handleScrollTop()","aria-hidden":"true"}})])}
},function anonymous(
) {
with(this){return _c('footer',[_c('div',{staticClass:"text-center"},[_c('p',[_v("["),_c('strong',[_v("This site was generated using "),_c('img',{attrs:{"src":"https://markbind.org/favicon.ico","width":"25"}}),_v(" "),_c('a',{attrs:{"href":"https://markbind.org/"}},[_v("MarkBind 4.1.0")])]),_v(" on Tue, May 2, 2023, 2:23:27 PM UTC]"),_c('br'),_v(" "),_c('span',{staticClass:"dimmed"},[_c('small',[_c('small',[_v("favicon.ico of this site was made by "),_c('a',{attrs:{"href":"https://www.flaticon.com/authors/smashicons","title":"Smashicons"}},[_v("Smashicons")]),_v(" from "),_c('a',{attrs:{"href":"https://www.flaticon.com/","title":"Flaticon"}},[_v("www.flaticon.com")]),_v(" is licensed by "),_c('a',{attrs:{"href":"http://creativecommons.org/licenses/by/3.0/","title":"Creative Commons BY 3.0","target":"_blank"}},[_v("CC 3.0 BY")])])])])])])])}
}];
  
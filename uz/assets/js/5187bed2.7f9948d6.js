"use strict";(self.webpackChunk_feature_sliced_documentation=self.webpackChunk_feature_sliced_documentation||[]).push([["8082"],{5587:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>l,metadata:()=>i,assets:()=>c,toc:()=>d,contentTitle:()=>o});var i=JSON.parse('{"id":"about/understanding/architecture","title":"About architecture","description":"Problems","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/about/understanding/architecture.md","sourceDirName":"about/understanding","slug":"/about/understanding/architecture","permalink":"/documentation/uz/docs/about/understanding/architecture","draft":false,"unlisted":false,"editUrl":"https://github.com/feature-sliced/documentation/edit/master/i18n/en/docusaurus-plugin-content-docs/current/about/understanding/architecture.md","tags":[],"version":"current","lastUpdatedAt":1742062811000,"sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"aboutSidebar","previous":{"title":"Alternatives","permalink":"/documentation/uz/docs/about/alternatives"},"next":{"title":"Needs driven","permalink":"/documentation/uz/docs/about/understanding/needs-driven"}}'),s=t("2676"),r=t("3663");let l={sidebar_position:1},o="About architecture",c={},d=[{value:"Problems",id:"problems",level:2},{value:"Bus-factor &amp; Onboarding",id:"bus-factor--onboarding",level:3},{value:"Implicit and uncontrolled consequences",id:"implicit-and-uncontrolled-consequences",level:3},{value:"Uncontrolled reuse of logic",id:"uncontrolled-reuse-of-logic",level:3},{value:"Requirements",id:"requirements",level:2},{value:"Explicitness",id:"explicitness",level:3},{value:"Control",id:"control",level:3},{value:"Adaptability",id:"adaptability",level:3},{value:"See also",id:"see-also",level:2}];function a(e){let n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"about-architecture",children:"About architecture"})}),"\n",(0,s.jsx)(n.h2,{id:"problems",children:"Problems"}),"\n",(0,s.jsx)(n.p,{children:"Usually, the conversation about architecture is raised when the development stops due to certain problems in the project."}),"\n",(0,s.jsx)(n.h3,{id:"bus-factor--onboarding",children:"Bus-factor & Onboarding"}),"\n",(0,s.jsx)(n.p,{children:"Only a limited number of people understand the project and its architecture"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.em,{children:'"It\'s difficult to add a person to the development"'})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.em,{children:'"For every problem, everyone has their own opinion on how to get around" (let\'s envy the angular)'})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.em,{children:'"I don\'t understand what is happening in this big piece of monolith"'})}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"implicit-and-uncontrolled-consequences",children:"Implicit and uncontrolled consequences"}),"\n",(0,s.jsxs)(n.p,{children:["A lot of implicit side effects during development/refactoring ",(0,s.jsx)(n.em,{children:'("everything depends on everything")'})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.em,{children:'"The feature imports the feature"'})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.em,{children:'"I updated the store of one page, and the functionality fell off on the other"'})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.em,{children:'"The logic is smeared all over the application, and it is impossible to track where the beginning is, where the end is"'})}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"uncontrolled-reuse-of-logic",children:"Uncontrolled reuse of logic"}),"\n",(0,s.jsx)(n.p,{children:"It is difficult to reuse/modify existing logic"}),"\n",(0,s.jsxs)(n.p,{children:["At the same time, there are usually ",(0,s.jsx)(n.a,{href:"https://github.com/feature-sliced/documentation/discussions/14",children:"two extremes"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Either the logic is written completely from scratch for each module ",(0,s.jsx)(n.em,{children:"(with possible repetitions in the existing codebase)"})]}),"\n",(0,s.jsxs)(n.li,{children:["Either there is a tendency to transfer all-all implemented modules to ",(0,s.jsx)(n.code,{children:"shared"})," folders, thereby creating a large dump of modules ",(0,s.jsx)(n.em,{children:"from it (where most are used only in one place)"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsxs)(n.em,{children:['"I have ',(0,s.jsx)(n.strong,{children:"N"}),' implementations of the same business logic in my project, for which I still pay"']})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.em,{children:'"There are 6 different components of the button/pop-up/... In the project"'})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.em,{children:'"Dump of helpers"'})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"requirements",children:"Requirements"}),"\n",(0,s.jsxs)(n.p,{children:["Therefore, it seems logical to present the desired ",(0,s.jsx)(n.em,{children:"requirements for an ideal architecture:"})]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:['Wherever it says "easy", it means "relatively easy for a wide range of developers", because it is clear that ',(0,s.jsx)(n.a,{href:"/docs/about/mission#limitations",children:"it will not be possible to make an ideal solution for absolutely everyone"})]})}),"\n",(0,s.jsx)(n.h3,{id:"explicitness",children:"Explicitness"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["It should be ",(0,s.jsx)(n.strong,{children:"easy to master and explain"})," the project and its architecture to the team"]}),"\n",(0,s.jsxs)(n.li,{children:["The structure should reflect the real ",(0,s.jsx)(n.strong,{children:"business values of the project"})]}),"\n",(0,s.jsxs)(n.li,{children:["There must be explicit ",(0,s.jsx)(n.strong,{children:"side effects and connections"})," between abstractions"]}),"\n",(0,s.jsxs)(n.li,{children:["It should be ",(0,s.jsx)(n.strong,{children:"easy to detect duplicate logic"})," without interfering with unique implementations"]}),"\n",(0,s.jsxs)(n.li,{children:["There should be no ",(0,s.jsx)(n.strong,{children:"dispersion of logic"})," throughout the project"]}),"\n",(0,s.jsxs)(n.li,{children:["There should not be ",(0,s.jsx)(n.strong,{children:"too many heterogeneous abstractions and rules"})," for a good architecture"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"control",children:"Control"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["A good architecture should ",(0,s.jsx)(n.strong,{children:"speed up the solution of tasks, the introduction of features"})]}),"\n",(0,s.jsx)(n.li,{children:"It should be possible to control the development of the project"}),"\n",(0,s.jsxs)(n.li,{children:["It should be easy to ",(0,s.jsx)(n.strong,{children:"expand, modify, delete the code"})]}),"\n",(0,s.jsx)(n.li,{children:"The * decomposition and isolation of** functionality must be observed"}),"\n",(0,s.jsxs)(n.li,{children:["Each component of the system must be ",(0,s.jsx)(n.strong,{children:"easily replaceable and removable"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsxs)(n.em,{children:[(0,s.jsx)(n.a,{href:"https://youtu.be/BWAeYuWFHhs?t=1631",children:"No need to optimize for changes"})," - we can't predict the future"]})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsxs)(n.em,{children:[(0,s.jsx)(n.a,{href:"https://youtu.be/BWAeYuWFHhs?t=1666",children:"Better-optimize for deletion"})," - based on the context that already exists"]})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"adaptability",children:"Adaptability"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["A good architecture should be applicable ",(0,s.jsx)(n.strong,{children:"to most projects"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.em,{children:"With existing infrastructure solutions"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.em,{children:"At any stage of development"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"There should be no dependence on the framework and platform"}),"\n",(0,s.jsxs)(n.li,{children:["It should be possible to ",(0,s.jsx)(n.strong,{children:"easily scale the project and the team"}),", with the possibility of parallelization of development"]}),"\n",(0,s.jsxs)(n.li,{children:["It should be easy ",(0,s.jsx)(n.strong,{children:"to adapt to changing requirements and circumstances"})]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://youtu.be/BWAeYuWFHhs",children:"(React Berlin Talk) Oleg Isonen - Feature Driven Architecture"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://t.me/feature_slices",children:"(React SPB Meetup #1) Sergey Sova - Feature Slices"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://alexmngn.medium.com/why-react-developers-should-modularize-their-applications-d26d381854c1",children:"(Article) About project modularization"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://ryanlanciaux.com/blog/2017/08/20/a-feature-based-approach-to-react-development/",children:"(Article) About Separation of Concerns and structuring by features"})}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},3663:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return l}});var i=t(5271);let s={},r=i.createContext(s);function l(e){let n=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);
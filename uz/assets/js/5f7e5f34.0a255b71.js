"use strict";(self.webpackChunk_feature_sliced_documentation=self.webpackChunk_feature_sliced_documentation||[]).push([["914"],{6111:function(e,n,i){i.d(n,{d$:()=>l,ZP:()=>c});var t=i("2676"),s=i("3663");i("5271");var o=i("5965"),r=i("6303");let a=e=>{let{ticket:n}=e,i=`https://github.com/feature-sliced/documentation/issues/${n}`;return(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{children:(0,r.I)({id:"shared.wip.title"})}),(0,t.jsx)("p",{children:(0,r.I)({id:"shared.wip.subtitle"})}),(0,t.jsxs)("ul",{children:[(0,t.jsxs)("li",{children:[(0,r.I)({id:"shared.wip.var.feedback.base"}),(0,t.jsx)(o.Z,{to:i,children:(0,r.I)({id:"shared.wip.var.feedback.link"})})]}),(0,t.jsxs)("li",{children:[(0,r.I)({id:"shared.wip.var.material.base"}),(0,t.jsx)(o.Z,{to:"https://t.me/feature_sliced",children:(0,r.I)({id:"shared.wip.var.material.link"})})]}),(0,t.jsxs)("li",{children:[(0,r.I)({id:"shared.wip.var.contribute.base"}),(0,t.jsx)(o.Z,{to:"https://github.com/feature-sliced/documentation/blob/master/CONTRIBUTING.md",children:(0,r.I)({id:"shared.wip.var.contribute.link"})})]})]}),(0,t.jsx)("br",{}),(0,t.jsx)("p",{children:(0,t.jsx)("i",{children:"\uD83C\uDF70 Stay tuned!"})})]})},l=[];function d(e){let n={admonition:"admonition",...(0,s.a)(),...e.components};return(0,t.jsx)(n.admonition,{title:"WIP",type:"caution",children:(0,t.jsx)(a,{ticket:e.ticket})})}function c(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},5886:function(e,n,i){i.r(n),i.d(n,{default:()=>h,frontMatter:()=>a,metadata:()=>t,assets:()=>d,toc:()=>c,contentTitle:()=>l});var t=JSON.parse('{"id":"guides/issues/desegmented","title":"Desegemented","description":"Situation","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/guides/issues/desegmented.mdx","sourceDirName":"guides/issues","slug":"/guides/issues/desegmented","permalink":"/documentation/uz/docs/guides/issues/desegmented","draft":false,"unlisted":false,"editUrl":"https://github.com/feature-sliced/documentation/edit/master/i18n/en/docusaurus-plugin-content-docs/current/guides/issues/desegmented.mdx","tags":[],"version":"current","lastUpdatedAt":1742062811000,"sidebarPosition":2,"frontMatter":{"sidebar_position":2,"sidebar_class_name":"sidebar-item--wip"},"sidebar":"guidesSidebar","previous":{"title":"Usage with SvelteKit","permalink":"/documentation/uz/docs/guides/tech/with-sveltekit"},"next":{"title":"Routing","permalink":"/documentation/uz/docs/guides/issues/routes"}}'),s=i("2676"),o=i("3663"),r=i("6111");let a={sidebar_position:2,sidebar_class_name:"sidebar-item--wip"},l="Desegemented",d={},c=[...r.d$,{value:"Situation",id:"situation",level:2},{value:"Problem",id:"problem",level:2},{value:"If you ignore it",id:"if-you-ignore-it",level:2},{value:"Solution",id:"solution",level:2},{value:"See also",id:"see-also",level:2}];function u(e){let n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"desegemented",children:"Desegemented"})}),"\n",(0,s.jsx)(r.ZP,{ticket:"148"}),"\n",(0,s.jsx)(n.h2,{id:"situation",children:"Situation"}),"\n",(0,s.jsx)(n.p,{children:"Very often, there is a situation on projects when modules related to a specific domain from the subject area are unnecessarily desegmented and scattered around the project"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"\u251C\u2500\u2500 components/\n|    \u251C\u2500\u2500 DeliveryCard\n|    \u251C\u2500\u2500 DeliveryChoice\n|    \u251C\u2500\u2500 RegionSelect\n|    \u251C\u2500\u2500 UserAvatar\n\u251C\u2500\u2500 actions/\n|    \u251C\u2500\u2500 delivery.js\n|    \u251C\u2500\u2500 region.js\n|    \u251C\u2500\u2500 user.js\n\u251C\u2500\u2500 epics/\n|    \u251C\u2500\u2500 delivery.js\n|    \u251C\u2500\u2500 region.js\n|    \u251C\u2500\u2500 user.js\n\u251C\u2500\u2500 constants/\n|    \u251C\u2500\u2500 delivery.js\n|    \u251C\u2500\u2500 region.js\n|    \u251C\u2500\u2500 user.js\n\u251C\u2500\u2500 helpers/\n|    \u251C\u2500\u2500 delivery.js\n|    \u251C\u2500\u2500 region.js\n|    \u251C\u2500\u2500 user.js\n\u251C\u2500\u2500 entities/\n|    \u251C\u2500\u2500 delivery/\n|    |      \u251C\u2500\u2500 getters.js\n|    |      \u251C\u2500\u2500 selectors.js\n|    \u251C\u2500\u2500 region/\n|    \u251C\u2500\u2500 user/\n"})}),"\n",(0,s.jsx)(n.h2,{id:"problem",children:"Problem"}),"\n",(0,s.jsx)(n.p,{children:"The problem manifests itself at least in violation of the principle of * * High Cohesion** and excessive stretching * * of the axis of changes**"}),"\n",(0,s.jsx)(n.h2,{id:"if-you-ignore-it",children:"If you ignore it"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"If necessary, touch on the logic, for example, delivery - we will have to keep in mind that it lies in several places and touch on several places in the code-which unnecessarily stretches our * * Axis of changes**"}),"\n",(0,s.jsx)(n.li,{children:"If we need to study the logic of the user, we will have to go through the whole project to study in detail * * actions, epics, constants, entities, components** - instead of it lying in one place"}),"\n",(0,s.jsx)(n.li,{children:"Implicit connections and the uncontrollability of a growing subject area"}),"\n",(0,s.jsx)(n.li,{children:'With this approach, the eye is very often blurred and you may not notice how we "create constants for the sake of constants", creating a dump in the corresponding project directory'}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"solution",children:"Solution"}),"\n",(0,s.jsx)(n.p,{children:"Place all modules related to a specific domain/user case - directly next to each other"}),"\n",(0,s.jsx)(n.p,{children:"So that when studying a particular module, all its components lie side by side, and are not scattered around the project"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"It also increases the discoverability and clarity of the code base and the relationships between modules"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-diff",children:"- \u251C\u2500\u2500 components/\n- |    \u251C\u2500\u2500 DeliveryCard\n- |    \u251C\u2500\u2500 DeliveryChoice\n- |    \u251C\u2500\u2500 RegionSelect\n- |    \u251C\u2500\u2500 UserAvatar\n- \u251C\u2500\u2500 actions/\n- |    \u251C\u2500\u2500 delivery.js\n- |    \u251C\u2500\u2500 region.js\n- |    \u251C\u2500\u2500 user.js\n- \u251C\u2500\u2500 epics/{...}\n- \u251C\u2500\u2500 constants/{...}\n- \u251C\u2500\u2500 helpers/{...}\n  \u251C\u2500\u2500 entities/\n  |    \u251C\u2500\u2500 delivery/\n+ |    |      \u251C\u2500\u2500 ui/ # ~ components/\n+ |    |      |   \u251C\u2500\u2500 card.js\n+ |    |      |   \u251C\u2500\u2500 choice.js\n+ |    |      \u251C\u2500\u2500 model/\n+ |    |      |   \u251C\u2500\u2500 actions.js\n+ |    |      |   \u251C\u2500\u2500 constants.js\n+ |    |      |   \u251C\u2500\u2500 epics.js\n+ |    |      |   \u251C\u2500\u2500 getters.js\n+ |    |      |   \u251C\u2500\u2500 selectors.js\n+ |    |      \u251C\u2500\u2500 lib/ # ~ helpers\n  |    \u251C\u2500\u2500 region/\n  |    \u251C\u2500\u2500 user/\n"})}),"\n",(0,s.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://enterprisecraftsmanship.com/posts/cohesion-coupling-difference/",children:"(Article) About Low Coupling and High Cohesion clearly"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://medium.com/german-gorelkin/low-coupling-high-cohesion-d36369fb1be9",children:"(Article) Low Coupling and High Cohesion. The Law of Demeter"})}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},3663:function(e,n,i){i.d(n,{Z:function(){return a},a:function(){return r}});var t=i(5271);let s={},o=t.createContext(s);function r(e){let n=t.useContext(o);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);
"use strict";(self.webpackChunk_feature_sliced_documentation=self.webpackChunk_feature_sliced_documentation||[]).push([[5263],{7690:(e,s,i)=>{i.d(s,{Ay:()=>l,RM:()=>c});var t=i(6070),n=i(5710),r=(i(758),i(4750)),d=i(4596);const a=e=>{let{ticket:s}=e;const i=`https://github.com/feature-sliced/documentation/issues/${s}`;return(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{children:(0,d.T)({id:"shared.wip.title"})}),(0,t.jsx)("p",{children:(0,d.T)({id:"shared.wip.subtitle"})}),(0,t.jsxs)("ul",{children:[(0,t.jsxs)("li",{children:[(0,d.T)({id:"shared.wip.var.feedback.base"}),(0,t.jsx)(r.A,{to:i,children:(0,d.T)({id:"shared.wip.var.feedback.link"})})]}),(0,t.jsxs)("li",{children:[(0,d.T)({id:"shared.wip.var.material.base"}),(0,t.jsx)(r.A,{to:"https://t.me/feature_sliced",children:(0,d.T)({id:"shared.wip.var.material.link"})})]}),(0,t.jsxs)("li",{children:[(0,d.T)({id:"shared.wip.var.contribute.base"}),(0,t.jsx)(r.A,{to:"https://github.com/feature-sliced/documentation/blob/master/CONTRIBUTING.md",children:(0,d.T)({id:"shared.wip.var.contribute.link"})})]})]}),(0,t.jsx)("br",{}),(0,t.jsx)("p",{children:(0,t.jsx)("i",{children:"\ud83c\udf70 Stay tuned!"})})]})},c=[];function o(e){const s={admonition:"admonition",...(0,n.R)(),...e.components};return(0,t.jsx)(s.admonition,{title:"WIP",type:"caution",children:(0,t.jsx)(a,{ticket:e.ticket})})}function l(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},8543:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>d,metadata:()=>c,toc:()=>l});var t=i(6070),n=i(5710),r=i(7690);const d={sidebar_position:3,sidebar_class_name:"sidebar-item--wip"},a="\u0420\u043e\u0443\u0442\u0438\u043d\u0433",c={id:"guides/issues/routes",title:"\u0420\u043e\u0443\u0442\u0438\u043d\u0433",description:"\u0421\u0438\u0442\u0443\u0430\u0446\u0438\u044f",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/guides/issues/routes.mdx",sourceDirName:"guides/issues",slug:"/guides/issues/routes",permalink:"/ru/docs/guides/issues/routes",draft:!1,unlisted:!1,editUrl:"https://github.com/feature-sliced/documentation/edit/master/i18n/ru/docusaurus-plugin-content-docs/current/guides/issues/routes.mdx",tags:[],version:"current",lastUpdatedAt:1722708654e3,sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_class_name:"sidebar-item--wip"},sidebar:"guidesSidebar",previous:{title:"\u0414\u0435\u0441\u0435\u0433\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u044f",permalink:"/ru/docs/guides/issues/desegmented"},next:{title:"\u041a\u0440\u043e\u0441\u0441-\u0438\u043c\u043f\u043e\u0440\u0442\u044b",permalink:"/ru/docs/guides/issues/cross-imports"}},o={},l=[...r.RM,{value:"\u0421\u0438\u0442\u0443\u0430\u0446\u0438\u044f",id:"situation",level:2},{value:"\u041f\u0440\u043e\u0431\u043b\u0435\u043c\u0430",id:"problem",level:2},{value:"\u0415\u0441\u043b\u0438 \u043f\u0440\u043e\u0438\u0433\u043d\u043e\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c",id:"if-you-ignore-it",level:2},{value:"\u0420\u0435\u0448\u0435\u043d\u0438\u0435",id:"solution",level:2},{value:"\u0421\u043c. \u0442\u0430\u043a\u0436\u0435",id:"see-also",level:2}];function u(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,n.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"\u0440\u043e\u0443\u0442\u0438\u043d\u0433",children:"\u0420\u043e\u0443\u0442\u0438\u043d\u0433"}),"\n",(0,t.jsx)(r.Ay,{ticket:"169"}),"\n",(0,t.jsx)(s.h2,{id:"situation",children:"\u0421\u0438\u0442\u0443\u0430\u0446\u0438\u044f"}),"\n",(0,t.jsx)(s.p,{children:"\u0423\u0440\u043b\u044b \u043a \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430\u043c \u0445\u0430\u0440\u0434\u043a\u043e\u0434\u044f\u0442\u0441\u044f \u0432 \u0441\u043b\u043e\u044f\u0445 \u043d\u0438\u0436\u0435 pages"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-tsx",metastring:'title="entities/post/card"',children:"\n<Card>\n    <Card.Title \n        href={`/post/${data.id}`}\n        title={data.name}\n    />\n    ...\n</Card>\n"})}),"\n",(0,t.jsx)(s.h2,{id:"problem",children:"\u041f\u0440\u043e\u0431\u043b\u0435\u043c\u0430"}),"\n",(0,t.jsx)(s.p,{children:"\u0423\u0440\u043b\u044b \u043d\u0435 \u0441\u043a\u043e\u043d\u0446\u0435\u043d\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b \u0432 \u0441\u043b\u043e\u0435 \u0441\u0442\u0440\u0430\u043d\u0438\u0446, \u0433\u0434\u0435 \u0438\u043c \u0438 \u043c\u0435\u0441\u0442\u043e \u043f\u043e \u0441\u043a\u043e\u0443\u043f\u0443 \u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0441\u0442\u0438"}),"\n",(0,t.jsx)(s.h2,{id:"if-you-ignore-it",children:"\u0415\u0441\u043b\u0438 \u043f\u0440\u043e\u0438\u0433\u043d\u043e\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c"}),"\n",(0,t.jsx)(s.p,{children:"\u0422\u043e\u0433\u0434\u0430 \u043f\u0440\u0438 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0438 \u0443\u0440\u043b\u043e\u0432, \u043f\u0440\u0438\u0434\u0435\u0442\u0441\u044f \u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0432 \u0433\u043e\u043b\u043e\u0432\u0435, \u0447\u0442\u043e \u044d\u0442\u0438 \u0443\u0440\u043b\u044b (\u0438 \u043b\u043e\u0433\u0438\u043a\u0430 \u0443\u0440\u043b\u043e\u0432/\u0440\u0435\u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0432) \u043c\u043e\u0433\u0443\u0442 \u0431\u044b\u0442\u044c \u0432\u043e \u0432\u0441\u0435\u0445 \u0441\u043b\u043e\u044f\u0445 \u043a\u0440\u043e\u043c\u0435 pages"}),"\n",(0,t.jsx)(s.p,{children:"\u0410 \u0442\u0430\u043a\u0436\u0435 \u044d\u0442\u043e \u0437\u043d\u0430\u0447\u0438\u0442, \u0447\u0442\u043e \u0442\u0435\u043f\u0435\u0440\u044c \u0434\u0430\u0436\u0435 \u043f\u0440\u043e\u0441\u0442\u0430\u044f \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0430 \u0442\u043e\u0432\u0430\u0440\u0430 \u0431\u0435\u0440\u0435\u0442 \u0447\u0430\u0441\u0442\u044c \u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0441\u0442\u0438 \u043e\u0442 \u0441\u0442\u0440\u0430\u043d\u0438\u0446, \u0447\u0442\u043e \u0440\u0430\u0437\u043c\u0430\u0437\u044b\u0432\u0430\u0435\u0442 \u043b\u043e\u0433\u0438\u043a\u0443 \u043f\u043e \u043f\u0440\u043e\u0435\u043a\u0442\u0443"}),"\n",(0,t.jsx)(s.h2,{id:"solution",children:"\u0420\u0435\u0448\u0435\u043d\u0438\u0435"}),"\n",(0,t.jsx)(s.p,{children:"\u041e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u0442\u044c \u0440\u0430\u0431\u043e\u0442\u0443 \u0441 \u0443\u0440\u043b\u0430\u043c\u0438/\u0440\u0435\u0434\u0438\u0440\u0435\u043a\u0442\u0430\u043c\u0438 \u043e\u0442 \u0443\u0440\u043e\u0432\u043d\u044f \u0441\u0442\u0440\u0430\u043d\u0438\u0446 \u0438 \u0432\u044b\u0448\u0435"}),"\n",(0,t.jsx)(s.p,{children:"\u0412 \u0441\u043b\u043e\u0438 \u043d\u0438\u0436\u0435 \u043f\u0435\u0440\u0435\u0434\u0430\u0432\u0430\u0442\u044c \u0447\u0435\u0440\u0435\u0437 \u043a\u043e\u043c\u043f\u043e\u0437\u0438\u0446\u0438\u044e/\u043f\u0440\u043e\u043f\u0441\u044b/\u0444\u0430\u0431\u0440\u0438\u043a\u0438"}),"\n",(0,t.jsx)(s.h2,{id:"see-also",children:"\u0421\u043c. \u0442\u0430\u043a\u0436\u0435"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://t.me/feature_sliced/4389",children:'(\u0422\u0440\u0435\u0434) \u0427\u0442\u043e \u0435\u0441\u043b\u0438 "\u0437\u0430\u0448\u0438\u0432\u0430\u0442\u044c" \u0440\u043e\u0443\u0442\u0438\u043d\u0433 \u0432 entities/features/widgets'})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://t.me/feature_sliced/3756",children:"(\u0422\u0440\u0435\u0434) \u041f\u043e\u0447\u0435\u043c\u0443 \u0440\u0430\u0437\u043c\u0430\u0437\u044b\u0432\u0430\u0435 \u043b\u043e\u0433\u0438\u043a\u0443 \u0440\u043e\u0443\u0442\u043e\u0432 \u0442\u043e\u043b\u044c\u043a\u043e \u0432 pages"})}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},5710:(e,s,i)=>{i.d(s,{R:()=>d,x:()=>a});var t=i(758);const n={},r=t.createContext(n);function d(e){const s=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),t.createElement(r.Provider,{value:s},e.children)}}}]);
"use strict";(self.webpackChunk_feature_sliced_documentation=self.webpackChunk_feature_sliced_documentation||[]).push([["1216"],{182:function(e,s,n){n.r(s),n.d(s,{default:()=>o,frontMatter:()=>r,metadata:()=>t,assets:()=>p,toc:()=>a,contentTitle:()=>i});var t=JSON.parse('{"id":"guides/tech/with-nextjs","title":"\u0418\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435 \u0441 NextJS","description":"\u0412 NextJS \u043F\u0440\u043E\u0435\u043A\u0442\u0435 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E \u0440\u0435\u0430\u043B\u0438\u0437\u043E\u0432\u0430\u0442\u044C FSD, \u043D\u043E \u0432\u043E\u0437\u043D\u0438\u043A\u0430\u044E\u0442 \u043A\u043E\u043D\u0444\u043B\u0438\u043A\u0442\u044B \u0438\u0437-\u0437\u0430 \u0440\u0430\u0437\u043B\u0438\u0447\u0438\u0439 \u043C\u0435\u0436\u0434\u0443 \u0442\u0440\u0435\u0431\u043E\u0432\u0430\u043D\u0438\u044F\u043C\u0438 \u043A \u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0435 \u043F\u0440\u043E\u0435\u043A\u0442\u0430 NextJS \u0438 \u043F\u0440\u0438\u043D\u0446\u0438\u043F\u0430\u043C\u0438 FSD \u0432 \u0434\u0432\u0443\u0445 \u043F\u0443\u043D\u043A\u0442\u0430\u0445:","source":"@site/i18n/ru/docusaurus-plugin-content-docs/current/guides/tech/with-nextjs.mdx","sourceDirName":"guides/tech","slug":"/guides/tech/with-nextjs","permalink":"/ru/docs/guides/tech/with-nextjs","draft":false,"unlisted":false,"editUrl":"https://github.com/feature-sliced/documentation/edit/master/i18n/ru/docusaurus-plugin-content-docs/current/guides/tech/with-nextjs.mdx","tags":[],"version":"current","lastUpdatedAt":1736005496000,"sidebarPosition":10,"frontMatter":{"sidebar_position":10},"sidebar":"guidesSidebar","previous":{"title":"\u041C\u0438\u0433\u0440\u0430\u0446\u0438\u044F \u0441 v2.0 \u043D\u0430 v2.1","permalink":"/ru/docs/guides/migration/from-v2-0"},"next":{"title":"\u0418\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435 \u0441 NuxtJS","permalink":"/ru/docs/guides/tech/with-nuxtjs"}}'),d=n("2676"),c=n("9938");let r={sidebar_position:10},i="\u0418\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435 \u0441 NextJS",p={},a=[{value:"\u041A\u043E\u043D\u0444\u043B\u0438\u043A\u0442 \u043C\u0435\u0436\u0434\u0443 FSD \u0438 NextJS \u0432 \u0441\u043B\u043E\u0435 <code>pages</code>",id:"pages-conflict",level:2},{value:"\u041F\u0435\u0440\u0435\u043C\u0435\u0449\u0435\u043D\u0438\u0435 \u043F\u0430\u043F\u043A\u0438 <code>pages</code> NextJS \u0432 \u043A\u043E\u0440\u043D\u0435\u0432\u0443\u044E \u043F\u0430\u043F\u043A\u0443 \u043F\u0440\u043E\u0435\u043A\u0442\u0430 (\u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0443\u0435\u0442\u0441\u044F)",id:"\u043F\u0435\u0440\u0435\u043C\u0435\u0449\u0435\u043D\u0438\u0435-\u043F\u0430\u043F\u043A\u0438-pages-nextjs-\u0432-\u043A\u043E\u0440\u043D\u0435\u0432\u0443\u044E-\u043F\u0430\u043F\u043A\u0443-\u043F\u0440\u043E\u0435\u043A\u0442\u0430-\u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0443\u0435\u0442\u0441\u044F",level:3},{value:"\u041F\u0435\u0440\u0435\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435 \u043F\u0430\u043F\u043A\u0438 <code>pages</code> \u0432 \u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0435 FSD",id:"\u043F\u0435\u0440\u0435\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435-\u043F\u0430\u043F\u043A\u0438-pages-\u0432-\u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0435-fsd",level:3},{value:"\u041E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0438\u0435 \u043F\u0430\u043F\u043A\u0438 <code>app</code> \u0432 NextJS",id:"app-absence",level:2},{value:"\u0418\u043C\u043F\u043E\u0440\u0442 \u0444\u0443\u043D\u043A\u0446\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438 \u0432 <code>pages/_app.tsx</code>",id:"\u0438\u043C\u043F\u043E\u0440\u0442-\u0444\u0443\u043D\u043A\u0446\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438-\u0432-pages_apptsx",level:3},{value:"\u0420\u0430\u0431\u043E\u0442\u0430 \u0441 App Router",id:"app-router",level:2},{value:"\u0421\u043C. \u0442\u0430\u043A\u0436\u0435",id:"see-also",level:2}];function l(e){let s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,c.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(s.header,{children:(0,d.jsx)(s.h1,{id:"\u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435-\u0441-nextjs",children:"\u0418\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435 \u0441 NextJS"})}),"\n",(0,d.jsx)(s.p,{children:"\u0412 NextJS \u043F\u0440\u043E\u0435\u043A\u0442\u0435 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E \u0440\u0435\u0430\u043B\u0438\u0437\u043E\u0432\u0430\u0442\u044C FSD, \u043D\u043E \u0432\u043E\u0437\u043D\u0438\u043A\u0430\u044E\u0442 \u043A\u043E\u043D\u0444\u043B\u0438\u043A\u0442\u044B \u0438\u0437-\u0437\u0430 \u0440\u0430\u0437\u043B\u0438\u0447\u0438\u0439 \u043C\u0435\u0436\u0434\u0443 \u0442\u0440\u0435\u0431\u043E\u0432\u0430\u043D\u0438\u044F\u043C\u0438 \u043A \u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0435 \u043F\u0440\u043E\u0435\u043A\u0442\u0430 NextJS \u0438 \u043F\u0440\u0438\u043D\u0446\u0438\u043F\u0430\u043C\u0438 FSD \u0432 \u0434\u0432\u0443\u0445 \u043F\u0443\u043D\u043A\u0442\u0430\u0445:\xa0"}),"\n",(0,d.jsxs)(s.ul,{children:["\n",(0,d.jsxs)(s.li,{children:["\u041C\u0430\u0440\u0448\u0440\u0443\u0442\u0438\u0437\u0430\u0446\u0438\u044F \u0444\u0430\u0439\u043B\u043E\u0432 \u0432 \u0441\u043B\u043E\u0435 ",(0,d.jsx)(s.code,{children:"pages"})]}),"\n",(0,d.jsxs)(s.li,{children:["\u041A\u043E\u043D\u0444\u043B\u0438\u043A\u0442 \u0438\u043B\u0438 \u043E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0438\u0435 \u0441\u043B\u043E\u044F ",(0,d.jsx)(s.code,{children:"app"})," \u0432 NextJS"]}),"\n"]}),"\n",(0,d.jsxs)(s.h2,{id:"pages-conflict",children:["\u041A\u043E\u043D\u0444\u043B\u0438\u043A\u0442 \u043C\u0435\u0436\u0434\u0443 FSD \u0438 NextJS \u0432 \u0441\u043B\u043E\u0435 ",(0,d.jsx)(s.code,{children:"pages"})]}),"\n",(0,d.jsxs)(s.p,{children:["NextJS \u043F\u0440\u0435\u0434\u043B\u0430\u0433\u0430\u0435\u0442 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u043F\u0430\u043F\u043A\u0443 ",(0,d.jsx)(s.code,{children:"pages"})," \u0434\u043B\u044F \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u0438\u044F \u043C\u0430\u0440\u0448\u0440\u0443\u0442\u043E\u0432 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F. NextJS \u043E\u0436\u0438\u0434\u0430\u0435\u0442, \u0447\u0442\u043E \u0444\u0430\u0439\u043B\u044B \u0432 \u043F\u0430\u043F\u043A\u0435 ",(0,d.jsx)(s.code,{children:"pages"})," \u0431\u0443\u0434\u0443\u0442 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u043E\u0432\u0430\u0442\u044C URL-\u0430\u0434\u0440\u0435\u0441\u0430\u043C.\n\u042D\u0442\u043E\u0442 \u043C\u0435\u0445\u0430\u043D\u0438\u0437\u043C \u043C\u0430\u0440\u0448\u0440\u0443\u0442\u0438\u0437\u0430\u0446\u0438\u0438 ",(0,d.jsx)(s.strong,{children:"\u043D\u0435 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u0442"})," \u043A\u043E\u043D\u0446\u0435\u043F\u0446\u0438\u0438 FSD, \u043F\u043E\u0441\u043A\u043E\u043B\u044C\u043A\u0443 \u0432 \u0442\u0430\u043A\u043E\u043C \u043C\u0435\u0445\u0430\u043D\u0438\u0437\u043C\u0435 \u043C\u0430\u0440\u0448\u0440\u0443\u0442\u0438\u0437\u0430\u0446\u0438\u0438 \u043D\u0435 \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u044B\u043C \u0441\u043E\u0431\u043B\u044E\u0441\u0442\u0438 \u043F\u043B\u043E\u0441\u043A\u0443\u044E \u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0443 \u0441\u043B\u0430\u0439\u0441\u043E\u0432."]}),"\n",(0,d.jsxs)(s.h3,{id:"\u043F\u0435\u0440\u0435\u043C\u0435\u0449\u0435\u043D\u0438\u0435-\u043F\u0430\u043F\u043A\u0438-pages-nextjs-\u0432-\u043A\u043E\u0440\u043D\u0435\u0432\u0443\u044E-\u043F\u0430\u043F\u043A\u0443-\u043F\u0440\u043E\u0435\u043A\u0442\u0430-\u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0443\u0435\u0442\u0441\u044F",children:["\u041F\u0435\u0440\u0435\u043C\u0435\u0449\u0435\u043D\u0438\u0435 \u043F\u0430\u043F\u043A\u0438 ",(0,d.jsx)(s.code,{children:"pages"})," NextJS \u0432 \u043A\u043E\u0440\u043D\u0435\u0432\u0443\u044E \u043F\u0430\u043F\u043A\u0443 \u043F\u0440\u043E\u0435\u043A\u0442\u0430 (\u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0443\u0435\u0442\u0441\u044F)"]}),"\n",(0,d.jsxs)(s.p,{children:["\u041F\u043E\u0434\u0445\u043E\u0434 \u0437\u0430\u043A\u043B\u044E\u0447\u0430\u0435\u0442\u0441\u044F \u0432 \u043F\u0435\u0440\u0435\u043C\u0435\u0449\u0435\u043D\u0438\u0438 \u043F\u0430\u043F\u043A\u0438 ",(0,d.jsx)(s.code,{children:"pages"})," NextJS \u0432 \u043A\u043E\u0440\u043D\u0435\u0432\u0443\u044E \u043F\u0430\u043F\u043A\u0443 \u043F\u0440\u043E\u0435\u043A\u0442\u0430 \u0438 \u0438\u043C\u043F\u043E\u0440\u0442\u0435 \u0441\u0442\u0440\u0430\u043D\u0438\u0446 FSD \u0432 \u043F\u0430\u043F\u043A\u0443 ",(0,d.jsx)(s.code,{children:"pages"})," NextJS. \u042D\u0442\u043E \u0441\u043E\u0445\u0440\u0430\u043D\u044F\u0435\u0442\n\u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0443 \u043F\u0440\u043E\u0435\u043A\u0442\u0430 FSD \u0432\u043D\u0443\u0442\u0440\u0438 \u043F\u0430\u043F\u043A\u0438 ",(0,d.jsx)(s.code,{children:"src"}),"."]}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-sh",children:"\u251C\u2500\u2500 pages              # \u041F\u0430\u043F\u043A\u0430 pages (NextJS)\n\u251C\u2500\u2500 src\n\u2502   \u251C\u2500\u2500 app\n\u2502   \u251C\u2500\u2500 entities\n\u2502   \u251C\u2500\u2500 features\n\u2502   \u251C\u2500\u2500 pages          # \u041F\u0430\u043F\u043A\u0430 pages (FSD)\n\u2502   \u251C\u2500\u2500 shared\n\u2502   \u251C\u2500\u2500 widgets\n"})}),"\n",(0,d.jsxs)(s.h3,{id:"\u043F\u0435\u0440\u0435\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435-\u043F\u0430\u043F\u043A\u0438-pages-\u0432-\u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0435-fsd",children:["\u041F\u0435\u0440\u0435\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435 \u043F\u0430\u043F\u043A\u0438 ",(0,d.jsx)(s.code,{children:"pages"})," \u0432 \u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0435 FSD"]}),"\n",(0,d.jsxs)(s.p,{children:["\u0414\u0440\u0443\u0433\u043E\u0439 \u0441\u043F\u043E\u0441\u043E\u0431 \u0440\u0435\u0448\u0438\u0442\u044C \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u0443 - \u043F\u0435\u0440\u0435\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u0442\u044C \u0441\u043B\u043E\u0439 ",(0,d.jsx)(s.code,{children:"pages"})," \u0432 \u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0435 FSD, \u0447\u0442\u043E\u0431\u044B \u0438\u0437\u0431\u0435\u0436\u0430\u0442\u044C \u043A\u043E\u043D\u0444\u043B\u0438\u043A\u0442\u043E\u0432 \u0441 \u043F\u0430\u043F\u043A\u043E\u0439 ",(0,d.jsx)(s.code,{children:"pages"})," NextJS.\n\u0412\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u043F\u0435\u0440\u0435\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u0442\u044C \u0441\u043B\u043E\u0439 ",(0,d.jsx)(s.code,{children:"pages"})," \u0432 FSD \u0432 ",(0,d.jsx)(s.code,{children:"views"}),".\xa0\n\u0422\u0430\u043A\u0438\u043C \u043E\u0431\u0440\u0430\u0437\u043E\u043C, \u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0430 \u043F\u0440\u043E\u0435\u043A\u0442\u0430 \u0432 \u043F\u0430\u043F\u043A\u0435 ",(0,d.jsx)(s.code,{children:"src"})," \u0441\u043E\u0445\u0440\u0430\u043D\u044F\u0435\u0442\u0441\u044F \u0431\u0435\u0437 \u043F\u0440\u043E\u0442\u0438\u0432\u043E\u0440\u0435\u0447\u0438\u0439 \u0441 \u0442\u0440\u0435\u0431\u043E\u0432\u0430\u043D\u0438\u044F\u043C\u0438 NextJS."]}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-sh",children:"\u251C\u2500\u2500 app\n\u251C\u2500\u2500 entities\n\u251C\u2500\u2500 features\n\u251C\u2500\u2500 pages              # \u041F\u0430\u043F\u043A\u0430 pages (NextJS)\n\u251C\u2500\u2500 views              # \u041F\u0435\u0440\u0435\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u043D\u0430\u044F \u043F\u0430\u043F\u043A\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446 FSD\n\u251C\u2500\u2500 shared\n\u251C\u2500\u2500 widgets\n"})}),"\n",(0,d.jsxs)(s.p,{children:["\u0423\u0447\u0442\u0438\u0442\u0435, \u0447\u0442\u043E \u0432 \u044D\u0442\u043E\u043C \u0441\u043B\u0443\u0447\u0430\u0435 \u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0443\u0435\u0442\u0441\u044F \u0437\u0430\u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u044D\u0442\u043E \u043F\u0435\u0440\u0435\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435 \u0432 \u0432\u0438\u0434\u043D\u043E\u043C \u043C\u0435\u0441\u0442\u0435 \u2014 \u0432 README \u043F\u0440\u043E\u0435\u043A\u0442\u0430 \u0438\u043B\u0438 \u0432\u043D\u0443\u0442\u0440\u0435\u043D\u043D\u0435\u0439 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430\u0446\u0438\u0438. \u042D\u0442\u043E \u043F\u0435\u0440\u0435\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435 \u2014 \u0447\u0430\u0441\u0442\u044C ",(0,d.jsx)(s.a,{href:"/docs/about/understanding/knowledge-types",children:'"\u043F\u0440\u043E\u0435\u043A\u0442\u043D\u044B\u0445 \u0437\u043D\u0430\u043D\u0438\u0439"'}),"."]}),"\n",(0,d.jsxs)(s.h2,{id:"app-absence",children:["\u041E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0438\u0435 \u043F\u0430\u043F\u043A\u0438 ",(0,d.jsx)(s.code,{children:"app"})," \u0432 NextJS"]}),"\n",(0,d.jsxs)(s.p,{children:["\u0412 NextJS \u043D\u0438\u0436\u0435 \u0432\u0435\u0440\u0441\u0438\u0438 13 \u043D\u0435\u0442 \u044F\u0432\u043D\u043E\u0439 \u043F\u0430\u043F\u043A\u0438 ",(0,d.jsx)(s.code,{children:"app"}),", \u0432\u043C\u0435\u0441\u0442\u043E \u044D\u0442\u043E\u0433\u043E NextJS \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442 \u0444\u0430\u0439\u043B ",(0,d.jsx)(s.code,{children:"_app.tsx"}),",\n\u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0438\u0433\u0440\u0430\u0435\u0442 \u0440\u043E\u043B\u044C \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u0430 \u043E\u0431\u0435\u0440\u0442\u044B\u0432\u0430\u043D\u0438\u044F \u0434\u043B\u044F \u0432\u0441\u0435\u0445 \u0441\u0442\u0440\u0430\u043D\u0438\u0446 \u043F\u0440\u043E\u0435\u043A\u0442\u0430."]}),"\n",(0,d.jsxs)(s.h3,{id:"\u0438\u043C\u043F\u043E\u0440\u0442-\u0444\u0443\u043D\u043A\u0446\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438-\u0432-pages_apptsx",children:["\u0418\u043C\u043F\u043E\u0440\u0442 \u0444\u0443\u043D\u043A\u0446\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438 \u0432 ",(0,d.jsx)(s.code,{children:"pages/_app.tsx"})]}),"\n",(0,d.jsxs)(s.p,{children:["\u0427\u0442\u043E\u0431\u044B \u0440\u0435\u0448\u0438\u0442\u044C \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u0443 \u043E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0438\u044F \u043F\u0430\u043F\u043A\u0438 ",(0,d.jsx)(s.code,{children:"app"})," \u0432 \u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0435 NextJS, \u0432\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u0441\u043E\u0437\u0434\u0430\u0442\u044C \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442 ",(0,d.jsx)(s.code,{children:"App"})," \u0432\u043D\u0443\u0442\u0440\u0438 \u0441\u043B\u043E\u044F ",(0,d.jsx)(s.code,{children:"app"})," \u0438 \u0438\u043C\u043F\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442 ",(0,d.jsx)(s.code,{children:"App"})," \u0432 ",(0,d.jsx)(s.code,{children:"pages/_app.tsx"}),", \u0447\u0442\u043E\u0431\u044B NextJS \u043C\u043E\u0433 \u0441 \u043D\u0438\u043C \u0440\u0430\u0431\u043E\u0442\u0430\u0442\u044C.\n\u041D\u0430\u043F\u0440\u0438\u043C\u0435\u0440:"]}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-tsx",children:"// app/providers/index.tsx\n\nconst App = ({ Component, pageProps }: AppProps) => {\n  return (\n    <Provider1>\n      <Provider2>\n        <BaseLayout>\n            <Component {...pageProps} />\n        </BaseLayout>\n      </Provider2>\n    </Provider1>\n  );\n};\n\nexport default App;\n"})}),"\n",(0,d.jsxs)(s.p,{children:["\u0417\u0430\u0442\u0435\u043C \u0432\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u0438\u043C\u043F\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442 ",(0,d.jsx)(s.code,{children:"App"})," \u0438 \u0433\u043B\u043E\u0431\u0430\u043B\u044C\u043D\u044B\u0435 \u0441\u0442\u0438\u043B\u0438 \u043F\u0440\u043E\u0435\u043A\u0442\u0430 \u0432 ",(0,d.jsx)(s.code,{children:"pages/_app.tsx"})," \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u043C \u043E\u0431\u0440\u0430\u0437\u043E\u043C:"]}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-tsx",children:"// pages/_app.tsx\n\nimport 'app/styles/index.scss'\n\nexport { default } from 'app/providers';\n"})}),"\n",(0,d.jsx)(s.h2,{id:"app-router",children:"\u0420\u0430\u0431\u043E\u0442\u0430 \u0441 App Router"}),"\n",(0,d.jsxs)(s.p,{children:["App Router \u0441\u0442\u0430\u043B \u0441\u0442\u0430\u0431\u0438\u043B\u044C\u043D\u044B\u043C \u0432 NextJS \u0432\u0435\u0440\u0441\u0438\u0438 13.4. App Router \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u0435\u0442 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u043F\u0430\u043F\u043A\u0443 ",(0,d.jsx)(s.code,{children:"app"})," \u0434\u043B\u044F \u043C\u0430\u0440\u0448\u0440\u0443\u0442\u0438\u0437\u0430\u0446\u0438\u0438 \u0432\u043C\u0435\u0441\u0442\u043E \u043F\u0430\u043F\u043A\u0438 ",(0,d.jsx)(s.code,{children:"pages"}),".\n\u0414\u043B\u044F \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u044F \u043F\u0440\u0438\u043D\u0446\u0438\u043F\u0430\u043C FSD, \u0432\u0430\u043C \u0441\u043B\u0435\u0434\u0443\u0435\u0442 \u043E\u0431\u0440\u0430\u0449\u0430\u0442\u044C\u0441\u044F \u0441 \u043F\u0430\u043F\u043A\u043E\u0439 ",(0,d.jsx)(s.code,{children:"app"})," NextJS \u0442\u0430\u043A \u0436\u0435, \u043A\u0430\u043A \u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0443\u0435\u0442\u0441\u044F\n\u0434\u043B\u044F \u0443\u0441\u0442\u0440\u0430\u043D\u0435\u043D\u0438\u044F \u043A\u043E\u043D\u0444\u043B\u0438\u043A\u0442\u0430 \u0441 \u043F\u0430\u043F\u043A\u043E\u0439 ",(0,d.jsx)(s.code,{children:"pages"})," NextJS."]}),"\n",(0,d.jsxs)(s.p,{children:["\u041F\u043E\u0434\u0445\u043E\u0434 \u0437\u0430\u043A\u043B\u044E\u0447\u0430\u0435\u0442\u0441\u044F \u0432 \u043F\u0435\u0440\u0435\u043C\u0435\u0449\u0435\u043D\u0438\u0438 \u043F\u0430\u043F\u043A\u0438 ",(0,d.jsx)(s.code,{children:"app"})," NextJS \u0432 \u043A\u043E\u0440\u043D\u0435\u0432\u0443\u044E \u043F\u0430\u043F\u043A\u0443 \u043F\u0440\u043E\u0435\u043A\u0442\u0430 \u0438 \u0438\u043C\u043F\u043E\u0440\u0442\u0435 \u0441\u0442\u0440\u0430\u043D\u0438\u0446 FSD \u0432 \u043F\u0430\u043F\u043A\u0443 ",(0,d.jsx)(s.code,{children:"app"})," NextJS. \u042D\u0442\u043E \u0441\u043E\u0445\u0440\u0430\u043D\u044F\u0435\u0442\n\u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0443 \u043F\u0440\u043E\u0435\u043A\u0442\u0430 FSD \u0432\u043D\u0443\u0442\u0440\u0438 \u043F\u0430\u043F\u043A\u0438 ",(0,d.jsx)(s.code,{children:"src"}),". \u0412\u0430\u043C \u0442\u0430\u043A\u0436\u0435 \u0441\u0442\u043E\u0438\u0442 \u0434\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0432 \u043A\u043E\u0440\u043D\u0435\u0432\u0443\u044E \u043F\u0430\u043F\u043A\u0443 \u043F\u0440\u043E\u0435\u043A\u0442\u0430 \u043F\u0430\u043F\u043A\u0443 ",(0,d.jsx)(s.code,{children:"pages"}),", \u043F\u043E\u0442\u043E\u043C\u0443 \u0447\u0442\u043E App Router \u0441\u043E\u0432\u043C\u0435\u0441\u0442\u0438\u043C \u0441 Pages Router."]}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{children:"\u251C\u2500\u2500 app                # \u041F\u0430\u043F\u043A\u0430 app (NextJS)\n\u251C\u2500\u2500 pages              # \u041F\u0443\u0441\u0442\u0430\u044F \u043F\u0430\u043F\u043A\u0430 pages (NextJS)\n\u2502   \u251C\u2500\u2500 README.md      # \u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u0442\u043E\u0433\u043E, \u0437\u0430\u0447\u0435\u043C \u043D\u0443\u0436\u043D\u0430 \u044D\u0442\u0430 \u043F\u0430\u043F\u043A\u0430\n\u251C\u2500\u2500 src\n\u2502   \u251C\u2500\u2500 app            # \u041F\u0430\u043F\u043A\u0430 app (FSD)\n\u2502   \u251C\u2500\u2500 entities\n\u2502   \u251C\u2500\u2500 features\n\u2502   \u251C\u2500\u2500 pages          # \u041F\u0430\u043F\u043A\u0430 pages (FSD)\n\u2502   \u251C\u2500\u2500 shared\n\u2502   \u251C\u2500\u2500 widgets\n"})}),"\n",(0,d.jsx)(s.p,{children:(0,d.jsx)(s.a,{href:"https://stackblitz.com/edit/stackblitz-starters-aiez55?file=README.md",children:(0,d.jsx)(s.img,{src:"https://developer.stackblitz.com/img/open_in_stackblitz.svg",alt:"\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u0432 StackBlitz"})})}),"\n",(0,d.jsx)(s.h2,{id:"see-also",children:"\u0421\u043C. \u0442\u0430\u043A\u0436\u0435"}),"\n",(0,d.jsxs)(s.ul,{children:["\n",(0,d.jsx)(s.li,{children:(0,d.jsx)(s.a,{href:"https://t.me/feature_sliced/3623",children:"(\u0422\u0440\u0435\u0434) \u041F\u0440\u043E pages \u0434\u0438\u0440\u0435\u043A\u0442\u043E\u0440\u0438\u044E \u0432 NextJS"})}),"\n"]})]})}function o(e={}){let{wrapper:s}={...(0,c.a)(),...e.components};return s?(0,d.jsx)(s,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}},9938:function(e,s,n){n.d(s,{Z:function(){return i},a:function(){return r}});var t=n(5271);let d={},c=t.createContext(d);function r(e){let s=t.useContext(c);return t.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:r(e.components),t.createElement(c.Provider,{value:s},e.children)}}}]);
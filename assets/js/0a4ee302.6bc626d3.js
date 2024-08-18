"use strict";(self.webpackChunk_feature_sliced_documentation=self.webpackChunk_feature_sliced_documentation||[]).push([[5977],{2009:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var s=t(6070),i=t(5710);const o={sidebar_position:10},r="Usage with NuxtJS",c={id:"guides/tech/with-nuxtjs",title:"Usage with NuxtJS",description:"It is possible to implement FSD in a NuxtJS project, but conflicts arise due to the differences between NuxtJS project structure requirements and FSD principles:",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/guides/tech/with-nuxtjs.mdx",sourceDirName:"guides/tech",slug:"/guides/tech/with-nuxtjs",permalink:"/docs/guides/tech/with-nuxtjs",draft:!1,unlisted:!1,editUrl:"https://github.com/feature-sliced/documentation/edit/master/i18n/en/docusaurus-plugin-content-docs/current/guides/tech/with-nuxtjs.mdx",tags:[],version:"current",lastUpdatedAt:1723991218e3,sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"guidesSidebar",previous:{title:"Usage with NextJS",permalink:"/docs/guides/tech/with-nextjs"},next:{title:"Usage with React Query",permalink:"/docs/guides/tech/with-react-query"}},a={},d=[{value:"Adding an alias for the <code>src</code> directory",id:"adding-an-alias-for-the-src-directory",level:2},{value:"Choose how to configure the router",id:"choose-how-to-configure-the-router",level:2},{value:"Routing using config",id:"routing-using-config",level:3},{value:"File Routing",id:"file-routing",level:3},{value:"What to do with <code>layouts</code>?",id:"what-to-do-with-layouts",level:2},{value:"See also",id:"see-also",level:2}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"usage-with-nuxtjs",children:"Usage with NuxtJS"})}),"\n",(0,s.jsx)(n.p,{children:"It is possible to implement FSD in a NuxtJS project, but conflicts arise due to the differences between NuxtJS project structure requirements and FSD principles:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Initially, NuxtJS offers a project file structure without a ",(0,s.jsx)(n.code,{children:"src"})," folder, i.e. in the root of the project."]}),"\n",(0,s.jsxs)(n.li,{children:["The file routing is in the ",(0,s.jsx)(n.code,{children:"pages"})," folder, while in FSD this folder is reserved for the flat slice structure."]}),"\n"]}),"\n",(0,s.jsxs)(n.h2,{id:"adding-an-alias-for-the-src-directory",children:["Adding an alias for the ",(0,s.jsx)(n.code,{children:"src"})," directory"]}),"\n",(0,s.jsxs)(n.p,{children:["Add an ",(0,s.jsx)(n.code,{children:"alias"})," object to your config:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",metastring:'title="nuxt.config.ts"',children:"export default defineNuxtConfig({\n  devtools: { enabled: true }, // Not FSD related, enabled at project startup\n  alias: {\n    \"@\": '../src'\n  },\n})\n"})}),"\n",(0,s.jsx)(n.h2,{id:"choose-how-to-configure-the-router",children:"Choose how to configure the router"}),"\n",(0,s.jsxs)(n.p,{children:["In NuxtJS, there are two ways to customize the routing - using a config and using a file structure.\nIn the case of file-based routing, you will create index.vue files in folders inside the app/routes directory, and in the case of configure, you will configure the routers in the ",(0,s.jsx)(n.code,{children:"router.options.ts"})," file."]}),"\n",(0,s.jsx)(n.h3,{id:"routing-using-config",children:"Routing using config"}),"\n",(0,s.jsxs)(n.p,{children:["In the ",(0,s.jsx)(n.code,{children:"app"})," layer, create a ",(0,s.jsx)(n.code,{children:"router.options.ts"})," file, and export a config object from it:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",metastring:'title="app/router.options.ts"',children:"import type { RouterConfig } from '@nuxt/schema';\n\nexport default <RouterConfig> {\n  routes: (_routes) => [],\n};\n\n"})}),"\n",(0,s.jsxs)(n.p,{children:["To add a ",(0,s.jsx)(n.code,{children:"Home"})," page to your project, you need to do the following steps:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Add a page slice inside the ",(0,s.jsx)(n.code,{children:"pages"})," layer"]}),"\n",(0,s.jsxs)(n.li,{children:["Add the appropriate route to the ",(0,s.jsx)(n.code,{children:"app/router.config.ts"})," config"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["To create a page slice, let's use the ",(0,s.jsx)(n.a,{href:"https://github.com/feature-sliced/cli",children:"CLI"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"fsd pages home\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Create a ",(0,s.jsx)(n.code,{children:"home-page.vue"})," file inside the ui segment, access it using the Public API"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",metastring:'title="src/pages/home/index.ts"',children:"export { default as HomePage } from './ui/home-page';\n"})}),"\n",(0,s.jsx)(n.p,{children:"Thus, the file structure will look like this:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"|\u2500\u2500 src\n\u2502   \u251c\u2500\u2500 app\n\u2502   \u2502   \u251c\u2500\u2500 router.config.ts\n\u2502   \u251c\u2500\u2500 pages\n\u2502   \u2502   \u251c\u2500\u2500 home\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 ui\n\u2502   \u2502   \u2502   \u2502   \u251c\u2500\u2500 home-page.vue\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 index.ts\n"})}),"\n",(0,s.jsx)(n.p,{children:"Finally, let's add a root to the config:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",metastring:'title="app/router.config.ts"',children:"import type { RouterConfig } from '@nuxt/schema'\n\nexport default <RouterConfig> {\n  routes: (_routes) => [\n    {\n      name: 'home',\n      path: '/',\n      component: () => import('@/pages/home.vue').then(r => r.default || r)\n    }\n  ],\n}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"file-routing",children:"File Routing"}),"\n",(0,s.jsxs)(n.p,{children:["First of all, create a ",(0,s.jsx)(n.code,{children:"src"})," directory in the root of your project, and create app and pages layers inside this directory and a routes folder inside the app layer.\nThus, your file structure should look like this:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"\u251c\u2500\u2500 src\n\u2502   \u251c\u2500\u2500 app\n\u2502   \u2502   \u251c\u2500\u2500 routes\n\u2502   \u251c\u2500\u2500 pages                         # Pages folder, related to FSD\n"})}),"\n",(0,s.jsxs)(n.p,{children:["In order for NuxtJS to use the routes folder inside the ",(0,s.jsx)(n.code,{children:"app"})," layer for file routing, you need to modify ",(0,s.jsx)(n.code,{children:"nuxt.config.ts"})," as follows:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",metastring:'title="nuxt.config.ts"',children:"export default defineNuxtConfig({\n  devtools: { enabled: true }, // Not FSD related, enabled at project startup\n  alias: {\n    \"@\": '../src'\n  },\n  dir: {\n    pages: './src/app/routes'\n  }\n})\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Now, you can create routes for pages within ",(0,s.jsx)(n.code,{children:"app"})," and connect pages from ",(0,s.jsx)(n.code,{children:"pages"})," to them."]}),"\n",(0,s.jsxs)(n.p,{children:["For example, to add a ",(0,s.jsx)(n.code,{children:"Home"})," page to your project, you need to do the following steps:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Add a page slice inside the ",(0,s.jsx)(n.code,{children:"pages"})," layer"]}),"\n",(0,s.jsxs)(n.li,{children:["Add the corresponding root inside the ",(0,s.jsx)(n.code,{children:"app"})," layer"]}),"\n",(0,s.jsx)(n.li,{children:"Align the page from the slice with the root"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["To create a page slice, let's use the ",(0,s.jsx)(n.a,{href:"https://github.com/feature-sliced/cli",children:"CLI"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"fsd pages home\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Create a ",(0,s.jsx)(n.code,{children:"home-page.vue"})," file inside the ui segment, access it using the Public API"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",metastring:'title="src/pages/home/index.ts"',children:"export { default as HomePage } from './ui/home-page';\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Create a root for this page inside the ",(0,s.jsx)(n.code,{children:"app"})," layer:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"\n\u251c\u2500\u2500 src\n\u2502   \u251c\u2500\u2500 app\n\u2502   \u2502   \u251c\u2500\u2500 routes\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 index.vue\n\u2502   \u251c\u2500\u2500 pages\n\u2502   \u2502   \u251c\u2500\u2500 home\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 ui\n\u2502   \u2502   \u2502   \u2502   \u251c\u2500\u2500 home-page.vue\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 index.ts\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Add your page component inside the ",(0,s.jsx)(n.code,{children:"index.vue"})," file:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",metastring:'title="src/app/routes/index.vue"',children:"<script setup>\n  import { HomePage } from '@/pages/home';\n<\/script>\n\n<template>\n  <HomePage/>\n</template>\n"})}),"\n",(0,s.jsxs)(n.h2,{id:"what-to-do-with-layouts",children:["What to do with ",(0,s.jsx)(n.code,{children:"layouts"}),"?"]}),"\n",(0,s.jsxs)(n.p,{children:["You can place layouts inside the ",(0,s.jsx)(n.code,{children:"app"})," layer, to do this you need to modify the config as follows:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",metastring:'title="nuxt.config.ts"',children:"export default defineNuxtConfig({\n  devtools: { enabled: true }, // Not related to FSD, enabled at project startup\n  alias: {\n    \"@\": '../src'\n  },\n  dir: {\n    pages: './src/app/routes',\n    layouts: './src/app/layouts'\n  }\n})\n"})}),"\n",(0,s.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://nuxt.com/docs/api/nuxt-config#dir",children:"Documentation on changing directory config in NuxtJS"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://nuxt.com/docs/guide/recipes/custom-routing#router-config",children:"Documentation on changing router config in NuxtJS"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://nuxt.com/docs/api/nuxt-config#alias",children:"Documentation on changing aliases in NuxtJS"})}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},5710:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>c});var s=t(758);const i={},o=s.createContext(i);function r(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);
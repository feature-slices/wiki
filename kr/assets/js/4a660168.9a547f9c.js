"use strict";(self.webpackChunk_feature_sliced_documentation=self.webpackChunk_feature_sliced_documentation||[]).push([["7827"],{351:function(e,n,t){t.r(n),t.d(n,{default:()=>u,frontMatter:()=>c,metadata:()=>s,assets:()=>a,toc:()=>o,contentTitle:()=>l});var s=JSON.parse('{"id":"guides/tech/with-sveltekit","title":"SvelteKit\uC640 \uD568\uAED8 \uC0AC\uC6A9\uD558\uAE30","description":"SvelteKit\uC5D0\uC11C FSD(Feature-Sliced Design) \uC544\uD0A4\uD14D\uCC98\uB97C \uAD6C\uD604\uD560 \uC218 \uC788\uC9C0\uB9CC, \uBA87 \uAC00\uC9C0 \uAD6C\uC870\uC801 \uCC28\uC774\uC810\uC774 \uC788\uC2B5\uB2C8\uB2E4:","source":"@site/i18n/kr/docusaurus-plugin-content-docs/current/guides/tech/with-sveltekit.mdx","sourceDirName":"guides/tech","slug":"/guides/tech/with-sveltekit","permalink":"/documentation/kr/docs/guides/tech/with-sveltekit","draft":false,"unlisted":false,"editUrl":"https://github.com/feature-sliced/documentation/edit/master/i18n/kr/docusaurus-plugin-content-docs/current/guides/tech/with-sveltekit.mdx","tags":[],"version":"current","lastUpdatedAt":1742062811000,"frontMatter":{},"sidebar":"guidesSidebar","previous":{"title":"React Query\uC640 \uD568\uAED8 \uC0AC\uC6A9\uD558\uAE30","permalink":"/documentation/kr/docs/guides/tech/with-react-query"},"next":{"title":"Desegmentation","permalink":"/documentation/kr/docs/guides/issues/desegmented"}}'),i=t("2676"),r=t("3663");let c={},l="SvelteKit\uC640 \uD568\uAED8 \uC0AC\uC6A9\uD558\uAE30",a={},o=[{value:"\uAD6C\uC131 \uC124\uC815",id:"\uAD6C\uC131-\uC124\uC815",level:2},{value:"File Routing\uC744 <code>src/app</code>\uC73C\uB85C \uC774\uB3D9",id:"file-routing\uC744-srcapp\uC73C\uB85C-\uC774\uB3D9",level:2},{value:"\uCC38\uACE0 \uC790\uB8CC",id:"\uCC38\uACE0-\uC790\uB8CC",level:2}];function d(e){let n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"sveltekit\uC640-\uD568\uAED8-\uC0AC\uC6A9\uD558\uAE30",children:"SvelteKit\uC640 \uD568\uAED8 \uC0AC\uC6A9\uD558\uAE30"})}),"\n",(0,i.jsx)(n.p,{children:"SvelteKit\uC5D0\uC11C FSD(Feature-Sliced Design) \uC544\uD0A4\uD14D\uCC98\uB97C \uAD6C\uD604\uD560 \uC218 \uC788\uC9C0\uB9CC, \uBA87 \uAC00\uC9C0 \uAD6C\uC870\uC801 \uCC28\uC774\uC810\uC774 \uC788\uC2B5\uB2C8\uB2E4:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["SvelteKit\uC740 routing \uD30C\uC77C\uC744 ",(0,i.jsx)(n.code,{children:"src/routes"}),"\uC5D0 \uBC30\uCE58\uD558\uC9C0\uB9CC, FSD\uC5D0\uC11C\uB294 app Layer\uC5D0 \uD3EC\uD568\uB429\uB2C8\uB2E4"]}),"\n",(0,i.jsx)(n.li,{children:"SvelteKit\uC740 routing \uC678 \uD30C\uC77C\uC744 src/lib\uC5D0 \uBC30\uCE58\uD558\uB3C4\uB85D \uAD8C\uC7A5\uD569\uB2C8\uB2E4"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\uAD6C\uC131-\uC124\uC815",children:"\uAD6C\uC131 \uC124\uC815"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",metastring:'title="svelte.config.ts"',children:"import adapter from '@sveltejs/adapter-auto';\nimport { vitePreprocess } from '@sveltejs/vite-plugin-svelte';\n\n/** @type {import('@sveltejs/kit').Config}*/ \nconst config = {\n   preprocess: [vitePreprocess()],\n   kit: {\n     adapter: adapter(),\n     files: {\n       routes: 'src/app/routes',             // routing\uC744 app Layer\uB85C \uC774\uB3D9\n       lib: 'src',\n       appTemplate: 'src/app/index.html',    // application entry point\uB97C app Layer\uB85C \uC774\uB3D9\n       assets: 'public'\n     },\n     alias: {\n       '@/*': 'src/*'                        // src directory alias \uC124\uC815\n     }\n   }\n};\n\nexport default config;\n"})}),"\n",(0,i.jsxs)(n.h2,{id:"file-routing\uC744-srcapp\uC73C\uB85C-\uC774\uB3D9",children:["File Routing\uC744 ",(0,i.jsx)(n.code,{children:"src/app"}),"\uC73C\uB85C \uC774\uB3D9"]}),"\n",(0,i.jsx)(n.p,{children:"Configuration \uBCC0\uACBD \uD6C4 \uAD6C\uC870:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"\u251C\u2500\u2500 src\n\u2502   \u251C\u2500\u2500 app\n\u2502   \u2502   \u251C\u2500\u2500 index.html\n\u2502   \u2502   \u251C\u2500\u2500 routes\n\u2502   \u251C\u2500\u2500 pages                               # FSD pages Layer\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\uC774\uC81C route \uD30C\uC77C\uC744 ",(0,i.jsx)(n.code,{children:"app"})," Layer\uC758 routes \uD3F4\uB354\uC5D0 \uBC30\uCE58\uD558\uACE0, ",(0,i.jsx)(n.code,{children:"pages"})," Layer\uC640 \uC5F0\uACB0\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."]}),"\n",(0,i.jsx)(n.p,{children:"\uC608\uC2DC) Home Page \uCD94\uAC00 \uACFC\uC815:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"pages"})," Layer\uC5D0 \uC0C8 Page Slice \uCD94\uAC00"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"app"})," Layer\uC758 ",(0,i.jsx)(n.code,{children:"routes"}),"\uC5D0 route \uC0DD\uC131"]}),"\n",(0,i.jsx)(n.li,{children:"Slice\uC758 Page\uB97C route\uC640 \uC5F0\uACB0"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://github.com/feature-sliced/cli",children:"CLI tool"}),"\uC744 \uC0AC\uC6A9\uD55C Page Slice \uC0DD\uC131:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"fsd pages home\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"home-page.vue"})," \uD30C\uC77C\uC744 UI Segment\uC5D0 \uC0DD\uC131\uD558\uACE0 public API\uB85C \uB178\uCD9C:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",metastring:'title="src/pages/home/index.ts"',children:"export { default as HomePage } from './ui/home-page';\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"app"})," Layer\uC758 routes\uC5D0 route \uCD94\uAC00:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"\u251C\u2500\u2500 src\n\u2502   \u251C\u2500\u2500 app\n\u2502   \u2502   \u251C\u2500\u2500 routes\n\u2502   \u2502   \u2502   \u251C\u2500\u2500 +page.svelte\n\u2502   \u2502   \u251C\u2500\u2500 index.html\n\u2502   \u251C\u2500\u2500 pages\n\u2502   \u2502   \u251C\u2500\u2500 home\n\u2502   \u2502   \u2502   \u251C\u2500\u2500 ui\n\u2502   \u2502   \u2502   \u2502   \u251C\u2500\u2500 home-page.svelte\n\u2502   \u2502   \u2502   \u251C\u2500\u2500 index.ts\n"})}),"\n",(0,i.jsx)(n.p,{children:"Page Component \uC5F0\uACB0:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",metastring:'title="src/app/routes/+page.svelte"',children:"<script>\n  import { HomePage } from '@/pages/home';\n<\/script>\n\n<HomePage/>\n"})}),"\n",(0,i.jsx)(n.h2,{id:"\uCC38\uACE0-\uC790\uB8CC",children:"\uCC38\uACE0 \uC790\uB8CC"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://kit.svelte.dev/docs/configuration#files",children:"SvelteKit Directory Structure \uBB38\uC11C"})}),"\n"]})]})}function u(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},3663:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return c}});var s=t(5271);let i={},r=s.createContext(i);function c(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);
"use strict";(self.webpackChunk_feature_sliced_documentation=self.webpackChunk_feature_sliced_documentation||[]).push([["1816"],{5035:function(e,i,n){n.r(i),n.d(i,{default:()=>u,frontMatter:()=>c,metadata:()=>t,assets:()=>o,toc:()=>a,contentTitle:()=>d});var t=JSON.parse('{"id":"guides/migration/from-v2-0","title":"v2.0\u304B\u3089v2.1\u3078\u306E\u79FB\u884C","description":"v2.1\u306E\u4E3B\u306A\u5909\u66F4\u70B9\u306F\u3001\u30A4\u30F3\u30BF\u30FC\u30D5\u30A7\u30FC\u30B9\u3092\u5206\u89E3\u3059\u308B\u305F\u3081\u306E\u300C\u30DA\u30FC\u30B8\u30D5\u30A1\u30FC\u30B9\u30C8\u300D\u3068\u3044\u3046\u65B0\u3057\u3044\u30E1\u30F3\u30BF\u30EB\u30E2\u30C7\u30EB\u3067\u3059\u3002","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/guides/migration/from-v2-0.md","sourceDirName":"guides/migration","slug":"/guides/migration/from-v2-0","permalink":"/documentation/ja/docs/guides/migration/from-v2-0","draft":false,"unlisted":false,"editUrl":"https://github.com/feature-sliced/documentation/edit/master/i18n/ja/docusaurus-plugin-content-docs/current/guides/migration/from-v2-0.md","tags":[],"version":"current","lastUpdatedAt":1742062811000,"sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"guidesSidebar","previous":{"title":"v1\u304B\u3089v2\u3078\u306E\u79FB\u884C","permalink":"/documentation/ja/docs/guides/migration/from-v1"},"next":{"title":"NextJS\u3068\u306E\u4F75\u7528","permalink":"/documentation/ja/docs/guides/tech/with-nextjs"}}'),s=n("2676"),r=n("3663");let c={sidebar_position:3},d="v2.0\u304B\u3089v2.1\u3078\u306E\u79FB\u884C",o={},a=[{value:"\u79FB\u884C\u65B9\u6CD5",id:"how-to-migrate",level:2},{value:"\u30B9\u30E9\u30A4\u30B9\u306E\u30DE\u30FC\u30B8",id:"\u30B9\u30E9\u30A4\u30B9\u306E\u30DE\u30FC\u30B8",level:3},{value:"\u30AF\u30ED\u30B9\u30A4\u30F3\u30DD\u30FC\u30C8\u306E\u6A19\u6E96\u5316",id:"\u30AF\u30ED\u30B9\u30A4\u30F3\u30DD\u30FC\u30C8\u306E\u6A19\u6E96\u5316",level:3}];function l(e){let i={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.header,{children:(0,s.jsx)(i.h1,{id:"v20\u304B\u3089v21\u3078\u306E\u79FB\u884C",children:"v2.0\u304B\u3089v2.1\u3078\u306E\u79FB\u884C"})}),"\n",(0,s.jsx)(i.p,{children:"v2.1\u306E\u4E3B\u306A\u5909\u66F4\u70B9\u306F\u3001\u30A4\u30F3\u30BF\u30FC\u30D5\u30A7\u30FC\u30B9\u3092\u5206\u89E3\u3059\u308B\u305F\u3081\u306E\u300C\u30DA\u30FC\u30B8\u30D5\u30A1\u30FC\u30B9\u30C8\u300D\u3068\u3044\u3046\u65B0\u3057\u3044\u30E1\u30F3\u30BF\u30EB\u30E2\u30C7\u30EB\u3067\u3059\u3002"}),"\n",(0,s.jsx)(i.p,{children:"v2.0\u3067\u306F\u3001FSD\u306F\u5206\u89E3\u306E\u305F\u3081\u306B\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u8868\u73FE\u3084\u30A4\u30F3\u30BF\u30E9\u30AF\u30C6\u30A3\u30D3\u30C6\u30A3\u306E\u6700\u5C0F\u90E8\u5206\u307E\u3067\u8003\u616E\u3057\u3001\u30A4\u30F3\u30BF\u30FC\u30D5\u30A7\u30FC\u30B9\u5185\u306E\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u3068\u30D5\u30A3\u30FC\u30C1\u30E3\u30FC\u3092\u7279\u5B9A\u3059\u308B\u3053\u3068\u3092\u63A8\u5968\u3057\u3066\u3044\u307E\u3057\u305F\u3002\u305D\u3046\u3057\u3066\u304B\u3089\u3001\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u3068\u30D5\u30A3\u30FC\u30C1\u30E3\u30FC\u304B\u3089\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u3084\u30DA\u30FC\u30B8\u304C\u69CB\u7BC9\u3055\u308C\u3066\u3044\u304D\u307E\u3057\u305F\u3002\u3053\u306E\u5206\u89E3\u30E2\u30C7\u30EB\u3067\u306F\u3001\u307B\u3068\u3093\u3069\u306E\u30ED\u30B8\u30C3\u30AF\u306F\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u3068\u30D5\u30A3\u30FC\u30C1\u30E3\u30FC\u306B\u3042\u308A\u3001\u30DA\u30FC\u30B8\u306F\u305D\u308C\u81EA\u4F53\u306B\u306F\u3042\u307E\u308A\u91CD\u8981\u6027\u306E\u306A\u3044\u69CB\u6210\u5C64\u306B\u904E\u304E\u307E\u305B\u3093\u3067\u3057\u305F\u3002"}),"\n",(0,s.jsx)(i.p,{children:"v2.1\u3067\u306F\u3001\u5206\u89E3\u3092\u30DA\u30FC\u30B8\u304B\u3089\u59CB\u3081\u308B\u3053\u3068\u3001\u307E\u305F\u306F\u5834\u5408\u306B\u3088\u3063\u3066\u306F\u30DA\u30FC\u30B8\u3067\u6B62\u3081\u308B\u3053\u3068\u3092\u63A8\u5968\u3057\u307E\u3059\u3002\u307B\u3068\u3093\u3069\u306E\u4EBA\u306F\u3059\u3067\u306B\u30A2\u30D7\u30EA\u3092\u500B\u3005\u306E\u30DA\u30FC\u30B8\u306B\u5206\u3051\u308B\u65B9\u6CD5\u3092\u77E5\u3063\u3066\u304A\u308A\u3001\u30DA\u30FC\u30B8\u306F\u30B3\u30FC\u30C9\u30D9\u30FC\u30B9\u5185\u306E\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u3092\u898B\u3064\u3051\u308B\u969B\u306E\u4E00\u822C\u7684\u306A\u51FA\u767A\u70B9\u3067\u3082\u3042\u308A\u307E\u3059\u3002\u3053\u306E\u65B0\u3057\u3044\u5206\u89E3\u30E2\u30C7\u30EB\u3067\u306F\u3001\u5404\u500B\u5225\u306E\u30DA\u30FC\u30B8\u306B\u307B\u3068\u3093\u3069\u306EUI\u3068\u30ED\u30B8\u30C3\u30AF\u3092\u4FDD\u6301\u3057\u3001Shared\u306B\u518D\u5229\u7528\u53EF\u80FD\u306A\u57FA\u76E4\u3092\u7DAD\u6301\u3057\u307E\u3059\u3002\u8907\u6570\u306E\u30DA\u30FC\u30B8\u3067\u30D3\u30B8\u30CD\u30B9\u30ED\u30B8\u30C3\u30AF\u3092\u518D\u5229\u7528\u3059\u308B\u5FC5\u8981\u304C\u751F\u3058\u305F\u5834\u5408\u306F\u3001\u305D\u308C\u3092\u4E0B\u5C64\u306E\u30EC\u30A4\u30E4\u30FC\u306B\u79FB\u52D5\u3067\u304D\u307E\u3059\u3002"}),"\n",(0,s.jsxs)(i.p,{children:["Feature-Sliced Design\u3078\u306E\u3082\u3046\u4E00\u3064\u306E\u8FFD\u52A0\u306F\u3001",(0,s.jsx)(i.code,{children:"@x"}),"\u8868\u8A18\u3092\u4F7F\u7528\u3057\u305F\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u9593\u306E\u30AF\u30ED\u30B9\u30A4\u30F3\u30DD\u30FC\u30C8\u306E\u6A19\u6E96\u5316\u3067\u3059\u3002"]}),"\n",(0,s.jsx)(i.h2,{id:"how-to-migrate",children:"\u79FB\u884C\u65B9\u6CD5"}),"\n",(0,s.jsx)(i.p,{children:"v2.1\u306B\u306F\u7834\u58CA\u7684\u306A\u5909\u66F4\u306F\u306A\u304F\u3001FSD v2.0\u3067\u66F8\u304B\u308C\u305F\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3082FSD v2.1\u306E\u6709\u52B9\u306A\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3067\u3059\u3002\u3057\u304B\u3057\u3001\u65B0\u3057\u3044\u30E1\u30F3\u30BF\u30EB\u30E2\u30C7\u30EB\u304C\u30C1\u30FC\u30E0\u3084\u7279\u306B\u65B0\u3057\u3044\u958B\u767A\u8005\u306E\u30AA\u30F3\u30DC\u30FC\u30C7\u30A3\u30F3\u30B0\u306B\u3068\u3063\u3066\u3088\u308A\u6709\u76CA\u3067\u3042\u308B\u3068\u8003\u3048\u3066\u3044\u308B\u305F\u3081\u3001\u5206\u89E3\u306B\u5BFE\u3057\u3066\u5C0F\u3055\u306A\u8ABF\u6574\u3092\u884C\u3046\u3053\u3068\u3092\u63A8\u5968\u3057\u307E\u3059\u3002"}),"\n",(0,s.jsx)(i.h3,{id:"\u30B9\u30E9\u30A4\u30B9\u306E\u30DE\u30FC\u30B8",children:"\u30B9\u30E9\u30A4\u30B9\u306E\u30DE\u30FC\u30B8"}),"\n",(0,s.jsxs)(i.p,{children:["\u79FB\u884C\u3092\u59CB\u3081\u308B\u305F\u3081\u306E\u7C21\u5358\u306A\u65B9\u6CD5\u306F\u3001\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3067FSD\u306E\u30EA\u30F3\u30BF\u30FC\u3067\u3042\u308B",(0,s.jsx)(i.a,{href:"https://github.com/feature-sliced/steiger",children:"Steiger"}),"\u3092\u5B9F\u884C\u3059\u308B\u3053\u3068\u3067\u3059\u3002Steiger\u306F\u65B0\u3057\u3044\u30E1\u30F3\u30BF\u30EB\u30E2\u30C7\u30EB\u3067\u69CB\u7BC9\u3055\u308C\u3066\u304A\u308A\u3001\u6700\u3082\u5F79\u7ACB\u3064\u30EB\u30FC\u30EB\u306F\u6B21\u306E\u3068\u304A\u308A\u3067\u3059\u3002"]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"https://github.com/feature-sliced/steiger/tree/master/packages/steiger-plugin-fsd/src/insignificant-slice",children:(0,s.jsx)(i.code,{children:"insignificant-slice"})})," \u2014 \u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u3001\u307E\u305F\u306F\u30D5\u30A3\u30FC\u30C1\u30E3\u30FC\u304C1\u30DA\u30FC\u30B8\u3067\u306E\u307F\u4F7F\u7528\u3055\u308C\u3066\u3044\u308B\u5834\u5408\u3001\u3053\u306E\u30EB\u30FC\u30EB\u306F\u305D\u306E\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u3001\u307E\u305F\u306F\u30D5\u30A3\u30FC\u30C1\u30E3\u30FC\u3092\u30DA\u30FC\u30B8\u306B\u5B8C\u5168\u306B\u30DE\u30FC\u30B8\u3059\u308B\u3053\u3068\u3092\u63D0\u6848\u3057\u307E\u3059\u3002"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"https://github.com/feature-sliced/steiger/tree/master/packages/steiger-plugin-fsd/src/excessive-slicing",children:(0,s.jsx)(i.code,{children:"excessive-slicing"})})," \u2014 \u30EC\u30A4\u30E4\u30FC\u306B\u30B9\u30E9\u30A4\u30B9\u304C\u591A\u3059\u304E\u308B\u5834\u5408\u3001\u901A\u5E38\u306F\u5206\u89E3\u304C\u7D30\u304B\u3059\u304E\u308B\u30B5\u30A4\u30F3\u3067\u3059\u3002\u3053\u306E\u30EB\u30FC\u30EB\u306F\u3001\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306E\u30CA\u30D3\u30B2\u30FC\u30B7\u30E7\u30F3\u3092\u52A9\u3051\u308B\u305F\u3081\u306B\u3044\u304F\u3064\u304B\u306E\u30B9\u30E9\u30A4\u30B9\u3092\u30DE\u30FC\u30B8\u3001\u307E\u305F\u306F\u30B0\u30EB\u30FC\u30D7\u5316\u3059\u308B\u3053\u3068\u3092\u63D0\u6848\u3057\u307E\u3059\u3002"]}),"\n"]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-bash",children:"npx steiger src\n"})}),"\n",(0,s.jsx)(i.p,{children:"\u3053\u308C\u306B\u3088\u308A\u30011\u56DE\u3060\u3051\u4F7F\u7528\u3055\u308C\u308B\u30B9\u30E9\u30A4\u30B9\u3092\u7279\u5B9A\u3067\u304D\u308B\u305F\u3081\u3001\u305D\u308C\u3089\u304C\u672C\u5F53\u306B\u5FC5\u8981\u304B\u518D\u8003\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002\u305D\u306E\u3088\u3046\u306A\u8003\u616E\u306B\u304A\u3044\u3066\u3001\u30EC\u30A4\u30E4\u30FC\u306F\u305D\u306E\u5185\u90E8\u306E\u3059\u3079\u3066\u306E\u30B9\u30E9\u30A4\u30B9\u306E\u305F\u3081\u306E\u4F55\u3089\u304B\u306E\u30B0\u30ED\u30FC\u30D0\u30EB\u540D\u524D\u7A7A\u9593\u3092\u5F62\u6210\u3059\u308B\u3053\u3068\u3092\u5FF5\u982D\u306B\u7F6E\u3044\u3066\u304F\u3060\u3055\u3044\u30021\u56DE\u3060\u3051\u4F7F\u7528\u3055\u308C\u308B\u5909\u6570\u3067\u30B0\u30ED\u30FC\u30D0\u30EB\u540D\u524D\u7A7A\u9593\u3092\u6C5A\u67D3\u3057\u306A\u3044\u3088\u3046\u306B\u3059\u308B\u306E\u3068\u540C\u69D8\u306B\u3001\u30EC\u30A4\u30E4\u30FC\u306E\u540D\u524D\u7A7A\u9593\u5185\u306E\u5834\u6240\u3092\u8CB4\u91CD\u306A\u3082\u306E\u3068\u3057\u3066\u6271\u3044\u3001\u614E\u91CD\u306B\u4F7F\u7528\u3059\u308B\u3079\u304D\u3067\u3059\u3002"}),"\n",(0,s.jsx)(i.h3,{id:"\u30AF\u30ED\u30B9\u30A4\u30F3\u30DD\u30FC\u30C8\u306E\u6A19\u6E96\u5316",children:"\u30AF\u30ED\u30B9\u30A4\u30F3\u30DD\u30FC\u30C8\u306E\u6A19\u6E96\u5316"}),"\n",(0,s.jsxs)(i.p,{children:["\u4EE5\u524D\u306B\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u5185\u3067\u30AF\u30ED\u30B9\u30A4\u30F3\u30DD\u30FC\u30C8\u304C\u3042\u3063\u305F\u5834\u5408\u3001Feature-Sliced Design\u3067\u306E\u30AF\u30ED\u30B9\u30A4\u30F3\u30DD\u30FC\u30C8\u306E\u305F\u3081\u306E\u65B0\u3057\u3044\u8868\u8A18\u6CD5",(0,s.jsx)(i.code,{children:"@x"}),"\u3092\u6D3B\u7528\u3067\u304D\u307E\u3059\u3002\u3053\u308C\u306F\u6B21\u306E\u3088\u3046\u306B\u306A\u308A\u307E\u3059\u3002"]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-ts",metastring:'title="entities/B/some/file.ts"',children:'import type { EntityA } from "entities/A/@x/B";\n'})}),"\n",(0,s.jsxs)(i.p,{children:["\u8A73\u7D30\u306B\u3064\u3044\u3066\u306F\u3001\u30EA\u30D5\u30A1\u30EC\u30F3\u30B9\u306E",(0,s.jsx)(i.a,{href:"/docs/reference/public-api#public-api-for-cross-imports",children:"\u30AF\u30ED\u30B9\u30A4\u30F3\u30DD\u30FC\u30C8\u306E\u516C\u958BAPI"}),"\u30BB\u30AF\u30B7\u30E7\u30F3\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002"]})]})}function u(e={}){let{wrapper:i}={...(0,r.a)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},3663:function(e,i,n){n.d(i,{Z:function(){return d},a:function(){return c}});var t=n(5271);let s={},r=t.createContext(s);function c(e){let i=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(i):{...i,...e}},[i,e])}function d(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),t.createElement(r.Provider,{value:i},e.children)}}}]);
"use strict";(self.webpackChunk_feature_sliced_documentation=self.webpackChunk_feature_sliced_documentation||[]).push([["9445"],{7486:function(e,i,n){n.r(i),n.d(i,{default:()=>u,frontMatter:()=>l,metadata:()=>s,assets:()=>d,toc:()=>o,contentTitle:()=>c});var s=JSON.parse('{"id":"guides/migration/from-v2-0","title":"v2.0\uC5D0\uC11C v2.1\uB85C\uC758 \uB9C8\uC774\uADF8\uB808\uC774\uC158","description":"v2.1\uC758 \uD575\uC2EC \uBCC0\uD654\uB294 \uD398\uC774\uC9C0 \uC911\uC2EC(Page-First) \uC811\uADFC \uBC29\uC2DD\uC744 \uD1B5\uD55C \uC778\uD130\uD398\uC774\uC2A4 \uAD6C\uC870\uD654\uC785\uB2C8\uB2E4.","source":"@site/i18n/kr/docusaurus-plugin-content-docs/current/guides/migration/from-v2-0.md","sourceDirName":"guides/migration","slug":"/guides/migration/from-v2-0","permalink":"/documentation/kr/docs/guides/migration/from-v2-0","draft":false,"unlisted":false,"editUrl":"https://github.com/feature-sliced/documentation/edit/master/i18n/kr/docusaurus-plugin-content-docs/current/guides/migration/from-v2-0.md","tags":[],"version":"current","lastUpdatedAt":1742062811000,"sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"guidesSidebar","previous":{"title":"\uAE30\uC874 \uC544\uD0A4\uD14D\uCC98\uC5D0\uC11C \uC804\uD658\uD558\uAE30","permalink":"/documentation/kr/docs/guides/migration/from-custom"},"next":{"title":"v1\uC5D0\uC11C v2\uB85C\uC758 \uB9C8\uC774\uADF8\uB808\uC774\uC158","permalink":"/documentation/kr/docs/guides/migration/from-v1"}}'),r=n("2676"),t=n("3663");let l={sidebar_position:3},c="v2.0\uC5D0\uC11C v2.1\uB85C\uC758 \uB9C8\uC774\uADF8\uB808\uC774\uC158",d={},o=[{value:"v2.0 \uBC29\uC2DD",id:"v20-\uBC29\uC2DD",level:3},{value:"v2.1 \uBC29\uC2DD",id:"v21-\uBC29\uC2DD",level:3},{value:"\uB9C8\uC774\uADF8\uB808\uC774\uC158 \uD504\uB85C\uC138\uC2A4",id:"how-to-migrate",level:2},{value:"1. \uC2AC\uB77C\uC774\uC2A4(Slice) \uBCD1\uD569",id:"1-\uC2AC\uB77C\uC774\uC2A4slice-\uBCD1\uD569",level:3},{value:"2. Cross Import \uD45C\uC900\uD654",id:"2-cross-import-\uD45C\uC900\uD654",level:3}];function a(e){let i={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.header,{children:(0,r.jsx)(i.h1,{id:"v20\uC5D0\uC11C-v21\uB85C\uC758-\uB9C8\uC774\uADF8\uB808\uC774\uC158",children:"v2.0\uC5D0\uC11C v2.1\uB85C\uC758 \uB9C8\uC774\uADF8\uB808\uC774\uC158"})}),"\n",(0,r.jsx)(i.p,{children:"v2.1\uC758 \uD575\uC2EC \uBCC0\uD654\uB294 \uD398\uC774\uC9C0 \uC911\uC2EC(Page-First) \uC811\uADFC \uBC29\uC2DD\uC744 \uD1B5\uD55C \uC778\uD130\uD398\uC774\uC2A4 \uAD6C\uC870\uD654\uC785\uB2C8\uB2E4."}),"\n",(0,r.jsx)(i.h3,{id:"v20-\uBC29\uC2DD",children:"v2.0 \uBC29\uC2DD"}),"\n",(0,r.jsx)(i.p,{children:"\uC774\uC804 \uBC84\uC804\uC5D0\uC11C\uB294:"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Entity\uC640 Feature\uC744 \uCD5C\uC18C \uB2E8\uC704\uB85C \uBD84\uD574"}),"\n",(0,r.jsx)(i.li,{children:"\uC774\uB97C \uAE30\uBC18\uC73C\uB85C Widget\uACFC Page\uB97C \uAD6C\uC131"}),"\n",(0,r.jsx)(i.li,{children:"\uB300\uBD80\uBD84\uC758 \uB85C\uC9C1\uC774 Entity\uC640 Feature \uACC4\uCE35\uC5D0 \uC9D1\uC911"}),"\n",(0,r.jsx)(i.li,{children:"Page\uB294 \uB2E8\uC21C \uC870\uD569 \uACC4\uCE35\uC73C\uB85C \uCDE8\uAE09"}),"\n"]}),"\n",(0,r.jsx)(i.h3,{id:"v21-\uBC29\uC2DD",children:"v2.1 \uBC29\uC2DD"}),"\n",(0,r.jsx)(i.p,{children:"\uC0C8\uB85C\uC6B4 \uBC84\uC804\uC5D0\uC11C\uB294:"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Page\uB97C \uC2DC\uC791\uC810\uC73C\uB85C \uC124\uC815"}),"\n",(0,r.jsx)(i.li,{children:"UI\uC640 \uBE44\uC988\uB2C8\uC2A4 \uB85C\uC9C1\uC744 \uC6B0\uC120\uC801\uC73C\uB85C Page \uB0B4\uC5D0 \uAD6C\uD604"}),"\n",(0,r.jsx)(i.li,{children:"Shared \uACC4\uCE35\uC740 \uC21C\uC218\uD558\uAC8C \uC7AC\uC0AC\uC6A9 \uAC00\uB2A5\uD55C \uAE30\uBC18 \uCF54\uB4DC\uB9CC \uAD00\uB9AC"}),"\n",(0,r.jsx)(i.li,{children:"\uC5EC\uB7EC \uD398\uC774\uC9C0\uC5D0\uC11C \uACF5\uD1B5\uC73C\uB85C \uC0AC\uC6A9\uB418\uB294 \uB85C\uC9C1\uB9CC \uD558\uC704 \uACC4\uCE35\uC73C\uB85C \uBD84\uB9AC"}),"\n"]}),"\n",(0,r.jsxs)(i.p,{children:["Feature-Sliced Design(v2.1)\uC5D0\uC11C\uB294 Entity \uAC04 Cross Import\uB97C \uD45C\uC900\uD654\uD558\uAE30 \uC704\uD574 ",(0,r.jsx)(i.code,{children:"@x"})," \uD45C\uAE30\uBC95\uC774 \uB3C4\uC785\uB418\uC5C8\uC2B5\uB2C8\uB2E4."]}),"\n",(0,r.jsx)(i.h2,{id:"how-to-migrate",children:"\uB9C8\uC774\uADF8\uB808\uC774\uC158 \uD504\uB85C\uC138\uC2A4"}),"\n",(0,r.jsx)(i.p,{children:"v2.1\uC740 \uD558\uC704 \uD638\uD658\uC131\uC744 \uBCF4\uC7A5\uD558\uBBC0\uB85C, v2.0 \uD504\uB85C\uC81D\uD2B8\uB294 \uC218\uC815 \uC5C6\uC774\uB3C4 \uC815\uC0C1 \uB3D9\uC791\uD569\uB2C8\uB2E4. \uB2E4\uB9CC, \uC0C8\uB85C\uC6B4 \uC544\uD0A4\uD14D\uCC98 \uBAA8\uB378\uC758 \uC774\uC810\uC744 \uD65C\uC6A9\uD558\uAE30 \uC704\uD574 \uB2E4\uC74C\uACFC \uAC19\uC740 \uB2E8\uACC4\uC801 \uAC1C\uC120\uC744 \uAD8C\uC7A5\uD569\uB2C8\uB2E4."}),"\n",(0,r.jsx)(i.h3,{id:"1-\uC2AC\uB77C\uC774\uC2A4slice-\uBCD1\uD569",children:"1. \uC2AC\uB77C\uC774\uC2A4(Slice) \uBCD1\uD569"}),"\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.a,{href:"https://github.com/feature-sliced/steiger",children:"Steiger"})," \uB9B0\uD130(Linter)\uB97C \uD65C\uC6A9\uD558\uC5EC \uCF54\uB4DC\uBCA0\uC774\uC2A4\uB97C \uBD84\uC11D\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4:"]}),"\n",(0,r.jsx)(i.p,{children:"\uC8FC\uC694 \uB9B0\uD2B8 \uADDC\uCE59:"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"https://github.com/feature-sliced/steiger/tree/master/packages/steiger-plugin-fsd/src/insignificant-slice",children:(0,r.jsx)(i.code,{children:"insignificant-slice"})}),": \uB2E8\uC77C Page\uC5D0\uC11C\uB9CC \uC0AC\uC6A9\uB418\uB294 Slice \uAC10\uC9C0","\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"\uD574\uB2F9 Slice\uC758 \uCF54\uB4DC\uB97C \uAD00\uB828 Page\uB85C \uC774\uB3D9 \uAD8C\uC7A5"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"https://github.com/feature-sliced/steiger/tree/master/packages/steiger-plugin-fsd/src/excessive-slicing",children:(0,r.jsx)(i.code,{children:"excessive-slicing"})}),": \uACFC\uB3C4\uD55C Slices \uBD84\uD560 \uAC10\uC9C0","\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"\uC720\uC9C0\uBCF4\uC218\uC131 \uD5A5\uC0C1\uC744 \uC704\uD55C Slices \uD1B5\uD569 \uB610\uB294 \uADF8\uB8F9\uD654 \uC81C\uC548"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-bash",children:"npx steiger src\n"})}),"\n",(0,r.jsx)(i.p,{children:"Steiger\uB97C \uC0AC\uC6A9\uD558\uBA74 \uD504\uB85C\uC81D\uD2B8\uC5D0\uC11C \uD55C \uBC88\uB9CC \uC0AC\uC6A9\uB418\uB294 Slice\uB4E4\uC744 \uCC3E\uC544\uB0BC \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC774\uB7EC\uD55C Slice\uB4E4\uC774 \uC815\uB9D0 \uB3C5\uB9BD\uC801\uC778 Slice\uB85C \uC874\uC7AC\uD560 \uD544\uC694\uAC00 \uC788\uB294\uC9C0 \uAC80\uD1A0\uD574\uC57C \uD569\uB2C8\uB2E4."}),"\n",(0,r.jsxs)(i.admonition,{title:"Slice \uAD00\uB9AC",type:"tip",children:[(0,r.jsx)(i.p,{children:"\uAC01 \uACC4\uCE35\uC740 \uD574\uB2F9 \uACC4\uCE35\uC5D0 \uC18D\uD55C \uBAA8\uB4E0 Slices\uC758 \uB124\uC784\uC2A4\uD398\uC774\uC2A4\uB97C \uAD00\uB9AC\uD569\uB2C8\uB2E4. \uC774\uB294 \uC804\uC5ED \uBCC0\uC218\uB97C \uAD00\uB9AC\uD558\uB294 \uAC83\uACFC \uBE44\uC2B7\uD55C \uAC1C\uB150\uC785\uB2C8\uB2E4:"}),(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"\uC804\uC5ED \uBCC0\uC218\uB294 \uAF2D \uD544\uC694\uD55C \uACBD\uC6B0\uC5D0\uB9CC \uC0AC\uC6A9\uD558\uB4EF\uC774"}),"\n",(0,r.jsx)(i.li,{children:"Slice\uB3C4 \uC2E4\uC81C\uB85C \uC7AC\uC0AC\uC6A9\uB418\uB294 \uACBD\uC6B0\uC5D0\uB9CC \uB3C5\uB9BD\uC801\uC73C\uB85C \uBD84\uB9AC\uD558\uC138\uC694"}),"\n",(0,r.jsx)(i.li,{children:"\uD55C \uACF3\uC5D0\uC11C\uB9CC \uC0AC\uC6A9\uB418\uB294 \uCF54\uB4DC\uB294 \uD574\uB2F9 Page\uB098 Feature \uB0B4\uBD80\uB85C \uC774\uB3D9\uD558\uB294 \uAC83\uC774 \uC88B\uC2B5\uB2C8\uB2E4"}),"\n"]})]}),"\n",(0,r.jsx)(i.h3,{id:"2-cross-import-\uD45C\uC900\uD654",children:"2. Cross Import \uD45C\uC900\uD654"}),"\n",(0,r.jsxs)(i.p,{children:["\uC0C8\uB85C\uC6B4 ",(0,r.jsx)(i.code,{children:"@x-"})," \uD45C\uAE30\uBC95\uC744 \uC0AC\uC6A9\uD558\uC5EC Entity \uAC04 \uCC38\uC870\uB97C \uD45C\uC900\uD654\uD569\uB2C8\uB2E4:"]}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-ts",metastring:'title="entities/B/some/file.ts"',children:'// \uD45C\uC900\uD654\uB41C Cross Import \uBC29\uC2DD\nimport type { EntityA } from "entities/A/@x/B";\n'})}),"\n",(0,r.jsxs)(i.p,{children:["\uC790\uC138\uD55C \uB0B4\uC6A9\uC740 ",(0,r.jsx)(i.a,{href:"/docs/reference/public-api#public-api-for-cross-imports",children:"Cross Import\uB97C \uC704\uD55C Public API"})," \uBB38\uC11C\uB97C \uCC38\uC870\uD558\uC138\uC694."]})]})}function u(e={}){let{wrapper:i}={...(0,t.a)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},3663:function(e,i,n){n.d(i,{Z:function(){return c},a:function(){return l}});var s=n(5271);let r={},t=s.createContext(r);function l(e){let i=s.useContext(t);return s.useMemo(function(){return"function"==typeof e?e(i):{...i,...e}},[i,e])}function c(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(t.Provider,{value:i},e.children)}}}]);
"use strict";(self.webpackChunk_feature_sliced_documentation=self.webpackChunk_feature_sliced_documentation||[]).push([[9706],{4794:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>o,toc:()=>a});var n=s(6070),i=s(5710);const l={title:"Slices and segments",sidebar_position:2,pagination_next:"reference/public-api"},r="Slices and segments",o={id:"reference/slices-segments",title:"Slices and segments",description:"Slices",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/reference/slices-segments.mdx",sourceDirName:"reference",slug:"/reference/slices-segments",permalink:"/docs/reference/slices-segments",draft:!1,unlisted:!1,editUrl:"https://github.com/feature-sliced/documentation/edit/master/i18n/en/docusaurus-plugin-content-docs/current/reference/slices-segments.mdx",tags:[],version:"current",lastUpdatedAt:1722708654e3,sidebarPosition:2,frontMatter:{title:"Slices and segments",sidebar_position:2,pagination_next:"reference/public-api"},sidebar:"referenceSidebar",previous:{title:"Layers",permalink:"/docs/reference/layers"},next:{title:"Public API",permalink:"/docs/reference/public-api"}},c={},a=[{value:"Slices",id:"slices",level:2},{value:"Public API rule on slices",id:"public-api-rule-on-slices",level:3},{value:"Segments",id:"segments",level:2},{value:"Examples",id:"examples",level:3}];function d(e){const t={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"slices-and-segments",children:"Slices and segments"}),"\n",(0,n.jsx)(t.h2,{id:"slices",children:"Slices"}),"\n",(0,n.jsx)(t.p,{children:"Slices are the second level in the organizational hierarchy of Feature-Sliced Design. Their main purpose is to group code by its meaning for the product, business or just the application."}),"\n",(0,n.jsxs)(t.p,{children:["The names of slices are not standardized because they are directly determined by the business domain of your application. For example, a photo gallery might have slices ",(0,n.jsx)(t.code,{children:"photo"}),", ",(0,n.jsx)(t.code,{children:"create-album"}),", ",(0,n.jsx)(t.code,{children:"gallery-page"}),". A social network would require different slices, for example, ",(0,n.jsx)(t.code,{children:"post"}),", ",(0,n.jsx)(t.code,{children:"add-user-to-friends"}),", ",(0,n.jsx)(t.code,{children:"news-feed"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["Closely related slices can be structurally grouped in a directory, but they should exercise the same isolation rules as other slices \u2014 there should be ",(0,n.jsx)(t.strong,{children:"no code sharing"})," in that directory."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Features &quot;compose&quot;, &quot;like&quot; and &quot;delete&quot; grouped in a directory &quot;post&quot;. In that directory there is also a file &quot;some-shared-code.ts&quot; that is crossed out to imply that it&#39;s not allowed.",src:s(7520).A+"",width:"365",height:"236"})}),"\n",(0,n.jsx)(t.p,{children:"The layers Shared and App don't contain slices. That is because Shared should contain no business logic at all, hence has no meaning for the product, and App should contain only code that concerns the entire application, so no splitting is necessary."}),"\n",(0,n.jsx)(t.h3,{id:"public-api-rule-on-slices",children:"Public API rule on slices"}),"\n",(0,n.jsxs)(t.p,{children:["Inside a slice, the code could be organized very liberally, and that doesn't pose any issues as long as the slice provides a good public API. This is enforced with the ",(0,n.jsx)(t.strong,{children:"public API rule on slices"}),":"]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.em,{children:"Every slice (and segment on layers that don't have slices) must contain a public API definition."})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.em,{children:"Modules outside of this slice/segment can only reference the public API, not the internal file structure of the slice/segment."})}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["Read more about the rationale of public APIs and the best practices on creating one in the ",(0,n.jsx)(t.a,{href:"/docs/reference/public-api",children:"Public API reference"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"segments",children:"Segments"}),"\n",(0,n.jsx)(t.p,{children:"Segments are the third and final level in the organizational hierarchy, and their purpose is to group code by its technical nature."}),"\n",(0,n.jsx)(t.p,{children:"There a few standardized segment names:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"ui"})," \u2014 UI components, data formatting functions"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"model"})," \u2014 business logic and data storage, as well as functions to manipulate this data"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"lib"})," \u2014 auxiliary and infrastructural code"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"api"})," \u2014 communication with external APIs, backend API methods"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Custom segments are permitted, but should be created sparingly. The most common places for custom segments are the App layer and the Shared layer, where slices don't make sense."}),"\n",(0,n.jsx)(t.h3,{id:"examples",children:"Examples"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Layer"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"ui"})}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"model"})}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"lib"})}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"api"})})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Shared"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"UI kit"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Usually not used"}),(0,n.jsxs)(t.td,{style:{textAlign:"left"},children:["Utility modules of several related files. ",(0,n.jsx)("br",{}),"If you need to use individual helpers, consider using utility libraries such as ",(0,n.jsx)(t.a,{href:"https://www.npmjs.com/package/lodash-es",children:(0,n.jsx)(t.code,{children:"lodash-es"})}),"."]}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Rudimentary API client with additional features like authentication or caching."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Entities"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Skeleton of a business entity with slots for interactive elements"}),(0,n.jsxs)(t.td,{style:{textAlign:"left"},children:["Data storage of instances of this entity as well as functions for manipulating that data. ",(0,n.jsx)("br",{})," This segment is most fit for storing server-side data. If you use ",(0,n.jsx)(t.a,{href:"https://tanstack.com/query/latest",children:"TanStack Query"})," or other methods of implicit storage, you may choose to omit this segment."]}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Functions for manipulating instances of this entity that aren't related to storage"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"API methods using the API client from Shared for easy communication with the backend"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Features"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Interactive elements that enable users to use this feature"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Business logic and infrastructure data storage, if needed (e.g., current app theme). This is the code that actually produces value for the user."}),(0,n.jsxs)(t.td,{style:{textAlign:"left"},children:["Infrastructural code that helps to concisely describe the business logic in the ",(0,n.jsx)(t.code,{children:"model"})," segment"]}),(0,n.jsxs)(t.td,{style:{textAlign:"left"},children:["API methods that represent this feature on the backend. ",(0,n.jsx)("br",{})," May compose API methods from Entities."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Widgets"}),(0,n.jsxs)(t.td,{style:{textAlign:"left"},children:["Composition of Entities and Features into self-contained UI blocks. ",(0,n.jsx)("br",{})," Can also contain error boundaries and loading states."]}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Infrastructure data storage, if needed"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Non-business interactions (e.g., gestures) and other necessary code for the block to function on a page"}),(0,n.jsxs)(t.td,{style:{textAlign:"left"},children:["Usually not used, but can contain data loaders in nested routing contexts (e.g., ",(0,n.jsx)(t.a,{href:"https://remix.run",children:"Remix"}),")"]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Pages"}),(0,n.jsxs)(t.td,{style:{textAlign:"left"},children:["Composition of Entities, Features and Widgets into complete pages. ",(0,n.jsx)("br",{})," Can also contain error boundaries and loading states."]}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Usually not used"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Non-business interactions (e.g., gestures) and other necessary code for the page to deliver a complete user experience"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Data loaders for SSR-oriented frameworks"})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},7520:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/graphic-nested-slices-b9c44e6cc55ecdbf3e50bf40a61e5a27.svg"},5710:(e,t,s)=>{s.d(t,{R:()=>r,x:()=>o});var n=s(758);const i={},l=n.createContext(i);function r(e){const t=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(l.Provider,{value:t},e.children)}}}]);
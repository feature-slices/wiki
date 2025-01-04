"use strict";(self.webpackChunk_feature_sliced_documentation=self.webpackChunk_feature_sliced_documentation||[]).push([["7921"],{823:function(e,s,n){n.r(s),n.d(s,{default:()=>h,frontMatter:()=>r,metadata:()=>i,assets:()=>l,toc:()=>a,contentTitle:()=>c});var i=JSON.parse('{"id":"reference/slices-segments","title":"Slices and segments","description":"Slices","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/reference/slices-segments.mdx","sourceDirName":"reference","slug":"/reference/slices-segments","permalink":"/kr/docs/reference/slices-segments","draft":false,"unlisted":false,"editUrl":"https://github.com/feature-sliced/documentation/edit/master/i18n/en/docusaurus-plugin-content-docs/current/reference/slices-segments.mdx","tags":[],"version":"current","lastUpdatedAt":1736005496000,"sidebarPosition":2,"frontMatter":{"title":"Slices and segments","sidebar_position":2,"pagination_next":"reference/public-api"},"sidebar":"referenceSidebar","previous":{"title":"Layers","permalink":"/kr/docs/reference/layers"},"next":{"title":"Public API","permalink":"/kr/docs/reference/public-api"}}'),t=n("2676"),o=n("9938");let r={title:"Slices and segments",sidebar_position:2,pagination_next:"reference/public-api"},c="Slices and segments",l={},a=[{value:"Slices",id:"slices",level:2},{value:"Zero coupling and high cohesion",id:"zero-coupling-high-cohesion",level:3},{value:"Public API rule on slices",id:"public-api-rule-on-slices",level:3},{value:"Slice groups",id:"slice-groups",level:3},{value:"Segments",id:"segments",level:2}];function d(e){let s={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.header,{children:(0,t.jsx)(s.h1,{id:"slices-and-segments",children:"Slices and segments"})}),"\n",(0,t.jsx)(s.h2,{id:"slices",children:"Slices"}),"\n",(0,t.jsx)(s.p,{children:"Slices are the second level in the organizational hierarchy of Feature-Sliced Design. Their main purpose is to group code by its meaning for the product, business, or just the application."}),"\n",(0,t.jsxs)(s.p,{children:["The names of slices are not standardized because they are directly determined by the business domain of your application. For example, a photo gallery might have slices ",(0,t.jsx)(s.code,{children:"photo"}),", ",(0,t.jsx)(s.code,{children:"effects"}),", ",(0,t.jsx)(s.code,{children:"gallery-page"}),". A social network would require different slices, for example, ",(0,t.jsx)(s.code,{children:"post"}),", ",(0,t.jsx)(s.code,{children:"comments"}),", ",(0,t.jsx)(s.code,{children:"news-feed"}),"."]}),"\n",(0,t.jsx)(s.p,{children:"The layers Shared and App don't contain slices. That is because Shared should contain no business logic at all, hence has no meaning for the product, and App should contain only code that concerns the entire application, so no splitting is necessary."}),"\n",(0,t.jsx)(s.h3,{id:"zero-coupling-high-cohesion",children:"Zero coupling and high cohesion"}),"\n",(0,t.jsxs)(s.p,{children:["Slices are meant to be independent and highly cohesive groups of code files. The graphic below might help to visualize the tricky concepts of ",(0,t.jsx)(s.em,{children:"cohesion"})," and ",(0,t.jsx)(s.em,{children:"coupling"}),":"]}),"\n",(0,t.jsxs)("figure",{children:[(0,t.jsx)("img",{src:"/img/coupling-cohesion-light.svg#light-mode-only",alt:""}),(0,t.jsx)("img",{src:"/img/coupling-cohesion-dark.svg#dark-mode-only",alt:""}),(0,t.jsx)("figcaption",{children:(0,t.jsxs)(s.p,{children:["Image inspired by ",(0,t.jsx)(s.a,{href:"https://enterprisecraftsmanship.com/posts/cohesion-coupling-difference/",children:"https://enterprisecraftsmanship.com/posts/cohesion-coupling-difference/"})]})})]}),"\n",(0,t.jsx)(s.p,{children:"An ideal slice is independent from other slices on its layer (zero coupling) and contains most of the code related to its primary goal (high cohesion)."}),"\n",(0,t.jsxs)(s.p,{children:["The independence of slices is enforced by the ",(0,t.jsx)(s.a,{href:"/docs/reference/layers#import-rule-on-layers",children:"import rule on layers"}),":"]}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.em,{children:"A module (file) in a slice can only import other slices when they are located on layers strictly below."})}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"public-api-rule-on-slices",children:"Public API rule on slices"}),"\n",(0,t.jsxs)(s.p,{children:["Inside a slice, the code could be organized in any way that you want. That doesn't pose any issues as long as the slice provides a good public API for other slices to use it. This is enforced with the ",(0,t.jsx)(s.strong,{children:"public API rule on slices"}),":"]}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.em,{children:"Every slice (and segment on layers that don't have slices) must contain a public API definition."})}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.em,{children:"Modules outside of this slice/segment can only reference the public API, not the internal file structure of the slice/segment."})}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["Read more about the rationale of public APIs and the best practices on creating one in the ",(0,t.jsx)(s.a,{href:"/docs/reference/public-api",children:"Public API reference"}),"."]}),"\n",(0,t.jsx)(s.h3,{id:"slice-groups",children:"Slice groups"}),"\n",(0,t.jsxs)(s.p,{children:["Closely related slices can be structurally grouped in a folder, but they should exercise the same isolation rules as other slices \u2014 there should be ",(0,t.jsx)(s.strong,{children:"no code sharing"})," in that folder."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"Features &quot;compose&quot;, &quot;like&quot; and &quot;delete&quot; grouped in a folder &quot;post&quot;. In that folder there is also a file &quot;some-shared-code.ts&quot; that is crossed out to imply that it&#39;s not allowed.",src:n(3442).Z+"",width:"365",height:"236"})}),"\n",(0,t.jsx)(s.h2,{id:"segments",children:"Segments"}),"\n",(0,t.jsx)(s.p,{children:"Segments are the third and final level in the organizational hierarchy, and their purpose is to group code by its technical nature."}),"\n",(0,t.jsx)(s.p,{children:"There a few standardized segment names:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"ui"})," \u2014 everything related to UI display: UI components, date formatters, styles, etc."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"api"})," \u2014 backend interactions: request functions, data types, mappers, etc."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"model"})," \u2014 the data model: schemas, interfaces, stores, and business logic."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"lib"})," \u2014 library code that other modules on this slice need."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"config"})," \u2014 configuration files and feature flags."]}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["See the ",(0,t.jsx)(s.a,{href:"/docs/reference/layers#layer-definitions",children:"Layers page"})," for examples of what each of these segments might be used for on different layers."]}),"\n",(0,t.jsx)(s.p,{children:"You can also create custom segments. The most common places for custom segments are the App layer and the Shared layer, where slices don't make sense."}),"\n",(0,t.jsxs)(s.p,{children:["Make sure that the name of these segments describes the purpose of the content, not its essence. For example, ",(0,t.jsx)(s.code,{children:"components"}),", ",(0,t.jsx)(s.code,{children:"hooks"}),", and ",(0,t.jsx)(s.code,{children:"types"})," are bad segment names because they aren't that helpful when you're looking for code."]})]})}function h(e={}){let{wrapper:s}={...(0,o.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},3442:function(e,s,n){n.d(s,{Z:function(){return i}});let i=n.p+"assets/images/graphic-nested-slices-b9c44e6cc55ecdbf3e50bf40a61e5a27.svg"},9938:function(e,s,n){n.d(s,{Z:function(){return c},a:function(){return r}});var i=n(5271);let t={},o=i.createContext(t);function r(e){let s=i.useContext(o);return i.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),i.createElement(o.Provider,{value:s},e.children)}}}]);
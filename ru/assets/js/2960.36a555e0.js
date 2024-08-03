/*! For license information please see 2960.36a555e0.js.LICENSE.txt */
(self.webpackChunk_feature_sliced_documentation=self.webpackChunk_feature_sliced_documentation||[]).push([[2960],{9910:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});n(758);var s=n(9975),o=n(6070);function r(e){let{children:t,fallback:n}=e;return(0,s.A)()?(0,o.jsx)(o.Fragment,{children:t?.()}):n??null}},7368:(e,t,n)=>{"use strict";n.d(t,{A:()=>c});n(758);var s=n(3526),o=n(8042),r=n(8524),a=n(1137),l=n(3449),i=n(6070);function c(){const{metadata:e}=(0,r.u)(),{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:c,tags:d}=e,u=d.length>0,m=!!(t||n||c);return u||m?(0,i.jsxs)("footer",{className:(0,s.A)(o.G.docs.docFooter,"docusaurus-mt-lg"),children:[u&&(0,i.jsx)("div",{className:(0,s.A)("row margin-top--sm",o.G.docs.docFooterTagsRow),children:(0,i.jsx)("div",{className:"col",children:(0,i.jsx)(a.A,{tags:d})})}),m&&(0,i.jsx)(l.A,{className:(0,s.A)("margin-top--sm",o.G.docs.docFooterEditMetaRow),editUrl:t,lastUpdatedAt:n,lastUpdatedBy:c})]}):null}},3383:(e,t,n)=>{"use strict";n.d(t,{A:()=>Q});n(758);var s=n(6405),o=n(8524),r=n(6070);function a(){const{metadata:e,frontMatter:t,assets:n}=(0,o.u)();return(0,r.jsx)(s.be,{title:e.title,description:e.description,keywords:t.keywords,image:n.image??t.image})}var l=n(3526),i=n(6788),c=n(4596),d=n(2633);function u(e){const{previous:t,next:n}=e;return(0,r.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,c.T)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"}),children:[t&&(0,r.jsx)(d.A,{...t,subLabel:(0,r.jsx)(c.A,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc",children:"Previous"})}),n&&(0,r.jsx)(d.A,{...n,subLabel:(0,r.jsx)(c.A,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc",children:"Next"}),isNext:!0})]})}function m(){const{metadata:e}=(0,o.u)();return(0,r.jsx)(u,{previous:e.previous,next:e.next})}var h=n(5602),f=n(4750),$=n(2609),p=n(8042),g=n(7928),b=n(6439);const v={unreleased:function(e){let{siteTitle:t,versionMetadata:n}=e;return(0,r.jsx)(c.A,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:(0,r.jsx)("b",{children:n.label})},children:"This is unreleased documentation for {siteTitle} {versionLabel} version."})},unmaintained:function(e){let{siteTitle:t,versionMetadata:n}=e;return(0,r.jsx)(c.A,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:(0,r.jsx)("b",{children:n.label})},children:"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained."})}};function x(e){const t=v[e.versionMetadata.banner];return(0,r.jsx)(t,{...e})}function y(e){let{versionLabel:t,to:n,onClick:s}=e;return(0,r.jsx)(c.A,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:(0,r.jsx)("b",{children:(0,r.jsx)(f.A,{to:n,onClick:s,children:(0,r.jsx)(c.A,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label",children:"latest version"})})})},children:"For up-to-date documentation, see the {latestVersionLink} ({versionLabel})."})}function j(e){let{className:t,versionMetadata:n}=e;const{siteConfig:{title:s}}=(0,h.A)(),{pluginId:o}=(0,$.vT)({failfast:!0}),{savePreferredVersionName:a}=(0,g.g1)(o),{latestDocSuggestion:i,latestVersionSuggestion:c}=(0,$.HW)(o),d=i??(u=c).docs.find((e=>e.id===u.mainDocId));var u;return(0,r.jsxs)("div",{className:(0,l.A)(t,p.G.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert",children:[(0,r.jsx)("div",{children:(0,r.jsx)(x,{siteTitle:s,versionMetadata:n})}),(0,r.jsx)("div",{className:"margin-top--md",children:(0,r.jsx)(y,{versionLabel:c.label,to:d.path,onClick:()=>a(c.name)})})]})}function C(e){let{className:t}=e;const n=(0,b.r)();return n.banner?(0,r.jsx)(j,{className:t,versionMetadata:n}):null}function N(e){let{className:t}=e;const n=(0,b.r)();return n.badge?(0,r.jsx)("span",{className:(0,l.A)(t,p.G.docs.docVersionBadge,"badge badge--secondary"),children:(0,r.jsx)(c.A,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label},children:"Version: {versionLabel}"})}):null}var w=n(8495),A=n(6729),L=n(8848);const T={tocCollapsibleButton:"tocCollapsibleButton_yCJy",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_R8jb"};function k(e){let{collapsed:t,...n}=e;return(0,r.jsx)("button",{type:"button",...n,className:(0,l.A)("clean-btn",T.tocCollapsibleButton,!t&&T.tocCollapsibleButtonExpanded,n.className),children:(0,r.jsx)(c.A,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component",children:"On this page"})})}const M={tocCollapsible:"tocCollapsible_swZ6",tocCollapsibleContent:"tocCollapsibleContent_NW8n",tocCollapsibleExpanded:"tocCollapsibleExpanded_dDFb"};function S(e){let{toc:t,className:n,minHeadingLevel:s,maxHeadingLevel:o}=e;const{collapsed:a,toggleCollapsed:i}=(0,A.u)({initialState:!0});return(0,r.jsxs)("div",{className:(0,l.A)(M.tocCollapsible,!a&&M.tocCollapsibleExpanded,n),children:[(0,r.jsx)(k,{collapsed:a,onClick:i}),(0,r.jsx)(A.N,{lazy:!0,className:M.tocCollapsibleContent,collapsed:a,children:(0,r.jsx)(L.A,{toc:t,minHeadingLevel:s,maxHeadingLevel:o})})]})}const E={tocMobile:"tocMobile_S4Yo"};function _(){const{toc:e,frontMatter:t}=(0,o.u)();return(0,r.jsx)(S,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,l.A)(p.G.docs.docTocMobile,E.tocMobile)})}var R=n(2793);function H(){const{toc:e,frontMatter:t}=(0,o.u)();return(0,r.jsx)(R.A,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:p.G.docs.docTocDesktop})}var B=n(4089),O=n(4059);function P(e){let{children:t}=e;const n=function(){const{metadata:e,frontMatter:t,contentTitle:n}=(0,o.u)();return t.hide_title||void 0!==n?null:e.title}();return(0,r.jsxs)("div",{className:(0,l.A)(p.G.docs.docMarkdown,"markdown"),children:[n&&(0,r.jsx)("header",{children:(0,r.jsx)(B.A,{as:"h1",children:n})}),(0,r.jsx)(O.A,{children:t})]})}var I=n(2399),U=n(9376),V=n(2753);function z(e){return(0,r.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,r.jsx)("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"})})}const D={breadcrumbHomeIcon:"breadcrumbHomeIcon_eFfD"};function F(){const e=(0,V.Ay)("/");return(0,r.jsx)("li",{className:"breadcrumbs__item",children:(0,r.jsx)(f.A,{"aria-label":(0,c.T)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e,children:(0,r.jsx)(z,{className:D.breadcrumbHomeIcon})})})}const G={breadcrumbsContainer:"breadcrumbsContainer_r57D"};function W(e){let{children:t,href:n,isLast:s}=e;const o="breadcrumbs__link";return s?(0,r.jsx)("span",{className:o,itemProp:"name",children:t}):n?(0,r.jsx)(f.A,{className:o,href:n,itemProp:"item",children:(0,r.jsx)("span",{itemProp:"name",children:t})}):(0,r.jsx)("span",{className:o,children:t})}function q(e){let{children:t,active:n,index:s,addMicrodata:o}=e;return(0,r.jsxs)("li",{...o&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},className:(0,l.A)("breadcrumbs__item",{"breadcrumbs__item--active":n}),children:[t,(0,r.jsx)("meta",{itemProp:"position",content:String(s+1)})]})}function Z(){const e=(0,I.OF)(),t=(0,U.Dt)();return e?(0,r.jsx)("nav",{className:(0,l.A)(p.G.docs.docBreadcrumbs,G.breadcrumbsContainer),"aria-label":(0,c.T)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"}),children:(0,r.jsxs)("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList",children:[t&&(0,r.jsx)(F,{}),e.map(((t,n)=>{const s=n===e.length-1,o="category"===t.type&&t.linkUnlisted?void 0:t.href;return(0,r.jsx)(q,{active:s,index:n,addMicrodata:!!o,children:(0,r.jsx)(W,{href:o,isLast:s,children:t.label})},n)}))]})}):null}var J=n(7410);const Y={docItemContainer:"docItemContainer_wRbd",docItemCol:"docItemCol_cEeb"};function K(e){let{children:t}=e;const n=function(){const{frontMatter:e,toc:t}=(0,o.u)(),n=(0,i.l)(),s=e.hide_table_of_contents,a=!s&&t.length>0;return{hidden:s,mobile:a?(0,r.jsx)(_,{}):void 0,desktop:!a||"desktop"!==n&&"ssr"!==n?void 0:(0,r.jsx)(H,{})}}(),{metadata:{unlisted:s}}=(0,o.u)();return(0,r.jsxs)("div",{className:"row",children:[(0,r.jsxs)("div",{className:(0,l.A)("col",!n.hidden&&Y.docItemCol),children:[s&&(0,r.jsx)(J.A,{}),(0,r.jsx)(C,{}),(0,r.jsxs)("div",{className:Y.docItemContainer,children:[(0,r.jsxs)("article",{children:[(0,r.jsx)(Z,{}),(0,r.jsx)(N,{}),n.mobile,(0,r.jsx)(P,{children:t}),(0,r.jsx)(w.A,{})]}),(0,r.jsx)(m,{})]})]}),n.desktop&&(0,r.jsx)("div",{className:"col col--3",children:n.desktop})]})}function Q(e){const t=`docs-doc-id-${e.content.metadata.id}`,n=e.content;return(0,r.jsx)(o._,{content:e.content,children:(0,r.jsxs)(s.e3,{className:t,children:[(0,r.jsx)(a,{}),(0,r.jsx)(K,{children:(0,r.jsx)(n,{})})]})})}},2793:(e,t,n)=>{"use strict";n.d(t,{A:()=>c});n(758);var s=n(3526),o=n(8848);const r={tableOfContents:"tableOfContents_lx3d",docItemContainer:"docItemContainer_smfM"};var a=n(6070);const l="table-of-contents__link toc-highlight",i="table-of-contents__link--active";function c(e){let{className:t,...n}=e;return(0,a.jsx)("div",{className:(0,s.A)(r.tableOfContents,"thin-scrollbar",t),children:(0,a.jsx)(o.A,{...n,linkClassName:l,linkActiveClassName:i})})}},8848:(e,t,n)=>{"use strict";n.d(t,{A:()=>$});var s=n(758),o=n(5593);function r(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const s=n.slice(2,e.level);e.parentIndex=Math.max(...s),n[e.level]=t}));const s=[];return t.forEach((e=>{const{parentIndex:n,...o}=e;n>=0?t[n].children.push(o):s.push(o)})),s}function a(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:s}=e;return t.flatMap((e=>{const t=a({toc:e.children,minHeadingLevel:n,maxHeadingLevel:s});return function(e){return e.level>=n&&e.level<=s}(e)?[{...e,children:t}]:t}))}function l(e){const t=e.getBoundingClientRect();return t.top===t.bottom?l(e.parentNode):t}function i(e,t){let{anchorTopOffset:n}=t;const s=e.find((e=>l(e).top>=n));if(s){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(l(s))?s:e[e.indexOf(s)-1]??null}return e[e.length-1]??null}function c(){const e=(0,s.useRef)(0),{navbar:{hideOnScroll:t}}=(0,o.p)();return(0,s.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function d(e){const t=(0,s.useRef)(void 0),n=c();(0,s.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:s,linkActiveClassName:o,minHeadingLevel:r,maxHeadingLevel:a}=e;function l(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(s),l=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const s=[];for(let o=t;o<=n;o+=1)s.push(`h${o}.anchor`);return Array.from(document.querySelectorAll(s.join()))}({minHeadingLevel:r,maxHeadingLevel:a}),c=i(l,{anchorTopOffset:n.current}),d=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(o),e.classList.add(o),t.current=e):e.classList.remove(o)}(e,e===d)}))}return document.addEventListener("scroll",l),document.addEventListener("resize",l),l(),()=>{document.removeEventListener("scroll",l),document.removeEventListener("resize",l)}}),[e,n])}var u=n(4750),m=n(6070);function h(e){let{toc:t,className:n,linkClassName:s,isChild:o}=e;return t.length?(0,m.jsx)("ul",{className:o?void 0:n,children:t.map((e=>(0,m.jsxs)("li",{children:[(0,m.jsx)(u.A,{to:`#${e.id}`,className:s??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,m.jsx)(h,{isChild:!0,toc:e.children,className:n,linkClassName:s})]},e.id)))}):null}const f=s.memo(h);function $(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:l="table-of-contents__link",linkActiveClassName:i,minHeadingLevel:c,maxHeadingLevel:u,...h}=e;const $=(0,o.p)(),p=c??$.tableOfContents.minHeadingLevel,g=u??$.tableOfContents.maxHeadingLevel,b=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:o}=e;return(0,s.useMemo)((()=>a({toc:r(t),minHeadingLevel:n,maxHeadingLevel:o})),[t,n,o])}({toc:t,minHeadingLevel:p,maxHeadingLevel:g});return d((0,s.useMemo)((()=>{if(l&&i)return{linkClassName:l,linkActiveClassName:i,minHeadingLevel:p,maxHeadingLevel:g}}),[l,i,p,g])),(0,m.jsx)(f,{toc:b,className:n,linkClassName:l,...h})}},7410:(e,t,n)=>{"use strict";n.d(t,{A:()=>h});n(758);var s=n(3526),o=n(4596),r=n(3924),a=n(6070);function l(){return(0,a.jsx)(o.A,{id:"theme.unlistedContent.title",description:"The unlisted content banner title",children:"Unlisted page"})}function i(){return(0,a.jsx)(o.A,{id:"theme.unlistedContent.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function c(){return(0,a.jsx)(r.A,{children:(0,a.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}var d=n(8042),u=n(8622);function m(e){let{className:t}=e;return(0,a.jsx)(u.A,{type:"caution",title:(0,a.jsx)(l,{}),className:(0,s.A)(t,d.G.common.unlistedBanner),children:(0,a.jsx)(i,{})})}function h(e){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(c,{}),(0,a.jsx)(m,{...e})]})}},8524:(e,t,n)=>{"use strict";n.d(t,{_:()=>l,u:()=>i});var s=n(758),o=n(2259),r=n(6070);const a=s.createContext(null);function l(e){let{children:t,content:n}=e;const o=function(e){return(0,s.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(n);return(0,r.jsx)(a.Provider,{value:o,children:t})}function i(){const e=(0,s.useContext)(a);if(null===e)throw new o.dV("DocProvider");return e}},1539:e=>{var t={utf8:{stringToBytes:function(e){return t.bin.stringToBytes(unescape(encodeURIComponent(e)))},bytesToString:function(e){return decodeURIComponent(escape(t.bin.bytesToString(e)))}},bin:{stringToBytes:function(e){for(var t=[],n=0;n<e.length;n++)t.push(255&e.charCodeAt(n));return t},bytesToString:function(e){for(var t=[],n=0;n<e.length;n++)t.push(String.fromCharCode(e[n]));return t.join("")}}};e.exports=t},7635:e=>{var t,n;t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",n={rotl:function(e,t){return e<<t|e>>>32-t},rotr:function(e,t){return e<<32-t|e>>>t},endian:function(e){if(e.constructor==Number)return 16711935&n.rotl(e,8)|4278255360&n.rotl(e,24);for(var t=0;t<e.length;t++)e[t]=n.endian(e[t]);return e},randomBytes:function(e){for(var t=[];e>0;e--)t.push(Math.floor(256*Math.random()));return t},bytesToWords:function(e){for(var t=[],n=0,s=0;n<e.length;n++,s+=8)t[s>>>5]|=e[n]<<24-s%32;return t},wordsToBytes:function(e){for(var t=[],n=0;n<32*e.length;n+=8)t.push(e[n>>>5]>>>24-n%32&255);return t},bytesToHex:function(e){for(var t=[],n=0;n<e.length;n++)t.push((e[n]>>>4).toString(16)),t.push((15&e[n]).toString(16));return t.join("")},hexToBytes:function(e){for(var t=[],n=0;n<e.length;n+=2)t.push(parseInt(e.substr(n,2),16));return t},bytesToBase64:function(e){for(var n=[],s=0;s<e.length;s+=3)for(var o=e[s]<<16|e[s+1]<<8|e[s+2],r=0;r<4;r++)8*s+6*r<=8*e.length?n.push(t.charAt(o>>>6*(3-r)&63)):n.push("=");return n.join("")},base64ToBytes:function(e){e=e.replace(/[^A-Z0-9+\/]/gi,"");for(var n=[],s=0,o=0;s<e.length;o=++s%4)0!=o&&n.push((t.indexOf(e.charAt(s-1))&Math.pow(2,-2*o+8)-1)<<2*o|t.indexOf(e.charAt(s))>>>6-2*o);return n}},e.exports=n},1105:(e,t,n)=>{"use strict";n.d(t,{O:()=>m});var s=n(758);const o=e=>e.replace(/([A-Z])/g,(e=>`-${e[0].toLowerCase()}`)),r=(e,t,n)=>{const s=t.className||t.class,o=n.className||n.class,r=i(e),a=i(s?s.split(" "):[]),l=i(o?o.split(" "):[]),c=[];return r.forEach((e=>{a.has(e)?(c.push(e),a.delete(e)):l.has(e)||c.push(e)})),a.forEach((e=>c.push(e))),c.join(" ")},a=e=>{if("undefined"==typeof document)return!0;{const t="on"+(e=>"doubleclick"===e?"dblclick":e)(e);let n=t in document;if(!n){const e=document.createElement("div");e.setAttribute(t,"return;"),n="function"==typeof e[t]}return n}},l=(e,t,n)=>{const s=e.__events||(e.__events={}),o=s[t];o&&e.removeEventListener(t,o),e.addEventListener(t,s[t]=function(e){n&&n.call(this,e)})},i=e=>{const t=new Map;return e.forEach((e=>t.set(e,e))),t},c=(...e)=>t=>{e.forEach((e=>{((e,t)=>{"function"==typeof e?e(t):null!=e&&(e.current=t)})(e,t)}))};var d=function(e,t){var n={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(n[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(s=Object.getOwnPropertySymbols(e);o<s.length;o++)t.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(e,s[o])&&(n[s[o]]=e[s[o]])}return n};const u=(e,t,n,i)=>{void 0!==i&&i();const u=e.toLowerCase().split("-").map((e=>e.charAt(0).toUpperCase()+e.slice(1))).join("");const m=class extends s.Component{constructor(e){super(e),this.setComponentElRef=e=>{this.componentEl=e}}componentDidMount(){this.componentDidUpdate(this.props)}componentDidUpdate(e){((e,t,n={})=>{if(e instanceof Element){const s=r(e.classList,t,n);""!==s&&(e.className=s),Object.keys(t).forEach((n=>{if("children"!==n&&"style"!==n&&"ref"!==n&&"class"!==n&&"className"!==n&&"forwardedRef"!==n)if(0===n.indexOf("on")&&n[2]===n[2].toUpperCase()){const s=n.substring(2),o=s[0].toLowerCase()+s.substring(1);a(o)||l(e,o,t[n])}else e[n]=t[n],"string"==typeof t[n]&&e.setAttribute(o(n),t[n])}))}})(this.componentEl,this.props,e)}render(){const t=this.props,{children:r,forwardedRef:l,style:i,className:u,ref:m}=t,h=d(t,["children","forwardedRef","style","className","ref"]);let f=Object.keys(h).reduce(((e,t)=>{const n=h[t];if(0===t.indexOf("on")&&t[2]===t[2].toUpperCase()){const s=t.substring(2).toLowerCase();"undefined"!=typeof document&&a(s)&&(e[t]=n)}else{const s=typeof n;"string"!==s&&"boolean"!==s&&"number"!==s||(e[o(t)]=n)}return e}),{});n&&(f=n(this.props,f));const $=Object.assign(Object.assign({},f),{ref:c(l,this.setComponentElRef),style:i});return(0,s.createElement)(e,$,r)}static get displayName(){return u}};return t&&(m.contextType=t),((e,t)=>{const n=(t,n)=>s.createElement(e,Object.assign({},t,{forwardedRef:n}));return n.displayName=t,s.forwardRef(n)})(m,u)};n(8143);const m=u("feedback-button");u("feedback-modal")},843:(e,t,n)=>{"use strict";n.d(t,{H:()=>m,b:()=>z,g:()=>h,h:()=>d,p:()=>te,r:()=>G});let s,o,r=!1,a=!1;const l={},i=e=>"object"===(e=typeof e)||"function"===e;function c(e){var t,n,s;return null!==(s=null===(n=null===(t=e.head)||void 0===t?void 0:t.querySelector('meta[name="csp-nonce"]'))||void 0===n?void 0:n.getAttribute("content"))&&void 0!==s?s:void 0}const d=(e,t,...n)=>{let s=null,o=null,r=!1,a=!1;const l=[],c=t=>{for(let n=0;n<t.length;n++)s=t[n],Array.isArray(s)?c(s):null!=s&&"boolean"!=typeof s&&((r="function"!=typeof e&&!i(s))&&(s=String(s)),r&&a?l[l.length-1].$text$+=s:l.push(r?u(null,s):s),a=r)};if(c(n),t){t.key&&(o=t.key);{const e=t.className||t.class;e&&(t.class="object"!=typeof e?e:Object.keys(e).filter((t=>e[t])).join(" "))}}const d=u(e,null);return d.$attrs$=t,l.length>0&&(d.$children$=l),d.$key$=o,d},u=(e,t)=>{const n={$flags$:0,$tag$:e,$text$:t,$elm$:null,$children$:null,$attrs$:null,$key$:null};return n},m={},h=e=>F(e).$hostElement$,f=new WeakMap,$=e=>{const t=e.$cmpMeta$,n=e.$hostElement$,s=t.$flags$,o=(t.$tagName$,()=>{}),r=((e,t)=>{var n;let s=p(t);const o=K.get(s);if(e=11===e.nodeType?e:X,o)if("string"==typeof o){e=e.head||e;let t,r=f.get(e);if(r||f.set(e,r=new Set),!r.has(s)){{t=X.createElement("style"),t.innerHTML=o;const s=null!==(n=ee.$nonce$)&&void 0!==n?n:c(X);null!=s&&t.setAttribute("nonce",s),e.insertBefore(t,e.querySelector("link"))}r&&r.add(s)}}else e.adoptedStyleSheets.includes(o)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,o]);return s})(n.shadowRoot?n.shadowRoot:n.getRootNode(),t);10&s&&(n["s-sc"]=r,n.classList.add(r+"-h")),o()},p=(e,t)=>"sc-"+e.$tagName$,g=(e,t,n,s,o,r)=>{if(n!==s){let l=q(e,t),c=t.toLowerCase();if("class"===t){const t=e.classList,o=v(n),r=v(s);t.remove(...o.filter((e=>e&&!r.includes(e)))),t.add(...r.filter((e=>e&&!o.includes(e))))}else if("style"===t){for(const t in n)s&&null!=s[t]||(t.includes("-")?e.style.removeProperty(t):e.style[t]="");for(const t in s)n&&s[t]===n[t]||(t.includes("-")?e.style.setProperty(t,s[t]):e.style[t]=s[t])}else if("key"===t);else if("ref"===t)s&&s(e);else if(l||"o"!==t[0]||"n"!==t[1]){const c=i(s);if((l||c&&null!==s)&&!o)try{if(e.tagName.includes("-"))e[t]=s;else{const o=null==s?"":s;"list"===t?l=!1:null!=n&&e[t]==o||(e[t]=o)}}catch(a){}null==s||!1===s?!1===s&&""!==e.getAttribute(t)||e.removeAttribute(t):(!l||4&r||o)&&!c&&(s=!0===s?"":s,e.setAttribute(t,s))}else t="-"===t[2]?t.slice(3):q(Q,c)?c.slice(2):c[2]+t.slice(3),n&&ee.rel(e,t,n,!1),s&&ee.ael(e,t,s,!1)}},b=/\s/,v=e=>e?e.split(b):[],x=(e,t,n,s)=>{const o=11===t.$elm$.nodeType&&t.$elm$.host?t.$elm$.host:t.$elm$,r=e&&e.$attrs$||l,a=t.$attrs$||l;for(s in r)s in a||g(o,s,r[s],void 0,n,t.$flags$);for(s in a)g(o,s,r[s],a[s],n,t.$flags$)},y=(e,t,n,o)=>{const a=t.$children$[n];let l,i,c=0;if(null!==a.$text$)l=a.$elm$=X.createTextNode(a.$text$);else{if(r||(r="svg"===a.$tag$),l=a.$elm$=X.createElementNS(r?"http://www.w3.org/2000/svg":"http://www.w3.org/1999/xhtml",a.$tag$),r&&"foreignObject"===a.$tag$&&(r=!1),x(null,a,r),null!=s&&l["s-si"]!==s&&l.classList.add(l["s-si"]=s),a.$children$)for(c=0;c<a.$children$.length;++c)i=y(e,a,c),i&&l.appendChild(i);"svg"===a.$tag$?r=!1:"foreignObject"===l.tagName&&(r=!0)}return l},j=(e,t,n,s,r,a)=>{let l,i=e;for(i.shadowRoot&&i.tagName===o&&(i=i.shadowRoot);r<=a;++r)s[r]&&(l=y(null,n,r),l&&(s[r].$elm$=l,i.insertBefore(l,t)))},C=(e,t,n,s,o)=>{for(;t<=n;++t)(s=e[t])&&(o=s.$elm$,A(s),o.remove())},N=(e,t)=>e.$tag$===t.$tag$&&e.$key$===t.$key$,w=(e,t)=>{const n=t.$elm$=e.$elm$,s=e.$children$,o=t.$children$,a=t.$tag$,l=t.$text$;null===l?(r="svg"===a||"foreignObject"!==a&&r,"slot"===a||x(e,t,r),null!==s&&null!==o?((e,t,n,s)=>{let o,r,a=0,l=0,i=0,c=0,d=t.length-1,u=t[0],m=t[d],h=s.length-1,f=s[0],$=s[h];for(;a<=d&&l<=h;)if(null==u)u=t[++a];else if(null==m)m=t[--d];else if(null==f)f=s[++l];else if(null==$)$=s[--h];else if(N(u,f))w(u,f),u=t[++a],f=s[++l];else if(N(m,$))w(m,$),m=t[--d],$=s[--h];else if(N(u,$))w(u,$),e.insertBefore(u.$elm$,m.$elm$.nextSibling),u=t[++a],$=s[--h];else if(N(m,f))w(m,f),e.insertBefore(m.$elm$,u.$elm$),m=t[--d],f=s[++l];else{for(i=-1,c=a;c<=d;++c)if(t[c]&&null!==t[c].$key$&&t[c].$key$===f.$key$){i=c;break}i>=0?(r=t[i],r.$tag$!==f.$tag$?o=y(t&&t[l],n,i):(w(r,f),t[i]=void 0,o=r.$elm$),f=s[++l]):(o=y(t&&t[l],n,l),f=s[++l]),o&&u.$elm$.parentNode.insertBefore(o,u.$elm$)}a>d?j(e,null==s[h+1]?null:s[h+1].$elm$,n,s,l,h):l>h&&C(t,a,d)})(n,s,t,o):null!==o?(null!==e.$text$&&(n.textContent=""),j(n,null,t,o,0,o.length-1)):null!==s&&C(s,0,s.length-1),r&&"svg"===a&&(r=!1)):e.$text$!==l&&(n.data=l)},A=e=>{e.$attrs$&&e.$attrs$.ref&&e.$attrs$.ref(null),e.$children$&&e.$children$.map(A)},L=(e,t)=>{const n=e.$hostElement$,r=e.$cmpMeta$,a=e.$vnode$||u(null,null),l=(i=t)&&i.$tag$===m?t:d(null,null,t);var i;o=n.tagName,r.$attrsToReflect$&&(l.$attrs$=l.$attrs$||{},r.$attrsToReflect$.map((([e,t])=>l.$attrs$[t]=n[e]))),l.$tag$=null,l.$flags$|=4,e.$vnode$=l,l.$elm$=a.$elm$=n.shadowRoot||n,s=n["s-sc"],w(a,l)},T=(e,t)=>{t&&!e.$onRenderResolve$&&t["s-p"]&&t["s-p"].push(new Promise((t=>e.$onRenderResolve$=t)))},k=(e,t)=>{if(e.$flags$|=16,4&e.$flags$)return void(e.$flags$|=512);T(e,e.$ancestorComponent$);return ce((()=>M(e,t)))},M=(e,t)=>{const n=(e.$cmpMeta$.$tagName$,()=>{}),s=e.$lazyInstance$;let o;return t&&(o=H(s,"componentWillLoad")),n(),B(o,(()=>S(e,s,t)))},S=async(e,t,n)=>{const s=e.$hostElement$,o=(e.$cmpMeta$.$tagName$,()=>{}),r=s["s-rc"];n&&$(e);const a=(e.$cmpMeta$.$tagName$,()=>{});E(e,t),r&&(r.map((e=>e())),s["s-rc"]=void 0),a(),o();{const t=s["s-p"],n=()=>_(e);0===t.length?n():(Promise.all(t).then(n),e.$flags$|=4,t.length=0)}},E=(e,t,n)=>{try{t=t.render(),e.$flags$&=-17,e.$flags$|=2,L(e,t)}catch(s){Z(s,e.$hostElement$)}return null},_=e=>{e.$cmpMeta$.$tagName$;const t=e.$hostElement$,n=()=>{},s=e.$lazyInstance$,o=e.$ancestorComponent$;64&e.$flags$?n():(e.$flags$|=64,O(t),H(s,"componentDidLoad"),n(),e.$onReadyResolve$(t),o||R()),e.$onRenderResolve$&&(e.$onRenderResolve$(),e.$onRenderResolve$=void 0),512&e.$flags$&&ie((()=>k(e,!1))),e.$flags$&=-517},R=e=>{O(X.documentElement),ie((()=>((e,t,n)=>{const s=ee.ce(t,n);return e.dispatchEvent(s),s})(Q,"appload",{detail:{namespace:"pushfeedback"}})))},H=(e,t,n)=>{if(e&&e[t])try{return e[t](n)}catch(s){Z(s)}},B=(e,t)=>e&&e.then?e.then(t):t(),O=e=>e.classList.add("hydrated"),P=(e,t,n,s)=>{const o=F(e),r=o.$instanceValues$.get(t),a=o.$flags$,l=o.$lazyInstance$;var c,d;c=n,d=s.$members$[t][0],n=null==c||i(c)?c:4&d?"false"!==c&&(""===c||!!c):2&d?parseFloat(c):1&d?String(c):c;const u=Number.isNaN(r)&&Number.isNaN(n);8&a&&void 0!==r||!(n!==r&&!u)||(o.$instanceValues$.set(t,n),l&&2==(18&a)&&k(o,!1))},I=(e,t,n)=>{if(t.$members$){const s=Object.entries(t.$members$),o=e.prototype;if(s.map((([e,[s]])=>{(31&s||2&n&&32&s)&&Object.defineProperty(o,e,{get(){return t=e,F(this).$instanceValues$.get(t);var t},set(n){P(this,e,n,t)},configurable:!0,enumerable:!0})})),1&n){const n=new Map;o.attributeChangedCallback=function(e,t,s){ee.jmp((()=>{const t=n.get(e);if(this.hasOwnProperty(t))s=this[t],delete this[t];else if(o.hasOwnProperty(t)&&"number"==typeof this[t]&&this[t]==s)return;this[t]=(null!==s||"boolean"!=typeof this[t])&&s}))},e.observedAttributes=s.filter((([e,t])=>15&t[0])).map((([e,s])=>{const o=s[1]||e;return n.set(o,e),512&s[0]&&t.$attrsToReflect$.push([e,o]),o}))}}return e},U=async(e,t,n,s,o)=>{if(!(32&t.$flags$)){{if(t.$flags$|=32,(o=Y(n)).then){const e=()=>{};o=await o,e()}o.isProxied||(I(o,n,2),o.isProxied=!0);const e=(n.$tagName$,()=>{});t.$flags$|=8;try{new o(t)}catch(l){Z(l)}t.$flags$&=-9,e(),V(t.$lazyInstance$)}if(o.style){let e=o.style;const t=p(n);if(!K.has(t)){const s=(n.$tagName$,()=>{});((e,t,n)=>{let s=K.get(e);ne&&n?(s=s||new CSSStyleSheet,"string"==typeof s?s=t:s.replaceSync(t)):s=t,K.set(e,s)})(t,e,!!(1&n.$flags$)),s()}}}const r=t.$ancestorComponent$,a=()=>k(t,!0);r&&r["s-rc"]?r["s-rc"].push(a):a()},V=e=>{H(e,"connectedCallback")},z=(e,t={})=>{var n;const s=()=>{},o=[],r=t.exclude||[],a=Q.customElements,l=X.head,i=l.querySelector("meta[charset]"),d=X.createElement("style"),u=[];let m,h=!0;Object.assign(ee,t),ee.$resourcesUrl$=new URL(t.resourcesUrl||"./",X.baseURI).href,e.map((e=>{e[1].map((t=>{const n={$flags$:t[0],$tagName$:t[1],$members$:t[2],$listeners$:t[3]};n.$members$=t[2],n.$attrsToReflect$=[];const s=n.$tagName$,l=class extends HTMLElement{constructor(e){super(e),W(e=this,n),1&n.$flags$&&e.attachShadow({mode:"open"})}connectedCallback(){m&&(clearTimeout(m),m=null),h?u.push(this):ee.jmp((()=>(e=>{if(!(1&ee.$flags$)){const t=F(e),n=t.$cmpMeta$,s=(n.$tagName$,()=>{});if(1&t.$flags$)V(t.$lazyInstance$);else{t.$flags$|=1;{let n=e;for(;n=n.parentNode||n.host;)if(n["s-p"]){T(t,t.$ancestorComponent$=n);break}}n.$members$&&Object.entries(n.$members$).map((([t,[n]])=>{if(31&n&&e.hasOwnProperty(t)){const n=e[t];delete e[t],e[t]=n}})),U(0,t,n)}s()}})(this)))}disconnectedCallback(){ee.jmp((()=>(e=>{if(!(1&ee.$flags$)){const t=F(e).$lazyInstance$;H(t,"disconnectedCallback")}})(this)))}componentOnReady(){return F(this).$onReadyPromise$}};n.$lazyBundleId$=e[0],r.includes(s)||a.get(s)||(o.push(s),a.define(s,I(l,n,1)))}))}));{d.innerHTML=o+"{visibility:hidden}.hydrated{visibility:inherit}",d.setAttribute("data-styles","");const e=null!==(n=ee.$nonce$)&&void 0!==n?n:c(X);null!=e&&d.setAttribute("nonce",e),l.insertBefore(d,i?i.nextSibling:l.firstChild)}h=!1,u.length?u.map((e=>e.connectedCallback())):ee.jmp((()=>m=setTimeout(R,30))),s()},D=new WeakMap,F=e=>D.get(e),G=(e,t)=>D.set(t.$lazyInstance$=e,t),W=(e,t)=>{const n={$flags$:0,$hostElement$:e,$cmpMeta$:t,$instanceValues$:new Map};return n.$onReadyPromise$=new Promise((e=>n.$onReadyResolve$=e)),e["s-p"]=[],e["s-rc"]=[],D.set(e,n)},q=(e,t)=>t in e,Z=(e,t)=>(0,console.error)(e,t),J=new Map,Y=(e,t,s)=>{const o=e.$tagName$.replace(/-/g,"_"),r=e.$lazyBundleId$,a=J.get(r);return a?a[o]:n(2705)(`./${r}.entry.js`).then((e=>(J.set(r,e),e[o])),Z)},K=new Map,Q="undefined"!=typeof window?window:{},X=Q.document||{head:{}},ee={$flags$:0,$resourcesUrl$:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,n,s)=>e.addEventListener(t,n,s),rel:(e,t,n,s)=>e.removeEventListener(t,n,s),ce:(e,t)=>new CustomEvent(e,t)},te=e=>Promise.resolve(e),ne=(()=>{try{return new CSSStyleSheet,"function"==typeof(new CSSStyleSheet).replaceSync}catch(e){}return!1})(),se=[],oe=[],re=(e,t)=>n=>{e.push(n),a||(a=!0,t&&4&ee.$flags$?ie(le):ee.raf(le))},ae=e=>{for(let n=0;n<e.length;n++)try{e[n](performance.now())}catch(t){Z(t)}e.length=0},le=()=>{ae(se),ae(oe),(a=se.length>0)&&ee.raf(le)},ie=e=>te().then(e),ce=re(oe,!0)},6024:(e,t,n)=>{"use strict";n.d(t,{u2:()=>o});var s=n(843);const o=(e,t)=>"undefined"==typeof window?Promise.resolve():(0,s.p)().then((()=>(0,s.b)([["feedback-button_2",[[1,"feedback-button",{customFont:[4,"custom-font"],errorMessage:[1,"error-message"],errorMessage403:[1,"error-message-4-0-3"],errorMessage404:[1,"error-message-4-0-4"],modalTitle:[1,"modal-title"],modalTitleSuccess:[1,"modal-title-success"],modalTitleError:[1,"modal-title-error"],modalPosition:[1,"modal-position"],sendButtonText:[1,"send-button-text"],successMessage:[1,"success-message"],project:[1],screenshotButtonText:[1,"screenshot-button-text"],screenshotTopbarText:[1,"screenshot-topbar-text"],hideEmail:[4,"hide-email"],emailAddress:[1,"email-address"],emailPlaceholder:[1,"email-placeholder"],messagePlaceholder:[1,"message-placeholder"],hideRating:[4,"hide-rating"],rating:[2],ratingMode:[1,"rating-mode"],ratingPlaceholder:[1,"rating-placeholder"],ratingStarsPlaceholder:[1,"rating-stars-placeholder"],buttonStyle:[1,"button-style"],buttonPosition:[1,"button-position"],hideIcon:[4,"hide-icon"],hideScreenshotButton:[4,"hide-screenshot-button"],hidePrivacyPolicy:[4,"hide-privacy-policy"],privacyPolicyText:[1,"privacy-policy-text"],fetchData:[4,"fetch-data"]}],[1,"feedback-modal",{errorMessage:[1,"error-message"],errorMessage403:[1,"error-message-4-0-3"],errorMessage404:[1,"error-message-4-0-4"],modalTitle:[1,"modal-title"],modalTitleSuccess:[1,"modal-title-success"],modalTitleError:[1,"modal-title-error"],modalPosition:[1,"modal-position"],sendButtonText:[1,"send-button-text"],successMessage:[1,"success-message"],project:[1],screenshotButtonText:[1,"screenshot-button-text"],screenshotTopbarText:[1,"screenshot-topbar-text"],hideEmail:[4,"hide-email"],emailAddress:[1,"email-address"],emailPlaceholder:[1,"email-placeholder"],messagePlaceholder:[1,"message-placeholder"],hideRating:[4,"hide-rating"],rating:[2],ratingMode:[1,"rating-mode"],ratingPlaceholder:[1,"rating-placeholder"],ratingStarsPlaceholder:[1,"rating-stars-placeholder"],showModal:[1540,"show-modal"],showScreenshotMode:[1540,"show-screenshot-mode"],showScreenshotTopBar:[1540,"show-screenshot-top-bar"],hasSelectedElement:[1540,"has-selected-element"],hideScreenshotButton:[4,"hide-screenshot-button"],hidePrivacyPolicy:[4,"hide-privacy-policy"],privacyPolicyText:[1,"privacy-policy-text"],fetchData:[4,"fetch-data"],sending:[32],formMessage:[32],formEmail:[32],formSuccess:[32],formVerification:[32],formError:[32],formErrorStatus:[32],encodedScreenshot:[32],isPrivacyChecked:[32],whitelabel:[32],selectedRating:[32]}]]]],t)));!function(){if("undefined"!=typeof window&&void 0!==window.Reflect&&void 0!==window.customElements){var e=HTMLElement;window.HTMLElement=function(){return Reflect.construct(e,[],this.constructor)},HTMLElement.prototype=e.prototype,HTMLElement.prototype.constructor=HTMLElement,Object.setPrototypeOf(HTMLElement,e)}}()},6373:(e,t,n)=>{var s,o,r,a;s=n(7635),o=n(1539).utf8,r=n(1539).bin,(a=function(e,t){var n=s.wordsToBytes(function(e){e.constructor==String?e=o.stringToBytes(e):"undefined"!=typeof Buffer&&"function"==typeof Buffer.isBuffer&&Buffer.isBuffer(e)?e=Array.prototype.slice.call(e,0):Array.isArray(e)||(e=e.toString());var t=s.bytesToWords(e),n=8*e.length,r=[],a=1732584193,l=-271733879,i=-1732584194,c=271733878,d=-1009589776;t[n>>5]|=128<<24-n%32,t[15+(n+64>>>9<<4)]=n;for(var u=0;u<t.length;u+=16){for(var m=a,h=l,f=i,$=c,p=d,g=0;g<80;g++){if(g<16)r[g]=t[u+g];else{var b=r[g-3]^r[g-8]^r[g-14]^r[g-16];r[g]=b<<1|b>>>31}var v=(a<<5|a>>>27)+d+(r[g]>>>0)+(g<20?1518500249+(l&i|~l&c):g<40?1859775393+(l^i^c):g<60?(l&i|l&c|i&c)-1894007588:(l^i^c)-899497514);d=c,c=i,i=l<<30|l>>>2,l=a,a=v}a+=m,l+=h,i+=f,c+=$,d+=p}return[a,l,i,c,d]}(e));return t&&t.asBytes?n:t&&t.asString?r.bytesToString(n):s.bytesToHex(n)})._blocksize=16,a._digestsize=20,e.exports=a}}]);
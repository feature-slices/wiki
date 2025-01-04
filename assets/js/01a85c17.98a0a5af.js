"use strict";(self.webpackChunk_feature_sliced_documentation=self.webpackChunk_feature_sliced_documentation||[]).push([["565"],{2011:function(e,t,a){a.d(t,{CS:()=>f,iZ:()=>j,ci:()=>k,Ne:()=>Z,cH:()=>C,nO:()=>u,wj:()=>s,n4:()=>c});var n=a("2676"),l=a("5271"),i=a("3978"),r=a("738");function s(){let e=(0,r.Z)(),t=e?.data?.blogMetadata;if(!t)throw Error("useBlogMetadata() can't be called on the current route because the blog metadata could not be found in route context");return t}let o=l.createContext(null);function c(e){let{children:t,content:a,isBlogPostPage:i=!1}=e,r=function(e){let{content:t,isBlogPostPage:a}=e;return(0,l.useMemo)(()=>({metadata:t.metadata,frontMatter:t.frontMatter,assets:t.assets,toc:t.toc,isBlogPostPage:a}),[t,a])}({content:a,isBlogPostPage:i});return(0,n.jsx)(o.Provider,{value:r,children:t})}function u(){let e=(0,l.useContext)(o);if(null===e)throw new i.i6("BlogPostProvider");return e}var m=a("4594"),d=a("6596");let g=e=>new Date(e).toISOString();function h(e){let t=e.map(x);return{author:1===t.length?t[0]:t}}function p(e,t,a){return e?{image:function(e){let{imageUrl:t,caption:a}=e;return{"@type":"ImageObject","@id":t,url:t,contentUrl:t,caption:a}}({imageUrl:t(e,{absolute:!0}),caption:`title image for the blog post: ${a}`})}:{}}function f(e){let{siteConfig:t}=(0,d.Z)(),{withBaseUrl:a}=(0,m.Cg)(),{metadata:{blogDescription:n,blogTitle:l,permalink:i}}=e,r=`${t.url}${i}`;return{"@context":"https://schema.org","@type":"Blog","@id":r,mainEntityOfPage:r,headline:l,description:n,blogPost:e.items.map(e=>(function(e,t,a){let{assets:n,frontMatter:l,metadata:i}=e,{date:r,title:s,description:o,lastUpdatedAt:c}=i,u=n.image??l.image,m=l.keywords??[],d=`${t.url}${i.permalink}`,f=c?g(c):void 0;return{"@type":"BlogPosting","@id":d,mainEntityOfPage:d,url:d,headline:s,name:s,description:o,datePublished:r,...f?{dateModified:f}:{},...h(i.authors),...p(u,a,s),...m?{keywords:m}:{}}})(e.content,t,a))}}function j(){let e=s(),{assets:t,metadata:a}=u(),{siteConfig:n}=(0,d.Z)(),{withBaseUrl:l}=(0,m.Cg)(),{date:i,title:r,description:o,frontMatter:c,lastUpdatedAt:f}=a,j=t.image??c.image,x=c.keywords??[],b=f?g(f):void 0,v=`${n.url}${a.permalink}`;return{"@context":"https://schema.org","@type":"BlogPosting","@id":v,mainEntityOfPage:v,url:v,headline:r,name:r,description:o,datePublished:i,...b?{dateModified:b}:{},...h(a.authors),...p(j,l,r),...x?{keywords:x}:{},isPartOf:{"@type":"Blog","@id":`${n.url}${e.blogBasePath}`,name:e.blogTitle}}}function x(e){return{"@type":"Person",...e.name?{name:e.name}:{},...e.title?{description:e.title}:{},...e.url?{url:e.url}:{},...e.email?{email:e.email}:{},...e.imageURL?{image:e.imageURL}:{}}}var b=a("3225"),v=a("3387"),N=a("7051"),_=a("3532");function C(e){let{pathname:t}=(0,b.TH)();return(0,l.useMemo)(()=>e.filter(e=>!e.unlisted||!!(0,_.Mg)(e.permalink,t)),[e,t])}function k(e){let t=Object.entries((0,N.vM)(e,e=>`${new Date(e.date).getFullYear()}`));return t.reverse(),t}function Z(e){let{items:t,ulClassName:a,liClassName:l,linkClassName:i,linkActiveClassName:r}=e;return(0,n.jsx)("ul",{className:a,children:t.map(e=>(0,n.jsx)("li",{className:l,children:(0,n.jsx)(v.Z,{isNavLink:!0,to:e.permalink,className:i,activeClassName:r,children:e.title})},e.permalink))})}},5458:function(e,t,a){a.d(t,{Z:()=>N});var n=a("2676"),l=a("5271"),i=a("4461"),r=a("6845"),s=a("4485"),o=a("6567"),c=a("2011"),u=a("9596"),m=a("3677");function d(e){let{year:t,yearGroupHeadingClassName:a,children:l}=e;return(0,n.jsxs)("div",{role:"group",children:[(0,n.jsx)(m.Z,{as:"h3",className:a,children:t}),l]})}let g=(0,l.memo)(function(e){let{items:t,yearGroupHeadingClassName:a,ListComponent:l}=e;if(!(0,u.L)().blog.sidebar.groupByYear)return(0,n.jsx)(l,{items:t});{let e=(0,c.ci)(t);return(0,n.jsx)(n.Fragment,{children:e.map(e=>{let[t,i]=e;return(0,n.jsx)(d,{year:t,yearGroupHeadingClassName:a,children:(0,n.jsx)(l,{items:i})},t)})})}}),h=e=>{let{items:t}=e;return(0,n.jsx)(c.Ne,{items:t,ulClassName:(0,i.Z)("sidebarItemList_Y2H_","clean-list"),liClassName:"sidebarItem_XXpM",linkClassName:"sidebarItemLink_MuiB",linkActiveClassName:"sidebarItemLinkActive_Zhi3"})},p=(0,l.memo)(function(e){let{sidebar:t}=e,a=(0,c.cH)(t.items);return(0,n.jsx)("aside",{className:"col col--3",children:(0,n.jsxs)("nav",{className:(0,i.Z)("sidebar_u0JM","thin-scrollbar"),"aria-label":(0,o.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"}),children:[(0,n.jsx)("div",{className:(0,i.Z)("sidebarItemTitle_oPtq","margin-bottom--md"),children:t.title}),(0,n.jsx)(g,{items:a,ListComponent:h,yearGroupHeadingClassName:"yearGroupHeading_D1zR"})]})})});var f=a("8439");let j=e=>{let{items:t}=e;return(0,n.jsx)(c.Ne,{items:t,ulClassName:"menu__list",liClassName:"menu__list-item",linkClassName:"menu__link",linkActiveClassName:"menu__link--active"})};function x(e){let{sidebar:t}=e,a=(0,c.cH)(t.items);return(0,n.jsx)(g,{items:a,ListComponent:j,yearGroupHeadingClassName:"yearGroupHeading_wqA4"})}let b=(0,l.memo)(function(e){return(0,n.jsx)(f.Zo,{component:x,props:e})});function v(e){let{sidebar:t}=e,a=(0,s.i)();return t?.items.length?"mobile"===a?(0,n.jsx)(b,{sidebar:t}):(0,n.jsx)(p,{sidebar:t}):null}function N(e){let{sidebar:t,toc:a,children:l,...s}=e,o=t&&t.items.length>0;return(0,n.jsx)(r.Z,{...s,children:(0,n.jsx)("div",{className:"container margin-vert--lg",children:(0,n.jsxs)("div",{className:"row",children:[(0,n.jsx)(v,{sidebar:t}),(0,n.jsx)("main",{className:(0,i.Z)("col",{"col--7":o,"col--9 col--offset-1":!o}),children:l}),a&&(0,n.jsx)("div",{className:"col col--2",children:a})]})})})}},5156:function(e,t,a){a.r(t),a.d(t,{default:()=>p});var n=a("2676");a("5271");var l=a("4461"),i=a("6567");let r=()=>(0,i.I)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});var s=a("6949"),o=a("8610"),c=a("5458"),u=a("333"),m=a("3677");function d(e){let{letterEntry:t}=e;return(0,n.jsxs)("article",{children:[(0,n.jsx)(m.Z,{as:"h2",id:t.letter,children:t.letter}),(0,n.jsx)("ul",{className:"padding--none",children:t.tags.map(e=>(0,n.jsx)("li",{className:"tag_SuSz",children:(0,n.jsx)(u.Z,{...e})},e.permalink))}),(0,n.jsx)("hr",{})]})}function g(e){let{tags:t}=e,a=function(e){let t={};return Object.values(e).forEach(e=>{let a=e.label[0].toUpperCase();t[a]??=[],t[a].push(e)}),Object.entries(t).sort((e,t)=>{let[a]=e,[n]=t;return a.localeCompare(n)}).map(e=>{let[t,a]=e;return{letter:t,tags:a.sort((e,t)=>e.label.localeCompare(t.label))}})}(t);return(0,n.jsx)("section",{className:"margin-vert--lg",children:a.map(e=>(0,n.jsx)(d,{letterEntry:e},e.letter))})}var h=a("2425");function p(e){let{tags:t,sidebar:a}=e,i=r();return(0,n.jsxs)(s.FG,{className:(0,l.Z)(o.k.wrapper.blogPages,o.k.page.blogTagsListPage),children:[(0,n.jsx)(s.d,{title:i}),(0,n.jsx)(h.Z,{tag:"blog_tags_list"}),(0,n.jsxs)(c.Z,{sidebar:a,children:[(0,n.jsx)(m.Z,{as:"h1",children:i}),(0,n.jsx)(g,{tags:t})]})]})}},333:function(e,t,a){a.d(t,{Z:()=>s});var n=a("2676");a("5271");var l=a("4461"),i=a("3387");let r={tag:"tag_g7h_",tagRegular:"tagRegular_z3jR",tagWithCount:"tagWithCount_tLLW"};function s(e){let{permalink:t,label:a,count:s,description:o}=e;return(0,n.jsxs)(i.Z,{href:t,title:o,className:(0,l.Z)(r.tag,s?r.tagWithCount:r.tagRegular),children:[a,s&&(0,n.jsx)("span",{children:s})]})}}}]);
"use strict";(self.webpackChunk_feature_sliced_documentation=self.webpackChunk_feature_sliced_documentation||[]).push([[6369],{7496:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var t=i(6070),s=i(5710);const o={sidebar_position:1},l="Low Coupling & High Cohesion",r={id:"reference/isolation/coupling-cohesion",title:"Low Coupling & High Cohesion",description:"Application modules should be designed according to high cohesion (should solve one specific task) and low coupling (independent of other modules) principles.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/reference/isolation/coupling-cohesion.md",sourceDirName:"reference/isolation",slug:"/reference/isolation/coupling-cohesion",permalink:"/kr/docs/reference/isolation/coupling-cohesion",draft:!1,unlisted:!1,editUrl:"https://github.com/feature-sliced/documentation/edit/master/i18n/en/docusaurus-plugin-content-docs/current/reference/isolation/coupling-cohesion.md",tags:[],version:"current",lastUpdatedAt:1725293325e3,sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"referenceSidebar",previous:{title:"Isolation of modules",permalink:"/kr/docs/reference/isolation/"},next:{title:"Decouple entities",permalink:"/kr/docs/reference/isolation/decouple-entities"}},a={},c=[{value:"Components composition (UI level)",id:"components-composition-ui-level",level:2},{value:"Example",id:"example",level:3},{value:"Laying the extensibility",id:"laying-the-extensibility",level:4},{value:"Using the composition",id:"using-the-composition",level:4},{value:"Layer composition (APP level)",id:"layer-composition-app-level",level:2},{value:"Example",id:"example-1",level:3},{value:"Let&#39;s tie it all together",id:"lets-tie-it-all-together",level:4},{value:"Data model",id:"data-model",level:4},{value:"Summary",id:"summary",level:2},{value:"See also",id:"see-also",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"low-coupling--high-cohesion",children:"Low Coupling & High Cohesion"})}),"\n",(0,t.jsxs)(n.p,{children:["Application modules should be designed according to ",(0,t.jsx)(n.strong,{children:"high cohesion"})," (should solve one specific task) and ",(0,t.jsx)(n.strong,{children:"low coupling"})," (independent of other modules) principles."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"coupling-cohesion-themed",src:i(9110).A+"",width:"1024",height:"1024"})}),"\n",(0,t.jsx)(n.p,{children:"Within the methodology, this is achieved through:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Splitting the application into layers and slices that implement specific functionality"}),"\n",(0,t.jsxs)(n.li,{children:["Providing a ",(0,t.jsx)(n.a,{href:"/docs/reference/public-api",children:"public access interface"})," for each module"]}),"\n",(0,t.jsxs)(n.li,{children:["Setting up restrictions for ",(0,t.jsx)(n.a,{href:"/docs/reference/isolation",children:"modules interactions"})," - each module can depend only on the modules below it, but not on modules from the same or higher layer"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"components-composition-ui-level",children:"Components composition (UI level)"}),"\n",(0,t.jsx)(n.p,{children:"The majority of modern UI frameworks and libraries provide a component model in which each component can have its own properties, state, child components, and even slots."}),"\n",(0,t.jsxs)(n.p,{children:["This model allows you to design an interface as a ",(0,t.jsx)(n.strong,{children:"composition of various components that are not directly related to each other"})," and, thereby, achieve ",(0,t.jsx)(n.strong,{children:"low coupling"})," of the interface components."]}),"\n",(0,t.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,t.jsxs)(n.p,{children:["Let's consider such a composition using the example of a ",(0,t.jsx)(n.strong,{children:"list with a header:"})]}),"\n",(0,t.jsx)(n.h4,{id:"laying-the-extensibility",children:"Laying the extensibility"}),"\n",(0,t.jsx)(n.p,{children:"List component will not itself define the look and structure of the header components and list elements, instead it will accept them as parameters"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:'interface ListProps {\n    Header: React.ReactNode;\n    Items: React.ReactNode;\n}\n\nconst List: Component<ListProps> = ({ Header, Items }) => (\n    <div class="wrapper">\n        {Header}\n        <ul class="...">\n            {Items}\n        </ul>\n    </div>\n)\n\n'})}),"\n",(0,t.jsx)(n.h4,{id:"using-the-composition",children:"Using the composition"}),"\n",(0,t.jsxs)(n.p,{children:["This allows you to ",(0,t.jsx)(n.strong,{children:"reuse and independently change"})," components with different Header and list Items. Header and Items components can have both their own local state and their binding to the general state of the application - the List component will not know anything about it, and therefore will not depend on it"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:'<List Header={<FancyHeader />} Items={<ToDoItems />} />\n\n<List Items={<CartItems />} />\n\n<List Header={<FancyHeaderV2 color="red" />} Items={<FancyItems />} />\n\n'})}),"\n",(0,t.jsx)(n.h2,{id:"layer-composition-app-level",children:"Layer composition (APP level)"}),"\n",(0,t.jsxs)(n.p,{children:["The methodology suggests putting the functionality that is valuable for the user into ",(0,t.jsx)(n.strong,{children:"features slice"}),", and the logic related to business entities - into ",(0,t.jsx)(n.strong,{children:"entities"}),". Both features and entities ",(0,t.jsx)(n.strong,{children:"should be designed as modules with high cohesion"}),", i.e. aimed at solving ",(0,t.jsx)(n.strong,{children:"one specific task"})," or related to ",(0,t.jsx)(n.strong,{children:"one specific entity."})]}),"\n",(0,t.jsxs)(n.p,{children:["All interactions between such modules, similar to the UI components from the example above, should be coordinated via a ",(0,t.jsx)(n.strong,{children:"modules composition"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"example-1",children:"Example"}),"\n",(0,t.jsx)(n.p,{children:"Let's use an example of a chat application with the following features:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"user can open a contact list and select a friend"}),"\n",(0,t.jsx)(n.li,{children:"user can open a conversation with a selected friend"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"According to methodology principles, it can be represented as:"}),"\n",(0,t.jsx)(n.p,{children:"Entities"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"User (contains user's state)"}),"\n",(0,t.jsx)(n.li,{children:"Contact (state of the contact list, utilities for working with an individual contact)"}),"\n",(0,t.jsx)(n.li,{children:"Chat (the state of the current chat and utilies for it)"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Features"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Form for sending a message"}),"\n",(0,t.jsx)(n.li,{children:"Chat selection menu"}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"lets-tie-it-all-together",children:"Let's tie it all together"}),"\n",(0,t.jsx)(n.p,{children:"The application, to begin with, will have one page, and the interface will be slightly modified from the first example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",metastring:'title="page/main/ui.tsx"',children:"<List\n    Header={<ConversationSwitch />}\n    Items={<Messages />}\n    Footer={<MessageInput />}\n/>\n"})}),"\n",(0,t.jsx)(n.h4,{id:"data-model",children:"Data model"}),"\n",(0,t.jsxs)(n.p,{children:["The page data model will be organized as a ",(0,t.jsx)(n.strong,{children:"composition of features and entities"}),". In this example, the features will be implemented as factories and they will access the interface of entities through the parameters of these factories."]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"However, the implementation using factory is optional - the feature may directly depend on the lower layers."}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",metastring:'title="pages/main/model.ts"',children:'import { userModel } from "entitites/user"\nimport { conversationModel } from "entities/conversation"\nimport { contactModel } from "entities/contact"\n\nimport { createMessageInput } from "features/message-input"\nimport { createConversationSwitch } from "features/conversation-switch"\n\nimport { beautifiy } from "shared/lib/beautify-text"\n\nexport const { allConversations, setConversation } = createConversationSwitch({\n    contacts: contactModel.allContacts,\n    setConversation: conversationModel.setConversation,\n    currentConversation: conversationModel.conversation,\n    currentUser: userModel.currentUser\n})\n\nexport const { sendMessage, attachFile } = createMessageInput({\n    author: userModel.currentUser\n    send: conversationModel.sendMessage,\n    formatMessage: beautify\n})\n'})}),"\n",(0,t.jsx)(n.h2,{id:"summary",children:"Summary"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Modules must have ",(0,t.jsx)(n.strong,{children:"high cohesion"})," (have one responsibility, solve one specific task) and provide a ",(0,t.jsx)(n.a,{href:"/docs/reference/public-api",children:(0,t.jsx)(n.strong,{children:"public interface"})})," access"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Low coupling"})," is achieved through the composition of elements - UI components, features and entities"]}),"\n",(0,t.jsxs)(n.li,{children:["To reduce entanglement, modules ",(0,t.jsx)(n.strong,{children:"should interact with each other only through a public interfaces"})," - this makes modules independent of each other's internal implementation"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://enterprisecraftsmanship.com/posts/cohesion-coupling-difference/",children:"(Article) Low Coupling and High Cohesion in details"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.em,{children:"The diagram at the beginning is inspired by this article"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://medium.com/german-gorelkin/low-coupling-high-cohesion-d36369fb1be9",children:"(Article) Low Coupling and High Cohesion. The Law of Demeter"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://www.slideshare.net/cristalngo/software-design-principles-57388843",children:"(Presentation) On design principles (including Low Coupling & High Cohesion)"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},9110:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/coupling-ca24ecbbb9b4595e100e3e990025ed73.png"},5710:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>r});var t=i(758);const s={},o=t.createContext(s);function l(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);
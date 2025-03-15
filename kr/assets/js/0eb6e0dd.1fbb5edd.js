"use strict";(self.webpackChunk_feature_sliced_documentation=self.webpackChunk_feature_sliced_documentation||[]).push([["7679"],{2943:function(e,n,t){t.r(n),t.d(n,{default:()=>u,frontMatter:()=>o,metadata:()=>s,assets:()=>l,toc:()=>d,contentTitle:()=>a});var s=JSON.parse('{"id":"guides/tech/with-react-query","title":"React Query\uC640 \uD568\uAED8 \uC0AC\uC6A9\uD558\uAE30","description":"\u201C\uD0A4\uB97C \uC5B4\uB514\uC5D0 \uB450\uC5B4\uC57C \uD558\uB294\uAC00\u201D \uBB38\uC81C","source":"@site/i18n/kr/docusaurus-plugin-content-docs/current/guides/tech/with-react-query.mdx","sourceDirName":"guides/tech","slug":"/guides/tech/with-react-query","permalink":"/documentation/kr/docs/guides/tech/with-react-query","draft":false,"unlisted":false,"editUrl":"https://github.com/feature-sliced/documentation/edit/master/i18n/kr/docusaurus-plugin-content-docs/current/guides/tech/with-react-query.mdx","tags":[],"version":"current","lastUpdatedAt":1742062811000,"sidebarPosition":10,"frontMatter":{"sidebar_position":10},"sidebar":"guidesSidebar","previous":{"title":"Usage with NuxtJS","permalink":"/documentation/kr/docs/guides/tech/with-nuxtjs"},"next":{"title":"SvelteKit\uC640 \uD568\uAED8 \uC0AC\uC6A9\uD558\uAE30","permalink":"/documentation/kr/docs/guides/tech/with-sveltekit"}}'),i=t("2676"),r=t("3663");let o={sidebar_position:10},a="React Query\uC640 \uD568\uAED8 \uC0AC\uC6A9\uD558\uAE30",l={},d=[{value:"\u201C\uD0A4\uB97C \uC5B4\uB514\uC5D0 \uB450\uC5B4\uC57C \uD558\uB294\uAC00\u201D \uBB38\uC81C",id:"\uD0A4\uB97C-\uC5B4\uB514\uC5D0-\uB450\uC5B4\uC57C-\uD558\uB294\uAC00-\uBB38\uC81C",level:2},{value:"\uD574\uACB0\uCC45 \u2014 \uC5D4\uD2F0\uD2F0\uBCC4\uB85C \uBD84\uB9AC\uD558\uAE30",id:"\uD574\uACB0\uCC45--\uC5D4\uD2F0\uD2F0\uBCC4\uB85C-\uBD84\uB9AC\uD558\uAE30",level:3},{value:"\uB300\uC548 \uBC29\uC548 \u2014 shared\uC5D0 \uC720\uC9C0\uD558\uAE30",id:"\uB300\uC548-\uBC29\uC548--shared\uC5D0-\uC720\uC9C0\uD558\uAE30",level:3},{value:"&quot;mutation \uC704\uCE58 \uC124\uC815&quot; \uBB38\uC81C",id:"mutation-\uC704\uCE58-\uC124\uC815-\uBB38\uC81C",level:2},{value:"1. \uC0AC\uC6A9 \uC704\uCE58 \uADFC\uCC98\uC758 <code>api</code> \uB514\uB809\uD1A0\uB9AC\uC5D0\uC11C \uCEE4\uC2A4\uD140 \uD6C5 \uC815\uC758\uD558\uAE30",id:"1-\uC0AC\uC6A9-\uC704\uCE58-\uADFC\uCC98\uC758-api-\uB514\uB809\uD1A0\uB9AC\uC5D0\uC11C-\uCEE4\uC2A4\uD140-\uD6C5-\uC815\uC758\uD558\uAE30",level:3},{value:"2. \uACF5\uC6A9 \uB610\uB294 \uC5D4\uD2F0\uD2F0\uC5D0\uC11C mutation \uD568\uC218\uB97C \uC815\uC758\uD558\uACE0, \uCEF4\uD3EC\uB10C\uD2B8\uC5D0\uC11C <code>useMutation</code>\uC744 \uC9C1\uC811 \uC0AC\uC6A9\uD558\uAE30",id:"2-\uACF5\uC6A9-\uB610\uB294-\uC5D4\uD2F0\uD2F0\uC5D0\uC11C-mutation-\uD568\uC218\uB97C-\uC815\uC758\uD558\uACE0-\uCEF4\uD3EC\uB10C\uD2B8\uC5D0\uC11C-usemutation\uC744-\uC9C1\uC811-\uC0AC\uC6A9\uD558\uAE30",level:3},{value:"\uC694\uCCAD\uC758 \uC870\uC9C1\uD654",id:"\uC694\uCCAD\uC758-\uC870\uC9C1\uD654",level:2},{value:"\uCFFC\uB9AC \uD329\uD1A0\uB9AC",id:"\uCFFC\uB9AC-\uD329\uD1A0\uB9AC",level:3},{value:"1. \uCFFC\uB9AC \uD329\uD1A0\uB9AC \uC0DD\uC131 \uC608\uC2DC",id:"1-\uCFFC\uB9AC-\uD329\uD1A0\uB9AC-\uC0DD\uC131-\uC608\uC2DC",level:3},{value:"2. \uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uCF54\uB4DC\uC5D0\uC11C\uC758 \uCFFC\uB9AC \uD329\uD1A0\uB9AC \uC0AC\uC6A9 \uC608\uC2DC",id:"2-\uC560\uD50C\uB9AC\uCF00\uC774\uC158-\uCF54\uB4DC\uC5D0\uC11C\uC758-\uCFFC\uB9AC-\uD329\uD1A0\uB9AC-\uC0AC\uC6A9-\uC608\uC2DC",level:3},{value:"\uCFFC\uB9AC \uD329\uD1A0\uB9AC \uC0AC\uC6A9\uC758 \uC7A5\uC810",id:"\uCFFC\uB9AC-\uD329\uD1A0\uB9AC-\uC0AC\uC6A9\uC758-\uC7A5\uC810",level:3},{value:"\uD398\uC774\uC9C0\uB124\uC774\uC158",id:"\uD398\uC774\uC9C0\uB124\uC774\uC158",level:2},{value:"1. <code>getPosts</code> \uD568\uC218 \uC0DD\uC131\uD558\uAE30",id:"1-getposts-\uD568\uC218-\uC0DD\uC131\uD558\uAE30",level:3},{value:"2. \uD398\uC774\uC9C0\uB124\uC774\uC158\uC744 \uC704\uD55C \uCFFC\uB9AC \uD329\uD1A0\uB9AC",id:"2-\uD398\uC774\uC9C0\uB124\uC774\uC158\uC744-\uC704\uD55C-\uCFFC\uB9AC-\uD329\uD1A0\uB9AC",level:3},{value:"3. \uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uCF54\uB4DC\uC5D0\uC11C\uC758 \uC0AC\uC6A9",id:"3-\uC560\uD50C\uB9AC\uCF00\uC774\uC158-\uCF54\uB4DC\uC5D0\uC11C\uC758-\uC0AC\uC6A9",level:3},{value:"\uCFFC\uB9AC \uAD00\uB9AC\uB97C \uC704\uD55C <code>QueryProvider</code>",id:"\uCFFC\uB9AC-\uAD00\uB9AC\uB97C-\uC704\uD55C-queryprovider",level:2},{value:"1. <code>QueryProvider</code> \uC0DD\uC131\uD558\uAE30",id:"1-queryprovider-\uC0DD\uC131\uD558\uAE30",level:3},{value:"2. <code>QueryClient</code> \uC0DD\uC131\uD558\uAE30",id:"2-queryclient-\uC0DD\uC131\uD558\uAE30",level:3},{value:"\uCF54\uB4DC \uC0DD\uC131",id:"\uCF54\uB4DC-\uC0DD\uC131",level:2},{value:"React Query\uB97C \uC870\uC9C1\uD654\uD558\uAE30 \uC704\uD55C \uCD94\uAC00 \uC870\uC5B8",id:"react-query\uB97C-\uC870\uC9C1\uD654\uD558\uAE30-\uC704\uD55C-\uCD94\uAC00-\uC870\uC5B8",level:2},{value:"API \uD074\uB77C\uC774\uC5B8\uD2B8",id:"api-\uD074\uB77C\uC774\uC5B8\uD2B8",level:3},{value:"\uCC38\uACE0 \uC790\uB8CC",id:"see-also",level:2}];function c(e){let n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"react-query\uC640-\uD568\uAED8-\uC0AC\uC6A9\uD558\uAE30",children:"React Query\uC640 \uD568\uAED8 \uC0AC\uC6A9\uD558\uAE30"})}),"\n",(0,i.jsx)(n.h2,{id:"\uD0A4\uB97C-\uC5B4\uB514\uC5D0-\uB450\uC5B4\uC57C-\uD558\uB294\uAC00-\uBB38\uC81C",children:"\u201C\uD0A4\uB97C \uC5B4\uB514\uC5D0 \uB450\uC5B4\uC57C \uD558\uB294\uAC00\u201D \uBB38\uC81C"}),"\n",(0,i.jsx)(n.h3,{id:"\uD574\uACB0\uCC45--\uC5D4\uD2F0\uD2F0\uBCC4\uB85C-\uBD84\uB9AC\uD558\uAE30",children:"\uD574\uACB0\uCC45 \u2014 \uC5D4\uD2F0\uD2F0\uBCC4\uB85C \uBD84\uB9AC\uD558\uAE30"}),"\n",(0,i.jsx)(n.p,{children:"\uD504\uB85C\uC81D\uD2B8\uAC00 \uC774\uBBF8 \uC5D4\uD2F0\uD2F0 \uB2E8\uC704\uB85C \uAD6C\uC131\uB418\uC5B4 \uC788\uC73C\uBA70, \uAC01 \uC694\uCCAD\uC774 \uB2E8\uC77C \uC5D4\uD2F0\uD2F0\uC5D0 \uD574\uB2F9\uD55C\uB2E4\uBA74, \uC5D4\uD2F0\uD2F0\uBCC4\uB85C \uCF54\uB4DC\uB97C \uAD6C\uC131\uD558\uB294 \uAC83\uC774 \uC88B\uC2B5\uB2C8\uB2E4. \uC608\uB97C \uB4E4\uC5B4, \uB2E4\uC74C\uACFC \uAC19\uC740 \uB514\uB809\uD1A0\uB9AC \uAD6C\uC870\uB97C \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"\u2514\u2500\u2500 src/                                        #\n    \u251C\u2500\u2500 app/                                    #\n    |   ...                                     #\n    \u251C\u2500\u2500 pages/                                  #\n    |   ...                                     #\n    \u251C\u2500\u2500 entities/                               #\n    |     \u251C\u2500\u2500 {entity}/                         #\n    |    ...     \u2514\u2500\u2500 api/                       #\n    |                 \u251C\u2500\u2500 `{entity}.query`      # \uCFFC\uB9AC \uD0A4\uC640 \uD568\uC218\n    |                 \u251C\u2500\u2500 `get-{entity}`        # \uC5D4\uD2F0\uD2F0 \uC870\uD68C \uD568\uC218\n    |                 \u251C\u2500\u2500 `create-{entity}`     # \uC5D4\uD2F0\uD2F0 \uC0DD\uC131 \uD568\uC218\n    |                 \u251C\u2500\u2500 `update-{entity}`     # \uC5D4\uD2F0\uD2F0 \uC5C5\uB370\uC774\uD2B8 \uD568\uC218\n    |                 \u251C\u2500\u2500 `delete-{entity}`     # \uC5D4\uD2F0\uD2F0 \uC0AD\uC81C \uD568\uC218\n    |                ...                        #\n    |                                           #\n    \u251C\u2500\u2500 features/                               #\n    |   ...                                     #\n    \u251C\u2500\u2500 widgets/                                #\n    |   ...                                     #\n    \u2514\u2500\u2500 shared/                                 #\n        ...                                     #\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\uB9CC\uC57D \uC5D4\uD2F0\uD2F0 \uAC04\uC5D0 \uC5F0\uACB0\uC774 \uD544\uC694\uD55C \uACBD\uC6B0 (\uC608: Country \uC5D4\uD2F0\uD2F0\uC5D0 City \uC5D4\uD2F0\uD2F0 \uD544\uB4DC\uAC00 \uD3EC\uD568\uB418\uB294 \uACBD\uC6B0), ",(0,i.jsx)(n.a,{href:"/docs/reference/public-api#public-api-for-cross-imports",children:"\uAD50\uCC28 \uAC00\uC838\uC624\uAE30\uB97C \uC704\uD55C \uACF5\uAC1C API"}),"\uC744 \uC0AC\uC6A9\uD558\uAC70\uB098 \uB300\uC548\uC73C\uB85C \uC544\uB798\uC758 \uAD6C\uC870\uB97C \uACE0\uB824\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."]}),"\n",(0,i.jsx)(n.h3,{id:"\uB300\uC548-\uBC29\uC548--shared\uC5D0-\uC720\uC9C0\uD558\uAE30",children:"\uB300\uC548 \uBC29\uC548 \u2014 shared\uC5D0 \uC720\uC9C0\uD558\uAE30"}),"\n",(0,i.jsx)(n.p,{children:"\uC5D4\uD2F0\uD2F0\uBCC4 \uBD84\uB9AC\uAC00 \uC801\uC808\uD558\uC9C0 \uC54A\uC740 \uACBD\uC6B0, \uB2E4\uC74C\uACFC \uAC19\uC740 \uAD6C\uC870\uB97C \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"\u2514\u2500\u2500 src/                                        #\n   ...                                          #\n    \u2514\u2500\u2500 shared/                                 #\n          \u251C\u2500\u2500 api/                              #\n         ...   \u251C\u2500\u2500 `queries`                    # \uCFFC\uB9AC \uD329\uD1A0\uB9AC\uB4E4\n               |      \u251C\u2500\u2500 `document.ts`         #\n               |      \u251C\u2500\u2500 `background-jobs.ts`  #\n               |     ...                        #\n               \u2514\u2500\u2500  index.ts                    #\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\uC774\uD6C4 ",(0,i.jsx)(n.code,{children:"@/shared/api/index.ts"}),"\uC5D0\uC11C \uB2E4\uC74C\uACFC \uAC19\uC774 \uC0AC\uC6A9\uD569\uB2C8\uB2E4:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",metastring:'title="@/shared/api/index.ts"',children:'export { documentQueries } from "./queries/document";\n'})}),"\n",(0,i.jsx)(n.h2,{id:"mutation-\uC704\uCE58-\uC124\uC815-\uBB38\uC81C",children:'"mutation \uC704\uCE58 \uC124\uC815" \uBB38\uC81C'}),"\n",(0,i.jsx)(n.p,{children:"\uCFFC\uB9AC\uC640 mutation\uC744 \uAC19\uC740 \uC704\uCE58\uC5D0 \uB450\uB294 \uAC83\uC740 \uAD8C\uC7A5\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uB2E4\uC74C \uB450 \uAC00\uC9C0 \uC635\uC158\uC774 \uC788\uC2B5\uB2C8\uB2E4:"}),"\n",(0,i.jsxs)(n.h3,{id:"1-\uC0AC\uC6A9-\uC704\uCE58-\uADFC\uCC98\uC758-api-\uB514\uB809\uD1A0\uB9AC\uC5D0\uC11C-\uCEE4\uC2A4\uD140-\uD6C5-\uC815\uC758\uD558\uAE30",children:["1. \uC0AC\uC6A9 \uC704\uCE58 \uADFC\uCC98\uC758 ",(0,i.jsx)(n.code,{children:"api"})," \uB514\uB809\uD1A0\uB9AC\uC5D0\uC11C \uCEE4\uC2A4\uD140 \uD6C5 \uC815\uC758\uD558\uAE30"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",metastring:'title="@/features/update-post/api/use-update-title.ts"',children:"export const useUpdateTitle = () => {\n  const queryClient = useQueryClient();\n\n  return useMutation({\n    mutationFn: ({ id, newTitle }) =>\n      apiClient\n        .patch(`/posts/${id}`, { title: newTitle })\n        .then((data) => console.log(data)),\n\n    onSuccess: (newPost) => {\n      queryClient.setQueryData(postsQueries.ids(id), newPost);\n    },\n  });\n};\n"})}),"\n",(0,i.jsxs)(n.h3,{id:"2-\uACF5\uC6A9-\uB610\uB294-\uC5D4\uD2F0\uD2F0\uC5D0\uC11C-mutation-\uD568\uC218\uB97C-\uC815\uC758\uD558\uACE0-\uCEF4\uD3EC\uB10C\uD2B8\uC5D0\uC11C-usemutation\uC744-\uC9C1\uC811-\uC0AC\uC6A9\uD558\uAE30",children:["2. \uACF5\uC6A9 \uB610\uB294 \uC5D4\uD2F0\uD2F0\uC5D0\uC11C mutation \uD568\uC218\uB97C \uC815\uC758\uD558\uACE0, \uCEF4\uD3EC\uB10C\uD2B8\uC5D0\uC11C ",(0,i.jsx)(n.code,{children:"useMutation"}),"\uC744 \uC9C1\uC811 \uC0AC\uC6A9\uD558\uAE30"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:"const { mutateAsync, isPending } = useMutation({\n  mutationFn: postApi.createPost,\n});\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",metastring:'title="@/pages/post-create/ui/post-create-page.tsx"',children:'export const CreatePost = () => {\n  const { classes } = useStyles();\n  const [title, setTitle] = useState("");\n\n  const { mutate, isPending } = useMutation({\n    mutationFn: postApi.createPost,\n  });\n\n  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>\n    setTitle(e.target.value);\n  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {\n    e.preventDefault();\n    mutate({ title, userId: DEFAULT_USER_ID });\n  };\n\n  return (\n    <form className={classes.create_form} onSubmit={handleSubmit}>\n      <TextField onChange={handleChange} value={title} />\n      <LoadingButton type="submit" variant="contained" loading={isPending}>\n        Create\n      </LoadingButton>\n    </form>\n  );\n};\n'})}),"\n",(0,i.jsx)(n.h2,{id:"\uC694\uCCAD\uC758-\uC870\uC9C1\uD654",children:"\uC694\uCCAD\uC758 \uC870\uC9C1\uD654"}),"\n",(0,i.jsx)(n.h3,{id:"\uCFFC\uB9AC-\uD329\uD1A0\uB9AC",children:"\uCFFC\uB9AC \uD329\uD1A0\uB9AC"}),"\n",(0,i.jsx)(n.p,{children:"\uCFFC\uB9AC \uD329\uD1A0\uB9AC\uB294 \uCFFC\uB9AC \uD0A4 \uBAA9\uB85D\uC744 \uBC18\uD658\uD558\uB294 \uD568\uC218\uB97C \uD3EC\uD568\uD55C \uAC1D\uCCB4\uC785\uB2C8\uB2E4. \uC0AC\uC6A9 \uBC29\uBC95\uC740 \uB2E4\uC74C\uACFC \uAC19\uC2B5\uB2C8\uB2E4:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:'const keyFactory = {\n  all: () => ["entity"],\n  lists: () => [...postQueries.all(), "list"],\n};\n'})}),"\n",(0,i.jsxs)(n.admonition,{type:"info",children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"queryOptions"}),"\uB294 react-query@v5\uC758 \uB0B4\uC7A5 \uC720\uD2F8\uB9AC\uD2F0\uC785\uB2C8\uB2E4 (\uC120\uD0DD \uC0AC\uD56D)"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"queryOptions({\n  queryKey,\n  ...options,\n});\n"})}),(0,i.jsxs)(n.p,{children:['\uB354 \uD070 \uD0C0\uC785 \uC548\uC815\uC131, react-query\uC758 \uD5A5\uD6C4 \uBC84\uC804\uACFC\uC758 \uD638\uD658\uC131, \uD568\uC218 \uBC0F \uCFFC\uB9AC \uD0A4\uC5D0 \uB300\uD55C \uC26C\uC6B4 \uC561\uC138\uC2A4\uB97C \uC704\uD574, "@tanstack/react-query"\uC758 \uB0B4\uC7A5 queryOptions \uD568\uC218\uB97C \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4 ',(0,i.jsx)(n.a,{href:"https://tkdodo.eu/blog/the-query-options-api#queryoptions",children:"(\uC790\uC138\uD55C \uB0B4\uC6A9\uC740 \uC5EC\uAE30)"}),"."]})]}),"\n",(0,i.jsx)(n.h3,{id:"1-\uCFFC\uB9AC-\uD329\uD1A0\uB9AC-\uC0DD\uC131-\uC608\uC2DC",children:"1. \uCFFC\uB9AC \uD329\uD1A0\uB9AC \uC0DD\uC131 \uC608\uC2DC"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",metastring:'title="@/entities/post/api/post.queries.ts"',children:'import { keepPreviousData, queryOptions } from "@tanstack/react-query";\nimport { getPosts } from "./get-posts";\nimport { getDetailPost } from "./get-detail-post";\nimport { PostDetailQuery } from "./query/post.query";\n\nexport const postQueries = {\n  all: () => ["posts"],\n\n  lists: () => [...postQueries.all(), "list"],\n  list: (page: number, limit: number) =>\n    queryOptions({\n      queryKey: [...postQueries.lists(), page, limit],\n      queryFn: () => getPosts(page, limit),\n      placeholderData: keepPreviousData,\n    }),\n\n  details: () => [...postQueries.all(), "detail"],\n  detail: (query?: PostDetailQuery) =>\n    queryOptions({\n      queryKey: [...postQueries.details(), query?.id],\n      queryFn: () => getDetailPost({ id: query?.id }),\n      staleTime: 5000,\n    }),\n};\n'})}),"\n",(0,i.jsx)(n.h3,{id:"2-\uC560\uD50C\uB9AC\uCF00\uC774\uC158-\uCF54\uB4DC\uC5D0\uC11C\uC758-\uCFFC\uB9AC-\uD329\uD1A0\uB9AC-\uC0AC\uC6A9-\uC608\uC2DC",children:"2. \uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uCF54\uB4DC\uC5D0\uC11C\uC758 \uCFFC\uB9AC \uD329\uD1A0\uB9AC \uC0AC\uC6A9 \uC608\uC2DC"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:'import { useParams } from "react-router-dom";\nimport { postApi } from "@/entities/post";\nimport { useQuery } from "@tanstack/react-query";\n\ntype Params = {\n  postId: string;\n};\n\nexport const PostPage = () => {\n  const { postId } = useParams<Params>();\n  const id = parseInt(postId || "");\n  const {\n    data: post,\n    error,\n    isLoading,\n    isError,\n  } = useQuery(postApi.postQueries.detail({ id }));\n\n  if (isLoading) {\n    return <div>Loading...</div>;\n  }\n\n  if (isError || !post) {\n    return <>{error?.message}</>;\n  }\n\n  return (\n    <div>\n      <p>Post id: {post.id}</p>\n      <div>\n        <h1>{post.title}</h1>\n        <div>\n          <p>{post.body}</p>\n        </div>\n      </div>\n      <div>Owner: {post.userId}</div>\n    </div>\n  );\n};\n'})}),"\n",(0,i.jsx)(n.h3,{id:"\uCFFC\uB9AC-\uD329\uD1A0\uB9AC-\uC0AC\uC6A9\uC758-\uC7A5\uC810",children:"\uCFFC\uB9AC \uD329\uD1A0\uB9AC \uC0AC\uC6A9\uC758 \uC7A5\uC810"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"\uC694\uCCAD \uAD6C\uC870\uD654"}),": \uD329\uD1A0\uB9AC\uB97C \uD1B5\uD574 \uBAA8\uB4E0 API \uC694\uCCAD\uC744 \uD55C \uACF3\uC5D0 \uC870\uC9C1\uD654\uD558\uC5EC \uCF54\uB4DC\uC758 \uAC00\uB3C5\uC131\uACFC \uC720\uC9C0\uBCF4\uC218\uC131\uC744 \uB192\uC785\uB2C8\uB2E4."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"\uCFFC\uB9AC \uBC0F \uD0A4\uC5D0 \uB300\uD55C \uD3B8\uB9AC\uD55C \uC811\uADFC"}),": \uB2E4\uC591\uD55C \uC720\uD615\uC758 \uCFFC\uB9AC\uC640 \uD574\uB2F9 \uD0A4\uC5D0 \uC27D\uAC8C \uC811\uADFC\uD560 \uC218 \uC788\uB294 \uBA54\uC11C\uB4DC\uB97C \uC81C\uACF5\uD569\uB2C8\uB2E4."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"\uCFFC\uB9AC \uC7AC\uD638\uCD9C \uC6A9\uC774\uC131"}),": \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC758 \uC5EC\uB7EC \uBD80\uBD84\uC5D0\uC11C \uCFFC\uB9AC \uD0A4\uB97C \uBCC0\uACBD\uD560 \uD544\uC694 \uC5C6\uC774 \uC27D\uAC8C \uC7AC\uD638\uCD9C\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\uD398\uC774\uC9C0\uB124\uC774\uC158",children:"\uD398\uC774\uC9C0\uB124\uC774\uC158"}),"\n",(0,i.jsxs)(n.p,{children:["\uC774 \uC139\uC158\uC5D0\uC11C\uB294 \uD398\uC774\uC9C0\uB124\uC774\uC158\uC744 \uC0AC\uC6A9\uD558\uC5EC \uAC8C\uC2DC\uBB3C \uC5D4\uD2F0\uD2F0\uB97C \uAC00\uC838\uC624\uB294 API \uC694\uCCAD\uC744 \uC218\uD589\uD558\uB294 ",(0,i.jsx)(n.code,{children:"getPosts"})," \uD568\uC218\uC758 \uC608\uB97C \uC18C\uAC1C\uD569\uB2C8\uB2E4."]}),"\n",(0,i.jsxs)(n.h3,{id:"1-getposts-\uD568\uC218-\uC0DD\uC131\uD558\uAE30",children:["1. ",(0,i.jsx)(n.code,{children:"getPosts"})," \uD568\uC218 \uC0DD\uC131\uD558\uAE30"]}),"\n",(0,i.jsxs)(n.p,{children:["getPosts \uD568\uC218\uB294 ",(0,i.jsx)(n.code,{children:"api"})," \uC138\uADF8\uBA3C\uD2B8\uC758 ",(0,i.jsx)(n.code,{children:"get-posts.ts"})," \uD30C\uC77C\uC5D0 \uC788\uC2B5\uB2C8\uB2E4."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",metastring:'title="@/pages/post-feed/api/get-posts.ts"',children:'import { apiClient } from "@/shared/api/base";\n\nimport { PostWithPaginationDto } from "./dto/post-with-pagination.dto";\nimport { PostQuery } from "./query/post.query";\nimport { mapPost } from "./mapper/map-post";\nimport { PostWithPagination } from "../model/post-with-pagination";\n\nconst calculatePostPage = (totalCount: number, limit: number) =>\n  Math.floor(totalCount / limit);\n\nexport const getPosts = async (\n  page: number,\n  limit: number,\n): Promise<PostWithPagination> => {\n  const skip = page * limit;\n  const query: PostQuery = { skip, limit };\n  const result = await apiClient.get<PostWithPaginationDto>("/posts", query);\n\n  return {\n    posts: result.posts.map((post) => mapPost(post)),\n    limit: result.limit,\n    skip: result.skip,\n    total: result.total,\n    totalPages: calculatePostPage(result.total, limit),\n  };\n};\n'})}),"\n",(0,i.jsx)(n.h3,{id:"2-\uD398\uC774\uC9C0\uB124\uC774\uC158\uC744-\uC704\uD55C-\uCFFC\uB9AC-\uD329\uD1A0\uB9AC",children:"2. \uD398\uC774\uC9C0\uB124\uC774\uC158\uC744 \uC704\uD55C \uCFFC\uB9AC \uD329\uD1A0\uB9AC"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"postQueries"})," \uCFFC\uB9AC \uD329\uD1A0\uB9AC\uB294 \uD2B9\uC815 \uD398\uC774\uC9C0\uC640 \uC81C\uD55C\uC5D0 \uB9DE\uCDB0 \uAC8C\uC2DC\uBB3C \uBAA9\uB85D\uC744 \uC694\uCCAD\uD558\uB294 \uB4F1 \uAC8C\uC2DC\uBB3C \uAD00\uB828 \uB2E4\uC591\uD55C \uCFFC\uB9AC \uC635\uC158\uC744 \uC815\uC758\uD569\uB2C8\uB2E4."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:'import { keepPreviousData, queryOptions } from "@tanstack/react-query";\nimport { getPosts } from "./get-posts";\n\nexport const postQueries = {\n  all: () => ["posts"],\n  lists: () => [...postQueries.all(), "list"],\n  list: (page: number, limit: number) =>\n    queryOptions({\n      queryKey: [...postQueries.lists(), page, limit],\n      queryFn: () => getPosts(page, limit),\n      placeholderData: keepPreviousData,\n    }),\n};\n'})}),"\n",(0,i.jsx)(n.h3,{id:"3-\uC560\uD50C\uB9AC\uCF00\uC774\uC158-\uCF54\uB4DC\uC5D0\uC11C\uC758-\uC0AC\uC6A9",children:"3. \uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uCF54\uB4DC\uC5D0\uC11C\uC758 \uC0AC\uC6A9"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",metastring:'title="@/pages/home/ui/index.tsx"',children:'export const HomePage = () => {\n  const itemsOnScreen = DEFAULT_ITEMS_ON_SCREEN;\n  const [page, setPage] = usePageParam(DEFAULT_PAGE);\n  const { data, isFetching, isLoading } = useQuery(\n    postApi.postQueries.list(page, itemsOnScreen),\n  );\n  return (\n    <>\n      <Pagination\n        onChange={(_, page) => setPage(page)}\n        page={page}\n        count={data?.totalPages}\n        variant="outlined"\n        color="primary"\n      />\n      <Posts posts={data?.posts} />\n    </>\n  );\n};\n'})}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["\uC608\uC2DC\uB294 \uB2E8\uC21C\uD654\uB41C \uBC84\uC804\uC774\uBA70, \uC804\uCCB4 \uCF54\uB4DC\uB294 ",(0,i.jsx)(n.a,{href:"https://github.com/ruslan4432013/fsd-react-query-example",children:"GitHub"}),"\uC5D0\uC11C \uD655\uC778\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."]})}),"\n",(0,i.jsxs)(n.h2,{id:"\uCFFC\uB9AC-\uAD00\uB9AC\uB97C-\uC704\uD55C-queryprovider",children:["\uCFFC\uB9AC \uAD00\uB9AC\uB97C \uC704\uD55C ",(0,i.jsx)(n.code,{children:"QueryProvider"})]}),"\n",(0,i.jsxs)(n.p,{children:["\uC774 \uAC00\uC774\uB4DC\uC5D0\uC11C\uB294 ",(0,i.jsx)(n.code,{children:"QueryProvider"}),"\uB97C \uC5B4\uB5BB\uAC8C \uAD6C\uC131\uD558\uB294\uC9C0 \uC0B4\uD3B4\uBD05\uB2C8\uB2E4."]}),"\n",(0,i.jsxs)(n.h3,{id:"1-queryprovider-\uC0DD\uC131\uD558\uAE30",children:["1. ",(0,i.jsx)(n.code,{children:"QueryProvider"})," \uC0DD\uC131\uD558\uAE30"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"query-provider.tsx"})," \uD30C\uC77C\uC740 ",(0,i.jsx)(n.code,{children:"@/app/providers/query-provider.tsx"})," \uACBD\uB85C\uC5D0 \uC788\uC2B5\uB2C8\uB2E4."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",metastring:'title="@/app/providers/query-provider.tsx"',children:'import { QueryClient, QueryClientProvider } from "@tanstack/react-query";\nimport { ReactQueryDevtools } from "@tanstack/react-query-devtools";\nimport { ReactNode } from "react";\n\ntype Props = {\n  children: ReactNode;\n  client: QueryClient;\n};\n\nexport const QueryProvider = ({ client, children }: Props) => {\n  return (\n    <QueryClientProvider client={client}>\n      {children}\n      <ReactQueryDevtools />\n    </QueryClientProvider>\n  );\n};\n'})}),"\n",(0,i.jsxs)(n.h3,{id:"2-queryclient-\uC0DD\uC131\uD558\uAE30",children:["2. ",(0,i.jsx)(n.code,{children:"QueryClient"})," \uC0DD\uC131\uD558\uAE30"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"QueryClient"}),"\uB294 API \uC694\uCCAD\uC744 \uAD00\uB9AC\uD558\uB294 \uC778\uC2A4\uD134\uC2A4\uC785\uB2C8\uB2E4. ",(0,i.jsx)(n.code,{children:"query-client.ts"})," \uD30C\uC77C\uC740 ",(0,i.jsx)(n.code,{children:"@/shared/api/query-client.ts"}),"\uC5D0 \uC18D\uD574 \uC788\uC73C\uBA70, \uCFFC\uB9AC \uCE90\uC2F1\uC744 \uC704\uD574 \uD2B9\uC815 \uC124\uC815\uC73C\uB85C ",(0,i.jsx)(n.code,{children:"QueryClient"}),"\uB97C \uC0DD\uC131\uD569\uB2C8\uB2E4."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",metastring:'title="@/shared/api/query-client.ts"',children:'import { QueryClient } from "@tanstack/react-query";\n\nexport const queryClient = new QueryClient({\n  defaultOptions: {\n    queries: {\n      staleTime: 5 * 60 * 1000,\n      gcTime: 5 * 60 * 1000,\n    },\n  },\n});\n'})}),"\n",(0,i.jsx)(n.h2,{id:"\uCF54\uB4DC-\uC0DD\uC131",children:"\uCF54\uB4DC \uC0DD\uC131"}),"\n",(0,i.jsxs)(n.p,{children:["API \uCF54\uB4DC\uB97C \uC0DD\uC131\uD574\uC8FC\uB294 \uB3C4\uAD6C\uB4E4\uC774 \uC788\uC9C0\uB9CC, \uC774\uB7EC\uD55C \uBC29\uC2DD\uC740 \uC704\uC758 \uC608\uC81C \uCC98\uB7FC \uC9C1\uC811 \uCF54\uB4DC\uB97C \uC791\uC131\uD558\uB294 \uBC29\uBC95\uBCF4\uB2E4 \uC720\uC5F0\uC131\uC774 \uBD80\uC871\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uADF8\uB7EC\uB098 Swagger \uD30C\uC77C\uC774 \uC798 \uAD6C\uC131\uB418\uC5B4 \uC788\uACE0 \uC774\uB7EC\uD55C \uC790\uB3D9 \uC0DD\uC131 \uB3C4\uAD6C\uB97C \uC0AC\uC6A9\uD558\uB294 \uACBD\uC6B0, \uC0DD\uC131\uB41C \uCF54\uB4DC\uB97C ",(0,i.jsx)(n.code,{children:"@/shared/api"})," \uB514\uB809\uD1A0\uB9AC\uC5D0 \uB450\uC5B4 \uAD00\uB9AC\uD558\uB294 \uAC83\uC774 \uD6A8\uC728\uC801\uC77C \uC218 \uC788\uC2B5\uB2C8\uB2E4."]}),"\n",(0,i.jsx)(n.h2,{id:"react-query\uB97C-\uC870\uC9C1\uD654\uD558\uAE30-\uC704\uD55C-\uCD94\uAC00-\uC870\uC5B8",children:"React Query\uB97C \uC870\uC9C1\uD654\uD558\uAE30 \uC704\uD55C \uCD94\uAC00 \uC870\uC5B8"}),"\n",(0,i.jsx)(n.h3,{id:"api-\uD074\uB77C\uC774\uC5B8\uD2B8",children:"API \uD074\uB77C\uC774\uC5B8\uD2B8"}),"\n",(0,i.jsx)(n.p,{children:"\uACF5\uC720 \uB808\uC774\uC5B4\uC5D0\uC11C \uCEE4\uC2A4\uD140 API \uD074\uB77C\uC774\uC5B8\uD2B8 \uD074\uB798\uC2A4\uB97C \uC0AC\uC6A9\uD558\uBA74, \uD504\uB85C\uC81D\uD2B8 \uB0B4 API \uC791\uC5C5\uC744 \uC77C\uAD00\uC131 \uC788\uAC8C \uAD00\uB9AC\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC774\uB97C \uD1B5\uD574 \uB85C\uAE45, \uD5E4\uB354 \uC124\uC815, \uB370\uC774\uD130 \uC804\uC1A1 \uD615\uC2DD(JSON \uB610\uB294 XML \uB4F1)\uC744 \uD55C \uACF3\uC5D0\uC11C \uAD00\uB9AC\uD560 \uC218 \uC788\uAC8C \uB429\uB2C8\uB2E4. \uB610\uD55C \uC774 \uC811\uADFC \uBC29\uC2DD\uC740 API\uC640\uC758 \uC0C1\uD638\uC791\uC6A9\uC5D0 \uB300\uD55C \uBCC0\uACBD \uC0AC\uD56D\uC744 \uC27D\uAC8C \uBC18\uC601\uD560 \uC218 \uC788\uAC8C \uD558\uC5EC, \uD504\uB85C\uC81D\uD2B8\uC758 \uC720\uC9C0\uBCF4\uC218\uC131\uACFC \uAC1C\uBC1C \uD3B8\uC758\uC131\uC744 \uD06C\uAC8C \uD5A5\uC0C1\uC2DC\uD0B5\uB2C8\uB2E4."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",metastring:'title="@/shared/api/api-client.ts"',children:'import { API_URL } from "@/shared/config";\n\nexport class ApiClient {\n  private baseUrl: string;\n\n  constructor(url: string) {\n    this.baseUrl = url;\n  }\n\n  async handleResponse<TResult>(response: Response): Promise<TResult> {\n    if (!response.ok) {\n      throw new Error(`HTTP error! Status: ${response.status}`);\n    }\n\n    try {\n      return await response.json();\n    } catch (error) {\n      throw new Error("Error parsing JSON response");\n    }\n  }\n\n  public async get<TResult = unknown>(\n    endpoint: string,\n    queryParams?: Record<string, string | number>,\n  ): Promise<TResult> {\n    const url = new URL(endpoint, this.baseUrl);\n\n    if (queryParams) {\n      Object.entries(queryParams).forEach(([key, value]) => {\n        url.searchParams.append(key, value.toString());\n      });\n    }\n    const response = await fetch(url.toString(), {\n      method: "GET",\n      headers: {\n        "Content-Type": "application/json",\n      },\n    });\n\n    return this.handleResponse<TResult>(response);\n  }\n\n  public async post<TResult = unknown, TData = Record<string, unknown>>(\n    endpoint: string,\n    body: TData,\n  ): Promise<TResult> {\n    const response = await fetch(`${this.baseUrl}${endpoint}`, {\n      method: "POST",\n      headers: {\n        "Content-Type": "application/json",\n      },\n      body: JSON.stringify(body),\n    });\n\n    return this.handleResponse<TResult>(response);\n  }\n}\n\nexport const apiClient = new ApiClient(API_URL);\n'})}),"\n",(0,i.jsx)(n.h2,{id:"see-also",children:"\uCC38\uACE0 \uC790\uB8CC"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/ruslan4432013/fsd-react-query-example",children:"(GitHub) \uC0D8\uD50C \uD504\uB85C\uC81D\uD2B8"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://codesandbox.io/p/github/ruslan4432013/fsd-react-query-example/main",children:"(CodeSandbox) \uC0D8\uD50C \uD504\uB85C\uC81D\uD2B8"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://tkdodo.eu/blog/the-query-options-api",children:"\uCFFC\uB9AC \uD329\uD1A0\uB9AC\uC5D0 \uB300\uD558\uC5EC"})}),"\n"]})]})}function u(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},3663:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return o}});var s=t(5271);let i={},r=s.createContext(i);function o(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);
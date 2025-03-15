"use strict";(self.webpackChunk_feature_sliced_documentation=self.webpackChunk_feature_sliced_documentation||[]).push([["6952"],{1072:function(e,n,t){t.r(n),t.d(n,{default:()=>d,frontMatter:()=>o,metadata:()=>i,assets:()=>l,toc:()=>c,contentTitle:()=>a});var i=JSON.parse('{"id":"guides/tech/with-react-query","title":"Usage with React Query","description":"The problem of \u201Cwhere to put the keys\u201D","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/guides/tech/with-react-query.mdx","sourceDirName":"guides/tech","slug":"/guides/tech/with-react-query","permalink":"/documentation/uz/docs/guides/tech/with-react-query","draft":false,"unlisted":false,"editUrl":"https://github.com/feature-sliced/documentation/edit/master/i18n/en/docusaurus-plugin-content-docs/current/guides/tech/with-react-query.mdx","tags":[],"version":"current","lastUpdatedAt":1742062811000,"sidebarPosition":10,"frontMatter":{"sidebar_position":10},"sidebar":"guidesSidebar","previous":{"title":"Usage with NuxtJS","permalink":"/documentation/uz/docs/guides/tech/with-nuxtjs"},"next":{"title":"Usage with SvelteKit","permalink":"/documentation/uz/docs/guides/tech/with-sveltekit"}}'),s=t("2676"),r=t("3663");let o={sidebar_position:10},a="Usage with React Query",l={},c=[{value:"The problem of \u201Cwhere to put the keys\u201D",id:"the-problem-of-where-to-put-the-keys",level:2},{value:"Solution \u2014 break down by entities",id:"solution--break-down-by-entities",level:3},{value:"Alternative solution \u2014 keep it in shared",id:"alternative-solution--keep-it-in-shared",level:3},{value:"The problem of \u201CWhere to insert mutations?\u201D",id:"the-problem-of-where-to-insert-mutations",level:2},{value:"1. Define a custom hook in the <code>api</code> segment near the place of use",id:"1-define-a-custom-hook-in-the-api-segment-near-the-place-of-use",level:3},{value:"2. Define a mutation function somewhere else (Shared or Entities) and use <code>useMutation</code> directly in the component",id:"2-define-a-mutation-function-somewhere-else-shared-or-entities-and-use-usemutation-directly-in-the-component",level:3},{value:"Organization of requests",id:"organization-of-requests",level:2},{value:"Query factory",id:"query-factory",level:3},{value:"1. Creating a Query Factory",id:"1-creating-a-query-factory",level:3},{value:"2. Using Query Factory in application code",id:"2-using-query-factory-in-application-code",level:3},{value:"Benefits of using a Query Factory",id:"benefits-of-using-a-query-factory",level:3},{value:"Pagination",id:"pagination",level:2},{value:"1. Creating a function <code>getPosts</code>",id:"1-creating-a-function-getposts",level:3},{value:"2. Query factory for pagination",id:"2-query-factory-for-pagination",level:3},{value:"3. Use in application code",id:"3-use-in-application-code",level:3},{value:"<code>QueryProvider</code> for managing queries",id:"queryprovider-for-managing-queries",level:2},{value:"1. Creating a <code>QueryProvider</code>",id:"1-creating-a-queryprovider",level:3},{value:"2. Creating a <code>QueryClient</code>",id:"2-creating-a-queryclient",level:3},{value:"Code generation",id:"code-generation",level:2},{value:"Additional advice for organizing RQ",id:"additional-advice-for-organizing-rq",level:2},{value:"API Client",id:"api-client",level:3},{value:"See also",id:"see-also",level:2}];function u(e){let n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"usage-with-react-query",children:"Usage with React Query"})}),"\n",(0,s.jsx)(n.h2,{id:"the-problem-of-where-to-put-the-keys",children:"The problem of \u201Cwhere to put the keys\u201D"}),"\n",(0,s.jsx)(n.h3,{id:"solution--break-down-by-entities",children:"Solution \u2014 break down by entities"}),"\n",(0,s.jsx)(n.p,{children:"If the project already has a division into entities, and each request corresponds to a single entity,\nthe purest division will be by entity. In this case, we suggest using the following structure:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"\u2514\u2500\u2500 src/                                        #\n    \u251C\u2500\u2500 app/                                    #\n    |   ...                                     #\n    \u251C\u2500\u2500 pages/                                  #\n    |   ...                                     #\n    \u251C\u2500\u2500 entities/                               #\n    |     \u251C\u2500\u2500 {entity}/                         #\n    |    ...     \u2514\u2500\u2500 api/                       #\n    |                 \u251C\u2500\u2500 `{entity}.query`      # Query-factory where are the keys and functions\n    |                 \u251C\u2500\u2500 `get-{entity}`        # Entity getter function\n    |                 \u251C\u2500\u2500 `create-{entity}`     # Entity creation function\n    |                 \u251C\u2500\u2500 `update-{entity}`     # Entity update function\n    |                 \u251C\u2500\u2500 `delete-{entity}`     # Entity delete function\n    |                ...                        #\n    |                                           #\n    \u251C\u2500\u2500 features/                               #\n    |   ...                                     #\n    \u251C\u2500\u2500 widgets/                                #\n    |   ...                                     #\n    \u2514\u2500\u2500 shared/                                 #\n        ...                                     #\n"})}),"\n",(0,s.jsxs)(n.p,{children:["If there are connections between the entities (for example, the Country entity has a field-list of City entities),\nthen you can use the ",(0,s.jsx)(n.a,{href:"/docs/reference/public-api#public-api-for-cross-imports",children:"public API for cross-imports"})," or consider the alternative solution below."]}),"\n",(0,s.jsx)(n.h3,{id:"alternative-solution--keep-it-in-shared",children:"Alternative solution \u2014 keep it in shared"}),"\n",(0,s.jsx)(n.p,{children:"In cases where entity separation is not appropriate, the following structure can be considered:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"\u2514\u2500\u2500 src/                                        #\n   ...                                          #\n    \u2514\u2500\u2500 shared/                                 #\n          \u251C\u2500\u2500 api/                              #\n         ...   \u251C\u2500\u2500 `queries`                    # Query-factories\n               |      \u251C\u2500\u2500 `document.ts`         #\n               |      \u251C\u2500\u2500 `background-jobs.ts`  #\n               |     ...                        #\n               \u2514\u2500\u2500  index.ts                    #\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Then in ",(0,s.jsx)(n.code,{children:"@/shared/api/index.ts"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",metastring:'title="@/shared/api/index.ts"',children:'export { documentQueries } from "./queries/document";\n'})}),"\n",(0,s.jsx)(n.h2,{id:"the-problem-of-where-to-insert-mutations",children:"The problem of \u201CWhere to insert mutations?\u201D"}),"\n",(0,s.jsx)(n.p,{children:"It is not recommended to mix mutations with queries. There are two options:"}),"\n",(0,s.jsxs)(n.h3,{id:"1-define-a-custom-hook-in-the-api-segment-near-the-place-of-use",children:["1. Define a custom hook in the ",(0,s.jsx)(n.code,{children:"api"})," segment near the place of use"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",metastring:'title="@/features/update-post/api/use-update-title.ts"',children:"export const useUpdateTitle = () => {\n  const queryClient = useQueryClient();\n\n  return useMutation({\n    mutationFn: ({ id, newTitle }) =>\n      apiClient\n        .patch(`/posts/${id}`, { title: newTitle })\n        .then((data) => console.log(data)),\n\n    onSuccess: (newPost) => {\n      queryClient.setQueryData(postsQueries.ids(id), newPost);\n    },\n  });\n};\n"})}),"\n",(0,s.jsxs)(n.h3,{id:"2-define-a-mutation-function-somewhere-else-shared-or-entities-and-use-usemutation-directly-in-the-component",children:["2. Define a mutation function somewhere else (Shared or Entities) and use ",(0,s.jsx)(n.code,{children:"useMutation"})," directly in the component"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"const { mutateAsync, isPending } = useMutation({\n  mutationFn: postApi.createPost,\n});\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",metastring:'title="@/pages/post-create/ui/post-create-page.tsx"',children:'export const CreatePost = () => {\n  const { classes } = useStyles();\n  const [title, setTitle] = useState("");\n\n  const { mutate, isPending } = useMutation({\n    mutationFn: postApi.createPost,\n  });\n\n  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>\n    setTitle(e.target.value);\n  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {\n    e.preventDefault();\n    mutate({ title, userId: DEFAULT_USER_ID });\n  };\n\n  return (\n    <form className={classes.create_form} onSubmit={handleSubmit}>\n      <TextField onChange={handleChange} value={title} />\n      <LoadingButton type="submit" variant="contained" loading={isPending}>\n        Create\n      </LoadingButton>\n    </form>\n  );\n};\n'})}),"\n",(0,s.jsx)(n.h2,{id:"organization-of-requests",children:"Organization of requests"}),"\n",(0,s.jsx)(n.h3,{id:"query-factory",children:"Query factory"}),"\n",(0,s.jsx)(n.p,{children:"A query factory is an object where the key values are functions that return a list of query keys. Here's how to use it:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:'const keyFactory = {\n  all: () => ["entity"],\n  lists: () => [...postQueries.all(), "list"],\n};\n'})}),"\n",(0,s.jsxs)(n.admonition,{type:"info",children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"queryOptions"})," is a built-in utility in react-query@v5 (optional)"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"queryOptions({\n  queryKey,\n  ...options,\n});\n"})}),(0,s.jsxs)(n.p,{children:["For greater type safety, further compatibility with future versions of react-query, and easy access to functions and query keys,\nyou can use the built-in queryOptions function from \u201C@tanstack/react-query\u201D\n",(0,s.jsx)(n.a,{href:"https://tkdodo.eu/blog/the-query-options-api#queryoptions",children:"(More details here)"}),"."]})]}),"\n",(0,s.jsx)(n.h3,{id:"1-creating-a-query-factory",children:"1. Creating a Query Factory"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",metastring:'title="@/entities/post/api/post.queries.ts"',children:'import { keepPreviousData, queryOptions } from "@tanstack/react-query";\nimport { getPosts } from "./get-posts";\nimport { getDetailPost } from "./get-detail-post";\nimport { PostDetailQuery } from "./query/post.query";\n\nexport const postQueries = {\n  all: () => ["posts"],\n\n  lists: () => [...postQueries.all(), "list"],\n  list: (page: number, limit: number) =>\n    queryOptions({\n      queryKey: [...postQueries.lists(), page, limit],\n      queryFn: () => getPosts(page, limit),\n      placeholderData: keepPreviousData,\n    }),\n\n  details: () => [...postQueries.all(), "detail"],\n  detail: (query?: PostDetailQuery) =>\n    queryOptions({\n      queryKey: [...postQueries.details(), query?.id],\n      queryFn: () => getDetailPost({ id: query?.id }),\n      staleTime: 5000,\n    }),\n};\n'})}),"\n",(0,s.jsx)(n.h3,{id:"2-using-query-factory-in-application-code",children:"2. Using Query Factory in application code"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:'import { useParams } from "react-router-dom";\nimport { postApi } from "@/entities/post";\nimport { useQuery } from "@tanstack/react-query";\n\ntype Params = {\n  postId: string;\n};\n\nexport const PostPage = () => {\n  const { postId } = useParams<Params>();\n  const id = parseInt(postId || "");\n  const {\n    data: post,\n    error,\n    isLoading,\n    isError,\n  } = useQuery(postApi.postQueries.detail({ id }));\n\n  if (isLoading) {\n    return <div>Loading...</div>;\n  }\n\n  if (isError || !post) {\n    return <>{error?.message}</>;\n  }\n\n  return (\n    <div>\n      <p>Post id: {post.id}</p>\n      <div>\n        <h1>{post.title}</h1>\n        <div>\n          <p>{post.body}</p>\n        </div>\n      </div>\n      <div>Owner: {post.userId}</div>\n    </div>\n  );\n};\n'})}),"\n",(0,s.jsx)(n.h3,{id:"benefits-of-using-a-query-factory",children:"Benefits of using a Query Factory"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Request structuring:"})," A factory allows you to organize all API requests in one place, making your code more readable and maintainable."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Convenient access to queries and keys:"})," The factory provides convenient methods for accessing different types of queries and their keys."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Query Refetching Ability:"})," The factory allows easy refetching without the need to change query keys in different parts of the application."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"pagination",children:"Pagination"}),"\n",(0,s.jsxs)(n.p,{children:["In this section, we'll look at an example of the ",(0,s.jsx)(n.code,{children:"getPosts"})," function, which makes an API request to retrieve post entities using pagination."]}),"\n",(0,s.jsxs)(n.h3,{id:"1-creating-a-function-getposts",children:["1. Creating a function ",(0,s.jsx)(n.code,{children:"getPosts"})]}),"\n",(0,s.jsxs)(n.p,{children:["The getPosts function is located in the ",(0,s.jsx)(n.code,{children:"get-posts.ts"})," file, which is located in the ",(0,s.jsx)(n.code,{children:"api"})," segment"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",metastring:'title="@/pages/post-feed/api/get-posts.ts"',children:'import { apiClient } from "@/shared/api/base";\n\nimport { PostWithPaginationDto } from "./dto/post-with-pagination.dto";\nimport { PostQuery } from "./query/post.query";\nimport { mapPost } from "./mapper/map-post";\nimport { PostWithPagination } from "../model/post-with-pagination";\n\nconst calculatePostPage = (totalCount: number, limit: number) =>\n  Math.floor(totalCount / limit);\n\nexport const getPosts = async (\n  page: number,\n  limit: number,\n): Promise<PostWithPagination> => {\n  const skip = page * limit;\n  const query: PostQuery = { skip, limit };\n  const result = await apiClient.get<PostWithPaginationDto>("/posts", query);\n\n  return {\n    posts: result.posts.map((post) => mapPost(post)),\n    limit: result.limit,\n    skip: result.skip,\n    total: result.total,\n    totalPages: calculatePostPage(result.total, limit),\n  };\n};\n'})}),"\n",(0,s.jsx)(n.h3,{id:"2-query-factory-for-pagination",children:"2. Query factory for pagination"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"postQueries"})," query factory defines various query options for working with posts,\nincluding requesting a list of posts with a specific page and limit."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:'import { keepPreviousData, queryOptions } from "@tanstack/react-query";\nimport { getPosts } from "./get-posts";\n\nexport const postQueries = {\n  all: () => ["posts"],\n  lists: () => [...postQueries.all(), "list"],\n  list: (page: number, limit: number) =>\n    queryOptions({\n      queryKey: [...postQueries.lists(), page, limit],\n      queryFn: () => getPosts(page, limit),\n      placeholderData: keepPreviousData,\n    }),\n};\n'})}),"\n",(0,s.jsx)(n.h3,{id:"3-use-in-application-code",children:"3. Use in application code"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",metastring:'title="@/pages/home/ui/index.tsx"',children:'export const HomePage = () => {\n  const itemsOnScreen = DEFAULT_ITEMS_ON_SCREEN;\n  const [page, setPage] = usePageParam(DEFAULT_PAGE);\n  const { data, isFetching, isLoading } = useQuery(\n    postApi.postQueries.list(page, itemsOnScreen),\n  );\n  return (\n    <>\n      <Pagination\n        onChange={(_, page) => setPage(page)}\n        page={page}\n        count={data?.totalPages}\n        variant="outlined"\n        color="primary"\n      />\n      <Posts posts={data?.posts} />\n    </>\n  );\n};\n'})}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["The example is simplified, the full version is available on ",(0,s.jsx)(n.a,{href:"https://github.com/ruslan4432013/fsd-react-query-example",children:"GitHub"})]})}),"\n",(0,s.jsxs)(n.h2,{id:"queryprovider-for-managing-queries",children:[(0,s.jsx)(n.code,{children:"QueryProvider"})," for managing queries"]}),"\n",(0,s.jsxs)(n.p,{children:["In this guide, we will look at how to organize a ",(0,s.jsx)(n.code,{children:"QueryProvider"}),"."]}),"\n",(0,s.jsxs)(n.h3,{id:"1-creating-a-queryprovider",children:["1. Creating a ",(0,s.jsx)(n.code,{children:"QueryProvider"})]}),"\n",(0,s.jsxs)(n.p,{children:["The file ",(0,s.jsx)(n.code,{children:"query-provider.tsx"})," is located at the path ",(0,s.jsx)(n.code,{children:"@/app/providers/query-provider.tsx"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",metastring:'title="@/app/providers/query-provider.tsx"',children:'import { QueryClient, QueryClientProvider } from "@tanstack/react-query";\nimport { ReactQueryDevtools } from "@tanstack/react-query-devtools";\nimport { ReactNode } from "react";\n\ntype Props = {\n  children: ReactNode;\n  client: QueryClient;\n};\n\nexport const QueryProvider = ({ client, children }: Props) => {\n  return (\n    <QueryClientProvider client={client}>\n      {children}\n      <ReactQueryDevtools />\n    </QueryClientProvider>\n  );\n};\n'})}),"\n",(0,s.jsxs)(n.h3,{id:"2-creating-a-queryclient",children:["2. Creating a ",(0,s.jsx)(n.code,{children:"QueryClient"})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"QueryClient"})," is an instance used to manage API requests.\nThe ",(0,s.jsx)(n.code,{children:"query-client.ts"})," file is located at ",(0,s.jsx)(n.code,{children:"@/shared/api/query-client.ts"}),".\n",(0,s.jsx)(n.code,{children:"QueryClient"})," is created with certain settings for query caching."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",metastring:'title="@/shared/api/query-client.ts"',children:'import { QueryClient } from "@tanstack/react-query";\n\nexport const queryClient = new QueryClient({\n  defaultOptions: {\n    queries: {\n      staleTime: 5 * 60 * 1000,\n      gcTime: 5 * 60 * 1000,\n    },\n  },\n});\n'})}),"\n",(0,s.jsx)(n.h2,{id:"code-generation",children:"Code generation"}),"\n",(0,s.jsxs)(n.p,{children:["There are tools that can generate API code for you, but they are less flexible than the manual approach described above.\nIf your Swagger file is well-structured,\nand you're using one of these tools, it might make sense to generate all the code in the ",(0,s.jsx)(n.code,{children:"@/shared/api"})," directory."]}),"\n",(0,s.jsx)(n.h2,{id:"additional-advice-for-organizing-rq",children:"Additional advice for organizing RQ"}),"\n",(0,s.jsx)(n.h3,{id:"api-client",children:"API Client"}),"\n",(0,s.jsx)(n.p,{children:"Using a custom API client class in the shared layer,\nyou can standardize the configuration and work with the API in the project.\nThis allows you to manage logging,\nheaders and data exchange format (such as JSON or XML) from one place.\nThis approach makes it easier to maintain and develop the project because it simplifies changes and updates to interactions with the API."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",metastring:'title="@/shared/api/api-client.ts"',children:'import { API_URL } from "@/shared/config";\n\nexport class ApiClient {\n  private baseUrl: string;\n\n  constructor(url: string) {\n    this.baseUrl = url;\n  }\n\n  async handleResponse<TResult>(response: Response): Promise<TResult> {\n    if (!response.ok) {\n      throw new Error(`HTTP error! Status: ${response.status}`);\n    }\n\n    try {\n      return await response.json();\n    } catch (error) {\n      throw new Error("Error parsing JSON response");\n    }\n  }\n\n  public async get<TResult = unknown>(\n    endpoint: string,\n    queryParams?: Record<string, string | number>,\n  ): Promise<TResult> {\n    const url = new URL(endpoint, this.baseUrl);\n\n    if (queryParams) {\n      Object.entries(queryParams).forEach(([key, value]) => {\n        url.searchParams.append(key, value.toString());\n      });\n    }\n    const response = await fetch(url.toString(), {\n      method: "GET",\n      headers: {\n        "Content-Type": "application/json",\n      },\n    });\n\n    return this.handleResponse<TResult>(response);\n  }\n\n  public async post<TResult = unknown, TData = Record<string, unknown>>(\n    endpoint: string,\n    body: TData,\n  ): Promise<TResult> {\n    const response = await fetch(`${this.baseUrl}${endpoint}`, {\n      method: "POST",\n      headers: {\n        "Content-Type": "application/json",\n      },\n      body: JSON.stringify(body),\n    });\n\n    return this.handleResponse<TResult>(response);\n  }\n}\n\nexport const apiClient = new ApiClient(API_URL);\n'})}),"\n",(0,s.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/ruslan4432013/fsd-react-query-example",children:"(GitHub) Sample Project"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://codesandbox.io/p/github/ruslan4432013/fsd-react-query-example/main",children:"(CodeSandbox) Sample Project"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://tkdodo.eu/blog/the-query-options-api",children:"About the query factory"})}),"\n"]})]})}function d(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},3663:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return o}});var i=t(5271);let s={},r=i.createContext(s);function o(e){let n=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);
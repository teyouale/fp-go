"use strict";(self.webpackChunkfp_go_docs=self.webpackChunkfp_go_docs||[]).push([["4316"],{682(e,s,i){i.r(s),i.d(s,{metadata:()=>n,default:()=>p,frontMatter:()=>a,contentTitle:()=>c,toc:()=>d,assets:()=>o});var n=JSON.parse('{"id":"v2/utilities/pipe-flow","title":"Pipe & Flow","description":"Function composition for readable data transformations with left-to-right execution.","source":"@site/docs/v2/utilities/pipe-flow.md","sourceDirName":"v2/utilities","slug":"/v2/utilities/pipe-flow","permalink":"/fp-go/docs/v2/utilities/pipe-flow","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":20,"frontMatter":{"title":"Pipe & Flow","hide_title":true,"description":"Function composition for readable data transformations with left-to-right execution.","sidebar_position":20},"sidebar":"apiSidebar","previous":{"title":"Function Utilities","permalink":"/fp-go/docs/v2/utilities/function"},"next":{"title":"Compose","permalink":"/fp-go/docs/v2/utilities/compose"}}'),r=i(4848),t=i(8453),l=i(5811);let a={title:"Pipe & Flow",hide_title:!0,description:"Function composition for readable data transformations with left-to-right execution.",sidebar_position:20},c,o={},d=[{value:"Pipe - Immediate Execution",id:"pipe---immediate-execution",level:3},{value:"Flow - Reusable Pipeline",id:"flow---reusable-pipeline",level:3},{value:"Data Processing Pipeline",id:"data-processing-pipeline",level:3},{value:"String Transformation",id:"string-transformation",level:3},{value:"API Request Processing",id:"api-request-processing",level:3},{value:"Validation Chain",id:"validation-chain",level:3},{value:"Complex Product Processing",id:"complex-product-processing",level:3},{value:"Error Handling Pipeline",id:"error-handling-pipeline",level:3},{value:"Pipe vs Flow",id:"pipe-vs-flow",level:3},{value:"Optional Transformation",id:"optional-transformation",level:3},{value:"Array Processing Pattern",id:"array-processing-pattern",level:3},{value:"Conditional Pipeline",id:"conditional-pipeline",level:3}];function h(e){let s={code:"code",h3:"h3",hr:"hr",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l.zY,{eyebrow:"Reference \xb7 Utilities",title:"Pipe & Flow",lede:"Function composition for readable data transformations. Pipe and Flow enable left-to-right composition, making code more readable than nested function calls.",meta:[{label:"Package",value:"github.com/IBM/fp-go/v2/function"},{label:"Operations",value:"Pipe2-9, Flow2-9"}]}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(l.wn,{num:"1",title:"Core API",children:(0,r.jsx)(l.vr,{children:(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Function"}),(0,r.jsx)(s.th,{children:"Signature"}),(0,r.jsx)(s.th,{children:"Description"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"Pipe2"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"func Pipe2[A, B, C any](A, func(A) B, func(B) C) C"})}),(0,r.jsx)(s.td,{children:"Apply value through 2 functions"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"Pipe3"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"func Pipe3[A, B, C, D any](A, func(A) B, func(B) C, func(C) D) D"})}),(0,r.jsx)(s.td,{children:"Apply through 3 functions"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"Pipe4-9"})}),(0,r.jsx)(s.td,{children:"Similar pattern"}),(0,r.jsx)(s.td,{children:"Up to 9 functions"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"Flow2"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"func Flow2[A, B, C any](func(A) B, func(B) C) func(A) C"})}),(0,r.jsx)(s.td,{children:"Compose 2 functions"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"Flow3"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"func Flow3[A, B, C, D any](func(A) B, func(B) C, func(C) D) func(A) D"})}),(0,r.jsx)(s.td,{children:"Compose 3 functions"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"Flow4-9"})}),(0,r.jsx)(s.td,{children:"Similar pattern"}),(0,r.jsx)(s.td,{children:"Up to 9 functions"})]})]})]})})}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsxs)(l.wn,{num:"2",title:"Usage Examples",children:[(0,r.jsx)(s.h3,{id:"pipe---immediate-execution",children:"Pipe - Immediate Execution"}),(0,r.jsx)(l.av,{file:"pipe.go",children:`import F "github.com/IBM/fp-go/v2/function"

// Instead of: g(f(x))
result := F.Pipe2(
  x,
  f,  // First transformation
  g,  // Second transformation
)

// Instead of: h(g(f(x)))
result := F.Pipe3(
  x,
  f,
  g,
  h,
)

// Up to Pipe9 available
result := F.Pipe5(x, f1, f2, f3, f4, f5)
`}),(0,r.jsx)(s.h3,{id:"flow---reusable-pipeline",children:"Flow - Reusable Pipeline"}),(0,r.jsx)(l.av,{file:"flow.go",children:`// Create composed function
transform := F.Flow2(
  f,  // A -> B
  g,  // B -> C
)   // Returns: A -> C

// Use later
result := transform(x)

// Compose multiple functions
pipeline := F.Flow4(
  parse,      // string -> int
  validate,   // int -> Result[int]
  transform,  // Result[int] -> Result[string]
  format,     // Result[string] -> string
)

output := pipeline(input)
`}),(0,r.jsx)(s.h3,{id:"data-processing-pipeline",children:"Data Processing Pipeline"}),(0,r.jsx)(l.av,{file:"data_pipeline.go",children:`import (
  A "github.com/IBM/fp-go/v2/array"
  O "github.com/IBM/fp-go/v2/option"
)

type User struct {
  Name  string
  Age   int
  Email string
}

users := []User{
  {Name: "Alice", Age: 30, Email: "alice@example.com"},
  {Name: "Bob", Age: 17, Email: ""},
  {Name: "Charlie", Age: 25, Email: "charlie@example.com"},
}

// Process users: filter adults, extract emails, remove empty
emails := F.Pipe3(
  users,
  A.Filter(func(u User) bool { return u.Age >= 18 }),
  A.Map(func(u User) string { return u.Email }),
  A.Filter(func(e string) bool { return e != "" }),
)
// []string{"alice@example.com", "charlie@example.com"}
`}),(0,r.jsx)(s.h3,{id:"string-transformation",children:"String Transformation"}),(0,r.jsx)(l.av,{file:"string.go",children:`import S "github.com/IBM/fp-go/v2/string"

// Clean and format string
cleanString := F.Flow3(
  strings.TrimSpace,
  strings.ToLower,
  func(s string) string {
      return strings.ReplaceAll(s, " ", "-")
  },
)

slug := cleanString("  Hello World  ")
// "hello-world"
`}),(0,r.jsx)(s.h3,{id:"api-request-processing",children:"API Request Processing"}),(0,r.jsx)(l.av,{file:"api.go",children:`type Request struct {
  Body string
}

type Response struct {
  Status int
  Data   string
}

// Create processing pipeline
processRequest := F.Flow4(
  parseBody,      // Request -> Result[Data]
  validateData,   // Result[Data] -> Result[Data]
  transformData,  // Result[Data] -> Result[string]
  formatResponse, // Result[string] -> Response
)

// Use pipeline
response := processRequest(request)
`}),(0,r.jsx)(s.h3,{id:"validation-chain",children:"Validation Chain"}),(0,r.jsx)(l.av,{file:"validation.go",children:`import R "github.com/IBM/fp-go/v2/result"

type ValidationError struct {
  Field   string
  Message string
}

// Compose validators
validateUser := F.Flow3(
  validateEmail,              // User -> Result[User]
  R.Chain(validateAge),       // Result[User] -> Result[User]
  R.Chain(validateName),      // Result[User] -> Result[User]
)

result := validateUser(user)
// Result[User] - Success or first error
`}),(0,r.jsx)(s.h3,{id:"complex-product-processing",children:"Complex Product Processing"}),(0,r.jsx)(l.av,{file:"products.go",children:`type Product struct {
  ID    int
  Name  string
  Price float64
  Tags  []string
}

// Process products
result := F.Pipe5(
  products,
  // Filter by price range
  A.Filter(func(p Product) bool {
      return p.Price >= 10 && p.Price <= 100
  }),
  // Sort by price
  A.Sort(productPriceOrd),
  // Add discount
  A.Map(func(p Product) Product {
      p.Price = p.Price * 0.9
      return p
  }),
  // Extract names
  A.Map(func(p Product) string { return p.Name }),
  // Take first 10
  A.Slice(0, 10),
)
`}),(0,r.jsx)(s.h3,{id:"error-handling-pipeline",children:"Error Handling Pipeline"}),(0,r.jsx)(l.av,{file:"error_handling.go",children:`// Safe division with validation
safeDivide := F.Flow3(
  // Validate denominator
  func(args [2]int) R.Result[[2]int] {
      if args[1] == 0 {
          return R.Error[[2]int](errors.New("division by zero"))
      }
      return R.Success(args)
  },
  // Perform division
  R.Map(func(args [2]int) float64 {
      return float64(args[0]) / float64(args[1])
  }),
  // Round result
  R.Map(func(f float64) float64 {
      return math.Round(f*100) / 100
  }),
)

result := safeDivide([2]int{10, 3})
// Success(3.33)
`})]}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsxs)(l.wn,{num:"3",title:"Common Patterns",children:[(0,r.jsx)(s.h3,{id:"pipe-vs-flow",children:"Pipe vs Flow"}),(0,r.jsx)(l.av,{file:"comparison.go",children:`// Pipe - immediate execution with value
result := F.Pipe3(
  initialValue,
  step1,
  step2,
  step3,
)

// Flow - create reusable pipeline
pipeline := F.Flow3(
  step1,
  step2,
  step3,
)

// Use multiple times
result1 := pipeline(value1)
result2 := pipeline(value2)
`}),(0,r.jsx)(s.h3,{id:"optional-transformation",children:"Optional Transformation"}),(0,r.jsx)(l.av,{file:"optional.go",children:`// Transform if present
result := F.Pipe3(
  maybeValue,
  O.Map(transform),
  O.GetOrElse(F.Constant(defaultValue)),
)
`}),(0,r.jsx)(s.h3,{id:"array-processing-pattern",children:"Array Processing Pattern"}),(0,r.jsx)(l.av,{file:"array_pattern.go",children:`// Filter, map, reduce pattern
total := F.Pipe3(
  items,
  A.Filter(predicate),
  A.Map(extract),
  A.Reduce(sum, 0),
)
`}),(0,r.jsx)(s.h3,{id:"conditional-pipeline",children:"Conditional Pipeline"}),(0,r.jsx)(l.av,{file:"conditional.go",children:`// Different paths based on condition
process := func(useAdvanced bool) func(Data) Result {
  if useAdvanced {
      return F.Flow3(validate, advancedTransform, format)
  }
  return F.Flow2(validate, simpleTransform)
}

result := process(true)(data)
`})]}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsxs)(l.Pq,{type:"info",children:[(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"When to Use"}),":"]}),(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Pipe"}),": When you have a value and want to transform it immediately"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Flow"}),": When you want to create a reusable transformation pipeline"]}),"\n"]})]}),"\n",(0,r.jsx)(l.Pq,{type:"info",children:(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Readability"}),": Pipe and Flow make code more readable by showing the transformation flow from left to right, matching how we naturally read code."]})}),"\n",(0,r.jsx)(l.Pq,{type:"warn",children:(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Performance"}),": Each Pipe/Flow call has minimal overhead. For performance-critical code with simple transformations, direct function calls may be faster."]})}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(l.is,{prev:{to:"/docs/v2/utilities/ord",title:"Ord (Ordering)"},next:{to:"/docs/v2/collections/nonempty-array",title:"NonEmpty Array"}})]})}function p(e={}){let{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},5811(e,s,i){i.d(s,{Pq:()=>w,eM:()=>A,hg:()=>y,_1:()=>F,av:()=>b,Gs:()=>P,vr:()=>C,x7:()=>u,bY:()=>R,wn:()=>j,zY:()=>p,ju:()=>m,BQ:()=>x,is:()=>M});var n=i(4848),r=i(6540);let t="codeTag_uQ6s",l="warn_PIJZ",a="benchNum_PicT",c="api_M0YO",o="pagerLink_hQ8Y",d="pagerLbl_CteO",h="pagerTtl_t0em";function p({eyebrow:e,title:s,titleAccent:i,lede:r,meta:t}){return(0,n.jsxs)("header",{className:"head_Sp2B",children:[(0,n.jsxs)("div",{className:"headLeft_aDUD",children:[e&&(0,n.jsx)("div",{className:"eyebrow__SSv",children:e}),(0,n.jsxs)("h1",{className:"headTitle_xWjG",children:[s,i?(0,n.jsxs)(n.Fragment,{children:[" ",(0,n.jsx)("em",{children:i})]}):null]}),r&&(0,n.jsx)("p",{className:"lede_Ltdj",children:r})]}),t&&t.length>0&&(0,n.jsx)("aside",{className:"headMeta_kmCF",children:t.map((e,s)=>(0,n.jsxs)("div",{className:"metaRow_drwK",children:[(0,n.jsx)("span",{className:"metaK_SNLg",children:e.label}),(0,n.jsx)("span",{className:"metaV_zAp5",children:e.value})]},s))})]})}function u({children:e}){return(0,n.jsx)("span",{className:"pill_Lzl6",children:e})}function m({children:e}){return(0,n.jsx)("div",{className:"tldr_mz3p",children:e})}function x({label:e,value:s,accent:i,unit:r,description:t,variant:l="default",prose:a}){return(0,n.jsxs)("div",{className:`tldrCard_nSap ${"up"===l?"up_ip1p":"down"===l?"down_x6We":""}`,children:[e&&(0,n.jsx)("div",{className:"tldrK_kP7m",children:e}),(0,n.jsxs)("div",{className:`tldrV_gUPe ${a?"tldrVProse_sV_2":""}`,children:[s,i?(0,n.jsx)("em",{children:i}):null,r?(0,n.jsx)("small",{children:r}):null]}),t&&(0,n.jsx)("div",{className:"tldrD_kfCX",children:t})]})}function j({id:e,number:s,title:i,titleAccent:r,tag:t,lede:l,children:a}){return(0,n.jsxs)("section",{className:"section_B_ST",children:[(0,n.jsxs)("div",{className:"sectionHead_oGCN",children:[(0,n.jsxs)("div",{className:"sectionHeadLeft_bfh9",children:[s&&(0,n.jsx)("span",{className:"sectionNum_qiYt",children:s}),(0,n.jsxs)("h2",{className:"sectionTitle__6nw",id:e,children:[i,r?(0,n.jsxs)(n.Fragment,{children:[" ",(0,n.jsx)("em",{children:r})]}):null]})]}),t&&(0,n.jsx)("span",{className:"sectionTag_se22",children:t})]}),l&&(0,n.jsx)("p",{className:"sectionLede_yuVk",children:l}),a]})}let f=({size:e=14,className:s})=>(0,n.jsx)("svg",{width:e,height:e,viewBox:"0 0 32 32",fill:"currentColor",className:s,"aria-hidden":"true",children:(0,n.jsx)("path",{d:"M13 24l-9-9 1.4-1.4L13 21.2 26.6 7.6 28 9z"})}),g=({size:e=14,className:s})=>(0,n.jsx)("svg",{width:e,height:e,viewBox:"0 0 32 32",fill:"currentColor",className:s,"aria-hidden":"true",children:(0,n.jsx)("path",{d:"M28 10v18H10V10h18m0-2H10a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2z"})}),v=({size:e=12,className:s})=>(0,n.jsx)("svg",{width:e,height:e,viewBox:"0 0 32 32",fill:"currentColor",className:s,"aria-hidden":"true",children:(0,n.jsx)("path",{d:"M18 6L16.6 7.4 24.2 15H4v2h20.2l-7.6 7.6L18 26l10-10z"})}),N=({size:e=12,className:s})=>(0,n.jsx)("svg",{width:e,height:e,viewBox:"0 0 32 32",fill:"currentColor",className:s,"aria-hidden":"true",children:(0,n.jsx)("path",{d:"M14 26l1.4-1.4L7.8 17H28v-2H7.8l7.6-7.6L14 6 4 16z"})});function b({file:e,status:s,copy:i=!0,children:a}){let c=(0,r.useRef)(null),[o,d]=(0,r.useState)(!1);return(0,n.jsxs)("div",{className:"codeCard_fiIG",children:[(0,n.jsxs)("div",{className:"codeBar_SZ78",children:[(0,n.jsx)("span",{className:"codeDot_JDOV"}),e&&(0,n.jsx)("span",{className:"codeFile_uZDd",children:e}),(0,n.jsx)("span",{className:"codeSpacer_nRmZ"}),s?"tested"===s?(0,n.jsx)("span",{className:`${t} ok_rUJx`,children:"tested"}):"warn"===s?(0,n.jsx)("span",{className:`${t} ${l}`,children:"caveat"}):"note"===s?(0,n.jsx)("span",{className:t,children:"note"}):"string"==typeof s?(0,n.jsx)("span",{className:t,children:s}):s:null,i&&(0,n.jsx)("button",{type:"button",className:"codeCopy_fKPb",onClick:()=>{if(!c.current)return;let e=c.current.innerText;"u">typeof navigator&&navigator.clipboard&&navigator.clipboard.writeText(e).then(()=>{d(!0),setTimeout(()=>d(!1),1200)})},"aria-label":"Copy code",children:o?"Copied":(0,n.jsx)(g,{})})]}),(0,n.jsx)("pre",{ref:c,className:"codeBlock_oEWX",children:a})]})}let _={info:({size:e=18,className:s})=>(0,n.jsxs)("svg",{width:e,height:e,viewBox:"0 0 32 32",fill:"currentColor",className:s,"aria-hidden":"true",children:[(0,n.jsx)("path",{d:"M16 2A14 14 0 1 0 30 16 14 14 0 0 0 16 2zm0 26a12 12 0 1 1 12-12 12 12 0 0 1-12 12z"}),(0,n.jsx)("path",{d:"M16 14h-2v2h1v6h-1v2h4v-2h-1v-8zm-.5-5a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 15.5 9z"})]}),warn:({size:e=18,className:s})=>(0,n.jsxs)("svg",{width:e,height:e,viewBox:"0 0 32 32",fill:"currentColor",className:s,"aria-hidden":"true",children:[(0,n.jsx)("path",{d:"M16 23a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 16 23zM15 13h2v8h-2z"}),(0,n.jsx)("path",{d:"M28.7 26.31L17.36 4.27a1.51 1.51 0 0 0-2.72 0L3.3 26.31a1.5 1.5 0 0 0 1.36 2.19h22.69a1.5 1.5 0 0 0 1.35-2.19z"})]}),success:f};function w({type:e="info",title:s,children:i}){let r=_[e];return(0,n.jsxs)("div",{className:`callout_yWfv ${"warn"===e?l:"success"===e?"success_D78d":""}`,children:[(0,n.jsx)("span",{className:"calloutIcon_hdwU",children:(0,n.jsx)(r,{size:18})}),(0,n.jsxs)("div",{className:"calloutBody_Qz4I",children:[s&&(0,n.jsx)("strong",{className:"calloutTitle_MXy4",children:s}),i]})]})}function P({children:e}){return(0,n.jsx)("div",{className:"compare_WfXa",children:e})}function F({kind:e,title:s,pill:i,children:r}){return(0,n.jsxs)("div",{className:`compareCol_nZe9 ${"bad"===e?"bad_pZ5b":"good_EJeo"}`,children:[(0,n.jsxs)("div",{className:"compareHead_vAhW",children:[(0,n.jsx)("span",{children:s??("bad"===e?"Before":"After")}),i&&(0,n.jsx)("span",{className:"comparePill_fmmx",children:i})]}),(0,n.jsx)("div",{className:"compareBody_hP62",children:r})]})}function y({title:e,command:s,columns:i,rows:r}){let[t,l,c,o,d]=i??["Variant","Speed","ns/op","B/op","\u0394"];return(0,n.jsxs)("div",{className:"bench_zMa2",children:[(0,n.jsxs)("div",{className:"benchHead_q6K3",children:[(0,n.jsx)("span",{children:e}),s&&(0,n.jsxs)("span",{className:"benchCmd_iUFI",children:[(0,n.jsx)("span",{className:"benchPrompt_LRr4",children:"$"}),s]})]}),(0,n.jsxs)("table",{className:"benchTable_u8XZ",children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:t}),(0,n.jsx)("th",{style:{width:"40%"},children:l}),(0,n.jsx)("th",{className:a,children:c}),(0,n.jsx)("th",{className:a,children:o}),(0,n.jsx)("th",{className:a,children:d})]})}),(0,n.jsx)("tbody",{children:r.map((e,s)=>{let i="win"===e.barKind?"win_PjNM":"lose"===e.barKind?"lose_A9dr":"",r="good"===e.deltaKind?"deltaGood_dYlm":"bad"===e.deltaKind?"deltaBad_yHEA":a;return(0,n.jsxs)("tr",{className:e.winner?"benchWinner_jDc2":void 0,children:[(0,n.jsx)("td",{className:"benchLabel_uFhm",children:e.label}),(0,n.jsx)("td",{children:null!=e.bar&&(0,n.jsx)("span",{className:"bar_jZ6H",children:(0,n.jsx)("span",{className:"barTrack_lefl",children:(0,n.jsx)("span",{className:`barFill_bMgr ${i}`,style:{width:`${100*Math.max(0,Math.min(1,e.bar))}%`}})})})}),(0,n.jsx)("td",{className:a,children:e.nsOp}),(0,n.jsx)("td",{className:a,children:e.bOp}),(0,n.jsx)("td",{className:r,children:e.delta})]},s)})})]})]})}function C({columns:e,rows:s,children:i}){if(i)return(0,n.jsx)("div",{className:c,children:i});let[r,t,l]=e??["Symbol","Signature","Since"];return(0,n.jsx)("div",{className:c,children:(0,n.jsxs)("table",{className:"apiTable_kmi_",children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:r}),(0,n.jsx)("th",{children:t}),(0,n.jsx)("th",{children:l})]})}),(0,n.jsx)("tbody",{children:s?.map((e,s)=>(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:e.symbol})}),(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:e.signature}),e.description&&(0,n.jsx)("div",{className:"apiDesc__siK",children:e.description})]}),(0,n.jsx)("td",{children:e.since&&(0,n.jsx)("code",{children:e.since})})]},s))})]})})}function A({status:e,children:s}){return(0,n.jsx)(n.Fragment,{})}function R({title:e="Steps",items:s,children:i}){let t,l=(t=s||(i?r.Children.toArray(i).filter(e=>r.isValidElement(e)).map(e=>({label:e.props.children,impact:e.props.status,done:!1})):[])).filter(e=>e.done).length;return(0,n.jsxs)("div",{className:"check_Z_XE",children:[(0,n.jsxs)("div",{className:"checkHead__B8i",children:[(0,n.jsx)("span",{children:e}),s&&(0,n.jsxs)("span",{children:[l," / ",t.length," complete"]})]}),(0,n.jsx)("ul",{className:"checkList_ziWk",children:t.map((e,s)=>(0,n.jsxs)("li",{className:`checkItem_jgfw ${e.done?"done_rLON":""}`,children:[(0,n.jsx)("span",{className:"checkBox_TriO",children:e.done&&(0,n.jsx)(f,{size:10})}),(0,n.jsx)("span",{className:"checkLbl_IWQU",children:e.label}),e.impact&&(0,n.jsx)("span",{className:"checkImpact_BaeN",children:e.impact})]},s))})]})}var B=i(5310);function M({prev:e,next:s}){return(0,n.jsxs)("nav",{className:"pager_oMm2",children:[e?(0,n.jsxs)(B.A,{to:e.to,className:o,children:[(0,n.jsxs)("span",{className:d,children:[(0,n.jsx)(N,{})," ",e.label??"Previous"]}),(0,n.jsx)("span",{className:h,children:e.title})]}):(0,n.jsx)("span",{}),s?(0,n.jsxs)(B.A,{to:s.to,className:`${o} next_PLI2`,children:[(0,n.jsxs)("span",{className:d,children:[s.label??"Next"," ",(0,n.jsx)(v,{})]}),(0,n.jsx)("span",{className:h,children:s.title})]}):(0,n.jsx)("span",{})]})}},8453(e,s,i){i.d(s,{R:()=>l,x:()=>a});var n=i(6540);let r={},t=n.createContext(r);function l(e){let s=n.useContext(t);return n.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),n.createElement(t.Provider,{value:s},e.children)}}}]);
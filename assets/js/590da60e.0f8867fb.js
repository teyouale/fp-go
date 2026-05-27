"use strict";(self.webpackChunkfp_go_docs=self.webpackChunkfp_go_docs||[]).push([["3834"],{4288(e,i,s){s.r(i),s.d(i,{metadata:()=>n,default:()=>u,frontMatter:()=>l,contentTitle:()=>c,toc:()=>o,assets:()=>d});var n=JSON.parse('{"id":"v2/utilities/bind-curry","title":"Bind & Curry","description":"Partial application and currying utilities for creating specialized functions in fp-go","source":"@site/docs/v2/utilities/bind-curry.md","sourceDirName":"v2/utilities","slug":"/v2/utilities/bind-curry","permalink":"/fp-go/docs/v2/utilities/bind-curry","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":21,"frontMatter":{"title":"Bind & Curry","hide_title":true,"description":"Partial application and currying utilities for creating specialized functions in fp-go","sidebar_position":21},"sidebar":"apiSidebar","previous":{"title":"Compose","permalink":"/fp-go/docs/v2/utilities/compose"},"next":{"title":"Predicate","permalink":"/fp-go/docs/v2/utilities/predicate"}}'),t=s(4848),r=s(8453),a=s(5811);let l={title:"Bind & Curry",hide_title:!0,description:"Partial application and currying utilities for creating specialized functions in fp-go",sidebar_position:21},c,d={},o=[];function h(e){let i={a:"a",code:"code",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.zY,{eyebrow:"v2 \xb7 Utilities",title:"Bind & Curry",titleAccent:"Partial Application",lede:"Bind and curry functions allow you to fix some arguments of a function, creating specialized versions with fewer parameters.",meta:[{label:"Package",value:"function"},{label:"Since",value:"v2.0.0"},{label:"Technique",value:"Partial Application"}]}),"\n",(0,t.jsx)(i.hr,{}),"\n",(0,t.jsxs)(a.wn,{num:"1",title:"Overview",children:[(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"Partial application"})," is the technique of fixing some arguments of a function, producing a new function with fewer parameters."]}),(0,t.jsx)(i.p,{children:(0,t.jsx)(i.strong,{children:"Key Concepts:"})}),(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Bind1st"}),": Fix the first argument"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Bind2nd"}),": Fix the second argument"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Currying"}),": Transform multi-argument function into chain of single-argument functions"]}),"\n"]}),(0,t.jsx)(a.Pq,{type:"info",children:(0,t.jsx)(i.p,{children:"Partial application is useful for creating specialized versions of generic functions, reducing code duplication."})})]}),"\n",(0,t.jsx)(i.hr,{}),"\n",(0,t.jsxs)(a.wn,{num:"2",title:"Bind1st - Fix First Argument",children:[(0,t.jsx)(i.p,{children:"Fix the first argument of a two-argument function:"}),(0,t.jsx)(a.av,{file:"bind_first.go",tag:"example",children:`import F "github.com/IBM/fp-go/function"

// Original two-argument function
divide := func(a, b int) int {
  return a / b
}

// Fix first argument to 10
divideBy10 := F.Bind1st(divide, 10)

// Now it's a single-argument function
divideBy10(2)  // 5  (10 / 2)
divideBy10(5)  // 2  (10 / 5)
divideBy10(1)  // 10 (10 / 1)

// Equivalent to:
divide(10, 2)  // 5
divide(10, 5)  // 2
divide(10, 1)  // 10`})]}),"\n",(0,t.jsx)(i.hr,{}),"\n",(0,t.jsxs)(a.wn,{num:"3",title:"Bind2nd - Fix Second Argument",children:[(0,t.jsx)(i.p,{children:"Fix the second argument of a two-argument function:"}),(0,t.jsx)(a.av,{file:"bind_second.go",tag:"example",children:`import F "github.com/IBM/fp-go/function"

// Original two-argument function
divide := func(a, b int) int {
  return a / b
}

// Fix second argument to 10
divideTenBy := F.Bind2nd(divide, 10)

// Now it's a single-argument function
divideTenBy(100)  // 10  (100 / 10)
divideTenBy(50)   // 5   (50 / 10)
divideTenBy(20)   // 2   (20 / 10)

// Equivalent to:
divide(100, 10)  // 10
divide(50, 10)   // 5
divide(20, 10)   // 2`})]}),"\n",(0,t.jsx)(i.hr,{}),"\n",(0,t.jsxs)(a.wn,{num:"4",title:"String Operations",children:[(0,t.jsx)(i.p,{children:"Create specialized string functions:"}),(0,t.jsx)(a.av,{file:"bind_strings.go",tag:"example",children:`import (
  F "github.com/IBM/fp-go/function"
  "strings"
)

// Generic string operation
contains := func(haystack, needle string) bool {
  return strings.Contains(haystack, needle)
}

// Create specialized checkers
hasAt := F.Bind2nd(contains, "@")
hasDot := F.Bind2nd(contains, ".")

// Use specialized functions
hasAt("user@example.com")   // true
hasAt("username")           // false

hasDot("file.txt")          // true
hasDot("filename")          // false

// Combine for email validation
isEmail := func(s string) bool {
  return hasAt(s) && hasDot(s)
}

isEmail("user@example.com")  // true
isEmail("invalid")           // false`})]}),"\n",(0,t.jsx)(i.hr,{}),"\n",(0,t.jsxs)(a.wn,{num:"5",title:"API Client Example",children:[(0,t.jsx)(i.p,{children:"Create specialized API request functions:"}),(0,t.jsx)(a.av,{file:"bind_api.go",tag:"example",children:`type APIClient struct {
  BaseURL string
  Token   string
}

type Response struct {
  Status int
  Body   string
}

// Generic request function
func makeRequest(client *APIClient, endpoint string) Response {
  url := client.BaseURL + endpoint
  // Make HTTP request with client.Token
  return Response{Status: 200, Body: "..."}
}

// Create client
client := &APIClient{
  BaseURL: "https://api.example.com",
  Token:   "secret-token",
}

// Create specialized request function
request := F.Bind1st(makeRequest, client)

// Use with different endpoints
users := request("/users")
posts := request("/posts")
comments := request("/comments")

// Much cleaner than:
// makeRequest(client, "/users")
// makeRequest(client, "/posts")
// makeRequest(client, "/comments")`})]}),"\n",(0,t.jsx)(i.hr,{}),"\n",(0,t.jsxs)(a.wn,{num:"6",title:"Configuration Pattern",children:[(0,t.jsx)(i.p,{children:"Fix configuration for processing functions:"}),(0,t.jsx)(a.av,{file:"bind_config.go",tag:"example",children:`type Config struct {
  Env       string
  Debug     bool
  MaxRetries int
}

type Data struct {
  ID   int
  Name string
}

type Result struct {
  Success bool
  Output  string
}

func processWithConfig(config Config, data Data) Result {
  // Process data using config settings
  if config.Debug {
      fmt.Printf("Processing %s in %s
", data.Name, config.Env)
  }
  return Result{Success: true, Output: data.Name}
}

// Create production processor
prodConfig := Config{
  Env:        "production",
  Debug:      false,
  MaxRetries: 3,
}
processInProd := F.Bind1st(processWithConfig, prodConfig)

// Create development processor
devConfig := Config{
  Env:        "development",
  Debug:      true,
  MaxRetries: 1,
}
processInDev := F.Bind1st(processWithConfig, devConfig)

// Process different data with same config
data1 := Data{ID: 1, Name: "Alice"}
data2 := Data{ID: 2, Name: "Bob"}

prodResult1 := processInProd(data1)
prodResult2 := processInProd(data2)

devResult1 := processInDev(data1)
devResult2 := processInDev(data2)`})]}),"\n",(0,t.jsx)(i.hr,{}),"\n",(0,t.jsxs)(a.wn,{num:"7",title:"Array Operations",children:[(0,t.jsx)(i.p,{children:"Create specialized array filters and mappers:"}),(0,t.jsx)(a.av,{file:"bind_array.go",tag:"example",children:`import (
  A "github.com/IBM/fp-go/array"
  F "github.com/IBM/fp-go/function"
)

// Generic comparison function
greaterThan := func(threshold, value int) bool {
  return value > threshold
}

// Create specialized filters
isGreaterThan10 := F.Bind1st(greaterThan, 10)
isGreaterThan100 := F.Bind1st(greaterThan, 100)

numbers := []int{5, 15, 50, 150, 200}

// Filter with specialized predicates
above10 := F.Pipe2(
  numbers,
  A.Filter(isGreaterThan10),
)
// []int{15, 50, 150, 200}

above100 := F.Pipe2(
  numbers,
  A.Filter(isGreaterThan100),
)
// []int{150, 200}

// Generic multiply function
multiply := func(factor, value int) int {
  return factor * value
}

// Create specialized mappers
double := F.Bind1st(multiply, 2)
triple := F.Bind1st(multiply, 3)

doubled := F.Pipe2(numbers, A.Map(double))
// []int{10, 30, 100, 300, 400}

tripled := F.Pipe2(numbers, A.Map(triple))
// []int{15, 45, 150, 450, 600}`})]}),"\n",(0,t.jsx)(i.hr,{}),"\n",(0,t.jsxs)(a.wn,{num:"8",title:"Logging and Middleware",children:[(0,t.jsx)(i.p,{children:"Create specialized logging functions:"}),(0,t.jsx)(a.av,{file:"bind_logging.go",tag:"example",children:`type Logger struct {
  Prefix string
  Level  string
}

func log(logger *Logger, message string) {
  fmt.Printf("[%s] %s: %s
", logger.Level, logger.Prefix, message)
}

// Create specialized loggers
errorLogger := &Logger{Prefix: "API", Level: "ERROR"}
infoLogger := &Logger{Prefix: "API", Level: "INFO"}

logError := F.Bind1st(log, errorLogger)
logInfo := F.Bind1st(log, infoLogger)

// Use specialized loggers
logInfo("Server started")
// [INFO] API: Server started

logError("Connection failed")
// [ERROR] API: Connection failed

logInfo("Request processed")
// [INFO] API: Request processed`})]}),"\n",(0,t.jsx)(i.hr,{}),"\n",(0,t.jsxs)(a.wn,{num:"9",title:"API Reference",children:[(0,t.jsx)(a.vr,{children:(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:"Function"}),(0,t.jsx)(i.th,{children:"Type"}),(0,t.jsx)(i.th,{children:"Description"})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"Bind1st[A, B, C]"})}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"(func(A, B) C, A) -> func(B) C"})}),(0,t.jsx)(i.td,{children:"Fix first argument"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"Bind2nd[A, B, C]"})}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"(func(A, B) C, B) -> func(A) C"})}),(0,t.jsx)(i.td,{children:"Fix second argument"})]})]})]})}),(0,t.jsx)(i.p,{children:(0,t.jsx)(i.strong,{children:"Usage Pattern:"})}),(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-go",children:"// Original function\nf := func(a A, b B) C { ... }\n\n// Fix first argument\ng := Bind1st(f, valueA)  // g(b B) C\n\n// Fix second argument\nh := Bind2nd(f, valueB)  // h(a A) C\n"})})]}),"\n",(0,t.jsx)(i.hr,{}),"\n",(0,t.jsxs)(a.wn,{num:"10",title:"Related Concepts",children:[(0,t.jsx)(i.p,{children:(0,t.jsx)(i.strong,{children:"Common Use Cases:"})}),(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Creating specialized versions of generic functions"}),"\n",(0,t.jsx)(i.li,{children:"Configuration injection"}),"\n",(0,t.jsx)(i.li,{children:"API client builders"}),"\n",(0,t.jsx)(i.li,{children:"Logging and middleware"}),"\n",(0,t.jsx)(i.li,{children:"Reducing code duplication"}),"\n"]}),(0,t.jsx)(i.p,{children:(0,t.jsx)(i.strong,{children:"See Also:"})}),(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"/fp-go/docs/v2/utilities/function",children:"Function"})," - Core function utilities"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"/fp-go/docs/v2/utilities/pipe-flow",children:"Pipe & Flow"})," - Function composition"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"/fp-go/docs/v2/utilities/compose",children:"Compose"})," - Mathematical composition"]}),"\n"]})]}),"\n",(0,t.jsx)(i.hr,{}),"\n",(0,t.jsx)(a.is,{prev:{to:"/docs/v2/utilities/compose",title:"Compose"},next:{to:"/docs/v2/utilities/eq",title:"Eq"}})]})}function u(e={}){let{wrapper:i}={...(0,r.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},5811(e,i,s){s.d(i,{Pq:()=>C,eM:()=>F,hg:()=>w,_1:()=>y,av:()=>N,Gs:()=>B,vr:()=>P,x7:()=>p,bY:()=>A,wn:()=>g,zY:()=>u,ju:()=>x,BQ:()=>m,is:()=>k});var n=s(4848),t=s(6540);let r="codeTag_uQ6s",a="warn_PIJZ",l="benchNum_PicT",c="api_M0YO",d="pagerLink_hQ8Y",o="pagerLbl_CteO",h="pagerTtl_t0em";function u({eyebrow:e,title:i,titleAccent:s,lede:t,meta:r}){return(0,n.jsxs)("header",{className:"head_Sp2B",children:[(0,n.jsxs)("div",{className:"headLeft_aDUD",children:[e&&(0,n.jsx)("div",{className:"eyebrow__SSv",children:e}),(0,n.jsxs)("h1",{className:"headTitle_xWjG",children:[i,s?(0,n.jsxs)(n.Fragment,{children:[" ",(0,n.jsx)("em",{children:s})]}):null]}),t&&(0,n.jsx)("p",{className:"lede_Ltdj",children:t})]}),r&&r.length>0&&(0,n.jsx)("aside",{className:"headMeta_kmCF",children:r.map((e,i)=>(0,n.jsxs)("div",{className:"metaRow_drwK",children:[(0,n.jsx)("span",{className:"metaK_SNLg",children:e.label}),(0,n.jsx)("span",{className:"metaV_zAp5",children:e.value})]},i))})]})}function p({children:e}){return(0,n.jsx)("span",{className:"pill_Lzl6",children:e})}function x({children:e}){return(0,n.jsx)("div",{className:"tldr_mz3p",children:e})}function m({label:e,value:i,accent:s,unit:t,description:r,variant:a="default",prose:l}){return(0,n.jsxs)("div",{className:`tldrCard_nSap ${"up"===a?"up_ip1p":"down"===a?"down_x6We":""}`,children:[e&&(0,n.jsx)("div",{className:"tldrK_kP7m",children:e}),(0,n.jsxs)("div",{className:`tldrV_gUPe ${l?"tldrVProse_sV_2":""}`,children:[i,s?(0,n.jsx)("em",{children:s}):null,t?(0,n.jsx)("small",{children:t}):null]}),r&&(0,n.jsx)("div",{className:"tldrD_kfCX",children:r})]})}function g({id:e,number:i,title:s,titleAccent:t,tag:r,lede:a,children:l}){return(0,n.jsxs)("section",{className:"section_B_ST",children:[(0,n.jsxs)("div",{className:"sectionHead_oGCN",children:[(0,n.jsxs)("div",{className:"sectionHeadLeft_bfh9",children:[i&&(0,n.jsx)("span",{className:"sectionNum_qiYt",children:i}),(0,n.jsxs)("h2",{className:"sectionTitle__6nw",id:e,children:[s,t?(0,n.jsxs)(n.Fragment,{children:[" ",(0,n.jsx)("em",{children:t})]}):null]})]}),r&&(0,n.jsx)("span",{className:"sectionTag_se22",children:r})]}),a&&(0,n.jsx)("p",{className:"sectionLede_yuVk",children:a}),l]})}let j=({size:e=14,className:i})=>(0,n.jsx)("svg",{width:e,height:e,viewBox:"0 0 32 32",fill:"currentColor",className:i,"aria-hidden":"true",children:(0,n.jsx)("path",{d:"M13 24l-9-9 1.4-1.4L13 21.2 26.6 7.6 28 9z"})}),f=({size:e=14,className:i})=>(0,n.jsx)("svg",{width:e,height:e,viewBox:"0 0 32 32",fill:"currentColor",className:i,"aria-hidden":"true",children:(0,n.jsx)("path",{d:"M28 10v18H10V10h18m0-2H10a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2z"})}),v=({size:e=12,className:i})=>(0,n.jsx)("svg",{width:e,height:e,viewBox:"0 0 32 32",fill:"currentColor",className:i,"aria-hidden":"true",children:(0,n.jsx)("path",{d:"M18 6L16.6 7.4 24.2 15H4v2h20.2l-7.6 7.6L18 26l10-10z"})}),b=({size:e=12,className:i})=>(0,n.jsx)("svg",{width:e,height:e,viewBox:"0 0 32 32",fill:"currentColor",className:i,"aria-hidden":"true",children:(0,n.jsx)("path",{d:"M14 26l1.4-1.4L7.8 17H28v-2H7.8l7.6-7.6L14 6 4 16z"})});function N({file:e,status:i,copy:s=!0,children:l}){let c=(0,t.useRef)(null),[d,o]=(0,t.useState)(!1);return(0,n.jsxs)("div",{className:"codeCard_fiIG",children:[(0,n.jsxs)("div",{className:"codeBar_SZ78",children:[(0,n.jsx)("span",{className:"codeDot_JDOV"}),e&&(0,n.jsx)("span",{className:"codeFile_uZDd",children:e}),(0,n.jsx)("span",{className:"codeSpacer_nRmZ"}),i?"tested"===i?(0,n.jsx)("span",{className:`${r} ok_rUJx`,children:"tested"}):"warn"===i?(0,n.jsx)("span",{className:`${r} ${a}`,children:"caveat"}):"note"===i?(0,n.jsx)("span",{className:r,children:"note"}):"string"==typeof i?(0,n.jsx)("span",{className:r,children:i}):i:null,s&&(0,n.jsx)("button",{type:"button",className:"codeCopy_fKPb",onClick:()=>{if(!c.current)return;let e=c.current.innerText;"u">typeof navigator&&navigator.clipboard&&navigator.clipboard.writeText(e).then(()=>{o(!0),setTimeout(()=>o(!1),1200)})},"aria-label":"Copy code",children:d?"Copied":(0,n.jsx)(f,{})})]}),(0,n.jsx)("pre",{ref:c,className:"codeBlock_oEWX",children:l})]})}let _={info:({size:e=18,className:i})=>(0,n.jsxs)("svg",{width:e,height:e,viewBox:"0 0 32 32",fill:"currentColor",className:i,"aria-hidden":"true",children:[(0,n.jsx)("path",{d:"M16 2A14 14 0 1 0 30 16 14 14 0 0 0 16 2zm0 26a12 12 0 1 1 12-12 12 12 0 0 1-12 12z"}),(0,n.jsx)("path",{d:"M16 14h-2v2h1v6h-1v2h4v-2h-1v-8zm-.5-5a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 15.5 9z"})]}),warn:({size:e=18,className:i})=>(0,n.jsxs)("svg",{width:e,height:e,viewBox:"0 0 32 32",fill:"currentColor",className:i,"aria-hidden":"true",children:[(0,n.jsx)("path",{d:"M16 23a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 16 23zM15 13h2v8h-2z"}),(0,n.jsx)("path",{d:"M28.7 26.31L17.36 4.27a1.51 1.51 0 0 0-2.72 0L3.3 26.31a1.5 1.5 0 0 0 1.36 2.19h22.69a1.5 1.5 0 0 0 1.35-2.19z"})]}),success:j};function C({type:e="info",title:i,children:s}){let t=_[e];return(0,n.jsxs)("div",{className:`callout_yWfv ${"warn"===e?a:"success"===e?"success_D78d":""}`,children:[(0,n.jsx)("span",{className:"calloutIcon_hdwU",children:(0,n.jsx)(t,{size:18})}),(0,n.jsxs)("div",{className:"calloutBody_Qz4I",children:[i&&(0,n.jsx)("strong",{className:"calloutTitle_MXy4",children:i}),s]})]})}function B({children:e}){return(0,n.jsx)("div",{className:"compare_WfXa",children:e})}function y({kind:e,title:i,pill:s,children:t}){return(0,n.jsxs)("div",{className:`compareCol_nZe9 ${"bad"===e?"bad_pZ5b":"good_EJeo"}`,children:[(0,n.jsxs)("div",{className:"compareHead_vAhW",children:[(0,n.jsx)("span",{children:i??("bad"===e?"Before":"After")}),s&&(0,n.jsx)("span",{className:"comparePill_fmmx",children:s})]}),(0,n.jsx)("div",{className:"compareBody_hP62",children:t})]})}function w({title:e,command:i,columns:s,rows:t}){let[r,a,c,d,o]=s??["Variant","Speed","ns/op","B/op","\u0394"];return(0,n.jsxs)("div",{className:"bench_zMa2",children:[(0,n.jsxs)("div",{className:"benchHead_q6K3",children:[(0,n.jsx)("span",{children:e}),i&&(0,n.jsxs)("span",{className:"benchCmd_iUFI",children:[(0,n.jsx)("span",{className:"benchPrompt_LRr4",children:"$"}),i]})]}),(0,n.jsxs)("table",{className:"benchTable_u8XZ",children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:r}),(0,n.jsx)("th",{style:{width:"40%"},children:a}),(0,n.jsx)("th",{className:l,children:c}),(0,n.jsx)("th",{className:l,children:d}),(0,n.jsx)("th",{className:l,children:o})]})}),(0,n.jsx)("tbody",{children:t.map((e,i)=>{let s="win"===e.barKind?"win_PjNM":"lose"===e.barKind?"lose_A9dr":"",t="good"===e.deltaKind?"deltaGood_dYlm":"bad"===e.deltaKind?"deltaBad_yHEA":l;return(0,n.jsxs)("tr",{className:e.winner?"benchWinner_jDc2":void 0,children:[(0,n.jsx)("td",{className:"benchLabel_uFhm",children:e.label}),(0,n.jsx)("td",{children:null!=e.bar&&(0,n.jsx)("span",{className:"bar_jZ6H",children:(0,n.jsx)("span",{className:"barTrack_lefl",children:(0,n.jsx)("span",{className:`barFill_bMgr ${s}`,style:{width:`${100*Math.max(0,Math.min(1,e.bar))}%`}})})})}),(0,n.jsx)("td",{className:l,children:e.nsOp}),(0,n.jsx)("td",{className:l,children:e.bOp}),(0,n.jsx)("td",{className:t,children:e.delta})]},i)})})]})]})}function P({columns:e,rows:i,children:s}){if(s)return(0,n.jsx)("div",{className:c,children:s});let[t,r,a]=e??["Symbol","Signature","Since"];return(0,n.jsx)("div",{className:c,children:(0,n.jsxs)("table",{className:"apiTable_kmi_",children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:t}),(0,n.jsx)("th",{children:r}),(0,n.jsx)("th",{children:a})]})}),(0,n.jsx)("tbody",{children:i?.map((e,i)=>(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:e.symbol})}),(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:e.signature}),e.description&&(0,n.jsx)("div",{className:"apiDesc__siK",children:e.description})]}),(0,n.jsx)("td",{children:e.since&&(0,n.jsx)("code",{children:e.since})})]},i))})]})})}function F({status:e,children:i}){return(0,n.jsx)(n.Fragment,{})}function A({title:e="Steps",items:i,children:s}){let r,a=(r=i||(s?t.Children.toArray(s).filter(e=>t.isValidElement(e)).map(e=>({label:e.props.children,impact:e.props.status,done:!1})):[])).filter(e=>e.done).length;return(0,n.jsxs)("div",{className:"check_Z_XE",children:[(0,n.jsxs)("div",{className:"checkHead__B8i",children:[(0,n.jsx)("span",{children:e}),i&&(0,n.jsxs)("span",{children:[a," / ",r.length," complete"]})]}),(0,n.jsx)("ul",{className:"checkList_ziWk",children:r.map((e,i)=>(0,n.jsxs)("li",{className:`checkItem_jgfw ${e.done?"done_rLON":""}`,children:[(0,n.jsx)("span",{className:"checkBox_TriO",children:e.done&&(0,n.jsx)(j,{size:10})}),(0,n.jsx)("span",{className:"checkLbl_IWQU",children:e.label}),e.impact&&(0,n.jsx)("span",{className:"checkImpact_BaeN",children:e.impact})]},i))})]})}var I=s(5310);function k({prev:e,next:i}){return(0,n.jsxs)("nav",{className:"pager_oMm2",children:[e?(0,n.jsxs)(I.A,{to:e.to,className:d,children:[(0,n.jsxs)("span",{className:o,children:[(0,n.jsx)(b,{})," ",e.label??"Previous"]}),(0,n.jsx)("span",{className:h,children:e.title})]}):(0,n.jsx)("span",{}),i?(0,n.jsxs)(I.A,{to:i.to,className:`${d} next_PLI2`,children:[(0,n.jsxs)("span",{className:o,children:[i.label??"Next"," ",(0,n.jsx)(v,{})]}),(0,n.jsx)("span",{className:h,children:i.title})]}):(0,n.jsx)("span",{})]})}},8453(e,i,s){s.d(i,{R:()=>a,x:()=>l});var n=s(6540);let t={},r=n.createContext(t);function a(e){let i=n.useContext(r);return n.useMemo(function(){return"function"==typeof e?e(i):{...i,...e}},[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),n.createElement(r.Provider,{value:i},e.children)}}}]);
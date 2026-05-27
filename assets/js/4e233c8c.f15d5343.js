"use strict";(self.webpackChunkfp_go_docs=self.webpackChunkfp_go_docs||[]).push([["7811"],{8565(e,n,s){s.r(n),s.d(n,{metadata:()=>i,default:()=>x,frontMatter:()=>a,contentTitle:()=>c,toc:()=>d,assets:()=>o});var i=JSON.parse('{"id":"v2/utilities/compose","title":"Compose","description":"Right-to-left function composition for mathematical-style function combination in fp-go","source":"@site/docs/v2/utilities/compose.md","sourceDirName":"v2/utilities","slug":"/v2/utilities/compose","permalink":"/fp-go/docs/v2/utilities/compose","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":22,"frontMatter":{"title":"Compose","hide_title":true,"description":"Right-to-left function composition for mathematical-style function combination in fp-go","sidebar_position":22},"sidebar":"apiSidebar","previous":{"title":"Pipe & Flow","permalink":"/fp-go/docs/v2/utilities/pipe-flow"},"next":{"title":"Bind & Curry","permalink":"/fp-go/docs/v2/utilities/bind-curry"}}'),t=s(4848),l=s(8453),r=s(5811);let a={title:"Compose",hide_title:!0,description:"Right-to-left function composition for mathematical-style function combination in fp-go",sidebar_position:22},c,o={},d=[];function h(e){let n={a:"a",code:"code",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.zY,{eyebrow:"v2 \xb7 Utilities",title:"Compose",titleAccent:"Right-to-Left",lede:"Compose creates new functions by combining existing ones, executing from right to left in mathematical composition style.",meta:[{label:"Package",value:"function"},{label:"Since",value:"v2.0.0"},{label:"Direction",value:"Right-to-Left"}]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsxs)(r.wn,{num:"1",title:"Overview",children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Compose"})," combines functions in right-to-left order, following mathematical function composition notation: ",(0,t.jsx)(n.code,{children:"(f \u2218 g)(x) = f(g(x))"}),"."]}),(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Key Characteristics:"})}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Right-to-left execution"}),": Inner function executes first"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Mathematical notation"}),": Matches ",(0,t.jsx)(n.code,{children:"f \u2218 g"})," composition"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Type-safe"}),": Ensures output of one function matches input of next"]}),"\n"]}),(0,t.jsx)(r.Pq,{type:"info",children:(0,t.jsxs)(n.p,{children:["For left-to-right composition (more readable in code), use ",(0,t.jsx)(n.a,{href:"/fp-go/docs/v2/utilities/pipe-flow",children:"Flow"})," instead."]})})]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(r.wn,{num:"2",title:"Basic Composition",children:(0,t.jsx)(r.av,{file:"compose_basic.go",tag:"example",children:`import F "github.com/IBM/fp-go/function"

// Define simple functions
double := func(n int) int {
  return n * 2
}

addTen := func(n int) int {
  return n + 10
}

// Compose: addTen(double(x))
// Executes right-to-left: double first, then addTen
transform := F.Compose2(addTen, double)

result := transform(5)
// 5 -> double -> 10 -> addTen -> 20

// Equivalent to:
result := addTen(double(5))  // 20`})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsxs)(r.wn,{num:"3",title:"Compose vs Flow",children:[(0,t.jsx)(n.p,{children:"Understanding the difference between Compose and Flow:"}),(0,t.jsxs)(r.Gs,{children:[(0,t.jsxs)("div",{slot:"left",children:[(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Compose (Right-to-Left)"})}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:"// Mathematical: f \u2218 g\nc := F.Compose2(f, g)\n// Executes: f(g(x))\n\ndouble := func(n int) int { return n * 2 }\naddTen := func(n int) int { return n + 10 }\n\n// Read right-to-left\ntransform := F.Compose2(addTen, double)\ntransform(5)  // 20\n// 5 -> double(5)=10 -> addTen(10)=20\n"})})]}),(0,t.jsxs)("div",{slot:"right",children:[(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Flow (Left-to-Right)"})}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:"// Pipeline style\nf := F.Flow2(g, f)\n// Executes: f(g(x))\n\ndouble := func(n int) int { return n * 2 }\naddTen := func(n int) int { return n + 10 }\n\n// Read left-to-right\ntransform := F.Flow2(double, addTen)\ntransform(5)  // 20\n// 5 -> double(5)=10 -> addTen(10)=20\n"})})]})]}),(0,t.jsx)(r.Pq,{type:"warn",children:(0,t.jsx)(n.p,{children:"Both produce the same result, but the order of arguments is reversed. Choose based on readability preference."})})]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsxs)(r.wn,{num:"4",title:"Multiple Functions",children:[(0,t.jsx)(n.p,{children:"Compose multiple functions together:"}),(0,t.jsx)(r.av,{file:"compose_multiple.go",tag:"example",children:`import F "github.com/IBM/fp-go/function"

// Define transformation functions
double := func(n int) int { return n * 2 }
addTen := func(n int) int { return n + 10 }
square := func(n int) int { return n * n }

// Compose three functions
// Executes: square(addTen(double(x)))
transform := F.Compose3(square, addTen, double)

result := transform(5)
// 5 -> double -> 10 -> addTen -> 20 -> square -> 400

// Step by step:
// 1. double(5) = 10
// 2. addTen(10) = 20
// 3. square(20) = 400`})]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsxs)(r.wn,{num:"5",title:"String Transformations",children:[(0,t.jsx)(n.p,{children:"Compose string operations:"}),(0,t.jsx)(r.av,{file:"compose_strings.go",tag:"example",children:`import (
  F "github.com/IBM/fp-go/function"
  "strings"
)

// Define string transformations
trim := func(s string) string {
  return strings.TrimSpace(s)
}

upper := func(s string) string {
  return strings.ToUpper(s)
}

addPrefix := func(s string) string {
  return ">>> " + s
}

// Compose: addPrefix(upper(trim(x)))
normalize := F.Compose3(addPrefix, upper, trim)

result := normalize("  hello world  ")
// "  hello world  " -> trim -> "hello world" 
//                   -> upper -> "HELLO WORLD"
//                   -> addPrefix -> ">>> HELLO WORLD"`})]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsxs)(r.wn,{num:"6",title:"Type Transformations",children:[(0,t.jsx)(n.p,{children:"Compose functions that change types:"}),(0,t.jsx)(r.av,{file:"compose_types.go",tag:"example",children:`import F "github.com/IBM/fp-go/function"

// int -> string
toString := func(n int) string {
  return fmt.Sprintf("%d", n)
}

// string -> int (length)
length := func(s string) int {
  return len(s)
}

// int -> bool
isEven := func(n int) bool {
  return n%2 == 0
}

// Compose: isEven(length(toString(x)))
// int -> string -> int -> bool
check := F.Compose3(isEven, length, toString)

check(42)    // true  (toString="42", len=2, isEven=true)
check(123)   // false (toString="123", len=3, isEven=false)
check(1000)  // true  (toString="1000", len=4, isEven=true)`})]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsxs)(r.wn,{num:"7",title:"Validation Pipeline",children:[(0,t.jsx)(n.p,{children:"Build validation chains:"}),(0,t.jsx)(r.av,{file:"compose_validation.go",tag:"example",children:`type User struct {
  Name  string
  Email string
  Age   int
}

// Validation functions
validateName := func(u User) User {
  if u.Name == "" {
      panic("Name required")
  }
  return u
}

validateEmail := func(u User) User {
  if !strings.Contains(u.Email, "@") {
      panic("Invalid email")
  }
  return u
}

validateAge := func(u User) User {
  if u.Age < 18 {
      panic("Must be 18+")
  }
  return u
}

// Compose validators (right-to-left)
// Executes: validateAge -> validateEmail -> validateName
validate := F.Compose3(validateName, validateEmail, validateAge)

user := User{Name: "Alice", Email: "alice@example.com", Age: 25}
validated := validate(user)  // All validations pass`})]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(r.wn,{num:"8",title:"When to Use Compose",children:(0,t.jsxs)(r.Pq,{type:"info",children:[(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Use Compose when:"})}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"You prefer mathematical notation"}),"\n",(0,t.jsx)(n.li,{children:"Working with mathematical concepts"}),"\n",(0,t.jsxs)(n.li,{children:["Porting code from languages with ",(0,t.jsx)(n.code,{children:"\u2218"})," operator"]}),"\n",(0,t.jsx)(n.li,{children:"Building abstract function combinators"}),"\n"]}),(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Use Flow when:"})}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"You prefer readable left-to-right pipelines"}),"\n",(0,t.jsx)(n.li,{children:"Working with data transformations"}),"\n",(0,t.jsx)(n.li,{children:"Building business logic"}),"\n",(0,t.jsx)(n.li,{children:"Most practical applications"}),"\n"]})]})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsxs)(r.wn,{num:"9",title:"API Reference",children:[(0,t.jsx)(r.vr,{children:(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Function"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Compose2[A, B, C]"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"(B -> C, A -> B) -> (A -> C)"})}),(0,t.jsx)(n.td,{children:"Compose two functions"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Compose3[A, B, C, D]"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"(C -> D, B -> C, A -> B) -> (A -> D)"})}),(0,t.jsx)(n.td,{children:"Compose three functions"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Compose4[A, B, C, D, E]"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"(D -> E, C -> D, B -> C, A -> B) -> (A -> E)"})}),(0,t.jsx)(n.td,{children:"Compose four functions"})]})]})]})}),(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Execution Order:"})}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"Compose2(f, g)(x) = f(g(x))\nCompose3(f, g, h)(x) = f(g(h(x)))\n"})})]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsxs)(r.wn,{num:"10",title:"Related Concepts",children:[(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Function Composition Styles:"})}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Compose"}),": Right-to-left (mathematical)"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Flow"}),": Left-to-right (pipeline)"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Pipe"}),": Data-first left-to-right"]}),"\n"]}),(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"See Also:"})}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/fp-go/docs/v2/utilities/pipe-flow",children:"Pipe & Flow"})," - Left-to-right composition"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/fp-go/docs/v2/utilities/function",children:"Function"})," - Core function utilities"]}),"\n"]})]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(r.is,{prev:{to:"/docs/v2/utilities/tuple",title:"Tuple"},next:{to:"/docs/v2/utilities/bind-curry",title:"Bind & Curry"}})]})}function x(e={}){let{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},5811(e,n,s){s.d(n,{Pq:()=>C,eM:()=>F,hg:()=>T,_1:()=>y,av:()=>N,Gs:()=>w,vr:()=>B,x7:()=>u,bY:()=>L,wn:()=>j,zY:()=>x,ju:()=>m,BQ:()=>p,is:()=>M});var i=s(4848),t=s(6540);let l="codeTag_uQ6s",r="warn_PIJZ",a="benchNum_PicT",c="api_M0YO",o="pagerLink_hQ8Y",d="pagerLbl_CteO",h="pagerTtl_t0em";function x({eyebrow:e,title:n,titleAccent:s,lede:t,meta:l}){return(0,i.jsxs)("header",{className:"head_Sp2B",children:[(0,i.jsxs)("div",{className:"headLeft_aDUD",children:[e&&(0,i.jsx)("div",{className:"eyebrow__SSv",children:e}),(0,i.jsxs)("h1",{className:"headTitle_xWjG",children:[n,s?(0,i.jsxs)(i.Fragment,{children:[" ",(0,i.jsx)("em",{children:s})]}):null]}),t&&(0,i.jsx)("p",{className:"lede_Ltdj",children:t})]}),l&&l.length>0&&(0,i.jsx)("aside",{className:"headMeta_kmCF",children:l.map((e,n)=>(0,i.jsxs)("div",{className:"metaRow_drwK",children:[(0,i.jsx)("span",{className:"metaK_SNLg",children:e.label}),(0,i.jsx)("span",{className:"metaV_zAp5",children:e.value})]},n))})]})}function u({children:e}){return(0,i.jsx)("span",{className:"pill_Lzl6",children:e})}function m({children:e}){return(0,i.jsx)("div",{className:"tldr_mz3p",children:e})}function p({label:e,value:n,accent:s,unit:t,description:l,variant:r="default",prose:a}){return(0,i.jsxs)("div",{className:`tldrCard_nSap ${"up"===r?"up_ip1p":"down"===r?"down_x6We":""}`,children:[e&&(0,i.jsx)("div",{className:"tldrK_kP7m",children:e}),(0,i.jsxs)("div",{className:`tldrV_gUPe ${a?"tldrVProse_sV_2":""}`,children:[n,s?(0,i.jsx)("em",{children:s}):null,t?(0,i.jsx)("small",{children:t}):null]}),l&&(0,i.jsx)("div",{className:"tldrD_kfCX",children:l})]})}function j({id:e,number:n,title:s,titleAccent:t,tag:l,lede:r,children:a}){return(0,i.jsxs)("section",{className:"section_B_ST",children:[(0,i.jsxs)("div",{className:"sectionHead_oGCN",children:[(0,i.jsxs)("div",{className:"sectionHeadLeft_bfh9",children:[n&&(0,i.jsx)("span",{className:"sectionNum_qiYt",children:n}),(0,i.jsxs)("h2",{className:"sectionTitle__6nw",id:e,children:[s,t?(0,i.jsxs)(i.Fragment,{children:[" ",(0,i.jsx)("em",{children:t})]}):null]})]}),l&&(0,i.jsx)("span",{className:"sectionTag_se22",children:l})]}),r&&(0,i.jsx)("p",{className:"sectionLede_yuVk",children:r}),a]})}let f=({size:e=14,className:n})=>(0,i.jsx)("svg",{width:e,height:e,viewBox:"0 0 32 32",fill:"currentColor",className:n,"aria-hidden":"true",children:(0,i.jsx)("path",{d:"M13 24l-9-9 1.4-1.4L13 21.2 26.6 7.6 28 9z"})}),g=({size:e=14,className:n})=>(0,i.jsx)("svg",{width:e,height:e,viewBox:"0 0 32 32",fill:"currentColor",className:n,"aria-hidden":"true",children:(0,i.jsx)("path",{d:"M28 10v18H10V10h18m0-2H10a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2z"})}),v=({size:e=12,className:n})=>(0,i.jsx)("svg",{width:e,height:e,viewBox:"0 0 32 32",fill:"currentColor",className:n,"aria-hidden":"true",children:(0,i.jsx)("path",{d:"M18 6L16.6 7.4 24.2 15H4v2h20.2l-7.6 7.6L18 26l10-10z"})}),b=({size:e=12,className:n})=>(0,i.jsx)("svg",{width:e,height:e,viewBox:"0 0 32 32",fill:"currentColor",className:n,"aria-hidden":"true",children:(0,i.jsx)("path",{d:"M14 26l1.4-1.4L7.8 17H28v-2H7.8l7.6-7.6L14 6 4 16z"})});function N({file:e,status:n,copy:s=!0,children:a}){let c=(0,t.useRef)(null),[o,d]=(0,t.useState)(!1);return(0,i.jsxs)("div",{className:"codeCard_fiIG",children:[(0,i.jsxs)("div",{className:"codeBar_SZ78",children:[(0,i.jsx)("span",{className:"codeDot_JDOV"}),e&&(0,i.jsx)("span",{className:"codeFile_uZDd",children:e}),(0,i.jsx)("span",{className:"codeSpacer_nRmZ"}),n?"tested"===n?(0,i.jsx)("span",{className:`${l} ok_rUJx`,children:"tested"}):"warn"===n?(0,i.jsx)("span",{className:`${l} ${r}`,children:"caveat"}):"note"===n?(0,i.jsx)("span",{className:l,children:"note"}):"string"==typeof n?(0,i.jsx)("span",{className:l,children:n}):n:null,s&&(0,i.jsx)("button",{type:"button",className:"codeCopy_fKPb",onClick:()=>{if(!c.current)return;let e=c.current.innerText;"u">typeof navigator&&navigator.clipboard&&navigator.clipboard.writeText(e).then(()=>{d(!0),setTimeout(()=>d(!1),1200)})},"aria-label":"Copy code",children:o?"Copied":(0,i.jsx)(g,{})})]}),(0,i.jsx)("pre",{ref:c,className:"codeBlock_oEWX",children:a})]})}let _={info:({size:e=18,className:n})=>(0,i.jsxs)("svg",{width:e,height:e,viewBox:"0 0 32 32",fill:"currentColor",className:n,"aria-hidden":"true",children:[(0,i.jsx)("path",{d:"M16 2A14 14 0 1 0 30 16 14 14 0 0 0 16 2zm0 26a12 12 0 1 1 12-12 12 12 0 0 1-12 12z"}),(0,i.jsx)("path",{d:"M16 14h-2v2h1v6h-1v2h4v-2h-1v-8zm-.5-5a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 15.5 9z"})]}),warn:({size:e=18,className:n})=>(0,i.jsxs)("svg",{width:e,height:e,viewBox:"0 0 32 32",fill:"currentColor",className:n,"aria-hidden":"true",children:[(0,i.jsx)("path",{d:"M16 23a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 16 23zM15 13h2v8h-2z"}),(0,i.jsx)("path",{d:"M28.7 26.31L17.36 4.27a1.51 1.51 0 0 0-2.72 0L3.3 26.31a1.5 1.5 0 0 0 1.36 2.19h22.69a1.5 1.5 0 0 0 1.35-2.19z"})]}),success:f};function C({type:e="info",title:n,children:s}){let t=_[e];return(0,i.jsxs)("div",{className:`callout_yWfv ${"warn"===e?r:"success"===e?"success_D78d":""}`,children:[(0,i.jsx)("span",{className:"calloutIcon_hdwU",children:(0,i.jsx)(t,{size:18})}),(0,i.jsxs)("div",{className:"calloutBody_Qz4I",children:[n&&(0,i.jsx)("strong",{className:"calloutTitle_MXy4",children:n}),s]})]})}function w({children:e}){return(0,i.jsx)("div",{className:"compare_WfXa",children:e})}function y({kind:e,title:n,pill:s,children:t}){return(0,i.jsxs)("div",{className:`compareCol_nZe9 ${"bad"===e?"bad_pZ5b":"good_EJeo"}`,children:[(0,i.jsxs)("div",{className:"compareHead_vAhW",children:[(0,i.jsx)("span",{children:n??("bad"===e?"Before":"After")}),s&&(0,i.jsx)("span",{className:"comparePill_fmmx",children:s})]}),(0,i.jsx)("div",{className:"compareBody_hP62",children:t})]})}function T({title:e,command:n,columns:s,rows:t}){let[l,r,c,o,d]=s??["Variant","Speed","ns/op","B/op","\u0394"];return(0,i.jsxs)("div",{className:"bench_zMa2",children:[(0,i.jsxs)("div",{className:"benchHead_q6K3",children:[(0,i.jsx)("span",{children:e}),n&&(0,i.jsxs)("span",{className:"benchCmd_iUFI",children:[(0,i.jsx)("span",{className:"benchPrompt_LRr4",children:"$"}),n]})]}),(0,i.jsxs)("table",{className:"benchTable_u8XZ",children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:l}),(0,i.jsx)("th",{style:{width:"40%"},children:r}),(0,i.jsx)("th",{className:a,children:c}),(0,i.jsx)("th",{className:a,children:o}),(0,i.jsx)("th",{className:a,children:d})]})}),(0,i.jsx)("tbody",{children:t.map((e,n)=>{let s="win"===e.barKind?"win_PjNM":"lose"===e.barKind?"lose_A9dr":"",t="good"===e.deltaKind?"deltaGood_dYlm":"bad"===e.deltaKind?"deltaBad_yHEA":a;return(0,i.jsxs)("tr",{className:e.winner?"benchWinner_jDc2":void 0,children:[(0,i.jsx)("td",{className:"benchLabel_uFhm",children:e.label}),(0,i.jsx)("td",{children:null!=e.bar&&(0,i.jsx)("span",{className:"bar_jZ6H",children:(0,i.jsx)("span",{className:"barTrack_lefl",children:(0,i.jsx)("span",{className:`barFill_bMgr ${s}`,style:{width:`${100*Math.max(0,Math.min(1,e.bar))}%`}})})})}),(0,i.jsx)("td",{className:a,children:e.nsOp}),(0,i.jsx)("td",{className:a,children:e.bOp}),(0,i.jsx)("td",{className:t,children:e.delta})]},n)})})]})]})}function B({columns:e,rows:n,children:s}){if(s)return(0,i.jsx)("div",{className:c,children:s});let[t,l,r]=e??["Symbol","Signature","Since"];return(0,i.jsx)("div",{className:c,children:(0,i.jsxs)("table",{className:"apiTable_kmi_",children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:t}),(0,i.jsx)("th",{children:l}),(0,i.jsx)("th",{children:r})]})}),(0,i.jsx)("tbody",{children:n?.map((e,n)=>(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:e.symbol})}),(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:e.signature}),e.description&&(0,i.jsx)("div",{className:"apiDesc__siK",children:e.description})]}),(0,i.jsx)("td",{children:e.since&&(0,i.jsx)("code",{children:e.since})})]},n))})]})})}function F({status:e,children:n}){return(0,i.jsx)(i.Fragment,{})}function L({title:e="Steps",items:n,children:s}){let l,r=(l=n||(s?t.Children.toArray(s).filter(e=>t.isValidElement(e)).map(e=>({label:e.props.children,impact:e.props.status,done:!1})):[])).filter(e=>e.done).length;return(0,i.jsxs)("div",{className:"check_Z_XE",children:[(0,i.jsxs)("div",{className:"checkHead__B8i",children:[(0,i.jsx)("span",{children:e}),n&&(0,i.jsxs)("span",{children:[r," / ",l.length," complete"]})]}),(0,i.jsx)("ul",{className:"checkList_ziWk",children:l.map((e,n)=>(0,i.jsxs)("li",{className:`checkItem_jgfw ${e.done?"done_rLON":""}`,children:[(0,i.jsx)("span",{className:"checkBox_TriO",children:e.done&&(0,i.jsx)(f,{size:10})}),(0,i.jsx)("span",{className:"checkLbl_IWQU",children:e.label}),e.impact&&(0,i.jsx)("span",{className:"checkImpact_BaeN",children:e.impact})]},n))})]})}var k=s(5310);function M({prev:e,next:n}){return(0,i.jsxs)("nav",{className:"pager_oMm2",children:[e?(0,i.jsxs)(k.A,{to:e.to,className:o,children:[(0,i.jsxs)("span",{className:d,children:[(0,i.jsx)(b,{})," ",e.label??"Previous"]}),(0,i.jsx)("span",{className:h,children:e.title})]}):(0,i.jsx)("span",{}),n?(0,i.jsxs)(k.A,{to:n.to,className:`${o} next_PLI2`,children:[(0,i.jsxs)("span",{className:d,children:[n.label??"Next"," ",(0,i.jsx)(v,{})]}),(0,i.jsx)("span",{className:h,children:n.title})]}):(0,i.jsx)("span",{})]})}},8453(e,n,s){s.d(n,{R:()=>r,x:()=>a});var i=s(6540);let t={},l=i.createContext(t);function r(e){let n=i.useContext(l);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);
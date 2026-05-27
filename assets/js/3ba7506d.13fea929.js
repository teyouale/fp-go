"use strict";(self.webpackChunkfp_go_docs=self.webpackChunkfp_go_docs||[]).push([["9282"],{6098(e,s,l){l.r(s),l.d(s,{metadata:()=>n,default:()=>h,frontMatter:()=>r,contentTitle:()=>c,toc:()=>p,assets:()=>d});var n=JSON.parse('{"id":"v2/utilities/tuple","title":"Tuple","description":"Working with pairs and tuples for grouping multiple values in fp-go","source":"@site/docs/v2/utilities/tuple.md","sourceDirName":"v2/utilities","slug":"/v2/utilities/tuple","permalink":"/fp-go/docs/v2/utilities/tuple","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":24,"frontMatter":{"title":"Tuple","hide_title":true,"description":"Working with pairs and tuples for grouping multiple values in fp-go","sidebar_position":24},"sidebar":"apiSidebar","previous":{"title":"String","permalink":"/fp-go/docs/v2/utilities/string"},"next":{"title":"Eq (Equality)","permalink":"/fp-go/docs/v2/utilities/eq"}}'),i=l(4848),a=l(8453),t=l(5811);let r={title:"Tuple",hide_title:!0,description:"Working with pairs and tuples for grouping multiple values in fp-go",sidebar_position:24},c,d={},p=[];function o(e){let s={a:"a",code:"code",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.zY,{eyebrow:"v2 \xb7 Utilities",title:"Tuple",titleAccent:"Pairs & Groups",lede:"Tuples provide a way to group multiple values together. The tuple package provides utilities for creating and manipulating tuples.",meta:[{label:"Package",value:"tuple"},{label:"Since",value:"v2.0.0"},{label:"Type",value:"Tuple2[A, B]"}]}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsxs)(t.wn,{num:"1",title:"Overview",children:[(0,i.jsxs)(s.p,{children:["A ",(0,i.jsx)(s.strong,{children:"Tuple"})," is a fixed-size collection of values that can have different types. The most common is ",(0,i.jsx)(s.strong,{children:"Tuple2"})," (also called a pair), which holds two values."]}),(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Key Features:"})}),(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Type-safe grouping of values"}),"\n",(0,i.jsx)(s.li,{children:"Immutable by design"}),"\n",(0,i.jsx)(s.li,{children:"Useful for function returns and data pairing"}),"\n",(0,i.jsx)(s.li,{children:"Supports mapping and transformation operations"}),"\n"]})]}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(t.wn,{num:"2",title:"Creating Tuples",children:(0,i.jsx)(t.av,{file:"tuple_create.go",tag:"example",children:`import T "github.com/IBM/fp-go/tuple"

// Create a tuple (pair)
pair := T.MakeTuple2("Alice", 30)
// Tuple2[string, int]{Head: "Alice", Tail: 30}

// Access elements
name := pair.Head   // "Alice" (first element)
age := pair.Tail    // 30 (second element)

// Different types
mixed := T.MakeTuple2(42, "answer")
// Tuple2[int, string]{Head: 42, Tail: "answer"}

// Nested tuples
nested := T.MakeTuple2(
  T.MakeTuple2(1, 2),
  T.MakeTuple2(3, 4),
)
// Tuple2[Tuple2[int, int], Tuple2[int, int]]`})}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsxs)(t.wn,{num:"3",title:"Mapping First Element",children:[(0,i.jsx)(s.p,{children:"Transform the first element of a tuple:"}),(0,i.jsx)(t.av,{file:"tuple_mapfst.go",tag:"example",children:`import T "github.com/IBM/fp-go/tuple"

pair := T.MakeTuple2(5, "hello")

// Map first element (Head)
result := T.MapFst(func(n int) int {
  return n * 2
})(pair)
// Tuple2{Head: 10, Tail: "hello"}

// Chain transformations
result := T.MapFst(func(n int) string {
  return fmt.Sprintf("Number: %d", n)
})(pair)
// Tuple2{Head: "Number: 5", Tail: "hello"}`})]}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsxs)(t.wn,{num:"4",title:"Mapping Second Element",children:[(0,i.jsx)(s.p,{children:"Transform the second element of a tuple:"}),(0,i.jsx)(t.av,{file:"tuple_mapsnd.go",tag:"example",children:`import T "github.com/IBM/fp-go/tuple"

pair := T.MakeTuple2("hello", 10)

// Map second element (Tail)
result := T.MapSnd(func(n int) int {
  return n * 2
})(pair)
// Tuple2{Head: "hello", Tail: 20}

// Change type
result := T.MapSnd(func(n int) string {
  return fmt.Sprintf("%d items", n)
})(pair)
// Tuple2{Head: "hello", Tail: "10 items"}`})]}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsxs)(t.wn,{num:"5",title:"Mapping Both Elements",children:[(0,i.jsx)(s.p,{children:"Transform both elements simultaneously:"}),(0,i.jsx)(t.av,{file:"tuple_bimap.go",tag:"example",children:`import T "github.com/IBM/fp-go/tuple"

pair := T.MakeTuple2(5, 10)

// Map both elements
result := T.Bimap(
  func(a int) int { return a * 2 },
  func(b int) int { return b + 1 },
)(pair)
// Tuple2{Head: 10, Tail: 11}

// Change both types
result := T.Bimap(
  func(a int) string { return fmt.Sprintf("A=%d", a) },
  func(b int) bool { return b > 5 },
)(pair)
// Tuple2{Head: "A=5", Tail: true}`})]}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsxs)(t.wn,{num:"6",title:"Swapping Elements",children:[(0,i.jsx)(s.p,{children:"Reverse the order of tuple elements:"}),(0,i.jsx)(t.av,{file:"tuple_swap.go",tag:"example",children:`import T "github.com/IBM/fp-go/tuple"

pair := T.MakeTuple2("hello", 42)
// Tuple2[string, int]{Head: "hello", Tail: 42}

swapped := T.Swap(pair)
// Tuple2[int, string]{Head: 42, Tail: "hello"}

// Swap is its own inverse
original := T.Swap(swapped)
// Back to Tuple2[string, int]{Head: "hello", Tail: 42}`})]}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsxs)(t.wn,{num:"7",title:"Function Results",children:[(0,i.jsx)(s.p,{children:"Return multiple values as tuples:"}),(0,i.jsx)(t.av,{file:"tuple_results.go",tag:"example",children:`import T "github.com/IBM/fp-go/tuple"

// Return quotient and remainder
func divMod(a, b int) T.Tuple2[int, int] {
  return T.MakeTuple2(a/b, a%b)
}

result := divMod(17, 5)
quotient := result.Head   // 3
remainder := result.Tail  // 2

// Parse and validate
func parseAndValidate(s string) T.Tuple2[int, error] {
  val, err := strconv.Atoi(s)
  return T.MakeTuple2(val, err)
}

result := parseAndValidate("42")
value := result.Head  // 42
err := result.Tail    // nil`})]}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsxs)(t.wn,{num:"8",title:"Key-Value Pairs",children:[(0,i.jsx)(s.p,{children:"Use tuples for key-value associations:"}),(0,i.jsx)(t.av,{file:"tuple_keyvalue.go",tag:"example",children:`import (
  R "github.com/IBM/fp-go/record"
  T "github.com/IBM/fp-go/tuple"
)

// Convert map to array of tuples
myMap := map[string]int{
  "apples":  5,
  "bananas": 3,
  "oranges": 7,
}

entries := R.ToEntries(myMap)
// []Tuple2[string, int]{
//   {Head: "apples", Tail: 5},
//   {Head: "bananas", Tail: 3},
//   {Head: "oranges", Tail: 7},
// }

// Process pairs
formatted := F.Pipe2(
  entries,
  A.Map(func(t T.Tuple2[string, int]) string {
      return fmt.Sprintf("%s: %d", t.Head, t.Tail)
  }),
)
// []string{"apples: 5", "bananas: 3", "oranges: 7"}`})]}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsxs)(t.wn,{num:"9",title:"Zipping Arrays",children:[(0,i.jsx)(s.p,{children:"Combine two arrays into tuples:"}),(0,i.jsx)(t.av,{file:"tuple_zip.go",tag:"example",children:`import (
  A "github.com/IBM/fp-go/array"
  T "github.com/IBM/fp-go/tuple"
)

names := []string{"Alice", "Bob", "Charlie"}
ages := []int{30, 25, 35}

// Zip arrays into tuples
pairs := A.Zip(ages)(names)
// []Tuple2[string, int]{
//   {Head: "Alice", Tail: 30},
//   {Head: "Bob", Tail: 25},
//   {Head: "Charlie", Tail: 35},
// }

// Process zipped data
formatted := F.Pipe2(
  pairs,
  A.Map(func(t T.Tuple2[string, int]) string {
      return fmt.Sprintf("%s is %d years old", t.Head, t.Tail)
  }),
)
// []string{
//   "Alice is 30 years old",
//   "Bob is 25 years old",
//   "Charlie is 35 years old",
// }`})]}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsxs)(t.wn,{num:"10",title:"Unzipping Tuples",children:[(0,i.jsx)(s.p,{children:"Split array of tuples back into separate arrays:"}),(0,i.jsx)(t.av,{file:"tuple_unzip.go",tag:"example",children:`import (
  A "github.com/IBM/fp-go/array"
  T "github.com/IBM/fp-go/tuple"
)

pairs := []T.Tuple2[string, int]{
  T.MakeTuple2("Alice", 30),
  T.MakeTuple2("Bob", 25),
  T.MakeTuple2("Charlie", 35),
}

// Unzip into separate arrays
result := A.Unzip(pairs)
names := result.Head  // []string{"Alice", "Bob", "Charlie"}
ages := result.Tail   // []int{30, 25, 35}`})]}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsxs)(t.wn,{num:"11",title:"API Reference",children:[(0,i.jsx)(t.vr,{children:(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Function"}),(0,i.jsx)(s.th,{children:"Type"}),(0,i.jsx)(s.th,{children:"Description"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"MakeTuple2[A, B]"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"(A, B) -> Tuple2[A, B]"})}),(0,i.jsx)(s.td,{children:"Creates a tuple from two values"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"MapFst[A, B, C]"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"(A -> C) -> Tuple2[A, B] -> Tuple2[C, B]"})}),(0,i.jsx)(s.td,{children:"Maps the first element"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"MapSnd[A, B, C]"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"(B -> C) -> Tuple2[A, B] -> Tuple2[A, C]"})}),(0,i.jsx)(s.td,{children:"Maps the second element"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"Bimap[A, B, C, D]"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"(A -> C, B -> D) -> Tuple2[A, B] -> Tuple2[C, D]"})}),(0,i.jsx)(s.td,{children:"Maps both elements"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"Swap[A, B]"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"Tuple2[A, B] -> Tuple2[B, A]"})}),(0,i.jsx)(s.td,{children:"Swaps tuple elements"})]})]})]})}),(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Type Definition:"})}),(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-go",children:"type Tuple2[A, B any] struct {\n    Head A  // First element\n    Tail B  // Second element\n}\n"})})]}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsxs)(t.wn,{num:"12",title:"Related Concepts",children:[(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Common Use Cases:"})}),(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Returning multiple values from functions"}),"\n",(0,i.jsx)(s.li,{children:"Key-value pairs and associations"}),"\n",(0,i.jsx)(s.li,{children:"Zipping and unzipping arrays"}),"\n",(0,i.jsx)(s.li,{children:"Intermediate data structures in transformations"}),"\n"]}),(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"See Also:"})}),(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"/fp-go/docs/v2/collections/array-zip",children:"Array Zip"})," - Combining arrays into tuples"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"/fp-go/docs/v2/collections/record",children:"Record"})," - Key-value operations with maps"]}),"\n"]})]}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(t.is,{prev:{to:"/docs/v2/utilities/string",title:"String"},next:{to:"/docs/v2/utilities/compose",title:"Compose"}})]})}function h(e={}){let{wrapper:s}={...(0,a.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},5811(e,s,l){l.d(s,{Pq:()=>N,eM:()=>A,hg:()=>y,_1:()=>w,av:()=>b,Gs:()=>M,vr:()=>B,x7:()=>u,bY:()=>C,wn:()=>j,zY:()=>h,ju:()=>x,BQ:()=>m,is:()=>S});var n=l(4848),i=l(6540);let a="codeTag_uQ6s",t="warn_PIJZ",r="benchNum_PicT",c="api_M0YO",d="pagerLink_hQ8Y",p="pagerLbl_CteO",o="pagerTtl_t0em";function h({eyebrow:e,title:s,titleAccent:l,lede:i,meta:a}){return(0,n.jsxs)("header",{className:"head_Sp2B",children:[(0,n.jsxs)("div",{className:"headLeft_aDUD",children:[e&&(0,n.jsx)("div",{className:"eyebrow__SSv",children:e}),(0,n.jsxs)("h1",{className:"headTitle_xWjG",children:[s,l?(0,n.jsxs)(n.Fragment,{children:[" ",(0,n.jsx)("em",{children:l})]}):null]}),i&&(0,n.jsx)("p",{className:"lede_Ltdj",children:i})]}),a&&a.length>0&&(0,n.jsx)("aside",{className:"headMeta_kmCF",children:a.map((e,s)=>(0,n.jsxs)("div",{className:"metaRow_drwK",children:[(0,n.jsx)("span",{className:"metaK_SNLg",children:e.label}),(0,n.jsx)("span",{className:"metaV_zAp5",children:e.value})]},s))})]})}function u({children:e}){return(0,n.jsx)("span",{className:"pill_Lzl6",children:e})}function x({children:e}){return(0,n.jsx)("div",{className:"tldr_mz3p",children:e})}function m({label:e,value:s,accent:l,unit:i,description:a,variant:t="default",prose:r}){return(0,n.jsxs)("div",{className:`tldrCard_nSap ${"up"===t?"up_ip1p":"down"===t?"down_x6We":""}`,children:[e&&(0,n.jsx)("div",{className:"tldrK_kP7m",children:e}),(0,n.jsxs)("div",{className:`tldrV_gUPe ${r?"tldrVProse_sV_2":""}`,children:[s,l?(0,n.jsx)("em",{children:l}):null,i?(0,n.jsx)("small",{children:i}):null]}),a&&(0,n.jsx)("div",{className:"tldrD_kfCX",children:a})]})}function j({id:e,number:s,title:l,titleAccent:i,tag:a,lede:t,children:r}){return(0,n.jsxs)("section",{className:"section_B_ST",children:[(0,n.jsxs)("div",{className:"sectionHead_oGCN",children:[(0,n.jsxs)("div",{className:"sectionHeadLeft_bfh9",children:[s&&(0,n.jsx)("span",{className:"sectionNum_qiYt",children:s}),(0,n.jsxs)("h2",{className:"sectionTitle__6nw",id:e,children:[l,i?(0,n.jsxs)(n.Fragment,{children:[" ",(0,n.jsx)("em",{children:i})]}):null]})]}),a&&(0,n.jsx)("span",{className:"sectionTag_se22",children:a})]}),t&&(0,n.jsx)("p",{className:"sectionLede_yuVk",children:t}),r]})}let g=({size:e=14,className:s})=>(0,n.jsx)("svg",{width:e,height:e,viewBox:"0 0 32 32",fill:"currentColor",className:s,"aria-hidden":"true",children:(0,n.jsx)("path",{d:"M13 24l-9-9 1.4-1.4L13 21.2 26.6 7.6 28 9z"})}),f=({size:e=14,className:s})=>(0,n.jsx)("svg",{width:e,height:e,viewBox:"0 0 32 32",fill:"currentColor",className:s,"aria-hidden":"true",children:(0,n.jsx)("path",{d:"M28 10v18H10V10h18m0-2H10a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2z"})}),T=({size:e=12,className:s})=>(0,n.jsx)("svg",{width:e,height:e,viewBox:"0 0 32 32",fill:"currentColor",className:s,"aria-hidden":"true",children:(0,n.jsx)("path",{d:"M18 6L16.6 7.4 24.2 15H4v2h20.2l-7.6 7.6L18 26l10-10z"})}),v=({size:e=12,className:s})=>(0,n.jsx)("svg",{width:e,height:e,viewBox:"0 0 32 32",fill:"currentColor",className:s,"aria-hidden":"true",children:(0,n.jsx)("path",{d:"M14 26l1.4-1.4L7.8 17H28v-2H7.8l7.6-7.6L14 6 4 16z"})});function b({file:e,status:s,copy:l=!0,children:r}){let c=(0,i.useRef)(null),[d,p]=(0,i.useState)(!1);return(0,n.jsxs)("div",{className:"codeCard_fiIG",children:[(0,n.jsxs)("div",{className:"codeBar_SZ78",children:[(0,n.jsx)("span",{className:"codeDot_JDOV"}),e&&(0,n.jsx)("span",{className:"codeFile_uZDd",children:e}),(0,n.jsx)("span",{className:"codeSpacer_nRmZ"}),s?"tested"===s?(0,n.jsx)("span",{className:`${a} ok_rUJx`,children:"tested"}):"warn"===s?(0,n.jsx)("span",{className:`${a} ${t}`,children:"caveat"}):"note"===s?(0,n.jsx)("span",{className:a,children:"note"}):"string"==typeof s?(0,n.jsx)("span",{className:a,children:s}):s:null,l&&(0,n.jsx)("button",{type:"button",className:"codeCopy_fKPb",onClick:()=>{if(!c.current)return;let e=c.current.innerText;"u">typeof navigator&&navigator.clipboard&&navigator.clipboard.writeText(e).then(()=>{p(!0),setTimeout(()=>p(!1),1200)})},"aria-label":"Copy code",children:d?"Copied":(0,n.jsx)(f,{})})]}),(0,n.jsx)("pre",{ref:c,className:"codeBlock_oEWX",children:r})]})}let _={info:({size:e=18,className:s})=>(0,n.jsxs)("svg",{width:e,height:e,viewBox:"0 0 32 32",fill:"currentColor",className:s,"aria-hidden":"true",children:[(0,n.jsx)("path",{d:"M16 2A14 14 0 1 0 30 16 14 14 0 0 0 16 2zm0 26a12 12 0 1 1 12-12 12 12 0 0 1-12 12z"}),(0,n.jsx)("path",{d:"M16 14h-2v2h1v6h-1v2h4v-2h-1v-8zm-.5-5a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 15.5 9z"})]}),warn:({size:e=18,className:s})=>(0,n.jsxs)("svg",{width:e,height:e,viewBox:"0 0 32 32",fill:"currentColor",className:s,"aria-hidden":"true",children:[(0,n.jsx)("path",{d:"M16 23a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 16 23zM15 13h2v8h-2z"}),(0,n.jsx)("path",{d:"M28.7 26.31L17.36 4.27a1.51 1.51 0 0 0-2.72 0L3.3 26.31a1.5 1.5 0 0 0 1.36 2.19h22.69a1.5 1.5 0 0 0 1.35-2.19z"})]}),success:g};function N({type:e="info",title:s,children:l}){let i=_[e];return(0,n.jsxs)("div",{className:`callout_yWfv ${"warn"===e?t:"success"===e?"success_D78d":""}`,children:[(0,n.jsx)("span",{className:"calloutIcon_hdwU",children:(0,n.jsx)(i,{size:18})}),(0,n.jsxs)("div",{className:"calloutBody_Qz4I",children:[s&&(0,n.jsx)("strong",{className:"calloutTitle_MXy4",children:s}),l]})]})}function M({children:e}){return(0,n.jsx)("div",{className:"compare_WfXa",children:e})}function w({kind:e,title:s,pill:l,children:i}){return(0,n.jsxs)("div",{className:`compareCol_nZe9 ${"bad"===e?"bad_pZ5b":"good_EJeo"}`,children:[(0,n.jsxs)("div",{className:"compareHead_vAhW",children:[(0,n.jsx)("span",{children:s??("bad"===e?"Before":"After")}),l&&(0,n.jsx)("span",{className:"comparePill_fmmx",children:l})]}),(0,n.jsx)("div",{className:"compareBody_hP62",children:i})]})}function y({title:e,command:s,columns:l,rows:i}){let[a,t,c,d,p]=l??["Variant","Speed","ns/op","B/op","\u0394"];return(0,n.jsxs)("div",{className:"bench_zMa2",children:[(0,n.jsxs)("div",{className:"benchHead_q6K3",children:[(0,n.jsx)("span",{children:e}),s&&(0,n.jsxs)("span",{className:"benchCmd_iUFI",children:[(0,n.jsx)("span",{className:"benchPrompt_LRr4",children:"$"}),s]})]}),(0,n.jsxs)("table",{className:"benchTable_u8XZ",children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:a}),(0,n.jsx)("th",{style:{width:"40%"},children:t}),(0,n.jsx)("th",{className:r,children:c}),(0,n.jsx)("th",{className:r,children:d}),(0,n.jsx)("th",{className:r,children:p})]})}),(0,n.jsx)("tbody",{children:i.map((e,s)=>{let l="win"===e.barKind?"win_PjNM":"lose"===e.barKind?"lose_A9dr":"",i="good"===e.deltaKind?"deltaGood_dYlm":"bad"===e.deltaKind?"deltaBad_yHEA":r;return(0,n.jsxs)("tr",{className:e.winner?"benchWinner_jDc2":void 0,children:[(0,n.jsx)("td",{className:"benchLabel_uFhm",children:e.label}),(0,n.jsx)("td",{children:null!=e.bar&&(0,n.jsx)("span",{className:"bar_jZ6H",children:(0,n.jsx)("span",{className:"barTrack_lefl",children:(0,n.jsx)("span",{className:`barFill_bMgr ${l}`,style:{width:`${100*Math.max(0,Math.min(1,e.bar))}%`}})})})}),(0,n.jsx)("td",{className:r,children:e.nsOp}),(0,n.jsx)("td",{className:r,children:e.bOp}),(0,n.jsx)("td",{className:i,children:e.delta})]},s)})})]})]})}function B({columns:e,rows:s,children:l}){if(l)return(0,n.jsx)("div",{className:c,children:l});let[i,a,t]=e??["Symbol","Signature","Since"];return(0,n.jsx)("div",{className:c,children:(0,n.jsxs)("table",{className:"apiTable_kmi_",children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:i}),(0,n.jsx)("th",{children:a}),(0,n.jsx)("th",{children:t})]})}),(0,n.jsx)("tbody",{children:s?.map((e,s)=>(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:e.symbol})}),(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:e.signature}),e.description&&(0,n.jsx)("div",{className:"apiDesc__siK",children:e.description})]}),(0,n.jsx)("td",{children:e.since&&(0,n.jsx)("code",{children:e.since})})]},s))})]})})}function A({status:e,children:s}){return(0,n.jsx)(n.Fragment,{})}function C({title:e="Steps",items:s,children:l}){let a,t=(a=s||(l?i.Children.toArray(l).filter(e=>i.isValidElement(e)).map(e=>({label:e.props.children,impact:e.props.status,done:!1})):[])).filter(e=>e.done).length;return(0,n.jsxs)("div",{className:"check_Z_XE",children:[(0,n.jsxs)("div",{className:"checkHead__B8i",children:[(0,n.jsx)("span",{children:e}),s&&(0,n.jsxs)("span",{children:[t," / ",a.length," complete"]})]}),(0,n.jsx)("ul",{className:"checkList_ziWk",children:a.map((e,s)=>(0,n.jsxs)("li",{className:`checkItem_jgfw ${e.done?"done_rLON":""}`,children:[(0,n.jsx)("span",{className:"checkBox_TriO",children:e.done&&(0,n.jsx)(g,{size:10})}),(0,n.jsx)("span",{className:"checkLbl_IWQU",children:e.label}),e.impact&&(0,n.jsx)("span",{className:"checkImpact_BaeN",children:e.impact})]},s))})]})}var k=l(5310);function S({prev:e,next:s}){return(0,n.jsxs)("nav",{className:"pager_oMm2",children:[e?(0,n.jsxs)(k.A,{to:e.to,className:d,children:[(0,n.jsxs)("span",{className:p,children:[(0,n.jsx)(v,{})," ",e.label??"Previous"]}),(0,n.jsx)("span",{className:o,children:e.title})]}):(0,n.jsx)("span",{}),s?(0,n.jsxs)(k.A,{to:s.to,className:`${d} next_PLI2`,children:[(0,n.jsxs)("span",{className:p,children:[s.label??"Next"," ",(0,n.jsx)(T,{})]}),(0,n.jsx)("span",{className:o,children:s.title})]}):(0,n.jsx)("span",{})]})}},8453(e,s,l){l.d(s,{R:()=>t,x:()=>r});var n=l(6540);let i={},a=n.createContext(i);function t(e){let s=n.useContext(a);return n.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),n.createElement(a.Provider,{value:s},e.children)}}}]);
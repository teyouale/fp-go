"use strict";(self.webpackChunkfp_go_docs=self.webpackChunkfp_go_docs||[]).push([["6727"],{8049(e,i,n){n.r(i),n.d(i,{metadata:()=>s,default:()=>x,frontMatter:()=>d,contentTitle:()=>a,toc:()=>c,assets:()=>o});var s=JSON.parse('{"id":"v2/utilities/monoid","title":"Monoid","description":"Semigroup with identity element for combining values with a default in fp-go","source":"@site/docs/v2/utilities/monoid.md","sourceDirName":"v2/utilities","slug":"/v2/utilities/monoid","permalink":"/fp-go/docs/v2/utilities/monoid","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":28,"frontMatter":{"title":"Monoid","hide_title":true,"description":"Semigroup with identity element for combining values with a default in fp-go","sidebar_position":28},"sidebar":"apiSidebar","previous":{"title":"Semigroup","permalink":"/fp-go/docs/v2/utilities/semigroup"},"next":{"title":"Magma","permalink":"/fp-go/docs/v2/utilities/magma"}}'),t=n(4848),l=n(8453),r=n(5811);let d={title:"Monoid",hide_title:!0,description:"Semigroup with identity element for combining values with a default in fp-go",sidebar_position:28},a,o={},c=[];function h(e){let i={a:"a",code:"code",hr:"hr",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.zY,{eyebrow:"v2 \xb7 Utilities",title:"Monoid",titleAccent:"Identity & Combination",lede:"A monoid is a semigroup with an identity element, providing both a way to combine values and a default/empty value.",meta:[{label:"Package",value:"monoid"},{label:"Since",value:"v2.0.0"},{label:"Extends",value:"Semigroup"}]}),"\n",(0,t.jsx)(i.hr,{}),"\n",(0,t.jsxs)(r.wn,{num:"1",title:"Overview",children:[(0,t.jsxs)(i.p,{children:["A ",(0,t.jsx)(i.strong,{children:"Monoid"})," extends Semigroup by adding an ",(0,t.jsx)(i.strong,{children:"identity element"}),' (also called "empty" or "zero"). This identity element acts as a neutral value for the binary operation.']}),(0,t.jsx)(i.p,{children:(0,t.jsx)(i.strong,{children:"Key Properties:"})}),(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Associative"}),": ",(0,t.jsx)(i.code,{children:"(a \u2022 b) \u2022 c = a \u2022 (b \u2022 c)"})," (from Semigroup)"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Left Identity"}),": ",(0,t.jsx)(i.code,{children:"empty \u2022 a = a"})]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Right Identity"}),": ",(0,t.jsx)(i.code,{children:"a \u2022 empty = a"})]}),"\n"]}),(0,t.jsx)(r.Pq,{type:"info",children:(0,t.jsx)(i.p,{children:"The identity element makes monoids perfect for folding/reducing operations, as you always have a safe starting value."})})]}),"\n",(0,t.jsx)(i.hr,{}),"\n",(0,t.jsx)(r.wn,{num:"2",title:"Basic Usage",children:(0,t.jsx)(r.av,{file:"monoid_basic.go",tag:"example",children:`import M "github.com/IBM/fp-go/monoid"

// Create a string concatenation monoid
stringMonoid := M.MakeMonoid(
  func(a, b string) string { return a + b },  // Concat operation
  "",  // Identity element (empty string)
)

result := stringMonoid.Concat("Hello", " World")
// "Hello World"

empty := stringMonoid.Empty()
// ""

// Identity laws hold
s1 := stringMonoid.Concat(empty, "test")  // "test"
s2 := stringMonoid.Concat("test", empty)  // "test"
// s1 == s2 == "test"`})}),"\n",(0,t.jsx)(i.hr,{}),"\n",(0,t.jsxs)(r.wn,{num:"3",title:"Built-in Monoids",children:[(0,t.jsx)(i.p,{children:"fp-go provides several built-in monoids for common types:"}),(0,t.jsx)(r.av,{file:"monoid_builtin.go",tag:"example",children:`import (
  N "github.com/IBM/fp-go/number"
  S "github.com/IBM/fp-go/string"
)

// Number addition monoid (identity: 0)
sum := N.MonoidSum.Concat(1, 2)  // 3
zero := N.MonoidSum.Empty()      // 0

// Number multiplication monoid (identity: 1)
product := N.MonoidProduct.Concat(3, 4)  // 12
one := N.MonoidProduct.Empty()           // 1

// String concatenation monoid (identity: "")
text := S.Monoid.Concat("Hello", " World")  // "Hello World"
emptyStr := S.Monoid.Empty()                // ""

// Min/Max monoids
minVal := N.MonoidMin.Concat(5, 3)  // 3
maxVal := N.MonoidMax.Concat(5, 3)  // 5`})]}),"\n",(0,t.jsx)(i.hr,{}),"\n",(0,t.jsxs)(r.wn,{num:"4",title:"Folding with Monoids",children:[(0,t.jsx)(i.p,{children:"Monoids are perfect for folding/reducing collections:"}),(0,t.jsx)(r.av,{file:"monoid_fold.go",tag:"example",children:`import (
  A "github.com/IBM/fp-go/array"
  F "github.com/IBM/fp-go/function"
  N "github.com/IBM/fp-go/number"
)

// Sum array of numbers
numbers := []int{1, 2, 3, 4, 5}
sum := F.Pipe2(
  numbers,
  A.Fold(N.MonoidSum),
)
// 15

// Product of numbers
product := F.Pipe2(
  numbers,
  A.Fold(N.MonoidProduct),
)
// 120

// Empty array uses identity
emptySum := F.Pipe2(
  []int{},
  A.Fold(N.MonoidSum),
)
// 0 (identity element)`})]}),"\n",(0,t.jsx)(i.hr,{}),"\n",(0,t.jsxs)(r.wn,{num:"5",title:"Configuration Merging",children:[(0,t.jsx)(i.p,{children:"Use monoids to merge configurations:"}),(0,t.jsx)(r.av,{file:"monoid_config.go",tag:"example",children:`type Config struct {
  Timeout int
  Retries int
  Debug   bool
}

// Max-merge strategy with defaults
configMonoid := M.MakeMonoid(
  func(a, b Config) Config {
      return Config{
          Timeout: max(a.Timeout, b.Timeout),
          Retries: max(a.Retries, b.Retries),
          Debug:   a.Debug || b.Debug,
      }
  },
  Config{Timeout: 0, Retries: 0, Debug: false},  // Identity
)

// Merge multiple configs
configs := []Config{
  {Timeout: 30, Retries: 3, Debug: false},  // defaults
  {Timeout: 0, Retries: 5, Debug: false},   // env config
  {Timeout: 60, Retries: 0, Debug: true},   // user config
}

final := F.Pipe2(
  configs,
  A.Fold(configMonoid),
)
// Config{Timeout: 60, Retries: 5, Debug: true}`})]}),"\n",(0,t.jsx)(i.hr,{}),"\n",(0,t.jsxs)(r.wn,{num:"6",title:"Aggregating Statistics",children:[(0,t.jsx)(i.p,{children:"Combine statistics from multiple sources:"}),(0,t.jsx)(r.av,{file:"monoid_stats.go",tag:"example",children:`type Stats struct {
  Count int
  Total float64
  Min   float64
  Max   float64
}

statsMonoid := M.MakeMonoid(
  func(a, b Stats) Stats {
      return Stats{
          Count: a.Count + b.Count,
          Total: a.Total + b.Total,
          Min:   min(a.Min, b.Min),
          Max:   max(a.Max, b.Max),
      }
  },
  Stats{
      Count: 0,
      Total: 0.0,
      Min:   math.MaxFloat64,
      Max:   -math.MaxFloat64,
  },
)

// Aggregate stats from multiple sources
allStats := []Stats{
  {Count: 10, Total: 100.0, Min: 5.0, Max: 20.0},
  {Count: 15, Total: 225.0, Min: 3.0, Max: 25.0},
  {Count: 8, Total: 80.0, Min: 7.0, Max: 15.0},
}

combined := F.Pipe2(
  allStats,
  A.Fold(statsMonoid),
)
// Stats{Count: 33, Total: 405.0, Min: 3.0, Max: 25.0}`})]}),"\n",(0,t.jsx)(i.hr,{}),"\n",(0,t.jsxs)(r.wn,{num:"7",title:"API Reference",children:[(0,t.jsx)(r.vr,{children:(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:"Function"}),(0,t.jsx)(i.th,{children:"Type"}),(0,t.jsx)(i.th,{children:"Description"})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"MakeMonoid[A]"})}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"(func(A, A) A, A) -> Monoid[A]"})}),(0,t.jsx)(i.td,{children:"Creates a monoid from concat and empty"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"Concat"})}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"(A, A) -> A"})}),(0,t.jsx)(i.td,{children:"Combines two values (from Semigroup)"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"Empty"})}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"() -> A"})}),(0,t.jsx)(i.td,{children:"Returns the identity element"})]})]})]})}),(0,t.jsx)(i.p,{children:(0,t.jsx)(i.strong,{children:"Built-in Monoids:"})}),(0,t.jsx)(r.vr,{children:(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:"Monoid"}),(0,t.jsx)(i.th,{children:"Package"}),(0,t.jsx)(i.th,{children:"Operation"}),(0,t.jsx)(i.th,{children:"Identity"})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"MonoidSum"})}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"number"})}),(0,t.jsx)(i.td,{children:"Addition"}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"0"})})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"MonoidProduct"})}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"number"})}),(0,t.jsx)(i.td,{children:"Multiplication"}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"1"})})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"MonoidMin"})}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"number"})}),(0,t.jsx)(i.td,{children:"Minimum"}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"MaxInt"})})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"MonoidMax"})}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"number"})}),(0,t.jsx)(i.td,{children:"Maximum"}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"MinInt"})})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"Monoid"})}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"string"})}),(0,t.jsx)(i.td,{children:"Concatenation"}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:'""'})})]})]})]})})]}),"\n",(0,t.jsx)(i.hr,{}),"\n",(0,t.jsxs)(r.wn,{num:"8",title:"Related Concepts",children:[(0,t.jsx)(i.p,{children:(0,t.jsx)(i.strong,{children:"Algebraic Hierarchy:"})}),(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Magma"})," \u2192 ",(0,t.jsx)(i.strong,{children:"Semigroup"})," \u2192 ",(0,t.jsx)(i.strong,{children:"Monoid"})," \u2192 ",(0,t.jsx)(i.strong,{children:"Group"})]}),"\n",(0,t.jsx)(i.li,{children:"Monoid adds identity element to Semigroup"}),"\n",(0,t.jsx)(i.li,{children:"Group adds inverse operation to Monoid"}),"\n"]}),(0,t.jsx)(i.p,{children:(0,t.jsx)(i.strong,{children:"Common Use Cases:"})}),(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Folding/reducing collections"}),"\n",(0,t.jsx)(i.li,{children:"Merging configurations"}),"\n",(0,t.jsx)(i.li,{children:"Aggregating statistics"}),"\n",(0,t.jsx)(i.li,{children:"Combining results from parallel operations"}),"\n"]}),(0,t.jsx)(i.p,{children:(0,t.jsx)(i.strong,{children:"See Also:"})}),(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"/fp-go/docs/v2/utilities/semigroup",children:"Semigroup"})," - Monoid without identity element"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"/fp-go/docs/v2/collections/array-monoid",children:"Array Monoid"})," - Array folding operations"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"/fp-go/docs/v2/collections/record-monoid",children:"Record Monoid"})," - Map folding operations"]}),"\n"]})]}),"\n",(0,t.jsx)(i.hr,{}),"\n",(0,t.jsx)(r.is,{prev:{to:"/docs/v2/utilities/semigroup",title:"Semigroup"},next:{to:"/docs/v2/utilities/predicate",title:"Predicate"}})]})}function x(e={}){let{wrapper:i}={...(0,l.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},5811(e,i,n){n.d(i,{Pq:()=>_,eM:()=>A,hg:()=>w,_1:()=>C,av:()=>v,Gs:()=>y,vr:()=>S,x7:()=>m,bY:()=>T,wn:()=>p,zY:()=>x,ju:()=>j,BQ:()=>u,is:()=>P});var s=n(4848),t=n(6540);let l="codeTag_uQ6s",r="warn_PIJZ",d="benchNum_PicT",a="api_M0YO",o="pagerLink_hQ8Y",c="pagerLbl_CteO",h="pagerTtl_t0em";function x({eyebrow:e,title:i,titleAccent:n,lede:t,meta:l}){return(0,s.jsxs)("header",{className:"head_Sp2B",children:[(0,s.jsxs)("div",{className:"headLeft_aDUD",children:[e&&(0,s.jsx)("div",{className:"eyebrow__SSv",children:e}),(0,s.jsxs)("h1",{className:"headTitle_xWjG",children:[i,n?(0,s.jsxs)(s.Fragment,{children:[" ",(0,s.jsx)("em",{children:n})]}):null]}),t&&(0,s.jsx)("p",{className:"lede_Ltdj",children:t})]}),l&&l.length>0&&(0,s.jsx)("aside",{className:"headMeta_kmCF",children:l.map((e,i)=>(0,s.jsxs)("div",{className:"metaRow_drwK",children:[(0,s.jsx)("span",{className:"metaK_SNLg",children:e.label}),(0,s.jsx)("span",{className:"metaV_zAp5",children:e.value})]},i))})]})}function m({children:e}){return(0,s.jsx)("span",{className:"pill_Lzl6",children:e})}function j({children:e}){return(0,s.jsx)("div",{className:"tldr_mz3p",children:e})}function u({label:e,value:i,accent:n,unit:t,description:l,variant:r="default",prose:d}){return(0,s.jsxs)("div",{className:`tldrCard_nSap ${"up"===r?"up_ip1p":"down"===r?"down_x6We":""}`,children:[e&&(0,s.jsx)("div",{className:"tldrK_kP7m",children:e}),(0,s.jsxs)("div",{className:`tldrV_gUPe ${d?"tldrVProse_sV_2":""}`,children:[i,n?(0,s.jsx)("em",{children:n}):null,t?(0,s.jsx)("small",{children:t}):null]}),l&&(0,s.jsx)("div",{className:"tldrD_kfCX",children:l})]})}function p({id:e,number:i,title:n,titleAccent:t,tag:l,lede:r,children:d}){return(0,s.jsxs)("section",{className:"section_B_ST",children:[(0,s.jsxs)("div",{className:"sectionHead_oGCN",children:[(0,s.jsxs)("div",{className:"sectionHeadLeft_bfh9",children:[i&&(0,s.jsx)("span",{className:"sectionNum_qiYt",children:i}),(0,s.jsxs)("h2",{className:"sectionTitle__6nw",id:e,children:[n,t?(0,s.jsxs)(s.Fragment,{children:[" ",(0,s.jsx)("em",{children:t})]}):null]})]}),l&&(0,s.jsx)("span",{className:"sectionTag_se22",children:l})]}),r&&(0,s.jsx)("p",{className:"sectionLede_yuVk",children:r}),d]})}let g=({size:e=14,className:i})=>(0,s.jsx)("svg",{width:e,height:e,viewBox:"0 0 32 32",fill:"currentColor",className:i,"aria-hidden":"true",children:(0,s.jsx)("path",{d:"M13 24l-9-9 1.4-1.4L13 21.2 26.6 7.6 28 9z"})}),f=({size:e=14,className:i})=>(0,s.jsx)("svg",{width:e,height:e,viewBox:"0 0 32 32",fill:"currentColor",className:i,"aria-hidden":"true",children:(0,s.jsx)("path",{d:"M28 10v18H10V10h18m0-2H10a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2z"})}),b=({size:e=12,className:i})=>(0,s.jsx)("svg",{width:e,height:e,viewBox:"0 0 32 32",fill:"currentColor",className:i,"aria-hidden":"true",children:(0,s.jsx)("path",{d:"M18 6L16.6 7.4 24.2 15H4v2h20.2l-7.6 7.6L18 26l10-10z"})}),M=({size:e=12,className:i})=>(0,s.jsx)("svg",{width:e,height:e,viewBox:"0 0 32 32",fill:"currentColor",className:i,"aria-hidden":"true",children:(0,s.jsx)("path",{d:"M14 26l1.4-1.4L7.8 17H28v-2H7.8l7.6-7.6L14 6 4 16z"})});function v({file:e,status:i,copy:n=!0,children:d}){let a=(0,t.useRef)(null),[o,c]=(0,t.useState)(!1);return(0,s.jsxs)("div",{className:"codeCard_fiIG",children:[(0,s.jsxs)("div",{className:"codeBar_SZ78",children:[(0,s.jsx)("span",{className:"codeDot_JDOV"}),e&&(0,s.jsx)("span",{className:"codeFile_uZDd",children:e}),(0,s.jsx)("span",{className:"codeSpacer_nRmZ"}),i?"tested"===i?(0,s.jsx)("span",{className:`${l} ok_rUJx`,children:"tested"}):"warn"===i?(0,s.jsx)("span",{className:`${l} ${r}`,children:"caveat"}):"note"===i?(0,s.jsx)("span",{className:l,children:"note"}):"string"==typeof i?(0,s.jsx)("span",{className:l,children:i}):i:null,n&&(0,s.jsx)("button",{type:"button",className:"codeCopy_fKPb",onClick:()=>{if(!a.current)return;let e=a.current.innerText;"u">typeof navigator&&navigator.clipboard&&navigator.clipboard.writeText(e).then(()=>{c(!0),setTimeout(()=>c(!1),1200)})},"aria-label":"Copy code",children:o?"Copied":(0,s.jsx)(f,{})})]}),(0,s.jsx)("pre",{ref:a,className:"codeBlock_oEWX",children:d})]})}let N={info:({size:e=18,className:i})=>(0,s.jsxs)("svg",{width:e,height:e,viewBox:"0 0 32 32",fill:"currentColor",className:i,"aria-hidden":"true",children:[(0,s.jsx)("path",{d:"M16 2A14 14 0 1 0 30 16 14 14 0 0 0 16 2zm0 26a12 12 0 1 1 12-12 12 12 0 0 1-12 12z"}),(0,s.jsx)("path",{d:"M16 14h-2v2h1v6h-1v2h4v-2h-1v-8zm-.5-5a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 15.5 9z"})]}),warn:({size:e=18,className:i})=>(0,s.jsxs)("svg",{width:e,height:e,viewBox:"0 0 32 32",fill:"currentColor",className:i,"aria-hidden":"true",children:[(0,s.jsx)("path",{d:"M16 23a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 16 23zM15 13h2v8h-2z"}),(0,s.jsx)("path",{d:"M28.7 26.31L17.36 4.27a1.51 1.51 0 0 0-2.72 0L3.3 26.31a1.5 1.5 0 0 0 1.36 2.19h22.69a1.5 1.5 0 0 0 1.35-2.19z"})]}),success:g};function _({type:e="info",title:i,children:n}){let t=N[e];return(0,s.jsxs)("div",{className:`callout_yWfv ${"warn"===e?r:"success"===e?"success_D78d":""}`,children:[(0,s.jsx)("span",{className:"calloutIcon_hdwU",children:(0,s.jsx)(t,{size:18})}),(0,s.jsxs)("div",{className:"calloutBody_Qz4I",children:[i&&(0,s.jsx)("strong",{className:"calloutTitle_MXy4",children:i}),n]})]})}function y({children:e}){return(0,s.jsx)("div",{className:"compare_WfXa",children:e})}function C({kind:e,title:i,pill:n,children:t}){return(0,s.jsxs)("div",{className:`compareCol_nZe9 ${"bad"===e?"bad_pZ5b":"good_EJeo"}`,children:[(0,s.jsxs)("div",{className:"compareHead_vAhW",children:[(0,s.jsx)("span",{children:i??("bad"===e?"Before":"After")}),n&&(0,s.jsx)("span",{className:"comparePill_fmmx",children:n})]}),(0,s.jsx)("div",{className:"compareBody_hP62",children:t})]})}function w({title:e,command:i,columns:n,rows:t}){let[l,r,a,o,c]=n??["Variant","Speed","ns/op","B/op","\u0394"];return(0,s.jsxs)("div",{className:"bench_zMa2",children:[(0,s.jsxs)("div",{className:"benchHead_q6K3",children:[(0,s.jsx)("span",{children:e}),i&&(0,s.jsxs)("span",{className:"benchCmd_iUFI",children:[(0,s.jsx)("span",{className:"benchPrompt_LRr4",children:"$"}),i]})]}),(0,s.jsxs)("table",{className:"benchTable_u8XZ",children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:l}),(0,s.jsx)("th",{style:{width:"40%"},children:r}),(0,s.jsx)("th",{className:d,children:a}),(0,s.jsx)("th",{className:d,children:o}),(0,s.jsx)("th",{className:d,children:c})]})}),(0,s.jsx)("tbody",{children:t.map((e,i)=>{let n="win"===e.barKind?"win_PjNM":"lose"===e.barKind?"lose_A9dr":"",t="good"===e.deltaKind?"deltaGood_dYlm":"bad"===e.deltaKind?"deltaBad_yHEA":d;return(0,s.jsxs)("tr",{className:e.winner?"benchWinner_jDc2":void 0,children:[(0,s.jsx)("td",{className:"benchLabel_uFhm",children:e.label}),(0,s.jsx)("td",{children:null!=e.bar&&(0,s.jsx)("span",{className:"bar_jZ6H",children:(0,s.jsx)("span",{className:"barTrack_lefl",children:(0,s.jsx)("span",{className:`barFill_bMgr ${n}`,style:{width:`${100*Math.max(0,Math.min(1,e.bar))}%`}})})})}),(0,s.jsx)("td",{className:d,children:e.nsOp}),(0,s.jsx)("td",{className:d,children:e.bOp}),(0,s.jsx)("td",{className:t,children:e.delta})]},i)})})]})]})}function S({columns:e,rows:i,children:n}){if(n)return(0,s.jsx)("div",{className:a,children:n});let[t,l,r]=e??["Symbol","Signature","Since"];return(0,s.jsx)("div",{className:a,children:(0,s.jsxs)("table",{className:"apiTable_kmi_",children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:t}),(0,s.jsx)("th",{children:l}),(0,s.jsx)("th",{children:r})]})}),(0,s.jsx)("tbody",{children:i?.map((e,i)=>(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("code",{children:e.symbol})}),(0,s.jsxs)("td",{children:[(0,s.jsx)("code",{children:e.signature}),e.description&&(0,s.jsx)("div",{className:"apiDesc__siK",children:e.description})]}),(0,s.jsx)("td",{children:e.since&&(0,s.jsx)("code",{children:e.since})})]},i))})]})})}function A({status:e,children:i}){return(0,s.jsx)(s.Fragment,{})}function T({title:e="Steps",items:i,children:n}){let l,r=(l=i||(n?t.Children.toArray(n).filter(e=>t.isValidElement(e)).map(e=>({label:e.props.children,impact:e.props.status,done:!1})):[])).filter(e=>e.done).length;return(0,s.jsxs)("div",{className:"check_Z_XE",children:[(0,s.jsxs)("div",{className:"checkHead__B8i",children:[(0,s.jsx)("span",{children:e}),i&&(0,s.jsxs)("span",{children:[r," / ",l.length," complete"]})]}),(0,s.jsx)("ul",{className:"checkList_ziWk",children:l.map((e,i)=>(0,s.jsxs)("li",{className:`checkItem_jgfw ${e.done?"done_rLON":""}`,children:[(0,s.jsx)("span",{className:"checkBox_TriO",children:e.done&&(0,s.jsx)(g,{size:10})}),(0,s.jsx)("span",{className:"checkLbl_IWQU",children:e.label}),e.impact&&(0,s.jsx)("span",{className:"checkImpact_BaeN",children:e.impact})]},i))})]})}var k=n(5310);function P({prev:e,next:i}){return(0,s.jsxs)("nav",{className:"pager_oMm2",children:[e?(0,s.jsxs)(k.A,{to:e.to,className:o,children:[(0,s.jsxs)("span",{className:c,children:[(0,s.jsx)(M,{})," ",e.label??"Previous"]}),(0,s.jsx)("span",{className:h,children:e.title})]}):(0,s.jsx)("span",{}),i?(0,s.jsxs)(k.A,{to:i.to,className:`${o} next_PLI2`,children:[(0,s.jsxs)("span",{className:c,children:[i.label??"Next"," ",(0,s.jsx)(b,{})]}),(0,s.jsx)("span",{className:h,children:i.title})]}):(0,s.jsx)("span",{})]})}},8453(e,i,n){n.d(i,{R:()=>r,x:()=>d});var s=n(6540);let t={},l=s.createContext(t);function r(e){let i=s.useContext(l);return s.useMemo(function(){return"function"==typeof e?e(i):{...i,...e}},[i,e])}function d(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(l.Provider,{value:i},e.children)}}}]);
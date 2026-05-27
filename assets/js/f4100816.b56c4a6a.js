"use strict";(self.webpackChunkfp_go_docs=self.webpackChunkfp_go_docs||[]).push([["112"],{647(e,s,n){n.r(s),n.d(s,{metadata:()=>i,default:()=>h,frontMatter:()=>l,contentTitle:()=>c,toc:()=>d,assets:()=>o});var i=JSON.parse('{"id":"v2/collections/record-monoid","title":"Record - Monoid","description":"Combining maps using monoid operations for powerful composition patterns.","source":"@site/docs/v2/collections/record-monoid.md","sourceDirName":"v2/collections","slug":"/v2/collections/record-monoid","permalink":"/fp-go/docs/v2/collections/record-monoid","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":13,"frontMatter":{"title":"Record - Monoid","hide_title":true,"description":"Combining maps using monoid operations for powerful composition patterns.","sidebar_position":13},"sidebar":"apiSidebar","previous":{"title":"Record - Equality","permalink":"/fp-go/docs/v2/collections/record-eq"},"next":{"title":"Record - Ordered","permalink":"/fp-go/docs/v2/collections/record-ord"}}'),a=n(4848),t=n(8453),r=n(5811);let l={title:"Record - Monoid",hide_title:!0,description:"Combining maps using monoid operations for powerful composition patterns.",sidebar_position:13},c,o={},d=[{value:"Fold - Basic",id:"fold---basic",level:3},{value:"FoldMap - Transform and Fold",id:"foldmap---transform-and-fold",level:3},{value:"String Concatenation",id:"string-concatenation",level:3},{value:"Union - Merge Maps",id:"union---merge-maps",level:3},{value:"Collecting Arrays",id:"collecting-arrays",level:3},{value:"Combining Configurations",id:"combining-configurations",level:3},{value:"Aggregating Statistics",id:"aggregating-statistics",level:3},{value:"Merging Multiple Maps",id:"merging-multiple-maps",level:3},{value:"Accumulating Results",id:"accumulating-results",level:3},{value:"Building Indexes",id:"building-indexes",level:3}];function m(e){let s={code:"code",h3:"h3",hr:"hr",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components},{Callout:n}=s;return n||function(e,s){throw Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Callout",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.zY,{eyebrow:"Reference \xb7 Collections",title:"Record Monoid",lede:"Combining maps using monoid operations. Records form monoids under various operations, enabling powerful composition patterns.",meta:[{label:"Package",value:"github.com/IBM/fp-go/v2/record"},{label:"Operations",value:"Fold, FoldMap, Union"}]}),"\n",(0,a.jsx)(s.hr,{}),"\n",(0,a.jsx)(r.wn,{num:"1",title:"Core API",children:(0,a.jsx)(r.vr,{children:(0,a.jsxs)(s.table,{children:[(0,a.jsx)(s.thead,{children:(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.th,{children:"Function"}),(0,a.jsx)(s.th,{children:"Signature"}),(0,a.jsx)(s.th,{children:"Description"})]})}),(0,a.jsxs)(s.tbody,{children:[(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:(0,a.jsx)(s.code,{children:"Fold"})}),(0,a.jsx)(s.td,{children:(0,a.jsx)(s.code,{children:"func Fold[K comparable, V any](Monoid[V]) func(map[K]V) V"})}),(0,a.jsx)(s.td,{children:"Fold map to value"})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:(0,a.jsx)(s.code,{children:"FoldMap"})}),(0,a.jsx)(s.td,{children:(0,a.jsx)(s.code,{children:"func FoldMap[K comparable, A, B any](Monoid[B]) func(func(A) B) func(map[K]A) B"})}),(0,a.jsx)(s.td,{children:"Map then fold"})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:(0,a.jsx)(s.code,{children:"Union"})}),(0,a.jsx)(s.td,{children:(0,a.jsx)(s.code,{children:"func Union[K comparable, V any](Magma[V]) func(map[K]V) func(map[K]V) map[K]V"})}),(0,a.jsx)(s.td,{children:"Merge with function"})]})]})]})})}),"\n",(0,a.jsx)(s.hr,{}),"\n",(0,a.jsxs)(r.wn,{num:"2",title:"Usage Examples",children:[(0,a.jsx)(s.h3,{id:"fold---basic",children:"Fold - Basic"}),(0,a.jsx)(r.av,{file:"fold.go",children:`import (
  R "github.com/IBM/fp-go/v2/record"
  M "github.com/IBM/fp-go/v2/monoid"
  F "github.com/IBM/fp-go/v2/function"
)

m := map[string]int{"a": 1, "b": 2, "c": 3}

// Sum all values
sum := F.Pipe2(
  m,
  R.Fold(M.MonoidSum[int]()),
)
// 6

// Product of all values
product := F.Pipe2(
  m,
  R.Fold(M.MonoidProduct[int]()),
)
// 6
`}),(0,a.jsx)(s.h3,{id:"foldmap---transform-and-fold",children:"FoldMap - Transform and Fold"}),(0,a.jsx)(r.av,{file:"foldmap.go",children:`type Product struct {
  Name  string
  Price float64
}

products := map[string]Product{
  "laptop": {Name: "Laptop", Price: 999},
  "mouse":  {Name: "Mouse", Price: 29},
  "keyboard": {Name: "Keyboard", Price: 79},
}

// Calculate total price
total := F.Pipe2(
  products,
  R.FoldMap(M.MonoidSum[float64]())(func(p Product) float64 {
      return p.Price
  }),
)
// 1107.0
`}),(0,a.jsx)(s.h3,{id:"string-concatenation",children:"String Concatenation"}),(0,a.jsx)(r.av,{file:"concat.go",children:`m := map[string]string{
  "first":  "Hello",
  "second": "World",
  "third":  "!",
}

// Concatenate all values
result := F.Pipe2(
  m,
  R.Fold(M.MonoidString),
)
// "HelloWorld!" (order may vary)

// With separator
import S "github.com/IBM/fp-go/v2/string"

separated := F.Pipe2(
  m,
  R.FoldMap(M.MonoidString)(func(s string) string {
      return s + " "
  }),
)
// "Hello World ! " (order may vary)
`}),(0,a.jsx)(s.h3,{id:"union---merge-maps",children:"Union - Merge Maps"}),(0,a.jsx)(r.av,{file:"union.go",children:`m1 := map[string]int{"a": 1, "b": 2}
m2 := map[string]int{"b": 3, "c": 4}

// Merge with sum
merged := R.Union(M.MonoidSum[int]())(m2)(m1)
// map[string]int{"a": 1, "b": 5, "c": 4}

// Merge with max
import Mg "github.com/IBM/fp-go/v2/magma"

maxMagma := Mg.MakeMagma(func(x, y int) int {
  if x > y {
      return x
  }
  return y
})

maxMerged := R.Union(maxMagma)(m2)(m1)
// map[string]int{"a": 1, "b": 3, "c": 4}
`}),(0,a.jsx)(s.h3,{id:"collecting-arrays",children:"Collecting Arrays"}),(0,a.jsx)(r.av,{file:"arrays.go",children:`import A "github.com/IBM/fp-go/v2/array"

m := map[string][]int{
  "group1": {1, 2, 3},
  "group2": {4, 5},
  "group3": {6},
}

// Concatenate all arrays
allValues := F.Pipe2(
  m,
  R.Fold(M.MonoidArray[int]()),
)
// []int{1, 2, 3, 4, 5, 6} (order may vary)
`}),(0,a.jsx)(s.h3,{id:"combining-configurations",children:"Combining Configurations"}),(0,a.jsx)(r.av,{file:"config.go",children:`type Config struct {
  MaxRetries int
  Timeout    int
}

configs := map[string]Config{
  "service1": {MaxRetries: 3, Timeout: 30},
  "service2": {MaxRetries: 5, Timeout: 60},
}

// Find max values
maxConfig := F.Pipe2(
  configs,
  R.FoldMap(
      M.MakeMonoid(
          func(a, b Config) Config {
              return Config{
                  MaxRetries: max(a.MaxRetries, b.MaxRetries),
                  Timeout:    max(a.Timeout, b.Timeout),
              }
          },
          Config{MaxRetries: 0, Timeout: 0},
      ),
  )(F.Identity[Config]),
)
// Config{MaxRetries: 5, Timeout: 60}
`}),(0,a.jsx)(s.h3,{id:"aggregating-statistics",children:"Aggregating Statistics"}),(0,a.jsx)(r.av,{file:"stats.go",children:`type Stats struct {
  Count int
  Sum   float64
}

data := map[string][]float64{
  "group1": {1.0, 2.0, 3.0},
  "group2": {4.0, 5.0},
}

// Calculate combined statistics
statsMonoid := M.MakeMonoid(
  func(a, b Stats) Stats {
      return Stats{
          Count: a.Count + b.Count,
          Sum:   a.Sum + b.Sum,
      }
  },
  Stats{Count: 0, Sum: 0},
)

combined := F.Pipe2(
  data,
  R.FoldMap(statsMonoid)(func(values []float64) Stats {
      sum := 0.0
      for _, v := range values {
          sum += v
      }
      return Stats{Count: len(values), Sum: sum}
  }),
)
// Stats{Count: 5, Sum: 15.0}
`})]}),"\n",(0,a.jsx)(s.hr,{}),"\n",(0,a.jsxs)(r.wn,{num:"3",title:"Common Patterns",children:[(0,a.jsx)(s.h3,{id:"merging-multiple-maps",children:"Merging Multiple Maps"}),(0,a.jsx)(r.av,{file:"merge_multiple.go",children:`maps := []map[string]int{
  {"a": 1, "b": 2},
  {"b": 3, "c": 4},
  {"c": 5, "d": 6},
}

// Merge all with sum
import A "github.com/IBM/fp-go/v2/array"

result := F.Pipe2(
  maps,
  A.Reduce(
      func(acc, m map[string]int) map[string]int {
          return R.Union(M.MonoidSum[int]())(m)(acc)
      },
      map[string]int{},
  ),
)
// map[string]int{"a": 1, "b": 5, "c": 9, "d": 6}
`}),(0,a.jsx)(s.h3,{id:"accumulating-results",children:"Accumulating Results"}),(0,a.jsx)(r.av,{file:"accumulate.go",children:`type Result struct {
  Success int
  Failed  int
}

results := map[string]Result{
  "batch1": {Success: 10, Failed: 2},
  "batch2": {Success: 15, Failed: 1},
  "batch3": {Success: 8, Failed: 3},
}

resultMonoid := M.MakeMonoid(
  func(a, b Result) Result {
      return Result{
          Success: a.Success + b.Success,
          Failed:  a.Failed + b.Failed,
      }
  },
  Result{Success: 0, Failed: 0},
)

total := F.Pipe2(
  results,
  R.Fold(resultMonoid),
)
// Result{Success: 33, Failed: 6}
`}),(0,a.jsx)(s.h3,{id:"building-indexes",children:"Building Indexes"}),(0,a.jsx)(r.av,{file:"index.go",children:`type Index map[string][]string

indexes := map[string]Index{
  "doc1": {"word1": {"doc1"}, "word2": {"doc1"}},
  "doc2": {"word1": {"doc2"}, "word3": {"doc2"}},
}

// Merge indexes
appendMagma := Mg.MakeMagma(func(x, y []string) []string {
  return append(x, y...)
})

combined := F.Pipe2(
  indexes,
  R.Fold(R.Union(appendMagma)),
)
// Index{
//   "word1": ["doc1", "doc2"],
//   "word2": ["doc1"],
//   "word3": ["doc2"],
// }
`})]}),"\n",(0,a.jsx)(s.hr,{}),"\n",(0,a.jsx)(n,{type:"info",children:(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.strong,{children:"Monoid Laws"}),": Monoids must satisfy associativity and have an identity element. This ensures that folding operations produce consistent results regardless of evaluation order."]})}),"\n",(0,a.jsx)(n,{type:"info",children:(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.strong,{children:"Order Independence"}),": Since Go maps have undefined iteration order, fold operations should use commutative monoids for predictable results."]})}),"\n",(0,a.jsx)(s.hr,{}),"\n",(0,a.jsx)(r.is,{prev:{to:"/docs/v2/collections/record-ord",title:"Record Ordered"},next:{to:"/docs/v2/collections/record-traverse",title:"Record Traverse"}}),"\n",(0,a.jsx)(s.hr,{})]})}function h(e={}){let{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(m,{...e})}):m(e)}},5811(e,s,n){n.d(s,{Pq:()=>N,eM:()=>S,hg:()=>F,_1:()=>C,av:()=>M,Gs:()=>y,vr:()=>w,x7:()=>u,bY:()=>R,wn:()=>g,zY:()=>h,ju:()=>p,BQ:()=>x,is:()=>B});var i=n(4848),a=n(6540);let t="codeTag_uQ6s",r="warn_PIJZ",l="benchNum_PicT",c="api_M0YO",o="pagerLink_hQ8Y",d="pagerLbl_CteO",m="pagerTtl_t0em";function h({eyebrow:e,title:s,titleAccent:n,lede:a,meta:t}){return(0,i.jsxs)("header",{className:"head_Sp2B",children:[(0,i.jsxs)("div",{className:"headLeft_aDUD",children:[e&&(0,i.jsx)("div",{className:"eyebrow__SSv",children:e}),(0,i.jsxs)("h1",{className:"headTitle_xWjG",children:[s,n?(0,i.jsxs)(i.Fragment,{children:[" ",(0,i.jsx)("em",{children:n})]}):null]}),a&&(0,i.jsx)("p",{className:"lede_Ltdj",children:a})]}),t&&t.length>0&&(0,i.jsx)("aside",{className:"headMeta_kmCF",children:t.map((e,s)=>(0,i.jsxs)("div",{className:"metaRow_drwK",children:[(0,i.jsx)("span",{className:"metaK_SNLg",children:e.label}),(0,i.jsx)("span",{className:"metaV_zAp5",children:e.value})]},s))})]})}function u({children:e}){return(0,i.jsx)("span",{className:"pill_Lzl6",children:e})}function p({children:e}){return(0,i.jsx)("div",{className:"tldr_mz3p",children:e})}function x({label:e,value:s,accent:n,unit:a,description:t,variant:r="default",prose:l}){return(0,i.jsxs)("div",{className:`tldrCard_nSap ${"up"===r?"up_ip1p":"down"===r?"down_x6We":""}`,children:[e&&(0,i.jsx)("div",{className:"tldrK_kP7m",children:e}),(0,i.jsxs)("div",{className:`tldrV_gUPe ${l?"tldrVProse_sV_2":""}`,children:[s,n?(0,i.jsx)("em",{children:n}):null,a?(0,i.jsx)("small",{children:a}):null]}),t&&(0,i.jsx)("div",{className:"tldrD_kfCX",children:t})]})}function g({id:e,number:s,title:n,titleAccent:a,tag:t,lede:r,children:l}){return(0,i.jsxs)("section",{className:"section_B_ST",children:[(0,i.jsxs)("div",{className:"sectionHead_oGCN",children:[(0,i.jsxs)("div",{className:"sectionHeadLeft_bfh9",children:[s&&(0,i.jsx)("span",{className:"sectionNum_qiYt",children:s}),(0,i.jsxs)("h2",{className:"sectionTitle__6nw",id:e,children:[n,a?(0,i.jsxs)(i.Fragment,{children:[" ",(0,i.jsx)("em",{children:a})]}):null]})]}),t&&(0,i.jsx)("span",{className:"sectionTag_se22",children:t})]}),r&&(0,i.jsx)("p",{className:"sectionLede_yuVk",children:r}),l]})}let j=({size:e=14,className:s})=>(0,i.jsx)("svg",{width:e,height:e,viewBox:"0 0 32 32",fill:"currentColor",className:s,"aria-hidden":"true",children:(0,i.jsx)("path",{d:"M13 24l-9-9 1.4-1.4L13 21.2 26.6 7.6 28 9z"})}),f=({size:e=14,className:s})=>(0,i.jsx)("svg",{width:e,height:e,viewBox:"0 0 32 32",fill:"currentColor",className:s,"aria-hidden":"true",children:(0,i.jsx)("path",{d:"M28 10v18H10V10h18m0-2H10a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2z"})}),v=({size:e=12,className:s})=>(0,i.jsx)("svg",{width:e,height:e,viewBox:"0 0 32 32",fill:"currentColor",className:s,"aria-hidden":"true",children:(0,i.jsx)("path",{d:"M18 6L16.6 7.4 24.2 15H4v2h20.2l-7.6 7.6L18 26l10-10z"})}),b=({size:e=12,className:s})=>(0,i.jsx)("svg",{width:e,height:e,viewBox:"0 0 32 32",fill:"currentColor",className:s,"aria-hidden":"true",children:(0,i.jsx)("path",{d:"M14 26l1.4-1.4L7.8 17H28v-2H7.8l7.6-7.6L14 6 4 16z"})});function M({file:e,status:s,copy:n=!0,children:l}){let c=(0,a.useRef)(null),[o,d]=(0,a.useState)(!1);return(0,i.jsxs)("div",{className:"codeCard_fiIG",children:[(0,i.jsxs)("div",{className:"codeBar_SZ78",children:[(0,i.jsx)("span",{className:"codeDot_JDOV"}),e&&(0,i.jsx)("span",{className:"codeFile_uZDd",children:e}),(0,i.jsx)("span",{className:"codeSpacer_nRmZ"}),s?"tested"===s?(0,i.jsx)("span",{className:`${t} ok_rUJx`,children:"tested"}):"warn"===s?(0,i.jsx)("span",{className:`${t} ${r}`,children:"caveat"}):"note"===s?(0,i.jsx)("span",{className:t,children:"note"}):"string"==typeof s?(0,i.jsx)("span",{className:t,children:s}):s:null,n&&(0,i.jsx)("button",{type:"button",className:"codeCopy_fKPb",onClick:()=>{if(!c.current)return;let e=c.current.innerText;"u">typeof navigator&&navigator.clipboard&&navigator.clipboard.writeText(e).then(()=>{d(!0),setTimeout(()=>d(!1),1200)})},"aria-label":"Copy code",children:o?"Copied":(0,i.jsx)(f,{})})]}),(0,i.jsx)("pre",{ref:c,className:"codeBlock_oEWX",children:l})]})}let _={info:({size:e=18,className:s})=>(0,i.jsxs)("svg",{width:e,height:e,viewBox:"0 0 32 32",fill:"currentColor",className:s,"aria-hidden":"true",children:[(0,i.jsx)("path",{d:"M16 2A14 14 0 1 0 30 16 14 14 0 0 0 16 2zm0 26a12 12 0 1 1 12-12 12 12 0 0 1-12 12z"}),(0,i.jsx)("path",{d:"M16 14h-2v2h1v6h-1v2h4v-2h-1v-8zm-.5-5a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 15.5 9z"})]}),warn:({size:e=18,className:s})=>(0,i.jsxs)("svg",{width:e,height:e,viewBox:"0 0 32 32",fill:"currentColor",className:s,"aria-hidden":"true",children:[(0,i.jsx)("path",{d:"M16 23a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 16 23zM15 13h2v8h-2z"}),(0,i.jsx)("path",{d:"M28.7 26.31L17.36 4.27a1.51 1.51 0 0 0-2.72 0L3.3 26.31a1.5 1.5 0 0 0 1.36 2.19h22.69a1.5 1.5 0 0 0 1.35-2.19z"})]}),success:j};function N({type:e="info",title:s,children:n}){let a=_[e];return(0,i.jsxs)("div",{className:`callout_yWfv ${"warn"===e?r:"success"===e?"success_D78d":""}`,children:[(0,i.jsx)("span",{className:"calloutIcon_hdwU",children:(0,i.jsx)(a,{size:18})}),(0,i.jsxs)("div",{className:"calloutBody_Qz4I",children:[s&&(0,i.jsx)("strong",{className:"calloutTitle_MXy4",children:s}),n]})]})}function y({children:e}){return(0,i.jsx)("div",{className:"compare_WfXa",children:e})}function C({kind:e,title:s,pill:n,children:a}){return(0,i.jsxs)("div",{className:`compareCol_nZe9 ${"bad"===e?"bad_pZ5b":"good_EJeo"}`,children:[(0,i.jsxs)("div",{className:"compareHead_vAhW",children:[(0,i.jsx)("span",{children:s??("bad"===e?"Before":"After")}),n&&(0,i.jsx)("span",{className:"comparePill_fmmx",children:n})]}),(0,i.jsx)("div",{className:"compareBody_hP62",children:a})]})}function F({title:e,command:s,columns:n,rows:a}){let[t,r,c,o,d]=n??["Variant","Speed","ns/op","B/op","\u0394"];return(0,i.jsxs)("div",{className:"bench_zMa2",children:[(0,i.jsxs)("div",{className:"benchHead_q6K3",children:[(0,i.jsx)("span",{children:e}),s&&(0,i.jsxs)("span",{className:"benchCmd_iUFI",children:[(0,i.jsx)("span",{className:"benchPrompt_LRr4",children:"$"}),s]})]}),(0,i.jsxs)("table",{className:"benchTable_u8XZ",children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:t}),(0,i.jsx)("th",{style:{width:"40%"},children:r}),(0,i.jsx)("th",{className:l,children:c}),(0,i.jsx)("th",{className:l,children:o}),(0,i.jsx)("th",{className:l,children:d})]})}),(0,i.jsx)("tbody",{children:a.map((e,s)=>{let n="win"===e.barKind?"win_PjNM":"lose"===e.barKind?"lose_A9dr":"",a="good"===e.deltaKind?"deltaGood_dYlm":"bad"===e.deltaKind?"deltaBad_yHEA":l;return(0,i.jsxs)("tr",{className:e.winner?"benchWinner_jDc2":void 0,children:[(0,i.jsx)("td",{className:"benchLabel_uFhm",children:e.label}),(0,i.jsx)("td",{children:null!=e.bar&&(0,i.jsx)("span",{className:"bar_jZ6H",children:(0,i.jsx)("span",{className:"barTrack_lefl",children:(0,i.jsx)("span",{className:`barFill_bMgr ${n}`,style:{width:`${100*Math.max(0,Math.min(1,e.bar))}%`}})})})}),(0,i.jsx)("td",{className:l,children:e.nsOp}),(0,i.jsx)("td",{className:l,children:e.bOp}),(0,i.jsx)("td",{className:a,children:e.delta})]},s)})})]})]})}function w({columns:e,rows:s,children:n}){if(n)return(0,i.jsx)("div",{className:c,children:n});let[a,t,r]=e??["Symbol","Signature","Since"];return(0,i.jsx)("div",{className:c,children:(0,i.jsxs)("table",{className:"apiTable_kmi_",children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:a}),(0,i.jsx)("th",{children:t}),(0,i.jsx)("th",{children:r})]})}),(0,i.jsx)("tbody",{children:s?.map((e,s)=>(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:e.symbol})}),(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:e.signature}),e.description&&(0,i.jsx)("div",{className:"apiDesc__siK",children:e.description})]}),(0,i.jsx)("td",{children:e.since&&(0,i.jsx)("code",{children:e.since})})]},s))})]})})}function S({status:e,children:s}){return(0,i.jsx)(i.Fragment,{})}function R({title:e="Steps",items:s,children:n}){let t,r=(t=s||(n?a.Children.toArray(n).filter(e=>a.isValidElement(e)).map(e=>({label:e.props.children,impact:e.props.status,done:!1})):[])).filter(e=>e.done).length;return(0,i.jsxs)("div",{className:"check_Z_XE",children:[(0,i.jsxs)("div",{className:"checkHead__B8i",children:[(0,i.jsx)("span",{children:e}),s&&(0,i.jsxs)("span",{children:[r," / ",t.length," complete"]})]}),(0,i.jsx)("ul",{className:"checkList_ziWk",children:t.map((e,s)=>(0,i.jsxs)("li",{className:`checkItem_jgfw ${e.done?"done_rLON":""}`,children:[(0,i.jsx)("span",{className:"checkBox_TriO",children:e.done&&(0,i.jsx)(j,{size:10})}),(0,i.jsx)("span",{className:"checkLbl_IWQU",children:e.label}),e.impact&&(0,i.jsx)("span",{className:"checkImpact_BaeN",children:e.impact})]},s))})]})}var P=n(5310);function B({prev:e,next:s}){return(0,i.jsxs)("nav",{className:"pager_oMm2",children:[e?(0,i.jsxs)(P.A,{to:e.to,className:o,children:[(0,i.jsxs)("span",{className:d,children:[(0,i.jsx)(b,{})," ",e.label??"Previous"]}),(0,i.jsx)("span",{className:m,children:e.title})]}):(0,i.jsx)("span",{}),s?(0,i.jsxs)(P.A,{to:s.to,className:`${o} next_PLI2`,children:[(0,i.jsxs)("span",{className:d,children:[s.label??"Next"," ",(0,i.jsx)(v,{})]}),(0,i.jsx)("span",{className:m,children:s.title})]}):(0,i.jsx)("span",{})]})}},8453(e,s,n){n.d(s,{R:()=>r,x:()=>l});var i=n(6540);let a={},t=i.createContext(a);function r(e){let s=i.useContext(t);return i.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),i.createElement(t.Provider,{value:s},e.children)}}}]);
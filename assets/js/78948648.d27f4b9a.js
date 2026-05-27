"use strict";(self.webpackChunkfp_go_docs=self.webpackChunkfp_go_docs||[]).push([["4420"],{6308(e,r,s){s.r(r),s.d(r,{metadata:()=>i,default:()=>u,frontMatter:()=>c,contentTitle:()=>a,toc:()=>o,assets:()=>l});var i=JSON.parse('{"id":"v2/collections/record-ord","title":"Record - Ordered","description":"Working with maps in a specific key order using the Ord type class.","source":"@site/docs/v2/collections/record-ord.md","sourceDirName":"v2/collections","slug":"/v2/collections/record-ord","permalink":"/fp-go/docs/v2/collections/record-ord","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":12,"frontMatter":{"title":"Record - Ordered","hide_title":true,"description":"Working with maps in a specific key order using the Ord type class.","sidebar_position":12},"sidebar":"apiSidebar","previous":{"title":"Record - Monoid","permalink":"/fp-go/docs/v2/collections/record-monoid"},"next":{"title":"Record - Traverse","permalink":"/fp-go/docs/v2/collections/record-traverse"}}'),n=s(4848),t=s(8453),d=s(5811);let c={title:"Record - Ordered",hide_title:!0,description:"Working with maps in a specific key order using the Ord type class.",sidebar_position:12},a,l={},o=[{value:"KeysOrd - Sorted Keys",id:"keysord---sorted-keys",level:3},{value:"ValuesOrd - Values by Key Order",id:"valuesord---values-by-key-order",level:3},{value:"ReduceOrd - Ordered Reduction",id:"reduceord---ordered-reduction",level:3},{value:"CollectOrd - Transform in Order",id:"collectord---transform-in-order",level:3},{value:"Numeric Key Ordering",id:"numeric-key-ordering",level:3},{value:"Custom Ordering",id:"custom-ordering",level:3},{value:"Configuration Processing",id:"configuration-processing",level:3},{value:"Deterministic Output",id:"deterministic-output",level:3},{value:"Sorted Aggregation",id:"sorted-aggregation",level:3},{value:"Priority Queue Simulation",id:"priority-queue-simulation",level:3},{value:"Building Sorted Index",id:"building-sorted-index",level:3}];function h(e){let r={code:"code",h3:"h3",hr:"hr",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components},{Callout:s}=r;return s||function(e,r){throw Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Callout",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(d.zY,{eyebrow:"Reference \xb7 Collections",title:"Record Ordered",lede:"Working with maps in a specific key order. Process map entries in sorted order using the Ord type class.",meta:[{label:"Package",value:"github.com/IBM/fp-go/v2/record"},{label:"Operations",value:"KeysOrd, ValuesOrd, ReduceOrd, CollectOrd"}]}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(d.wn,{num:"1",title:"Core API",children:(0,n.jsx)(d.vr,{children:(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Function"}),(0,n.jsx)(r.th,{children:"Signature"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"KeysOrd"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"func KeysOrd[K, V any](Ord[K]) func(map[K]V) []K"})}),(0,n.jsx)(r.td,{children:"Get keys in order"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"ValuesOrd"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"func ValuesOrd[K, V any](Ord[K]) func(map[K]V) []V"})}),(0,n.jsx)(r.td,{children:"Get values by key order"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"ReduceOrd"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"func ReduceOrd[K, A, B any](Ord[K]) func(func(B, A) B, B) func(map[K]A) B"})}),(0,n.jsx)(r.td,{children:"Reduce in order"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"ReduceOrdWithIndex"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"func ReduceOrdWithIndex[K, A, B any](Ord[K]) func(func(K, B, A) B, B) func(map[K]A) B"})}),(0,n.jsx)(r.td,{children:"Reduce with keys in order"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"CollectOrd"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"func CollectOrd[K, A, B any](Ord[K]) func(func(K, A) B) func(map[K]A) []B"})}),(0,n.jsx)(r.td,{children:"Transform to array in order"})]})]})]})})}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsxs)(d.wn,{num:"2",title:"Usage Examples",children:[(0,n.jsx)(r.h3,{id:"keysord---sorted-keys",children:"KeysOrd - Sorted Keys"}),(0,n.jsx)(d.av,{file:"keys_ord.go",children:`import (
  R "github.com/IBM/fp-go/v2/record"
  S "github.com/IBM/fp-go/v2/string"
  F "github.com/IBM/fp-go/v2/function"
)

m := map[string]int{"c": 3, "a": 1, "b": 2}

// Get keys in alphabetical order
keys := F.Pipe2(
  m,
  R.KeysOrd(S.Ord),
)
// []string{"a", "b", "c"}
`}),(0,n.jsx)(r.h3,{id:"valuesord---values-by-key-order",children:"ValuesOrd - Values by Key Order"}),(0,n.jsx)(d.av,{file:"values_ord.go",children:`m := map[string]int{"c": 3, "a": 1, "b": 2}

// Get values ordered by their keys
values := F.Pipe2(
  m,
  R.ValuesOrd(S.Ord),
)
// []int{1, 2, 3}  // Ordered by keys: a, b, c
`}),(0,n.jsx)(r.h3,{id:"reduceord---ordered-reduction",children:"ReduceOrd - Ordered Reduction"}),(0,n.jsx)(d.av,{file:"reduce_ord.go",children:`m := map[string]int{"c": 3, "a": 1, "b": 2}

// Build string in alphabetical order
str := F.Pipe2(
  m,
  R.ReduceOrdWithIndex(S.Ord)(
      func(k string, acc string, v int) string {
          return acc + fmt.Sprintf("%s:%d ", k, v)
      },
      "",
  ),
)
// "a:1 b:2 c:3 "
`}),(0,n.jsx)(r.h3,{id:"collectord---transform-in-order",children:"CollectOrd - Transform in Order"}),(0,n.jsx)(d.av,{file:"collect_ord.go",children:`m := map[string]int{"c": 3, "a": 1, "b": 2}

// Transform to array in key order
pairs := F.Pipe2(
  m,
  R.CollectOrd(S.Ord)(func(k string, v int) string {
      return fmt.Sprintf("%s=%d", k, v)
  }),
)
// []string{"a=1", "b=2", "c=3"}
`}),(0,n.jsx)(r.h3,{id:"numeric-key-ordering",children:"Numeric Key Ordering"}),(0,n.jsx)(d.av,{file:"numeric.go",children:`import N "github.com/IBM/fp-go/v2/number"

m := map[int]string{
  3: "three",
  1: "one",
  2: "two",
}

// Get keys in numeric order
keys := F.Pipe2(
  m,
  R.KeysOrd(N.Ord),
)
// []int{1, 2, 3}

// Get values in key order
values := F.Pipe2(
  m,
  R.ValuesOrd(N.Ord),
)
// []string{"one", "two", "three"}
`}),(0,n.jsx)(r.h3,{id:"custom-ordering",children:"Custom Ordering"}),(0,n.jsx)(d.av,{file:"custom_ord.go",children:`import O "github.com/IBM/fp-go/v2/ord"

type Priority int

const (
  Low    Priority = 1
  Medium Priority = 2
  High   Priority = 3
)

// Custom ordering: High > Medium > Low
priorityOrd := O.FromCompare(func(a, b Priority) int {
  return int(b - a)  // Reverse order
})

tasks := map[Priority]string{
  Low:    "Documentation",
  High:   "Critical Bug",
  Medium: "Feature Request",
}

// Get tasks in priority order
ordered := F.Pipe2(
  tasks,
  R.ValuesOrd(priorityOrd),
)
// []string{"Critical Bug", "Feature Request", "Documentation"}
`}),(0,n.jsx)(r.h3,{id:"configuration-processing",children:"Configuration Processing"}),(0,n.jsx)(d.av,{file:"config.go",children:`type Config struct {
  Key   string
  Value string
}

configs := map[string]Config{
  "database": {Key: "db", Value: "postgres"},
  "cache":    {Key: "cache", Value: "redis"},
  "api":      {Key: "api", Value: "rest"},
}

// Process in alphabetical order
ordered := F.Pipe2(
  configs,
  R.CollectOrd(S.Ord)(func(k string, c Config) string {
      return fmt.Sprintf("%s: %s=%s", k, c.Key, c.Value)
  }),
)
// []string{
//   "api: api=rest",
//   "cache: cache=redis",
//   "database: db=postgres",
// }
`})]}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsxs)(d.wn,{num:"3",title:"Common Patterns",children:[(0,n.jsx)(r.h3,{id:"deterministic-output",children:"Deterministic Output"}),(0,n.jsx)(d.av,{file:"deterministic.go",children:`// Generate consistent output regardless of map iteration order
func FormatConfig(config map[string]string) string {
  return F.Pipe2(
      config,
      R.ReduceOrdWithIndex(S.Ord)(
          func(k string, acc string, v string) string {
              return acc + fmt.Sprintf("%s=%s
", k, v)
          },
          "",
      ),
  )
}

config := map[string]string{
  "port":    "8080",
  "host":    "localhost",
  "timeout": "30",
}

output := FormatConfig(config)
// Always produces:
// "host=localhost
port=8080
timeout=30
"
`}),(0,n.jsx)(r.h3,{id:"sorted-aggregation",children:"Sorted Aggregation"}),(0,n.jsx)(d.av,{file:"aggregate.go",children:`type Stats struct {
  Count int
  Total float64
}

data := map[string]Stats{
  "2023-03": {Count: 100, Total: 1500},
  "2023-01": {Count: 80, Total: 1200},
  "2023-02": {Count: 90, Total: 1350},
}

// Process in chronological order
report := F.Pipe2(
  data,
  R.CollectOrd(S.Ord)(func(month string, s Stats) string {
      avg := s.Total / float64(s.Count)
      return fmt.Sprintf("%s: %.2f avg", month, avg)
  }),
)
// []string{
//   "2023-01: 15.00 avg",
//   "2023-02: 15.00 avg",
//   "2023-03: 15.00 avg",
// }
`}),(0,n.jsx)(r.h3,{id:"priority-queue-simulation",children:"Priority Queue Simulation"}),(0,n.jsx)(d.av,{file:"priority.go",children:`type Task struct {
  Name     string
  Priority int
}

tasks := map[int]Task{
  1: {Name: "Low priority", Priority: 1},
  5: {Name: "High priority", Priority: 5},
  3: {Name: "Medium priority", Priority: 3},
}

// Process by priority (highest first)
import O "github.com/IBM/fp-go/v2/ord"

reverseOrd := O.Reverse(N.Ord)

ordered := F.Pipe2(
  tasks,
  R.ValuesOrd(reverseOrd),
)
// []Task{
//   {Name: "High priority", Priority: 5},
//   {Name: "Medium priority", Priority: 3},
//   {Name: "Low priority", Priority: 1},
// }
`}),(0,n.jsx)(r.h3,{id:"building-sorted-index",children:"Building Sorted Index"}),(0,n.jsx)(d.av,{file:"index.go",children:`type Document struct {
  ID    int
  Title string
}

docs := map[int]Document{
  3: {ID: 3, Title: "Third"},
  1: {ID: 1, Title: "First"},
  2: {ID: 2, Title: "Second"},
}

// Create sorted index
index := F.Pipe2(
  docs,
  R.CollectOrd(N.Ord)(func(id int, doc Document) string {
      return fmt.Sprintf("[%d] %s", id, doc.Title)
  }),
)
// []string{"[1] First", "[2] Second", "[3] Third"}
`})]}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(s,{type:"info",children:(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Deterministic Output"}),": Use ordered operations when you need consistent, reproducible output. This is especially important for testing, logging, and user-facing displays."]})}),"\n",(0,n.jsx)(s,{type:"info",children:(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Performance"}),": Ordered operations require sorting, which adds O(n log n) complexity. Use regular operations when order doesn't matter."]})}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(d.is,{prev:{to:"/docs/v2/collections/record",title:"Record (Map)"},next:{to:"/docs/v2/collections/record-monoid",title:"Record Monoid"}}),"\n",(0,n.jsx)(r.hr,{})]})}function u(e={}){let{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},5811(e,r,s){s.d(r,{Pq:()=>_,eM:()=>P,hg:()=>C,_1:()=>k,av:()=>N,Gs:()=>O,vr:()=>w,x7:()=>m,bY:()=>K,wn:()=>j,zY:()=>u,ju:()=>p,BQ:()=>x,is:()=>B});var i=s(4848),n=s(6540);let t="codeTag_uQ6s",d="warn_PIJZ",c="benchNum_PicT",a="api_M0YO",l="pagerLink_hQ8Y",o="pagerLbl_CteO",h="pagerTtl_t0em";function u({eyebrow:e,title:r,titleAccent:s,lede:n,meta:t}){return(0,i.jsxs)("header",{className:"head_Sp2B",children:[(0,i.jsxs)("div",{className:"headLeft_aDUD",children:[e&&(0,i.jsx)("div",{className:"eyebrow__SSv",children:e}),(0,i.jsxs)("h1",{className:"headTitle_xWjG",children:[r,s?(0,i.jsxs)(i.Fragment,{children:[" ",(0,i.jsx)("em",{children:s})]}):null]}),n&&(0,i.jsx)("p",{className:"lede_Ltdj",children:n})]}),t&&t.length>0&&(0,i.jsx)("aside",{className:"headMeta_kmCF",children:t.map((e,r)=>(0,i.jsxs)("div",{className:"metaRow_drwK",children:[(0,i.jsx)("span",{className:"metaK_SNLg",children:e.label}),(0,i.jsx)("span",{className:"metaV_zAp5",children:e.value})]},r))})]})}function m({children:e}){return(0,i.jsx)("span",{className:"pill_Lzl6",children:e})}function p({children:e}){return(0,i.jsx)("div",{className:"tldr_mz3p",children:e})}function x({label:e,value:r,accent:s,unit:n,description:t,variant:d="default",prose:c}){return(0,i.jsxs)("div",{className:`tldrCard_nSap ${"up"===d?"up_ip1p":"down"===d?"down_x6We":""}`,children:[e&&(0,i.jsx)("div",{className:"tldrK_kP7m",children:e}),(0,i.jsxs)("div",{className:`tldrV_gUPe ${c?"tldrVProse_sV_2":""}`,children:[r,s?(0,i.jsx)("em",{children:s}):null,n?(0,i.jsx)("small",{children:n}):null]}),t&&(0,i.jsx)("div",{className:"tldrD_kfCX",children:t})]})}function j({id:e,number:r,title:s,titleAccent:n,tag:t,lede:d,children:c}){return(0,i.jsxs)("section",{className:"section_B_ST",children:[(0,i.jsxs)("div",{className:"sectionHead_oGCN",children:[(0,i.jsxs)("div",{className:"sectionHeadLeft_bfh9",children:[r&&(0,i.jsx)("span",{className:"sectionNum_qiYt",children:r}),(0,i.jsxs)("h2",{className:"sectionTitle__6nw",id:e,children:[s,n?(0,i.jsxs)(i.Fragment,{children:[" ",(0,i.jsx)("em",{children:n})]}):null]})]}),t&&(0,i.jsx)("span",{className:"sectionTag_se22",children:t})]}),d&&(0,i.jsx)("p",{className:"sectionLede_yuVk",children:d}),c]})}let g=({size:e=14,className:r})=>(0,i.jsx)("svg",{width:e,height:e,viewBox:"0 0 32 32",fill:"currentColor",className:r,"aria-hidden":"true",children:(0,i.jsx)("path",{d:"M13 24l-9-9 1.4-1.4L13 21.2 26.6 7.6 28 9z"})}),f=({size:e=14,className:r})=>(0,i.jsx)("svg",{width:e,height:e,viewBox:"0 0 32 32",fill:"currentColor",className:r,"aria-hidden":"true",children:(0,i.jsx)("path",{d:"M28 10v18H10V10h18m0-2H10a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2z"})}),v=({size:e=12,className:r})=>(0,i.jsx)("svg",{width:e,height:e,viewBox:"0 0 32 32",fill:"currentColor",className:r,"aria-hidden":"true",children:(0,i.jsx)("path",{d:"M18 6L16.6 7.4 24.2 15H4v2h20.2l-7.6 7.6L18 26l10-10z"})}),y=({size:e=12,className:r})=>(0,i.jsx)("svg",{width:e,height:e,viewBox:"0 0 32 32",fill:"currentColor",className:r,"aria-hidden":"true",children:(0,i.jsx)("path",{d:"M14 26l1.4-1.4L7.8 17H28v-2H7.8l7.6-7.6L14 6 4 16z"})});function N({file:e,status:r,copy:s=!0,children:c}){let a=(0,n.useRef)(null),[l,o]=(0,n.useState)(!1);return(0,i.jsxs)("div",{className:"codeCard_fiIG",children:[(0,i.jsxs)("div",{className:"codeBar_SZ78",children:[(0,i.jsx)("span",{className:"codeDot_JDOV"}),e&&(0,i.jsx)("span",{className:"codeFile_uZDd",children:e}),(0,i.jsx)("span",{className:"codeSpacer_nRmZ"}),r?"tested"===r?(0,i.jsx)("span",{className:`${t} ok_rUJx`,children:"tested"}):"warn"===r?(0,i.jsx)("span",{className:`${t} ${d}`,children:"caveat"}):"note"===r?(0,i.jsx)("span",{className:t,children:"note"}):"string"==typeof r?(0,i.jsx)("span",{className:t,children:r}):r:null,s&&(0,i.jsx)("button",{type:"button",className:"codeCopy_fKPb",onClick:()=>{if(!a.current)return;let e=a.current.innerText;"u">typeof navigator&&navigator.clipboard&&navigator.clipboard.writeText(e).then(()=>{o(!0),setTimeout(()=>o(!1),1200)})},"aria-label":"Copy code",children:l?"Copied":(0,i.jsx)(f,{})})]}),(0,i.jsx)("pre",{ref:a,className:"codeBlock_oEWX",children:c})]})}let b={info:({size:e=18,className:r})=>(0,i.jsxs)("svg",{width:e,height:e,viewBox:"0 0 32 32",fill:"currentColor",className:r,"aria-hidden":"true",children:[(0,i.jsx)("path",{d:"M16 2A14 14 0 1 0 30 16 14 14 0 0 0 16 2zm0 26a12 12 0 1 1 12-12 12 12 0 0 1-12 12z"}),(0,i.jsx)("path",{d:"M16 14h-2v2h1v6h-1v2h4v-2h-1v-8zm-.5-5a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 15.5 9z"})]}),warn:({size:e=18,className:r})=>(0,i.jsxs)("svg",{width:e,height:e,viewBox:"0 0 32 32",fill:"currentColor",className:r,"aria-hidden":"true",children:[(0,i.jsx)("path",{d:"M16 23a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 16 23zM15 13h2v8h-2z"}),(0,i.jsx)("path",{d:"M28.7 26.31L17.36 4.27a1.51 1.51 0 0 0-2.72 0L3.3 26.31a1.5 1.5 0 0 0 1.36 2.19h22.69a1.5 1.5 0 0 0 1.35-2.19z"})]}),success:g};function _({type:e="info",title:r,children:s}){let n=b[e];return(0,i.jsxs)("div",{className:`callout_yWfv ${"warn"===e?d:"success"===e?"success_D78d":""}`,children:[(0,i.jsx)("span",{className:"calloutIcon_hdwU",children:(0,i.jsx)(n,{size:18})}),(0,i.jsxs)("div",{className:"calloutBody_Qz4I",children:[r&&(0,i.jsx)("strong",{className:"calloutTitle_MXy4",children:r}),s]})]})}function O({children:e}){return(0,i.jsx)("div",{className:"compare_WfXa",children:e})}function k({kind:e,title:r,pill:s,children:n}){return(0,i.jsxs)("div",{className:`compareCol_nZe9 ${"bad"===e?"bad_pZ5b":"good_EJeo"}`,children:[(0,i.jsxs)("div",{className:"compareHead_vAhW",children:[(0,i.jsx)("span",{children:r??("bad"===e?"Before":"After")}),s&&(0,i.jsx)("span",{className:"comparePill_fmmx",children:s})]}),(0,i.jsx)("div",{className:"compareBody_hP62",children:n})]})}function C({title:e,command:r,columns:s,rows:n}){let[t,d,a,l,o]=s??["Variant","Speed","ns/op","B/op","\u0394"];return(0,i.jsxs)("div",{className:"bench_zMa2",children:[(0,i.jsxs)("div",{className:"benchHead_q6K3",children:[(0,i.jsx)("span",{children:e}),r&&(0,i.jsxs)("span",{className:"benchCmd_iUFI",children:[(0,i.jsx)("span",{className:"benchPrompt_LRr4",children:"$"}),r]})]}),(0,i.jsxs)("table",{className:"benchTable_u8XZ",children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:t}),(0,i.jsx)("th",{style:{width:"40%"},children:d}),(0,i.jsx)("th",{className:c,children:a}),(0,i.jsx)("th",{className:c,children:l}),(0,i.jsx)("th",{className:c,children:o})]})}),(0,i.jsx)("tbody",{children:n.map((e,r)=>{let s="win"===e.barKind?"win_PjNM":"lose"===e.barKind?"lose_A9dr":"",n="good"===e.deltaKind?"deltaGood_dYlm":"bad"===e.deltaKind?"deltaBad_yHEA":c;return(0,i.jsxs)("tr",{className:e.winner?"benchWinner_jDc2":void 0,children:[(0,i.jsx)("td",{className:"benchLabel_uFhm",children:e.label}),(0,i.jsx)("td",{children:null!=e.bar&&(0,i.jsx)("span",{className:"bar_jZ6H",children:(0,i.jsx)("span",{className:"barTrack_lefl",children:(0,i.jsx)("span",{className:`barFill_bMgr ${s}`,style:{width:`${100*Math.max(0,Math.min(1,e.bar))}%`}})})})}),(0,i.jsx)("td",{className:c,children:e.nsOp}),(0,i.jsx)("td",{className:c,children:e.bOp}),(0,i.jsx)("td",{className:n,children:e.delta})]},r)})})]})]})}function w({columns:e,rows:r,children:s}){if(s)return(0,i.jsx)("div",{className:a,children:s});let[n,t,d]=e??["Symbol","Signature","Since"];return(0,i.jsx)("div",{className:a,children:(0,i.jsxs)("table",{className:"apiTable_kmi_",children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:n}),(0,i.jsx)("th",{children:t}),(0,i.jsx)("th",{children:d})]})}),(0,i.jsx)("tbody",{children:r?.map((e,r)=>(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:e.symbol})}),(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:e.signature}),e.description&&(0,i.jsx)("div",{className:"apiDesc__siK",children:e.description})]}),(0,i.jsx)("td",{children:e.since&&(0,i.jsx)("code",{children:e.since})})]},r))})]})})}function P({status:e,children:r}){return(0,i.jsx)(i.Fragment,{})}function K({title:e="Steps",items:r,children:s}){let t,d=(t=r||(s?n.Children.toArray(s).filter(e=>n.isValidElement(e)).map(e=>({label:e.props.children,impact:e.props.status,done:!1})):[])).filter(e=>e.done).length;return(0,i.jsxs)("div",{className:"check_Z_XE",children:[(0,i.jsxs)("div",{className:"checkHead__B8i",children:[(0,i.jsx)("span",{children:e}),r&&(0,i.jsxs)("span",{children:[d," / ",t.length," complete"]})]}),(0,i.jsx)("ul",{className:"checkList_ziWk",children:t.map((e,r)=>(0,i.jsxs)("li",{className:`checkItem_jgfw ${e.done?"done_rLON":""}`,children:[(0,i.jsx)("span",{className:"checkBox_TriO",children:e.done&&(0,i.jsx)(g,{size:10})}),(0,i.jsx)("span",{className:"checkLbl_IWQU",children:e.label}),e.impact&&(0,i.jsx)("span",{className:"checkImpact_BaeN",children:e.impact})]},r))})]})}var R=s(5310);function B({prev:e,next:r}){return(0,i.jsxs)("nav",{className:"pager_oMm2",children:[e?(0,i.jsxs)(R.A,{to:e.to,className:l,children:[(0,i.jsxs)("span",{className:o,children:[(0,i.jsx)(y,{})," ",e.label??"Previous"]}),(0,i.jsx)("span",{className:h,children:e.title})]}):(0,i.jsx)("span",{}),r?(0,i.jsxs)(R.A,{to:r.to,className:`${l} next_PLI2`,children:[(0,i.jsxs)("span",{className:o,children:[r.label??"Next"," ",(0,i.jsx)(v,{})]}),(0,i.jsx)("span",{className:h,children:r.title})]}):(0,i.jsx)("span",{})]})}},8453(e,r,s){s.d(r,{R:()=>d,x:()=>c});var i=s(6540);let n={},t=i.createContext(n);function d(e){let r=i.useContext(t);return i.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),i.createElement(t.Provider,{value:r},e.children)}}}]);
"use strict";(self.webpackChunkfp_go_docs=self.webpackChunkfp_go_docs||[]).push([["4272"],{2857(e,r,s){s.r(r),s.d(r,{metadata:()=>a,default:()=>h,frontMatter:()=>l,contentTitle:()=>c,toc:()=>o,assets:()=>d});var a=JSON.parse('{"id":"v2/collections/record-conversion","title":"Record - Conversion","description":"Converting between maps, arrays, and other data structures with flexible merge strategies.","source":"@site/docs/v2/collections/record-conversion.md","sourceDirName":"v2/collections","slug":"/v2/collections/record-conversion","permalink":"/fp-go/docs/v2/collections/record-conversion","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":18,"frontMatter":{"title":"Record - Conversion","hide_title":true,"description":"Converting between maps, arrays, and other data structures with flexible merge strategies.","sidebar_position":18},"sidebar":"apiSidebar","previous":{"title":"Record - Chain","permalink":"/fp-go/docs/v2/collections/record-chain"},"next":{"title":"Record - Equality","permalink":"/fp-go/docs/v2/collections/record-eq"}}'),n=s(4848),t=s(8453),i=s(5811);let l={title:"Record - Conversion",hide_title:!0,description:"Converting between maps, arrays, and other data structures with flexible merge strategies.",sidebar_position:18},c,d={},o=[{value:"FromArray - Basic",id:"fromarray---basic",level:3},{value:"FromArrayMap - Transform and Build",id:"fromarraymap---transform-and-build",level:3},{value:"ToArray / ToEntries",id:"toarray--toentries",level:3},{value:"Grouping Data",id:"grouping-data",level:3},{value:"Building Indexes",id:"building-indexes",level:3},{value:"Collecting Lists",id:"collecting-lists",level:3},{value:"Frequency Counting",id:"frequency-counting",level:3},{value:"Deduplication",id:"deduplication",level:3},{value:"Aggregation",id:"aggregation",level:3},{value:"Multi-value Mapping",id:"multi-value-mapping",level:3}];function u(e){let r={code:"code",h3:"h3",hr:"hr",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components},{Callout:s}=r;return s||function(e,r){throw Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Callout",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.zY,{eyebrow:"Reference \xb7 Collections",title:"Record Conversion",lede:"Converting between maps and other data structures. Build maps from arrays with custom merge strategies for duplicate keys.",meta:[{label:"Package",value:"github.com/IBM/fp-go/v2/record"},{label:"Operations",value:"FromArray, FromArrayMap, ToArray, ToEntries"}]}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(i.wn,{num:"1",title:"Core API",children:(0,n.jsx)(i.vr,{children:(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Function"}),(0,n.jsx)(r.th,{children:"Signature"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"FromArray"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"func FromArray[K comparable, V any](Magma[V]) func([]Tuple2[K, V]) map[K]V"})}),(0,n.jsx)(r.td,{children:"Array to map"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"FromArrayMap"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"func FromArrayMap[K comparable, A, V any](Magma[V]) func(func(A) Tuple2[K, V]) func([]A) map[K]V"})}),(0,n.jsx)(r.td,{children:"Array to map with transform"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"ToArray"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"func ToArray[K comparable, V any](map[K]V) []Tuple2[K, V]"})}),(0,n.jsx)(r.td,{children:"Map to array"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"ToEntries"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"func ToEntries[K comparable, V any](map[K]V) []Tuple2[K, V]"})}),(0,n.jsx)(r.td,{children:"Map to entries"})]})]})]})})}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsxs)(i.wn,{num:"2",title:"Usage Examples",children:[(0,n.jsx)(r.h3,{id:"fromarray---basic",children:"FromArray - Basic"}),(0,n.jsx)(i.av,{file:"from_array.go",children:`import (
  R "github.com/IBM/fp-go/v2/record"
  T "github.com/IBM/fp-go/v2/tuple"
  Mg "github.com/IBM/fp-go/v2/magma"
)

entries := []T.Tuple2[string, int]{
  T.MakeTuple2("a", 1),
  T.MakeTuple2("b", 2),
  T.MakeTuple2("a", 10),  // Duplicate key
}

// Last value wins
lastWins := Mg.MakeMagma(func(_, y int) int { return y })
m := R.FromArray(lastWins)(entries)
// map[string]int{"a": 10, "b": 2}

// First value wins
firstWins := Mg.MakeMagma(func(x, _ int) int { return x })
m2 := R.FromArray(firstWins)(entries)
// map[string]int{"a": 1, "b": 2}

// Sum duplicates
sumMagma := Mg.MakeMagma(func(x, y int) int { return x + y })
m3 := R.FromArray(sumMagma)(entries)
// map[string]int{"a": 11, "b": 2}
`}),(0,n.jsx)(r.h3,{id:"fromarraymap---transform-and-build",children:"FromArrayMap - Transform and Build"}),(0,n.jsx)(i.av,{file:"from_array_map.go",children:`type User struct {
  ID   int
  Name string
}

users := []User{
  {ID: 1, Name: "Alice"},
  {ID: 2, Name: "Bob"},
  {ID: 1, Name: "Alice Updated"},
}

// Convert to map by ID (last wins)
lastWins := Mg.MakeMagma(func(_, y User) User { return y })
userMap := R.FromArrayMap(lastWins)(
  func(u User) T.Tuple2[int, User] {
      return T.MakeTuple2(u.ID, u)
  },
)(users)
// map[int]User{
//   1: {ID: 1, Name: "Alice Updated"},
//   2: {ID: 2, Name: "Bob"},
// }
`}),(0,n.jsx)(r.h3,{id:"toarray--toentries",children:"ToArray / ToEntries"}),(0,n.jsx)(i.av,{file:"to_array.go",children:`m := map[string]int{"a": 1, "b": 2, "c": 3}

// Convert to array of tuples
entries := R.ToEntries(m)
// []Tuple2[string, int]{
//   {Head: "a", Tail: 1},
//   {Head: "b", Tail: 2},
//   {Head: "c", Tail: 3},
// } (order may vary)

// ToArray is an alias for ToEntries
arr := R.ToArray(m)
// Same result
`}),(0,n.jsx)(r.h3,{id:"grouping-data",children:"Grouping Data"}),(0,n.jsx)(i.av,{file:"grouping.go",children:`type Order struct {
  ID         int
  CustomerID int
  Amount     float64
}

orders := []Order{
  {ID: 1, CustomerID: 1, Amount: 100},
  {ID: 2, CustomerID: 2, Amount: 200},
  {ID: 3, CustomerID: 1, Amount: 150},
}

// Group by customer, sum amounts
sumMagma := Mg.MakeMagma(func(x, y float64) float64 { return x + y })
byCustomer := R.FromArrayMap(sumMagma)(
  func(o Order) T.Tuple2[int, float64] {
      return T.MakeTuple2(o.CustomerID, o.Amount)
  },
)(orders)
// map[int]float64{1: 250, 2: 200}
`}),(0,n.jsx)(r.h3,{id:"building-indexes",children:"Building Indexes"}),(0,n.jsx)(i.av,{file:"index.go",children:`type Product struct {
  SKU  string
  Name string
}

products := []Product{
  {SKU: "A123", Name: "Laptop"},
  {SKU: "B456", Name: "Mouse"},
  {SKU: "A123", Name: "Laptop Pro"},  // Duplicate SKU
}

// Build index (first wins)
firstWins := Mg.MakeMagma(func(x, _ Product) Product { return x })
index := R.FromArrayMap(firstWins)(
  func(p Product) T.Tuple2[string, Product] {
      return T.MakeTuple2(p.SKU, p)
  },
)(products)
// map[string]Product{
//   "A123": {SKU: "A123", Name: "Laptop"},
//   "B456": {SKU: "B456", Name: "Mouse"},
// }
`}),(0,n.jsx)(r.h3,{id:"collecting-lists",children:"Collecting Lists"}),(0,n.jsx)(i.av,{file:"collect.go",children:`type Event struct {
  Type string
  Data string
}

events := []Event{
  {Type: "click", Data: "button1"},
  {Type: "hover", Data: "link1"},
  {Type: "click", Data: "button2"},
}

// Collect events by type
appendMagma := Mg.MakeMagma(func(x, y []string) []string {
  return append(x, y...)
})

byType := R.FromArrayMap(appendMagma)(
  func(e Event) T.Tuple2[string, []string] {
      return T.MakeTuple2(e.Type, []string{e.Data})
  },
)(events)
// map[string][]string{
//   "click": ["button1", "button2"],
//   "hover": ["link1"],
// }
`}),(0,n.jsx)(r.h3,{id:"frequency-counting",children:"Frequency Counting"}),(0,n.jsx)(i.av,{file:"frequency.go",children:`words := []string{"apple", "banana", "apple", "cherry", "banana", "apple"}

// Count occurrences
countMagma := Mg.MakeMagma(func(x, y int) int { return x + y })
frequencies := R.FromArrayMap(countMagma)(
  func(word string) T.Tuple2[string, int] {
      return T.MakeTuple2(word, 1)
  },
)(words)
// map[string]int{
//   "apple": 3,
//   "banana": 2,
//   "cherry": 1,
// }
`})]}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsxs)(i.wn,{num:"3",title:"Common Patterns",children:[(0,n.jsx)(r.h3,{id:"deduplication",children:"Deduplication"}),(0,n.jsx)(i.av,{file:"dedup.go",children:`type Item struct {
  ID   string
  Data string
}

items := []Item{
  {ID: "1", Data: "first"},
  {ID: "2", Data: "second"},
  {ID: "1", Data: "duplicate"},
}

// Keep first occurrence
firstWins := Mg.MakeMagma(func(x, _ Item) Item { return x })
unique := R.FromArrayMap(firstWins)(
  func(i Item) T.Tuple2[string, Item] {
      return T.MakeTuple2(i.ID, i)
  },
)(items)

// Convert back to array
result := R.Values(unique)
// []Item{{ID: "1", Data: "first"}, {ID: "2", Data: "second"}}
`}),(0,n.jsx)(r.h3,{id:"aggregation",children:"Aggregation"}),(0,n.jsx)(i.av,{file:"aggregate.go",children:`type Sale struct {
  Product string
  Amount  float64
}

sales := []Sale{
  {Product: "laptop", Amount: 999},
  {Product: "mouse", Amount: 29},
  {Product: "laptop", Amount: 899},
}

// Total sales by product
sumMagma := Mg.MakeMagma(func(x, y float64) float64 { return x + y })
totals := R.FromArrayMap(sumMagma)(
  func(s Sale) T.Tuple2[string, float64] {
      return T.MakeTuple2(s.Product, s.Amount)
  },
)(sales)
// map[string]float64{"laptop": 1898, "mouse": 29}
`}),(0,n.jsx)(r.h3,{id:"multi-value-mapping",children:"Multi-value Mapping"}),(0,n.jsx)(i.av,{file:"multivalue.go",children:`type Tag struct {
  Resource string
  Tag      string
}

tags := []Tag{
  {Resource: "server1", Tag: "prod"},
  {Resource: "server1", Tag: "web"},
  {Resource: "server2", Tag: "prod"},
}

// Collect all tags per resource
appendMagma := Mg.MakeMagma(func(x, y []string) []string {
  return append(x, y...)
})

resourceTags := R.FromArrayMap(appendMagma)(
  func(t Tag) T.Tuple2[string, []string] {
      return T.MakeTuple2(t.Resource, []string{t.Tag})
  },
)(tags)
// map[string][]string{
//   "server1": ["prod", "web"],
//   "server2": ["prod"],
// }
`})]}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsxs)(s,{type:"info",children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Magma Strategy"}),": The magma parameter determines how duplicate keys are handled:"]}),(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Last wins"}),": ",(0,n.jsx)(r.code,{children:"func(_, y T) T { return y }"})]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"First wins"}),": ",(0,n.jsx)(r.code,{children:"func(x, _ T) T { return x }"})]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Sum"}),": ",(0,n.jsx)(r.code,{children:"func(x, y int) int { return x + y }"})]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Append"}),": ",(0,n.jsx)(r.code,{children:"func(x, y []T) []T { return append(x, y...) }"})]}),"\n"]})]}),"\n",(0,n.jsx)(s,{type:"info",children:(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Order"}),": ",(0,n.jsx)(r.code,{children:"ToArray"})," and ",(0,n.jsx)(r.code,{children:"ToEntries"})," return elements in undefined order since Go maps don't maintain insertion order. Use ",(0,n.jsx)(r.code,{children:"record-ord"})," for ordered operations."]})}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(i.is,{prev:{to:"/docs/v2/collections/record-eq",title:"Record Equality"},next:{to:"/docs/advanced/architecture",title:"Architecture"}}),"\n",(0,n.jsx)(r.hr,{})]})}function h(e={}){let{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},5811(e,r,s){s.d(r,{Pq:()=>T,eM:()=>k,hg:()=>A,_1:()=>N,av:()=>b,Gs:()=>_,vr:()=>w,x7:()=>m,bY:()=>C,wn:()=>j,zY:()=>h,ju:()=>p,BQ:()=>x,is:()=>I});var a=s(4848),n=s(6540);let t="codeTag_uQ6s",i="warn_PIJZ",l="benchNum_PicT",c="api_M0YO",d="pagerLink_hQ8Y",o="pagerLbl_CteO",u="pagerTtl_t0em";function h({eyebrow:e,title:r,titleAccent:s,lede:n,meta:t}){return(0,a.jsxs)("header",{className:"head_Sp2B",children:[(0,a.jsxs)("div",{className:"headLeft_aDUD",children:[e&&(0,a.jsx)("div",{className:"eyebrow__SSv",children:e}),(0,a.jsxs)("h1",{className:"headTitle_xWjG",children:[r,s?(0,a.jsxs)(a.Fragment,{children:[" ",(0,a.jsx)("em",{children:s})]}):null]}),n&&(0,a.jsx)("p",{className:"lede_Ltdj",children:n})]}),t&&t.length>0&&(0,a.jsx)("aside",{className:"headMeta_kmCF",children:t.map((e,r)=>(0,a.jsxs)("div",{className:"metaRow_drwK",children:[(0,a.jsx)("span",{className:"metaK_SNLg",children:e.label}),(0,a.jsx)("span",{className:"metaV_zAp5",children:e.value})]},r))})]})}function m({children:e}){return(0,a.jsx)("span",{className:"pill_Lzl6",children:e})}function p({children:e}){return(0,a.jsx)("div",{className:"tldr_mz3p",children:e})}function x({label:e,value:r,accent:s,unit:n,description:t,variant:i="default",prose:l}){return(0,a.jsxs)("div",{className:`tldrCard_nSap ${"up"===i?"up_ip1p":"down"===i?"down_x6We":""}`,children:[e&&(0,a.jsx)("div",{className:"tldrK_kP7m",children:e}),(0,a.jsxs)("div",{className:`tldrV_gUPe ${l?"tldrVProse_sV_2":""}`,children:[r,s?(0,a.jsx)("em",{children:s}):null,n?(0,a.jsx)("small",{children:n}):null]}),t&&(0,a.jsx)("div",{className:"tldrD_kfCX",children:t})]})}function j({id:e,number:r,title:s,titleAccent:n,tag:t,lede:i,children:l}){return(0,a.jsxs)("section",{className:"section_B_ST",children:[(0,a.jsxs)("div",{className:"sectionHead_oGCN",children:[(0,a.jsxs)("div",{className:"sectionHeadLeft_bfh9",children:[r&&(0,a.jsx)("span",{className:"sectionNum_qiYt",children:r}),(0,a.jsxs)("h2",{className:"sectionTitle__6nw",id:e,children:[s,n?(0,a.jsxs)(a.Fragment,{children:[" ",(0,a.jsx)("em",{children:n})]}):null]})]}),t&&(0,a.jsx)("span",{className:"sectionTag_se22",children:t})]}),i&&(0,a.jsx)("p",{className:"sectionLede_yuVk",children:i}),l]})}let g=({size:e=14,className:r})=>(0,a.jsx)("svg",{width:e,height:e,viewBox:"0 0 32 32",fill:"currentColor",className:r,"aria-hidden":"true",children:(0,a.jsx)("path",{d:"M13 24l-9-9 1.4-1.4L13 21.2 26.6 7.6 28 9z"})}),f=({size:e=14,className:r})=>(0,a.jsx)("svg",{width:e,height:e,viewBox:"0 0 32 32",fill:"currentColor",className:r,"aria-hidden":"true",children:(0,a.jsx)("path",{d:"M28 10v18H10V10h18m0-2H10a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2z"})}),v=({size:e=12,className:r})=>(0,a.jsx)("svg",{width:e,height:e,viewBox:"0 0 32 32",fill:"currentColor",className:r,"aria-hidden":"true",children:(0,a.jsx)("path",{d:"M18 6L16.6 7.4 24.2 15H4v2h20.2l-7.6 7.6L18 26l10-10z"})}),y=({size:e=12,className:r})=>(0,a.jsx)("svg",{width:e,height:e,viewBox:"0 0 32 32",fill:"currentColor",className:r,"aria-hidden":"true",children:(0,a.jsx)("path",{d:"M14 26l1.4-1.4L7.8 17H28v-2H7.8l7.6-7.6L14 6 4 16z"})});function b({file:e,status:r,copy:s=!0,children:l}){let c=(0,n.useRef)(null),[d,o]=(0,n.useState)(!1);return(0,a.jsxs)("div",{className:"codeCard_fiIG",children:[(0,a.jsxs)("div",{className:"codeBar_SZ78",children:[(0,a.jsx)("span",{className:"codeDot_JDOV"}),e&&(0,a.jsx)("span",{className:"codeFile_uZDd",children:e}),(0,a.jsx)("span",{className:"codeSpacer_nRmZ"}),r?"tested"===r?(0,a.jsx)("span",{className:`${t} ok_rUJx`,children:"tested"}):"warn"===r?(0,a.jsx)("span",{className:`${t} ${i}`,children:"caveat"}):"note"===r?(0,a.jsx)("span",{className:t,children:"note"}):"string"==typeof r?(0,a.jsx)("span",{className:t,children:r}):r:null,s&&(0,a.jsx)("button",{type:"button",className:"codeCopy_fKPb",onClick:()=>{if(!c.current)return;let e=c.current.innerText;"u">typeof navigator&&navigator.clipboard&&navigator.clipboard.writeText(e).then(()=>{o(!0),setTimeout(()=>o(!1),1200)})},"aria-label":"Copy code",children:d?"Copied":(0,a.jsx)(f,{})})]}),(0,a.jsx)("pre",{ref:c,className:"codeBlock_oEWX",children:l})]})}let M={info:({size:e=18,className:r})=>(0,a.jsxs)("svg",{width:e,height:e,viewBox:"0 0 32 32",fill:"currentColor",className:r,"aria-hidden":"true",children:[(0,a.jsx)("path",{d:"M16 2A14 14 0 1 0 30 16 14 14 0 0 0 16 2zm0 26a12 12 0 1 1 12-12 12 12 0 0 1-12 12z"}),(0,a.jsx)("path",{d:"M16 14h-2v2h1v6h-1v2h4v-2h-1v-8zm-.5-5a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 15.5 9z"})]}),warn:({size:e=18,className:r})=>(0,a.jsxs)("svg",{width:e,height:e,viewBox:"0 0 32 32",fill:"currentColor",className:r,"aria-hidden":"true",children:[(0,a.jsx)("path",{d:"M16 23a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 16 23zM15 13h2v8h-2z"}),(0,a.jsx)("path",{d:"M28.7 26.31L17.36 4.27a1.51 1.51 0 0 0-2.72 0L3.3 26.31a1.5 1.5 0 0 0 1.36 2.19h22.69a1.5 1.5 0 0 0 1.35-2.19z"})]}),success:g};function T({type:e="info",title:r,children:s}){let n=M[e];return(0,a.jsxs)("div",{className:`callout_yWfv ${"warn"===e?i:"success"===e?"success_D78d":""}`,children:[(0,a.jsx)("span",{className:"calloutIcon_hdwU",children:(0,a.jsx)(n,{size:18})}),(0,a.jsxs)("div",{className:"calloutBody_Qz4I",children:[r&&(0,a.jsx)("strong",{className:"calloutTitle_MXy4",children:r}),s]})]})}function _({children:e}){return(0,a.jsx)("div",{className:"compare_WfXa",children:e})}function N({kind:e,title:r,pill:s,children:n}){return(0,a.jsxs)("div",{className:`compareCol_nZe9 ${"bad"===e?"bad_pZ5b":"good_EJeo"}`,children:[(0,a.jsxs)("div",{className:"compareHead_vAhW",children:[(0,a.jsx)("span",{children:r??("bad"===e?"Before":"After")}),s&&(0,a.jsx)("span",{className:"comparePill_fmmx",children:s})]}),(0,a.jsx)("div",{className:"compareBody_hP62",children:n})]})}function A({title:e,command:r,columns:s,rows:n}){let[t,i,c,d,o]=s??["Variant","Speed","ns/op","B/op","\u0394"];return(0,a.jsxs)("div",{className:"bench_zMa2",children:[(0,a.jsxs)("div",{className:"benchHead_q6K3",children:[(0,a.jsx)("span",{children:e}),r&&(0,a.jsxs)("span",{className:"benchCmd_iUFI",children:[(0,a.jsx)("span",{className:"benchPrompt_LRr4",children:"$"}),r]})]}),(0,a.jsxs)("table",{className:"benchTable_u8XZ",children:[(0,a.jsx)("thead",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{children:t}),(0,a.jsx)("th",{style:{width:"40%"},children:i}),(0,a.jsx)("th",{className:l,children:c}),(0,a.jsx)("th",{className:l,children:d}),(0,a.jsx)("th",{className:l,children:o})]})}),(0,a.jsx)("tbody",{children:n.map((e,r)=>{let s="win"===e.barKind?"win_PjNM":"lose"===e.barKind?"lose_A9dr":"",n="good"===e.deltaKind?"deltaGood_dYlm":"bad"===e.deltaKind?"deltaBad_yHEA":l;return(0,a.jsxs)("tr",{className:e.winner?"benchWinner_jDc2":void 0,children:[(0,a.jsx)("td",{className:"benchLabel_uFhm",children:e.label}),(0,a.jsx)("td",{children:null!=e.bar&&(0,a.jsx)("span",{className:"bar_jZ6H",children:(0,a.jsx)("span",{className:"barTrack_lefl",children:(0,a.jsx)("span",{className:`barFill_bMgr ${s}`,style:{width:`${100*Math.max(0,Math.min(1,e.bar))}%`}})})})}),(0,a.jsx)("td",{className:l,children:e.nsOp}),(0,a.jsx)("td",{className:l,children:e.bOp}),(0,a.jsx)("td",{className:n,children:e.delta})]},r)})})]})]})}function w({columns:e,rows:r,children:s}){if(s)return(0,a.jsx)("div",{className:c,children:s});let[n,t,i]=e??["Symbol","Signature","Since"];return(0,a.jsx)("div",{className:c,children:(0,a.jsxs)("table",{className:"apiTable_kmi_",children:[(0,a.jsx)("thead",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{children:n}),(0,a.jsx)("th",{children:t}),(0,a.jsx)("th",{children:i})]})}),(0,a.jsx)("tbody",{children:r?.map((e,r)=>(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:e.symbol})}),(0,a.jsxs)("td",{children:[(0,a.jsx)("code",{children:e.signature}),e.description&&(0,a.jsx)("div",{className:"apiDesc__siK",children:e.description})]}),(0,a.jsx)("td",{children:e.since&&(0,a.jsx)("code",{children:e.since})})]},r))})]})})}function k({status:e,children:r}){return(0,a.jsx)(a.Fragment,{})}function C({title:e="Steps",items:r,children:s}){let t,i=(t=r||(s?n.Children.toArray(s).filter(e=>n.isValidElement(e)).map(e=>({label:e.props.children,impact:e.props.status,done:!1})):[])).filter(e=>e.done).length;return(0,a.jsxs)("div",{className:"check_Z_XE",children:[(0,a.jsxs)("div",{className:"checkHead__B8i",children:[(0,a.jsx)("span",{children:e}),r&&(0,a.jsxs)("span",{children:[i," / ",t.length," complete"]})]}),(0,a.jsx)("ul",{className:"checkList_ziWk",children:t.map((e,r)=>(0,a.jsxs)("li",{className:`checkItem_jgfw ${e.done?"done_rLON":""}`,children:[(0,a.jsx)("span",{className:"checkBox_TriO",children:e.done&&(0,a.jsx)(g,{size:10})}),(0,a.jsx)("span",{className:"checkLbl_IWQU",children:e.label}),e.impact&&(0,a.jsx)("span",{className:"checkImpact_BaeN",children:e.impact})]},r))})]})}var D=s(5310);function I({prev:e,next:r}){return(0,a.jsxs)("nav",{className:"pager_oMm2",children:[e?(0,a.jsxs)(D.A,{to:e.to,className:d,children:[(0,a.jsxs)("span",{className:o,children:[(0,a.jsx)(y,{})," ",e.label??"Previous"]}),(0,a.jsx)("span",{className:u,children:e.title})]}):(0,a.jsx)("span",{}),r?(0,a.jsxs)(D.A,{to:r.to,className:`${d} next_PLI2`,children:[(0,a.jsxs)("span",{className:o,children:[r.label??"Next"," ",(0,a.jsx)(v,{})]}),(0,a.jsx)("span",{className:u,children:r.title})]}):(0,a.jsx)("span",{})]})}},8453(e,r,s){s.d(r,{R:()=>i,x:()=>l});var a=s(6540);let n={},t=a.createContext(n);function i(e){let r=a.useContext(t);return a.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),a.createElement(t.Provider,{value:r},e.children)}}}]);
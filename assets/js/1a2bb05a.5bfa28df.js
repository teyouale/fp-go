"use strict";(self.webpackChunkfp_go_docs=self.webpackChunkfp_go_docs||[]).push([["2874"],{5342(e,r,i){i.r(r),i.d(r,{metadata:()=>s,default:()=>h,frontMatter:()=>d,contentTitle:()=>l,toc:()=>o,assets:()=>c});var s=JSON.parse('{"id":"v2/utilities/ord","title":"Ord (Ordering)","description":"Type-safe ordering and comparison for sorting and ordering operations.","source":"@site/docs/v2/utilities/ord.md","sourceDirName":"v2/utilities","slug":"/v2/utilities/ord","permalink":"/fp-go/docs/v2/utilities/ord","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":26,"frontMatter":{"title":"Ord (Ordering)","hide_title":true,"description":"Type-safe ordering and comparison for sorting and ordering operations.","sidebar_position":26},"sidebar":"apiSidebar","previous":{"title":"Eq (Equality)","permalink":"/fp-go/docs/v2/utilities/eq"},"next":{"title":"Semigroup","permalink":"/fp-go/docs/v2/utilities/semigroup"}}'),n=i(4848),a=i(8453),t=i(5811);let d={title:"Ord (Ordering)",hide_title:!0,description:"Type-safe ordering and comparison for sorting and ordering operations.",sidebar_position:26},l,c={},o=[{value:"Basic Usage",id:"basic-usage",level:3},{value:"FromCompare",id:"fromcompare",level:3},{value:"Contramap - Derive Ordering",id:"contramap---derive-ordering",level:3},{value:"Reverse Ordering",id:"reverse-ordering",level:3},{value:"String Ordering",id:"string-ordering",level:3},{value:"Multi-Field Ordering",id:"multi-field-ordering",level:3},{value:"Custom Priority Ordering",id:"custom-priority-ordering",level:3},{value:"Date/Time Ordering",id:"datetime-ordering",level:3},{value:"Sorting with Ord",id:"sorting-with-ord",level:3},{value:"Min/Max Operations",id:"minmax-operations",level:3},{value:"Composite Ordering",id:"composite-ordering",level:3}];function m(e){let r={code:"code",h3:"h3",hr:"hr",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components},{Callout:i}=r;return i||function(e,r){throw Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Callout",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.zY,{eyebrow:"Reference \xb7 Utilities",title:"Ord (Ordering)",lede:"Type-safe ordering and comparison. Define custom ordering for any type using the Ord type class for sorting and comparison operations.",meta:[{label:"Package",value:"github.com/IBM/fp-go/v2/ord"},{label:"Type Class",value:"Ord[A]"}]}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(t.wn,{num:"1",title:"Core API",children:(0,n.jsx)(t.vr,{children:(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Function"}),(0,n.jsx)(r.th,{children:"Signature"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"FromCompare"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"func FromCompare[A any](func(A, A) int) Ord[A]"})}),(0,n.jsx)(r.td,{children:"Create Ord from function"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"Contramap"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"func Contramap[A, B any](func(B) A) func(Ord[A]) Ord[B]"})}),(0,n.jsx)(r.td,{children:"Derive Ord by mapping"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"Reverse"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"func Reverse[A any](Ord[A]) Ord[A]"})}),(0,n.jsx)(r.td,{children:"Reverse ordering"})]})]})]})})}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsxs)(t.wn,{num:"2",title:"Usage Examples",children:[(0,n.jsx)(r.h3,{id:"basic-usage",children:"Basic Usage"}),(0,n.jsx)(t.av,{file:"basic.go",children:`import (
  O "github.com/IBM/fp-go/v2/ord"
  N "github.com/IBM/fp-go/v2/number"
)

// Built-in orderings
N.Ord.Compare(1, 2)  // -1 (less than)
N.Ord.Compare(2, 2)  // 0 (equal)
N.Ord.Compare(3, 2)  // 1 (greater than)
`}),(0,n.jsx)(r.h3,{id:"fromcompare",children:"FromCompare"}),(0,n.jsx)(t.av,{file:"from_compare.go",children:`type User struct {
  ID   int
  Name string
  Age  int
}

// Order by age
userOrd := O.FromCompare(func(a, b User) int {
  if a.Age < b.Age { return -1 }
  if a.Age > b.Age { return 1 }
  return 0
})

user1 := User{ID: 1, Name: "Alice", Age: 30}
user2 := User{ID: 2, Name: "Bob", Age: 25}

userOrd.Compare(user1, user2)  // 1 (Alice is older)
`}),(0,n.jsx)(r.h3,{id:"contramap---derive-ordering",children:"Contramap - Derive Ordering"}),(0,n.jsx)(t.av,{file:"contramap.go",children:`type User struct {
  ID   int
  Name string
}

// Order users by ID
userOrd := O.Contramap(
  func(u User) int { return u.ID },
)(N.Ord)

user1 := User{ID: 1, Name: "Alice"}
user2 := User{ID: 2, Name: "Bob"}

userOrd.Compare(user1, user2)  // -1 (1 < 2)
`}),(0,n.jsx)(r.h3,{id:"reverse-ordering",children:"Reverse Ordering"}),(0,n.jsx)(t.av,{file:"reverse.go",children:`// Descending order
descending := O.Reverse(N.Ord)

descending.Compare(1, 2)  // 1 (reversed from -1)
descending.Compare(3, 2)  // -1 (reversed from 1)

// Use with sorting
import A "github.com/IBM/fp-go/v2/array"

numbers := []int{3, 1, 4, 1, 5, 9, 2, 6}
sorted := A.Sort(descending)(numbers)
// []int{9, 6, 5, 4, 3, 2, 1, 1}
`}),(0,n.jsx)(r.h3,{id:"string-ordering",children:"String Ordering"}),(0,n.jsx)(t.av,{file:"string.go",children:`import S "github.com/IBM/fp-go/v2/string"

// Alphabetical order
S.Ord.Compare("apple", "banana")  // -1
S.Ord.Compare("banana", "apple")  // 1

// Case-insensitive ordering
caseInsensitiveOrd := O.FromCompare(func(a, b string) int {
  return strings.Compare(
      strings.ToLower(a),
      strings.ToLower(b),
  )
})

caseInsensitiveOrd.Compare("Apple", "banana")  // -1
`}),(0,n.jsx)(r.h3,{id:"multi-field-ordering",children:"Multi-Field Ordering"}),(0,n.jsx)(t.av,{file:"multifield.go",children:`type Product struct {
  Category string
  Name     string
  Price    float64
}

// Order by category, then by name
productOrd := O.FromCompare(func(a, b Product) int {
  // First compare category
  if a.Category < b.Category { return -1 }
  if a.Category > b.Category { return 1 }
  
  // If category equal, compare name
  if a.Name < b.Name { return -1 }
  if a.Name > b.Name { return 1 }
  
  return 0
})
`}),(0,n.jsx)(r.h3,{id:"custom-priority-ordering",children:"Custom Priority Ordering"}),(0,n.jsx)(t.av,{file:"priority.go",children:`type Priority int

const (
  Low    Priority = 1
  Medium Priority = 2
  High   Priority = 3
)

// High priority first
priorityOrd := O.FromCompare(func(a, b Priority) int {
  // Reverse comparison for high-first
  if a > b { return -1 }
  if a < b { return 1 }
  return 0
})

// Or use Reverse
priorityOrd := O.Reverse(
  O.FromCompare(func(a, b Priority) int {
      if a < b { return -1 }
      if a > b { return 1 }
      return 0
  }),
)
`}),(0,n.jsx)(r.h3,{id:"datetime-ordering",children:"Date/Time Ordering"}),(0,n.jsx)(t.av,{file:"datetime.go",children:`type Event struct {
  Name      string
  Timestamp time.Time
}

// Order by timestamp
eventOrd := O.Contramap(
  func(e Event) time.Time { return e.Timestamp },
)(O.FromCompare(func(a, b time.Time) int {
  if a.Before(b) { return -1 }
  if a.After(b) { return 1 }
  return 0
}))

// Or simpler with Unix timestamp
eventOrd := O.Contramap(
  func(e Event) int64 { return e.Timestamp.Unix() },
)(O.FromCompare(func(a, b int64) int {
  if a < b { return -1 }
  if a > b { return 1 }
  return 0
}))
`})]}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsxs)(t.wn,{num:"3",title:"Common Patterns",children:[(0,n.jsx)(r.h3,{id:"sorting-with-ord",children:"Sorting with Ord"}),(0,n.jsx)(t.av,{file:"sorting.go",children:`import A "github.com/IBM/fp-go/v2/array"

users := []User{
  {ID: 3, Name: "Charlie", Age: 35},
  {ID: 1, Name: "Alice", Age: 30},
  {ID: 2, Name: "Bob", Age: 25},
}

// Sort by age
byAge := O.Contramap(func(u User) int { return u.Age })(N.Ord)
sorted := A.Sort(byAge)(users)
// Sorted by age: Bob(25), Alice(30), Charlie(35)

// Sort by name
byName := O.Contramap(func(u User) string { return u.Name })(S.Ord)
sorted := A.Sort(byName)(users)
// Sorted by name: Alice, Bob, Charlie
`}),(0,n.jsx)(r.h3,{id:"minmax-operations",children:"Min/Max Operations"}),(0,n.jsx)(t.av,{file:"minmax.go",children:`// Find minimum
min := func(ord O.Ord[A]) func(A, A) A {
  return func(a, b A) A {
      if ord.Compare(a, b) <= 0 {
          return a
      }
      return b
  }
}

// Find maximum
max := func(ord O.Ord[A]) func(A, A) A {
  return func(a, b A) A {
      if ord.Compare(a, b) >= 0 {
          return a
      }
      return b
  }
}

minValue := min(N.Ord)(5, 3)  // 3
maxValue := max(N.Ord)(5, 3)  // 5
`}),(0,n.jsx)(r.h3,{id:"composite-ordering",children:"Composite Ordering"}),(0,n.jsx)(t.av,{file:"composite.go",children:`// Order by multiple criteria
type Task struct {
  Priority int
  DueDate  time.Time
  Name     string
}

taskOrd := O.FromCompare(func(a, b Task) int {
  // First by priority (high first)
  if a.Priority > b.Priority { return -1 }
  if a.Priority < b.Priority { return 1 }
  
  // Then by due date (earliest first)
  if a.DueDate.Before(b.DueDate) { return -1 }
  if a.DueDate.After(b.DueDate) { return 1 }
  
  // Finally by name
  return strings.Compare(a.Name, b.Name)
})
`})]}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(i,{type:"info",children:(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Contramap"}),": Use ",(0,n.jsx)(r.code,{children:"Contramap"})," to derive ordering from existing Ord instances. It's more composable and reusable than writing custom comparison functions."]})}),"\n",(0,n.jsxs)(i,{type:"info",children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Comparison Result"}),":"]}),(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["Return ",(0,n.jsx)(r.code,{children:"-1"})," if first argument is less than second"]}),"\n",(0,n.jsxs)(r.li,{children:["Return ",(0,n.jsx)(r.code,{children:"0"})," if arguments are equal"]}),"\n",(0,n.jsxs)(r.li,{children:["Return ",(0,n.jsx)(r.code,{children:"1"})," if first argument is greater than second"]}),"\n"]})]}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(t.is,{prev:{to:"/docs/v2/utilities/magma",title:"Magma"},next:{to:"/docs/v2/utilities/pipe-flow",title:"Pipe & Flow"}}),"\n",(0,n.jsx)(r.hr,{})]})}function h(e={}){let{wrapper:r}={...(0,a.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(m,{...e})}):m(e)}},5811(e,r,i){i.d(r,{Pq:()=>_,eM:()=>D,hg:()=>A,_1:()=>C,av:()=>N,Gs:()=>O,vr:()=>w,x7:()=>u,bY:()=>B,wn:()=>j,zY:()=>h,ju:()=>p,BQ:()=>x,is:()=>P});var s=i(4848),n=i(6540);let a="codeTag_uQ6s",t="warn_PIJZ",d="benchNum_PicT",l="api_M0YO",c="pagerLink_hQ8Y",o="pagerLbl_CteO",m="pagerTtl_t0em";function h({eyebrow:e,title:r,titleAccent:i,lede:n,meta:a}){return(0,s.jsxs)("header",{className:"head_Sp2B",children:[(0,s.jsxs)("div",{className:"headLeft_aDUD",children:[e&&(0,s.jsx)("div",{className:"eyebrow__SSv",children:e}),(0,s.jsxs)("h1",{className:"headTitle_xWjG",children:[r,i?(0,s.jsxs)(s.Fragment,{children:[" ",(0,s.jsx)("em",{children:i})]}):null]}),n&&(0,s.jsx)("p",{className:"lede_Ltdj",children:n})]}),a&&a.length>0&&(0,s.jsx)("aside",{className:"headMeta_kmCF",children:a.map((e,r)=>(0,s.jsxs)("div",{className:"metaRow_drwK",children:[(0,s.jsx)("span",{className:"metaK_SNLg",children:e.label}),(0,s.jsx)("span",{className:"metaV_zAp5",children:e.value})]},r))})]})}function u({children:e}){return(0,s.jsx)("span",{className:"pill_Lzl6",children:e})}function p({children:e}){return(0,s.jsx)("div",{className:"tldr_mz3p",children:e})}function x({label:e,value:r,accent:i,unit:n,description:a,variant:t="default",prose:d}){return(0,s.jsxs)("div",{className:`tldrCard_nSap ${"up"===t?"up_ip1p":"down"===t?"down_x6We":""}`,children:[e&&(0,s.jsx)("div",{className:"tldrK_kP7m",children:e}),(0,s.jsxs)("div",{className:`tldrV_gUPe ${d?"tldrVProse_sV_2":""}`,children:[r,i?(0,s.jsx)("em",{children:i}):null,n?(0,s.jsx)("small",{children:n}):null]}),a&&(0,s.jsx)("div",{className:"tldrD_kfCX",children:a})]})}function j({id:e,number:r,title:i,titleAccent:n,tag:a,lede:t,children:d}){return(0,s.jsxs)("section",{className:"section_B_ST",children:[(0,s.jsxs)("div",{className:"sectionHead_oGCN",children:[(0,s.jsxs)("div",{className:"sectionHeadLeft_bfh9",children:[r&&(0,s.jsx)("span",{className:"sectionNum_qiYt",children:r}),(0,s.jsxs)("h2",{className:"sectionTitle__6nw",id:e,children:[i,n?(0,s.jsxs)(s.Fragment,{children:[" ",(0,s.jsx)("em",{children:n})]}):null]})]}),a&&(0,s.jsx)("span",{className:"sectionTag_se22",children:a})]}),t&&(0,s.jsx)("p",{className:"sectionLede_yuVk",children:t}),d]})}let g=({size:e=14,className:r})=>(0,s.jsx)("svg",{width:e,height:e,viewBox:"0 0 32 32",fill:"currentColor",className:r,"aria-hidden":"true",children:(0,s.jsx)("path",{d:"M13 24l-9-9 1.4-1.4L13 21.2 26.6 7.6 28 9z"})}),f=({size:e=14,className:r})=>(0,s.jsx)("svg",{width:e,height:e,viewBox:"0 0 32 32",fill:"currentColor",className:r,"aria-hidden":"true",children:(0,s.jsx)("path",{d:"M28 10v18H10V10h18m0-2H10a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2z"})}),v=({size:e=12,className:r})=>(0,s.jsx)("svg",{width:e,height:e,viewBox:"0 0 32 32",fill:"currentColor",className:r,"aria-hidden":"true",children:(0,s.jsx)("path",{d:"M18 6L16.6 7.4 24.2 15H4v2h20.2l-7.6 7.6L18 26l10-10z"})}),b=({size:e=12,className:r})=>(0,s.jsx)("svg",{width:e,height:e,viewBox:"0 0 32 32",fill:"currentColor",className:r,"aria-hidden":"true",children:(0,s.jsx)("path",{d:"M14 26l1.4-1.4L7.8 17H28v-2H7.8l7.6-7.6L14 6 4 16z"})});function N({file:e,status:r,copy:i=!0,children:d}){let l=(0,n.useRef)(null),[c,o]=(0,n.useState)(!1);return(0,s.jsxs)("div",{className:"codeCard_fiIG",children:[(0,s.jsxs)("div",{className:"codeBar_SZ78",children:[(0,s.jsx)("span",{className:"codeDot_JDOV"}),e&&(0,s.jsx)("span",{className:"codeFile_uZDd",children:e}),(0,s.jsx)("span",{className:"codeSpacer_nRmZ"}),r?"tested"===r?(0,s.jsx)("span",{className:`${a} ok_rUJx`,children:"tested"}):"warn"===r?(0,s.jsx)("span",{className:`${a} ${t}`,children:"caveat"}):"note"===r?(0,s.jsx)("span",{className:a,children:"note"}):"string"==typeof r?(0,s.jsx)("span",{className:a,children:r}):r:null,i&&(0,s.jsx)("button",{type:"button",className:"codeCopy_fKPb",onClick:()=>{if(!l.current)return;let e=l.current.innerText;"u">typeof navigator&&navigator.clipboard&&navigator.clipboard.writeText(e).then(()=>{o(!0),setTimeout(()=>o(!1),1200)})},"aria-label":"Copy code",children:c?"Copied":(0,s.jsx)(f,{})})]}),(0,s.jsx)("pre",{ref:l,className:"codeBlock_oEWX",children:d})]})}let y={info:({size:e=18,className:r})=>(0,s.jsxs)("svg",{width:e,height:e,viewBox:"0 0 32 32",fill:"currentColor",className:r,"aria-hidden":"true",children:[(0,s.jsx)("path",{d:"M16 2A14 14 0 1 0 30 16 14 14 0 0 0 16 2zm0 26a12 12 0 1 1 12-12 12 12 0 0 1-12 12z"}),(0,s.jsx)("path",{d:"M16 14h-2v2h1v6h-1v2h4v-2h-1v-8zm-.5-5a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 15.5 9z"})]}),warn:({size:e=18,className:r})=>(0,s.jsxs)("svg",{width:e,height:e,viewBox:"0 0 32 32",fill:"currentColor",className:r,"aria-hidden":"true",children:[(0,s.jsx)("path",{d:"M16 23a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 16 23zM15 13h2v8h-2z"}),(0,s.jsx)("path",{d:"M28.7 26.31L17.36 4.27a1.51 1.51 0 0 0-2.72 0L3.3 26.31a1.5 1.5 0 0 0 1.36 2.19h22.69a1.5 1.5 0 0 0 1.35-2.19z"})]}),success:g};function _({type:e="info",title:r,children:i}){let n=y[e];return(0,s.jsxs)("div",{className:`callout_yWfv ${"warn"===e?t:"success"===e?"success_D78d":""}`,children:[(0,s.jsx)("span",{className:"calloutIcon_hdwU",children:(0,s.jsx)(n,{size:18})}),(0,s.jsxs)("div",{className:"calloutBody_Qz4I",children:[r&&(0,s.jsx)("strong",{className:"calloutTitle_MXy4",children:r}),i]})]})}function O({children:e}){return(0,s.jsx)("div",{className:"compare_WfXa",children:e})}function C({kind:e,title:r,pill:i,children:n}){return(0,s.jsxs)("div",{className:`compareCol_nZe9 ${"bad"===e?"bad_pZ5b":"good_EJeo"}`,children:[(0,s.jsxs)("div",{className:"compareHead_vAhW",children:[(0,s.jsx)("span",{children:r??("bad"===e?"Before":"After")}),i&&(0,s.jsx)("span",{className:"comparePill_fmmx",children:i})]}),(0,s.jsx)("div",{className:"compareBody_hP62",children:n})]})}function A({title:e,command:r,columns:i,rows:n}){let[a,t,l,c,o]=i??["Variant","Speed","ns/op","B/op","\u0394"];return(0,s.jsxs)("div",{className:"bench_zMa2",children:[(0,s.jsxs)("div",{className:"benchHead_q6K3",children:[(0,s.jsx)("span",{children:e}),r&&(0,s.jsxs)("span",{className:"benchCmd_iUFI",children:[(0,s.jsx)("span",{className:"benchPrompt_LRr4",children:"$"}),r]})]}),(0,s.jsxs)("table",{className:"benchTable_u8XZ",children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:a}),(0,s.jsx)("th",{style:{width:"40%"},children:t}),(0,s.jsx)("th",{className:d,children:l}),(0,s.jsx)("th",{className:d,children:c}),(0,s.jsx)("th",{className:d,children:o})]})}),(0,s.jsx)("tbody",{children:n.map((e,r)=>{let i="win"===e.barKind?"win_PjNM":"lose"===e.barKind?"lose_A9dr":"",n="good"===e.deltaKind?"deltaGood_dYlm":"bad"===e.deltaKind?"deltaBad_yHEA":d;return(0,s.jsxs)("tr",{className:e.winner?"benchWinner_jDc2":void 0,children:[(0,s.jsx)("td",{className:"benchLabel_uFhm",children:e.label}),(0,s.jsx)("td",{children:null!=e.bar&&(0,s.jsx)("span",{className:"bar_jZ6H",children:(0,s.jsx)("span",{className:"barTrack_lefl",children:(0,s.jsx)("span",{className:`barFill_bMgr ${i}`,style:{width:`${100*Math.max(0,Math.min(1,e.bar))}%`}})})})}),(0,s.jsx)("td",{className:d,children:e.nsOp}),(0,s.jsx)("td",{className:d,children:e.bOp}),(0,s.jsx)("td",{className:n,children:e.delta})]},r)})})]})]})}function w({columns:e,rows:r,children:i}){if(i)return(0,s.jsx)("div",{className:l,children:i});let[n,a,t]=e??["Symbol","Signature","Since"];return(0,s.jsx)("div",{className:l,children:(0,s.jsxs)("table",{className:"apiTable_kmi_",children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:n}),(0,s.jsx)("th",{children:a}),(0,s.jsx)("th",{children:t})]})}),(0,s.jsx)("tbody",{children:r?.map((e,r)=>(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("code",{children:e.symbol})}),(0,s.jsxs)("td",{children:[(0,s.jsx)("code",{children:e.signature}),e.description&&(0,s.jsx)("div",{className:"apiDesc__siK",children:e.description})]}),(0,s.jsx)("td",{children:e.since&&(0,s.jsx)("code",{children:e.since})})]},r))})]})})}function D({status:e,children:r}){return(0,s.jsx)(s.Fragment,{})}function B({title:e="Steps",items:r,children:i}){let a,t=(a=r||(i?n.Children.toArray(i).filter(e=>n.isValidElement(e)).map(e=>({label:e.props.children,impact:e.props.status,done:!1})):[])).filter(e=>e.done).length;return(0,s.jsxs)("div",{className:"check_Z_XE",children:[(0,s.jsxs)("div",{className:"checkHead__B8i",children:[(0,s.jsx)("span",{children:e}),r&&(0,s.jsxs)("span",{children:[t," / ",a.length," complete"]})]}),(0,s.jsx)("ul",{className:"checkList_ziWk",children:a.map((e,r)=>(0,s.jsxs)("li",{className:`checkItem_jgfw ${e.done?"done_rLON":""}`,children:[(0,s.jsx)("span",{className:"checkBox_TriO",children:e.done&&(0,s.jsx)(g,{size:10})}),(0,s.jsx)("span",{className:"checkLbl_IWQU",children:e.label}),e.impact&&(0,s.jsx)("span",{className:"checkImpact_BaeN",children:e.impact})]},r))})]})}var M=i(5310);function P({prev:e,next:r}){return(0,s.jsxs)("nav",{className:"pager_oMm2",children:[e?(0,s.jsxs)(M.A,{to:e.to,className:c,children:[(0,s.jsxs)("span",{className:o,children:[(0,s.jsx)(b,{})," ",e.label??"Previous"]}),(0,s.jsx)("span",{className:m,children:e.title})]}):(0,s.jsx)("span",{}),r?(0,s.jsxs)(M.A,{to:r.to,className:`${c} next_PLI2`,children:[(0,s.jsxs)("span",{className:o,children:[r.label??"Next"," ",(0,s.jsx)(v,{})]}),(0,s.jsx)("span",{className:m,children:r.title})]}):(0,s.jsx)("span",{})]})}},8453(e,r,i){i.d(r,{R:()=>t,x:()=>d});var s=i(6540);let n={},a=s.createContext(n);function t(e){let r=s.useContext(a);return s.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:t(e.components),s.createElement(a.Provider,{value:r},e.children)}}}]);
"use strict";(self.webpackChunkfp_go_docs=self.webpackChunkfp_go_docs||[]).push([["9749"],{138(e,n,i){i.r(n),i.d(n,{metadata:()=>s,default:()=>m,frontMatter:()=>c,contentTitle:()=>a,toc:()=>o,assets:()=>d});var s=JSON.parse('{"id":"v2/utilities/number","title":"Number","description":"Numeric utilities and type class instances for mathematical operations in fp-go","source":"@site/docs/v2/utilities/number.md","sourceDirName":"v2/utilities","slug":"/v2/utilities/number","permalink":"/fp-go/docs/v2/utilities/number","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":30,"frontMatter":{"title":"Number","hide_title":true,"description":"Numeric utilities and type class instances for mathematical operations in fp-go","sidebar_position":30},"sidebar":"apiSidebar","previous":{"title":"Boolean","permalink":"/fp-go/docs/v2/utilities/boolean"},"next":{"title":"String","permalink":"/fp-go/docs/v2/utilities/string"}}'),t=i(4848),r=i(8453),l=i(5811);let c={title:"Number",hide_title:!0,description:"Numeric utilities and type class instances for mathematical operations in fp-go",sidebar_position:30},a,d={},o=[];function h(e){let n={a:"a",code:"code",hr:"hr",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.zY,{eyebrow:"v2 \xb7 Utilities",title:"Number",titleAccent:"Type Classes",lede:"The number package provides type class instances and utilities for numeric types, enabling functional operations on numbers.",meta:[{label:"Package",value:"number"},{label:"Since",value:"v2.0.0"},{label:"Types",value:"int, float64, etc."}]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsxs)(l.wn,{num:"1",title:"Overview",children:[(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.strong,{children:"Number"})," package provides type class instances for numeric types, enabling:"]}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Eq"}),": Equality comparison"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Ord"}),": Ordering and comparison"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Semigroup"}),": Addition and multiplication"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Monoid"}),": Addition and multiplication with identity elements"]}),"\n"]}),(0,t.jsxs)(n.p,{children:["These instances work with Go's built-in numeric types: ",(0,t.jsx)(n.code,{children:"int"}),", ",(0,t.jsx)(n.code,{children:"int8"}),", ",(0,t.jsx)(n.code,{children:"int16"}),", ",(0,t.jsx)(n.code,{children:"int32"}),", ",(0,t.jsx)(n.code,{children:"int64"}),", ",(0,t.jsx)(n.code,{children:"float32"}),", ",(0,t.jsx)(n.code,{children:"float64"}),", etc."]})]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(l.wn,{num:"2",title:"Equality",children:(0,t.jsx)(l.av,{file:"number_eq.go",tag:"example",children:`import N "github.com/IBM/fp-go/number"

// Compare numbers for equality
N.Eq.Equals(1, 1)    // true
N.Eq.Equals(1, 2)    // false
N.Eq.Equals(0, 0)    // true

// Works with different numeric types
N.Eq.Equals(3.14, 3.14)  // true (float64)
N.Eq.Equals(42, 42)      // true (int)`})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsxs)(l.wn,{num:"3",title:"Ordering",children:[(0,t.jsx)(n.p,{children:"Compare and sort numbers:"}),(0,t.jsx)(l.av,{file:"number_ord.go",tag:"example",children:`import N "github.com/IBM/fp-go/number"

// Compare numbers
N.Ord.Compare(1, 2)   // -1 (less than)
N.Ord.Compare(2, 1)   // 1  (greater than)
N.Ord.Compare(1, 1)   // 0  (equal)

// Derived operations
N.Ord.LessThan(1, 2)           // true
N.Ord.GreaterThan(2, 1)        // true
N.Ord.LessThanOrEqual(1, 1)    // true
N.Ord.GreaterThanOrEqual(2, 1) // true

// Min and Max
N.Ord.Min(5, 3)  // 3
N.Ord.Max(5, 3)  // 5`})]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsxs)(l.wn,{num:"4",title:"Semigroup Operations",children:[(0,t.jsx)(n.p,{children:"Combine numbers with addition or multiplication:"}),(0,t.jsx)(l.av,{file:"number_semigroup.go",tag:"example",children:`import N "github.com/IBM/fp-go/number"

// SemigroupSum: Addition
N.SemigroupSum.Concat(1, 2)   // 3
N.SemigroupSum.Concat(10, 5)  // 15

// SemigroupProduct: Multiplication
N.SemigroupProduct.Concat(3, 4)   // 12
N.SemigroupProduct.Concat(2, 10)  // 20

// SemigroupMin: Minimum
N.SemigroupMin.Concat(5, 3)  // 3
N.SemigroupMin.Concat(1, 9)  // 1

// SemigroupMax: Maximum
N.SemigroupMax.Concat(5, 3)  // 5
N.SemigroupMax.Concat(1, 9)  // 9`})]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsxs)(l.wn,{num:"5",title:"Monoid Operations",children:[(0,t.jsx)(n.p,{children:"Semigroups with identity elements:"}),(0,t.jsx)(l.av,{file:"number_monoid.go",tag:"example",children:`import N "github.com/IBM/fp-go/number"

// MonoidSum: Addition with identity 0
N.MonoidSum.Concat(1, 2)  // 3
N.MonoidSum.Empty()       // 0

// MonoidProduct: Multiplication with identity 1
N.MonoidProduct.Concat(3, 4)  // 12
N.MonoidProduct.Empty()       // 1

// Identity laws
val := 5
N.MonoidSum.Concat(N.MonoidSum.Empty(), val)  // 5
N.MonoidSum.Concat(val, N.MonoidSum.Empty())  // 5

N.MonoidProduct.Concat(N.MonoidProduct.Empty(), val)  // 5
N.MonoidProduct.Concat(val, N.MonoidProduct.Empty())  // 5`})]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsxs)(l.wn,{num:"6",title:"Summing Arrays",children:[(0,t.jsx)(n.p,{children:"Calculate sum and product of arrays:"}),(0,t.jsx)(l.av,{file:"number_sum.go",tag:"example",children:`import (
  A "github.com/IBM/fp-go/array"
  F "github.com/IBM/fp-go/function"
  N "github.com/IBM/fp-go/number"
)

numbers := []int{1, 2, 3, 4, 5}

// Sum all numbers
sum := F.Pipe2(
  numbers,
  A.Fold(N.MonoidSum),
)
// 15

// Product of all numbers
product := F.Pipe2(
  numbers,
  A.Fold(N.MonoidProduct),
)
// 120

// Empty array uses identity
emptySum := F.Pipe2([]int{}, A.Fold(N.MonoidSum))
// 0 (identity for addition)

emptyProduct := F.Pipe2([]int{}, A.Fold(N.MonoidProduct))
// 1 (identity for multiplication)`})]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsxs)(l.wn,{num:"7",title:"Sorting Arrays",children:[(0,t.jsx)(n.p,{children:"Sort numbers using Ord instance:"}),(0,t.jsx)(l.av,{file:"number_sort.go",tag:"example",children:`import (
  A "github.com/IBM/fp-go/array"
  F "github.com/IBM/fp-go/function"
  N "github.com/IBM/fp-go/number"
)

numbers := []int{5, 2, 8, 1, 9, 3}

// Sort ascending
sorted := F.Pipe2(
  numbers,
  A.Sort(N.Ord),
)
// []int{1, 2, 3, 5, 8, 9}

// Sort descending (reverse the Ord)
import O "github.com/IBM/fp-go/ord"

sortedDesc := F.Pipe2(
  numbers,
  A.Sort(O.Reverse(N.Ord)),
)
// []int{9, 8, 5, 3, 2, 1}`})]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsxs)(l.wn,{num:"8",title:"Finding Min/Max",children:[(0,t.jsx)(n.p,{children:"Find minimum and maximum values:"}),(0,t.jsx)(l.av,{file:"number_minmax.go",tag:"example",children:`import (
  A "github.com/IBM/fp-go/array"
  F "github.com/IBM/fp-go/function"
  N "github.com/IBM/fp-go/number"
  O "github.com/IBM/fp-go/option"
)

numbers := []int{5, 2, 8, 1, 9, 3}

// Find minimum
minValue := F.Pipe2(
  numbers,
  A.Head[int],
)
// Some(5) - first element

// Better: use Fold with SemigroupMin
minValue := F.Pipe3(
  numbers,
  A.Reduce(func(acc, n int) int {
      return N.SemigroupMin.Concat(acc, n)
  }, numbers[0]),
)
// 1

// Find maximum
maxValue := F.Pipe3(
  numbers,
  A.Reduce(func(acc, n int) int {
      return N.SemigroupMax.Concat(acc, n)
  }, numbers[0]),
)
// 9`})]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsxs)(l.wn,{num:"9",title:"Statistical Operations",children:[(0,t.jsx)(n.p,{children:"Calculate statistics using monoids:"}),(0,t.jsx)(l.av,{file:"number_stats.go",tag:"example",children:`type Stats struct {
  Count int
  Sum   int
  Min   int
  Max   int
}

numbers := []int{5, 2, 8, 1, 9, 3}

// Calculate all stats in one pass
stats := F.Pipe3(
  numbers,
  A.Reduce(func(acc Stats, n int) Stats {
      return Stats{
          Count: acc.Count + 1,
          Sum:   N.MonoidSum.Concat(acc.Sum, n),
          Min:   N.SemigroupMin.Concat(acc.Min, n),
          Max:   N.SemigroupMax.Concat(acc.Max, n),
      }
  }, Stats{
      Count: 0,
      Sum:   0,
      Min:   numbers[0],
      Max:   numbers[0],
  }),
)
// Stats{Count: 6, Sum: 28, Min: 1, Max: 9}

average := float64(stats.Sum) / float64(stats.Count)
// 4.666...`})]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsxs)(l.wn,{num:"10",title:"API Reference",children:[(0,t.jsx)(l.vr,{children:(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Instance"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Eq"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Eq[T]"})}),(0,t.jsx)(n.td,{children:"Equality comparison"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Ord"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Ord[T]"})}),(0,t.jsx)(n.td,{children:"Ordering and comparison"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"SemigroupSum"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Semigroup[T]"})}),(0,t.jsx)(n.td,{children:"Addition"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"SemigroupProduct"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Semigroup[T]"})}),(0,t.jsx)(n.td,{children:"Multiplication"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"SemigroupMin"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Semigroup[T]"})}),(0,t.jsx)(n.td,{children:"Minimum"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"SemigroupMax"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Semigroup[T]"})}),(0,t.jsx)(n.td,{children:"Maximum"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"MonoidSum"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Monoid[T]"})}),(0,t.jsx)(n.td,{children:"Addition with identity 0"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"MonoidProduct"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Monoid[T]"})}),(0,t.jsx)(n.td,{children:"Multiplication with identity 1"})]})]})]})}),(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Supported Types:"})}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"int"}),", ",(0,t.jsx)(n.code,{children:"int8"}),", ",(0,t.jsx)(n.code,{children:"int16"}),", ",(0,t.jsx)(n.code,{children:"int32"}),", ",(0,t.jsx)(n.code,{children:"int64"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"uint"}),", ",(0,t.jsx)(n.code,{children:"uint8"}),", ",(0,t.jsx)(n.code,{children:"uint16"}),", ",(0,t.jsx)(n.code,{children:"uint32"}),", ",(0,t.jsx)(n.code,{children:"uint64"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"float32"}),", ",(0,t.jsx)(n.code,{children:"float64"})]}),"\n"]})]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsxs)(l.wn,{num:"11",title:"Related Concepts",children:[(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Common Use Cases:"})}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Summing and aggregating numbers"}),"\n",(0,t.jsx)(n.li,{children:"Finding min/max values"}),"\n",(0,t.jsx)(n.li,{children:"Sorting numeric arrays"}),"\n",(0,t.jsx)(n.li,{children:"Statistical calculations"}),"\n"]}),(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"See Also:"})}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/fp-go/docs/v2/utilities/string",children:"String"})," - String type class instances"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/fp-go/docs/v2/utilities/eq",children:"Eq"})," - Equality type class"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/fp-go/docs/v2/utilities/ord",children:"Ord"})," - Ordering type class"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/fp-go/docs/v2/utilities/monoid",children:"Monoid"})," - Understanding monoid operations"]}),"\n"]})]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(l.is,{prev:{to:"/docs/v2/utilities/boolean",title:"Boolean"},next:{to:"/docs/v2/utilities/string",title:"String"}})]})}function m(e={}){let{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},5811(e,n,i){i.d(n,{Pq:()=>M,eM:()=>P,hg:()=>C,_1:()=>y,av:()=>v,Gs:()=>S,vr:()=>w,x7:()=>u,bY:()=>O,wn:()=>p,zY:()=>m,ju:()=>x,BQ:()=>j,is:()=>A});var s=i(4848),t=i(6540);let r="codeTag_uQ6s",l="warn_PIJZ",c="benchNum_PicT",a="api_M0YO",d="pagerLink_hQ8Y",o="pagerLbl_CteO",h="pagerTtl_t0em";function m({eyebrow:e,title:n,titleAccent:i,lede:t,meta:r}){return(0,s.jsxs)("header",{className:"head_Sp2B",children:[(0,s.jsxs)("div",{className:"headLeft_aDUD",children:[e&&(0,s.jsx)("div",{className:"eyebrow__SSv",children:e}),(0,s.jsxs)("h1",{className:"headTitle_xWjG",children:[n,i?(0,s.jsxs)(s.Fragment,{children:[" ",(0,s.jsx)("em",{children:i})]}):null]}),t&&(0,s.jsx)("p",{className:"lede_Ltdj",children:t})]}),r&&r.length>0&&(0,s.jsx)("aside",{className:"headMeta_kmCF",children:r.map((e,n)=>(0,s.jsxs)("div",{className:"metaRow_drwK",children:[(0,s.jsx)("span",{className:"metaK_SNLg",children:e.label}),(0,s.jsx)("span",{className:"metaV_zAp5",children:e.value})]},n))})]})}function u({children:e}){return(0,s.jsx)("span",{className:"pill_Lzl6",children:e})}function x({children:e}){return(0,s.jsx)("div",{className:"tldr_mz3p",children:e})}function j({label:e,value:n,accent:i,unit:t,description:r,variant:l="default",prose:c}){return(0,s.jsxs)("div",{className:`tldrCard_nSap ${"up"===l?"up_ip1p":"down"===l?"down_x6We":""}`,children:[e&&(0,s.jsx)("div",{className:"tldrK_kP7m",children:e}),(0,s.jsxs)("div",{className:`tldrV_gUPe ${c?"tldrVProse_sV_2":""}`,children:[n,i?(0,s.jsx)("em",{children:i}):null,t?(0,s.jsx)("small",{children:t}):null]}),r&&(0,s.jsx)("div",{className:"tldrD_kfCX",children:r})]})}function p({id:e,number:n,title:i,titleAccent:t,tag:r,lede:l,children:c}){return(0,s.jsxs)("section",{className:"section_B_ST",children:[(0,s.jsxs)("div",{className:"sectionHead_oGCN",children:[(0,s.jsxs)("div",{className:"sectionHeadLeft_bfh9",children:[n&&(0,s.jsx)("span",{className:"sectionNum_qiYt",children:n}),(0,s.jsxs)("h2",{className:"sectionTitle__6nw",id:e,children:[i,t?(0,s.jsxs)(s.Fragment,{children:[" ",(0,s.jsx)("em",{children:t})]}):null]})]}),r&&(0,s.jsx)("span",{className:"sectionTag_se22",children:r})]}),l&&(0,s.jsx)("p",{className:"sectionLede_yuVk",children:l}),c]})}let g=({size:e=14,className:n})=>(0,s.jsx)("svg",{width:e,height:e,viewBox:"0 0 32 32",fill:"currentColor",className:n,"aria-hidden":"true",children:(0,s.jsx)("path",{d:"M13 24l-9-9 1.4-1.4L13 21.2 26.6 7.6 28 9z"})}),N=({size:e=14,className:n})=>(0,s.jsx)("svg",{width:e,height:e,viewBox:"0 0 32 32",fill:"currentColor",className:n,"aria-hidden":"true",children:(0,s.jsx)("path",{d:"M28 10v18H10V10h18m0-2H10a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2z"})}),b=({size:e=12,className:n})=>(0,s.jsx)("svg",{width:e,height:e,viewBox:"0 0 32 32",fill:"currentColor",className:n,"aria-hidden":"true",children:(0,s.jsx)("path",{d:"M18 6L16.6 7.4 24.2 15H4v2h20.2l-7.6 7.6L18 26l10-10z"})}),f=({size:e=12,className:n})=>(0,s.jsx)("svg",{width:e,height:e,viewBox:"0 0 32 32",fill:"currentColor",className:n,"aria-hidden":"true",children:(0,s.jsx)("path",{d:"M14 26l1.4-1.4L7.8 17H28v-2H7.8l7.6-7.6L14 6 4 16z"})});function v({file:e,status:n,copy:i=!0,children:c}){let a=(0,t.useRef)(null),[d,o]=(0,t.useState)(!1);return(0,s.jsxs)("div",{className:"codeCard_fiIG",children:[(0,s.jsxs)("div",{className:"codeBar_SZ78",children:[(0,s.jsx)("span",{className:"codeDot_JDOV"}),e&&(0,s.jsx)("span",{className:"codeFile_uZDd",children:e}),(0,s.jsx)("span",{className:"codeSpacer_nRmZ"}),n?"tested"===n?(0,s.jsx)("span",{className:`${r} ok_rUJx`,children:"tested"}):"warn"===n?(0,s.jsx)("span",{className:`${r} ${l}`,children:"caveat"}):"note"===n?(0,s.jsx)("span",{className:r,children:"note"}):"string"==typeof n?(0,s.jsx)("span",{className:r,children:n}):n:null,i&&(0,s.jsx)("button",{type:"button",className:"codeCopy_fKPb",onClick:()=>{if(!a.current)return;let e=a.current.innerText;"u">typeof navigator&&navigator.clipboard&&navigator.clipboard.writeText(e).then(()=>{o(!0),setTimeout(()=>o(!1),1200)})},"aria-label":"Copy code",children:d?"Copied":(0,s.jsx)(N,{})})]}),(0,s.jsx)("pre",{ref:a,className:"codeBlock_oEWX",children:c})]})}let _={info:({size:e=18,className:n})=>(0,s.jsxs)("svg",{width:e,height:e,viewBox:"0 0 32 32",fill:"currentColor",className:n,"aria-hidden":"true",children:[(0,s.jsx)("path",{d:"M16 2A14 14 0 1 0 30 16 14 14 0 0 0 16 2zm0 26a12 12 0 1 1 12-12 12 12 0 0 1-12 12z"}),(0,s.jsx)("path",{d:"M16 14h-2v2h1v6h-1v2h4v-2h-1v-8zm-.5-5a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 15.5 9z"})]}),warn:({size:e=18,className:n})=>(0,s.jsxs)("svg",{width:e,height:e,viewBox:"0 0 32 32",fill:"currentColor",className:n,"aria-hidden":"true",children:[(0,s.jsx)("path",{d:"M16 23a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 16 23zM15 13h2v8h-2z"}),(0,s.jsx)("path",{d:"M28.7 26.31L17.36 4.27a1.51 1.51 0 0 0-2.72 0L3.3 26.31a1.5 1.5 0 0 0 1.36 2.19h22.69a1.5 1.5 0 0 0 1.35-2.19z"})]}),success:g};function M({type:e="info",title:n,children:i}){let t=_[e];return(0,s.jsxs)("div",{className:`callout_yWfv ${"warn"===e?l:"success"===e?"success_D78d":""}`,children:[(0,s.jsx)("span",{className:"calloutIcon_hdwU",children:(0,s.jsx)(t,{size:18})}),(0,s.jsxs)("div",{className:"calloutBody_Qz4I",children:[n&&(0,s.jsx)("strong",{className:"calloutTitle_MXy4",children:n}),i]})]})}function S({children:e}){return(0,s.jsx)("div",{className:"compare_WfXa",children:e})}function y({kind:e,title:n,pill:i,children:t}){return(0,s.jsxs)("div",{className:`compareCol_nZe9 ${"bad"===e?"bad_pZ5b":"good_EJeo"}`,children:[(0,s.jsxs)("div",{className:"compareHead_vAhW",children:[(0,s.jsx)("span",{children:n??("bad"===e?"Before":"After")}),i&&(0,s.jsx)("span",{className:"comparePill_fmmx",children:i})]}),(0,s.jsx)("div",{className:"compareBody_hP62",children:t})]})}function C({title:e,command:n,columns:i,rows:t}){let[r,l,a,d,o]=i??["Variant","Speed","ns/op","B/op","\u0394"];return(0,s.jsxs)("div",{className:"bench_zMa2",children:[(0,s.jsxs)("div",{className:"benchHead_q6K3",children:[(0,s.jsx)("span",{children:e}),n&&(0,s.jsxs)("span",{className:"benchCmd_iUFI",children:[(0,s.jsx)("span",{className:"benchPrompt_LRr4",children:"$"}),n]})]}),(0,s.jsxs)("table",{className:"benchTable_u8XZ",children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:r}),(0,s.jsx)("th",{style:{width:"40%"},children:l}),(0,s.jsx)("th",{className:c,children:a}),(0,s.jsx)("th",{className:c,children:d}),(0,s.jsx)("th",{className:c,children:o})]})}),(0,s.jsx)("tbody",{children:t.map((e,n)=>{let i="win"===e.barKind?"win_PjNM":"lose"===e.barKind?"lose_A9dr":"",t="good"===e.deltaKind?"deltaGood_dYlm":"bad"===e.deltaKind?"deltaBad_yHEA":c;return(0,s.jsxs)("tr",{className:e.winner?"benchWinner_jDc2":void 0,children:[(0,s.jsx)("td",{className:"benchLabel_uFhm",children:e.label}),(0,s.jsx)("td",{children:null!=e.bar&&(0,s.jsx)("span",{className:"bar_jZ6H",children:(0,s.jsx)("span",{className:"barTrack_lefl",children:(0,s.jsx)("span",{className:`barFill_bMgr ${i}`,style:{width:`${100*Math.max(0,Math.min(1,e.bar))}%`}})})})}),(0,s.jsx)("td",{className:c,children:e.nsOp}),(0,s.jsx)("td",{className:c,children:e.bOp}),(0,s.jsx)("td",{className:t,children:e.delta})]},n)})})]})]})}function w({columns:e,rows:n,children:i}){if(i)return(0,s.jsx)("div",{className:a,children:i});let[t,r,l]=e??["Symbol","Signature","Since"];return(0,s.jsx)("div",{className:a,children:(0,s.jsxs)("table",{className:"apiTable_kmi_",children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:t}),(0,s.jsx)("th",{children:r}),(0,s.jsx)("th",{children:l})]})}),(0,s.jsx)("tbody",{children:n?.map((e,n)=>(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("code",{children:e.symbol})}),(0,s.jsxs)("td",{children:[(0,s.jsx)("code",{children:e.signature}),e.description&&(0,s.jsx)("div",{className:"apiDesc__siK",children:e.description})]}),(0,s.jsx)("td",{children:e.since&&(0,s.jsx)("code",{children:e.since})})]},n))})]})})}function P({status:e,children:n}){return(0,s.jsx)(s.Fragment,{})}function O({title:e="Steps",items:n,children:i}){let r,l=(r=n||(i?t.Children.toArray(i).filter(e=>t.isValidElement(e)).map(e=>({label:e.props.children,impact:e.props.status,done:!1})):[])).filter(e=>e.done).length;return(0,s.jsxs)("div",{className:"check_Z_XE",children:[(0,s.jsxs)("div",{className:"checkHead__B8i",children:[(0,s.jsx)("span",{children:e}),n&&(0,s.jsxs)("span",{children:[l," / ",r.length," complete"]})]}),(0,s.jsx)("ul",{className:"checkList_ziWk",children:r.map((e,n)=>(0,s.jsxs)("li",{className:`checkItem_jgfw ${e.done?"done_rLON":""}`,children:[(0,s.jsx)("span",{className:"checkBox_TriO",children:e.done&&(0,s.jsx)(g,{size:10})}),(0,s.jsx)("span",{className:"checkLbl_IWQU",children:e.label}),e.impact&&(0,s.jsx)("span",{className:"checkImpact_BaeN",children:e.impact})]},n))})]})}var B=i(5310);function A({prev:e,next:n}){return(0,s.jsxs)("nav",{className:"pager_oMm2",children:[e?(0,s.jsxs)(B.A,{to:e.to,className:d,children:[(0,s.jsxs)("span",{className:o,children:[(0,s.jsx)(f,{})," ",e.label??"Previous"]}),(0,s.jsx)("span",{className:h,children:e.title})]}):(0,s.jsx)("span",{}),n?(0,s.jsxs)(B.A,{to:n.to,className:`${d} next_PLI2`,children:[(0,s.jsxs)("span",{className:o,children:[n.label??"Next"," ",(0,s.jsx)(b,{})]}),(0,s.jsx)("span",{className:h,children:n.title})]}):(0,s.jsx)("span",{})]})}},8453(e,n,i){i.d(n,{R:()=>l,x:()=>c});var s=i(6540);let t={},r=s.createContext(t);function l(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);
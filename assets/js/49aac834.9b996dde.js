"use strict";(self.webpackChunkfp_go_docs=self.webpackChunkfp_go_docs||[]).push([["2609"],{2442(e,r,n){n.r(r),n.d(r,{metadata:()=>s,default:()=>m,frontMatter:()=>l,contentTitle:()=>c,toc:()=>o,assets:()=>d});var s=JSON.parse('{"id":"v2/collections/nonempty-array","title":"NonEmpty Array","description":"Arrays guaranteed to have at least one element, eliminating empty array edge cases.","source":"@site/docs/v2/collections/nonempty-array.md","sourceDirName":"v2/collections","slug":"/v2/collections/nonempty-array","permalink":"/fp-go/docs/v2/collections/nonempty-array","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"NonEmpty Array","hide_title":true,"description":"Arrays guaranteed to have at least one element, eliminating empty array edge cases.","sidebar_position":5},"sidebar":"apiSidebar","previous":{"title":"Array - Zip","permalink":"/fp-go/docs/v2/collections/array-zip"},"next":{"title":"Record (Map)","permalink":"/fp-go/docs/v2/collections/record"}}'),a=n(4848),i=n(8453),t=n(5811);let l={title:"NonEmpty Array",hide_title:!0,description:"Arrays guaranteed to have at least one element, eliminating empty array edge cases.",sidebar_position:5},c,d={},o=[{value:"Creating NonEmpty Arrays",id:"creating-nonempty-arrays",level:3},{value:"Safe Head/Tail Operations",id:"safe-headtail-operations",level:3},{value:"Transformation",id:"transformation",level:3},{value:"Reduction",id:"reduction",level:3},{value:"Concatenation",id:"concatenation",level:3},{value:"Safe Minimum/Maximum",id:"safe-minimummaximum",level:3},{value:"Configuration Lists",id:"configuration-lists",level:3},{value:"Validation Results",id:"validation-results",level:3},{value:"Safe List Processing",id:"safe-list-processing",level:3},{value:"Builder Pattern",id:"builder-pattern",level:3},{value:"Converting to/from Regular Arrays",id:"converting-tofrom-regular-arrays",level:3}];function h(e){let r={code:"code",h3:"h3",hr:"hr",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.zY,{eyebrow:"Reference \xb7 Collections",title:"NonEmpty Array",lede:"Arrays guaranteed to have at least one element. Eliminates empty array edge cases and provides safe head/tail operations.",meta:[{label:"Package",value:"github.com/IBM/fp-go/v2/array"},{label:"Type",value:"NonEmptyArray[A]"}]}),"\n",(0,a.jsx)(r.hr,{}),"\n",(0,a.jsx)(t.wn,{num:"1",title:"Core API",children:(0,a.jsx)(t.vr,{children:(0,a.jsxs)(r.table,{children:[(0,a.jsx)(r.thead,{children:(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.th,{children:"Function"}),(0,a.jsx)(r.th,{children:"Signature"}),(0,a.jsx)(r.th,{children:"Description"})]})}),(0,a.jsxs)(r.tbody,{children:[(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:(0,a.jsx)(r.code,{children:"Of"})}),(0,a.jsx)(r.td,{children:(0,a.jsx)(r.code,{children:"func Of[A any](head A, tail ...A) NonEmptyArray[A]"})}),(0,a.jsx)(r.td,{children:"Create from elements"})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:(0,a.jsx)(r.code,{children:"From"})}),(0,a.jsx)(r.td,{children:(0,a.jsx)(r.code,{children:"func From[A any]([]A) Option[NonEmptyArray[A]]"})}),(0,a.jsx)(r.td,{children:"Safe creation from slice"})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:(0,a.jsx)(r.code,{children:"Head"})}),(0,a.jsx)(r.td,{children:(0,a.jsx)(r.code,{children:"func Head[A any](NonEmptyArray[A]) A"})}),(0,a.jsx)(r.td,{children:"Get first element"})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:(0,a.jsx)(r.code,{children:"Tail"})}),(0,a.jsx)(r.td,{children:(0,a.jsx)(r.code,{children:"func Tail[A any](NonEmptyArray[A]) []A"})}),(0,a.jsx)(r.td,{children:"Get remaining elements"})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:(0,a.jsx)(r.code,{children:"Last"})}),(0,a.jsx)(r.td,{children:(0,a.jsx)(r.code,{children:"func Last[A any](NonEmptyArray[A]) A"})}),(0,a.jsx)(r.td,{children:"Get last element"})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:(0,a.jsx)(r.code,{children:"Init"})}),(0,a.jsx)(r.td,{children:(0,a.jsx)(r.code,{children:"func Init[A any](NonEmptyArray[A]) []A"})}),(0,a.jsx)(r.td,{children:"All but last"})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:(0,a.jsx)(r.code,{children:"Map"})}),(0,a.jsx)(r.td,{children:(0,a.jsx)(r.code,{children:"func Map[A, B any](f func(A) B) func(NonEmptyArray[A]) NonEmptyArray[B]"})}),(0,a.jsx)(r.td,{children:"Transform elements"})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:(0,a.jsx)(r.code,{children:"FlatMap"})}),(0,a.jsx)(r.td,{children:(0,a.jsx)(r.code,{children:"func FlatMap[A, B any](f func(A) NonEmptyArray[B]) func(NonEmptyArray[A]) NonEmptyArray[B]"})}),(0,a.jsx)(r.td,{children:"Map and flatten"})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:(0,a.jsx)(r.code,{children:"Reduce"})}),(0,a.jsx)(r.td,{children:(0,a.jsx)(r.code,{children:"func Reduce[A, B any](f func(B, A) B, initial B) func(NonEmptyArray[A]) B"})}),(0,a.jsx)(r.td,{children:"Fold left"})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:(0,a.jsx)(r.code,{children:"Concat"})}),(0,a.jsx)(r.td,{children:(0,a.jsx)(r.code,{children:"func Concat[A any](second NonEmptyArray[A]) func(NonEmptyArray[A]) NonEmptyArray[A]"})}),(0,a.jsx)(r.td,{children:"Combine arrays"})]})]})]})})}),"\n",(0,a.jsx)(r.hr,{}),"\n",(0,a.jsxs)(t.wn,{num:"2",title:"Usage Examples",children:[(0,a.jsx)(r.h3,{id:"creating-nonempty-arrays",children:"Creating NonEmpty Arrays"}),(0,a.jsx)(t.av,{file:"create.go",children:`import (
  A "github.com/IBM/fp-go/v2/array"
  O "github.com/IBM/fp-go/v2/option"
)

// Direct creation - always succeeds
arr1 := A.Of(1, 2, 3, 4, 5)
// NonEmptyArray[int] with 5 elements

// Single element
arr2 := A.Of("hello")
// NonEmptyArray[string] with 1 element

// From slice - returns Option
slice := []int{1, 2, 3}
result := A.From(slice)
// Some(NonEmptyArray[int]{1, 2, 3})

emptySlice := []int{}
result2 := A.From(emptySlice)
// None - empty slice cannot be NonEmpty
`}),(0,a.jsx)(r.h3,{id:"safe-headtail-operations",children:"Safe Head/Tail Operations"}),(0,a.jsx)(t.av,{file:"head_tail.go",children:`arr := A.Of(1, 2, 3, 4, 5)

// Head - always safe, no Option needed
first := A.Head(arr)  // 1

// Tail - remaining elements
rest := A.Tail(arr)   // []int{2, 3, 4, 5}

// Last - always safe
last := A.Last(arr)   // 5

// Init - all but last
initial := A.Init(arr) // []int{1, 2, 3, 4}

// Single element array
single := A.Of(42)
A.Head(single)  // 42
A.Tail(single)  // []int{} - empty slice
A.Last(single)  // 42
A.Init(single)  // []int{} - empty slice
`}),(0,a.jsx)(r.h3,{id:"transformation",children:"Transformation"}),(0,a.jsx)(t.av,{file:"transform.go",children:`import F "github.com/IBM/fp-go/v2/function"

numbers := A.Of(1, 2, 3, 4, 5)

// Map - result is also NonEmpty
doubled := F.Pipe2(
  numbers,
  A.Map(func(n int) int { return n * 2 }),
)
// NonEmptyArray[int]{2, 4, 6, 8, 10}

// FlatMap
result := F.Pipe2(
  A.Of(1, 2, 3),
  A.FlatMap(func(n int) A.NonEmptyArray[int] {
      return A.Of(n, n*10)
  }),
)
// NonEmptyArray[int]{1, 10, 2, 20, 3, 30}
`}),(0,a.jsx)(r.h3,{id:"reduction",children:"Reduction"}),(0,a.jsx)(t.av,{file:"reduce.go",children:`numbers := A.Of(1, 2, 3, 4, 5)

// Sum
sum := F.Pipe2(
  numbers,
  A.Reduce(
      func(acc, n int) int { return acc + n },
      0,
  ),
)
// 15

// Product
product := F.Pipe2(
  numbers,
  A.Reduce(
      func(acc, n int) int { return acc * n },
      1,
  ),
)
// 120

// Build string
words := A.Of("Hello", "functional", "world")
sentence := F.Pipe2(
  words,
  A.Reduce(
      func(acc, word string) string {
          if acc == "" {
              return word
          }
          return acc + " " + word
      },
      "",
  ),
)
// "Hello functional world"
`}),(0,a.jsx)(r.h3,{id:"concatenation",children:"Concatenation"}),(0,a.jsx)(t.av,{file:"concat.go",children:`arr1 := A.Of(1, 2, 3)
arr2 := A.Of(4, 5, 6)

// Combine - result is NonEmpty
combined := F.Pipe2(
  arr1,
  A.Concat(arr2),
)
// NonEmptyArray[int]{1, 2, 3, 4, 5, 6}

// Chain multiple
result := F.Pipe3(
  A.Of(1),
  A.Concat(A.Of(2, 3)),
  A.Concat(A.Of(4, 5)),
)
// NonEmptyArray[int]{1, 2, 3, 4, 5}
`}),(0,a.jsx)(r.h3,{id:"safe-minimummaximum",children:"Safe Minimum/Maximum"}),(0,a.jsx)(t.av,{file:"min_max.go",children:`import "github.com/IBM/fp-go/v2/ord"

numbers := A.Of(5, 2, 8, 1, 9, 3)

// Find minimum - always succeeds
min := F.Pipe2(
  numbers,
  A.Reduce(
      func(min, n int) int {
          if n < min {
              return n
          }
          return min
      },
      A.Head(numbers),
  ),
)
// 1

// Find maximum
max := F.Pipe2(
  numbers,
  A.Reduce(
      func(max, n int) int {
          if n > max {
              return n
          }
          return max
      },
      A.Head(numbers),
  ),
)
// 9
`}),(0,a.jsx)(r.h3,{id:"configuration-lists",children:"Configuration Lists"}),(0,a.jsx)(t.av,{file:"config.go",children:`type Config struct {
  Servers NonEmptyArray[string]
  Ports   NonEmptyArray[int]
}

// Guarantee at least one server
config := Config{
  Servers: A.Of(
      "server1.example.com",
      "server2.example.com",
  ),
  Ports: A.Of(8080, 8081, 8082),
}

// Primary server is always available
primary := A.Head(config.Servers)
// "server1.example.com"

// Fallback servers
fallbacks := A.Tail(config.Servers)
// []string{"server2.example.com"}
`}),(0,a.jsx)(r.h3,{id:"validation-results",children:"Validation Results"}),(0,a.jsx)(t.av,{file:"validation.go",children:`type ValidationError struct {
  Field   string
  Message string
}

type ValidationResult struct {
  Errors NonEmptyArray[ValidationError]
}

// At least one error
result := ValidationResult{
  Errors: A.Of(
      ValidationError{
          Field:   "email",
          Message: "Invalid email format",
      },
      ValidationError{
          Field:   "password",
          Message: "Password too short",
      },
  ),
}

// First error
firstError := A.Head(result.Errors)

// All errors
allErrors := F.Pipe2(
  result.Errors,
  A.Map(func(e ValidationError) string {
      return e.Field + ": " + e.Message
  }),
)
`})]}),"\n",(0,a.jsx)(r.hr,{}),"\n",(0,a.jsxs)(t.wn,{num:"3",title:"Common Patterns",children:[(0,a.jsx)(r.h3,{id:"safe-list-processing",children:"Safe List Processing"}),(0,a.jsx)(t.av,{file:"safe_list.go",children:`// Process list that must have items
func ProcessOrders(orders NonEmptyArray[Order]) Result {
  // No need to check for empty
  firstOrder := A.Head(orders)
  
  // Process all orders
  return F.Pipe2(
      orders,
      A.Map(processOrder),
      combineResults,
  )
}
`}),(0,a.jsx)(r.h3,{id:"builder-pattern",children:"Builder Pattern"}),(0,a.jsx)(t.av,{file:"builder.go",children:`type QueryBuilder struct {
  conditions NonEmptyArray[string]
}

func NewQuery(first string, rest ...string) QueryBuilder {
  return QueryBuilder{
      conditions: A.Of(first, rest...),
  }
}

func (q QueryBuilder) And(condition string) QueryBuilder {
  return QueryBuilder{
      conditions: F.Pipe2(
          q.conditions,
          A.Concat(A.Of(condition)),
      ),
  }
}

func (q QueryBuilder) Build() string {
  return F.Pipe2(
      q.conditions,
      A.Reduce(
          func(acc, cond string) string {
              return acc + " AND " + cond
          },
          A.Head(q.conditions),
      ),
  )
}

// Usage
query := NewQuery("age > 18").
  And("status = 'active'").
  And("verified = true").
  Build()
// "age > 18 AND status = 'active' AND verified = true"
`}),(0,a.jsx)(r.h3,{id:"converting-tofrom-regular-arrays",children:"Converting to/from Regular Arrays"}),(0,a.jsx)(t.av,{file:"conversion.go",children:`// From regular array
regularArray := []int{1, 2, 3}

nonEmpty := F.Pipe2(
  regularArray,
  A.From,
  O.Match(
      func() NonEmptyArray[int] {
          // Provide default
          return A.Of(0)
      },
      F.Identity[NonEmptyArray[int]],
  ),
)

// To regular array
toRegular := func(nea NonEmptyArray[int]) []int {
  return append([]int{A.Head(nea)}, A.Tail(nea)...)
}
`})]}),"\n",(0,a.jsx)(r.hr,{}),"\n",(0,a.jsx)(t.Pq,{type:"info",children:(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.strong,{children:"Type Safety"}),": NonEmptyArray eliminates the need for runtime empty checks. Operations like ",(0,a.jsx)(r.code,{children:"Head"})," and ",(0,a.jsx)(r.code,{children:"Last"})," are always safe and return values directly, not Options."]})}),"\n",(0,a.jsx)(t.Pq,{type:"info",children:(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.strong,{children:"When to Use"}),": Use NonEmptyArray when your domain logic requires at least one element - configuration lists, validation errors, search results that must have matches, etc."]})}),"\n",(0,a.jsx)(r.hr,{}),"\n",(0,a.jsx)(t.is,{prev:{to:"/docs/v2/utilities/pipe-flow",title:"Pipe & Flow"},next:{to:"/docs/v2/collections/sequence-traverse",title:"Sequence & Traverse"}}),"\n",(0,a.jsx)(r.hr,{})]})}function m(e={}){let{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},5811(e,r,n){n.d(r,{Pq:()=>_,eM:()=>M,hg:()=>w,_1:()=>E,av:()=>g,Gs:()=>b,vr:()=>P,x7:()=>u,bY:()=>B,wn:()=>j,zY:()=>m,ju:()=>x,BQ:()=>p,is:()=>F});var s=n(4848),a=n(6540);let i="codeTag_uQ6s",t="warn_PIJZ",l="benchNum_PicT",c="api_M0YO",d="pagerLink_hQ8Y",o="pagerLbl_CteO",h="pagerTtl_t0em";function m({eyebrow:e,title:r,titleAccent:n,lede:a,meta:i}){return(0,s.jsxs)("header",{className:"head_Sp2B",children:[(0,s.jsxs)("div",{className:"headLeft_aDUD",children:[e&&(0,s.jsx)("div",{className:"eyebrow__SSv",children:e}),(0,s.jsxs)("h1",{className:"headTitle_xWjG",children:[r,n?(0,s.jsxs)(s.Fragment,{children:[" ",(0,s.jsx)("em",{children:n})]}):null]}),a&&(0,s.jsx)("p",{className:"lede_Ltdj",children:a})]}),i&&i.length>0&&(0,s.jsx)("aside",{className:"headMeta_kmCF",children:i.map((e,r)=>(0,s.jsxs)("div",{className:"metaRow_drwK",children:[(0,s.jsx)("span",{className:"metaK_SNLg",children:e.label}),(0,s.jsx)("span",{className:"metaV_zAp5",children:e.value})]},r))})]})}function u({children:e}){return(0,s.jsx)("span",{className:"pill_Lzl6",children:e})}function x({children:e}){return(0,s.jsx)("div",{className:"tldr_mz3p",children:e})}function p({label:e,value:r,accent:n,unit:a,description:i,variant:t="default",prose:l}){return(0,s.jsxs)("div",{className:`tldrCard_nSap ${"up"===t?"up_ip1p":"down"===t?"down_x6We":""}`,children:[e&&(0,s.jsx)("div",{className:"tldrK_kP7m",children:e}),(0,s.jsxs)("div",{className:`tldrV_gUPe ${l?"tldrVProse_sV_2":""}`,children:[r,n?(0,s.jsx)("em",{children:n}):null,a?(0,s.jsx)("small",{children:a}):null]}),i&&(0,s.jsx)("div",{className:"tldrD_kfCX",children:i})]})}function j({id:e,number:r,title:n,titleAccent:a,tag:i,lede:t,children:l}){return(0,s.jsxs)("section",{className:"section_B_ST",children:[(0,s.jsxs)("div",{className:"sectionHead_oGCN",children:[(0,s.jsxs)("div",{className:"sectionHeadLeft_bfh9",children:[r&&(0,s.jsx)("span",{className:"sectionNum_qiYt",children:r}),(0,s.jsxs)("h2",{className:"sectionTitle__6nw",id:e,children:[n,a?(0,s.jsxs)(s.Fragment,{children:[" ",(0,s.jsx)("em",{children:a})]}):null]})]}),i&&(0,s.jsx)("span",{className:"sectionTag_se22",children:i})]}),t&&(0,s.jsx)("p",{className:"sectionLede_yuVk",children:t}),l]})}let f=({size:e=14,className:r})=>(0,s.jsx)("svg",{width:e,height:e,viewBox:"0 0 32 32",fill:"currentColor",className:r,"aria-hidden":"true",children:(0,s.jsx)("path",{d:"M13 24l-9-9 1.4-1.4L13 21.2 26.6 7.6 28 9z"})}),y=({size:e=14,className:r})=>(0,s.jsx)("svg",{width:e,height:e,viewBox:"0 0 32 32",fill:"currentColor",className:r,"aria-hidden":"true",children:(0,s.jsx)("path",{d:"M28 10v18H10V10h18m0-2H10a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2z"})}),A=({size:e=12,className:r})=>(0,s.jsx)("svg",{width:e,height:e,viewBox:"0 0 32 32",fill:"currentColor",className:r,"aria-hidden":"true",children:(0,s.jsx)("path",{d:"M18 6L16.6 7.4 24.2 15H4v2h20.2l-7.6 7.6L18 26l10-10z"})}),v=({size:e=12,className:r})=>(0,s.jsx)("svg",{width:e,height:e,viewBox:"0 0 32 32",fill:"currentColor",className:r,"aria-hidden":"true",children:(0,s.jsx)("path",{d:"M14 26l1.4-1.4L7.8 17H28v-2H7.8l7.6-7.6L14 6 4 16z"})});function g({file:e,status:r,copy:n=!0,children:l}){let c=(0,a.useRef)(null),[d,o]=(0,a.useState)(!1);return(0,s.jsxs)("div",{className:"codeCard_fiIG",children:[(0,s.jsxs)("div",{className:"codeBar_SZ78",children:[(0,s.jsx)("span",{className:"codeDot_JDOV"}),e&&(0,s.jsx)("span",{className:"codeFile_uZDd",children:e}),(0,s.jsx)("span",{className:"codeSpacer_nRmZ"}),r?"tested"===r?(0,s.jsx)("span",{className:`${i} ok_rUJx`,children:"tested"}):"warn"===r?(0,s.jsx)("span",{className:`${i} ${t}`,children:"caveat"}):"note"===r?(0,s.jsx)("span",{className:i,children:"note"}):"string"==typeof r?(0,s.jsx)("span",{className:i,children:r}):r:null,n&&(0,s.jsx)("button",{type:"button",className:"codeCopy_fKPb",onClick:()=>{if(!c.current)return;let e=c.current.innerText;"u">typeof navigator&&navigator.clipboard&&navigator.clipboard.writeText(e).then(()=>{o(!0),setTimeout(()=>o(!1),1200)})},"aria-label":"Copy code",children:d?"Copied":(0,s.jsx)(y,{})})]}),(0,s.jsx)("pre",{ref:c,className:"codeBlock_oEWX",children:l})]})}let N={info:({size:e=18,className:r})=>(0,s.jsxs)("svg",{width:e,height:e,viewBox:"0 0 32 32",fill:"currentColor",className:r,"aria-hidden":"true",children:[(0,s.jsx)("path",{d:"M16 2A14 14 0 1 0 30 16 14 14 0 0 0 16 2zm0 26a12 12 0 1 1 12-12 12 12 0 0 1-12 12z"}),(0,s.jsx)("path",{d:"M16 14h-2v2h1v6h-1v2h4v-2h-1v-8zm-.5-5a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 15.5 9z"})]}),warn:({size:e=18,className:r})=>(0,s.jsxs)("svg",{width:e,height:e,viewBox:"0 0 32 32",fill:"currentColor",className:r,"aria-hidden":"true",children:[(0,s.jsx)("path",{d:"M16 23a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 16 23zM15 13h2v8h-2z"}),(0,s.jsx)("path",{d:"M28.7 26.31L17.36 4.27a1.51 1.51 0 0 0-2.72 0L3.3 26.31a1.5 1.5 0 0 0 1.36 2.19h22.69a1.5 1.5 0 0 0 1.35-2.19z"})]}),success:f};function _({type:e="info",title:r,children:n}){let a=N[e];return(0,s.jsxs)("div",{className:`callout_yWfv ${"warn"===e?t:"success"===e?"success_D78d":""}`,children:[(0,s.jsx)("span",{className:"calloutIcon_hdwU",children:(0,s.jsx)(a,{size:18})}),(0,s.jsxs)("div",{className:"calloutBody_Qz4I",children:[r&&(0,s.jsx)("strong",{className:"calloutTitle_MXy4",children:r}),n]})]})}function b({children:e}){return(0,s.jsx)("div",{className:"compare_WfXa",children:e})}function E({kind:e,title:r,pill:n,children:a}){return(0,s.jsxs)("div",{className:`compareCol_nZe9 ${"bad"===e?"bad_pZ5b":"good_EJeo"}`,children:[(0,s.jsxs)("div",{className:"compareHead_vAhW",children:[(0,s.jsx)("span",{children:r??("bad"===e?"Before":"After")}),n&&(0,s.jsx)("span",{className:"comparePill_fmmx",children:n})]}),(0,s.jsx)("div",{className:"compareBody_hP62",children:a})]})}function w({title:e,command:r,columns:n,rows:a}){let[i,t,c,d,o]=n??["Variant","Speed","ns/op","B/op","\u0394"];return(0,s.jsxs)("div",{className:"bench_zMa2",children:[(0,s.jsxs)("div",{className:"benchHead_q6K3",children:[(0,s.jsx)("span",{children:e}),r&&(0,s.jsxs)("span",{className:"benchCmd_iUFI",children:[(0,s.jsx)("span",{className:"benchPrompt_LRr4",children:"$"}),r]})]}),(0,s.jsxs)("table",{className:"benchTable_u8XZ",children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:i}),(0,s.jsx)("th",{style:{width:"40%"},children:t}),(0,s.jsx)("th",{className:l,children:c}),(0,s.jsx)("th",{className:l,children:d}),(0,s.jsx)("th",{className:l,children:o})]})}),(0,s.jsx)("tbody",{children:a.map((e,r)=>{let n="win"===e.barKind?"win_PjNM":"lose"===e.barKind?"lose_A9dr":"",a="good"===e.deltaKind?"deltaGood_dYlm":"bad"===e.deltaKind?"deltaBad_yHEA":l;return(0,s.jsxs)("tr",{className:e.winner?"benchWinner_jDc2":void 0,children:[(0,s.jsx)("td",{className:"benchLabel_uFhm",children:e.label}),(0,s.jsx)("td",{children:null!=e.bar&&(0,s.jsx)("span",{className:"bar_jZ6H",children:(0,s.jsx)("span",{className:"barTrack_lefl",children:(0,s.jsx)("span",{className:`barFill_bMgr ${n}`,style:{width:`${100*Math.max(0,Math.min(1,e.bar))}%`}})})})}),(0,s.jsx)("td",{className:l,children:e.nsOp}),(0,s.jsx)("td",{className:l,children:e.bOp}),(0,s.jsx)("td",{className:a,children:e.delta})]},r)})})]})]})}function P({columns:e,rows:r,children:n}){if(n)return(0,s.jsx)("div",{className:c,children:n});let[a,i,t]=e??["Symbol","Signature","Since"];return(0,s.jsx)("div",{className:c,children:(0,s.jsxs)("table",{className:"apiTable_kmi_",children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:a}),(0,s.jsx)("th",{children:i}),(0,s.jsx)("th",{children:t})]})}),(0,s.jsx)("tbody",{children:r?.map((e,r)=>(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("code",{children:e.symbol})}),(0,s.jsxs)("td",{children:[(0,s.jsx)("code",{children:e.signature}),e.description&&(0,s.jsx)("div",{className:"apiDesc__siK",children:e.description})]}),(0,s.jsx)("td",{children:e.since&&(0,s.jsx)("code",{children:e.since})})]},r))})]})})}function M({status:e,children:r}){return(0,s.jsx)(s.Fragment,{})}function B({title:e="Steps",items:r,children:n}){let i,t=(i=r||(n?a.Children.toArray(n).filter(e=>a.isValidElement(e)).map(e=>({label:e.props.children,impact:e.props.status,done:!1})):[])).filter(e=>e.done).length;return(0,s.jsxs)("div",{className:"check_Z_XE",children:[(0,s.jsxs)("div",{className:"checkHead__B8i",children:[(0,s.jsx)("span",{children:e}),r&&(0,s.jsxs)("span",{children:[t," / ",i.length," complete"]})]}),(0,s.jsx)("ul",{className:"checkList_ziWk",children:i.map((e,r)=>(0,s.jsxs)("li",{className:`checkItem_jgfw ${e.done?"done_rLON":""}`,children:[(0,s.jsx)("span",{className:"checkBox_TriO",children:e.done&&(0,s.jsx)(f,{size:10})}),(0,s.jsx)("span",{className:"checkLbl_IWQU",children:e.label}),e.impact&&(0,s.jsx)("span",{className:"checkImpact_BaeN",children:e.impact})]},r))})]})}var C=n(5310);function F({prev:e,next:r}){return(0,s.jsxs)("nav",{className:"pager_oMm2",children:[e?(0,s.jsxs)(C.A,{to:e.to,className:d,children:[(0,s.jsxs)("span",{className:o,children:[(0,s.jsx)(v,{})," ",e.label??"Previous"]}),(0,s.jsx)("span",{className:h,children:e.title})]}):(0,s.jsx)("span",{}),r?(0,s.jsxs)(C.A,{to:r.to,className:`${d} next_PLI2`,children:[(0,s.jsxs)("span",{className:o,children:[r.label??"Next"," ",(0,s.jsx)(A,{})]}),(0,s.jsx)("span",{className:h,children:r.title})]}):(0,s.jsx)("span",{})]})}},8453(e,r,n){n.d(r,{R:()=>t,x:()=>l});var s=n(6540);let a={},i=s.createContext(a);function t(e){let r=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:t(e.components),s.createElement(i.Provider,{value:r},e.children)}}}]);
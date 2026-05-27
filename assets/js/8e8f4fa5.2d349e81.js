"use strict";(self.webpackChunkfp_go_docs=self.webpackChunkfp_go_docs||[]).push([["1021"],{5009(e,n,s){s.r(n),s.d(n,{metadata:()=>t,default:()=>u,frontMatter:()=>a,contentTitle:()=>c,toc:()=>o,assets:()=>d});var t=JSON.parse('{"id":"v2/utilities/function","title":"Function Utilities","description":"Core function manipulation utilities including identity, constant, and combinators.","source":"@site/docs/v2/utilities/function.md","sourceDirName":"v2/utilities","slug":"/v2/utilities/function","permalink":"/fp-go/docs/v2/utilities/function","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":19,"frontMatter":{"title":"Function Utilities","hide_title":true,"description":"Core function manipulation utilities including identity, constant, and combinators.","sidebar_position":19},"sidebar":"apiSidebar","previous":{"title":"Sequence & Traverse","permalink":"/fp-go/docs/v2/collections/sequence-traverse"},"next":{"title":"Pipe & Flow","permalink":"/fp-go/docs/v2/utilities/pipe-flow"}}'),i=s(4848),r=s(8453),l=s(5811);let a={title:"Function Utilities",hide_title:!0,description:"Core function manipulation utilities including identity, constant, and combinators.",sidebar_position:19},c,d={},o=[{value:"Identity",id:"identity",level:3},{value:"Constant Functions",id:"constant-functions",level:3},{value:"Swap Parameters",id:"swap-parameters",level:3},{value:"First &amp; Second",id:"first--second",level:3},{value:"Nullability Checks",id:"nullability-checks",level:3},{value:"Default Values",id:"default-values",level:3},{value:"Callback Handlers",id:"callback-handlers",level:3},{value:"Parameter Reordering",id:"parameter-reordering",level:3},{value:"Optional Transformation",id:"optional-transformation",level:3}];function h(e){let n={code:"code",h3:"h3",hr:"hr",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(l.zY,{eyebrow:"Reference \xb7 Utilities",title:"Function Utilities",lede:"Core function manipulation utilities. Essential tools for working with functions in a functional style.",meta:[{label:"Package",value:"github.com/IBM/fp-go/v2/function"},{label:"Utilities",value:"Identity, Constant, Swap, First, Second"}]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(l.wn,{num:"1",title:"Core API",children:(0,i.jsx)(l.vr,{children:(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Function"}),(0,i.jsx)(n.th,{children:"Signature"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"Identity"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"func Identity[A any](A) A"})}),(0,i.jsx)(n.td,{children:"Return input unchanged"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"Constant"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"func Constant[A any](A) func() A"})}),(0,i.jsx)(n.td,{children:"Return constant value"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"Constant1"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"func Constant1[A, B any](B) func(A) B"})}),(0,i.jsx)(n.td,{children:"Ignore input, return constant"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"Constant2"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"func Constant2[A, B, C any](C) func(A, B) C"})}),(0,i.jsx)(n.td,{children:"Ignore inputs, return constant"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"Swap"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"func Swap[A, B, C any](func(A, B) C) func(B, A) C"})}),(0,i.jsx)(n.td,{children:"Reverse parameters"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"First"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"func First[A, B any](A, B) A"})}),(0,i.jsx)(n.td,{children:"Return first argument"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"Second"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"func Second[A, B any](A, B) B"})}),(0,i.jsx)(n.td,{children:"Return second argument"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"IsNil"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"func IsNil[A any](*A) bool"})}),(0,i.jsx)(n.td,{children:"Check if pointer is nil"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"IsNonNil"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"func IsNonNil[A any](*A) bool"})}),(0,i.jsx)(n.td,{children:"Check if pointer is not nil"})]})]})]})})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsxs)(l.wn,{num:"2",title:"Usage Examples",children:[(0,i.jsx)(n.h3,{id:"identity",children:"Identity"}),(0,i.jsx)(l.av,{file:"identity.go",children:`import F "github.com/IBM/fp-go/v2/function"

value := F.Identity(42)
// 42

// Useful in higher-order functions
import O "github.com/IBM/fp-go/v2/option"

result := F.Pipe2(
  someOption,
  O.Map(F.Identity[int]),  // No transformation
)

// Conditional transformation
transform := func(shouldTransform bool) func(int) int {
  if shouldTransform {
      return func(n int) int { return n * 2 }
  }
  return F.Identity[int]  // No transformation
}
`}),(0,i.jsx)(n.h3,{id:"constant-functions",children:"Constant Functions"}),(0,i.jsx)(l.av,{file:"constant.go",children:`// Constant - returns value (0 args)
getDefault := F.Constant(42)
value := getDefault()
// 42

// Constant1 - ignores 1 input
alwaysTrue := F.Constant1[string, bool](true)
result := alwaysTrue("anything")
// true

// Useful for default handlers
handleError := F.Constant1[error, int](0)

// Constant2 - ignores 2 inputs
defaultValue := F.Constant2[string, int, bool](false)
result := defaultValue("ignored", 42)
// false
`}),(0,i.jsx)(n.h3,{id:"swap-parameters",children:"Swap Parameters"}),(0,i.jsx)(l.av,{file:"swap.go",children:`// Original function
divide := func(a, b int) int { return a / b }

// Swapped version
divideSwapped := F.Swap(divide)

divide(10, 2)         // 5
divideSwapped(2, 10)  // 5 (parameters swapped)

// API expects (context, id)
fetchUser := func(ctx context.Context, id int) User {
  // ...
}

// But we have (id, context) - swap to match
fetchUserSwapped := F.Swap(fetchUser)
user := fetchUserSwapped(123, ctx)
`}),(0,i.jsx)(n.h3,{id:"first--second",children:"First & Second"}),(0,i.jsx)(l.av,{file:"first_second.go",children:`// First returns first argument
first := F.First(42, "hello")
// 42

// Second returns second argument
second := F.Second(42, "hello")
// "hello"

// Useful in callbacks
type Handler func(Result, error) Result

onSuccess := func(r Result, _ error) Result {
  return r
}

onError := func(_ Result, err error) Result {
  return Result{Error: err}
}
`}),(0,i.jsx)(n.h3,{id:"nullability-checks",children:"Nullability Checks"}),(0,i.jsx)(l.av,{file:"nil_checks.go",children:`var ptr *int = nil
var val *int = new(int)

F.IsNil(ptr)     // true
F.IsNil(val)     // false

F.IsNonNil(ptr)  // false
F.IsNonNil(val)  // true

// Only process non-nil values
processIfNotNil := func(ptr *Data) Result {
  if F.IsNonNil(ptr) {
      return process(*ptr)
  }
  return defaultResult
}
`})]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsxs)(l.wn,{num:"3",title:"Common Patterns",children:[(0,i.jsx)(n.h3,{id:"default-values",children:"Default Values"}),(0,i.jsx)(l.av,{file:"defaults.go",children:`type Config struct {
  Timeout int
  Retries int
}

// Provide defaults
getTimeout := F.Pipe3(
  config.Timeout,
  O.FromPredicate(func(t int) bool { return t > 0 }),
  O.GetOrElse(F.Constant(30)),
)

// Always return default on error
import R "github.com/IBM/fp-go/v2/result"

safeGet := F.Pipe2(
  dangerousOperation(),
  R.GetOrElse(F.Constant(defaultValue)),
)
`}),(0,i.jsx)(n.h3,{id:"callback-handlers",children:"Callback Handlers"}),(0,i.jsx)(l.av,{file:"handlers.go",children:`type Handler func(data string, err error) string

// Success handler (ignore error)
onSuccess := func(data string, _ error) string {
  return data
}

// Error handler (ignore data)
onError := func(_ string, err error) string {
  return err.Error()
}

// Using Constant for fixed responses
notFound := F.Constant2[string, error, string]("Not Found")

// Default handler
defaultHandler := F.Constant1[Request, Response](
  Response{Status: 404, Body: "Not Found"},
)
`}),(0,i.jsx)(n.h3,{id:"parameter-reordering",children:"Parameter Reordering"}),(0,i.jsx)(l.av,{file:"reorder.go",children:`// Create specialized version
divideBy10 := func(n int) int {
  return F.Swap(divide)(10, n)
}

divideBy10(2)  // 5
divideBy10(5)  // 2
`}),(0,i.jsx)(n.h3,{id:"optional-transformation",children:"Optional Transformation"}),(0,i.jsx)(l.av,{file:"optional.go",children:`// Transform only if condition met
maybeTransform := func(condition bool, f func(A) A) func(A) A {
  if condition {
      return f
  }
  return F.Identity[A]
}

result := F.Pipe2(
  value,
  maybeTransform(shouldTransform, transform),
)
`})]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(l.Pq,{type:"info",children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Identity"}),": Use ",(0,i.jsx)(n.code,{children:"Identity"})," for no-op transformations in pipelines. It's clearer than ",(0,i.jsx)(n.code,{children:"func(x T) T { return x }"}),"."]})}),"\n",(0,i.jsx)(l.Pq,{type:"info",children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Constant"}),": ",(0,i.jsx)(n.code,{children:"Constant"})," functions are useful for providing default values, especially with ",(0,i.jsx)(n.code,{children:"GetOrElse"})," and error handlers."]})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(l.is,{prev:{to:"/docs/v2/utilities/eq",title:"Eq (Equality)"},next:{to:"/docs/v2/utilities/magma",title:"Magma"}}),"\n",(0,i.jsx)(n.hr,{})]})}function u(e={}){let{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},5811(e,n,s){s.d(n,{Pq:()=>y,eM:()=>A,hg:()=>F,_1:()=>w,av:()=>_,Gs:()=>C,vr:()=>S,x7:()=>x,bY:()=>B,wn:()=>m,zY:()=>u,ju:()=>j,BQ:()=>p,is:()=>I});var t=s(4848),i=s(6540);let r="codeTag_uQ6s",l="warn_PIJZ",a="benchNum_PicT",c="api_M0YO",d="pagerLink_hQ8Y",o="pagerLbl_CteO",h="pagerTtl_t0em";function u({eyebrow:e,title:n,titleAccent:s,lede:i,meta:r}){return(0,t.jsxs)("header",{className:"head_Sp2B",children:[(0,t.jsxs)("div",{className:"headLeft_aDUD",children:[e&&(0,t.jsx)("div",{className:"eyebrow__SSv",children:e}),(0,t.jsxs)("h1",{className:"headTitle_xWjG",children:[n,s?(0,t.jsxs)(t.Fragment,{children:[" ",(0,t.jsx)("em",{children:s})]}):null]}),i&&(0,t.jsx)("p",{className:"lede_Ltdj",children:i})]}),r&&r.length>0&&(0,t.jsx)("aside",{className:"headMeta_kmCF",children:r.map((e,n)=>(0,t.jsxs)("div",{className:"metaRow_drwK",children:[(0,t.jsx)("span",{className:"metaK_SNLg",children:e.label}),(0,t.jsx)("span",{className:"metaV_zAp5",children:e.value})]},n))})]})}function x({children:e}){return(0,t.jsx)("span",{className:"pill_Lzl6",children:e})}function j({children:e}){return(0,t.jsx)("div",{className:"tldr_mz3p",children:e})}function p({label:e,value:n,accent:s,unit:i,description:r,variant:l="default",prose:a}){return(0,t.jsxs)("div",{className:`tldrCard_nSap ${"up"===l?"up_ip1p":"down"===l?"down_x6We":""}`,children:[e&&(0,t.jsx)("div",{className:"tldrK_kP7m",children:e}),(0,t.jsxs)("div",{className:`tldrV_gUPe ${a?"tldrVProse_sV_2":""}`,children:[n,s?(0,t.jsx)("em",{children:s}):null,i?(0,t.jsx)("small",{children:i}):null]}),r&&(0,t.jsx)("div",{className:"tldrD_kfCX",children:r})]})}function m({id:e,number:n,title:s,titleAccent:i,tag:r,lede:l,children:a}){return(0,t.jsxs)("section",{className:"section_B_ST",children:[(0,t.jsxs)("div",{className:"sectionHead_oGCN",children:[(0,t.jsxs)("div",{className:"sectionHeadLeft_bfh9",children:[n&&(0,t.jsx)("span",{className:"sectionNum_qiYt",children:n}),(0,t.jsxs)("h2",{className:"sectionTitle__6nw",id:e,children:[s,i?(0,t.jsxs)(t.Fragment,{children:[" ",(0,t.jsx)("em",{children:i})]}):null]})]}),r&&(0,t.jsx)("span",{className:"sectionTag_se22",children:r})]}),l&&(0,t.jsx)("p",{className:"sectionLede_yuVk",children:l}),a]})}let f=({size:e=14,className:n})=>(0,t.jsx)("svg",{width:e,height:e,viewBox:"0 0 32 32",fill:"currentColor",className:n,"aria-hidden":"true",children:(0,t.jsx)("path",{d:"M13 24l-9-9 1.4-1.4L13 21.2 26.6 7.6 28 9z"})}),v=({size:e=14,className:n})=>(0,t.jsx)("svg",{width:e,height:e,viewBox:"0 0 32 32",fill:"currentColor",className:n,"aria-hidden":"true",children:(0,t.jsx)("path",{d:"M28 10v18H10V10h18m0-2H10a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2z"})}),g=({size:e=12,className:n})=>(0,t.jsx)("svg",{width:e,height:e,viewBox:"0 0 32 32",fill:"currentColor",className:n,"aria-hidden":"true",children:(0,t.jsx)("path",{d:"M18 6L16.6 7.4 24.2 15H4v2h20.2l-7.6 7.6L18 26l10-10z"})}),N=({size:e=12,className:n})=>(0,t.jsx)("svg",{width:e,height:e,viewBox:"0 0 32 32",fill:"currentColor",className:n,"aria-hidden":"true",children:(0,t.jsx)("path",{d:"M14 26l1.4-1.4L7.8 17H28v-2H7.8l7.6-7.6L14 6 4 16z"})});function _({file:e,status:n,copy:s=!0,children:a}){let c=(0,i.useRef)(null),[d,o]=(0,i.useState)(!1);return(0,t.jsxs)("div",{className:"codeCard_fiIG",children:[(0,t.jsxs)("div",{className:"codeBar_SZ78",children:[(0,t.jsx)("span",{className:"codeDot_JDOV"}),e&&(0,t.jsx)("span",{className:"codeFile_uZDd",children:e}),(0,t.jsx)("span",{className:"codeSpacer_nRmZ"}),n?"tested"===n?(0,t.jsx)("span",{className:`${r} ok_rUJx`,children:"tested"}):"warn"===n?(0,t.jsx)("span",{className:`${r} ${l}`,children:"caveat"}):"note"===n?(0,t.jsx)("span",{className:r,children:"note"}):"string"==typeof n?(0,t.jsx)("span",{className:r,children:n}):n:null,s&&(0,t.jsx)("button",{type:"button",className:"codeCopy_fKPb",onClick:()=>{if(!c.current)return;let e=c.current.innerText;"u">typeof navigator&&navigator.clipboard&&navigator.clipboard.writeText(e).then(()=>{o(!0),setTimeout(()=>o(!1),1200)})},"aria-label":"Copy code",children:d?"Copied":(0,t.jsx)(v,{})})]}),(0,t.jsx)("pre",{ref:c,className:"codeBlock_oEWX",children:a})]})}let b={info:({size:e=18,className:n})=>(0,t.jsxs)("svg",{width:e,height:e,viewBox:"0 0 32 32",fill:"currentColor",className:n,"aria-hidden":"true",children:[(0,t.jsx)("path",{d:"M16 2A14 14 0 1 0 30 16 14 14 0 0 0 16 2zm0 26a12 12 0 1 1 12-12 12 12 0 0 1-12 12z"}),(0,t.jsx)("path",{d:"M16 14h-2v2h1v6h-1v2h4v-2h-1v-8zm-.5-5a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 15.5 9z"})]}),warn:({size:e=18,className:n})=>(0,t.jsxs)("svg",{width:e,height:e,viewBox:"0 0 32 32",fill:"currentColor",className:n,"aria-hidden":"true",children:[(0,t.jsx)("path",{d:"M16 23a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 16 23zM15 13h2v8h-2z"}),(0,t.jsx)("path",{d:"M28.7 26.31L17.36 4.27a1.51 1.51 0 0 0-2.72 0L3.3 26.31a1.5 1.5 0 0 0 1.36 2.19h22.69a1.5 1.5 0 0 0 1.35-2.19z"})]}),success:f};function y({type:e="info",title:n,children:s}){let i=b[e];return(0,t.jsxs)("div",{className:`callout_yWfv ${"warn"===e?l:"success"===e?"success_D78d":""}`,children:[(0,t.jsx)("span",{className:"calloutIcon_hdwU",children:(0,t.jsx)(i,{size:18})}),(0,t.jsxs)("div",{className:"calloutBody_Qz4I",children:[n&&(0,t.jsx)("strong",{className:"calloutTitle_MXy4",children:n}),s]})]})}function C({children:e}){return(0,t.jsx)("div",{className:"compare_WfXa",children:e})}function w({kind:e,title:n,pill:s,children:i}){return(0,t.jsxs)("div",{className:`compareCol_nZe9 ${"bad"===e?"bad_pZ5b":"good_EJeo"}`,children:[(0,t.jsxs)("div",{className:"compareHead_vAhW",children:[(0,t.jsx)("span",{children:n??("bad"===e?"Before":"After")}),s&&(0,t.jsx)("span",{className:"comparePill_fmmx",children:s})]}),(0,t.jsx)("div",{className:"compareBody_hP62",children:i})]})}function F({title:e,command:n,columns:s,rows:i}){let[r,l,c,d,o]=s??["Variant","Speed","ns/op","B/op","\u0394"];return(0,t.jsxs)("div",{className:"bench_zMa2",children:[(0,t.jsxs)("div",{className:"benchHead_q6K3",children:[(0,t.jsx)("span",{children:e}),n&&(0,t.jsxs)("span",{className:"benchCmd_iUFI",children:[(0,t.jsx)("span",{className:"benchPrompt_LRr4",children:"$"}),n]})]}),(0,t.jsxs)("table",{className:"benchTable_u8XZ",children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:r}),(0,t.jsx)("th",{style:{width:"40%"},children:l}),(0,t.jsx)("th",{className:a,children:c}),(0,t.jsx)("th",{className:a,children:d}),(0,t.jsx)("th",{className:a,children:o})]})}),(0,t.jsx)("tbody",{children:i.map((e,n)=>{let s="win"===e.barKind?"win_PjNM":"lose"===e.barKind?"lose_A9dr":"",i="good"===e.deltaKind?"deltaGood_dYlm":"bad"===e.deltaKind?"deltaBad_yHEA":a;return(0,t.jsxs)("tr",{className:e.winner?"benchWinner_jDc2":void 0,children:[(0,t.jsx)("td",{className:"benchLabel_uFhm",children:e.label}),(0,t.jsx)("td",{children:null!=e.bar&&(0,t.jsx)("span",{className:"bar_jZ6H",children:(0,t.jsx)("span",{className:"barTrack_lefl",children:(0,t.jsx)("span",{className:`barFill_bMgr ${s}`,style:{width:`${100*Math.max(0,Math.min(1,e.bar))}%`}})})})}),(0,t.jsx)("td",{className:a,children:e.nsOp}),(0,t.jsx)("td",{className:a,children:e.bOp}),(0,t.jsx)("td",{className:i,children:e.delta})]},n)})})]})]})}function S({columns:e,rows:n,children:s}){if(s)return(0,t.jsx)("div",{className:c,children:s});let[i,r,l]=e??["Symbol","Signature","Since"];return(0,t.jsx)("div",{className:c,children:(0,t.jsxs)("table",{className:"apiTable_kmi_",children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:i}),(0,t.jsx)("th",{children:r}),(0,t.jsx)("th",{children:l})]})}),(0,t.jsx)("tbody",{children:n?.map((e,n)=>(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("code",{children:e.symbol})}),(0,t.jsxs)("td",{children:[(0,t.jsx)("code",{children:e.signature}),e.description&&(0,t.jsx)("div",{className:"apiDesc__siK",children:e.description})]}),(0,t.jsx)("td",{children:e.since&&(0,t.jsx)("code",{children:e.since})})]},n))})]})})}function A({status:e,children:n}){return(0,t.jsx)(t.Fragment,{})}function B({title:e="Steps",items:n,children:s}){let r,l=(r=n||(s?i.Children.toArray(s).filter(e=>i.isValidElement(e)).map(e=>({label:e.props.children,impact:e.props.status,done:!1})):[])).filter(e=>e.done).length;return(0,t.jsxs)("div",{className:"check_Z_XE",children:[(0,t.jsxs)("div",{className:"checkHead__B8i",children:[(0,t.jsx)("span",{children:e}),n&&(0,t.jsxs)("span",{children:[l," / ",r.length," complete"]})]}),(0,t.jsx)("ul",{className:"checkList_ziWk",children:r.map((e,n)=>(0,t.jsxs)("li",{className:`checkItem_jgfw ${e.done?"done_rLON":""}`,children:[(0,t.jsx)("span",{className:"checkBox_TriO",children:e.done&&(0,t.jsx)(f,{size:10})}),(0,t.jsx)("span",{className:"checkLbl_IWQU",children:e.label}),e.impact&&(0,t.jsx)("span",{className:"checkImpact_BaeN",children:e.impact})]},n))})]})}var k=s(5310);function I({prev:e,next:n}){return(0,t.jsxs)("nav",{className:"pager_oMm2",children:[e?(0,t.jsxs)(k.A,{to:e.to,className:d,children:[(0,t.jsxs)("span",{className:o,children:[(0,t.jsx)(N,{})," ",e.label??"Previous"]}),(0,t.jsx)("span",{className:h,children:e.title})]}):(0,t.jsx)("span",{}),n?(0,t.jsxs)(k.A,{to:n.to,className:`${d} next_PLI2`,children:[(0,t.jsxs)("span",{className:o,children:[n.label??"Next"," ",(0,t.jsx)(g,{})]}),(0,t.jsx)("span",{className:h,children:n.title})]}):(0,t.jsx)("span",{})]})}},8453(e,n,s){s.d(n,{R:()=>l,x:()=>a});var t=s(6540);let i={},r=t.createContext(i);function l(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);
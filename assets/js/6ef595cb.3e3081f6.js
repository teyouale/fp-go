"use strict";(self.webpackChunkfp_go_docs=self.webpackChunkfp_go_docs||[]).push([["2587"],{4023(e,i,s){s.r(i),s.d(i,{metadata:()=>n,default:()=>x,frontMatter:()=>r,contentTitle:()=>c,toc:()=>o,assets:()=>d});var n=JSON.parse('{"id":"v2/utilities/predicate","title":"Predicate","description":"Boolean-valued functions and combinators for filtering and validation in fp-go","source":"@site/docs/v2/utilities/predicate.md","sourceDirName":"v2/utilities","slug":"/v2/utilities/predicate","permalink":"/fp-go/docs/v2/utilities/predicate","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":23,"frontMatter":{"title":"Predicate","hide_title":true,"description":"Boolean-valued functions and combinators for filtering and validation in fp-go","sidebar_position":23},"sidebar":"apiSidebar","previous":{"title":"Bind & Curry","permalink":"/fp-go/docs/v2/utilities/bind-curry"},"next":{"title":"Boolean","permalink":"/fp-go/docs/v2/utilities/boolean"}}'),t=s(4848),a=s(8453),l=s(5811);let r={title:"Predicate",hide_title:!0,description:"Boolean-valued functions and combinators for filtering and validation in fp-go",sidebar_position:23},c,d={},o=[];function h(e){let i={a:"a",code:"code",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.zY,{eyebrow:"v2 \xb7 Utilities",title:"Predicate",titleAccent:"Boolean Logic",lede:"Predicates are functions that return boolean values. The predicate package provides utilities for combining and manipulating them.",meta:[{label:"Package",value:"predicate"},{label:"Since",value:"v2.0.0"},{label:"Type",value:"func(A) bool"}]}),"\n",(0,t.jsx)(i.hr,{}),"\n",(0,t.jsxs)(l.wn,{num:"1",title:"Overview",children:[(0,t.jsxs)(i.p,{children:["A ",(0,t.jsx)(i.strong,{children:"Predicate"})," is a function that takes a value and returns a boolean. Predicates are fundamental for:"]}),(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Filtering collections"}),"\n",(0,t.jsx)(i.li,{children:"Validation logic"}),"\n",(0,t.jsx)(i.li,{children:"Conditional operations"}),"\n",(0,t.jsx)(i.li,{children:"Boolean algebra"}),"\n"]}),(0,t.jsx)(i.p,{children:"The predicate package provides combinators to compose complex predicates from simple ones."})]}),"\n",(0,t.jsx)(i.hr,{}),"\n",(0,t.jsx)(l.wn,{num:"2",title:"Basic Predicates",children:(0,t.jsx)(l.av,{file:"predicate_basic.go",tag:"example",children:`import P "github.com/IBM/fp-go/predicate"

// Define simple predicates
isEven := func(n int) bool {
  return n%2 == 0
}

isPositive := func(n int) bool {
  return n > 0
}

isGreaterThan10 := func(n int) bool {
  return n > 10
}

// Use predicates
isEven(4)        // true
isPositive(-5)   // false
isGreaterThan10(15)  // true`})}),"\n",(0,t.jsx)(i.hr,{}),"\n",(0,t.jsxs)(l.wn,{num:"3",title:"Not Combinator",children:[(0,t.jsx)(i.p,{children:"Negate a predicate:"}),(0,t.jsx)(l.av,{file:"predicate_not.go",tag:"example",children:`import P "github.com/IBM/fp-go/predicate"

isEven := func(n int) bool { return n%2 == 0 }

// Negate the predicate
isOdd := P.Not(isEven)

isOdd(3)  // true
isOdd(4)  // false

// Double negation
isEvenAgain := P.Not(isOdd)
isEvenAgain(4)  // true`})]}),"\n",(0,t.jsx)(i.hr,{}),"\n",(0,t.jsxs)(l.wn,{num:"4",title:"And Combinator",children:[(0,t.jsx)(i.p,{children:"Combine predicates with logical AND:"}),(0,t.jsx)(l.av,{file:"predicate_and.go",tag:"example",children:`import P "github.com/IBM/fp-go/predicate"

isEven := func(n int) bool { return n%2 == 0 }
isPositive := func(n int) bool { return n > 0 }

// Both conditions must be true
isEvenAndPositive := P.And(isEven, isPositive)

isEvenAndPositive(4)   // true (even AND positive)
isEvenAndPositive(-2)  // false (even but NOT positive)
isEvenAndPositive(3)   // false (positive but NOT even)
isEvenAndPositive(-3)  // false (neither)

// Chain multiple conditions
isGreaterThan10 := func(n int) bool { return n > 10 }
complexPredicate := P.And(
  isEven,
  P.And(isPositive, isGreaterThan10),
)
complexPredicate(12)  // true
complexPredicate(8)   // false (not > 10)`})]}),"\n",(0,t.jsx)(i.hr,{}),"\n",(0,t.jsxs)(l.wn,{num:"5",title:"Or Combinator",children:[(0,t.jsx)(i.p,{children:"Combine predicates with logical OR:"}),(0,t.jsx)(l.av,{file:"predicate_or.go",tag:"example",children:`import P "github.com/IBM/fp-go/predicate"

isEven := func(n int) bool { return n%2 == 0 }
isPositive := func(n int) bool { return n > 0 }

// At least one condition must be true
isEvenOrPositive := P.Or(isEven, isPositive)

isEvenOrPositive(4)   // true (even OR positive - both)
isEvenOrPositive(-2)  // true (even OR positive - even only)
isEvenOrPositive(3)   // true (even OR positive - positive only)
isEvenOrPositive(-3)  // false (neither)

// Complex combinations
isSpecial := P.Or(
  P.And(isEven, isPositive),
  func(n int) bool { return n == 0 },
)
isSpecial(4)   // true (even and positive)
isSpecial(0)   // true (special case)
isSpecial(-2)  // false`})]}),"\n",(0,t.jsx)(i.hr,{}),"\n",(0,t.jsxs)(l.wn,{num:"6",title:"Validation Example",children:[(0,t.jsx)(i.p,{children:"Use predicates for complex validation:"}),(0,t.jsx)(l.av,{file:"predicate_validation.go",tag:"example",children:`type User struct {
  Name  string
  Age   int
  Email string
}

// Define validation predicates
hasName := func(u User) bool {
  return u.Name != ""
}

isAdult := func(u User) bool {
  return u.Age >= 18
}

hasEmail := func(u User) bool {
  return u.Email != "" && strings.Contains(u.Email, "@")
}

// Combine validators
isValidUser := P.And(
  hasName,
  P.And(isAdult, hasEmail),
)

user1 := User{Name: "Alice", Age: 25, Email: "alice@example.com"}
user2 := User{Name: "Bob", Age: 16, Email: "bob@example.com"}
user3 := User{Name: "", Age: 30, Email: "test@example.com"}

isValidUser(user1)  // true
isValidUser(user2)  // false (not adult)
isValidUser(user3)  // false (no name)`})]}),"\n",(0,t.jsx)(i.hr,{}),"\n",(0,t.jsxs)(l.wn,{num:"7",title:"Filtering with Predicates",children:[(0,t.jsx)(i.p,{children:"Use predicates to filter collections:"}),(0,t.jsx)(l.av,{file:"predicate_filter.go",tag:"example",children:`import (
  A "github.com/IBM/fp-go/array"
  F "github.com/IBM/fp-go/function"
  P "github.com/IBM/fp-go/predicate"
)

numbers := []int{-2, -1, 0, 1, 2, 3, 4, 5, 6}

isEven := func(n int) bool { return n%2 == 0 }
isPositive := func(n int) bool { return n > 0 }

// Filter with combined predicates
evenAndPositive := F.Pipe2(
  numbers,
  A.Filter(P.And(isEven, isPositive)),
)
// []int{2, 4, 6}

// Filter with OR
evenOrPositive := F.Pipe2(
  numbers,
  A.Filter(P.Or(isEven, isPositive)),
)
// []int{-2, 0, 1, 2, 3, 4, 5, 6}

// Filter with NOT
notEven := F.Pipe2(
  numbers,
  A.Filter(P.Not(isEven)),
)
// []int{-1, 1, 3, 5}`})]}),"\n",(0,t.jsx)(i.hr,{}),"\n",(0,t.jsxs)(l.wn,{num:"8",title:"API Reference",children:[(0,t.jsx)(l.vr,{children:(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:"Function"}),(0,t.jsx)(i.th,{children:"Type"}),(0,t.jsx)(i.th,{children:"Description"})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"Not[A]"})}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"Predicate[A] -> Predicate[A]"})}),(0,t.jsx)(i.td,{children:"Negates a predicate"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"And[A]"})}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"(Predicate[A], Predicate[A]) -> Predicate[A]"})}),(0,t.jsx)(i.td,{children:"Logical AND of two predicates"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"Or[A]"})}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"(Predicate[A], Predicate[A]) -> Predicate[A]"})}),(0,t.jsx)(i.td,{children:"Logical OR of two predicates"})]})]})]})}),(0,t.jsx)(i.p,{children:(0,t.jsx)(i.strong,{children:"Type Definition:"})}),(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-go",children:"type Predicate[A any] func(A) bool\n"})})]}),"\n",(0,t.jsx)(i.hr,{}),"\n",(0,t.jsxs)(l.wn,{num:"9",title:"Related Concepts",children:[(0,t.jsx)(i.p,{children:(0,t.jsx)(i.strong,{children:"Common Use Cases:"})}),(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Filtering arrays and collections"}),"\n",(0,t.jsx)(i.li,{children:"Validation logic"}),"\n",(0,t.jsx)(i.li,{children:"Conditional branching"}),"\n",(0,t.jsx)(i.li,{children:"Boolean algebra operations"}),"\n"]}),(0,t.jsx)(i.p,{children:(0,t.jsx)(i.strong,{children:"See Also:"})}),(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"/fp-go/docs/v2/utilities/function",children:"Function"})," - Core function utilities"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"/fp-go/docs/v2/utilities/boolean",children:"Boolean"})," - Boolean type class instances"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"/fp-go/docs/v2/collections/array",children:"Array Filter"})," - Using predicates with arrays"]}),"\n"]})]}),"\n",(0,t.jsx)(i.hr,{}),"\n",(0,t.jsx)(l.is,{prev:{to:"/docs/v2/utilities/monoid",title:"Monoid"},next:{to:"/docs/v2/utilities/boolean",title:"Boolean"}})]})}function x(e={}){let{wrapper:i}={...(0,a.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},5811(e,i,s){s.d(i,{Pq:()=>P,eM:()=>B,hg:()=>E,_1:()=>w,av:()=>N,Gs:()=>A,vr:()=>y,x7:()=>p,bY:()=>C,wn:()=>j,zY:()=>x,ju:()=>u,BQ:()=>m,is:()=>M});var n=s(4848),t=s(6540);let a="codeTag_uQ6s",l="warn_PIJZ",r="benchNum_PicT",c="api_M0YO",d="pagerLink_hQ8Y",o="pagerLbl_CteO",h="pagerTtl_t0em";function x({eyebrow:e,title:i,titleAccent:s,lede:t,meta:a}){return(0,n.jsxs)("header",{className:"head_Sp2B",children:[(0,n.jsxs)("div",{className:"headLeft_aDUD",children:[e&&(0,n.jsx)("div",{className:"eyebrow__SSv",children:e}),(0,n.jsxs)("h1",{className:"headTitle_xWjG",children:[i,s?(0,n.jsxs)(n.Fragment,{children:[" ",(0,n.jsx)("em",{children:s})]}):null]}),t&&(0,n.jsx)("p",{className:"lede_Ltdj",children:t})]}),a&&a.length>0&&(0,n.jsx)("aside",{className:"headMeta_kmCF",children:a.map((e,i)=>(0,n.jsxs)("div",{className:"metaRow_drwK",children:[(0,n.jsx)("span",{className:"metaK_SNLg",children:e.label}),(0,n.jsx)("span",{className:"metaV_zAp5",children:e.value})]},i))})]})}function p({children:e}){return(0,n.jsx)("span",{className:"pill_Lzl6",children:e})}function u({children:e}){return(0,n.jsx)("div",{className:"tldr_mz3p",children:e})}function m({label:e,value:i,accent:s,unit:t,description:a,variant:l="default",prose:r}){return(0,n.jsxs)("div",{className:`tldrCard_nSap ${"up"===l?"up_ip1p":"down"===l?"down_x6We":""}`,children:[e&&(0,n.jsx)("div",{className:"tldrK_kP7m",children:e}),(0,n.jsxs)("div",{className:`tldrV_gUPe ${r?"tldrVProse_sV_2":""}`,children:[i,s?(0,n.jsx)("em",{children:s}):null,t?(0,n.jsx)("small",{children:t}):null]}),a&&(0,n.jsx)("div",{className:"tldrD_kfCX",children:a})]})}function j({id:e,number:i,title:s,titleAccent:t,tag:a,lede:l,children:r}){return(0,n.jsxs)("section",{className:"section_B_ST",children:[(0,n.jsxs)("div",{className:"sectionHead_oGCN",children:[(0,n.jsxs)("div",{className:"sectionHeadLeft_bfh9",children:[i&&(0,n.jsx)("span",{className:"sectionNum_qiYt",children:i}),(0,n.jsxs)("h2",{className:"sectionTitle__6nw",id:e,children:[s,t?(0,n.jsxs)(n.Fragment,{children:[" ",(0,n.jsx)("em",{children:t})]}):null]})]}),a&&(0,n.jsx)("span",{className:"sectionTag_se22",children:a})]}),l&&(0,n.jsx)("p",{className:"sectionLede_yuVk",children:l}),r]})}let v=({size:e=14,className:i})=>(0,n.jsx)("svg",{width:e,height:e,viewBox:"0 0 32 32",fill:"currentColor",className:i,"aria-hidden":"true",children:(0,n.jsx)("path",{d:"M13 24l-9-9 1.4-1.4L13 21.2 26.6 7.6 28 9z"})}),f=({size:e=14,className:i})=>(0,n.jsx)("svg",{width:e,height:e,viewBox:"0 0 32 32",fill:"currentColor",className:i,"aria-hidden":"true",children:(0,n.jsx)("path",{d:"M28 10v18H10V10h18m0-2H10a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2z"})}),b=({size:e=12,className:i})=>(0,n.jsx)("svg",{width:e,height:e,viewBox:"0 0 32 32",fill:"currentColor",className:i,"aria-hidden":"true",children:(0,n.jsx)("path",{d:"M18 6L16.6 7.4 24.2 15H4v2h20.2l-7.6 7.6L18 26l10-10z"})}),g=({size:e=12,className:i})=>(0,n.jsx)("svg",{width:e,height:e,viewBox:"0 0 32 32",fill:"currentColor",className:i,"aria-hidden":"true",children:(0,n.jsx)("path",{d:"M14 26l1.4-1.4L7.8 17H28v-2H7.8l7.6-7.6L14 6 4 16z"})});function N({file:e,status:i,copy:s=!0,children:r}){let c=(0,t.useRef)(null),[d,o]=(0,t.useState)(!1);return(0,n.jsxs)("div",{className:"codeCard_fiIG",children:[(0,n.jsxs)("div",{className:"codeBar_SZ78",children:[(0,n.jsx)("span",{className:"codeDot_JDOV"}),e&&(0,n.jsx)("span",{className:"codeFile_uZDd",children:e}),(0,n.jsx)("span",{className:"codeSpacer_nRmZ"}),i?"tested"===i?(0,n.jsx)("span",{className:`${a} ok_rUJx`,children:"tested"}):"warn"===i?(0,n.jsx)("span",{className:`${a} ${l}`,children:"caveat"}):"note"===i?(0,n.jsx)("span",{className:a,children:"note"}):"string"==typeof i?(0,n.jsx)("span",{className:a,children:i}):i:null,s&&(0,n.jsx)("button",{type:"button",className:"codeCopy_fKPb",onClick:()=>{if(!c.current)return;let e=c.current.innerText;"u">typeof navigator&&navigator.clipboard&&navigator.clipboard.writeText(e).then(()=>{o(!0),setTimeout(()=>o(!1),1200)})},"aria-label":"Copy code",children:d?"Copied":(0,n.jsx)(f,{})})]}),(0,n.jsx)("pre",{ref:c,className:"codeBlock_oEWX",children:r})]})}let _={info:({size:e=18,className:i})=>(0,n.jsxs)("svg",{width:e,height:e,viewBox:"0 0 32 32",fill:"currentColor",className:i,"aria-hidden":"true",children:[(0,n.jsx)("path",{d:"M16 2A14 14 0 1 0 30 16 14 14 0 0 0 16 2zm0 26a12 12 0 1 1 12-12 12 12 0 0 1-12 12z"}),(0,n.jsx)("path",{d:"M16 14h-2v2h1v6h-1v2h4v-2h-1v-8zm-.5-5a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 15.5 9z"})]}),warn:({size:e=18,className:i})=>(0,n.jsxs)("svg",{width:e,height:e,viewBox:"0 0 32 32",fill:"currentColor",className:i,"aria-hidden":"true",children:[(0,n.jsx)("path",{d:"M16 23a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 16 23zM15 13h2v8h-2z"}),(0,n.jsx)("path",{d:"M28.7 26.31L17.36 4.27a1.51 1.51 0 0 0-2.72 0L3.3 26.31a1.5 1.5 0 0 0 1.36 2.19h22.69a1.5 1.5 0 0 0 1.35-2.19z"})]}),success:v};function P({type:e="info",title:i,children:s}){let t=_[e];return(0,n.jsxs)("div",{className:`callout_yWfv ${"warn"===e?l:"success"===e?"success_D78d":""}`,children:[(0,n.jsx)("span",{className:"calloutIcon_hdwU",children:(0,n.jsx)(t,{size:18})}),(0,n.jsxs)("div",{className:"calloutBody_Qz4I",children:[i&&(0,n.jsx)("strong",{className:"calloutTitle_MXy4",children:i}),s]})]})}function A({children:e}){return(0,n.jsx)("div",{className:"compare_WfXa",children:e})}function w({kind:e,title:i,pill:s,children:t}){return(0,n.jsxs)("div",{className:`compareCol_nZe9 ${"bad"===e?"bad_pZ5b":"good_EJeo"}`,children:[(0,n.jsxs)("div",{className:"compareHead_vAhW",children:[(0,n.jsx)("span",{children:i??("bad"===e?"Before":"After")}),s&&(0,n.jsx)("span",{className:"comparePill_fmmx",children:s})]}),(0,n.jsx)("div",{className:"compareBody_hP62",children:t})]})}function E({title:e,command:i,columns:s,rows:t}){let[a,l,c,d,o]=s??["Variant","Speed","ns/op","B/op","\u0394"];return(0,n.jsxs)("div",{className:"bench_zMa2",children:[(0,n.jsxs)("div",{className:"benchHead_q6K3",children:[(0,n.jsx)("span",{children:e}),i&&(0,n.jsxs)("span",{className:"benchCmd_iUFI",children:[(0,n.jsx)("span",{className:"benchPrompt_LRr4",children:"$"}),i]})]}),(0,n.jsxs)("table",{className:"benchTable_u8XZ",children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:a}),(0,n.jsx)("th",{style:{width:"40%"},children:l}),(0,n.jsx)("th",{className:r,children:c}),(0,n.jsx)("th",{className:r,children:d}),(0,n.jsx)("th",{className:r,children:o})]})}),(0,n.jsx)("tbody",{children:t.map((e,i)=>{let s="win"===e.barKind?"win_PjNM":"lose"===e.barKind?"lose_A9dr":"",t="good"===e.deltaKind?"deltaGood_dYlm":"bad"===e.deltaKind?"deltaBad_yHEA":r;return(0,n.jsxs)("tr",{className:e.winner?"benchWinner_jDc2":void 0,children:[(0,n.jsx)("td",{className:"benchLabel_uFhm",children:e.label}),(0,n.jsx)("td",{children:null!=e.bar&&(0,n.jsx)("span",{className:"bar_jZ6H",children:(0,n.jsx)("span",{className:"barTrack_lefl",children:(0,n.jsx)("span",{className:`barFill_bMgr ${s}`,style:{width:`${100*Math.max(0,Math.min(1,e.bar))}%`}})})})}),(0,n.jsx)("td",{className:r,children:e.nsOp}),(0,n.jsx)("td",{className:r,children:e.bOp}),(0,n.jsx)("td",{className:t,children:e.delta})]},i)})})]})]})}function y({columns:e,rows:i,children:s}){if(s)return(0,n.jsx)("div",{className:c,children:s});let[t,a,l]=e??["Symbol","Signature","Since"];return(0,n.jsx)("div",{className:c,children:(0,n.jsxs)("table",{className:"apiTable_kmi_",children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:t}),(0,n.jsx)("th",{children:a}),(0,n.jsx)("th",{children:l})]})}),(0,n.jsx)("tbody",{children:i?.map((e,i)=>(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:e.symbol})}),(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:e.signature}),e.description&&(0,n.jsx)("div",{className:"apiDesc__siK",children:e.description})]}),(0,n.jsx)("td",{children:e.since&&(0,n.jsx)("code",{children:e.since})})]},i))})]})})}function B({status:e,children:i}){return(0,n.jsx)(n.Fragment,{})}function C({title:e="Steps",items:i,children:s}){let a,l=(a=i||(s?t.Children.toArray(s).filter(e=>t.isValidElement(e)).map(e=>({label:e.props.children,impact:e.props.status,done:!1})):[])).filter(e=>e.done).length;return(0,n.jsxs)("div",{className:"check_Z_XE",children:[(0,n.jsxs)("div",{className:"checkHead__B8i",children:[(0,n.jsx)("span",{children:e}),i&&(0,n.jsxs)("span",{children:[l," / ",a.length," complete"]})]}),(0,n.jsx)("ul",{className:"checkList_ziWk",children:a.map((e,i)=>(0,n.jsxs)("li",{className:`checkItem_jgfw ${e.done?"done_rLON":""}`,children:[(0,n.jsx)("span",{className:"checkBox_TriO",children:e.done&&(0,n.jsx)(v,{size:10})}),(0,n.jsx)("span",{className:"checkLbl_IWQU",children:e.label}),e.impact&&(0,n.jsx)("span",{className:"checkImpact_BaeN",children:e.impact})]},i))})]})}var O=s(5310);function M({prev:e,next:i}){return(0,n.jsxs)("nav",{className:"pager_oMm2",children:[e?(0,n.jsxs)(O.A,{to:e.to,className:d,children:[(0,n.jsxs)("span",{className:o,children:[(0,n.jsx)(g,{})," ",e.label??"Previous"]}),(0,n.jsx)("span",{className:h,children:e.title})]}):(0,n.jsx)("span",{}),i?(0,n.jsxs)(O.A,{to:i.to,className:`${d} next_PLI2`,children:[(0,n.jsxs)("span",{className:o,children:[i.label??"Next"," ",(0,n.jsx)(b,{})]}),(0,n.jsx)("span",{className:h,children:i.title})]}):(0,n.jsx)("span",{})]})}},8453(e,i,s){s.d(i,{R:()=>l,x:()=>r});var n=s(6540);let t={},a=n.createContext(t);function l(e){let i=n.useContext(a);return n.useMemo(function(){return"function"==typeof e?e(i):{...i,...e}},[i,e])}function r(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),n.createElement(a.Provider,{value:i},e.children)}}}]);
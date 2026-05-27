"use strict";(self.webpackChunkfp_go_docs=self.webpackChunkfp_go_docs||[]).push([["8697"],{4086(e,s,i){i.r(s),i.d(s,{metadata:()=>n,default:()=>x,frontMatter:()=>t,contentTitle:()=>d,toc:()=>c,assets:()=>o});var n=JSON.parse('{"id":"v2/utilities/boolean","title":"Boolean","description":"Boolean utilities and type class instances for logical operations in fp-go","source":"@site/docs/v2/utilities/boolean.md","sourceDirName":"v2/utilities","slug":"/v2/utilities/boolean","permalink":"/fp-go/docs/v2/utilities/boolean","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":32,"frontMatter":{"title":"Boolean","hide_title":true,"description":"Boolean utilities and type class instances for logical operations in fp-go","sidebar_position":32},"sidebar":"apiSidebar","previous":{"title":"Predicate","permalink":"/fp-go/docs/v2/utilities/predicate"},"next":{"title":"Number","permalink":"/fp-go/docs/v2/utilities/number"}}'),l=i(4848),a=i(8453),r=i(5811);let t={title:"Boolean",hide_title:!0,description:"Boolean utilities and type class instances for logical operations in fp-go",sidebar_position:32},d,o={},c=[];function h(e){let s={a:"a",code:"code",hr:"hr",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(r.zY,{eyebrow:"v2 \xb7 Utilities",title:"Boolean",titleAccent:"Type Classes",lede:"The boolean package provides type class instances and utilities for boolean values, including equality, ordering, and monoid operations.",meta:[{label:"Package",value:"boolean"},{label:"Since",value:"v2.0.0"},{label:"Type",value:"bool"}]}),"\n",(0,l.jsx)(s.hr,{}),"\n",(0,l.jsxs)(r.wn,{num:"1",title:"Overview",children:[(0,l.jsxs)(s.p,{children:["The ",(0,l.jsx)(s.strong,{children:"Boolean"})," package provides type class instances for the ",(0,l.jsx)(s.code,{children:"bool"})," type, enabling functional operations on boolean values:"]}),(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsxs)(s.li,{children:[(0,l.jsx)(s.strong,{children:"Eq"}),": Equality comparison"]}),"\n",(0,l.jsxs)(s.li,{children:[(0,l.jsx)(s.strong,{children:"Ord"}),": Ordering (false < true)"]}),"\n",(0,l.jsxs)(s.li,{children:[(0,l.jsx)(s.strong,{children:"Semigroup"}),": AND and OR operations"]}),"\n",(0,l.jsxs)(s.li,{children:[(0,l.jsx)(s.strong,{children:"Monoid"}),": AND and OR with identity elements"]}),"\n"]})]}),"\n",(0,l.jsx)(s.hr,{}),"\n",(0,l.jsx)(r.wn,{num:"2",title:"Equality",children:(0,l.jsx)(r.av,{file:"boolean_eq.go",tag:"example",children:`import B "github.com/IBM/fp-go/boolean"

// Compare booleans for equality
B.Eq.Equals(true, true)    // true
B.Eq.Equals(true, false)   // false
B.Eq.Equals(false, false)  // true`})}),"\n",(0,l.jsx)(s.hr,{}),"\n",(0,l.jsxs)(r.wn,{num:"3",title:"Ordering",children:[(0,l.jsxs)(s.p,{children:["Booleans have a natural ordering where ",(0,l.jsx)(s.code,{children:"false < true"}),":"]}),(0,l.jsx)(r.av,{file:"boolean_ord.go",tag:"example",children:`import B "github.com/IBM/fp-go/boolean"

// Compare booleans (false < true)
B.Ord.Compare(false, true)   // -1 (less than)
B.Ord.Compare(true, false)   // 1  (greater than)
B.Ord.Compare(true, true)    // 0  (equal)
B.Ord.Compare(false, false)  // 0  (equal)

// Derived operations
B.Ord.LessThan(false, true)      // true
B.Ord.GreaterThan(true, false)   // true
B.Ord.LessThanOrEqual(false, false)  // true`})]}),"\n",(0,l.jsx)(s.hr,{}),"\n",(0,l.jsxs)(r.wn,{num:"4",title:"Semigroup Operations",children:[(0,l.jsx)(s.p,{children:"Boolean semigroups provide AND and OR operations:"}),(0,l.jsx)(r.av,{file:"boolean_semigroup.go",tag:"example",children:`import B "github.com/IBM/fp-go/boolean"

// SemigroupAll: Logical AND
B.SemigroupAll.Concat(true, true)    // true
B.SemigroupAll.Concat(true, false)   // false
B.SemigroupAll.Concat(false, false)  // false

// SemigroupAny: Logical OR
B.SemigroupAny.Concat(false, true)    // true
B.SemigroupAny.Concat(false, false)   // false
B.SemigroupAny.Concat(true, true)     // true`})]}),"\n",(0,l.jsx)(s.hr,{}),"\n",(0,l.jsxs)(r.wn,{num:"5",title:"Monoid Operations",children:[(0,l.jsx)(s.p,{children:"Boolean monoids add identity elements to semigroups:"}),(0,l.jsx)(r.av,{file:"boolean_monoid.go",tag:"example",children:`import B "github.com/IBM/fp-go/boolean"

// MonoidAll: AND with identity true
B.MonoidAll.Concat(true, true)   // true
B.MonoidAll.Concat(true, false)  // false
B.MonoidAll.Empty()              // true (identity)

// MonoidAny: OR with identity false
B.MonoidAny.Concat(false, true)   // true
B.MonoidAny.Concat(false, false)  // false
B.MonoidAny.Empty()               // false (identity)

// Identity laws
val := true
B.MonoidAll.Concat(B.MonoidAll.Empty(), val)  // true (left identity)
B.MonoidAll.Concat(val, B.MonoidAll.Empty())  // true (right identity)`})]}),"\n",(0,l.jsx)(s.hr,{}),"\n",(0,l.jsxs)(r.wn,{num:"6",title:"Folding Boolean Arrays",children:[(0,l.jsx)(s.p,{children:"Use monoids to check if all or any conditions are true:"}),(0,l.jsx)(r.av,{file:"boolean_fold.go",tag:"example",children:`import (
  A "github.com/IBM/fp-go/array"
  B "github.com/IBM/fp-go/boolean"
  F "github.com/IBM/fp-go/function"
)

conditions := []bool{true, true, false, true}

// Check if ALL are true
allTrue := F.Pipe2(
  conditions,
  A.Fold(B.MonoidAll),
)
// false (one is false)

// Check if ANY are true
anyTrue := F.Pipe2(
  conditions,
  A.Fold(B.MonoidAny),
)
// true (at least one is true)

// Empty array cases
emptyConditions := []bool{}

allEmpty := F.Pipe2(emptyConditions, A.Fold(B.MonoidAll))
// true (identity for AND)

anyEmpty := F.Pipe2(emptyConditions, A.Fold(B.MonoidAny))
// false (identity for OR)`})]}),"\n",(0,l.jsx)(s.hr,{}),"\n",(0,l.jsxs)(r.wn,{num:"7",title:"Validation Example",children:[(0,l.jsx)(s.p,{children:"Check if all validations pass:"}),(0,l.jsx)(r.av,{file:"boolean_validation.go",tag:"example",children:`type Validation struct {
  Field   string
  IsValid bool
}

validations := []Validation{
  {Field: "email", IsValid: true},
  {Field: "age", IsValid: true},
  {Field: "name", IsValid: false},
}

// Check if all validations pass
allValid := F.Pipe3(
  validations,
  A.Map(func(v Validation) bool { return v.IsValid }),
  A.Fold(B.MonoidAll),
)
// false (name validation failed)

// Check if any validation passed
anyValid := F.Pipe3(
  validations,
  A.Map(func(v Validation) bool { return v.IsValid }),
  A.Fold(B.MonoidAny),
)
// true (email and age passed)

// Find which validations failed
failed := F.Pipe2(
  validations,
  A.Filter(func(v Validation) bool { return !v.IsValid }),
)
// []Validation{{Field: "name", IsValid: false}}`})]}),"\n",(0,l.jsx)(s.hr,{}),"\n",(0,l.jsxs)(r.wn,{num:"8",title:"Permission Checking",children:[(0,l.jsx)(s.p,{children:"Combine permission checks:"}),(0,l.jsx)(r.av,{file:"boolean_permissions.go",tag:"example",children:`type User struct {
  IsAdmin     bool
  IsVerified  bool
  HasAccess   bool
}

user := User{
  IsAdmin:    false,
  IsVerified: true,
  HasAccess:  true,
}

// Check if user has all required permissions
permissions := []bool{
  user.IsVerified,
  user.HasAccess,
}

hasAllPermissions := F.Pipe2(
  permissions,
  A.Fold(B.MonoidAll),
)
// true

// Check if user has any admin privilege
adminPrivileges := []bool{
  user.IsAdmin,
  user.IsVerified && user.HasAccess,
}

hasAnyAdminPrivilege := F.Pipe2(
  adminPrivileges,
  A.Fold(B.MonoidAny),
)
// true (second condition is true)`})]}),"\n",(0,l.jsx)(s.hr,{}),"\n",(0,l.jsxs)(r.wn,{num:"9",title:"API Reference",children:[(0,l.jsx)(r.vr,{children:(0,l.jsxs)(s.table,{children:[(0,l.jsx)(s.thead,{children:(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.th,{children:"Instance"}),(0,l.jsx)(s.th,{children:"Type"}),(0,l.jsx)(s.th,{children:"Description"})]})}),(0,l.jsxs)(s.tbody,{children:[(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:(0,l.jsx)(s.code,{children:"Eq"})}),(0,l.jsx)(s.td,{children:(0,l.jsx)(s.code,{children:"Eq[bool]"})}),(0,l.jsx)(s.td,{children:"Equality comparison"})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:(0,l.jsx)(s.code,{children:"Ord"})}),(0,l.jsx)(s.td,{children:(0,l.jsx)(s.code,{children:"Ord[bool]"})}),(0,l.jsx)(s.td,{children:"Ordering (false < true)"})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:(0,l.jsx)(s.code,{children:"SemigroupAll"})}),(0,l.jsx)(s.td,{children:(0,l.jsx)(s.code,{children:"Semigroup[bool]"})}),(0,l.jsx)(s.td,{children:"Logical AND"})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:(0,l.jsx)(s.code,{children:"SemigroupAny"})}),(0,l.jsx)(s.td,{children:(0,l.jsx)(s.code,{children:"Semigroup[bool]"})}),(0,l.jsx)(s.td,{children:"Logical OR"})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:(0,l.jsx)(s.code,{children:"MonoidAll"})}),(0,l.jsx)(s.td,{children:(0,l.jsx)(s.code,{children:"Monoid[bool]"})}),(0,l.jsx)(s.td,{children:"AND with identity true"})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:(0,l.jsx)(s.code,{children:"MonoidAny"})}),(0,l.jsx)(s.td,{children:(0,l.jsx)(s.code,{children:"Monoid[bool]"})}),(0,l.jsx)(s.td,{children:"OR with identity false"})]})]})]})}),(0,l.jsx)(s.p,{children:(0,l.jsx)(s.strong,{children:"Monoid Identities:"})}),(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsxs)(s.li,{children:[(0,l.jsx)(s.code,{children:"MonoidAll.Empty()"})," returns ",(0,l.jsx)(s.code,{children:"true"})," (AND identity)"]}),"\n",(0,l.jsxs)(s.li,{children:[(0,l.jsx)(s.code,{children:"MonoidAny.Empty()"})," returns ",(0,l.jsx)(s.code,{children:"false"})," (OR identity)"]}),"\n"]})]}),"\n",(0,l.jsx)(s.hr,{}),"\n",(0,l.jsxs)(r.wn,{num:"10",title:"Related Concepts",children:[(0,l.jsx)(s.p,{children:(0,l.jsx)(s.strong,{children:"Common Use Cases:"})}),(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsx)(s.li,{children:"Validation aggregation"}),"\n",(0,l.jsx)(s.li,{children:"Permission checking"}),"\n",(0,l.jsx)(s.li,{children:"Condition evaluation"}),"\n",(0,l.jsx)(s.li,{children:"Boolean algebra operations"}),"\n"]}),(0,l.jsx)(s.p,{children:(0,l.jsx)(s.strong,{children:"See Also:"})}),(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsxs)(s.li,{children:[(0,l.jsx)(s.a,{href:"/fp-go/docs/v2/utilities/predicate",children:"Predicate"})," - Boolean-valued functions"]}),"\n",(0,l.jsxs)(s.li,{children:[(0,l.jsx)(s.a,{href:"/fp-go/docs/v2/utilities/monoid",children:"Monoid"})," - Understanding monoid operations"]}),"\n",(0,l.jsxs)(s.li,{children:[(0,l.jsx)(s.a,{href:"/fp-go/docs/v2/utilities/semigroup",children:"Semigroup"})," - Understanding semigroup operations"]}),"\n"]})]}),"\n",(0,l.jsx)(s.hr,{}),"\n",(0,l.jsx)(r.is,{prev:{to:"/docs/v2/utilities/predicate",title:"Predicate"},next:{to:"/docs/v2/utilities/number",title:"Number"}})]})}function x(e={}){let{wrapper:s}={...(0,a.R)(),...e.components};return s?(0,l.jsx)(s,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}},5811(e,s,i){i.d(s,{Pq:()=>y,eM:()=>w,hg:()=>M,_1:()=>B,av:()=>N,Gs:()=>A,vr:()=>C,x7:()=>u,bY:()=>k,wn:()=>m,zY:()=>x,ju:()=>p,BQ:()=>j,is:()=>F});var n=i(4848),l=i(6540);let a="codeTag_uQ6s",r="warn_PIJZ",t="benchNum_PicT",d="api_M0YO",o="pagerLink_hQ8Y",c="pagerLbl_CteO",h="pagerTtl_t0em";function x({eyebrow:e,title:s,titleAccent:i,lede:l,meta:a}){return(0,n.jsxs)("header",{className:"head_Sp2B",children:[(0,n.jsxs)("div",{className:"headLeft_aDUD",children:[e&&(0,n.jsx)("div",{className:"eyebrow__SSv",children:e}),(0,n.jsxs)("h1",{className:"headTitle_xWjG",children:[s,i?(0,n.jsxs)(n.Fragment,{children:[" ",(0,n.jsx)("em",{children:i})]}):null]}),l&&(0,n.jsx)("p",{className:"lede_Ltdj",children:l})]}),a&&a.length>0&&(0,n.jsx)("aside",{className:"headMeta_kmCF",children:a.map((e,s)=>(0,n.jsxs)("div",{className:"metaRow_drwK",children:[(0,n.jsx)("span",{className:"metaK_SNLg",children:e.label}),(0,n.jsx)("span",{className:"metaV_zAp5",children:e.value})]},s))})]})}function u({children:e}){return(0,n.jsx)("span",{className:"pill_Lzl6",children:e})}function p({children:e}){return(0,n.jsx)("div",{className:"tldr_mz3p",children:e})}function j({label:e,value:s,accent:i,unit:l,description:a,variant:r="default",prose:t}){return(0,n.jsxs)("div",{className:`tldrCard_nSap ${"up"===r?"up_ip1p":"down"===r?"down_x6We":""}`,children:[e&&(0,n.jsx)("div",{className:"tldrK_kP7m",children:e}),(0,n.jsxs)("div",{className:`tldrV_gUPe ${t?"tldrVProse_sV_2":""}`,children:[s,i?(0,n.jsx)("em",{children:i}):null,l?(0,n.jsx)("small",{children:l}):null]}),a&&(0,n.jsx)("div",{className:"tldrD_kfCX",children:a})]})}function m({id:e,number:s,title:i,titleAccent:l,tag:a,lede:r,children:t}){return(0,n.jsxs)("section",{className:"section_B_ST",children:[(0,n.jsxs)("div",{className:"sectionHead_oGCN",children:[(0,n.jsxs)("div",{className:"sectionHeadLeft_bfh9",children:[s&&(0,n.jsx)("span",{className:"sectionNum_qiYt",children:s}),(0,n.jsxs)("h2",{className:"sectionTitle__6nw",id:e,children:[i,l?(0,n.jsxs)(n.Fragment,{children:[" ",(0,n.jsx)("em",{children:l})]}):null]})]}),a&&(0,n.jsx)("span",{className:"sectionTag_se22",children:a})]}),r&&(0,n.jsx)("p",{className:"sectionLede_yuVk",children:r}),t]})}let f=({size:e=14,className:s})=>(0,n.jsx)("svg",{width:e,height:e,viewBox:"0 0 32 32",fill:"currentColor",className:s,"aria-hidden":"true",children:(0,n.jsx)("path",{d:"M13 24l-9-9 1.4-1.4L13 21.2 26.6 7.6 28 9z"})}),g=({size:e=14,className:s})=>(0,n.jsx)("svg",{width:e,height:e,viewBox:"0 0 32 32",fill:"currentColor",className:s,"aria-hidden":"true",children:(0,n.jsx)("path",{d:"M28 10v18H10V10h18m0-2H10a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2z"})}),v=({size:e=12,className:s})=>(0,n.jsx)("svg",{width:e,height:e,viewBox:"0 0 32 32",fill:"currentColor",className:s,"aria-hidden":"true",children:(0,n.jsx)("path",{d:"M18 6L16.6 7.4 24.2 15H4v2h20.2l-7.6 7.6L18 26l10-10z"})}),b=({size:e=12,className:s})=>(0,n.jsx)("svg",{width:e,height:e,viewBox:"0 0 32 32",fill:"currentColor",className:s,"aria-hidden":"true",children:(0,n.jsx)("path",{d:"M14 26l1.4-1.4L7.8 17H28v-2H7.8l7.6-7.6L14 6 4 16z"})});function N({file:e,status:s,copy:i=!0,children:t}){let d=(0,l.useRef)(null),[o,c]=(0,l.useState)(!1);return(0,n.jsxs)("div",{className:"codeCard_fiIG",children:[(0,n.jsxs)("div",{className:"codeBar_SZ78",children:[(0,n.jsx)("span",{className:"codeDot_JDOV"}),e&&(0,n.jsx)("span",{className:"codeFile_uZDd",children:e}),(0,n.jsx)("span",{className:"codeSpacer_nRmZ"}),s?"tested"===s?(0,n.jsx)("span",{className:`${a} ok_rUJx`,children:"tested"}):"warn"===s?(0,n.jsx)("span",{className:`${a} ${r}`,children:"caveat"}):"note"===s?(0,n.jsx)("span",{className:a,children:"note"}):"string"==typeof s?(0,n.jsx)("span",{className:a,children:s}):s:null,i&&(0,n.jsx)("button",{type:"button",className:"codeCopy_fKPb",onClick:()=>{if(!d.current)return;let e=d.current.innerText;"u">typeof navigator&&navigator.clipboard&&navigator.clipboard.writeText(e).then(()=>{c(!0),setTimeout(()=>c(!1),1200)})},"aria-label":"Copy code",children:o?"Copied":(0,n.jsx)(g,{})})]}),(0,n.jsx)("pre",{ref:d,className:"codeBlock_oEWX",children:t})]})}let _={info:({size:e=18,className:s})=>(0,n.jsxs)("svg",{width:e,height:e,viewBox:"0 0 32 32",fill:"currentColor",className:s,"aria-hidden":"true",children:[(0,n.jsx)("path",{d:"M16 2A14 14 0 1 0 30 16 14 14 0 0 0 16 2zm0 26a12 12 0 1 1 12-12 12 12 0 0 1-12 12z"}),(0,n.jsx)("path",{d:"M16 14h-2v2h1v6h-1v2h4v-2h-1v-8zm-.5-5a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 15.5 9z"})]}),warn:({size:e=18,className:s})=>(0,n.jsxs)("svg",{width:e,height:e,viewBox:"0 0 32 32",fill:"currentColor",className:s,"aria-hidden":"true",children:[(0,n.jsx)("path",{d:"M16 23a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 16 23zM15 13h2v8h-2z"}),(0,n.jsx)("path",{d:"M28.7 26.31L17.36 4.27a1.51 1.51 0 0 0-2.72 0L3.3 26.31a1.5 1.5 0 0 0 1.36 2.19h22.69a1.5 1.5 0 0 0 1.35-2.19z"})]}),success:f};function y({type:e="info",title:s,children:i}){let l=_[e];return(0,n.jsxs)("div",{className:`callout_yWfv ${"warn"===e?r:"success"===e?"success_D78d":""}`,children:[(0,n.jsx)("span",{className:"calloutIcon_hdwU",children:(0,n.jsx)(l,{size:18})}),(0,n.jsxs)("div",{className:"calloutBody_Qz4I",children:[s&&(0,n.jsx)("strong",{className:"calloutTitle_MXy4",children:s}),i]})]})}function A({children:e}){return(0,n.jsx)("div",{className:"compare_WfXa",children:e})}function B({kind:e,title:s,pill:i,children:l}){return(0,n.jsxs)("div",{className:`compareCol_nZe9 ${"bad"===e?"bad_pZ5b":"good_EJeo"}`,children:[(0,n.jsxs)("div",{className:"compareHead_vAhW",children:[(0,n.jsx)("span",{children:s??("bad"===e?"Before":"After")}),i&&(0,n.jsx)("span",{className:"comparePill_fmmx",children:i})]}),(0,n.jsx)("div",{className:"compareBody_hP62",children:l})]})}function M({title:e,command:s,columns:i,rows:l}){let[a,r,d,o,c]=i??["Variant","Speed","ns/op","B/op","\u0394"];return(0,n.jsxs)("div",{className:"bench_zMa2",children:[(0,n.jsxs)("div",{className:"benchHead_q6K3",children:[(0,n.jsx)("span",{children:e}),s&&(0,n.jsxs)("span",{className:"benchCmd_iUFI",children:[(0,n.jsx)("span",{className:"benchPrompt_LRr4",children:"$"}),s]})]}),(0,n.jsxs)("table",{className:"benchTable_u8XZ",children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:a}),(0,n.jsx)("th",{style:{width:"40%"},children:r}),(0,n.jsx)("th",{className:t,children:d}),(0,n.jsx)("th",{className:t,children:o}),(0,n.jsx)("th",{className:t,children:c})]})}),(0,n.jsx)("tbody",{children:l.map((e,s)=>{let i="win"===e.barKind?"win_PjNM":"lose"===e.barKind?"lose_A9dr":"",l="good"===e.deltaKind?"deltaGood_dYlm":"bad"===e.deltaKind?"deltaBad_yHEA":t;return(0,n.jsxs)("tr",{className:e.winner?"benchWinner_jDc2":void 0,children:[(0,n.jsx)("td",{className:"benchLabel_uFhm",children:e.label}),(0,n.jsx)("td",{children:null!=e.bar&&(0,n.jsx)("span",{className:"bar_jZ6H",children:(0,n.jsx)("span",{className:"barTrack_lefl",children:(0,n.jsx)("span",{className:`barFill_bMgr ${i}`,style:{width:`${100*Math.max(0,Math.min(1,e.bar))}%`}})})})}),(0,n.jsx)("td",{className:t,children:e.nsOp}),(0,n.jsx)("td",{className:t,children:e.bOp}),(0,n.jsx)("td",{className:l,children:e.delta})]},s)})})]})]})}function C({columns:e,rows:s,children:i}){if(i)return(0,n.jsx)("div",{className:d,children:i});let[l,a,r]=e??["Symbol","Signature","Since"];return(0,n.jsx)("div",{className:d,children:(0,n.jsxs)("table",{className:"apiTable_kmi_",children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:l}),(0,n.jsx)("th",{children:a}),(0,n.jsx)("th",{children:r})]})}),(0,n.jsx)("tbody",{children:s?.map((e,s)=>(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:e.symbol})}),(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:e.signature}),e.description&&(0,n.jsx)("div",{className:"apiDesc__siK",children:e.description})]}),(0,n.jsx)("td",{children:e.since&&(0,n.jsx)("code",{children:e.since})})]},s))})]})})}function w({status:e,children:s}){return(0,n.jsx)(n.Fragment,{})}function k({title:e="Steps",items:s,children:i}){let a,r=(a=s||(i?l.Children.toArray(i).filter(e=>l.isValidElement(e)).map(e=>({label:e.props.children,impact:e.props.status,done:!1})):[])).filter(e=>e.done).length;return(0,n.jsxs)("div",{className:"check_Z_XE",children:[(0,n.jsxs)("div",{className:"checkHead__B8i",children:[(0,n.jsx)("span",{children:e}),s&&(0,n.jsxs)("span",{children:[r," / ",a.length," complete"]})]}),(0,n.jsx)("ul",{className:"checkList_ziWk",children:a.map((e,s)=>(0,n.jsxs)("li",{className:`checkItem_jgfw ${e.done?"done_rLON":""}`,children:[(0,n.jsx)("span",{className:"checkBox_TriO",children:e.done&&(0,n.jsx)(f,{size:10})}),(0,n.jsx)("span",{className:"checkLbl_IWQU",children:e.label}),e.impact&&(0,n.jsx)("span",{className:"checkImpact_BaeN",children:e.impact})]},s))})]})}var P=i(5310);function F({prev:e,next:s}){return(0,n.jsxs)("nav",{className:"pager_oMm2",children:[e?(0,n.jsxs)(P.A,{to:e.to,className:o,children:[(0,n.jsxs)("span",{className:c,children:[(0,n.jsx)(b,{})," ",e.label??"Previous"]}),(0,n.jsx)("span",{className:h,children:e.title})]}):(0,n.jsx)("span",{}),s?(0,n.jsxs)(P.A,{to:s.to,className:`${o} next_PLI2`,children:[(0,n.jsxs)("span",{className:c,children:[s.label??"Next"," ",(0,n.jsx)(v,{})]}),(0,n.jsx)("span",{className:h,children:s.title})]}):(0,n.jsx)("span",{})]})}},8453(e,s,i){i.d(s,{R:()=>r,x:()=>t});var n=i(6540);let l={},a=n.createContext(l);function r(e){let s=n.useContext(a);return n.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function t(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),n.createElement(a.Provider,{value:s},e.children)}}}]);
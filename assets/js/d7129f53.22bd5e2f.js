"use strict";(self.webpackChunkfp_go_docs=self.webpackChunkfp_go_docs||[]).push([["9057"],{4860(e,s,a){a.r(s),a.d(s,{metadata:()=>i,default:()=>h,frontMatter:()=>r,contentTitle:()=>c,toc:()=>o,assets:()=>d});var i=JSON.parse('{"id":"v2/utilities/eq","title":"Eq (Equality)","description":"Type-safe equality checking with custom equality semantics.","source":"@site/docs/v2/utilities/eq.md","sourceDirName":"v2/utilities","slug":"/v2/utilities/eq","permalink":"/fp-go/docs/v2/utilities/eq","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":25,"frontMatter":{"title":"Eq (Equality)","hide_title":true,"description":"Type-safe equality checking with custom equality semantics.","sidebar_position":25},"sidebar":"apiSidebar","previous":{"title":"Tuple","permalink":"/fp-go/docs/v2/utilities/tuple"},"next":{"title":"Ord (Ordering)","permalink":"/fp-go/docs/v2/utilities/ord"}}'),t=a(4848),l=a(8453),n=a(5811);let r={title:"Eq (Equality)",hide_title:!0,description:"Type-safe equality checking with custom equality semantics.",sidebar_position:25},c,d={},o=[{value:"Basic Usage",id:"basic-usage",level:3},{value:"Built-in Eq Instances",id:"built-in-eq-instances",level:3},{value:"Contramap - Derive Equality",id:"contramap---derive-equality",level:3},{value:"Case-Insensitive Equality",id:"case-insensitive-equality",level:3},{value:"Struct Field Equality",id:"struct-field-equality",level:3},{value:"Approximate Float Equality",id:"approximate-float-equality",level:3},{value:"Array Equality",id:"array-equality",level:3},{value:"Testing Helper",id:"testing-helper",level:3},{value:"Semantic Equality",id:"semantic-equality",level:3},{value:"Composite Equality",id:"composite-equality",level:3}];function u(e){let s={code:"code",h3:"h3",hr:"hr",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.zY,{eyebrow:"Reference \xb7 Utilities",title:"Eq (Equality)",lede:"Type-safe equality checking. Define custom equality semantics for any type using the Eq type class.",meta:[{label:"Package",value:"github.com/IBM/fp-go/v2/eq"},{label:"Type Class",value:"Eq[A]"}]}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(n.wn,{num:"1",title:"Core API",children:(0,t.jsx)(n.vr,{children:(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Function"}),(0,t.jsx)(s.th,{children:"Signature"}),(0,t.jsx)(s.th,{children:"Description"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"FromEquals"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"func FromEquals[A any](func(A, A) bool) Eq[A]"})}),(0,t.jsx)(s.td,{children:"Create Eq from function"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"Contramap"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"func Contramap[A, B any](func(B) A) func(Eq[A]) Eq[B]"})}),(0,t.jsx)(s.td,{children:"Derive Eq by mapping"})]})]})]})})}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsxs)(n.wn,{num:"2",title:"Usage Examples",children:[(0,t.jsx)(s.h3,{id:"basic-usage",children:"Basic Usage"}),(0,t.jsx)(n.av,{file:"basic.go",children:`import E "github.com/IBM/fp-go/v2/eq"

// Create equality from function
type User struct {
  ID   int
  Name string
}

userEq := E.FromEquals(func(a, b User) bool {
  return a.ID == b.ID
})

user1 := User{ID: 1, Name: "Alice"}
user2 := User{ID: 1, Name: "Alice Updated"}

userEq.Equals(user1, user2)  // true - same ID
`}),(0,t.jsx)(s.h3,{id:"built-in-eq-instances",children:"Built-in Eq Instances"}),(0,t.jsx)(n.av,{file:"builtin.go",children:`import (
  N "github.com/IBM/fp-go/v2/number"
  S "github.com/IBM/fp-go/v2/string"
)

// Number equality
N.Eq.Equals(1, 1)  // true
N.Eq.Equals(1, 2)  // false

// String equality
S.Eq.Equals("hello", "hello")  // true
S.Eq.Equals("hello", "world")  // false
`}),(0,t.jsx)(s.h3,{id:"contramap---derive-equality",children:"Contramap - Derive Equality"}),(0,t.jsx)(n.av,{file:"contramap.go",children:`type User struct {
  ID   int
  Name string
}

// Equality based on ID
userEq := E.Contramap(
  func(u User) int { return u.ID },
)(N.Eq)

userEq.Equals(
  User{ID: 1, Name: "Alice"},
  User{ID: 1, Name: "Alice Updated"},
)  // true - same ID

userEq.Equals(
  User{ID: 1, Name: "Alice"},
  User{ID: 2, Name: "Bob"},
)  // false - different IDs
`}),(0,t.jsx)(s.h3,{id:"case-insensitive-equality",children:"Case-Insensitive Equality"}),(0,t.jsx)(n.av,{file:"case_insensitive.go",children:`// Case-insensitive string equality
caseInsensitiveEq := E.FromEquals(func(a, b string) bool {
  return strings.ToLower(a) == strings.ToLower(b)
})

caseInsensitiveEq.Equals("Hello", "HELLO")  // true
caseInsensitiveEq.Equals("Hello", "World")  // false
`}),(0,t.jsx)(s.h3,{id:"struct-field-equality",children:"Struct Field Equality"}),(0,t.jsx)(n.av,{file:"field.go",children:`type Product struct {
  SKU   string
  Name  string
  Price float64
}

// Compare by SKU only
productEq := E.Contramap(
  func(p Product) string { return p.SKU },
)(S.Eq)

p1 := Product{SKU: "A123", Name: "Laptop", Price: 999}
p2 := Product{SKU: "A123", Name: "Laptop Pro", Price: 1299}

productEq.Equals(p1, p2)  // true - same SKU
`}),(0,t.jsx)(s.h3,{id:"approximate-float-equality",children:"Approximate Float Equality"}),(0,t.jsx)(n.av,{file:"float.go",children:`// Approximate equality for floats
const epsilon = 0.0001

floatEq := E.FromEquals(func(a, b float64) bool {
  return math.Abs(a-b) < epsilon
})

floatEq.Equals(3.14159, 3.14160)  // true - within epsilon
floatEq.Equals(3.14159, 3.15000)  // false - outside epsilon
`}),(0,t.jsx)(s.h3,{id:"array-equality",children:"Array Equality"}),(0,t.jsx)(n.av,{file:"array.go",children:`import A "github.com/IBM/fp-go/v2/array"

// Equality for arrays
arrayEq := A.Eq(N.Eq)

arr1 := []int{1, 2, 3}
arr2 := []int{1, 2, 3}
arr3 := []int{1, 2, 4}

arrayEq.Equals(arr1, arr2)  // true
arrayEq.Equals(arr1, arr3)  // false
`})]}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsxs)(n.wn,{num:"3",title:"Common Patterns",children:[(0,t.jsx)(s.h3,{id:"testing-helper",children:"Testing Helper"}),(0,t.jsx)(n.av,{file:"testing.go",children:`func AssertEqual[A any](
  t *testing.T,
  eq E.Eq[A],
  expected, actual A,
) {
  if !eq.Equals(expected, actual) {
      t.Errorf("Not equal:
Expected: %v
Actual: %v",
          expected, actual)
  }
}

// Usage in tests
func TestSomething(t *testing.T) {
  expected := User{ID: 1, Name: "Alice"}
  actual := fetchUser(1)
  
  AssertEqual(t, userEq, expected, actual)
}
`}),(0,t.jsx)(s.h3,{id:"semantic-equality",children:"Semantic Equality"}),(0,t.jsx)(n.av,{file:"semantic.go",children:`type Status string

const (
  Active   Status = "active"
  Inactive Status = "inactive"
  Enabled  Status = "enabled"
  Disabled Status = "disabled"
)

// Treat active/enabled and inactive/disabled as equal
statusEq := E.FromEquals(func(a, b Status) bool {
  normalize := func(s Status) string {
      if s == Active || s == Enabled {
          return "active"
      }
      return "inactive"
  }
  return normalize(a) == normalize(b)
})

statusEq.Equals(Active, Enabled)    // true
statusEq.Equals(Inactive, Disabled) // true
statusEq.Equals(Active, Inactive)   // false
`}),(0,t.jsx)(s.h3,{id:"composite-equality",children:"Composite Equality"}),(0,t.jsx)(n.av,{file:"composite.go",children:`type Address struct {
  Street string
  City   string
  Zip    string
}

// Equality based on city and zip only
addressEq := E.FromEquals(func(a, b Address) bool {
  return a.City == b.City && a.Zip == b.Zip
})

addr1 := Address{Street: "123 Main St", City: "NYC", Zip: "10001"}
addr2 := Address{Street: "456 Oak Ave", City: "NYC", Zip: "10001"}

addressEq.Equals(addr1, addr2)  // true - same city and zip
`})]}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(n.Pq,{type:"info",children:(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Contramap"}),": Use ",(0,t.jsx)(s.code,{children:"Contramap"})," to derive equality from existing Eq instances. It's more composable than writing custom equality functions."]})}),"\n",(0,t.jsxs)(n.Pq,{type:"info",children:[(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Use Cases"}),": Custom Eq instances are useful for:"]}),(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Domain-specific equality (e.g., case-insensitive strings)"}),"\n",(0,t.jsx)(s.li,{children:"Approximate numeric equality"}),"\n",(0,t.jsx)(s.li,{children:"Comparing by specific fields"}),"\n",(0,t.jsx)(s.li,{children:"Testing and assertions"}),"\n"]})]}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(n.is,{prev:{to:"/docs/v2/utilities/compose",title:"Compose"},next:{to:"/docs/v2/utilities/function",title:"Function Utilities"}})]})}function h(e={}){let{wrapper:s}={...(0,l.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},5811(e,s,a){a.d(s,{Pq:()=>N,eM:()=>w,hg:()=>C,_1:()=>_,av:()=>y,Gs:()=>b,vr:()=>A,x7:()=>m,bY:()=>S,wn:()=>j,zY:()=>h,ju:()=>p,BQ:()=>x,is:()=>D});var i=a(4848),t=a(6540);let l="codeTag_uQ6s",n="warn_PIJZ",r="benchNum_PicT",c="api_M0YO",d="pagerLink_hQ8Y",o="pagerLbl_CteO",u="pagerTtl_t0em";function h({eyebrow:e,title:s,titleAccent:a,lede:t,meta:l}){return(0,i.jsxs)("header",{className:"head_Sp2B",children:[(0,i.jsxs)("div",{className:"headLeft_aDUD",children:[e&&(0,i.jsx)("div",{className:"eyebrow__SSv",children:e}),(0,i.jsxs)("h1",{className:"headTitle_xWjG",children:[s,a?(0,i.jsxs)(i.Fragment,{children:[" ",(0,i.jsx)("em",{children:a})]}):null]}),t&&(0,i.jsx)("p",{className:"lede_Ltdj",children:t})]}),l&&l.length>0&&(0,i.jsx)("aside",{className:"headMeta_kmCF",children:l.map((e,s)=>(0,i.jsxs)("div",{className:"metaRow_drwK",children:[(0,i.jsx)("span",{className:"metaK_SNLg",children:e.label}),(0,i.jsx)("span",{className:"metaV_zAp5",children:e.value})]},s))})]})}function m({children:e}){return(0,i.jsx)("span",{className:"pill_Lzl6",children:e})}function p({children:e}){return(0,i.jsx)("div",{className:"tldr_mz3p",children:e})}function x({label:e,value:s,accent:a,unit:t,description:l,variant:n="default",prose:r}){return(0,i.jsxs)("div",{className:`tldrCard_nSap ${"up"===n?"up_ip1p":"down"===n?"down_x6We":""}`,children:[e&&(0,i.jsx)("div",{className:"tldrK_kP7m",children:e}),(0,i.jsxs)("div",{className:`tldrV_gUPe ${r?"tldrVProse_sV_2":""}`,children:[s,a?(0,i.jsx)("em",{children:a}):null,t?(0,i.jsx)("small",{children:t}):null]}),l&&(0,i.jsx)("div",{className:"tldrD_kfCX",children:l})]})}function j({id:e,number:s,title:a,titleAccent:t,tag:l,lede:n,children:r}){return(0,i.jsxs)("section",{className:"section_B_ST",children:[(0,i.jsxs)("div",{className:"sectionHead_oGCN",children:[(0,i.jsxs)("div",{className:"sectionHeadLeft_bfh9",children:[s&&(0,i.jsx)("span",{className:"sectionNum_qiYt",children:s}),(0,i.jsxs)("h2",{className:"sectionTitle__6nw",id:e,children:[a,t?(0,i.jsxs)(i.Fragment,{children:[" ",(0,i.jsx)("em",{children:t})]}):null]})]}),l&&(0,i.jsx)("span",{className:"sectionTag_se22",children:l})]}),n&&(0,i.jsx)("p",{className:"sectionLede_yuVk",children:n}),r]})}let v=({size:e=14,className:s})=>(0,i.jsx)("svg",{width:e,height:e,viewBox:"0 0 32 32",fill:"currentColor",className:s,"aria-hidden":"true",children:(0,i.jsx)("path",{d:"M13 24l-9-9 1.4-1.4L13 21.2 26.6 7.6 28 9z"})}),f=({size:e=14,className:s})=>(0,i.jsx)("svg",{width:e,height:e,viewBox:"0 0 32 32",fill:"currentColor",className:s,"aria-hidden":"true",children:(0,i.jsx)("path",{d:"M28 10v18H10V10h18m0-2H10a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2z"})}),q=({size:e=12,className:s})=>(0,i.jsx)("svg",{width:e,height:e,viewBox:"0 0 32 32",fill:"currentColor",className:s,"aria-hidden":"true",children:(0,i.jsx)("path",{d:"M18 6L16.6 7.4 24.2 15H4v2h20.2l-7.6 7.6L18 26l10-10z"})}),E=({size:e=12,className:s})=>(0,i.jsx)("svg",{width:e,height:e,viewBox:"0 0 32 32",fill:"currentColor",className:s,"aria-hidden":"true",children:(0,i.jsx)("path",{d:"M14 26l1.4-1.4L7.8 17H28v-2H7.8l7.6-7.6L14 6 4 16z"})});function y({file:e,status:s,copy:a=!0,children:r}){let c=(0,t.useRef)(null),[d,o]=(0,t.useState)(!1);return(0,i.jsxs)("div",{className:"codeCard_fiIG",children:[(0,i.jsxs)("div",{className:"codeBar_SZ78",children:[(0,i.jsx)("span",{className:"codeDot_JDOV"}),e&&(0,i.jsx)("span",{className:"codeFile_uZDd",children:e}),(0,i.jsx)("span",{className:"codeSpacer_nRmZ"}),s?"tested"===s?(0,i.jsx)("span",{className:`${l} ok_rUJx`,children:"tested"}):"warn"===s?(0,i.jsx)("span",{className:`${l} ${n}`,children:"caveat"}):"note"===s?(0,i.jsx)("span",{className:l,children:"note"}):"string"==typeof s?(0,i.jsx)("span",{className:l,children:s}):s:null,a&&(0,i.jsx)("button",{type:"button",className:"codeCopy_fKPb",onClick:()=>{if(!c.current)return;let e=c.current.innerText;"u">typeof navigator&&navigator.clipboard&&navigator.clipboard.writeText(e).then(()=>{o(!0),setTimeout(()=>o(!1),1200)})},"aria-label":"Copy code",children:d?"Copied":(0,i.jsx)(f,{})})]}),(0,i.jsx)("pre",{ref:c,className:"codeBlock_oEWX",children:r})]})}let g={info:({size:e=18,className:s})=>(0,i.jsxs)("svg",{width:e,height:e,viewBox:"0 0 32 32",fill:"currentColor",className:s,"aria-hidden":"true",children:[(0,i.jsx)("path",{d:"M16 2A14 14 0 1 0 30 16 14 14 0 0 0 16 2zm0 26a12 12 0 1 1 12-12 12 12 0 0 1-12 12z"}),(0,i.jsx)("path",{d:"M16 14h-2v2h1v6h-1v2h4v-2h-1v-8zm-.5-5a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 15.5 9z"})]}),warn:({size:e=18,className:s})=>(0,i.jsxs)("svg",{width:e,height:e,viewBox:"0 0 32 32",fill:"currentColor",className:s,"aria-hidden":"true",children:[(0,i.jsx)("path",{d:"M16 23a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 16 23zM15 13h2v8h-2z"}),(0,i.jsx)("path",{d:"M28.7 26.31L17.36 4.27a1.51 1.51 0 0 0-2.72 0L3.3 26.31a1.5 1.5 0 0 0 1.36 2.19h22.69a1.5 1.5 0 0 0 1.35-2.19z"})]}),success:v};function N({type:e="info",title:s,children:a}){let t=g[e];return(0,i.jsxs)("div",{className:`callout_yWfv ${"warn"===e?n:"success"===e?"success_D78d":""}`,children:[(0,i.jsx)("span",{className:"calloutIcon_hdwU",children:(0,i.jsx)(t,{size:18})}),(0,i.jsxs)("div",{className:"calloutBody_Qz4I",children:[s&&(0,i.jsx)("strong",{className:"calloutTitle_MXy4",children:s}),a]})]})}function b({children:e}){return(0,i.jsx)("div",{className:"compare_WfXa",children:e})}function _({kind:e,title:s,pill:a,children:t}){return(0,i.jsxs)("div",{className:`compareCol_nZe9 ${"bad"===e?"bad_pZ5b":"good_EJeo"}`,children:[(0,i.jsxs)("div",{className:"compareHead_vAhW",children:[(0,i.jsx)("span",{children:s??("bad"===e?"Before":"After")}),a&&(0,i.jsx)("span",{className:"comparePill_fmmx",children:a})]}),(0,i.jsx)("div",{className:"compareBody_hP62",children:t})]})}function C({title:e,command:s,columns:a,rows:t}){let[l,n,c,d,o]=a??["Variant","Speed","ns/op","B/op","\u0394"];return(0,i.jsxs)("div",{className:"bench_zMa2",children:[(0,i.jsxs)("div",{className:"benchHead_q6K3",children:[(0,i.jsx)("span",{children:e}),s&&(0,i.jsxs)("span",{className:"benchCmd_iUFI",children:[(0,i.jsx)("span",{className:"benchPrompt_LRr4",children:"$"}),s]})]}),(0,i.jsxs)("table",{className:"benchTable_u8XZ",children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:l}),(0,i.jsx)("th",{style:{width:"40%"},children:n}),(0,i.jsx)("th",{className:r,children:c}),(0,i.jsx)("th",{className:r,children:d}),(0,i.jsx)("th",{className:r,children:o})]})}),(0,i.jsx)("tbody",{children:t.map((e,s)=>{let a="win"===e.barKind?"win_PjNM":"lose"===e.barKind?"lose_A9dr":"",t="good"===e.deltaKind?"deltaGood_dYlm":"bad"===e.deltaKind?"deltaBad_yHEA":r;return(0,i.jsxs)("tr",{className:e.winner?"benchWinner_jDc2":void 0,children:[(0,i.jsx)("td",{className:"benchLabel_uFhm",children:e.label}),(0,i.jsx)("td",{children:null!=e.bar&&(0,i.jsx)("span",{className:"bar_jZ6H",children:(0,i.jsx)("span",{className:"barTrack_lefl",children:(0,i.jsx)("span",{className:`barFill_bMgr ${a}`,style:{width:`${100*Math.max(0,Math.min(1,e.bar))}%`}})})})}),(0,i.jsx)("td",{className:r,children:e.nsOp}),(0,i.jsx)("td",{className:r,children:e.bOp}),(0,i.jsx)("td",{className:t,children:e.delta})]},s)})})]})]})}function A({columns:e,rows:s,children:a}){if(a)return(0,i.jsx)("div",{className:c,children:a});let[t,l,n]=e??["Symbol","Signature","Since"];return(0,i.jsx)("div",{className:c,children:(0,i.jsxs)("table",{className:"apiTable_kmi_",children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:t}),(0,i.jsx)("th",{children:l}),(0,i.jsx)("th",{children:n})]})}),(0,i.jsx)("tbody",{children:s?.map((e,s)=>(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:e.symbol})}),(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:e.signature}),e.description&&(0,i.jsx)("div",{className:"apiDesc__siK",children:e.description})]}),(0,i.jsx)("td",{children:e.since&&(0,i.jsx)("code",{children:e.since})})]},s))})]})})}function w({status:e,children:s}){return(0,i.jsx)(i.Fragment,{})}function S({title:e="Steps",items:s,children:a}){let l,n=(l=s||(a?t.Children.toArray(a).filter(e=>t.isValidElement(e)).map(e=>({label:e.props.children,impact:e.props.status,done:!1})):[])).filter(e=>e.done).length;return(0,i.jsxs)("div",{className:"check_Z_XE",children:[(0,i.jsxs)("div",{className:"checkHead__B8i",children:[(0,i.jsx)("span",{children:e}),s&&(0,i.jsxs)("span",{children:[n," / ",l.length," complete"]})]}),(0,i.jsx)("ul",{className:"checkList_ziWk",children:l.map((e,s)=>(0,i.jsxs)("li",{className:`checkItem_jgfw ${e.done?"done_rLON":""}`,children:[(0,i.jsx)("span",{className:"checkBox_TriO",children:e.done&&(0,i.jsx)(v,{size:10})}),(0,i.jsx)("span",{className:"checkLbl_IWQU",children:e.label}),e.impact&&(0,i.jsx)("span",{className:"checkImpact_BaeN",children:e.impact})]},s))})]})}var I=a(5310);function D({prev:e,next:s}){return(0,i.jsxs)("nav",{className:"pager_oMm2",children:[e?(0,i.jsxs)(I.A,{to:e.to,className:d,children:[(0,i.jsxs)("span",{className:o,children:[(0,i.jsx)(E,{})," ",e.label??"Previous"]}),(0,i.jsx)("span",{className:u,children:e.title})]}):(0,i.jsx)("span",{}),s?(0,i.jsxs)(I.A,{to:s.to,className:`${d} next_PLI2`,children:[(0,i.jsxs)("span",{className:o,children:[s.label??"Next"," ",(0,i.jsx)(q,{})]}),(0,i.jsx)("span",{className:u,children:s.title})]}):(0,i.jsx)("span",{})]})}},8453(e,s,a){a.d(s,{R:()=>n,x:()=>r});var i=a(6540);let t={},l=i.createContext(t);function n(e){let s=i.useContext(l);return i.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:n(e.components),i.createElement(l.Provider,{value:s},e.children)}}}]);
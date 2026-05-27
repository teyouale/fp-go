"use strict";(self.webpackChunkfp_go_docs=self.webpackChunkfp_go_docs||[]).push([["3085"],{1396(e,s,a){a.r(s),a.d(s,{metadata:()=>i,default:()=>u,frontMatter:()=>l,contentTitle:()=>c,toc:()=>d,assets:()=>o});var i=JSON.parse('{"id":"v2/collections/record-eq","title":"Record - Equality","description":"Comparing maps for equality using the Eq type class.","source":"@site/docs/v2/collections/record-eq.md","sourceDirName":"v2/collections","slug":"/v2/collections/record-eq","permalink":"/fp-go/docs/v2/collections/record-eq","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":15,"frontMatter":{"title":"Record - Equality","hide_title":true,"description":"Comparing maps for equality using the Eq type class.","sidebar_position":15},"sidebar":"apiSidebar","previous":{"title":"Record - Conversion","permalink":"/fp-go/docs/v2/collections/record-conversion"},"next":{"title":"Record - Monoid","permalink":"/fp-go/docs/v2/collections/record-monoid"}}'),t=a(4848),n=a(8453),r=a(5811);let l={title:"Record - Equality",hide_title:!0,description:"Comparing maps for equality using the Eq type class.",sidebar_position:15},c,o={},d=[{value:"Basic Equality",id:"basic-equality",level:3},{value:"String Equality",id:"string-equality",level:3},{value:"Custom Struct Equality",id:"custom-struct-equality",level:3},{value:"Case-Insensitive Equality",id:"case-insensitive-equality",level:3},{value:"Nested Map Equality",id:"nested-map-equality",level:3},{value:"Array Value Equality",id:"array-value-equality",level:3},{value:"Approximate Float Equality",id:"approximate-float-equality",level:3},{value:"Configuration Comparison",id:"configuration-comparison",level:3},{value:"Testing Helper",id:"testing-helper",level:3},{value:"Semantic Equality",id:"semantic-equality",level:3}];function m(e){let s={code:"code",h3:"h3",hr:"hr",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components},{Callout:a}=s;return a||function(e,s){throw Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Callout",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.zY,{eyebrow:"Reference \xb7 Collections",title:"Record Equality",lede:"Comparing maps for equality. Use the Eq type class to define custom equality semantics for map values.",meta:[{label:"Package",value:"github.com/IBM/fp-go/v2/record"},{label:"Type Class",value:"Eq"}]}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(r.wn,{num:"1",title:"Core API",children:(0,t.jsx)(r.vr,{children:(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Function"}),(0,t.jsx)(s.th,{children:"Signature"}),(0,t.jsx)(s.th,{children:"Description"})]})}),(0,t.jsx)(s.tbody,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"Eq"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"func Eq[K comparable, V any](Eq[V]) Eq[map[K]V]"})}),(0,t.jsx)(s.td,{children:"Create map equality"})]})})]})})}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsxs)(r.wn,{num:"2",title:"Usage Examples",children:[(0,t.jsx)(s.h3,{id:"basic-equality",children:"Basic Equality"}),(0,t.jsx)(r.av,{file:"basic.go",children:`import (
  R "github.com/IBM/fp-go/v2/record"
  E "github.com/IBM/fp-go/v2/eq"
  N "github.com/IBM/fp-go/v2/number"
)

// Create record equality from value equality
recordEq := R.Eq(N.Eq)

m1 := map[string]int{"a": 1, "b": 2}
m2 := map[string]int{"a": 1, "b": 2}
m3 := map[string]int{"a": 1, "b": 3}
m4 := map[string]int{"a": 1}  // Different size

recordEq.Equals(m1, m2)  // true - same keys and values
recordEq.Equals(m1, m3)  // false - different values
recordEq.Equals(m1, m4)  // false - different keys
`}),(0,t.jsx)(s.h3,{id:"string-equality",children:"String Equality"}),(0,t.jsx)(r.av,{file:"string.go",children:`import S "github.com/IBM/fp-go/v2/string"

stringRecordEq := R.Eq(S.Eq)

m1 := map[string]string{"name": "Alice", "role": "admin"}
m2 := map[string]string{"name": "Alice", "role": "admin"}
m3 := map[string]string{"name": "alice", "role": "admin"}

stringRecordEq.Equals(m1, m2)  // true
stringRecordEq.Equals(m1, m3)  // false - case sensitive
`}),(0,t.jsx)(s.h3,{id:"custom-struct-equality",children:"Custom Struct Equality"}),(0,t.jsx)(r.av,{file:"struct.go",children:`type User struct {
  ID   int
  Name string
  Age  int
}

// Compare by ID only
userEq := E.FromEquals(func(a, b User) bool {
  return a.ID == b.ID
})

recordUserEq := R.Eq(userEq)

m1 := map[string]User{
  "alice": {ID: 1, Name: "Alice", Age: 30},
}
m2 := map[string]User{
  "alice": {ID: 1, Name: "Alice Updated", Age: 31},
}

recordUserEq.Equals(m1, m2)  // true - same ID
`}),(0,t.jsx)(s.h3,{id:"case-insensitive-equality",children:"Case-Insensitive Equality"}),(0,t.jsx)(r.av,{file:"case_insensitive.go",children:`// Case-insensitive string equality
caseInsensitiveEq := E.FromEquals(func(a, b string) bool {
  return strings.ToLower(a) == strings.ToLower(b)
})

recordEq := R.Eq(caseInsensitiveEq)

m1 := map[string]string{"name": "Alice"}
m2 := map[string]string{"name": "ALICE"}

recordEq.Equals(m1, m2)  // true
`}),(0,t.jsx)(s.h3,{id:"nested-map-equality",children:"Nested Map Equality"}),(0,t.jsx)(r.av,{file:"nested.go",children:`// Equality for nested maps
innerEq := R.Eq(N.Eq)
outerEq := R.Eq(innerEq)

m1 := map[string]map[string]int{
  "group1": {"a": 1, "b": 2},
  "group2": {"c": 3},
}
m2 := map[string]map[string]int{
  "group1": {"a": 1, "b": 2},
  "group2": {"c": 3},
}

outerEq.Equals(m1, m2)  // true
`}),(0,t.jsx)(s.h3,{id:"array-value-equality",children:"Array Value Equality"}),(0,t.jsx)(r.av,{file:"array.go",children:`import A "github.com/IBM/fp-go/v2/array"

// Equality for maps with array values
arrayEq := A.Eq(N.Eq)
recordArrayEq := R.Eq(arrayEq)

m1 := map[string][]int{
  "nums1": {1, 2, 3},
  "nums2": {4, 5},
}
m2 := map[string][]int{
  "nums1": {1, 2, 3},
  "nums2": {4, 5},
}

recordArrayEq.Equals(m1, m2)  // true
`}),(0,t.jsx)(s.h3,{id:"approximate-float-equality",children:"Approximate Float Equality"}),(0,t.jsx)(r.av,{file:"float.go",children:`// Approximate equality for floats
const epsilon = 0.0001

floatEq := E.FromEquals(func(a, b float64) bool {
  return math.Abs(a-b) < epsilon
})

recordFloatEq := R.Eq(floatEq)

m1 := map[string]float64{"pi": 3.14159}
m2 := map[string]float64{"pi": 3.14160}

recordFloatEq.Equals(m1, m2)  // true - within epsilon
`})]}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsxs)(r.wn,{num:"3",title:"Common Patterns",children:[(0,t.jsx)(s.h3,{id:"configuration-comparison",children:"Configuration Comparison"}),(0,t.jsx)(r.av,{file:"config.go",children:`type Config struct {
  Host    string
  Port    int
  Timeout int
}

configEq := E.FromEquals(func(a, b Config) bool {
  return a.Host == b.Host && a.Port == b.Port
  // Ignore Timeout in comparison
})

recordConfigEq := R.Eq(configEq)

configs1 := map[string]Config{
  "prod": {Host: "api.example.com", Port: 443, Timeout: 30},
}
configs2 := map[string]Config{
  "prod": {Host: "api.example.com", Port: 443, Timeout: 60},
}

recordConfigEq.Equals(configs1, configs2)  // true - timeout ignored
`}),(0,t.jsx)(s.h3,{id:"testing-helper",children:"Testing Helper"}),(0,t.jsx)(r.av,{file:"testing.go",children:`func AssertMapsEqual[K comparable, V any](
  t *testing.T,
  eq E.Eq[V],
  expected, actual map[K]V,
) {
  recordEq := R.Eq(eq)
  if !recordEq.Equals(expected, actual) {
      t.Errorf("Maps not equal:
Expected: %v
Actual: %v",
          expected, actual)
  }
}

// Usage in tests
func TestSomething(t *testing.T) {
  expected := map[string]int{"a": 1, "b": 2}
  actual := processData()
  
  AssertMapsEqual(t, N.Eq, expected, actual)
}
`}),(0,t.jsx)(s.h3,{id:"semantic-equality",children:"Semantic Equality"}),(0,t.jsx)(r.av,{file:"semantic.go",children:`type Status string

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

recordStatusEq := R.Eq(statusEq)

m1 := map[string]Status{"service1": Active}
m2 := map[string]Status{"service1": Enabled}

recordStatusEq.Equals(m1, m2)  // true - semantically equal
`})]}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(a,{type:"info",children:(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Key Equality"}),": Map keys must be comparable types in Go. The Eq instance only applies to values, not keys."]})}),"\n",(0,t.jsx)(a,{type:"info",children:(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Custom Equality"}),": Define custom Eq instances to implement domain-specific equality semantics, such as case-insensitive comparison or approximate numeric equality."]})}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(r.is,{prev:{to:"/docs/v2/collections/record-traverse",title:"Record Traverse"},next:{to:"/docs/v2/collections/record-conversion",title:"Record Conversion"}}),"\n",(0,t.jsx)(s.hr,{})]})}function u(e={}){let{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(m,{...e})}):m(e)}},5811(e,s,a){a.d(s,{Pq:()=>y,eM:()=>A,hg:()=>C,_1:()=>_,av:()=>E,Gs:()=>N,vr:()=>w,x7:()=>h,bY:()=>S,wn:()=>j,zY:()=>u,ju:()=>p,BQ:()=>x,is:()=>k});var i=a(4848),t=a(6540);let n="codeTag_uQ6s",r="warn_PIJZ",l="benchNum_PicT",c="api_M0YO",o="pagerLink_hQ8Y",d="pagerLbl_CteO",m="pagerTtl_t0em";function u({eyebrow:e,title:s,titleAccent:a,lede:t,meta:n}){return(0,i.jsxs)("header",{className:"head_Sp2B",children:[(0,i.jsxs)("div",{className:"headLeft_aDUD",children:[e&&(0,i.jsx)("div",{className:"eyebrow__SSv",children:e}),(0,i.jsxs)("h1",{className:"headTitle_xWjG",children:[s,a?(0,i.jsxs)(i.Fragment,{children:[" ",(0,i.jsx)("em",{children:a})]}):null]}),t&&(0,i.jsx)("p",{className:"lede_Ltdj",children:t})]}),n&&n.length>0&&(0,i.jsx)("aside",{className:"headMeta_kmCF",children:n.map((e,s)=>(0,i.jsxs)("div",{className:"metaRow_drwK",children:[(0,i.jsx)("span",{className:"metaK_SNLg",children:e.label}),(0,i.jsx)("span",{className:"metaV_zAp5",children:e.value})]},s))})]})}function h({children:e}){return(0,i.jsx)("span",{className:"pill_Lzl6",children:e})}function p({children:e}){return(0,i.jsx)("div",{className:"tldr_mz3p",children:e})}function x({label:e,value:s,accent:a,unit:t,description:n,variant:r="default",prose:l}){return(0,i.jsxs)("div",{className:`tldrCard_nSap ${"up"===r?"up_ip1p":"down"===r?"down_x6We":""}`,children:[e&&(0,i.jsx)("div",{className:"tldrK_kP7m",children:e}),(0,i.jsxs)("div",{className:`tldrV_gUPe ${l?"tldrVProse_sV_2":""}`,children:[s,a?(0,i.jsx)("em",{children:a}):null,t?(0,i.jsx)("small",{children:t}):null]}),n&&(0,i.jsx)("div",{className:"tldrD_kfCX",children:n})]})}function j({id:e,number:s,title:a,titleAccent:t,tag:n,lede:r,children:l}){return(0,i.jsxs)("section",{className:"section_B_ST",children:[(0,i.jsxs)("div",{className:"sectionHead_oGCN",children:[(0,i.jsxs)("div",{className:"sectionHeadLeft_bfh9",children:[s&&(0,i.jsx)("span",{className:"sectionNum_qiYt",children:s}),(0,i.jsxs)("h2",{className:"sectionTitle__6nw",id:e,children:[a,t?(0,i.jsxs)(i.Fragment,{children:[" ",(0,i.jsx)("em",{children:t})]}):null]})]}),n&&(0,i.jsx)("span",{className:"sectionTag_se22",children:n})]}),r&&(0,i.jsx)("p",{className:"sectionLede_yuVk",children:r}),l]})}let g=({size:e=14,className:s})=>(0,i.jsx)("svg",{width:e,height:e,viewBox:"0 0 32 32",fill:"currentColor",className:s,"aria-hidden":"true",children:(0,i.jsx)("path",{d:"M13 24l-9-9 1.4-1.4L13 21.2 26.6 7.6 28 9z"})}),v=({size:e=14,className:s})=>(0,i.jsx)("svg",{width:e,height:e,viewBox:"0 0 32 32",fill:"currentColor",className:s,"aria-hidden":"true",children:(0,i.jsx)("path",{d:"M28 10v18H10V10h18m0-2H10a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2z"})}),q=({size:e=12,className:s})=>(0,i.jsx)("svg",{width:e,height:e,viewBox:"0 0 32 32",fill:"currentColor",className:s,"aria-hidden":"true",children:(0,i.jsx)("path",{d:"M18 6L16.6 7.4 24.2 15H4v2h20.2l-7.6 7.6L18 26l10-10z"})}),f=({size:e=12,className:s})=>(0,i.jsx)("svg",{width:e,height:e,viewBox:"0 0 32 32",fill:"currentColor",className:s,"aria-hidden":"true",children:(0,i.jsx)("path",{d:"M14 26l1.4-1.4L7.8 17H28v-2H7.8l7.6-7.6L14 6 4 16z"})});function E({file:e,status:s,copy:a=!0,children:l}){let c=(0,t.useRef)(null),[o,d]=(0,t.useState)(!1);return(0,i.jsxs)("div",{className:"codeCard_fiIG",children:[(0,i.jsxs)("div",{className:"codeBar_SZ78",children:[(0,i.jsx)("span",{className:"codeDot_JDOV"}),e&&(0,i.jsx)("span",{className:"codeFile_uZDd",children:e}),(0,i.jsx)("span",{className:"codeSpacer_nRmZ"}),s?"tested"===s?(0,i.jsx)("span",{className:`${n} ok_rUJx`,children:"tested"}):"warn"===s?(0,i.jsx)("span",{className:`${n} ${r}`,children:"caveat"}):"note"===s?(0,i.jsx)("span",{className:n,children:"note"}):"string"==typeof s?(0,i.jsx)("span",{className:n,children:s}):s:null,a&&(0,i.jsx)("button",{type:"button",className:"codeCopy_fKPb",onClick:()=>{if(!c.current)return;let e=c.current.innerText;"u">typeof navigator&&navigator.clipboard&&navigator.clipboard.writeText(e).then(()=>{d(!0),setTimeout(()=>d(!1),1200)})},"aria-label":"Copy code",children:o?"Copied":(0,i.jsx)(v,{})})]}),(0,i.jsx)("pre",{ref:c,className:"codeBlock_oEWX",children:l})]})}let b={info:({size:e=18,className:s})=>(0,i.jsxs)("svg",{width:e,height:e,viewBox:"0 0 32 32",fill:"currentColor",className:s,"aria-hidden":"true",children:[(0,i.jsx)("path",{d:"M16 2A14 14 0 1 0 30 16 14 14 0 0 0 16 2zm0 26a12 12 0 1 1 12-12 12 12 0 0 1-12 12z"}),(0,i.jsx)("path",{d:"M16 14h-2v2h1v6h-1v2h4v-2h-1v-8zm-.5-5a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 15.5 9z"})]}),warn:({size:e=18,className:s})=>(0,i.jsxs)("svg",{width:e,height:e,viewBox:"0 0 32 32",fill:"currentColor",className:s,"aria-hidden":"true",children:[(0,i.jsx)("path",{d:"M16 23a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 16 23zM15 13h2v8h-2z"}),(0,i.jsx)("path",{d:"M28.7 26.31L17.36 4.27a1.51 1.51 0 0 0-2.72 0L3.3 26.31a1.5 1.5 0 0 0 1.36 2.19h22.69a1.5 1.5 0 0 0 1.35-2.19z"})]}),success:g};function y({type:e="info",title:s,children:a}){let t=b[e];return(0,i.jsxs)("div",{className:`callout_yWfv ${"warn"===e?r:"success"===e?"success_D78d":""}`,children:[(0,i.jsx)("span",{className:"calloutIcon_hdwU",children:(0,i.jsx)(t,{size:18})}),(0,i.jsxs)("div",{className:"calloutBody_Qz4I",children:[s&&(0,i.jsx)("strong",{className:"calloutTitle_MXy4",children:s}),a]})]})}function N({children:e}){return(0,i.jsx)("div",{className:"compare_WfXa",children:e})}function _({kind:e,title:s,pill:a,children:t}){return(0,i.jsxs)("div",{className:`compareCol_nZe9 ${"bad"===e?"bad_pZ5b":"good_EJeo"}`,children:[(0,i.jsxs)("div",{className:"compareHead_vAhW",children:[(0,i.jsx)("span",{children:s??("bad"===e?"Before":"After")}),a&&(0,i.jsx)("span",{className:"comparePill_fmmx",children:a})]}),(0,i.jsx)("div",{className:"compareBody_hP62",children:t})]})}function C({title:e,command:s,columns:a,rows:t}){let[n,r,c,o,d]=a??["Variant","Speed","ns/op","B/op","\u0394"];return(0,i.jsxs)("div",{className:"bench_zMa2",children:[(0,i.jsxs)("div",{className:"benchHead_q6K3",children:[(0,i.jsx)("span",{children:e}),s&&(0,i.jsxs)("span",{className:"benchCmd_iUFI",children:[(0,i.jsx)("span",{className:"benchPrompt_LRr4",children:"$"}),s]})]}),(0,i.jsxs)("table",{className:"benchTable_u8XZ",children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:n}),(0,i.jsx)("th",{style:{width:"40%"},children:r}),(0,i.jsx)("th",{className:l,children:c}),(0,i.jsx)("th",{className:l,children:o}),(0,i.jsx)("th",{className:l,children:d})]})}),(0,i.jsx)("tbody",{children:t.map((e,s)=>{let a="win"===e.barKind?"win_PjNM":"lose"===e.barKind?"lose_A9dr":"",t="good"===e.deltaKind?"deltaGood_dYlm":"bad"===e.deltaKind?"deltaBad_yHEA":l;return(0,i.jsxs)("tr",{className:e.winner?"benchWinner_jDc2":void 0,children:[(0,i.jsx)("td",{className:"benchLabel_uFhm",children:e.label}),(0,i.jsx)("td",{children:null!=e.bar&&(0,i.jsx)("span",{className:"bar_jZ6H",children:(0,i.jsx)("span",{className:"barTrack_lefl",children:(0,i.jsx)("span",{className:`barFill_bMgr ${a}`,style:{width:`${100*Math.max(0,Math.min(1,e.bar))}%`}})})})}),(0,i.jsx)("td",{className:l,children:e.nsOp}),(0,i.jsx)("td",{className:l,children:e.bOp}),(0,i.jsx)("td",{className:t,children:e.delta})]},s)})})]})]})}function w({columns:e,rows:s,children:a}){if(a)return(0,i.jsx)("div",{className:c,children:a});let[t,n,r]=e??["Symbol","Signature","Since"];return(0,i.jsx)("div",{className:c,children:(0,i.jsxs)("table",{className:"apiTable_kmi_",children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:t}),(0,i.jsx)("th",{children:n}),(0,i.jsx)("th",{children:r})]})}),(0,i.jsx)("tbody",{children:s?.map((e,s)=>(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:e.symbol})}),(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:e.signature}),e.description&&(0,i.jsx)("div",{className:"apiDesc__siK",children:e.description})]}),(0,i.jsx)("td",{children:e.since&&(0,i.jsx)("code",{children:e.since})})]},s))})]})})}function A({status:e,children:s}){return(0,i.jsx)(i.Fragment,{})}function S({title:e="Steps",items:s,children:a}){let n,r=(n=s||(a?t.Children.toArray(a).filter(e=>t.isValidElement(e)).map(e=>({label:e.props.children,impact:e.props.status,done:!1})):[])).filter(e=>e.done).length;return(0,i.jsxs)("div",{className:"check_Z_XE",children:[(0,i.jsxs)("div",{className:"checkHead__B8i",children:[(0,i.jsx)("span",{children:e}),s&&(0,i.jsxs)("span",{children:[r," / ",n.length," complete"]})]}),(0,i.jsx)("ul",{className:"checkList_ziWk",children:n.map((e,s)=>(0,i.jsxs)("li",{className:`checkItem_jgfw ${e.done?"done_rLON":""}`,children:[(0,i.jsx)("span",{className:"checkBox_TriO",children:e.done&&(0,i.jsx)(g,{size:10})}),(0,i.jsx)("span",{className:"checkLbl_IWQU",children:e.label}),e.impact&&(0,i.jsx)("span",{className:"checkImpact_BaeN",children:e.impact})]},s))})]})}var M=a(5310);function k({prev:e,next:s}){return(0,i.jsxs)("nav",{className:"pager_oMm2",children:[e?(0,i.jsxs)(M.A,{to:e.to,className:o,children:[(0,i.jsxs)("span",{className:d,children:[(0,i.jsx)(f,{})," ",e.label??"Previous"]}),(0,i.jsx)("span",{className:m,children:e.title})]}):(0,i.jsx)("span",{}),s?(0,i.jsxs)(M.A,{to:s.to,className:`${o} next_PLI2`,children:[(0,i.jsxs)("span",{className:d,children:[s.label??"Next"," ",(0,i.jsx)(q,{})]}),(0,i.jsx)("span",{className:m,children:s.title})]}):(0,i.jsx)("span",{})]})}},8453(e,s,a){a.d(s,{R:()=>r,x:()=>l});var i=a(6540);let t={},n=i.createContext(t);function r(e){let s=i.useContext(n);return i.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),i.createElement(n.Provider,{value:s},e.children)}}}]);
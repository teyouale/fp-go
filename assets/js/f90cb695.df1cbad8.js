"use strict";(self.webpackChunkfp_go_docs=self.webpackChunkfp_go_docs||[]).push([["2722"],{4337(e,s,r){r.r(s),r.d(s,{metadata:()=>i,default:()=>u,frontMatter:()=>l,contentTitle:()=>c,toc:()=>d,assets:()=>o});var i=JSON.parse('{"id":"v2/collections/record-traverse","title":"Record - Traverse","description":"Working with maps of effectful computations using traverse operations.","source":"@site/docs/v2/collections/record-traverse.md","sourceDirName":"v2/collections","slug":"/v2/collections/record-traverse","permalink":"/fp-go/docs/v2/collections/record-traverse","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":14,"frontMatter":{"title":"Record - Traverse","hide_title":true,"description":"Working with maps of effectful computations using traverse operations.","sidebar_position":14},"sidebar":"apiSidebar","previous":{"title":"Record - Ordered","permalink":"/fp-go/docs/v2/collections/record-ord"},"next":{"title":"Sequence & Traverse","permalink":"/fp-go/docs/v2/collections/sequence-traverse"}}'),n=r(4848),t=r(8453),a=r(5811);let l={title:"Record - Traverse",hide_title:!0,description:"Working with maps of effectful computations using traverse operations.",sidebar_position:14},c,o={},d=[{value:"Traverse with Option",id:"traverse-with-option",level:3},{value:"Traverse with Result",id:"traverse-with-result",level:3},{value:"TraverseWithIndex",id:"traversewithindex",level:3},{value:"Sequence",id:"sequence",level:3},{value:"Configuration Parsing",id:"configuration-parsing",level:3},{value:"Validation Suite",id:"validation-suite",level:3},{value:"API Batch Requests",id:"api-batch-requests",level:3},{value:"All or Nothing Validation",id:"all-or-nothing-validation",level:3},{value:"Collecting Errors",id:"collecting-errors",level:3},{value:"Conditional Processing",id:"conditional-processing",level:3}];function h(e){let s={code:"code",h3:"h3",hr:"hr",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.zY,{eyebrow:"Reference \xb7 Collections",title:"Record Traverse",lede:"Working with maps of effectful computations. Traverse operations allow you to map over maps with effects and sequence the results.",meta:[{label:"Package",value:"github.com/IBM/fp-go/v2/record"},{label:"Operations",value:"Traverse, TraverseWithIndex, Sequence"}]}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(a.wn,{num:"1",title:"Core API",children:(0,n.jsx)(a.vr,{children:(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Function"}),(0,n.jsx)(s.th,{children:"Signature"}),(0,n.jsx)(s.th,{children:"Description"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"Traverse"})}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"func Traverse[K comparable, A, B, F any](Applicative[F]) func(func(A) HKT[F, B]) func(map[K]A) HKT[F, map[K]B]"})}),(0,n.jsx)(s.td,{children:"Map and sequence"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"TraverseWithIndex"})}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"func TraverseWithIndex[K comparable, A, B, F any](Applicative[F]) func(func(K, A) HKT[F, B]) func(map[K]A) HKT[F, map[K]B]"})}),(0,n.jsx)(s.td,{children:"Traverse with keys"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"Sequence"})}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"func Sequence[K comparable, A, F any](Applicative[F]) func(map[K]HKT[F, A]) HKT[F, map[K]A]"})}),(0,n.jsx)(s.td,{children:"Flip map and effect"})]})]})]})})}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsxs)(a.wn,{num:"2",title:"Usage Examples",children:[(0,n.jsx)(s.h3,{id:"traverse-with-option",children:"Traverse with Option"}),(0,n.jsx)(a.av,{file:"option.go",children:`import (
  R "github.com/IBM/fp-go/v2/record"
  O "github.com/IBM/fp-go/v2/option"
  F "github.com/IBM/fp-go/v2/function"
)

m := map[string]int{"a": 1, "b": 2, "c": 3}

// Validate all values
validated := R.Traverse(O.Applicative[int]())(
  func(v int) O.Option[int] {
      if v > 0 {
          return O.Some(v)
      }
      return O.None[int]()
  },
)(m)
// Some(map[string]int{"a": 1, "b": 2, "c": 3})

// With invalid value
m2 := map[string]int{"a": 1, "b": -1, "c": 3}
validated2 := R.Traverse(O.Applicative[int]())(
  func(v int) O.Option[int] {
      if v > 0 {
          return O.Some(v)
      }
      return O.None[int]()
  },
)(m2)
// None - one invalid value fails all
`}),(0,n.jsx)(s.h3,{id:"traverse-with-result",children:"Traverse with Result"}),(0,n.jsx)(a.av,{file:"result.go",children:`import Res "github.com/IBM/fp-go/v2/result"

configs := map[string]string{
  "port":    "8080",
  "timeout": "30",
  "retries": "abc",  // Invalid
}

// Parse all values
parsed := R.Traverse(Res.Applicative[error, int]())(
  func(s string) Res.Result[int] {
      if n, err := strconv.Atoi(s); err == nil {
          return Res.Success(n)
      } else {
          return Res.Error[int](err)
      }
  },
)(configs)
// Error - "abc" is not a valid integer
`}),(0,n.jsx)(s.h3,{id:"traversewithindex",children:"TraverseWithIndex"}),(0,n.jsx)(a.av,{file:"with_index.go",children:`configs := map[string]string{
  "api_url": "https://api.example.com",
  "timeout": "30",
  "retries": "3",
}

// Parse with context from keys
parsed := R.TraverseWithIndex(O.Applicative[int]())(
  func(key string, value string) O.Option[int] {
      if key == "api_url" {
          // Skip non-numeric configs
          return O.Some(0)
      }
      if n, err := strconv.Atoi(value); err == nil {
          return O.Some(n)
      }
      return O.None[int]()
  },
)(configs)
// Option[map[string]int]
`}),(0,n.jsx)(s.h3,{id:"sequence",children:"Sequence"}),(0,n.jsx)(a.av,{file:"sequence.go",children:`// Map of Options
options := map[string]O.Option[int]{
  "a": O.Some(1),
  "b": O.Some(2),
  "c": O.Some(3),
}

// Flip to Option of map
result := R.Sequence(O.Applicative[int]())(options)
// Some(map[string]int{"a": 1, "b": 2, "c": 3})

// With None
withNone := map[string]O.Option[int]{
  "a": O.Some(1),
  "b": O.None[int](),
  "c": O.Some(3),
}

result2 := R.Sequence(O.Applicative[int]())(withNone)
// None
`}),(0,n.jsx)(s.h3,{id:"configuration-parsing",children:"Configuration Parsing"}),(0,n.jsx)(a.av,{file:"config_parse.go",children:`type Config struct {
  Port    int
  Timeout int
  Retries int
}

raw := map[string]string{
  "port":    "8080",
  "timeout": "30",
  "retries": "3",
}

// Parse all fields
parsed := R.Traverse(Res.Applicative[error, int]())(
  func(s string) Res.Result[int] {
      n, err := strconv.Atoi(s)
      if err != nil {
          return Res.Error[int](err)
      }
      return Res.Success(n)
  },
)(raw)

// Build config from result
config := F.Pipe2(
  parsed,
  Res.Map(func(m map[string]int) Config {
      return Config{
          Port:    m["port"],
          Timeout: m["timeout"],
          Retries: m["retries"],
      }
  }),
)
// Result[Config]
`}),(0,n.jsx)(s.h3,{id:"validation-suite",children:"Validation Suite"}),(0,n.jsx)(a.av,{file:"validation.go",children:`type User struct {
  Email string
  Age   int
}

user := User{Email: "test@example.com", Age: 25}

validators := map[string]func(User) Res.Result[bool]{
  "email": func(u User) Res.Result[bool] {
      if strings.Contains(u.Email, "@") {
          return Res.Success(true)
      }
      return Res.Error[bool](errors.New("invalid email"))
  },
  "age": func(u User) Res.Result[bool] {
      if u.Age >= 18 {
          return Res.Success(true)
      }
      return Res.Error[bool](errors.New("must be 18+"))
  },
}

// Run all validations
results := R.Traverse(Res.Applicative[error, bool]())(
  func(validate func(User) Res.Result[bool]) Res.Result[bool] {
      return validate(user)
  },
)(validators)
// Result[map[string]bool] - Success if all pass
`}),(0,n.jsx)(s.h3,{id:"api-batch-requests",children:"API Batch Requests"}),(0,n.jsx)(a.av,{file:"api.go",children:`import IOE "github.com/IBM/fp-go/v2/ioeither"

type UserData struct {
  ID   int
  Name string
}

userIDs := map[string]int{
  "alice": 1,
  "bob":   2,
  "charlie": 3,
}

// Fetch all users
fetchAll := R.Traverse(IOE.Applicative[error, UserData]())(
  func(id int) IOE.IOEither[error, UserData] {
      return fetchUserAPI(id)
  },
)(userIDs)
// IOEither[error, map[string]UserData]

// Execute
users := fetchAll()
// Either[error, map[string]UserData]
`})]}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsxs)(a.wn,{num:"3",title:"Common Patterns",children:[(0,n.jsx)(s.h3,{id:"all-or-nothing-validation",children:"All or Nothing Validation"}),(0,n.jsx)(a.av,{file:"all_or_nothing.go",children:`// Validate all entries - fail if any invalid
func ValidateAll(data map[string]string) Res.Result[map[string]int] {
  return R.Traverse(Res.Applicative[error, int]())(
      func(s string) Res.Result[int] {
          n, err := strconv.Atoi(s)
          if err != nil {
              return Res.Error[int](
                  fmt.Errorf("invalid value: %s", s),
              )
          }
          return Res.Success(n)
      },
  )(data)
}
`}),(0,n.jsx)(s.h3,{id:"collecting-errors",children:"Collecting Errors"}),(0,n.jsx)(a.av,{file:"collect_errors.go",children:`// Validate with error collection
type ValidationErrors []error

func ValidateWithErrors(
  data map[string]string,
) (map[string]int, ValidationErrors) {
  result := make(map[string]int)
  var errors ValidationErrors
  
  for k, v := range data {
      if n, err := strconv.Atoi(v); err == nil {
          result[k] = n
      } else {
          errors = append(errors, 
              fmt.Errorf("%s: %w", k, err))
      }
  }
  
  return result, errors
}
`}),(0,n.jsx)(s.h3,{id:"conditional-processing",children:"Conditional Processing"}),(0,n.jsx)(a.av,{file:"conditional.go",children:`// Process only certain keys
func ProcessSelected(
  data map[string]string,
  keys []string,
) O.Option[map[string]int] {
  selected := make(map[string]string)
  for _, k := range keys {
      if v, ok := data[k]; ok {
          selected[k] = v
      }
  }
  
  return R.Traverse(O.Applicative[int]())(
      func(s string) O.Option[int] {
          if n, err := strconv.Atoi(s); err == nil {
              return O.Some(n)
          }
          return O.None[int]()
      },
  )(selected)
}
`})]}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(a.Pq,{type:"info",children:(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Short-Circuit Behavior"}),": Traverse operations short-circuit on the first failure. With Option, the first None returns None. With Result, the first Error returns Error."]})}),"\n",(0,n.jsxs)(a.Pq,{type:"info",children:[(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Use Cases"}),": Traverse is ideal for:"]}),(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"Validating all map values"}),"\n",(0,n.jsx)(s.li,{children:"Parsing configuration maps"}),"\n",(0,n.jsx)(s.li,{children:"Batch API requests"}),"\n",(0,n.jsx)(s.li,{children:"All-or-nothing transformations"}),"\n"]})]}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(a.is,{prev:{to:"/docs/v2/collections/record-monoid",title:"Record Monoid"},next:{to:"/docs/v2/collections/record-eq",title:"Record Equality"}}),"\n",(0,n.jsx)(s.hr,{})]})}function u(e={}){let{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},5811(e,s,r){r.d(s,{Pq:()=>R,eM:()=>k,hg:()=>A,_1:()=>O,av:()=>_,Gs:()=>w,vr:()=>T,x7:()=>p,bY:()=>S,wn:()=>v,zY:()=>u,ju:()=>m,BQ:()=>x,is:()=>C});var i=r(4848),n=r(6540);let t="codeTag_uQ6s",a="warn_PIJZ",l="benchNum_PicT",c="api_M0YO",o="pagerLink_hQ8Y",d="pagerLbl_CteO",h="pagerTtl_t0em";function u({eyebrow:e,title:s,titleAccent:r,lede:n,meta:t}){return(0,i.jsxs)("header",{className:"head_Sp2B",children:[(0,i.jsxs)("div",{className:"headLeft_aDUD",children:[e&&(0,i.jsx)("div",{className:"eyebrow__SSv",children:e}),(0,i.jsxs)("h1",{className:"headTitle_xWjG",children:[s,r?(0,i.jsxs)(i.Fragment,{children:[" ",(0,i.jsx)("em",{children:r})]}):null]}),n&&(0,i.jsx)("p",{className:"lede_Ltdj",children:n})]}),t&&t.length>0&&(0,i.jsx)("aside",{className:"headMeta_kmCF",children:t.map((e,s)=>(0,i.jsxs)("div",{className:"metaRow_drwK",children:[(0,i.jsx)("span",{className:"metaK_SNLg",children:e.label}),(0,i.jsx)("span",{className:"metaV_zAp5",children:e.value})]},s))})]})}function p({children:e}){return(0,i.jsx)("span",{className:"pill_Lzl6",children:e})}function m({children:e}){return(0,i.jsx)("div",{className:"tldr_mz3p",children:e})}function x({label:e,value:s,accent:r,unit:n,description:t,variant:a="default",prose:l}){return(0,i.jsxs)("div",{className:`tldrCard_nSap ${"up"===a?"up_ip1p":"down"===a?"down_x6We":""}`,children:[e&&(0,i.jsx)("div",{className:"tldrK_kP7m",children:e}),(0,i.jsxs)("div",{className:`tldrV_gUPe ${l?"tldrVProse_sV_2":""}`,children:[s,r?(0,i.jsx)("em",{children:r}):null,n?(0,i.jsx)("small",{children:n}):null]}),t&&(0,i.jsx)("div",{className:"tldrD_kfCX",children:t})]})}function v({id:e,number:s,title:r,titleAccent:n,tag:t,lede:a,children:l}){return(0,i.jsxs)("section",{className:"section_B_ST",children:[(0,i.jsxs)("div",{className:"sectionHead_oGCN",children:[(0,i.jsxs)("div",{className:"sectionHeadLeft_bfh9",children:[s&&(0,i.jsx)("span",{className:"sectionNum_qiYt",children:s}),(0,i.jsxs)("h2",{className:"sectionTitle__6nw",id:e,children:[r,n?(0,i.jsxs)(i.Fragment,{children:[" ",(0,i.jsx)("em",{children:n})]}):null]})]}),t&&(0,i.jsx)("span",{className:"sectionTag_se22",children:t})]}),a&&(0,i.jsx)("p",{className:"sectionLede_yuVk",children:a}),l]})}let j=({size:e=14,className:s})=>(0,i.jsx)("svg",{width:e,height:e,viewBox:"0 0 32 32",fill:"currentColor",className:s,"aria-hidden":"true",children:(0,i.jsx)("path",{d:"M13 24l-9-9 1.4-1.4L13 21.2 26.6 7.6 28 9z"})}),f=({size:e=14,className:s})=>(0,i.jsx)("svg",{width:e,height:e,viewBox:"0 0 32 32",fill:"currentColor",className:s,"aria-hidden":"true",children:(0,i.jsx)("path",{d:"M28 10v18H10V10h18m0-2H10a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2z"})}),g=({size:e=12,className:s})=>(0,i.jsx)("svg",{width:e,height:e,viewBox:"0 0 32 32",fill:"currentColor",className:s,"aria-hidden":"true",children:(0,i.jsx)("path",{d:"M18 6L16.6 7.4 24.2 15H4v2h20.2l-7.6 7.6L18 26l10-10z"})}),N=({size:e=12,className:s})=>(0,i.jsx)("svg",{width:e,height:e,viewBox:"0 0 32 32",fill:"currentColor",className:s,"aria-hidden":"true",children:(0,i.jsx)("path",{d:"M14 26l1.4-1.4L7.8 17H28v-2H7.8l7.6-7.6L14 6 4 16z"})});function _({file:e,status:s,copy:r=!0,children:l}){let c=(0,n.useRef)(null),[o,d]=(0,n.useState)(!1);return(0,i.jsxs)("div",{className:"codeCard_fiIG",children:[(0,i.jsxs)("div",{className:"codeBar_SZ78",children:[(0,i.jsx)("span",{className:"codeDot_JDOV"}),e&&(0,i.jsx)("span",{className:"codeFile_uZDd",children:e}),(0,i.jsx)("span",{className:"codeSpacer_nRmZ"}),s?"tested"===s?(0,i.jsx)("span",{className:`${t} ok_rUJx`,children:"tested"}):"warn"===s?(0,i.jsx)("span",{className:`${t} ${a}`,children:"caveat"}):"note"===s?(0,i.jsx)("span",{className:t,children:"note"}):"string"==typeof s?(0,i.jsx)("span",{className:t,children:s}):s:null,r&&(0,i.jsx)("button",{type:"button",className:"codeCopy_fKPb",onClick:()=>{if(!c.current)return;let e=c.current.innerText;"u">typeof navigator&&navigator.clipboard&&navigator.clipboard.writeText(e).then(()=>{d(!0),setTimeout(()=>d(!1),1200)})},"aria-label":"Copy code",children:o?"Copied":(0,i.jsx)(f,{})})]}),(0,i.jsx)("pre",{ref:c,className:"codeBlock_oEWX",children:l})]})}let b={info:({size:e=18,className:s})=>(0,i.jsxs)("svg",{width:e,height:e,viewBox:"0 0 32 32",fill:"currentColor",className:s,"aria-hidden":"true",children:[(0,i.jsx)("path",{d:"M16 2A14 14 0 1 0 30 16 14 14 0 0 0 16 2zm0 26a12 12 0 1 1 12-12 12 12 0 0 1-12 12z"}),(0,i.jsx)("path",{d:"M16 14h-2v2h1v6h-1v2h4v-2h-1v-8zm-.5-5a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 15.5 9z"})]}),warn:({size:e=18,className:s})=>(0,i.jsxs)("svg",{width:e,height:e,viewBox:"0 0 32 32",fill:"currentColor",className:s,"aria-hidden":"true",children:[(0,i.jsx)("path",{d:"M16 23a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 16 23zM15 13h2v8h-2z"}),(0,i.jsx)("path",{d:"M28.7 26.31L17.36 4.27a1.51 1.51 0 0 0-2.72 0L3.3 26.31a1.5 1.5 0 0 0 1.36 2.19h22.69a1.5 1.5 0 0 0 1.35-2.19z"})]}),success:j};function R({type:e="info",title:s,children:r}){let n=b[e];return(0,i.jsxs)("div",{className:`callout_yWfv ${"warn"===e?a:"success"===e?"success_D78d":""}`,children:[(0,i.jsx)("span",{className:"calloutIcon_hdwU",children:(0,i.jsx)(n,{size:18})}),(0,i.jsxs)("div",{className:"calloutBody_Qz4I",children:[s&&(0,i.jsx)("strong",{className:"calloutTitle_MXy4",children:s}),r]})]})}function w({children:e}){return(0,i.jsx)("div",{className:"compare_WfXa",children:e})}function O({kind:e,title:s,pill:r,children:n}){return(0,i.jsxs)("div",{className:`compareCol_nZe9 ${"bad"===e?"bad_pZ5b":"good_EJeo"}`,children:[(0,i.jsxs)("div",{className:"compareHead_vAhW",children:[(0,i.jsx)("span",{children:s??("bad"===e?"Before":"After")}),r&&(0,i.jsx)("span",{className:"comparePill_fmmx",children:r})]}),(0,i.jsx)("div",{className:"compareBody_hP62",children:n})]})}function A({title:e,command:s,columns:r,rows:n}){let[t,a,c,o,d]=r??["Variant","Speed","ns/op","B/op","\u0394"];return(0,i.jsxs)("div",{className:"bench_zMa2",children:[(0,i.jsxs)("div",{className:"benchHead_q6K3",children:[(0,i.jsx)("span",{children:e}),s&&(0,i.jsxs)("span",{className:"benchCmd_iUFI",children:[(0,i.jsx)("span",{className:"benchPrompt_LRr4",children:"$"}),s]})]}),(0,i.jsxs)("table",{className:"benchTable_u8XZ",children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:t}),(0,i.jsx)("th",{style:{width:"40%"},children:a}),(0,i.jsx)("th",{className:l,children:c}),(0,i.jsx)("th",{className:l,children:o}),(0,i.jsx)("th",{className:l,children:d})]})}),(0,i.jsx)("tbody",{children:n.map((e,s)=>{let r="win"===e.barKind?"win_PjNM":"lose"===e.barKind?"lose_A9dr":"",n="good"===e.deltaKind?"deltaGood_dYlm":"bad"===e.deltaKind?"deltaBad_yHEA":l;return(0,i.jsxs)("tr",{className:e.winner?"benchWinner_jDc2":void 0,children:[(0,i.jsx)("td",{className:"benchLabel_uFhm",children:e.label}),(0,i.jsx)("td",{children:null!=e.bar&&(0,i.jsx)("span",{className:"bar_jZ6H",children:(0,i.jsx)("span",{className:"barTrack_lefl",children:(0,i.jsx)("span",{className:`barFill_bMgr ${r}`,style:{width:`${100*Math.max(0,Math.min(1,e.bar))}%`}})})})}),(0,i.jsx)("td",{className:l,children:e.nsOp}),(0,i.jsx)("td",{className:l,children:e.bOp}),(0,i.jsx)("td",{className:n,children:e.delta})]},s)})})]})]})}function T({columns:e,rows:s,children:r}){if(r)return(0,i.jsx)("div",{className:c,children:r});let[n,t,a]=e??["Symbol","Signature","Since"];return(0,i.jsx)("div",{className:c,children:(0,i.jsxs)("table",{className:"apiTable_kmi_",children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:n}),(0,i.jsx)("th",{children:t}),(0,i.jsx)("th",{children:a})]})}),(0,i.jsx)("tbody",{children:s?.map((e,s)=>(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:e.symbol})}),(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:e.signature}),e.description&&(0,i.jsx)("div",{className:"apiDesc__siK",children:e.description})]}),(0,i.jsx)("td",{children:e.since&&(0,i.jsx)("code",{children:e.since})})]},s))})]})})}function k({status:e,children:s}){return(0,i.jsx)(i.Fragment,{})}function S({title:e="Steps",items:s,children:r}){let t,a=(t=s||(r?n.Children.toArray(r).filter(e=>n.isValidElement(e)).map(e=>({label:e.props.children,impact:e.props.status,done:!1})):[])).filter(e=>e.done).length;return(0,i.jsxs)("div",{className:"check_Z_XE",children:[(0,i.jsxs)("div",{className:"checkHead__B8i",children:[(0,i.jsx)("span",{children:e}),s&&(0,i.jsxs)("span",{children:[a," / ",t.length," complete"]})]}),(0,i.jsx)("ul",{className:"checkList_ziWk",children:t.map((e,s)=>(0,i.jsxs)("li",{className:`checkItem_jgfw ${e.done?"done_rLON":""}`,children:[(0,i.jsx)("span",{className:"checkBox_TriO",children:e.done&&(0,i.jsx)(j,{size:10})}),(0,i.jsx)("span",{className:"checkLbl_IWQU",children:e.label}),e.impact&&(0,i.jsx)("span",{className:"checkImpact_BaeN",children:e.impact})]},s))})]})}var y=r(5310);function C({prev:e,next:s}){return(0,i.jsxs)("nav",{className:"pager_oMm2",children:[e?(0,i.jsxs)(y.A,{to:e.to,className:o,children:[(0,i.jsxs)("span",{className:d,children:[(0,i.jsx)(N,{})," ",e.label??"Previous"]}),(0,i.jsx)("span",{className:h,children:e.title})]}):(0,i.jsx)("span",{}),s?(0,i.jsxs)(y.A,{to:s.to,className:`${o} next_PLI2`,children:[(0,i.jsxs)("span",{className:d,children:[s.label??"Next"," ",(0,i.jsx)(g,{})]}),(0,i.jsx)("span",{className:h,children:s.title})]}):(0,i.jsx)("span",{})]})}},8453(e,s,r){r.d(s,{R:()=>a,x:()=>l});var i=r(6540);let n={},t=i.createContext(n);function a(e){let s=i.useContext(t);return i.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),i.createElement(t.Provider,{value:s},e.children)}}}]);
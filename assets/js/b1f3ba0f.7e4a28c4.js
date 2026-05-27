"use strict";(self.webpackChunkfp_go_docs=self.webpackChunkfp_go_docs||[]).push([["9233"],{4460(e,s,r){r.r(s),r.d(s,{metadata:()=>i,default:()=>u,frontMatter:()=>a,contentTitle:()=>c,toc:()=>d,assets:()=>o});var i=JSON.parse('{"id":"v2/collections/sequence-traverse","title":"Sequence & Traverse","description":"Working with arrays of effectful computations - converting between arrays of effects and effects of arrays.","source":"@site/docs/v2/collections/sequence-traverse.md","sourceDirName":"v2/collections","slug":"/v2/collections/sequence-traverse","permalink":"/fp-go/docs/v2/collections/sequence-traverse","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":7,"frontMatter":{"title":"Sequence & Traverse","hide_title":true,"description":"Working with arrays of effectful computations - converting between arrays of effects and effects of arrays.","sidebar_position":7},"sidebar":"apiSidebar","previous":{"title":"Record - Traverse","permalink":"/fp-go/docs/v2/collections/record-traverse"},"next":{"title":"Function Utilities","permalink":"/fp-go/docs/v2/utilities/function"}}'),t=r(4848),n=r(8453),l=r(5811);let a={title:"Sequence & Traverse",hide_title:!0,description:"Working with arrays of effectful computations - converting between arrays of effects and effects of arrays.",sidebar_position:7},c,o={},d=[{value:"Sequence with Option",id:"sequence-with-option",level:3},{value:"Sequence with Result",id:"sequence-with-result",level:3},{value:"Traverse - Map and Sequence",id:"traverse---map-and-sequence",level:3},{value:"TraverseWithIndex",id:"traversewithindex",level:3},{value:"Validating All Items",id:"validating-all-items",level:3},{value:"Parsing Configuration",id:"parsing-configuration",level:3},{value:"Parallel API Calls",id:"parallel-api-calls",level:3},{value:"File Operations",id:"file-operations",level:3},{value:"All or Nothing Processing",id:"all-or-nothing-processing",level:3},{value:"Batch Operations",id:"batch-operations",level:3},{value:"Conditional Processing",id:"conditional-processing",level:3},{value:"Collecting Results",id:"collecting-results",level:3},{value:"Parallel with Limit",id:"parallel-with-limit",level:3},{value:"Error Accumulation",id:"error-accumulation",level:3}];function h(e){let s={code:"code",h3:"h3",hr:"hr",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.zY,{eyebrow:"Reference \xb7 Collections",title:"Sequence & Traverse",lede:"Working with arrays of effectful computations. Convert between []Effect[A] and Effect[[]A] for powerful composition patterns.",meta:[{label:"Package",value:"github.com/IBM/fp-go/v2/array"},{label:"Operations",value:"Sequence, Traverse, TraverseWithIndex"}]}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(l.wn,{num:"1",title:"Core API",children:(0,t.jsx)(l.vr,{children:(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Function"}),(0,t.jsx)(s.th,{children:"Signature"}),(0,t.jsx)(s.th,{children:"Description"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"Sequence"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"func Sequence[A, F any](Applicative[F]) func([]HKT[F, A]) HKT[F, []A]"})}),(0,t.jsx)(s.td,{children:"Flip array and effect"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"Traverse"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"func Traverse[A, B, F any](Applicative[F]) func(func(A) HKT[F, B]) func([]A) HKT[F, []B]"})}),(0,t.jsx)(s.td,{children:"Map and sequence"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"TraverseWithIndex"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"func TraverseWithIndex[A, B, F any](Applicative[F]) func(func(int, A) HKT[F, B]) func([]A) HKT[F, []B]"})}),(0,t.jsx)(s.td,{children:"Traverse with index"})]})]})]})})}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsxs)(l.wn,{num:"2",title:"Usage Examples",children:[(0,t.jsx)(s.h3,{id:"sequence-with-option",children:"Sequence with Option"}),(0,t.jsx)(l.av,{file:"sequence_option.go",children:`import (
  A "github.com/IBM/fp-go/v2/array"
  O "github.com/IBM/fp-go/v2/option"
  F "github.com/IBM/fp-go/v2/function"
)

// Array of Options -> Option of Array
options := []O.Option[int]{
  O.Some(1),
  O.Some(2),
  O.Some(3),
}

result := A.Sequence(O.Applicative[int]())(options)
// Some([]int{1, 2, 3})

// With None - short circuits
withNone := []O.Option[int]{
  O.Some(1),
  O.None[int](),
  O.Some(3),
}

result2 := A.Sequence(O.Applicative[int]())(withNone)
// None - one None fails all
`}),(0,t.jsx)(s.h3,{id:"sequence-with-result",children:"Sequence with Result"}),(0,t.jsx)(l.av,{file:"sequence_result.go",children:`import Res "github.com/IBM/fp-go/v2/result"

// Array of Results -> Result of Array
results := []Res.Result[int]{
  Res.Success(1),
  Res.Success(2),
  Res.Success(3),
}

combined := A.Sequence(Res.Applicative[error, int]())(results)
// Success([]int{1, 2, 3})

// With error
withError := []Res.Result[int]{
  Res.Success(1),
  Res.Error[int](errors.New("failed")),
  Res.Success(3),
}

combined2 := A.Sequence(Res.Applicative[error, int]())(withError)
// Error("failed")
`}),(0,t.jsx)(s.h3,{id:"traverse---map-and-sequence",children:"Traverse - Map and Sequence"}),(0,t.jsx)(l.av,{file:"traverse.go",children:`type User struct {
  ID   int
  Name string
}

ids := []int{1, 2, 3}

// Fetch users (returns Option)
users := A.Traverse(O.Applicative[User]())(
  func(id int) O.Option[User] {
      return fetchUser(id)  // Returns Option[User]
  },
)(ids)
// Option[[]User] - Some if all found, None if any missing
`}),(0,t.jsx)(s.h3,{id:"traversewithindex",children:"TraverseWithIndex"}),(0,t.jsx)(l.av,{file:"traverse_index.go",children:`values := []string{"10", "20", "30"}

// Parse with index for error messages
parsed := A.TraverseWithIndex(Res.Applicative[error, int]())(
  func(i int, s string) Res.Result[int] {
      n, err := strconv.Atoi(s)
      if err != nil {
          return Res.Error[int](
              fmt.Errorf("index %d: %w", i, err),
          )
      }
      return Res.Success(n)
  },
)(values)
// Result[[]int]
`}),(0,t.jsx)(s.h3,{id:"validating-all-items",children:"Validating All Items"}),(0,t.jsx)(l.av,{file:"validate.go",children:`type Item struct {
  ID    int
  Value string
}

items := []Item{
  {ID: 1, Value: "valid"},
  {ID: 2, Value: "also-valid"},
  {ID: 3, Value: ""},  // Invalid
}

// Validate all items
validated := A.Traverse(Res.Applicative[error, Item]())(
  func(item Item) Res.Result[Item] {
      if item.Value == "" {
          return Res.Error[Item](
              fmt.Errorf("item %d: empty value", item.ID),
          )
      }
      return Res.Success(item)
  },
)(items)
// Error("item 3: empty value")
`}),(0,t.jsx)(s.h3,{id:"parsing-configuration",children:"Parsing Configuration"}),(0,t.jsx)(l.av,{file:"parse_config.go",children:`type Config struct {
  Port    int
  Timeout int
  Retries int
}

raw := []string{"8080", "30", "3"}

// Parse all values
parsed := A.Traverse(Res.Applicative[error, int]())(
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
  Res.Map(func(values []int) Config {
      return Config{
          Port:    values[0],
          Timeout: values[1],
          Retries: values[2],
      }
  }),
)
// Result[Config]
`}),(0,t.jsx)(s.h3,{id:"parallel-api-calls",children:"Parallel API Calls"}),(0,t.jsx)(l.av,{file:"api.go",children:`import IOE "github.com/IBM/fp-go/v2/ioeither"

type UserData struct {
  ID   int
  Name string
}

userIDs := []int{1, 2, 3, 4, 5}

// Fetch all users
fetchAll := A.Traverse(IOE.Applicative[error, UserData]())(
  func(id int) IOE.IOEither[error, UserData] {
      return fetchUserAPI(id)
  },
)(userIDs)
// IOEither[error, []UserData]

// Execute
users := fetchAll()
// Either[error, []UserData]
`}),(0,t.jsx)(s.h3,{id:"file-operations",children:"File Operations"}),(0,t.jsx)(l.av,{file:"files.go",children:`import IO "github.com/IBM/fp-go/v2/io"

filenames := []string{"file1.txt", "file2.txt", "file3.txt"}

// Read all files
readAll := A.Traverse(IO.Applicative[[]byte]())(
  func(name string) IO.IO[[]byte] {
      return func() []byte {
          data, _ := os.ReadFile(name)
          return data
      }
  },
)(filenames)
// IO[[][]byte]

// Execute
contents := readAll()
// [][]byte - all file contents
`})]}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsxs)(l.wn,{num:"3",title:"Common Patterns",children:[(0,t.jsx)(s.h3,{id:"all-or-nothing-processing",children:"All or Nothing Processing"}),(0,t.jsx)(l.av,{file:"all_or_nothing.go",children:`// Process all items - fail if any fails
func ProcessAll(items []string) Res.Result[[]int] {
  return A.Traverse(Res.Applicative[error, int]())(
      func(s string) Res.Result[int] {
          return processItem(s)
      },
  )(items)
}
`}),(0,t.jsx)(s.h3,{id:"batch-operations",children:"Batch Operations"}),(0,t.jsx)(l.av,{file:"batch.go",children:`// Batch database inserts
func InsertAll(users []User) IOE.IOEither[error, []int] {
  return A.Traverse(IOE.Applicative[error, int]())(
      func(u User) IOE.IOEither[error, int] {
          return insertUser(u)
      },
  )(users)
}
`}),(0,t.jsx)(s.h3,{id:"conditional-processing",children:"Conditional Processing"}),(0,t.jsx)(l.av,{file:"conditional.go",children:`// Process only valid items
func ProcessValid(items []Item) O.Option[[]Result] {
  return A.Traverse(O.Applicative[Result]())(
      func(item Item) O.Option[Result] {
          if item.IsValid() {
              return O.Some(process(item))
          }
          return O.None[Result]()
      },
  )(items)
}
`}),(0,t.jsx)(s.h3,{id:"collecting-results",children:"Collecting Results"}),(0,t.jsx)(l.av,{file:"collect.go",children:`// Collect successful results, skip failures
func CollectSuccesses(items []string) []int {
  results := A.Map(func(s string) O.Option[int] {
      if n, err := strconv.Atoi(s); err == nil {
          return O.Some(n)
      }
      return O.None[int]()
  })(items)
  
  // Filter out Nones
  return A.FilterMap(F.Identity[O.Option[int]])(results)
}
`}),(0,t.jsx)(s.h3,{id:"parallel-with-limit",children:"Parallel with Limit"}),(0,t.jsx)(l.av,{file:"parallel_limit.go",children:`// Process in batches to limit parallelism
func ProcessInBatches(items []Item, batchSize int) IOE.IOEither[error, []Result] {
  batches := chunkArray(items, batchSize)
  
  return A.Traverse(IOE.Applicative[error, []Result]())(
      func(batch []Item) IOE.IOEither[error, []Result] {
          return A.Traverse(IOE.Applicative[error, Result]())(
              processItem,
          )(batch)
      },
  )(batches)
}
`}),(0,t.jsx)(s.h3,{id:"error-accumulation",children:"Error Accumulation"}),(0,t.jsx)(l.av,{file:"errors.go",children:`// Collect all errors instead of short-circuiting
type ValidationResult struct {
  Valid  []Item
  Errors []error
}

func ValidateAll(items []Item) ValidationResult {
  var valid []Item
  var errors []error
  
  for _, item := range items {
      if err := validate(item); err != nil {
          errors = append(errors, err)
      } else {
          valid = append(valid, item)
      }
  }
  
  return ValidationResult{Valid: valid, Errors: errors}
}
`})]}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsxs)(l.Pq,{type:"info",children:[(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Short-Circuit Behavior"}),": Both Sequence and Traverse short-circuit on the first failure:"]}),(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"With Option: first None returns None"}),"\n",(0,t.jsx)(s.li,{children:"With Result: first Error returns Error"}),"\n",(0,t.jsx)(s.li,{children:"With IOEither: first Left returns Left"}),"\n"]})]}),"\n",(0,t.jsxs)(l.Pq,{type:"info",children:[(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Use Cases"}),": Traverse is ideal for:"]}),(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Validating all array elements"}),"\n",(0,t.jsx)(s.li,{children:"Batch API requests"}),"\n",(0,t.jsx)(s.li,{children:"Parallel file operations"}),"\n",(0,t.jsx)(s.li,{children:"All-or-nothing transformations"}),"\n",(0,t.jsx)(s.li,{children:"Converting imperative loops to functional pipelines"}),"\n"]})]}),"\n",(0,t.jsx)(l.Pq,{type:"warn",children:(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Performance"}),": Traverse operations process elements sequentially by default. For true parallelism, use specialized parallel execution utilities or batch processing patterns."]})}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(l.is,{prev:{to:"/docs/v2/collections/nonempty-array",title:"NonEmpty Array"},next:{to:"/docs/v2/collections/record",title:"Record (Map)"}})]})}function u(e={}){let{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},5811(e,s,r){r.d(s,{Pq:()=>A,eM:()=>R,hg:()=>y,_1:()=>w,av:()=>_,Gs:()=>I,vr:()=>O,x7:()=>p,bY:()=>S,wn:()=>f,zY:()=>u,ju:()=>m,BQ:()=>x,is:()=>P});var i=r(4848),t=r(6540);let n="codeTag_uQ6s",l="warn_PIJZ",a="benchNum_PicT",c="api_M0YO",o="pagerLink_hQ8Y",d="pagerLbl_CteO",h="pagerTtl_t0em";function u({eyebrow:e,title:s,titleAccent:r,lede:t,meta:n}){return(0,i.jsxs)("header",{className:"head_Sp2B",children:[(0,i.jsxs)("div",{className:"headLeft_aDUD",children:[e&&(0,i.jsx)("div",{className:"eyebrow__SSv",children:e}),(0,i.jsxs)("h1",{className:"headTitle_xWjG",children:[s,r?(0,i.jsxs)(i.Fragment,{children:[" ",(0,i.jsx)("em",{children:r})]}):null]}),t&&(0,i.jsx)("p",{className:"lede_Ltdj",children:t})]}),n&&n.length>0&&(0,i.jsx)("aside",{className:"headMeta_kmCF",children:n.map((e,s)=>(0,i.jsxs)("div",{className:"metaRow_drwK",children:[(0,i.jsx)("span",{className:"metaK_SNLg",children:e.label}),(0,i.jsx)("span",{className:"metaV_zAp5",children:e.value})]},s))})]})}function p({children:e}){return(0,i.jsx)("span",{className:"pill_Lzl6",children:e})}function m({children:e}){return(0,i.jsx)("div",{className:"tldr_mz3p",children:e})}function x({label:e,value:s,accent:r,unit:t,description:n,variant:l="default",prose:a}){return(0,i.jsxs)("div",{className:`tldrCard_nSap ${"up"===l?"up_ip1p":"down"===l?"down_x6We":""}`,children:[e&&(0,i.jsx)("div",{className:"tldrK_kP7m",children:e}),(0,i.jsxs)("div",{className:`tldrV_gUPe ${a?"tldrVProse_sV_2":""}`,children:[s,r?(0,i.jsx)("em",{children:r}):null,t?(0,i.jsx)("small",{children:t}):null]}),n&&(0,i.jsx)("div",{className:"tldrD_kfCX",children:n})]})}function f({id:e,number:s,title:r,titleAccent:t,tag:n,lede:l,children:a}){return(0,i.jsxs)("section",{className:"section_B_ST",children:[(0,i.jsxs)("div",{className:"sectionHead_oGCN",children:[(0,i.jsxs)("div",{className:"sectionHeadLeft_bfh9",children:[s&&(0,i.jsx)("span",{className:"sectionNum_qiYt",children:s}),(0,i.jsxs)("h2",{className:"sectionTitle__6nw",id:e,children:[r,t?(0,i.jsxs)(i.Fragment,{children:[" ",(0,i.jsx)("em",{children:t})]}):null]})]}),n&&(0,i.jsx)("span",{className:"sectionTag_se22",children:n})]}),l&&(0,i.jsx)("p",{className:"sectionLede_yuVk",children:l}),a]})}let v=({size:e=14,className:s})=>(0,i.jsx)("svg",{width:e,height:e,viewBox:"0 0 32 32",fill:"currentColor",className:s,"aria-hidden":"true",children:(0,i.jsx)("path",{d:"M13 24l-9-9 1.4-1.4L13 21.2 26.6 7.6 28 9z"})}),j=({size:e=14,className:s})=>(0,i.jsx)("svg",{width:e,height:e,viewBox:"0 0 32 32",fill:"currentColor",className:s,"aria-hidden":"true",children:(0,i.jsx)("path",{d:"M28 10v18H10V10h18m0-2H10a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2z"})}),g=({size:e=12,className:s})=>(0,i.jsx)("svg",{width:e,height:e,viewBox:"0 0 32 32",fill:"currentColor",className:s,"aria-hidden":"true",children:(0,i.jsx)("path",{d:"M18 6L16.6 7.4 24.2 15H4v2h20.2l-7.6 7.6L18 26l10-10z"})}),N=({size:e=12,className:s})=>(0,i.jsx)("svg",{width:e,height:e,viewBox:"0 0 32 32",fill:"currentColor",className:s,"aria-hidden":"true",children:(0,i.jsx)("path",{d:"M14 26l1.4-1.4L7.8 17H28v-2H7.8l7.6-7.6L14 6 4 16z"})});function _({file:e,status:s,copy:r=!0,children:a}){let c=(0,t.useRef)(null),[o,d]=(0,t.useState)(!1);return(0,i.jsxs)("div",{className:"codeCard_fiIG",children:[(0,i.jsxs)("div",{className:"codeBar_SZ78",children:[(0,i.jsx)("span",{className:"codeDot_JDOV"}),e&&(0,i.jsx)("span",{className:"codeFile_uZDd",children:e}),(0,i.jsx)("span",{className:"codeSpacer_nRmZ"}),s?"tested"===s?(0,i.jsx)("span",{className:`${n} ok_rUJx`,children:"tested"}):"warn"===s?(0,i.jsx)("span",{className:`${n} ${l}`,children:"caveat"}):"note"===s?(0,i.jsx)("span",{className:n,children:"note"}):"string"==typeof s?(0,i.jsx)("span",{className:n,children:s}):s:null,r&&(0,i.jsx)("button",{type:"button",className:"codeCopy_fKPb",onClick:()=>{if(!c.current)return;let e=c.current.innerText;"u">typeof navigator&&navigator.clipboard&&navigator.clipboard.writeText(e).then(()=>{d(!0),setTimeout(()=>d(!1),1200)})},"aria-label":"Copy code",children:o?"Copied":(0,i.jsx)(j,{})})]}),(0,i.jsx)("pre",{ref:c,className:"codeBlock_oEWX",children:a})]})}let b={info:({size:e=18,className:s})=>(0,i.jsxs)("svg",{width:e,height:e,viewBox:"0 0 32 32",fill:"currentColor",className:s,"aria-hidden":"true",children:[(0,i.jsx)("path",{d:"M16 2A14 14 0 1 0 30 16 14 14 0 0 0 16 2zm0 26a12 12 0 1 1 12-12 12 12 0 0 1-12 12z"}),(0,i.jsx)("path",{d:"M16 14h-2v2h1v6h-1v2h4v-2h-1v-8zm-.5-5a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 15.5 9z"})]}),warn:({size:e=18,className:s})=>(0,i.jsxs)("svg",{width:e,height:e,viewBox:"0 0 32 32",fill:"currentColor",className:s,"aria-hidden":"true",children:[(0,i.jsx)("path",{d:"M16 23a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 16 23zM15 13h2v8h-2z"}),(0,i.jsx)("path",{d:"M28.7 26.31L17.36 4.27a1.51 1.51 0 0 0-2.72 0L3.3 26.31a1.5 1.5 0 0 0 1.36 2.19h22.69a1.5 1.5 0 0 0 1.35-2.19z"})]}),success:v};function A({type:e="info",title:s,children:r}){let t=b[e];return(0,i.jsxs)("div",{className:`callout_yWfv ${"warn"===e?l:"success"===e?"success_D78d":""}`,children:[(0,i.jsx)("span",{className:"calloutIcon_hdwU",children:(0,i.jsx)(t,{size:18})}),(0,i.jsxs)("div",{className:"calloutBody_Qz4I",children:[s&&(0,i.jsx)("strong",{className:"calloutTitle_MXy4",children:s}),r]})]})}function I({children:e}){return(0,i.jsx)("div",{className:"compare_WfXa",children:e})}function w({kind:e,title:s,pill:r,children:t}){return(0,i.jsxs)("div",{className:`compareCol_nZe9 ${"bad"===e?"bad_pZ5b":"good_EJeo"}`,children:[(0,i.jsxs)("div",{className:"compareHead_vAhW",children:[(0,i.jsx)("span",{children:s??("bad"===e?"Before":"After")}),r&&(0,i.jsx)("span",{className:"comparePill_fmmx",children:r})]}),(0,i.jsx)("div",{className:"compareBody_hP62",children:t})]})}function y({title:e,command:s,columns:r,rows:t}){let[n,l,c,o,d]=r??["Variant","Speed","ns/op","B/op","\u0394"];return(0,i.jsxs)("div",{className:"bench_zMa2",children:[(0,i.jsxs)("div",{className:"benchHead_q6K3",children:[(0,i.jsx)("span",{children:e}),s&&(0,i.jsxs)("span",{className:"benchCmd_iUFI",children:[(0,i.jsx)("span",{className:"benchPrompt_LRr4",children:"$"}),s]})]}),(0,i.jsxs)("table",{className:"benchTable_u8XZ",children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:n}),(0,i.jsx)("th",{style:{width:"40%"},children:l}),(0,i.jsx)("th",{className:a,children:c}),(0,i.jsx)("th",{className:a,children:o}),(0,i.jsx)("th",{className:a,children:d})]})}),(0,i.jsx)("tbody",{children:t.map((e,s)=>{let r="win"===e.barKind?"win_PjNM":"lose"===e.barKind?"lose_A9dr":"",t="good"===e.deltaKind?"deltaGood_dYlm":"bad"===e.deltaKind?"deltaBad_yHEA":a;return(0,i.jsxs)("tr",{className:e.winner?"benchWinner_jDc2":void 0,children:[(0,i.jsx)("td",{className:"benchLabel_uFhm",children:e.label}),(0,i.jsx)("td",{children:null!=e.bar&&(0,i.jsx)("span",{className:"bar_jZ6H",children:(0,i.jsx)("span",{className:"barTrack_lefl",children:(0,i.jsx)("span",{className:`barFill_bMgr ${r}`,style:{width:`${100*Math.max(0,Math.min(1,e.bar))}%`}})})})}),(0,i.jsx)("td",{className:a,children:e.nsOp}),(0,i.jsx)("td",{className:a,children:e.bOp}),(0,i.jsx)("td",{className:t,children:e.delta})]},s)})})]})]})}function O({columns:e,rows:s,children:r}){if(r)return(0,i.jsx)("div",{className:c,children:r});let[t,n,l]=e??["Symbol","Signature","Since"];return(0,i.jsx)("div",{className:c,children:(0,i.jsxs)("table",{className:"apiTable_kmi_",children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:t}),(0,i.jsx)("th",{children:n}),(0,i.jsx)("th",{children:l})]})}),(0,i.jsx)("tbody",{children:s?.map((e,s)=>(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:e.symbol})}),(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:e.signature}),e.description&&(0,i.jsx)("div",{className:"apiDesc__siK",children:e.description})]}),(0,i.jsx)("td",{children:e.since&&(0,i.jsx)("code",{children:e.since})})]},s))})]})})}function R({status:e,children:s}){return(0,i.jsx)(i.Fragment,{})}function S({title:e="Steps",items:s,children:r}){let n,l=(n=s||(r?t.Children.toArray(r).filter(e=>t.isValidElement(e)).map(e=>({label:e.props.children,impact:e.props.status,done:!1})):[])).filter(e=>e.done).length;return(0,i.jsxs)("div",{className:"check_Z_XE",children:[(0,i.jsxs)("div",{className:"checkHead__B8i",children:[(0,i.jsx)("span",{children:e}),s&&(0,i.jsxs)("span",{children:[l," / ",n.length," complete"]})]}),(0,i.jsx)("ul",{className:"checkList_ziWk",children:n.map((e,s)=>(0,i.jsxs)("li",{className:`checkItem_jgfw ${e.done?"done_rLON":""}`,children:[(0,i.jsx)("span",{className:"checkBox_TriO",children:e.done&&(0,i.jsx)(v,{size:10})}),(0,i.jsx)("span",{className:"checkLbl_IWQU",children:e.label}),e.impact&&(0,i.jsx)("span",{className:"checkImpact_BaeN",children:e.impact})]},s))})]})}var T=r(5310);function P({prev:e,next:s}){return(0,i.jsxs)("nav",{className:"pager_oMm2",children:[e?(0,i.jsxs)(T.A,{to:e.to,className:o,children:[(0,i.jsxs)("span",{className:d,children:[(0,i.jsx)(N,{})," ",e.label??"Previous"]}),(0,i.jsx)("span",{className:h,children:e.title})]}):(0,i.jsx)("span",{}),s?(0,i.jsxs)(T.A,{to:s.to,className:`${o} next_PLI2`,children:[(0,i.jsxs)("span",{className:d,children:[s.label??"Next"," ",(0,i.jsx)(g,{})]}),(0,i.jsx)("span",{className:h,children:s.title})]}):(0,i.jsx)("span",{})]})}},8453(e,s,r){r.d(s,{R:()=>l,x:()=>a});var i=r(6540);let t={},n=i.createContext(t);function l(e){let s=i.useContext(n);return i.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),i.createElement(n.Provider,{value:s},e.children)}}}]);
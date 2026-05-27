"use strict";(self.webpackChunkfp_go_docs=self.webpackChunkfp_go_docs||[]).push([["6877"],{7325(e,s,i){i.r(s),i.d(s,{metadata:()=>n,default:()=>p,frontMatter:()=>l,contentTitle:()=>c,toc:()=>o,assets:()=>d});var n=JSON.parse('{"id":"v2/utilities/string","title":"String","description":"String utilities and type class instances for text operations in fp-go","source":"@site/docs/v2/utilities/string.md","sourceDirName":"v2/utilities","slug":"/v2/utilities/string","permalink":"/fp-go/docs/v2/utilities/string","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":31,"frontMatter":{"title":"String","hide_title":true,"description":"String utilities and type class instances for text operations in fp-go","sidebar_position":31},"sidebar":"apiSidebar","previous":{"title":"Number","permalink":"/fp-go/docs/v2/utilities/number"},"next":{"title":"Tuple","permalink":"/fp-go/docs/v2/utilities/tuple"}}'),r=i(4848),t=i(8453),a=i(5811);let l={title:"String",hide_title:!0,description:"String utilities and type class instances for text operations in fp-go",sidebar_position:31},c,d={},o=[];function h(e){let s={a:"a",code:"code",hr:"hr",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.zY,{eyebrow:"v2 \xb7 Utilities",title:"String",titleAccent:"Type Classes",lede:"The string package provides type class instances and utilities for string values, enabling functional operations on text.",meta:[{label:"Package",value:"string"},{label:"Since",value:"v2.0.0"},{label:"Type",value:"string"}]}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsxs)(a.wn,{num:"1",title:"Overview",children:[(0,r.jsxs)(s.p,{children:["The ",(0,r.jsx)(s.strong,{children:"String"})," package provides type class instances for the ",(0,r.jsx)(s.code,{children:"string"})," type, enabling:"]}),(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Eq"}),": Equality comparison"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Ord"}),": Lexicographic ordering"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Semigroup"}),": Concatenation"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Monoid"}),": Concatenation with empty string identity"]}),"\n"]}),(0,r.jsx)(s.p,{children:"These instances allow strings to be used with generic functional operations."})]}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(a.wn,{num:"2",title:"Equality",children:(0,r.jsx)(a.av,{file:"string_eq.go",tag:"example",children:`import S "github.com/IBM/fp-go/string"

// Compare strings for equality
S.Eq.Equals("hello", "hello")  // true
S.Eq.Equals("hello", "world")  // false
S.Eq.Equals("", "")            // true

// Case-sensitive comparison
S.Eq.Equals("Hello", "hello")  // false`})}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsxs)(a.wn,{num:"3",title:"Ordering",children:[(0,r.jsx)(s.p,{children:"Lexicographic (dictionary) ordering:"}),(0,r.jsx)(a.av,{file:"string_ord.go",tag:"example",children:`import S "github.com/IBM/fp-go/string"

// Compare strings lexicographically
S.Ord.Compare("a", "b")     // -1 (less than)
S.Ord.Compare("b", "a")     // 1  (greater than)
S.Ord.Compare("a", "a")     // 0  (equal)
S.Ord.Compare("apple", "banana")  // -1

// Derived operations
S.Ord.LessThan("a", "b")           // true
S.Ord.GreaterThan("z", "a")        // true
S.Ord.LessThanOrEqual("a", "a")    // true

// Min and Max
S.Ord.Min("zebra", "apple")  // "apple"
S.Ord.Max("zebra", "apple")  // "zebra"`})]}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsxs)(a.wn,{num:"4",title:"Semigroup Concatenation",children:[(0,r.jsx)(s.p,{children:"Combine strings with concatenation:"}),(0,r.jsx)(a.av,{file:"string_semigroup.go",tag:"example",children:`import S "github.com/IBM/fp-go/string"

// Concatenate strings
S.Semigroup.Concat("Hello", " World")  // "Hello World"
S.Semigroup.Concat("foo", "bar")       // "foobar"

// Associativity holds
s1 := S.Semigroup.Concat(
  S.Semigroup.Concat("a", "b"),
  "c",
)
s2 := S.Semigroup.Concat(
  "a",
  S.Semigroup.Concat("b", "c"),
)
// s1 == s2 == "abc"`})]}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsxs)(a.wn,{num:"5",title:"Monoid Operations",children:[(0,r.jsx)(s.p,{children:"Concatenation with empty string identity:"}),(0,r.jsx)(a.av,{file:"string_monoid.go",tag:"example",children:`import S "github.com/IBM/fp-go/string"

// Concatenate with monoid
S.Monoid.Concat("Hello", " World")  // "Hello World"
S.Monoid.Empty()                    // ""

// Identity laws
text := "test"
S.Monoid.Concat(S.Monoid.Empty(), text)  // "test"
S.Monoid.Concat(text, S.Monoid.Empty())  // "test"`})]}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsxs)(a.wn,{num:"6",title:"Sorting Strings",children:[(0,r.jsx)(s.p,{children:"Sort string arrays alphabetically:"}),(0,r.jsx)(a.av,{file:"string_sort.go",tag:"example",children:`import (
  A "github.com/IBM/fp-go/array"
  F "github.com/IBM/fp-go/function"
  S "github.com/IBM/fp-go/string"
)

words := []string{"zebra", "apple", "mango", "banana"}

// Sort alphabetically (ascending)
sorted := F.Pipe2(
  words,
  A.Sort(S.Ord),
)
// []string{"apple", "banana", "mango", "zebra"}

// Sort descending
import O "github.com/IBM/fp-go/ord"

sortedDesc := F.Pipe2(
  words,
  A.Sort(O.Reverse(S.Ord)),
)
// []string{"zebra", "mango", "banana", "apple"}`})]}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsxs)(a.wn,{num:"7",title:"Concatenating Arrays",children:[(0,r.jsx)(s.p,{children:"Join string arrays:"}),(0,r.jsx)(a.av,{file:"string_concat.go",tag:"example",children:`import (
  A "github.com/IBM/fp-go/array"
  F "github.com/IBM/fp-go/function"
  S "github.com/IBM/fp-go/string"
)

words := []string{"Hello", "functional", "world"}

// Concatenate all strings
combined := F.Pipe2(
  words,
  A.Fold(S.Monoid),
)
// "Hellofunctionalworld"

// Join with separator
joined := F.Pipe3(
  words,
  A.Intersperse(" "),
  A.Fold(S.Monoid),
)
// "Hello functional world"

// Join with custom separator
withCommas := F.Pipe3(
  words,
  A.Intersperse(", "),
  A.Fold(S.Monoid),
)
// "Hello, functional, world"`})]}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsxs)(a.wn,{num:"8",title:"Building Strings",children:[(0,r.jsx)(s.p,{children:"Use monoid to build strings from parts:"}),(0,r.jsx)(a.av,{file:"string_build.go",tag:"example",children:`type User struct {
  FirstName string
  LastName  string
  Age       int
}

user := User{FirstName: "Alice", LastName: "Smith", Age: 30}

// Build formatted string
parts := []string{
  "User: ",
  user.FirstName,
  " ",
  user.LastName,
  " (age ",
  fmt.Sprintf("%d", user.Age),
  ")",
}

result := F.Pipe2(
  parts,
  A.Fold(S.Monoid),
)
// "User: Alice Smith (age 30)"

// Build CSV row
csvRow := F.Pipe3(
  []string{user.FirstName, user.LastName, fmt.Sprintf("%d", user.Age)},
  A.Intersperse(","),
  A.Fold(S.Monoid),
)
// "Alice,Smith,30"`})]}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsxs)(a.wn,{num:"9",title:"Filtering and Mapping",children:[(0,r.jsx)(s.p,{children:"Combine with array operations:"}),(0,r.jsx)(a.av,{file:"string_filter.go",tag:"example",children:`import (
  A "github.com/IBM/fp-go/array"
  F "github.com/IBM/fp-go/function"
  S "github.com/IBM/fp-go/string"
)

words := []string{"apple", "banana", "apricot", "cherry", "avocado"}

// Filter words starting with 'a'
aWords := F.Pipe2(
  words,
  A.Filter(func(s string) bool {
      return len(s) > 0 && s[0] == 'a'
  }),
)
// []string{"apple", "apricot", "avocado"}

// Sort and join
result := F.Pipe3(
  aWords,
  A.Sort(S.Ord),
  A.Intersperse(", "),
  A.Fold(S.Monoid),
)
// "apple, apricot, avocado"`})]}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsxs)(a.wn,{num:"10",title:"API Reference",children:[(0,r.jsx)(a.vr,{children:(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Instance"}),(0,r.jsx)(s.th,{children:"Type"}),(0,r.jsx)(s.th,{children:"Description"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"Eq"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"Eq[string]"})}),(0,r.jsx)(s.td,{children:"Equality comparison"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"Ord"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"Ord[string]"})}),(0,r.jsx)(s.td,{children:"Lexicographic ordering"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"Semigroup"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"Semigroup[string]"})}),(0,r.jsx)(s.td,{children:"Concatenation"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"Monoid"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"Monoid[string]"})}),(0,r.jsx)(s.td,{children:"Concatenation with empty identity"})]})]})]})}),(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Monoid Identity:"})}),(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"Monoid.Empty()"})," returns ",(0,r.jsx)(s.code,{children:'""'})," (empty string)"]}),"\n"]})]}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsxs)(a.wn,{num:"11",title:"Related Concepts",children:[(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Common Use Cases:"})}),(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Sorting string arrays"}),"\n",(0,r.jsx)(s.li,{children:"Joining strings with separators"}),"\n",(0,r.jsx)(s.li,{children:"Building formatted strings"}),"\n",(0,r.jsx)(s.li,{children:"String comparison and filtering"}),"\n"]}),(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"See Also:"})}),(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"/fp-go/docs/v2/utilities/number",children:"Number"})," - Numeric type class instances"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"/fp-go/docs/v2/utilities/eq",children:"Eq"})," - Equality type class"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"/fp-go/docs/v2/utilities/ord",children:"Ord"})," - Ordering type class"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"/fp-go/docs/v2/utilities/monoid",children:"Monoid"})," - Understanding monoid operations"]}),"\n"]})]}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(a.is,{prev:{to:"/docs/v2/utilities/number",title:"Number"},next:{to:"/docs/v2/utilities/tuple",title:"Tuple"}})]})}function p(e={}){let{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},5811(e,s,i){i.d(s,{Pq:()=>S,eM:()=>A,hg:()=>M,_1:()=>y,av:()=>N,Gs:()=>w,vr:()=>C,x7:()=>x,bY:()=>B,wn:()=>u,zY:()=>p,ju:()=>m,BQ:()=>j,is:()=>I});var n=i(4848),r=i(6540);let t="codeTag_uQ6s",a="warn_PIJZ",l="benchNum_PicT",c="api_M0YO",d="pagerLink_hQ8Y",o="pagerLbl_CteO",h="pagerTtl_t0em";function p({eyebrow:e,title:s,titleAccent:i,lede:r,meta:t}){return(0,n.jsxs)("header",{className:"head_Sp2B",children:[(0,n.jsxs)("div",{className:"headLeft_aDUD",children:[e&&(0,n.jsx)("div",{className:"eyebrow__SSv",children:e}),(0,n.jsxs)("h1",{className:"headTitle_xWjG",children:[s,i?(0,n.jsxs)(n.Fragment,{children:[" ",(0,n.jsx)("em",{children:i})]}):null]}),r&&(0,n.jsx)("p",{className:"lede_Ltdj",children:r})]}),t&&t.length>0&&(0,n.jsx)("aside",{className:"headMeta_kmCF",children:t.map((e,s)=>(0,n.jsxs)("div",{className:"metaRow_drwK",children:[(0,n.jsx)("span",{className:"metaK_SNLg",children:e.label}),(0,n.jsx)("span",{className:"metaV_zAp5",children:e.value})]},s))})]})}function x({children:e}){return(0,n.jsx)("span",{className:"pill_Lzl6",children:e})}function m({children:e}){return(0,n.jsx)("div",{className:"tldr_mz3p",children:e})}function j({label:e,value:s,accent:i,unit:r,description:t,variant:a="default",prose:l}){return(0,n.jsxs)("div",{className:`tldrCard_nSap ${"up"===a?"up_ip1p":"down"===a?"down_x6We":""}`,children:[e&&(0,n.jsx)("div",{className:"tldrK_kP7m",children:e}),(0,n.jsxs)("div",{className:`tldrV_gUPe ${l?"tldrVProse_sV_2":""}`,children:[s,i?(0,n.jsx)("em",{children:i}):null,r?(0,n.jsx)("small",{children:r}):null]}),t&&(0,n.jsx)("div",{className:"tldrD_kfCX",children:t})]})}function u({id:e,number:s,title:i,titleAccent:r,tag:t,lede:a,children:l}){return(0,n.jsxs)("section",{className:"section_B_ST",children:[(0,n.jsxs)("div",{className:"sectionHead_oGCN",children:[(0,n.jsxs)("div",{className:"sectionHeadLeft_bfh9",children:[s&&(0,n.jsx)("span",{className:"sectionNum_qiYt",children:s}),(0,n.jsxs)("h2",{className:"sectionTitle__6nw",id:e,children:[i,r?(0,n.jsxs)(n.Fragment,{children:[" ",(0,n.jsx)("em",{children:r})]}):null]})]}),t&&(0,n.jsx)("span",{className:"sectionTag_se22",children:t})]}),a&&(0,n.jsx)("p",{className:"sectionLede_yuVk",children:a}),l]})}let g=({size:e=14,className:s})=>(0,n.jsx)("svg",{width:e,height:e,viewBox:"0 0 32 32",fill:"currentColor",className:s,"aria-hidden":"true",children:(0,n.jsx)("path",{d:"M13 24l-9-9 1.4-1.4L13 21.2 26.6 7.6 28 9z"})}),f=({size:e=14,className:s})=>(0,n.jsx)("svg",{width:e,height:e,viewBox:"0 0 32 32",fill:"currentColor",className:s,"aria-hidden":"true",children:(0,n.jsx)("path",{d:"M28 10v18H10V10h18m0-2H10a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2z"})}),b=({size:e=12,className:s})=>(0,n.jsx)("svg",{width:e,height:e,viewBox:"0 0 32 32",fill:"currentColor",className:s,"aria-hidden":"true",children:(0,n.jsx)("path",{d:"M18 6L16.6 7.4 24.2 15H4v2h20.2l-7.6 7.6L18 26l10-10z"})}),v=({size:e=12,className:s})=>(0,n.jsx)("svg",{width:e,height:e,viewBox:"0 0 32 32",fill:"currentColor",className:s,"aria-hidden":"true",children:(0,n.jsx)("path",{d:"M14 26l1.4-1.4L7.8 17H28v-2H7.8l7.6-7.6L14 6 4 16z"})});function N({file:e,status:s,copy:i=!0,children:l}){let c=(0,r.useRef)(null),[d,o]=(0,r.useState)(!1);return(0,n.jsxs)("div",{className:"codeCard_fiIG",children:[(0,n.jsxs)("div",{className:"codeBar_SZ78",children:[(0,n.jsx)("span",{className:"codeDot_JDOV"}),e&&(0,n.jsx)("span",{className:"codeFile_uZDd",children:e}),(0,n.jsx)("span",{className:"codeSpacer_nRmZ"}),s?"tested"===s?(0,n.jsx)("span",{className:`${t} ok_rUJx`,children:"tested"}):"warn"===s?(0,n.jsx)("span",{className:`${t} ${a}`,children:"caveat"}):"note"===s?(0,n.jsx)("span",{className:t,children:"note"}):"string"==typeof s?(0,n.jsx)("span",{className:t,children:s}):s:null,i&&(0,n.jsx)("button",{type:"button",className:"codeCopy_fKPb",onClick:()=>{if(!c.current)return;let e=c.current.innerText;"u">typeof navigator&&navigator.clipboard&&navigator.clipboard.writeText(e).then(()=>{o(!0),setTimeout(()=>o(!1),1200)})},"aria-label":"Copy code",children:d?"Copied":(0,n.jsx)(f,{})})]}),(0,n.jsx)("pre",{ref:c,className:"codeBlock_oEWX",children:l})]})}let _={info:({size:e=18,className:s})=>(0,n.jsxs)("svg",{width:e,height:e,viewBox:"0 0 32 32",fill:"currentColor",className:s,"aria-hidden":"true",children:[(0,n.jsx)("path",{d:"M16 2A14 14 0 1 0 30 16 14 14 0 0 0 16 2zm0 26a12 12 0 1 1 12-12 12 12 0 0 1-12 12z"}),(0,n.jsx)("path",{d:"M16 14h-2v2h1v6h-1v2h4v-2h-1v-8zm-.5-5a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 15.5 9z"})]}),warn:({size:e=18,className:s})=>(0,n.jsxs)("svg",{width:e,height:e,viewBox:"0 0 32 32",fill:"currentColor",className:s,"aria-hidden":"true",children:[(0,n.jsx)("path",{d:"M16 23a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 16 23zM15 13h2v8h-2z"}),(0,n.jsx)("path",{d:"M28.7 26.31L17.36 4.27a1.51 1.51 0 0 0-2.72 0L3.3 26.31a1.5 1.5 0 0 0 1.36 2.19h22.69a1.5 1.5 0 0 0 1.35-2.19z"})]}),success:g};function S({type:e="info",title:s,children:i}){let r=_[e];return(0,n.jsxs)("div",{className:`callout_yWfv ${"warn"===e?a:"success"===e?"success_D78d":""}`,children:[(0,n.jsx)("span",{className:"calloutIcon_hdwU",children:(0,n.jsx)(r,{size:18})}),(0,n.jsxs)("div",{className:"calloutBody_Qz4I",children:[s&&(0,n.jsx)("strong",{className:"calloutTitle_MXy4",children:s}),i]})]})}function w({children:e}){return(0,n.jsx)("div",{className:"compare_WfXa",children:e})}function y({kind:e,title:s,pill:i,children:r}){return(0,n.jsxs)("div",{className:`compareCol_nZe9 ${"bad"===e?"bad_pZ5b":"good_EJeo"}`,children:[(0,n.jsxs)("div",{className:"compareHead_vAhW",children:[(0,n.jsx)("span",{children:s??("bad"===e?"Before":"After")}),i&&(0,n.jsx)("span",{className:"comparePill_fmmx",children:i})]}),(0,n.jsx)("div",{className:"compareBody_hP62",children:r})]})}function M({title:e,command:s,columns:i,rows:r}){let[t,a,c,d,o]=i??["Variant","Speed","ns/op","B/op","\u0394"];return(0,n.jsxs)("div",{className:"bench_zMa2",children:[(0,n.jsxs)("div",{className:"benchHead_q6K3",children:[(0,n.jsx)("span",{children:e}),s&&(0,n.jsxs)("span",{className:"benchCmd_iUFI",children:[(0,n.jsx)("span",{className:"benchPrompt_LRr4",children:"$"}),s]})]}),(0,n.jsxs)("table",{className:"benchTable_u8XZ",children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:t}),(0,n.jsx)("th",{style:{width:"40%"},children:a}),(0,n.jsx)("th",{className:l,children:c}),(0,n.jsx)("th",{className:l,children:d}),(0,n.jsx)("th",{className:l,children:o})]})}),(0,n.jsx)("tbody",{children:r.map((e,s)=>{let i="win"===e.barKind?"win_PjNM":"lose"===e.barKind?"lose_A9dr":"",r="good"===e.deltaKind?"deltaGood_dYlm":"bad"===e.deltaKind?"deltaBad_yHEA":l;return(0,n.jsxs)("tr",{className:e.winner?"benchWinner_jDc2":void 0,children:[(0,n.jsx)("td",{className:"benchLabel_uFhm",children:e.label}),(0,n.jsx)("td",{children:null!=e.bar&&(0,n.jsx)("span",{className:"bar_jZ6H",children:(0,n.jsx)("span",{className:"barTrack_lefl",children:(0,n.jsx)("span",{className:`barFill_bMgr ${i}`,style:{width:`${100*Math.max(0,Math.min(1,e.bar))}%`}})})})}),(0,n.jsx)("td",{className:l,children:e.nsOp}),(0,n.jsx)("td",{className:l,children:e.bOp}),(0,n.jsx)("td",{className:r,children:e.delta})]},s)})})]})]})}function C({columns:e,rows:s,children:i}){if(i)return(0,n.jsx)("div",{className:c,children:i});let[r,t,a]=e??["Symbol","Signature","Since"];return(0,n.jsx)("div",{className:c,children:(0,n.jsxs)("table",{className:"apiTable_kmi_",children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:r}),(0,n.jsx)("th",{children:t}),(0,n.jsx)("th",{children:a})]})}),(0,n.jsx)("tbody",{children:s?.map((e,s)=>(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:e.symbol})}),(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:e.signature}),e.description&&(0,n.jsx)("div",{className:"apiDesc__siK",children:e.description})]}),(0,n.jsx)("td",{children:e.since&&(0,n.jsx)("code",{children:e.since})})]},s))})]})})}function A({status:e,children:s}){return(0,n.jsx)(n.Fragment,{})}function B({title:e="Steps",items:s,children:i}){let t,a=(t=s||(i?r.Children.toArray(i).filter(e=>r.isValidElement(e)).map(e=>({label:e.props.children,impact:e.props.status,done:!1})):[])).filter(e=>e.done).length;return(0,n.jsxs)("div",{className:"check_Z_XE",children:[(0,n.jsxs)("div",{className:"checkHead__B8i",children:[(0,n.jsx)("span",{children:e}),s&&(0,n.jsxs)("span",{children:[a," / ",t.length," complete"]})]}),(0,n.jsx)("ul",{className:"checkList_ziWk",children:t.map((e,s)=>(0,n.jsxs)("li",{className:`checkItem_jgfw ${e.done?"done_rLON":""}`,children:[(0,n.jsx)("span",{className:"checkBox_TriO",children:e.done&&(0,n.jsx)(g,{size:10})}),(0,n.jsx)("span",{className:"checkLbl_IWQU",children:e.label}),e.impact&&(0,n.jsx)("span",{className:"checkImpact_BaeN",children:e.impact})]},s))})]})}var F=i(5310);function I({prev:e,next:s}){return(0,n.jsxs)("nav",{className:"pager_oMm2",children:[e?(0,n.jsxs)(F.A,{to:e.to,className:d,children:[(0,n.jsxs)("span",{className:o,children:[(0,n.jsx)(v,{})," ",e.label??"Previous"]}),(0,n.jsx)("span",{className:h,children:e.title})]}):(0,n.jsx)("span",{}),s?(0,n.jsxs)(F.A,{to:s.to,className:`${d} next_PLI2`,children:[(0,n.jsxs)("span",{className:o,children:[s.label??"Next"," ",(0,n.jsx)(b,{})]}),(0,n.jsx)("span",{className:h,children:s.title})]}):(0,n.jsx)("span",{})]})}},8453(e,s,i){i.d(s,{R:()=>a,x:()=>l});var n=i(6540);let r={},t=n.createContext(r);function a(e){let s=n.useContext(t);return n.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),n.createElement(t.Provider,{value:s},e.children)}}}]);
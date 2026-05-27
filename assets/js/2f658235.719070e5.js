"use strict";(self.webpackChunkfp_go_docs=self.webpackChunkfp_go_docs||[]).push([["5527"],{4213(e,s,a){a.r(s),a.d(s,{metadata:()=>i,default:()=>m,frontMatter:()=>l,contentTitle:()=>c,toc:()=>o,assets:()=>d});var i=JSON.parse('{"id":"v2/utilities/magma","title":"Magma","description":"Binary operations without constraints - the most basic algebraic structure.","source":"@site/docs/v2/utilities/magma.md","sourceDirName":"v2/utilities","slug":"/v2/utilities/magma","permalink":"/fp-go/docs/v2/utilities/magma","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":29,"frontMatter":{"title":"Magma","hide_title":true,"description":"Binary operations without constraints - the most basic algebraic structure.","sidebar_position":29},"sidebar":"apiSidebar","previous":{"title":"Monoid","permalink":"/fp-go/docs/v2/utilities/monoid"},"next":{"title":"Advanced Patterns","permalink":"/fp-go/docs/advanced/patterns"}}'),n=a(4848),t=a(8453),r=a(5811);let l={title:"Magma",hide_title:!0,description:"Binary operations without constraints - the most basic algebraic structure.",sidebar_position:29},c,d={},o=[{value:"Basic Usage",id:"basic-usage",level:3},{value:"Conflict Resolution Strategies",id:"conflict-resolution-strategies",level:3},{value:"Custom Merging",id:"custom-merging",level:3},{value:"Array Merging",id:"array-merging",level:3},{value:"Record Conversion",id:"record-conversion",level:3},{value:"Configuration Merging",id:"configuration-merging",level:3}];function h(e){let s={code:"code",h3:"h3",hr:"hr",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components},{Callout:a}=s;return a||function(e,s){throw Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Callout",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.zY,{eyebrow:"Reference \xb7 Utilities",title:"Magma",lede:"Binary operations without constraints. The most basic algebraic structure - just a way to combine two values.",meta:[{label:"Package",value:"github.com/IBM/fp-go/v2/magma"},{label:"Type Class",value:"Magma[A]"}]}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(r.wn,{num:"1",title:"Core API",children:(0,n.jsx)(r.vr,{children:(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Function"}),(0,n.jsx)(s.th,{children:"Signature"}),(0,n.jsx)(s.th,{children:"Description"})]})}),(0,n.jsx)(s.tbody,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"MakeMagma"})}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"func MakeMagma[A any](func(A, A) A) Magma[A]"})}),(0,n.jsx)(s.td,{children:"Create magma from function"})]})})]})})}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsxs)(r.wn,{num:"2",title:"Usage Examples",children:[(0,n.jsx)(s.h3,{id:"basic-usage",children:"Basic Usage"}),(0,n.jsx)(r.av,{file:"basic.go",children:`import Mg "github.com/IBM/fp-go/v2/magma"

// Create magma for averaging
avgMagma := Mg.MakeMagma(func(a, b float64) float64 {
  return (a + b) / 2
})

result := avgMagma.Concat(10, 20)
// 15.0
`}),(0,n.jsx)(s.h3,{id:"conflict-resolution-strategies",children:"Conflict Resolution Strategies"}),(0,n.jsx)(r.av,{file:"strategies.go",children:`// Last-wins strategy
lastWins := Mg.MakeMagma(func(a, b T) T {
  return b
})

// First-wins strategy
firstWins := Mg.MakeMagma(func(a, b T) T {
  return a
})

// Max strategy
maxMagma := Mg.MakeMagma(func(a, b int) int {
  if a > b { return a }
  return b
})

// Min strategy
minMagma := Mg.MakeMagma(func(a, b int) int {
  if a < b { return a }
  return b
})
`}),(0,n.jsx)(s.h3,{id:"custom-merging",children:"Custom Merging"}),(0,n.jsx)(r.av,{file:"merge.go",children:`type User struct {
  ID        int
  Name      string
  UpdatedAt time.Time
}

// Merge users (keep most recent)
userMagma := Mg.MakeMagma(func(a, b User) User {
  if a.UpdatedAt.After(b.UpdatedAt) {
      return a
  }
  return b
})

merged := userMagma.Concat(oldUser, newUser)
// Returns the user with the later UpdatedAt
`}),(0,n.jsx)(s.h3,{id:"array-merging",children:"Array Merging"}),(0,n.jsx)(r.av,{file:"arrays.go",children:`// Concatenate arrays
appendMagma := Mg.MakeMagma(func(a, b []int) []int {
  return append(a, b...)
})

result := appendMagma.Concat([]int{1, 2}, []int{3, 4})
// []int{1, 2, 3, 4}

// Union (deduplicate)
unionMagma := Mg.MakeMagma(func(a, b []int) []int {
  seen := make(map[int]bool)
  result := make([]int, 0)
  
  for _, v := range append(a, b...) {
      if !seen[v] {
          seen[v] = true
          result = append(result, v)
      }
  }
  return result
})
`}),(0,n.jsx)(s.h3,{id:"record-conversion",children:"Record Conversion"}),(0,n.jsx)(r.av,{file:"record.go",children:`import R "github.com/IBM/fp-go/v2/record"

// Use with FromArray for duplicate key handling
entries := []T.Tuple2[string, int]{
  T.MakeTuple2("a", 1),
  T.MakeTuple2("b", 2),
  T.MakeTuple2("a", 10),  // Duplicate
}

// Sum duplicates
sumMagma := Mg.MakeMagma(func(x, y int) int { return x + y })
m := R.FromArray(sumMagma)(entries)
// map[string]int{"a": 11, "b": 2}
`})]}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsxs)(r.wn,{num:"3",title:"Common Patterns",children:[(0,n.jsx)(s.h3,{id:"configuration-merging",children:"Configuration Merging"}),(0,n.jsx)(r.av,{file:"config.go",children:`type Config struct {
  Host    string
  Port    int
  Timeout int
}

// Merge configs (right wins for non-zero values)
configMagma := Mg.MakeMagma(func(a, b Config) Config {
  return Config{
      Host:    if b.Host != "" { b.Host } else { a.Host },
      Port:    if b.Port != 0 { b.Port } else { a.Port },
      Timeout: if b.Timeout != 0 { b.Timeout } else { a.Timeout },
  }
})
`})]}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(a,{type:"info",children:(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Magma vs Semigroup"}),": Magma doesn't require associativity. Use Magma when the order of operations matters (like averaging), and Semigroup when it doesn't (like addition)."]})}),"\n",(0,n.jsxs)(a,{type:"info",children:[(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Use Cases"}),": Magma is perfect for:"]}),(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"Conflict resolution strategies"}),"\n",(0,n.jsx)(s.li,{children:"Custom merge logic"}),"\n",(0,n.jsx)(s.li,{children:"Non-associative operations"}),"\n",(0,n.jsx)(s.li,{children:"Building blocks for more complex structures"}),"\n"]})]}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(r.is,{prev:{to:"/docs/v2/utilities/function",title:"Function Utilities"},next:{to:"/docs/v2/utilities/ord",title:"Ord (Ordering)"}}),"\n",(0,n.jsx)(s.hr,{})]})}function m(e={}){let{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},5811(e,s,a){a.d(s,{Pq:()=>N,eM:()=>T,hg:()=>k,_1:()=>w,av:()=>M,Gs:()=>y,vr:()=>C,x7:()=>u,bY:()=>B,wn:()=>j,zY:()=>m,ju:()=>x,BQ:()=>g,is:()=>P});var i=a(4848),n=a(6540);let t="codeTag_uQ6s",r="warn_PIJZ",l="benchNum_PicT",c="api_M0YO",d="pagerLink_hQ8Y",o="pagerLbl_CteO",h="pagerTtl_t0em";function m({eyebrow:e,title:s,titleAccent:a,lede:n,meta:t}){return(0,i.jsxs)("header",{className:"head_Sp2B",children:[(0,i.jsxs)("div",{className:"headLeft_aDUD",children:[e&&(0,i.jsx)("div",{className:"eyebrow__SSv",children:e}),(0,i.jsxs)("h1",{className:"headTitle_xWjG",children:[s,a?(0,i.jsxs)(i.Fragment,{children:[" ",(0,i.jsx)("em",{children:a})]}):null]}),n&&(0,i.jsx)("p",{className:"lede_Ltdj",children:n})]}),t&&t.length>0&&(0,i.jsx)("aside",{className:"headMeta_kmCF",children:t.map((e,s)=>(0,i.jsxs)("div",{className:"metaRow_drwK",children:[(0,i.jsx)("span",{className:"metaK_SNLg",children:e.label}),(0,i.jsx)("span",{className:"metaV_zAp5",children:e.value})]},s))})]})}function u({children:e}){return(0,i.jsx)("span",{className:"pill_Lzl6",children:e})}function x({children:e}){return(0,i.jsx)("div",{className:"tldr_mz3p",children:e})}function g({label:e,value:s,accent:a,unit:n,description:t,variant:r="default",prose:l}){return(0,i.jsxs)("div",{className:`tldrCard_nSap ${"up"===r?"up_ip1p":"down"===r?"down_x6We":""}`,children:[e&&(0,i.jsx)("div",{className:"tldrK_kP7m",children:e}),(0,i.jsxs)("div",{className:`tldrV_gUPe ${l?"tldrVProse_sV_2":""}`,children:[s,a?(0,i.jsx)("em",{children:a}):null,n?(0,i.jsx)("small",{children:n}):null]}),t&&(0,i.jsx)("div",{className:"tldrD_kfCX",children:t})]})}function j({id:e,number:s,title:a,titleAccent:n,tag:t,lede:r,children:l}){return(0,i.jsxs)("section",{className:"section_B_ST",children:[(0,i.jsxs)("div",{className:"sectionHead_oGCN",children:[(0,i.jsxs)("div",{className:"sectionHeadLeft_bfh9",children:[s&&(0,i.jsx)("span",{className:"sectionNum_qiYt",children:s}),(0,i.jsxs)("h2",{className:"sectionTitle__6nw",id:e,children:[a,n?(0,i.jsxs)(i.Fragment,{children:[" ",(0,i.jsx)("em",{children:n})]}):null]})]}),t&&(0,i.jsx)("span",{className:"sectionTag_se22",children:t})]}),r&&(0,i.jsx)("p",{className:"sectionLede_yuVk",children:r}),l]})}let p=({size:e=14,className:s})=>(0,i.jsx)("svg",{width:e,height:e,viewBox:"0 0 32 32",fill:"currentColor",className:s,"aria-hidden":"true",children:(0,i.jsx)("path",{d:"M13 24l-9-9 1.4-1.4L13 21.2 26.6 7.6 28 9z"})}),f=({size:e=14,className:s})=>(0,i.jsx)("svg",{width:e,height:e,viewBox:"0 0 32 32",fill:"currentColor",className:s,"aria-hidden":"true",children:(0,i.jsx)("path",{d:"M28 10v18H10V10h18m0-2H10a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2z"})}),v=({size:e=12,className:s})=>(0,i.jsx)("svg",{width:e,height:e,viewBox:"0 0 32 32",fill:"currentColor",className:s,"aria-hidden":"true",children:(0,i.jsx)("path",{d:"M18 6L16.6 7.4 24.2 15H4v2h20.2l-7.6 7.6L18 26l10-10z"})}),b=({size:e=12,className:s})=>(0,i.jsx)("svg",{width:e,height:e,viewBox:"0 0 32 32",fill:"currentColor",className:s,"aria-hidden":"true",children:(0,i.jsx)("path",{d:"M14 26l1.4-1.4L7.8 17H28v-2H7.8l7.6-7.6L14 6 4 16z"})});function M({file:e,status:s,copy:a=!0,children:l}){let c=(0,n.useRef)(null),[d,o]=(0,n.useState)(!1);return(0,i.jsxs)("div",{className:"codeCard_fiIG",children:[(0,i.jsxs)("div",{className:"codeBar_SZ78",children:[(0,i.jsx)("span",{className:"codeDot_JDOV"}),e&&(0,i.jsx)("span",{className:"codeFile_uZDd",children:e}),(0,i.jsx)("span",{className:"codeSpacer_nRmZ"}),s?"tested"===s?(0,i.jsx)("span",{className:`${t} ok_rUJx`,children:"tested"}):"warn"===s?(0,i.jsx)("span",{className:`${t} ${r}`,children:"caveat"}):"note"===s?(0,i.jsx)("span",{className:t,children:"note"}):"string"==typeof s?(0,i.jsx)("span",{className:t,children:s}):s:null,a&&(0,i.jsx)("button",{type:"button",className:"codeCopy_fKPb",onClick:()=>{if(!c.current)return;let e=c.current.innerText;"u">typeof navigator&&navigator.clipboard&&navigator.clipboard.writeText(e).then(()=>{o(!0),setTimeout(()=>o(!1),1200)})},"aria-label":"Copy code",children:d?"Copied":(0,i.jsx)(f,{})})]}),(0,i.jsx)("pre",{ref:c,className:"codeBlock_oEWX",children:l})]})}let _={info:({size:e=18,className:s})=>(0,i.jsxs)("svg",{width:e,height:e,viewBox:"0 0 32 32",fill:"currentColor",className:s,"aria-hidden":"true",children:[(0,i.jsx)("path",{d:"M16 2A14 14 0 1 0 30 16 14 14 0 0 0 16 2zm0 26a12 12 0 1 1 12-12 12 12 0 0 1-12 12z"}),(0,i.jsx)("path",{d:"M16 14h-2v2h1v6h-1v2h4v-2h-1v-8zm-.5-5a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 15.5 9z"})]}),warn:({size:e=18,className:s})=>(0,i.jsxs)("svg",{width:e,height:e,viewBox:"0 0 32 32",fill:"currentColor",className:s,"aria-hidden":"true",children:[(0,i.jsx)("path",{d:"M16 23a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 16 23zM15 13h2v8h-2z"}),(0,i.jsx)("path",{d:"M28.7 26.31L17.36 4.27a1.51 1.51 0 0 0-2.72 0L3.3 26.31a1.5 1.5 0 0 0 1.36 2.19h22.69a1.5 1.5 0 0 0 1.35-2.19z"})]}),success:p};function N({type:e="info",title:s,children:a}){let n=_[e];return(0,i.jsxs)("div",{className:`callout_yWfv ${"warn"===e?r:"success"===e?"success_D78d":""}`,children:[(0,i.jsx)("span",{className:"calloutIcon_hdwU",children:(0,i.jsx)(n,{size:18})}),(0,i.jsxs)("div",{className:"calloutBody_Qz4I",children:[s&&(0,i.jsx)("strong",{className:"calloutTitle_MXy4",children:s}),a]})]})}function y({children:e}){return(0,i.jsx)("div",{className:"compare_WfXa",children:e})}function w({kind:e,title:s,pill:a,children:n}){return(0,i.jsxs)("div",{className:`compareCol_nZe9 ${"bad"===e?"bad_pZ5b":"good_EJeo"}`,children:[(0,i.jsxs)("div",{className:"compareHead_vAhW",children:[(0,i.jsx)("span",{children:s??("bad"===e?"Before":"After")}),a&&(0,i.jsx)("span",{className:"comparePill_fmmx",children:a})]}),(0,i.jsx)("div",{className:"compareBody_hP62",children:n})]})}function k({title:e,command:s,columns:a,rows:n}){let[t,r,c,d,o]=a??["Variant","Speed","ns/op","B/op","\u0394"];return(0,i.jsxs)("div",{className:"bench_zMa2",children:[(0,i.jsxs)("div",{className:"benchHead_q6K3",children:[(0,i.jsx)("span",{children:e}),s&&(0,i.jsxs)("span",{className:"benchCmd_iUFI",children:[(0,i.jsx)("span",{className:"benchPrompt_LRr4",children:"$"}),s]})]}),(0,i.jsxs)("table",{className:"benchTable_u8XZ",children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:t}),(0,i.jsx)("th",{style:{width:"40%"},children:r}),(0,i.jsx)("th",{className:l,children:c}),(0,i.jsx)("th",{className:l,children:d}),(0,i.jsx)("th",{className:l,children:o})]})}),(0,i.jsx)("tbody",{children:n.map((e,s)=>{let a="win"===e.barKind?"win_PjNM":"lose"===e.barKind?"lose_A9dr":"",n="good"===e.deltaKind?"deltaGood_dYlm":"bad"===e.deltaKind?"deltaBad_yHEA":l;return(0,i.jsxs)("tr",{className:e.winner?"benchWinner_jDc2":void 0,children:[(0,i.jsx)("td",{className:"benchLabel_uFhm",children:e.label}),(0,i.jsx)("td",{children:null!=e.bar&&(0,i.jsx)("span",{className:"bar_jZ6H",children:(0,i.jsx)("span",{className:"barTrack_lefl",children:(0,i.jsx)("span",{className:`barFill_bMgr ${a}`,style:{width:`${100*Math.max(0,Math.min(1,e.bar))}%`}})})})}),(0,i.jsx)("td",{className:l,children:e.nsOp}),(0,i.jsx)("td",{className:l,children:e.bOp}),(0,i.jsx)("td",{className:n,children:e.delta})]},s)})})]})]})}function C({columns:e,rows:s,children:a}){if(a)return(0,i.jsx)("div",{className:c,children:a});let[n,t,r]=e??["Symbol","Signature","Since"];return(0,i.jsx)("div",{className:c,children:(0,i.jsxs)("table",{className:"apiTable_kmi_",children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:n}),(0,i.jsx)("th",{children:t}),(0,i.jsx)("th",{children:r})]})}),(0,i.jsx)("tbody",{children:s?.map((e,s)=>(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:e.symbol})}),(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:e.signature}),e.description&&(0,i.jsx)("div",{className:"apiDesc__siK",children:e.description})]}),(0,i.jsx)("td",{children:e.since&&(0,i.jsx)("code",{children:e.since})})]},s))})]})})}function T({status:e,children:s}){return(0,i.jsx)(i.Fragment,{})}function B({title:e="Steps",items:s,children:a}){let t,r=(t=s||(a?n.Children.toArray(a).filter(e=>n.isValidElement(e)).map(e=>({label:e.props.children,impact:e.props.status,done:!1})):[])).filter(e=>e.done).length;return(0,i.jsxs)("div",{className:"check_Z_XE",children:[(0,i.jsxs)("div",{className:"checkHead__B8i",children:[(0,i.jsx)("span",{children:e}),s&&(0,i.jsxs)("span",{children:[r," / ",t.length," complete"]})]}),(0,i.jsx)("ul",{className:"checkList_ziWk",children:t.map((e,s)=>(0,i.jsxs)("li",{className:`checkItem_jgfw ${e.done?"done_rLON":""}`,children:[(0,i.jsx)("span",{className:"checkBox_TriO",children:e.done&&(0,i.jsx)(p,{size:10})}),(0,i.jsx)("span",{className:"checkLbl_IWQU",children:e.label}),e.impact&&(0,i.jsx)("span",{className:"checkImpact_BaeN",children:e.impact})]},s))})]})}var A=a(5310);function P({prev:e,next:s}){return(0,i.jsxs)("nav",{className:"pager_oMm2",children:[e?(0,i.jsxs)(A.A,{to:e.to,className:d,children:[(0,i.jsxs)("span",{className:o,children:[(0,i.jsx)(b,{})," ",e.label??"Previous"]}),(0,i.jsx)("span",{className:h,children:e.title})]}):(0,i.jsx)("span",{}),s?(0,i.jsxs)(A.A,{to:s.to,className:`${d} next_PLI2`,children:[(0,i.jsxs)("span",{className:o,children:[s.label??"Next"," ",(0,i.jsx)(v,{})]}),(0,i.jsx)("span",{className:h,children:s.title})]}):(0,i.jsx)("span",{})]})}},8453(e,s,a){a.d(s,{R:()=>r,x:()=>l});var i=a(6540);let n={},t=i.createContext(n);function r(e){let s=i.useContext(t);return i.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),i.createElement(t.Provider,{value:s},e.children)}}}]);
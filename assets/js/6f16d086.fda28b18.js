"use strict";(self.webpackChunkfp_go_docs=self.webpackChunkfp_go_docs||[]).push([["7617"],{448(e,t,n){n.r(t),n.d(t,{metadata:()=>i,default:()=>d,frontMatter:()=>l,contentTitle:()=>o,toc:()=>c,assets:()=>s});var i=JSON.parse('{"id":"v2/collections/array-ap","title":"Array - Applicative","description":"Applicative operations for arrays - apply arrays of functions to arrays of values.","source":"@site/docs/v2/collections/array-ap.md","sourceDirName":"v2/collections","slug":"/v2/collections/array-ap","permalink":"/fp-go/docs/v2/collections/array-ap","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":9,"frontMatter":{"title":"Array - Applicative","hide_title":true,"description":"Applicative operations for arrays - apply arrays of functions to arrays of values.","sidebar_position":9},"sidebar":"apiSidebar","previous":{"title":"Array","permalink":"/fp-go/docs/v2/collections/array"},"next":{"title":"Array - Equality","permalink":"/fp-go/docs/v2/collections/array-eq"}}'),r=n(4848),a=n(8453);let l={title:"Array - Applicative",hide_title:!0,description:"Applicative operations for arrays - apply arrays of functions to arrays of values.",sidebar_position:9},o,s={},c=[{value:"Ap - Apply Functions",id:"ap---apply-functions",level:3},{value:"Flap - Apply Value",id:"flap---apply-value",level:3},{value:"Validation Example",id:"validation-example",level:3}];function p(e){let t={code:"code",h3:"h3",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components},{ApiTable:n,CodeCard:i,PageHeader:l,Section:o}=t;return n||u("ApiTable",!0),i||u("CodeCard",!0),l||u("PageHeader",!0),o||u("Section",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l,{eyebrow:"Reference \xb7 Collections",title:"Array",titleAccent:"Applicative",lede:"Applicative operations for arrays. Apply arrays of functions to arrays of values, producing all combinations.",meta:[{label:"Package",value:"github.com/IBM/fp-go/v2/array"},{label:"Operations",value:"Ap, Flap"}]}),"\n",(0,r.jsx)(o,{id:"api",number:"01",title:"Core",titleAccent:"API",children:(0,r.jsx)(n,{children:(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Function"}),(0,r.jsx)(t.th,{children:"Signature"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"Ap"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"func Ap[A, B any](fns []func(A) B) func([]A) []B"})}),(0,r.jsx)(t.td,{children:"Apply functions to values"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"Flap"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"func Flap[A, B any](value A) func([]func(A) B) []B"})}),(0,r.jsx)(t.td,{children:"Apply value to functions"})]})]})]})})}),"\n",(0,r.jsxs)(o,{id:"examples",number:"02",title:"Usage",titleAccent:"Examples",children:[(0,r.jsx)(t.h3,{id:"ap---apply-functions",children:"Ap - Apply Functions"}),(0,r.jsx)(i,{file:"ap.go",children:`import (
  A "github.com/IBM/fp-go/v2/array"
  F "github.com/IBM/fp-go/v2/function"
)

// Array of functions
fns := []func(int) int{
  func(n int) int { return n * 2 },
  func(n int) int { return n + 10 },
}

// Array of values
values := []int{1, 2, 3}

// Apply all functions to all values
result := F.Pipe2(
  values,
  A.Ap(fns),
)
// []int{2, 4, 6, 11, 12, 13}
// (1*2, 2*2, 3*2, 1+10, 2+10, 3+10)
`}),(0,r.jsx)(t.h3,{id:"flap---apply-value",children:"Flap - Apply Value"}),(0,r.jsx)(i,{file:"flap.go",children:`fns := []func(int) string{
  func(n int) string { return fmt.Sprintf("Double: %d", n*2) },
  func(n int) string { return fmt.Sprintf("Square: %d", n*n) },
}

result := F.Pipe2(
  fns,
  A.Flap(5),
)
// []string{"Double: 10", "Square: 25"}
`}),(0,r.jsx)(t.h3,{id:"validation-example",children:"Validation Example"}),(0,r.jsx)(i,{file:"validation.go",children:`type Validator func(string) bool

validators := []Validator{
  func(s string) bool { return len(s) > 5 },
  func(s string) bool { return strings.Contains(s, "@") },
}

inputs := []string{"test", "user@example.com", "admin"}

// Apply all validators to all inputs
results := F.Pipe2(
  inputs,
  A.Ap(validators),
)
// []bool{false, true, false, false, true, false}
`})]})]})}function d(e={}){let{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}function u(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},8453(e,t,n){n.d(t,{R:()=>l,x:()=>o});var i=n(6540);let r={},a=i.createContext(r);function l(e){let t=i.useContext(a);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);
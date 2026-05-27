"use strict";(self.webpackChunkfp_go_docs=self.webpackChunkfp_go_docs||[]).push([["4168"],{2678(o,e,t){t.r(e),t.d(e,{metadata:()=>n,default:()=>u,frontMatter:()=>l,contentTitle:()=>a,toc:()=>s,assets:()=>d});var n=JSON.parse('{"id":"v2/collections/array-monoid","title":"Array - Monoid","description":"Combining arrays using monoid operations - Fold, FoldMap, ConcatAll.","source":"@site/docs/v2/collections/array-monoid.md","sourceDirName":"v2/collections","slug":"/v2/collections/array-monoid","permalink":"/fp-go/docs/v2/collections/array-monoid","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"title":"Array - Monoid","hide_title":true,"description":"Combining arrays using monoid operations - Fold, FoldMap, ConcatAll.","sidebar_position":6},"sidebar":"apiSidebar","previous":{"title":"Array - Find","permalink":"/fp-go/docs/v2/collections/array-find"},"next":{"title":"Array - Sort","permalink":"/fp-go/docs/v2/collections/array-sort"}}'),i=t(4848),r=t(8453);let l={title:"Array - Monoid",hide_title:!0,description:"Combining arrays using monoid operations - Fold, FoldMap, ConcatAll.",sidebar_position:6},a,d={},s=[{value:"Fold",id:"fold",level:3},{value:"FoldMap",id:"foldmap",level:3},{value:"ConcatAll",id:"concatall",level:3},{value:"Aggregating Data",id:"aggregating-data",level:3},{value:"Custom Monoid",id:"custom-monoid",level:3}];function c(o){let e={code:"code",h3:"h3",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...o.components},{ApiTable:t,CodeCard:n,PageHeader:l,Section:a}=e;return t||p("ApiTable",!0),n||p("CodeCard",!0),l||p("PageHeader",!0),a||p("Section",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(l,{eyebrow:"Reference \xb7 Collections",title:"Array",titleAccent:"Monoid",lede:"Combining arrays using monoid operations. Arrays form a monoid under concatenation, enabling powerful composition patterns.",meta:[{label:"Package",value:"github.com/IBM/fp-go/v2/array"},{label:"Type Class",value:"Monoid"}]}),"\n",(0,i.jsx)(a,{id:"api",number:"01",title:"Core",titleAccent:"API",children:(0,i.jsx)(t,{children:(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:"Function"}),(0,i.jsx)(e.th,{children:"Signature"}),(0,i.jsx)(e.th,{children:"Description"})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:(0,i.jsx)(e.code,{children:"Fold"})}),(0,i.jsx)(e.td,{children:(0,i.jsx)(e.code,{children:"func Fold[A any](m Monoid[A]) func([]A) A"})}),(0,i.jsx)(e.td,{children:"Fold array using monoid"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:(0,i.jsx)(e.code,{children:"FoldMap"})}),(0,i.jsx)(e.td,{children:(0,i.jsx)(e.code,{children:"func FoldMap[A, B any](m Monoid[B]) func(func(A) B) func([]A) B"})}),(0,i.jsx)(e.td,{children:"Map then fold"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:(0,i.jsx)(e.code,{children:"ConcatAll"})}),(0,i.jsx)(e.td,{children:(0,i.jsx)(e.code,{children:"func ConcatAll[A any](m Monoid[[]A]) func([][]A) []A"})}),(0,i.jsx)(e.td,{children:"Concatenate all elements"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:(0,i.jsx)(e.code,{children:"Monoid"})}),(0,i.jsx)(e.td,{children:(0,i.jsx)(e.code,{children:"func Monoid[A any]() Monoid[[]A]"})}),(0,i.jsx)(e.td,{children:"Array monoid instance"})]})]})]})})}),"\n",(0,i.jsxs)(a,{id:"examples",number:"02",title:"Usage",titleAccent:"Examples",children:[(0,i.jsx)(e.h3,{id:"fold",children:"Fold"}),(0,i.jsx)(n,{file:"fold.go",children:`import (
  A "github.com/IBM/fp-go/v2/array"
  F "github.com/IBM/fp-go/v2/function"
  M "github.com/IBM/fp-go/v2/monoid"
  N "github.com/IBM/fp-go/v2/number"
  S "github.com/IBM/fp-go/v2/string"
)

// Sum numbers
numbers := []int{1, 2, 3, 4, 5}
sum := F.Pipe2(
  numbers,
  A.Fold(N.MonoidSum),
)
// 15

// Concatenate strings
words := []string{"Hello", " ", "World"}
result := F.Pipe2(
  words,
  A.Fold(S.Monoid),
)
// "Hello World"
`}),(0,i.jsx)(e.h3,{id:"foldmap",children:"FoldMap"}),(0,i.jsx)(n,{file:"foldmap.go",children:`type Product struct {
  Name  string
  Price float64
}

products := []Product{
  {Name: "Laptop", Price: 999},
  {Name: "Mouse", Price: 29},
  {Name: "Keyboard", Price: 79},
}

// Calculate total price
total := F.Pipe2(
  products,
  A.FoldMap(M.MonoidSum[float64]())(func(p Product) float64 {
      return p.Price
  }),
)
// 1107.0
`}),(0,i.jsx)(e.h3,{id:"concatall",children:"ConcatAll"}),(0,i.jsx)(n,{file:"concat.go",children:`// Flatten nested arrays
nested := [][]int{{1, 2}, {3, 4}, {5}}
flat := A.ConcatAll(A.Monoid[int]())(nested)
// []int{1, 2, 3, 4, 5}
`}),(0,i.jsx)(e.h3,{id:"aggregating-data",children:"Aggregating Data"}),(0,i.jsx)(n,{file:"aggregate.go",children:`type Sale struct {
  Amount   float64
  Quantity int
}

sales := []Sale{
  {Amount: 100, Quantity: 2},
  {Amount: 200, Quantity: 1},
  {Amount: 50, Quantity: 5},
}

totalAmount := F.Pipe2(
  sales,
  A.FoldMap(M.MonoidSum[float64]())(func(s Sale) float64 {
      return s.Amount
  }),
)
// 350.0

totalQuantity := F.Pipe2(
  sales,
  A.FoldMap(M.MonoidSum[int]())(func(s Sale) int {
      return s.Quantity
  }),
)
// 8
`}),(0,i.jsx)(e.h3,{id:"custom-monoid",children:"Custom Monoid"}),(0,i.jsx)(n,{file:"custom.go",children:`type ValidationResult struct {
  Errors []string
  Valid  bool
}

// Monoid for validation results
validationMonoid := M.MakeMonoid(
  func(a, b ValidationResult) ValidationResult {
      return ValidationResult{
          Errors: append(a.Errors, b.Errors...),
          Valid:  a.Valid && b.Valid,
      }
  },
  ValidationResult{Errors: []string{}, Valid: true},
)

results := []ValidationResult{
  {Errors: []string{}, Valid: true},
  {Errors: []string{"Invalid email"}, Valid: false},
  {Errors: []string{"Password too short"}, Valid: false},
}

combined := F.Pipe2(
  results,
  A.Fold(validationMonoid),
)
// ValidationResult{
//   Errors: []string{"Invalid email", "Password too short"},
//   Valid: false,
// }
`})]})]})}function u(o={}){let{wrapper:e}={...(0,r.R)(),...o.components};return e?(0,i.jsx)(e,{...o,children:(0,i.jsx)(c,{...o})}):c(o)}function p(o,e){throw Error("Expected "+(e?"component":"object")+" `"+o+"` to be defined: you likely forgot to import, pass, or provide it.")}},8453(o,e,t){t.d(e,{R:()=>l,x:()=>a});var n=t(6540);let i={},r=n.createContext(i);function l(o){let e=n.useContext(r);return n.useMemo(function(){return"function"==typeof o?o(e):{...e,...o}},[e,o])}function a(o){let e;return e=o.disableParentContext?"function"==typeof o.components?o.components(i):o.components||i:l(o.components),n.createElement(r.Provider,{value:e},o.children)}}}]);
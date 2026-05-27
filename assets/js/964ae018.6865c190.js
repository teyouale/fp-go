"use strict";(self.webpackChunkfp_go_docs=self.webpackChunkfp_go_docs||[]).push([["2016"],{2e3(e,r,i){i.r(r),i.d(r,{metadata:()=>n,default:()=>a,frontMatter:()=>d,contentTitle:()=>l,toc:()=>o,assets:()=>c});var n=JSON.parse('{"id":"api-reference","title":"API Reference","description":"Complete API reference for fp-go v2 - core types, collections, utilities, and advanced patterns.","source":"@site/docs/api-reference.md","sourceDirName":".","slug":"/api-reference","permalink":"/fp-go/docs/api-reference","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"API Reference","hide_title":true,"description":"Complete API reference for fp-go v2 - core types, collections, utilities, and advanced patterns.","sidebar_position":1},"sidebar":"apiSidebar","next":{"title":"Either","permalink":"/fp-go/docs/v2/either"}}'),t=i(4848),s=i(8453);let d={title:"API Reference",hide_title:!0,description:"Complete API reference for fp-go v2 - core types, collections, utilities, and advanced patterns.",sidebar_position:1},l,c={},o=[{value:"Essential Types",id:"essential-types",level:3},{value:"Reader Types",id:"reader-types",level:3},{value:"State &amp; Advanced Types",id:"state--advanced-types",level:3},{value:"Array Operations",id:"array-operations",level:3},{value:"Record Operations",id:"record-operations",level:3},{value:"Composition &amp; Flow",id:"composition--flow",level:3},{value:"Currying &amp; Binding",id:"currying--binding",level:3},{value:"Type Classes",id:"type-classes",level:3},{value:"Primitive Utilities",id:"primitive-utilities",level:3},{value:"Error Handling",id:"error-handling",level:3},{value:"Side Effects",id:"side-effects",level:3},{value:"Dependency Injection",id:"dependency-injection",level:3},{value:"Getting Started",id:"getting-started",level:3},{value:"Learning Resources",id:"learning-resources",level:3},{value:"Advanced Topics",id:"advanced-topics",level:3},{value:"Legacy Version",id:"legacy-version",level:3}];function h(e){let r={a:"a",code:"code",h3:"h3",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components},{ApiTable:i,CodeCard:n,Compare:d,CompareCol:l,PageHeader:c,Section:o}=r;return i||x("ApiTable",!0),n||x("CodeCard",!0),d||x("Compare",!0),l||x("CompareCol",!0),c||x("PageHeader",!0),o||x("Section",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(c,{eyebrow:"Reference",title:"API",titleAccent:"Reference",lede:"Complete API reference for fp-go v2 covering core types, collections, function utilities, and advanced patterns.",meta:[{label:"Version",value:"v2.x"},{label:"Modules",value:"54+"}]}),"\n",(0,t.jsxs)(o,{id:"core-types",number:"01",title:"Core",titleAccent:"Types",children:[(0,t.jsx)(r.p,{children:"The fundamental building blocks for functional programming in Go."}),(0,t.jsx)(r.h3,{id:"essential-types",children:"Essential Types"}),(0,t.jsx)(i,{children:(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Symbol"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.a,{href:"./option",children:"Option"})})}),(0,t.jsx)(r.td,{children:"Represent optional values without null pointers"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.a,{href:"./v2/result",children:"Result"})})}),(0,t.jsx)(r.td,{children:"Type-safe error handling with Ok/Err variants"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.a,{href:"./v2/either",children:"Either"})})}),(0,t.jsx)(r.td,{children:"Represent a value of one of two possible types (Left/Right)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.a,{href:"./v2/io",children:"IO"})})}),(0,t.jsx)(r.td,{children:"Lazy side effects that execute when called"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.a,{href:"./v2/ioresult",children:"IOResult"})})}),(0,t.jsx)(r.td,{children:"Combine IO with Result for effectful error handling"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.a,{href:"./v2/ioeither",children:"IOEither"})})}),(0,t.jsx)(r.td,{children:"Combine IO with Either for lazy error handling"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.a,{href:"./v2/iooption",children:"IOOption"})})}),(0,t.jsx)(r.td,{children:"Combine IO with Option for optional effects"})]})]})]})}),(0,t.jsx)(r.h3,{id:"reader-types",children:"Reader Types"}),(0,t.jsx)(r.p,{children:"Dependency injection and environment management:"}),(0,t.jsx)(i,{children:(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Symbol"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.a,{href:"./v2/reader",children:"Reader"})})}),(0,t.jsx)(r.td,{children:"Computations that depend on a shared environment"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.a,{href:"./v2/readereither",children:"ReaderEither"})})}),(0,t.jsx)(r.td,{children:"Reader with Either for error handling"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.a,{href:"./v2/readerio",children:"ReaderIO"})})}),(0,t.jsx)(r.td,{children:"Reader with IO for side effects"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.a,{href:"./v2/readerioeither",children:"ReaderIOEither"})})}),(0,t.jsx)(r.td,{children:"Reader with IO and Either (most powerful combination)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.a,{href:"./v2/readerioresult",children:"ReaderIOResult"})})}),(0,t.jsx)(r.td,{children:"Reader with IO and Result"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.a,{href:"./v2/readeroption",children:"ReaderOption"})})}),(0,t.jsx)(r.td,{children:"Reader with Option for optional dependencies"})]})]})]})}),(0,t.jsx)(r.h3,{id:"state--advanced-types",children:"State & Advanced Types"}),(0,t.jsx)(r.p,{children:"Stateful computations and advanced patterns:"}),(0,t.jsx)(i,{children:(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Symbol"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.a,{href:"./v2/state",children:"State"})})}),(0,t.jsx)(r.td,{children:"Stateful computations with get/put operations"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.a,{href:"./v2/statereaderioeither",children:"StateReaderIOEither"})})}),(0,t.jsx)(r.td,{children:"State with Reader, IO, and Either (ultimate monad stack)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.a,{href:"./v2/lazy",children:"Lazy"})})}),(0,t.jsx)(r.td,{children:"Lazy evaluation with memoization"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.a,{href:"./v2/identity",children:"Identity"})})}),(0,t.jsx)(r.td,{children:"Simplest monad wrapper"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.a,{href:"./v2/constant",children:"Constant"})})}),(0,t.jsx)(r.td,{children:"Constant functor"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.a,{href:"./v2/endomorphism",children:"Endomorphism"})})}),(0,t.jsx)(r.td,{children:"Functions from type to itself"})]})]})]})}),(0,t.jsx)(n,{file:"core_example.go",children:`package main

import (
  "fmt"
  O "github.com/IBM/fp-go/option"
  E "github.com/IBM/fp-go/either"
  R "github.com/IBM/fp-go/result"
)

func main() {
  // Option for optional values
  opt := O.Some(42)
  fmt.Println(O.IsSome(opt)) // true
  
  // Either for errors
  either := E.Right[error](42)
  fmt.Println(E.IsRight(either)) // true
  
  // Result for Ok/Err
  result := R.Ok[error](42)
  fmt.Println(R.IsOk(result)) // true
}
`})]}),"\n",(0,t.jsxs)(o,{id:"collections",number:"02",title:"Collections",titleAccent:"& Arrays",children:[(0,t.jsx)(r.p,{children:"Functional operations on slices and maps."}),(0,t.jsx)(r.h3,{id:"array-operations",children:"Array Operations"}),(0,t.jsx)(i,{children:(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Symbol"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.a,{href:"./v2/collections/array",children:"Array"})})}),(0,t.jsx)(r.td,{children:"Core array operations (Map, Filter, Reduce)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.a,{href:"./v2/collections/array-ap",children:"Array.Ap"})})}),(0,t.jsx)(r.td,{children:"Applicative operations for arrays"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.a,{href:"./v2/collections/array-eq",children:"Array.Eq"})})}),(0,t.jsx)(r.td,{children:"Equality checking for arrays"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.a,{href:"./v2/collections/array-find",children:"Array.Find"})})}),(0,t.jsx)(r.td,{children:"Search and lookup operations"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.a,{href:"./v2/collections/array-monoid",children:"Array.Monoid"})})}),(0,t.jsx)(r.td,{children:"Monoid instance for arrays"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.a,{href:"./v2/collections/array-sort",children:"Array.Sort"})})}),(0,t.jsx)(r.td,{children:"Sorting with custom comparators"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.a,{href:"./v2/collections/array-uniq",children:"Array.Uniq"})})}),(0,t.jsx)(r.td,{children:"Remove duplicates"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.a,{href:"./v2/collections/array-zip",children:"Array.Zip"})})}),(0,t.jsx)(r.td,{children:"Combine multiple arrays"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.a,{href:"./v2/collections/nonempty-array",children:"NonEmptyArray"})})}),(0,t.jsx)(r.td,{children:"Arrays guaranteed to have at least one element"})]})]})]})}),(0,t.jsx)(r.h3,{id:"record-operations",children:"Record Operations"}),(0,t.jsx)(i,{children:(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Symbol"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.a,{href:"./v2/collections/record",children:"Record"})})}),(0,t.jsx)(r.td,{children:"Core map operations (Map, Filter, Keys, Values)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.a,{href:"./v2/collections/record-ap",children:"Record.Ap"})})}),(0,t.jsx)(r.td,{children:"Applicative operations for records"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.a,{href:"./v2/collections/record-chain",children:"Record.Chain"})})}),(0,t.jsx)(r.td,{children:"Monadic chaining for records"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.a,{href:"./v2/collections/record-conversion",children:"Record.Conversion"})})}),(0,t.jsx)(r.td,{children:"Convert between records and arrays"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.a,{href:"./v2/collections/record-eq",children:"Record.Eq"})})}),(0,t.jsx)(r.td,{children:"Equality checking for records"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.a,{href:"./v2/collections/record-monoid",children:"Record.Monoid"})})}),(0,t.jsx)(r.td,{children:"Monoid instance for records"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.a,{href:"./v2/collections/record-ord",children:"Record.Ord"})})}),(0,t.jsx)(r.td,{children:"Ordering for records"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.a,{href:"./v2/collections/record-traverse",children:"Record.Traverse"})})}),(0,t.jsx)(r.td,{children:"Traverse records with effects"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.a,{href:"./v2/collections/sequence-traverse",children:"Sequence.Traverse"})})}),(0,t.jsx)(r.td,{children:"Generic sequence traversal"})]})]})]})}),(0,t.jsx)(n,{file:"collections_example.go",children:`package main

import (
  "fmt"
  A "github.com/IBM/fp-go/array"
  R "github.com/IBM/fp-go/record"
)

func main() {
  // Array operations
  numbers := []int{1, 2, 3, 4, 5}
  doubled := A.Map(func(n int) int { return n * 2 })(numbers)
  fmt.Println(doubled) // [2 4 6 8 10]
  
  // Record operations
  ages := map[string]int{"Alice": 30, "Bob": 25}
  names := R.Keys(ages)
  fmt.Println(names) // [Alice Bob]
}
`})]}),"\n",(0,t.jsxs)(o,{id:"utilities",number:"03",title:"Function",titleAccent:"Utilities",children:[(0,t.jsx)(r.p,{children:"Core function manipulation and composition utilities."}),(0,t.jsx)(r.h3,{id:"composition--flow",children:"Composition & Flow"}),(0,t.jsx)(i,{children:(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Symbol"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.a,{href:"./v2/utilities/pipe-flow",children:"Pipe & Flow"})})}),(0,t.jsx)(r.td,{children:"Left-to-right function composition"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.a,{href:"./v2/utilities/compose",children:"Compose"})})}),(0,t.jsx)(r.td,{children:"Right-to-left function composition"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.a,{href:"./v2/utilities/function",children:"Function"})})}),(0,t.jsx)(r.td,{children:"Core function utilities (Identity, Constant, Flip)"})]})]})]})}),(0,t.jsx)(r.h3,{id:"currying--binding",children:"Currying & Binding"}),(0,t.jsx)(i,{children:(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Symbol"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsx)(r.tbody,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.a,{href:"./v2/utilities/bind-curry",children:"Bind & Curry"})})}),(0,t.jsx)(r.td,{children:"Currying and partial application"})]})})]})}),(0,t.jsx)(r.h3,{id:"type-classes",children:"Type Classes"}),(0,t.jsx)(i,{children:(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Symbol"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.a,{href:"./v2/utilities/eq",children:"Eq"})})}),(0,t.jsx)(r.td,{children:"Equality type class"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.a,{href:"./v2/utilities/ord",children:"Ord"})})}),(0,t.jsx)(r.td,{children:"Ordering type class"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.a,{href:"./v2/utilities/semigroup",children:"Semigroup"})})}),(0,t.jsx)(r.td,{children:"Associative binary operation"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.a,{href:"./v2/utilities/monoid",children:"Monoid"})})}),(0,t.jsx)(r.td,{children:"Semigroup with identity element"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.a,{href:"./v2/utilities/magma",children:"Magma"})})}),(0,t.jsx)(r.td,{children:"Binary operation without laws"})]})]})]})}),(0,t.jsx)(r.h3,{id:"primitive-utilities",children:"Primitive Utilities"}),(0,t.jsx)(i,{children:(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Symbol"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.a,{href:"./v2/utilities/boolean",children:"Boolean"})})}),(0,t.jsx)(r.td,{children:"Boolean operations and combinators"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.a,{href:"./v2/utilities/number",children:"Number"})})}),(0,t.jsx)(r.td,{children:"Numeric operations and instances"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.a,{href:"./v2/utilities/string",children:"String"})})}),(0,t.jsx)(r.td,{children:"String operations and instances"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.a,{href:"./v2/utilities/predicate",children:"Predicate"})})}),(0,t.jsx)(r.td,{children:"Predicate combinators (And, Or, Not)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.a,{href:"./v2/utilities/tuple",children:"Tuple"})})}),(0,t.jsx)(r.td,{children:"Tuple operations and utilities"})]})]})]})}),(0,t.jsx)(n,{file:"utilities_example.go",children:`package main

import (
  "fmt"
  F "github.com/IBM/fp-go/function"
)

func main() {
  // Pipe: left-to-right composition
  add10 := func(n int) int { return n + 10 }
  double := func(n int) int { return n * 2 }
  
  result := F.Pipe2(
      5,
      add10,   // 5 + 10 = 15
      double,  // 15 * 2 = 30
  )
  fmt.Println(result) // 30
}
`})]}),"\n",(0,t.jsxs)(o,{id:"type-hierarchy",number:"04",title:"Type",titleAccent:"Hierarchy",children:[(0,t.jsx)(r.p,{children:"Understanding the relationships between types:"}),(0,t.jsx)(n,{file:"hierarchy.txt",children:`Functor
\u{251C}\u{2500} Applicative
\u{2502}   \u{2514}\u{2500} Monad
\u{2502}       \u{251C}\u{2500} Option
\u{2502}       \u{251C}\u{2500} Either
\u{2502}       \u{251C}\u{2500} Result
\u{2502}       \u{251C}\u{2500} IO
\u{2502}       \u{251C}\u{2500} IOEither
\u{2502}       \u{251C}\u{2500} IOResult
\u{2502}       \u{251C}\u{2500} IOOption
\u{2502}       \u{251C}\u{2500} Reader
\u{2502}       \u{251C}\u{2500} ReaderEither
\u{2502}       \u{251C}\u{2500} ReaderIO
\u{2502}       \u{251C}\u{2500} ReaderIOEither
\u{2502}       \u{251C}\u{2500} ReaderIOResult
\u{2502}       \u{251C}\u{2500} ReaderOption
\u{2502}       \u{251C}\u{2500} State
\u{2502}       \u{2514}\u{2500} StateReaderIOEither
\u{2514}\u{2500} Array
`}),(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Key Concepts:"})}),(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.strong,{children:"Functor"})," - Types that can be mapped over (",(0,t.jsx)(r.code,{children:"Map"}),")"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.strong,{children:"Applicative"})," - Functors with ",(0,t.jsx)(r.code,{children:"Of"})," (pure) and ",(0,t.jsx)(r.code,{children:"Ap"})," (apply)"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.strong,{children:"Monad"})," - Applicatives with ",(0,t.jsx)(r.code,{children:"Chain"})," (flatMap/bind)"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.strong,{children:"Array"})," - Functor but not a monad (multiple values)"]}),"\n"]})]}),"\n",(0,t.jsxs)(o,{id:"common-patterns",number:"05",title:"Common",titleAccent:"Patterns",children:[(0,t.jsx)(r.p,{children:"Frequently used patterns and idioms."}),(0,t.jsx)(r.h3,{id:"error-handling",children:"Error Handling"}),(0,t.jsxs)(d,{children:[(0,t.jsx)(l,{kind:"bad",children:(0,t.jsx)(n,{file:"traditional.go",children:`// \u{274C} Traditional Go error handling
func getUser(id string) (*User, error) {
  user, err := db.FindUser(id)
  if err != nil {
      return nil, err
  }
  return user, nil
}
`})}),(0,t.jsx)(l,{kind:"good",children:(0,t.jsx)(n,{file:"functional.go",children:`// \u{2705} Functional error handling
func getUser(id string) either.Either[error, User] {
  return db.FindUser(id)
}

// Chain operations
result := pipe.Pipe2(
  getUser("123"),
  E.Chain(validateUser),
  E.Map(enrichUser),
)
`})})]}),(0,t.jsx)(r.h3,{id:"side-effects",children:"Side Effects"}),(0,t.jsx)(n,{file:"effects.go",children:`// IO for lazy effects
io := IO.Of(func() int {
  fmt.Println("Computing...")
  return 42
})

// Execute when ready
result := io() // Prints "Computing..." and returns 42

// IOEither for effects with errors
ioe := IOE.TryCatch(func() (int, error) {
  return readFile("config.json")
})
`}),(0,t.jsx)(r.h3,{id:"dependency-injection",children:"Dependency Injection"}),(0,t.jsx)(n,{file:"reader.go",children:`type Config struct {
  DBUrl string
  Port  int
}

// Reader for dependencies
getDBUrl := R.Asks(func(c Config) string {
  return c.DBUrl
})

// ReaderIOEither for full power
program := RIOE.Chain(
  getDBUrl,
  func(url string) RIOE.ReaderIOEither[Config, error, *DB] {
      return RIOE.FromIO(connectDB(url))
  },
)

// Run with config
config := Config{DBUrl: "localhost:5432", Port: 8080}
result := program(config)()
`})]}),"\n",(0,t.jsxs)(o,{id:"quick-links",number:"06",title:"Quick",titleAccent:"Links",children:[(0,t.jsx)(r.h3,{id:"getting-started",children:"Getting Started"}),(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"./intro",children:"Introduction"})," - What is fp-go?"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"./installation",children:"Installation"})," - Get up and running"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"./quickstart",children:"Quick Start"})," - Your first functional program"]}),"\n"]}),(0,t.jsx)(r.h3,{id:"learning-resources",children:"Learning Resources"}),(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"./concepts/index",children:"Core Concepts"})," - Fundamental FP concepts"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"./recipes/index",children:"Recipes"})," - Practical examples"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"./migration/v1-to-v2",children:"Migration Guide"})," - Upgrade from v1"]}),"\n"]}),(0,t.jsx)(r.h3,{id:"advanced-topics",children:"Advanced Topics"}),(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"./advanced/patterns",children:"Patterns"})," - Monad transformers, Free monads, Tagless final"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"./advanced/type-theory",children:"Type Theory"})," - Category theory foundations"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"./advanced/performance",children:"Performance"})," - Optimization techniques"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"./advanced/architecture",children:"Architecture"})," - Application design patterns"]}),"\n"]}),(0,t.jsx)(r.h3,{id:"legacy-version",children:"Legacy Version"}),(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"./1.0.0/intro",children:"v1.x Documentation"})," - Previous version docs"]}),"\n"]})]})]})}function a(e={}){let{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}function x(e,r){throw Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},8453(e,r,i){i.d(r,{R:()=>d,x:()=>l});var n=i(6540);let t={},s=n.createContext(t);function d(e){let r=n.useContext(s);return n.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),n.createElement(s.Provider,{value:r},e.children)}}}]);
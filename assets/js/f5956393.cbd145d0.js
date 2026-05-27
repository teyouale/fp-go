"use strict";(self.webpackChunkfp_go_docs=self.webpackChunkfp_go_docs||[]).push([["3992"],{5317(e,n,r){r.r(n),r.d(n,{metadata:()=>i,default:()=>h,frontMatter:()=>c,contentTitle:()=>d,toc:()=>o,assets:()=>l});var i=JSON.parse('{"id":"v2/collections/array","title":"Array","description":"Functional operations for Go slices - map, filter, reduce, and more with immutable data structures.","source":"@site/docs/v2/collections/array.md","sourceDirName":"v2/collections","slug":"/v2/collections/array","permalink":"/fp-go/docs/v2/collections/array","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"Array","hide_title":true,"description":"Functional operations for Go slices - map, filter, reduce, and more with immutable data structures.","sidebar_position":1},"sidebar":"apiSidebar","previous":{"title":"Endomorphism","permalink":"/fp-go/docs/v2/endomorphism"},"next":{"title":"Array - Applicative","permalink":"/fp-go/docs/v2/collections/array-ap"}}'),t=r(4848),s=r(8453);let c={title:"Array",hide_title:!0,description:"Functional operations for Go slices - map, filter, reduce, and more with immutable data structures.",sidebar_position:1},d,l={},o=[{value:"Constructors",id:"constructors",level:3},{value:"Transformations",id:"transformations",level:3},{value:"Filtering",id:"filtering",level:3},{value:"Reduction",id:"reduction",level:3},{value:"Access",id:"access",level:3},{value:"Combining",id:"combining",level:3},{value:"Checking",id:"checking",level:3},{value:"Basic Transformations",id:"basic-transformations",level:3},{value:"Chain (FlatMap)",id:"chain-flatmap",level:3},{value:"FilterMap",id:"filtermap",level:3},{value:"Partition",id:"partition",level:3},{value:"Real-World Example",id:"real-world-example",level:3},{value:"Safe Head",id:"safe-head",level:3},{value:"Transform and Aggregate",id:"transform-and-aggregate",level:3},{value:"Conditional Transformation",id:"conditional-transformation",level:3}];function a(e){let n={code:"code",h3:"h3",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components},{ApiTable:r,Callout:i,CodeCard:c,PageHeader:d,Section:l}=n;return r||x("ApiTable",!0),i||x("Callout",!0),c||x("CodeCard",!0),d||x("PageHeader",!0),l||x("Section",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(d,{eyebrow:"Reference \xb7 Collections",title:"Array",lede:"Functional operations for Go slices. Comprehensive set of operations treating slices as immutable data structures with type-safe transformations.",meta:[{label:"Package",value:"github.com/IBM/fp-go/v2/array"},{label:"Type",value:"[]T"}]}),"\n",(0,t.jsxs)(l,{id:"overview",number:"01",title:"Overview",children:[(0,t.jsx)(n.p,{children:"The array package provides functional operations for Go slices:"}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Immutable"}),": Always returns new slices"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Type-safe"}),": Leverages Go generics"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Composable"}),": Chain operations together"]}),"\n"]}),(0,t.jsx)(c,{file:"basic.go",children:`import A "github.com/IBM/fp-go/v2/array"

// Create arrays
numbers := A.From(1, 2, 3, 4, 5)
single := A.Of(42)
empty := A.Empty[int]()

// Transform
doubled := A.Map(func(n int) int { return n * 2 })(numbers)
// []int{2, 4, 6, 8, 10}

// Filter
evens := A.Filter(func(n int) bool { return n%2 == 0 })(numbers)
// []int{2, 4}

// Reduce
sum := A.Reduce(func(acc, n int) int { return acc + n }, 0)(numbers)
// 15
`})]}),"\n",(0,t.jsxs)(l,{id:"api",number:"02",title:"Core",titleAccent:"API",children:[(0,t.jsx)(n.h3,{id:"constructors",children:"Constructors"}),(0,t.jsx)(r,{children:(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Function"}),(0,t.jsx)(n.th,{children:"Signature"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"From"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"func From[A any](values ...A) []A"})}),(0,t.jsx)(n.td,{children:"Create from variadic args"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Of"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"func Of[A any](value A) []A"})}),(0,t.jsx)(n.td,{children:"Single element array"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Empty"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"func Empty[A any]() []A"})}),(0,t.jsx)(n.td,{children:"Empty array"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"MakeBy"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"func MakeBy[A any](n int, f func(int) A) []A"})}),(0,t.jsx)(n.td,{children:"Generate with function"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Replicate"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"func Replicate[A any](n int, value A) []A"})}),(0,t.jsx)(n.td,{children:"Repeat value n times"})]})]})]})}),(0,t.jsx)(n.h3,{id:"transformations",children:"Transformations"}),(0,t.jsx)(r,{children:(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Function"}),(0,t.jsx)(n.th,{children:"Signature"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Map"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"func Map[A, B any](f func(A) B) func([]A) []B"})}),(0,t.jsx)(n.td,{children:"Transform each element"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"MapWithIndex"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"func MapWithIndex[A, B any](f func(int, A) B) func([]A) []B"})}),(0,t.jsx)(n.td,{children:"Map with index"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Chain"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"func Chain[A, B any](f func(A) []B) func([]A) []B"})}),(0,t.jsx)(n.td,{children:"FlatMap"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"FilterMap"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"func FilterMap[A, B any](f func(A) Option[B]) func([]A) []B"})}),(0,t.jsx)(n.td,{children:"Filter and map"})]})]})]})}),(0,t.jsx)(n.h3,{id:"filtering",children:"Filtering"}),(0,t.jsx)(r,{children:(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Function"}),(0,t.jsx)(n.th,{children:"Signature"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Filter"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"func Filter[A any](pred func(A) bool) func([]A) []A"})}),(0,t.jsx)(n.td,{children:"Keep matching elements"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"FilterWithIndex"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"func FilterWithIndex[A any](pred func(int, A) bool) func([]A) []A"})}),(0,t.jsx)(n.td,{children:"Filter with index"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Partition"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"func Partition[A any](pred func(A) bool) func([]A) Pair[[]A, []A]"})}),(0,t.jsx)(n.td,{children:"Split into two arrays"})]})]})]})}),(0,t.jsx)(n.h3,{id:"reduction",children:"Reduction"}),(0,t.jsx)(r,{children:(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Function"}),(0,t.jsx)(n.th,{children:"Signature"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Reduce"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"func Reduce[A, B any](f func(B, A) B, initial B) func([]A) B"})}),(0,t.jsx)(n.td,{children:"Fold left"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"ReduceRight"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"func ReduceRight[A, B any](f func(A, B) B, initial B) func([]A) B"})}),(0,t.jsx)(n.td,{children:"Fold right"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"ReduceWithIndex"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"func ReduceWithIndex[A, B any](f func(int, B, A) B, initial B) func([]A) B"})}),(0,t.jsx)(n.td,{children:"Reduce with index"})]})]})]})}),(0,t.jsx)(n.h3,{id:"access",children:"Access"}),(0,t.jsx)(r,{children:(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Function"}),(0,t.jsx)(n.th,{children:"Signature"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Head"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"func Head[A any]([]A) Option[A]"})}),(0,t.jsx)(n.td,{children:"First element"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Last"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"func Last[A any]([]A) Option[A]"})}),(0,t.jsx)(n.td,{children:"Last element"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Tail"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"func Tail[A any]([]A) Option[[]A]"})}),(0,t.jsx)(n.td,{children:"All but first"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Lookup"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"func Lookup[A any](index int) func([]A) Option[A]"})}),(0,t.jsx)(n.td,{children:"Element at index"})]})]})]})}),(0,t.jsx)(n.h3,{id:"combining",children:"Combining"}),(0,t.jsx)(r,{children:(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Function"}),(0,t.jsx)(n.th,{children:"Signature"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Append"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"func Append[A any](arr []A, value A) []A"})}),(0,t.jsx)(n.td,{children:"Add to end"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Prepend"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"func Prepend[A any](value A) func([]A) []A"})}),(0,t.jsx)(n.td,{children:"Add to start"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Flatten"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"func Flatten[A any]([][]A) []A"})}),(0,t.jsx)(n.td,{children:"Flatten nested arrays"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Concat"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"func Concat[A any](arrays ...[]A) []A"})}),(0,t.jsx)(n.td,{children:"Concatenate arrays"})]})]})]})}),(0,t.jsx)(n.h3,{id:"checking",children:"Checking"}),(0,t.jsx)(r,{children:(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Function"}),(0,t.jsx)(n.th,{children:"Signature"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"IsEmpty"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"func IsEmpty[A any]([]A) bool"})}),(0,t.jsx)(n.td,{children:"Check if empty"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"IsNonEmpty"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"func IsNonEmpty[A any]([]A) bool"})}),(0,t.jsx)(n.td,{children:"Check if non-empty"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Size"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"func Size[A any]([]A) int"})}),(0,t.jsx)(n.td,{children:"Get length"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Elem"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"func Elem[A any](eq Eq[A]) func(A) func([]A) bool"})}),(0,t.jsx)(n.td,{children:"Check if contains"})]})]})]})})]}),"\n",(0,t.jsxs)(l,{id:"examples",number:"03",title:"Usage",titleAccent:"Examples",children:[(0,t.jsx)(n.h3,{id:"basic-transformations",children:"Basic Transformations"}),(0,t.jsx)(c,{file:"transformations.go",children:`import (
  A "github.com/IBM/fp-go/v2/array"
  F "github.com/IBM/fp-go/v2/function"
)

numbers := []int{1, 2, 3, 4, 5}

// Map
doubled := F.Pipe2(
  numbers,
  A.Map(func(n int) int { return n * 2 }),
)
// []int{2, 4, 6, 8, 10}

// Filter
evens := F.Pipe2(
  numbers,
  A.Filter(func(n int) bool { return n%2 == 0 }),
)
// []int{2, 4}

// Reduce
sum := F.Pipe2(
  numbers,
  A.Reduce(func(acc, n int) int { return acc + n }, 0),
)
// 15
`}),(0,t.jsx)(n.h3,{id:"chain-flatmap",children:"Chain (FlatMap)"}),(0,t.jsx)(c,{file:"chain.go",children:`type User struct {
  Name  string
  Roles []string
}

users := []User{
  {Name: "Alice", Roles: []string{"admin", "user"}},
  {Name: "Bob", Roles: []string{"user"}},
}

// Get all roles
allRoles := F.Pipe2(
  users,
  A.Chain(func(u User) []string { return u.Roles }),
)
// []string{"admin", "user", "user"}
`}),(0,t.jsx)(n.h3,{id:"filtermap",children:"FilterMap"}),(0,t.jsx)(c,{file:"filtermap.go",children:`import O "github.com/IBM/fp-go/v2/option"

numbers := []int{1, 2, 3, 4, 5}

// Keep even numbers and double them
result := F.Pipe2(
  numbers,
  A.FilterMap(func(n int) O.Option[int] {
      if n%2 == 0 {
          return O.Some(n * 2)
      }
      return O.None[int]()
  }),
)
// []int{4, 8}
`}),(0,t.jsx)(n.h3,{id:"partition",children:"Partition"}),(0,t.jsx)(c,{file:"partition.go",children:`numbers := []int{1, 2, 3, 4, 5, 6}

// Separate evens and odds
result := F.Pipe2(
  numbers,
  A.Partition(func(n int) bool { return n%2 == 0 }),
)

odds := result.Head   // []int{1, 3, 5}
evens := result.Tail  // []int{2, 4, 6}
`}),(0,t.jsx)(n.h3,{id:"real-world-example",children:"Real-World Example"}),(0,t.jsx)(c,{file:"products.go",children:`type Product struct {
  ID       int
  Name     string
  Price    float64
  Category string
  InStock  bool
}

products := []Product{
  {ID: 1, Name: "Laptop", Price: 999.99, Category: "Electronics", InStock: true},
  {ID: 2, Name: "Mouse", Price: 29.99, Category: "Electronics", InStock: true},
  {ID: 3, Name: "Desk", Price: 299.99, Category: "Furniture", InStock: false},
  {ID: 4, Name: "Chair", Price: 199.99, Category: "Furniture", InStock: true},
}

// Get names of in-stock electronics under $500
result := F.Pipe3(
  products,
  A.Filter(func(p Product) bool {
      return p.InStock && p.Category == "Electronics" && p.Price < 500
  }),
  A.Map(func(p Product) string { return p.Name }),
  A.Sort(ord.FromCompare(strings.Compare)),
)
// []string{"Mouse"}

// Calculate total value of in-stock items
totalValue := F.Pipe3(
  products,
  A.Filter(func(p Product) bool { return p.InStock }),
  A.Reduce(func(sum float64, p Product) float64 {
      return sum + p.Price
  }, 0.0),
)
// 1429.97
`})]}),"\n",(0,t.jsxs)(l,{id:"patterns",number:"04",title:"Common",titleAccent:"Patterns",children:[(0,t.jsx)(n.h3,{id:"safe-head",children:"Safe Head"}),(0,t.jsx)(c,{file:"safe_head.go",children:`// Instead of: arr[0] (panics if empty)
head := F.Pipe2(
  arr,
  A.Head,
  O.GetOrElse(func() int { return 0 }),
)
`}),(0,t.jsx)(n.h3,{id:"transform-and-aggregate",children:"Transform and Aggregate"}),(0,t.jsx)(c,{file:"aggregate.go",children:`// Map then reduce
result := F.Pipe4(
  numbers,
  A.Map(func(n int) int { return n * n }),
  A.Filter(func(n int) bool { return n > 10 }),
  A.Reduce(func(sum, n int) int { return sum + n }, 0),
)
`}),(0,t.jsx)(n.h3,{id:"conditional-transformation",children:"Conditional Transformation"}),(0,t.jsx)(c,{file:"conditional.go",children:`// Use FilterMap for conditional transforms
result := F.Pipe2(
  items,
  A.FilterMap(func(item Item) O.Option[Result] {
      if item.IsValid() {
          return O.Some(item.Transform())
      }
      return O.None[Result]()
  }),
)
`})]}),"\n",(0,t.jsxs)(i,{type:"info",children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Best Practices"}),":"]}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Use ",(0,t.jsx)(n.code,{children:"Pipe"})," for readability when chaining operations"]}),"\n",(0,t.jsx)(n.li,{children:"Prefer immutability - array functions return new slices"}),"\n",(0,t.jsxs)(n.li,{children:["Combine operations with ",(0,t.jsx)(n.code,{children:"FilterMap"})," instead of separate ",(0,t.jsx)(n.code,{children:"Filter"})," + ",(0,t.jsx)(n.code,{children:"Map"})]}),"\n",(0,t.jsxs)(n.li,{children:["Check for empty with ",(0,t.jsx)(n.code,{children:"IsEmpty"})," before accessing elements"]}),"\n"]})]})]})}function h(e={}){let{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}function x(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},8453(e,n,r){r.d(n,{R:()=>c,x:()=>d});var i=r(6540);let t={},s=i.createContext(t);function c(e){let n=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);
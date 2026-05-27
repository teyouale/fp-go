"use strict";(self.webpackChunkfp_go_docs=self.webpackChunkfp_go_docs||[]).push([["8371"],{8014(e,i,t){t.r(i),t.d(i,{metadata:()=>r,default:()=>p,frontMatter:()=>a,contentTitle:()=>l,toc:()=>c,assets:()=>o});var r=JSON.parse('{"id":"v2/collections/array-zip","title":"Array - Zip","description":"Combining arrays element-wise with Zip, ZipWith, and Unzip operations.","source":"@site/docs/v2/collections/array-zip.md","sourceDirName":"v2/collections","slug":"/v2/collections/array-zip","permalink":"/fp-go/docs/v2/collections/array-zip","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"Array - Zip","hide_title":true,"description":"Combining arrays element-wise with Zip, ZipWith, and Unzip operations.","sidebar_position":4},"sidebar":"apiSidebar","previous":{"title":"Array - Uniq","permalink":"/fp-go/docs/v2/collections/array-uniq"},"next":{"title":"NonEmpty Array","permalink":"/fp-go/docs/v2/collections/nonempty-array"}}'),n=t(4848),s=t(8453);let a={title:"Array - Zip",hide_title:!0,description:"Combining arrays element-wise with Zip, ZipWith, and Unzip operations.",sidebar_position:4},l,o={},c=[{value:"Zip - Basic",id:"zip---basic",level:3},{value:"ZipWith - Custom Function",id:"zipwith---custom-function",level:3},{value:"Create Structs",id:"create-structs",level:3},{value:"Unzip",id:"unzip",level:3},{value:"Parallel Data Processing",id:"parallel-data-processing",level:3},{value:"Comparing Arrays",id:"comparing-arrays",level:3},{value:"Time Series",id:"time-series",level:3},{value:"Zip with Index",id:"zip-with-index",level:3},{value:"Three Arrays",id:"three-arrays",level:3},{value:"Parallel Transformation",id:"parallel-transformation",level:3}];function d(e){let i={code:"code",h3:"h3",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components},{ApiTable:t,Callout:r,CodeCard:a,PageHeader:l,Section:o}=i;return t||u("ApiTable",!0),r||u("Callout",!0),a||u("CodeCard",!0),l||u("PageHeader",!0),o||u("Section",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l,{eyebrow:"Reference \xb7 Collections",title:"Array",titleAccent:"Zip",lede:"Combining arrays element-wise. Zip operations pair elements at the same index for parallel processing and data alignment.",meta:[{label:"Package",value:"github.com/IBM/fp-go/v2/array"},{label:"Operations",value:"Zip, ZipWith, Unzip"}]}),"\n",(0,n.jsx)(o,{id:"api",number:"01",title:"Core",titleAccent:"API",children:(0,n.jsx)(t,{children:(0,n.jsxs)(i.table,{children:[(0,n.jsx)(i.thead,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.th,{children:"Function"}),(0,n.jsx)(i.th,{children:"Signature"}),(0,n.jsx)(i.th,{children:"Description"})]})}),(0,n.jsxs)(i.tbody,{children:[(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"Zip"})}),(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"func Zip[A, B any](bs []B) func([]A) []Tuple2[A, B]"})}),(0,n.jsx)(i.td,{children:"Combine into pairs"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"ZipWith"})}),(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"func ZipWith[A, B, C any](as []A, bs []B, f func(A, B) C) []C"})}),(0,n.jsx)(i.td,{children:"Combine with function"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"Unzip"})}),(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"func Unzip[A, B any]([]Tuple2[A, B]) Tuple2[[]A, []B]"})}),(0,n.jsx)(i.td,{children:"Split pairs into arrays"})]})]})]})})}),"\n",(0,n.jsxs)(o,{id:"examples",number:"02",title:"Usage",titleAccent:"Examples",children:[(0,n.jsx)(i.h3,{id:"zip---basic",children:"Zip - Basic"}),(0,n.jsx)(a,{file:"zip.go",children:`import (
  A "github.com/IBM/fp-go/v2/array"
  F "github.com/IBM/fp-go/v2/function"
  T "github.com/IBM/fp-go/v2/tuple"
)

names := []string{"Alice", "Bob", "Charlie"}
ages := []int{30, 25, 35}

// Zip into tuples
pairs := F.Pipe2(
  names,
  A.Zip(ages),
)
// []Tuple2[string, int]{
//   {Head: "Alice", Tail: 30},
//   {Head: "Bob", Tail: 25},
//   {Head: "Charlie", Tail: 35},
// }

// Shorter array determines result length
short := []string{"A", "B"}
long := []int{1, 2, 3, 4, 5}

result := F.Pipe2(short, A.Zip(long))
// []Tuple2[string, int]{{A, 1}, {B, 2}}
// Elements 3, 4, 5 are discarded
`}),(0,n.jsx)(i.h3,{id:"zipwith---custom-function",children:"ZipWith - Custom Function"}),(0,n.jsx)(a,{file:"zipwith.go",children:`// Calculate totals
prices := []float64{10.0, 20.0, 30.0}
quantities := []int{2, 3, 1}

totals := A.ZipWith(
  prices,
  quantities,
  func(price float64, qty int) float64 {
      return price * float64(qty)
  },
)
// []float64{20.0, 60.0, 30.0}

// Combine names
firstNames := []string{"John", "Jane", "Bob"}
lastNames := []string{"Doe", "Smith", "Johnson"}

fullNames := A.ZipWith(
  firstNames,
  lastNames,
  func(first, last string) string {
      return first + " " + last
  },
)
// []string{"John Doe", "Jane Smith", "Bob Johnson"}
`}),(0,n.jsx)(i.h3,{id:"create-structs",children:"Create Structs"}),(0,n.jsx)(a,{file:"structs.go",children:`type User struct {
  Name  string
  Email string
}

names := []string{"Alice", "Bob"}
emails := []string{"alice@example.com", "bob@example.com"}

users := A.ZipWith(
  names,
  emails,
  func(name, email string) User {
      return User{Name: name, Email: email}
  },
)
// []User{
//   {Name: "Alice", Email: "alice@example.com"},
//   {Name: "Bob", Email: "bob@example.com"},
// }
`}),(0,n.jsx)(i.h3,{id:"unzip",children:"Unzip"}),(0,n.jsx)(a,{file:"unzip.go",children:`pairs := []T.Tuple2[string, int]{
  {Head: "Alice", Tail: 30},
  {Head: "Bob", Tail: 25},
  {Head: "Charlie", Tail: 35},
}

result := A.Unzip(pairs)
names := result.Head   // []string{"Alice", "Bob", "Charlie"}
ages := result.Tail    // []int{30, 25, 35}
`}),(0,n.jsx)(i.h3,{id:"parallel-data-processing",children:"Parallel Data Processing"}),(0,n.jsx)(a,{file:"parallel.go",children:`type Product struct {
  ID    int
  Name  string
  Price float64
}

type Discount struct {
  ProductID int
  Percent   float64
}

products := []Product{
  {ID: 1, Name: "Laptop", Price: 1000},
  {ID: 2, Name: "Mouse", Price: 50},
}

discounts := []Discount{
  {ProductID: 1, Percent: 10},
  {ProductID: 2, Percent: 20},
}

// Apply discounts
discounted := A.ZipWith(
  products,
  discounts,
  func(p Product, d Discount) Product {
      return Product{
          ID:    p.ID,
          Name:  p.Name,
          Price: p.Price * (1 - d.Percent/100),
      }
  },
)
// Products with discounts applied
`}),(0,n.jsx)(i.h3,{id:"comparing-arrays",children:"Comparing Arrays"}),(0,n.jsx)(a,{file:"compare.go",children:`expected := []int{1, 2, 3, 4, 5}
actual := []int{1, 2, 4, 4, 5}

// Find differences
differences := A.ZipWith(
  expected,
  actual,
  func(exp, act int) string {
      if exp == act {
          return "\u{2713}"
      }
      return fmt.Sprintf("\u{2717} expected %d, got %d", exp, act)
  },
)
// []string{"\u{2713}", "\u{2713}", "\u{2717} expected 3, got 4", "\u{2713}", "\u{2713}"}
`}),(0,n.jsx)(i.h3,{id:"time-series",children:"Time Series"}),(0,n.jsx)(a,{file:"timeseries.go",children:`type DataPoint struct {
  Timestamp time.Time
  Value     float64
}

timestamps := []time.Time{
  time.Now(),
  time.Now().Add(1 * time.Hour),
  time.Now().Add(2 * time.Hour),
}

values := []float64{23.5, 24.1, 23.8}

// Create time series
timeSeries := A.ZipWith(
  timestamps,
  values,
  func(t time.Time, v float64) DataPoint {
      return DataPoint{Timestamp: t, Value: v}
  },
)
`})]}),"\n",(0,n.jsxs)(o,{id:"patterns",number:"03",title:"Common",titleAccent:"Patterns",children:[(0,n.jsx)(i.h3,{id:"zip-with-index",children:"Zip with Index"}),(0,n.jsx)(a,{file:"index.go",children:`// Add index to elements
values := []string{"apple", "banana", "cherry"}

indexed := F.Pipe2(
  values,
  A.MapWithIndex(T.MakeTuple2[int, string]),
)
// []Tuple2[int, string]{
//   {Head: 0, Tail: "apple"},
//   {Head: 1, Tail: "banana"},
//   {Head: 2, Tail: "cherry"},
// }
`}),(0,n.jsx)(i.h3,{id:"three-arrays",children:"Three Arrays"}),(0,n.jsx)(a,{file:"three_arrays.go",children:`// Zip three arrays using nested ZipWith
first := []string{"A", "B", "C"}
second := []int{1, 2, 3}
third := []bool{true, false, true}

type Triple struct {
  S string
  I int
  B bool
}

// First zip two arrays
step1 := A.ZipWith(
  first,
  second,
  T.MakeTuple2[string, int],
)

// Then zip with third
result := A.ZipWith(
  step1,
  third,
  func(t T.Tuple2[string, int], b bool) Triple {
      return Triple{S: t.Head, I: t.Tail, B: b}
  },
)
`}),(0,n.jsx)(i.h3,{id:"parallel-transformation",children:"Parallel Transformation"}),(0,n.jsx)(a,{file:"parallel_transform.go",children:`// Transform two related arrays in parallel
transformed := A.ZipWith(
  sources,
  targets,
  func(src Source, tgt Target) Result {
      return transform(src, tgt)
  },
)
`})]}),"\n",(0,n.jsx)(r,{type:"info",children:(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"Performance"}),": ",(0,n.jsx)(i.code,{children:"ZipWith"})," is more efficient than ",(0,n.jsx)(i.code,{children:"Zip"})," + ",(0,n.jsx)(i.code,{children:"Map"})," as it avoids creating intermediate tuples. The shorter array determines the result length."]})})]})}function p(e={}){let{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}function u(e,i){throw Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},8453(e,i,t){t.d(i,{R:()=>a,x:()=>l});var r=t(6540);let n={},s=r.createContext(n);function a(e){let i=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(i):{...i,...e}},[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),r.createElement(s.Provider,{value:i},e.children)}}}]);
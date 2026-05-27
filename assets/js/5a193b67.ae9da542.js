"use strict";(self.webpackChunkfp_go_docs=self.webpackChunkfp_go_docs||[]).push([["9990"],{9996(e,t,n){n.r(t),n.d(t,{metadata:()=>r,default:()=>m,frontMatter:()=>o,contentTitle:()=>s,toc:()=>u,assets:()=>c});var r=JSON.parse('{"id":"recipes/aggregation","title":"Data Aggregation","description":"Reducing and summarizing data","source":"@site/docs/recipes/aggregation.md","sourceDirName":"recipes","slug":"/recipes/aggregation","permalink":"/fp-go/docs/recipes/aggregation","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":8,"frontMatter":{"sidebar_position":8,"title":"Data Aggregation","description":"Reducing and summarizing data","hide_title":true},"sidebar":"recipesSidebar","previous":{"title":"Filtering and Mapping","permalink":"/fp-go/docs/recipes/filtering-mapping"},"next":{"title":"Parsing Data","permalink":"/fp-go/docs/recipes/parsing"}}'),i=n(4848),a=n(8453);let o={sidebar_position:8,title:"Data Aggregation",description:"Reducing and summarizing data",hide_title:!0},s,c={},u=[];function l(e){let t={p:"p",strong:"strong",...(0,a.R)(),...e.components},{Checklist:n,ChecklistItem:r,CodeCard:o,PageHeader:s,Section:c,TLDR:u,TLDRCard:l}=t;return n||d("Checklist",!0),r||d("ChecklistItem",!0),o||d("CodeCard",!0),s||d("PageHeader",!0),c||d("Section",!0),u||d("TLDR",!0),l||d("TLDRCard",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s,{eyebrow:"Recipes \xb7 08 / 17",title:"Data",titleAccent:"Aggregation",lede:"Aggregate and summarize data using functional patterns with monoids, fold operations, and traverse for powerful data reduction.",meta:[{label:"Difficulty",value:"Intermediate"},{label:"Patterns",value:"6"},{label:"Use Cases",value:"Statistics, Summaries, Analytics"}]}),"\n",(0,i.jsxs)(u,{children:[(0,i.jsx)(l,{title:"Use Built-in Monoids",icon:"package",children:(0,i.jsx)(t.p,{children:"Leverage fp-go's monoids for common operations\u2014sum, product, string concatenation all have optimized implementations."})}),(0,i.jsx)(l,{title:"Leverage FoldMap",icon:"zap",children:(0,i.jsx)(t.p,{children:"Transform and aggregate in one pass\u2014more efficient than separate map and reduce operations."})}),(0,i.jsx)(l,{title:"Handle Empty Collections",icon:"alert-circle",children:(0,i.jsx)(t.p,{children:"Use Option for potentially empty results\u2014prevents panics and makes edge cases explicit."})})]}),"\n",(0,i.jsxs)(c,{id:"basic-fold",number:"01",title:"Basic Aggregation with",titleAccent:"Fold",children:[(0,i.jsx)(t.p,{children:"Use fold operations to reduce collections to single values."}),(0,i.jsx)(o,{file:"basic-fold.go",children:`package main

import (
  "fmt"
  A "github.com/IBM/fp-go/v2/array"
  N "github.com/IBM/fp-go/v2/number"
)

func main() {
  numbers := []int{1, 2, 3, 4, 5}
  
  // Sum using MonoidSum
  sum := A.Reduce(N.MonoidSum[int]())(numbers)
  fmt.Println("Sum:", sum) // Sum: 15
  
  // Product using MonoidProduct
  product := A.Reduce(N.MonoidProduct[int]())(numbers)
  fmt.Println("Product:", product) // Product: 120
}`}),(0,i.jsx)(o,{file:"string-concat.go",children:`package main

import (
  "fmt"
  A "github.com/IBM/fp-go/v2/array"
  S "github.com/IBM/fp-go/v2/string"
)

func main() {
  words := []string{"Hello", " ", "functional", " ", "world"}
  
  // Concatenate strings
  result := A.Reduce(S.Monoid)(words)
  fmt.Println(result) // Hello functional world
  
  // With separator
  items := []string{"apple", "banana", "cherry"}
  joined := A.Intercalate(S.Monoid)(", ")(items)
  fmt.Println(joined) // apple, banana, cherry
}`})]}),"\n",(0,i.jsxs)(c,{id:"complex-data",number:"02",title:"Aggregating Complex",titleAccent:"Data",children:[(0,i.jsx)(t.p,{children:"Group and aggregate complex data structures for summaries and analytics."}),(0,i.jsx)(o,{file:"grouping-counting.go",children:`package main

import (
  "fmt"
  A "github.com/IBM/fp-go/v2/array"
  F "github.com/IBM/fp-go/v2/function"
  R "github.com/IBM/fp-go/v2/record"
)

type Product struct {
  Name     string
  Category string
  Price    float64
}

func main() {
  products := []Product{
      {Name: "Laptop", Category: "Electronics", Price: 999.99},
      {Name: "Mouse", Category: "Electronics", Price: 29.99},
      {Name: "Desk", Category: "Furniture", Price: 299.99},
      {Name: "Chair", Category: "Furniture", Price: 199.99},
  }
  
  // Count by category
  countByCategory := F.Pipe2(
      products,
      A.GroupBy(func(p Product) string { return p.Category }),
      R.Map(func(items []Product) int { return len(items) }),
  )
  
  fmt.Println("Count by category:", countByCategory)
  // Count by category: map[Electronics:2 Furniture:2]
  
  // Sum prices by category
  sumByCategory := F.Pipe2(
      products,
      A.GroupBy(func(p Product) string { return p.Category }),
      R.Map(func(items []Product) float64 {
          return A.Reduce(func(acc, p float64) float64 {
              return acc + p
          })(0.0)(A.Map(func(p Product) float64 {
              return p.Price
          })(items))
      }),
  )
  
  fmt.Println("Sum by category:", sumByCategory)
  // Sum by category: map[Electronics:1029.98 Furniture:499.98]
}`})]}),"\n",(0,i.jsxs)(c,{id:"statistics",number:"03",title:"Statistical",titleAccent:"Aggregations",children:[(0,i.jsx)(t.p,{children:"Calculate statistics like min, max, average, and more from collections."}),(0,i.jsx)(o,{file:"statistics.go",children:`package main

import (
  "fmt"
  "math"
  A "github.com/IBM/fp-go/v2/array"
  O "github.com/IBM/fp-go/v2/option"
)

type Stats struct {
  Count   int
  Sum     float64
  Min     float64
  Max     float64
  Average float64
}

func calculateStats(numbers []float64) O.Option[Stats] {
  if len(numbers) == 0 {
      return O.None[Stats]()
  }
  
  count := len(numbers)
  sum := A.Reduce(func(acc, n float64) float64 {
      return acc + n
  })(0.0)(numbers)
  
  min := A.Reduce(func(acc, n float64) float64 {
      return math.Min(acc, n)
  })(numbers[0])(numbers[1:])
  
  max := A.Reduce(func(acc, n float64) float64 {
      return math.Max(acc, n)
  })(numbers[0])(numbers[1:])
  
  return O.Some(Stats{
      Count:   count,
      Sum:     sum,
      Min:     min,
      Max:     max,
      Average: sum / float64(count),
  })
}

func main() {
  numbers := []float64{10.5, 20.3, 15.7, 30.2, 25.8}
  
  stats := calculateStats(numbers)
  
  O.Match(
      func() { fmt.Println("No data") },
      func(s Stats) {
          fmt.Printf("Count: %d\\n", s.Count)
          fmt.Printf("Sum: %.2f\\n", s.Sum)
          fmt.Printf("Min: %.2f\\n", s.Min)
          fmt.Printf("Max: %.2f\\n", s.Max)
          fmt.Printf("Average: %.2f\\n", s.Average)
      },
  )(stats)
}`})]}),"\n",(0,i.jsxs)(c,{id:"effects",number:"04",title:"Aggregating with",titleAccent:"Effects",children:[(0,i.jsx)(t.p,{children:"Aggregate operations that may fail or have side effects using traverse."}),(0,i.jsx)(o,{file:"collecting-results.go",children:`package main

import (
  "fmt"
  "strconv"
  A "github.com/IBM/fp-go/v2/array"
  E "github.com/IBM/fp-go/v2/either"
  F "github.com/IBM/fp-go/v2/function"
)

func parseNumbers(strings []string) E.Either[error, []int] {
  return A.Traverse[string](E.Applicative[error, int]())(
      func(s string) E.Either[error, int] {
          n, err := strconv.Atoi(s)
          if err != nil {
              return E.Left[int](err)
          }
          return E.Right[error](n)
      },
  )(strings)
}

func main() {
  // Valid input
  validStrings := []string{"1", "2", "3", "4", "5"}
  result1 := parseNumbers(validStrings)
  
  E.Match(
      func(err error) { fmt.Println("Error:", err) },
      func(numbers []int) {
          sum := A.Reduce(func(acc, n int) int {
              return acc + n
          })(0)(numbers)
          fmt.Println("Sum:", sum) // Sum: 15
      },
  )(result1)
  
  // Invalid input
  invalidStrings := []string{"1", "2", "invalid", "4"}
  result2 := parseNumbers(invalidStrings)
  
  E.Match(
      func(err error) { fmt.Println("Error:", err) },
      func(numbers []int) { fmt.Println("Sum:", numbers) },
  )(result2)
}`})]}),"\n",(0,i.jsxs)(c,{id:"custom-monoids",number:"05",title:"Custom",titleAccent:"Monoids",children:[(0,i.jsx)(t.p,{children:"Build custom monoids for domain-specific aggregations."}),(0,i.jsx)(o,{file:"custom-monoid.go",children:`package main

import (
  "fmt"
  A "github.com/IBM/fp-go/v2/array"
  M "github.com/IBM/fp-go/v2/monoid"
)

type MinMax struct {
  Min int
  Max int
}

func minMaxMonoid() M.Monoid[MinMax] {
  return M.MakeMonoid(
      // Empty value
      func() MinMax {
          return MinMax{Min: int(^uint(0) >> 1), Max: -int(^uint(0)>>1) - 1}
      },
      // Concat operation
      func(a, b MinMax) MinMax {
          min := a.Min
          if b.Min < min {
              min = b.Min
          }
          max := a.Max
          if b.Max > max {
              max = b.Max
          }
          return MinMax{Min: min, Max: max}
      },
  )
}

func toMinMax(n int) MinMax {
  return MinMax{Min: n, Max: n}
}

func main() {
  numbers := []int{5, 2, 8, 1, 9, 3}
  
  result := A.FoldMap(minMaxMonoid())(toMinMax)(numbers)
  
  fmt.Printf("Min: %d, Max: %d\\n", result.Min, result.Max)
  // Min: 1, Max: 9
}`})]}),"\n",(0,i.jsxs)(c,{id:"parallel",number:"06",title:"Parallel",titleAccent:"Aggregation",children:[(0,i.jsx)(t.p,{children:"Aggregate data in parallel for improved performance on large datasets."}),(0,i.jsx)(o,{file:"parallel-sum.go",children:`package main

import (
  "fmt"
  "sync"
  A "github.com/IBM/fp-go/v2/array"
)

func parallelSum(numbers []int, workers int) int {
  if len(numbers) == 0 {
      return 0
  }
  
  chunkSize := (len(numbers) + workers - 1) / workers
  chunks := A.Chunksof(chunkSize)(numbers)
  
  results := make([]int, len(chunks))
  var wg sync.WaitGroup
  
  for i, chunk := range chunks {
      wg.Add(1)
      go func(idx int, data []int) {
          defer wg.Done()
          results[idx] = A.Reduce(func(acc, n int) int {
              return acc + n
          })(0)(data)
      }(i, chunk)
  }
  
  wg.Wait()
  
  return A.Reduce(func(acc, n int) int {
      return acc + n
  })(0)(results)
}

func main() {
  numbers := A.MakeBy(1000)(func(i int) int { return i + 1 })
  
  sum := parallelSum(numbers, 4)
  fmt.Println("Sum:", sum) // Sum: 500500
}`})]}),"\n",(0,i.jsx)(c,{id:"best-practices",number:"07",title:"Best",titleAccent:"Practices",children:(0,i.jsxs)(n,{children:[(0,i.jsx)(r,{status:"required",children:(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Choose the right monoid"})," \u2014 Use built-in monoids when available"]})}),(0,i.jsx)(r,{status:"required",children:(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Leverage FoldMap"})," \u2014 Transform and aggregate in one pass for efficiency"]})}),(0,i.jsx)(r,{status:"required",children:(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Handle empty collections"})," \u2014 Use Option for potentially empty results"]})}),(0,i.jsx)(r,{status:"recommended",children:(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Build custom monoids"})," \u2014 Create reusable aggregation patterns for your domain"]})}),(0,i.jsx)(r,{status:"recommended",children:(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Consider parallelization"})," \u2014 For large datasets, parallel aggregation can improve performance"]})}),(0,i.jsx)(r,{status:"optional",children:(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Use traverse for effects"})," \u2014 When aggregating operations that may fail"]})})]})})]})}function m(e={}){let{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}function d(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},8453(e,t,n){n.d(t,{R:()=>o,x:()=>s});var r=n(6540);let i={},a=r.createContext(i);function o(e){let t=r.useContext(a);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);
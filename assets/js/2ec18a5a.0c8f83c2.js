"use strict";(self.webpackChunkfp_go_docs=self.webpackChunkfp_go_docs||[]).push([["1272"],{552(e,t,n){n.r(t),n.d(t,{metadata:()=>i,default:()=>d,frontMatter:()=>o,contentTitle:()=>a,toc:()=>l,assets:()=>c});var i=JSON.parse('{"id":"recipes/filtering-mapping","title":"Filtering and Mapping","description":"Working with collections","source":"@site/docs/recipes/filtering-mapping.md","sourceDirName":"recipes","slug":"/recipes/filtering-mapping","permalink":"/fp-go/docs/recipes/filtering-mapping","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":7,"frontMatter":{"sidebar_position":7,"title":"Filtering and Mapping","description":"Working with collections","hide_title":true},"sidebar":"recipesSidebar","previous":{"title":"Data Transformation","permalink":"/fp-go/docs/recipes/data-transformation"},"next":{"title":"Data Aggregation","permalink":"/fp-go/docs/recipes/aggregation"}}'),r=n(4848),s=n(8453);let o={sidebar_position:7,title:"Filtering and Mapping",description:"Working with collections",hide_title:!0},a,c={},l=[];function p(e){let t={p:"p",strong:"strong",...(0,s.R)(),...e.components},{Checklist:n,ChecklistItem:i,CodeCard:o,PageHeader:a,Section:c,TLDR:l,TLDRCard:p}=t;return n||u("Checklist",!0),i||u("ChecklistItem",!0),o||u("CodeCard",!0),a||u("PageHeader",!0),c||u("Section",!0),l||u("TLDR",!0),p||u("TLDRCard",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a,{eyebrow:"Recipes \xb7 07 / 17",title:"Filtering and",titleAccent:"Mapping",lede:"Filter and map collections effectively using fp-go's array operations for clean, composable data processing.",meta:[{label:"Difficulty",value:"Beginner"},{label:"Patterns",value:"6"},{label:"Use Cases",value:"Collections, Data Processing"}]}),"\n",(0,r.jsxs)(l,{children:[(0,r.jsx)(p,{title:"Filter Before Map",icon:"filter",children:(0,r.jsx)(t.p,{children:"Reduce data early to improve performance\u2014filter out unwanted elements before transforming."})}),(0,r.jsx)(p,{title:"Use FilterMap",icon:"zap",children:(0,r.jsx)(t.p,{children:"When filtering and mapping, use FilterMap for efficiency\u2014combines both operations in one pass."})}),(0,r.jsx)(p,{title:"Keep Functions Pure",icon:"shield",children:(0,r.jsx)(t.p,{children:"No side effects in filter or map functions\u2014makes code predictable and composable."})})]}),"\n",(0,r.jsxs)(c,{id:"basic-filtering",number:"01",title:"Basic",titleAccent:"Filtering",children:[(0,r.jsx)(t.p,{children:"Filter elements based on predicates to select only the items you need."}),(0,r.jsx)(o,{file:"basic-filtering.go",children:`package main

import (
  "fmt"
  
  A "github.com/IBM/fp-go/v2/array"
)

func main() {
  numbers := []int{1, 2, 3, 4, 5, 6, 7, 8, 9, 10}
  
  // Filter even numbers
  evens := A.Filter(func(n int) bool {
      return n%2 == 0
  })(numbers)
  
  fmt.Printf("Even numbers: %v\\n", evens)
  // Output: Even numbers: [2 4 6 8 10]
  
  // Filter numbers greater than 5
  greaterThan5 := A.Filter(func(n int) bool {
      return n > 5
  })(numbers)
  
  fmt.Printf("Greater than 5: %v\\n", greaterThan5)
  // Output: Greater than 5: [6 7 8 9 10]
}`})]}),"\n",(0,r.jsxs)(c,{id:"basic-mapping",number:"02",title:"Basic",titleAccent:"Mapping",children:[(0,r.jsx)(t.p,{children:"Transform elements in a collection by applying a function to each item."}),(0,r.jsx)(o,{file:"basic-mapping.go",children:`package main

import (
  "fmt"
  "strings"
  
  A "github.com/IBM/fp-go/v2/array"
)

func main() {
  words := []string{"hello", "world", "functional", "programming"}
  
  // Convert to uppercase
  uppercase := A.Map(strings.ToUpper)(words)
  fmt.Printf("Uppercase: %v\\n", uppercase)
  // Output: Uppercase: [HELLO WORLD FUNCTIONAL PROGRAMMING]
  
  // Get lengths
  lengths := A.Map(func(s string) int {
      return len(s)
  })(words)
  fmt.Printf("Lengths: %v\\n", lengths)
  // Output: Lengths: [5 5 10 11]
}`})]}),"\n",(0,r.jsxs)(c,{id:"filter-map-combined",number:"03",title:"Filter and Map",titleAccent:"Combined",children:[(0,r.jsx)(t.p,{children:"Chain filtering and mapping operations for powerful data transformations."}),(0,r.jsx)(o,{file:"filter-map-combined.go",children:`package main

import (
  "fmt"
  "strings"
  
  A "github.com/IBM/fp-go/v2/array"
  F "github.com/IBM/fp-go/v2/function"
)

type Product struct {
  Name  string
  Price float64
  Stock int
}

func main() {
  products := []Product{
      {Name: "Apple", Price: 1.50, Stock: 10},
      {Name: "Banana", Price: 0.75, Stock: 0},
      {Name: "Cherry", Price: 2.00, Stock: 5},
      {Name: "Date", Price: 3.00, Stock: 0},
  }
  
  // Get names of in-stock products under $2
  result := F.Pipe2(
      products,
      A.Filter(func(p Product) bool {
          return p.Stock > 0 && p.Price < 2.00
      }),
      A.Map(func(p Product) string {
          return strings.ToUpper(p.Name)
      }),
  )
  
  fmt.Printf("Available affordable products: %v\\n", result)
  // Output: Available affordable products: [APPLE]
}`})]}),"\n",(0,r.jsxs)(c,{id:"filtermap",number:"04",title:"FilterMap - Filter and",titleAccent:"Transform",children:[(0,r.jsx)(t.p,{children:"Filter and transform in a single operation for better performance."}),(0,r.jsx)(o,{file:"filtermap.go",children:`package main

import (
  "fmt"
  "strconv"
  
  A "github.com/IBM/fp-go/v2/array"
  O "github.com/IBM/fp-go/v2/option"
)

// Parse string to int, returning None for invalid strings
func parseInt(s string) O.Option[int] {
  val, err := strconv.Atoi(s)
  if err != nil {
      return O.None[int]()
  }
  return O.Some(val)
}

func main() {
  inputs := []string{"1", "abc", "2", "def", "3", "4"}
  
  // Parse and filter valid integers
  numbers := A.FilterMap(parseInt)(inputs)
  
  fmt.Printf("Valid numbers: %v\\n", numbers)
  // Output: Valid numbers: [1 2 3 4]
}`})]}),"\n",(0,r.jsxs)(c,{id:"partition",number:"05",title:"Partition - Split by",titleAccent:"Predicate",children:[(0,r.jsx)(t.p,{children:"Split a collection into two based on a predicate\u2014one for matches, one for non-matches."}),(0,r.jsx)(o,{file:"partition.go",children:`package main

import (
  "fmt"
  
  A "github.com/IBM/fp-go/v2/array"
)

func main() {
  numbers := []int{1, 2, 3, 4, 5, 6, 7, 8, 9, 10}
  
  // Partition into evens and odds
  evens, odds := A.Partition(func(n int) bool {
      return n%2 == 0
  })(numbers)
  
  fmt.Printf("Evens: %v\\n", evens)
  fmt.Printf("Odds: %v\\n", odds)
  // Output:
  // Evens: [2 4 6 8 10]
  // Odds: [1 3 5 7 9]
}`})]}),"\n",(0,r.jsxs)(c,{id:"complex-filtering",number:"06",title:"Complex",titleAccent:"Filtering",children:[(0,r.jsx)(t.p,{children:"Use multiple conditions and custom logic for sophisticated filtering."}),(0,r.jsx)(o,{file:"complex-filtering.go",children:`package main

import (
  "fmt"
  "strings"
  
  A "github.com/IBM/fp-go/v2/array"
)

type User struct {
  Name   string
  Age    int
  Active bool
  Role   string
}

func main() {
  users := []User{
      {Name: "Alice", Age: 25, Active: true, Role: "admin"},
      {Name: "Bob", Age: 17, Active: true, Role: "user"},
      {Name: "Charlie", Age: 30, Active: false, Role: "user"},
      {Name: "Diana", Age: 22, Active: true, Role: "user"},
  }
  
  // Find active adult users
  activeAdults := A.Filter(func(u User) bool {
      return u.Active && u.Age >= 18
  })(users)
  
  fmt.Println("Active adult users:")
  for _, u := range activeAdults {
      fmt.Printf("  - %s (%d)\\n", u.Name, u.Age)
  }
  
  // Find admins or users over 25
  privileged := A.Filter(func(u User) bool {
      return u.Role == "admin" || u.Age > 25
  })(users)
  
  fmt.Println("\\nPrivileged users:")
  for _, u := range privileged {
      fmt.Printf("  - %s (%s)\\n", u.Name, u.Role)
  }
}`})]}),"\n",(0,r.jsx)(c,{id:"best-practices",number:"07",title:"Best",titleAccent:"Practices",children:(0,r.jsxs)(n,{children:[(0,r.jsx)(i,{status:"required",children:(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Use Filter before Map"})," \u2014 Reduce data early to improve performance"]})}),(0,r.jsx)(i,{status:"required",children:(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Use FilterMap"})," \u2014 When filtering and mapping, use FilterMap for efficiency"]})}),(0,r.jsx)(i,{status:"required",children:(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Keep predicates pure"})," \u2014 No side effects in filter functions"]})}),(0,r.jsx)(i,{status:"required",children:(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Keep mappers pure"})," \u2014 No side effects in map functions"]})}),(0,r.jsx)(i,{status:"recommended",children:(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Use Partition"})," \u2014 When you need both filtered and rejected items"]})}),(0,r.jsx)(i,{status:"optional",children:(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Compose operations"})," \u2014 Chain multiple filters and maps for clarity"]})})]})})]})}function d(e={}){let{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}function u(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},8453(e,t,n){n.d(t,{R:()=>o,x:()=>a});var i=n(6540);let r={},s=i.createContext(r);function o(e){let t=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);
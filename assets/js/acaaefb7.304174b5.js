"use strict";(self.webpackChunkfp_go_docs=self.webpackChunkfp_go_docs||[]).push([["7466"],{5606(e,i,t){t.r(i),t.d(i,{metadata:()=>n,default:()=>d,frontMatter:()=>s,contentTitle:()=>o,toc:()=>l,assets:()=>c});var n=JSON.parse('{"id":"v2/collections/array-uniq","title":"Array - Uniq","description":"Removing duplicates from arrays with StrictUniq and Uniq operations.","source":"@site/docs/v2/collections/array-uniq.md","sourceDirName":"v2/collections","slug":"/v2/collections/array-uniq","permalink":"/fp-go/docs/v2/collections/array-uniq","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"Array - Uniq","hide_title":true,"description":"Removing duplicates from arrays with StrictUniq and Uniq operations.","sidebar_position":5},"sidebar":"apiSidebar","previous":{"title":"Array - Sort","permalink":"/fp-go/docs/v2/collections/array-sort"},"next":{"title":"Array - Zip","permalink":"/fp-go/docs/v2/collections/array-zip"}}'),r=t(4848),a=t(8453);let s={title:"Array - Uniq",hide_title:!0,description:"Removing duplicates from arrays with StrictUniq and Uniq operations.",sidebar_position:5},o,c={},l=[{value:"StrictUniq",id:"strictuniq",level:3},{value:"Uniq by Field",id:"uniq-by-field",level:3},{value:"Uniq by Category",id:"uniq-by-category",level:3},{value:"Deduplicating Tags",id:"deduplicating-tags",level:3},{value:"Unique Combinations",id:"unique-combinations",level:3},{value:"Unique and Sort",id:"unique-and-sort",level:3},{value:"Unique by Multiple Fields",id:"unique-by-multiple-fields",level:3},{value:"Union via Unique",id:"union-via-unique",level:3}];function u(e){let i={code:"code",h3:"h3",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components},{ApiTable:t,Callout:n,CodeCard:s,PageHeader:o,Section:c}=i;return t||p("ApiTable",!0),n||p("Callout",!0),s||p("CodeCard",!0),o||p("PageHeader",!0),c||p("Section",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o,{eyebrow:"Reference \xb7 Collections",title:"Array",titleAccent:"Uniqueness",lede:"Removing duplicates from arrays. Use StrictUniq for comparable types or Uniq with custom key extraction.",meta:[{label:"Package",value:"github.com/IBM/fp-go/v2/array"},{label:"Operations",value:"StrictUniq, Uniq"}]}),"\n",(0,r.jsx)(c,{id:"api",number:"01",title:"Core",titleAccent:"API",children:(0,r.jsx)(t,{children:(0,r.jsxs)(i.table,{children:[(0,r.jsx)(i.thead,{children:(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.th,{children:"Function"}),(0,r.jsx)(i.th,{children:"Signature"}),(0,r.jsx)(i.th,{children:"Description"})]})}),(0,r.jsxs)(i.tbody,{children:[(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"StrictUniq"})}),(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"func StrictUniq[A comparable]([]A) []A"})}),(0,r.jsx)(i.td,{children:"Remove duplicates (comparable types)"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"Uniq"})}),(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"func Uniq[A, K comparable](f func(A) K) func([]A) []A"})}),(0,r.jsx)(i.td,{children:"Remove duplicates by key"})]})]})]})})}),"\n",(0,r.jsxs)(c,{id:"examples",number:"02",title:"Usage",titleAccent:"Examples",children:[(0,r.jsx)(i.h3,{id:"strictuniq",children:"StrictUniq"}),(0,r.jsx)(s,{file:"strict_uniq.go",children:`import (
  A "github.com/IBM/fp-go/v2/array"
  F "github.com/IBM/fp-go/v2/function"
)

// Numbers
numbers := []int{1, 2, 2, 3, 1, 4, 3, 5}
unique := A.StrictUniq(numbers)
// []int{1, 2, 3, 4, 5}

// Strings
words := []string{"apple", "banana", "apple", "cherry", "banana"}
unique := A.StrictUniq(words)
// []string{"apple", "banana", "cherry"}

// Order preserved (first occurrence kept)
items := []int{3, 1, 2, 1, 3, 4, 2}
unique := A.StrictUniq(items)
// []int{3, 1, 2, 4}
`}),(0,r.jsx)(i.h3,{id:"uniq-by-field",children:"Uniq by Field"}),(0,r.jsx)(s,{file:"uniq_by_field.go",children:`type User struct {
  ID   int
  Name string
  Age  int
}

users := []User{
  {ID: 1, Name: "Alice", Age: 30},
  {ID: 2, Name: "Bob", Age: 25},
  {ID: 1, Name: "Alice Updated", Age: 31},  // Duplicate ID
  {ID: 3, Name: "Charlie", Age: 35},
}

// Unique by ID
uniqueByID := F.Pipe2(
  users,
  A.Uniq(func(u User) int { return u.ID }),
)
// []User{
//   {ID: 1, Name: "Alice", Age: 30},      // First occurrence kept
//   {ID: 2, Name: "Bob", Age: 25},
//   {ID: 3, Name: "Charlie", Age: 35},
// }

// Unique by name (case-insensitive)
uniqueByName := F.Pipe2(
  users,
  A.Uniq(func(u User) string { 
      return strings.ToLower(u.Name) 
  }),
)
`}),(0,r.jsx)(i.h3,{id:"uniq-by-category",children:"Uniq by Category"}),(0,r.jsx)(s,{file:"uniq_category.go",children:`type Product struct {
  Name     string
  Category string
  Price    float64
}

products := []Product{
  {Name: "Laptop", Category: "Electronics", Price: 999},
  {Name: "Mouse", Category: "Electronics", Price: 29},
  {Name: "Desk", Category: "Furniture", Price: 299},
  {Name: "Keyboard", Category: "Electronics", Price: 79},
}

// Unique by category
uniqueCategories := F.Pipe2(
  products,
  A.Uniq(func(p Product) string { return p.Category }),
)
// []Product{
//   {Name: "Laptop", Category: "Electronics", ...},
//   {Name: "Desk", Category: "Furniture", ...},
// }
`}),(0,r.jsx)(i.h3,{id:"deduplicating-tags",children:"Deduplicating Tags"}),(0,r.jsx)(s,{file:"tags.go",children:`type Article struct {
  Title string
  Tags  []string
}

articles := []Article{
  {Title: "Go Basics", Tags: []string{"go", "tutorial", "basics"}},
  {Title: "Advanced Go", Tags: []string{"go", "advanced", "patterns"}},
  {Title: "FP in Go", Tags: []string{"go", "functional", "fp"}},
}

// Get all unique tags
allTags := F.Pipe3(
  articles,
  A.Chain(func(a Article) []string { return a.Tags }),
  A.StrictUniq,
)
// []string{"go", "tutorial", "basics", "advanced", "patterns", "functional", "fp"}
`}),(0,r.jsx)(i.h3,{id:"unique-combinations",children:"Unique Combinations"}),(0,r.jsx)(s,{file:"combinations.go",children:`type Event struct {
  UserID int
  Action string
  Target string
}

events := []Event{
  {UserID: 1, Action: "view", Target: "page1"},
  {UserID: 1, Action: "view", Target: "page2"},
  {UserID: 1, Action: "view", Target: "page1"},  // Duplicate
  {UserID: 2, Action: "view", Target: "page1"},
}

// Unique by user-target combination
uniqueViews := F.Pipe2(
  events,
  A.Uniq(func(e Event) string {
      return fmt.Sprintf("%d-%s", e.UserID, e.Target)
  }),
)
// 3 unique user-target combinations
`})]}),"\n",(0,r.jsxs)(c,{id:"patterns",number:"03",title:"Common",titleAccent:"Patterns",children:[(0,r.jsx)(i.h3,{id:"unique-and-sort",children:"Unique and Sort"}),(0,r.jsx)(s,{file:"unique_sort.go",children:`numbers := []int{5, 2, 8, 2, 1, 5, 3}

// Get unique values and sort
result := F.Pipe3(
  numbers,
  A.StrictUniq,
  A.Sort(N.Ord),
)
// []int{1, 2, 3, 5, 8}
`}),(0,r.jsx)(i.h3,{id:"unique-by-multiple-fields",children:"Unique by Multiple Fields"}),(0,r.jsx)(s,{file:"multiple_fields.go",children:`type Record struct {
  Year  int
  Month int
  Value float64
}

records := []Record{
  {Year: 2024, Month: 1, Value: 100},
  {Year: 2024, Month: 2, Value: 200},
  {Year: 2024, Month: 1, Value: 150},  // Duplicate year-month
}

// Unique by year-month combination
uniqueByPeriod := F.Pipe2(
  records,
  A.Uniq(func(r Record) string {
      return fmt.Sprintf("%d-%02d", r.Year, r.Month)
  }),
)
// 2 records (2024-01 and 2024-02)
`}),(0,r.jsx)(i.h3,{id:"union-via-unique",children:"Union via Unique"}),(0,r.jsx)(s,{file:"union.go",children:`// Combine and deduplicate
func union[T comparable](arrays ...[]T) []T {
  combined := F.Pipe2(
      arrays,
      A.Flatten,
  )
  return A.StrictUniq(combined)
}

arr1 := []int{1, 2, 3}
arr2 := []int{3, 4, 5}
result := union(arr1, arr2)
// []int{1, 2, 3, 4, 5}
`})]}),"\n",(0,r.jsx)(n,{type:"info",children:(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.strong,{children:"Performance"}),": For comparable types, use ",(0,r.jsx)(i.code,{children:"StrictUniq"})," which is faster. For custom key extraction, use ",(0,r.jsx)(i.code,{children:"Uniq"}),". First occurrence is always kept."]})})]})}function d(e={}){let{wrapper:i}={...(0,a.R)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}function p(e,i){throw Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},8453(e,i,t){t.d(i,{R:()=>s,x:()=>o});var n=t(6540);let r={},a=n.createContext(r);function s(e){let i=n.useContext(a);return n.useMemo(function(){return"function"==typeof e?e(i):{...i,...e}},[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),n.createElement(a.Provider,{value:i},e.children)}}}]);
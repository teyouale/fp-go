"use strict";(self.webpackChunkfp_go_docs=self.webpackChunkfp_go_docs||[]).push([["9955"],{5727(e,t,r){r.r(t),r.d(t,{metadata:()=>i,default:()=>p,frontMatter:()=>s,contentTitle:()=>a,toc:()=>d,assets:()=>l});var i=JSON.parse('{"id":"v2/collections/array-sort","title":"Array - Sort","description":"Sorting arrays with type-safe ordering using the Ord type class.","source":"@site/docs/v2/collections/array-sort.md","sourceDirName":"v2/collections","slug":"/v2/collections/array-sort","permalink":"/fp-go/docs/v2/collections/array-sort","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"Array - Sort","hide_title":true,"description":"Sorting arrays with type-safe ordering using the Ord type class.","sidebar_position":3},"sidebar":"apiSidebar","previous":{"title":"Array - Monoid","permalink":"/fp-go/docs/v2/collections/array-monoid"},"next":{"title":"Array - Uniq","permalink":"/fp-go/docs/v2/collections/array-uniq"}}'),n=r(4848),o=r(8453);let s={title:"Array - Sort",hide_title:!0,description:"Sorting arrays with type-safe ordering using the Ord type class.",sidebar_position:3},a,l={},d=[{value:"Basic Sorting",id:"basic-sorting",level:3},{value:"String Sorting",id:"string-sorting",level:3},{value:"SortByKey",id:"sortbykey",level:3},{value:"Multiple Orderings",id:"multiple-orderings",level:3},{value:"Custom Ordering",id:"custom-ordering",level:3},{value:"Sorting Events by Time",id:"sorting-events-by-time",level:3},{value:"Sorting with Nullables",id:"sorting-with-nullables",level:3},{value:"Sort and Take Top N",id:"sort-and-take-top-n",level:3},{value:"Conditional Sorting",id:"conditional-sorting",level:3},{value:"Precompute Expensive Keys",id:"precompute-expensive-keys",level:3}];function c(e){let t={code:"code",h3:"h3",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...e.components},{ApiTable:r,Callout:i,CodeCard:s,PageHeader:a,Section:l}=t;return r||u("ApiTable",!0),i||u("Callout",!0),s||u("CodeCard",!0),a||u("PageHeader",!0),l||u("Section",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a,{eyebrow:"Reference \xb7 Collections",title:"Array",titleAccent:"Sort",lede:"Sorting arrays with type-safe ordering. Stable sorting operations using the Ord type class. All operations return new arrays without modifying the original.",meta:[{label:"Package",value:"github.com/IBM/fp-go/v2/array"},{label:"Type Class",value:"Ord"}]}),"\n",(0,n.jsx)(l,{id:"api",number:"01",title:"Core",titleAccent:"API",children:(0,n.jsx)(r,{children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Function"}),(0,n.jsx)(t.th,{children:"Signature"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"Sort"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"func Sort[A any](ord Ord[A]) func([]A) []A"})}),(0,n.jsx)(t.td,{children:"Sort using Ord instance"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"SortByKey"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"func SortByKey[A, B any](ord Ord[B], f func(A) B) func([]A) []A"})}),(0,n.jsx)(t.td,{children:"Sort by extracting key"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"SortBy"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"func SortBy[A any](ords []Ord[A]) func([]A) []A"})}),(0,n.jsx)(t.td,{children:"Sort using multiple orderings"})]})]})]})})}),"\n",(0,n.jsxs)(l,{id:"examples",number:"02",title:"Usage",titleAccent:"Examples",children:[(0,n.jsx)(t.h3,{id:"basic-sorting",children:"Basic Sorting"}),(0,n.jsx)(s,{file:"basic.go",children:`import (
  A "github.com/IBM/fp-go/v2/array"
  F "github.com/IBM/fp-go/v2/function"
  N "github.com/IBM/fp-go/v2/number"
  O "github.com/IBM/fp-go/v2/ord"
)

numbers := []int{5, 2, 8, 1, 9, 3}

// Sort ascending
sorted := F.Pipe2(
  numbers,
  A.Sort(N.Ord),
)
// []int{1, 2, 3, 5, 8, 9}

// Sort descending
descending := F.Pipe2(
  numbers,
  A.Sort(O.Reverse(N.Ord)),
)
// []int{9, 8, 5, 3, 2, 1}
`}),(0,n.jsx)(t.h3,{id:"string-sorting",children:"String Sorting"}),(0,n.jsx)(s,{file:"strings.go",children:`import S "github.com/IBM/fp-go/v2/string"

words := []string{"zebra", "apple", "mango", "banana"}

// Sort alphabetically
sorted := F.Pipe2(
  words,
  A.Sort(S.Ord),
)
// []string{"apple", "banana", "mango", "zebra"}

// Case-insensitive sort
caseInsensitive := O.FromCompare(func(a, b string) int {
  return strings.Compare(
      strings.ToLower(a),
      strings.ToLower(b),
  )
})

sorted := F.Pipe2(
  []string{"Zebra", "apple", "Mango", "banana"},
  A.Sort(caseInsensitive),
)
// []string{"apple", "banana", "Mango", "Zebra"}
`}),(0,n.jsx)(t.h3,{id:"sortbykey",children:"SortByKey"}),(0,n.jsx)(s,{file:"sort_by_key.go",children:`type Person struct {
  Name string
  Age  int
}

people := []Person{
  {Name: "Alice", Age: 30},
  {Name: "Bob", Age: 25},
  {Name: "Charlie", Age: 35},
}

// Sort by age
byAge := F.Pipe2(
  people,
  A.SortByKey(N.Ord, func(p Person) int { return p.Age }),
)
// [{Bob 25} {Alice 30} {Charlie 35}]

// Sort by name
byName := F.Pipe2(
  people,
  A.SortByKey(S.Ord, func(p Person) string { return p.Name }),
)
// [{Alice 30} {Bob 25} {Charlie 35}]
`}),(0,n.jsx)(t.h3,{id:"multiple-orderings",children:"Multiple Orderings"}),(0,n.jsx)(s,{file:"multiple.go",children:`type Employee struct {
  Department string
  Name       string
  Salary     int
}

employees := []Employee{
  {Department: "IT", Name: "Alice", Salary: 80000},
  {Department: "HR", Name: "Bob", Salary: 60000},
  {Department: "IT", Name: "Charlie", Salary: 75000},
  {Department: "HR", Name: "Diana", Salary: 65000},
}

// Sort by department, then by salary (descending)
sorted := F.Pipe2(
  employees,
  A.SortBy([]O.Ord[Employee]{
      // First by department
      O.FromCompare(func(a, b Employee) int {
          return strings.Compare(a.Department, b.Department)
      }),
      // Then by salary (descending)
      O.Reverse(O.FromCompare(func(a, b Employee) int {
          return a.Salary - b.Salary
      })),
  }),
)
// [{HR Diana 65000} {HR Bob 60000} {IT Alice 80000} {IT Charlie 75000}]
`}),(0,n.jsx)(t.h3,{id:"custom-ordering",children:"Custom Ordering"}),(0,n.jsx)(s,{file:"custom.go",children:`// Custom comparison function
customOrd := O.FromCompare(func(a, b MyType) int {
  // Return: -1 if a < b, 0 if a == b, 1 if a > b
  if a.Value < b.Value {
      return -1
  }
  if a.Value > b.Value {
      return 1
  }
  return 0
})

// Derive ordering from existing one
type User struct {
  ID   int
  Name string
}

// Order users by ID using number ordering
userOrd := O.Contramap(
  func(u User) int { return u.ID },
)(N.Ord)

sorted := F.Pipe2(
  users,
  A.Sort(userOrd),
)
`}),(0,n.jsx)(t.h3,{id:"sorting-events-by-time",children:"Sorting Events by Time"}),(0,n.jsx)(s,{file:"events.go",children:`type Event struct {
  Name      string
  Timestamp time.Time
  Priority  int
}

events := []Event{
  {Name: "Meeting", Timestamp: time.Now().Add(2 * time.Hour), Priority: 2},
  {Name: "Deadline", Timestamp: time.Now().Add(1 * time.Hour), Priority: 1},
  {Name: "Review", Timestamp: time.Now().Add(3 * time.Hour), Priority: 2},
}

// Sort by priority (ascending), then by time (ascending)
timeOrd := O.FromCompare(func(a, b time.Time) int {
  if a.Before(b) { return -1 }
  if a.After(b) { return 1 }
  return 0
})

sorted := F.Pipe2(
  events,
  A.SortBy([]O.Ord[Event]{
      O.FromCompare(func(a, b Event) int {
          return a.Priority - b.Priority
      }),
      O.Contramap(func(e Event) time.Time { return e.Timestamp })(timeOrd),
  }),
)
// Events sorted by priority first, then by time
`}),(0,n.jsx)(t.h3,{id:"sorting-with-nullables",children:"Sorting with Nullables"}),(0,n.jsx)(s,{file:"nullables.go",children:`type Record struct {
  ID        int
  UpdatedAt *time.Time  // nullable
}

records := []Record{
  {ID: 1, UpdatedAt: nil},
  {ID: 2, UpdatedAt: ptr(time.Now().Add(-1 * time.Hour))},
  {ID: 3, UpdatedAt: ptr(time.Now())},
}

// Sort with nulls last
nullsLastOrd := O.FromCompare(func(a, b Record) int {
  if a.UpdatedAt == nil && b.UpdatedAt == nil {
      return 0
  }
  if a.UpdatedAt == nil {
      return 1  // a goes after b
  }
  if b.UpdatedAt == nil {
      return -1  // a goes before b
  }
  if a.UpdatedAt.Before(*b.UpdatedAt) {
      return -1
  }
  if a.UpdatedAt.After(*b.UpdatedAt) {
      return 1
  }
  return 0
})

sorted := F.Pipe2(
  records,
  A.Sort(nullsLastOrd),
)
// [{2 ...} {3 ...} {1 nil}]
`})]}),"\n",(0,n.jsxs)(l,{id:"patterns",number:"03",title:"Common",titleAccent:"Patterns",children:[(0,n.jsx)(t.h3,{id:"sort-and-take-top-n",children:"Sort and Take Top N"}),(0,n.jsx)(s,{file:"top_n.go",children:`// Get top 5 by score
top5 := F.Pipe3(
  items,
  A.SortByKey(O.Reverse(N.Ord), func(i Item) int { return i.Score }),
  A.Slice(0, 5),
)
`}),(0,n.jsx)(t.h3,{id:"conditional-sorting",children:"Conditional Sorting"}),(0,n.jsx)(s,{file:"conditional.go",children:`// Sort ascending or descending based on flag
ord := func(ascending bool) O.Ord[int] {
  if ascending {
      return N.Ord
  }
  return O.Reverse(N.Ord)
}

sorted := F.Pipe2(
  numbers,
  A.Sort(ord(isAscending)),
)
`}),(0,n.jsx)(t.h3,{id:"precompute-expensive-keys",children:"Precompute Expensive Keys"}),(0,n.jsx)(s,{file:"precompute.go",children:`type ItemWithKey struct {
  Item Item
  Key  float64
}

// Precompute expensive keys
withKeys := F.Pipe2(
  items,
  A.Map(func(item Item) ItemWithKey {
      return ItemWithKey{
          Item: item,
          Key:  expensiveComputation(item),
      }
  }),
)

// Sort by precomputed key
sorted := F.Pipe3(
  withKeys,
  A.SortByKey(floatOrd, func(iwk ItemWithKey) float64 { return iwk.Key }),
  A.Map(func(iwk ItemWithKey) Item { return iwk.Item }),
)
`})]}),"\n",(0,n.jsx)(i,{type:"info",children:(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Stability"}),": All sort operations are stable - elements with equal keys maintain their relative order. This is useful for multi-level sorting."]})})]})}function p(e={}){let{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}function u(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},8453(e,t,r){r.d(t,{R:()=>s,x:()=>a});var i=r(6540);let n={},o=i.createContext(n);function s(e){let t=i.useContext(o);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);
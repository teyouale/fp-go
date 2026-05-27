"use strict";(self.webpackChunkfp_go_docs=self.webpackChunkfp_go_docs||[]).push([["5369"],{2074(e,n,i){i.r(n),i.d(n,{metadata:()=>t,default:()=>u,frontMatter:()=>s,contentTitle:()=>o,toc:()=>a,assets:()=>l});var t=JSON.parse('{"id":"v2/collections/array-find","title":"Array - Find","description":"Finding elements in arrays with type-safe operations - FindFirst, FindLast, FindFirstMap.","source":"@site/docs/v2/collections/array-find.md","sourceDirName":"v2/collections","slug":"/v2/collections/array-find","permalink":"/fp-go/docs/v2/collections/array-find","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"Array - Find","hide_title":true,"description":"Finding elements in arrays with type-safe operations - FindFirst, FindLast, FindFirstMap.","sidebar_position":2},"sidebar":"apiSidebar","previous":{"title":"Array - Equality","permalink":"/fp-go/docs/v2/collections/array-eq"},"next":{"title":"Array - Monoid","permalink":"/fp-go/docs/v2/collections/array-monoid"}}'),r=i(4848),d=i(8453);let s={title:"Array - Find",hide_title:!0,description:"Finding elements in arrays with type-safe operations - FindFirst, FindLast, FindFirstMap.",sidebar_position:2},o,l={},a=[{value:"FindFirst",id:"findfirst",level:3},{value:"FindLast",id:"findlast",level:3},{value:"FindFirstMap",id:"findfirstmap",level:3},{value:"Parsing Example",id:"parsing-example",level:3},{value:"Real-World: Configuration",id:"real-world-configuration",level:3},{value:"Real-World: Products",id:"real-world-products",level:3},{value:"Find with Default",id:"find-with-default",level:3},{value:"Find and Transform",id:"find-and-transform",level:3},{value:"Validation and Find",id:"validation-and-find",level:3}];function c(e){let n={code:"code",h3:"h3",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...e.components},{ApiTable:i,Callout:t,CodeCard:s,PageHeader:o,Section:l}=n;return i||f("ApiTable",!0),t||f("Callout",!0),s||f("CodeCard",!0),o||f("PageHeader",!0),l||f("Section",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o,{eyebrow:"Reference \xb7 Collections",title:"Array",titleAccent:"Find",lede:"Finding elements in arrays with type-safe operations. All find operations return Option[T] to safely handle cases where no element is found.",meta:[{label:"Package",value:"github.com/IBM/fp-go/v2/array"},{label:"Returns",value:"Option[T]"}]}),"\n",(0,r.jsx)(l,{id:"api",number:"01",title:"Core",titleAccent:"API",children:(0,r.jsx)(i,{children:(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Function"}),(0,r.jsx)(n.th,{children:"Signature"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"FindFirst"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"func FindFirst[A any](pred func(A) bool) func([]A) Option[A]"})}),(0,r.jsx)(n.td,{children:"Find first matching element"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"FindFirstWithIndex"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"func FindFirstWithIndex[A any](pred func(int, A) bool) func([]A) Option[A]"})}),(0,r.jsx)(n.td,{children:"Find first with index"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"FindLast"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"func FindLast[A any](pred func(A) bool) func([]A) Option[A]"})}),(0,r.jsx)(n.td,{children:"Find last matching element"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"FindLastWithIndex"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"func FindLastWithIndex[A any](pred func(int, A) bool) func([]A) Option[A]"})}),(0,r.jsx)(n.td,{children:"Find last with index"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"FindFirstMap"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"func FindFirstMap[A, B any](f func(A) Option[B]) func([]A) Option[B]"})}),(0,r.jsx)(n.td,{children:"Find and transform"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"FindLastMap"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"func FindLastMap[A, B any](f func(A) Option[B]) func([]A) Option[B]"})}),(0,r.jsx)(n.td,{children:"Find last and transform"})]})]})]})})}),"\n",(0,r.jsxs)(l,{id:"examples",number:"02",title:"Usage",titleAccent:"Examples",children:[(0,r.jsx)(n.h3,{id:"findfirst",children:"FindFirst"}),(0,r.jsx)(s,{file:"find_first.go",children:`import (
  A "github.com/IBM/fp-go/v2/array"
  F "github.com/IBM/fp-go/v2/function"
  O "github.com/IBM/fp-go/v2/option"
)

numbers := []int{1, 2, 3, 4, 5, 6}

// Find first even number
firstEven := F.Pipe2(
  numbers,
  A.FindFirst(func(n int) bool { return n%2 == 0 }),
)
// Some(2)

// Find first number > 10
notFound := F.Pipe2(
  numbers,
  A.FindFirst(func(n int) bool { return n > 10 }),
)
// None
`}),(0,r.jsx)(n.h3,{id:"findlast",children:"FindLast"}),(0,r.jsx)(s,{file:"find_last.go",children:`numbers := []int{1, 2, 3, 4, 5, 6}

// Find last even number
lastEven := F.Pipe2(
  numbers,
  A.FindLast(func(n int) bool { return n%2 == 0 }),
)
// Some(6)

// Find last number < 3
lastSmall := F.Pipe2(
  numbers,
  A.FindLast(func(n int) bool { return n < 3 }),
)
// Some(2)
`}),(0,r.jsx)(n.h3,{id:"findfirstmap",children:"FindFirstMap"}),(0,r.jsx)(s,{file:"find_first_map.go",children:`type User struct {
  ID    int
  Name  string
  Email string
}

users := []User{
  {ID: 1, Name: "Alice", Email: ""},
  {ID: 2, Name: "Bob", Email: "bob@example.com"},
  {ID: 3, Name: "Charlie", Email: "charlie@example.com"},
}

// Find first user with email
firstWithEmail := F.Pipe2(
  users,
  A.FindFirstMap(func(u User) O.Option[string] {
      if u.Email != "" {
          return O.Some(u.Email)
      }
      return O.None[string]()
  }),
)
// Some("bob@example.com")
`}),(0,r.jsx)(n.h3,{id:"parsing-example",children:"Parsing Example"}),(0,r.jsx)(s,{file:"parsing.go",children:`strings := []string{"abc", "123", "def", "456"}

// Find first valid number
firstNumber := F.Pipe2(
  strings,
  A.FindFirstMap(func(s string) O.Option[int] {
      if n, err := strconv.Atoi(s); err == nil {
          return O.Some(n)
      }
      return O.None[int]()
  }),
)
// Some(123)
`}),(0,r.jsx)(n.h3,{id:"real-world-configuration",children:"Real-World: Configuration"}),(0,r.jsx)(s,{file:"config.go",children:`type Config struct {
  Key   string
  Value string
  Env   string
}

configs := []Config{
  {Key: "api_url", Value: "http://dev.api", Env: "dev"},
  {Key: "api_url", Value: "http://prod.api", Env: "prod"},
  {Key: "timeout", Value: "30", Env: "prod"},
}

// Find production API URL
prodAPI := F.Pipe3(
  configs,
  A.FindFirst(func(c Config) bool {
      return c.Key == "api_url" && c.Env == "prod"
  }),
  O.Map(func(c Config) string { return c.Value }),
  O.GetOrElse(func() string { return "http://default.api" }),
)
// "http://prod.api"
`}),(0,r.jsx)(n.h3,{id:"real-world-products",children:"Real-World: Products"}),(0,r.jsx)(s,{file:"products.go",children:`type Product struct {
  ID       int
  Name     string
  Price    float64
  InStock  bool
  Category string
}

products := []Product{
  {ID: 1, Name: "Laptop", Price: 999, InStock: false, Category: "Electronics"},
  {ID: 2, Name: "Mouse", Price: 29, InStock: true, Category: "Electronics"},
  {ID: 3, Name: "Keyboard", Price: 79, InStock: true, Category: "Electronics"},
}

// Find first affordable in-stock electronics
affordable := F.Pipe2(
  products,
  A.FindFirst(func(p Product) bool {
      return p.InStock && 
             p.Category == "Electronics" && 
             p.Price < 100
  }),
)
// Some(Product{ID: 2, Name: "Mouse", ...})
`})]}),"\n",(0,r.jsxs)(l,{id:"patterns",number:"03",title:"Common",titleAccent:"Patterns",children:[(0,r.jsx)(n.h3,{id:"find-with-default",children:"Find with Default"}),(0,r.jsx)(s,{file:"default.go",children:`// Find with fallback
result := F.Pipe2(
  numbers,
  A.FindFirst(func(n int) bool { return n > 100 }),
  O.GetOrElse(func() int { return -1 }),
)
// -1
`}),(0,r.jsx)(n.h3,{id:"find-and-transform",children:"Find and Transform"}),(0,r.jsx)(s,{file:"transform.go",children:`// Find, transform, and provide default
email := F.Pipe3(
  users,
  A.FindFirst(func(u User) bool { return u.ID == targetID }),
  O.Map(func(u User) string { return u.Email }),
  O.GetOrElse(func() string { return "unknown@example.com" }),
)
`}),(0,r.jsx)(n.h3,{id:"validation-and-find",children:"Validation and Find"}),(0,r.jsx)(s,{file:"validation.go",children:`// Find first valid item
valid := F.Pipe2(
  items,
  A.FindFirstMap(func(item Item) O.Option[Item] {
      if err := item.Validate(); err == nil {
          return O.Some(item)
      }
      return O.None[Item]()
  }),
)
`})]}),"\n",(0,r.jsx)(t,{type:"info",children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Performance"}),": Find operations stop at the first match, making them more efficient than Filter + Head for finding single elements."]})})]})}function u(e={}){let{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}function f(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},8453(e,n,i){i.d(n,{R:()=>s,x:()=>o});var t=i(6540);let r={},d=t.createContext(r);function s(e){let n=t.useContext(d);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(d.Provider,{value:n},e.children)}}}]);
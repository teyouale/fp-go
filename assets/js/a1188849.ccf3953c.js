"use strict";(self.webpackChunkfp_go_docs=self.webpackChunkfp_go_docs||[]).push([["9812"],{8614(e,r,t){t.r(r),t.d(r,{metadata:()=>n,default:()=>p,frontMatter:()=>a,contentTitle:()=>o,toc:()=>l,assets:()=>c});var n=JSON.parse('{"id":"recipes/data-transformation","title":"Data Transformation","description":"Pipeline-based data processing","source":"@site/docs/recipes/data-transformation.md","sourceDirName":"recipes","slug":"/recipes/data-transformation","permalink":"/fp-go/docs/recipes/data-transformation","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"sidebar_position":6,"title":"Data Transformation","description":"Pipeline-based data processing","hide_title":true},"sidebar":"recipesSidebar","previous":{"title":"Retry Logic","permalink":"/fp-go/docs/recipes/retry"},"next":{"title":"Filtering and Mapping","permalink":"/fp-go/docs/recipes/filtering-mapping"}}'),s=t(4848),i=t(8453);let a={sidebar_position:6,title:"Data Transformation",description:"Pipeline-based data processing",hide_title:!0},o,c={},l=[];function m(e){let r={p:"p",strong:"strong",...(0,i.R)(),...e.components},{Checklist:t,ChecklistItem:n,CodeCard:a,PageHeader:o,Section:c,TLDR:l,TLDRCard:m}=r;return t||d("Checklist",!0),n||d("ChecklistItem",!0),a||d("CodeCard",!0),o||d("PageHeader",!0),c||d("Section",!0),l||d("TLDR",!0),m||d("TLDRCard",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o,{eyebrow:"Recipes \xb7 06 / 17",title:"Data",titleAccent:"Transformation",lede:"Transform data using functional pipelines, composing operations for clean and maintainable data processing.",meta:[{label:"Difficulty",value:"Intermediate"},{label:"Patterns",value:"6"},{label:"Use Cases",value:"ETL, Normalization, Enrichment"}]}),"\n",(0,s.jsxs)(l,{children:[(0,s.jsx)(m,{title:"Use Pipelines",icon:"git-branch",children:(0,s.jsx)(r.p,{children:"Chain operations for clarity and maintainability\u2014compose small functions into powerful transformations."})}),(0,s.jsx)(m,{title:"Keep Transformations Pure",icon:"shield",children:(0,s.jsx)(r.p,{children:"No side effects in transformation functions\u2014makes code predictable, testable, and composable."})}),(0,s.jsx)(m,{title:"Normalize Early",icon:"filter",children:(0,s.jsx)(r.p,{children:"Convert to common format at system boundaries\u2014simplifies downstream processing and reduces complexity."})})]}),"\n",(0,s.jsxs)(c,{id:"basic-pipeline",number:"01",title:"Basic",titleAccent:"Pipeline",children:[(0,s.jsx)(r.p,{children:"Transform data through a series of operations using function composition."}),(0,s.jsx)(a,{file:"basic-pipeline.go",children:`package main

import (
  "fmt"
  "strings"
  
  F "github.com/IBM/fp-go/v2/function"
)

// Transform functions
func trim(s string) string {
  return strings.TrimSpace(s)
}

func toLowerCase(s string) string {
  return strings.ToLower(s)
}

func addPrefix(prefix string) func(string) string {
  return func(s string) string {
      return prefix + s
  }
}

func main() {
  input := "  HELLO WORLD  "
  
  // Pipeline: trim -> lowercase -> add prefix
  result := F.Pipe3(
      input,
      trim,
      toLowerCase,
      addPrefix("processed: "),
  )
  
  fmt.Println(result)
  // Output: processed: hello world
}`})]}),"\n",(0,s.jsxs)(c,{id:"array-pipeline",number:"02",title:"Array Transformation",titleAccent:"Pipeline",children:[(0,s.jsx)(r.p,{children:"Process collections through transformation pipelines with filtering and mapping."}),(0,s.jsx)(a,{file:"array-pipeline.go",children:`package main

import (
  "fmt"
  "strings"
  
  A "github.com/IBM/fp-go/v2/array"
  F "github.com/IBM/fp-go/v2/function"
)

type Product struct {
  Name  string
  Price float64
}

func main() {
  products := []Product{
      {Name: "  Apple  ", Price: 1.50},
      {Name: "BANANA", Price: 0.75},
      {Name: "cherry", Price: 2.00},
  }
  
  // Pipeline: normalize names -> filter by price -> extract names
  result := F.Pipe3(
      products,
      // Normalize product names
      A.Map(func(p Product) Product {
          return Product{
              Name:  strings.TrimSpace(strings.ToLower(p.Name)),
              Price: p.Price,
          }
      }),
      // Filter products under $2
      A.Filter(func(p Product) bool {
          return p.Price < 2.00
      }),
      // Extract just the names
      A.Map(func(p Product) string {
          return p.Name
      }),
  )
  
  fmt.Printf("Affordable products: %v\\n", result)
  // Output: Affordable products: [apple banana]
}`})]}),"\n",(0,s.jsxs)(c,{id:"nested-data",number:"03",title:"Nested Data",titleAccent:"Transformation",children:[(0,s.jsx)(r.p,{children:"Transform nested structures by mapping over multiple levels."}),(0,s.jsx)(a,{file:"nested-transformation.go",children:`package main

import (
  "fmt"
  
  A "github.com/IBM/fp-go/v2/array"
  F "github.com/IBM/fp-go/v2/function"
)

type Order struct {
  ID    string
  Items []OrderItem
}

type OrderItem struct {
  Product  string
  Quantity int
  Price    float64
}

type OrderSummary struct {
  ID         string
  TotalItems int
  TotalPrice float64
}

func calculateTotal(items []OrderItem) float64 {
  return A.Reduce(
      func(acc float64, item OrderItem) float64 {
          return acc + (item.Price * float64(item.Quantity))
      },
      0.0,
  )(items)
}

func toSummary(order Order) OrderSummary {
  return OrderSummary{
      ID:         order.ID,
      TotalItems: len(order.Items),
      TotalPrice: calculateTotal(order.Items),
  }
}

func main() {
  orders := []Order{
      {
          ID: "ORD-001",
          Items: []OrderItem{
              {Product: "Apple", Quantity: 3, Price: 1.50},
              {Product: "Banana", Quantity: 2, Price: 0.75},
          },
      },
      {
          ID: "ORD-002",
          Items: []OrderItem{
              {Product: "Cherry", Quantity: 1, Price: 2.00},
          },
      },
  }
  
  // Transform orders to summaries
  summaries := A.Map(toSummary)(orders)
  
  for _, s := range summaries {
      fmt.Printf("%s: %d items, $%.2f\\n", s.ID, s.TotalItems, s.TotalPrice)
  }
}`})]}),"\n",(0,s.jsxs)(c,{id:"normalization",number:"04",title:"Data",titleAccent:"Normalization",children:[(0,s.jsx)(r.p,{children:"Normalize data from different sources into a common format for unified processing."}),(0,s.jsx)(a,{file:"normalization.go",children:`package main

import (
  "fmt"
  "time"
  
  A "github.com/IBM/fp-go/v2/array"
)

// Different source formats
type APIUser struct {
  UserID    int    \`json:"user_id"\`
  FullName  string \`json:"full_name"\`
  EmailAddr string \`json:"email_addr"\`
}

type DBUser struct {
  ID    int
  Name  string
  Email string
}

// Normalized format
type User struct {
  ID    int
  Name  string
  Email string
}

// Converters
func fromAPI(apiUser APIUser) User {
  return User{
      ID:    apiUser.UserID,
      Name:  apiUser.FullName,
      Email: apiUser.EmailAddr,
  }
}

func fromDB(dbUser DBUser) User {
  return User{
      ID:    dbUser.ID,
      Name:  dbUser.Name,
      Email: dbUser.Email,
  }
}

func main() {
  apiUsers := []APIUser{
      {UserID: 1, FullName: "Alice Smith", EmailAddr: "alice@example.com"},
      {UserID: 2, FullName: "Bob Jones", EmailAddr: "bob@example.com"},
  }
  
  dbUsers := []DBUser{
      {ID: 3, Name: "Charlie Brown", Email: "charlie@example.com"},
  }
  
  // Normalize both sources
  normalizedAPI := A.Map(fromAPI)(apiUsers)
  normalizedDB := A.Map(fromDB)(dbUsers)
  
  // Combine
  allUsers := append(normalizedAPI, normalizedDB...)
  
  for _, u := range allUsers {
      fmt.Printf("User %d: %s (%s)\\n", u.ID, u.Name, u.Email)
  }
}`})]}),"\n",(0,s.jsxs)(c,{id:"enrichment",number:"05",title:"Data",titleAccent:"Enrichment",children:[(0,s.jsx)(r.p,{children:"Enrich data with additional information from related sources."}),(0,s.jsx)(a,{file:"enrichment.go",children:`package main

import (
  "fmt"
  
  A "github.com/IBM/fp-go/v2/array"
  O "github.com/IBM/fp-go/v2/option"
)

type User struct {
  ID   int
  Name string
}

type Post struct {
  ID       int
  UserID   int
  Content  string
  UserName O.Option[string] // Enriched field
}

// Lookup user by ID
func findUser(users []User, userID int) O.Option[User] {
  for _, u := range users {
      if u.ID == userID {
          return O.Some(u)
      }
  }
  return O.None[User]()
}

// Enrich post with user name
func enrichPost(users []User) func(Post) Post {
  return func(post Post) Post {
      user := findUser(users, post.UserID)
      return Post{
          ID:       post.ID,
          UserID:   post.UserID,
          Content:  post.Content,
          UserName: O.Map(func(u User) string { return u.Name })(user),
      }
  }
}

func main() {
  users := []User{
      {ID: 1, Name: "Alice"},
      {ID: 2, Name: "Bob"},
  }
  
  posts := []Post{
      {ID: 101, UserID: 1, Content: "Hello world"},
      {ID: 102, UserID: 2, Content: "Functional programming rocks"},
      {ID: 103, UserID: 999, Content: "From deleted user"},
  }
  
  // Enrich posts with user names
  enrichedPosts := A.Map(enrichPost(users))(posts)
  
  for _, p := range enrichedPosts {
      userName := O.GetOrElse(func() string { return "Unknown" })(p.UserName)
      fmt.Printf("Post %d by %s: %s\\n", p.ID, userName, p.Content)
  }
}`})]}),"\n",(0,s.jsxs)(c,{id:"flattening",number:"06",title:"Flattening Nested",titleAccent:"Structures",children:[(0,s.jsx)(r.p,{children:"Flatten nested arrays and structures into a single level."}),(0,s.jsx)(a,{file:"flattening.go",children:`package main

import (
  "fmt"
  
  A "github.com/IBM/fp-go/v2/array"
)

type Department struct {
  Name      string
  Employees []string
}

func main() {
  departments := []Department{
      {Name: "Engineering", Employees: []string{"Alice", "Bob"}},
      {Name: "Sales", Employees: []string{"Charlie", "Diana"}},
      {Name: "HR", Employees: []string{"Eve"}},
  }
  
  // Flatten: extract all employees
  allEmployees := A.Chain(func(dept Department) []string {
      return dept.Employees
  })(departments)
  
  fmt.Printf("All employees: %v\\n", allEmployees)
  // Output: All employees: [Alice Bob Charlie Diana Eve]
  
  // With department prefix
  employeesWithDept := A.Chain(func(dept Department) []string {
      return A.Map(func(emp string) string {
          return fmt.Sprintf("%s (%s)", emp, dept.Name)
      })(dept.Employees)
  })(departments)
  
  for _, emp := range employeesWithDept {
      fmt.Println(emp)
  }
}`})]}),"\n",(0,s.jsx)(c,{id:"best-practices",number:"07",title:"Best",titleAccent:"Practices",children:(0,s.jsxs)(t,{children:[(0,s.jsx)(n,{status:"required",children:(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"Use pipelines"})," \u2014 Chain operations for clarity and maintainability"]})}),(0,s.jsx)(n,{status:"required",children:(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"Keep transformations pure"})," \u2014 No side effects in transformation functions"]})}),(0,s.jsx)(n,{status:"required",children:(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"Compose small functions"})," \u2014 Build complex transformations from simple ones"]})}),(0,s.jsx)(n,{status:"recommended",children:(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"Handle missing data"})," \u2014 Use Option for optional fields"]})}),(0,s.jsx)(n,{status:"recommended",children:(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"Normalize early"})," \u2014 Convert to common format at system boundaries"]})}),(0,s.jsx)(n,{status:"optional",children:(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"Separate concerns"})," \u2014 Keep transformation logic separate from I/O"]})}),(0,s.jsx)(n,{status:"optional",children:(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"Make transformations reusable"})," \u2014 Extract common patterns into functions"]})})]})})]})}function p(e={}){let{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}function d(e,r){throw Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},8453(e,r,t){t.d(r,{R:()=>a,x:()=>o});var n=t(6540);let s={},i=n.createContext(s);function a(e){let r=n.useContext(i);return n.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(i.Provider,{value:r},e.children)}}}]);
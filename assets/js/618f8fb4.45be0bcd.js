"use strict";(self.webpackChunkfp_go_docs=self.webpackChunkfp_go_docs||[]).push([["3303"],{840(e,n,t){t.r(n),t.d(n,{metadata:()=>i,default:()=>h,frontMatter:()=>s,contentTitle:()=>l,toc:()=>d,assets:()=>c});var i=JSON.parse('{"id":"option","title":"Option","description":"Type-safe optional values with Some and None - eliminate nil pointer errors.","source":"@site/docs/option.md","sourceDirName":".","slug":"/option","permalink":"/fp-go/docs/option","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"Option","hide_title":true,"description":"Type-safe optional values with Some and None - eliminate nil pointer errors.","sidebar_position":3}}'),r=t(4848),o=t(8453);let s={title:"Option",hide_title:!0,description:"Type-safe optional values with Some and None - eliminate nil pointer errors.",sidebar_position:3},l,c={},d=[{value:"Constructors",id:"constructors",level:3},{value:"Predicates",id:"predicates",level:3},{value:"Extractors",id:"extractors",level:3},{value:"Transformations",id:"transformations",level:3},{value:"Filtering",id:"filtering",level:3},{value:"Combinators",id:"combinators",level:3},{value:"Basic Operations",id:"basic-operations",level:3},{value:"Transformations",id:"transformations-1",level:3},{value:"Pattern Matching",id:"pattern-matching",level:3},{value:"Practical Example: Configuration",id:"practical-example-configuration",level:3},{value:"Working with Pointers",id:"working-with-pointers",level:3}];function a(e){let n={code:"code",h3:"h3",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...e.components},{ApiTable:t,Checklist:i,ChecklistItem:s,CodeCard:l,Compare:c,CompareCol:d,PageHeader:a,Section:h}=n;return t||p("ApiTable",!0),i||p("Checklist",!0),s||p("ChecklistItem",!0),l||p("CodeCard",!0),c||p("Compare",!0),d||p("CompareCol",!0),a||p("PageHeader",!0),h||p("Section",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a,{eyebrow:"Reference \xb7 Core Type",title:"Option",lede:"Represent optional values without nil pointers. Option is either Some(value) or None, providing type-safe handling of missing values.",meta:[{label:"Package",value:"github.com/IBM/fp-go/v2/option"},{label:"Type",value:"Monad"}]}),"\n",(0,r.jsxs)(h,{id:"api",number:"01",title:"Core",titleAccent:"API",children:[(0,r.jsx)(n.h3,{id:"constructors",children:"Constructors"}),(0,r.jsx)(t,{children:(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Function"}),(0,r.jsx)(n.th,{children:"Signature"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"Some"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"func Some[A any](value A) Option[A]"})}),(0,r.jsx)(n.td,{children:"Create an Option containing a value"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"None"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"func None[A any]() Option[A]"})}),(0,r.jsx)(n.td,{children:"Create an empty Option"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"Of"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"func Of[A any](value A) Option[A]"})}),(0,r.jsx)(n.td,{children:"Alias for Some (monadic pure)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"FromNillable"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"func FromNillable[A any](ptr *A) Option[A]"})}),(0,r.jsx)(n.td,{children:"Convert pointer to Option (nil \u2192 None)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"FromPredicate"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"func FromPredicate[A any](pred func(A) bool) func(A) Option[A]"})}),(0,r.jsx)(n.td,{children:"Create Option based on predicate"})]})]})]})}),(0,r.jsx)(n.h3,{id:"predicates",children:"Predicates"}),(0,r.jsx)(t,{children:(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Function"}),(0,r.jsx)(n.th,{children:"Signature"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"IsSome"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"func IsSome[A any](opt Option[A]) bool"})}),(0,r.jsx)(n.td,{children:"Check if Option contains a value"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"IsNone"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"func IsNone[A any](opt Option[A]) bool"})}),(0,r.jsx)(n.td,{children:"Check if Option is empty"})]})]})]})}),(0,r.jsx)(n.h3,{id:"extractors",children:"Extractors"}),(0,r.jsx)(t,{children:(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Function"}),(0,r.jsx)(n.th,{children:"Signature"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"GetOrElse"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"func GetOrElse[A any](defaultValue func() A) func(Option[A]) A"})}),(0,r.jsx)(n.td,{children:"Extract value or return default"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"ToNillable"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"func ToNillable[A any](opt Option[A]) *A"})}),(0,r.jsx)(n.td,{children:"Convert to pointer (None \u2192 nil)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"Match"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"func Match[A, B any](onNone func() B, onSome func(A) B) func(Option[A]) B"})}),(0,r.jsx)(n.td,{children:"Pattern match on Option"})]})]})]})}),(0,r.jsx)(n.h3,{id:"transformations",children:"Transformations"}),(0,r.jsx)(t,{children:(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Function"}),(0,r.jsx)(n.th,{children:"Signature"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"Map"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"func Map[A, B any](f func(A) B) func(Option[A]) Option[B]"})}),(0,r.jsx)(n.td,{children:"Transform the value if present"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"Chain"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"func Chain[A, B any](f func(A) Option[B]) func(Option[A]) Option[B]"})}),(0,r.jsx)(n.td,{children:"FlatMap - chain optional operations"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"Ap"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"func Ap[A, B any](fa Option[A]) func(Option[func(A) B]) Option[B]"})}),(0,r.jsx)(n.td,{children:"Apply wrapped function to wrapped value"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"Flatten"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"func Flatten[A any](opt Option[Option[A]]) Option[A]"})}),(0,r.jsx)(n.td,{children:"Flatten nested Options"})]})]})]})}),(0,r.jsx)(n.h3,{id:"filtering",children:"Filtering"}),(0,r.jsx)(t,{children:(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Function"}),(0,r.jsx)(n.th,{children:"Signature"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"Filter"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"func Filter[A any](pred func(A) bool) func(Option[A]) Option[A]"})}),(0,r.jsx)(n.td,{children:"Keep value only if predicate holds"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"FilterMap"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"func FilterMap[A, B any](f func(A) Option[B]) func(Option[A]) Option[B]"})}),(0,r.jsx)(n.td,{children:"Map and filter in one operation"})]})]})]})}),(0,r.jsx)(n.h3,{id:"combinators",children:"Combinators"}),(0,r.jsx)(t,{children:(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Function"}),(0,r.jsx)(n.th,{children:"Signature"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"Alt"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"func Alt[A any](second Option[A]) func(Option[A]) Option[A]"})}),(0,r.jsx)(n.td,{children:"Return first Some, or second if first is None"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"OrElse"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"func OrElse[A any](alternative func() Option[A]) func(Option[A]) Option[A]"})}),(0,r.jsx)(n.td,{children:"Lazy alternative"})]})]})]})})]}),"\n",(0,r.jsxs)(h,{id:"examples",number:"02",title:"Usage",titleAccent:"Examples",children:[(0,r.jsx)(n.h3,{id:"basic-operations",children:"Basic Operations"}),(0,r.jsx)(l,{file:"basic.go",children:`package main

import (
  "fmt"
  O "github.com/IBM/fp-go/v2/option"
)

func main() {
  // Create Options
  some := O.Some(42)
  none := O.None[int]()
  
  // Check for values
  fmt.Println(O.IsSome(some)) // true
  fmt.Println(O.IsNone(none)) // true
  
  // Extract values
  value := O.GetOrElse(func() int { return 0 })(some)
  fmt.Println(value) // 42
  
  defaultValue := O.GetOrElse(func() int { return 0 })(none)
  fmt.Println(defaultValue) // 0
}
`}),(0,r.jsx)(n.h3,{id:"transformations-1",children:"Transformations"}),(0,r.jsx)(l,{file:"transformations.go",children:`package main

import (
  "fmt"
  "strings"
  O "github.com/IBM/fp-go/v2/option"
  F "github.com/IBM/fp-go/v2/function"
)

func main() {
  // Map: transform the value
  opt := O.Some("hello")
  upper := F.Pipe1(
      opt,
      O.Map(strings.ToUpper),
  )
  fmt.Println(O.GetOrElse(func() string { return "" })(upper)) // HELLO
  
  // Chain: flatMap operations
  divide := func(a, b int) O.Option[int] {
      if b == 0 {
          return O.None[int]()
      }
      return O.Some(a / b)
  }
  
  result := F.Pipe1(
      O.Some(10),
      O.Chain(func(n int) O.Option[int] {
          return divide(n, 2)
      }),
  )
  fmt.Println(O.GetOrElse(func() int { return 0 })(result)) // 5
  
  // Filter: keep value only if predicate holds
  filtered := F.Pipe1(
      O.Some(42),
      O.Filter(func(n int) bool { return n > 50 }),
  )
  fmt.Println(O.IsNone(filtered)) // true (42 is not > 50)
}
`}),(0,r.jsx)(n.h3,{id:"pattern-matching",children:"Pattern Matching"}),(0,r.jsx)(l,{file:"pattern_matching.go",children:`package main

import (
  "fmt"
  O "github.com/IBM/fp-go/v2/option"
)

func main() {
  opt := O.Some(42)
  
  // Match: handle both cases
  result := O.Match(
      func() string { return "No value" },
      func(n int) string { return fmt.Sprintf("Value: %d", n) },
  )(opt)
  
  fmt.Println(result) // Value: 42
}
`}),(0,r.jsx)(n.h3,{id:"practical-example-configuration",children:"Practical Example: Configuration"}),(0,r.jsx)(l,{file:"config.go",children:`package main

import (
  "fmt"
  O "github.com/IBM/fp-go/v2/option"
  F "github.com/IBM/fp-go/v2/function"
)

type Config struct {
  Port    O.Option[int]
  Host    O.Option[string]
  Timeout O.Option[int]
}

func getPort(config Config) int {
  return F.Pipe1(
      config.Port,
      O.GetOrElse(func() int { return 8080 }),
  )
}

func getHost(config Config) string {
  return F.Pipe1(
      config.Host,
      O.GetOrElse(func() string { return "localhost" }),
  )
}

func main() {
  // Config with explicit values
  config1 := Config{
      Port: O.Some(3000),
      Host: O.Some("0.0.0.0"),
      Timeout: O.Some(30),
  }
  fmt.Printf("Server: %s:%d
", getHost(config1), getPort(config1))
  // Server: 0.0.0.0:3000
  
  // Config with defaults
  config2 := Config{
      Port: O.None[int](),
      Host: O.None[string](),
      Timeout: O.Some(60),
  }
  fmt.Printf("Server: %s:%d
", getHost(config2), getPort(config2))
  // Server: localhost:8080
}
`}),(0,r.jsx)(n.h3,{id:"working-with-pointers",children:"Working with Pointers"}),(0,r.jsx)(l,{file:"pointers.go",children:`package main

import (
  "fmt"
  O "github.com/IBM/fp-go/v2/option"
)

func findUser(id string) *User {
  if id == "123" {
      return &User{ID: "123", Name: "Alice"}
  }
  return nil
}

type User struct {
  ID   string
  Name string
}

func main() {
  // Convert pointer to Option
  userPtr := findUser("123")
  opt := O.FromNillable(userPtr)
  
  fmt.Println(O.IsSome(opt)) // true
  
  // Convert back to pointer
  ptr := O.ToNillable(opt)
  if ptr != nil {
      fmt.Println(ptr.Name) // Alice
  }
  
  // Handle missing user
  missingPtr := findUser("999")
  missingOpt := O.FromNillable(missingPtr)
  fmt.Println(O.IsNone(missingOpt)) // true
}
`})]}),"\n",(0,r.jsxs)(h,{id:"why-option",number:"03",title:"Why Use",titleAccent:"Option?",children:[(0,r.jsxs)(i,{children:[(0,r.jsx)(s,{status:"required",children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Type Safety"})," \u2014 Compiler ensures you handle both Some and None cases"]})}),(0,r.jsx)(s,{status:"required",children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"No Nil Panics"})," \u2014 Eliminates nil pointer dereference errors"]})}),(0,r.jsx)(s,{status:"recommended",children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Explicit Intent"})," \u2014 Makes it clear when a value might be absent"]})}),(0,r.jsx)(s,{status:"recommended",children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Composability"})," \u2014 Works seamlessly with pipe, map, chain, and other fp-go functions"]})}),(0,r.jsx)(s,{status:"optional",children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Functional Style"})," \u2014 Encourages declarative, expression-based code"]})})]}),(0,r.jsxs)(c,{children:[(0,r.jsx)(d,{kind:"bad",children:(0,r.jsx)(l,{file:"traditional.go",children:`// \u{274C} Traditional nil handling
func getUser(id string) *User {
  // Might return nil
  return db.FindUser(id)
}

user := getUser("123")
if user != nil {
  // Easy to forget nil check
  fmt.Println(user.Name) // Potential panic!
}
`})}),(0,r.jsx)(d,{kind:"good",children:(0,r.jsx)(l,{file:"option_based.go",children:`// \u{2705} Option-based handling
func getUser(id string) O.Option[User] {
  user := db.FindUser(id)
  return O.FromNillable(user)
}

// Compiler forces you to handle both cases
O.Match(
  func() { fmt.Println("User not found") },
  func(u User) { fmt.Println(u.Name) },
)(getUser("123"))
`})})]})]})]})}function h(e={}){let{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}function p(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},8453(e,n,t){t.d(n,{R:()=>s,x:()=>l});var i=t(6540);let r={},o=i.createContext(r);function s(e){let n=i.useContext(o);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);
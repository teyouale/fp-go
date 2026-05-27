"use strict";(self.webpackChunkfp_go_docs=self.webpackChunkfp_go_docs||[]).push([["6415"],{7997(t,e,n){n.r(e),n.d(e,{metadata:()=>r,default:()=>u,frontMatter:()=>a,contentTitle:()=>o,toc:()=>c,assets:()=>l});var r=JSON.parse('{"id":"v2/constant","title":"Constant","description":"Constant functor for advanced functional patterns - always returns the same value, ignoring transformations.","source":"@site/docs/v2/constant.md","sourceDirName":"v2","slug":"/v2/constant","permalink":"/fp-go/docs/v2/constant","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":27,"frontMatter":{"title":"Constant","hide_title":true,"description":"Constant functor for advanced functional patterns - always returns the same value, ignoring transformations.","sidebar_position":27},"sidebar":"apiSidebar","previous":{"title":"Lazy","permalink":"/fp-go/docs/v2/lazy"},"next":{"title":"Identity","permalink":"/fp-go/docs/v2/identity"}}'),i=n(4848),s=n(8453);let a={title:"Constant",hide_title:!0,description:"Constant functor for advanced functional patterns - always returns the same value, ignoring transformations.",sidebar_position:27},o,l={},c=[{value:"When to Use",id:"when-to-use",level:3},{value:"Constructors",id:"constructors",level:3},{value:"Transformations",id:"transformations",level:3},{value:"Extraction",id:"extraction",level:3},{value:"Basic Operations",id:"basic-operations",level:3},{value:"With Monoids",id:"with-monoids",level:3},{value:"Accumulation Pattern",id:"accumulation-pattern",level:3},{value:"With Optics",id:"with-optics",level:3},{value:"Pattern 1: Traversal Accumulation",id:"pattern-1-traversal-accumulation",level:3},{value:"Pattern 2: Type-Safe Getters",id:"pattern-2-type-safe-getters",level:3},{value:"Pattern 3: Validation Accumulation",id:"pattern-3-validation-accumulation",level:3}];function d(t){let e={code:"code",h3:"h3",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...t.components},{ApiTable:n,Callout:r,CodeCard:a,PageHeader:o,Section:l}=e;return n||h("ApiTable",!0),r||h("Callout",!0),a||h("CodeCard",!0),o||h("PageHeader",!0),l||h("Section",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o,{eyebrow:"Reference \xb7 Core Type",title:"Constant",lede:"Constant functor for advanced functional patterns. Always returns the same value, ignoring transformations. Used primarily with optics and traversals.",meta:[{label:"Package",value:"github.com/IBM/fp-go/v2/constant"},{label:"Type",value:"Functor"}]}),"\n",(0,i.jsxs)(l,{id:"overview",number:"01",title:"Overview",children:[(0,i.jsx)(e.p,{children:"Constant is a functor that ignores transformations and always holds the same value:"}),(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"Phantom type"}),": Type parameter ",(0,i.jsx)(e.code,{children:"A"})," is not used"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"Immutable"}),": Value never changes"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"Optics"}),": Essential for traversals and folds"]}),"\n"]}),(0,i.jsx)(a,{file:"type_definition.go",children:`package constant

// Constant ignores type parameter A
type Constant[C, A any] = C
`}),(0,i.jsx)(e.h3,{id:"when-to-use",children:"When to Use"}),(0,i.jsx)(n,{children:(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:"Use Case"}),(0,i.jsx)(e.th,{children:"Example"})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"Optics"}),(0,i.jsx)(e.td,{children:"Traversals, folds, getters"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"Accumulation"}),(0,i.jsx)(e.td,{children:"Collecting values during traversal"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"Phantom types"}),(0,i.jsx)(e.td,{children:"Type-level programming"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"Advanced patterns"}),(0,i.jsx)(e.td,{children:"Applicative functors"})]})]})]})})]}),"\n",(0,i.jsxs)(l,{id:"api",number:"02",title:"Core",titleAccent:"API",children:[(0,i.jsx)(e.h3,{id:"constructors",children:"Constructors"}),(0,i.jsx)(n,{children:(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:"Function"}),(0,i.jsx)(e.th,{children:"Signature"}),(0,i.jsx)(e.th,{children:"Description"})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:(0,i.jsx)(e.code,{children:"Of"})}),(0,i.jsx)(e.td,{children:(0,i.jsx)(e.code,{children:"func Of[C, A any](value C) Constant[C, A]"})}),(0,i.jsx)(e.td,{children:"Create constant with phantom type"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:(0,i.jsx)(e.code,{children:"MakeOf"})}),(0,i.jsx)(e.td,{children:(0,i.jsx)(e.code,{children:"func MakeOf[C, A any]() func(C) Constant[C, A]"})}),(0,i.jsx)(e.td,{children:"Constructor factory"})]})]})]})}),(0,i.jsx)(e.h3,{id:"transformations",children:"Transformations"}),(0,i.jsx)(n,{children:(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:"Function"}),(0,i.jsx)(e.th,{children:"Signature"}),(0,i.jsx)(e.th,{children:"Description"})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:(0,i.jsx)(e.code,{children:"Map"})}),(0,i.jsx)(e.td,{children:(0,i.jsx)(e.code,{children:"func Map[C, A, B any](f func(A) B) func(Constant[C, A]) Constant[C, B]"})}),(0,i.jsx)(e.td,{children:"No-op transformation (value unchanged)"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:(0,i.jsx)(e.code,{children:"Ap"})}),(0,i.jsx)(e.td,{children:(0,i.jsx)(e.code,{children:"func Ap[C, A, B any](fa Constant[C, A]) func(Constant[C, func(A) B]) Constant[C, B]"})}),(0,i.jsx)(e.td,{children:"Applicative apply (combines C values)"})]})]})]})}),(0,i.jsx)(e.h3,{id:"extraction",children:"Extraction"}),(0,i.jsx)(n,{children:(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:"Function"}),(0,i.jsx)(e.th,{children:"Signature"}),(0,i.jsx)(e.th,{children:"Description"})]})}),(0,i.jsx)(e.tbody,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:(0,i.jsx)(e.code,{children:"Unwrap"})}),(0,i.jsx)(e.td,{children:(0,i.jsx)(e.code,{children:"func Unwrap[C, A any](c Constant[C, A]) C"})}),(0,i.jsx)(e.td,{children:"Extract the constant value"})]})})]})})]}),"\n",(0,i.jsxs)(l,{id:"examples",number:"03",title:"Usage",titleAccent:"Examples",children:[(0,i.jsx)(e.h3,{id:"basic-operations",children:"Basic Operations"}),(0,i.jsx)(a,{file:"basic.go",children:`package main

import (
  "fmt"
  C "github.com/IBM/fp-go/v2/constant"
)

func main() {
  // Create constant with phantom type
  c := C.Of[string, int]("hello")
  // c is "hello", int type is phantom
  
  // Map does nothing (constant stays the same)
  mapped := C.Map[string, int, bool](func(n int) bool {
      return n > 0
  })(c)
  
  // Value is still "hello"
  fmt.Println(C.Unwrap(mapped)) // "hello"
}
`}),(0,i.jsx)(e.h3,{id:"with-monoids",children:"With Monoids"}),(0,i.jsx)(a,{file:"monoid.go",children:`package main

import (
  C "github.com/IBM/fp-go/v2/constant"
  M "github.com/IBM/fp-go/v2/monoid"
)

func main() {
  // Combine constants using monoid
  c1 := C.Of[string, int]("hello")
  c2 := C.Of[string, int](" world")
  
  // Use string monoid to combine
  combined := M.Concat(M.String)(
      C.Unwrap(c1),
      C.Unwrap(c2),
  )
  
  fmt.Println(combined) // "hello world"
}
`}),(0,i.jsx)(e.h3,{id:"accumulation-pattern",children:"Accumulation Pattern"}),(0,i.jsx)(a,{file:"accumulation.go",children:`package main

import (
  C "github.com/IBM/fp-go/v2/constant"
  M "github.com/IBM/fp-go/v2/monoid"
)

type User struct {
  Name  string
  Email string
  Age   int
}

// Collect all string fields
func collectStrings(u User) C.Constant[[]string, User] {
  return C.Of[[]string, User]([]string{u.Name, u.Email})
}

func main() {
  users := []User{
      {Name: "Alice", Email: "alice@example.com", Age: 30},
      {Name: "Bob", Email: "bob@example.com", Age: 25},
  }
  
  // Accumulate all strings
  var allStrings []string
  for _, u := range users {
      c := collectStrings(u)
      allStrings = append(allStrings, C.Unwrap(c)...)
  }
  
  fmt.Println(allStrings)
  // ["Alice", "alice@example.com", "Bob", "bob@example.com"]
}
`}),(0,i.jsx)(e.h3,{id:"with-optics",children:"With Optics"}),(0,i.jsx)(a,{file:"optics.go",children:`package main

import (
  C "github.com/IBM/fp-go/v2/constant"
  M "github.com/IBM/fp-go/v2/monoid"
)

type Config struct {
  Host string
  Port int
  SSL  bool
}

// Fold over structure, collecting values
func foldConfig(cfg Config) C.Constant[string, Config] {
  summary := fmt.Sprintf("Host: %s, Port: %d", cfg.Host, cfg.Port)
  return C.Of[string, Config](summary)
}

func main() {
  cfg := Config{Host: "localhost", Port: 8080, SSL: true}
  
  result := foldConfig(cfg)
  fmt.Println(C.Unwrap(result))
  // "Host: localhost, Port: 8080"
}
`})]}),"\n",(0,i.jsxs)(l,{id:"patterns",number:"04",title:"Common",titleAccent:"Patterns",children:[(0,i.jsx)(e.h3,{id:"pattern-1-traversal-accumulation",children:"Pattern 1: Traversal Accumulation"}),(0,i.jsx)(a,{file:"traversal.go",children:`package main

import (
  C "github.com/IBM/fp-go/v2/constant"
  M "github.com/IBM/fp-go/v2/monoid"
)

// Traverse and accumulate
func sumFields(data []int) C.Constant[int, []int] {
  sum := 0
  for _, n := range data {
      sum += n
  }
  return C.Of[int, []int](sum)
}

func main() {
  data := []int{1, 2, 3, 4, 5}
  result := sumFields(data)
  
  fmt.Println(C.Unwrap(result)) // 15
}
`}),(0,i.jsx)(e.h3,{id:"pattern-2-type-safe-getters",children:"Pattern 2: Type-Safe Getters"}),(0,i.jsx)(a,{file:"getters.go",children:`package main

import (
  C "github.com/IBM/fp-go/v2/constant"
)

type Person struct {
  Name string
  Age  int
}

// Getter using Constant
func getName(p Person) C.Constant[string, Person] {
  return C.Of[string, Person](p.Name)
}

func getAge(p Person) C.Constant[int, Person] {
  return C.Of[int, Person](p.Age)
}

func main() {
  person := Person{Name: "Alice", Age: 30}
  
  name := C.Unwrap(getName(person))
  age := C.Unwrap(getAge(person))
  
  fmt.Printf("%s is %d years old
", name, age)
}
`}),(0,i.jsx)(e.h3,{id:"pattern-3-validation-accumulation",children:"Pattern 3: Validation Accumulation"}),(0,i.jsx)(a,{file:"validation.go",children:`package main

import (
  C "github.com/IBM/fp-go/v2/constant"
)

type ValidationError struct {
  Field   string
  Message string
}

func validateUser(u User) C.Constant[[]ValidationError, User] {
  var errors []ValidationError
  
  if u.Name == "" {
      errors = append(errors, ValidationError{
          Field:   "name",
          Message: "name is required",
      })
  }
  
  if u.Age < 18 {
      errors = append(errors, ValidationError{
          Field:   "age",
          Message: "must be 18 or older",
      })
  }
  
  return C.Of[[]ValidationError, User](errors)
}
`})]}),"\n",(0,i.jsx)(r,{type:"info",children:(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"Advanced Usage"}),": Constant is primarily used in advanced functional programming patterns, particularly with optics (lenses, prisms, traversals). For most use cases, consider simpler types like Option, Result, or Either."]})})]})}function u(t={}){let{wrapper:e}={...(0,s.R)(),...t.components};return e?(0,i.jsx)(e,{...t,children:(0,i.jsx)(d,{...t})}):d(t)}function h(t,e){throw Error("Expected "+(e?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}},8453(t,e,n){n.d(e,{R:()=>a,x:()=>o});var r=n(6540);let i={},s=r.createContext(i);function a(t){let e=r.useContext(s);return r.useMemo(function(){return"function"==typeof t?t(e):{...e,...t}},[e,t])}function o(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(i):t.components||i:a(t.components),r.createElement(s.Provider,{value:e},t.children)}}}]);
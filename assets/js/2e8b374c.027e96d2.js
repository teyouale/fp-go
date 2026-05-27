"use strict";(self.webpackChunkfp_go_docs=self.webpackChunkfp_go_docs||[]).push([["7788"],{3700(e,t,n){n.r(t),n.d(t,{metadata:()=>i,default:()=>h,frontMatter:()=>a,contentTitle:()=>d,toc:()=>l,assets:()=>c});var i=JSON.parse('{"id":"v2/identity","title":"Identity","description":"The simplest monad - wraps a value with no effects. Perfect for teaching monad concepts and generic programming.","source":"@site/docs/v2/identity.md","sourceDirName":"v2","slug":"/v2/identity","permalink":"/fp-go/docs/v2/identity","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":26,"frontMatter":{"title":"Identity","hide_title":true,"description":"The simplest monad - wraps a value with no effects. Perfect for teaching monad concepts and generic programming.","sidebar_position":26},"sidebar":"apiSidebar","previous":{"title":"Constant","permalink":"/fp-go/docs/v2/constant"},"next":{"title":"Endomorphism","permalink":"/fp-go/docs/v2/endomorphism"}}'),r=n(4848),s=n(8453);let a={title:"Identity",hide_title:!0,description:"The simplest monad - wraps a value with no effects. Perfect for teaching monad concepts and generic programming.",sidebar_position:26},d,c={},l=[{value:"When to Use",id:"when-to-use",level:3},{value:"Constructors",id:"constructors",level:3},{value:"Transformations",id:"transformations",level:3},{value:"Extraction",id:"extraction",level:3},{value:"Basic Operations",id:"basic-operations",level:3},{value:"Monad Laws",id:"monad-laws",level:3},{value:"Functor Laws",id:"functor-laws",level:3},{value:"Generic Programming",id:"generic-programming",level:3},{value:"Testing Helper",id:"testing-helper",level:3},{value:"Pattern 1: Type Class Base Case",id:"pattern-1-type-class-base-case",level:3},{value:"Pattern 2: Teaching Tool",id:"pattern-2-teaching-tool",level:3},{value:"Pattern 3: Composition Study",id:"pattern-3-composition-study",level:3}];function o(e){let t={code:"code",h3:"h3",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components},{ApiTable:n,Callout:i,CodeCard:a,PageHeader:d,Section:c}=t;return n||u("ApiTable",!0),i||u("Callout",!0),a||u("CodeCard",!0),d||u("PageHeader",!0),c||u("Section",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(d,{eyebrow:"Reference \xb7 Core Type",title:"Identity",lede:"The simplest monad - just wraps a value with no effects. Identity is primarily used for teaching monad concepts, as a base case in generic programming, and for demonstrating monad laws.",meta:[{label:"Package",value:"github.com/IBM/fp-go/v2/identity"},{label:"Type",value:"Monad"}]}),"\n",(0,r.jsxs)(c,{id:"overview",number:"01",title:"Overview",children:[(0,r.jsx)(t.p,{children:"Identity is literally just the value itself - no wrapping, no effects, no context:"}),(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Simplest monad"}),": No additional structure"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Teaching tool"}),": Perfect for understanding monad laws"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Base case"}),": Used in generic programming"]}),"\n"]}),(0,r.jsx)(a,{file:"type_definition.go",children:`package identity

// Identity is just the value itself
type Identity[A any] = A
`}),(0,r.jsx)(t.h3,{id:"when-to-use",children:"When to Use"}),(0,r.jsx)(n,{children:(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Use Case"}),(0,r.jsx)(t.th,{children:"Example"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Teaching"}),(0,r.jsx)(t.td,{children:"Demonstrate monad laws"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Generic programming"}),(0,r.jsx)(t.td,{children:"Base case for type classes"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Testing"}),(0,r.jsx)(t.td,{children:"Simplest monad for unit tests"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Type-level programming"}),(0,r.jsx)(t.td,{children:"Phantom types and constraints"})]})]})]})})]}),"\n",(0,r.jsxs)(c,{id:"api",number:"02",title:"Core",titleAccent:"API",children:[(0,r.jsx)(t.h3,{id:"constructors",children:"Constructors"}),(0,r.jsx)(n,{children:(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Function"}),(0,r.jsx)(t.th,{children:"Signature"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"Of"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"func Of[A any](value A) Identity[A]"})}),(0,r.jsx)(t.td,{children:"Wrap value (no-op)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"MakeOf"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"func MakeOf[A any]() func(A) Identity[A]"})}),(0,r.jsx)(t.td,{children:"Constructor factory"})]})]})]})}),(0,r.jsx)(t.h3,{id:"transformations",children:"Transformations"}),(0,r.jsx)(n,{children:(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Function"}),(0,r.jsx)(t.th,{children:"Signature"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"Map"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"func Map[A, B any](f func(A) B) func(Identity[A]) Identity[B]"})}),(0,r.jsx)(t.td,{children:"Transform value"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"Chain"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"func Chain[A, B any](f func(A) Identity[B]) func(Identity[A]) Identity[B]"})}),(0,r.jsx)(t.td,{children:"FlatMap - sequence operations"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"Ap"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"func Ap[A, B any](fa Identity[A]) func(Identity[func(A) B]) Identity[B]"})}),(0,r.jsx)(t.td,{children:"Apply wrapped function"})]})]})]})}),(0,r.jsx)(t.h3,{id:"extraction",children:"Extraction"}),(0,r.jsx)(n,{children:(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Function"}),(0,r.jsx)(t.th,{children:"Signature"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"Unwrap"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"func Unwrap[A any](id Identity[A]) A"})}),(0,r.jsx)(t.td,{children:"Extract value (no-op)"})]})})]})})]}),"\n",(0,r.jsxs)(c,{id:"examples",number:"03",title:"Usage",titleAccent:"Examples",children:[(0,r.jsx)(t.h3,{id:"basic-operations",children:"Basic Operations"}),(0,r.jsx)(a,{file:"basic.go",children:`package main

import (
  "fmt"
  I "github.com/IBM/fp-go/v2/identity"
)

func main() {
  // Create identity (just the value)
  id := I.Of(42)
  fmt.Println(id)  // 42
  
  // Map transforms the value
  doubled := I.Map(func(n int) int {
      return n * 2
  })(id)
  fmt.Println(doubled)  // 84
  
  // Chain sequences operations
  result := I.Chain(func(n int) I.Identity[string] {
      return I.Of(fmt.Sprintf("Value: %d", n))
  })(id)
  fmt.Println(result)  // "Value: 42"
  
  // Unwrap extracts the value (no-op)
  value := I.Unwrap(result)
  fmt.Println(value)  // "Value: 42"
}
`}),(0,r.jsx)(t.h3,{id:"monad-laws",children:"Monad Laws"}),(0,r.jsx)(a,{file:"monad_laws.go",children:`package main

import (
  "fmt"
  I "github.com/IBM/fp-go/v2/identity"
)

func main() {
  // Left identity: Of(a).Chain(f) == f(a)
  a := 42
  f := func(n int) I.Identity[int] {
      return I.Of(n * 2)
  }
  
  left := I.Chain(f)(I.Of(a))
  right := f(a)
  fmt.Println(left == right)  // true
  
  // Right identity: m.Chain(Of) == m
  m := I.Of(42)
  result := I.Chain(I.Of[int])(m)
  fmt.Println(result == m)  // true
  
  // Associativity: m.Chain(f).Chain(g) == m.Chain(x => f(x).Chain(g))
  g := func(n int) I.Identity[int] {
      return I.Of(n + 10)
  }
  
  left2 := I.Chain(g)(I.Chain(f)(m))
  right2 := I.Chain(func(x int) I.Identity[int] {
      return I.Chain(g)(f(x))
  })(m)
  fmt.Println(left2 == right2)  // true
}
`}),(0,r.jsx)(t.h3,{id:"functor-laws",children:"Functor Laws"}),(0,r.jsx)(a,{file:"functor_laws.go",children:`package main

import (
  "fmt"
  I "github.com/IBM/fp-go/v2/identity"
)

func main() {
  // Identity law: Map(id) == id
  id := func(x int) int { return x }
  value := I.Of(42)
  
  mapped := I.Map(id)(value)
  fmt.Println(mapped == value)  // true
  
  // Composition law: Map(f \u{2218} g) == Map(f) \u{2218} Map(g)
  f := func(n int) int { return n * 2 }
  g := func(n int) int { return n + 10 }
  
  // Map(f \u{2218} g)
  left := I.Map(func(x int) int {
      return f(g(x))
  })(value)
  
  // Map(f) \u{2218} Map(g)
  right := I.Map(f)(I.Map(g)(value))
  
  fmt.Println(left == right)  // true
}
`}),(0,r.jsx)(t.h3,{id:"generic-programming",children:"Generic Programming"}),(0,r.jsx)(a,{file:"generic.go",children:`package main

import (
  "fmt"
  I "github.com/IBM/fp-go/v2/identity"
)

// Generic function that works with any monad
func Transform[M any, A, B any](
  mapFn func(func(A) B) func(M) M,
  f func(A) B,
) func(M) M {
  return mapFn(f)
}

func main() {
  // Use with Identity
  double := func(n int) int { return n * 2 }
  
  transform := Transform[I.Identity[int], int, int](
      I.Map[int, int],
      double,
  )
  
  result := transform(I.Of(21))
  fmt.Println(result)  // 42
}
`}),(0,r.jsx)(t.h3,{id:"testing-helper",children:"Testing Helper"}),(0,r.jsx)(a,{file:"testing.go",children:`package main

import (
  "testing"
  I "github.com/IBM/fp-go/v2/identity"
)

// Test monad behavior with Identity (simplest case)
func TestMonadBehavior(t *testing.T) {
  // Test Map
  value := I.Of(10)
  doubled := I.Map(func(n int) int { return n * 2 })(value)
  
  if doubled != 20 {
      t.Errorf("Expected 20, got %d", doubled)
  }
  
  // Test Chain
  result := I.Chain(func(n int) I.Identity[int] {
      return I.Of(n + 5)
  })(value)
  
  if result != 15 {
      t.Errorf("Expected 15, got %d", result)
  }
}

// Use Identity to test pure functions
func TestPureFunction(t *testing.T) {
  add := func(a, b int) int { return a + b }
  
  // Wrap in Identity for testing
  result := I.Map(func(x int) int {
      return add(x, 10)
  })(I.Of(5))
  
  if result != 15 {
      t.Errorf("Expected 15, got %d", result)
  }
}
`})]}),"\n",(0,r.jsxs)(c,{id:"patterns",number:"04",title:"Common",titleAccent:"Patterns",children:[(0,r.jsx)(t.h3,{id:"pattern-1-type-class-base-case",children:"Pattern 1: Type Class Base Case"}),(0,r.jsx)(a,{file:"typeclass.go",children:`package main

import (
  I "github.com/IBM/fp-go/v2/identity"
)

// Functor type class
type Functor[F any] interface {
  Map(f func(any) any) func(F) F
}

// Identity implements Functor (trivially)
type IdentityFunctor[A any] struct{}

func (IdentityFunctor[A]) Map(f func(A) A) func(I.Identity[A]) I.Identity[A] {
  return I.Map[A, A](f)
}
`}),(0,r.jsx)(t.h3,{id:"pattern-2-teaching-tool",children:"Pattern 2: Teaching Tool"}),(0,r.jsx)(a,{file:"teaching.go",children:`package main

import (
  "fmt"
  I "github.com/IBM/fp-go/v2/identity"
)

// Demonstrate that Identity is transparent
func demonstrateTransparency() {
  // These are equivalent
  value1 := 42
  value2 := I.Of(42)
  
  fmt.Println(value1 == value2)  // true
  
  // Map is just function application
  f := func(n int) int { return n * 2 }
  
  result1 := f(value1)
  result2 := I.Map(f)(value2)
  
  fmt.Println(result1 == result2)  // true
}
`}),(0,r.jsx)(t.h3,{id:"pattern-3-composition-study",children:"Pattern 3: Composition Study"}),(0,r.jsx)(a,{file:"composition.go",children:`package main

import (
  "fmt"
  I "github.com/IBM/fp-go/v2/identity"
  F "github.com/IBM/fp-go/v2/function"
)

func main() {
  // Study function composition with Identity
  f := func(n int) int { return n * 2 }
  g := func(n int) int { return n + 10 }
  h := func(n int) int { return n - 5 }
  
  // Compose functions
  composed := F.Pipe3(
      I.Of(5),
      I.Map(f),
      I.Map(g),
      I.Map(h),
  )
  
  fmt.Println(composed)  // ((5 * 2) + 10) - 5 = 15
}
`})]}),"\n",(0,r.jsxs)(i,{type:"info",children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Why Identity?"})," While Identity seems trivial (it's just the value!), it's invaluable for:"]}),(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Teaching"}),": Understanding monad laws without complexity"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Testing"}),": Verifying generic monad code with the simplest case"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Type theory"}),": Serving as the identity element in category theory"]}),"\n"]})]})]})}function h(e={}){let{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}function u(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},8453(e,t,n){n.d(t,{R:()=>a,x:()=>d});var i=n(6540);let r={},s=i.createContext(r);function a(e){let t=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);
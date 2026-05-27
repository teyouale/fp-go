"use strict";(self.webpackChunkfp_go_docs=self.webpackChunkfp_go_docs||[]).push([["919"],{2387(n,t,e){e.r(t),e.d(t,{metadata:()=>i,default:()=>p,frontMatter:()=>a,contentTitle:()=>c,toc:()=>u,assets:()=>s});var i=JSON.parse('{"id":"advanced/type-theory","title":"Type Theory","description":"Theoretical foundations of functional programming including category theory, functors, monads, monoids, and algebraic data types.","source":"@site/docs/advanced/type-theory.md","sourceDirName":"advanced","slug":"/advanced/type-theory","permalink":"/fp-go/docs/advanced/type-theory","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"Type Theory","hide_title":true,"description":"Theoretical foundations of functional programming including category theory, functors, monads, monoids, and algebraic data types.","sidebar_position":2},"sidebar":"apiSidebar","previous":{"title":"Advanced Patterns","permalink":"/fp-go/docs/advanced/patterns"},"next":{"title":"Performance Optimization","permalink":"/fp-go/docs/advanced/performance"}}'),r=e(4848),o=e(8453);let a={title:"Type Theory",hide_title:!0,description:"Theoretical foundations of functional programming including category theory, functors, monads, monoids, and algebraic data types.",sidebar_position:2},c,s={},u=[];function l(n){let t={code:"code",p:"p",strong:"strong",...(0,o.R)(),...n.components},{Callout:e,CodeCard:i,Compare:a,CompareCol:c,PageHeader:s,Section:u,TLDR:l,TLDRCard:p}=t;return e||d("Callout",!0),i||d("CodeCard",!0),a||d("Compare",!0),c||d("CompareCol",!0),s||d("PageHeader",!0),u||d("Section",!0),l||d("TLDR",!0),p||d("TLDRCard",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s,{eyebrow:"Advanced \xb7 02 / 04",title:"Type",titleAccent:"Theory",lede:"Explore the theoretical foundations of functional programming including category theory, functors, applicatives, monads, and algebraic data types.",meta:[{label:"Difficulty",value:"Expert"},{label:"Topics",value:"10"},{label:"Prerequisites",value:"Abstract algebra, Category theory basics"}]}),"\n",(0,r.jsxs)(l,{children:[(0,r.jsx)(p,{title:"Category Theory",icon:"network",children:(0,r.jsx)(t.p,{children:"Categories provide the mathematical foundation\u2014objects (types), morphisms (functions), composition, and identity."})}),(0,r.jsx)(p,{title:"Functor Laws",icon:"shield",children:(0,r.jsx)(t.p,{children:"Functors preserve structure: identity (fmap id = id) and composition (fmap (f \u2218 g) = fmap f \u2218 fmap g)."})}),(0,r.jsx)(p,{title:"Monad Laws",icon:"link",children:(0,r.jsx)(t.p,{children:"Monads enable sequencing: left identity, right identity, and associativity ensure predictable composition."})})]}),"\n",(0,r.jsxs)(u,{id:"category-theory",number:"01",title:"Category Theory",titleAccent:"Basics",children:[(0,r.jsx)(t.p,{children:"Categories consist of objects (types), morphisms (functions), composition, and identity."}),(0,r.jsx)(i,{file:"category_basics.go",children:`package main

import "fmt"

// Identity morphism
func identity[A any](a A) A {
  return a
}

// Composition of morphisms
func compose[A, B, C any](f func(A) B, g func(B) C) func(A) C {
  return func(a A) C {
      return g(f(a))
  }
}

func main() {
  double := func(n int) int { return n * 2 }
  addTen := func(n int) int { return n + 10 }
  
  // Compose: double then addTen
  composed := compose(double, addTen)
  
  result := composed(5) // (5 * 2) + 10 = 20
  fmt.Println(result)
}
`}),(0,r.jsx)(e,{type:"info",children:(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Category Laws"}),": Composition must be associative: ",(0,r.jsx)(t.code,{children:"(f \u2218 g) \u2218 h = f \u2218 (g \u2218 h)"}),", and identity must be neutral: ",(0,r.jsx)(t.code,{children:"f \u2218 id = id \u2218 f = f"}),"."]})})]}),"\n",(0,r.jsxs)(u,{id:"functors",number:"02",title:"Functors",titleAccent:"& Laws",children:[(0,r.jsx)(t.p,{children:"Functors map between categories while preserving structure."}),(0,r.jsx)(i,{file:"functor_laws.go",children:`package main

import (
  "fmt"
  O "github.com/IBM/fp-go/v2/option"
)

func main() {
  opt := O.Some(5)
  
  // Identity law: fmap(id) = id
  mapped1 := O.Map(func(x int) int { return x })(opt)
  fmt.Println(O.IsSome(mapped1)) // true
  
  // Composition law
  f := func(x int) int { return x * 2 }
  g := func(x int) int { return x + 10 }
  
  // fmap(f \u{2218} g)
  composed := O.Map(func(x int) int { return g(f(x)) })(opt)
  
  // fmap(f) \u{2218} fmap(g)
  separate := O.Map(g)(O.Map(f)(opt))
  
  fmt.Println(O.GetOrElse(func() int { return 0 })(composed))  // 20
  fmt.Println(O.GetOrElse(func() int { return 0 })(separate))  // 20
}
`}),(0,r.jsx)(e,{type:"success",children:(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Functor Examples"}),": Option, Either, Array, IO\u2014all preserve structure when mapping functions over their contents."]})})]}),"\n",(0,r.jsxs)(u,{id:"applicatives",number:"03",title:"Applicative",titleAccent:"Functors",children:[(0,r.jsx)(t.p,{children:"Applicatives allow applying wrapped functions to wrapped values."}),(0,r.jsx)(i,{file:"applicative_laws.go",children:`package main

import (
  "fmt"
  O "github.com/IBM/fp-go/v2/option"
)

func main() {
  // Applicative: apply wrapped function to wrapped value
  optFunc := O.Some(func(n int) int { return n * 2 })
  optValue := O.Some(5)
  
  result := O.Ap(optValue)(optFunc)
  fmt.Println(O.GetOrElse(func() int { return 0 })(result)) // 10
  
  // With None
  noneFunc := O.None[func(int) int]()
  result2 := O.Ap(optValue)(noneFunc)
  fmt.Println(O.IsNone(result2)) // true
}
`}),(0,r.jsx)(e,{type:"info",children:(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Applicative Laws"}),": Identity, composition, homomorphism, and interchange ensure predictable behavior when applying functions."]})})]}),"\n",(0,r.jsxs)(u,{id:"monads",number:"04",title:"Monads",titleAccent:"& Laws",children:[(0,r.jsx)(t.p,{children:"Monads enable sequencing computations with context."}),(0,r.jsx)(i,{file:"monad_laws.go",children:`package main

import (
  "fmt"
  O "github.com/IBM/fp-go/v2/option"
)

func half(n int) O.Option[int] {
  if n%2 == 0 {
      return O.Some(n / 2)
  }
  return O.None[int]()
}

func main() {
  // Left identity: return(a) >>= f = f(a)
  left1 := O.Chain(half)(O.Some(10))
  left2 := half(10)
  fmt.Println(O.GetOrElse(func() int { return 0 })(left1)) // 5
  fmt.Println(O.GetOrElse(func() int { return 0 })(left2)) // 5
  
  // Right identity: m >>= return = m
  m := O.Some(10)
  right1 := O.Chain(func(n int) O.Option[int] { return O.Some(n) })(m)
  fmt.Println(O.GetOrElse(func() int { return 0 })(right1)) // 10
  
  // Associativity
  double := func(n int) O.Option[int] { return O.Some(n * 2) }
  
  // (m >>= half) >>= double
  assoc1 := O.Chain(double)(O.Chain(half)(O.Some(20)))
  
  // m >>= (x => half(x) >>= double)
  assoc2 := O.Chain(func(x int) O.Option[int] {
      return O.Chain(double)(half(x))
  })(O.Some(20))
  
  fmt.Println(O.GetOrElse(func() int { return 0 })(assoc1)) // 20
  fmt.Println(O.GetOrElse(func() int { return 0 })(assoc2)) // 20
}
`})]}),"\n",(0,r.jsxs)(u,{id:"monoids",number:"05",title:"Monoids",titleAccent:"& Semigroups",children:[(0,r.jsx)(t.p,{children:"Monoids provide associative operations with identity elements."}),(0,r.jsx)(i,{file:"monoid_laws.go",children:`package main

import (
  "fmt"
)

type Monoid[A any] struct {
  Empty  A
  Concat func(A, A) A
}

func main() {
  // Integer addition monoid
  intAdd := Monoid[int]{
      Empty: 0,
      Concat: func(a, b int) int {
          return a + b
      },
  }
  
  // Associativity: (1 + 2) + 3 = 1 + (2 + 3)
  left := intAdd.Concat(intAdd.Concat(1, 2), 3)
  right := intAdd.Concat(1, intAdd.Concat(2, 3))
  fmt.Println(left == right) // true (both are 6)
  
  // Identity: 5 + 0 = 0 + 5 = 5
  leftId := intAdd.Concat(5, intAdd.Empty)
  rightId := intAdd.Concat(intAdd.Empty, 5)
  fmt.Println(leftId == 5 && rightId == 5) // true
  
  // String concatenation monoid
  stringConcat := Monoid[string]{
      Empty: "",
      Concat: func(a, b string) string {
          return a + b
      },
  }
  
  result := stringConcat.Concat("Hello", stringConcat.Concat(" ", "World"))
  fmt.Println(result) // Hello World
}
`}),(0,r.jsx)(i,{file:"semigroup.go",children:`package main

import (
  "fmt"
)

type Semigroup[A any] struct {
  Concat func(A, A) A
}

func main() {
  // Max semigroup (no identity for all integers)
  maxSemigroup := Semigroup[int]{
      Concat: func(a, b int) int {
          if a > b {
              return a
          }
          return b
      },
  }
  
  // Associativity
  left := maxSemigroup.Concat(maxSemigroup.Concat(5, 10), 3)
  right := maxSemigroup.Concat(5, maxSemigroup.Concat(10, 3))
  fmt.Println(left == right) // true (both are 10)
}
`})]}),"\n",(0,r.jsxs)(u,{id:"natural-transformations",number:"06",title:"Natural",titleAccent:"Transformations",children:[(0,r.jsx)(t.p,{children:"Natural transformations map between functors while preserving structure."}),(0,r.jsx)(i,{file:"natural_transformation.go",children:`package main

import (
  "fmt"
  O "github.com/IBM/fp-go/v2/option"
  E "github.com/IBM/fp-go/v2/either"
)

// Natural transformation: Option -> Either
func optionToEither[A any](opt O.Option[A]) E.Either[string, A] {
  if O.IsSome(opt) {
      return E.Right[string](O.GetOrElse(func() A { var zero A; return zero })(opt))
  }
  return E.Left[A]("none")
}

func main() {
  opt1 := O.Some(42)
  opt2 := O.None[int]()
  
  either1 := optionToEither(opt1)
  either2 := optionToEither(opt2)
  
  fmt.Println(E.IsRight(either1)) // true
  fmt.Println(E.IsLeft(either2))  // true
}
`})]}),"\n",(0,r.jsxs)(u,{id:"algebraic-types",number:"07",title:"Algebraic Data",titleAccent:"Types",children:[(0,r.jsx)(t.p,{children:"Sum types (OR) and product types (AND) form the basis of type algebra."}),(0,r.jsxs)(a,{children:[(0,r.jsx)(c,{kind:"bad",children:(0,r.jsx)(i,{file:"sum_type.go",children:`// Sum type: Success OR Failure
type Result[E, A any] interface {
  isResult()
}

type Success[E, A any] struct {
  Value A
}

func (Success[E, A]) isResult() {}

type Failure[E, A any] struct {
  Error E
}

func (Failure[E, A]) isResult() {}

func divide(a, b int) Result[string, int] {
  if b == 0 {
      return Failure[string, int]{Error: "division by zero"}
  }
  return Success[string, int]{Value: a / b}
}
`})}),(0,r.jsx)(c,{kind:"good",children:(0,r.jsx)(i,{file:"product_type.go",children:`// Product type: A AND B
type Tuple[A, B any] struct {
  First  A
  Second B
}

func main() {
  // Product of string and int
  tuple := Tuple[string, int]{
      First:  "Alice",
      Second: 30,
  }
  
  fmt.Printf("Name: %s, Age: %d\\n", tuple.First, tuple.Second)
}
`})})]})]}),"\n",(0,r.jsxs)(u,{id:"kleisli",number:"08",title:"Kleisli",titleAccent:"Composition",children:[(0,r.jsx)(t.p,{children:"Compose monadic functions for elegant pipelines."}),(0,r.jsx)(i,{file:"kleisli.go",children:`package main

import (
  "fmt"
  O "github.com/IBM/fp-go/v2/option"
)

// Kleisli composition: (a -> m b) -> (b -> m c) -> (a -> m c)
func kleisli[A, B, C any](
  f func(A) O.Option[B],
  g func(B) O.Option[C],
) func(A) O.Option[C] {
  return func(a A) O.Option[C] {
      return O.Chain(g)(f(a))
  }
}

func half(n int) O.Option[int] {
  if n%2 == 0 {
      return O.Some(n / 2)
  }
  return O.None[int]()
}

func double(n int) O.Option[int] {
  return O.Some(n * 2)
}

func main() {
  // Compose half and double
  composed := kleisli(half, double)
  
  result := composed(10)
  fmt.Println(O.GetOrElse(func() int { return 0 })(result)) // 10
}
`})]}),"\n",(0,r.jsxs)(u,{id:"hkt",number:"09",title:"Higher-Kinded",titleAccent:"Types",children:[(0,r.jsx)(t.p,{children:"Simulate higher-kinded types in Go for generic abstractions."}),(0,r.jsx)(i,{file:"hkt_simulation.go",children:`package main

import "fmt"

// HKT interface
type HKT[F any, A any] interface {
  unwrap() F
}

// Option HKT
type OptionHKT[A any] struct {
  value *A
}

func (o OptionHKT[A]) unwrap() *A {
  return o.value
}

// Functor type class
type Functor[F any] interface {
  Map(f func(any) any, fa F) F
}

// Option functor instance
type OptionFunctor struct{}

func (OptionFunctor) Map(f func(any) any, fa any) any {
  opt := fa.(OptionHKT[any])
  if opt.value == nil {
      return opt
  }
  result := f(*opt.value)
  return OptionHKT[any]{value: &result}
}

func main() {
  opt := OptionHKT[int]{value: new(int)}
  *opt.value = 5
  
  functor := OptionFunctor{}
  mapped := functor.Map(func(x any) any {
      return x.(int) * 2
  }, opt)
  
  result := mapped.(OptionHKT[any])
  if result.value != nil {
      fmt.Println(*result.value) // 10
  }
}
`})]}),"\n",(0,r.jsxs)(u,{id:"yoneda",number:"10",title:"Yoneda",titleAccent:"Lemma",children:[(0,r.jsx)(t.p,{children:"The Yoneda lemma relates natural transformations to functor elements."}),(0,r.jsx)(i,{file:"yoneda.go",children:`package main

import (
  "fmt"
)

// Yoneda encoding
type Yoneda[F any, A any] struct {
  Run func(func(A) any) F
}

// Lower: Yoneda F A -> F A
func Lower[F, A any](y Yoneda[F, A]) F {
  return y.Run(func(a A) any { return a })
}

// Lift: F A -> Yoneda F A
func Lift[F, A any](fa F, fmap func(func(A) any, F) F) Yoneda[F, A] {
  return Yoneda[F, A]{
      Run: func(f func(A) any) F {
          return fmap(f, fa)
      },
  }
}

func main() {
  // Example with slice as functor
  slice := []int{1, 2, 3}
  
  fmap := func(f func(int) any, s []int) []any {
      result := make([]any, len(s))
      for i, v := range s {
          result[i] = f(v)
      }
      return result
  }
  
  // Lift to Yoneda
  yoneda := Lift(slice, fmap)
  
  // Apply transformation
  doubled := yoneda.Run(func(n int) any { return n * 2 })
  
  fmt.Println(doubled) // [2 4 6]
}
`})]})]})}function p(n={}){let{wrapper:t}={...(0,o.R)(),...n.components};return t?(0,r.jsx)(t,{...n,children:(0,r.jsx)(l,{...n})}):l(n)}function d(n,t){throw Error("Expected "+(t?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}},8453(n,t,e){e.d(t,{R:()=>a,x:()=>c});var i=e(6540);let r={},o=i.createContext(r);function a(n){let t=i.useContext(o);return i.useMemo(function(){return"function"==typeof n?n(t):{...t,...n}},[t,n])}function c(n){let t;return t=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:a(n.components),i.createElement(o.Provider,{value:t},n.children)}}}]);
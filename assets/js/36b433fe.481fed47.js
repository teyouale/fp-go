"use strict";(self.webpackChunkfp_go_docs=self.webpackChunkfp_go_docs||[]).push([["7708"],{2362(e,t,n){n.r(t),n.d(t,{metadata:()=>r,default:()=>l,frontMatter:()=>a,contentTitle:()=>c,toc:()=>f,assets:()=>o});var r=JSON.parse('{"id":"advanced/patterns","title":"Advanced Patterns","description":"Advanced functional programming patterns including monad transformers, free monads, tagless final, and recursion schemes.","source":"@site/docs/advanced/patterns.md","sourceDirName":"advanced","slug":"/advanced/patterns","permalink":"/fp-go/docs/advanced/patterns","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"Advanced Patterns","hide_title":true,"description":"Advanced functional programming patterns including monad transformers, free monads, tagless final, and recursion schemes.","sidebar_position":1},"sidebar":"apiSidebar","previous":{"title":"Magma","permalink":"/fp-go/docs/v2/utilities/magma"},"next":{"title":"Type Theory","permalink":"/fp-go/docs/advanced/type-theory"}}'),i=n(4848),s=n(8453);let a={title:"Advanced Patterns",hide_title:!0,description:"Advanced functional programming patterns including monad transformers, free monads, tagless final, and recursion schemes.",sidebar_position:1},c,o={},f=[];function u(e){let t={p:"p",strong:"strong",...(0,s.R)(),...e.components},{Callout:n,CodeCard:r,PageHeader:a,Section:c,TLDR:o,TLDRCard:f}=t;return n||d("Callout",!0),r||d("CodeCard",!0),a||d("PageHeader",!0),c||d("Section",!0),o||d("TLDR",!0),f||d("TLDRCard",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a,{eyebrow:"Advanced \xb7 01 / 04",title:"Advanced",titleAccent:"Patterns",lede:"Explore advanced functional programming patterns including monad transformers, free monads, tagless final, comonads, and recursion schemes.",meta:[{label:"Difficulty",value:"Expert"},{label:"Topics",value:"7"},{label:"Prerequisites",value:"Monads, Functors, Category Theory"}]}),"\n",(0,i.jsxs)(o,{children:[(0,i.jsx)(f,{title:"Monad Transformers",icon:"layers",children:(0,i.jsx)(t.p,{children:"Stack multiple monadic effects (Reader + IO + Either) for complex computations with combined capabilities."})}),(0,i.jsx)(f,{title:"Free Monads",icon:"code",children:(0,i.jsx)(t.p,{children:"Separate program description from interpretation\u2014build DSLs and test without executing side effects."})}),(0,i.jsx)(f,{title:"Recursion Schemes",icon:"recycle",children:(0,i.jsx)(t.p,{children:"Generic recursion patterns like catamorphisms eliminate manual recursion and enable powerful abstractions."})})]}),"\n",(0,i.jsxs)(c,{id:"monad-transformers",number:"01",title:"Monad",titleAccent:"Transformers",children:[(0,i.jsx)(t.p,{children:"Combine multiple monadic effects by stacking them together."}),(0,i.jsx)(r,{file:"monad_transformers.go",children:`package main

import (
  "fmt"
  RIOE "github.com/IBM/fp-go/v2/readerioeither"
  IOE "github.com/IBM/fp-go/v2/ioeither"
  E "github.com/IBM/fp-go/v2/either"
)

type Config struct {
  Debug bool
}

// ReaderIOEither combines Reader + IO + Either
type AppEffect[A any] = RIOE.ReaderIOEither[Config, error, A]

// Lift IO into IOEither
func liftIO[A any](io func() A) IOE.IOEither[error, A] {
  return func() E.Either[error, A] {
      return E.Right[error](io())
  }
}

// Lift IOEither to ReaderIOEither
func liftIOEither[R, E, A any](ioe IOE.IOEither[E, A]) RIOE.ReaderIOEither[R, E, A] {
  return func(r R) IOE.IOEither[E, A] {
      return ioe
  }
}

func askConfig() AppEffect[Config] {
  return func(cfg Config) IOE.IOEither[error, Config] {
      return func() E.Either[error, Config] {
          return E.Right[error](cfg)
      }
  }
}

func main() {
  config := Config{Debug: true}
  
  program := askConfig()
  result := program(config)()
  
  if E.IsRight(result) {
      cfg := E.GetOrElse(func() Config { return Config{} })(result)
      fmt.Println("Debug mode:", cfg.Debug)
  }
}
`}),(0,i.jsx)(n,{type:"info",children:(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Transformer Stack"}),": ReaderIOEither = Reader (dependencies) + IO (effects) + Either (errors). Each layer adds a capability."]})})]}),"\n",(0,i.jsxs)(c,{id:"free-monads",number:"02",title:"Free",titleAccent:"Monads",children:[(0,i.jsx)(t.p,{children:"Separate program description from interpretation for testability and flexibility."}),(0,i.jsx)(r,{file:"free_monads.go",children:`package main

import (
  "fmt"
)

// Command interface
type Command[A any] interface {
  isCommand()
}

// Read command
type Read struct {
  Key string
}

func (Read) isCommand() {}

// Write command
type Write struct {
  Key   string
  Value string
}

func (Write) isCommand() {}

// Program is a sequence of commands
type Program[A any] struct {
  Commands []Command[A]
}

// Interpreter
type Interpreter struct {
  store map[string]string
}

func (i *Interpreter) Run(cmd Command[string]) string {
  switch c := cmd.(type) {
  case Read:
      return i.store[c.Key]
  case Write:
      i.store[c.Key] = c.Value
      return c.Value
  default:
      return ""
  }
}

func main() {
  interp := &Interpreter{
      store: make(map[string]string),
  }
  
  // Execute commands
  interp.Run(Write{Key: "name", Value: "Alice"})
  result := interp.Run(Read{Key: "name"})
  
  fmt.Println("Result:", result) // Alice
}
`})]}),"\n",(0,i.jsxs)(c,{id:"tagless-final",number:"03",title:"Tagless",titleAccent:"Final",children:[(0,i.jsx)(t.p,{children:"Type-class based approach to abstraction without concrete data types."}),(0,i.jsx)(r,{file:"tagless_final.go",children:`package main

import (
  "fmt"
)

// Algebra interface
type Algebra[F any] interface {
  Pure(int) F
  Map(F, func(int) int) F
  FlatMap(F, func(int) F) F
}

// Option algebra
type OptionAlgebra struct{}

type Option[A any] struct {
  value *A
}

func Some[A any](a A) Option[A] {
  return Option[A]{value: &a}
}

func None[A any]() Option[A] {
  return Option[A]{value: nil}
}

func (OptionAlgebra) Pure(n int) Option[int] {
  return Some(n)
}

func (OptionAlgebra) Map(opt Option[int], f func(int) int) Option[int] {
  if opt.value == nil {
      return None[int]()
  }
  return Some(f(*opt.value))
}

func (OptionAlgebra) FlatMap(opt Option[int], f func(int) Option[int]) Option[int] {
  if opt.value == nil {
      return None[int]()
  }
  return f(*opt.value)
}

// Generic program using algebra
func program[F any](alg Algebra[F]) F {
  return alg.FlatMap(
      alg.Pure(5),
      func(n int) F {
          return alg.Map(alg.Pure(n), func(x int) int {
              return x * 2
          })
      },
  )
}

func main() {
  optAlg := OptionAlgebra{}
  result := program[Option[int]](optAlg)
  
  if result.value != nil {
      fmt.Println("Result:", *result.value) // 10
  }
}
`})]}),"\n",(0,i.jsxs)(c,{id:"comonads",number:"04",title:"Comonads",titleAccent:"(Dual of Monads)",children:[(0,i.jsx)(t.p,{children:"Extract values from context\u2014the dual of monads."}),(0,i.jsx)(r,{file:"comonads.go",children:`package main

import (
  "fmt"
)

// Store comonad
type Store[S, A any] struct {
  state S
  get   func(S) A
}

// Extract current value
func Extract[S, A any](store Store[S, A]) A {
  return store.get(store.state)
}

// Extend with new computation
func Extend[S, A, B any](f func(Store[S, A]) B) func(Store[S, A]) Store[S, B] {
  return func(store Store[S, A]) Store[S, B] {
      return Store[S, B]{
          state: store.state,
          get: func(s S) B {
              return f(Store[S, A]{state: s, get: store.get})
          },
      }
  }
}

func main() {
  // Store that gets element at index
  store := Store[int, string]{
      state: 0,
      get: func(i int) string {
          items := []string{"a", "b", "c"}
          if i >= 0 && i < len(items) {
              return items[i]
          }
          return ""
      },
  }
  
  // Extract current value
  current := Extract(store)
  fmt.Println("Current:", current) // a
  
  // Extend to get length of current value
  extended := Extend(func(s Store[int, string]) int {
      return len(Extract(s))
  })(store)
  
  length := Extract(extended)
  fmt.Println("Length:", length) // 1
}
`})]}),"\n",(0,i.jsxs)(c,{id:"recursion-schemes",number:"05",title:"Recursion",titleAccent:"Schemes",children:[(0,i.jsx)(t.p,{children:"Generic recursion patterns eliminate manual recursion."}),(0,i.jsx)(r,{file:"catamorphism.go",children:`package main

import (
  "fmt"
)

// List structure
type List[A any] interface {
  isList()
}

type Nil[A any] struct{}

func (Nil[A]) isList() {}

type Cons[A any] struct {
  Head A
  Tail List[A]
}

func (Cons[A]) isList() {}

// Catamorphism (fold)
func Cata[A, B any](nil B, cons func(A, B) B) func(List[A]) B {
  var fold func(List[A]) B
  fold = func(list List[A]) B {
      switch l := list.(type) {
      case Nil[A]:
          return nil
      case Cons[A]:
          return cons(l.Head, fold(l.Tail))
      default:
          return nil
      }
  }
  return fold
}

func main() {
  // Create list: [1, 2, 3]
  list := Cons[int]{
      Head: 1,
      Tail: Cons[int]{
          Head: 2,
          Tail: Cons[int]{
              Head: 3,
              Tail: Nil[int]{},
          },
      },
  }
  
  // Sum using catamorphism
  sum := Cata[int, int](
      0,
      func(head int, acc int) int {
          return head + acc
      },
  )(list)
  
  fmt.Println("Sum:", sum) // 6
  
  // Length using catamorphism
  length := Cata[int, int](
      0,
      func(head int, acc int) int {
          return 1 + acc
      },
  )(list)
  
  fmt.Println("Length:", length) // 3
}
`})]}),"\n",(0,i.jsxs)(c,{id:"optics-composition",number:"06",title:"Optics",titleAccent:"Composition",children:[(0,i.jsx)(t.p,{children:"Compose lenses, prisms, and traversals for nested data access."}),(0,i.jsx)(r,{file:"lens_composition.go",children:`package main

import (
  "fmt"
)

// Lens type
type Lens[S, A any] struct {
  Get func(S) A
  Set func(A, S) S
}

// Compose lenses
func ComposeLens[S, A, B any](outer Lens[S, A], inner Lens[A, B]) Lens[S, B] {
  return Lens[S, B]{
      Get: func(s S) B {
          return inner.Get(outer.Get(s))
      },
      Set: func(b B, s S) S {
          a := outer.Get(s)
          newA := inner.Set(b, a)
          return outer.Set(newA, s)
      },
  }
}

type Address struct {
  Street string
  City   string
}

type Person struct {
  Name    string
  Address Address
}

func main() {
  // Lens for Person.Address
  addressLens := Lens[Person, Address]{
      Get: func(p Person) Address {
          return p.Address
      },
      Set: func(a Address, p Person) Person {
          p.Address = a
          return p
      },
  }
  
  // Lens for Address.City
  cityLens := Lens[Address, string]{
      Get: func(a Address) string {
          return a.City
      },
      Set: func(c string, a Address) Address {
          a.City = c
          return a
      },
  }
  
  // Compose to get Person.Address.City lens
  personCityLens := ComposeLens(addressLens, cityLens)
  
  person := Person{
      Name: "Alice",
      Address: Address{
          Street: "123 Main St",
          City:   "Boston",
      },
  }
  
  // Get city
  city := personCityLens.Get(person)
  fmt.Println("City:", city) // Boston
  
  // Set city
  updated := personCityLens.Set("New York", person)
  fmt.Println("New city:", updated.Address.City) // New York
}
`})]}),"\n",(0,i.jsxs)(c,{id:"effect-systems",number:"07",title:"Effect",titleAccent:"Systems",children:[(0,i.jsx)(t.p,{children:"Track and manage side effects explicitly."}),(0,i.jsx)(r,{file:"effect_tracking.go",children:`package main

import (
  "fmt"
)

// Effect types
type Effect interface {
  isEffect()
}

type ReadEffect struct {
  Resource string
}

func (ReadEffect) isEffect() {}

type WriteEffect struct {
  Resource string
}

func (WriteEffect) isEffect() {}

// Effectful computation
type Effectful[A any] struct {
  Effects []Effect
  Run     func() A
}

// Track effects
func WithEffect[A any](effect Effect, comp Effectful[A]) Effectful[A] {
  return Effectful[A]{
      Effects: append([]Effect{effect}, comp.Effects...),
      Run:     comp.Run,
  }
}

func main() {
  // Pure computation
  pure := Effectful[int]{
      Effects: []Effect{},
      Run:     func() int { return 42 },
  }
  
  // Add read effect
  withRead := WithEffect(
      ReadEffect{Resource: "config.json"},
      pure,
  )
  
  // Add write effect
  withWrite := WithEffect(
      WriteEffect{Resource: "output.txt"},
      withRead,
  )
  
  fmt.Println("Effects:", len(withWrite.Effects)) // 2
  fmt.Println("Result:", withWrite.Run())         // 42
}
`})]})]})}function l(e={}){let{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}function d(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},8453(e,t,n){n.d(t,{R:()=>a,x:()=>c});var r=n(6540);let i={},s=r.createContext(i);function a(e){let t=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);
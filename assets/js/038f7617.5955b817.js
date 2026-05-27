"use strict";(self.webpackChunkfp_go_docs=self.webpackChunkfp_go_docs||[]).push([["5286"],{7253(t,e,n){n.r(e),n.d(e,{metadata:()=>r,default:()=>d,frontMatter:()=>s,contentTitle:()=>c,toc:()=>l,assets:()=>u});var r=JSON.parse('{"id":"v2/state","title":"State","description":"Functional state management - stateful computations that transform state and produce values.","source":"@site/docs/v2/state.md","sourceDirName":"v2","slug":"/v2/state","permalink":"/fp-go/docs/v2/state","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":23,"frontMatter":{"title":"State","hide_title":true,"description":"Functional state management - stateful computations that transform state and produce values.","sidebar_position":23},"sidebar":"apiSidebar","previous":{"title":"ReaderOption","permalink":"/fp-go/docs/v2/readeroption"},"next":{"title":"StateReaderIOEither","permalink":"/fp-go/docs/v2/statereaderioeither"}}'),a=n(4848),i=n(8453);let s={title:"State",hide_title:!0,description:"Functional state management - stateful computations that transform state and produce values.",sidebar_position:23},c,u={},l=[{value:"When to Use",id:"when-to-use",level:3},{value:"Constructors",id:"constructors",level:3},{value:"Transformations",id:"transformations",level:3},{value:"Execution",id:"execution",level:3},{value:"Basic Operations",id:"basic-operations",level:3},{value:"Counter Example",id:"counter-example",level:3},{value:"Stack Example",id:"stack-example",level:3},{value:"Parser Example",id:"parser-example",level:3},{value:"Pattern 1: Accumulator",id:"pattern-1-accumulator",level:3},{value:"Pattern 2: Random Number Generator",id:"pattern-2-random-number-generator",level:3}];function o(t){let e={code:"code",h3:"h3",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...t.components},{ApiTable:n,Callout:r,CodeCard:s,PageHeader:c,Section:u}=e;return n||p("ApiTable",!0),r||p("Callout",!0),s||p("CodeCard",!0),c||p("PageHeader",!0),u||p("Section",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(c,{eyebrow:"Reference \xb7 Core Type",title:"State",lede:"Functional state management. State[S, A] represents a stateful computation that transforms state of type S and produces a value of type A.",meta:[{label:"Package",value:"github.com/IBM/fp-go/v2/state"},{label:"Type",value:"func(S) Pair[A, S]"}]}),"\n",(0,a.jsxs)(u,{id:"overview",number:"01",title:"Overview",children:[(0,a.jsx)(e.p,{children:"State encapsulates computations that read and modify state in a functional way:"}),(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsxs)(e.li,{children:[(0,a.jsx)(e.strong,{children:"Pure"}),": No mutable state"]}),"\n",(0,a.jsxs)(e.li,{children:[(0,a.jsx)(e.strong,{children:"Composable"}),": Build complex state logic from simple pieces"]}),"\n",(0,a.jsxs)(e.li,{children:[(0,a.jsx)(e.strong,{children:"Explicit"}),": State transformations are explicit"]}),"\n"]}),(0,a.jsx)(s,{file:"type_definition.go",children:`package state

// State transforms state S and produces value A
type State[S, A any] = func(S) pair.Pair[A, S]
`}),(0,a.jsx)(e.h3,{id:"when-to-use",children:"When to Use"}),(0,a.jsx)(n,{children:(0,a.jsxs)(e.table,{children:[(0,a.jsx)(e.thead,{children:(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.th,{children:"Use Case"}),(0,a.jsx)(e.th,{children:"Example"})]})}),(0,a.jsxs)(e.tbody,{children:[(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{children:"Stateful computations"}),(0,a.jsx)(e.td,{children:"Counters, accumulators"})]}),(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{children:"Parsers"}),(0,a.jsx)(e.td,{children:"Stateful parsing"})]}),(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{children:"Functional state management"}),(0,a.jsx)(e.td,{children:"Avoid mutable state"})]}),(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{children:"Composable transformations"}),(0,a.jsx)(e.td,{children:"Build complex state logic"})]})]})]})})]}),"\n",(0,a.jsxs)(u,{id:"api",number:"02",title:"Core",titleAccent:"API",children:[(0,a.jsx)(e.h3,{id:"constructors",children:"Constructors"}),(0,a.jsx)(n,{children:(0,a.jsxs)(e.table,{children:[(0,a.jsx)(e.thead,{children:(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.th,{children:"Function"}),(0,a.jsx)(e.th,{children:"Signature"}),(0,a.jsx)(e.th,{children:"Description"})]})}),(0,a.jsxs)(e.tbody,{children:[(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{children:(0,a.jsx)(e.code,{children:"Of"})}),(0,a.jsx)(e.td,{children:(0,a.jsx)(e.code,{children:"func Of[S, A any](value A) State[S, A]"})}),(0,a.jsx)(e.td,{children:"Wrap value, keep state unchanged"})]}),(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{children:(0,a.jsx)(e.code,{children:"Get"})}),(0,a.jsx)(e.td,{children:(0,a.jsx)(e.code,{children:"func Get[S any]() State[S, S]"})}),(0,a.jsx)(e.td,{children:"Get current state as value"})]}),(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{children:(0,a.jsx)(e.code,{children:"Put"})}),(0,a.jsx)(e.td,{children:(0,a.jsx)(e.code,{children:"func Put[S any](s S) State[S, unit.Unit]"})}),(0,a.jsx)(e.td,{children:"Set new state"})]}),(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{children:(0,a.jsx)(e.code,{children:"Modify"})}),(0,a.jsx)(e.td,{children:(0,a.jsx)(e.code,{children:"func Modify[S any](f func(S) S) State[S, unit.Unit]"})}),(0,a.jsx)(e.td,{children:"Modify state with function"})]})]})]})}),(0,a.jsx)(e.h3,{id:"transformations",children:"Transformations"}),(0,a.jsx)(n,{children:(0,a.jsxs)(e.table,{children:[(0,a.jsx)(e.thead,{children:(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.th,{children:"Function"}),(0,a.jsx)(e.th,{children:"Signature"}),(0,a.jsx)(e.th,{children:"Description"})]})}),(0,a.jsxs)(e.tbody,{children:[(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{children:(0,a.jsx)(e.code,{children:"Map"})}),(0,a.jsx)(e.td,{children:(0,a.jsx)(e.code,{children:"func Map[S, A, B any](f func(A) B) func(State[S, A]) State[S, B]"})}),(0,a.jsx)(e.td,{children:"Transform value, keep state"})]}),(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{children:(0,a.jsx)(e.code,{children:"Chain"})}),(0,a.jsx)(e.td,{children:(0,a.jsx)(e.code,{children:"func Chain[S, A, B any](f func(A) State[S, B]) func(State[S, A]) State[S, B]"})}),(0,a.jsx)(e.td,{children:"Sequence stateful operations"})]}),(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{children:(0,a.jsx)(e.code,{children:"Ap"})}),(0,a.jsx)(e.td,{children:(0,a.jsx)(e.code,{children:"func Ap[S, A, B any](fa State[S, A]) func(State[S, func(A) B]) State[S, B]"})}),(0,a.jsx)(e.td,{children:"Apply wrapped function"})]})]})]})}),(0,a.jsx)(e.h3,{id:"execution",children:"Execution"}),(0,a.jsx)(n,{children:(0,a.jsxs)(e.table,{children:[(0,a.jsx)(e.thead,{children:(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.th,{children:"Function"}),(0,a.jsx)(e.th,{children:"Signature"}),(0,a.jsx)(e.th,{children:"Description"})]})}),(0,a.jsxs)(e.tbody,{children:[(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{children:(0,a.jsx)(e.code,{children:"Evaluate"})}),(0,a.jsx)(e.td,{children:(0,a.jsx)(e.code,{children:"func Evaluate[S, A any](s S) func(State[S, A]) A"})}),(0,a.jsx)(e.td,{children:"Run and get value"})]}),(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{children:(0,a.jsx)(e.code,{children:"Execute"})}),(0,a.jsx)(e.td,{children:(0,a.jsx)(e.code,{children:"func Execute[S, A any](s S) func(State[S, A]) S"})}),(0,a.jsx)(e.td,{children:"Run and get final state"})]})]})]})})]}),"\n",(0,a.jsxs)(u,{id:"examples",number:"03",title:"Usage",titleAccent:"Examples",children:[(0,a.jsx)(e.h3,{id:"basic-operations",children:"Basic Operations"}),(0,a.jsx)(s,{file:"basic.go",children:`package main

import (
  "fmt"
  S "github.com/IBM/fp-go/v2/state"
  "github.com/IBM/fp-go/v2/pair"
)

func main() {
  // Get current state
  get := S.Get[int]()
  result := get(42)  // Pair(42, 42)
  fmt.Println(pair.Fst(result), pair.Snd(result))  // 42 42
  
  // Set new state
  set := S.Put[int](100)
  result = set(42)  // Pair(unit.VOID, 100)
  fmt.Println(pair.Snd(result))  // 100
  
  // Modify state
  modify := S.Modify[int](func(s int) int {
      return s + 1
  })
  result = modify(42)  // Pair(unit.VOID, 43)
  fmt.Println(pair.Snd(result))  // 43
}
`}),(0,a.jsx)(e.h3,{id:"counter-example",children:"Counter Example"}),(0,a.jsx)(s,{file:"counter.go",children:`package main

import (
  "fmt"
  S "github.com/IBM/fp-go/v2/state"
  F "github.com/IBM/fp-go/v2/function"
)

func Increment() S.State[int, unit.Unit] {
  return S.Modify[int](func(s int) int {
      return s + 1
  })
}

func Decrement() S.State[int, unit.Unit] {
  return S.Modify[int](func(s int) int {
      return s - 1
  })
}

func GetCount() S.State[int, int] {
  return S.Get[int]()
}

func main() {
  // Compose operations
  counter := F.Pipe3(
      Increment(),
      S.Chain(func(_ unit.Unit) S.State[int, unit.Unit] {
          return Increment()
      }),
      S.Chain(func(_ unit.Unit) S.State[int, int] {
          return GetCount()
      }),
  )
  
  result := counter(0)
  value := pair.Fst(result)
  state := pair.Snd(result)
  fmt.Printf("Value: %d, State: %d
", value, state)  // Value: 2, State: 2
}
`}),(0,a.jsx)(e.h3,{id:"stack-example",children:"Stack Example"}),(0,a.jsx)(s,{file:"stack.go",children:`package main

import (
  "fmt"
  S "github.com/IBM/fp-go/v2/state"
  O "github.com/IBM/fp-go/v2/option"
)

type Stack[A any] []A

func Push[A any](item A) S.State[Stack[A], unit.Unit] {
  return S.Modify[Stack[A]](func(stack Stack[A]) Stack[A] {
      return append(stack, item)
  })
}

func Pop[A any]() S.State[Stack[A], O.Option[A]] {
  return func(stack Stack[A]) pair.Pair[O.Option[A], Stack[A]] {
      if len(stack) == 0 {
          return pair.MakePair(O.None[A](), stack)
      }
      item := stack[len(stack)-1]
      newStack := stack[:len(stack)-1]
      return pair.MakePair(O.Some(item), newStack)
  }
}

func Peek[A any]() S.State[Stack[A], O.Option[A]] {
  return func(stack Stack[A]) pair.Pair[O.Option[A], Stack[A]] {
      if len(stack) == 0 {
          return pair.MakePair(O.None[A](), stack)
      }
      return pair.MakePair(O.Some(stack[len(stack)-1]), stack)
  }
}

func main() {
  // Build stack operations
  operations := F.Pipe4(
      Push(1),
      S.Chain(func(_ unit.Unit) S.State[Stack[int], unit.Unit] {
          return Push(2)
      }),
      S.Chain(func(_ unit.Unit) S.State[Stack[int], unit.Unit] {
          return Push(3)
      }),
      S.Chain(func(_ unit.Unit) S.State[Stack[int], O.Option[int]] {
          return Pop[int]()
      }),
  )
  
  result := operations(Stack[int]{})
  value := pair.Fst(result)
  state := pair.Snd(result)
  
  fmt.Printf("Popped: %v, Stack: %v
", value, state)
  // Popped: Some(3), Stack: [1 2]
}
`}),(0,a.jsx)(e.h3,{id:"parser-example",children:"Parser Example"}),(0,a.jsx)(s,{file:"parser.go",children:`package main

import (
  "fmt"
  "strings"
  S "github.com/IBM/fp-go/v2/state"
  O "github.com/IBM/fp-go/v2/option"
)

type ParserState struct {
  Input string
  Pos   int
}

func Char(c rune) S.State[ParserState, O.Option[rune]] {
  return func(state ParserState) pair.Pair[O.Option[rune], ParserState] {
      if state.Pos >= len(state.Input) {
          return pair.MakePair(O.None[rune](), state)
      }
      
      current := rune(state.Input[state.Pos])
      if current == c {
          newState := ParserState{
              Input: state.Input,
              Pos:   state.Pos + 1,
          }
          return pair.MakePair(O.Some(current), newState)
      }
      
      return pair.MakePair(O.None[rune](), state)
  }
}

func String(s string) S.State[ParserState, O.Option[string]] {
  return func(state ParserState) pair.Pair[O.Option[string], ParserState] {
      if state.Pos+len(s) > len(state.Input) {
          return pair.MakePair(O.None[string](), state)
      }
      
      substr := state.Input[state.Pos : state.Pos+len(s)]
      if substr == s {
          newState := ParserState{
              Input: state.Input,
              Pos:   state.Pos + len(s),
          }
          return pair.MakePair(O.Some(s), newState)
      }
      
      return pair.MakePair(O.None[string](), state)
  }
}

func main() {
  parser := String("hello")
  
  state := ParserState{Input: "hello world", Pos: 0}
  result := parser(state)
  
  value := pair.Fst(result)
  newState := pair.Snd(result)
  
  fmt.Printf("Parsed: %v, Remaining: %s
", value, newState.Input[newState.Pos:])
  // Parsed: Some(hello), Remaining:  world
}
`})]}),"\n",(0,a.jsxs)(u,{id:"patterns",number:"04",title:"Common",titleAccent:"Patterns",children:[(0,a.jsx)(e.h3,{id:"pattern-1-accumulator",children:"Pattern 1: Accumulator"}),(0,a.jsx)(s,{file:"accumulator.go",children:`package main

import (
  S "github.com/IBM/fp-go/v2/state"
  F "github.com/IBM/fp-go/v2/function"
)

func AddToSum(n int) S.State[int, unit.Unit] {
  return S.Modify[int](func(sum int) int {
      return sum + n
  })
}

func GetSum() S.State[int, int] {
  return S.Get[int]()
}

func main() {
  // Sum numbers
  sumNumbers := F.Pipe4(
      AddToSum(10),
      S.Chain(func(_ unit.Unit) S.State[int, unit.Unit] {
          return AddToSum(20)
      }),
      S.Chain(func(_ unit.Unit) S.State[int, unit.Unit] {
          return AddToSum(30)
      }),
      S.Chain(func(_ unit.Unit) S.State[int, int] {
          return GetSum()
      }),
  )
  
  result := sumNumbers(0)
  fmt.Println(pair.Fst(result))  // 60
}
`}),(0,a.jsx)(e.h3,{id:"pattern-2-random-number-generator",children:"Pattern 2: Random Number Generator"}),(0,a.jsx)(s,{file:"random.go",children:`package main

import (
  S "github.com/IBM/fp-go/v2/state"
)

type RNG struct {
  Seed int64
}

func NextInt() S.State[RNG, int] {
  return func(rng RNG) pair.Pair[int, RNG] {
      // Linear congruential generator
      newSeed := (rng.Seed*1103515245 + 12345) & 0x7fffffff
      value := int(newSeed % 100)
      return pair.MakePair(value, RNG{Seed: newSeed})
  }
}

func main() {
  // Generate 3 random numbers
  gen := F.Pipe3(
      NextInt(),
      S.Chain(func(n1 int) S.State[RNG, int] {
          return NextInt()
      }),
      S.Chain(func(n2 int) S.State[RNG, int] {
          return NextInt()
      }),
  )
  
  result := gen(RNG{Seed: 42})
  fmt.Println(pair.Fst(result))
}
`})]}),"\n",(0,a.jsx)(r,{type:"info",children:(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.strong,{children:"Pure State Management"}),": State monad provides pure functional state management without mutable variables. All state transformations are explicit and composable."]})})]})}function d(t={}){let{wrapper:e}={...(0,i.R)(),...t.components};return e?(0,a.jsx)(e,{...t,children:(0,a.jsx)(o,{...t})}):o(t)}function p(t,e){throw Error("Expected "+(e?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}},8453(t,e,n){n.d(e,{R:()=>s,x:()=>c});var r=n(6540);let a={},i=r.createContext(a);function s(t){let e=r.useContext(i);return r.useMemo(function(){return"function"==typeof t?t(e):{...e,...t}},[e,t])}function c(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(a):t.components||a:s(t.components),r.createElement(i.Provider,{value:e},t.children)}}}]);
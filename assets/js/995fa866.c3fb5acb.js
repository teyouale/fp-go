"use strict";(self.webpackChunkfp_go_docs=self.webpackChunkfp_go_docs||[]).push([["8056"],{4142(e,n,t){t.r(n),t.d(n,{metadata:()=>i,default:()=>u,frontMatter:()=>c,contentTitle:()=>s,toc:()=>o,assets:()=>d});var i=JSON.parse('{"id":"v2/lazy","title":"Lazy","description":"Deferred computation with memoization - compute expensive values only when needed.","source":"@site/docs/v2/lazy.md","sourceDirName":"v2","slug":"/v2/lazy","permalink":"/fp-go/docs/v2/lazy","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":25,"frontMatter":{"title":"Lazy","hide_title":true,"description":"Deferred computation with memoization - compute expensive values only when needed.","sidebar_position":25},"sidebar":"apiSidebar","previous":{"title":"StateReaderIOEither","permalink":"/fp-go/docs/v2/statereaderioeither"},"next":{"title":"Constant","permalink":"/fp-go/docs/v2/constant"}}'),r=t(4848),a=t(8453);let c={title:"Lazy",hide_title:!0,description:"Deferred computation with memoization - compute expensive values only when needed.",sidebar_position:25},s,d={},o=[{value:"Lazy vs IO",id:"lazy-vs-io",level:3},{value:"Constructors",id:"constructors",level:3},{value:"Transformations",id:"transformations",level:3},{value:"Combining",id:"combining",level:3},{value:"Basic Lazy Evaluation",id:"basic-lazy-evaluation",level:3},{value:"Memoization Pattern",id:"memoization-pattern",level:3},{value:"Transformations",id:"transformations-1",level:3},{value:"Circular Dependencies",id:"circular-dependencies",level:3},{value:"Pattern 1: Expensive Initialization",id:"pattern-1-expensive-initialization",level:3},{value:"Pattern 2: Conditional Computation",id:"pattern-2-conditional-computation",level:3},{value:"When to Use Lazy",id:"when-to-use-lazy",level:3}];function l(e){let n={code:"code",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components},{ApiTable:t,CodeCard:i,PageHeader:c,Section:s}=n;return t||h("ApiTable",!0),i||h("CodeCard",!0),c||h("PageHeader",!0),s||h("Section",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c,{eyebrow:"Reference \xb7 Core Type",title:"Lazy",lede:"Deferred computation that produces a value. Lazy[A] emphasizes memoization for expensive, pure computations.",meta:[{label:"Package",value:"github.com/IBM/fp-go/v2/lazy"},{label:"Type",value:"Monad (func() A)"}]}),"\n",(0,r.jsxs)(s,{id:"overview",number:"01",title:"Overview",children:[(0,r.jsx)(n.p,{children:"Lazy is identical to IO in structure but emphasizes pure, memoizable computations:"}),(0,r.jsx)(i,{file:"type_definition.go",children:`package lazy

// Lazy is a deferred computation
type Lazy[A any] = func() A
`}),(0,r.jsx)(n.h3,{id:"lazy-vs-io",children:"Lazy vs IO"}),(0,r.jsx)(t,{children:(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Lazy"}),(0,r.jsx)(n.th,{children:"IO"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Pure computations"}),(0,r.jsx)(n.td,{children:"Side effects"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Emphasizes memoization"}),(0,r.jsx)(n.td,{children:"Emphasizes laziness"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Expensive calculations"}),(0,r.jsx)(n.td,{children:"Time-based operations"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Circular dependencies"}),(0,r.jsx)(n.td,{children:"Random values, logging"})]})]})]})})]}),"\n",(0,r.jsxs)(s,{id:"api",number:"02",title:"Core",titleAccent:"API",children:[(0,r.jsx)(n.h3,{id:"constructors",children:"Constructors"}),(0,r.jsx)(t,{children:(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Function"}),(0,r.jsx)(n.th,{children:"Signature"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"Of"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"func Of[A any](f func() A) Lazy[A]"})}),(0,r.jsx)(n.td,{children:"Create lazy computation"})]})})]})}),(0,r.jsx)(n.h3,{id:"transformations",children:"Transformations"}),(0,r.jsx)(t,{children:(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Function"}),(0,r.jsx)(n.th,{children:"Signature"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"Map"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"func Map[A, B any](f func(A) B) func(Lazy[A]) Lazy[B]"})}),(0,r.jsx)(n.td,{children:"Transform result"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"Chain"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"func Chain[A, B any](f func(A) Lazy[B]) func(Lazy[A]) Lazy[B]"})}),(0,r.jsx)(n.td,{children:"Sequence operations"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"Flatten"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"func Flatten[A any](Lazy[Lazy[A]]) Lazy[A]"})}),(0,r.jsx)(n.td,{children:"Unwrap nested Lazy"})]})]})]})}),(0,r.jsx)(n.h3,{id:"combining",children:"Combining"}),(0,r.jsx)(t,{children:(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Function"}),(0,r.jsx)(n.th,{children:"Signature"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"Ap"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"func Ap[A, B any](fa Lazy[A]) func(Lazy[func(A) B]) Lazy[B]"})}),(0,r.jsx)(n.td,{children:"Apply wrapped function"})]})})]})})]}),"\n",(0,r.jsxs)(s,{id:"examples",number:"03",title:"Usage",titleAccent:"Examples",children:[(0,r.jsx)(n.h3,{id:"basic-lazy-evaluation",children:"Basic Lazy Evaluation"}),(0,r.jsx)(i,{file:"basic.go",children:`package main

import (
  "fmt"
  L "github.com/IBM/fp-go/v2/lazy"
)

func main() {
  // Defer expensive computation
  expensive := L.Of(func() int {
      fmt.Println("Computing...")
      // Expensive operation
      return 42
  })
  
  fmt.Println("Lazy value created")
  
  // Only computed when called
  result := expensive()  // Prints "Computing..." then returns 42
}
`}),(0,r.jsx)(n.h3,{id:"memoization-pattern",children:"Memoization Pattern"}),(0,r.jsx)(i,{file:"memoization.go",children:`package main

import (
  "sync"
  L "github.com/IBM/fp-go/v2/lazy"
)

var once sync.Once
var cached Data

func GetCachedData() L.Lazy[Data] {
  return func() Data {
      once.Do(func() {
          fmt.Println("Computing expensive data...")
          cached = computeExpensiveData()
      })
      return cached
  }
}

func main() {
  lazyData := GetCachedData()
  
  // First call computes
  data1 := lazyData()  // Prints "Computing expensive data..."
  
  // Subsequent calls use cache
  data2 := lazyData()  // No output, uses cached value
  data3 := lazyData()  // No output, uses cached value
}
`}),(0,r.jsx)(n.h3,{id:"transformations-1",children:"Transformations"}),(0,r.jsx)(i,{file:"transformations.go",children:`package main

import (
  L "github.com/IBM/fp-go/v2/lazy"
  F "github.com/IBM/fp-go/v2/function"
)

func main() {
  // Map: transform result
  doubled := F.Pipe1(
      L.Of(func() int { return 21 }),
      L.Map(func(n int) int { return n * 2 }),
  )
  
  result := doubled()  // 42
  
  // Chain: sequence operations
  result := F.Pipe1(
      L.Of(func() int { return 10 }),
      L.Chain(func(n int) L.Lazy[string] {
          return L.Of(func() string {
              return fmt.Sprintf("Value: %d", n)
          })
      }),
  )
  
  output := result()  // "Value: 10"
}
`}),(0,r.jsx)(n.h3,{id:"circular-dependencies",children:"Circular Dependencies"}),(0,r.jsx)(i,{file:"circular.go",children:`package main

import (
  L "github.com/IBM/fp-go/v2/lazy"
)

type Node struct {
  Value int
  Next  L.Lazy[*Node]
}

func createCircularList() *Node {
  var node1, node2, node3 *Node
  
  node1 = &Node{
      Value: 1,
      Next: L.Of(func() *Node {
          return node2  // Forward reference
      }),
  }
  
  node2 = &Node{
      Value: 2,
      Next: L.Of(func() *Node {
          return node3
      }),
  }
  
  node3 = &Node{
      Value: 3,
      Next: L.Of(func() *Node {
          return node1  // Circular reference
      }),
  }
  
  return node1
}

func main() {
  list := createCircularList()
  
  // Navigate the circular list
  current := list
  for i := 0; i < 5; i++ {
      fmt.Println(current.Value)
      current = current.Next()
  }
  // Output: 1 2 3 1 2
}
`})]}),"\n",(0,r.jsxs)(s,{id:"patterns",number:"04",title:"Common",titleAccent:"Patterns",children:[(0,r.jsx)(n.h3,{id:"pattern-1-expensive-initialization",children:"Pattern 1: Expensive Initialization"}),(0,r.jsx)(i,{file:"expensive_init.go",children:`package main

import (
  "sync"
  L "github.com/IBM/fp-go/v2/lazy"
)

type Service struct {
  config L.Lazy[Config]
  db     L.Lazy[*sql.DB]
}

func NewService() *Service {
  var configOnce, dbOnce sync.Once
  var cachedConfig Config
  var cachedDB *sql.DB
  
  return &Service{
      config: func() Config {
          configOnce.Do(func() {
              cachedConfig = loadConfig()  // Expensive
          })
          return cachedConfig
      },
      db: func() *sql.DB {
          dbOnce.Do(func() {
              cachedDB = connectDB()  // Expensive
          })
          return cachedDB
      },
  }
}

func (s *Service) GetUser(id string) User {
  // Config and DB only loaded when first accessed
  cfg := s.config()
  db := s.db()
  return queryUser(db, id)
}
`}),(0,r.jsx)(n.h3,{id:"pattern-2-conditional-computation",children:"Pattern 2: Conditional Computation"}),(0,r.jsx)(i,{file:"conditional.go",children:`package main

import (
  L "github.com/IBM/fp-go/v2/lazy"
)

func processData(condition bool) Result {
  // Expensive computation only created if needed
  expensiveResult := L.Of(func() Data {
      return computeExpensiveData()
  })
  
  if condition {
      // Only computed if condition is true
      data := expensiveResult()
      return process(data)
  }
  
  // Never computed if condition is false
  return defaultResult()
}
`}),(0,r.jsx)(n.h3,{id:"when-to-use-lazy",children:"When to Use Lazy"}),(0,r.jsx)(t,{children:(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Use Lazy When"}),(0,r.jsx)(n.th,{children:"Use IO When"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Pure, expensive computations"}),(0,r.jsx)(n.td,{children:"Side effects"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Need memoization"}),(0,r.jsx)(n.td,{children:"Time-based operations"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Breaking circular dependencies"}),(0,r.jsx)(n.td,{children:"Random values"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Conditional expensive operations"}),(0,r.jsx)(n.td,{children:"Logging, file I/O"})]})]})]})})]})]})}function u(e={}){let{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}function h(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},8453(e,n,t){t.d(n,{R:()=>c,x:()=>s});var i=t(6540);let r={},a=i.createContext(r);function c(e){let n=i.useContext(a);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);
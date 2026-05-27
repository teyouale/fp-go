"use strict";(self.webpackChunkfp_go_docs=self.webpackChunkfp_go_docs||[]).push([["3272"],{7536(e,r,t){t.r(r),t.d(r,{metadata:()=>n,default:()=>u,frontMatter:()=>l,contentTitle:()=>c,toc:()=>d,assets:()=>o});var n=JSON.parse('{"id":"v2/ioresult","title":"IOResult","description":"Lazy side effects with Go error handling - combine IO and Result for effectful computations.","source":"@site/docs/v2/ioresult.md","sourceDirName":"v2","slug":"/v2/ioresult","permalink":"/fp-go/docs/v2/ioresult","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":13,"frontMatter":{"title":"IOResult","hide_title":true,"description":"Lazy side effects with Go error handling - combine IO and Result for effectful computations.","sidebar_position":13},"sidebar":"apiSidebar","previous":{"title":"IO","permalink":"/fp-go/docs/v2/io"},"next":{"title":"IOEither","permalink":"/fp-go/docs/v2/ioeither"}}'),s=t(4848),i=t(8453);let l={title:"IOResult",hide_title:!0,description:"Lazy side effects with Go error handling - combine IO and Result for effectful computations.",sidebar_position:13},c,o={},d=[{value:"When to Use",id:"when-to-use",level:3},{value:"Constructors",id:"constructors",level:3},{value:"Transformations",id:"transformations",level:3},{value:"Combining",id:"combining",level:3},{value:"Extraction",id:"extraction",level:3},{value:"Basic Operations",id:"basic-operations",level:3},{value:"File Operations",id:"file-operations",level:3},{value:"Chaining Operations",id:"chaining-operations",level:3},{value:"HTTP Requests",id:"http-requests",level:3},{value:"Pattern 1: Resource Management",id:"pattern-1-resource-management",level:3},{value:"Pattern 2: Error Context",id:"pattern-2-error-context",level:3},{value:"Comparison: IOResult vs IOEither",id:"comparison-ioresult-vs-ioeither",level:3}];function a(e){let r={code:"code",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components},{ApiTable:t,CodeCard:n,Compare:l,CompareCol:c,PageHeader:o,Section:d}=r;return t||h("ApiTable",!0),n||h("CodeCard",!0),l||h("Compare",!0),c||h("CompareCol",!0),o||h("PageHeader",!0),d||h("Section",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o,{eyebrow:"Reference \xb7 Core Type",title:"IOResult",lede:"Combine lazy evaluation (IO) with Go's error interface (Result). IOResult[A] represents a synchronous computation with side effects that may fail.",meta:[{label:"Package",value:"github.com/IBM/fp-go/v2/ioresult"},{label:"Type",value:"Monad (IO[Result[A]])"}]}),"\n",(0,s.jsxs)(d,{id:"overview",number:"01",title:"Overview",children:[(0,s.jsx)(r.p,{children:"IOResult is IOEither specialized for Go's error interface:"}),(0,s.jsx)(n,{file:"type_definition.go",children:`package ioresult

// IOResult is IO of Result
type IOResult[A any] = IO[Result[A]]
// Which expands to: func() Result[A]
// Which expands to: func() Either[error, A]
`}),(0,s.jsx)(r.h3,{id:"when-to-use",children:"When to Use"}),(0,s.jsx)(t,{children:(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Use IOResult When"}),(0,s.jsx)(r.th,{children:"Use IOEither When"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Standard Go error handling"}),(0,s.jsx)(r.td,{children:"Custom error types"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Library interoperability"}),(0,s.jsx)(r.td,{children:"Domain-specific errors"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Simpler type signatures (1 param)"}),(0,s.jsx)(r.td,{children:"Type-level error distinction"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Working with existing Go code"}),(0,s.jsx)(r.td,{children:"Rich error information"})]})]})]})})]}),"\n",(0,s.jsxs)(d,{id:"api",number:"02",title:"Core",titleAccent:"API",children:[(0,s.jsx)(r.h3,{id:"constructors",children:"Constructors"}),(0,s.jsx)(t,{children:(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Function"}),(0,s.jsx)(r.th,{children:"Signature"}),(0,s.jsx)(r.th,{children:"Description"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"Ok"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"func Ok[A any](value A) IOResult[A]"})}),(0,s.jsx)(r.td,{children:"Create successful IOResult"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"Error"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"func Error[A any](err error) IOResult[A]"})}),(0,s.jsx)(r.td,{children:"Create failed IOResult"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"Of"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"func Of[A any](value A) IOResult[A]"})}),(0,s.jsx)(r.td,{children:"Alias for Ok"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"TryCatchError"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"func TryCatchError[A any](f func() (A, error)) IOResult[A]"})}),(0,s.jsx)(r.td,{children:"From function returning tuple"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"FromIO"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"func FromIO[A any](io IO[A]) IOResult[A]"})}),(0,s.jsx)(r.td,{children:"Lift IO to IOResult"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"FromResult"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"func FromResult[A any](r Result[A]) IOResult[A]"})}),(0,s.jsx)(r.td,{children:"Lift Result to IOResult"})]})]})]})}),(0,s.jsx)(r.h3,{id:"transformations",children:"Transformations"}),(0,s.jsx)(t,{children:(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Function"}),(0,s.jsx)(r.th,{children:"Signature"}),(0,s.jsx)(r.th,{children:"Description"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"Map"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"func Map[A, B any](f func(A) B) func(IOResult[A]) IOResult[B]"})}),(0,s.jsx)(r.td,{children:"Transform success value"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"MapError"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"func MapError[A any](f func(error) error) func(IOResult[A]) IOResult[A]"})}),(0,s.jsx)(r.td,{children:"Transform error"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"BiMap"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"func BiMap[A, B any](fe func(error) error, fa func(A) B) func(IOResult[A]) IOResult[B]"})}),(0,s.jsx)(r.td,{children:"Transform both"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"Chain"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"func Chain[A, B any](f func(A) IOResult[B]) func(IOResult[A]) IOResult[B]"})}),(0,s.jsx)(r.td,{children:"Sequence operations"})]})]})]})}),(0,s.jsx)(r.h3,{id:"combining",children:"Combining"}),(0,s.jsx)(t,{children:(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Function"}),(0,s.jsx)(r.th,{children:"Signature"}),(0,s.jsx)(r.th,{children:"Description"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"Ap"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"func Ap[A, B any](fa IOResult[A]) func(IOResult[func(A) B]) IOResult[B]"})}),(0,s.jsx)(r.td,{children:"Apply wrapped function"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"SequenceArray"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"func SequenceArray[A any]([]IOResult[A]) IOResult[[]A]"})}),(0,s.jsx)(r.td,{children:"All-or-nothing"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"TraverseArray"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"func TraverseArray[A, B any](f func(A) IOResult[B]) func([]A) IOResult[[]B]"})}),(0,s.jsx)(r.td,{children:"Map and sequence"})]})]})]})}),(0,s.jsx)(r.h3,{id:"extraction",children:"Extraction"}),(0,s.jsx)(t,{children:(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Function"}),(0,s.jsx)(r.th,{children:"Signature"}),(0,s.jsx)(r.th,{children:"Description"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"Unwrap"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"func Unwrap[A any](IOResult[A]) IO[tuple.Tuple2[A, error]]"})}),(0,s.jsx)(r.td,{children:"Convert to IO of tuple"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"ToOption"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"func ToOption[A any](IOResult[A]) IO[Option[A]]"})}),(0,s.jsx)(r.td,{children:"Convert to IO of Option"})]})]})]})})]}),"\n",(0,s.jsxs)(d,{id:"examples",number:"03",title:"Usage",titleAccent:"Examples",children:[(0,s.jsx)(r.h3,{id:"basic-operations",children:"Basic Operations"}),(0,s.jsx)(n,{file:"basic.go",children:`package main

import (
  "errors"
  IOR "github.com/IBM/fp-go/v2/ioresult"
)

func main() {
  // Create IOResult values
  success := IOR.Ok(42)
  failure := IOR.Error[int](errors.New("something went wrong"))
  
  // Execute
  result := success()  // Result[int] = Ok(42)
  result = failure()   // Result[int] = Error("something went wrong")
}
`}),(0,s.jsx)(r.h3,{id:"file-operations",children:"File Operations"}),(0,s.jsx)(n,{file:"file_ops.go",children:`package main

import (
  "os"
  IOR "github.com/IBM/fp-go/v2/ioresult"
)

func readFile(path string) IOR.IOResult[[]byte] {
  return IOR.TryCatchError(func() ([]byte, error) {
      return os.ReadFile(path)
  })
}

func writeFile(path string, data []byte) IOR.IOResult[unit.Unit] {
  return IOR.TryCatchError(func() (unit.Unit, error) {
      err := os.WriteFile(path, data, 0644)
      return unit.Unit{}, err
  })
}

func main() {
  result := readFile("config.json")()
  // Result[[]byte]
}
`}),(0,s.jsx)(r.h3,{id:"chaining-operations",children:"Chaining Operations"}),(0,s.jsx)(n,{file:"chaining.go",children:`package main

import (
  IOR "github.com/IBM/fp-go/v2/ioresult"
  F "github.com/IBM/fp-go/v2/function"
)

func fetchUser(id string) IOR.IOResult[User] {
  return IOR.TryCatchError(func() (User, error) {
      return db.FindUser(id)
  })
}

func validateUser(user User) IOR.IOResult[User] {
  if user.Age < 18 {
      return IOR.Error[User](errors.New("user must be 18+"))
  }
  return IOR.Ok(user)
}

func saveUser(user User) IOR.IOResult[User] {
  return IOR.TryCatchError(func() (User, error) {
      return db.SaveUser(user)
  })
}

func processUser(id string) IOR.IOResult[User] {
  return F.Pipe3(
      fetchUser(id),
      IOR.Chain(validateUser),
      IOR.Chain(saveUser),
  )
}

func main() {
  result := processUser("user-123")()
  // Result[User]
}
`}),(0,s.jsx)(r.h3,{id:"http-requests",children:"HTTP Requests"}),(0,s.jsx)(n,{file:"http.go",children:`package main

import (
  "io"
  "net/http"
  IOR "github.com/IBM/fp-go/v2/ioresult"
)

func httpGet(url string) IOR.IOResult[[]byte] {
  return IOR.TryCatchError(func() ([]byte, error) {
      resp, err := http.Get(url)
      if err != nil {
          return nil, err
      }
      defer resp.Body.Close()
      
      if resp.StatusCode != 200 {
          return nil, fmt.Errorf("HTTP %d", resp.StatusCode)
      }
      
      return io.ReadAll(resp.Body)
  })
}

func main() {
  result := httpGet("https://api.example.com/data")()
  // Result[[]byte]
}
`})]}),"\n",(0,s.jsxs)(d,{id:"patterns",number:"04",title:"Common",titleAccent:"Patterns",children:[(0,s.jsx)(r.h3,{id:"pattern-1-resource-management",children:"Pattern 1: Resource Management"}),(0,s.jsx)(n,{file:"resource.go",children:`package main

import (
  "os"
  IOR "github.com/IBM/fp-go/v2/ioresult"
)

func processFile(path string) IOR.IOResult[Data] {
  return IOR.Bracket(
      // Acquire
      func() IOR.IOResult[*os.File] {
          return IOR.TryCatchError(func() (*os.File, error) {
              return os.Open(path)
          })
      },
      // Use
      func(f *os.File) IOR.IOResult[Data] {
          return parseData(f)
      },
      // Release (always runs)
      func(f *os.File, _ IOR.IOResult[Data]) IOR.IOResult[unit.Unit] {
          f.Close()
          return IOR.Ok(unit.Unit{})
      },
  )
}
`}),(0,s.jsx)(r.h3,{id:"pattern-2-error-context",children:"Pattern 2: Error Context"}),(0,s.jsx)(n,{file:"error_context.go",children:`package main

import (
  IOR "github.com/IBM/fp-go/v2/ioresult"
  F "github.com/IBM/fp-go/v2/function"
)

func processData(id string) IOR.IOResult[Data] {
  return F.Pipe3(
      fetchData(id),
      IOR.MapError(func(err error) error {
          return fmt.Errorf("fetch failed: %w", err)
      }),
      IOR.Chain(validateData),
      IOR.MapError(func(err error) error {
          return fmt.Errorf("validation failed: %w", err)
      }),
  )
}
`}),(0,s.jsx)(r.h3,{id:"comparison-ioresult-vs-ioeither",children:"Comparison: IOResult vs IOEither"}),(0,s.jsxs)(l,{children:[(0,s.jsx)(c,{kind:"good",children:(0,s.jsx)(n,{file:"ioresult.go",children:`// \u{2705} Use IOResult for standard errors
func readFile(path string) IOR.IOResult[[]byte] {
  return IOR.TryCatchError(os.ReadFile(path))
}
`})}),(0,s.jsx)(c,{kind:"good",children:(0,s.jsx)(n,{file:"ioeither.go",children:`// \u{2705} Use IOEither for custom errors
type FileError struct {
  Path string
  Code int
}

func readFile(path string) IOE.IOEither[FileError, []byte] {
  // Rich error information
}
`})})]})]})]})}function u(e={}){let{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}function h(e,r){throw Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},8453(e,r,t){t.d(r,{R:()=>l,x:()=>c});var n=t(6540);let s={},i=n.createContext(s);function l(e){let r=n.useContext(i);return n.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),n.createElement(i.Provider,{value:r},e.children)}}}]);
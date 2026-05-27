"use strict";(self.webpackChunkfp_go_docs=self.webpackChunkfp_go_docs||[]).push([["2969"],{5921(e,r,i){i.r(r),i.d(r,{metadata:()=>t,default:()=>a,frontMatter:()=>c,contentTitle:()=>o,toc:()=>h,assets:()=>d});var t=JSON.parse('{"id":"v2/ioeither","title":"IOEither","description":"Lazy side effects with custom error handling - combine IO and Either for effectful computations.","source":"@site/docs/v2/ioeither.md","sourceDirName":"v2","slug":"/v2/ioeither","permalink":"/fp-go/docs/v2/ioeither","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":14,"frontMatter":{"title":"IOEither","hide_title":true,"description":"Lazy side effects with custom error handling - combine IO and Either for effectful computations.","sidebar_position":14},"sidebar":"apiSidebar","previous":{"title":"IOResult","permalink":"/fp-go/docs/v2/ioresult"},"next":{"title":"IOOption","permalink":"/fp-go/docs/v2/iooption"}}'),n=i(4848),s=i(8453);let c={title:"IOEither",hide_title:!0,description:"Lazy side effects with custom error handling - combine IO and Either for effectful computations.",sidebar_position:14},o,d={},h=[{value:"When to Use",id:"when-to-use",level:3},{value:"Constructors",id:"constructors",level:3},{value:"Transformations",id:"transformations",level:3},{value:"Combining",id:"combining",level:3},{value:"Pattern Matching",id:"pattern-matching",level:3},{value:"Utilities",id:"utilities",level:3},{value:"Basic Operations",id:"basic-operations",level:3},{value:"File Operations",id:"file-operations",level:3},{value:"Chaining Operations",id:"chaining-operations",level:3},{value:"Error Context",id:"error-context",level:3},{value:"Pattern 1: Resource Management",id:"pattern-1-resource-management",level:3},{value:"Pattern 2: Fallback on Error",id:"pattern-2-fallback-on-error",level:3},{value:"Comparison: IOEither vs IOResult",id:"comparison-ioeither-vs-ioresult",level:3}];function l(e){let r={code:"code",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components},{ApiTable:i,CodeCard:t,Compare:c,CompareCol:o,PageHeader:d,Section:h}=r;return i||E("ApiTable",!0),t||E("CodeCard",!0),c||E("Compare",!0),o||E("CompareCol",!0),d||E("PageHeader",!0),h||E("Section",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(d,{eyebrow:"Reference \xb7 Core Type",title:"IOEither",lede:"Combine lazy evaluation (IO) with custom error handling (Either). IOEither[E, A] represents a synchronous computation with side effects that may fail with custom error type E.",meta:[{label:"Package",value:"github.com/IBM/fp-go/v2/ioeither"},{label:"Type",value:"Monad (IO[Either[E, A]])"}]}),"\n",(0,n.jsxs)(h,{id:"overview",number:"01",title:"Overview",children:[(0,n.jsx)(r.p,{children:"IOEither combines two powerful abstractions:"}),(0,n.jsx)(t,{file:"type_definition.go",children:`package ioeither

// IOEither is IO of Either
type IOEither[E, A any] = IO[Either[E, A]]
// Which expands to: func() Either[E, A]
`}),(0,n.jsx)(r.h3,{id:"when-to-use",children:"When to Use"}),(0,n.jsx)(i,{children:(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Use IOEither When"}),(0,n.jsx)(r.th,{children:"Use IOResult When"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Custom error types with rich information"}),(0,n.jsxs)(r.td,{children:["Standard Go ",(0,n.jsx)(r.code,{children:"error"})," interface"]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Domain-specific error handling"}),(0,n.jsx)(r.td,{children:"Library interoperability"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Type-level error distinction"}),(0,n.jsx)(r.td,{children:"Simpler type signatures"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Migration from v1 (used IOEither extensively)"}),(0,n.jsx)(r.td,{children:"Working with existing Go code"})]})]})]})})]}),"\n",(0,n.jsxs)(h,{id:"api",number:"02",title:"Core",titleAccent:"API",children:[(0,n.jsx)(r.h3,{id:"constructors",children:"Constructors"}),(0,n.jsx)(i,{children:(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Function"}),(0,n.jsx)(r.th,{children:"Signature"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"Right"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"func Right[E, A any](value A) IOEither[E, A]"})}),(0,n.jsx)(r.td,{children:"Create successful IOEither"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"Left"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"func Left[E, A any](err E) IOEither[E, A]"})}),(0,n.jsx)(r.td,{children:"Create failed IOEither"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"Of"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"func Of[E, A any](value A) IOEither[E, A]"})}),(0,n.jsx)(r.td,{children:"Alias for Right"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"TryCatch"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"func TryCatch[E, A any](f func() (A, E)) IOEither[E, A]"})}),(0,n.jsx)(r.td,{children:"From function returning tuple"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"FromIO"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"func FromIO[E, A any](io IO[A]) IOEither[E, A]"})}),(0,n.jsx)(r.td,{children:"Lift IO to IOEither"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"FromEither"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"func FromEither[E, A any](e Either[E, A]) IOEither[E, A]"})}),(0,n.jsx)(r.td,{children:"Lift Either to IOEither"})]})]})]})}),(0,n.jsx)(r.h3,{id:"transformations",children:"Transformations"}),(0,n.jsx)(i,{children:(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Function"}),(0,n.jsx)(r.th,{children:"Signature"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"Map"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"func Map[E, A, B any](f func(A) B) func(IOEither[E, A]) IOEither[E, B]"})}),(0,n.jsx)(r.td,{children:"Transform success value"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"MapLeft"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"func MapLeft[A, E1, E2 any](f func(E1) E2) func(IOEither[E1, A]) IOEither[E2, A]"})}),(0,n.jsx)(r.td,{children:"Transform error value"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"BiMap"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"func BiMap[E1, E2, A, B any](fe func(E1) E2, fa func(A) B) func(IOEither[E1, A]) IOEither[E2, B]"})}),(0,n.jsx)(r.td,{children:"Transform both sides"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"Chain"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"func Chain[E, A, B any](f func(A) IOEither[E, B]) func(IOEither[E, A]) IOEither[E, B]"})}),(0,n.jsx)(r.td,{children:"Sequence operations"})]})]})]})}),(0,n.jsx)(r.h3,{id:"combining",children:"Combining"}),(0,n.jsx)(i,{children:(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Function"}),(0,n.jsx)(r.th,{children:"Signature"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"Ap"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"func Ap[E, A, B any](fa IOEither[E, A]) func(IOEither[E, func(A) B]) IOEither[E, B]"})}),(0,n.jsx)(r.td,{children:"Apply wrapped function"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"SequenceArray"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"func SequenceArray[E, A any]([]IOEither[E, A]) IOEither[E, []A]"})}),(0,n.jsx)(r.td,{children:"All-or-nothing"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"TraverseArray"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"func TraverseArray[E, A, B any](f func(A) IOEither[E, B]) func([]A) IOEither[E, []B]"})}),(0,n.jsx)(r.td,{children:"Map and sequence"})]})]})]})}),(0,n.jsx)(r.h3,{id:"pattern-matching",children:"Pattern Matching"}),(0,n.jsx)(i,{children:(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Function"}),(0,n.jsx)(r.th,{children:"Signature"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"Fold"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"func Fold[E, A, B any](onLeft func(E) IO[B], onRight func(A) IO[B]) func(IOEither[E, A]) IO[B]"})}),(0,n.jsx)(r.td,{children:"Extract to IO"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"Match"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"func Match[E, A, B any](onLeft func(E) IOEither[E, B], onRight func(A) IOEither[E, B]) func(IOEither[E, A]) IOEither[E, B]"})}),(0,n.jsx)(r.td,{children:"Pattern match"})]})]})]})}),(0,n.jsx)(r.h3,{id:"utilities",children:"Utilities"}),(0,n.jsx)(i,{children:(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Function"}),(0,n.jsx)(r.th,{children:"Signature"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"ChainFirst"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"func ChainFirst[E, A, B any](f func(A) IOEither[E, B]) func(IOEither[E, A]) IOEither[E, A]"})}),(0,n.jsx)(r.td,{children:"Side effect, keep value"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"Alt"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"func Alt[E, A any](second IOEither[E, A]) func(IOEither[E, A]) IOEither[E, A]"})}),(0,n.jsx)(r.td,{children:"Fallback on Left"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"OrElse"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"func OrElse[E, A any](f func(E) IOEither[E, A]) func(IOEither[E, A]) IOEither[E, A]"})}),(0,n.jsx)(r.td,{children:"Lazy fallback"})]})]})]})})]}),"\n",(0,n.jsxs)(h,{id:"examples",number:"03",title:"Usage",titleAccent:"Examples",children:[(0,n.jsx)(r.h3,{id:"basic-operations",children:"Basic Operations"}),(0,n.jsx)(t,{file:"basic.go",children:`package main

import (
  "fmt"
  IOE "github.com/IBM/fp-go/v2/ioeither"
)

type AppError struct {
  Code    int
  Message string
}

func main() {
  // Create IOEither values
  success := IOE.Right[AppError](42)
  failure := IOE.Left[int](AppError{
      Code:    404,
      Message: "Not found",
  })
  
  // Execute
  result := success()  // Either[AppError, int] = Right(42)
  result = failure()   // Either[AppError, int] = Left(AppError{...})
}
`}),(0,n.jsx)(r.h3,{id:"file-operations",children:"File Operations"}),(0,n.jsx)(t,{file:"file_ops.go",children:`package main

import (
  "os"
  IOE "github.com/IBM/fp-go/v2/ioeither"
)

type FileError struct {
  Path    string
  Message string
}

func readConfig(path string) IOE.IOEither[FileError, Config] {
  return IOE.TryCatch(func() (Config, FileError) {
      data, err := os.ReadFile(path)
      if err != nil {
          return Config{}, FileError{
              Path:    path,
              Message: err.Error(),
          }
      }
      
      var cfg Config
      if err := json.Unmarshal(data, &cfg); err != nil {
          return Config{}, FileError{
              Path:    path,
              Message: "invalid JSON: " + err.Error(),
          }
      }
      
      return cfg, FileError{}
  })
}

func main() {
  result := readConfig("config.json")()
  // Either[FileError, Config]
}
`}),(0,n.jsx)(r.h3,{id:"chaining-operations",children:"Chaining Operations"}),(0,n.jsx)(t,{file:"chaining.go",children:`package main

import (
  IOE "github.com/IBM/fp-go/v2/ioeither"
  F "github.com/IBM/fp-go/v2/function"
)

type ValidationError struct {
  Field   string
  Message string
}

func fetchUser(id string) IOE.IOEither[ValidationError, User] {
  return IOE.TryCatch(func() (User, ValidationError) {
      // Fetch from database
      user, err := db.FindUser(id)
      if err != nil {
          return User{}, ValidationError{
              Field:   "id",
              Message: err.Error(),
          }
      }
      return user, ValidationError{}
  })
}

func validateUser(user User) IOE.IOEither[ValidationError, User] {
  if user.Age < 18 {
      return IOE.Left[User](ValidationError{
          Field:   "age",
          Message: "must be 18 or older",
      })
  }
  return IOE.Right[ValidationError](user)
}

func saveUser(user User) IOE.IOEither[ValidationError, User] {
  return IOE.TryCatch(func() (User, ValidationError) {
      err := db.SaveUser(user)
      if err != nil {
          return User{}, ValidationError{
              Field:   "save",
              Message: err.Error(),
          }
      }
      return user, ValidationError{}
  })
}

func processUser(id string) IOE.IOEither[ValidationError, User] {
  return F.Pipe3(
      fetchUser(id),
      IOE.Chain(validateUser),
      IOE.Chain(saveUser),
  )
}

func main() {
  result := processUser("user-123")()
  // Either[ValidationError, User]
}
`}),(0,n.jsx)(r.h3,{id:"error-context",children:"Error Context"}),(0,n.jsx)(t,{file:"error_context.go",children:`package main

import (
  IOE "github.com/IBM/fp-go/v2/ioeither"
  F "github.com/IBM/fp-go/v2/function"
)

func enrichError(operation string) func(AppError) AppError {
  return func(err AppError) AppError {
      return AppError{
          Code:    err.Code,
          Message: fmt.Sprintf("%s: %s", operation, err.Message),
      }
  }
}

func processData(id string) IOE.IOEither[AppError, Data] {
  return F.Pipe3(
      fetchData(id),
      IOE.MapLeft(enrichError("fetch")),
      IOE.Chain(validateData),
      IOE.MapLeft(enrichError("validate")),
  )
}
`})]}),"\n",(0,n.jsxs)(h,{id:"patterns",number:"04",title:"Common",titleAccent:"Patterns",children:[(0,n.jsx)(r.h3,{id:"pattern-1-resource-management",children:"Pattern 1: Resource Management"}),(0,n.jsx)(t,{file:"resource.go",children:`package main

import (
  "os"
  IOE "github.com/IBM/fp-go/v2/ioeither"
)

func processFile(path string) IOE.IOEither[AppError, Data] {
  return IOE.Bracket(
      // Acquire
      func() IOE.IOEither[AppError, *os.File] {
          return IOE.TryCatch(func() (*os.File, AppError) {
              f, err := os.Open(path)
              if err != nil {
                  return nil, AppError{Code: 500, Message: err.Error()}
              }
              return f, AppError{}
          })
      },
      // Use
      func(f *os.File) IOE.IOEither[AppError, Data] {
          return parseData(f)
      },
      // Release (always runs)
      func(f *os.File, _ IOE.IOEither[AppError, Data]) IOE.IOEither[AppError, unit.Unit] {
          f.Close()
          return IOE.Right[AppError](unit.Unit{})
      },
  )
}
`}),(0,n.jsx)(r.h3,{id:"pattern-2-fallback-on-error",children:"Pattern 2: Fallback on Error"}),(0,n.jsx)(t,{file:"fallback.go",children:`package main

import (
  IOE "github.com/IBM/fp-go/v2/ioeither"
)

func fetchWithFallback(id string) IOE.IOEither[AppError, Data] {
  return F.Pipe1(
      fetchFromCache(id),
      IOE.OrElse(func(err AppError) IOE.IOEither[AppError, Data] {
          // Fallback to database on cache miss
          return fetchFromDB(id)
      }),
  )
}
`}),(0,n.jsx)(r.h3,{id:"comparison-ioeither-vs-ioresult",children:"Comparison: IOEither vs IOResult"}),(0,n.jsxs)(c,{children:[(0,n.jsx)(o,{kind:"bad",children:(0,n.jsx)(t,{file:"ioeither_for_error.go",children:`// \u{274C} Don't use IOEither[error, A]
func readFile(path string) IOE.IOEither[error, []byte] {
  // Use IOResult instead
}
`})}),(0,n.jsx)(o,{kind:"good",children:(0,n.jsx)(t,{file:"ioeither_for_custom.go",children:`// \u{2705} Use IOEither for custom errors
func readFile(path string) IOE.IOEither[FileError, []byte] {
  // Rich error information
}

// \u{2705} Use IOResult for standard errors
func readFile(path string) IOR.IOResult[[]byte] {
  // Simpler, idiomatic
}
`})})]})]})]})}function a(e={}){let{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}function E(e,r){throw Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},8453(e,r,i){i.d(r,{R:()=>c,x:()=>o});var t=i(6540);let n={},s=t.createContext(n);function c(e){let r=t.useContext(s);return t.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:c(e.components),t.createElement(s.Provider,{value:r},e.children)}}}]);
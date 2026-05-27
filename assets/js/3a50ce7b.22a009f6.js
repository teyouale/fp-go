"use strict";(self.webpackChunkfp_go_docs=self.webpackChunkfp_go_docs||[]).push([["7500"],{9918(e,r,n){n.r(r),n.d(r,{metadata:()=>t,default:()=>h,frontMatter:()=>c,contentTitle:()=>l,toc:()=>o,assets:()=>d});var t=JSON.parse('{"id":"v2/result","title":"Result","description":"Type-safe error handling with Ok/Err - specialized Either for Go\'s error interface.","source":"@site/docs/v2/result.md","sourceDirName":"v2","slug":"/v2/result","permalink":"/fp-go/docs/v2/result","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":10,"frontMatter":{"title":"Result","hide_title":true,"description":"Type-safe error handling with Ok/Err - specialized Either for Go\'s error interface.","sidebar_position":10},"sidebar":"apiSidebar","previous":{"title":"IOOption","permalink":"/fp-go/docs/v2/iooption"},"next":{"title":"Effect","permalink":"/fp-go/docs/v2/effect"}}'),s=n(4848),i=n(8453);let c={title:"Result",hide_title:!0,description:"Type-safe error handling with Ok/Err - specialized Either for Go's error interface.",sidebar_position:10},l,d={},o=[{value:"Why Result over Either?",id:"why-result-over-either",level:3},{value:"Constructors",id:"constructors",level:3},{value:"Pattern Matching",id:"pattern-matching",level:3},{value:"Transformations",id:"transformations",level:3},{value:"Combining",id:"combining",level:3},{value:"Extraction",id:"extraction",level:3},{value:"Testing",id:"testing",level:3},{value:"Basic Operations",id:"basic-operations",level:3},{value:"From Go Idioms",id:"from-go-idioms",level:3},{value:"Chaining Operations",id:"chaining-operations",level:3},{value:"Error Context",id:"error-context",level:3},{value:"Sequence Operations",id:"sequence-operations",level:3},{value:"Pattern 1: Resource Management",id:"pattern-1-resource-management",level:3},{value:"Pattern 2: Validation",id:"pattern-2-validation",level:3}];function a(e){let r={code:"code",h3:"h3",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components},{ApiTable:n,CodeCard:t,Compare:c,CompareCol:l,PageHeader:d,Section:o}=r;return n||u("ApiTable",!0),t||u("CodeCard",!0),c||u("Compare",!0),l||u("CompareCol",!0),d||u("PageHeader",!0),o||u("Section",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(d,{eyebrow:"Reference \xb7 Core Type",title:"Result",lede:"Type-safe error handling with Ok and Error variants. Result[A] is a specialized Either[error, A] designed for idiomatic Go error handling.",meta:[{label:"Package",value:"github.com/IBM/fp-go/v2/result"},{label:"Type",value:"Monad (Either[error, A])"}]}),"\n",(0,s.jsxs)(o,{id:"overview",number:"01",title:"Overview",children:[(0,s.jsx)(r.p,{children:"Result represents a computation that may fail with an error:"}),(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"Ok"})," (Right): Success value of type ",(0,s.jsx)(r.code,{children:"A"})]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"Error"})," (Left): Failure with Go's ",(0,s.jsx)(r.code,{children:"error"})," interface"]}),"\n"]}),(0,s.jsx)(t,{file:"type_definition.go",children:`package result

// Result is Either specialized for error handling
type Result[A any] = Either[error, A]
`}),(0,s.jsx)(r.h3,{id:"why-result-over-either",children:"Why Result over Either?"}),(0,s.jsx)(n,{children:(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Feature"}),(0,s.jsx)(r.th,{children:"Result[A]"}),(0,s.jsx)(r.th,{children:"Either[E, A]"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Error type"}),(0,s.jsxs)(r.td,{children:["Always ",(0,s.jsx)(r.code,{children:"error"})]}),(0,s.jsxs)(r.td,{children:["Generic ",(0,s.jsx)(r.code,{children:"E"})]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Type params"}),(0,s.jsx)(r.td,{children:"1 (simpler)"}),(0,s.jsx)(r.td,{children:"2 (more flexible)"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Go interop"}),(0,s.jsxs)(r.td,{children:["Native ",(0,s.jsx)(r.code,{children:"(value, error)"})]}),(0,s.jsx)(r.td,{children:"Requires conversion"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Use case"}),(0,s.jsx)(r.td,{children:"Error handling"}),(0,s.jsx)(r.td,{children:"General sum types"})]})]})]})})]}),"\n",(0,s.jsxs)(o,{id:"api",number:"02",title:"Core",titleAccent:"API",children:[(0,s.jsx)(r.h3,{id:"constructors",children:"Constructors"}),(0,s.jsx)(n,{children:(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Function"}),(0,s.jsx)(r.th,{children:"Signature"}),(0,s.jsx)(r.th,{children:"Description"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"Ok"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"func Ok[A any](value A) Result[A]"})}),(0,s.jsx)(r.td,{children:"Create success value"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"Error"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"func Error[A any](err error) Result[A]"})}),(0,s.jsx)(r.td,{children:"Create error value"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"Of"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"func Of[A any](value A) Result[A]"})}),(0,s.jsx)(r.td,{children:"Alias for Ok (monadic pure)"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"TryCatchError"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"func TryCatchError[A any](value A, err error) Result[A]"})}),(0,s.jsxs)(r.td,{children:["From ",(0,s.jsx)(r.code,{children:"(value, error)"})," tuple"]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"FromError"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"func FromError[A any](f func(...) (A, error)) func(...) Result[A]"})}),(0,s.jsx)(r.td,{children:"Wrap error-returning function"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"Try"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"func Try[A any](f func() A) Result[A]"})}),(0,s.jsx)(r.td,{children:"Catch panics as errors"})]})]})]})}),(0,s.jsx)(r.h3,{id:"pattern-matching",children:"Pattern Matching"}),(0,s.jsx)(n,{children:(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Function"}),(0,s.jsx)(r.th,{children:"Signature"}),(0,s.jsx)(r.th,{children:"Description"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"Fold"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"func Fold[A, B any](onError func(error) B, onOk func(A) B) func(Result[A]) B"})}),(0,s.jsx)(r.td,{children:"Extract value from both cases"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"Match"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"func Match[A, B any](onError func(error) Result[B], onOk func(A) Result[B]) func(Result[A]) Result[B]"})}),(0,s.jsx)(r.td,{children:"Pattern match with Result return"})]})]})]})}),(0,s.jsx)(r.h3,{id:"transformations",children:"Transformations"}),(0,s.jsx)(n,{children:(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Function"}),(0,s.jsx)(r.th,{children:"Signature"}),(0,s.jsx)(r.th,{children:"Description"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"Map"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"func Map[A, B any](f func(A) B) func(Result[A]) Result[B]"})}),(0,s.jsx)(r.td,{children:"Transform success value"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"Chain"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"func Chain[A, B any](f func(A) Result[B]) func(Result[A]) Result[B]"})}),(0,s.jsx)(r.td,{children:"FlatMap - sequence operations"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"MapError"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"func MapError[A any](f func(error) error) func(Result[A]) Result[A]"})}),(0,s.jsx)(r.td,{children:"Transform error value"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"BiMap"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"func BiMap[A, B any](fe func(error) error, fa func(A) B) func(Result[A]) Result[B]"})}),(0,s.jsx)(r.td,{children:"Transform both sides"})]})]})]})}),(0,s.jsx)(r.h3,{id:"combining",children:"Combining"}),(0,s.jsx)(n,{children:(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Function"}),(0,s.jsx)(r.th,{children:"Signature"}),(0,s.jsx)(r.th,{children:"Description"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"Ap"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"func Ap[A, B any](fa Result[A]) func(Result[func(A) B]) Result[B]"})}),(0,s.jsx)(r.td,{children:"Apply wrapped function"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"SequenceArray"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"func SequenceArray[A any]([]Result[A]) Result[[]A]"})}),(0,s.jsx)(r.td,{children:"All-or-nothing for arrays"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"TraverseArray"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"func TraverseArray[A, B any](f func(A) Result[B]) func([]A) Result[[]B]"})}),(0,s.jsx)(r.td,{children:"Map and sequence"})]})]})]})}),(0,s.jsx)(r.h3,{id:"extraction",children:"Extraction"}),(0,s.jsx)(n,{children:(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Function"}),(0,s.jsx)(r.th,{children:"Signature"}),(0,s.jsx)(r.th,{children:"Description"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"Unwrap"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"func Unwrap[A any](Result[A]) (A, error)"})}),(0,s.jsxs)(r.td,{children:["Convert to ",(0,s.jsx)(r.code,{children:"(value, error)"})," tuple"]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"GetOrElse"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"func GetOrElse[A any](f func() A) func(Result[A]) A"})}),(0,s.jsx)(r.td,{children:"Extract with default"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"ToOption"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"func ToOption[A any](Result[A]) Option[A]"})}),(0,s.jsx)(r.td,{children:"Convert to Option (discards error)"})]})]})]})}),(0,s.jsx)(r.h3,{id:"testing",children:"Testing"}),(0,s.jsx)(n,{children:(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Function"}),(0,s.jsx)(r.th,{children:"Signature"}),(0,s.jsx)(r.th,{children:"Description"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"IsOk"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"func IsOk[A any](Result[A]) bool"})}),(0,s.jsx)(r.td,{children:"Test for success"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"IsError"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"func IsError[A any](Result[A]) bool"})}),(0,s.jsx)(r.td,{children:"Test for error"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"Exists"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"func Exists[A any](pred func(A) bool) func(Result[A]) bool"})}),(0,s.jsx)(r.td,{children:"Test success value"})]})]})]})})]}),"\n",(0,s.jsxs)(o,{id:"examples",number:"03",title:"Usage",titleAccent:"Examples",children:[(0,s.jsx)(r.h3,{id:"basic-operations",children:"Basic Operations"}),(0,s.jsx)(t,{file:"basic.go",children:`package main

import (
  "errors"
  "fmt"
  R "github.com/IBM/fp-go/v2/result"
)

func main() {
  // Create Results
  success := R.Ok(42)
  failure := R.Error[int](errors.New("something went wrong"))
  
  // Check values
  fmt.Println(R.IsOk(success))    // true
  fmt.Println(R.IsError(failure)) // true
  
  // Extract with default
  value := R.GetOrElse(func() int { return 0 })(success)
  fmt.Println(value) // 42
  
  // Convert to Go idiom
  val, err := R.Unwrap(success)
  fmt.Println(val, err) // 42 <nil>
}
`}),(0,s.jsx)(r.h3,{id:"from-go-idioms",children:"From Go Idioms"}),(0,s.jsx)(t,{file:"from_go.go",children:`package main

import (
  "os"
  R "github.com/IBM/fp-go/v2/result"
)

// Convert (value, error) tuple
func readFile(path string) R.Result[[]byte] {
  return R.TryCatchError(os.ReadFile(path))
}

// Wrap error-returning function
var readFileFunc = R.FromError(os.ReadFile)

func main() {
  // Use wrapped function
  content := readFileFunc("config.json")
  
  // Handle result
  R.Match(
      func(err error) R.Result[string] {
          return R.Error[string](err)
      },
      func(data []byte) R.Result[string] {
          return R.Ok(string(data))
      },
  )(content)
}
`}),(0,s.jsx)(r.h3,{id:"chaining-operations",children:"Chaining Operations"}),(0,s.jsx)(t,{file:"chaining.go",children:`package main

import (
  "errors"
  "strconv"
  R "github.com/IBM/fp-go/v2/result"
  F "github.com/IBM/fp-go/v2/function"
)

func parseInt(s string) R.Result[int] {
  n, err := strconv.Atoi(s)
  return R.TryCatchError(n, err)
}

func validatePositive(n int) R.Result[int] {
  if n > 0 {
      return R.Ok(n)
  }
  return R.Error[int](errors.New("must be positive"))
}

func double(n int) R.Result[int] {
  return R.Ok(n * 2)
}

func main() {
  // Chain operations - short-circuits on first error
  result := F.Pipe3(
      parseInt("42"),
      R.Chain(validatePositive),
      R.Chain(double),
  )
  
  // Extract value
  value := R.GetOrElse(func() int { return 0 })(result)
  fmt.Println(value) // 84
}
`}),(0,s.jsx)(r.h3,{id:"error-context",children:"Error Context"}),(0,s.jsx)(t,{file:"error_context.go",children:`package main

import (
  "fmt"
  R "github.com/IBM/fp-go/v2/result"
  F "github.com/IBM/fp-go/v2/function"
)

func fetchUser(id string) R.Result[User] {
  // ... fetch logic
}

func processUser(id string) R.Result[User] {
  return F.Pipe2(
      fetchUser(id),
      R.Chain(validateUser),
      R.MapError(func(err error) error {
          return fmt.Errorf("failed to process user %s: %w", id, err)
      }),
  )
}
`}),(0,s.jsx)(r.h3,{id:"sequence-operations",children:"Sequence Operations"}),(0,s.jsx)(t,{file:"sequence.go",children:`package main

import (
  "strconv"
  R "github.com/IBM/fp-go/v2/result"
)

func main() {
  // Parse all strings - fails if any fail
  parseAll := R.TraverseArray(func(s string) R.Result[int] {
      n, err := strconv.Atoi(s)
      return R.TryCatchError(n, err)
  })
  
  result := parseAll([]string{"1", "2", "3"})
  // Ok([1, 2, 3])
  
  result = parseAll([]string{"1", "bad", "3"})
  // Error("invalid syntax")
}
`})]}),"\n",(0,s.jsxs)(o,{id:"patterns",number:"04",title:"Common",titleAccent:"Patterns",children:[(0,s.jsx)(r.h3,{id:"pattern-1-resource-management",children:"Pattern 1: Resource Management"}),(0,s.jsx)(t,{file:"resource.go",children:`package main

import (
  "os"
  R "github.com/IBM/fp-go/v2/result"
)

func processFile(path string) R.Result[Data] {
  return R.Bracket(
      // Acquire
      func() R.Result[*os.File] {
          return R.TryCatchError(os.Open(path))
      },
      // Use
      func(f *os.File) R.Result[Data] {
          return parseData(f)
      },
      // Release (always runs)
      func(f *os.File, _ R.Result[Data]) R.Result[unit.Unit] {
          f.Close()
          return R.Ok(unit.Unit{})
      },
  )
}
`}),(0,s.jsx)(r.h3,{id:"pattern-2-validation",children:"Pattern 2: Validation"}),(0,s.jsxs)(c,{children:[(0,s.jsx)(l,{kind:"bad",children:(0,s.jsx)(t,{file:"traditional.go",children:`// \u{274C} Traditional Go
func validateUser(u User) (User, error) {
  if u.Name == "" {
      return User{}, errors.New("name required")
  }
  if u.Age < 18 {
      return User{}, errors.New("must be 18+")
  }
  return u, nil
}
`})}),(0,s.jsx)(l,{kind:"good",children:(0,s.jsx)(t,{file:"functional.go",children:`// \u{2705} With Result
func validateUser(u User) R.Result[User] {
  return F.Pipe2(
      validateName(u),
      R.Chain(validateAge),
  )
}

func validateName(u User) R.Result[User] {
  if u.Name == "" {
      return R.Error[User](errors.New("name required"))
  }
  return R.Ok(u)
}
`})})]})]})]})}function h(e={}){let{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}function u(e,r){throw Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},8453(e,r,n){n.d(r,{R:()=>c,x:()=>l});var t=n(6540);let s={},i=t.createContext(s);function c(e){let r=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),t.createElement(i.Provider,{value:r},e.children)}}}]);
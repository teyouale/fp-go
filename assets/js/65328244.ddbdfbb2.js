"use strict";(self.webpackChunkfp_go_docs=self.webpackChunkfp_go_docs||[]).push([["7694"],{2859(e,r,t){t.r(r),t.d(r,{metadata:()=>i,default:()=>a,frontMatter:()=>d,contentTitle:()=>c,toc:()=>l,assets:()=>o});var i=JSON.parse('{"id":"v2/either","title":"Either","description":"Generic disjoint union type with Left and Right - for custom error types and domain modeling.","source":"@site/docs/v2/either.md","sourceDirName":"v2","slug":"/v2/either","permalink":"/fp-go/docs/v2/either","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":11,"frontMatter":{"title":"Either","hide_title":true,"description":"Generic disjoint union type with Left and Right - for custom error types and domain modeling.","sidebar_position":11},"sidebar":"apiSidebar","previous":{"title":"API Reference","permalink":"/fp-go/docs/api-reference"},"next":{"title":"IO","permalink":"/fp-go/docs/v2/io"}}'),n=t(4848),s=t(8453);let d={title:"Either",hide_title:!0,description:"Generic disjoint union type with Left and Right - for custom error types and domain modeling.",sidebar_position:11},c,o={},l=[{value:"When to Use",id:"when-to-use",level:3},{value:"Constructors",id:"constructors",level:3},{value:"Pattern Matching",id:"pattern-matching",level:3},{value:"Transformations",id:"transformations",level:3},{value:"Combining",id:"combining",level:3},{value:"Extraction",id:"extraction",level:3},{value:"Testing",id:"testing",level:3},{value:"Basic Operations",id:"basic-operations",level:3},{value:"Custom Error Types",id:"custom-error-types",level:3},{value:"Transformations",id:"transformations-1",level:3},{value:"Domain Modeling",id:"domain-modeling",level:3},{value:"Sequence Operations",id:"sequence-operations",level:3},{value:"Pattern 1: Error Type Conversion",id:"pattern-1-error-type-conversion",level:3},{value:"Pattern 2: Validation with Multiple Errors",id:"pattern-2-validation-with-multiple-errors",level:3},{value:"Comparison: Either vs Result",id:"comparison-either-vs-result",level:3}];function h(e){let r={code:"code",h3:"h3",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components},{ApiTable:t,CodeCard:i,Compare:d,CompareCol:c,PageHeader:o,Section:l}=r;return t||u("ApiTable",!0),i||u("CodeCard",!0),d||u("Compare",!0),c||u("CompareCol",!0),o||u("PageHeader",!0),l||u("Section",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o,{eyebrow:"Reference \xb7 Core Type",title:"Either",lede:"Generic disjoint union representing a value of one of two possible types. Either[E, A] can be Left (typically error) or Right (typically success).",meta:[{label:"Package",value:"github.com/IBM/fp-go/v2/either"},{label:"Type",value:"Monad"}]}),"\n",(0,n.jsxs)(l,{id:"overview",number:"01",title:"Overview",children:[(0,n.jsx)(r.p,{children:"Either represents a choice between two types:"}),(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Left"}),": Value of type ",(0,n.jsx)(r.code,{children:"E"})," (typically error or failure)"]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Right"}),": Value of type ",(0,n.jsx)(r.code,{children:"A"})," (typically success)"]}),"\n"]}),(0,n.jsxs)(r.p,{children:["Unlike Result[A] which fixes the error type to ",(0,n.jsx)(r.code,{children:"error"}),", Either[E, A] is generic over both types."]}),(0,n.jsx)(r.h3,{id:"when-to-use",children:"When to Use"}),(0,n.jsx)(t,{children:(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Use Either When"}),(0,n.jsx)(r.th,{children:"Use Result When"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Custom error types with rich information"}),(0,n.jsx)(r.td,{children:"Standard Go error handling"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Domain modeling with sum types"}),(0,n.jsx)(r.td,{children:"Library interoperability"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Non-error alternatives (cache miss, etc.)"}),(0,n.jsx)(r.td,{children:"Simpler type signatures"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Type-level distinction between error types"}),(0,n.jsx)(r.td,{children:"Working with existing Go code"})]})]})]})})]}),"\n",(0,n.jsxs)(l,{id:"api",number:"02",title:"Core",titleAccent:"API",children:[(0,n.jsx)(r.h3,{id:"constructors",children:"Constructors"}),(0,n.jsx)(t,{children:(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Function"}),(0,n.jsx)(r.th,{children:"Signature"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"Left"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"func Left[A, E any](value E) Either[E, A]"})}),(0,n.jsx)(r.td,{children:"Create Left value (failure)"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"Right"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"func Right[E, A any](value A) Either[E, A]"})}),(0,n.jsx)(r.td,{children:"Create Right value (success)"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"Of"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"func Of[E, A any](value A) Either[E, A]"})}),(0,n.jsx)(r.td,{children:"Alias for Right (monadic pure)"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"TryCatch"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"func TryCatch[E, A any](f func() (A, E)) Either[E, A]"})}),(0,n.jsx)(r.td,{children:"From function returning tuple"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"FromPredicate"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"func FromPredicate[E, A any](pred func(A) bool, onFalse func(A) E) func(A) Either[E, A]"})}),(0,n.jsx)(r.td,{children:"Conditional Either"})]})]})]})}),(0,n.jsx)(r.h3,{id:"pattern-matching",children:"Pattern Matching"}),(0,n.jsx)(t,{children:(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Function"}),(0,n.jsx)(r.th,{children:"Signature"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"Fold"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"func Fold[E, A, B any](onLeft func(E) B, onRight func(A) B) func(Either[E, A]) B"})}),(0,n.jsx)(r.td,{children:"Extract value from both cases"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"Match"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"func Match[E, A, B any](onLeft func(E) Either[E, B], onRight func(A) Either[E, B]) func(Either[E, A]) Either[E, B]"})}),(0,n.jsx)(r.td,{children:"Pattern match with Either return"})]})]})]})}),(0,n.jsx)(r.h3,{id:"transformations",children:"Transformations"}),(0,n.jsx)(t,{children:(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Function"}),(0,n.jsx)(r.th,{children:"Signature"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"Map"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"func Map[E, A, B any](f func(A) B) func(Either[E, A]) Either[E, B]"})}),(0,n.jsx)(r.td,{children:"Transform Right value"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"MapLeft"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"func MapLeft[A, E1, E2 any](f func(E1) E2) func(Either[E1, A]) Either[E2, A]"})}),(0,n.jsx)(r.td,{children:"Transform Left value"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"BiMap"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"func BiMap[E1, E2, A, B any](fe func(E1) E2, fa func(A) B) func(Either[E1, A]) Either[E2, B]"})}),(0,n.jsx)(r.td,{children:"Transform both sides"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"Chain"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"func Chain[E, A, B any](f func(A) Either[E, B]) func(Either[E, A]) Either[E, B]"})}),(0,n.jsx)(r.td,{children:"FlatMap - sequence operations"})]})]})]})}),(0,n.jsx)(r.h3,{id:"combining",children:"Combining"}),(0,n.jsx)(t,{children:(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Function"}),(0,n.jsx)(r.th,{children:"Signature"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"Ap"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"func Ap[E, A, B any](fa Either[E, A]) func(Either[E, func(A) B]) Either[E, B]"})}),(0,n.jsx)(r.td,{children:"Apply wrapped function"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"SequenceArray"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"func SequenceArray[E, A any]([]Either[E, A]) Either[E, []A]"})}),(0,n.jsx)(r.td,{children:"All-or-nothing for arrays"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"TraverseArray"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"func TraverseArray[E, A, B any](f func(A) Either[E, B]) func([]A) Either[E, []B]"})}),(0,n.jsx)(r.td,{children:"Map and sequence"})]})]})]})}),(0,n.jsx)(r.h3,{id:"extraction",children:"Extraction"}),(0,n.jsx)(t,{children:(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Function"}),(0,n.jsx)(r.th,{children:"Signature"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"Unwrap"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"func Unwrap[A any](Either[error, A]) (A, error)"})}),(0,n.jsx)(r.td,{children:"Convert to tuple (only for Either[error, A])"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"GetOrElse"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"func GetOrElse[E, A any](f func() A) func(Either[E, A]) A"})}),(0,n.jsx)(r.td,{children:"Extract with default"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"ToOption"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"func ToOption[E, A any](Either[E, A]) Option[A]"})}),(0,n.jsx)(r.td,{children:"Convert to Option (discards Left)"})]})]})]})}),(0,n.jsx)(r.h3,{id:"testing",children:"Testing"}),(0,n.jsx)(t,{children:(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Function"}),(0,n.jsx)(r.th,{children:"Signature"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"IsLeft"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"func IsLeft[E, A any](Either[E, A]) bool"})}),(0,n.jsx)(r.td,{children:"Test for Left"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"IsRight"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"func IsRight[E, A any](Either[E, A]) bool"})}),(0,n.jsx)(r.td,{children:"Test for Right"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"Exists"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"func Exists[E, A any](pred func(A) bool) func(Either[E, A]) bool"})}),(0,n.jsx)(r.td,{children:"Test Right value"})]})]})]})})]}),"\n",(0,n.jsxs)(l,{id:"examples",number:"03",title:"Usage",titleAccent:"Examples",children:[(0,n.jsx)(r.h3,{id:"basic-operations",children:"Basic Operations"}),(0,n.jsx)(i,{file:"basic.go",children:`package main

import (
  "fmt"
  E "github.com/IBM/fp-go/v2/either"
)

func main() {
  // Create Either values
  success := E.Right[string](42)
  failure := E.Left[int]("error message")
  
  // Check values
  fmt.Println(E.IsRight(success)) // true
  fmt.Println(E.IsLeft(failure))  // true
  
  // Pattern match
  result := E.Fold(
      func(err string) string { return "Error: " + err },
      func(n int) string { return fmt.Sprintf("Value: %d", n) },
  )(success)
  fmt.Println(result) // "Value: 42"
}
`}),(0,n.jsx)(r.h3,{id:"custom-error-types",children:"Custom Error Types"}),(0,n.jsx)(i,{file:"custom_errors.go",children:`package main

import (
  "time"
  E "github.com/IBM/fp-go/v2/either"
)

type ValidationError struct {
  Field   string
  Message string
}

type AppError struct {
  Code      int
  Message   string
  Timestamp time.Time
}

func validateEmail(email string) E.Either[ValidationError, string] {
  if !strings.Contains(email, "@") {
      return E.Left[string](ValidationError{
          Field:   "email",
          Message: "must contain @",
      })
  }
  return E.Right[ValidationError](email)
}

func fetchUser(id string) E.Either[AppError, User] {
  if id == "" {
      return E.Left[User](AppError{
          Code:      400,
          Message:   "Invalid user ID",
          Timestamp: time.Now(),
      })
  }
  // ... fetch logic
  return E.Right[AppError](user)
}
`}),(0,n.jsx)(r.h3,{id:"transformations-1",children:"Transformations"}),(0,n.jsx)(i,{file:"transformations.go",children:`package main

import (
  E "github.com/IBM/fp-go/v2/either"
  F "github.com/IBM/fp-go/v2/function"
)

func main() {
  // Map: transform Right value
  doubled := F.Pipe1(
      E.Right[string](21),
      E.Map(func(n int) int { return n * 2 }),
  )
  // Right(42)
  
  // MapLeft: transform Left value
  withContext := F.Pipe1(
      E.Left[int]("error"),
      E.MapLeft(func(msg string) AppError {
          return AppError{Code: 500, Message: msg}
      }),
  )
  // Left(AppError{Code: 500, Message: "error"})
  
  // Chain: sequence operations
  result := F.Pipe2(
      parseInput("42"),
      E.Chain(validateInput),
      E.Chain(processInput),
  )
}
`}),(0,n.jsx)(r.h3,{id:"domain-modeling",children:"Domain Modeling"}),(0,n.jsx)(i,{file:"domain_modeling.go",children:`package main

import (
  E "github.com/IBM/fp-go/v2/either"
)

// Payment methods as sum type
type CreditCard struct {
  Number string
  CVV    string
}

type BankTransfer struct {
  AccountNumber string
  RoutingNumber string
}

type PaymentMethod = E.Either[CreditCard, BankTransfer]

func processPayment(method PaymentMethod, amount float64) E.Either[string, Receipt] {
  return E.Fold(
      func(cc CreditCard) E.Either[string, Receipt] {
          return processCreditCard(cc, amount)
      },
      func(bt BankTransfer) E.Either[string, Receipt] {
          return processBankTransfer(bt, amount)
      },
  )(method)
}

// Cache results
type CacheMiss struct {
  Key    string
  Reason string
}

type CacheResult[A any] = E.Either[CacheMiss, A]

func getFromCache[A any](key string) CacheResult[A] {
  if val, ok := cache.Get(key); ok {
      return E.Right[CacheMiss](val.(A))
  }
  return E.Left[A](CacheMiss{
      Key:    key,
      Reason: "not found",
  })
}
`}),(0,n.jsx)(r.h3,{id:"sequence-operations",children:"Sequence Operations"}),(0,n.jsx)(i,{file:"sequence.go",children:`package main

import (
  E "github.com/IBM/fp-go/v2/either"
)

func main() {
  // Parse all - fails on first error
  parseAll := E.TraverseArray(func(s string) E.Either[string, int] {
      n, err := strconv.Atoi(s)
      if err != nil {
          return E.Left[int](err.Error())
      }
      return E.Right[string](n)
  })
  
  result := parseAll([]string{"1", "2", "3"})
  // Right([1, 2, 3])
  
  result = parseAll([]string{"1", "bad", "3"})
  // Left("invalid syntax")
}
`})]}),"\n",(0,n.jsxs)(l,{id:"patterns",number:"04",title:"Common",titleAccent:"Patterns",children:[(0,n.jsx)(r.h3,{id:"pattern-1-error-type-conversion",children:"Pattern 1: Error Type Conversion"}),(0,n.jsx)(i,{file:"error_conversion.go",children:`package main

import (
  E "github.com/IBM/fp-go/v2/either"
  F "github.com/IBM/fp-go/v2/function"
)

type DBError struct{ Msg string }
type AppError struct{ Code int; Msg string }

func processOrder(id string) E.Either[AppError, Order] {
  return F.Pipe3(
      fetchOrder(id),  // Either[DBError, Order]
      E.MapLeft(func(e DBError) AppError {
          return AppError{Code: 500, Msg: e.Msg}
      }),
      E.Chain(validateOrder),  // Either[AppError, Order]
      E.Chain(saveOrder),
  )
}
`}),(0,n.jsx)(r.h3,{id:"pattern-2-validation-with-multiple-errors",children:"Pattern 2: Validation with Multiple Errors"}),(0,n.jsx)(i,{file:"validation.go",children:`package main

import (
  "strings"
  E "github.com/IBM/fp-go/v2/either"
)

type ValidationErrors []ValidationError

func (ve ValidationErrors) Error() string {
  var msgs []string
  for _, e := range ve {
      msgs = append(msgs, fmt.Sprintf("%s: %s", e.Field, e.Message))
  }
  return strings.Join(msgs, "; ")
}

func validateUser(user User) E.Either[ValidationErrors, User] {
  var errors ValidationErrors
  
  if user.Name == "" {
      errors = append(errors, ValidationError{
          Field:   "name",
          Message: "required",
      })
  }
  
  if !strings.Contains(user.Email, "@") {
      errors = append(errors, ValidationError{
          Field:   "email",
          Message: "invalid format",
      })
  }
  
  if len(errors) > 0 {
      return E.Left[User](errors)
  }
  
  return E.Right[ValidationErrors](user)
}
`}),(0,n.jsx)(r.h3,{id:"comparison-either-vs-result",children:"Comparison: Either vs Result"}),(0,n.jsxs)(d,{children:[(0,n.jsx)(c,{kind:"bad",children:(0,n.jsx)(i,{file:"either_for_errors.go",children:`// \u{274C} Don't use Either[error, A] for standard errors
func fetchUser(id string) E.Either[error, User] {
  // Use Result[User] instead
}
`})}),(0,n.jsx)(c,{kind:"good",children:(0,n.jsx)(i,{file:"either_for_custom.go",children:`// \u{2705} Use Either for custom error types
func fetchUser(id string) E.Either[AppError, User] {
  // Rich error information
}

// \u{2705} Use Result for standard errors
func fetchUser(id string) R.Result[User] {
  // Simpler, idiomatic Go
}
`})})]})]})]})}function a(e={}){let{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}function u(e,r){throw Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},8453(e,r,t){t.d(r,{R:()=>d,x:()=>c});var i=t(6540);let n={},s=i.createContext(n);function d(e){let r=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),i.createElement(s.Provider,{value:r},e.children)}}}]);
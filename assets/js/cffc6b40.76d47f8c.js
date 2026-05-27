"use strict";(self.webpackChunkfp_go_docs=self.webpackChunkfp_go_docs||[]).push([["4958"],{2284(e,r,n){n.r(r),n.d(r,{metadata:()=>t,default:()=>f,frontMatter:()=>i,contentTitle:()=>d,toc:()=>o,assets:()=>l});var t=JSON.parse('{"id":"v2/effect","title":"Effect","description":"Complete solution for real-world applications - combines dependency injection, lazy evaluation, and error handling.","source":"@site/docs/v2/effect.md","sourceDirName":"v2","slug":"/v2/effect","permalink":"/fp-go/docs/v2/effect","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":16,"frontMatter":{"title":"Effect","hide_title":true,"description":"Complete solution for real-world applications - combines dependency injection, lazy evaluation, and error handling.","sidebar_position":16},"sidebar":"apiSidebar","previous":{"title":"Result","permalink":"/fp-go/docs/v2/result"},"next":{"title":"Reader","permalink":"/fp-go/docs/v2/reader"}}'),s=n(4848),c=n(8453);let i={title:"Effect",hide_title:!0,description:"Complete solution for real-world applications - combines dependency injection, lazy evaluation, and error handling.",sidebar_position:16},d,l={},o=[{value:"Why Effect?",id:"why-effect",level:3},{value:"Constructors",id:"constructors",level:3},{value:"Transformations",id:"transformations",level:3},{value:"Dependencies",id:"dependencies",level:3},{value:"Error Handling",id:"error-handling",level:3},{value:"Combining",id:"combining",level:3},{value:"Basic Operations",id:"basic-operations",level:3},{value:"Service Layer",id:"service-layer",level:3},{value:"HTTP Handler",id:"http-handler",level:3},{value:"Transaction Management",id:"transaction-management",level:3},{value:"Do Notation",id:"do-notation",level:3},{value:"Pattern 1: Middleware",id:"pattern-1-middleware",level:3},{value:"Pattern 2: Fallback Chain",id:"pattern-2-fallback-chain",level:3},{value:"Pattern 3: Testing",id:"pattern-3-testing",level:3},{value:"\u2705 Do",id:"-do",level:3},{value:"\u274C Don&#39;t",id:"-dont",level:3}];function a(e){let r={code:"code",h3:"h3",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.R)(),...e.components},{ApiTable:n,Callout:t,CodeCard:i,PageHeader:d,Section:l}=r;return n||h("ApiTable",!0),t||h("Callout",!0),i||h("CodeCard",!0),d||h("PageHeader",!0),l||h("Section",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(d,{eyebrow:"Reference \xb7 Core Type",title:"Effect",lede:"Complete solution for real-world applications. Effect[C, A] combines dependency injection (Reader), lazy evaluation (IO), and error handling (Result) into one powerful abstraction.",meta:[{label:"Package",value:"github.com/IBM/fp-go/v2/effect"},{label:"Type",value:"ReaderIOResult[C, A]"},{label:"Alias",value:"func(C) func() Either[error, A]"}]}),"\n",(0,s.jsxs)(l,{id:"overview",number:"01",title:"Overview",children:[(0,s.jsx)(r.p,{children:"Effect is the most powerful type in fp-go, combining three essential abstractions:"}),(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"Reader[C]"}),": Dependency injection and context passing"]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"IO"}),": Lazy evaluation and side effect management"]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"Result[A]"}),": Type-safe error handling"]}),"\n"]}),(0,s.jsx)(i,{file:"type_definition.go",children:`package effect

// Effect is an alias for ReaderIOResult
type Effect[C, A any] = ReaderIOResult[C, A]
// Which expands to: func(C) IO[Result[A]]
// Or fully: func(C) func() Either[error, A]
`}),(0,s.jsx)(r.h3,{id:"why-effect",children:"Why Effect?"}),(0,s.jsx)(n,{children:(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Capability"}),(0,s.jsx)(r.th,{children:"Benefit"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Dependency Injection"}),(0,s.jsx)(r.td,{children:"Type-safe, testable dependencies"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Lazy Evaluation"}),(0,s.jsx)(r.td,{children:"Control when effects execute"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Error Handling"}),(0,s.jsx)(r.td,{children:"Type-safe, composable errors"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Testability"}),(0,s.jsx)(r.td,{children:"Easy to mock dependencies"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Composability"}),(0,s.jsx)(r.td,{children:"Build complex operations from simple ones"})]})]})]})})]}),"\n",(0,s.jsxs)(l,{id:"api",number:"02",title:"Core",titleAccent:"API",children:[(0,s.jsx)(r.h3,{id:"constructors",children:"Constructors"}),(0,s.jsx)(n,{children:(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Function"}),(0,s.jsx)(r.th,{children:"Signature"}),(0,s.jsx)(r.th,{children:"Description"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"Succeed"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"func Succeed[C, A any](value A) Effect[C, A]"})}),(0,s.jsx)(r.td,{children:"Create success value"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"Fail"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"func Fail[C, A any](err error) Effect[C, A]"})}),(0,s.jsx)(r.td,{children:"Create failure"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"Of"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"func Of[C, A any](value A) Effect[C, A]"})}),(0,s.jsx)(r.td,{children:"Alias for Succeed"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"FromIOResult"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"func FromIOResult[C, A any](ior IOResult[A]) Effect[C, A]"})}),(0,s.jsx)(r.td,{children:"Lift IOResult"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"FromIO"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"func FromIO[C, A any](io IO[A]) Effect[C, A]"})}),(0,s.jsx)(r.td,{children:"Lift IO (always succeeds)"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"Ask"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"func Ask[C, A any](f func(C) A) Effect[C, A]"})}),(0,s.jsx)(r.td,{children:"Access dependencies"})]})]})]})}),(0,s.jsx)(r.h3,{id:"transformations",children:"Transformations"}),(0,s.jsx)(n,{children:(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Function"}),(0,s.jsx)(r.th,{children:"Signature"}),(0,s.jsx)(r.th,{children:"Description"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"Map"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"func Map[C, A, B any](f func(A) B) func(Effect[C, A]) Effect[C, B]"})}),(0,s.jsx)(r.td,{children:"Transform success value"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"Chain"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"func Chain[C, A, B any](f func(A) Effect[C, B]) func(Effect[C, A]) Effect[C, B]"})}),(0,s.jsx)(r.td,{children:"Sequence operations"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"Tap"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"func Tap[C, A any](f func(A) Effect[C, any]) func(Effect[C, A]) Effect[C, A]"})}),(0,s.jsx)(r.td,{children:"Side effect, keep value"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"BiMap"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"func BiMap[C, A, B any](fe func(error) error, fa func(A) B) func(Effect[C, A]) Effect[C, B]"})}),(0,s.jsx)(r.td,{children:"Transform both sides"})]})]})]})}),(0,s.jsx)(r.h3,{id:"dependencies",children:"Dependencies"}),(0,s.jsx)(n,{children:(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Function"}),(0,s.jsx)(r.th,{children:"Signature"}),(0,s.jsx)(r.th,{children:"Description"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"Asks"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"func Asks[C, A any](f func(C) A) Effect[C, A]"})}),(0,s.jsx)(r.td,{children:"Access and transform context"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"Provide"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"func Provide[C, A any](ctx C) func(Effect[C, A]) IOResult[A]"})}),(0,s.jsx)(r.td,{children:"Supply dependencies"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"Local"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"func Local[C1, C2, A any](f func(C1) C2) func(Effect[C2, A]) Effect[C1, A]"})}),(0,s.jsx)(r.td,{children:"Transform context"})]})]})]})}),(0,s.jsx)(r.h3,{id:"error-handling",children:"Error Handling"}),(0,s.jsx)(n,{children:(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Function"}),(0,s.jsx)(r.th,{children:"Signature"}),(0,s.jsx)(r.th,{children:"Description"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"OrElse"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"func OrElse[C, A any](f func(error) Effect[C, A]) func(Effect[C, A]) Effect[C, A]"})}),(0,s.jsx)(r.td,{children:"Fallback on error"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"MapError"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"func MapError[C, A any](f func(error) error) func(Effect[C, A]) Effect[C, A]"})}),(0,s.jsx)(r.td,{children:"Transform error"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"Fold"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"func Fold[C, A, B any](onError func(error) B, onOk func(A) B) func(Effect[C, A]) Reader[C, IO[B]]"})}),(0,s.jsx)(r.td,{children:"Pattern match"})]})]})]})}),(0,s.jsx)(r.h3,{id:"combining",children:"Combining"}),(0,s.jsx)(n,{children:(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Function"}),(0,s.jsx)(r.th,{children:"Signature"}),(0,s.jsx)(r.th,{children:"Description"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"Ap"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"func Ap[C, A, B any](fa Effect[C, A]) func(Effect[C, func(A) B]) Effect[C, B]"})}),(0,s.jsx)(r.td,{children:"Apply wrapped function"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"SequenceArray"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"func SequenceArray[C, A any]([]Effect[C, A]) Effect[C, []A]"})}),(0,s.jsx)(r.td,{children:"All-or-nothing for arrays"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"TraverseArray"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"func TraverseArray[C, A, B any](f func(A) Effect[C, B]) func([]A) Effect[C, []B]"})}),(0,s.jsx)(r.td,{children:"Map and sequence"})]})]})]})})]}),"\n",(0,s.jsxs)(l,{id:"examples",number:"03",title:"Usage",titleAccent:"Examples",children:[(0,s.jsx)(r.h3,{id:"basic-operations",children:"Basic Operations"}),(0,s.jsx)(i,{file:"basic.go",children:`package main

import (
  "errors"
  E "github.com/IBM/fp-go/v2/effect"
)

type Dependencies struct {
  DB     *sql.DB
  Logger *log.Logger
}

func main() {
  // Create effects
  success := E.Succeed[Dependencies, string]("Hello")
  failure := E.Fail[Dependencies, string](errors.New("error"))
  
  // Access dependencies
  getDB := E.Ask[Dependencies, *sql.DB](func(deps Dependencies) *sql.DB {
      return deps.DB
  })
  
  // Execute with dependencies
  deps := Dependencies{DB: connectDB(), Logger: log.Default()}
  result := success(deps)()  // Result[string] = Ok("Hello")
}
`}),(0,s.jsx)(r.h3,{id:"service-layer",children:"Service Layer"}),(0,s.jsx)(i,{file:"service.go",children:`package main

import (
  E "github.com/IBM/fp-go/v2/effect"
  F "github.com/IBM/fp-go/v2/function"
)

type Dependencies struct {
  DB     *sql.DB
  Cache  *Cache
  Logger *log.Logger
}

type UserService struct{}

func (s *UserService) GetUser(id string) E.Effect[Dependencies, User] {
  return F.Pipe3(
      // Try cache first
      s.getUserFromCache(id),
      E.OrElse(func(err error) E.Effect[Dependencies, User] {
          // Fallback to database
          return s.getUserFromDB(id)
      }),
      E.Tap(s.logUser),
      E.Chain(s.validateUser),
  )
}

func (s *UserService) getUserFromCache(id string) E.Effect[Dependencies, User] {
  return E.Ask[Dependencies, User](func(deps Dependencies) User {
      if user, ok := deps.Cache.Get(id); ok {
          return user
      }
      return User{} // Will trigger OrElse
  })
}

func (s *UserService) getUserFromDB(id string) E.Effect[Dependencies, User] {
  return E.Ask[Dependencies, User](func(deps Dependencies) User {
      var user User
      err := deps.DB.QueryRow(
          "SELECT id, name, email FROM users WHERE id = ?", id,
      ).Scan(&user.ID, &user.Name, &user.Email)
      
      if err != nil {
          return User{}
      }
      return user
  })
}

func (s *UserService) logUser(user User) E.Effect[Dependencies, any] {
  return E.Ask[Dependencies, any](func(deps Dependencies) any {
      deps.Logger.Printf("Processing user: %s", user.ID)
      return nil
  })
}

func (s *UserService) validateUser(user User) E.Effect[Dependencies, User] {
  if user.Name == "" {
      return E.Fail[Dependencies, User](errors.New("invalid user"))
  }
  return E.Succeed[Dependencies, User](user)
}
`}),(0,s.jsx)(r.h3,{id:"http-handler",children:"HTTP Handler"}),(0,s.jsx)(i,{file:"http.go",children:`package main

import (
  "encoding/json"
  "net/http"
  E "github.com/IBM/fp-go/v2/effect"
  F "github.com/IBM/fp-go/v2/function"
)

type HTTPDeps struct {
  UserService *UserService
  Logger      *log.Logger
}

func GetUserHandler(deps HTTPDeps) http.HandlerFunc {
  return func(w http.ResponseWriter, r *http.Request) {
      id := r.URL.Query().Get("id")
      
      // Create effect
      eff := F.Pipe2(
          deps.UserService.GetUser(id),
          E.Map[HTTPDeps](func(u User) []byte {
              data, _ := json.Marshal(u)
              return data
          }),
      )
      
      // Execute effect
      result := eff(deps)()
      
      // Handle result
      if result.IsError(result) {
          http.Error(w, "Error", http.StatusInternalServerError)
          return
      }
      
      data, _ := result.Unwrap(result)
      w.Header().Set("Content-Type", "application/json")
      w.Write(data)
  }
}
`}),(0,s.jsx)(r.h3,{id:"transaction-management",children:"Transaction Management"}),(0,s.jsx)(i,{file:"transaction.go",children:`package main

import (
  E "github.com/IBM/fp-go/v2/effect"
  F "github.com/IBM/fp-go/v2/function"
)

type TxDeps struct {
  DB *sql.DB
}

func WithTransaction[A any](
  eff E.Effect[TxDeps, A],
) E.Effect[TxDeps, A] {
  return E.Ask[TxDeps, A](func(deps TxDeps) A {
      tx, err := deps.DB.Begin()
      if err != nil {
          return *new(A)
      }
      
      // Execute with transaction
      txDeps := TxDeps{DB: tx}
      result := eff(txDeps)()
      
      // Commit or rollback
      if result.IsError(result) {
          tx.Rollback()
          return *new(A)
      }
      
      if err := tx.Commit(); err != nil {
          return *new(A)
      }
      
      val, _ := result.Unwrap(result)
      return val
  })
}

func TransferFunds(from, to string, amount float64) E.Effect[TxDeps, unit.Unit] {
  return WithTransaction(
      F.Pipe2(
          debit(from, amount),
          E.Chain[TxDeps](func(_ unit.Unit) E.Effect[TxDeps, unit.Unit] {
              return credit(to, amount)
          }),
      ),
  )
}
`}),(0,s.jsx)(r.h3,{id:"do-notation",children:"Do Notation"}),(0,s.jsx)(i,{file:"do_notation.go",children:`package main

import (
  E "github.com/IBM/fp-go/v2/effect"
  F "github.com/IBM/fp-go/v2/function"
)

type State struct {
  User   User
  Orders []Order
  Total  float64
}

func GenerateReport(userID string) E.Effect[Dependencies, Report] {
  return F.Pipe4(
      E.Do[Dependencies](State{}),
      E.Bind("User", func(s State) E.Effect[Dependencies, User] {
          return fetchUser(userID)
      }),
      E.Bind("Orders", func(s State) E.Effect[Dependencies, []Order] {
          return fetchOrders(s.User.ID)
      }),
      E.Let("Total", func(s State) float64 {
          var total float64
          for _, order := range s.Orders {
              total += order.Amount
          }
          return total
      }),
      E.Map[Dependencies](func(s State) Report {
          return Report{
              User:   s.User,
              Orders: s.Orders,
              Total:  s.Total,
          }
      }),
  )
}
`})]}),"\n",(0,s.jsxs)(l,{id:"patterns",number:"04",title:"Common",titleAccent:"Patterns",children:[(0,s.jsx)(r.h3,{id:"pattern-1-middleware",children:"Pattern 1: Middleware"}),(0,s.jsx)(i,{file:"middleware.go",children:`package main

import (
  E "github.com/IBM/fp-go/v2/effect"
)

func LoggingMiddleware[A any](
  next E.Effect[HTTPDeps, A],
) E.Effect[HTTPDeps, A] {
  return E.Tap[HTTPDeps](func(resp A) E.Effect[HTTPDeps, any] {
      return E.Ask[HTTPDeps, any](func(deps HTTPDeps) any {
          deps.Logger.Printf("Response: %+v", resp)
          return nil
      })
  })(next)
}

func AuthMiddleware[A any](
  next E.Effect[HTTPDeps, A],
) E.Effect[HTTPDeps, A] {
  return E.Chain[HTTPDeps](func(_ any) E.Effect[HTTPDeps, A] {
      return next
  })(validateAuth())
}
`}),(0,s.jsx)(r.h3,{id:"pattern-2-fallback-chain",children:"Pattern 2: Fallback Chain"}),(0,s.jsx)(i,{file:"fallback.go",children:`package main

import (
  E "github.com/IBM/fp-go/v2/effect"
  F "github.com/IBM/fp-go/v2/function"
)

func GetConfig(key string) E.Effect[Dependencies, string] {
  return F.Pipe3(
      GetFromEnv(key),
      E.OrElse(func(err error) E.Effect[Dependencies, string] {
          return GetFromFile(key)
      }),
      E.OrElse(func(err error) E.Effect[Dependencies, string] {
          return GetFromDefaults(key)
      }),
  )
}
`}),(0,s.jsx)(r.h3,{id:"pattern-3-testing",children:"Pattern 3: Testing"}),(0,s.jsx)(i,{file:"testing.go",children:`package main

import (
  "testing"
  E "github.com/IBM/fp-go/v2/effect"
)

func TestProcessOrder(t *testing.T) {
  // Mock dependencies
  mockDeps := Dependencies{
      DB: &MockDB{
          Orders: map[string]Order{
              "123": {ID: "123", Total: 100.0},
          },
      },
      Logger: log.New(io.Discard, "", 0),
      Config: Config{},
  }
  
  // Execute effect with mocks
  result := ProcessOrder("123")(mockDeps)()
  
  // Assert
  assert.True(t, result.IsOk(result))
  order, _ := result.Unwrap(result)
  assert.Equal(t, "123", order.ID)
}
`})]}),"\n",(0,s.jsxs)(l,{id:"comparison",number:"05",title:"Type",titleAccent:"Comparison",children:[(0,s.jsx)(n,{children:(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Feature"}),(0,s.jsx)(r.th,{children:"Effect[C, A]"}),(0,s.jsx)(r.th,{children:"IOResult[A]"}),(0,s.jsx)(r.th,{children:"ReaderIOResult[C, A]"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Dependencies"}),(0,s.jsx)(r.td,{children:"\u2705 Yes"}),(0,s.jsx)(r.td,{children:"\u274C No"}),(0,s.jsx)(r.td,{children:"\u2705 Yes"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Lazy"}),(0,s.jsx)(r.td,{children:"\u2705 Yes"}),(0,s.jsx)(r.td,{children:"\u2705 Yes"}),(0,s.jsx)(r.td,{children:"\u2705 Yes"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Can fail"}),(0,s.jsx)(r.td,{children:"\u2705 Yes"}),(0,s.jsx)(r.td,{children:"\u2705 Yes"}),(0,s.jsx)(r.td,{children:"\u2705 Yes"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Type params"}),(0,s.jsx)(r.td,{children:"2"}),(0,s.jsx)(r.td,{children:"1"}),(0,s.jsx)(r.td,{children:"2"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Use case"}),(0,s.jsx)(r.td,{children:"Full applications"}),(0,s.jsx)(r.td,{children:"Simple IO"}),(0,s.jsx)(r.td,{children:"Same as Effect"})]})]})]})}),(0,s.jsx)(t,{type:"info",children:(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"Note"}),": Effect is an alias for ReaderIOResult - they are the same type with different naming conventions inspired by effect-ts."]})})]}),"\n",(0,s.jsxs)(l,{id:"best-practices",number:"06",title:"Best",titleAccent:"Practices",children:[(0,s.jsx)(r.h3,{id:"-do",children:"\u2705 Do"}),(0,s.jsx)(i,{file:"do.go",children:`// Use Effect for application logic
func ProcessUser(id string) effect.Effect[Dependencies, User]

// Compose effects
result := F.Pipe3(
  fetchUser(id),
  effect.Chain[Dependencies](validateUser),
  effect.Chain[Dependencies](saveUser),
)

// Provide dependencies at the edge
func main() {
  deps := setupDependencies()
  result := ProcessUser("123")(deps)()
}

// Test with mock dependencies
func TestProcessUser(t *testing.T) {
  mockDeps := createMockDeps()
  result := ProcessUser("123")(mockDeps)()
}
`}),(0,s.jsx)(r.h3,{id:"-dont",children:"\u274C Don't"}),(0,s.jsx)(i,{file:"dont.go",children:`// Don't execute effects in constructors
func NewService() *Service {
  data := fetchData()(deps)()  // \u{274C} Executes immediately
  return &Service{data: data}
}

// Don't pass dependencies as parameters
func ProcessUser(deps Dependencies, id string) effect.Effect[Dependencies, User]  // \u{274C}
func ProcessUser(id string) effect.Effect[Dependencies, User]  // \u{2705}

// Don't ignore errors
effect.Map[Dependencies](func(u User) User {
  saveUser(u)(deps)()  // \u{274C} Error is lost
  return u
})
`})]})]})}function f(e={}){let{wrapper:r}={...(0,c.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}function h(e,r){throw Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},8453(e,r,n){n.d(r,{R:()=>i,x:()=>d});var t=n(6540);let s={},c=t.createContext(s);function i(e){let r=t.useContext(c);return t.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(c.Provider,{value:r},e.children)}}}]);
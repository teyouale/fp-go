"use strict";(self.webpackChunkfp_go_docs=self.webpackChunkfp_go_docs||[]).push([["3270"],{5711(e,r,n){n.r(r),n.d(r,{metadata:()=>t,default:()=>h,frontMatter:()=>d,contentTitle:()=>c,toc:()=>o,assets:()=>l});var t=JSON.parse('{"id":"v2/readerioeither","title":"ReaderIOEither","description":"The ultimate monad stack - dependency injection + lazy effects + custom error handling.","source":"@site/docs/v2/readerioeither.md","sourceDirName":"v2","slug":"/v2/readerioeither","permalink":"/fp-go/docs/v2/readerioeither","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":20,"frontMatter":{"title":"ReaderIOEither","hide_title":true,"description":"The ultimate monad stack - dependency injection + lazy effects + custom error handling.","sidebar_position":20},"sidebar":"apiSidebar","previous":{"title":"ReaderIO","permalink":"/fp-go/docs/v2/readerio"},"next":{"title":"ReaderIOResult","permalink":"/fp-go/docs/v2/readerioresult"}}'),i=n(4848),s=n(8453);let d={title:"ReaderIOEither",hide_title:!0,description:"The ultimate monad stack - dependency injection + lazy effects + custom error handling.",sidebar_position:20},c,l={},o=[{value:"The Ultimate Stack",id:"the-ultimate-stack",level:3},{value:"Constructors",id:"constructors",level:3},{value:"Transformations",id:"transformations",level:3},{value:"Combining",id:"combining",level:3},{value:"Basic Application",id:"basic-application",level:3},{value:"Complete Application",id:"complete-application",level:3},{value:"Pattern: Full-Stack Application",id:"pattern-full-stack-application",level:3},{value:"When to Use",id:"when-to-use",level:3}];function a(e){let r={code:"code",h3:"h3",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components},{ApiTable:n,CodeCard:t,PageHeader:d,Section:c}=r;return n||p("ApiTable",!0),t||p("CodeCard",!0),d||p("PageHeader",!0),c||p("Section",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(d,{eyebrow:"Reference \xb7 Core Type",title:"ReaderIOEither",lede:"The most powerful combination: dependency injection (Reader) + lazy effects (IO) + custom error handling (Either). ReaderIOEither[C, E, A] is the ultimate monad stack.",meta:[{label:"Package",value:"github.com/IBM/fp-go/v2/readerioeither"},{label:"Type",value:"Monad (func(C) IO[Either[E, A]])"}]}),"\n",(0,i.jsxs)(c,{id:"overview",number:"01",title:"Overview",children:[(0,i.jsx)(t,{file:"type_definition.go",children:`package readerioeither

// ReaderIOEither combines Reader, IO, and Either
type ReaderIOEither[C, E, A any] = Reader[C, IOEither[E, A]]
// Which expands to: func(C) func() Either[E, A]
`}),(0,i.jsx)(r.h3,{id:"the-ultimate-stack",children:"The Ultimate Stack"}),(0,i.jsx)(n,{children:(0,i.jsxs)(r.table,{children:[(0,i.jsx)(r.thead,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.th,{children:"Layer"}),(0,i.jsx)(r.th,{children:"Provides"})]})}),(0,i.jsxs)(r.tbody,{children:[(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.strong,{children:"Reader[C, ...]"})}),(0,i.jsx)(r.td,{children:"Dependency injection"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.strong,{children:"IO[...]"})}),(0,i.jsx)(r.td,{children:"Lazy evaluation of side effects"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.strong,{children:"Either[E, A]"})}),(0,i.jsx)(r.td,{children:"Custom error handling"})]})]})]})})]}),"\n",(0,i.jsxs)(c,{id:"api",number:"02",title:"Core",titleAccent:"API",children:[(0,i.jsx)(r.h3,{id:"constructors",children:"Constructors"}),(0,i.jsx)(n,{children:(0,i.jsxs)(r.table,{children:[(0,i.jsx)(r.thead,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.th,{children:"Function"}),(0,i.jsx)(r.th,{children:"Signature"}),(0,i.jsx)(r.th,{children:"Description"})]})}),(0,i.jsxs)(r.tbody,{children:[(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"Right"})}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"func Right[C, E, A any](value A) ReaderIOEither[C, E, A]"})}),(0,i.jsx)(r.td,{children:"Create successful value"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"Left"})}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"func Left[C, E, A any](err E) ReaderIOEither[C, E, A]"})}),(0,i.jsx)(r.td,{children:"Create error value"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"Of"})}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"func Of[C, E, A any](value A) ReaderIOEither[C, E, A]"})}),(0,i.jsx)(r.td,{children:"Alias for Right"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"Ask"})}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"func Ask[C, E any]() ReaderIOEither[C, E, C]"})}),(0,i.jsx)(r.td,{children:"Access context"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"Asks"})}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"func Asks[C, E, A any](f func(C) A) ReaderIOEither[C, E, A]"})}),(0,i.jsx)(r.td,{children:"Access and transform context"})]})]})]})}),(0,i.jsx)(r.h3,{id:"transformations",children:"Transformations"}),(0,i.jsx)(n,{children:(0,i.jsxs)(r.table,{children:[(0,i.jsx)(r.thead,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.th,{children:"Function"}),(0,i.jsx)(r.th,{children:"Signature"}),(0,i.jsx)(r.th,{children:"Description"})]})}),(0,i.jsxs)(r.tbody,{children:[(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"Map"})}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"func Map[C, E, A, B any](f func(A) B) func(ReaderIOEither[C, E, A]) ReaderIOEither[C, E, B]"})}),(0,i.jsx)(r.td,{children:"Transform success value"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"MapLeft"})}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"func MapLeft[C, A, E1, E2 any](f func(E1) E2) func(ReaderIOEither[C, E1, A]) ReaderIOEither[C, E2, A]"})}),(0,i.jsx)(r.td,{children:"Transform error"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"Chain"})}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"func Chain[C, E, A, B any](f func(A) ReaderIOEither[C, E, B]) func(ReaderIOEither[C, E, A]) ReaderIOEither[C, E, B]"})}),(0,i.jsx)(r.td,{children:"Sequence operations"})]})]})]})}),(0,i.jsx)(r.h3,{id:"combining",children:"Combining"}),(0,i.jsx)(n,{children:(0,i.jsxs)(r.table,{children:[(0,i.jsx)(r.thead,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.th,{children:"Function"}),(0,i.jsx)(r.th,{children:"Signature"}),(0,i.jsx)(r.th,{children:"Description"})]})}),(0,i.jsxs)(r.tbody,{children:[(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"Ap"})}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"func Ap[C, E, A, B any](fa ReaderIOEither[C, E, A]) func(ReaderIOEither[C, E, func(A) B]) ReaderIOEither[C, E, B]"})}),(0,i.jsx)(r.td,{children:"Apply wrapped function"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"SequenceArray"})}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"func SequenceArray[C, E, A any]([]ReaderIOEither[C, E, A]) ReaderIOEither[C, E, []A]"})}),(0,i.jsx)(r.td,{children:"All-or-nothing"})]})]})]})})]}),"\n",(0,i.jsxs)(c,{id:"examples",number:"03",title:"Usage",titleAccent:"Examples",children:[(0,i.jsx)(r.h3,{id:"basic-application",children:"Basic Application"}),(0,i.jsx)(t,{file:"basic.go",children:`package main

import (
  RIOE "github.com/IBM/fp-go/v2/readerioeither"
)

type Dependencies struct {
  DB     *sql.DB
  Logger *log.Logger
}

type AppError struct {
  Code    int
  Message string
}

func fetchUser(id string) RIOE.ReaderIOEither[Dependencies, AppError, User] {
  return RIOE.Ask[Dependencies, AppError, *sql.DB](func(deps Dependencies) *sql.DB {
      return deps.DB
  }).Chain(func(db *sql.DB) RIOE.ReaderIOEither[Dependencies, AppError, User] {
      return RIOE.TryCatch(func() (User, AppError) {
          user, err := queryUser(db, id)
          if err != nil {
              return User{}, AppError{Code: 500, Message: err.Error()}
          }
          return user, AppError{}
      })
  })
}

func main() {
  deps := Dependencies{
      DB:     connectDB(),
      Logger: log.New(os.Stdout, "", 0),
  }
  
  result := fetchUser("user-123")(deps)()
  // Either[AppError, User]
}
`}),(0,i.jsx)(r.h3,{id:"complete-application",children:"Complete Application"}),(0,i.jsx)(t,{file:"complete_app.go",children:`package main

import (
  RIOE "github.com/IBM/fp-go/v2/readerioeither"
  F "github.com/IBM/fp-go/v2/function"
)

type Config struct {
  DBUrl string
  Port  int
}

type Dependencies struct {
  DB     *sql.DB
  Logger *log.Logger
  Config Config
}

type AppError struct {
  Code    int
  Message string
}

func getDB() RIOE.ReaderIOEither[Dependencies, AppError, *sql.DB] {
  return RIOE.Asks(func(deps Dependencies) *sql.DB {
      return deps.DB
  })
}

func logInfo(msg string) RIOE.ReaderIOEither[Dependencies, AppError, unit.Unit] {
  return RIOE.Ask[Dependencies, AppError, *log.Logger](func(deps Dependencies) *log.Logger {
      return deps.Logger
  }).Chain(func(logger *log.Logger) RIOE.ReaderIOEither[Dependencies, AppError, unit.Unit] {
      return RIOE.FromIO(IO.FromImpure(func() {
          logger.Println(msg)
      }))
  })
}

func fetchUser(id string) RIOE.ReaderIOEither[Dependencies, AppError, User] {
  return F.Pipe3(
      logInfo("Fetching user: " + id),
      RIOE.Chain(func(_ unit.Unit) RIOE.ReaderIOEither[Dependencies, AppError, *sql.DB] {
          return getDB()
      }),
      RIOE.Chain(func(db *sql.DB) RIOE.ReaderIOEither[Dependencies, AppError, User] {
          return RIOE.TryCatch(func() (User, AppError) {
              user, err := db.QueryUser(id)
              if err != nil {
                  return User{}, AppError{Code: 500, Message: err.Error()}
              }
              return user, AppError{}
          })
      }),
      RIOE.ChainFirst(func(u User) RIOE.ReaderIOEither[Dependencies, AppError, unit.Unit] {
          return logInfo("Found user: " + u.Name)
      }),
  )
}

func main() {
  deps := Dependencies{
      DB:     connectDB(),
      Logger: log.New(os.Stdout, "", 0),
      Config: loadConfig(),
  }
  
  result := fetchUser("user-123")(deps)()
  // Either[AppError, User]
}
`})]}),"\n",(0,i.jsxs)(c,{id:"patterns",number:"04",title:"Common",titleAccent:"Patterns",children:[(0,i.jsx)(r.h3,{id:"pattern-full-stack-application",children:"Pattern: Full-Stack Application"}),(0,i.jsx)(t,{file:"fullstack.go",children:`package main

import (
  RIOE "github.com/IBM/fp-go/v2/readerioeither"
  F "github.com/IBM/fp-go/v2/function"
)

func processOrder(orderID string) RIOE.ReaderIOEither[Dependencies, AppError, Receipt] {
  return F.Pipe4(
      fetchOrder(orderID),
      RIOE.Chain(validateOrder),
      RIOE.Chain(chargePayment),
      RIOE.Chain(sendConfirmation),
      RIOE.MapLeft(func(err AppError) AppError {
          return AppError{
              Code:    err.Code,
              Message: fmt.Sprintf("Order processing failed: %s", err.Message),
          }
      }),
  )
}
`}),(0,i.jsx)(r.h3,{id:"when-to-use",children:"When to Use"}),(0,i.jsx)(n,{children:(0,i.jsxs)(r.table,{children:[(0,i.jsx)(r.thead,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.th,{children:"Use ReaderIOEither When"}),(0,i.jsx)(r.th,{children:"Consider Simpler Alternative"})]})}),(0,i.jsxs)(r.tbody,{children:[(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"Need all three: DI + effects + custom errors"}),(0,i.jsx)(r.td,{children:"Use Reader if no effects needed"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"Building full applications"}),(0,i.jsx)(r.td,{children:"Use IOEither if no DI needed"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"Complex business logic"}),(0,i.jsx)(r.td,{children:"Use ReaderIO if errors are simple"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"Maximum composability required"}),(0,i.jsx)(r.td,{children:"Simpler types if features not needed"})]})]})]})})]})]})}function h(e={}){let{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}function p(e,r){throw Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},8453(e,r,n){n.d(r,{R:()=>d,x:()=>c});var t=n(6540);let i={},s=t.createContext(i);function d(e){let r=t.useContext(s);return t.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),t.createElement(s.Provider,{value:r},e.children)}}}]);
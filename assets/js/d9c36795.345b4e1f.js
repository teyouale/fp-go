"use strict";(self.webpackChunkfp_go_docs=self.webpackChunkfp_go_docs||[]).push([["5864"],{8190(e,n,t){t.r(n),t.d(n,{metadata:()=>r,default:()=>h,frontMatter:()=>d,contentTitle:()=>c,toc:()=>a,assets:()=>o});var r=JSON.parse('{"id":"v2/reader","title":"Reader","description":"Functional dependency injection - computations that depend on a shared context.","source":"@site/docs/v2/reader.md","sourceDirName":"v2","slug":"/v2/reader","permalink":"/fp-go/docs/v2/reader","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":17,"frontMatter":{"title":"Reader","hide_title":true,"description":"Functional dependency injection - computations that depend on a shared context.","sidebar_position":17},"sidebar":"apiSidebar","previous":{"title":"Effect","permalink":"/fp-go/docs/v2/effect"},"next":{"title":"ReaderEither","permalink":"/fp-go/docs/v2/readereither"}}'),i=t(4848),s=t(8453);let d={title:"Reader",hide_title:!0,description:"Functional dependency injection - computations that depend on a shared context.",sidebar_position:17},c,o={},a=[{value:"Why Reader?",id:"why-reader",level:3},{value:"Constructors",id:"constructors",level:3},{value:"Transformations",id:"transformations",level:3},{value:"Combining",id:"combining",level:3},{value:"Context Manipulation",id:"context-manipulation",level:3},{value:"Basic Operations",id:"basic-operations",level:3},{value:"Dependency Injection",id:"dependency-injection",level:3},{value:"Composing Operations",id:"composing-operations",level:3},{value:"Local Context Transformation",id:"local-context-transformation",level:3},{value:"Pattern 1: Testing with Mocks",id:"pattern-1-testing-with-mocks",level:3},{value:"Pattern 2: Configuration Management",id:"pattern-2-configuration-management",level:3},{value:"When to Use Reader",id:"when-to-use-reader",level:3}];function l(e){let n={code:"code",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components},{ApiTable:t,CodeCard:r,Compare:d,CompareCol:c,PageHeader:o,Section:a}=n;return t||u("ApiTable",!0),r||u("CodeCard",!0),d||u("Compare",!0),c||u("CompareCol",!0),o||u("PageHeader",!0),a||u("Section",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o,{eyebrow:"Reference \xb7 Core Type",title:"Reader",lede:"Functional dependency injection. Reader[C, A] represents a computation that depends on a context C and produces a value A.",meta:[{label:"Package",value:"github.com/IBM/fp-go/v2/reader"},{label:"Type",value:"Monad (func(C) A)"}]}),"\n",(0,i.jsxs)(a,{id:"overview",number:"01",title:"Overview",children:[(0,i.jsx)(n.p,{children:"Reader is simply a function from context to value:"}),(0,i.jsx)(r,{file:"type_definition.go",children:`package reader

// Reader is a function from context to value
type Reader[C, A any] = func(C) A
`}),(0,i.jsx)(n.h3,{id:"why-reader",children:"Why Reader?"}),(0,i.jsxs)(d,{children:[(0,i.jsx)(c,{kind:"bad",children:(0,i.jsx)(r,{file:"traditional_di.go",children:`// \u{274C} Traditional DI with structs
type Service struct {
  db     *sql.DB
  logger *log.Logger
  config Config
}

func (s *Service) GetUser(id string) User {
  // Hard to compose
  // Difficult to test
}
`})}),(0,i.jsx)(c,{kind:"good",children:(0,i.jsx)(r,{file:"reader_di.go",children:`// \u{2705} Reader-based DI
type Dependencies struct {
  DB     *sql.DB
  Logger *log.Logger
  Config Config
}

func GetUser(id string) reader.Reader[Dependencies, User] {
  return func(deps Dependencies) User {
      // Easy to compose
      // Simple to test
  }
}
`})})]})]}),"\n",(0,i.jsxs)(a,{id:"api",number:"02",title:"Core",titleAccent:"API",children:[(0,i.jsx)(n.h3,{id:"constructors",children:"Constructors"}),(0,i.jsx)(t,{children:(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Function"}),(0,i.jsx)(n.th,{children:"Signature"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"Of"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"func Of[C, A any](value A) Reader[C, A]"})}),(0,i.jsx)(n.td,{children:"Wrap pure value (ignores context)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"Ask"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"func Ask[C, A any](f func(C) A) Reader[C, A]"})}),(0,i.jsx)(n.td,{children:"Access and transform context"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"Asks"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"func Asks[C, A any](f func(C) A) Reader[C, A]"})}),(0,i.jsx)(n.td,{children:"Alias for Ask"})]})]})]})}),(0,i.jsx)(n.h3,{id:"transformations",children:"Transformations"}),(0,i.jsx)(t,{children:(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Function"}),(0,i.jsx)(n.th,{children:"Signature"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"Map"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"func Map[C, A, B any](f func(A) B) func(Reader[C, A]) Reader[C, B]"})}),(0,i.jsx)(n.td,{children:"Transform result"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"Chain"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"func Chain[C, A, B any](f func(A) Reader[C, B]) func(Reader[C, A]) Reader[C, B]"})}),(0,i.jsx)(n.td,{children:"Sequence operations"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"Flatten"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"func Flatten[C, A any](Reader[C, Reader[C, A]]) Reader[C, A]"})}),(0,i.jsx)(n.td,{children:"Unwrap nested Reader"})]})]})]})}),(0,i.jsx)(n.h3,{id:"combining",children:"Combining"}),(0,i.jsx)(t,{children:(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Function"}),(0,i.jsx)(n.th,{children:"Signature"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"Ap"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"func Ap[C, A, B any](fa Reader[C, A]) func(Reader[C, func(A) B]) Reader[C, B]"})}),(0,i.jsx)(n.td,{children:"Apply wrapped function"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"SequenceArray"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"func SequenceArray[C, A any]([]Reader[C, A]) Reader[C, []A]"})}),(0,i.jsx)(n.td,{children:"All-or-nothing"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"TraverseArray"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"func TraverseArray[C, A, B any](f func(A) Reader[C, B]) func([]A) Reader[C, []B]"})}),(0,i.jsx)(n.td,{children:"Map and sequence"})]})]})]})}),(0,i.jsx)(n.h3,{id:"context-manipulation",children:"Context Manipulation"}),(0,i.jsx)(t,{children:(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Function"}),(0,i.jsx)(n.th,{children:"Signature"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"Local"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"func Local[C1, C2, A any](f func(C1) C2) func(Reader[C2, A]) Reader[C1, A]"})}),(0,i.jsx)(n.td,{children:"Transform context before use"})]})})]})})]}),"\n",(0,i.jsxs)(a,{id:"examples",number:"03",title:"Usage",titleAccent:"Examples",children:[(0,i.jsx)(n.h3,{id:"basic-operations",children:"Basic Operations"}),(0,i.jsx)(r,{file:"basic.go",children:`package main

import (
  R "github.com/IBM/fp-go/v2/reader"
)

type Config struct {
  DBUrl string
  Port  int
}

func main() {
  // Wrap pure value
  answer := R.Of[Config, int](42)
  result := answer(Config{})  // 42
  
  // Access context
  getDBUrl := R.Ask(func(c Config) string {
      return c.DBUrl
  })
  
  config := Config{DBUrl: "localhost:5432", Port: 8080}
  url := getDBUrl(config)  // "localhost:5432"
  
  // Access and transform
  getPort := R.Asks(func(c Config) int {
      return c.Port
  })
  port := getPort(config)  // 8080
}
`}),(0,i.jsx)(n.h3,{id:"dependency-injection",children:"Dependency Injection"}),(0,i.jsx)(r,{file:"dependency_injection.go",children:`package main

import (
  "database/sql"
  "log"
  R "github.com/IBM/fp-go/v2/reader"
  F "github.com/IBM/fp-go/v2/function"
)

type Dependencies struct {
  DB     *sql.DB
  Logger *log.Logger
  Config Config
}

func getDB() R.Reader[Dependencies, *sql.DB] {
  return R.Ask(func(deps Dependencies) *sql.DB {
      return deps.DB
  })
}

func getLogger() R.Reader[Dependencies, *log.Logger] {
  return R.Ask(func(deps Dependencies) *log.Logger {
      return deps.Logger
  })
}

func fetchUser(id string) R.Reader[Dependencies, User] {
  return F.Pipe1(
      getDB(),
      R.Chain(func(db *sql.DB) R.Reader[Dependencies, User] {
          return R.Of[Dependencies](queryUser(db, id))
      }),
  )
}

func main() {
  deps := Dependencies{
      DB:     connectDB(),
      Logger: log.New(os.Stdout, "", 0),
      Config: loadConfig(),
  }
  
  user := fetchUser("user-123")(deps)
}
`}),(0,i.jsx)(n.h3,{id:"composing-operations",children:"Composing Operations"}),(0,i.jsx)(r,{file:"composing.go",children:`package main

import (
  R "github.com/IBM/fp-go/v2/reader"
  F "github.com/IBM/fp-go/v2/function"
)

func getUserEmail(id string) R.Reader[Dependencies, string] {
  return F.Pipe1(
      fetchUser(id),
      R.Map(func(u User) string {
          return u.Email
      }),
  )
}

func sendEmail(to, subject, body string) R.Reader[Dependencies, bool] {
  return R.Ask(func(deps Dependencies) bool {
      // Use deps.Logger, deps.Config, etc.
      return sendEmailViaService(to, subject, body)
  })
}

func notifyUser(id string) R.Reader[Dependencies, bool] {
  return F.Pipe1(
      getUserEmail(id),
      R.Chain(func(email string) R.Reader[Dependencies, bool] {
          return sendEmail(email, "Notification", "Hello!")
      }),
  )
}

func main() {
  deps := Dependencies{...}
  success := notifyUser("user-123")(deps)
}
`}),(0,i.jsx)(n.h3,{id:"local-context-transformation",children:"Local Context Transformation"}),(0,i.jsx)(r,{file:"local_context.go",children:`package main

import (
  R "github.com/IBM/fp-go/v2/reader"
)

type AppConfig struct {
  Database DatabaseConfig
  Server   ServerConfig
}

type DatabaseConfig struct {
  Host string
  Port int
}

// Reader that needs DatabaseConfig
func connectDB() R.Reader[DatabaseConfig, *sql.DB] {
  return R.Ask(func(cfg DatabaseConfig) *sql.DB {
      return sql.Open("postgres", fmt.Sprintf("%s:%d", cfg.Host, cfg.Port))
  })
}

// Transform AppConfig to DatabaseConfig
func withDBConfig() R.Reader[AppConfig, *sql.DB] {
  return R.Local(func(app AppConfig) DatabaseConfig {
      return app.Database
  })(connectDB())
}

func main() {
  appConfig := AppConfig{
      Database: DatabaseConfig{Host: "localhost", Port: 5432},
      Server:   ServerConfig{Port: 8080},
  }
  
  db := withDBConfig()(appConfig)
}
`})]}),"\n",(0,i.jsxs)(a,{id:"patterns",number:"04",title:"Common",titleAccent:"Patterns",children:[(0,i.jsx)(n.h3,{id:"pattern-1-testing-with-mocks",children:"Pattern 1: Testing with Mocks"}),(0,i.jsx)(r,{file:"testing.go",children:`package main

import (
  "testing"
  R "github.com/IBM/fp-go/v2/reader"
)

func TestFetchUser(t *testing.T) {
  // Mock dependencies
  mockDeps := Dependencies{
      DB:     mockDB(),
      Logger: mockLogger(),
      Config: testConfig(),
  }
  
  // Test the Reader
  user := fetchUser("test-id")(mockDeps)
  
  assert.Equal(t, "test-id", user.ID)
}
`}),(0,i.jsx)(n.h3,{id:"pattern-2-configuration-management",children:"Pattern 2: Configuration Management"}),(0,i.jsx)(r,{file:"config_management.go",children:`package main

import (
  R "github.com/IBM/fp-go/v2/reader"
)

type Config struct {
  APIKey    string
  Timeout   time.Duration
  MaxRetries int
}

func getAPIKey() R.Reader[Config, string] {
  return R.Asks(func(c Config) string {
      return c.APIKey
  })
}

func getTimeout() R.Reader[Config, time.Duration] {
  return R.Asks(func(c Config) time.Duration {
      return c.Timeout
  })
}

func makeAPICall(endpoint string) R.Reader[Config, Response] {
  return F.Pipe2(
      getAPIKey(),
      R.Chain(func(key string) R.Reader[Config, time.Duration] {
          return getTimeout()
      }),
      R.Chain(func(timeout time.Duration) R.Reader[Config, Response] {
          return R.Of[Config](callAPI(endpoint, key, timeout))
      }),
  )
}
`}),(0,i.jsx)(n.h3,{id:"when-to-use-reader",children:"When to Use Reader"}),(0,i.jsx)(t,{children:(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Use Reader When"}),(0,i.jsx)(n.th,{children:"Consider Alternative"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Need dependency injection"}),(0,i.jsx)(n.td,{children:"Simple function parameters sufficient"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Multiple operations share context"}),(0,i.jsx)(n.td,{children:"Single operation doesn't need DI"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Want testable, composable code"}),(0,i.jsx)(n.td,{children:"Struct-based DI is adequate"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Context is read-only"}),(0,i.jsx)(n.td,{children:"Need mutable state (use State)"})]})]})]})})]})]})}function h(e={}){let{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}function u(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},8453(e,n,t){t.d(n,{R:()=>d,x:()=>c});var r=t(6540);let i={},s=r.createContext(i);function d(e){let n=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);
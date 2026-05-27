"use strict";(self.webpackChunkfp_go_docs=self.webpackChunkfp_go_docs||[]).push([["4658"],{1751(e,r,t){t.r(r),t.d(r,{metadata:()=>i,default:()=>u,frontMatter:()=>a,contentTitle:()=>o,toc:()=>l,assets:()=>d});var i=JSON.parse('{"id":"recipes/middleware","title":"Middleware Patterns","description":"Build composable middleware using functional patterns with fp-go for cross-cutting concerns like logging, auth, and caching.","source":"@site/docs/recipes/middleware.md","sourceDirName":"recipes","slug":"/recipes/middleware","permalink":"/fp-go/docs/recipes/middleware","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":15,"frontMatter":{"title":"Middleware Patterns","hide_title":true,"description":"Build composable middleware using functional patterns with fp-go for cross-cutting concerns like logging, auth, and caching.","sidebar_position":15},"sidebar":"recipesSidebar","previous":{"title":"Function Pipelines","permalink":"/fp-go/docs/recipes/pipelines"},"next":{"title":"Testing Pure Functions","permalink":"/fp-go/docs/recipes/testing-pure"}}'),n=t(4848),s=t(8453);let a={title:"Middleware Patterns",hide_title:!0,description:"Build composable middleware using functional patterns with fp-go for cross-cutting concerns like logging, auth, and caching.",sidebar_position:15},o,d={},l=[];function c(e){let r={p:"p",strong:"strong",...(0,s.R)(),...e.components},{Callout:t,Checklist:i,ChecklistItem:a,CodeCard:o,Compare:d,CompareCol:l,PageHeader:c,Section:u,TLDR:h,TLDRCard:g}=r;return t||p("Callout",!0),i||p("Checklist",!0),a||p("ChecklistItem",!0),o||p("CodeCard",!0),d||p("Compare",!0),l||p("CompareCol",!0),c||p("PageHeader",!0),u||p("Section",!0),h||p("TLDR",!0),g||p("TLDRCard",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(c,{eyebrow:"Recipes \xb7 15 / 17",title:"Middleware",titleAccent:"Patterns",lede:"Build composable middleware using functional patterns with fp-go for cross-cutting concerns like logging, authentication, caching, and error handling.",meta:[{label:"Difficulty",value:"Advanced"},{label:"Patterns",value:"6"},{label:"Use Cases",value:"HTTP handlers, request processing, cross-cutting concerns"}]}),"\n",(0,n.jsxs)(h,{children:[(0,n.jsx)(g,{title:"Function Composition",icon:"layers",children:(0,n.jsx)(r.p,{children:"Chain middleware using function composition for clean, declarative request processing pipelines."})}),(0,n.jsx)(g,{title:"Type-Safe Wrapping",icon:"shield",children:(0,n.jsx)(r.p,{children:"Wrap operations with compile-time guarantees that middleware preserves input/output types."})}),(0,n.jsx)(g,{title:"Reusable & Testable",icon:"check",children:(0,n.jsx)(r.p,{children:"Build small, focused middleware pieces that are easy to test and compose into complex behaviors."})})]}),"\n",(0,n.jsxs)(u,{id:"basic-middleware",number:"01",title:"Basic",titleAccent:"Middleware",children:[(0,n.jsx)(r.p,{children:"Middleware wraps operations to add cross-cutting concerns without modifying the core logic."}),(0,n.jsx)(o,{file:"logging_middleware.go",children:`package main

import (
  "fmt"
  "time"
  IOE "github.com/IBM/fp-go/v2/ioeither"
)

type Middleware[A any] func(IOE.IOEither[error, A]) IOE.IOEither[error, A]

func withLogging[A any](name string) Middleware[A] {
  return func(operation IOE.IOEither[error, A]) IOE.IOEither[error, A] {
      return func() IOE.Either[error, A] {
          fmt.Printf("[%s] Starting...\\n", name)
          start := time.Now()
          
          result := operation()
          
          duration := time.Since(start)
          if result.IsLeft() {
              fmt.Printf("[%s] Failed after %v: %v\\n", name, duration, result.Left())
          } else {
              fmt.Printf("[%s] Completed in %v\\n", name, duration)
          }
          
          return result
      }
  }
}

func fetchData() IOE.IOEither[error, string] {
  return IOE.TryCatch(func() (string, error) {
      time.Sleep(100 * time.Millisecond)
      return "data", nil
  })
}

func main() {
  // Apply logging middleware
  operation := withLogging[string]("fetchData")(fetchData())
  
  result := operation()
  fmt.Println("Result:", result.Right())
  // [fetchData] Starting...
  // [fetchData] Completed in 100ms
  // Result: data
}
`}),(0,n.jsx)(t,{type:"info",children:(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Middleware Pattern"}),": A middleware is a higher-order function that takes an operation and returns a wrapped version with additional behavior."]})})]}),"\n",(0,n.jsxs)(u,{id:"http-middleware",number:"02",title:"HTTP",titleAccent:"Middleware",children:[(0,n.jsx)(r.p,{children:"Build HTTP middleware for authentication, rate limiting, and request processing."}),(0,n.jsx)(o,{file:"auth_middleware.go",children:`package main

import (
  "context"
  "fmt"
  IOE "github.com/IBM/fp-go/v2/ioeither"
)

type Request struct {
  Context context.Context
  Headers map[string]string
  Body    []byte
}

type Response struct {
  Status int
  Body   []byte
}

type Handler func(Request) IOE.IOEither[error, Response]

func withAuth(handler Handler) Handler {
  return func(req Request) IOE.IOEither[error, Response] {
      token := req.Headers["Authorization"]
      
      if token == "" {
          return IOE.Left[Response](fmt.Errorf("missing authorization"))
      }
      
      if !isValidToken(token) {
          return IOE.Left[Response](fmt.Errorf("invalid token"))
      }
      
      // Add user to context
      ctx := context.WithValue(req.Context, "user", getUserFromToken(token))
      req.Context = ctx
      
      return handler(req)
  }
}

func isValidToken(token string) bool {
  return token == "valid-token"
}

func getUserFromToken(token string) string {
  return "user-123"
}

func handleRequest(req Request) IOE.IOEither[error, Response] {
  return IOE.Right[error](Response{
      Status: 200,
      Body:   []byte("Success"),
  })
}

func main() {
  handler := withAuth(handleRequest)
  
  // Valid request
  req1 := Request{
      Context: context.Background(),
      Headers: map[string]string{"Authorization": "valid-token"},
  }
  result1 := handler(req1)()
  fmt.Println("Valid:", result1.IsRight())
  
  // Invalid request
  req2 := Request{
      Context: context.Background(),
      Headers: map[string]string{},
  }
  result2 := handler(req2)()
  fmt.Println("Invalid:", result2.Left())
}
`})]}),"\n",(0,n.jsxs)(u,{id:"composing-middleware",number:"03",title:"Composing",titleAccent:"Middleware",children:[(0,n.jsx)(r.p,{children:"Chain multiple middleware together for complex request processing pipelines."}),(0,n.jsx)(o,{file:"middleware_chain.go",children:`package main

import (
  "fmt"
  IOE "github.com/IBM/fp-go/v2/ioeither"
)

func compose[A any](middlewares ...Middleware[A]) Middleware[A] {
  return func(operation IOE.IOEither[error, A]) IOE.IOEither[error, A] {
      result := operation
      // Apply middlewares in reverse order (right to left)
      for i := len(middlewares) - 1; i >= 0; i-- {
          result = middlewares[i](result)
      }
      return result
  }
}

func withRetry[A any](maxAttempts int) Middleware[A] {
  return func(operation IOE.IOEither[error, A]) IOE.IOEither[error, A] {
      return func() IOE.Either[error, A] {
          var lastErr error
          for i := 0; i < maxAttempts; i++ {
              result := operation()
              if result.IsRight() {
                  return result
              }
              lastErr = result.Left()
              fmt.Printf("Attempt %d failed, retrying...\\n", i+1)
          }
          return IOE.Left[A](fmt.Errorf("failed after %d attempts: %w", maxAttempts, lastErr))()
      }
  }
}

func withCache[A any](cache map[string]A, key string) Middleware[A] {
  return func(operation IOE.IOEither[error, A]) IOE.IOEither[error, A] {
      return func() IOE.Either[error, A] {
          if cached, ok := cache[key]; ok {
              fmt.Println("Cache hit!")
              return IOE.Right[error](cached)()
          }
          
          result := operation()
          if result.IsRight() {
              cache[key] = result.Right()
          }
          return result
      }
  }
}

func main() {
  cache := make(map[string]string)
  
  // Compose multiple middleware
  middleware := compose(
      withLogging[string]("operation"),
      withRetry[string](3),
      withCache(cache, "data"),
  )
  
  operation := middleware(fetchData())
  
  // First call: cache miss, fetches data
  result1 := operation()
  fmt.Println("First:", result1.Right())
  
  // Second call: cache hit
  result2 := operation()
  fmt.Println("Second:", result2.Right())
}
`}),(0,n.jsx)(o,{file:"pipeline_middleware.go",children:`package main

import (
  "fmt"
  IOE "github.com/IBM/fp-go/v2/ioeither"
)

type Pipeline[A any] struct {
  middlewares []Middleware[A]
}

func NewPipeline[A any]() *Pipeline[A] {
  return &Pipeline[A]{
      middlewares: []Middleware[A]{},
  }
}

func (p *Pipeline[A]) Use(middleware Middleware[A]) *Pipeline[A] {
  p.middlewares = append(p.middlewares, middleware)
  return p
}

func (p *Pipeline[A]) Execute(operation IOE.IOEither[error, A]) IOE.IOEither[error, A] {
  return compose(p.middlewares...)(operation)
}

func main() {
  pipeline := NewPipeline[string]().
      Use(withLogging[string]("step1")).
      Use(withRetry[string](2)).
      Use(withTiming[string])
  
  result := pipeline.Execute(fetchData())()
  fmt.Println("Result:", result.Right())
}
`})]}),"\n",(0,n.jsxs)(u,{id:"reader-middleware",number:"04",title:"Reader-Based",titleAccent:"Middleware",children:[(0,n.jsx)(r.p,{children:"Use Reader pattern for middleware that needs dependencies."}),(0,n.jsx)(o,{file:"reader_middleware.go",children:`package main

import (
  "context"
  "fmt"
  RIE "github.com/IBM/fp-go/v2/readerioeither"
  IOE "github.com/IBM/fp-go/v2/ioeither"
  F "github.com/IBM/fp-go/v2/function"
)

type Dependencies struct {
  Logger Logger
  Cache  Cache
  DB     Database
}

type Logger interface {
  Info(msg string)
  Error(msg string)
}

type Cache interface {
  Get(key string) (string, bool)
  Set(key string, value string)
}

type Database interface {
  Query(sql string) ([]string, error)
}

type AppHandler[A any] = RIE.ReaderIOEither[Dependencies, error, A]

func withLogging[A any](name string, handler AppHandler[A]) AppHandler[A] {
  return F.Pipe2(
      RIE.Asks(func(deps Dependencies) IOE.IOEither[error, struct{}] {
          return IOE.TryCatch(func() (struct{}, error) {
              deps.Logger.Info(fmt.Sprintf("[%s] Starting", name))
              return struct{}{}, nil
          })
      }),
      RIE.Chain(func(_ struct{}) AppHandler[A] {
          return handler
      }),
  )
}

func withCaching[A any](key string, handler AppHandler[A]) AppHandler[A] {
  return RIE.Asks(func(deps Dependencies) IOE.IOEither[error, A] {
      // Check cache
      if cached, ok := deps.Cache.Get(key); ok {
          deps.Logger.Info("Cache hit")
          // Type assertion needed here
          return IOE.Right[error](cached.(A))
      }
      
      // Execute handler
      result := handler(deps)()
      
      // Store in cache if successful
      if result.IsRight() {
          deps.Cache.Set(key, fmt.Sprint(result.Right()))
      }
      
      return result
  })
}

func getUsers() AppHandler[[]string] {
  return RIE.Asks(func(deps Dependencies) IOE.IOEither[error, []string] {
      return IOE.TryCatch(func() ([]string, error) {
          return deps.DB.Query("SELECT * FROM users")
      })
  })
}

func main() {
  deps := Dependencies{
      Logger: &ConsoleLogger{},
      Cache:  &MemoryCache{},
      DB:     &MockDB{},
  }
  
  handler := withLogging("getUsers", withCaching("users", getUsers()))
  
  result := handler(deps)()
  fmt.Println("Users:", result.Right())
}
`})]}),"\n",(0,n.jsxs)(u,{id:"error-middleware",number:"05",title:"Error Handling",titleAccent:"Middleware",children:[(0,n.jsx)(r.p,{children:"Build middleware for error recovery and transformation."}),(0,n.jsx)(o,{file:"error_middleware.go",children:`package main

import (
  "fmt"
  IOE "github.com/IBM/fp-go/v2/ioeither"
)

func withErrorRecovery[A any](fallback A) Middleware[A] {
  return func(operation IOE.IOEither[error, A]) IOE.IOEither[error, A] {
      return func() IOE.Either[error, A] {
          result := operation()
          if result.IsLeft() {
              fmt.Printf("Error occurred: %v, using fallback\\n", result.Left())
              return IOE.Right[error](fallback)()
          }
          return result
      }
  }
}

func withErrorMapping[A any](mapError func(error) error) Middleware[A] {
  return func(operation IOE.IOEither[error, A]) IOE.IOEither[error, A] {
      return func() IOE.Either[error, A] {
          result := operation()
          if result.IsLeft() {
              return IOE.Left[A](mapError(result.Left()))()
          }
          return result
      }
  }
}

func main() {
  // With recovery
  operation1 := withErrorRecovery("default")(
      IOE.Left[string](fmt.Errorf("failed")),
  )
  result1 := operation1()
  fmt.Println("Recovered:", result1.Right())
  
  // With error mapping
  operation2 := withErrorMapping[string](func(err error) error {
      return fmt.Errorf("wrapped: %w", err)
  })(IOE.Left[string](fmt.Errorf("original")))
  result2 := operation2()
  fmt.Println("Mapped:", result2.Left())
}
`})]}),"\n",(0,n.jsxs)(u,{id:"best-practices",number:"06",title:"Best",titleAccent:"Practices",children:[(0,n.jsxs)(i,{children:[(0,n.jsx)(a,{status:"required",children:(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Keep middleware focused"})," \u2014 Each middleware should have a single, clear responsibility"]})}),(0,n.jsx)(a,{status:"required",children:(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Order matters"})," \u2014 Apply middleware in logical order (auth \u2192 cache \u2192 logging \u2192 retry)"]})}),(0,n.jsx)(a,{status:"recommended",children:(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Make configurable"})," \u2014 Accept configuration parameters instead of hardcoding values"]})}),(0,n.jsx)(a,{status:"recommended",children:(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Test independently"})," \u2014 Test each middleware separately before testing composition"]})}),(0,n.jsx)(a,{status:"optional",children:(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Document behavior"})," \u2014 Clearly document what each middleware does and its side effects"]})})]}),(0,n.jsxs)(d,{children:[(0,n.jsx)(l,{kind:"good",children:(0,n.jsx)(o,{file:"good_middleware.go",children:`// \u{2705} Good: Single responsibility
func withLogging[A any](name string) Middleware[A] { /* ... */ }
func withAuth[A any](token string) Middleware[A] { /* ... */ }
func withCache[A any](key string) Middleware[A] { /* ... */ }

// \u{2705} Good: Logical order
pipeline := NewPipeline[string]().
  Use(withAuth).        // Check auth first
  Use(withCache).       // Then check cache
  Use(withLogging).     // Log the actual operation
  Use(withRetry)        // Retry if needed

// \u{2705} Good: Configurable
func withRetry[A any](config RetryConfig) Middleware[A] {
  return func(operation IOE.IOEither[error, A]) IOE.IOEither[error, A] {
      // Use config.MaxAttempts, config.Delay, etc.
  }
}
`})}),(0,n.jsx)(l,{kind:"bad",children:(0,n.jsx)(o,{file:"bad_middleware.go",children:`// \u{274C} Avoid: Doing too much
func withEverything[A any]() Middleware[A] {
  // Logging, auth, caching, retry, metrics...
}

// \u{274C} Avoid: Illogical order
pipeline := NewPipeline[string]().
  Use(withRetry).       // Retry before auth?
  Use(withCache).       // Cache before auth?
  Use(withAuth)

// \u{274C} Avoid: Hardcoded values
func withRetry[A any]() Middleware[A] {
  maxAttempts := 3 // Hardcoded
  // ...
}
`})})]})]})]})}function u(e={}){let{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}function p(e,r){throw Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},8453(e,r,t){t.d(r,{R:()=>a,x:()=>o});var i=t(6540);let n={},s=i.createContext(n);function a(e){let r=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),i.createElement(s.Provider,{value:r},e.children)}}}]);
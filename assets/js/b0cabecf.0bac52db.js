"use strict";(self.webpackChunkfp_go_docs=self.webpackChunkfp_go_docs||[]).push([["9066"],{8937(e,r,t){t.r(r),t.d(r,{metadata:()=>s,default:()=>d,frontMatter:()=>c,contentTitle:()=>o,toc:()=>p,assets:()=>a});var s=JSON.parse('{"id":"recipes/dependency-injection","title":"Dependency Injection","description":"Implement dependency injection using the Reader pattern with fp-go for testable, modular code.","source":"@site/docs/recipes/dependency-injection.md","sourceDirName":"recipes","slug":"/recipes/dependency-injection","permalink":"/fp-go/docs/recipes/dependency-injection","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":13,"frontMatter":{"title":"Dependency Injection","hide_title":true,"description":"Implement dependency injection using the Reader pattern with fp-go for testable, modular code.","sidebar_position":13},"sidebar":"recipesSidebar","previous":{"title":"Parallel Tasks","permalink":"/fp-go/docs/recipes/parallel-tasks"},"next":{"title":"Function Pipelines","permalink":"/fp-go/docs/recipes/pipelines"}}'),n=t(4848),i=t(8453);let c={title:"Dependency Injection",hide_title:!0,description:"Implement dependency injection using the Reader pattern with fp-go for testable, modular code.",sidebar_position:13},o,a={},p=[];function l(e){let r={p:"p",strong:"strong",...(0,i.R)(),...e.components},{Callout:t,Checklist:s,ChecklistItem:c,CodeCard:o,Compare:a,CompareCol:p,PageHeader:l,Section:d,TLDR:f,TLDRCard:m}=r;return t||u("Callout",!0),s||u("Checklist",!0),c||u("ChecklistItem",!0),o||u("CodeCard",!0),a||u("Compare",!0),p||u("CompareCol",!0),l||u("PageHeader",!0),d||u("Section",!0),f||u("TLDR",!0),m||u("TLDRCard",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l,{eyebrow:"Recipes \xb7 13 / 17",title:"Dependency",titleAccent:"Injection",lede:"Implement dependency injection using the Reader pattern with fp-go for testable, modular code without global state.",meta:[{label:"Difficulty",value:"Advanced"},{label:"Patterns",value:"6"},{label:"Use Cases",value:"Service layers, HTTP APIs, testing"}]}),"\n",(0,n.jsxs)(f,{children:[(0,n.jsx)(m,{title:"Type-Safe Dependencies",icon:"shield",children:(0,n.jsx)(r.p,{children:"Reader pattern provides compile-time guarantees that all dependencies are provided before execution."})}),(0,n.jsx)(m,{title:"Pure & Testable",icon:"check",children:(0,n.jsx)(r.p,{children:"No global state means easy mocking and testing\u2014just pass different dependencies to the same code."})}),(0,n.jsx)(m,{title:"Composable Services",icon:"layers",children:(0,n.jsx)(r.p,{children:"Combine multiple readers to build complex operations from simple, focused functions."})})]}),"\n",(0,n.jsxs)(d,{id:"basic-reader",number:"01",title:"Basic Reader",titleAccent:"Pattern",children:[(0,n.jsx)(r.p,{children:"The Reader pattern allows functions to access dependencies without passing them explicitly through every function call."}),(0,n.jsx)(o,{file:"reader_basic.go",children:`package main

import (
  "fmt"
  R "github.com/IBM/fp-go/v2/reader"
)

type Config struct {
  APIKey string
  BaseURL string
}

// Reader that needs Config
type AppReader[A any] = R.Reader[Config, A]

func getAPIKey() AppReader[string] {
  return R.Asks(func(cfg Config) string {
      return cfg.APIKey
  })
}

func getBaseURL() AppReader[string] {
  return R.Asks(func(cfg Config) string {
      return cfg.BaseURL
  })
}

func buildURL(path string) AppReader[string] {
  return R.Map(func(base string) string {
      return base + path
  })(getBaseURL())
}

func main() {
  config := Config{
      APIKey: "secret-key-123",
      BaseURL: "https://api.example.com",
  }
  
  // Execute readers with config
  apiKey := getAPIKey()(config)
  url := buildURL("/users")(config)
  
  fmt.Println("API Key:", apiKey)
  fmt.Println("URL:", url)
  // API Key: secret-key-123
  // URL: https://api.example.com/users
}
`}),(0,n.jsx)(t,{type:"info",children:(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Reader vs Global State"}),": Reader makes dependencies explicit and testable. Global variables hide dependencies and make testing difficult."]})})]}),"\n",(0,n.jsxs)(d,{id:"service-layer",number:"02",title:"Service Layer",titleAccent:"Pattern",children:[(0,n.jsx)(r.p,{children:"Build service layers with multiple dependencies using ReaderEither for error handling."}),(0,n.jsx)(o,{file:"service_layer.go",children:`package main

import (
  "context"
  "fmt"
  RE "github.com/IBM/fp-go/v2/readereither"
  IOE "github.com/IBM/fp-go/v2/ioeither"
  F "github.com/IBM/fp-go/v2/function"
)

// Service interfaces
type UserService interface {
  GetUser(ctx context.Context, id int) IOE.IOEither[error, User]
  CreateUser(ctx context.Context, user User) IOE.IOEither[error, User]
}

type EmailService interface {
  SendEmail(ctx context.Context, to, subject, body string) IOE.IOEither[error, struct{}]
}

// Dependencies container
type Services struct {
  Users  UserService
  Emails EmailService
}

// Reader type for services
type ServiceReader[A any] = RE.ReaderEither[Services, error, A]

type User struct {
  ID    int
  Name  string
  Email string
}

// Service operations
func getUser(ctx context.Context, id int) ServiceReader[User] {
  return RE.Asks(func(services Services) IOE.Either[error, User] {
      return services.Users.GetUser(ctx, id)()
  })
}

func sendWelcomeEmail(ctx context.Context, user User) ServiceReader[struct{}] {
  return RE.Asks(func(services Services) IOE.Either[error, struct{}] {
      return services.Emails.SendEmail(
          ctx,
          user.Email,
          "Welcome!",
          fmt.Sprintf("Hello %s, welcome to our platform!", user.Name),
      )()
  })
}

// Composed operation
func createUserAndSendWelcome(ctx context.Context, user User) ServiceReader[User] {
  return F.Pipe3(
      RE.Do[Services, error](RE.Monad[Services, error, User]()),
      RE.Bind("user", func() ServiceReader[User] {
          return RE.Asks(func(services Services) IOE.Either[error, User] {
              return services.Users.CreateUser(ctx, user)()
          })
      }),
      RE.ChainFirst(func(u User) ServiceReader[struct{}] {
          return sendWelcomeEmail(ctx, u)
      }),
      RE.Map(func(data struct{ user User }) User {
          return data.user
      }),
  )
}

func main() {
  services := Services{
      Users:  &MockUserService{},
      Emails: &MockEmailService{},
  }
  
  ctx := context.Background()
  newUser := User{Name: "Alice", Email: "alice@example.com"}
  
  result := createUserAndSendWelcome(ctx, newUser)(services)
  
  if result.IsLeft() {
      fmt.Println("Error:", result.Left())
  } else {
      fmt.Printf("Created user: %+v\\n", result.Right())
  }
}
`})]}),"\n",(0,n.jsxs)(d,{id:"readerioeither",number:"03",title:"ReaderIOEither",titleAccent:"Pattern",children:[(0,n.jsx)(r.p,{children:"Combine Reader with IO and error handling for real-world applications."}),(0,n.jsx)(o,{file:"readerioeither.go",children:`package main

import (
  "context"
  "fmt"
  RIE "github.com/IBM/fp-go/v2/readerioeither"
  IOE "github.com/IBM/fp-go/v2/ioeither"
  F "github.com/IBM/fp-go/v2/function"
)

type AppDeps struct {
  Config   Config
  Database Database
  Logger   Logger
}

type AppEffect[A any] = RIE.ReaderIOEither[AppDeps, error, A]

func logInfo(msg string) AppEffect[struct{}] {
  return RIE.Asks(func(deps AppDeps) IOE.IOEither[error, struct{}] {
      return IOE.TryCatch(func() (struct{}, error) {
          deps.Logger.Info(msg)
          return struct{}{}, nil
      })
  })
}

func queryDB(sql string) AppEffect[[]string] {
  return RIE.Asks(func(deps AppDeps) IOE.IOEither[error, []string] {
      return IOE.TryCatch(func() ([]string, error) {
          return deps.Database.Query(sql)
      })
  })
}

func getUsersWithLogging() AppEffect[[]string] {
  return F.Pipe3(
      logInfo("Starting user query"),
      RIE.Chain(func(_ struct{}) AppEffect[[]string] {
          return queryDB("SELECT * FROM users")
      }),
      RIE.ChainFirst(func(users []string) AppEffect[struct{}] {
          return logInfo(fmt.Sprintf("Found %d users", len(users)))
      }),
  )
}

func main() {
  deps := AppDeps{
      Config:   Config{},
      Database: &MockDatabase{},
      Logger:   &ConsoleLogger{},
  }
  
  result := getUsersWithLogging()(deps)()
  
  if result.IsLeft() {
      fmt.Println("Error:", result.Left())
  } else {
      fmt.Println("Users:", result.Right())
  }
}
`})]}),"\n",(0,n.jsxs)(d,{id:"testing",number:"04",title:"Testing with",titleAccent:"DI",children:[(0,n.jsx)(r.p,{children:"Dependency injection makes testing trivial\u2014just provide mock implementations."}),(0,n.jsx)(o,{file:"testing_di.go",children:`package main

import (
  "context"
  "testing"
)

// Mock implementations
type MockUserService struct {
  users map[int]User
}

func (m *MockUserService) GetUser(ctx context.Context, id int) IOE.IOEither[error, User] {
  return IOE.TryCatch(func() (User, error) {
      if user, ok := m.users[id]; ok {
          return user, nil
      }
      return User{}, fmt.Errorf("user not found: %d", id)
  })
}

func (m *MockUserService) CreateUser(ctx context.Context, user User) IOE.IOEither[error, User] {
  return IOE.TryCatch(func() (User, error) {
      user.ID = len(m.users) + 1
      m.users[user.ID] = user
      return user, nil
  })
}

type MockEmailService struct {
  sentEmails []string
}

func (m *MockEmailService) SendEmail(ctx context.Context, to, subject, body string) IOE.IOEither[error, struct{}] {
  return IOE.TryCatch(func() (struct{}, error) {
      m.sentEmails = append(m.sentEmails, to)
      return struct{}{}, nil
  })
}

// Test
func TestCreateUserAndSendWelcome(t *testing.T) {
  mockUsers := &MockUserService{
      users: make(map[int]User),
  }
  mockEmails := &MockEmailService{
      sentEmails: []string{},
  }
  
  services := Services{
      Users:  mockUsers,
      Emails: mockEmails,
  }
  
  ctx := context.Background()
  newUser := User{Name: "Bob", Email: "bob@example.com"}
  
  result := createUserAndSendWelcome(ctx, newUser)(services)
  
  if result.IsLeft() {
      t.Fatalf("Expected success, got error: %v", result.Left())
  }
  
  user := result.Right()
  if user.ID == 0 {
      t.Error("Expected user ID to be set")
  }
  
  if len(mockEmails.sentEmails) != 1 {
      t.Errorf("Expected 1 email sent, got %d", len(mockEmails.sentEmails))
  }
  
  if mockEmails.sentEmails[0] != "bob@example.com" {
      t.Errorf("Expected email to bob@example.com, got %s", mockEmails.sentEmails[0])
  }
}
`})]}),"\n",(0,n.jsxs)(d,{id:"http-api",number:"05",title:"HTTP API",titleAccent:"Example",children:[(0,n.jsx)(r.p,{children:"Complete HTTP API with dependency injection for clean, testable handlers."}),(0,n.jsx)(o,{file:"http_api.go",children:`package main

import (
  "context"
  "encoding/json"
  "fmt"
  "net/http"
  RIE "github.com/IBM/fp-go/v2/readerioeither"
  F "github.com/IBM/fp-go/v2/function"
)

// Application dependencies
type AppContext struct {
  UserRepo  UserRepository
  Logger    Logger
  Config    AppConfig
}

type AppConfig struct {
  Port     int
  LogLevel string
}

type UserRepository interface {
  FindByID(ctx context.Context, id int) IOE.IOEither[error, User]
  Save(ctx context.Context, user User) IOE.IOEither[error, User]
  List(ctx context.Context) IOE.IOEither[error, []User]
}

type AppHandler[A any] = RIE.ReaderIOEither[AppContext, error, A]

// Handler operations
func logRequest(method, path string) AppHandler[struct{}] {
  return RIE.Asks(func(app AppContext) IOE.IOEither[error, struct{}] {
      return IOE.TryCatch(func() (struct{}, error) {
          app.Logger.Info(fmt.Sprintf("%s %s", method, path))
          return struct{}{}, nil
      })
  })
}

func getUserByID(ctx context.Context, id int) AppHandler[User] {
  return RIE.Asks(func(app AppContext) IOE.IOEither[error, User] {
      return app.UserRepo.FindByID(ctx, id)
  })
}

func createUser(ctx context.Context, user User) AppHandler[User] {
  return RIE.Asks(func(app AppContext) IOE.IOEither[error, User] {
      return app.UserRepo.Save(ctx, user)
  })
}

// HTTP handlers
func makeGetUserHandler(app AppContext) http.HandlerFunc {
  return func(w http.ResponseWriter, r *http.Request) {
      id := 1 // Parse from URL
      
      handler := F.Pipe2(
          logRequest("GET", r.URL.Path),
          RIE.Chain(func(_ struct{}) AppHandler[User] {
              return getUserByID(r.Context(), id)
          }),
      )
      
      result := handler(app)()
      
      if result.IsLeft() {
          http.Error(w, result.Left().Error(), http.StatusInternalServerError)
          return
      }
      
      json.NewEncoder(w).Encode(result.Right())
  }
}

func main() {
  app := AppContext{
      UserRepo: &InMemoryUserRepo{users: make(map[int]User)},
      Logger:   &ConsoleLogger{},
      Config:   AppConfig{Port: 8080, LogLevel: "info"},
  }
  
  http.HandleFunc("/users", makeCreateUserHandler(app))
  http.HandleFunc("/users/", makeGetUserHandler(app))
  
  fmt.Printf("Server starting on port %d\\n", app.Config.Port)
  http.ListenAndServe(fmt.Sprintf(":%d", app.Config.Port), nil)
}
`})]}),"\n",(0,n.jsxs)(d,{id:"best-practices",number:"06",title:"Best",titleAccent:"Practices",children:[(0,n.jsxs)(s,{children:[(0,n.jsx)(c,{status:"required",children:(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Keep dependencies minimal"})," \u2014 Only include what each function actually needs"]})}),(0,n.jsx)(c,{status:"required",children:(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Use interfaces"})," \u2014 Define interfaces for all dependencies to enable mocking"]})}),(0,n.jsx)(c,{status:"recommended",children:(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Compose small readers"})," \u2014 Build complex operations from simple, focused functions"]})}),(0,n.jsx)(c,{status:"recommended",children:(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Avoid kitchen sink"})," \u2014 Don't pass every possible dependency to every function"]})}),(0,n.jsx)(c,{status:"optional",children:(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Scope dependencies"})," \u2014 Use nested readers for request-scoped vs app-scoped dependencies"]})})]}),(0,n.jsxs)(a,{children:[(0,n.jsx)(p,{kind:"good",children:(0,n.jsx)(o,{file:"good_di.go",children:`// \u{2705} Good: Minimal, focused dependencies
type UserHandlerDeps struct {
  UserRepo UserRepository
  Logger   Logger
}

// \u{2705} Good: Interface for testability
type Logger interface {
  Info(msg string)
  Error(msg string)
}

// \u{2705} Good: Small, composable readers
func getUser(id int) AppReader[User] { /* ... */ }
func validateUser(user User) AppReader[User] { /* ... */ }
func saveUser(user User) AppReader[User] { /* ... */ }

func createUser(user User) AppReader[User] {
  return F.Pipe2(
      validateUser(user),
      R.Chain(saveUser),
  )
}
`})}),(0,n.jsx)(p,{kind:"bad",children:(0,n.jsx)(o,{file:"bad_di.go",children:`// \u{274C} Avoid: Kitchen sink dependencies
type UserHandlerDeps struct {
  UserRepo    UserRepository
  EmailRepo   EmailRepository
  PaymentRepo PaymentRepository
  Logger      Logger
  Cache       Cache
  Queue       Queue
  // ... everything
}

// \u{274C} Avoid: Concrete types
type Logger struct {
  file *os.File
}

// \u{274C} Avoid: Monolithic readers
func createUser(user User) AppReader[User] {
  // 100 lines of logic
}
`})})]})]})]})}function d(e={}){let{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}function u(e,r){throw Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},8453(e,r,t){t.d(r,{R:()=>c,x:()=>o});var s=t(6540);let n={},i=s.createContext(n);function c(e){let r=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:c(e.components),s.createElement(i.Provider,{value:r},e.children)}}}]);
"use strict";(self.webpackChunkfp_go_docs=self.webpackChunkfp_go_docs||[]).push([["8435"],{9521(e,r,t){t.r(r),t.d(r,{metadata:()=>n,default:()=>p,frontMatter:()=>l,contentTitle:()=>u,toc:()=>d,assets:()=>c});var n=JSON.parse('{"id":"concepts/monads","title":"Monads","description":"A practical pattern for sequencing computations with context \u2014 no category theory required.","source":"@site/docs/concepts/monads.md","sourceDirName":"concepts","slug":"/concepts/monads","permalink":"/fp-go/docs/concepts/monads","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":13,"frontMatter":{"sidebar_position":13,"title":"Monads","hide_title":true,"description":"A practical pattern for sequencing computations with context \u2014 no category theory required."},"sidebar":"tutorialSidebar","previous":{"title":"Pure Functions","permalink":"/fp-go/docs/concepts/pure-functions"},"next":{"title":"Composition","permalink":"/fp-go/docs/concepts/composition"}}'),i=t(4848),o=t(8453),s=t(773),a=t(7250);let l={sidebar_position:13,title:"Monads",hide_title:!0,description:"A practical pattern for sequencing computations with context \u2014 no category theory required."},u,c={},d=[{value:"1. A type constructor",id:"1-a-type-constructor",level:3},{value:"2. A way to put values in (<code>Return</code>/<code>Of</code>)",id:"2-a-way-to-put-values-in-returnof",level:3},{value:"3. A way to chain operations (<code>Chain</code>/<code>FlatMap</code>)",id:"3-a-way-to-chain-operations-chainflatmap",level:3},{value:"Option monad \u2014 &quot;might not have a value&quot;",id:"option-monad--might-not-have-a-value",level:3},{value:"Result monad \u2014 &quot;might be an error&quot;",id:"result-monad--might-be-an-error",level:3},{value:"IO monad \u2014 &quot;will perform side effects&quot;",id:"io-monad--will-perform-side-effects",level:3},{value:"Array monad \u2014 &quot;has multiple values&quot;",id:"array-monad--has-multiple-values",level:3},{value:"Map vs. Chain",id:"map-vs-chain",level:3},{value:"Common operations across monads",id:"common-operations-across-monads",level:3},{value:"Law 1 \u2014 Left identity",id:"law-1--left-identity",level:3},{value:"Law 2 \u2014 Right identity",id:"law-2--right-identity",level:3},{value:"Law 3 \u2014 Associativity",id:"law-3--associativity",level:3},{value:"User registration",id:"user-registration",level:3},{value:"Configuration loading",id:"configuration-loading",level:3},{value:"Sequential operations",id:"sequential-operations",level:3},{value:"Conditional logic",id:"conditional-logic",level:3},{value:"Combining results",id:"combining-results",level:3},{value:"Error recovery",id:"error-recovery",level:3}];function h(e){let r={code:"code",em:"em",h3:"h3",p:"p",strong:"strong",...(0,o.R)(),...e.components},{ApiTable:t,Callout:n,Checklist:l,CodeCard:u,Compare:c,CompareCol:d,PageHeader:h,Section:p,TLDR:m,TLDRCard:g}=r;return t||f("ApiTable",!0),n||f("Callout",!0),l||f("Checklist",!0),u||f("CodeCard",!0),c||f("Compare",!0),d||f("CompareCol",!0),h||f("PageHeader",!0),p||f("Section",!0),m||f("TLDR",!0),g||f("TLDRCard",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(h,{eyebrow:"Concepts \xb7 02 / 06",title:"Monads.",lede:"A practical pattern for chaining operations with context. No category theory required.",meta:[{label:"// Difficulty",value:"Intermediate"},{label:"// Reading time",value:"12 min \xb7 8 sections"},{label:"// Prereqs",value:"Pure functions"}]}),"\n",(0,i.jsxs)(m,{children:[(0,i.jsx)(g,{label:"// Mental model",prose:!0,value:(0,i.jsxs)(i.Fragment,{children:["A box with rules for ",(0,i.jsx)(r.em,{children:"chaining"}),"."]})}),(0,i.jsx)(g,{label:"// Common monads",prose:!0,value:(0,i.jsxs)(i.Fragment,{children:["Option \xb7 Result \xb7 IO \xb7 ",(0,i.jsx)(r.em,{children:"Array"}),"."]})}),(0,i.jsx)(g,{label:"// Key ops",prose:!0,value:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.em,{children:"Map"}),", Chain, Fold."]}),variant:"up"})]}),"\n",(0,i.jsxs)(p,{id:"what",number:"01",title:"What is a",titleAccent:"monad?",children:[(0,i.jsxs)(r.p,{children:["A ",(0,i.jsx)(r.strong,{children:"monad"}),' is a design pattern for chaining operations that have some "context" or "effect".']}),(0,i.jsx)(n,{title:"Think of it as.",children:(0,i.jsx)(r.p,{children:"A box that holds a value, plus rules for chaining operations on that value while preserving the context."})}),(0,i.jsx)(t,{columns:["Monad","Context","When you reach for it"],rows:[{symbol:"Option",signature:'"might not have a value"',description:"Optional / nullable fields without nil pointers."},{symbol:"Result",signature:'"might be an error"',description:"Error handling without manual if-err checks."},{symbol:"IO",signature:'"will perform side effects"',description:"Effectful computations described lazily."},{symbol:"Array",signature:'"has multiple values"',description:"Branching / one-to-many transformations."}]})]}),"\n",(0,i.jsx)(p,{id:"why",number:"02",title:"Why do we",titleAccent:"need monads?",children:(0,i.jsxs)(s.A,{groupId:"problem",children:[(0,i.jsx)(a.A,{value:"problem",label:"The problem",children:(0,i.jsx)(u,{file:"problem.go",children:`// Without monads: error handling is messy
func processUser(id string) (User, error) {
  user, err := fetchUser(id)
  if err != nil {
      return User{}, err
  }

  validated, err := validateUser(user)
  if err != nil {
      return User{}, err
  }

  enriched, err := enrichUser(validated)
  if err != nil {
      return User{}, err
  }

  saved, err := saveUser(enriched)
  if err != nil {
      return User{}, err
  }

  return saved, nil
}

// Repetitive error checking
// Hard to compose
// Lots of boilerplate`})}),(0,i.jsx)(a.A,{value:"solution",label:"With monads",children:(0,i.jsx)(u,{file:"solution.go",status:"tested",children:`// With Result monad: clean and composable
import (
  "github.com/IBM/fp-go/v2/result"
  "github.com/IBM/fp-go/v2/function"
)

func processUser(id string) result.Result[User] {
  return function.Pipe4(
      fetchUser(id),
      result.Chain(validateUser),
      result.Chain(enrichUser),
      result.Chain(saveUser),
  )
}

// No repetitive error checking
// Composable
// Clear data flow
// Stops at first error automatically`})})]})}),"\n",(0,i.jsxs)(p,{id:"pattern",number:"03",title:"The monad",titleAccent:"pattern.",lede:"Every monad has three things.",children:[(0,i.jsx)(r.h3,{id:"1-a-type-constructor",children:"1. A type constructor"}),(0,i.jsx)(u,{file:"constructors.go",children:`// Option monad
type Option[A any] struct { /* ... */ }

// Result monad
type Result[A any] struct { /* ... */ }

// IO monad
type IO[A any] func() A`}),(0,i.jsxs)(r.h3,{id:"2-a-way-to-put-values-in-returnof",children:["2. A way to put values in (",(0,i.jsx)(r.code,{children:"Return"}),"/",(0,i.jsx)(r.code,{children:"Of"}),")"]}),(0,i.jsx)(u,{file:"of.go",children:`// Option
opt := option.Some(42)           // Put 42 in Option context

// Result
res := result.Ok(42)             // Put 42 in Result context

// IO
io := io.Of(func() int { return 42 })  // Put 42 in IO context`}),(0,i.jsxs)(r.h3,{id:"3-a-way-to-chain-operations-chainflatmap",children:["3. A way to chain operations (",(0,i.jsx)(r.code,{children:"Chain"}),"/",(0,i.jsx)(r.code,{children:"FlatMap"}),")"]}),(0,i.jsx)(u,{file:"chain.go",children:`// Option
result := option.Chain(func(x int) option.Option[int] {
  return option.Some(x * 2)
})(opt)

// Result
result := result.Chain(func(x int) result.Result[int] {
  return result.Ok(x * 2)
})(res)

// IO
result := io.Chain(func(x int) io.IO[int] {
  return io.Of(func() int { return x * 2 })
})(myIO)`})]}),"\n",(0,i.jsxs)(p,{id:"common",number:"04",title:"Common monads in",titleAccent:"fp-go.",children:[(0,i.jsx)(r.h3,{id:"option-monad--might-not-have-a-value",children:'Option monad \u2014 "might not have a value"'}),(0,i.jsxs)(s.A,{groupId:"monad",children:[(0,i.jsx)(a.A,{value:"without",label:"Without Option",children:(0,i.jsx)(u,{file:"without.go",children:`func findUser(id string) *User {
  user := db.FindByID(id)
  return user
}

func getEmail(user *User) *string {
  if user == nil {
      return nil
  }
  return &user.Email
}

// Lots of nil checks
user := findUser("123")
if user != nil {
  email := getEmail(user)
  if email != nil {
      // Use email
  }
}`})}),(0,i.jsx)(a.A,{value:"with",label:"With Option",children:(0,i.jsx)(u,{file:"with.go",status:"tested",children:`import "github.com/IBM/fp-go/v2/option"

func findUser(id string) option.Option[User] {
  user := db.FindByID(id)
  if user == nil {
      return option.None[User]()
  }
  return option.Some(*user)
}

func getEmail(user User) option.Option[string] {
  if user.Email == "" {
      return option.None[string]()
  }
  return option.Some(user.Email)
}

// Chain operations
email := option.Chain(getEmail)(findUser("123"))

// Or with Pipe
email := function.Pipe2(
  findUser("123"),
  option.Chain(getEmail),
)

// Handle result
email.Fold(
  func() { fmt.Println("No email") },
  func(e string) { fmt.Println("Email:", e) },
)`})})]}),(0,i.jsx)(r.h3,{id:"result-monad--might-be-an-error",children:'Result monad \u2014 "might be an error"'}),(0,i.jsxs)(s.A,{groupId:"monad",children:[(0,i.jsx)(a.A,{value:"without",label:"Without Result",children:(0,i.jsx)(u,{file:"without.go",children:`func divide(a, b int) (int, error) {
  if b == 0 {
      return 0, errors.New("division by zero")
  }
  return a / b, nil
}

func processNumbers(a, b, c int) (int, error) {
  result1, err := divide(a, b)
  if err != nil {
      return 0, err
  }

  result2, err := divide(result1, c)
  if err != nil {
      return 0, err
  }

  return result2, nil
}`})}),(0,i.jsx)(a.A,{value:"with",label:"With Result",children:(0,i.jsx)(u,{file:"with.go",status:"tested",children:`import "github.com/IBM/fp-go/v2/result"

func divide(a, b int) result.Result[int] {
  if b == 0 {
      return result.Err[int](errors.New("division by zero"))
  }
  return result.Ok(a / b)
}

func processNumbers(a, b, c int) result.Result[int] {
  return function.Pipe2(
      divide(a, b),
      result.Chain(func(x int) result.Result[int] {
          return divide(x, c)
      }),
  )
}

// Stops at first error automatically`})})]}),(0,i.jsx)(r.h3,{id:"io-monad--will-perform-side-effects",children:'IO monad \u2014 "will perform side effects"'}),(0,i.jsxs)(s.A,{groupId:"monad",children:[(0,i.jsx)(a.A,{value:"without",label:"Without IO",children:(0,i.jsx)(u,{file:"without.go",children:`func readFile(path string) ([]byte, error) {
  return os.ReadFile(path) // Executes immediately
}

func parseJSON(data []byte) (Config, error) {
  var config Config
  err := json.Unmarshal(data, &config)
  return config, err
}

// Hard to test, executes immediately
config, err := readFile("config.json")
if err != nil {
  return err
}
parsed, err := parseJSON(config)`})}),(0,i.jsx)(a.A,{value:"with",label:"With IO",children:(0,i.jsx)(u,{file:"with.go",status:"tested",children:`import "github.com/IBM/fp-go/v2/ioresult"

func readFile(path string) ioresult.IOResult[[]byte] {
  return func() result.Result[[]byte] {
      data, err := os.ReadFile(path)
      return result.FromGoError(data, err)
  }
}

func parseJSON(data []byte) result.Result[Config] {
  var config Config
  err := json.Unmarshal(data, &config)
  return result.FromGoError(config, err)
}

// Build pipeline (doesn't execute yet)
loadConfig := function.Pipe2(
  readFile("config.json"),
  ioresult.Chain(func(data []byte) ioresult.IOResult[Config] {
      return ioresult.FromResult(parseJSON(data))
  }),
)

// Execute when ready
config := loadConfig()  // Now it runs`})})]}),(0,i.jsx)(r.h3,{id:"array-monad--has-multiple-values",children:'Array monad \u2014 "has multiple values"'}),(0,i.jsx)(u,{file:"array.go",status:"tested",children:`import "github.com/IBM/fp-go/v2/array"

// Array is a monad!
numbers := []int{1, 2, 3}

// Chain (FlatMap) - each element produces an array
result := array.Chain(func(x int) []int {
  return []int{x, x * 2}
})(numbers)
// [1, 2, 2, 4, 3, 6]

// Map - each element produces a single value
doubled := array.Map(func(x int) int {
  return x * 2
})(numbers)
// [2, 4, 6]`})]}),"\n",(0,i.jsxs)(p,{id:"operations",number:"05",title:"Monad",titleAccent:"operations.",children:[(0,i.jsx)(r.h3,{id:"map-vs-chain",children:"Map vs. Chain"}),(0,i.jsxs)(c,{children:[(0,i.jsxs)(d,{kind:"good",title:"Map",pill:"A \u2192 B",children:[(0,i.jsx)("p",{children:"Transform the value inside."}),(0,i.jsx)(u,{file:"map.go",children:`opt := option.Some(5)
doubled := option.Map(func(x int) int {
  return x * 2
})(opt)
// Some(10)`})]}),(0,i.jsxs)(d,{kind:"good",title:"Chain",pill:"A \u2192 M[B]",children:[(0,i.jsx)("p",{children:"Transform and return a new monad."}),(0,i.jsx)(u,{file:"chain.go",children:`opt := option.Some(5)
result := option.Chain(func(x int) option.Option[int] {
  if x > 0 {
      return option.Some(x * 2)
  }
  return option.None[int]()
})(opt)
// Some(10)`})]})]}),(0,i.jsx)(n,{type:"success",title:"Rule of thumb.",children:(0,i.jsxs)(r.p,{children:["Use ",(0,i.jsx)("strong",{children:"Map"})," when your function returns a plain value. Use ",(0,i.jsx)("strong",{children:"Chain"})," when your function returns another monad."]})}),(0,i.jsx)(r.h3,{id:"common-operations-across-monads",children:"Common operations across monads"}),(0,i.jsx)(u,{file:"ops-of.go",children:`// Of/Return - Put value in monad
option.Some(42)
result.Ok(42)
io.Of(func() int { return 42 })`}),(0,i.jsx)(u,{file:"ops-map.go",children:`// Map - Transform value
option.Map(func(x int) int { return x * 2 })(opt)
result.Map(func(x int) int { return x * 2 })(res)
io.Map(func(x int) int { return x * 2 })(myIO)`}),(0,i.jsx)(u,{file:"ops-chain.go",children:`// Chain/FlatMap - Transform and flatten
option.Chain(func(x int) option.Option[int] {
  return option.Some(x * 2)
})(opt)

result.Chain(func(x int) result.Result[int] {
  return result.Ok(x * 2)
})(res)`}),(0,i.jsx)(u,{file:"ops-fold.go",children:`// Fold - Extract value
option.Fold(
  func() int { return 0 },           // None case
  func(x int) int { return x },      // Some case
)(opt)

result.Fold(
  func(err error) int { return 0 },  // Error case
  func(x int) int { return x },      // Success case
)(res)`})]}),"\n",(0,i.jsxs)(p,{id:"laws",number:"06",title:"The monad",titleAccent:"laws.",lede:"Three laws guarantee predictable composition. You don't have to memorize them.",children:[(0,i.jsx)(r.h3,{id:"law-1--left-identity",children:"Law 1 \u2014 Left identity"}),(0,i.jsx)(r.p,{children:(0,i.jsx)(r.code,{children:"of(a).chain(f) === f(a)"})}),(0,i.jsx)(u,{file:"law1.go",children:`a := 5
f := func(x int) option.Option[int] { return option.Some(x * 2) }

// These are equivalent:
result1 := option.Chain(f)(option.Some(a))
result2 := f(a)
// Both give Some(10)`}),(0,i.jsx)(r.h3,{id:"law-2--right-identity",children:"Law 2 \u2014 Right identity"}),(0,i.jsx)(r.p,{children:(0,i.jsx)(r.code,{children:"m.chain(of) === m"})}),(0,i.jsx)(u,{file:"law2.go",children:`m := option.Some(5)

// These are equivalent:
result1 := option.Chain(option.Some[int])(m)
result2 := m
// Both give Some(5)`}),(0,i.jsx)(r.h3,{id:"law-3--associativity",children:"Law 3 \u2014 Associativity"}),(0,i.jsx)(r.p,{children:(0,i.jsx)(r.code,{children:"m.chain(f).chain(g) === m.chain(x => f(x).chain(g))"})}),(0,i.jsx)(u,{file:"law3.go",children:`m := option.Some(5)
f := func(x int) option.Option[int] { return option.Some(x * 2) }
g := func(x int) option.Option[int] { return option.Some(x + 1) }

// These are equivalent:
result1 := option.Chain(g)(option.Chain(f)(m))
result2 := option.Chain(func(x int) option.Option[int] {
  return option.Chain(g)(f(x))
})(m)
// Both give Some(11)`}),(0,i.jsx)(n,{type:"success",title:"Why these matter.",children:(0,i.jsx)(r.p,{children:"They ensure monads compose predictably."})})]}),"\n",(0,i.jsxs)(p,{id:"examples",number:"07",title:"Real-world",titleAccent:"examples.",children:[(0,i.jsx)(r.h3,{id:"user-registration",children:"User registration"}),(0,i.jsxs)(s.A,{groupId:"example",children:[(0,i.jsx)(a.A,{value:"standard",label:"Without monads",children:(0,i.jsx)(u,{file:"without.go",children:`func registerUser(email, password string) (User, error) {
  if !isValidEmail(email) {
      return User{}, errors.New("invalid email")
  }

  existing, err := db.FindByEmail(email)
  if err != nil {
      return User{}, err
  }
  if existing != nil {
      return User{}, errors.New("email already exists")
  }

  hash, err := bcrypt.GenerateFromPassword([]byte(password), 10)
  if err != nil {
      return User{}, err
  }

  user := User{
      Email:    email,
      Password: string(hash),
  }

  if err := db.Save(&user); err != nil {
      return User{}, err
  }

  return user, nil
}`})}),(0,i.jsx)(a.A,{value:"monads",label:"With monads",children:(0,i.jsx)(u,{file:"with.go",status:"tested",children:`import (
  "github.com/IBM/fp-go/v2/result"
  "github.com/IBM/fp-go/v2/function"
)

func validateEmail(email string) result.Result[string] {
  if !isValidEmail(email) {
      return result.Err[string](errors.New("invalid email"))
  }
  return result.Ok(email)
}

func checkNotExists(email string) result.Result[string] {
  existing, err := db.FindByEmail(email)
  if err != nil {
      return result.Err[string](err)
  }
  if existing != nil {
      return result.Err[string](errors.New("email already exists"))
  }
  return result.Ok(email)
}

func hashPassword(password string) result.Result[string] {
  hash, err := bcrypt.GenerateFromPassword([]byte(password), 10)
  return result.FromGoError(string(hash), err)
}

func createUser(email, hash string) result.Result[User] {
  user := User{Email: email, Password: hash}
  err := db.Save(&user)
  return result.FromGoError(user, err)
}

func registerUser(email, password string) result.Result[User] {
  return function.Pipe4(
      validateEmail(email),
      result.Chain(checkNotExists),
      result.Chain(func(e string) result.Result[string] {
          return hashPassword(password)
      }),
      result.Chain(func(hash string) result.Result[User] {
          return createUser(email, hash)
      }),
  )
}`})})]}),(0,i.jsx)(r.h3,{id:"configuration-loading",children:"Configuration loading"}),(0,i.jsxs)(s.A,{groupId:"example",children:[(0,i.jsx)(a.A,{value:"standard",label:"Without monads",children:(0,i.jsx)(u,{file:"without.go",children:`func loadConfig() (Config, error) {
  data, err := os.ReadFile("config.json")
  if err != nil {
      return Config{}, err
  }

  var raw RawConfig
  if err := json.Unmarshal(data, &raw); err != nil {
      return Config{}, err
  }

  if raw.Port == 0 {
      return Config{}, errors.New("port required")
  }

  config := Config{
      Port:    raw.Port,
      Host:    raw.Host,
      Timeout: time.Duration(raw.TimeoutSec) * time.Second,
  }

  return config, nil
}`})}),(0,i.jsx)(a.A,{value:"monads",label:"With monads",children:(0,i.jsx)(u,{file:"with.go",status:"tested",children:`import (
  "github.com/IBM/fp-go/v2/ioresult"
  "github.com/IBM/fp-go/v2/result"
  "github.com/IBM/fp-go/v2/function"
)

func readFile(path string) ioresult.IOResult[[]byte] {
  return func() result.Result[[]byte] {
      data, err := os.ReadFile(path)
      return result.FromGoError(data, err)
  }
}

func parseJSON(data []byte) result.Result[RawConfig] {
  var raw RawConfig
  err := json.Unmarshal(data, &raw)
  return result.FromGoError(raw, err)
}

func validateConfig(raw RawConfig) result.Result[RawConfig] {
  if raw.Port == 0 {
      return result.Err[RawConfig](errors.New("port required"))
  }
  return result.Ok(raw)
}

func transformConfig(raw RawConfig) Config {
  return Config{
      Port:    raw.Port,
      Host:    raw.Host,
      Timeout: time.Duration(raw.TimeoutSec) * time.Second,
  }
}

func loadConfig() ioresult.IOResult[Config] {
  return function.Pipe4(
      readFile("config.json"),
      ioresult.Chain(func(data []byte) ioresult.IOResult[RawConfig] {
          return ioresult.FromResult(parseJSON(data))
      }),
      ioresult.Chain(func(raw RawConfig) ioresult.IOResult[RawConfig] {
          return ioresult.FromResult(validateConfig(raw))
      }),
      ioresult.Map(transformConfig),
  )
}`})})]})]}),"\n",(0,i.jsxs)(p,{id:"patterns",number:"08",title:"Common",titleAccent:"patterns.",children:[(0,i.jsx)(r.h3,{id:"sequential-operations",children:"Sequential operations"}),(0,i.jsx)(u,{file:"sequential.go",children:`result := function.Pipe4(
  fetchUser(id),
  result.Chain(validateUser),
  result.Chain(enrichUser),
  result.Chain(saveUser),
)`}),(0,i.jsx)(r.h3,{id:"conditional-logic",children:"Conditional logic"}),(0,i.jsx)(u,{file:"conditional.go",children:`result := result.Chain(func(user User) result.Result[User] {
  if user.Age < 18 {
      return result.Err[User](errors.New("too young"))
  }
  return result.Ok(user)
})(userResult)`}),(0,i.jsx)(r.h3,{id:"combining-results",children:"Combining results"}),(0,i.jsx)(u,{file:"combine.go",children:`func createOrder(userID, productID string) result.Result[Order] {
  user := fetchUser(userID)
  product := fetchProduct(productID)

  return result.Chain(func(u User) result.Result[Order] {
      return result.Map(func(p Product) Order {
          return Order{User: u, Product: p}
      })(product)
  })(user)
}`}),(0,i.jsx)(r.h3,{id:"error-recovery",children:"Error recovery"}),(0,i.jsx)(u,{file:"recover.go",children:`result := result.OrElse(func(err error) result.Result[User] {
  log.Printf("Error: %v, using default", err)
  return result.Ok(defaultUser)
})(userResult)`})]}),"\n",(0,i.jsx)(p,{id:"when",number:"09",title:"When to use",titleAccent:"monads.",children:(0,i.jsxs)(c,{children:[(0,i.jsxs)(d,{kind:"good",title:"Use monads when",pill:"fits",children:[(0,i.jsx)("p",{children:"Chaining operations that can fail."}),(0,i.jsx)("p",{children:"Handling optional values."}),(0,i.jsx)("p",{children:"Managing side effects."}),(0,i.jsx)("p",{children:"Building composable pipelines."}),(0,i.jsx)("p",{children:"Need consistent error handling."})]}),(0,i.jsxs)(d,{kind:"bad",title:"Don't force when",pill:"trade-offs",children:[(0,i.jsx)("p",{children:"Simple, one-off operations."}),(0,i.jsx)("p",{children:"Performance is critical (hot path)."}),(0,i.jsx)("p",{children:"Team unfamiliar with the pattern."}),(0,i.jsx)("p",{children:"Standard Go is clearer."})]})]})}),"\n",(0,i.jsxs)(p,{id:"faq",number:"10",title:"Common",titleAccent:"questions.",children:[(0,i.jsx)(n,{title:"Do I need to understand category theory?",children:(0,i.jsx)(r.p,{children:"No. Think of monads as a design pattern for chaining operations with context. The theory is interesting but not required."})}),(0,i.jsx)(n,{title:"Aren't monads just error handling?",children:(0,i.jsx)(r.p,{children:'No. Error handling is one use case. Monads handle any "context": Option (optional values), Result (errors), IO (side effects), Array (multiple values), Reader (dependency injection).'})}),(0,i.jsx)(n,{title:"Is this overengineering?",children:(0,i.jsx)(r.p,{children:"Depends. For simple cases, standard Go is fine. For complex error handling and composition, monads shine."})}),(0,i.jsxs)(n,{type:"success",title:"Map vs. Chain \u2014 quick rule.",children:[(0,i.jsx)(r.p,{children:"Map: function returns a plain value. Chain: function returns a monad."}),(0,i.jsx)(u,{file:"rule.go",children:`// Map: int \u{2192} string
result.Map(func(x int) string { return fmt.Sprint(x) })

// Chain: int \u{2192} Result[string]
result.Chain(func(x int) result.Result[string] {
  return result.Ok(fmt.Sprint(x))
})`})]})]}),"\n",(0,i.jsxs)(p,{id:"summary",number:"11",title:"Summary",children:[(0,i.jsx)(l,{title:"Monads",items:[{label:"Pattern for chaining with context",done:!0},{label:"Three parts: type, return, chain",done:!0},{label:"Common types: Option, Result, IO, Array",done:!0},{label:"Operations: Map, Chain, Fold",done:!0},{label:"Laws ensure predictable behavior",done:!0}]}),(0,i.jsx)(n,{type:"success",title:"Key takeaway.",children:(0,i.jsx)(r.p,{children:"Monads are a practical pattern for managing context in a composable way. You don't need to understand the theory to use them effectively."})})]})]})}function p(e={}){let{wrapper:r}={...(0,o.R)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}function f(e,r){throw Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},7250(e,r,t){t.d(r,{A:()=>a});var n=t(4848);t(6540);var i=t(4164),o=t(7663);function s({children:e,className:r,hidden:t}){return(0,n.jsx)("div",{role:"tabpanel",className:(0,i.A)("tabItem_Ymn6",r),hidden:t,children:e})}function a({children:e,className:r,value:t}){let{selectedValue:i,lazy:l}=(0,o.uc)(),u=t===i;return!u&&l?null:(0,n.jsx)(s,{className:r,hidden:!u,children:e})}},773(e,r,t){t.d(r,{A:()=>h});var n=t(4848);t(6540);var i=t(4164),o=t(8287),s=t(7663),a=t(8584),l=t(9863);function u({className:e}){let{selectedValue:r,selectValue:t,tabValues:o,block:l}=(0,s.uc)(),c=[],{blockElementScrollPositionUntilNextRender:d}=(0,a.a_)(),h=e=>{let n=e.currentTarget,i=o[c.indexOf(n)].value;i!==r&&(d(n),t(i))},p=e=>{let r=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{let t=c.indexOf(e.currentTarget)+1;r=c[t]??c[0];break}case"ArrowLeft":{let t=c.indexOf(e.currentTarget)-1;r=c[t]??c[c.length-1]}}r?.focus()};return(0,n.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":l},e),children:o.map(({value:e,label:t,attributes:o})=>(0,n.jsx)("li",{role:"tab",tabIndex:r===e?0:-1,"aria-selected":r===e,ref:e=>{c.push(e)},onKeyDown:p,onClick:h,...o,className:(0,i.A)("tabs__item","tabItem_LNqP",o?.className,{"tabs__item--active":r===e}),children:t??e},e))})}function c({children:e}){return(0,n.jsx)("div",{className:"margin-top--md",children:e})}function d({className:e,children:r}){return(0,n.jsxs)("div",{className:(0,i.A)(o.G.tabs.container,"tabs-container","tabList__CuJ"),children:[(0,n.jsx)(u,{className:e}),(0,n.jsx)(c,{children:r})]})}function h(e){let r=(0,l.A)(),t=(0,s.OC)(e);return(0,n.jsx)(s.O_,{value:t,children:(0,n.jsx)(d,{className:e.className,children:(0,s.vT)(e.children)})},String(r))}},7663(e,r,t){t.d(r,{OC:()=>h,O_:()=>m,uc:()=>f,vT:()=>c});var n=t(4848),i=t(6540),o=t(6347),s=t(9989),a=t(6629),l=t(618),u=t(1367);function c(e){return i.Children.toArray(e).filter(e=>"\n"!==e)}function d({value:e,tabValues:r}){return r.some(r=>r.value===e)}function h(e){let r,{defaultValue:t,queryString:n=!1,groupId:c}=e,h=function(e){let{values:r,children:t}=e;return(0,i.useMemo)(()=>{let e=r??i.Children.toArray(t).flatMap(e=>{if(!e)return[];if((0,i.isValidElement)(e)&&function(e){let{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return[e];let r="string"==typeof e.type?e.type:e.type.name;throw Error(`Docusaurus error: Bad <Tabs> child <${r}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.
If you do not want to pass on a "value" prop to the direct children of <Tabs>, you can also pass an explicit <Tabs values={...}> prop.`)}).map(({props:{value:e,label:r,attributes:t,default:n}})=>({value:e,label:r,attributes:t,default:n})),n=(0,l.XI)(e,(e,r)=>e.value===r.value);if(n.length>0)throw Error(`Docusaurus error: Duplicate values "${n.map(e=>`'${e.value}'`).join(", ")}" found in <Tabs>. Every value needs to be unique.`);return e},[r,t])}(e),[p,f]=(0,i.useState)(()=>(function({defaultValue:e,tabValues:r}){if(0===r.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!d({value:e,tabValues:r}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${r.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}let t=r.find(e=>e.default)??r[0];if(!t)throw Error("Unexpected error: 0 tabValues");return t.value})({defaultValue:t,tabValues:h})),[m,g]=function({queryString:e=!1,groupId:r}){let t=(0,o.W6)(),n=function({queryString:e=!1,groupId:r}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!r)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:e,groupId:r});return[(0,a.aZ)(n),(0,i.useCallback)(e=>{if(!n)return;let r=new URLSearchParams(t.location.search);r.set(n,e),t.replace({...t.location,search:r.toString()})},[n,t])]}({queryString:n,groupId:c}),[x,v]=function({groupId:e}){let r=e?`docusaurus.tab.${e}`:null,[t,n]=(0,u.Dv)(r);return[t,(0,i.useCallback)(e=>{r&&n.set(e)},[r,n])]}({groupId:c}),b=d({value:r=m??x,tabValues:h})?r:null;return(0,s.A)(()=>{b&&f(b)},[b]),{selectedValue:p,selectValue:(0,i.useCallback)(e=>{if(!d({value:e,tabValues:h}))throw Error(`Can't select invalid tab value=${e}`);f(e),g(e),v(e)},[g,v,h]),tabValues:h,lazy:e.lazy??!1,block:e.block??!1}}let p=(0,i.createContext)(null);function f(){let e=i.useContext(p);if(!e)throw Error("useTabsContext() must be used within a Tabs component");return e}function m(e){return(0,n.jsx)(p.Provider,{value:e.value,children:e.children})}},8453(e,r,t){t.d(r,{R:()=>s,x:()=>a});var n=t(6540);let i={},o=n.createContext(i);function s(e){let r=n.useContext(o);return n.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),n.createElement(o.Provider,{value:r},e.children)}}}]);
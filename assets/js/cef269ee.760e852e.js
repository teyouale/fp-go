"use strict";(self.webpackChunkfp_go_docs=self.webpackChunkfp_go_docs||[]).push([["1787"],{2136(e,t,n){n.r(t),n.d(t,{metadata:()=>i,default:()=>p,frontMatter:()=>s,contentTitle:()=>a,toc:()=>l,assets:()=>d});var i=JSON.parse('{"id":"v2/endomorphism","title":"Endomorphism","description":"Functions from a type to itself - special properties for composition and transformation pipelines.","source":"@site/docs/v2/endomorphism.md","sourceDirName":"v2","slug":"/v2/endomorphism","permalink":"/fp-go/docs/v2/endomorphism","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":28,"frontMatter":{"title":"Endomorphism","hide_title":true,"description":"Functions from a type to itself - special properties for composition and transformation pipelines.","sidebar_position":28},"sidebar":"apiSidebar","previous":{"title":"Identity","permalink":"/fp-go/docs/v2/identity"},"next":{"title":"Array","permalink":"/fp-go/docs/v2/collections/array"}}'),r=n(4848),o=n(8453);let s={title:"Endomorphism",hide_title:!0,description:"Functions from a type to itself - special properties for composition and transformation pipelines.",sidebar_position:28},a,d={},l=[{value:"When to Use",id:"when-to-use",level:3},{value:"Constructors",id:"constructors",level:3},{value:"Composition",id:"composition",level:3},{value:"Basic Operations",id:"basic-operations",level:3},{value:"Struct Updates",id:"struct-updates",level:3},{value:"Monoid Composition",id:"monoid-composition",level:3},{value:"Middleware Pattern",id:"middleware-pattern",level:3},{value:"State Updates",id:"state-updates",level:3},{value:"Data Transformation Pipeline",id:"data-transformation-pipeline",level:3},{value:"Pattern 1: Configuration Builder",id:"pattern-1-configuration-builder",level:3},{value:"Pattern 2: Validation Chain",id:"pattern-2-validation-chain",level:3}];function c(e){let t={code:"code",h3:"h3",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components},{ApiTable:n,Callout:i,CodeCard:s,PageHeader:a,Section:d}=t;return n||m("ApiTable",!0),i||m("Callout",!0),s||m("CodeCard",!0),a||m("PageHeader",!0),d||m("Section",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a,{eyebrow:"Reference \xb7 Core Type",title:"Endomorphism",lede:"Functions from a type to itself (A \u2192 A). Endomorphisms have special properties that make them ideal for composition, transformation pipelines, and middleware patterns.",meta:[{label:"Package",value:"github.com/IBM/fp-go/v2/endomorphism"},{label:"Type",value:"func(A) A"}]}),"\n",(0,r.jsxs)(d,{id:"overview",number:"01",title:"Overview",children:[(0,r.jsx)(t.p,{children:"An endomorphism transforms a value while preserving its type:"}),(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Input and output"}),": Same type ",(0,r.jsx)(t.code,{children:"A"})]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Composable"}),": Naturally chains together"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Monoid"}),": Forms a monoid under composition"]}),"\n"]}),(0,r.jsx)(s,{file:"type_definition.go",children:`package endomorphism

// Endomorphism is a function from A to A
type Endomorphism[A any] = func(A) A
`}),(0,r.jsx)(t.h3,{id:"when-to-use",children:"When to Use"}),(0,r.jsx)(n,{children:(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Use Case"}),(0,r.jsx)(t.th,{children:"Example"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Transformations"}),(0,r.jsx)(t.td,{children:"Modify values of the same type"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Pipelines"}),(0,r.jsx)(t.td,{children:"Chain transformations"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Middleware"}),(0,r.jsx)(t.td,{children:"Request/response processing"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"State updates"}),(0,r.jsx)(t.td,{children:"Functional state modifications"})]})]})]})})]}),"\n",(0,r.jsxs)(d,{id:"api",number:"02",title:"Core",titleAccent:"API",children:[(0,r.jsx)(t.h3,{id:"constructors",children:"Constructors"}),(0,r.jsx)(n,{children:(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Function"}),(0,r.jsx)(t.th,{children:"Signature"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"Identity"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"func Identity[A any]() Endomorphism[A]"})}),(0,r.jsx)(t.td,{children:"Identity function (returns input)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"Monoid"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"func Monoid[A any]() monoid.Monoid[Endomorphism[A]]"})}),(0,r.jsx)(t.td,{children:"Monoid instance for composition"})]})]})]})}),(0,r.jsx)(t.h3,{id:"composition",children:"Composition"}),(0,r.jsx)(n,{children:(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Function"}),(0,r.jsx)(t.th,{children:"Signature"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"Compose"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"func Compose[A any](f, g Endomorphism[A]) Endomorphism[A]"})}),(0,r.jsx)(t.td,{children:"Compose two endomorphisms (g \u2218 f)"})]})})]})})]}),"\n",(0,r.jsxs)(d,{id:"examples",number:"03",title:"Usage",titleAccent:"Examples",children:[(0,r.jsx)(t.h3,{id:"basic-operations",children:"Basic Operations"}),(0,r.jsx)(s,{file:"basic.go",children:`package main

import (
  "strings"
  E "github.com/IBM/fp-go/v2/endomorphism"
)

func main() {
  // Simple endomorphisms
  increment := func(n int) int {
      return n + 1
  }
  
  double := func(n int) int {
      return n * 2
  }
  
  // Compose: first double, then increment
  transform := E.Compose(increment, double)
  
  result := transform(5)  // (5 * 2) + 1 = 11
  fmt.Println(result)
  
  // String transformation
  toUpper := func(s string) string {
      return strings.ToUpper(s)
  }
  
  trim := func(s string) string {
      return strings.TrimSpace(s)
  }
  
  clean := E.Compose(toUpper, trim)
  fmt.Println(clean("  hello  "))  // "HELLO"
}
`}),(0,r.jsx)(t.h3,{id:"struct-updates",children:"Struct Updates"}),(0,r.jsx)(s,{file:"struct_updates.go",children:`package main

import (
  "strings"
  E "github.com/IBM/fp-go/v2/endomorphism"
)

type User struct {
  Name  string
  Email string
  Age   int
}

// Endomorphisms for user updates
func updateName(name string) E.Endomorphism[User] {
  return func(u User) User {
      u.Name = name
      return u
  }
}

func normalizeEmail(u User) User {
  u.Email = strings.ToLower(strings.TrimSpace(u.Email))
  return u
}

func incrementAge(u User) User {
  u.Age++
  return u
}

func main() {
  user := User{Name: "Alice", Email: " BOB@EXAMPLE.COM ", Age: 30}
  
  // Compose updates
  update := E.Compose(
      incrementAge,
      E.Compose(normalizeEmail, updateName("Bob")),
  )
  
  updated := update(user)
  fmt.Printf("%+v
", updated)
  // {Name:Bob Email:bob@example.com Age:31}
}
`}),(0,r.jsx)(t.h3,{id:"monoid-composition",children:"Monoid Composition"}),(0,r.jsx)(s,{file:"monoid.go",children:`package main

import (
  E "github.com/IBM/fp-go/v2/endomorphism"
  M "github.com/IBM/fp-go/v2/monoid"
)

func main() {
  // Get monoid instance
  m := E.Monoid[int]()
  
  // Identity (no-op)
  identity := m.Empty()
  fmt.Println(identity(42))  // 42
  
  // Combine endomorphisms
  double := func(n int) int { return n * 2 }
  addTen := func(n int) int { return n + 10 }
  
  combined := m.Concat(double, addTen)
  result := combined(5)  // (5 * 2) + 10 = 20
  fmt.Println(result)
}
`}),(0,r.jsx)(t.h3,{id:"middleware-pattern",children:"Middleware Pattern"}),(0,r.jsx)(s,{file:"middleware.go",children:`package main

import (
  "log"
  "net/http"
  E "github.com/IBM/fp-go/v2/endomorphism"
  F "github.com/IBM/fp-go/v2/function"
)

type Handler = E.Endomorphism[http.Handler]

func LoggingMiddleware() Handler {
  return func(next http.Handler) http.Handler {
      return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
          log.Printf("%s %s", r.Method, r.URL.Path)
          next.ServeHTTP(w, r)
      })
  }
}

func AuthMiddleware() Handler {
  return func(next http.Handler) http.Handler {
      return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
          if !isAuthenticated(r) {
              http.Error(w, "Unauthorized", 401)
              return
          }
          next.ServeHTTP(w, r)
      })
  }
}

func CORSMiddleware() Handler {
  return func(next http.Handler) http.Handler {
      return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
          w.Header().Set("Access-Control-Allow-Origin", "*")
          next.ServeHTTP(w, r)
      })
  }
}

func main() {
  baseHandler := http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
      w.Write([]byte("Hello, World!"))
  })
  
  // Compose middleware
  handler := F.Pipe3(
      baseHandler,
      LoggingMiddleware(),
      AuthMiddleware(),
      CORSMiddleware(),
  )
  
  http.ListenAndServe(":8080", handler)
}
`}),(0,r.jsx)(t.h3,{id:"state-updates",children:"State Updates"}),(0,r.jsx)(s,{file:"state.go",children:`package main

import (
  E "github.com/IBM/fp-go/v2/endomorphism"
  F "github.com/IBM/fp-go/v2/function"
)

type AppState struct {
  Counter int
  Message string
  Active  bool
}

// State update endomorphisms
func incrementCounter(s AppState) AppState {
  s.Counter++
  return s
}

func setMessage(msg string) E.Endomorphism[AppState] {
  return func(s AppState) AppState {
      s.Message = msg
      return s
  }
}

func toggleActive(s AppState) AppState {
  s.Active = !s.Active
  return s
}

func main() {
  initialState := AppState{Counter: 0, Message: "", Active: false}
  
  // Compose state updates
  update := F.Pipe3(
      initialState,
      incrementCounter,
      setMessage("Updated"),
      toggleActive,
  )
  
  fmt.Printf("%+v
", update)
  // {Counter:1 Message:Updated Active:true}
}
`}),(0,r.jsx)(t.h3,{id:"data-transformation-pipeline",children:"Data Transformation Pipeline"}),(0,r.jsx)(s,{file:"pipeline.go",children:`package main

import (
  E "github.com/IBM/fp-go/v2/endomorphism"
  F "github.com/IBM/fp-go/v2/function"
)

type Data struct {
  Value  int
  Status string
  Tags   []string
}

func main() {
  data := Data{Value: 10, Status: "pending", Tags: []string{}}
  
  // Build transformation pipeline
  pipeline := F.Pipe4(
      data,
      func(d Data) Data {
          d.Value *= 2
          return d
      },
      func(d Data) Data {
          d.Status = "processed"
          return d
      },
      func(d Data) Data {
          d.Tags = append(d.Tags, "validated")
          return d
      },
      func(d Data) Data {
          d.Value += 10
          return d
      },
  )
  
  fmt.Printf("%+v
", pipeline)
  // {Value:30 Status:processed Tags:[validated]}
}
`})]}),"\n",(0,r.jsxs)(d,{id:"patterns",number:"04",title:"Common",titleAccent:"Patterns",children:[(0,r.jsx)(t.h3,{id:"pattern-1-configuration-builder",children:"Pattern 1: Configuration Builder"}),(0,r.jsx)(s,{file:"config_builder.go",children:`package main

import (
  E "github.com/IBM/fp-go/v2/endomorphism"
)

type Config struct {
  Host    string
  Port    int
  Timeout int
  Debug   bool
}

func WithHost(host string) E.Endomorphism[Config] {
  return func(c Config) Config {
      c.Host = host
      return c
  }
}

func WithPort(port int) E.Endomorphism[Config] {
  return func(c Config) Config {
      c.Port = port
      return c
  }
}

func WithDebug(debug bool) E.Endomorphism[Config] {
  return func(c Config) Config {
      c.Debug = debug
      return c
  }
}

func main() {
  config := F.Pipe3(
      Config{},
      WithHost("localhost"),
      WithPort(8080),
      WithDebug(true),
  )
  
  fmt.Printf("%+v
", config)
}
`}),(0,r.jsx)(t.h3,{id:"pattern-2-validation-chain",children:"Pattern 2: Validation Chain"}),(0,r.jsx)(s,{file:"validation.go",children:`package main

import (
  "strings"
  E "github.com/IBM/fp-go/v2/endomorphism"
)

type FormData struct {
  Email    string
  Password string
  Valid    bool
  Errors   []string
}

func validateEmail(f FormData) FormData {
  if !strings.Contains(f.Email, "@") {
      f.Errors = append(f.Errors, "invalid email")
      f.Valid = false
  }
  return f
}

func validatePassword(f FormData) FormData {
  if len(f.Password) < 8 {
      f.Errors = append(f.Errors, "password too short")
      f.Valid = false
  }
  return f
}

func normalizeEmail(f FormData) FormData {
  f.Email = strings.ToLower(strings.TrimSpace(f.Email))
  return f
}

func main() {
  form := FormData{
      Email:    " USER@EXAMPLE.COM ",
      Password: "pass",
      Valid:    true,
  }
  
  validated := F.Pipe3(
      form,
      normalizeEmail,
      validateEmail,
      validatePassword,
  )
  
  fmt.Printf("%+v
", validated)
}
`})]}),"\n",(0,r.jsx)(i,{type:"info",children:(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Mathematical Property"}),": Endomorphisms form a monoid under composition with the identity function as the empty element. This makes them perfect for building composable transformation pipelines."]})})]})}function p(e={}){let{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}function m(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},8453(e,t,n){n.d(t,{R:()=>s,x:()=>a});var i=n(6540);let r={},o=i.createContext(r);function s(e){let t=i.useContext(o);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);
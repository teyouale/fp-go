"use strict";(self.webpackChunkfp_go_docs=self.webpackChunkfp_go_docs||[]).push([["8959"],{2360(e,n,t){t.r(n),t.d(n,{metadata:()=>i,default:()=>h,frontMatter:()=>d,contentTitle:()=>s,toc:()=>a,assets:()=>c});var i=JSON.parse('{"id":"v2/readeroption","title":"ReaderOption","description":"Dependency injection with optional values - combines Reader context with Option for computations that may not return a result.","source":"@site/docs/v2/readeroption.md","sourceDirName":"v2","slug":"/v2/readeroption","permalink":"/fp-go/docs/v2/readeroption","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":21,"frontMatter":{"title":"ReaderOption","hide_title":true,"description":"Dependency injection with optional values - combines Reader context with Option for computations that may not return a result.","sidebar_position":21},"sidebar":"apiSidebar","previous":{"title":"ReaderIOResult","permalink":"/fp-go/docs/v2/readerioresult"},"next":{"title":"State","permalink":"/fp-go/docs/v2/state"}}'),r=t(4848),o=t(8453);let d={title:"ReaderOption",hide_title:!0,description:"Dependency injection with optional values - combines Reader context with Option for computations that may not return a result.",sidebar_position:21},s,c={},a=[{value:"When to Use",id:"when-to-use",level:3},{value:"Constructors",id:"constructors",level:3},{value:"Transformations",id:"transformations",level:3},{value:"Extraction",id:"extraction",level:3},{value:"Testing",id:"testing",level:3},{value:"Basic Operations",id:"basic-operations",level:3},{value:"Optional Configuration",id:"optional-configuration",level:3},{value:"Chaining Lookups",id:"chaining-lookups",level:3},{value:"Validation with Context",id:"validation-with-context",level:3},{value:"Pattern 1: Fallback Chain",id:"pattern-1-fallback-chain",level:3},{value:"Pattern 2: Conditional Execution",id:"pattern-2-conditional-execution",level:3}];function l(e){let n={code:"code",h3:"h3",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components},{ApiTable:t,CodeCard:i,PageHeader:d,Section:s}=n;return t||p("ApiTable",!0),i||p("CodeCard",!0),d||p("PageHeader",!0),s||p("Section",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(d,{eyebrow:"Reference \xb7 Core Type",title:"ReaderOption",lede:"Dependency injection with optional values. ReaderOption[C, A] combines Reader context with Option for computations that require dependencies and may not return a result.",meta:[{label:"Package",value:"github.com/IBM/fp-go/v2/readeroption"},{label:"Type",value:"Reader[C, Option[A]]"}]}),"\n",(0,r.jsxs)(s,{id:"overview",number:"01",title:"Overview",children:[(0,r.jsx)(n.p,{children:"ReaderOption represents a computation that requires context and may not return a value:"}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Reader"}),": Dependency injection pattern"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Option"}),": Optional result (Some/None)"]}),"\n"]}),(0,r.jsx)(i,{file:"type_definition.go",children:`package readeroption

// ReaderOption is Reader specialized for optional results
type ReaderOption[C, A any] = Reader[C, Option[A]]
// Which expands to: func(C) Option[A]
`}),(0,r.jsx)(n.h3,{id:"when-to-use",children:"When to Use"}),(0,r.jsx)(t,{children:(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Use Case"}),(0,r.jsx)(n.th,{children:"Example"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Optional results with dependencies"}),(0,r.jsx)(n.td,{children:"Cache lookups, database queries"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Configuration"}),(0,r.jsx)(n.td,{children:"Optional settings from context"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Not an error"}),(0,r.jsx)(n.td,{children:"Absence is a valid outcome"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Composable lookups"}),(0,r.jsx)(n.td,{children:"Chain optional operations with context"})]})]})]})})]}),"\n",(0,r.jsxs)(s,{id:"api",number:"02",title:"Core",titleAccent:"API",children:[(0,r.jsx)(n.h3,{id:"constructors",children:"Constructors"}),(0,r.jsx)(t,{children:(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Function"}),(0,r.jsx)(n.th,{children:"Signature"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"Some"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"func Some[C, A any](value A) ReaderOption[C, A]"})}),(0,r.jsx)(n.td,{children:"Create with value"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"None"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"func None[C, A any]() ReaderOption[C, A]"})}),(0,r.jsx)(n.td,{children:"Create empty"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"Of"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"func Of[C, A any](value A) ReaderOption[C, A]"})}),(0,r.jsx)(n.td,{children:"Alias for Some"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"FromReader"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"func FromReader[C, A any](r Reader[C, A]) ReaderOption[C, A]"})}),(0,r.jsx)(n.td,{children:"Lift Reader to ReaderOption"})]})]})]})}),(0,r.jsx)(n.h3,{id:"transformations",children:"Transformations"}),(0,r.jsx)(t,{children:(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Function"}),(0,r.jsx)(n.th,{children:"Signature"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"Map"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"func Map[C, A, B any](f func(A) B) func(ReaderOption[C, A]) ReaderOption[C, B]"})}),(0,r.jsx)(n.td,{children:"Transform value if present"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"Chain"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"func Chain[C, A, B any](f func(A) ReaderOption[C, B]) func(ReaderOption[C, A]) ReaderOption[C, B]"})}),(0,r.jsx)(n.td,{children:"FlatMap - sequence operations"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"Ap"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"func Ap[C, A, B any](fa ReaderOption[C, A]) func(ReaderOption[C, func(A) B]) ReaderOption[C, B]"})}),(0,r.jsx)(n.td,{children:"Apply wrapped function"})]})]})]})}),(0,r.jsx)(n.h3,{id:"extraction",children:"Extraction"}),(0,r.jsx)(t,{children:(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Function"}),(0,r.jsx)(n.th,{children:"Signature"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"GetOrElse"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"func GetOrElse[C, A any](f func() A) func(ReaderOption[C, A]) Reader[C, A]"})}),(0,r.jsx)(n.td,{children:"Extract with default"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"Fold"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"func Fold[C, A, B any](onNone func() B, onSome func(A) B) func(ReaderOption[C, A]) Reader[C, B]"})}),(0,r.jsx)(n.td,{children:"Pattern match both cases"})]})]})]})}),(0,r.jsx)(n.h3,{id:"testing",children:"Testing"}),(0,r.jsx)(t,{children:(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Function"}),(0,r.jsx)(n.th,{children:"Signature"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"IsSome"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"func IsSome[C, A any](ReaderOption[C, A]) Reader[C, bool]"})}),(0,r.jsx)(n.td,{children:"Test for value"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"IsNone"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"func IsNone[C, A any](ReaderOption[C, A]) Reader[C, bool]"})}),(0,r.jsx)(n.td,{children:"Test for absence"})]})]})]})})]}),"\n",(0,r.jsxs)(s,{id:"examples",number:"03",title:"Usage",titleAccent:"Examples",children:[(0,r.jsx)(n.h3,{id:"basic-operations",children:"Basic Operations"}),(0,r.jsx)(i,{file:"basic.go",children:`package main

import (
  "github.com/IBM/fp-go/v2/readeroption"
  "github.com/IBM/fp-go/v2/option"
)

type Dependencies struct {
  Cache *Cache
  DB    *sql.DB
}

func FindInCache(key string) readeroption.ReaderOption[Dependencies, Data] {
  return func(deps Dependencies) option.Option[Data] {
      if val, ok := deps.Cache.Get(key); ok {
          return option.Some(val)
      }
      return option.None[Data]()
  }
}

func main() {
  deps := Dependencies{Cache: NewCache()}
  
  // Execute with dependencies
  result := FindInCache("key")(deps)
  
  // Check result
  if option.IsSome(result) {
      fmt.Println("Found in cache")
  }
}
`}),(0,r.jsx)(n.h3,{id:"optional-configuration",children:"Optional Configuration"}),(0,r.jsx)(i,{file:"config.go",children:`package main

import (
  RO "github.com/IBM/fp-go/v2/readeroption"
  O "github.com/IBM/fp-go/v2/option"
)

type Config struct {
  Settings map[string]string
}

func GetSetting(key string) RO.ReaderOption[Config, string] {
  return func(cfg Config) O.Option[string] {
      if val, ok := cfg.Settings[key]; ok {
          return O.Some(val)
      }
      return O.None[string]()
  }
}

func main() {
  cfg := Config{Settings: map[string]string{"theme": "dark"}}
  
  // With fallback
  theme := RO.GetOrElse(func() string {
      return "light"
  })(GetSetting("theme"))(cfg)
  
  fmt.Println(theme) // "dark"
}
`}),(0,r.jsx)(n.h3,{id:"chaining-lookups",children:"Chaining Lookups"}),(0,r.jsx)(i,{file:"chaining.go",children:`package main

import (
  RO "github.com/IBM/fp-go/v2/readeroption"
  F "github.com/IBM/fp-go/v2/function"
)

type Dependencies struct {
  Cache *Cache
  DB    *sql.DB
}

func FindInCache(id string) RO.ReaderOption[Dependencies, User] {
  return func(deps Dependencies) option.Option[User] {
      if user, ok := deps.Cache.Get(id); ok {
          return option.Some(user)
      }
      return option.None[User]()
  }
}

func FindInDB(id string) RO.ReaderOption[Dependencies, User] {
  return func(deps Dependencies) option.Option[User] {
      user, err := deps.DB.Query(id)
      if err != nil {
          return option.None[User]()
      }
      return option.Some(user)
  }
}

func FindUser(id string) RO.ReaderOption[Dependencies, User] {
  return F.Pipe2(
      FindInCache(id),
      RO.Alt(func() RO.ReaderOption[Dependencies, User] {
          return FindInDB(id)
      }),
  )
}
`}),(0,r.jsx)(n.h3,{id:"validation-with-context",children:"Validation with Context"}),(0,r.jsx)(i,{file:"validation.go",children:`package main

import (
  RO "github.com/IBM/fp-go/v2/readeroption"
  O "github.com/IBM/fp-go/v2/option"
)

type ValidationContext struct {
  AllowedDomains []string
}

func ValidateEmail(email string) RO.ReaderOption[ValidationContext, string] {
  return func(ctx ValidationContext) O.Option[string] {
      domain := extractDomain(email)
      for _, allowed := range ctx.AllowedDomains {
          if domain == allowed {
              return O.Some(email)
          }
      }
      return O.None[string]()
  }
}

func main() {
  ctx := ValidationContext{
      AllowedDomains: []string{"example.com", "test.com"},
  }
  
  result := ValidateEmail("user@example.com")(ctx)
  // Some("user@example.com")
  
  result = ValidateEmail("user@invalid.com")(ctx)
  // None
}
`})]}),"\n",(0,r.jsxs)(s,{id:"patterns",number:"04",title:"Common",titleAccent:"Patterns",children:[(0,r.jsx)(n.h3,{id:"pattern-1-fallback-chain",children:"Pattern 1: Fallback Chain"}),(0,r.jsx)(i,{file:"fallback.go",children:`package main

import (
  RO "github.com/IBM/fp-go/v2/readeroption"
  F "github.com/IBM/fp-go/v2/function"
)

// Try multiple sources in order
func GetConfig(key string) RO.ReaderOption[Dependencies, string] {
  return F.Pipe3(
      GetFromEnv(key),
      RO.Alt(func() RO.ReaderOption[Dependencies, string] {
          return GetFromFile(key)
      }),
      RO.Alt(func() RO.ReaderOption[Dependencies, string] {
          return GetFromDefaults(key)
      }),
  )
}
`}),(0,r.jsx)(n.h3,{id:"pattern-2-conditional-execution",children:"Pattern 2: Conditional Execution"}),(0,r.jsx)(i,{file:"conditional.go",children:`package main

import (
  RO "github.com/IBM/fp-go/v2/readeroption"
  O "github.com/IBM/fp-go/v2/option"
)

func GetFeature(name string) RO.ReaderOption[AppContext, Feature] {
  return func(ctx AppContext) O.Option[Feature] {
      if !ctx.FeatureFlags.IsEnabled(name) {
          return O.None[Feature]()
      }
      return O.Some(ctx.Features[name])
  }
}
`})]})]})}function h(e={}){let{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}function p(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},8453(e,n,t){t.d(n,{R:()=>d,x:()=>s});var i=t(6540);let r={},o=i.createContext(r);function d(e){let n=i.useContext(o);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);
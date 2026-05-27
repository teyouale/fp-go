"use strict";(self.webpackChunkfp_go_docs=self.webpackChunkfp_go_docs||[]).push([["1070"],{1990(e,n,i){i.r(n),i.d(n,{metadata:()=>t,default:()=>h,frontMatter:()=>c,contentTitle:()=>s,toc:()=>a,assets:()=>l});var t=JSON.parse('{"id":"v2/iooption","title":"IOOption","description":"Lazy side effects with optional values - combine IO and Option for effectful optional computations.","source":"@site/docs/v2/iooption.md","sourceDirName":"v2","slug":"/v2/iooption","permalink":"/fp-go/docs/v2/iooption","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":15,"frontMatter":{"title":"IOOption","hide_title":true,"description":"Lazy side effects with optional values - combine IO and Option for effectful optional computations.","sidebar_position":15},"sidebar":"apiSidebar","previous":{"title":"IOEither","permalink":"/fp-go/docs/v2/ioeither"},"next":{"title":"Result","permalink":"/fp-go/docs/v2/result"}}'),o=i(4848),r=i(8453);let c={title:"IOOption",hide_title:!0,description:"Lazy side effects with optional values - combine IO and Option for effectful optional computations.",sidebar_position:15},s,l={},a=[{value:"When to Use",id:"when-to-use",level:3},{value:"Constructors",id:"constructors",level:3},{value:"Transformations",id:"transformations",level:3},{value:"Combining",id:"combining",level:3},{value:"Basic Operations",id:"basic-operations",level:3},{value:"Cache Lookup",id:"cache-lookup",level:3},{value:"Search Operations",id:"search-operations",level:3},{value:"Chaining Optional Operations",id:"chaining-optional-operations",level:3},{value:"Pattern 1: Fallback Chain",id:"pattern-1-fallback-chain",level:3},{value:"Pattern 2: Optional Configuration",id:"pattern-2-optional-configuration",level:3}];function d(e){let n={code:"code",h3:"h3",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components},{ApiTable:i,CodeCard:t,PageHeader:c,Section:s}=n;return i||p("ApiTable",!0),t||p("CodeCard",!0),c||p("PageHeader",!0),s||p("Section",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(c,{eyebrow:"Reference \xb7 Core Type",title:"IOOption",lede:"Combine lazy evaluation (IO) with optional values (Option). IOOption[A] represents a synchronous computation with side effects that may produce no value.",meta:[{label:"Package",value:"github.com/IBM/fp-go/v2/iooption"},{label:"Type",value:"Monad (IO[Option[A]])"}]}),"\n",(0,o.jsxs)(s,{id:"overview",number:"01",title:"Overview",children:[(0,o.jsx)(t,{file:"type_definition.go",children:`package iooption

// IOOption is IO of Option
type IOOption[A any] = IO[Option[A]]
// Which expands to: func() Option[A]
`}),(0,o.jsx)(n.h3,{id:"when-to-use",children:"When to Use"}),(0,o.jsx)(i,{children:(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Use IOOption When"}),(0,o.jsx)(n.th,{children:"Use IOResult When"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Optional results (cache miss, search)"}),(0,o.jsx)(n.td,{children:"Operations that can fail with errors"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"No error information needed"}),(0,o.jsx)(n.td,{children:"Need error messages"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Absence is not an error"}),(0,o.jsx)(n.td,{children:"Failure needs explanation"})]})]})]})})]}),"\n",(0,o.jsxs)(s,{id:"api",number:"02",title:"Core",titleAccent:"API",children:[(0,o.jsx)(n.h3,{id:"constructors",children:"Constructors"}),(0,o.jsx)(i,{children:(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Function"}),(0,o.jsx)(n.th,{children:"Signature"}),(0,o.jsx)(n.th,{children:"Description"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"Some"})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"func Some[A any](value A) IOOption[A]"})}),(0,o.jsx)(n.td,{children:"Create IOOption with value"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"None"})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"func None[A any]() IOOption[A]"})}),(0,o.jsx)(n.td,{children:"Create empty IOOption"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"Of"})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"func Of[A any](value A) IOOption[A]"})}),(0,o.jsx)(n.td,{children:"Alias for Some"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"FromIO"})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"func FromIO[A any](io IO[A]) IOOption[A]"})}),(0,o.jsx)(n.td,{children:"Lift IO to IOOption"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"FromOption"})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"func FromOption[A any](opt Option[A]) IOOption[A]"})}),(0,o.jsx)(n.td,{children:"Lift Option to IOOption"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"FromNillable"})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"func FromNillable[A any](io IO[*A]) IOOption[A]"})}),(0,o.jsx)(n.td,{children:"From IO of pointer"})]})]})]})}),(0,o.jsx)(n.h3,{id:"transformations",children:"Transformations"}),(0,o.jsx)(i,{children:(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Function"}),(0,o.jsx)(n.th,{children:"Signature"}),(0,o.jsx)(n.th,{children:"Description"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"Map"})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"func Map[A, B any](f func(A) B) func(IOOption[A]) IOOption[B]"})}),(0,o.jsx)(n.td,{children:"Transform value if present"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"Chain"})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"func Chain[A, B any](f func(A) IOOption[B]) func(IOOption[A]) IOOption[B]"})}),(0,o.jsx)(n.td,{children:"Sequence operations"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"Filter"})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"func Filter[A any](pred func(A) bool) func(IOOption[A]) IOOption[A]"})}),(0,o.jsx)(n.td,{children:"Keep only if predicate holds"})]})]})]})}),(0,o.jsx)(n.h3,{id:"combining",children:"Combining"}),(0,o.jsx)(i,{children:(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Function"}),(0,o.jsx)(n.th,{children:"Signature"}),(0,o.jsx)(n.th,{children:"Description"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"Alt"})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"func Alt[A any](second IOOption[A]) func(IOOption[A]) IOOption[A]"})}),(0,o.jsx)(n.td,{children:"Fallback on None"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"GetOrElse"})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"func GetOrElse[A any](f func() IO[A]) func(IOOption[A]) IO[A]"})}),(0,o.jsx)(n.td,{children:"Extract with default"})]})]})]})})]}),"\n",(0,o.jsxs)(s,{id:"examples",number:"03",title:"Usage",titleAccent:"Examples",children:[(0,o.jsx)(n.h3,{id:"basic-operations",children:"Basic Operations"}),(0,o.jsx)(t,{file:"basic.go",children:`package main

import (
  IOO "github.com/IBM/fp-go/v2/iooption"
)

func main() {
  // Create IOOption values
  some := IOO.Some(42)
  none := IOO.None[int]()
  
  // Execute
  result := some()  // Option[int] = Some(42)
  result = none()   // Option[int] = None
}
`}),(0,o.jsx)(n.h3,{id:"cache-lookup",children:"Cache Lookup"}),(0,o.jsx)(t,{file:"cache.go",children:`package main

import (
  IOO "github.com/IBM/fp-go/v2/iooption"
)

func getFromCache(key string) IOO.IOOption[Data] {
  return func() option.Option[Data] {
      if val, ok := cache.Get(key); ok {
          return option.Some(val.(Data))
      }
      return option.None[Data]()
  }
}

func getWithFallback(key string) IO.IO[Data] {
  return IOO.GetOrElse(func() IO.IO[Data] {
      return fetchFromDB(key)
  })(getFromCache(key))
}

func main() {
  data := getWithFallback("user:123")()
}
`}),(0,o.jsx)(n.h3,{id:"search-operations",children:"Search Operations"}),(0,o.jsx)(t,{file:"search.go",children:`package main

import (
  IOO "github.com/IBM/fp-go/v2/iooption"
  F "github.com/IBM/fp-go/v2/function"
)

func findUser(email string) IOO.IOOption[User] {
  return func() option.Option[User] {
      users := db.QueryUsers("email = ?", email)
      if len(users) > 0 {
          return option.Some(users[0])
      }
      return option.None[User]()
  }
}

func findActiveUser(email string) IOO.IOOption[User] {
  return F.Pipe1(
      findUser(email),
      IOO.Filter(func(u User) bool {
          return u.Active
      }),
  )
}

func main() {
  result := findActiveUser("alice@example.com")()
  // Option[User]
}
`}),(0,o.jsx)(n.h3,{id:"chaining-optional-operations",children:"Chaining Optional Operations"}),(0,o.jsx)(t,{file:"chaining.go",children:`package main

import (
  IOO "github.com/IBM/fp-go/v2/iooption"
  F "github.com/IBM/fp-go/v2/function"
)

func getUserProfile(id string) IOO.IOOption[Profile] {
  return F.Pipe2(
      findUser(id),
      IOO.Chain(func(u User) IOO.IOOption[Profile] {
          return loadProfile(u.ProfileID)
      }),
      IOO.Filter(func(p Profile) bool {
          return p.Visible
      }),
  )
}
`})]}),"\n",(0,o.jsxs)(s,{id:"patterns",number:"04",title:"Common",titleAccent:"Patterns",children:[(0,o.jsx)(n.h3,{id:"pattern-1-fallback-chain",children:"Pattern 1: Fallback Chain"}),(0,o.jsx)(t,{file:"fallback.go",children:`package main

import (
  IOO "github.com/IBM/fp-go/v2/iooption"
  F "github.com/IBM/fp-go/v2/function"
)

func getData(key string) IOO.IOOption[Data] {
  return F.Pipe2(
      getFromMemCache(key),
      IOO.Alt(getFromRedis(key)),
      IOO.Alt(getFromDatabase(key)),
  )
}
`}),(0,o.jsx)(n.h3,{id:"pattern-2-optional-configuration",children:"Pattern 2: Optional Configuration"}),(0,o.jsx)(t,{file:"config.go",children:`package main

import (
  IOO "github.com/IBM/fp-go/v2/iooption"
)

func loadOptionalConfig(path string) IOO.IOOption[Config] {
  return func() option.Option[Config] {
      data, err := os.ReadFile(path)
      if err != nil {
          return option.None[Config]()
      }
      
      var cfg Config
      if err := json.Unmarshal(data, &cfg); err != nil {
          return option.None[Config]()
      }
      
      return option.Some(cfg)
  }
}

func getConfig() IO.IO[Config] {
  return IOO.GetOrElse(func() IO.IO[Config] {
      return IO.Of(defaultConfig())
  })(loadOptionalConfig("config.json"))
}
`})]})]})}function h(e={}){let{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}function p(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},8453(e,n,i){i.d(n,{R:()=>c,x:()=>s});var t=i(6540);let o={},r=t.createContext(o);function c(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);
"use strict";(self.webpackChunkfp_go_docs=self.webpackChunkfp_go_docs||[]).push([["9474"],{5904(e,r,t){t.r(r),t.d(r,{metadata:()=>i,default:()=>c,frontMatter:()=>o,contentTitle:()=>l,toc:()=>u,assets:()=>a});var i=JSON.parse('{"id":"migration/interop","title":"v1 and v2 Interop","description":"Learn how to run fp-go v1 and v2 side-by-side during gradual migration, with patterns for bridging between versions.","source":"@site/docs/migration/interop.md","sourceDirName":"migration","slug":"/migration/interop","permalink":"/fp-go/docs/migration/interop","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":9,"frontMatter":{"sidebar_position":9,"title":"v1 and v2 Interop","hide_title":true,"description":"Learn how to run fp-go v1 and v2 side-by-side during gradual migration, with patterns for bridging between versions."},"sidebar":"tutorialSidebar","previous":{"title":"v1 to v2 Migration","permalink":"/fp-go/docs/migration/v1-to-v2"},"next":{"title":"Pure Functions","permalink":"/fp-go/docs/concepts/pure-functions"}}'),n=t(4848),s=t(8453);let o={sidebar_position:9,title:"v1 and v2 Interop",hide_title:!0,description:"Learn how to run fp-go v1 and v2 side-by-side during gradual migration, with patterns for bridging between versions."},l,a={},u=[{value:"Use Cases",id:"use-cases",level:3},{value:"1. Install Both Versions",id:"1-install-both-versions",level:3},{value:"2. Use Import Aliases",id:"2-use-import-aliases",level:3},{value:"3. Organize Code",id:"3-organize-code",level:3},{value:"Pattern 1: Either v1 \u2192 Result v2",id:"pattern-1-either-v1--result-v2",level:3},{value:"Pattern 2: Result v2 \u2192 Either v1",id:"pattern-2-result-v2--either-v1",level:3},{value:"Pattern 3: Option v1 \u2194 Option v2",id:"pattern-3-option-v1--option-v2",level:3},{value:"Pattern 4: IOEither v1 \u2192 IOResult v2",id:"pattern-4-ioeither-v1--ioresult-v2",level:3},{value:"Pattern 5: IOResult v2 \u2192 IOEither v1",id:"pattern-5-ioresult-v2--ioeither-v1",level:3},{value:"Example 1: HTTP Handler Bridge",id:"example-1-http-handler-bridge",level:3},{value:"Example 2: Database Layer Migration",id:"example-2-database-layer-migration",level:3},{value:"Example 3: Shared Library",id:"example-3-shared-library",level:3},{value:"1. Isolate Conversion Logic",id:"1-isolate-conversion-logic",level:3},{value:"2. Use Feature Flags",id:"2-use-feature-flags",level:3},{value:"3. Test Both Paths",id:"3-test-both-paths",level:3},{value:"4. Document Version Usage",id:"4-document-version-usage",level:3},{value:"5. Monitor Performance",id:"5-monitor-performance",level:3},{value:"Pitfall 1: Nested Conversions",id:"pitfall-1-nested-conversions",level:3},{value:"Pitfall 2: Forgetting Error Context",id:"pitfall-2-forgetting-error-context",level:3},{value:"Pitfall 3: Type Inference Issues",id:"pitfall-3-type-inference-issues",level:3}];function v(e){let r={code:"code",em:"em",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components},{CodeCard:t,Compare:i,CompareCol:o,PageHeader:l,Section:a,TLDR:u,TLDRCard:v}=r;return t||d("CodeCard",!0),i||d("Compare",!0),o||d("CompareCol",!0),l||d("PageHeader",!0),a||d("Section",!0),u||d("TLDR",!0),v||d("TLDRCard",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l,{eyebrow:"Migration \xb7 03 / 03",title:"v1 and v2",titleAccent:"Interop.",lede:"Run fp-go v1 and v2 side-by-side during gradual migration. Learn patterns for bridging between versions safely and efficiently.",meta:[{label:"// Difficulty",value:"Intermediate"},{label:"// Use case",value:"Gradual migration"},{label:"// Reading time",value:"12 min \xb7 6 sections"}]}),"\n",(0,n.jsxs)(u,{children:[(0,n.jsx)(v,{label:"// Key pattern",prose:!0,value:(0,n.jsxs)(n.Fragment,{children:["Convert at ",(0,n.jsx)(r.em,{children:"boundaries"}),", not throughout."]}),variant:"up"}),(0,n.jsx)(v,{label:"// Bridge package",prose:!0,value:(0,n.jsxs)(n.Fragment,{children:["Isolate all ",(0,n.jsx)(r.em,{children:"conversion logic"}),"."]})}),(0,n.jsx)(v,{label:"// Feature flags",prose:!0,value:(0,n.jsxs)(n.Fragment,{children:["Control which ",(0,n.jsx)(r.em,{children:"version"})," to use."]})})]}),"\n",(0,n.jsxs)(a,{id:"why",number:"01",title:"Why run both",titleAccent:"versions?",children:[(0,n.jsx)(r.h3,{id:"use-cases",children:"Use Cases"}),(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Gradual Migration:"})}),(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"Migrate module by module"}),"\n",(0,n.jsx)(r.li,{children:"Test incrementally"}),"\n",(0,n.jsx)(r.li,{children:"Minimize risk"}),"\n"]}),(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Legacy Support:"})}),(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"Keep old code working"}),"\n",(0,n.jsx)(r.li,{children:"Add new features with v2"}),"\n",(0,n.jsx)(r.li,{children:"Eventual migration"}),"\n"]}),(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Team Coordination:"})}),(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"Different teams migrate at different speeds"}),"\n",(0,n.jsx)(r.li,{children:"Shared libraries need both versions"}),"\n",(0,n.jsx)(r.li,{children:"Smooth transition"}),"\n"]})]}),"\n",(0,n.jsxs)(a,{id:"setup",number:"02",title:"Setup",titleAccent:"guide.",children:[(0,n.jsx)(r.h3,{id:"1-install-both-versions",children:"1. Install Both Versions"}),(0,n.jsx)(t,{file:"install.sh",lang:"bash",children:`# Install v1 and v2
go get github.com/IBM/fp-go
go get github.com/IBM/fp-go/v2

# Verify go.mod
cat go.mod`}),(0,n.jsxs)(r.p,{children:["Your ",(0,n.jsx)(r.code,{children:"go.mod"})," should have:"]}),(0,n.jsx)(t,{file:"go.mod",children:`module myapp

go 1.24

require (
  github.com/IBM/fp-go v1.x.x
  github.com/IBM/fp-go/v2 v2.x.x
)`}),(0,n.jsx)(r.h3,{id:"2-use-import-aliases",children:"2. Use Import Aliases"}),(0,n.jsx)(t,{file:"imports.go",children:`import (
  // v1 imports with v1 prefix
  v1either "github.com/IBM/fp-go/either"
  v1option "github.com/IBM/fp-go/option"
  v1ioeither "github.com/IBM/fp-go/ioeither"
  
  // v2 imports with v2 prefix
  v2either "github.com/IBM/fp-go/v2/either"
  v2result "github.com/IBM/fp-go/v2/result"
  v2ioresult "github.com/IBM/fp-go/v2/ioresult"
)`}),(0,n.jsx)(r.h3,{id:"3-organize-code",children:"3. Organize Code"}),(0,n.jsx)(t,{file:"structure.txt",children:`myapp/
\u{251C}\u{2500}\u{2500} legacy/          # v1 code
\u{2502}   \u{251C}\u{2500}\u{2500} user.go
\u{2502}   \u{2514}\u{2500}\u{2500} auth.go
\u{251C}\u{2500}\u{2500} new/             # v2 code
\u{2502}   \u{251C}\u{2500}\u{2500} api.go
\u{2502}   \u{2514}\u{2500}\u{2500} service.go
\u{2514}\u{2500}\u{2500} bridge/          # Interop code
  \u{2514}\u{2500}\u{2500} convert.go`})]}),"\n",(0,n.jsxs)(a,{id:"conversion-patterns",number:"03",title:"Conversion",titleAccent:"patterns.",children:[(0,n.jsx)(r.h3,{id:"pattern-1-either-v1--result-v2",children:"Pattern 1: Either v1 \u2192 Result v2"}),(0,n.jsx)(r.p,{children:"Convert v1 Either to v2 Result:"}),(0,n.jsx)(t,{file:"either-to-result.go",children:`// Conversion function
func EitherToResult[A any](e v1either.Either[error, A]) v2result.Result[A] {
  return v1either.Fold(
      // Left (error) \u{2192} Err
      func(err error) v2result.Result[A] {
          return v2result.Err[A](err)
      },
      // Right (value) \u{2192} Ok
      func(val A) v2result.Result[A] {
          return v2result.Ok(val)
      },
  )(e)
}

// Usage
func legacyFunction() v1either.Either[error, User] {
  // v1 code
  return v1either.Right[error](User{ID: "123"})
}

func newFunction() v2result.Result[User] {
  v1Result := legacyFunction()
  return EitherToResult(v1Result)
}`}),(0,n.jsx)(r.h3,{id:"pattern-2-result-v2--either-v1",children:"Pattern 2: Result v2 \u2192 Either v1"}),(0,n.jsx)(r.p,{children:"Convert v2 Result to v1 Either:"}),(0,n.jsx)(t,{file:"result-to-either.go",children:`// Conversion function using Fold
func ResultToEither[A any](r v2result.Result[A]) v1either.Either[error, A] {
  return r.Fold(
      // Err \u{2192} Left
      func(err error) v1either.Either[error, A] {
          return v1either.Left[A](err)
      },
      // Ok \u{2192} Right
      func(val A) v1either.Either[error, A] {
          return v1either.Right[error](val)
      },
  )
}

// Usage
func newFunction() v2result.Result[User] {
  // v2 code
  return v2result.Ok(User{ID: "123"})
}

func legacyFunction() v1either.Either[error, User] {
  v2Result := newFunction()
  return ResultToEither(v2Result)
}`}),(0,n.jsx)(r.h3,{id:"pattern-3-option-v1--option-v2",children:"Pattern 3: Option v1 \u2194 Option v2"}),(0,n.jsx)(r.p,{children:"Options are similar in both versions:"}),(0,n.jsx)(t,{file:"option-conversion.go",children:`// v1 Option \u{2192} v2 Option
func OptionV1ToV2[A any](opt v1option.Option[A]) v2option.Option[A] {
  return v1option.Fold(
      func() v2option.Option[A] {
          return v2option.None[A]()
      },
      func(val A) v2option.Option[A] {
          return v2option.Some(val)
      },
  )(opt)
}

// v2 Option \u{2192} v1 Option
func OptionV2ToV1[A any](opt v2option.Option[A]) v1option.Option[A] {
  return v2option.Fold(
      func() v1option.Option[A] {
          return v1option.None[A]()
      },
      func(val A) v1option.Option[A] {
          return v1option.Some(val)
      },
  )(opt)
}`}),(0,n.jsx)(r.h3,{id:"pattern-4-ioeither-v1--ioresult-v2",children:"Pattern 4: IOEither v1 \u2192 IOResult v2"}),(0,n.jsx)(t,{file:"ioeither-to-ioresult.go",children:`// Conversion function
func IOEitherToIOResult[A any](
  ioe v1ioeither.IOEither[error, A],
) v2ioresult.IOResult[A] {
  return func() v2result.Result[A] {
      // Execute v1 IOEither
      e := ioe()
      
      // Convert Either to Result
      return EitherToResult(e)
  }
}

// Usage
func legacyReadFile(path string) v1ioeither.IOEither[error, []byte] {
  return func() v1either.Either[error, []byte] {
      data, err := os.ReadFile(path)
      if err != nil {
          return v1either.Left[[]byte](err)
      }
      return v1either.Right[error](data)
  }
}

func newReadFile(path string) v2ioresult.IOResult[[]byte] {
  v1IO := legacyReadFile(path)
  return IOEitherToIOResult(v1IO)
}`}),(0,n.jsx)(r.h3,{id:"pattern-5-ioresult-v2--ioeither-v1",children:"Pattern 5: IOResult v2 \u2192 IOEither v1"}),(0,n.jsx)(t,{file:"ioresult-to-ioeither.go",children:`// Conversion function
func IOResultToIOEither[A any](
  ior v2ioresult.IOResult[A],
) v1ioeither.IOEither[error, A] {
  return func() v1either.Either[error, A] {
      // Execute v2 IOResult
      r := ior()
      
      // Convert Result to Either
      return ResultToEither(r)
  }
}

// Usage
func newFetchData(url string) v2ioresult.IOResult[Data] {
  return func() v2result.Result[Data] {
      // v2 implementation
      return v2result.Ok(Data{})
  }
}

func legacyFetchData(url string) v1ioeither.IOEither[error, Data] {
  v2IO := newFetchData(url)
  return IOResultToIOEither(v2IO)
}`})]}),"\n",(0,n.jsxs)(a,{id:"real-world-examples",number:"04",title:"Real-world",titleAccent:"examples.",children:[(0,n.jsx)(r.h3,{id:"example-1-http-handler-bridge",children:"Example 1: HTTP Handler Bridge"}),(0,n.jsx)(t,{file:"http-bridge.go",children:`// Legacy v1 service
type LegacyUserService struct{}

func (s *LegacyUserService) GetUser(id string) v1ioeither.IOEither[error, User] {
  return func() v1either.Either[error, User] {
      // v1 implementation
      user := User{ID: id, Name: "John"}
      return v1either.Right[error](user)
  }
}

// New v2 service
type UserService struct {
  legacy *LegacyUserService
}

func (s *UserService) GetUser(id string) v2ioresult.IOResult[User] {
  // Bridge to legacy service
  v1Result := s.legacy.GetUser(id)
  return IOEitherToIOResult(v1Result)
}

// HTTP handler using v2
func HandleGetUser(service *UserService) http.HandlerFunc {
  return func(w http.ResponseWriter, r *http.Request) {
      id := r.URL.Query().Get("id")
      
      // Use v2 API
      result := service.GetUser(id)()
      
      result.Fold(
          func(err error) {
              http.Error(w, err.Error(), http.StatusInternalServerError)
          },
          func(user User) {
              json.NewEncoder(w).Encode(user)
          },
      )
  }
}`}),(0,n.jsx)(r.h3,{id:"example-2-database-layer-migration",children:"Example 2: Database Layer Migration"}),(0,n.jsx)(t,{file:"database-bridge.go",children:`// Legacy v1 repository
type LegacyUserRepo struct {
  db *sql.DB
}

func (r *LegacyUserRepo) FindByID(id string) v1ioeither.IOEither[error, User] {
  return func() v1either.Either[error, User] {
      var user User
      err := r.db.QueryRow("SELECT * FROM users WHERE id = ?", id).Scan(&user)
      if err != nil {
          return v1either.Left[User](err)
      }
      return v1either.Right[error](user)
  }
}

// New v2 repository
type UserRepo struct {
  db *sql.DB
}

func (r *UserRepo) FindByID(id string) v2ioresult.IOResult[User] {
  return func() v2result.Result[User] {
      var user User
      err := r.db.QueryRow("SELECT * FROM users WHERE id = ?", id).Scan(&user)
      return v2result.FromGoError(user, err)
  }
}

// Bridge service using both
type UserService struct {
  legacyRepo *LegacyUserRepo
  newRepo    *UserRepo
  useV2      bool // Feature flag
}

func (s *UserService) GetUser(id string) v2ioresult.IOResult[User] {
  if s.useV2 {
      return s.newRepo.FindByID(id)
  }
  
  // Bridge to v1
  v1Result := s.legacyRepo.FindByID(id)
  return IOEitherToIOResult(v1Result)
}`}),(0,n.jsx)(r.h3,{id:"example-3-shared-library",children:"Example 3: Shared Library"}),(0,n.jsx)(t,{file:"shared-library.go",children:`// shared/types.go - Common types
package shared

type User struct {
  ID    string
  Name  string
  Email string
}

// shared/v1/user.go - v1 API
package v1

import (
  v1either "github.com/IBM/fp-go/either"
  "myapp/shared"
)

func ValidateUser(user shared.User) v1either.Either[error, shared.User] {
  // v1 implementation
  return v1either.Right[error](user)
}

// shared/v2/user.go - v2 API
package v2

import (
  v2result "github.com/IBM/fp-go/v2/result"
  "myapp/shared"
)

func ValidateUser(user shared.User) v2result.Result[shared.User] {
  // v2 implementation
  return v2result.Ok(user)
}

// shared/bridge/user.go - Conversion
package bridge

import (
  v1either "github.com/IBM/fp-go/either"
  v2result "github.com/IBM/fp-go/v2/result"
  "myapp/shared"
  sharedv1 "myapp/shared/v1"
  sharedv2 "myapp/shared/v2"
)

// Use v1 from v2 code
func ValidateUserV1AsV2(user shared.User) v2result.Result[shared.User] {
  v1Result := sharedv1.ValidateUser(user)
  return EitherToResult(v1Result)
}

// Use v2 from v1 code
func ValidateUserV2AsV1(user shared.User) v1either.Either[error, shared.User] {
  v2Result := sharedv2.ValidateUser(user)
  return ResultToEither(v2Result)
}`})]}),"\n",(0,n.jsxs)(a,{id:"best-practices",number:"05",title:"Best",titleAccent:"practices.",children:[(0,n.jsx)(r.h3,{id:"1-isolate-conversion-logic",children:"1. Isolate Conversion Logic"}),(0,n.jsx)(r.p,{children:"Create a dedicated bridge package:"}),(0,n.jsx)(t,{file:"bridge-package.go",children:`// bridge/convert.go
package bridge

// All conversion functions in one place
func EitherToResult[A any](e v1either.Either[error, A]) v2result.Result[A] { ... }
func ResultToEither[A any](r v2result.Result[A]) v1either.Either[error, A] { ... }
func IOEitherToIOResult[A any](ioe v1ioeither.IOEither[error, A]) v2ioresult.IOResult[A] { ... }
// etc.`}),(0,n.jsx)(r.h3,{id:"2-use-feature-flags",children:"2. Use Feature Flags"}),(0,n.jsx)(r.p,{children:"Control which version to use:"}),(0,n.jsx)(t,{file:"feature-flags.go",children:`type Config struct {
  UseV2UserService bool
  UseV2AuthService bool
}

func NewUserService(cfg Config, v1Svc *V1UserService, v2Svc *V2UserService) UserService {
  if cfg.UseV2UserService {
      return v2Svc
  }
  return &BridgedUserService{v1: v1Svc}
}`}),(0,n.jsx)(r.h3,{id:"3-test-both-paths",children:"3. Test Both Paths"}),(0,n.jsx)(t,{file:"test-both.go",children:`func TestUserService(t *testing.T) {
  t.Run("v1 implementation", func(t *testing.T) {
      svc := NewUserService(Config{UseV2UserService: false}, v1Svc, v2Svc)
      // Test v1 path
  })
  
  t.Run("v2 implementation", func(t *testing.T) {
      svc := NewUserService(Config{UseV2UserService: true}, v1Svc, v2Svc)
      // Test v2 path
  })
  
  t.Run("bridge conversion", func(t *testing.T) {
      // Test conversion functions
  })
}`}),(0,n.jsx)(r.h3,{id:"4-document-version-usage",children:"4. Document Version Usage"}),(0,n.jsx)(t,{file:"documentation.go",children:`// Package user provides user management.
//
// This package is in transition from fp-go v1 to v2.
// Current status:
// - GetUser: v2 \u{2705}
// - CreateUser: v1 (migrating)
// - UpdateUser: v1 (migrating)
// - DeleteUser: v1 (not started)
//
// See MIGRATION.md for details.
package user`}),(0,n.jsx)(r.h3,{id:"5-monitor-performance",children:"5. Monitor Performance"}),(0,n.jsx)(t,{file:"benchmark.go",children:`func BenchmarkBridge(b *testing.B) {
  b.Run("v1 direct", func(b *testing.B) {
      for i := 0; i < b.N; i++ {
          _ = v1Function()
      }
  })
  
  b.Run("v2 direct", func(b *testing.B) {
      for i := 0; i < b.N; i++ {
          _ = v2Function()
      }
  })
  
  b.Run("v1 via bridge", func(b *testing.B) {
      for i := 0; i < b.N; i++ {
          _ = IOResultToIOEither(v2Function())
      }
  })
}`})]}),"\n",(0,n.jsxs)(a,{id:"common-pitfalls",number:"06",title:"Common",titleAccent:"pitfalls.",children:[(0,n.jsx)(r.h3,{id:"pitfall-1-nested-conversions",children:"Pitfall 1: Nested Conversions"}),(0,n.jsxs)(i,{children:[(0,n.jsx)(o,{kind:"bad",children:(0,n.jsx)(t,{file:"nested-conversions.go",children:`// Converting back and forth
v2Result := EitherToResult(v1Either)
v1Either2 := ResultToEither(v2Result)
v2Result2 := EitherToResult(v1Either2)
// Performance overhead!`})}),(0,n.jsx)(o,{kind:"good",children:(0,n.jsx)(t,{file:"boundary-conversion.go",children:`// Convert once at boundaries
func processData(input Data) v2result.Result[Data] {
  // Do all processing in v2
  return v2result.Ok(input)
}

// Convert only when interfacing with v1 code
func legacyAPI(input Data) v1either.Either[error, Data] {
  v2Result := processData(input)
  return ResultToEither(v2Result) // Convert once
}`})})]}),(0,n.jsx)(r.h3,{id:"pitfall-2-forgetting-error-context",children:"Pitfall 2: Forgetting Error Context"}),(0,n.jsxs)(i,{children:[(0,n.jsx)(o,{kind:"bad",children:(0,n.jsx)(t,{file:"lost-error.go",children:`func ResultToEither[A any](r v2result.Result[A]) v1either.Either[error, A] {
  if r.IsOk() {
      return v1either.Right[error](r.GetOrElse(func() A { var zero A; return zero }))
  }
  // Lost the actual error!
  return v1either.Left[A](errors.New("error"))
}`})}),(0,n.jsx)(o,{kind:"good",children:(0,n.jsx)(t,{file:"preserve-error.go",children:`func ResultToEither[A any](r v2result.Result[A]) v1either.Either[error, A] {
  return r.Fold(
      func(err error) v1either.Either[error, A] {
          return v1either.Left[A](err) // Preserve error
      },
      func(val A) v1either.Either[error, A] {
          return v1either.Right[error](val)
      },
  )
}`})})]}),(0,n.jsx)(r.h3,{id:"pitfall-3-type-inference-issues",children:"Pitfall 3: Type Inference Issues"}),(0,n.jsxs)(i,{children:[(0,n.jsx)(o,{kind:"bad",children:(0,n.jsx)(t,{file:"inference-fail.go",children:`// Compiler can't infer types
result := EitherToResult(v1Either)
// Error: cannot infer A`})}),(0,n.jsx)(o,{kind:"good",children:(0,n.jsx)(t,{file:"explicit-types.go",children:`// Specify type explicitly
result := EitherToResult[User](v1Either)

// Or use type annotation
var result v2result.Result[User] = EitherToResult(v1Either)`})})]})]})]})}function c(e={}){let{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(v,{...e})}):v(e)}function d(e,r){throw Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},8453(e,r,t){t.d(r,{R:()=>o,x:()=>l});var i=t(6540);let n={},s=i.createContext(n);function o(e){let r=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),i.createElement(s.Provider,{value:r},e.children)}}}]);
"use strict";(self.webpackChunkfp_go_docs=self.webpackChunkfp_go_docs||[]).push([["4075"],{110(e,r,i){i.r(r),i.d(r,{metadata:()=>s,default:()=>p,frontMatter:()=>o,contentTitle:()=>l,toc:()=>c,assets:()=>a});var s=JSON.parse('{"id":"faq","title":"Frequently Asked Questions","description":"Common questions about fp-go \u2014 versions, performance, error handling, patterns, migration, and contributing.","source":"@site/docs/faq.md","sourceDirName":".","slug":"/faq","permalink":"/fp-go/docs/faq","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"sidebar_position":5,"title":"Frequently Asked Questions","hide_title":true,"description":"Common questions about fp-go \u2014 versions, performance, error handling, patterns, migration, and contributing."},"sidebar":"tutorialSidebar","previous":{"title":"The Zen of Go","permalink":"/fp-go/docs/concepts/zen-of-go"},"next":{"title":"Glossary","permalink":"/fp-go/docs/glossary"}}'),t=i(4848),n=i(8453);let o={sidebar_position:5,title:"Frequently Asked Questions",hide_title:!0,description:"Common questions about fp-go \u2014 versions, performance, error handling, patterns, migration, and contributing."},l,a={},c=[];function d(e){let r={p:"p",...(0,n.R)(),...e.components},{ApiTable:i,Bench:s,Callout:o,CodeCard:l,Compare:a,CompareCol:c,MetaPill:d,PageHeader:p,Section:u}=r;return i||h("ApiTable",!0),s||h("Bench",!0),o||h("Callout",!0),l||h("CodeCard",!0),a||h("Compare",!0),c||h("CompareCol",!0),d||h("MetaPill",!0),p||h("PageHeader",!0),u||h("Section",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(p,{eyebrow:"Reference \xb7 FAQ",title:"Frequently asked",titleAccent:"questions.",lede:"Common questions about fp-go, functional programming in Go, and when to use these patterns.",meta:[{label:"// Version",value:(0,t.jsxs)(t.Fragment,{children:["v2.2.82 ",(0,t.jsx)(d,{children:"LATEST"})]})},{label:"// Updated",value:"today"},{label:"// Reading time",value:"10 min \xb7 9 sections"}]}),"\n",(0,t.jsxs)(u,{id:"getting-started",number:"01",title:"Getting",titleAccent:"started.",children:[(0,t.jsxs)(o,{title:"What is fp-go?",children:[(0,t.jsx)(r.p,{children:"fp-go is a comprehensive functional programming library for Go providing monadic types (Result, Either, Option, IO, Reader, \u2026) and utilities for composing operations, handling errors, and managing side effects in a type-safe, functional way."}),(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:"Type-safe error handling with Result/Either"}),(0,t.jsx)("li",{children:"Automatic error propagation through pipelines"}),(0,t.jsx)("li",{children:"IO monad for managing side effects"}),(0,t.jsx)("li",{children:"Reader monad for dependency injection"}),(0,t.jsx)("li",{children:"Comprehensive collection operations"}),(0,t.jsx)("li",{children:"Full composition utilities (Pipe, Flow, Compose)"})]})]}),(0,t.jsxs)(o,{title:"Do I need to know FP to use fp-go?",children:[(0,t.jsxs)("p",{children:[(0,t.jsx)("strong",{children:"Short answer:"})," not initially, but learning FP concepts will help you use it effectively."]}),(0,t.jsx)("p",{children:"Start with Result/Either for error handling. Learn Pipe for composition. Gradually explore Map, Chain, and the rest."}),(0,t.jsxs)("p",{children:["Resources: ",(0,t.jsx)("a",{href:"./quickstart",children:"5-Minute Quickstart"}),", ",(0,t.jsx)("a",{href:"./concepts",children:"Core Concepts"}),", ",(0,t.jsx)("a",{href:"./concepts/pure-functions",children:"Pure Functions"}),", ",(0,t.jsx)("a",{href:"./concepts/monads",children:"Monads Explained"}),"."]})]}),(0,t.jsxs)(o,{title:"Which version: v1 or v2?",children:[(0,t.jsxs)(a,{children:[(0,t.jsxs)(c,{kind:"good",title:"Use v2",pill:"recommended",children:[(0,t.jsx)("p",{children:"You're on Go 1.24+."}),(0,t.jsx)("p",{children:"Starting a new project."}),(0,t.jsx)("p",{children:"Want latest features (Result, Effect, idiomatic packages)."}),(0,t.jsx)("p",{children:"Want better type inference."})]}),(0,t.jsxs)(c,{kind:"bad",title:"Use v1",pill:"legacy",children:[(0,t.jsx)("p",{children:"Stuck on Go 1.18\u20131.23."}),(0,t.jsx)("p",{children:"Have existing v1 codebase."}),(0,t.jsx)("p",{children:"Need Writer monad (v1 only)."})]})]}),(0,t.jsxs)("p",{children:[(0,t.jsx)("strong",{children:"Recommendation:"})," use v2 for all new projects. See the ",(0,t.jsx)("a",{href:"./migration/v1-to-v2",children:"migration guide"})," for upgrading."]})]}),(0,t.jsx)(o,{type:"success",title:"Is fp-go production-ready?",children:(0,t.jsx)(r.p,{children:"Yes. fp-go is used in production at IBM (creator and maintainer) and other companies. v2 is stable, actively maintained, and recommended. v1 is stable and in maintenance mode."})})]}),"\n",(0,t.jsxs)(u,{id:"performance",number:"02",title:"Performance",children:[(0,t.jsxs)(o,{title:"What's the performance impact of fp-go?",children:[(0,t.jsxs)("p",{children:[(0,t.jsx)("strong",{children:"Standard packages:"})," small overhead from function calls. Typically 5\u201315% slower than hand-written code. Negligible for most applications. Worth it for type safety and maintainability."]}),(0,t.jsxs)("p",{children:[(0,t.jsx)("strong",{children:"Idiomatic packages (v2 only):"})," 2\u201332\xd7 faster than standard packages. Near-native performance. Use native Go tuples instead of generic types. Recommended for performance-critical code."]})]}),(0,t.jsx)(s,{title:"Relative cost",command:"go test -bench=. -benchmem",rows:[{label:"Filter \u2014 stdlib",bar:.86,barKind:"win",nsOp:"1.00x",bOp:"\u2014",delta:"baseline"},{label:"Filter \u2014 fp-go (idiomatic)",bar:.89,barKind:"win",nsOp:"1.03x",bOp:"\u2014",delta:"+3%",winner:!0},{label:"Filter \u2014 fp-go (standard)",bar:.98,barKind:"lose",nsOp:"1.14x",bOp:"\u2014",delta:"+14%",deltaKind:"bad"},{label:"Map \u2014 fp-go (idiomatic)",bar:.88,barKind:"win",nsOp:"1.02x",bOp:"\u2014",delta:"+2%"},{label:"Map \u2014 fp-go (standard)",bar:.96,barKind:"lose",nsOp:"1.12x",bOp:"\u2014",delta:"+12%",deltaKind:"bad"},{label:"Reduce \u2014 fp-go (idiomatic)",bar:.9,barKind:"win",nsOp:"1.04x",bOp:"\u2014",delta:"+4%"},{label:"Reduce \u2014 fp-go (standard)",bar:.99,barKind:"lose",nsOp:"1.15x",bOp:"\u2014",delta:"+15%",deltaKind:"bad"}]}),(0,t.jsx)(o,{type:"success",title:"Bottom line.",children:(0,t.jsx)(r.p,{children:"Fast enough for 99% of use cases. Use idiomatic packages for hot paths."})}),(0,t.jsxs)(o,{title:"When should I use idiomatic packages?",children:[(0,t.jsxs)(a,{children:[(0,t.jsxs)(c,{kind:"good",title:"Idiomatic",pill:"fast path",children:[(0,t.jsx)("p",{children:"Performance is critical."}),(0,t.jsx)("p",{children:"Processing large datasets."}),(0,t.jsx)("p",{children:"In tight loops."}),(0,t.jsx)("p",{children:"Hot code paths."})]}),(0,t.jsxs)(c,{kind:"bad",title:"Standard",pill:"default",children:[(0,t.jsx)("p",{children:"Type safety matters most."}),(0,t.jsx)("p",{children:"Performance is adequate."}),(0,t.jsx)("p",{children:"Code clarity matters most."}),(0,t.jsx)("p",{children:"Not performance-critical."})]})]}),(0,t.jsx)(l,{file:"example.go",children:`// Standard - type-safe, slightly slower
result := array.Map(func(x int) int { return x * 2 })(data)

// Idiomatic - near-native speed
result := idiomatic.Map(data, func(x int) int { return x * 2 })`}),(0,t.jsxs)("p",{children:["See the ",(0,t.jsx)("a",{href:"./advanced/performance",children:"performance guide"})," for details."]})]}),(0,t.jsx)(o,{title:"Does fp-go allocate a lot of memory?",children:(0,t.jsx)(r.p,{children:"No more than idiomatic Go. Result/Either/Option are single allocations per value. Pipelines have intermediate allocations (same as manual code). Idiomatic packages have minimal allocations. For memory-efficient patterns: use iterators for lazy evaluation, use idiomatic packages for large datasets, avoid unnecessary intermediate collections."})})]}),"\n",(0,t.jsxs)(u,{id:"error-handling",number:"03",title:"Error",titleAccent:"handling.",children:[(0,t.jsxs)(o,{title:"Should I use Result or Either?",children:[(0,t.jsxs)(a,{children:[(0,t.jsxs)(c,{kind:"good",title:"Use Result (v2)",pill:"recommended",children:[(0,t.jsx)("p",{children:"For error handling."}),(0,t.jsxs)("p",{children:["Error type is always ",(0,t.jsx)("code",{children:"error"}),"."]}),(0,t.jsx)("p",{children:"Simpler API, more idiomatic for Go."})]}),(0,t.jsxs)(c,{kind:"bad",title:"Use Either",pill:"when needed",children:[(0,t.jsx)("p",{children:"You need non-error Left values."}),(0,t.jsx)("p",{children:"Sum types beyond error handling."}),(0,t.jsx)("p",{children:"Porting from other FP languages."})]})]}),(0,t.jsx)(l,{file:"example.go",children:`// Result - recommended for errors
func divide(a, b int) result.Result[int] {
  if b == 0 {
      return result.Err[int](errors.New("division by zero"))
  }
  return result.Ok(a / b)
}

// Either - for generic sum types
func parseValue(s string) either.Either[ParseError, Value] {
  // Left can be any type, not just error
}`})]}),(0,t.jsxs)(o,{title:"How do I handle multiple errors?",children:[(0,t.jsx)("p",{children:(0,t.jsx)("strong",{children:"Option 1: Stop at first error (default)."})}),(0,t.jsx)(l,{file:"option1.go",children:`result := function.Pipe3(
  step1(),
  result.Chain(step2),
  result.Chain(step3),
)
// Stops at first error`}),(0,t.jsx)("p",{children:(0,t.jsx)("strong",{children:"Option 2: Accumulate errors."})}),(0,t.jsx)(l,{file:"option2.go",children:`results := array.TraverseResult(validate)(items)
// Returns Result[[]Item] - all or nothing

// For accumulating all errors, use Validation applicative
// (Advanced pattern - see recipes)`}),(0,t.jsx)("p",{children:(0,t.jsx)("strong",{children:"Option 3: Collect errors manually."})}),(0,t.jsx)(l,{file:"option3.go",children:`var errors []error
for _, item := range items {
  if err := validate(item); err != nil {
      errors = append(errors, err)
  }
}`})]}),(0,t.jsxs)(o,{title:"Can I convert between Result and (value, error)?",children:[(0,t.jsx)("p",{children:"Yes \u2014 use the conversion helpers."}),(0,t.jsx)(l,{file:"interop.go",children:`// From (value, error) to Result
func fetchUser(id string) result.Result[User] {
  user, err := db.Query(id)
  return result.FromGoError(user, err)
}

// From Result to (value, error)
func legacyAPI() (User, error) {
  result := fetchUser("123")
  return result.ToGoError()
}`})]})]}),"\n",(0,t.jsxs)(u,{id:"patterns",number:"04",title:"Usage",titleAccent:"patterns.",children:[(0,t.jsxs)(o,{title:"When should I use fp-go vs. idiomatic Go?",children:[(0,t.jsxs)(a,{children:[(0,t.jsxs)(c,{kind:"good",title:"Use fp-go for",pill:"fits",children:[(0,t.jsx)("p",{children:"Complex error handling logic."}),(0,t.jsx)("p",{children:"Data transformation pipelines."}),(0,t.jsx)("p",{children:"Composable business logic."}),(0,t.jsx)("p",{children:"Side effect management."}),(0,t.jsx)("p",{children:"Dependency injection patterns."})]}),(0,t.jsxs)(c,{kind:"bad",title:"Use idiomatic Go for",pill:"fits",children:[(0,t.jsx)("p",{children:"Simple CRUD operations."}),(0,t.jsx)("p",{children:"Straightforward logic."}),(0,t.jsx)("p",{children:"Performance-critical hot paths."}),(0,t.jsx)("p",{children:"When team is unfamiliar with FP."})]})]}),(0,t.jsx)(l,{file:"fp-go-example.go",children:`// Complex pipeline with error handling
func processOrder(order Order) result.Result[Receipt] {
  return function.Pipe5(
      validateOrder(order),
      result.Chain(checkInventory),
      result.Chain(calculatePrice),
      result.Chain(applyDiscounts),
      result.Chain(generateReceipt),
  )
}`}),(0,t.jsx)(l,{file:"idiomatic-example.go",children:`// Simple database query
func getUser(id string) (*User, error) {
  return db.QueryUser(id)
}`})]}),(0,t.jsxs)(o,{type:"success",title:"Can I mix fp-go with idiomatic Go?",children:[(0,t.jsx)("p",{children:"Yes \u2014 they work together seamlessly."}),(0,t.jsx)(l,{file:"mix.go",children:`// Idiomatic Go function
func fetchFromDB(id string) (*User, error) {
  return db.Query(id)
}

// Wrap in Result for fp-go pipeline
func getUser(id string) result.Result[*User] {
  user, err := fetchFromDB(id)
  return result.FromGoError(user, err)
}

// Use in pipeline
result := function.Pipe2(
  getUser("123"),
  result.Map(enrichUser),
  result.Chain(validateUser),
)`})]}),(0,t.jsxs)(o,{title:"How do I handle side effects?",children:[(0,t.jsx)("p",{children:"Use IO types."}),(0,t.jsx)(l,{file:"io.go",children:`// Pure function returning IO
func readFile(path string) io.IO[[]byte] {
  return func() []byte {
      data, _ := os.ReadFile(path)
      return data
  }
}

// Compose IO operations
program := function.Pipe2(
  readFile("config.json"),
  io.Map(parseConfig),
  io.Map(validateConfig),
)

// Execute when ready
config := program() // Side effect happens here`}),(0,t.jsx)("p",{children:"Use IOResult when the effect can fail:"}),(0,t.jsx)(l,{file:"ioresult.go",children:`func readFile(path string) ioresult.IOResult[[]byte] {
  return func() result.Result[[]byte] {
      data, err := os.ReadFile(path)
      return result.FromGoError(data, err)
  }
}`}),(0,t.jsxs)("p",{children:["See ",(0,t.jsx)("a",{href:"./concepts/effects-and-io",children:"Effects and IO"}),"."]})]})]}),"\n",(0,t.jsxs)(u,{id:"learning",number:"05",title:"Learning &",titleAccent:"adoption.",children:[(0,t.jsx)(i,{columns:["Phase","You learn","Difficulty"],rows:[{symbol:"Week 1",signature:"Result/Either, Pipe, Map",description:"Low\u2013Medium."},{symbol:"Week 2\u20134",signature:"Chain (FlatMap), IO, Reader",description:"Medium."},{symbol:"Month 2+",signature:"All monadic types, monad laws, optics",description:"Medium\u2013High."}]}),(0,t.jsxs)(o,{title:"How do I convince my team to use fp-go?",children:[(0,t.jsxs)("ol",{children:[(0,t.jsx)("li",{children:"Use for new features only."}),(0,t.jsx)("li",{children:"Show concrete benefits (fewer bugs, easier testing)."}),(0,t.jsx)("li",{children:"Provide training and examples."}),(0,t.jsx)("li",{children:"Let the team see the value."})]}),(0,t.jsx)("p",{children:"Address concerns: show benchmarks for performance; provide training for the learning curve; start with simple patterns for complexity; do gradual migration for adoption."}),(0,t.jsx)("p",{children:"Success metrics: reduced bug count, faster development, easier code reviews, better test coverage."})]}),(0,t.jsxs)(o,{title:"Are there good tutorials or courses?",children:[(0,t.jsxs)("p",{children:[(0,t.jsx)("strong",{children:"Official:"})," ",(0,t.jsx)("a",{href:"./quickstart",children:"Quickstart"}),", ",(0,t.jsx)("a",{href:"./concepts",children:"Core Concepts"}),", ",(0,t.jsx)("a",{href:"./recipes/error-handling",children:"Recipes"}),", ",(0,t.jsx)("a",{href:"https://pkg.go.dev/github.com/IBM/fp-go/v2",children:"API docs"}),"."]}),(0,t.jsxs)("p",{children:[(0,t.jsx)("strong",{children:"Learning path:"})," Read ",(0,t.jsx)("a",{href:"./why-fp-go",children:"Why fp-go?"})," \u2192 Complete ",(0,t.jsx)("a",{href:"./quickstart",children:"Quickstart"})," \u2192 Study ",(0,t.jsx)("a",{href:"./concepts/pure-functions",children:"Pure Functions"})," \u2192 Learn ",(0,t.jsx)("a",{href:"./concepts/monads",children:"Monads"})," \u2192 Practice with ",(0,t.jsx)("a",{href:"./recipes/error-handling",children:"Recipes"}),"."]})]})]}),"\n",(0,t.jsxs)(u,{id:"comparison",number:"06",title:"Comparison",children:[(0,t.jsxs)(o,{title:"How does fp-go compare to samber/lo?",children:[(0,t.jsxs)(a,{children:[(0,t.jsxs)(c,{kind:"bad",title:"samber/lo",pill:"utility",children:[(0,t.jsx)("p",{children:"Simple collection operations."}),(0,t.jsx)("p",{children:"Low learning curve."}),(0,t.jsx)("p",{children:"Excellent performance."}),(0,t.jsx)("p",{children:"No monadic types, no error handling."})]}),(0,t.jsxs)(c,{kind:"good",title:"fp-go",pill:"FP toolkit",children:[(0,t.jsx)("p",{children:"Full FP toolkit."}),(0,t.jsx)("p",{children:"Built-in error handling."}),(0,t.jsx)("p",{children:"Monadic composition."}),(0,t.jsx)("p",{children:"Steeper learning curve; idiomatic packages for speed."})]})]}),(0,t.jsx)(l,{file:"both.go",children:`// Use lo for simple operations
filtered := lo.Filter(items, predicate)

// Use fp-go for error handling
result := result.TraverseArray(processWithErrors)(filtered)`}),(0,t.jsxs)("p",{children:["See the ",(0,t.jsx)("a",{href:"./comparison",children:"comparison guide"}),"."]})]}),(0,t.jsx)(o,{title:"Is fp-go similar to fp-ts (TypeScript)?",children:(0,t.jsx)("p",{children:"Yes \u2014 fp-go is heavily inspired by fp-ts. Same monadic types, similar API design, same composition patterns, same concepts. Main differences: Go's type system limits (no HKT), different syntax, performance characteristics, ecosystem."})})]}),"\n",(0,t.jsxs)(u,{id:"troubleshooting",number:"07",title:"Troubleshooting",children:[(0,t.jsxs)(o,{type:"warn",title:"Why am I getting type inference errors?",children:[(0,t.jsx)("p",{children:(0,t.jsx)("strong",{children:"Common causes:"})}),(0,t.jsx)("p",{children:(0,t.jsx)("strong",{children:"1. Type parameters in wrong order."})}),(0,t.jsx)(l,{file:"case1.go",children:`// Wrong - B cannot be inferred
result.Map(func(x int) string { return fmt.Sprintf("%d", x) })

// Right - specify B explicitly
result.Map[string](func(x int) string { return fmt.Sprintf("%d", x) })`}),(0,t.jsx)("p",{children:(0,t.jsx)("strong",{children:"2. Missing type parameters."})}),(0,t.jsx)(l,{file:"case2.go",children:`// Wrong
return result.Err(errors.New("error"))

// Right
return result.Err[int](errors.New("error"))`}),(0,t.jsx)("p",{children:(0,t.jsx)("strong",{children:"3. Ambiguous types."})}),(0,t.jsx)(l,{file:"case3.go",children:`// Wrong - compiler can't infer
result := result.Ok(nil)

// Right - specify type
result := result.Ok[*User](nil)`})]}),(0,t.jsxs)(o,{title:"How do I debug pipelines?",children:[(0,t.jsx)("p",{children:"Use intermediate logging:"}),(0,t.jsx)(l,{file:"debug.go",children:`result := function.Pipe3(
  step1(),
  result.Map(func(x T) T {
      fmt.Printf("After step1: %+v\\n", x)
      return x
  }),
  result.Chain(step2),
  result.Map(func(x T) T {
      fmt.Printf("After step2: %+v\\n", x)
      return x
  }),
)`}),(0,t.jsx)("p",{children:"Use Fold to inspect:"}),(0,t.jsx)(l,{file:"fold.go",children:`result.Fold(
  func(err error) {
      fmt.Printf("Error: %v\\n", err)
  },
  func(val T) {
      fmt.Printf("Success: %+v\\n", val)
  },
)`}),(0,t.jsx)("p",{children:"Use the logging package:"}),(0,t.jsx)(l,{file:"logging.go",children:`import "github.com/IBM/fp-go/v2/logging"

result := logging.WithLogging(
  "operation",
  func() result.Result[T] {
      return operation()
  },
)`})]})]}),"\n",(0,t.jsxs)(u,{id:"migration",number:"08",title:"Migration",children:[(0,t.jsxs)(o,{title:"How do I migrate from v1 to v2?",children:[(0,t.jsx)("p",{children:(0,t.jsx)("strong",{children:"5 breaking changes:"})}),(0,t.jsxs)("ol",{children:[(0,t.jsxs)("li",{children:[(0,t.jsx)("strong",{children:"Generic type aliases"})," \u2014 ",(0,t.jsx)("code",{children:"type X = Y"})," instead of ",(0,t.jsx)("code",{children:"type X Y"})]}),(0,t.jsxs)("li",{children:[(0,t.jsx)("strong",{children:"Type parameter reordering"})," \u2014 non-inferrable params first"]}),(0,t.jsxs)("li",{children:[(0,t.jsx)("strong",{children:"Pair operates on second"})," \u2014 v1 was first, v2 is second"]}),(0,t.jsxs)("li",{children:[(0,t.jsx)("strong",{children:"Compose is right-to-left"})," \u2014 mathematical composition"]}),(0,t.jsxs)("li",{children:[(0,t.jsxs)("strong",{children:["No ",(0,t.jsx)("code",{children:"generic/"})," subpackages"]})," \u2014 removed"]})]}),(0,t.jsxs)("p",{children:[(0,t.jsx)("strong",{children:"Steps:"})," update imports \u2192 fix type-parameter order \u2192 update Pair usage \u2192 update Compose usage \u2192 remove ",(0,t.jsx)("code",{children:"generic/"})," imports."]}),(0,t.jsxs)("p",{children:["See the ",(0,t.jsx)("a",{href:"./migration/v1-to-v2",children:"complete migration guide"}),"."]})]}),(0,t.jsxs)(o,{type:"success",title:"Can I run v1 and v2 side-by-side?",children:[(0,t.jsx)("p",{children:"Yes \u2014 they can coexist."}),(0,t.jsx)(l,{file:"side-by-side.go",children:`import (
  v1 "github.com/IBM/fp-go/either"
  v2 "github.com/IBM/fp-go/v2/result"
)

// Use both in same codebase
v1Result := v1.Right[error](42)
v2Result := v2.Ok(42)`}),(0,t.jsxs)("p",{children:["See ",(0,t.jsx)("a",{href:"./migration/interop",children:"Interop during migration"}),"."]})]})]}),"\n",(0,t.jsxs)(u,{id:"contributing",number:"09",title:"Contributing",children:[(0,t.jsxs)(o,{type:"success",title:"Ways to contribute.",children:[(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:"Report bugs"}),(0,t.jsx)("li",{children:"Suggest features"}),(0,t.jsx)("li",{children:"Improve documentation"}),(0,t.jsx)("li",{children:"Submit pull requests"}),(0,t.jsx)("li",{children:"Help in discussions"}),(0,t.jsx)("li",{children:"Star the repository"})]}),(0,t.jsxs)("p",{children:["Read the ",(0,t.jsx)("a",{href:"https://github.com/IBM/fp-go/blob/main/CONTRIBUTING.md",children:"contributing guide"}),"; check the ",(0,t.jsx)("a",{href:"https://github.com/IBM/fp-go/labels/good%20first%20issue",children:"good first issues"}),"; join ",(0,t.jsx)("a",{href:"https://github.com/IBM/fp-go/discussions",children:"GitHub Discussions"}),"."]})]}),(0,t.jsx)(o,{title:"Where can I get help?",children:(0,t.jsxs)("ul",{children:[(0,t.jsxs)("li",{children:[(0,t.jsx)("a",{href:"https://github.com/IBM/fp-go/discussions",children:"GitHub Discussions"})," \u2014 ask questions"]}),(0,t.jsxs)("li",{children:[(0,t.jsx)("a",{href:"https://github.com/IBM/fp-go/issues",children:"GitHub Issues"})," \u2014 report bugs"]}),(0,t.jsxs)("li",{children:[(0,t.jsx)("a",{href:"./intro",children:"Documentation"})," \u2014 comprehensive guides"]}),(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:"https://pkg.go.dev/github.com/IBM/fp-go/v2",children:"API reference"})}),(0,t.jsxs)("li",{children:[(0,t.jsx)("a",{href:"./recipes/error-handling",children:"Recipes"})," \u2014 practical examples"]})]})})]})]})}function p(e={}){let{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}function h(e,r){throw Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},8453(e,r,i){i.d(r,{R:()=>o,x:()=>l});var s=i(6540);let t={},n=s.createContext(t);function o(e){let r=s.useContext(n);return s.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(n.Provider,{value:r},e.children)}}}]);
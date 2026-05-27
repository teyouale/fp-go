"use strict";(self.webpackChunkfp_go_docs=self.webpackChunkfp_go_docs||[]).push([["6510"],{3197(e,r,i){i.r(r),i.d(r,{metadata:()=>t,default:()=>p,frontMatter:()=>l,contentTitle:()=>c,toc:()=>h,assets:()=>d});var t=JSON.parse('{"id":"migration/v1-to-v2","title":"v1 to v2 Migration","description":"Complete step-by-step guide for migrating from fp-go v1 to v2, covering all breaking changes with detailed examples and solutions.","source":"@site/docs/migration/v1-to-v2.md","sourceDirName":"migration","slug":"/migration/v1-to-v2","permalink":"/fp-go/docs/migration/v1-to-v2","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":8,"frontMatter":{"sidebar_position":8,"title":"v1 to v2 Migration","hide_title":true,"description":"Complete step-by-step guide for migrating from fp-go v1 to v2, covering all breaking changes with detailed examples and solutions."},"sidebar":"tutorialSidebar","previous":{"title":"Migration Guide","permalink":"/fp-go/docs/migration/"},"next":{"title":"v1 and v2 Interop","permalink":"/fp-go/docs/migration/interop"}}'),n=i(4848),s=i(8453),o=i(773),a=i(7250);let l={sidebar_position:8,title:"v1 to v2 Migration",hide_title:!0,description:"Complete step-by-step guide for migrating from fp-go v1 to v2, covering all breaking changes with detailed examples and solutions."},c,d={},h=[{value:"1. Upgrade Go Version",id:"1-upgrade-go-version",level:3},{value:"2. Backup Your Code",id:"2-backup-your-code",level:3},{value:"3. Review Current Usage",id:"3-review-current-usage",level:3},{value:"Add v2 Dependency",id:"add-v2-dependency",level:3},{value:"Remove v1 (Optional)",id:"remove-v1-optional",level:3},{value:"Automated Approach (Recommended)",id:"automated-approach-recommended",level:3},{value:"Manual Approach",id:"manual-approach",level:3},{value:"Gradual Migration (v1 + v2)",id:"gradual-migration-v1--v2",level:3},{value:"Breaking Change 1: Generic Type Aliases",id:"breaking-change-1-generic-type-aliases",level:3},{value:"Breaking Change 2: Type Parameter Reordering",id:"breaking-change-2-type-parameter-reordering",level:3},{value:"Breaking Change 3: Pair Operates on Second Element",id:"breaking-change-3-pair-operates-on-second-element",level:3},{value:"Breaking Change 4: Compose is Right-to-Left",id:"breaking-change-4-compose-is-right-to-left",level:3},{value:"Breaking Change 5: No generic/ Subpackages",id:"breaking-change-5-no-generic-subpackages",level:3},{value:"Use Result Instead of Either",id:"use-result-instead-of-either",level:3},{value:"Use IOResult Instead of IOEither",id:"use-ioresult-instead-of-ioeither",level:3},{value:"Use Idiomatic Packages",id:"use-idiomatic-packages",level:3},{value:"Unit Tests",id:"unit-tests",level:3},{value:"Integration Tests",id:"integration-tests",level:3},{value:"Performance Tests",id:"performance-tests",level:3},{value:"Issue 1: Type Inference Fails",id:"issue-1-type-inference-fails",level:3},{value:"Issue 2: Pair Behavior Changed",id:"issue-2-pair-behavior-changed",level:3},{value:"Issue 3: Compose Order Reversed",id:"issue-3-compose-order-reversed",level:3},{value:"Issue 4: Generic Import Not Found",id:"issue-4-generic-import-not-found",level:3},{value:"Issue 5: Performance Regression",id:"issue-5-performance-regression",level:3}];function u(e){let r={code:"code",em:"em",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components},{Callout:i,Checklist:t,ChecklistItem:l,CodeCard:c,Compare:d,CompareCol:h,PageHeader:u,Section:p,TLDR:f,TLDRCard:m}=r;return i||g("Callout",!0),t||g("Checklist",!0),l||g("ChecklistItem",!0),c||g("CodeCard",!0),d||g("Compare",!0),h||g("CompareCol",!0),u||g("PageHeader",!0),p||g("Section",!0),f||g("TLDR",!0),m||g("TLDRCard",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(u,{eyebrow:"Migration \xb7 02 / 03",title:"v1 to v2",titleAccent:"Migration.",lede:"Complete step-by-step guide for migrating from fp-go v1 to v2. Detailed examples, solutions, and testing strategies for each breaking change.",meta:[{label:"// Steps",value:"5 main steps"},{label:"// Time estimate",value:"1-4 weeks"},{label:"// Reading time",value:"20 min \xb7 8 sections"}]}),"\n",(0,n.jsxs)(f,{children:[(0,n.jsx)(m,{label:"// Prerequisites",prose:!0,value:(0,n.jsxs)(n.Fragment,{children:["Go 1.24+, backup code, ",(0,n.jsx)(r.em,{children:"review usage"}),"."]})}),(0,n.jsx)(m,{label:"// Main work",prose:!0,value:(0,n.jsxs)(n.Fragment,{children:["Update imports, fix ",(0,n.jsx)(r.em,{children:"5 breaking changes"}),"."]})}),(0,n.jsx)(m,{label:"// Testing",prose:!0,value:(0,n.jsxs)(n.Fragment,{children:["Unit, integration, ",(0,n.jsx)(r.em,{children:"performance"})," tests."]}),variant:"up"})]}),"\n",(0,n.jsxs)(p,{id:"prerequisites",number:"01",title:"Prerequisites",titleAccent:"checklist.",children:[(0,n.jsx)(r.p,{children:"Before starting migration:"}),(0,n.jsx)(r.h3,{id:"1-upgrade-go-version",children:"1. Upgrade Go Version"}),(0,n.jsx)(c,{file:"check-go.sh",lang:"bash",children:`# Check current version
go version

# Must be 1.24 or higher
# If not, upgrade Go first`}),(0,n.jsx)(i,{type:"warn",children:(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Why:"})," v2 requires Go 1.24+ for generic type alias support."]})}),(0,n.jsx)(r.h3,{id:"2-backup-your-code",children:"2. Backup Your Code"}),(0,n.jsx)(c,{file:"backup.sh",lang:"bash",children:`# Create a migration branch
git checkout -b migrate-to-fp-go-v2

# Or tag current state
git tag pre-fp-go-v2-migration`}),(0,n.jsx)(r.h3,{id:"3-review-current-usage",children:"3. Review Current Usage"}),(0,n.jsx)(c,{file:"review.sh",lang:"bash",children:`# Find all fp-go imports
grep -r "github.com/IBM/fp-go" . --include="*.go"

# Count usages
grep -r "github.com/IBM/fp-go" . --include="*.go" | wc -l`})]}),"\n",(0,n.jsxs)(p,{id:"step-1",number:"02",title:"Step 1: Update",titleAccent:"dependencies.",children:[(0,n.jsx)(r.h3,{id:"add-v2-dependency",children:"Add v2 Dependency"}),(0,n.jsx)(c,{file:"add-v2.sh",lang:"bash",children:`# Add v2 (keeps v1 if already present)
go get github.com/IBM/fp-go/v2

# Update go.mod
go mod tidy`}),(0,n.jsxs)(r.p,{children:["Your ",(0,n.jsx)(r.code,{children:"go.mod"})," should now have:"]}),(0,n.jsx)(c,{file:"go.mod",children:`require (
  github.com/IBM/fp-go v1.x.x        // Optional: keep for gradual migration
  github.com/IBM/fp-go/v2 v2.x.x     // New v2 dependency
)`}),(0,n.jsx)(r.h3,{id:"remove-v1-optional",children:"Remove v1 (Optional)"}),(0,n.jsx)(i,{type:"info",children:(0,n.jsx)(r.p,{children:"Only after full migration is complete."})}),(0,n.jsx)(c,{file:"remove-v1.sh",lang:"bash",children:`# Only after full migration
go get github.com/IBM/fp-go@none
go mod tidy`})]}),"\n",(0,n.jsxs)(p,{id:"step-2",number:"03",title:"Step 2: Update",titleAccent:"imports.",children:[(0,n.jsx)(r.h3,{id:"automated-approach-recommended",children:"Automated Approach (Recommended)"}),(0,n.jsx)(r.p,{children:"Create a script to update imports:"}),(0,n.jsx)(c,{file:"migrate-imports.sh",lang:"bash",children:`#!/bin/bash
# migrate-imports.sh

# Update all .go files
find . -name "*.go" -type f -exec sed -i '' \\
's|github.com/IBM/fp-go/|github.com/IBM/fp-go/v2/|g' {} +

echo "Import paths updated. Run 'go build' to check for issues."`}),(0,n.jsx)(r.p,{children:"Run it:"}),(0,n.jsx)(c,{file:"run-script.sh",lang:"bash",children:`chmod +x migrate-imports.sh
./migrate-imports.sh`}),(0,n.jsx)(r.h3,{id:"manual-approach",children:"Manual Approach"}),(0,n.jsx)(r.p,{children:"Update each import:"}),(0,n.jsxs)(d,{children:[(0,n.jsx)(h,{kind:"bad",children:(0,n.jsx)(c,{file:"v1-imports.go",children:`// Before (v1)
import (
  "github.com/IBM/fp-go/either"
  "github.com/IBM/fp-go/option"
  "github.com/IBM/fp-go/ioeither"
)`})}),(0,n.jsx)(h,{kind:"good",children:(0,n.jsx)(c,{file:"v2-imports.go",children:`// After (v2)
import (
  "github.com/IBM/fp-go/v2/either"
  "github.com/IBM/fp-go/v2/option"
  "github.com/IBM/fp-go/v2/ioeither"
)`})})]}),(0,n.jsx)(r.h3,{id:"gradual-migration-v1--v2",children:"Gradual Migration (v1 + v2)"}),(0,n.jsx)(r.p,{children:"Use import aliases:"}),(0,n.jsx)(c,{file:"aliases.go",children:`import (
  v1either "github.com/IBM/fp-go/either"
  v2either "github.com/IBM/fp-go/v2/either"
  
  v1option "github.com/IBM/fp-go/option"
  v2option "github.com/IBM/fp-go/v2/option"
)`})]}),"\n",(0,n.jsxs)(p,{id:"step-3",number:"04",title:"Step 3: Fix breaking",titleAccent:"changes.",children:[(0,n.jsx)(r.h3,{id:"breaking-change-1-generic-type-aliases",children:"Breaking Change 1: Generic Type Aliases"}),(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"What Changed:"})}),(0,n.jsxs)(d,{children:[(0,n.jsx)(h,{kind:"bad",children:(0,n.jsx)(c,{file:"v1-type-def.go",children:`// v1 - type definition
type IOEither[E, A any] func() E.Either[E, A]`})}),(0,n.jsx)(h,{kind:"good",children:(0,n.jsx)(c,{file:"v2-type-alias.go",children:`// v2 - type alias
type IOEither[E, A any] = func() E.Either[E, A]`})})]}),(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Impact:"})," Mostly internal. Your code likely works without changes."]}),(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Action Required:"})}),(0,n.jsx)(r.p,{children:"If you defined custom types based on fp-go types:"}),(0,n.jsxs)(d,{children:[(0,n.jsx)(h,{kind:"bad",children:(0,n.jsx)(c,{file:"custom-v1.go",children:`// v1 - Update this
type MyEither[E, A any] either.Either[E, A]`})}),(0,n.jsx)(h,{kind:"good",children:(0,n.jsx)(c,{file:"custom-v2.go",children:`// v2 - To this
type MyEither[E, A any] = either.Either[E, A]`})})]}),(0,n.jsx)(r.h3,{id:"breaking-change-2-type-parameter-reordering",children:"Breaking Change 2: Type Parameter Reordering"}),(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"What Changed:"})}),(0,n.jsx)(r.p,{children:"Type parameters that cannot be inferred are now first."}),(0,n.jsxs)(d,{children:[(0,n.jsx)(h,{kind:"bad",children:(0,n.jsx)(c,{file:"v1-params.go",children:`// v1 signature
func Map[A, B any](f func(A) B) func(Either[error, A]) Either[error, B]`})}),(0,n.jsx)(h,{kind:"good",children:(0,n.jsx)(c,{file:"v2-params.go",children:`// v2 signature
func Map[B, A any](f func(A) B) func(Either[error, A]) Either[error, B]
//       ^  ^
//       |  Inferred from function argument
//       Cannot be inferred, so comes first`})})]}),(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Impact:"})," Most code works without changes due to type inference."]}),(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Migration Pattern:"})}),(0,n.jsxs)(o.A,{groupId:"migration",children:[(0,n.jsx)(a.A,{value:"v1",label:"v1 Code",children:(0,n.jsx)(c,{file:"v1-explicit.go",children:`// v1 - explicit types
result := either.Chain[User, UserProfile](func(u User) either.Either[error, UserProfile] {
  return fetchProfile(u.ID)
})(userEither)`})}),(0,n.jsx)(a.A,{value:"v2-explicit",label:"v2 (Explicit)",children:(0,n.jsx)(c,{file:"v2-explicit.go",children:`// v2 - reordered types
result := either.Chain[UserProfile, User](func(u User) either.Either[error, UserProfile] {
  return fetchProfile(u.ID)
})(userEither)`})}),(0,n.jsx)(a.A,{value:"v2-inferred",label:"v2 (Inferred)",children:(0,n.jsx)(c,{file:"v2-inferred.go",children:`// v2 - inferred (recommended)
result := either.Chain(func(u User) either.Either[error, UserProfile] {
  return fetchProfile(u.ID)
})(userEither)`})})]}),(0,n.jsxs)(i,{type:"success",children:[(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Action Required:"})}),(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"\u2705 Remove explicit type parameters (let Go infer)"}),"\n",(0,n.jsx)(r.li,{children:"\u26A0\uFE0F If you must specify types, reverse the order"}),"\n"]})]}),(0,n.jsx)(r.h3,{id:"breaking-change-3-pair-operates-on-second-element",children:"Breaking Change 3: Pair Operates on Second Element"}),(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"What Changed:"})}),(0,n.jsx)(r.p,{children:"Pair operations now target the second element instead of the first."}),(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Why:"})," Aligns with Haskell and other FP languages."]}),(0,n.jsxs)(d,{children:[(0,n.jsx)(h,{kind:"bad",children:(0,n.jsx)(c,{file:"v1-pair.go",children:`// v1 - operates on FIRST element
pair := pair.MakePair(1, "hello")
mapped := pair.Map(func(x int) int { 
  return x * 2 
})(pair)
// Result: Pair(2, "hello")`})}),(0,n.jsx)(h,{kind:"good",children:(0,n.jsx)(c,{file:"v2-pair.go",children:`// v2 - operates on SECOND element
pair := pair.MakePair(1, "hello")
mapped := pair.Map(func(s string) string { 
  return strings.ToUpper(s) 
})(pair)
// Result: Pair(1, "HELLO")`})})]}),(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Action Required:"})}),(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"\u26A0\uFE0F Review all Pair usage"}),"\n",(0,n.jsx)(r.li,{children:"\u26A0\uFE0F Update Map, Chain, etc. to target second element"}),"\n",(0,n.jsx)(r.li,{children:"\u26A0\uFE0F Or swap pair elements if needed"}),"\n"]}),(0,n.jsx)(r.h3,{id:"breaking-change-4-compose-is-right-to-left",children:"Breaking Change 4: Compose is Right-to-Left"}),(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"What Changed:"})}),(0,n.jsx)(r.p,{children:"Compose now applies functions right-to-left (mathematical composition)."}),(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Why:"})," Aligns with mathematical notation: (f \u2218 g)(x) = f(g(x))"]}),(0,n.jsxs)(o.A,{groupId:"compose",children:[(0,n.jsx)(a.A,{value:"v1",label:"v1 - Left-to-Right",children:(0,n.jsx)(c,{file:"v1-compose.go",children:`composed := function.Compose2(
  func(x int) int { return x + 1 },  // Applied first
  func(x int) int { return x * 2 },  // Applied second
)
result := composed(5) // (5 + 1) * 2 = 12`})}),(0,n.jsx)(a.A,{value:"v2",label:"v2 - Right-to-Left",children:(0,n.jsx)(c,{file:"v2-compose.go",children:`composed := function.Compose2(
  func(x int) int { return x * 2 },  // Applied second
  func(x int) int { return x + 1 },  // Applied first
)
result := composed(5) // (5 + 1) * 2 = 12`})}),(0,n.jsx)(a.A,{value:"flow",label:"Or Use Flow",children:(0,n.jsx)(c,{file:"flow.go",children:`// Flow is left-to-right, unchanged
pipeline := function.Flow2(
  func(x int) int { return x + 1 },  // Applied first
  func(x int) int { return x * 2 },  // Applied second
)
result := pipeline(5) // (5 + 1) * 2 = 12`})})]}),(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Action Required:"})}),(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"\u26A0\uFE0F Reverse function order in Compose calls"}),"\n",(0,n.jsx)(r.li,{children:"\u2705 Or switch to Flow (left-to-right, unchanged)"}),"\n"]}),(0,n.jsx)(r.h3,{id:"breaking-change-5-no-generic-subpackages",children:"Breaking Change 5: No generic/ Subpackages"}),(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"What Changed:"})}),(0,n.jsxs)(r.p,{children:["Removed ",(0,n.jsx)(r.code,{children:"generic/"})," subpackages from all modules."]}),(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Why:"})," Generic type aliases make them unnecessary."]}),(0,n.jsxs)(d,{children:[(0,n.jsx)(h,{kind:"bad",children:(0,n.jsx)(c,{file:"v1-generic.go",children:`// v1 - generic subpackage
import "github.com/IBM/fp-go/ioeither/generic"`})}),(0,n.jsx)(h,{kind:"good",children:(0,n.jsx)(c,{file:"v2-no-generic.go",children:`// v2 - no generic subpackage
import "github.com/IBM/fp-go/v2/ioeither"`})})]}),(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Action Required:"})}),(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["\u26A0\uFE0F Remove ",(0,n.jsx)(r.code,{children:"/generic"})," from import paths"]}),"\n",(0,n.jsx)(r.li,{children:"\u26A0\uFE0F Update function calls if needed"}),"\n"]})]}),"\n",(0,n.jsxs)(p,{id:"step-4",number:"05",title:"Step 4: Adopt v2",titleAccent:"best practices.",children:[(0,n.jsx)(r.h3,{id:"use-result-instead-of-either",children:"Use Result Instead of Either"}),(0,n.jsx)(i,{type:"success",children:(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Recommended:"})," Use Result for error handling in v2."]})}),(0,n.jsxs)(d,{children:[(0,n.jsx)(h,{kind:"bad",children:(0,n.jsx)(c,{file:"v1-either.go",children:`// v1 - Either
func divide(a, b int) either.Either[error, int] {
  if b == 0 {
      return either.Left[int](errors.New("division by zero"))
  }
  return either.Right[error](a / b)
}`})}),(0,n.jsx)(h,{kind:"good",children:(0,n.jsx)(c,{file:"v2-result.go",children:`// v2 - Result (recommended)
func divide(a, b int) result.Result[int] {
  if b == 0 {
      return result.Err[int](errors.New("division by zero"))
  }
  return result.Ok(a / b)
}`})})]}),(0,n.jsx)(r.h3,{id:"use-ioresult-instead-of-ioeither",children:"Use IOResult Instead of IOEither"}),(0,n.jsxs)(d,{children:[(0,n.jsx)(h,{kind:"bad",children:(0,n.jsx)(c,{file:"v1-ioeither.go",children:`// v1 - IOEither
func readFile(path string) ioeither.IOEither[error, []byte] {
  return func() either.Either[error, []byte] {
      data, err := os.ReadFile(path)
      if err != nil {
          return either.Left[[]byte](err)
      }
      return either.Right[error](data)
  }
}`})}),(0,n.jsx)(h,{kind:"good",children:(0,n.jsx)(c,{file:"v2-ioresult.go",children:`// v2 - IOResult (recommended)
func readFile(path string) ioresult.IOResult[[]byte] {
  return func() result.Result[[]byte] {
      data, err := os.ReadFile(path)
      return result.FromGoError(data, err)
  }
}`})})]}),(0,n.jsx)(r.h3,{id:"use-idiomatic-packages",children:"Use Idiomatic Packages"}),(0,n.jsx)(c,{file:"idiomatic.go",children:`// fp-go provides idiomatic (faster) versions
import "github.com/IBM/fp-go/v2/array/idiomatic"

// 2-32x faster for array operations
filtered := idiomatic.Filter(predicate)(array)
mapped := idiomatic.Map(transform)(filtered)`})]}),"\n",(0,n.jsxs)(p,{id:"step-5",number:"06",title:"Step 5: Test",titleAccent:"thoroughly.",children:[(0,n.jsx)(r.h3,{id:"unit-tests",children:"Unit Tests"}),(0,n.jsx)(c,{file:"unit-test.go",children:`func TestMigration(t *testing.T) {
  // Test v2 behavior
  result := divide(10, 2)
  
  assert.True(t, result.IsOk())
  assert.Equal(t, 5, result.GetOrElse(func() int { return 0 }))
  
  // Test error case
  errorResult := divide(10, 0)
  assert.True(t, errorResult.IsErr())
}`}),(0,n.jsx)(r.h3,{id:"integration-tests",children:"Integration Tests"}),(0,n.jsx)(c,{file:"integration-test.go",children:`func TestEndToEnd(t *testing.T) {
  // Test full pipeline with v2
  result := function.Pipe3(
      fetchData(),
      result.Chain(processData),
      result.Chain(saveData),
  )
  
  assert.True(t, result.IsOk())
}`}),(0,n.jsx)(r.h3,{id:"performance-tests",children:"Performance Tests"}),(0,n.jsx)(c,{file:"benchmark.go",children:`func BenchmarkV1(b *testing.B) {
  for i := 0; i < b.N; i++ {
      _ = v1Function()
  }
}

func BenchmarkV2(b *testing.B) {
  for i := 0; i < b.N; i++ {
      _ = v2Function()
  }
}

func BenchmarkV2Idiomatic(b *testing.B) {
  for i := 0; i < b.N; i++ {
      _ = v2IdiomaticFunction()
  }
}`})]}),"\n",(0,n.jsxs)(p,{id:"common-issues",number:"07",title:"Common migration",titleAccent:"issues.",children:[(0,n.jsx)(r.h3,{id:"issue-1-type-inference-fails",children:"Issue 1: Type Inference Fails"}),(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Problem:"})}),(0,n.jsx)(c,{file:"inference-fail.go",children:`// Compiler can't infer types
result := either.Map(transform)(myEither)
// Error: cannot infer type parameters`}),(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Solution:"})}),(0,n.jsx)(c,{file:"inference-fix.go",children:`// Specify types explicitly
result := either.Map[OutputType, InputType](transform)(myEither)

// Or use type annotation
var result either.Either[error, OutputType] = either.Map(transform)(myEither)`}),(0,n.jsx)(r.h3,{id:"issue-2-pair-behavior-changed",children:"Issue 2: Pair Behavior Changed"}),(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Problem:"})}),(0,n.jsx)(c,{file:"pair-problem.go",children:`// v1 code that operated on first element
mapped := pair.Map(func(x int) int { return x * 2 })(myPair)`}),(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Solution:"})}),(0,n.jsx)(c,{file:"pair-fix.go",children:`// v2: Update to operate on second element
mapped := pair.Map(func(s string) string { return strings.ToUpper(s) })(myPair)

// Or swap the pair elements
swapped := pair.Swap(myPair)
mapped := pair.Map(func(x int) int { return x * 2 })(swapped)`}),(0,n.jsx)(r.h3,{id:"issue-3-compose-order-reversed",children:"Issue 3: Compose Order Reversed"}),(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Problem:"})}),(0,n.jsx)(c,{file:"compose-problem.go",children:`// v1 code with left-to-right composition
composed := function.Compose2(step1, step2)`}),(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Solution:"})}),(0,n.jsx)(c,{file:"compose-fix.go",children:`// v2: Reverse order
composed := function.Compose2(step2, step1)

// Or use Flow (unchanged)
pipeline := function.Flow2(step1, step2)`}),(0,n.jsx)(r.h3,{id:"issue-4-generic-import-not-found",children:"Issue 4: Generic Import Not Found"}),(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Problem:"})}),(0,n.jsx)(c,{file:"generic-problem.go",children:`// v1 code with generic subpackage
import "github.com/IBM/fp-go/ioeither/generic"`}),(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Solution:"})}),(0,n.jsx)(c,{file:"generic-fix.go",children:`// v2: Remove /generic
import "github.com/IBM/fp-go/v2/ioeither"`}),(0,n.jsx)(r.h3,{id:"issue-5-performance-regression",children:"Issue 5: Performance Regression"}),(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Problem:"}),"\nPerformance slower after migration."]}),(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Solution:"})}),(0,n.jsx)(c,{file:"performance-fix.go",children:`// Use idiomatic packages for better performance
import "github.com/IBM/fp-go/v2/array/idiomatic"

// 2-32x faster
result := idiomatic.Map(transform)(array)`})]}),"\n",(0,n.jsx)(p,{id:"verification",number:"08",title:"Verification",titleAccent:"checklist.",children:(0,n.jsxs)(t,{children:[(0,n.jsx)(l,{status:"required",children:"All imports updated to v2"}),(0,n.jsx)(l,{status:"required",children:"Breaking changes fixed"}),(0,n.jsx)(l,{status:"required",children:"All tests passing"}),(0,n.jsx)(l,{status:"required",children:"Code compiles without errors"}),(0,n.jsx)(l,{status:"optional",children:"Performance benchmarks run"}),(0,n.jsx)(l,{status:"optional",children:"Documentation updated"}),(0,n.jsx)(l,{status:"optional",children:"Team trained on v2 changes"}),(0,n.jsx)(l,{status:"optional",children:"Rollback plan documented"})]})})]})}function p(e={}){let{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}function g(e,r){throw Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},7250(e,r,i){i.d(r,{A:()=>a});var t=i(4848);i(6540);var n=i(4164),s=i(7663);function o({children:e,className:r,hidden:i}){return(0,t.jsx)("div",{role:"tabpanel",className:(0,n.A)("tabItem_Ymn6",r),hidden:i,children:e})}function a({children:e,className:r,value:i}){let{selectedValue:n,lazy:l}=(0,s.uc)(),c=i===n;return!c&&l?null:(0,t.jsx)(o,{className:r,hidden:!c,children:e})}},773(e,r,i){i.d(r,{A:()=>u});var t=i(4848);i(6540);var n=i(4164),s=i(8287),o=i(7663),a=i(8584),l=i(9863);function c({className:e}){let{selectedValue:r,selectValue:i,tabValues:s,block:l}=(0,o.uc)(),d=[],{blockElementScrollPositionUntilNextRender:h}=(0,a.a_)(),u=e=>{let t=e.currentTarget,n=s[d.indexOf(t)].value;n!==r&&(h(t),i(n))},p=e=>{let r=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{let i=d.indexOf(e.currentTarget)+1;r=d[i]??d[0];break}case"ArrowLeft":{let i=d.indexOf(e.currentTarget)-1;r=d[i]??d[d.length-1]}}r?.focus()};return(0,t.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.A)("tabs",{"tabs--block":l},e),children:s.map(({value:e,label:i,attributes:s})=>(0,t.jsx)("li",{role:"tab",tabIndex:r===e?0:-1,"aria-selected":r===e,ref:e=>{d.push(e)},onKeyDown:p,onClick:u,...s,className:(0,n.A)("tabs__item","tabItem_LNqP",s?.className,{"tabs__item--active":r===e}),children:i??e},e))})}function d({children:e}){return(0,t.jsx)("div",{className:"margin-top--md",children:e})}function h({className:e,children:r}){return(0,t.jsxs)("div",{className:(0,n.A)(s.G.tabs.container,"tabs-container","tabList__CuJ"),children:[(0,t.jsx)(c,{className:e}),(0,t.jsx)(d,{children:r})]})}function u(e){let r=(0,l.A)(),i=(0,o.OC)(e);return(0,t.jsx)(o.O_,{value:i,children:(0,t.jsx)(h,{className:e.className,children:(0,o.vT)(e.children)})},String(r))}},7663(e,r,i){i.d(r,{OC:()=>u,O_:()=>f,uc:()=>g,vT:()=>d});var t=i(4848),n=i(6540),s=i(6347),o=i(9989),a=i(6629),l=i(618),c=i(1367);function d(e){return n.Children.toArray(e).filter(e=>"\n"!==e)}function h({value:e,tabValues:r}){return r.some(r=>r.value===e)}function u(e){let r,{defaultValue:i,queryString:t=!1,groupId:d}=e,u=function(e){let{values:r,children:i}=e;return(0,n.useMemo)(()=>{let e=r??n.Children.toArray(i).flatMap(e=>{if(!e)return[];if((0,n.isValidElement)(e)&&function(e){let{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return[e];let r="string"==typeof e.type?e.type:e.type.name;throw Error(`Docusaurus error: Bad <Tabs> child <${r}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.
If you do not want to pass on a "value" prop to the direct children of <Tabs>, you can also pass an explicit <Tabs values={...}> prop.`)}).map(({props:{value:e,label:r,attributes:i,default:t}})=>({value:e,label:r,attributes:i,default:t})),t=(0,l.XI)(e,(e,r)=>e.value===r.value);if(t.length>0)throw Error(`Docusaurus error: Duplicate values "${t.map(e=>`'${e.value}'`).join(", ")}" found in <Tabs>. Every value needs to be unique.`);return e},[r,i])}(e),[p,g]=(0,n.useState)(()=>(function({defaultValue:e,tabValues:r}){if(0===r.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!h({value:e,tabValues:r}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${r.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}let i=r.find(e=>e.default)??r[0];if(!i)throw Error("Unexpected error: 0 tabValues");return i.value})({defaultValue:i,tabValues:u})),[f,m]=function({queryString:e=!1,groupId:r}){let i=(0,s.W6)(),t=function({queryString:e=!1,groupId:r}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!r)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:e,groupId:r});return[(0,a.aZ)(t),(0,n.useCallback)(e=>{if(!t)return;let r=new URLSearchParams(i.location.search);r.set(t,e),i.replace({...i.location,search:r.toString()})},[t,i])]}({queryString:t,groupId:d}),[x,v]=function({groupId:e}){let r=e?`docusaurus.tab.${e}`:null,[i,t]=(0,c.Dv)(r);return[i,(0,n.useCallback)(e=>{r&&t.set(e)},[r,t])]}({groupId:d}),j=h({value:r=f??x,tabValues:u})?r:null;return(0,o.A)(()=>{j&&g(j)},[j]),{selectedValue:p,selectValue:(0,n.useCallback)(e=>{if(!h({value:e,tabValues:u}))throw Error(`Can't select invalid tab value=${e}`);g(e),m(e),v(e)},[m,v,u]),tabValues:u,lazy:e.lazy??!1,block:e.block??!1}}let p=(0,n.createContext)(null);function g(){let e=n.useContext(p);if(!e)throw Error("useTabsContext() must be used within a Tabs component");return e}function f(e){return(0,t.jsx)(p.Provider,{value:e.value,children:e.children})}},8453(e,r,i){i.d(r,{R:()=>o,x:()=>a});var t=i(6540);let n={},s=t.createContext(n);function o(e){let r=t.useContext(s);return t.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),t.createElement(s.Provider,{value:r},e.children)}}}]);
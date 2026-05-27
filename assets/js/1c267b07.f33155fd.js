"use strict";(self.webpackChunkfp_go_docs=self.webpackChunkfp_go_docs||[]).push([["4996"],{5809(e,t,s){s.r(t),s.d(t,{metadata:()=>r,default:()=>f,frontMatter:()=>a,contentTitle:()=>c,toc:()=>d,assets:()=>u});var r=JSON.parse('{"id":"concepts/composition","title":"Composition","description":"Build complex functionality from simple, reusable functions \u2014 the essence of functional programming.","source":"@site/docs/concepts/composition.md","sourceDirName":"concepts","slug":"/concepts/composition","permalink":"/fp-go/docs/concepts/composition","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":12,"frontMatter":{"sidebar_position":12,"title":"Composition","hide_title":true,"description":"Build complex functionality from simple, reusable functions \u2014 the essence of functional programming."},"sidebar":"tutorialSidebar","previous":{"title":"Monads","permalink":"/fp-go/docs/concepts/monads"},"next":{"title":"Effects and IO","permalink":"/fp-go/docs/concepts/effects-and-io"}}'),i=s(4848),n=s(8453),o=s(773),l=s(7250);let a={sidebar_position:12,title:"Composition",hide_title:!0,description:"Build complex functionality from simple, reusable functions \u2014 the essence of functional programming."},c,u={},d=[{value:"Pattern 1 \u2014 Manual composition",id:"pattern-1--manual-composition",level:3},{value:"Pattern 2 \u2014 Compose (right-to-left)",id:"pattern-2--compose-right-to-left",level:3},{value:"Pattern 3 \u2014 Flow (left-to-right) \u2B50",id:"pattern-3--flow-left-to-right-",level:3},{value:"Pattern 4 \u2014 Pipe (data-first) \u2B50",id:"pattern-4--pipe-data-first-",level:3},{value:"Flow \u2014 recommended",id:"flow--recommended",level:3},{value:"Pipe \u2014 data-first",id:"pipe--data-first",level:3},{value:"Compose \u2014 mathematical",id:"compose--mathematical",level:3},{value:"String processing",id:"string-processing",level:3},{value:"Data transformation",id:"data-transformation",level:3},{value:"API response processing",id:"api-response-processing",level:3},{value:"Chaining operations",id:"chaining-operations",level:3},{value:"Mixing Map and Chain",id:"mixing-map-and-chain",level:3},{value:"With points (arguments)",id:"with-points-arguments",level:3},{value:"Point-free",id:"point-free",level:3},{value:"1 \u2014 Keep functions small",id:"1--keep-functions-small",level:3},{value:"2 \u2014 Use descriptive names",id:"2--use-descriptive-names",level:3},{value:"3 \u2014 Limit pipeline length",id:"3--limit-pipeline-length",level:3},{value:"4 \u2014 Test each function",id:"4--test-each-function",level:3},{value:"5 \u2014 Use type aliases for clarity",id:"5--use-type-aliases-for-clarity",level:3},{value:"Composition overhead",id:"composition-overhead",level:3},{value:"When to optimize",id:"when-to-optimize",level:3}];function p(e){let t={em:"em",h3:"h3",p:"p",strong:"strong",...(0,n.R)(),...e.components},{ApiTable:s,Callout:r,Checklist:a,CodeCard:c,Compare:u,CompareCol:d,PageHeader:p,Section:f,TLDR:h,TLDRCard:g}=t;return s||m("ApiTable",!0),r||m("Callout",!0),a||m("Checklist",!0),c||m("CodeCard",!0),u||m("Compare",!0),d||m("CompareCol",!0),p||m("PageHeader",!0),f||m("Section",!0),h||m("TLDR",!0),g||m("TLDRCard",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(p,{eyebrow:"Concepts \xb7 03 / 06",title:"Composition.",lede:"Combine simple, reusable functions into pipelines. The essence of functional programming, applied to Go.",meta:[{label:"// Difficulty",value:"Beginner \u2192 Intermediate"},{label:"// Reading time",value:"10 min \xb7 9 sections"},{label:"// Prereqs",value:"Pure functions"}]}),"\n",(0,i.jsxs)(h,{children:[(0,i.jsx)(g,{label:"// Tool of choice",prose:!0,value:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.em,{children:"Flow"})," \u2014 left-to-right pipelines."]}),variant:"up"}),(0,i.jsx)(g,{label:"// Building block",prose:!0,value:(0,i.jsxs)(i.Fragment,{children:["Small, ",(0,i.jsx)(t.em,{children:"pure"})," functions."]})}),(0,i.jsx)(g,{label:"// Win",prose:!0,value:(0,i.jsxs)(i.Fragment,{children:["Reusable, ",(0,i.jsx)(t.em,{children:"testable"}),", easy to modify."]})})]}),"\n",(0,i.jsxs)(f,{id:"what",number:"01",title:"What is",titleAccent:"composition?",children:[(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Composition"})," is combining simple functions to create more complex ones. Think of it like LEGO blocks \u2014 each block is simple, blocks connect in standard ways, complex structures emerge from simple pieces."]}),(0,i.jsx)(c,{file:"lego.go",status:"tested",children:`// Simple functions (LEGO blocks)
func double(x int) int { return x * 2 }
func addOne(x int) int { return x + 1 }
func square(x int) int { return x * x }

// Compose them (build something)
result := square(addOne(double(5)))  // ((5*2)+1)^2 = 121`})]}),"\n",(0,i.jsx)(f,{id:"why",number:"02",title:"Why composition",titleAccent:"matters.",children:(0,i.jsxs)(o.A,{groupId:"composition-why",children:[(0,i.jsx)(l.A,{value:"without",label:"Without composition",children:(0,i.jsx)(c,{file:"monolithic.go",children:`// Monolithic function - hard to reuse
func processUserData(data string) string {
  // Parse
  parsed := strings.TrimSpace(data)

  // Validate
  if len(parsed) == 0 {
      return ""
  }

  // Transform
  lower := strings.ToLower(parsed)

  // Format
  return fmt.Sprintf("user_%s", lower)
}

// Can't reuse individual steps
// Hard to test each step
// Hard to modify`})}),(0,i.jsx)(l.A,{value:"with",label:"With composition",children:(0,i.jsx)(c,{file:"composed.go",status:"tested",children:`// Small, reusable functions
func trim(s string) string { return strings.TrimSpace(s) }
func lower(s string) string { return strings.ToLower(s) }
func addPrefix(prefix string) func(string) string {
  return func(s string) string {
      return prefix + s
  }
}

// Compose them
import "github.com/IBM/fp-go/v2/function"

processUserData := function.Flow3(
  trim,
  lower,
  addPrefix("user_"),
)

result := processUserData("  JOHN  ")  // "user_john"

// Each step is reusable
// Each step is testable
// Easy to modify pipeline`})})]})}),"\n",(0,i.jsxs)(f,{id:"patterns",number:"03",title:"Composition",titleAccent:"patterns.",children:[(0,i.jsx)(t.h3,{id:"pattern-1--manual-composition",children:"Pattern 1 \u2014 Manual composition"}),(0,i.jsxs)(o.A,{groupId:"composition",children:[(0,i.jsxs)(l.A,{value:"nested",label:"Nested calls",children:[(0,i.jsx)(c,{file:"nested.go",children:`// Right-to-left (inside-out)
result := square(addOne(double(5)))
//         ^      ^      ^
//         3rd    2nd    1st

// Execution order: double \u{2192} addOne \u{2192} square
// (5*2) = 10
// (10+1) = 11
// (11*11) = 121`}),(0,i.jsxs)(u,{children:[(0,i.jsxs)(d,{kind:"good",title:"Pros",pill:"simple",children:[(0,i.jsx)("p",{children:"No dependencies."}),(0,i.jsx)("p",{children:"Just function calls."})]}),(0,i.jsx)(d,{kind:"bad",title:"Cons",pill:"watch out",children:(0,i.jsx)("p",{children:"Hard to read with many functions."})})]})]}),(0,i.jsxs)(l.A,{value:"intermediate",label:"Intermediate variables",children:[(0,i.jsx)(c,{file:"intermediate.go",children:`// Step by step
step1 := double(5)    // 10
step2 := addOne(step1) // 11
step3 := square(step2) // 121

// Execution order: clear`}),(0,i.jsxs)(u,{children:[(0,i.jsxs)(d,{kind:"good",title:"Pros",pill:"readable",children:[(0,i.jsx)("p",{children:"Easy to debug."}),(0,i.jsx)("p",{children:"Clear order."})]}),(0,i.jsxs)(d,{kind:"bad",title:"Cons",pill:"trade-offs",children:[(0,i.jsx)("p",{children:"Verbose."}),(0,i.jsx)("p",{children:"Temporary variables."})]})]})]})]}),(0,i.jsx)(t.h3,{id:"pattern-2--compose-right-to-left",children:"Pattern 2 \u2014 Compose (right-to-left)"}),(0,i.jsx)(c,{file:"compose.go",status:"tested",children:`import "github.com/IBM/fp-go/v2/function"

// Mathematical composition: (f \u{2218} g)(x) = f(g(x))
composed := function.Compose3(
  square,   // Applied LAST (3rd)
  addOne,   // Applied 2nd
  double,   // Applied FIRST (1st)
)

result := composed(5)  // 121

// Execution: double(5) \u{2192} addOne(10) \u{2192} square(11)`}),(0,i.jsx)(r,{title:"When to reach for Compose.",children:(0,i.jsxs)(t.p,{children:["Mathematical, concise. But right-to-left can confuse Go readers \u2014 prefer ",(0,i.jsx)("strong",{children:"Flow"})," unless you specifically want the mathematical convention."]})}),(0,i.jsx)(t.h3,{id:"pattern-3--flow-left-to-right-",children:"Pattern 3 \u2014 Flow (left-to-right) \u2B50"}),(0,i.jsx)(c,{file:"flow.go",status:"tested",children:`import "github.com/IBM/fp-go/v2/function"

// Pipeline style: data flows left to right
pipeline := function.Flow3(
  double,   // Applied FIRST (1st)
  addOne,   // Applied 2nd
  square,   // Applied LAST (3rd)
)

result := pipeline(5)  // 121

// Execution: double(5) \u{2192} addOne(10) \u{2192} square(11)`}),(0,i.jsx)(r,{type:"success",title:"Recommended.",children:(0,i.jsx)(t.p,{children:"Intuitive, reads like a pipeline. This is the default choice."})}),(0,i.jsx)(t.h3,{id:"pattern-4--pipe-data-first-",children:"Pattern 4 \u2014 Pipe (data-first) \u2B50"}),(0,i.jsx)(c,{file:"pipe.go",status:"tested",children:`import "github.com/IBM/fp-go/v2/function"

// Start with data, pipe through functions
result := function.Pipe3(
  5,        // Start with data
  double,   // 10
  addOne,   // 11
  square,   // 121
)`}),(0,i.jsx)(r,{type:"success",title:"When to use Pipe.",children:(0,i.jsx)(t.p,{children:"Very clear, data-first. Best for one-off processing where you don't need to reuse the pipeline."})})]}),"\n",(0,i.jsxs)(f,{id:"api",number:"04",title:"fp-go composition",titleAccent:"functions.",children:[(0,i.jsx)(t.h3,{id:"flow--recommended",children:"Flow \u2014 recommended"}),(0,i.jsx)(t.p,{children:"Create reusable pipelines."}),(0,i.jsx)(c,{file:"flow-signatures.go",children:`// Flow2 - 2 functions
func Flow2[A, B, C any](
  f func(A) B,
  g func(B) C,
) func(A) C

// Flow3 - 3 functions
func Flow3[A, B, C, D any](
  f func(A) B,
  g func(B) C,
  h func(C) D,
) func(A) D

// Up to Flow9`}),(0,i.jsx)(c,{file:"flow-example.go",status:"tested",children:`// Create pipeline
processNumber := function.Flow4(
  func(x int) int { return x * 2 },      // double
  func(x int) int { return x + 1 },      // add one
  func(x int) int { return x * x },      // square
  func(x int) string { return fmt.Sprintf("Result: %d", x) },
)

// Use it
output := processNumber(5)  // "Result: 121"`}),(0,i.jsx)(t.h3,{id:"pipe--data-first",children:"Pipe \u2014 data-first"}),(0,i.jsx)(t.p,{children:"Process data through a pipeline."}),(0,i.jsx)(c,{file:"pipe-signatures.go",children:`// Pipe2 - data + 2 functions
func Pipe2[A, B, C any](
  a A,
  f func(A) B,
  g func(B) C,
) C

// Pipe3 - data + 3 functions
func Pipe3[A, B, C, D any](
  a A,
  f func(A) B,
  g func(B) C,
  h func(C) D,
) D

// Up to Pipe9`}),(0,i.jsx)(c,{file:"pipe-example.go",status:"tested",children:`result := function.Pipe4(
  "  HELLO WORLD  ",
  strings.TrimSpace,
  strings.ToLower,
  func(s string) string { return strings.ReplaceAll(s, " ", "_") },
  func(s string) string { return "slug_" + s },
)
// "slug_hello_world"`}),(0,i.jsx)(t.h3,{id:"compose--mathematical",children:"Compose \u2014 mathematical"}),(0,i.jsx)(t.p,{children:"Right-to-left composition."}),(0,i.jsx)(c,{file:"compose-signatures.go",children:`// Compose2 - 2 functions (right-to-left)
func Compose2[A, B, C any](
  f func(B) C,  // Applied SECOND
  g func(A) B,  // Applied FIRST
) func(A) C

// Example
composed := function.Compose2(
  square,   // Applied second
  double,   // Applied first
)
result := composed(5)  // square(double(5)) = 100`}),(0,i.jsx)(r,{title:"Reminder.",children:(0,i.jsx)(t.p,{children:"Use Flow instead for better Go readability."})})]}),"\n",(0,i.jsxs)(f,{id:"examples",number:"05",title:"Real-world",titleAccent:"examples.",children:[(0,i.jsx)(t.h3,{id:"string-processing",children:"String processing"}),(0,i.jsxs)(o.A,{groupId:"example",children:[(0,i.jsx)(l.A,{value:"standard",label:"Without fp-go",children:(0,i.jsx)(c,{file:"without.go",children:`func processUsername(input string) string {
  // Step 1: trim
  trimmed := strings.TrimSpace(input)

  // Step 2: lowercase
  lower := strings.ToLower(trimmed)

  // Step 3: remove special chars
  cleaned := regexp.MustCompile(\`[^a-z0-9]\`).ReplaceAllString(lower, "")

  // Step 4: limit length
  if len(cleaned) > 20 {
      cleaned = cleaned[:20]
  }

  return cleaned
}`})}),(0,i.jsx)(l.A,{value:"v2",label:"With fp-go v2",children:(0,i.jsx)(c,{file:"with.go",status:"tested",children:`import "github.com/IBM/fp-go/v2/function"

var (
  trim = strings.TrimSpace
  lower = strings.ToLower
  removeSpecial = func(s string) string {
      return regexp.MustCompile(\`[^a-z0-9]\`).ReplaceAllString(s, "")
  }
  limitLength = func(max int) func(string) string {
      return func(s string) string {
          if len(s) > max {
              return s[:max]
          }
          return s
      }
  }
)

var processUsername = function.Flow4(
  trim,
  lower,
  removeSpecial,
  limitLength(20),
)

// Usage
username := processUsername("  John.Doe@123!  ")  // "johndoe123"`})})]}),(0,i.jsx)(t.h3,{id:"data-transformation",children:"Data transformation"}),(0,i.jsxs)(o.A,{groupId:"example",children:[(0,i.jsx)(l.A,{value:"standard",label:"Without fp-go",children:(0,i.jsx)(c,{file:"without.go",children:`func processOrders(orders []Order) []OrderSummary {
  // Filter active orders
  var active []Order
  for _, order := range orders {
      if order.Status == "active" {
          active = append(active, order)
      }
  }

  // Calculate totals
  var withTotals []Order
  for _, order := range active {
      total := 0.0
      for _, item := range order.Items {
          total += item.Price
      }
      order.Total = total
      withTotals = append(withTotals, order)
  }

  // Convert to summaries
  var summaries []OrderSummary
  for _, order := range withTotals {
      summaries = append(summaries, OrderSummary{
          ID:    order.ID,
          Total: order.Total,
      })
  }

  return summaries
}`})}),(0,i.jsx)(l.A,{value:"v2",label:"With fp-go v2",children:(0,i.jsx)(c,{file:"with.go",status:"tested",children:`import (
  "github.com/IBM/fp-go/v2/array"
  "github.com/IBM/fp-go/v2/function"
)

var (
  isActive = func(o Order) bool {
      return o.Status == "active"
  }

  calculateTotal = func(o Order) Order {
      total := 0.0
      for _, item := range o.Items {
          total += item.Price
      }
      o.Total = total
      return o
  }

  toSummary = func(o Order) OrderSummary {
      return OrderSummary{
          ID:    o.ID,
          Total: o.Total,
      }
  }
)

var processOrders = function.Flow3(
  array.Filter(isActive),
  array.Map(calculateTotal),
  array.Map(toSummary),
)

// Usage
summaries := processOrders(orders)`})})]}),(0,i.jsx)(t.h3,{id:"api-response-processing",children:"API response processing"}),(0,i.jsxs)(o.A,{groupId:"example",children:[(0,i.jsx)(l.A,{value:"standard",label:"Without fp-go",children:(0,i.jsx)(c,{file:"without.go",children:`func processAPIResponse(data []byte) (Result, error) {
  // Parse JSON
  var raw RawResponse
  if err := json.Unmarshal(data, &raw); err != nil {
      return Result{}, err
  }

  // Validate
  if raw.Status != "success" {
      return Result{}, errors.New("invalid status")
  }

  // Transform
  result := Result{
      ID:   raw.Data.ID,
      Name: strings.ToUpper(raw.Data.Name),
  }

  return result, nil
}`})}),(0,i.jsx)(l.A,{value:"v2",label:"With fp-go v2",children:(0,i.jsx)(c,{file:"with.go",status:"tested",children:`import (
  "github.com/IBM/fp-go/v2/function"
  "github.com/IBM/fp-go/v2/result"
)

var (
  parseJSON = func(data []byte) result.Result[RawResponse] {
      var raw RawResponse
      err := json.Unmarshal(data, &raw)
      return result.FromGoError(raw, err)
  }

  validateStatus = func(raw RawResponse) result.Result[RawResponse] {
      if raw.Status != "success" {
          return result.Err[RawResponse](errors.New("invalid status"))
      }
      return result.Ok(raw)
  }

  transform = func(raw RawResponse) Result {
      return Result{
          ID:   raw.Data.ID,
          Name: strings.ToUpper(raw.Data.Name),
      }
  }
)

var processAPIResponse = function.Flow3(
  parseJSON,
  result.Chain(validateStatus),
  result.Map(transform),
)

// Usage
res := processAPIResponse(data)
res.Fold(
  func(err error) { /* handle error */ },
  func(result Result) { /* use result */ },
)`})})]})]}),"\n",(0,i.jsxs)(f,{id:"monads",number:"06",title:"Composition with",titleAccent:"monads.",lede:"Compose effectful functions by lifting them with Map / Chain.",children:[(0,i.jsx)(t.h3,{id:"chaining-operations",children:"Chaining operations"}),(0,i.jsx)(c,{file:"chain.go",status:"tested",children:`import (
  "github.com/IBM/fp-go/v2/result"
  "github.com/IBM/fp-go/v2/function"
)

// Each function returns Result
func fetchUser(id string) result.Result[User] { /* ... */ }
func validateUser(user User) result.Result[User] { /* ... */ }
func enrichUser(user User) result.Result[User] { /* ... */ }
func saveUser(user User) result.Result[User] { /* ... */ }

// Compose with Chain
var processUser = function.Flow3(
  fetchUser,
  result.Chain(validateUser),
  result.Chain(enrichUser),
  result.Chain(saveUser),
)

// Usage
res := processUser("user-123")
// Stops at first error, or returns final success`}),(0,i.jsx)(t.h3,{id:"mixing-map-and-chain",children:"Mixing Map and Chain"}),(0,i.jsx)(c,{file:"mix.go",children:`// Map: transform the value
// Chain: transform and return new Result

var pipeline = function.Flow4(
  fetchUser,                           // Result[User]
  result.Map(normalizeUser),           // Result[User] - just transform
  result.Chain(validateUser),          // Result[User] - can fail
  result.Map(toDTO),                   // Result[UserDTO] - just transform
)`})]}),"\n",(0,i.jsxs)(f,{id:"point-free",number:"07",title:"Point-free",titleAccent:"style.",lede:"Define functions without naming their arguments.",children:[(0,i.jsx)(t.h3,{id:"with-points-arguments",children:"With points (arguments)"}),(0,i.jsx)(c,{file:"with-points.go",children:`// Mentions 'x' explicitly
double := func(x int) int {
  return x * 2
}

// Mentions 'users' explicitly
activeUsers := func(users []User) []User {
  return array.Filter(func(u User) bool {
      return u.Active
  })(users)
}`}),(0,i.jsx)(t.h3,{id:"point-free",children:"Point-free"}),(0,i.jsx)(c,{file:"point-free.go",children:`// No mention of arguments
var double = function.Flow1(func(x int) int { return x * 2 })

// No mention of 'users'
var activeUsers = array.Filter(func(u User) bool {
  return u.Active
})

// Use it
result := activeUsers(users)`}),(0,i.jsxs)(u,{children:[(0,i.jsxs)(d,{kind:"good",title:"Use point-free when",pill:"cleaner",children:[(0,i.jsx)("p",{children:"The pipeline is clearer without naming intermediate values."}),(0,i.jsx)(c,{file:"clear.go",children:`var processUsers = function.Flow3(
  array.Filter(isActive),
  array.Map(normalize),
  array.Map(toDTO),
)`})]}),(0,i.jsxs)(d,{kind:"bad",title:"Don't force when",pill:"harder to read",children:[(0,i.jsx)("p",{children:"Logic is complex \u2014 a normal function is clearer."}),(0,i.jsx)(c,{file:"unclear.go",children:`var processUser = func(user User) User {
  // Complex logic here
  return user
}`})]})]})]}),"\n",(0,i.jsxs)(f,{id:"best-practices",number:"08",title:"Best",titleAccent:"practices.",children:[(0,i.jsx)(t.h3,{id:"1--keep-functions-small",children:"1 \u2014 Keep functions small"}),(0,i.jsxs)(u,{children:[(0,i.jsx)(d,{kind:"good",pill:"recommended",children:(0,i.jsx)(c,{file:"good.go",children:`func trim(s string) string { return strings.TrimSpace(s) }
func lower(s string) string { return strings.ToLower(s) }
func addPrefix(p string) func(string) string {
  return func(s string) string { return p + s }
}`})}),(0,i.jsx)(d,{kind:"bad",pill:"avoid",children:(0,i.jsx)(c,{file:"bad.go",children:`func processString(s string, prefix string, maxLen int) string {
  s = strings.TrimSpace(s)
  s = strings.ToLower(s)
  s = prefix + s
  if len(s) > maxLen {
      s = s[:maxLen]
  }
  return s
}`})})]}),(0,i.jsx)(t.h3,{id:"2--use-descriptive-names",children:"2 \u2014 Use descriptive names"}),(0,i.jsxs)(u,{children:[(0,i.jsx)(d,{kind:"good",pill:"clear",children:(0,i.jsx)(c,{file:"good.go",children:`var processUsername = function.Flow3(
  trim,
  lower,
  removeSpecialChars,
)`})}),(0,i.jsx)(d,{kind:"bad",pill:"unclear",children:(0,i.jsx)(c,{file:"bad.go",children:`var process = function.Flow3(
  f1,
  f2,
  f3,
)`})})]}),(0,i.jsx)(t.h3,{id:"3--limit-pipeline-length",children:"3 \u2014 Limit pipeline length"}),(0,i.jsx)(c,{file:"limit.go",children:`// \u{2705} Good: 3-5 steps
var pipeline = function.Flow4(
  parse,
  validate,
  transform,
  format,
)

// \u{26A0}\u{FE0F} Consider breaking up: 10+ steps
var hugePipeline = function.Flow10(
  step1, step2, step3, step4, step5,
  step6, step7, step8, step9, step10,
)

// Better: break into sub-pipelines
var preprocess = function.Flow3(step1, step2, step3)
var process = function.Flow3(step4, step5, step6)
var postprocess = function.Flow4(step7, step8, step9, step10)

var pipeline = function.Flow3(preprocess, process, postprocess)`}),(0,i.jsx)(t.h3,{id:"4--test-each-function",children:"4 \u2014 Test each function"}),(0,i.jsx)(c,{file:"testing.go",status:"tested",children:`// Test individual functions
func TestTrim(t *testing.T) {
  assert.Equal(t, "hello", trim("  hello  "))
}

func TestLower(t *testing.T) {
  assert.Equal(t, "hello", lower("HELLO"))
}

// Test composition
func TestProcessUsername(t *testing.T) {
  assert.Equal(t, "user_john", processUsername("  JOHN  "))
}`}),(0,i.jsx)(t.h3,{id:"5--use-type-aliases-for-clarity",children:"5 \u2014 Use type aliases for clarity"}),(0,i.jsx)(c,{file:"aliases.go",children:`// Define types for clarity
type Username string
type Email string
type UserID string

// Functions with clear types
func normalizeUsername(s string) Username {
  return Username(strings.ToLower(strings.TrimSpace(s)))
}

func validateEmail(s string) result.Result[Email] {
  if !strings.Contains(s, "@") {
      return result.Err[Email](errors.New("invalid email"))
  }
  return result.Ok(Email(s))
}`})]}),"\n",(0,i.jsxs)(f,{id:"performance",number:"09",title:"Performance",titleAccent:"considerations.",children:[(0,i.jsx)(t.h3,{id:"composition-overhead",children:"Composition overhead"}),(0,i.jsx)(c,{file:"overhead.go",children:`// Minimal overhead
composed := function.Flow3(f1, f2, f3)
result := composed(input)

// Equivalent to:
result := f3(f2(f1(input)))

// Just function calls - very fast`}),(0,i.jsx)(t.h3,{id:"when-to-optimize",children:"When to optimize"}),(0,i.jsx)(c,{file:"optimize.go",children:`// \u{2705} Fine for most cases
var process = function.Flow5(
  step1, step2, step3, step4, step5,
)

// \u{26A0}\u{FE0F} Hot path with millions of calls?
// Consider inlining:
func process(x int) int {
  x = step1(x)
  x = step2(x)
  x = step3(x)
  x = step4(x)
  return step5(x)
}`}),(0,i.jsx)(c,{file:"bench.go",children:`func BenchmarkComposed(b *testing.B) {
  composed := function.Flow3(double, addOne, square)
  for i := 0; i < b.N; i++ {
      _ = composed(5)
  }
}

func BenchmarkInlined(b *testing.B) {
  for i := 0; i < b.N; i++ {
      x := 5
      x = double(x)
      x = addOne(x)
      _ = square(x)
  }
}

// Results: negligible difference for most cases`})]}),"\n",(0,i.jsxs)(f,{id:"faq",number:"10",title:"Common",titleAccent:"questions.",children:[(0,i.jsx)(r,{title:"Isn't this just function calls?",children:(0,i.jsxs)(t.p,{children:["Yes. Composition is a structured way to call functions. The value is in ",(0,i.jsx)("strong",{children:"reusability"}),", ",(0,i.jsx)("strong",{children:"testability"}),", ",(0,i.jsx)("strong",{children:"clarity"}),", and ",(0,i.jsx)("strong",{children:"maintainability"}),"."]})}),(0,i.jsx)(r,{title:"When should I use composition?",children:(0,i.jsx)(t.p,{children:"Use it when you have a sequence of transformations, the steps are reusable, and you want clear/testable code. Don't force it when logic is complex and branching, steps are tightly coupled, or it makes the code less clear."})}),(0,i.jsxs)(r,{type:"success",title:"Flow vs. Pipe vs. Compose \u2014 quick rule.",children:[(0,i.jsxs)("ul",{children:[(0,i.jsxs)("li",{children:[(0,i.jsx)("strong",{children:"Flow"})," \u2014 create reusable pipelines."]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("strong",{children:"Pipe"})," \u2014 one-off data processing."]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("strong",{children:"Compose"})," \u2014 only if you prefer mathematical style."]})]}),(0,i.jsx)(t.p,{children:"Most people prefer Flow."})]})]}),"\n",(0,i.jsxs)(f,{id:"summary",number:"11",title:"Summary",children:[(0,i.jsx)(a,{title:"Composition",items:[{label:"Build complex from simple",done:!0},{label:"Reusable functions",done:!0},{label:"Clear data flow",done:!0},{label:"Easy to test",done:!0},{label:"Easy to modify",done:!0}]}),(0,i.jsx)(s,{columns:["Tool","Direction","Use for"],rows:[{symbol:"Flow",signature:"Left-to-right",description:"Reusable pipelines (recommended)."},{symbol:"Pipe",signature:"Data-first",description:"One-off processing of a known value."},{symbol:"Compose",signature:"Right-to-left",description:"Mathematical convention."}]}),(0,i.jsx)(r,{type:"success",title:"Key takeaway.",children:(0,i.jsx)(t.p,{children:"Composition is about building maintainable systems from simple, reusable pieces. Use it where it adds clarity, not complexity."})})]})]})}function f(e={}){let{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}function m(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},7250(e,t,s){s.d(t,{A:()=>l});var r=s(4848);s(6540);var i=s(4164),n=s(7663);function o({children:e,className:t,hidden:s}){return(0,r.jsx)("div",{role:"tabpanel",className:(0,i.A)("tabItem_Ymn6",t),hidden:s,children:e})}function l({children:e,className:t,value:s}){let{selectedValue:i,lazy:a}=(0,n.uc)(),c=s===i;return!c&&a?null:(0,r.jsx)(o,{className:t,hidden:!c,children:e})}},773(e,t,s){s.d(t,{A:()=>p});var r=s(4848);s(6540);var i=s(4164),n=s(8287),o=s(7663),l=s(8584),a=s(9863);function c({className:e}){let{selectedValue:t,selectValue:s,tabValues:n,block:a}=(0,o.uc)(),u=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.a_)(),p=e=>{let r=e.currentTarget,i=n[u.indexOf(r)].value;i!==t&&(d(r),s(i))},f=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{let s=u.indexOf(e.currentTarget)+1;t=u[s]??u[0];break}case"ArrowLeft":{let s=u.indexOf(e.currentTarget)-1;t=u[s]??u[u.length-1]}}t?.focus()};return(0,r.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":a},e),children:n.map(({value:e,label:s,attributes:n})=>(0,r.jsx)("li",{role:"tab",tabIndex:t===e?0:-1,"aria-selected":t===e,ref:e=>{u.push(e)},onKeyDown:f,onClick:p,...n,className:(0,i.A)("tabs__item","tabItem_LNqP",n?.className,{"tabs__item--active":t===e}),children:s??e},e))})}function u({children:e}){return(0,r.jsx)("div",{className:"margin-top--md",children:e})}function d({className:e,children:t}){return(0,r.jsxs)("div",{className:(0,i.A)(n.G.tabs.container,"tabs-container","tabList__CuJ"),children:[(0,r.jsx)(c,{className:e}),(0,r.jsx)(u,{children:t})]})}function p(e){let t=(0,a.A)(),s=(0,o.OC)(e);return(0,r.jsx)(o.O_,{value:s,children:(0,r.jsx)(d,{className:e.className,children:(0,o.vT)(e.children)})},String(t))}},7663(e,t,s){s.d(t,{OC:()=>p,O_:()=>h,uc:()=>m,vT:()=>u});var r=s(4848),i=s(6540),n=s(6347),o=s(9989),l=s(6629),a=s(618),c=s(1367);function u(e){return i.Children.toArray(e).filter(e=>"\n"!==e)}function d({value:e,tabValues:t}){return t.some(t=>t.value===e)}function p(e){let t,{defaultValue:s,queryString:r=!1,groupId:u}=e,p=function(e){let{values:t,children:s}=e;return(0,i.useMemo)(()=>{let e=t??i.Children.toArray(s).flatMap(e=>{if(!e)return[];if((0,i.isValidElement)(e)&&function(e){let{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return[e];let t="string"==typeof e.type?e.type:e.type.name;throw Error(`Docusaurus error: Bad <Tabs> child <${t}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.
If you do not want to pass on a "value" prop to the direct children of <Tabs>, you can also pass an explicit <Tabs values={...}> prop.`)}).map(({props:{value:e,label:t,attributes:s,default:r}})=>({value:e,label:t,attributes:s,default:r})),r=(0,a.XI)(e,(e,t)=>e.value===t.value);if(r.length>0)throw Error(`Docusaurus error: Duplicate values "${r.map(e=>`'${e.value}'`).join(", ")}" found in <Tabs>. Every value needs to be unique.`);return e},[t,s])}(e),[f,m]=(0,i.useState)(()=>(function({defaultValue:e,tabValues:t}){if(0===t.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!d({value:e,tabValues:t}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${t.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}let s=t.find(e=>e.default)??t[0];if(!s)throw Error("Unexpected error: 0 tabValues");return s.value})({defaultValue:s,tabValues:p})),[h,g]=function({queryString:e=!1,groupId:t}){let s=(0,n.W6)(),r=function({queryString:e=!1,groupId:t}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!t)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:e,groupId:t});return[(0,l.aZ)(r),(0,i.useCallback)(e=>{if(!r)return;let t=new URLSearchParams(s.location.search);t.set(r,e),s.replace({...s.location,search:t.toString()})},[r,s])]}({queryString:r,groupId:u}),[x,v]=function({groupId:e}){let t=e?`docusaurus.tab.${e}`:null,[s,r]=(0,c.Dv)(t);return[s,(0,i.useCallback)(e=>{t&&r.set(e)},[t,r])]}({groupId:u}),b=d({value:t=h??x,tabValues:p})?t:null;return(0,o.A)(()=>{b&&m(b)},[b]),{selectedValue:f,selectValue:(0,i.useCallback)(e=>{if(!d({value:e,tabValues:p}))throw Error(`Can't select invalid tab value=${e}`);m(e),g(e),v(e)},[g,v,p]),tabValues:p,lazy:e.lazy??!1,block:e.block??!1}}let f=(0,i.createContext)(null);function m(){let e=i.useContext(f);if(!e)throw Error("useTabsContext() must be used within a Tabs component");return e}function h(e){return(0,r.jsx)(f.Provider,{value:e.value,children:e.children})}},8453(e,t,s){s.d(t,{R:()=>o,x:()=>l});var r=s(6540);let i={},n=r.createContext(i);function o(e){let t=r.useContext(n);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(n.Provider,{value:t},e.children)}}}]);
"use strict";(self.webpackChunkfp_go_docs=self.webpackChunkfp_go_docs||[]).push([["15"],{2108(e,r,t){t.r(r),t.d(r,{metadata:()=>i,default:()=>u,frontMatter:()=>s,contentTitle:()=>o,toc:()=>p,assets:()=>l});var i=JSON.parse('{"id":"recipes/pipelines","title":"Function Pipelines","description":"Build composable data processing pipelines using fp-go\'s Pipe, Flow, and composition utilities.","source":"@site/docs/recipes/pipelines.md","sourceDirName":"recipes","slug":"/recipes/pipelines","permalink":"/fp-go/docs/recipes/pipelines","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":14,"frontMatter":{"title":"Function Pipelines","hide_title":true,"description":"Build composable data processing pipelines using fp-go\'s Pipe, Flow, and composition utilities.","sidebar_position":14},"sidebar":"recipesSidebar","previous":{"title":"Dependency Injection","permalink":"/fp-go/docs/recipes/dependency-injection"},"next":{"title":"Middleware Patterns","permalink":"/fp-go/docs/recipes/middleware"}}'),n=t(4848),a=t(8453);let s={title:"Function Pipelines",hide_title:!0,description:"Build composable data processing pipelines using fp-go's Pipe, Flow, and composition utilities.",sidebar_position:14},o,l={},p=[];function c(e){let r={code:"code",p:"p",strong:"strong",...(0,a.R)(),...e.components},{Callout:t,Checklist:i,ChecklistItem:s,CodeCard:o,Compare:l,CompareCol:p,PageHeader:c,Section:u,TLDR:f,TLDRCard:m}=r;return t||d("Callout",!0),i||d("Checklist",!0),s||d("ChecklistItem",!0),o||d("CodeCard",!0),l||d("Compare",!0),p||d("CompareCol",!0),c||d("PageHeader",!0),u||d("Section",!0),f||d("TLDR",!0),m||d("TLDRCard",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(c,{eyebrow:"Recipes \xb7 14 / 17",title:"Function",titleAccent:"Pipelines",lede:"Build composable data processing pipelines using fp-go's Pipe, Flow, and composition utilities for readable, left-to-right data flow.",meta:[{label:"Difficulty",value:"Intermediate"},{label:"Patterns",value:"8"},{label:"Use Cases",value:"Data transformation, ETL, request processing"}]}),"\n",(0,n.jsxs)(f,{children:[(0,n.jsx)(m,{title:"Left-to-Right Flow",icon:"arrow-right",children:(0,n.jsx)(r.p,{children:"Pipe and Flow enable readable, sequential operations that mirror natural data flow direction."})}),(0,n.jsx)(m,{title:"Reusable Pipelines",icon:"recycle",children:(0,n.jsx)(r.p,{children:"Flow creates reusable transformation functions that can be applied to different inputs."})}),(0,n.jsx)(m,{title:"Type-Safe Composition",icon:"shield",children:(0,n.jsx)(r.p,{children:"Compile-time guarantees ensure each step's output matches the next step's input type."})})]}),"\n",(0,n.jsxs)(u,{id:"basic-pipelines",number:"01",title:"Basic",titleAccent:"Pipelines",children:[(0,n.jsxs)(r.p,{children:["Function pipelines chain operations in a readable, left-to-right flow using ",(0,n.jsx)(r.strong,{children:"Pipe"})," and ",(0,n.jsx)(r.strong,{children:"Flow"}),"."]}),(0,n.jsxs)(l,{children:[(0,n.jsx)(p,{kind:"bad",children:(0,n.jsx)(o,{file:"nested.go",children:`// \u{274C} Nested function calls (right-to-left)
result := replaceSpaces(
  toUpper(
      trim("  hello world  ")
  )
)
// Hard to read, inside-out
`})}),(0,n.jsx)(p,{kind:"good",children:(0,n.jsx)(o,{file:"pipeline.go",children:`// \u{2705} Pipeline (left-to-right)
result := F.Pipe3(
  "  hello world  ",
  strings.TrimSpace,
  strings.ToUpper,
  func(s string) string {
      return strings.ReplaceAll(s, " ", "_")
  },
)
// HELLO_WORLD
// Easy to read, natural flow
`})})]}),(0,n.jsx)(o,{file:"flow_reusable.go",children:`package main

import (
  "fmt"
  "strings"
  F "github.com/IBM/fp-go/v2/function"
)

// Create reusable pipeline with Flow
var normalizeString = F.Flow3(
  strings.TrimSpace,
  strings.ToLower,
  func(s string) string {
      return strings.ReplaceAll(s, " ", "-")
  },
)

func main() {
  result1 := normalizeString("  Hello World  ")
  result2 := normalizeString("  Functional Programming  ")
  
  fmt.Println(result1) // hello-world
  fmt.Println(result2) // functional-programming
}
`}),(0,n.jsx)(t,{type:"info",children:(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Pipe vs Flow"}),": Use ",(0,n.jsx)(r.code,{children:"Pipe"})," to process a value immediately, ",(0,n.jsx)(r.code,{children:"Flow"})," to create a reusable transformation function."]})})]}),"\n",(0,n.jsxs)(u,{id:"data-transformation",number:"02",title:"Data Transformation",titleAccent:"Pipelines",children:[(0,n.jsx)(r.p,{children:"Process collections with array operations in a pipeline."}),(0,n.jsx)(o,{file:"array_pipeline.go",children:`package main

import (
  "fmt"
  A "github.com/IBM/fp-go/v2/array"
  F "github.com/IBM/fp-go/v2/function"
)

type Product struct {
  Name  string
  Price float64
}

func main() {
  products := []Product{
      {Name: "Laptop", Price: 999.99},
      {Name: "Mouse", Price: 29.99},
      {Name: "Keyboard", Price: 79.99},
      {Name: "Monitor", Price: 299.99},
  }
  
  // Pipeline: filter expensive items, extract prices, format
  result := F.Pipe3(
      products,
      A.Filter(func(p Product) bool {
          return p.Price > 50
      }),
      A.Map(func(p Product) string {
          return fmt.Sprintf("%s: $%.2f", p.Name, p.Price)
      }),
      A.Reduce(func(acc, item string) string {
          if acc == "" {
              return item
          }
          return acc + "\\n" + item
      })(""),
  )
  
  fmt.Println(result)
  // Laptop: $999.99
  // Keyboard: $79.99
  // Monitor: $299.99
}
`})]}),"\n",(0,n.jsxs)(u,{id:"error-handling",number:"03",title:"Error Handling",titleAccent:"Pipelines",children:[(0,n.jsx)(r.p,{children:"Build pipelines with error handling using Either and Option."}),(0,n.jsx)(o,{file:"either_pipeline.go",children:`package main

import (
  "fmt"
  "strconv"
  E "github.com/IBM/fp-go/v2/either"
  F "github.com/IBM/fp-go/v2/function"
)

func parseInt(s string) E.Either[error, int] {
  n, err := strconv.Atoi(s)
  if err != nil {
      return E.Left[int](err)
  }
  return E.Right[error](n)
}

func validatePositive(n int) E.Either[error, int] {
  if n <= 0 {
      return E.Left[int](fmt.Errorf("must be positive, got %d", n))
  }
  return E.Right[error](n)
}

func double(n int) int {
  return n * 2
}

func processNumber(s string) E.Either[error, int] {
  return F.Pipe2(
      parseInt(s),
      E.Chain(func(n int) E.Either[error, int] {
          return validatePositive(n)
      }),
      E.Map(double),
  )
}

func main() {
  // Valid input
  result1 := processNumber("42")
  E.Match(
      func(err error) { fmt.Println("Error:", err) },
      func(n int) { fmt.Println("Result:", n) },
  )(result1)
  // Result: 84
  
  // Invalid input
  result2 := processNumber("-5")
  E.Match(
      func(err error) { fmt.Println("Error:", err) },
      func(n int) { fmt.Println("Result:", n) },
  )(result2)
  // Error: must be positive, got -5
}
`}),(0,n.jsx)(o,{file:"option_pipeline.go",children:`package main

import (
  "fmt"
  A "github.com/IBM/fp-go/v2/array"
  O "github.com/IBM/fp-go/v2/option"
  F "github.com/IBM/fp-go/v2/function"
)

type User struct {
  ID    int
  Name  string
  Email string
}

func findUserByID(users []User, id int) O.Option[User] {
  return A.FindFirst(func(u User) bool {
      return u.ID == id
  })(users)
}

func getUserEmail(users []User, id int) O.Option[string] {
  return F.Pipe2(
      findUserByID(users, id),
      O.Map(func(u User) string {
          return u.Email
      }),
  )
}

func main() {
  users := []User{
      {ID: 1, Name: "Alice", Email: "alice@example.com"},
      {ID: 2, Name: "Bob", Email: "bob@example.com"},
  }
  
  // Found
  email1 := getUserEmail(users, 1)
  O.Match(
      func() { fmt.Println("User not found") },
      func(email string) { fmt.Println("Email:", email) },
  )(email1)
  // Email: alice@example.com
  
  // Not found
  email2 := getUserEmail(users, 999)
  O.Match(
      func() { fmt.Println("User not found") },
      func(email string) { fmt.Println("Email:", email) },
  )(email2)
  // User not found
}
`})]}),"\n",(0,n.jsxs)(u,{id:"io-pipelines",number:"04",title:"IO",titleAccent:"Pipelines",children:[(0,n.jsx)(r.p,{children:"Chain IO operations for file processing and HTTP requests."}),(0,n.jsx)(o,{file:"file_pipeline.go",children:`package main

import (
  "fmt"
  "os"
  "strings"
  IOE "github.com/IBM/fp-go/v2/ioeither"
  A "github.com/IBM/fp-go/v2/array"
  F "github.com/IBM/fp-go/v2/function"
)

func readFile(path string) IOE.IOEither[error, string] {
  return IOE.TryCatch(func() (string, error) {
      data, err := os.ReadFile(path)
      return string(data), err
  })
}

func writeFile(path string, content string) IOE.IOEither[error, int] {
  return IOE.TryCatch(func() (int, error) {
      err := os.WriteFile(path, []byte(content), 0644)
      return len(content), err
  })
}

func processLines(lines []string) []string {
  return F.Pipe2(
      lines,
      A.Filter(func(line string) bool {
          return strings.TrimSpace(line) != ""
      }),
      A.Map(strings.ToUpper),
  )
}

func transformFile(input, output string) IOE.IOEither[error, int] {
  return F.Pipe3(
      readFile(input),
      IOE.Map(func(content string) []string {
          return strings.Split(content, "\\n")
      }),
      IOE.Map(processLines),
      IOE.Chain(func(lines []string) IOE.IOEither[error, int] {
          content := strings.Join(lines, "\\n")
          return writeFile(output, content)
      }),
  )
}

func main() {
  result := transformFile("input.txt", "output.txt")()
  
  if result.IsLeft() {
      fmt.Println("Error:", result.Left())
  } else {
      fmt.Printf("Wrote %d bytes\\n", result.Right())
  }
}
`})]}),"\n",(0,n.jsxs)(u,{id:"complex-pipelines",number:"05",title:"Multi-Stage",titleAccent:"Pipelines",children:[(0,n.jsx)(r.p,{children:"Build complex pipelines with multiple transformation stages."}),(0,n.jsx)(o,{file:"multistage_pipeline.go",children:`package main

import (
  "fmt"
  "strconv"
  "strings"
  A "github.com/IBM/fp-go/v2/array"
  E "github.com/IBM/fp-go/v2/either"
  F "github.com/IBM/fp-go/v2/function"
)

type RawData struct {
  ID    string
  Value string
}

type ParsedData struct {
  ID    int
  Value float64
}

type ValidatedData struct {
  ID    int
  Value float64
}

type ProcessedData struct {
  ID     int
  Result string
}

// Stage 1: Parse
func parseData(raw RawData) E.Either[error, ParsedData] {
  id, err := strconv.Atoi(raw.ID)
  if err != nil {
      return E.Left[ParsedData](fmt.Errorf("invalid ID: %w", err))
  }
  
  value, err := strconv.ParseFloat(raw.Value, 64)
  if err != nil {
      return E.Left[ParsedData](fmt.Errorf("invalid value: %w", err))
  }
  
  return E.Right[error](ParsedData{ID: id, Value: value})
}

// Stage 2: Validate
func validateData(parsed ParsedData) E.Either[error, ValidatedData] {
  if parsed.Value < 0 {
      return E.Left[ValidatedData](fmt.Errorf("value must be non-negative"))
  }
  return E.Right[error](ValidatedData{ID: parsed.ID, Value: parsed.Value})
}

// Stage 3: Process
func processData(validated ValidatedData) ProcessedData {
  return ProcessedData{
      ID:     validated.ID,
      Result: fmt.Sprintf("Processed: %.2f", validated.Value*2),
  }
}

// Complete pipeline
func processPipeline(raw []RawData) E.Either[error, []ProcessedData] {
  return F.Pipe3(
      raw,
      A.Traverse[RawData](E.Applicative[error, ParsedData]())(parseData),
      E.Chain(func(parsed []ParsedData) E.Either[error, []ValidatedData] {
          return A.Traverse[ParsedData](E.Applicative[error, ValidatedData]())(
              validateData,
          )(parsed)
      }),
      E.Map(func(validated []ValidatedData) []ProcessedData {
          return A.Map(processData)(validated)
      }),
  )
}

func main() {
  rawData := []RawData{
      {ID: "1", Value: "10.5"},
      {ID: "2", Value: "20.3"},
      {ID: "3", Value: "15.7"},
  }
  
  result := processPipeline(rawData)
  
  E.Match(
      func(err error) { fmt.Println("Error:", err) },
      func(processed []ProcessedData) {
          fmt.Println("Processed data:")
          for _, p := range processed {
              fmt.Printf("  ID %d: %s\\n", p.ID, p.Result)
          }
      },
  )(result)
}
`})]}),"\n",(0,n.jsxs)(u,{id:"branching",number:"06",title:"Branching",titleAccent:"Pipelines",children:[(0,n.jsx)(r.p,{children:"Handle different processing paths based on input type or conditions."}),(0,n.jsx)(o,{file:"branching_pipeline.go",children:`package main

import (
  "fmt"
  E "github.com/IBM/fp-go/v2/either"
)

type Input struct {
  Type  string
  Value int
}

type Output struct {
  Result string
}

func processTypeA(value int) E.Either[error, Output] {
  return E.Right[error](Output{
      Result: fmt.Sprintf("Type A: %d", value*2),
  })
}

func processTypeB(value int) E.Either[error, Output] {
  return E.Right[error](Output{
      Result: fmt.Sprintf("Type B: %d", value*3),
  })
}

func processInput(input Input) E.Either[error, Output] {
  switch input.Type {
  case "A":
      return processTypeA(input.Value)
  case "B":
      return processTypeB(input.Value)
  default:
      return E.Left[Output](fmt.Errorf("unknown type: %s", input.Type))
  }
}

func main() {
  inputs := []Input{
      {Type: "A", Value: 10},
      {Type: "B", Value: 10},
      {Type: "C", Value: 10},
  }
  
  for _, input := range inputs {
      result := processInput(input)
      E.Match(
          func(err error) { fmt.Printf("Error processing %+v: %v\\n", input, err) },
          func(output Output) { fmt.Println(output.Result) },
      )(result)
  }
  // Type A: 20
  // Type B: 30
  // Error processing {Type:C Value:10}: unknown type: C
}
`})]}),"\n",(0,n.jsxs)(u,{id:"lazy-evaluation",number:"07",title:"Lazy Evaluation",titleAccent:"Pipelines",children:[(0,n.jsx)(r.p,{children:"Defer computation until needed with lazy pipelines."}),(0,n.jsx)(o,{file:"lazy_pipeline.go",children:`package main

import (
  "fmt"
  L "github.com/IBM/fp-go/v2/lazy"
  F "github.com/IBM/fp-go/v2/function"
)

func expensiveOperation(n int) L.Lazy[int] {
  return L.MakeLazy(func() int {
      fmt.Printf("Computing %d...\\n", n)
      return n * 2
  })
}

func main() {
  // Pipeline is not executed until needed
  pipeline := F.Pipe2(
      expensiveOperation(10),
      L.Map(func(n int) int {
          fmt.Println("Doubling again...")
          return n * 2
      }),
  )
  
  fmt.Println("Pipeline created, not executed yet")
  
  // Execute pipeline
  result := pipeline()
  fmt.Println("Result:", result)
  // Computing 10...
  // Doubling again...
  // Result: 40
}
`})]}),"\n",(0,n.jsxs)(u,{id:"best-practices",number:"08",title:"Best",titleAccent:"Practices",children:[(0,n.jsxs)(i,{children:[(0,n.jsx)(s,{status:"required",children:(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Keep pipelines focused"})," \u2014 Each pipeline should have a single, clear responsibility"]})}),(0,n.jsx)(s,{status:"required",children:(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Name intermediate steps"})," \u2014 Use variables for clarity in complex pipelines"]})}),(0,n.jsx)(s,{status:"recommended",children:(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Handle errors early"})," \u2014 Validate inputs at the start of the pipeline"]})}),(0,n.jsx)(s,{status:"recommended",children:(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Use Flow for reusability"})," \u2014 Create reusable transformation functions"]})}),(0,n.jsx)(s,{status:"optional",children:(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Consider lazy evaluation"})," \u2014 Defer expensive computations when appropriate"]})})]}),(0,n.jsxs)(l,{children:[(0,n.jsx)(p,{kind:"good",children:(0,n.jsx)(o,{file:"good_pipeline.go",children:`// \u{2705} Good: Single responsibility
var normalizeEmail = F.Flow2(
  strings.TrimSpace,
  strings.ToLower,
)

var validateEmail = func(email string) E.Either[error, string] {
  if !strings.Contains(email, "@") {
      return E.Left[string](fmt.Errorf("invalid email"))
  }
  return E.Right[error](email)
}

// \u{2705} Good: Clear intermediate steps
func processOrder(order Order) E.Either[error, Receipt] {
  validated := validateOrder(order)
  priced := E.Map(calculatePrice)(validated)
  charged := E.Chain(chargeCustomer)(priced)
  return E.Map(generateReceipt)(charged)
}

// \u{2705} Good: Validate early
func processData(input string) E.Either[error, Result] {
  return F.Pipe2(
      validateInput(input),
      E.Chain(parseInput),
      E.Chain(transformData),
  )
}
`})}),(0,n.jsx)(p,{kind:"bad",children:(0,n.jsx)(o,{file:"bad_pipeline.go",children:`// \u{274C} Avoid: Doing too much in one pipeline
var processEmail = func(email string) E.Either[error, string] {
  // Normalize, validate, send, log, update DB...
}

// \u{274C} Avoid: Unclear nested pipes
func processOrder(order Order) E.Either[error, Receipt] {
  return F.Pipe3(
      validateOrder(order),
      E.Chain(func(o Order) E.Either[error, Order] {
          return E.Map(func(p float64) Order {
              o.Total = p
              return o
          })(calculatePrice(o))
      }),
      // ... more nesting
  )
}

// \u{274C} Avoid: Late validation
func processData(input string) E.Either[error, Result] {
  return F.Pipe2(
      parseInput(input), // Might fail on invalid input
      E.Chain(validateParsed),
      E.Chain(transformData),
  )
}
`})})]})]})]})}function u(e={}){let{wrapper:r}={...(0,a.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}function d(e,r){throw Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},8453(e,r,t){t.d(r,{R:()=>s,x:()=>o});var i=t(6540);let n={},a=i.createContext(n);function s(e){let r=i.useContext(a);return i.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),i.createElement(a.Provider,{value:r},e.children)}}}]);
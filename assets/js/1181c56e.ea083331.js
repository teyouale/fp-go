"use strict";(self.webpackChunkfp_go_docs=self.webpackChunkfp_go_docs||[]).push([["1156"],{7344(r,e,t){t.r(e),t.d(e,{metadata:()=>i,default:()=>u,frontMatter:()=>s,contentTitle:()=>o,toc:()=>c,assets:()=>l});var i=JSON.parse('{"id":"recipes/parsing","title":"Parsing Data","description":"Safe parsing with validation","source":"@site/docs/recipes/parsing.md","sourceDirName":"recipes","slug":"/recipes/parsing","permalink":"/fp-go/docs/recipes/parsing","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":9,"frontMatter":{"sidebar_position":9,"title":"Parsing Data","description":"Safe parsing with validation","hide_title":true},"sidebar":"recipesSidebar","previous":{"title":"Data Aggregation","permalink":"/fp-go/docs/recipes/aggregation"},"next":{"title":"File Operations","permalink":"/fp-go/docs/recipes/file-operations"}}'),n=t(4848),a=t(8453);let s={sidebar_position:9,title:"Parsing Data",description:"Safe parsing with validation",hide_title:!0},o,l={},c=[];function d(r){let e={p:"p",strong:"strong",...(0,a.R)(),...r.components},{Checklist:t,ChecklistItem:i,CodeCard:s,PageHeader:o,Section:l,TLDR:c,TLDRCard:d}=e;return t||f("Checklist",!0),i||f("ChecklistItem",!0),s||f("CodeCard",!0),o||f("PageHeader",!0),l||f("Section",!0),c||f("TLDR",!0),d||f("TLDRCard",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o,{eyebrow:"Recipes \xb7 09 / 17",title:"Parsing",titleAccent:"Data",lede:"Transform unstructured or semi-structured data into typed structures using functional patterns with Either, validation, and parser combinators.",meta:[{label:"Difficulty",value:"Advanced"},{label:"Patterns",value:"6"},{label:"Use Cases",value:"JSON, CSV, Validation"}]}),"\n",(0,n.jsxs)(c,{children:[(0,n.jsx)(d,{title:"Fail Fast vs Accumulate",icon:"zap",children:(0,n.jsx)(e.p,{children:"Use fail-fast for sequential dependencies, accumulate errors for independent validations\u2014choose based on your use case."})}),(0,n.jsx)(d,{title:"Clear Error Messages",icon:"message-circle",children:(0,n.jsx)(e.p,{children:"Provide descriptive errors with context\u2014makes debugging and user feedback much easier."})}),(0,n.jsx)(d,{title:"Type-Safe Parsers",icon:"shield",children:(0,n.jsx)(e.p,{children:"Use generic parsers for type safety\u2014avoid untyped parsing that loses compile-time guarantees."})})]}),"\n",(0,n.jsxs)(l,{id:"basic-parsing",number:"01",title:"Basic String",titleAccent:"Parsing",children:[(0,n.jsx)(e.p,{children:"Parse primitive types from strings with proper error handling."}),(0,n.jsx)(s,{file:"parse-primitives.go",children:`package main

import (
  "fmt"
  "strconv"
  E "github.com/IBM/fp-go/v2/either"
)

func parseInt(s string) E.Either[error, int] {
  n, err := strconv.Atoi(s)
  if err != nil {
      return E.Left[int](err)
  }
  return E.Right[error](n)
}

func parseFloat(s string) E.Either[error, float64] {
  f, err := strconv.ParseFloat(s, 64)
  if err != nil {
      return E.Left[float64](err)
  }
  return E.Right[error](f)
}

func parseBool(s string) E.Either[error, bool] {
  b, err := strconv.ParseBool(s)
  if err != nil {
      return E.Left[bool](err)
  }
  return E.Right[error](b)
}

func main() {
  // Parse integer
  E.Match(
      func(err error) { fmt.Println("Error:", err) },
      func(n int) { fmt.Println("Parsed int:", n) },
  )(parseInt("42"))
  
  // Parse float
  E.Match(
      func(err error) { fmt.Println("Error:", err) },
      func(f float64) { fmt.Println("Parsed float:", f) },
  )(parseFloat("3.14"))
  
  // Parse bool
  E.Match(
      func(err error) { fmt.Println("Error:", err) },
      func(b bool) { fmt.Println("Parsed bool:", b) },
  )(parseBool("true"))
}`})]}),"\n",(0,n.jsxs)(l,{id:"validation",number:"02",title:"Parsing with",titleAccent:"Validation",children:[(0,n.jsx)(e.p,{children:"Combine parsing with validation for robust input handling."}),(0,n.jsx)(s,{file:"parse-with-validation.go",children:`package main

import (
  "fmt"
  "strconv"
  E "github.com/IBM/fp-go/v2/either"
  F "github.com/IBM/fp-go/v2/function"
)

func parsePositiveInt(s string) E.Either[error, int] {
  return F.Pipe2(
      parseInt(s),
      E.ChainFirst(func(n int) E.Either[error, int] {
          if n <= 0 {
              return E.Left[int](fmt.Errorf("must be positive, got %d", n))
          }
          return E.Right[error](n)
      }),
  )
}

func parseInRange(min, max int) func(string) E.Either[error, int] {
  return func(s string) E.Either[error, int] {
      return F.Pipe2(
          parseInt(s),
          E.ChainFirst(func(n int) E.Either[error, int] {
              if n < min || n > max {
                  return E.Left[int](fmt.Errorf("must be between %d and %d, got %d", min, max, n))
              }
              return E.Right[error](n)
          }),
      )
  }
}

func main() {
  // Valid positive integer
  E.Match(
      func(err error) { fmt.Println("Error:", err) },
      func(n int) { fmt.Println("Valid:", n) },
  )(parsePositiveInt("42"))
  
  // Invalid: negative
  E.Match(
      func(err error) { fmt.Println("Error:", err) },
      func(n int) { fmt.Println("Valid:", n) },
  )(parsePositiveInt("-5"))
  
  // Parse with range
  parseAge := parseInRange(0, 120)
  E.Match(
      func(err error) { fmt.Println("Error:", err) },
      func(n int) { fmt.Println("Valid age:", n) },
  )(parseAge("25"))
}`})]}),"\n",(0,n.jsxs)(l,{id:"structured-data",number:"03",title:"Parsing Structured",titleAccent:"Data",children:[(0,n.jsx)(e.p,{children:"Parse complex records with multiple fields and validation."}),(0,n.jsx)(s,{file:"parse-records.go",children:`package main

import (
  "fmt"
  "strings"
  E "github.com/IBM/fp-go/v2/either"
  F "github.com/IBM/fp-go/v2/function"
)

type Person struct {
  Name  string
  Age   int
  Email string
}

func parseEmail(s string) E.Either[error, string] {
  if !strings.Contains(s, "@") {
      return E.Left[string](fmt.Errorf("invalid email: %s", s))
  }
  return E.Right[error](s)
}

func parsePerson(name, age, email string) E.Either[error, Person] {
  return F.Pipe3(
      E.Do[error](E.Monad[error, Person]()),
      E.Bind("age", func() E.Either[error, int] {
          return parsePositiveInt(age)
      }),
      E.Bind("email", func() E.Either[error, string] {
          return parseEmail(email)
      }),
      E.Map(func(data struct {
          age   int
          email string
      }) Person {
          return Person{
              Name:  name,
              Age:   data.age,
              Email: data.email,
          }
      }),
  )
}

func main() {
  // Valid person
  result1 := parsePerson("Alice", "30", "alice@example.com")
  E.Match(
      func(err error) { fmt.Println("Error:", err) },
      func(p Person) { fmt.Printf("Parsed: %+v\\n", p) },
  )(result1)
  
  // Invalid age
  result2 := parsePerson("Bob", "-5", "bob@example.com")
  E.Match(
      func(err error) { fmt.Println("Error:", err) },
      func(p Person) { fmt.Printf("Parsed: %+v\\n", p) },
  )(result2)
}`})]}),"\n",(0,n.jsxs)(l,{id:"csv-parsing",number:"04",title:"Parsing CSV",titleAccent:"Data",children:[(0,n.jsx)(e.p,{children:"Parse CSV files with validation and error handling."}),(0,n.jsx)(s,{file:"parse-csv.go",children:`package main

import (
  "encoding/csv"
  "fmt"
  "strings"
  A "github.com/IBM/fp-go/v2/array"
  E "github.com/IBM/fp-go/v2/either"
  F "github.com/IBM/fp-go/v2/function"
)

type Product struct {
  ID    int
  Name  string
  Price float64
}

func parseProduct(record []string) E.Either[error, Product] {
  if len(record) != 3 {
      return E.Left[Product](fmt.Errorf("expected 3 fields, got %d", len(record)))
  }
  
  return F.Pipe3(
      E.Do[error](E.Monad[error, Product]()),
      E.Bind("id", func() E.Either[error, int] {
          return parseInt(record[0])
      }),
      E.Bind("price", func() E.Either[error, float64] {
          return parseFloat(record[2])
      }),
      E.Map(func(data struct {
          id    int
          price float64
      }) Product {
          return Product{
              ID:    data.id,
              Name:  record[1],
              Price: data.price,
          }
      }),
  )
}

func parseCSV(data string) E.Either[error, []Product] {
  reader := csv.NewReader(strings.NewReader(data))
  records, err := reader.ReadAll()
  if err != nil {
      return E.Left[[]Product](err)
  }
  
  // Skip header
  if len(records) > 0 {
      records = records[1:]
  }
  
  return A.Traverse[[]string](E.Applicative[error, Product]())(
      parseProduct,
  )(records)
}

func main() {
  csvData := \`ID,Name,Price
1,Laptop,999.99
2,Mouse,29.99
3,Keyboard,79.99\`
  
  result := parseCSV(csvData)
  
  E.Match(
      func(err error) { fmt.Println("Error:", err) },
      func(products []Product) {
          fmt.Println("Parsed products:")
          for _, p := range products {
              fmt.Printf("  %d: %s - $%.2f\\n", p.ID, p.Name, p.Price)
          }
      },
  )(result)
}`})]}),"\n",(0,n.jsxs)(l,{id:"json-parsing",number:"05",title:"JSON",titleAccent:"Parsing",children:[(0,n.jsx)(e.p,{children:"Parse and validate JSON data with type safety."}),(0,n.jsx)(s,{file:"parse-json.go",children:`package main

import (
  "encoding/json"
  "fmt"
  E "github.com/IBM/fp-go/v2/either"
  F "github.com/IBM/fp-go/v2/function"
)

type Config struct {
  Port    int    \`json:"port"\`
  Host    string \`json:"host"\`
  Timeout int    \`json:"timeout"\`
}

func parseJSON[T any](data []byte) E.Either[error, T] {
  var result T
  err := json.Unmarshal(data, &result)
  if err != nil {
      return E.Left[T](err)
  }
  return E.Right[error](result)
}

func validateConfig(cfg Config) E.Either[error, Config] {
  if cfg.Port < 1 || cfg.Port > 65535 {
      return E.Left[Config](fmt.Errorf("invalid port: %d", cfg.Port))
  }
  if cfg.Host == "" {
      return E.Left[Config](fmt.Errorf("host cannot be empty"))
  }
  if cfg.Timeout < 0 {
      return E.Left[Config](fmt.Errorf("timeout must be non-negative"))
  }
  return E.Right[error](cfg)
}

func parseConfig(data []byte) E.Either[error, Config] {
  return F.Pipe2(
      parseJSON[Config](data),
      E.Chain(validateConfig),
  )
}

func main() {
  // Valid config
  validJSON := []byte(\`{
      "port": 8080,
      "host": "localhost",
      "timeout": 30
  }\`)
  
  result1 := parseConfig(validJSON)
  E.Match(
      func(err error) { fmt.Println("Error:", err) },
      func(cfg Config) { fmt.Printf("Valid config: %+v\\n", cfg) },
  )(result1)
  
  // Invalid port
  invalidJSON := []byte(\`{
      "port": 99999,
      "host": "localhost",
      "timeout": 30
  }\`)
  
  result2 := parseConfig(invalidJSON)
  E.Match(
      func(err error) { fmt.Println("Error:", err) },
      func(cfg Config) { fmt.Printf("Valid config: %+v\\n", cfg) },
  )(result2)
}`})]}),"\n",(0,n.jsxs)(l,{id:"accumulation",number:"06",title:"Parsing with Error",titleAccent:"Accumulation",children:[(0,n.jsx)(e.p,{children:"Collect all validation errors instead of stopping at the first one."}),(0,n.jsx)(s,{file:"accumulate-errors.go",children:`package main

import (
  "fmt"
  "strconv"
  "strings"
  E "github.com/IBM/fp-go/v2/either"
)

type ValidationError struct {
  Field   string
  Message string
}

type UserInput struct {
  Username string
  Email    string
  Age      string
}

type ValidatedUser struct {
  Username string
  Email    string
  Age      int
}

func validateUsername(username string) E.Either[[]ValidationError, string] {
  if len(username) < 3 {
      return E.Left[string]([]ValidationError{
          {Field: "username", Message: "must be at least 3 characters"},
      })
  }
  return E.Right[[]ValidationError](username)
}

func validateEmail(email string) E.Either[[]ValidationError, string] {
  if !strings.Contains(email, "@") {
      return E.Left[string]([]ValidationError{
          {Field: "email", Message: "must contain @"},
      })
  }
  return E.Right[[]ValidationError](email)
}

func validateAge(age string) E.Either[[]ValidationError, int] {
  n, err := strconv.Atoi(age)
  if err != nil {
      return E.Left[int]([]ValidationError{
          {Field: "age", Message: "must be a number"},
      })
  }
  if n < 0 || n > 120 {
      return E.Left[int]([]ValidationError{
          {Field: "age", Message: "must be between 0 and 120"},
      })
  }
  return E.Right[[]ValidationError](n)
}

func validateUser(input UserInput) E.Either[[]ValidationError, ValidatedUser] {
  // Collect all validation results
  usernameResult := validateUsername(input.Username)
  emailResult := validateEmail(input.Email)
  ageResult := validateAge(input.Age)
  
  // If any failed, combine all errors
  if usernameResult.IsLeft() || emailResult.IsLeft() || ageResult.IsLeft() {
      errors := []ValidationError{}
      if usernameResult.IsLeft() {
          errors = append(errors, usernameResult.Left()...)
      }
      if emailResult.IsLeft() {
          errors = append(errors, emailResult.Left()...)
      }
      if ageResult.IsLeft() {
          errors = append(errors, ageResult.Left()...)
      }
      return E.Left[ValidatedUser](errors)
  }
  
  return E.Right[[]ValidationError](ValidatedUser{
      Username: usernameResult.Right(),
      Email:    emailResult.Right(),
      Age:      ageResult.Right(),
  })
}

func main() {
  // Multiple validation errors
  input := UserInput{
      Username: "ab",           // Too short
      Email:    "invalid",      // No @
      Age:      "150",          // Out of range
  }
  
  result := validateUser(input)
  
  E.Match(
      func(errors []ValidationError) {
          fmt.Println("Validation errors:")
          for _, err := range errors {
              fmt.Printf("  %s: %s\\n", err.Field, err.Message)
          }
      },
      func(user ValidatedUser) {
          fmt.Printf("Valid user: %+v\\n", user)
      },
  )(result)
}`})]}),"\n",(0,n.jsx)(l,{id:"best-practices",number:"07",title:"Best",titleAccent:"Practices",children:(0,n.jsxs)(t,{children:[(0,n.jsx)(i,{status:"required",children:(0,n.jsxs)(e.p,{children:[(0,n.jsx)(e.strong,{children:"Fail fast for dependencies"})," \u2014 Use sequential parsing when later steps depend on earlier ones"]})}),(0,n.jsx)(i,{status:"required",children:(0,n.jsxs)(e.p,{children:[(0,n.jsx)(e.strong,{children:"Accumulate for independence"})," \u2014 Collect all errors when validations are independent"]})}),(0,n.jsx)(i,{status:"required",children:(0,n.jsxs)(e.p,{children:[(0,n.jsx)(e.strong,{children:"Provide clear errors"})," \u2014 Include context and field names in error messages"]})}),(0,n.jsx)(i,{status:"recommended",children:(0,n.jsxs)(e.p,{children:[(0,n.jsx)(e.strong,{children:"Use type-safe parsers"})," \u2014 Leverage generics for compile-time type safety"]})}),(0,n.jsx)(i,{status:"recommended",children:(0,n.jsxs)(e.p,{children:[(0,n.jsx)(e.strong,{children:"Validate after parsing"})," \u2014 Separate parsing from validation for clarity"]})}),(0,n.jsx)(i,{status:"optional",children:(0,n.jsxs)(e.p,{children:[(0,n.jsx)(e.strong,{children:"Build parser combinators"})," \u2014 Create reusable parsing building blocks"]})})]})})]})}function u(r={}){let{wrapper:e}={...(0,a.R)(),...r.components};return e?(0,n.jsx)(e,{...r,children:(0,n.jsx)(d,{...r})}):d(r)}function f(r,e){throw Error("Expected "+(e?"component":"object")+" `"+r+"` to be defined: you likely forgot to import, pass, or provide it.")}},8453(r,e,t){t.d(e,{R:()=>s,x:()=>o});var i=t(6540);let n={},a=i.createContext(n);function s(r){let e=i.useContext(a);return i.useMemo(function(){return"function"==typeof r?r(e):{...e,...r}},[e,r])}function o(r){let e;return e=r.disableParentContext?"function"==typeof r.components?r.components(n):r.components||n:s(r.components),i.createElement(a.Provider,{value:e},r.children)}}}]);
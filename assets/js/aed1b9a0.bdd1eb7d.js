"use strict";(self.webpackChunkfp_go_docs=self.webpackChunkfp_go_docs||[]).push([["2105"],{5389(e,t,n){n.r(t),n.d(t,{metadata:()=>i,default:()=>u,frontMatter:()=>s,contentTitle:()=>o,toc:()=>p,assets:()=>a});var i=JSON.parse('{"id":"v2/collections/record-ap","title":"Record - Applicative","description":"Applying maps of functions to maps of values with applicative operations.","source":"@site/docs/v2/collections/record-ap.md","sourceDirName":"v2/collections","slug":"/v2/collections/record-ap","permalink":"/fp-go/docs/v2/collections/record-ap","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":17,"frontMatter":{"title":"Record - Applicative","hide_title":true,"description":"Applying maps of functions to maps of values with applicative operations.","sidebar_position":17},"sidebar":"apiSidebar","previous":{"title":"Record (Map)","permalink":"/fp-go/docs/v2/collections/record"},"next":{"title":"Record - Chain","permalink":"/fp-go/docs/v2/collections/record-chain"}}'),r=n(4848),l=n(8453);let s={title:"Record - Applicative",hide_title:!0,description:"Applying maps of functions to maps of values with applicative operations.",sidebar_position:17},o,a={},p=[{value:"Ap - Apply Functions",id:"ap---apply-functions",level:3},{value:"Flap - Apply Value",id:"flap---apply-value",level:3},{value:"Multiple Transformations",id:"multiple-transformations",level:3},{value:"Formatting Pipeline",id:"formatting-pipeline",level:3},{value:"Validation Suite",id:"validation-suite",level:3},{value:"Data Transformers",id:"data-transformers",level:3}];function c(e){let t={code:"code",h3:"h3",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.R)(),...e.components},{ApiTable:n,Callout:i,CodeCard:s,PageHeader:o,Section:a}=t;return n||d("ApiTable",!0),i||d("Callout",!0),s||d("CodeCard",!0),o||d("PageHeader",!0),a||d("Section",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o,{eyebrow:"Reference \xb7 Collections",title:"Record",titleAccent:"Applicative",lede:"Applying maps of functions to maps of values. Applicative operations enable function application across map structures.",meta:[{label:"Package",value:"github.com/IBM/fp-go/v2/record"},{label:"Operations",value:"Ap, Flap"}]}),"\n",(0,r.jsx)(a,{id:"api",number:"01",title:"Core",titleAccent:"API",children:(0,r.jsx)(n,{children:(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Function"}),(0,r.jsx)(t.th,{children:"Signature"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"Ap"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"func Ap[K comparable, A, B any](Monoid[K, B]) func(map[K]func(A) B) func(map[K]A) map[K]B"})}),(0,r.jsx)(t.td,{children:"Apply functions to values"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"Flap"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"func Flap[K comparable, A, B any](A) func(map[K]func(A) B) map[K]B"})}),(0,r.jsx)(t.td,{children:"Apply value to functions"})]})]})]})})}),"\n",(0,r.jsxs)(a,{id:"examples",number:"02",title:"Usage",titleAccent:"Examples",children:[(0,r.jsx)(t.h3,{id:"ap---apply-functions",children:"Ap - Apply Functions"}),(0,r.jsx)(s,{file:"ap.go",children:`import (
  R "github.com/IBM/fp-go/v2/record"
  M "github.com/IBM/fp-go/v2/monoid"
  F "github.com/IBM/fp-go/v2/function"
)

fns := map[string]func(int) int{
  "double": func(n int) int { return n * 2 },
  "square": func(n int) int { return n * n },
}

values := map[string]int{
  "a": 5,
  "b": 3,
}

// Apply all functions to all values
result := F.Pipe2(
  values,
  R.Ap(M.MergeMonoid[string, int]())(fns),
)
// Result depends on merge strategy
// Combines function and value maps
`}),(0,r.jsx)(t.h3,{id:"flap---apply-value",children:"Flap - Apply Value"}),(0,r.jsx)(s,{file:"flap.go",children:`fns := map[string]func(int) string{
  "double": func(n int) string {
      return fmt.Sprintf("Double: %d", n*2)
  },
  "square": func(n int) string {
      return fmt.Sprintf("Square: %d", n*n)
  },
  "triple": func(n int) string {
      return fmt.Sprintf("Triple: %d", n*3)
  },
}

// Apply single value to all functions
result := F.Pipe2(
  fns,
  R.Flap(5),
)
// map[string]string{
//   "double": "Double: 10",
//   "square": "Square: 25",
//   "triple": "Triple: 15",
// }
`}),(0,r.jsx)(t.h3,{id:"multiple-transformations",children:"Multiple Transformations"}),(0,r.jsx)(s,{file:"multiple.go",children:`type Validator func(string) bool

validators := map[string]Validator{
  "length":    func(s string) bool { return len(s) >= 5 },
  "uppercase": func(s string) bool { return s == strings.ToUpper(s) },
  "numeric":   func(s string) bool { return regexp.MustCompile(\`^[0-9]+$\`).MatchString(s) },
}

// Test a value against all validators
results := F.Pipe2(
  validators,
  R.Flap("HELLO"),
)
// map[string]bool{
//   "length": true,
//   "uppercase": true,
//   "numeric": false,
// }
`}),(0,r.jsx)(t.h3,{id:"formatting-pipeline",children:"Formatting Pipeline"}),(0,r.jsx)(s,{file:"format.go",children:`type Formatter func(float64) string

formatters := map[string]Formatter{
  "currency": func(n float64) string {
      return fmt.Sprintf("$%.2f", n)
  },
  "percent": func(n float64) string {
      return fmt.Sprintf("%.1f%%", n*100)
  },
  "scientific": func(n float64) string {
      return fmt.Sprintf("%.2e", n)
  },
}

value := 0.12345

formatted := F.Pipe2(
  formatters,
  R.Flap(value),
)
// map[string]string{
//   "currency": "$0.12",
//   "percent": "12.3%",
//   "scientific": "1.23e-01",
// }
`})]}),"\n",(0,r.jsxs)(a,{id:"patterns",number:"03",title:"Common",titleAccent:"Patterns",children:[(0,r.jsx)(t.h3,{id:"validation-suite",children:"Validation Suite"}),(0,r.jsx)(s,{file:"validation.go",children:`type ValidationRule func(User) error

rules := map[string]ValidationRule{
  "email": func(u User) error {
      if !strings.Contains(u.Email, "@") {
          return errors.New("invalid email")
      }
      return nil
  },
  "age": func(u User) error {
      if u.Age < 18 {
          return errors.New("must be 18+")
      }
      return nil
  },
}

user := User{Email: "test@example.com", Age: 25}

// Run all validations
results := F.Pipe2(
  rules,
  R.Flap(user),
)
// map[string]error{
//   "email": nil,
//   "age": nil,
// }
`}),(0,r.jsx)(t.h3,{id:"data-transformers",children:"Data Transformers"}),(0,r.jsx)(s,{file:"transformers.go",children:`transformers := map[string]func(string) string{
  "lowercase": strings.ToLower,
  "uppercase": strings.ToUpper,
  "title":     strings.Title,
}

input := "hello world"

transformed := F.Pipe2(
  transformers,
  R.Flap(input),
)
// map[string]string{
//   "lowercase": "hello world",
//   "uppercase": "HELLO WORLD",
//   "title": "Hello World",
// }
`})]}),"\n",(0,r.jsx)(i,{type:"info",children:(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Applicative Pattern"}),": ",(0,r.jsx)(t.code,{children:"Flap"})," is particularly useful when you have a collection of functions and want to apply a single value to all of them, producing a map of results."]})})]})}function u(e={}){let{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}function d(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},8453(e,t,n){n.d(t,{R:()=>s,x:()=>o});var i=n(6540);let r={},l=i.createContext(r);function s(e){let t=i.useContext(l);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(l.Provider,{value:t},e.children)}}}]);
"use strict";(self.webpackChunkfp_go_docs=self.webpackChunkfp_go_docs||[]).push([["6499"],{8513(e,r,t){t.r(r),t.d(r,{metadata:()=>i,default:()=>p,frontMatter:()=>a,contentTitle:()=>u,toc:()=>d,assets:()=>c});var i=JSON.parse('{"id":"quickstart","title":"5-Minute Quickstart","description":"Install fp-go, write your first program, and learn the core composition patterns in 5 minutes.","source":"@site/docs/quickstart.md","sourceDirName":".","slug":"/quickstart","permalink":"/fp-go/docs/quickstart","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2,"title":"5-Minute Quickstart","hide_title":true,"description":"Install fp-go, write your first program, and learn the core composition patterns in 5 minutes."},"sidebar":"tutorialSidebar","previous":{"title":"Installation","permalink":"/fp-go/docs/installation"},"next":{"title":"Why fp-go?","permalink":"/fp-go/docs/why-fp-go"}}'),n=t(4848),s=t(8453),l=t(773),o=t(7250);let a={sidebar_position:2,title:"5-Minute Quickstart",hide_title:!0,description:"Install fp-go, write your first program, and learn the core composition patterns in 5 minutes."},u,c={},d=[{value:"Run it",id:"run-it",level:3},{value:"1. Pure functions return results",id:"1-pure-functions-return-results",level:3},{value:"2. Compose with Pipe",id:"2-compose-with-pipe",level:3},{value:"3. Transform with Map",id:"3-transform-with-map",level:3},{value:"4. Extract with GetOrElse",id:"4-extract-with-getorelse",level:3},{value:"Common questions",id:"common-questions",level:3},{value:"Need help?",id:"need-help",level:3}];function h(e){let r={a:"a",em:"em",h3:"h3",p:"p",...(0,s.R)(),...e.components},{ApiTable:t,Callout:i,Checklist:a,CodeCard:u,Compare:c,CompareCol:d,MetaPill:h,PageHeader:p,Section:m,TLDR:x,TLDRCard:g}=r;return t||f("ApiTable",!0),i||f("Callout",!0),a||f("Checklist",!0),u||f("CodeCard",!0),c||f("Compare",!0),d||f("CompareCol",!0),h||f("MetaPill",!0),p||f("PageHeader",!0),m||f("Section",!0),x||f("TLDR",!0),g||f("TLDRCard",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(p,{eyebrow:"Getting started \xb7 Section 03 / 03",title:"5-minute",titleAccent:"quickstart.",lede:"Install fp-go, write your first program, and learn the core composition patterns \u2014 Pipe, Map, Chain, GetOrElse \u2014 in one sitting.",meta:[{label:"// Version",value:(0,n.jsxs)(n.Fragment,{children:["v2.2.82 ",(0,n.jsx)(h,{children:"LATEST"})]})},{label:"// Go required",value:"1.24+ (v2)"},{label:"// Reading time",value:"5 min \xb7 5 steps"}]}),"\n",(0,n.jsxs)(x,{children:[(0,n.jsx)(g,{label:"// You'll learn",value:"5",unit:"patterns",description:"Pipe, Map, Chain, GetOrElse, automatic error propagation."}),(0,n.jsx)(g,{label:"// Prereqs",prose:!0,value:(0,n.jsxs)(n.Fragment,{children:["Go ",(0,n.jsx)(r.em,{children:"1.24+"})," and basic Go familiarity."]})}),(0,n.jsx)(g,{label:"// You'll build",prose:!0,value:(0,n.jsxs)(n.Fragment,{children:["A safe divider and a ",(0,n.jsx)(r.em,{children:"composable"})," calculator."]})})]}),"\n",(0,n.jsx)(m,{id:"prereqs",number:"01",title:"Prerequisites",tag:"Difficulty \xb7 Beginner",children:(0,n.jsx)(i,{title:"Before you start.",children:(0,n.jsxs)("ul",{children:[(0,n.jsxs)("li",{children:[(0,n.jsx)("strong",{children:"Go 1.24+"})," for v2 (recommended)"]}),(0,n.jsxs)("li",{children:[(0,n.jsx)("strong",{children:"Go 1.18+"})," for v1 (legacy)"]}),(0,n.jsx)("li",{children:"Basic understanding of Go"})]})})}),"\n",(0,n.jsx)(m,{id:"install",number:"02",title:"Install",titleAccent:"fp-go.",lede:"Choose your version. v2 is recommended for any new project.",children:(0,n.jsxs)(l.A,{children:[(0,n.jsxs)(o.A,{value:"v2",label:"v2 (Recommended)",default:!0,children:[(0,n.jsx)(u,{file:"shell",status:"tested",children:`# Initialize your Go module (if not already done)
go mod init myapp

# Install fp-go v2
go get github.com/IBM/fp-go/v2`}),(0,n.jsx)(i,{type:"success",title:"Why v2.",children:(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:"Latest features (Result, Effect, idiomatic packages)"}),(0,n.jsx)("li",{children:"Better type inference"}),(0,n.jsx)("li",{children:"Actively maintained"}),(0,n.jsx)("li",{children:"Requires Go 1.24+"})]})})]}),(0,n.jsxs)(o.A,{value:"v1",label:"v1 (Legacy)",children:[(0,n.jsx)(u,{file:"shell",children:`# Initialize your Go module (if not already done)
go mod init myapp

# Install fp-go v1
go get github.com/IBM/fp-go`}),(0,n.jsx)(i,{type:"warn",title:"When to choose v1.",children:(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:"Stuck on Go 1.18\u20131.23"}),(0,n.jsx)("li",{children:"Existing v1 codebase"}),(0,n.jsx)("li",{children:"Need Writer monad (v1 only)"})]})})]})]})}),"\n",(0,n.jsxs)(m,{id:"first-program",number:"03",title:"Your first",titleAccent:"program.",lede:"A safe divider. Compare the three approaches side-by-side.",children:[(0,n.jsxs)(l.A,{children:[(0,n.jsxs)(o.A,{value:"without",label:"Without fp-go",children:[(0,n.jsx)(u,{file:"main.go",children:`package main

import (
  "errors"
  "fmt"
)

func divide(a, b int) (int, error) {
  if b == 0 {
      return 0, errors.New("division by zero")
  }
  return a / b, nil
}

func main() {
  // Manual error handling
  result, err := divide(10, 2)
  if err != nil {
      fmt.Println("Error:", err)
      return
  }

  doubled := result * 2
  fmt.Println("Result:", doubled) // Output: Result: 10

  // What if we want to chain more operations?
  // More if err != nil checks...
}`}),(0,n.jsxs)(c,{children:[(0,n.jsxs)(d,{kind:"bad",pill:"problems",children:[(0,n.jsx)("p",{children:"Repetitive error checking."}),(0,n.jsx)("p",{children:"Hard to compose operations."}),(0,n.jsx)("p",{children:"Error handling mixed with business logic."})]}),(0,n.jsxs)(d,{kind:"good",pill:"see right tab",title:"fp-go",children:[(0,n.jsx)("p",{children:"Automatic error propagation."}),(0,n.jsx)("p",{children:"Composable pipelines."}),(0,n.jsx)("p",{children:"Business logic stays clear."})]})]})]}),(0,n.jsxs)(o.A,{value:"v2",label:"With v2",default:!0,children:[(0,n.jsx)(u,{file:"main.go",status:"tested",children:`package main

import (
  "errors"
  "fmt"
  "github.com/IBM/fp-go/v2/function"
  "github.com/IBM/fp-go/v2/result"
)

// Pure function that returns Result instead of (value, error)
func divide(a, b int) result.Result[int] {
  if b == 0 {
      return result.Err[int](errors.New("division by zero"))
  }
  return result.Ok(a / b)
}

func main() {
  // Compose operations with automatic error handling
  finalResult := function.Pipe2(
      divide(10, 2),
      result.Map(func(x int) int { return x * 2 }),
      result.GetOrElse(func() int { return 0 }),
  )

  fmt.Println("Result:", finalResult) // Output: Result: 10

  // Error case is handled automatically
  errorResult := function.Pipe2(
      divide(10, 0), // Returns Err
      result.Map(func(x int) int { return x * 2 }), // Skipped!
      result.GetOrElse(func() int { return 0 }), // Returns default
  )

  fmt.Println("Error result:", errorResult) // Output: Error result: 0
}`}),(0,n.jsx)(i,{type:"success",title:"Benefits.",children:(0,n.jsx)(r.p,{children:"No repetitive error checking. Easy composition. Errors propagate automatically. Business logic stays prominent."})})]}),(0,n.jsxs)(o.A,{value:"v1",label:"With v1",children:[(0,n.jsx)(u,{file:"main.go",children:`package main

import (
  "errors"
  "fmt"
  "github.com/IBM/fp-go/either"
  "github.com/IBM/fp-go/function"
)

// Pure function that returns Either instead of (value, error)
func divide(a, b int) either.Either[error, int] {
  if b == 0 {
      return either.Left[int](errors.New("division by zero"))
  }
  return either.Right[error](a / b)
}

func main() {
  // Compose operations with automatic error handling
  finalResult := function.Pipe2(
      divide(10, 2),
      either.Map(func(x int) int { return x * 2 }),
      either.GetOrElse(func() int { return 0 }),
  )

  fmt.Println("Result:", finalResult) // Output: Result: 10

  // Error case is handled automatically
  errorResult := function.Pipe2(
      divide(10, 0), // Returns Left
      either.Map(func(x int) int { return x * 2 }), // Skipped!
      either.GetOrElse(func() int { return 0 }), // Returns default
  )

  fmt.Println("Error result:", errorResult) // Output: Error result: 0
}`}),(0,n.jsx)(i,{type:"warn",title:"Note.",children:(0,n.jsxs)(r.p,{children:["v1 uses ",(0,n.jsx)("code",{children:"Either[error, A]"})," instead of v2's ",(0,n.jsx)("code",{children:"Result[A]"}),"."]})})]})]}),(0,n.jsx)(r.h3,{id:"run-it",children:"Run it"}),(0,n.jsx)(u,{file:"shell",children:"go run main.go"}),(0,n.jsx)(u,{file:"output",children:`Result: 10
Error result: 0`})]}),"\n",(0,n.jsxs)(m,{id:"pattern",number:"04",title:"Understanding the",titleAccent:"pattern.",lede:"Four building blocks: Result/Either return types, Pipe to compose, Map to transform, GetOrElse to extract.",children:[(0,n.jsx)(r.h3,{id:"1-pure-functions-return-results",children:"1. Pure functions return results"}),(0,n.jsxs)(l.A,{children:[(0,n.jsx)(o.A,{value:"v2",label:"v2",default:!0,children:(0,n.jsx)(u,{file:"signature.go",children:`// Instead of this:
func divide(a, b int) (int, error)

// We write this:
func divide(a, b int) result.Result[int]`})}),(0,n.jsx)(o.A,{value:"v1",label:"v1",children:(0,n.jsx)(u,{file:"signature.go",children:`// Instead of this:
func divide(a, b int) (int, error)

// We write this:
func divide(a, b int) either.Either[error, int]`})})]}),(0,n.jsx)(r.h3,{id:"2-compose-with-pipe",children:"2. Compose with Pipe"}),(0,n.jsx)(u,{file:"pipe.go",children:`result := function.Pipe2(
  operation1(),      // Returns Result[A]
  operation2,        // A -> Result[B]
  operation3,        // B -> C
)`}),(0,n.jsxs)("p",{children:[(0,n.jsx)("strong",{children:"Pipe"})," feeds the output of one function into the next, automatically handling errors."]}),(0,n.jsx)(r.h3,{id:"3-transform-with-map",children:"3. Transform with Map"}),(0,n.jsxs)(l.A,{children:[(0,n.jsx)(o.A,{value:"v2",label:"v2",default:!0,children:(0,n.jsx)(u,{file:"map.go",children:`result.Map(func(x int) int {
  return x * 2
})`})}),(0,n.jsx)(o.A,{value:"v1",label:"v1",children:(0,n.jsx)(u,{file:"map.go",children:`either.Map(func(x int) int {
  return x * 2
})`})})]}),(0,n.jsxs)("p",{children:[(0,n.jsx)("strong",{children:"Map"})," transforms the value inside a Result/Either \u2014 but only if it's successful. Errors pass through unchanged."]}),(0,n.jsx)(r.h3,{id:"4-extract-with-getorelse",children:"4. Extract with GetOrElse"}),(0,n.jsxs)(l.A,{children:[(0,n.jsx)(o.A,{value:"v2",label:"v2",default:!0,children:(0,n.jsx)(u,{file:"getorelse.go",children:`result.GetOrElse(func() int {
  return 0
})`})}),(0,n.jsx)(o.A,{value:"v1",label:"v1",children:(0,n.jsx)(u,{file:"getorelse.go",children:`either.GetOrElse(func() int {
  return 0
})`})})]}),(0,n.jsxs)("p",{children:[(0,n.jsx)("strong",{children:"GetOrElse"})," extracts the value or provides a default if there was an error."]})]}),"\n",(0,n.jsxs)(m,{id:"complex",number:"05",title:"A more complex",titleAccent:"example.",lede:"Chain multiple operations into one pipeline. Failure in any step short-circuits the rest.",children:[(0,n.jsxs)(l.A,{children:[(0,n.jsx)(o.A,{value:"v2",label:"v2",default:!0,children:(0,n.jsx)(u,{file:"calculator.go",status:"tested",children:`package main

import (
  "errors"
  "fmt"
  "github.com/IBM/fp-go/v2/function"
  "github.com/IBM/fp-go/v2/result"
)

func divide(a, b int) result.Result[int] {
  if b == 0 {
      return result.Err[int](errors.New("division by zero"))
  }
  return result.Ok(a / b)
}

func sqrt(n int) result.Result[int] {
  if n < 0 {
      return result.Err[int](errors.New("cannot sqrt negative number"))
  }
  // Simplified integer sqrt
  result := 0
  for result*result <= n {
      result++
  }
  return result.Ok(result - 1)
}

func calculate(a, b, c int) result.Result[string] {
  return function.Pipe3(
      divide(a, b),                                    // 100 / 4 = 25
      result.Chain(func(x int) result.Result[int] {   // Chain another Result operation
          return divide(x, c)                          // 25 / 5 = 5
      }),
      result.Chain(sqrt),                              // sqrt(5) \u{2248} 2
      result.Map(func(x int) string {                  // Convert to string
          return fmt.Sprintf("Final result: %d", x)
      }),
  )
}

func main() {
  // Success case
  success := calculate(100, 4, 5)
  fmt.Println(result.GetOrElse(func() string {
      return "Error occurred"
  })(success))
  // Output: Final result: 2

  // Error case (division by zero)
  failure := calculate(100, 0, 5)
  fmt.Println(result.GetOrElse(func() string {
      return "Error occurred"
  })(failure))
  // Output: Error occurred
}`})}),(0,n.jsx)(o.A,{value:"v1",label:"v1",children:(0,n.jsx)(u,{file:"calculator.go",children:`package main

import (
  "errors"
  "fmt"
  "github.com/IBM/fp-go/either"
  "github.com/IBM/fp-go/function"
)

func divide(a, b int) either.Either[error, int] {
  if b == 0 {
      return either.Left[int](errors.New("division by zero"))
  }
  return either.Right[error](a / b)
}

func sqrt(n int) either.Either[error, int] {
  if n < 0 {
      return either.Left[int](errors.New("cannot sqrt negative number"))
  }
  // Simplified integer sqrt
  result := 0
  for result*result <= n {
      result++
  }
  return either.Right[error](result - 1)
}

func calculate(a, b, c int) either.Either[error, string] {
  return function.Pipe3(
      divide(a, b),                                           // 100 / 4 = 25
      either.Chain(func(x int) either.Either[error, int] {   // Chain another Either operation
          return divide(x, c)                                 // 25 / 5 = 5
      }),
      either.Chain(sqrt),                                     // sqrt(5) \u{2248} 2
      either.Map(func(x int) string {                         // Convert to string
          return fmt.Sprintf("Final result: %d", x)
      }),
  )
}

func main() {
  // Success case
  success := calculate(100, 4, 5)
  fmt.Println(either.GetOrElse(func() string {
      return "Error occurred"
  })(success))
  // Output: Final result: 2

  // Error case (division by zero)
  failure := calculate(100, 0, 5)
  fmt.Println(either.GetOrElse(func() string {
      return "Error occurred"
  })(failure))
  // Output: Error occurred
}`})})]}),(0,n.jsx)(t,{columns:["Concept","When to use","Notes"],rows:[{symbol:"Chain",signature:"a.k.a. FlatMap",description:"Use when your transformation returns another Result/Either."},{symbol:"Map",signature:"Functor map",description:"Use when your transformation returns a plain value."},{symbol:"Pipe",signature:"function.PipeN",description:"Compose multiple operations into a pipeline."},{symbol:"Auto error",signature:"Short-circuit",description:"If any step fails, subsequent steps are skipped."}]})]}),"\n",(0,n.jsxs)(m,{id:"next",number:"06",title:"What's",titleAccent:"next?",lede:"Pick a thread to keep learning.",children:[(0,n.jsx)(t,{columns:["Topic","Page","Why"],rows:[{symbol:"Why",signature:(0,n.jsx)(r.a,{href:"./why-fp-go",children:"Why fp-go?"}),description:"Understand the benefits and when to reach for it."},{symbol:"Pure functions",signature:(0,n.jsx)(r.a,{href:"./concepts/pure-functions",children:"Pure functions"}),description:"The foundation of functional programming."},{symbol:"Monads",signature:(0,n.jsx)(r.a,{href:"./concepts/monads",children:"Monads"}),description:"The pattern behind Result, Either, IO, etc."},{symbol:"Result",signature:(0,n.jsx)(r.a,{href:"./v2/result",children:"Result"}),description:"Recommended type for v2 error handling."},{symbol:"Either",signature:(0,n.jsx)(r.a,{href:"./v2/either",children:"Either"}),description:"Generic sum type."},{symbol:"Option",signature:(0,n.jsx)(r.a,{href:"./v2/option",children:"Option"}),description:"Handle optional values safely."},{symbol:"IO",signature:(0,n.jsx)(r.a,{href:"./v2/io",children:"IO"}),description:"Manage side effects."}]}),(0,n.jsx)(r.h3,{id:"common-questions",children:"Common questions"}),(0,n.jsxs)(i,{title:"When should I use fp-go?",children:[(0,n.jsxs)("p",{children:[(0,n.jsx)("strong",{children:"Good fit:"})," complex error handling, data transformation pipelines, composable business logic, testing-heavy codebases."]}),(0,n.jsxs)("p",{children:[(0,n.jsx)("strong",{children:"Not ideal:"})," simple CRUD, performance-critical hot paths (use idiomatic packages), teams unfamiliar with FP."]})]}),(0,n.jsx)(i,{type:"success",title:"Is fp-go production-ready?",children:(0,n.jsx)(r.p,{children:"Yes. fp-go is used in production at IBM and elsewhere. v2 is actively maintained and recommended for new projects."})}),(0,n.jsx)(i,{type:"info",title:"What's the performance impact?",children:(0,n.jsx)(r.p,{children:"Standard packages: minimal overhead. Idiomatic packages (v2): 2\u201332\xd7 faster, near-native performance."})}),(0,n.jsx)(i,{type:"info",title:"Migrating from v1 to v2?",children:(0,n.jsxs)(r.p,{children:["See the ",(0,n.jsx)("a",{href:"./migration/v1-to-v2",children:"migration guide"})," for a complete walkthrough of the 5 breaking changes and how to handle them."]})})]}),"\n",(0,n.jsxs)(m,{id:"summary",number:"07",title:"Summary",children:[(0,n.jsx)(a,{title:"What you learned",items:[{label:"How to install fp-go (v1 or v2)",done:!0},{label:"How to write pure functions with Result/Either",done:!0},{label:"How to compose operations with Pipe",done:!0},{label:"How to transform values with Map and Chain",done:!0},{label:"How to handle errors automatically",done:!0},{label:"How to build complex pipelines",done:!0}]}),(0,n.jsx)(i,{type:"success",title:"Next step.",children:(0,n.jsxs)(r.p,{children:["Read ",(0,n.jsx)("a",{href:"./why-fp-go",children:"Why fp-go?"})," to understand when and why to use functional programming in Go."]})}),(0,n.jsx)(r.h3,{id:"need-help",children:"Need help?"}),(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"./intro",children:"Full documentation"})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"https://github.com/IBM/fp-go/discussions",children:"GitHub Discussions"})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"https://github.com/IBM/fp-go/issues",children:"Report issues"})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"https://pkg.go.dev/github.com/IBM/fp-go/v2",children:"API reference"})})]})]})]})}function p(e={}){let{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}function f(e,r){throw Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},7250(e,r,t){t.d(r,{A:()=>o});var i=t(4848);t(6540);var n=t(4164),s=t(7663);function l({children:e,className:r,hidden:t}){return(0,i.jsx)("div",{role:"tabpanel",className:(0,n.A)("tabItem_Ymn6",r),hidden:t,children:e})}function o({children:e,className:r,value:t}){let{selectedValue:n,lazy:a}=(0,s.uc)(),u=t===n;return!u&&a?null:(0,i.jsx)(l,{className:r,hidden:!u,children:e})}},773(e,r,t){t.d(r,{A:()=>h});var i=t(4848);t(6540);var n=t(4164),s=t(8287),l=t(7663),o=t(8584),a=t(9863);function u({className:e}){let{selectedValue:r,selectValue:t,tabValues:s,block:a}=(0,l.uc)(),c=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.a_)(),h=e=>{let i=e.currentTarget,n=s[c.indexOf(i)].value;n!==r&&(d(i),t(n))},p=e=>{let r=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{let t=c.indexOf(e.currentTarget)+1;r=c[t]??c[0];break}case"ArrowLeft":{let t=c.indexOf(e.currentTarget)-1;r=c[t]??c[c.length-1]}}r?.focus()};return(0,i.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.A)("tabs",{"tabs--block":a},e),children:s.map(({value:e,label:t,attributes:s})=>(0,i.jsx)("li",{role:"tab",tabIndex:r===e?0:-1,"aria-selected":r===e,ref:e=>{c.push(e)},onKeyDown:p,onClick:h,...s,className:(0,n.A)("tabs__item","tabItem_LNqP",s?.className,{"tabs__item--active":r===e}),children:t??e},e))})}function c({children:e}){return(0,i.jsx)("div",{className:"margin-top--md",children:e})}function d({className:e,children:r}){return(0,i.jsxs)("div",{className:(0,n.A)(s.G.tabs.container,"tabs-container","tabList__CuJ"),children:[(0,i.jsx)(u,{className:e}),(0,i.jsx)(c,{children:r})]})}function h(e){let r=(0,a.A)(),t=(0,l.OC)(e);return(0,i.jsx)(l.O_,{value:t,children:(0,i.jsx)(d,{className:e.className,children:(0,l.vT)(e.children)})},String(r))}},7663(e,r,t){t.d(r,{OC:()=>h,O_:()=>m,uc:()=>f,vT:()=>c});var i=t(4848),n=t(6540),s=t(6347),l=t(9989),o=t(6629),a=t(618),u=t(1367);function c(e){return n.Children.toArray(e).filter(e=>"\n"!==e)}function d({value:e,tabValues:r}){return r.some(r=>r.value===e)}function h(e){let r,{defaultValue:t,queryString:i=!1,groupId:c}=e,h=function(e){let{values:r,children:t}=e;return(0,n.useMemo)(()=>{let e=r??n.Children.toArray(t).flatMap(e=>{if(!e)return[];if((0,n.isValidElement)(e)&&function(e){let{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return[e];let r="string"==typeof e.type?e.type:e.type.name;throw Error(`Docusaurus error: Bad <Tabs> child <${r}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.
If you do not want to pass on a "value" prop to the direct children of <Tabs>, you can also pass an explicit <Tabs values={...}> prop.`)}).map(({props:{value:e,label:r,attributes:t,default:i}})=>({value:e,label:r,attributes:t,default:i})),i=(0,a.XI)(e,(e,r)=>e.value===r.value);if(i.length>0)throw Error(`Docusaurus error: Duplicate values "${i.map(e=>`'${e.value}'`).join(", ")}" found in <Tabs>. Every value needs to be unique.`);return e},[r,t])}(e),[p,f]=(0,n.useState)(()=>(function({defaultValue:e,tabValues:r}){if(0===r.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!d({value:e,tabValues:r}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${r.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}let t=r.find(e=>e.default)??r[0];if(!t)throw Error("Unexpected error: 0 tabValues");return t.value})({defaultValue:t,tabValues:h})),[m,x]=function({queryString:e=!1,groupId:r}){let t=(0,s.W6)(),i=function({queryString:e=!1,groupId:r}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!r)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:e,groupId:r});return[(0,o.aZ)(i),(0,n.useCallback)(e=>{if(!i)return;let r=new URLSearchParams(t.location.search);r.set(i,e),t.replace({...t.location,search:r.toString()})},[i,t])]}({queryString:i,groupId:c}),[g,v]=function({groupId:e}){let r=e?`docusaurus.tab.${e}`:null,[t,i]=(0,u.Dv)(r);return[t,(0,n.useCallback)(e=>{r&&i.set(e)},[r,i])]}({groupId:c}),b=d({value:r=m??g,tabValues:h})?r:null;return(0,l.A)(()=>{b&&f(b)},[b]),{selectedValue:p,selectValue:(0,n.useCallback)(e=>{if(!d({value:e,tabValues:h}))throw Error(`Can't select invalid tab value=${e}`);f(e),x(e),v(e)},[x,v,h]),tabValues:h,lazy:e.lazy??!1,block:e.block??!1}}let p=(0,n.createContext)(null);function f(){let e=n.useContext(p);if(!e)throw Error("useTabsContext() must be used within a Tabs component");return e}function m(e){return(0,i.jsx)(p.Provider,{value:e.value,children:e.children})}},8453(e,r,t){t.d(r,{R:()=>l,x:()=>o});var i=t(6540);let n={},s=i.createContext(n);function l(e){let r=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),i.createElement(s.Provider,{value:r},e.children)}}}]);
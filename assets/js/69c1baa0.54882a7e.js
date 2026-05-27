"use strict";(self.webpackChunkfp_go_docs=self.webpackChunkfp_go_docs||[]).push([["5317"],{8825(e,t,r){r.r(t),r.d(t,{metadata:()=>i,default:()=>p,frontMatter:()=>a,contentTitle:()=>u,toc:()=>f,assets:()=>c});var i=JSON.parse('{"id":"concepts/effects-and-io","title":"Effects and IO","description":"Learn to manage side effects explicitly and safely with fp-go\'s IO types.","source":"@site/docs/concepts/effects-and-io.md","sourceDirName":"concepts","slug":"/concepts/effects-and-io","permalink":"/fp-go/docs/concepts/effects-and-io","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":14,"frontMatter":{"sidebar_position":14,"title":"Effects and IO","hide_title":true,"description":"Learn to manage side effects explicitly and safely with fp-go\'s IO types."},"sidebar":"tutorialSidebar","previous":{"title":"Composition","permalink":"/fp-go/docs/concepts/composition"},"next":{"title":"Higher-Kinded Types","permalink":"/fp-go/docs/concepts/higher-kinded-types"}}'),n=r(4848),l=r(8453),s=r(773),o=r(7250);let a={sidebar_position:14,title:"Effects and IO",hide_title:!0,description:"Learn to manage side effects explicitly and safely with fp-go's IO types."},u,c={},f=[{value:"Effects Make Functions Impure",id:"effects-make-functions-impure",level:3},{value:"What is IO?",id:"what-is-io",level:3},{value:"Key Properties",id:"key-properties",level:3},{value:"IO - Simple Effects",id:"io---simple-effects",level:3},{value:"IOOption - Effects that Might Fail",id:"iooption---effects-that-might-fail",level:3},{value:"IOResult - Effects with Error Handling \u2B50",id:"ioresult---effects-with-error-handling-",level:3},{value:"Creating IO",id:"creating-io",level:3},{value:"Transforming IO",id:"transforming-io",level:3},{value:"Map - Transform the Result",id:"map---transform-the-result",level:4},{value:"Chain - Sequence Effects",id:"chain---sequence-effects",level:4},{value:"Composing IO",id:"composing-io",level:3},{value:"Example 1: File Operations",id:"example-1-file-operations",level:3},{value:"Example 2: HTTP API Call",id:"example-2-http-api-call",level:3},{value:"What is Lazy Evaluation?",id:"what-is-lazy-evaluation",level:3},{value:"Benefits",id:"benefits",level:3},{value:"1. Control When Effects Happen",id:"1-control-when-effects-happen",level:4},{value:"2. Compose Before Executing",id:"2-compose-before-executing",level:4},{value:"3. Retry Logic",id:"3-retry-logic",level:4},{value:"4. Testing",id:"4-testing",level:4},{value:"The Key Insight",id:"the-key-insight",level:3},{value:"Pattern 1: Sequential Effects",id:"pattern-1-sequential-effects",level:3},{value:"Pattern 2: Parallel Effects",id:"pattern-2-parallel-effects",level:3},{value:"Pattern 3: Conditional Effects",id:"pattern-3-conditional-effects",level:3},{value:"Pattern 4: Effect with Fallback",id:"pattern-4-effect-with-fallback",level:3}];function d(e){let t={code:"code",em:"em",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,l.R)(),...e.components},{Callout:r,CodeCard:i,Compare:a,CompareCol:u,PageHeader:c,Section:f,TLDR:d,TLDRCard:p}=t;return r||h("Callout",!0),i||h("CodeCard",!0),a||h("Compare",!0),u||h("CompareCol",!0),c||h("PageHeader",!0),f||h("Section",!0),d||h("TLDR",!0),p||h("TLDRCard",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(c,{eyebrow:"Concepts \xb7 04 / 06",title:"Effects and",titleAccent:"IO.",lede:"Manage side effects explicitly and safely. Learn how IO types let you describe effects as pure values, then execute them when ready.",meta:[{label:"// Difficulty",value:"Intermediate"},{label:"// Reading time",value:"15 min \xb7 9 sections"},{label:"// Prereqs",value:"Pure functions, composition"}]}),"\n",(0,n.jsxs)(d,{children:[(0,n.jsx)(p,{label:"// Key insight",prose:!0,value:(0,n.jsxs)(n.Fragment,{children:["Effects are ",(0,n.jsx)(t.em,{children:"descriptions"}),", not executions."]}),variant:"up"}),(0,n.jsx)(p,{label:"// Recommended type",prose:!0,value:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.code,{children:"IOResult[A]"})," for most effects."]})}),(0,n.jsx)(p,{label:"// Benefits",prose:!0,value:(0,n.jsxs)(n.Fragment,{children:["Lazy, composable, ",(0,n.jsx)(t.em,{children:"testable"})," effects."]})})]}),"\n",(0,n.jsxs)(f,{id:"what-are-effects",number:"01",title:"What are",titleAccent:"effects?",children:[(0,n.jsxs)(t.p,{children:["An ",(0,n.jsx)(t.strong,{children:"effect"})," is anything that interacts with the outside world:"]}),(0,n.jsx)(i,{file:"effects.go",children:`// \u{274C} Reading files
data, err := os.ReadFile("config.json")

// \u{274C} Writing files
os.WriteFile("output.txt", data, 0644)

// \u{274C} Network calls
resp, err := http.Get("https://api.example.com")

// \u{274C} Database queries
rows, err := db.Query("SELECT * FROM users")

// \u{274C} Printing to console
fmt.Println("Hello, World!")

// \u{274C} Getting current time
now := time.Now()

// \u{274C} Random numbers
rand.Int()

// \u{274C} Modifying global state
globalCounter++`}),(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Why are these effects?"})}),(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"They depend on external state"}),"\n",(0,n.jsx)(t.li,{children:"They modify external state"}),"\n",(0,n.jsx)(t.li,{children:"They're not deterministic"}),"\n",(0,n.jsx)(t.li,{children:"They can fail"}),"\n"]})]}),"\n",(0,n.jsxs)(f,{id:"problem",number:"02",title:"The problem with",titleAccent:"effects.",children:[(0,n.jsx)(t.h3,{id:"effects-make-functions-impure",children:"Effects Make Functions Impure"}),(0,n.jsxs)(a,{children:[(0,n.jsx)(u,{kind:"bad",children:(0,n.jsx)(i,{file:"impure.go",children:`// Impure: executes immediately, can't control when
func loadConfig() Config {
  data, _ := os.ReadFile("config.json")  // Effect happens NOW
  var config Config
  json.Unmarshal(data, &config)
  return config
}

// Problems:
// 1. Executes immediately (can't delay)
// 2. Hard to test (needs real file)
// 3. Can't compose easily
// 4. Errors ignored`})}),(0,n.jsx)(u,{kind:"good",children:(0,n.jsx)(i,{file:"pure.go",children:`// Pure: returns a DESCRIPTION of the effect
func loadConfig() ioresult.IOResult[Config] {
  return func() result.Result[Config] {
      data, err := os.ReadFile("config.json")
      if err != nil {
          return result.Err[Config](err)
      }
      
      var config Config
      err = json.Unmarshal(data, &config)
      return result.FromGoError(config, err)
  }
}

// Benefits:
// 1. Doesn't execute until called
// 2. Easy to test (mock the function)
// 3. Composable
// 4. Proper error handling`})})]})]}),"\n",(0,n.jsxs)(f,{id:"io-type",number:"03",title:"The IO",titleAccent:"type.",children:[(0,n.jsx)(t.h3,{id:"what-is-io",children:"What is IO?"}),(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"IO"})," is a type that represents a lazy computation that performs side effects."]}),(0,n.jsx)(i,{file:"io-basic.go",children:`// IO[A] is just a function that returns A
type IO[A any] func() A

// Example
var readFile IO[[]byte] = func() []byte {
  data, _ := os.ReadFile("file.txt")
  return data
}

// Nothing happens yet!
// The function is just stored

// Execute it
data := readFile()  // NOW the file is read`}),(0,n.jsx)(t.h3,{id:"key-properties",children:"Key Properties"}),(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Lazy"})," - Doesn't execute until you call it"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Composable"})," - Can be chained with other IOs"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Testable"})," - Can be mocked or replaced"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Explicit"})," - Effect is visible in the type"]}),"\n"]})]}),"\n",(0,n.jsxs)(f,{id:"io-variants",number:"04",title:"IO variants in",titleAccent:"fp-go.",children:[(0,n.jsx)(t.h3,{id:"io---simple-effects",children:"IO - Simple Effects"}),(0,n.jsx)(i,{file:"io-simple.go",children:`import "github.com/IBM/fp-go/v2/io"

// IO[A] - returns A
type IO[A any] func() A

// Example
printHello := io.Of(func() string {
  fmt.Println("Hello!")
  return "done"
})

// Execute
result := printHello()  // Prints "Hello!", returns "done"`}),(0,n.jsx)(t.h3,{id:"iooption---effects-that-might-fail",children:"IOOption - Effects that Might Fail"}),(0,n.jsx)(i,{file:"io-option.go",children:`import "github.com/IBM/fp-go/v2/iooption"

// IOOption[A] - returns Option[A]
type IOOption[A any] func() option.Option[A]

// Example
findUser := func(id string) iooption.IOOption[User] {
  return func() option.Option[User] {
      user := db.FindByID(id)
      if user == nil {
          return option.None[User]()
      }
      return option.Some(*user)
  }
}

// Execute
userOpt := findUser("123")()`}),(0,n.jsx)(t.h3,{id:"ioresult---effects-with-error-handling-",children:"IOResult - Effects with Error Handling \u2B50"}),(0,n.jsx)(i,{file:"io-result.go",children:`import "github.com/IBM/fp-go/v2/ioresult"

// IOResult[A] - returns Result[A]
type IOResult[A any] func() result.Result[A]

// Example
readConfig := func(path string) ioresult.IOResult[Config] {
  return func() result.Result[Config] {
      data, err := os.ReadFile(path)
      if err != nil {
          return result.Err[Config](err)
      }
      
      var config Config
      err = json.Unmarshal(data, &config)
      return result.FromGoError(config, err)
  }
}

// Execute
configResult := readConfig("config.json")()`}),(0,n.jsx)(r,{type:"success",children:(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Recommendation:"})," Use IOResult for most effects with error handling."]})})]}),"\n",(0,n.jsxs)(f,{id:"working-with-io",number:"05",title:"Working with",titleAccent:"IO.",children:[(0,n.jsx)(t.h3,{id:"creating-io",children:"Creating IO"}),(0,n.jsxs)(s.A,{groupId:"io",children:[(0,n.jsx)(o.A,{value:"of",label:"Of - Wrap Value",children:(0,n.jsx)(i,{file:"io-of.go",children:`// Wrap a pure value in IO
io := io.Of(func() int {
  return 42
})

result := io()  // 42`})}),(0,n.jsx)(o.A,{value:"effect",label:"Effect - Side Effect",children:(0,n.jsx)(i,{file:"io-effect.go",children:`// Create IO from side effect
printIO := io.Of(func() string {
  fmt.Println("Hello!")
  return "printed"
})

printIO()  // Prints and returns "printed"`})}),(0,n.jsx)(o.A,{value:"ioresult",label:"IOResult - With Errors",children:(0,n.jsx)(i,{file:"io-result-create.go",children:`// Create IOResult
readFile := func(path string) ioresult.IOResult[[]byte] {
  return func() result.Result[[]byte] {
      data, err := os.ReadFile(path)
      return result.FromGoError(data, err)
  }
}

result := readFile("file.txt")()`})})]}),(0,n.jsx)(t.h3,{id:"transforming-io",children:"Transforming IO"}),(0,n.jsx)(t.h4,{id:"map---transform-the-result",children:"Map - Transform the Result"}),(0,n.jsx)(i,{file:"io-map.go",children:`// Map: transform the value inside
readNumber := io.Of(func() int { return 42 })

doubled := io.Map(func(x int) int {
  return x * 2
})(readNumber)

result := doubled()  // 84`}),(0,n.jsx)(t.h4,{id:"chain---sequence-effects",children:"Chain - Sequence Effects"}),(0,n.jsx)(i,{file:"io-chain.go",children:`// Chain: sequence two IOs
readFile := func(path string) ioresult.IOResult[[]byte] {
  return func() result.Result[[]byte] {
      data, err := os.ReadFile(path)
      return result.FromGoError(data, err)
  }
}

parseJSON := func(data []byte) ioresult.IOResult[Config] {
  return func() result.Result[Config] {
      var config Config
      err := json.Unmarshal(data, &config)
      return result.FromGoError(config, err)
  }
}

// Chain them
loadConfig := ioresult.Chain(parseJSON)(readFile("config.json"))

// Execute
config := loadConfig()`}),(0,n.jsx)(t.h3,{id:"composing-io",children:"Composing IO"}),(0,n.jsx)(i,{file:"io-compose.go",children:`import "github.com/IBM/fp-go/v2/function"

// Build pipeline
loadAndValidate := function.Pipe3(
  readFile("config.json"),
  ioresult.Chain(parseJSON),
  ioresult.Chain(validateConfig),
)

// Execute when ready
result := loadAndValidate()`})]}),"\n",(0,n.jsxs)(f,{id:"examples",number:"06",title:"Real-world",titleAccent:"examples.",children:[(0,n.jsx)(t.h3,{id:"example-1-file-operations",children:"Example 1: File Operations"}),(0,n.jsxs)(a,{children:[(0,n.jsx)(u,{kind:"bad",children:(0,n.jsx)(i,{file:"file-without-io.go",children:`func processFile(input, output string) error {
  // Executes immediately
  data, err := os.ReadFile(input)
  if err != nil {
      return err
  }
  
  // Transform
  processed := transform(data)
  
  // Write
  return os.WriteFile(output, processed, 0644)
}

// Hard to test
// Can't delay execution
// Can't compose`})}),(0,n.jsx)(u,{kind:"good",children:(0,n.jsx)(i,{file:"file-with-io.go",children:`import (
  "github.com/IBM/fp-go/v2/ioresult"
  "github.com/IBM/fp-go/v2/function"
)

func readFile(path string) ioresult.IOResult[[]byte] {
  return func() result.Result[[]byte] {
      data, err := os.ReadFile(path)
      return result.FromGoError(data, err)
  }
}

func writeFile(path string) func([]byte) ioresult.IOResult[[]byte] {
  return func(data []byte) ioresult.IOResult[[]byte] {
      return func() result.Result[[]byte] {
          err := os.WriteFile(path, data, 0644)
          return result.FromGoError(data, err)
      }
  }
}

func transform(data []byte) []byte {
  // Pure transformation
  return processed
}

func processFile(input, output string) ioresult.IOResult[[]byte] {
  return function.Pipe3(
      readFile(input),
      ioresult.Map(transform),
      ioresult.Chain(writeFile(output)),
  )
}

// Easy to test (mock readFile/writeFile)
// Lazy execution
// Composable`})})]}),(0,n.jsx)(t.h3,{id:"example-2-http-api-call",children:"Example 2: HTTP API Call"}),(0,n.jsxs)(a,{children:[(0,n.jsx)(u,{kind:"bad",children:(0,n.jsx)(i,{file:"http-without-io.go",children:`func fetchUser(id string) (User, error) {
  // Executes immediately
  resp, err := http.Get("https://api.example.com/users/" + id)
  if err != nil {
      return User{}, err
  }
  defer resp.Body.Close()
  
  var user User
  err = json.NewDecoder(resp.Body).Decode(&user)
  return user, err
}

// Executes on call
// Hard to test
// Can't retry easily`})}),(0,n.jsx)(u,{kind:"good",children:(0,n.jsx)(i,{file:"http-with-io.go",children:`func fetchUser(id string) ioresult.IOResult[User] {
  return func() result.Result[User] {
      resp, err := http.Get("https://api.example.com/users/" + id)
      if err != nil {
          return result.Err[User](err)
      }
      defer resp.Body.Close()
      
      var user User
      err = json.NewDecoder(resp.Body).Decode(&user)
      return result.FromGoError(user, err)
  }
}

// Lazy - doesn't execute until called
// Easy to test (mock the function)
// Can retry with ioresult.Retry`})})]})]}),"\n",(0,n.jsxs)(f,{id:"lazy-evaluation",number:"07",title:"Lazy",titleAccent:"evaluation.",children:[(0,n.jsx)(t.h3,{id:"what-is-lazy-evaluation",children:"What is Lazy Evaluation?"}),(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Lazy"})," means the computation doesn't happen until you explicitly execute it."]}),(0,n.jsx)(i,{file:"lazy.go",children:`// Create IO (doesn't execute)
io := readFile("large-file.txt")

// Still hasn't executed
time.Sleep(1 * time.Second)

// NOW it executes
data := io()`}),(0,n.jsx)(t.h3,{id:"benefits",children:"Benefits"}),(0,n.jsx)(t.h4,{id:"1-control-when-effects-happen",children:"1. Control When Effects Happen"}),(0,n.jsx)(i,{file:"control-effects.go",children:`// Build pipeline
pipeline := function.Pipe3(
  readFile("input.txt"),
  ioresult.Map(process),
  ioresult.Chain(writeFile("output.txt")),
)

// Nothing has happened yet!

// Execute when ready
if shouldProcess {
  result := pipeline()
}`}),(0,n.jsx)(t.h4,{id:"2-compose-before-executing",children:"2. Compose Before Executing"}),(0,n.jsx)(i,{file:"compose-before-execute.go",children:`// Build complex pipeline
step1 := readFile("file1.txt")
step2 := ioresult.Chain(parseJSON)(step1)
step3 := ioresult.Chain(validate)(step2)
step4 := ioresult.Chain(transform)(step3)
step5 := ioresult.Chain(writeFile("output.txt"))(step4)

// Execute entire pipeline
result := step5()`}),(0,n.jsx)(t.h4,{id:"3-retry-logic",children:"3. Retry Logic"}),(0,n.jsx)(i,{file:"retry.go",children:`import "github.com/IBM/fp-go/v2/ioresult"

// Create effect
fetchData := func() ioresult.IOResult[Data] {
  return func() result.Result[Data] {
      // Network call
      return result.Ok(data)
  }
}

// Retry on failure
withRetry := ioresult.Retry(
  3,                    // Max attempts
  100*time.Millisecond, // Delay
)(fetchData())

// Execute with retry
result := withRetry()`}),(0,n.jsx)(t.h4,{id:"4-testing",children:"4. Testing"}),(0,n.jsx)(i,{file:"testing-io.go",children:`// Production
var readFile = func(path string) ioresult.IOResult[[]byte] {
  return func() result.Result[[]byte] {
      data, err := os.ReadFile(path)
      return result.FromGoError(data, err)
  }
}

// Test
func TestProcessFile(t *testing.T) {
  // Mock readFile
  readFile = func(path string) ioresult.IOResult[[]byte] {
      return func() result.Result[[]byte] {
          return result.Ok([]byte("test data"))
      }
  }
  
  // Test
  result := processFile("input.txt", "output.txt")()
  assert.True(t, result.IsOk())
}`})]}),"\n",(0,n.jsxs)(f,{id:"separation",number:"08",title:"Separating description from",titleAccent:"execution.",children:[(0,n.jsx)(t.h3,{id:"the-key-insight",children:"The Key Insight"}),(0,n.jsx)(i,{file:"separation.go",children:`// Description (pure)
var loadConfig = func() ioresult.IOResult[Config] {
  return function.Pipe3(
      readFile("config.json"),
      ioresult.Chain(parseJSON),
      ioresult.Chain(validate),
  )
}

// Execution (impure)
func main() {
  // Build description
  io := loadConfig()
  
  // Execute
  result := io()
  
  // Handle result
  result.Fold(
      func(err error) {
          log.Fatal(err)
      },
      func(config Config) {
          // Use config
      },
  )
}`}),(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Benefits:"})}),(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Description is pure and testable"}),"\n",(0,n.jsx)(t.li,{children:"Execution is isolated"}),"\n",(0,n.jsx)(t.li,{children:"Clear boundary between pure/impure"}),"\n"]})]}),"\n",(0,n.jsxs)(f,{id:"patterns",number:"09",title:"Common",titleAccent:"patterns.",children:[(0,n.jsx)(t.h3,{id:"pattern-1-sequential-effects",children:"Pattern 1: Sequential Effects"}),(0,n.jsx)(i,{file:"sequential.go",children:`// Execute effects in sequence
pipeline := function.Pipe4(
  effect1(),
  ioresult.Chain(effect2),
  ioresult.Chain(effect3),
  ioresult.Chain(effect4),
)

result := pipeline()`}),(0,n.jsx)(t.h3,{id:"pattern-2-parallel-effects",children:"Pattern 2: Parallel Effects"}),(0,n.jsx)(i,{file:"parallel.go",children:`// Execute effects in parallel
var wg sync.WaitGroup
results := make(chan result.Result[Data], 3)

effects := []ioresult.IOResult[Data]{
  fetchFromAPI1(),
  fetchFromAPI2(),
  fetchFromAPI3(),
}

for _, effect := range effects {
  wg.Add(1)
  go func(e ioresult.IOResult[Data]) {
      defer wg.Done()
      results <- e()
  }(effect)
}

wg.Wait()
close(results)`}),(0,n.jsx)(t.h3,{id:"pattern-3-conditional-effects",children:"Pattern 3: Conditional Effects"}),(0,n.jsx)(i,{file:"conditional.go",children:`// Execute effect conditionally
loadConfig := func(env string) ioresult.IOResult[Config] {
  if env == "production" {
      return readFile("/etc/app/config.json")
  }
  return readFile("./config.dev.json")
}`}),(0,n.jsx)(t.h3,{id:"pattern-4-effect-with-fallback",children:"Pattern 4: Effect with Fallback"}),(0,n.jsx)(i,{file:"fallback.go",children:`// Try effect, fallback on error
loadConfig := ioresult.OrElse(func(err error) ioresult.IOResult[Config] {
  log.Printf("Failed to load config: %v, using defaults", err)
  return ioresult.Of(result.Ok(defaultConfig))
})(readFile("config.json"))`})]})]})}function p(e={}){let{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}function h(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},7250(e,t,r){r.d(t,{A:()=>o});var i=r(4848);r(6540);var n=r(4164),l=r(7663);function s({children:e,className:t,hidden:r}){return(0,i.jsx)("div",{role:"tabpanel",className:(0,n.A)("tabItem_Ymn6",t),hidden:r,children:e})}function o({children:e,className:t,value:r}){let{selectedValue:n,lazy:a}=(0,l.uc)(),u=r===n;return!u&&a?null:(0,i.jsx)(s,{className:t,hidden:!u,children:e})}},773(e,t,r){r.d(t,{A:()=>d});var i=r(4848);r(6540);var n=r(4164),l=r(8287),s=r(7663),o=r(8584),a=r(9863);function u({className:e}){let{selectedValue:t,selectValue:r,tabValues:l,block:a}=(0,s.uc)(),c=[],{blockElementScrollPositionUntilNextRender:f}=(0,o.a_)(),d=e=>{let i=e.currentTarget,n=l[c.indexOf(i)].value;n!==t&&(f(i),r(n))},p=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{let r=c.indexOf(e.currentTarget)+1;t=c[r]??c[0];break}case"ArrowLeft":{let r=c.indexOf(e.currentTarget)-1;t=c[r]??c[c.length-1]}}t?.focus()};return(0,i.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.A)("tabs",{"tabs--block":a},e),children:l.map(({value:e,label:r,attributes:l})=>(0,i.jsx)("li",{role:"tab",tabIndex:t===e?0:-1,"aria-selected":t===e,ref:e=>{c.push(e)},onKeyDown:p,onClick:d,...l,className:(0,n.A)("tabs__item","tabItem_LNqP",l?.className,{"tabs__item--active":t===e}),children:r??e},e))})}function c({children:e}){return(0,i.jsx)("div",{className:"margin-top--md",children:e})}function f({className:e,children:t}){return(0,i.jsxs)("div",{className:(0,n.A)(l.G.tabs.container,"tabs-container","tabList__CuJ"),children:[(0,i.jsx)(u,{className:e}),(0,i.jsx)(c,{children:t})]})}function d(e){let t=(0,a.A)(),r=(0,s.OC)(e);return(0,i.jsx)(s.O_,{value:r,children:(0,i.jsx)(f,{className:e.className,children:(0,s.vT)(e.children)})},String(t))}},7663(e,t,r){r.d(t,{OC:()=>d,O_:()=>m,uc:()=>h,vT:()=>c});var i=r(4848),n=r(6540),l=r(6347),s=r(9989),o=r(6629),a=r(618),u=r(1367);function c(e){return n.Children.toArray(e).filter(e=>"\n"!==e)}function f({value:e,tabValues:t}){return t.some(t=>t.value===e)}function d(e){let t,{defaultValue:r,queryString:i=!1,groupId:c}=e,d=function(e){let{values:t,children:r}=e;return(0,n.useMemo)(()=>{let e=t??n.Children.toArray(r).flatMap(e=>{if(!e)return[];if((0,n.isValidElement)(e)&&function(e){let{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return[e];let t="string"==typeof e.type?e.type:e.type.name;throw Error(`Docusaurus error: Bad <Tabs> child <${t}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.
If you do not want to pass on a "value" prop to the direct children of <Tabs>, you can also pass an explicit <Tabs values={...}> prop.`)}).map(({props:{value:e,label:t,attributes:r,default:i}})=>({value:e,label:t,attributes:r,default:i})),i=(0,a.XI)(e,(e,t)=>e.value===t.value);if(i.length>0)throw Error(`Docusaurus error: Duplicate values "${i.map(e=>`'${e.value}'`).join(", ")}" found in <Tabs>. Every value needs to be unique.`);return e},[t,r])}(e),[p,h]=(0,n.useState)(()=>(function({defaultValue:e,tabValues:t}){if(0===t.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!f({value:e,tabValues:t}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${t.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}let r=t.find(e=>e.default)??t[0];if(!r)throw Error("Unexpected error: 0 tabValues");return r.value})({defaultValue:r,tabValues:d})),[m,g]=function({queryString:e=!1,groupId:t}){let r=(0,l.W6)(),i=function({queryString:e=!1,groupId:t}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!t)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:e,groupId:t});return[(0,o.aZ)(i),(0,n.useCallback)(e=>{if(!i)return;let t=new URLSearchParams(r.location.search);t.set(i,e),r.replace({...r.location,search:t.toString()})},[i,r])]}({queryString:i,groupId:c}),[x,j]=function({groupId:e}){let t=e?`docusaurus.tab.${e}`:null,[r,i]=(0,u.Dv)(t);return[r,(0,n.useCallback)(e=>{t&&i.set(e)},[t,i])]}({groupId:c}),y=f({value:t=m??x,tabValues:d})?t:null;return(0,s.A)(()=>{y&&h(y)},[y]),{selectedValue:p,selectValue:(0,n.useCallback)(e=>{if(!f({value:e,tabValues:d}))throw Error(`Can't select invalid tab value=${e}`);h(e),g(e),j(e)},[g,j,d]),tabValues:d,lazy:e.lazy??!1,block:e.block??!1}}let p=(0,n.createContext)(null);function h(){let e=n.useContext(p);if(!e)throw Error("useTabsContext() must be used within a Tabs component");return e}function m(e){return(0,i.jsx)(p.Provider,{value:e.value,children:e.children})}},8453(e,t,r){r.d(t,{R:()=>s,x:()=>o});var i=r(6540);let n={},l=i.createContext(n);function s(e){let t=i.useContext(l);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),i.createElement(l.Provider,{value:t},e.children)}}}]);
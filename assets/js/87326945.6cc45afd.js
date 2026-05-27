"use strict";(self.webpackChunkfp_go_docs=self.webpackChunkfp_go_docs||[]).push([["2894"],{7151(e,r,t){t.r(r),t.d(r,{metadata:()=>i,default:()=>h,frontMatter:()=>o,contentTitle:()=>c,toc:()=>d,assets:()=>u});var i=JSON.parse('{"id":"why-fp-go","title":"Why fp-go?","description":"When and why to reach for functional programming in Go \u2014 type safety, composability, testability, automatic error propagation.","source":"@site/docs/why-fp-go.md","sourceDirName":".","slug":"/why-fp-go","permalink":"/fp-go/docs/why-fp-go","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3,"title":"Why fp-go?","hide_title":true,"description":"When and why to reach for functional programming in Go \u2014 type safety, composability, testability, automatic error propagation."},"sidebar":"tutorialSidebar","previous":{"title":"5-Minute Quickstart","permalink":"/fp-go/docs/quickstart"},"next":{"title":"Comparison with Other Libraries","permalink":"/fp-go/docs/comparison"}}'),n=t(4848),s=t(8453),a=t(773),l=t(7250);let o={sidebar_position:3,title:"Why fp-go?",hide_title:!0,description:"When and why to reach for functional programming in Go \u2014 type safety, composability, testability, automatic error propagation."},c,u={},d=[{value:"1. Type safety",id:"1-type-safety",level:3},{value:"2. Composability",id:"2-composability",level:3},{value:"3. Testability",id:"3-testability",level:3},{value:"4. Maintainability",id:"4-maintainability",level:3},{value:"5. Automatic error propagation",id:"5-automatic-error-propagation",level:3},{value:"Excellent fit",id:"excellent-fit",level:3},{value:"Complex business logic",id:"complex-business-logic",level:4},{value:"Data transformation pipelines",id:"data-transformation-pipelines",level:4},{value:"API clients with error handling",id:"api-clients-with-error-handling",level:4},{value:"Configuration management",id:"configuration-management",level:4},{value:"Use with caution",id:"use-with-caution",level:3},{value:"Not recommended",id:"not-recommended",level:3},{value:"vs. idiomatic Go",id:"vs-idiomatic-go",level:3},{value:"vs. other FP libraries",id:"vs-other-fp-libraries",level:3},{value:"1. Start small",id:"1-start-small",level:3},{value:"2. Learn core concepts",id:"2-learn-core-concepts",level:3},{value:"3. Explore examples",id:"3-explore-examples",level:3},{value:"4. Gradual adoption",id:"4-gradual-adoption",level:3}];function p(e){let r={em:"em",h3:"h3",h4:"h4",p:"p",...(0,s.R)(),...e.components},{ApiTable:t,Callout:i,Checklist:o,CodeCard:c,Compare:u,CompareCol:d,MetaPill:p,PageHeader:h,Section:m,TLDR:g,TLDRCard:b}=r;return t||f("ApiTable",!0),i||f("Callout",!0),o||f("Checklist",!0),c||f("CodeCard",!0),u||f("Compare",!0),d||f("CompareCol",!0),p||f("MetaPill",!0),h||f("PageHeader",!0),m||f("Section",!0),g||f("TLDR",!0),b||f("TLDRCard",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(h,{eyebrow:"Getting started \xb7 Section 04 / 04",title:"Why",titleAccent:"fp-go?",lede:"When and why to use functional programming in Go \u2014 and how fp-go helps you write better, more maintainable code.",meta:[{label:"// Version",value:(0,n.jsxs)(n.Fragment,{children:["v2.2.82 ",(0,n.jsx)(p,{children:"LATEST"})]})},{label:"// Difficulty",value:"Beginner \u2192 Intermediate"},{label:"// Reading time",value:"10 min \xb7 5 sections"}]}),"\n",(0,n.jsxs)(g,{children:[(0,n.jsx)(b,{label:"// Core wins",value:"5",unit:"benefits",description:"Type safety, composability, testability, maintainability, auto error propagation."}),(0,n.jsx)(b,{label:"// Fewer bugs",prose:!0,value:(0,n.jsxs)(n.Fragment,{children:["Up to ",(0,n.jsx)(r.em,{children:"60%"})," reduction in case studies."]}),variant:"up"}),(0,n.jsx)(b,{label:"// Use it for",prose:!0,value:(0,n.jsxs)(n.Fragment,{children:["Complex error handling and ",(0,n.jsx)(r.em,{children:"data pipelines"}),"."]})})]}),"\n",(0,n.jsx)(m,{id:"problem",number:"01",title:"The problem with traditional",titleAccent:"error handling.",tag:"Difficulty \xb7 Beginner",lede:"Go's error handling is explicit and clear \u2014 but it becomes verbose and repetitive in complex scenarios.",children:(0,n.jsxs)(a.A,{children:[(0,n.jsxs)(l.A,{value:"problem",label:"The problem",default:!0,children:[(0,n.jsx)(c,{file:"processUser.go",children:`func processUser(id string) (*User, error) {
  // Fetch user
  user, err := fetchUser(id)
  if err != nil {
      return nil, fmt.Errorf("fetch user: %w", err)
  }

  // Validate user
  if err := validateUser(user); err != nil {
      return nil, fmt.Errorf("validate user: %w", err)
  }

  // Enrich user data
  enriched, err := enrichUser(user)
  if err != nil {
      return nil, fmt.Errorf("enrich user: %w", err)
  }

  // Transform user
  transformed, err := transformUser(enriched)
  if err != nil {
      return nil, fmt.Errorf("transform user: %w", err)
  }

  return transformed, nil
}`}),(0,n.jsxs)(u,{children:[(0,n.jsxs)(d,{kind:"bad",pill:"issues",children:[(0,n.jsxs)("p",{children:["Repetitive ",(0,n.jsx)("code",{children:"if err != nil"})," checks."]}),(0,n.jsx)("p",{children:"Error handling tangled with business logic."}),(0,n.jsx)("p",{children:"Hard to see the actual data flow."}),(0,n.jsx)("p",{children:"Difficult to compose operations."}),(0,n.jsx)("p",{children:"Easy to forget error checks."})]}),(0,n.jsxs)(d,{kind:"good",pill:"see right tab",title:"fp-go",children:[(0,n.jsx)("p",{children:"No repetitive checks."}),(0,n.jsx)("p",{children:"Clear data flow pipeline."}),(0,n.jsx)("p",{children:"Business logic stays prominent."}),(0,n.jsx)("p",{children:"Composable, impossible to forget error handling."})]})]})]}),(0,n.jsxs)(l.A,{value:"solution",label:"With fp-go",children:[(0,n.jsx)(c,{file:"processUser.go",status:"tested",children:`func processUser(id string) result.Result[*User] {
  return function.Pipe4(
      fetchUser(id),                 // Result[*User]
      result.Chain(validateUser),    // Validation
      result.Chain(enrichUser),      // Enrichment
      result.Chain(transformUser),   // Transformation
  )
}`}),(0,n.jsx)(i,{type:"success",title:"Benefits.",children:(0,n.jsx)(r.p,{children:"No repetitive error checks. Clear data flow pipeline. Business logic is prominent. Easy to compose. Impossible to forget error handling."})})]})]})}),"\n",(0,n.jsxs)(m,{id:"benefits",number:"02",title:"Core",titleAccent:"benefits.",lede:"Five concrete wins from adopting fp-go.",children:[(0,n.jsx)(r.h3,{id:"1-type-safety",children:"1. Type safety"}),(0,n.jsx)(r.p,{children:"fp-go leverages Go's type system to make errors impossible to ignore."}),(0,n.jsxs)(a.A,{children:[(0,n.jsx)(l.A,{value:"unsafe",label:"Easy to ignore errors",children:(0,n.jsx)(c,{file:"unsafe.go",children:`// Idiomatic Go - easy to forget error check
result, _ := riskyOperation()  // Ignoring error!
doSomething(result)            // Potential panic`})}),(0,n.jsx)(l.A,{value:"safe",label:"Impossible to ignore",children:(0,n.jsx)(c,{file:"safe.go",status:"tested",children:`// fp-go - must handle the Result
result := riskyOperation()  // Returns Result[T]

// Can't access value without handling error
value := result.GetOrElse(func() T {
  return defaultValue
})

// Or explicitly handle both cases
result.Fold(
  func(err error) { /* handle error */ },
  func(val T) { /* handle success */ },
)`})})]}),(0,n.jsx)(r.h3,{id:"2-composability",children:"2. Composability"}),(0,n.jsx)(r.p,{children:"Build complex operations from simple, reusable pieces."}),(0,n.jsxs)(a.A,{children:[(0,n.jsx)(l.A,{value:"imperative",label:"Imperative",children:(0,n.jsx)(c,{file:"imperative.go",children:`func processData(data []int) ([]string, error) {
  // Filter
  var filtered []int
  for _, v := range data {
      if v > 0 {
          filtered = append(filtered, v)
      }
  }

  // Transform
  var doubled []int
  for _, v := range filtered {
      doubled = append(doubled, v*2)
  }

  // Validate
  for _, v := range doubled {
      if v > 100 {
          return nil, errors.New("value too large")
      }
  }

  // Convert to strings
  var result []string
  for _, v := range doubled {
      result = append(result, fmt.Sprintf("%d", v))
  }

  return result, nil
}`})}),(0,n.jsxs)(l.A,{value:"functional",label:"Functional",children:[(0,n.jsx)(c,{file:"functional.go",status:"tested",children:`func processData(data []int) result.Result[[]string] {
  return function.Pipe3(
      array.Filter(func(v int) bool { return v > 0 }),
      array.Map(func(v int) int { return v * 2 }),
      array.TraverseResult(func(v int) result.Result[string] {
          if v > 100 {
              return result.Err[string](errors.New("value too large"))
          }
          return result.Ok(fmt.Sprintf("%d", v))
      }),
  )(data)
}`}),(0,n.jsx)(i,{type:"success",title:"Advantages.",children:(0,n.jsx)(r.p,{children:"Each operation is a pure, reusable function. Each step is independently testable. The data transformation pipeline is explicit. Errors propagate automatically."})})]})]}),(0,n.jsx)(r.h3,{id:"3-testability",children:"3. Testability"}),(0,n.jsx)(r.p,{children:"Pure functions are trivial to test \u2014 no mocks, no setup, no teardown."}),(0,n.jsxs)(a.A,{children:[(0,n.jsx)(l.A,{value:"impure",label:"Hard to test",children:(0,n.jsx)(c,{file:"impure.go",children:`// Impure function - depends on external state
var db *sql.DB

func getUser(id string) (*User, error) {
  // Uses global db connection
  row := db.QueryRow("SELECT * FROM users WHERE id = ?", id)
  // ... parsing logic
}

// Test requires:
// - Database setup
// - Test data insertion
// - Connection management
// - Cleanup`})}),(0,n.jsx)(l.A,{value:"pure",label:"Easy to test",children:(0,n.jsx)(c,{file:"pure.go",status:"tested",children:`// Pure function - all dependencies explicit
func getUser(db Database) func(string) result.Result[*User] {
  return func(id string) result.Result[*User] {
      return db.QueryUser(id)
  }
}

// Test is simple:
func TestGetUser(t *testing.T) {
  mockDB := &MockDatabase{
      users: map[string]*User{
          "123": {ID: "123", Name: "Alice"},
      },
  }

  result := getUser(mockDB)("123")

  assert.True(t, result.IsOk())
  assert.Equal(t, "Alice", result.GetOrElse(func() *User {
      return nil
  }).Name)
}`})})]}),(0,n.jsx)(r.h3,{id:"4-maintainability",children:"4. Maintainability"}),(0,n.jsxs)(u,{children:[(0,n.jsxs)(d,{kind:"bad",title:"Before fp-go",pill:"50+ lines",children:[(0,n.jsxs)("p",{children:["Nested ",(0,n.jsx)("code",{children:"if"})," statements."]}),(0,n.jsx)("p",{children:"Mixed concerns."}),(0,n.jsx)("p",{children:"Hard to follow the logic."}),(0,n.jsx)("p",{children:"Difficult to add new steps."})]}),(0,n.jsx)(d,{kind:"good",title:"With fp-go",pill:"clear pipeline",children:(0,n.jsx)(c,{file:"snippet.go",children:`return function.Pipe5(
  step1,
  step2,
  step3,
  step4,
  step5,
)`})})]}),(0,n.jsx)(r.h3,{id:"5-automatic-error-propagation",children:"5. Automatic error propagation"}),(0,n.jsxs)(a.A,{children:[(0,n.jsx)(l.A,{value:"manual",label:"Manual propagation",children:(0,n.jsx)(c,{file:"manual.go",children:`func process() error {
  result1, err := step1()
  if err != nil {
      return err
  }

  result2, err := step2(result1)
  if err != nil {
      return err
  }

  result3, err := step3(result2)
  if err != nil {
      return err
  }

  return step4(result3)
}`})}),(0,n.jsx)(l.A,{value:"automatic",label:"Automatic propagation",children:(0,n.jsx)(c,{file:"automatic.go",status:"tested",children:`func process() result.Result[T] {
  return function.Pipe3(
      step1(),      // If this fails, rest are skipped
      step2,        // Only runs if step1 succeeded
      step3,        // Only runs if step2 succeeded
      step4,        // Only runs if step3 succeeded
  )
}`})})]})]}),"\n",(0,n.jsxs)(m,{id:"when",number:"03",title:"When to use",titleAccent:"fp-go.",lede:"The honest fit guide \u2014 where it shines, and where idiomatic Go is the better answer.",children:[(0,n.jsx)(r.h3,{id:"excellent-fit",children:"Excellent fit"}),(0,n.jsx)(r.h4,{id:"complex-business-logic",children:"Complex business logic"}),(0,n.jsx)(c,{file:"order.go",children:`// Multiple validation steps
// Data transformations
// Error handling at each step
func validateAndProcessOrder(order Order) result.Result[ProcessedOrder] {
  return function.Pipe5(
      validateCustomer(order.CustomerID),
      result.Chain(func(customer Customer) result.Result[Order] {
          return validateInventory(order)
      }),
      result.Chain(calculatePricing),
      result.Chain(applyDiscounts),
      result.Chain(finalizeOrder),
  )
}`}),(0,n.jsx)(r.h4,{id:"data-transformation-pipelines",children:"Data transformation pipelines"}),(0,n.jsx)(c,{file:"etl.go",children:`// ETL operations
// Data cleaning
// Format conversions
func transformData(raw []RawData) result.Result[[]CleanData] {
  return function.Pipe4(
      array.Filter(isValid),
      array.Map(normalize),
      array.TraverseResult(enrich),
      result.Map(array.Map(format)),
  )(raw)
}`}),(0,n.jsx)(r.h4,{id:"api-clients-with-error-handling",children:"API clients with error handling"}),(0,n.jsx)(c,{file:"client.go",children:`// HTTP requests
// Response parsing
// Error handling
func fetchUserProfile(id string) ioresult.IOResult[Profile] {
  return function.Pipe3(
      buildRequest(id),
      ioresult.Chain(executeRequest),
      ioresult.Chain(parseResponse),
  )
}`}),(0,n.jsx)(r.h4,{id:"configuration-management",children:"Configuration management"}),(0,n.jsx)(c,{file:"config.go",children:`// Load config
// Validate
// Apply defaults
func loadConfig(path string) result.Result[Config] {
  return function.Pipe3(
      readConfigFile(path),
      result.Chain(parseConfig),
      result.Chain(validateConfig),
      result.Map(applyDefaults),
  )
}`}),(0,n.jsx)(r.h3,{id:"use-with-caution",children:"Use with caution"}),(0,n.jsxs)(i,{type:"warn",title:"Simple CRUD operations.",children:[(0,n.jsx)(r.p,{children:"For straightforward DB calls, idiomatic Go is fine. fp-go adds unnecessary complexity:"}),(0,n.jsx)(c,{file:"crud.go",children:`func getUser(id string) (*User, error) {
  return db.QueryUser(id)
}`})]}),(0,n.jsx)(i,{type:"warn",title:"Performance-critical hot paths.",children:(0,n.jsx)(r.p,{children:"For tight loops, use idiomatic Go or fp-go's idiomatic packages. Direct operations are faster; the idiomatic packages offer near-native performance."})}),(0,n.jsx)(i,{type:"warn",title:"Team unfamiliar with FP.",children:(0,n.jsx)(r.p,{children:"Start with simple examples, provide training, introduce gradually, and use fp-go for new code first."})}),(0,n.jsx)(r.h3,{id:"not-recommended",children:"Not recommended"}),(0,n.jsx)(i,{type:"warn",title:"Trivial scripts and low-level system code.",children:(0,n.jsx)(r.p,{children:"For one-off scripts and code dealing with syscalls or memory management, stick with idiomatic Go."})})]}),"\n",(0,n.jsx)(m,{id:"case-studies",number:"04",title:"Real-world",titleAccent:"success stories.",children:(0,n.jsx)(t,{columns:["Case study","Before","After"],rows:[{symbol:"API Gateway",signature:"500+ lines of nested error handling",description:"150 lines of clear pipeline code. Each step independently testable. 60% reduction in bugs."},{symbol:"Data Pipeline",signature:"Complex state management, scattered error handling",description:"Clear linear data flow. Centralized error handling. 40% faster development time."},{symbol:"Microservice",signature:"Inconsistent error handling, hard to compose",description:"Consistent patterns. Easy composition. 50% reduction in production errors."}]})}),"\n",(0,n.jsxs)(m,{id:"compare",number:"05",title:"Compare with",titleAccent:"other approaches.",children:[(0,n.jsx)(r.h3,{id:"vs-idiomatic-go",children:"vs. idiomatic Go"}),(0,n.jsx)(t,{columns:["Aspect","Idiomatic Go","fp-go"],rows:[{symbol:"Error handling",signature:"Manual if err != nil",description:"Automatic propagation."},{symbol:"Composability",signature:"Limited",description:"Excellent."},{symbol:"Type safety",signature:"Good",description:"Excellent."},{symbol:"Learning curve",signature:"Low",description:"Medium."},{symbol:"Verbosity",signature:"High for complex logic",description:"Low."},{symbol:"Performance",signature:"Excellent",description:"Good (excellent with idiomatic packages)."},{symbol:"Best for",signature:"Simple operations",description:"Complex logic."}]}),(0,n.jsx)(r.h3,{id:"vs-other-fp-libraries",children:"vs. other FP libraries"}),(0,n.jsx)(t,{columns:["Feature","fp-go","samber/lo \xb7 go-functional"],rows:[{symbol:"Monadic types",signature:"Full support",description:"samber/lo: limited \xb7 go-functional: yes."},{symbol:"Type safety",signature:"Excellent",description:"samber/lo: uses any \xb7 go-functional: good."},{symbol:"Error handling",signature:"Built-in",description:"samber/lo: manual \xb7 go-functional: built-in."},{symbol:"Documentation",signature:"Comprehensive",description:"samber/lo: good \xb7 go-functional: limited."},{symbol:"Active development",signature:"Yes",description:"samber/lo: yes \xb7 go-functional: sporadic."},{symbol:"Production-ready",signature:"Yes (IBM)",description:"samber/lo: yes \xb7 go-functional: unknown."}]})]}),"\n",(0,n.jsxs)(m,{id:"start",number:"06",title:"Getting",titleAccent:"started.",children:[(0,n.jsx)(o,{title:"Adoption path",items:[{label:"Start small \u2014 use Result for one function",impact:"step 1"},{label:"Learn core concepts (pure functions, monads, composition)",impact:"step 2"},{label:"Explore examples in the Recipes section",impact:"step 3"},{label:"Adopt gradually \u2014 new features first, refactor complex logic over time",impact:"step 4"}]}),(0,n.jsx)(r.h3,{id:"1-start-small",children:"1. Start small"}),(0,n.jsx)(c,{file:"first.go",status:"tested",children:`// Begin with simple Result usage
func divide(a, b int) result.Result[int] {
  if b == 0 {
      return result.Err[int](errors.New("division by zero"))
  }
  return result.Ok(a / b)
}`}),(0,n.jsx)(r.h3,{id:"2-learn-core-concepts",children:"2. Learn core concepts"}),(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"./concepts/pure-functions",children:"Pure functions"})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"./concepts/monads",children:"Monads"})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"./concepts/composition",children:"Composition"})})]}),(0,n.jsx)(r.h3,{id:"3-explore-examples",children:"3. Explore examples"}),(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"./quickstart",children:"Quickstart"})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"./recipes/error-handling",children:"Error handling recipes"})})]}),(0,n.jsx)(r.h3,{id:"4-gradual-adoption",children:"4. Gradual adoption"}),(0,n.jsx)(r.p,{children:"Use for new features first; refactor complex logic gradually; keep simple code idiomatic."})]}),"\n",(0,n.jsx)(m,{id:"takeaways",number:"07",title:"Key",titleAccent:"takeaways.",children:(0,n.jsx)(o,{title:"Remember",items:[{label:"fp-go excels at complex logic \u2014 error handling, transformations, business rules",done:!0},{label:"Type safety prevents bugs \u2014 impossible to ignore errors",done:!0},{label:"Composability improves maintainability",done:!0},{label:"Testability is built-in \u2014 pure functions are trivial to test",done:!0},{label:"Not a silver bullet \u2014 use idiomatic Go for simple operations",done:!0},{label:"Production-ready \u2014 used at IBM and other companies",done:!0},{label:"Gradual adoption works \u2014 start small, expand as you learn",done:!0}]})})]})}function h(e={}){let{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}function f(e,r){throw Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},7250(e,r,t){t.d(r,{A:()=>l});var i=t(4848);t(6540);var n=t(4164),s=t(7663);function a({children:e,className:r,hidden:t}){return(0,i.jsx)("div",{role:"tabpanel",className:(0,n.A)("tabItem_Ymn6",r),hidden:t,children:e})}function l({children:e,className:r,value:t}){let{selectedValue:n,lazy:o}=(0,s.uc)(),c=t===n;return!c&&o?null:(0,i.jsx)(a,{className:r,hidden:!c,children:e})}},773(e,r,t){t.d(r,{A:()=>p});var i=t(4848);t(6540);var n=t(4164),s=t(8287),a=t(7663),l=t(8584),o=t(9863);function c({className:e}){let{selectedValue:r,selectValue:t,tabValues:s,block:o}=(0,a.uc)(),u=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.a_)(),p=e=>{let i=e.currentTarget,n=s[u.indexOf(i)].value;n!==r&&(d(i),t(n))},h=e=>{let r=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{let t=u.indexOf(e.currentTarget)+1;r=u[t]??u[0];break}case"ArrowLeft":{let t=u.indexOf(e.currentTarget)-1;r=u[t]??u[u.length-1]}}r?.focus()};return(0,i.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.A)("tabs",{"tabs--block":o},e),children:s.map(({value:e,label:t,attributes:s})=>(0,i.jsx)("li",{role:"tab",tabIndex:r===e?0:-1,"aria-selected":r===e,ref:e=>{u.push(e)},onKeyDown:h,onClick:p,...s,className:(0,n.A)("tabs__item","tabItem_LNqP",s?.className,{"tabs__item--active":r===e}),children:t??e},e))})}function u({children:e}){return(0,i.jsx)("div",{className:"margin-top--md",children:e})}function d({className:e,children:r}){return(0,i.jsxs)("div",{className:(0,n.A)(s.G.tabs.container,"tabs-container","tabList__CuJ"),children:[(0,i.jsx)(c,{className:e}),(0,i.jsx)(u,{children:r})]})}function p(e){let r=(0,o.A)(),t=(0,a.OC)(e);return(0,i.jsx)(a.O_,{value:t,children:(0,i.jsx)(d,{className:e.className,children:(0,a.vT)(e.children)})},String(r))}},7663(e,r,t){t.d(r,{OC:()=>p,O_:()=>m,uc:()=>f,vT:()=>u});var i=t(4848),n=t(6540),s=t(6347),a=t(9989),l=t(6629),o=t(618),c=t(1367);function u(e){return n.Children.toArray(e).filter(e=>"\n"!==e)}function d({value:e,tabValues:r}){return r.some(r=>r.value===e)}function p(e){let r,{defaultValue:t,queryString:i=!1,groupId:u}=e,p=function(e){let{values:r,children:t}=e;return(0,n.useMemo)(()=>{let e=r??n.Children.toArray(t).flatMap(e=>{if(!e)return[];if((0,n.isValidElement)(e)&&function(e){let{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return[e];let r="string"==typeof e.type?e.type:e.type.name;throw Error(`Docusaurus error: Bad <Tabs> child <${r}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.
If you do not want to pass on a "value" prop to the direct children of <Tabs>, you can also pass an explicit <Tabs values={...}> prop.`)}).map(({props:{value:e,label:r,attributes:t,default:i}})=>({value:e,label:r,attributes:t,default:i})),i=(0,o.XI)(e,(e,r)=>e.value===r.value);if(i.length>0)throw Error(`Docusaurus error: Duplicate values "${i.map(e=>`'${e.value}'`).join(", ")}" found in <Tabs>. Every value needs to be unique.`);return e},[r,t])}(e),[h,f]=(0,n.useState)(()=>(function({defaultValue:e,tabValues:r}){if(0===r.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!d({value:e,tabValues:r}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${r.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}let t=r.find(e=>e.default)??r[0];if(!t)throw Error("Unexpected error: 0 tabValues");return t.value})({defaultValue:t,tabValues:p})),[m,g]=function({queryString:e=!1,groupId:r}){let t=(0,s.W6)(),i=function({queryString:e=!1,groupId:r}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!r)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:e,groupId:r});return[(0,l.aZ)(i),(0,n.useCallback)(e=>{if(!i)return;let r=new URLSearchParams(t.location.search);r.set(i,e),t.replace({...t.location,search:r.toString()})},[i,t])]}({queryString:i,groupId:u}),[b,x]=function({groupId:e}){let r=e?`docusaurus.tab.${e}`:null,[t,i]=(0,c.Dv)(r);return[t,(0,n.useCallback)(e=>{r&&i.set(e)},[r,i])]}({groupId:u}),v=d({value:r=m??b,tabValues:p})?r:null;return(0,a.A)(()=>{v&&f(v)},[v]),{selectedValue:h,selectValue:(0,n.useCallback)(e=>{if(!d({value:e,tabValues:p}))throw Error(`Can't select invalid tab value=${e}`);f(e),g(e),x(e)},[g,x,p]),tabValues:p,lazy:e.lazy??!1,block:e.block??!1}}let h=(0,n.createContext)(null);function f(){let e=n.useContext(h);if(!e)throw Error("useTabsContext() must be used within a Tabs component");return e}function m(e){return(0,i.jsx)(h.Provider,{value:e.value,children:e.children})}},8453(e,r,t){t.d(r,{R:()=>a,x:()=>l});var i=t(6540);let n={},s=i.createContext(n);function a(e){let r=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),i.createElement(s.Provider,{value:r},e.children)}}}]);
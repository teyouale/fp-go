"use strict";(self.webpackChunkfp_go_docs=self.webpackChunkfp_go_docs||[]).push([["4682"],{9754(e,r,i){i.r(r),i.d(r,{metadata:()=>s,default:()=>c,frontMatter:()=>o,contentTitle:()=>l,toc:()=>d,assets:()=>a});var s=JSON.parse('{"id":"concepts/zen-of-go","title":"The Zen of Go","description":"Learn how fp-go aligns with Go\'s philosophy and when to use functional patterns vs standard Go idioms.","source":"@site/docs/concepts/zen-of-go.md","sourceDirName":"concepts","slug":"/concepts/zen-of-go","permalink":"/fp-go/docs/concepts/zen-of-go","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":16,"frontMatter":{"sidebar_position":16,"title":"The Zen of Go","hide_title":true,"description":"Learn how fp-go aligns with Go\'s philosophy and when to use functional patterns vs standard Go idioms."},"sidebar":"tutorialSidebar","previous":{"title":"Higher-Kinded Types","permalink":"/fp-go/docs/concepts/higher-kinded-types"},"next":{"title":"Frequently Asked Questions","permalink":"/fp-go/docs/faq"}}'),t=i(4848),n=i(8453);let o={sidebar_position:16,title:"The Zen of Go",hide_title:!0,description:"Learn how fp-go aligns with Go's philosophy and when to use functional patterns vs standard Go idioms."},l,a={},d=[{value:"Not a Replacement",id:"not-a-replacement",level:3},{value:"Complement, Don&#39;t Replace",id:"complement-dont-replace",level:3},{value:"\u2705 Use fp-go When:",id:"-use-fp-go-when",level:3},{value:"1. Complex Error Handling",id:"1-complex-error-handling",level:4},{value:"2. Optional Values",id:"2-optional-values",level:4},{value:"3. Data Transformations",id:"3-data-transformations",level:4},{value:"4. Composable Pipelines",id:"4-composable-pipelines",level:4},{value:"\u274C Don&#39;t Use fp-go When:",id:"-dont-use-fp-go-when",level:3},{value:"1. Simple Operations",id:"1-simple-operations",level:4},{value:"2. Performance-Critical Code",id:"2-performance-critical-code",level:4},{value:"3. Team Unfamiliar with FP",id:"3-team-unfamiliar-with-fp",level:4},{value:"4. Standard Go is Clearer",id:"4-standard-go-is-clearer",level:4},{value:"Pattern 1: FP Core, Go Boundaries",id:"pattern-1-fp-core-go-boundaries",level:3},{value:"Pattern 2: Gradual Adoption",id:"pattern-2-gradual-adoption",level:3},{value:"Pattern 3: Hybrid Approach",id:"pattern-3-hybrid-approach",level:3},{value:"Idiom 1: Errors are Values",id:"idiom-1-errors-are-values",level:3},{value:"Idiom 2: Accept Interfaces, Return Structs",id:"idiom-2-accept-interfaces-return-structs",level:3},{value:"Idiom 3: Make Zero Values Useful",id:"idiom-3-make-zero-values-useful",level:3},{value:"Idiom 4: Keep Packages Focused",id:"idiom-4-keep-packages-focused",level:3},{value:"Test Pure Functions",id:"test-pure-functions",level:3},{value:"Test Pipelines",id:"test-pipelines",level:3},{value:"Test with Table Tests (Go Idiom)",id:"test-with-table-tests-go-idiom",level:3},{value:"Measure First",id:"measure-first",level:3},{value:"Use Idiomatic Packages",id:"use-idiomatic-packages",level:3},{value:"Optimize Hot Paths",id:"optimize-hot-paths",level:3},{value:"Start Small",id:"start-small",level:3},{value:"Provide Training",id:"provide-training",level:3},{value:"Set Guidelines",id:"set-guidelines",level:3}];function u(e){let r={em:"em",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,n.R)(),...e.components},{Callout:i,CodeCard:s,Compare:o,CompareCol:l,PageHeader:a,Section:d,TLDR:u,TLDRCard:c}=r;return i||p("Callout",!0),s||p("CodeCard",!0),o||p("Compare",!0),l||p("CompareCol",!0),a||p("PageHeader",!0),d||p("Section",!0),u||p("TLDR",!0),c||p("TLDRCard",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a,{eyebrow:"Concepts \xb7 06 / 06",title:"The Zen of",titleAccent:"Go.",lede:"Balance functional programming with Go's philosophy. Learn when to use fp-go patterns and when standard Go is better.",meta:[{label:"// Difficulty",value:"Intermediate"},{label:"// Reading time",value:"14 min \xb7 8 sections"},{label:"// Prereqs",value:"All previous concepts"}]}),"\n",(0,t.jsxs)(u,{children:[(0,t.jsx)(c,{label:"// Philosophy",prose:!0,value:(0,t.jsxs)(t.Fragment,{children:["fp-go ",(0,t.jsx)(r.em,{children:"complements"})," Go, doesn't replace it."]}),variant:"up"}),(0,t.jsx)(c,{label:"// When to use",prose:!0,value:(0,t.jsxs)(t.Fragment,{children:["Complex errors, optional values, ",(0,t.jsx)(r.em,{children:"data transforms"}),"."]})}),(0,t.jsx)(c,{label:"// When not to",prose:!0,value:(0,t.jsxs)(t.Fragment,{children:["Simple ops, hot paths, ",(0,t.jsx)(r.em,{children:"team unfamiliar"}),"."]})})]}),"\n",(0,t.jsxs)(d,{id:"philosophy",number:"01",title:"Go's",titleAccent:"philosophy.",children:[(0,t.jsx)(r.p,{children:"Go values:"}),(0,t.jsxs)(r.ol,{children:["\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.strong,{children:"Simplicity"})," - Easy to read and understand"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.strong,{children:"Clarity"})," - Explicit over implicit"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.strong,{children:"Pragmatism"})," - Practical over theoretical"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.strong,{children:"Composition"})," - Small pieces that work together"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.strong,{children:"Concurrency"})," - Built-in support for concurrent programming"]}),"\n"]}),(0,t.jsx)(i,{type:"success",children:(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"fp-go embraces these values."})})})]}),"\n",(0,t.jsxs)(d,{id:"go-first",number:"02",title:"fp-go is",titleAccent:"Go-first.",children:[(0,t.jsx)(r.h3,{id:"not-a-replacement",children:"Not a Replacement"}),(0,t.jsxs)(o,{children:[(0,t.jsx)(l,{kind:"bad",children:(0,t.jsx)(s,{file:"replace-all.go",children:`// \u{274C} Don't replace all Go code with fp-go
func processUser(id string) result.Result[User] {
  return function.Pipe10(
      step1, step2, step3, step4, step5,
      step6, step7, step8, step9, step10,
  )
}`})}),(0,t.jsx)(l,{kind:"good",children:(0,t.jsx)(s,{file:"use-where-valuable.go",children:`// \u{2705} Use fp-go where it adds value
func processUser(id string) (User, error) {
  user, err := fetchUser(id)
  if err != nil {
      return User{}, err
  }
  
  // Use fp-go for complex transformations
  validated := result.Chain(validateUser)(result.Ok(user))
  
  return validated.Fold(
      func(err error) (User, error) { return User{}, err },
      func(u User) (User, error) { return u, nil },
  )
}`})})]}),(0,t.jsx)(r.h3,{id:"complement-dont-replace",children:"Complement, Don't Replace"}),(0,t.jsx)(s,{file:"complement.go",children:`// Standard Go for simple cases
func add(a, b int) int {
  return a + b
}

// fp-go for complex error handling
func processOrder(id string) result.Result[Order] {
  return function.Pipe3(
      fetchOrder(id),
      result.Chain(validateOrder),
      result.Chain(enrichOrder),
  )
}`})]}),"\n",(0,t.jsxs)(d,{id:"when-to-use",number:"03",title:"When to use",titleAccent:"fp-go.",children:[(0,t.jsx)(r.h3,{id:"-use-fp-go-when",children:"\u2705 Use fp-go When:"}),(0,t.jsx)(r.h4,{id:"1-complex-error-handling",children:"1. Complex Error Handling"}),(0,t.jsxs)(o,{children:[(0,t.jsx)(l,{kind:"bad",children:(0,t.jsx)(s,{file:"repetitive-errors.go",children:`func processData(input string) (Output, error) {
  parsed, err := parse(input)
  if err != nil {
      return Output{}, err
  }
  
  validated, err := validate(parsed)
  if err != nil {
      return Output{}, err
  }
  
  transformed, err := transform(validated)
  if err != nil {
      return Output{}, err
  }
  
  return transformed, nil
}

// Repetitive error checking`})}),(0,t.jsx)(l,{kind:"good",children:(0,t.jsx)(s,{file:"clean-pipeline.go",children:`func processData(input string) result.Result[Output] {
  return function.Pipe3(
      parse(input),
      result.Chain(validate),
      result.Chain(transform),
  )
}

// Clean and composable`})})]}),(0,t.jsx)(r.h4,{id:"2-optional-values",children:"2. Optional Values"}),(0,t.jsxs)(o,{children:[(0,t.jsx)(l,{kind:"bad",children:(0,t.jsx)(s,{file:"nil-checks.go",children:`func findUser(id string) *User {
  // nil means not found
  return db.FindByID(id)
}

// Lots of nil checks
user := findUser("123")
if user != nil {
  email := user.Email
  if email != "" {
      // Use email
  }
}`})}),(0,t.jsx)(l,{kind:"good",children:(0,t.jsx)(s,{file:"option-chain.go",children:`func findUser(id string) option.Option[User] {
  user := db.FindByID(id)
  if user == nil {
      return option.None[User]()
  }
  return option.Some(*user)
}

// Chain operations
email := function.Pipe2(
  findUser("123"),
  option.Chain(getEmail),
)`})})]}),(0,t.jsx)(r.h4,{id:"3-data-transformations",children:"3. Data Transformations"}),(0,t.jsxs)(o,{children:[(0,t.jsx)(l,{kind:"bad",children:(0,t.jsx)(s,{file:"imperative-transform.go",children:`func processUsers(users []User) []UserDTO {
  result := make([]UserDTO, 0, len(users))
  for _, user := range users {
      if user.Active {
          dto := UserDTO{
              ID:   user.ID,
              Name: strings.ToUpper(user.Name),
          }
          result = append(result, dto)
      }
  }
  return result
}`})}),(0,t.jsx)(l,{kind:"good",children:(0,t.jsx)(s,{file:"functional-transform.go",children:`import "github.com/IBM/fp-go/v2/array"

func processUsers(users []User) []UserDTO {
  return function.Pipe2(
      array.Filter(func(u User) bool { return u.Active }),
      array.Map(toDTO),
  )(users)
}

func toDTO(u User) UserDTO {
  return UserDTO{
      ID:   u.ID,
      Name: strings.ToUpper(u.Name),
  }
}`})})]}),(0,t.jsx)(r.h4,{id:"4-composable-pipelines",children:"4. Composable Pipelines"}),(0,t.jsx)(s,{file:"pipelines.go",children:`// Build reusable pipelines
var processUser = function.Flow3(
  normalize,
  validate,
  enrich,
)

// Use in different contexts
user1 := processUser(rawUser1)
user2 := processUser(rawUser2)`}),(0,t.jsx)(r.h3,{id:"-dont-use-fp-go-when",children:"\u274C Don't Use fp-go When:"}),(0,t.jsx)(r.h4,{id:"1-simple-operations",children:"1. Simple Operations"}),(0,t.jsxs)(o,{children:[(0,t.jsx)(l,{kind:"bad",children:(0,t.jsx)(s,{file:"overkill.go",children:`// \u{274C} Overkill
result := result.Map(func(x int) int {
  return x + 1
})(result.Ok(5))`})}),(0,t.jsx)(l,{kind:"good",children:(0,t.jsx)(s,{file:"simple-go.go",children:`// \u{2705} Just use standard Go
x := 5 + 1`})})]}),(0,t.jsx)(r.h4,{id:"2-performance-critical-code",children:"2. Performance-Critical Code"}),(0,t.jsxs)(o,{children:[(0,t.jsx)(l,{kind:"bad",children:(0,t.jsx)(s,{file:"hot-path-fp.go",children:`// \u{274C} Hot path with millions of calls
for i := 0; i < 1000000; i++ {
  result := option.Map(transform)(opt)
}`})}),(0,t.jsx)(l,{kind:"good",children:(0,t.jsx)(s,{file:"hot-path-go.go",children:`// \u{2705} Use standard Go for hot paths
for i := 0; i < 1000000; i++ {
  if opt.IsSome() {
      value := transform(opt.Value())
  }
}`})})]}),(0,t.jsx)(r.h4,{id:"3-team-unfamiliar-with-fp",children:"3. Team Unfamiliar with FP"}),(0,t.jsxs)(o,{children:[(0,t.jsx)(l,{kind:"bad",children:(0,t.jsx)(s,{file:"confusing.go",children:`// \u{274C} Confusing for team
var pipeline = function.Flow5(
  step1, step2, step3, step4, step5,
)`})}),(0,t.jsx)(l,{kind:"good",children:(0,t.jsx)(s,{file:"gradual.go",children:`// \u{2705} Start simple, introduce gradually
func process(input Input) Output {
  step1Result := step1(input)
  step2Result := step2(step1Result)
  // ...
  return step5Result
}`})})]}),(0,t.jsx)(r.h4,{id:"4-standard-go-is-clearer",children:"4. Standard Go is Clearer"}),(0,t.jsxs)(o,{children:[(0,t.jsx)(l,{kind:"bad",children:(0,t.jsx)(s,{file:"forced-fp.go",children:`// \u{274C} Forced FP
result := option.Fold(
  func() string { return "" },
  func(s string) string { return s },
)(opt)`})}),(0,t.jsx)(l,{kind:"good",children:(0,t.jsx)(s,{file:"clear-go.go",children:`// \u{2705} Clear Go
var result string
if opt.IsSome() {
  result = opt.Value()
}`})})]})]}),"\n",(0,t.jsxs)(d,{id:"balancing",number:"04",title:"Balancing FP and",titleAccent:"Go idioms.",children:[(0,t.jsx)(r.h3,{id:"pattern-1-fp-core-go-boundaries",children:"Pattern 1: FP Core, Go Boundaries"}),(0,t.jsx)(s,{file:"fp-core-go-boundaries.go",children:`// Pure FP core
func processOrder(order Order) result.Result[Order] {
  return function.Pipe3(
      result.Ok(order),
      result.Chain(validateOrder),
      result.Chain(enrichOrder),
  )
}

// Go-style API
func ProcessOrder(order Order) (Order, error) {
  result := processOrder(order)
  return result.Fold(
      func(err error) (Order, error) { return Order{}, err },
      func(o Order) (Order, error) { return o, nil },
  )
}`}),(0,t.jsx)(r.h3,{id:"pattern-2-gradual-adoption",children:"Pattern 2: Gradual Adoption"}),(0,t.jsx)(s,{file:"gradual-adoption.go",children:`// Phase 1: Start with error handling
func fetchUser(id string) result.Result[User] {
  user, err := db.FindByID(id)
  return result.FromGoError(user, err)
}

// Phase 2: Add composition
func processUser(id string) result.Result[User] {
  return function.Pipe2(
      fetchUser(id),
      result.Chain(validateUser),
  )
}

// Phase 3: Full pipeline
func processUser(id string) result.Result[UserDTO] {
  return function.Pipe4(
      fetchUser(id),
      result.Chain(validateUser),
      result.Chain(enrichUser),
      result.Map(toDTO),
  )
}`}),(0,t.jsx)(r.h3,{id:"pattern-3-hybrid-approach",children:"Pattern 3: Hybrid Approach"}),(0,t.jsx)(s,{file:"hybrid.go",children:`// Mix FP and standard Go
func processUsers(users []User) ([]UserDTO, error) {
  // Use fp-go for transformation
  active := array.Filter(func(u User) bool {
      return u.Active
  })(users)
  
  // Standard Go for complex logic
  var dtos []UserDTO
  for _, user := range active {
      // Complex validation
      if err := complexValidation(user); err != nil {
          return nil, err
      }
      
      // Use fp-go for transformation
      dto := toDTO(user)
      dtos = append(dtos, dto)
  }
  
  return dtos, nil
}`})]}),"\n",(0,t.jsxs)(d,{id:"go-idioms",number:"05",title:"Go idioms with",titleAccent:"fp-go.",children:[(0,t.jsx)(r.h3,{id:"idiom-1-errors-are-values",children:"Idiom 1: Errors are Values"}),(0,t.jsx)(s,{file:"errors-as-values.go",children:`// Go idiom: return errors
func fetchUser(id string) (User, error) {
  // ...
}

// fp-go: errors in Result
func fetchUser(id string) result.Result[User] {
  // ...
}

// Both are valid - choose based on context`}),(0,t.jsx)(r.h3,{id:"idiom-2-accept-interfaces-return-structs",children:"Idiom 2: Accept Interfaces, Return Structs"}),(0,t.jsx)(s,{file:"interfaces.go",children:`// Go idiom
type UserService interface {
  GetUser(id string) (User, error)
}

type userService struct {
  db Database
}

func (s *userService) GetUser(id string) (User, error) {
  // Can use fp-go internally
  result := function.Pipe2(
      s.fetchUser(id),
      result.Chain(s.validateUser),
  )
  
  // Return Go-style
  return result.Fold(
      func(err error) (User, error) { return User{}, err },
      func(u User) (User, error) { return u, nil },
  )
}`}),(0,t.jsx)(r.h3,{id:"idiom-3-make-zero-values-useful",children:"Idiom 3: Make Zero Values Useful"}),(0,t.jsx)(s,{file:"zero-values.go",children:`// Go idiom: zero values work
type Config struct {
  Port    int    // 0 is valid
  Host    string // "" is valid
  Timeout time.Duration // 0 is valid
}

// fp-go: use Option for truly optional values
type Config struct {
  Port    int
  Host    string
  Timeout option.Option[time.Duration] // None means use default
}`}),(0,t.jsx)(r.h3,{id:"idiom-4-keep-packages-focused",children:"Idiom 4: Keep Packages Focused"}),(0,t.jsx)(s,{file:"focused-packages.go",children:`// Go idiom: small, focused packages
package user

// Don't mix everything
// \u{274C} user/fp.go, user/imperative.go

// \u{2705} Use fp-go where it helps
func (s *Service) GetUser(id string) (User, error) {
  // Use fp-go internally
  result := s.fetchAndValidate(id)
  
  // Return Go-style
  return result.Fold(
      func(err error) (User, error) { return User{}, err },
      func(u User) (User, error) { return u, nil },
  )
}`})]}),"\n",(0,t.jsxs)(d,{id:"testing",number:"06",title:"Testing with",titleAccent:"fp-go.",children:[(0,t.jsx)(r.h3,{id:"test-pure-functions",children:"Test Pure Functions"}),(0,t.jsx)(s,{file:"test-pure.go",children:`// Pure functions are easy to test
func TestNormalizeUser(t *testing.T) {
  user := User{Name: "  JOHN  "}
  normalized := normalizeUser(user)
  
  assert.Equal(t, "john", normalized.Name)
}`}),(0,t.jsx)(r.h3,{id:"test-pipelines",children:"Test Pipelines"}),(0,t.jsx)(s,{file:"test-pipelines.go",children:`// Test the pipeline structure
func TestProcessUser(t *testing.T) {
  // Mock dependencies
  fetchUser = func(id string) result.Result[User] {
      return result.Ok(User{ID: id})
  }
  
  // Test pipeline
  result := processUser("123")
  
  assert.True(t, result.IsOk())
}`}),(0,t.jsx)(r.h3,{id:"test-with-table-tests-go-idiom",children:"Test with Table Tests (Go Idiom)"}),(0,t.jsx)(s,{file:"table-tests.go",children:`func TestValidateUser(t *testing.T) {
  tests := []struct {
      name    string
      user    User
      wantErr bool
  }{
      {"valid user", User{Email: "test@example.com"}, false},
      {"invalid email", User{Email: "invalid"}, true},
      {"empty email", User{Email: ""}, true},
  }
  
  for _, tt := range tests {
      t.Run(tt.name, func(t *testing.T) {
          result := validateUser(tt.user)
          
          if tt.wantErr {
              assert.True(t, result.IsErr())
          } else {
              assert.True(t, result.IsOk())
          }
      })
  }
}`})]}),"\n",(0,t.jsxs)(d,{id:"performance",number:"07",title:"Performance",titleAccent:"considerations.",children:[(0,t.jsx)(r.h3,{id:"measure-first",children:"Measure First"}),(0,t.jsx)(s,{file:"benchmark.go",children:`// Don't assume - benchmark
func BenchmarkStandard(b *testing.B) {
  for i := 0; i < b.N; i++ {
      _ = standardApproach()
  }
}

func BenchmarkFPGo(b *testing.B) {
  for i := 0; i < b.N; i++ {
      _ = fpgoApproach()
  }
}

// Then decide based on results`}),(0,t.jsx)(r.h3,{id:"use-idiomatic-packages",children:"Use Idiomatic Packages"}),(0,t.jsx)(s,{file:"idiomatic.go",children:`// fp-go provides idiomatic (faster) versions
import "github.com/IBM/fp-go/v2/array/idiomatic"

// 2-32x faster for array operations
filtered := idiomatic.Filter(predicate)(array)`}),(0,t.jsx)(r.h3,{id:"optimize-hot-paths",children:"Optimize Hot Paths"}),(0,t.jsx)(s,{file:"optimize-hot-paths.go",children:`// Cold path: use fp-go for clarity
func processConfig(config Config) result.Result[Config] {
  return function.Pipe3(
      result.Ok(config),
      result.Chain(validate),
      result.Chain(enrich),
  )
}

// Hot path: optimize
func processRequest(req Request) Response {
  // Direct implementation for performance
  if !isValid(req) {
      return errorResponse
  }
  return successResponse
}`})]}),"\n",(0,t.jsxs)(d,{id:"team-adoption",number:"08",title:"Team",titleAccent:"adoption.",children:[(0,t.jsx)(r.h3,{id:"start-small",children:"Start Small"}),(0,t.jsx)(s,{file:"start-small.go",children:`// Phase 1: Use Result for error handling
func fetchUser(id string) result.Result[User] {
  user, err := db.FindByID(id)
  return result.FromGoError(user, err)
}

// Phase 2: Add Option for optional values
func findConfig(key string) option.Option[string] {
  // ...
}

// Phase 3: Introduce composition
func processUser(id string) result.Result[User] {
  return function.Pipe2(
      fetchUser(id),
      result.Chain(validateUser),
  )
}`}),(0,t.jsx)(r.h3,{id:"provide-training",children:"Provide Training"}),(0,t.jsx)(s,{file:"training.go",children:`// Create examples for your team
// examples/user_processing.go

// Example 1: Simple Result usage
func example1() {
  result := fetchUser("123")
  result.Fold(
      func(err error) { fmt.Println("Error:", err) },
      func(user User) { fmt.Println("User:", user) },
  )
}

// Example 2: Chaining operations
func example2() {
  result := function.Pipe2(
      fetchUser("123"),
      result.Chain(validateUser),
  )
}`}),(0,t.jsx)(r.h3,{id:"set-guidelines",children:"Set Guidelines"}),(0,t.jsxs)(i,{type:"info",children:[(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Document when to use fp-go:"})}),(0,t.jsx)(r.p,{children:"Use fp-go for:"}),(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"Complex error handling (3+ sequential operations)"}),"\n",(0,t.jsx)(r.li,{children:"Optional values (instead of nil pointers)"}),"\n",(0,t.jsx)(r.li,{children:"Data transformations (map, filter, reduce)"}),"\n"]}),(0,t.jsx)(r.p,{children:"Use standard Go for:"}),(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"Simple operations"}),"\n",(0,t.jsx)(r.li,{children:"Performance-critical code"}),"\n",(0,t.jsx)(r.li,{children:"Public APIs (convert at boundary)"}),"\n"]})]})]})]})}function c(e={}){let{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}function p(e,r){throw Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},8453(e,r,i){i.d(r,{R:()=>o,x:()=>l});var s=i(6540);let t={},n=s.createContext(t);function o(e){let r=s.useContext(n);return s.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(n.Provider,{value:r},e.children)}}}]);
"use strict";(self.webpackChunkfp_go_docs=self.webpackChunkfp_go_docs||[]).push([["1435"],{2726(e,t,r){r.r(t),r.d(t,{metadata:()=>s,default:()=>p,frontMatter:()=>o,contentTitle:()=>u,toc:()=>d,assets:()=>c});var s=JSON.parse('{"id":"concepts/pure-functions","title":"Pure Functions","description":"What makes a function pure, why it matters, and how to apply purity in Go with fp-go.","source":"@site/docs/concepts/pure-functions.md","sourceDirName":"concepts","slug":"/concepts/pure-functions","permalink":"/fp-go/docs/concepts/pure-functions","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":11,"frontMatter":{"sidebar_position":11,"title":"Pure Functions","hide_title":true,"description":"What makes a function pure, why it matters, and how to apply purity in Go with fp-go."},"sidebar":"tutorialSidebar","previous":{"title":"v1 and v2 Interop","permalink":"/fp-go/docs/migration/interop"},"next":{"title":"Monads","permalink":"/fp-go/docs/concepts/monads"}}'),i=r(4848),n=r(8453),a=r(773),l=r(7250);let o={sidebar_position:11,title:"Pure Functions",hide_title:!0,description:"What makes a function pure, why it matters, and how to apply purity in Go with fp-go."},u,c={},d=[{value:"Rule 1 \u2014 deterministic",id:"rule-1--deterministic",level:3},{value:"Rule 2 \u2014 no side effects",id:"rule-2--no-side-effects",level:3},{value:"Modifying variables",id:"modifying-variables",level:3},{value:"I/O operations",id:"io-operations",level:3},{value:"Network calls",id:"network-calls",level:3},{value:"Random and time",id:"random-and-time",level:3},{value:"1. Easy to test",id:"1-easy-to-test",level:3},{value:"2. Easy to reason about",id:"2-easy-to-reason-about",level:3},{value:"3. Easy to compose",id:"3-easy-to-compose",level:3},{value:"4. Cacheable (memoization)",id:"4-cacheable-memoization",level:3},{value:"5. Parallelizable",id:"5-parallelizable",level:3},{value:"Pattern 1 \u2014 pass dependencies as parameters",id:"pattern-1--pass-dependencies-as-parameters",level:3},{value:"Pattern 2 \u2014 return new values, don&#39;t modify",id:"pattern-2--return-new-values-dont-modify",level:3},{value:"Pattern 3 \u2014 separate pure logic from effects",id:"pattern-3--separate-pure-logic-from-effects",level:3},{value:"Pattern 4 \u2014 use fp-go for effects",id:"pattern-4--use-fp-go-for-effects",level:3},{value:"E-commerce pricing",id:"e-commerce-pricing",level:3},{value:"Data transformation",id:"data-transformation",level:3},{value:"Configuration",id:"configuration",level:3},{value:"Simple tests",id:"simple-tests",level:3},{value:"Property-based testing",id:"property-based-testing",level:3}];function f(e){let t={em:"em",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",...(0,n.R)(),...e.components},{Callout:r,Checklist:s,CodeCard:o,Compare:u,CompareCol:c,PageHeader:d,Section:f,TLDR:p,TLDRCard:h}=t;return r||m("Callout",!0),s||m("Checklist",!0),o||m("CodeCard",!0),u||m("Compare",!0),c||m("CompareCol",!0),d||m("PageHeader",!0),f||m("Section",!0),p||m("TLDR",!0),h||m("TLDRCard",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(d,{eyebrow:"Concepts \xb7 01 / 06",title:"Pure",titleAccent:"functions.",lede:"The foundation of functional programming \u2014 what makes a function pure, why it matters, and how to apply it in Go.",meta:[{label:"// Difficulty",value:"Beginner"},{label:"// Reading time",value:"8 min \xb7 6 sections"},{label:"// Prereqs",value:"Basic Go"}]}),"\n",(0,i.jsxs)(p,{children:[(0,i.jsx)(h,{label:"// Rule 1",prose:!0,value:(0,i.jsxs)(i.Fragment,{children:["Same input \u2192 ",(0,i.jsx)(t.em,{children:"same output."})]})}),(0,i.jsx)(h,{label:"// Rule 2",prose:!0,value:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.em,{children:"No"})," side effects."]})}),(0,i.jsx)(h,{label:"// Benefit",prose:!0,value:(0,i.jsxs)(i.Fragment,{children:["Testable, composable, ",(0,i.jsx)(t.em,{children:"parallelizable."})]}),variant:"up"})]}),"\n",(0,i.jsxs)(f,{id:"what",number:"01",title:"What is a",titleAccent:"pure function?",children:[(0,i.jsxs)(t.p,{children:["A ",(0,i.jsx)(t.strong,{children:"pure function"})," is a function that:"]}),(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Always returns the same output for the same input"})," (deterministic)"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Has no side effects"})," (doesn't modify external state)"]}),"\n"]}),(0,i.jsx)(t.p,{children:"That's it. Simple concept, powerful implications."})]}),"\n",(0,i.jsxs)(f,{id:"rules",number:"02",title:"The two",titleAccent:"rules.",children:[(0,i.jsx)(t.h3,{id:"rule-1--deterministic",children:"Rule 1 \u2014 deterministic"}),(0,i.jsxs)(a.A,{groupId:"purity",children:[(0,i.jsx)(l.A,{value:"pure",label:"\u2705 Pure",children:(0,i.jsx)(o,{file:"pure.go",status:"tested",children:`// Pure: always returns same result for same input
func add(a, b int) int {
  return a + b
}

// Always returns 5
result1 := add(2, 3) // 5
result2 := add(2, 3) // 5
result3 := add(2, 3) // 5`})}),(0,i.jsx)(l.A,{value:"impure",label:"\u274C Impure",children:(0,i.jsx)(o,{file:"impure.go",children:`// Impure: result depends on external state
var counter int

func addWithCounter(a, b int) int {
  counter++
  return a + b + counter
}

// Returns different results!
result1 := addWithCounter(2, 3) // 6  (counter=1)
result2 := addWithCounter(2, 3) // 7  (counter=2)
result3 := addWithCounter(2, 3) // 8  (counter=3)`})})]}),(0,i.jsx)(t.h3,{id:"rule-2--no-side-effects",children:"Rule 2 \u2014 no side effects"}),(0,i.jsxs)(a.A,{groupId:"purity",children:[(0,i.jsx)(l.A,{value:"pure",label:"\u2705 Pure",children:(0,i.jsx)(o,{file:"pure.go",status:"tested",children:`// Pure: doesn't modify anything outside itself
func multiply(a, b int) int {
  return a * b
}

// No external state changed
result := multiply(3, 4) // 12`})}),(0,i.jsx)(l.A,{value:"impure",label:"\u274C Impure",children:(0,i.jsx)(o,{file:"impure.go",children:`// Impure: modifies external state
var total int

func addToTotal(value int) int {
  total += value  // Side effect!
  return total
}

result := addToTotal(5) // total is now 5`})})]})]}),"\n",(0,i.jsxs)(f,{id:"common-side-effects",number:"03",title:"Common",titleAccent:"side effects.",children:[(0,i.jsx)(t.h3,{id:"modifying-variables",children:"Modifying variables"}),(0,i.jsx)(o,{file:"impure-cache.go",children:`var cache map[string]string

// Impure: modifies global cache
func getCached(key string) string {
  if val, ok := cache[key]; ok {
      return val
  }
  val := fetchFromDB(key)
  cache[key] = val  // Side effect!
  return val
}`}),(0,i.jsx)(t.h3,{id:"io-operations",children:"I/O operations"}),(0,i.jsx)(o,{file:"impure-io.go",children:`// Impure: reads from file system
func readConfig() Config {
  data, _ := os.ReadFile("config.json")  // Side effect!
  var config Config
  json.Unmarshal(data, &config)
  return config
}

// Impure: writes to console
func logMessage(msg string) {
  fmt.Println(msg)  // Side effect!
}`}),(0,i.jsx)(t.h3,{id:"network-calls",children:"Network calls"}),(0,i.jsx)(o,{file:"impure-net.go",children:`// Impure: makes HTTP request
func fetchUser(id string) User {
  resp, _ := http.Get("https://api.example.com/users/" + id)  // Side effect!
  var user User
  json.NewDecoder(resp.Body).Decode(&user)
  return user
}`}),(0,i.jsx)(t.h3,{id:"random-and-time",children:"Random and time"}),(0,i.jsx)(o,{file:"impure-nondet.go",children:`// Impure: uses random number generator
func generateID() string {
  return fmt.Sprintf("id-%d", rand.Int())  // Side effect!
}

// Impure: depends on current time
func isExpired(expiresAt time.Time) bool {
  return time.Now().After(expiresAt)  // Side effect!
}`})]}),"\n",(0,i.jsxs)(f,{id:"benefits",number:"04",title:"Why pure functions",titleAccent:"matter.",children:[(0,i.jsx)(t.h3,{id:"1-easy-to-test",children:"1. Easy to test"}),(0,i.jsxs)(a.A,{groupId:"testing",children:[(0,i.jsx)(l.A,{value:"pure",label:"\u2705 Pure (easy)",children:(0,i.jsx)(o,{file:"pure-test.go",status:"tested",children:`// Pure function
func calculateDiscount(price float64, percentage float64) float64 {
  return price * (percentage / 100)
}

// Simple test - no setup needed
func TestCalculateDiscount(t *testing.T) {
  result := calculateDiscount(100, 10)
  assert.Equal(t, 10.0, result)
}`})}),(0,i.jsx)(l.A,{value:"impure",label:"\u274C Impure (hard)",children:(0,i.jsx)(o,{file:"impure-test.go",children:`// Impure function
var discountRate float64

func calculateDiscount(price float64) float64 {
  return price * (discountRate / 100)
}

// Complex test - needs setup
func TestCalculateDiscount(t *testing.T) {
  // Setup
  oldRate := discountRate
  discountRate = 10
  defer func() { discountRate = oldRate }()

  // Test
  result := calculateDiscount(100)
  assert.Equal(t, 10.0, result)
}`})})]}),(0,i.jsx)(t.h3,{id:"2-easy-to-reason-about",children:"2. Easy to reason about"}),(0,i.jsx)(o,{file:"reasoning.go",children:`// Pure: you know exactly what it does
func fullName(first, last string) string {
  return first + " " + last
}

// No need to check:
// - What global variables it uses
// - What files it reads
// - What network calls it makes
// - What it logs
// Just look at the function!`}),(0,i.jsx)(t.h3,{id:"3-easy-to-compose",children:"3. Easy to compose"}),(0,i.jsx)(o,{file:"compose.go",status:"tested",children:`// Pure functions compose naturally
func double(x int) int { return x * 2 }
func addOne(x int) int { return x + 1 }
func square(x int) int { return x * x }

// Compose them
result := square(addOne(double(5)))  // ((5*2)+1)^2 = 121

// Or with fp-go
import "github.com/IBM/fp-go/v2/function"

composed := function.Flow3(double, addOne, square)
result := composed(5)  // 121`}),(0,i.jsx)(t.h3,{id:"4-cacheable-memoization",children:"4. Cacheable (memoization)"}),(0,i.jsx)(o,{file:"memo.go",children:`// Pure functions can be safely cached
var cache = make(map[int]int)

func expensiveCalculation(n int) int {
  if result, ok := cache[n]; ok {
      return result  // Return cached result
  }

  // Do expensive calculation
  result := /* ... */
  cache[n] = result
  return result
}

// Safe because function is pure!
// Same input always gives same output`}),(0,i.jsx)(t.h3,{id:"5-parallelizable",children:"5. Parallelizable"}),(0,i.jsx)(o,{file:"parallel.go",children:`// Pure functions are safe to run in parallel
func processItem(item Item) Result {
  // Pure processing
  return transform(item)
}

// Safe to parallelize
var wg sync.WaitGroup
for _, item := range items {
  wg.Add(1)
  go func(i Item) {
      defer wg.Done()
      result := processItem(i)  // No race conditions!
      results <- result
  }(item)
}
wg.Wait()`})]}),"\n",(0,i.jsxs)(f,{id:"patterns",number:"05",title:"Making functions",titleAccent:"pure.",children:[(0,i.jsx)(t.h3,{id:"pattern-1--pass-dependencies-as-parameters",children:"Pattern 1 \u2014 pass dependencies as parameters"}),(0,i.jsxs)(a.A,{groupId:"refactor",children:[(0,i.jsx)(l.A,{value:"impure",label:"\u274C Impure",children:(0,i.jsx)(o,{file:"impure.go",children:`var db *sql.DB

func getUser(id string) (User, error) {
  // Uses global db
  row := db.QueryRow("SELECT * FROM users WHERE id = ?", id)
  var user User
  err := row.Scan(&user.ID, &user.Name)
  return user, err
}`})}),(0,i.jsx)(l.A,{value:"pure",label:"\u2705 Pure",children:(0,i.jsx)(o,{file:"pure.go",status:"tested",children:`// Pass db as parameter
func getUser(db *sql.DB, id string) (User, error) {
  row := db.QueryRow("SELECT * FROM users WHERE id = ?", id)
  var user User
  err := row.Scan(&user.ID, &user.Name)
  return user, err
}

// Now testable with mock db!`})})]}),(0,i.jsx)(t.h3,{id:"pattern-2--return-new-values-dont-modify",children:"Pattern 2 \u2014 return new values, don't modify"}),(0,i.jsxs)(a.A,{groupId:"refactor",children:[(0,i.jsx)(l.A,{value:"impure",label:"\u274C Impure",children:(0,i.jsx)(o,{file:"impure.go",children:`// Modifies the slice
func addItem(items []Item, item Item) {
  items = append(items, item)  // Modifies input!
}

original := []Item{{ID: 1}}
addItem(original, Item{ID: 2})
// original is now modified`})}),(0,i.jsx)(l.A,{value:"pure",label:"\u2705 Pure",children:(0,i.jsx)(o,{file:"pure.go",status:"tested",children:`// Returns new slice
func addItem(items []Item, item Item) []Item {
  result := make([]Item, len(items)+1)
  copy(result, items)
  result[len(items)] = item
  return result
}

original := []Item{{ID: 1}}
updated := addItem(original, Item{ID: 2})
// original unchanged, updated has new item`})})]}),(0,i.jsx)(t.h3,{id:"pattern-3--separate-pure-logic-from-effects",children:"Pattern 3 \u2014 separate pure logic from effects"}),(0,i.jsxs)(a.A,{groupId:"refactor",children:[(0,i.jsx)(l.A,{value:"impure",label:"\u274C Impure",children:(0,i.jsx)(o,{file:"impure.go",children:`// Mixed pure logic and effects
func processOrder(orderID string) error {
  // Effect: fetch from DB
  order, err := db.GetOrder(orderID)
  if err != nil {
      return err
  }

  // Pure: calculate total
  total := 0.0
  for _, item := range order.Items {
      total += item.Price
  }

  // Effect: save to DB
  order.Total = total
  return db.SaveOrder(order)
}`})}),(0,i.jsx)(l.A,{value:"pure",label:"\u2705 Pure",children:(0,i.jsx)(o,{file:"pure.go",status:"tested",children:`// Pure: just calculates
func calculateTotal(items []Item) float64 {
  total := 0.0
  for _, item := range items {
      total += item.Price
  }
  return total
}

// Impure: handles effects
func processOrder(orderID string) error {
  order, err := db.GetOrder(orderID)
  if err != nil {
      return err
  }

  // Use pure function
  order.Total = calculateTotal(order.Items)

  return db.SaveOrder(order)
}

// Now calculateTotal is easily testable!`})})]}),(0,i.jsx)(t.h3,{id:"pattern-4--use-fp-go-for-effects",children:"Pattern 4 \u2014 use fp-go for effects"}),(0,i.jsxs)(a.A,{groupId:"refactor",children:[(0,i.jsx)(l.A,{value:"standard",label:"Without fp-go",children:(0,i.jsx)(o,{file:"standard.go",children:`// Impure: executes immediately
func fetchUser(id string) (User, error) {
  resp, err := http.Get("https://api.example.com/users/" + id)
  if err != nil {
      return User{}, err
  }
  defer resp.Body.Close()

  var user User
  err = json.NewDecoder(resp.Body).Decode(&user)
  return user, err
}`})}),(0,i.jsx)(l.A,{value:"v2",label:"With fp-go v2",children:(0,i.jsx)(o,{file:"fp-go.go",status:"tested",children:`// Pure: returns a description of the effect
func fetchUser(id string) ioresult.IOResult[User] {
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

// Function is pure - it just returns a function
// Effect happens when you execute it:
io := fetchUser("123")  // Pure! No HTTP call yet
user := io()            // Now the HTTP call happens`})})]})]}),"\n",(0,i.jsxs)(f,{id:"practical",number:"06",title:"Pure functions",titleAccent:"in Go.",lede:"Go is not a pure functional language \u2014 and that's fine. Pure functions are a tool, not a religion.",children:[(0,i.jsxs)(u,{children:[(0,i.jsxs)(c,{kind:"good",title:"Use pure functions for",pill:"fits",children:[(0,i.jsx)("p",{children:"Business logic."}),(0,i.jsx)("p",{children:"Calculations."}),(0,i.jsx)("p",{children:"Transformations."}),(0,i.jsx)("p",{children:"Validations."}),(0,i.jsx)("p",{children:"Formatting."}),(0,i.jsx)("p",{children:"Parsing (when possible)."})]}),(0,i.jsxs)(c,{kind:"bad",title:"Don't force purity for",pill:"trade-offs",children:[(0,i.jsx)("p",{children:"I/O operations (use fp-go types instead)."}),(0,i.jsx)("p",{children:"Logging (use structured logging)."}),(0,i.jsx)("p",{children:"Metrics (use dedicated libraries)."}),(0,i.jsx)("p",{children:"Performance-critical code (if purity hurts performance)."})]})]}),(0,i.jsx)(o,{file:"balance.go",children:`// Pure: business logic
func calculateShipping(weight float64, distance float64) float64 {
  baseRate := 5.0
  weightRate := weight * 0.5
  distanceRate := distance * 0.1
  return baseRate + weightRate + distanceRate
}

// Pure: validation
func validateEmail(email string) error {
  if !strings.Contains(email, "@") {
      return errors.New("invalid email")
  }
  return nil
}

// Impure but necessary: I/O
func saveOrder(order Order) error {
  // Use fp-go to make it more manageable
  return ioresult.Of(func() result.Result[Order] {
      // Database operation
      return result.FromGoError(order, db.Save(order))
  })()
}`})]}),"\n",(0,i.jsxs)(f,{id:"examples",number:"07",title:"Real-world",titleAccent:"examples.",children:[(0,i.jsx)(t.h3,{id:"e-commerce-pricing",children:"E-commerce pricing"}),(0,i.jsxs)(a.A,{groupId:"example",children:[(0,i.jsx)(l.A,{value:"impure",label:"\u274C Impure",children:(0,i.jsx)(o,{file:"impure.go",children:`var taxRate float64
var discountRate float64

func calculatePrice(basePrice float64) float64 {
  price := basePrice
  price -= price * (discountRate / 100)
  price += price * (taxRate / 100)
  return price
}

// Hard to test - depends on global state`})}),(0,i.jsx)(l.A,{value:"pure",label:"\u2705 Pure",children:(0,i.jsx)(o,{file:"pure.go",status:"tested",children:`type PricingConfig struct {
  TaxRate      float64
  DiscountRate float64
}

func calculatePrice(basePrice float64, config PricingConfig) float64 {
  price := basePrice
  price -= price * (config.DiscountRate / 100)
  price += price * (config.TaxRate / 100)
  return price
}

// Easy to test with different configs
func TestCalculatePrice(t *testing.T) {
  config := PricingConfig{TaxRate: 10, DiscountRate: 20}
  result := calculatePrice(100, config)
  assert.Equal(t, 88.0, result) // (100 - 20) + 8 = 88
}`})})]}),(0,i.jsx)(t.h3,{id:"data-transformation",children:"Data transformation"}),(0,i.jsxs)(a.A,{groupId:"example",children:[(0,i.jsx)(l.A,{value:"impure",label:"\u274C Impure",children:(0,i.jsx)(o,{file:"impure.go",children:`func processUsers(users []User) {
  for i := range users {
      users[i].Name = strings.ToUpper(users[i].Name)
      users[i].Email = strings.ToLower(users[i].Email)
      users[i].Active = true
  }
}

// Modifies input - surprising behavior`})}),(0,i.jsx)(l.A,{value:"pure",label:"\u2705 Pure",children:(0,i.jsx)(o,{file:"pure.go",status:"tested",children:`func normalizeUser(user User) User {
  return User{
      ID:     user.ID,
      Name:   strings.ToUpper(user.Name),
      Email:  strings.ToLower(user.Email),
      Active: true,
  }
}

func processUsers(users []User) []User {
  result := make([]User, len(users))
  for i, user := range users {
      result[i] = normalizeUser(user)
  }
  return result
}

// Or with fp-go
import "github.com/IBM/fp-go/v2/array"

func processUsers(users []User) []User {
  return array.Map(normalizeUser)(users)
}

// Original unchanged, clear behavior`})})]}),(0,i.jsx)(t.h3,{id:"configuration",children:"Configuration"}),(0,i.jsxs)(a.A,{groupId:"example",children:[(0,i.jsx)(l.A,{value:"impure",label:"\u274C Impure",children:(0,i.jsx)(o,{file:"impure.go",children:`var config Config

func init() {
  data, _ := os.ReadFile("config.json")
  json.Unmarshal(data, &config)
}

func getTimeout() time.Duration {
  return config.Timeout
}

// Global state, hard to test`})}),(0,i.jsx)(l.A,{value:"pure",label:"\u2705 Pure",children:(0,i.jsx)(o,{file:"pure.go",status:"tested",children:`type Config struct {
  Timeout time.Duration
}

// Pure: just parses
func parseConfig(data []byte) (Config, error) {
  var config Config
  err := json.Unmarshal(data, &config)
  return config, err
}

// Pure: just extracts
func getTimeout(config Config) time.Duration {
  return config.Timeout
}

// Impure: I/O isolated
func loadConfig() (Config, error) {
  data, err := os.ReadFile("config.json")
  if err != nil {
      return Config{}, err
  }
  return parseConfig(data)
}`})})]})]}),"\n",(0,i.jsxs)(f,{id:"testing",number:"08",title:"Testing pure",titleAccent:"functions.",children:[(0,i.jsx)(t.h3,{id:"simple-tests",children:"Simple tests"}),(0,i.jsx)(o,{file:"test_basic.go",status:"tested",children:`func TestPureFunctions(t *testing.T) {
  // No setup needed!

  t.Run("add", func(t *testing.T) {
      assert.Equal(t, 5, add(2, 3))
      assert.Equal(t, 0, add(-1, 1))
  })

  t.Run("multiply", func(t *testing.T) {
      assert.Equal(t, 12, multiply(3, 4))
      assert.Equal(t, 0, multiply(0, 100))
  })
}`}),(0,i.jsx)(t.h3,{id:"property-based-testing",children:"Property-based testing"}),(0,i.jsx)(o,{file:"test_properties.go",status:"tested",children:`func TestAddCommutative(t *testing.T) {
  // Pure functions have mathematical properties
  for i := 0; i < 100; i++ {
      a := rand.Int()
      b := rand.Int()

      // Commutative: a + b = b + a
      assert.Equal(t, add(a, b), add(b, a))
  }
}

func TestAddAssociative(t *testing.T) {
  for i := 0; i < 100; i++ {
      a := rand.Int()
      b := rand.Int()
      c := rand.Int()

      // Associative: (a + b) + c = a + (b + c)
      assert.Equal(t, add(add(a, b), c), add(a, add(b, c)))
  }
}`})]}),"\n",(0,i.jsxs)(f,{id:"faq",number:"09",title:"Common",titleAccent:"questions.",children:[(0,i.jsx)(r,{title:"Aren't all Go functions impure?",children:(0,i.jsxs)(t.p,{children:["No. Many Go functions are pure: ",(0,i.jsx)("code",{children:"strings.ToUpper"}),", ",(0,i.jsx)("code",{children:"math.Max"}),", ",(0,i.jsx)("code",{children:"strconv.Itoa"}),", most of ",(0,i.jsx)("code",{children:"encoding/json"})," parsing."]})}),(0,i.jsx)(r,{title:"Should I never use global variables?",children:(0,i.jsxs)(t.p,{children:["Use them wisely. Global constants are fine. Global configuration loaded once at startup is often okay. Global ",(0,i.jsx)("em",{children:"mutable"})," state is problematic."]})}),(0,i.jsx)(r,{title:"What about logging?",children:(0,i.jsx)(t.p,{children:"Logging is a side effect \u2014 but often acceptable. Prefer structured logging, log at boundaries (not in pure functions), and use context for request-scoped logging."})}),(0,i.jsx)(r,{type:"success",title:"Is this practical in Go?",children:(0,i.jsx)(t.p,{children:"Yes. Many successful Go projects use pure functions extensively. It's about balance, not dogma."})})]}),"\n",(0,i.jsxs)(f,{id:"summary",number:"10",title:"Summary",children:[(0,i.jsx)(s,{title:"Pure functions",items:[{label:"Same input \u2192 same output",done:!0},{label:"No side effects",done:!0},{label:"Easy to test",done:!0},{label:"Easy to reason about",done:!0},{label:"Easy to compose",done:!0},{label:"Cacheable",done:!0},{label:"Parallelizable",done:!0}]}),(0,i.jsx)(r,{type:"success",title:"Key takeaway.",children:(0,i.jsx)(t.p,{children:"Pure functions are a tool for writing better code. Use them where they help, don't force them where they don't."})})]})]})}function p(e={}){let{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(f,{...e})}):f(e)}function m(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},7250(e,t,r){r.d(t,{A:()=>l});var s=r(4848);r(6540);var i=r(4164),n=r(7663);function a({children:e,className:t,hidden:r}){return(0,s.jsx)("div",{role:"tabpanel",className:(0,i.A)("tabItem_Ymn6",t),hidden:r,children:e})}function l({children:e,className:t,value:r}){let{selectedValue:i,lazy:o}=(0,n.uc)(),u=r===i;return!u&&o?null:(0,s.jsx)(a,{className:t,hidden:!u,children:e})}},773(e,t,r){r.d(t,{A:()=>f});var s=r(4848);r(6540);var i=r(4164),n=r(8287),a=r(7663),l=r(8584),o=r(9863);function u({className:e}){let{selectedValue:t,selectValue:r,tabValues:n,block:o}=(0,a.uc)(),c=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.a_)(),f=e=>{let s=e.currentTarget,i=n[c.indexOf(s)].value;i!==t&&(d(s),r(i))},p=e=>{let t=null;switch(e.key){case"Enter":f(e);break;case"ArrowRight":{let r=c.indexOf(e.currentTarget)+1;t=c[r]??c[0];break}case"ArrowLeft":{let r=c.indexOf(e.currentTarget)-1;t=c[r]??c[c.length-1]}}t?.focus()};return(0,s.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":o},e),children:n.map(({value:e,label:r,attributes:n})=>(0,s.jsx)("li",{role:"tab",tabIndex:t===e?0:-1,"aria-selected":t===e,ref:e=>{c.push(e)},onKeyDown:p,onClick:f,...n,className:(0,i.A)("tabs__item","tabItem_LNqP",n?.className,{"tabs__item--active":t===e}),children:r??e},e))})}function c({children:e}){return(0,s.jsx)("div",{className:"margin-top--md",children:e})}function d({className:e,children:t}){return(0,s.jsxs)("div",{className:(0,i.A)(n.G.tabs.container,"tabs-container","tabList__CuJ"),children:[(0,s.jsx)(u,{className:e}),(0,s.jsx)(c,{children:t})]})}function f(e){let t=(0,o.A)(),r=(0,a.OC)(e);return(0,s.jsx)(a.O_,{value:r,children:(0,s.jsx)(d,{className:e.className,children:(0,a.vT)(e.children)})},String(t))}},7663(e,t,r){r.d(t,{OC:()=>f,O_:()=>h,uc:()=>m,vT:()=>c});var s=r(4848),i=r(6540),n=r(6347),a=r(9989),l=r(6629),o=r(618),u=r(1367);function c(e){return i.Children.toArray(e).filter(e=>"\n"!==e)}function d({value:e,tabValues:t}){return t.some(t=>t.value===e)}function f(e){let t,{defaultValue:r,queryString:s=!1,groupId:c}=e,f=function(e){let{values:t,children:r}=e;return(0,i.useMemo)(()=>{let e=t??i.Children.toArray(r).flatMap(e=>{if(!e)return[];if((0,i.isValidElement)(e)&&function(e){let{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return[e];let t="string"==typeof e.type?e.type:e.type.name;throw Error(`Docusaurus error: Bad <Tabs> child <${t}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.
If you do not want to pass on a "value" prop to the direct children of <Tabs>, you can also pass an explicit <Tabs values={...}> prop.`)}).map(({props:{value:e,label:t,attributes:r,default:s}})=>({value:e,label:t,attributes:r,default:s})),s=(0,o.XI)(e,(e,t)=>e.value===t.value);if(s.length>0)throw Error(`Docusaurus error: Duplicate values "${s.map(e=>`'${e.value}'`).join(", ")}" found in <Tabs>. Every value needs to be unique.`);return e},[t,r])}(e),[p,m]=(0,i.useState)(()=>(function({defaultValue:e,tabValues:t}){if(0===t.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!d({value:e,tabValues:t}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${t.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}let r=t.find(e=>e.default)??t[0];if(!r)throw Error("Unexpected error: 0 tabValues");return r.value})({defaultValue:r,tabValues:f})),[h,g]=function({queryString:e=!1,groupId:t}){let r=(0,n.W6)(),s=function({queryString:e=!1,groupId:t}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!t)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:e,groupId:t});return[(0,l.aZ)(s),(0,i.useCallback)(e=>{if(!s)return;let t=new URLSearchParams(r.location.search);t.set(s,e),r.replace({...r.location,search:t.toString()})},[s,r])]}({queryString:s,groupId:c}),[x,b]=function({groupId:e}){let t=e?`docusaurus.tab.${e}`:null,[r,s]=(0,u.Dv)(t);return[r,(0,i.useCallback)(e=>{t&&s.set(e)},[t,s])]}({groupId:c}),v=d({value:t=h??x,tabValues:f})?t:null;return(0,a.A)(()=>{v&&m(v)},[v]),{selectedValue:p,selectValue:(0,i.useCallback)(e=>{if(!d({value:e,tabValues:f}))throw Error(`Can't select invalid tab value=${e}`);m(e),g(e),b(e)},[g,b,f]),tabValues:f,lazy:e.lazy??!1,block:e.block??!1}}let p=(0,i.createContext)(null);function m(){let e=i.useContext(p);if(!e)throw Error("useTabsContext() must be used within a Tabs component");return e}function h(e){return(0,s.jsx)(p.Provider,{value:e.value,children:e.children})}},8453(e,t,r){r.d(t,{R:()=>a,x:()=>l});var s=r(6540);let i={},n=s.createContext(i);function a(e){let t=s.useContext(n);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(n.Provider,{value:t},e.children)}}}]);
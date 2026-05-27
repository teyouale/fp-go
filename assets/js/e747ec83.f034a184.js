"use strict";(self.webpackChunkfp_go_docs=self.webpackChunkfp_go_docs||[]).push([["9560"],{564(e,r,n){n.r(r),n.d(r,{metadata:()=>i,default:()=>u,frontMatter:()=>l,contentTitle:()=>a,toc:()=>d,assets:()=>o});var i=JSON.parse('{"id":"glossary","title":"Glossary","description":"Functional programming terminology explained with Go examples using fp-go.","source":"@site/docs/glossary.md","sourceDirName":".","slug":"/glossary","permalink":"/fp-go/docs/glossary","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"sidebar_position":6,"title":"Glossary","hide_title":true,"description":"Functional programming terminology explained with Go examples using fp-go."},"sidebar":"tutorialSidebar","previous":{"title":"Frequently Asked Questions","permalink":"/fp-go/docs/faq"},"next":{"title":"Content design kit","permalink":"/fp-go/docs/design-kit"}}'),t=n(4848),s=n(8453);let l={sidebar_position:6,title:"Glossary",hide_title:!0,description:"Functional programming terminology explained with Go examples using fp-go."},a,o={},d=[{value:"Applicative",id:"applicative",level:3},{value:"Arity",id:"arity",level:3},{value:"Chain",id:"chain",level:3},{value:"Compose",id:"compose",level:3},{value:"Currying",id:"currying",level:3},{value:"Effect",id:"effect",level:3},{value:"Either",id:"either",level:3},{value:"Endomorphism",id:"endomorphism",level:3},{value:"FlatMap",id:"flatmap",level:3},{value:"Flow",id:"flow",level:3},{value:"Fold",id:"fold",level:3},{value:"Functor",id:"functor",level:3},{value:"Higher-Order Function",id:"higher-order-function",level:3},{value:"Higher-Kinded Type (HKT)",id:"higher-kinded-type-hkt",level:3},{value:"Identity",id:"identity",level:3},{value:"Immutability",id:"immutability",level:3},{value:"IO",id:"io",level:3},{value:"IOResult",id:"ioresult",level:3},{value:"Lazy Evaluation",id:"lazy-evaluation",level:3},{value:"Lazy Type",id:"lazy-type",level:3},{value:"Lens",id:"lens",level:3},{value:"Map",id:"map",level:3},{value:"Monad",id:"monad",level:3},{value:"Monoid",id:"monoid",level:3},{value:"Optics",id:"optics",level:3},{value:"Option",id:"option",level:3},{value:"Partial Application",id:"partial-application",level:3},{value:"Pipe",id:"pipe",level:3},{value:"Predicate",id:"predicate",level:3},{value:"Prism",id:"prism",level:3},{value:"Pure Function",id:"pure-function",level:3},{value:"Reader",id:"reader",level:3},{value:"ReaderIOResult",id:"readerioresult",level:3},{value:"Reduce",id:"reduce",level:3},{value:"Referential Transparency",id:"referential-transparency",level:3},{value:"Result",id:"result",level:3},{value:"Semigroup",id:"semigroup",level:3},{value:"Side Effect",id:"side-effect",level:3},{value:"State",id:"state",level:3},{value:"Traverse",id:"traverse",level:3},{value:"Type Constructor",id:"type-constructor",level:3},{value:"Unit",id:"unit",level:3}];function c(e){let r={a:"a",code:"code",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",...(0,s.R)(),...e.components},{Callout:n,CodeCard:i,MetaPill:l,PageHeader:a,Section:o}=r;return n||h("Callout",!0),i||h("CodeCard",!0),l||h("MetaPill",!0),a||h("PageHeader",!0),o||h("Section",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a,{eyebrow:"Reference \xb7 Glossary",title:"Functional Go",titleAccent:"glossary.",lede:"Every functional programming term you'll see in this documentation \u2014 defined with a real fp-go example.",meta:[{label:"// Version",value:(0,t.jsxs)(t.Fragment,{children:["v2.2.82 ",(0,t.jsx)(l,{children:"LATEST"})]})},{label:"// Terms",value:"40+"},{label:"// Updated",value:"today"}]}),"\n",(0,t.jsxs)(o,{id:"a",number:"A",title:"A",children:[(0,t.jsx)(r.h3,{id:"applicative",children:"Applicative"}),(0,t.jsx)(r.p,{children:"A type class that allows applying a function wrapped in a context to a value wrapped in a context."}),(0,t.jsx)(i,{file:"applicative.go",children:`// Apply a function in Result to a value in Result
funcResult := result.Ok(func(x int) int { return x * 2 })
valueResult := result.Ok(21)
applied := result.Ap(valueResult)(funcResult) // Result[42]`}),(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"See also:"})," ",(0,t.jsx)(r.a,{href:"#f",children:"Functor"}),", ",(0,t.jsx)(r.a,{href:"#m",children:"Monad"})]}),(0,t.jsx)(r.h3,{id:"arity",children:"Arity"}),(0,t.jsx)(r.p,{children:"The number of arguments a function takes."}),(0,t.jsx)(i,{file:"arity.go",children:`// Arity 0 (nullary)
func getValue() int { return 42 }

// Arity 1 (unary)
func double(x int) int { return x * 2 }

// Arity 2 (binary)
func add(x, y int) int { return x + y }

// Arity 3 (ternary)
func sum3(x, y, z int) int { return x + y + z }`})]}),"\n",(0,t.jsxs)(o,{id:"c",number:"C",title:"C",children:[(0,t.jsx)(r.h3,{id:"chain",children:"Chain"}),(0,t.jsxs)(r.p,{children:["Also known as ",(0,t.jsx)(r.strong,{children:"FlatMap"})," or ",(0,t.jsx)(r.strong,{children:"Bind"}),". Transforms a value in a context and flattens the result."]}),(0,t.jsx)(i,{file:"chain.go",children:`// Chain flattens nested Results
func divide(a, b int) result.Result[int] {
  if b == 0 {
      return result.Err[int](errors.New("division by zero"))
  }
  return result.Ok(a / b)
}

result := function.Pipe2(
  result.Ok(10),
  result.Chain(func(x int) result.Result[int] {
      return divide(x, 2) // Returns Result[int], not Result[Result[int]]
  }),
)`}),(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"See also:"})," ",(0,t.jsx)(r.a,{href:"#m",children:"Map"}),", FlatMap"]}),(0,t.jsx)(r.h3,{id:"compose",children:"Compose"}),(0,t.jsx)(r.p,{children:"Combines functions right-to-left (mathematical composition)."}),(0,t.jsx)(i,{file:"compose.go",children:`// f \u{2218} g = f(g(x))
composed := function.Compose2(
  func(x int) int { return x * 2 },    // Applied second
  func(x int) int { return x + 1 },    // Applied first
)
result := composed(5) // (5 + 1) * 2 = 12`}),(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"See also:"})," ",(0,t.jsx)(r.a,{href:"#f",children:"Flow"}),", ",(0,t.jsx)(r.a,{href:"#p",children:"Pipe"})]}),(0,t.jsx)(r.h3,{id:"currying",children:"Currying"}),(0,t.jsx)(r.p,{children:"Transforming a function with multiple arguments into a sequence of functions each taking a single argument."}),(0,t.jsx)(i,{file:"currying.go",children:`// Uncurried
func add(x, y int) int {
  return x + y
}

// Curried
func addCurried(x int) func(int) int {
  return func(y int) int {
      return x + y
  }
}

add5 := addCurried(5)
result := add5(3) // 8`})]}),"\n",(0,t.jsxs)(o,{id:"e",number:"E",title:"E",children:[(0,t.jsx)(r.h3,{id:"effect",children:"Effect"}),(0,t.jsx)(r.p,{children:"A computation that interacts with the outside world (I/O, network, database, etc.)."}),(0,t.jsx)(i,{file:"effect.go",children:`// Pure function - no effects
func add(x, y int) int {
  return x + y
}

// Effectful function - reads from disk
func readFile(path string) ioresult.IOResult[[]byte] {
  return func() result.Result[[]byte] {
      data, err := os.ReadFile(path)
      return result.FromGoError(data, err)
  }
}`}),(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"See also:"})," ",(0,t.jsx)(r.a,{href:"#i",children:"IO"}),", ",(0,t.jsx)(r.a,{href:"#p",children:"Pure Function"}),", ",(0,t.jsx)(r.a,{href:"#s",children:"Side Effect"})]}),(0,t.jsx)(r.h3,{id:"either",children:"Either"}),(0,t.jsx)(r.p,{children:"A type representing a value that can be one of two types: Left (typically error) or Right (typically success)."}),(0,t.jsx)(i,{file:"either.go",children:`// Either[error, int] - Left for errors, Right for success
func divide(a, b int) either.Either[error, int] {
  if b == 0 {
      return either.Left[int](errors.New("division by zero"))
  }
  return either.Right[error](a / b)
}`}),(0,t.jsx)(n,{title:"In v2.",children:(0,t.jsxs)(r.p,{children:["Prefer ",(0,t.jsx)("a",{href:"#r",children:"Result"})," for error handling."]})}),(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"See also:"})," ",(0,t.jsx)(r.a,{href:"#r",children:"Result"}),", ",(0,t.jsx)(r.a,{href:"#o",children:"Option"})]}),(0,t.jsx)(r.h3,{id:"endomorphism",children:"Endomorphism"}),(0,t.jsx)(r.p,{children:"A function where the input and output types are the same."}),(0,t.jsx)(i,{file:"endomorphism.go",children:`// Endomorphism: int -> int
func double(x int) int {
  return x * 2
}

// Endomorphism: string -> string
func uppercase(s string) string {
  return strings.ToUpper(s)
}

// Compose endomorphisms
composed := function.Compose2(double, increment)`})]}),"\n",(0,t.jsxs)(o,{id:"f",number:"F",title:"F",children:[(0,t.jsx)(r.h3,{id:"flatmap",children:"FlatMap"}),(0,t.jsxs)(r.p,{children:["See ",(0,t.jsx)(r.a,{href:"#c",children:"Chain"}),"."]}),(0,t.jsx)(r.h3,{id:"flow",children:"Flow"}),(0,t.jsx)(r.p,{children:"Combines functions left-to-right (pipeline composition)."}),(0,t.jsx)(i,{file:"flow.go",children:`// g \u{2192} f = f(g(x))
pipeline := function.Flow2(
  func(x int) int { return x + 1 },    // Applied first
  func(x int) int { return x * 2 },    // Applied second
)
result := pipeline(5) // (5 + 1) * 2 = 12`}),(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"See also:"})," ",(0,t.jsx)(r.a,{href:"#p",children:"Pipe"}),", ",(0,t.jsx)(r.a,{href:"#c",children:"Compose"})]}),(0,t.jsx)(r.h3,{id:"fold",children:"Fold"}),(0,t.jsx)(r.p,{children:"Reduces a structure to a single value by applying a function."}),(0,t.jsx)(i,{file:"fold.go",children:`// Fold Result to extract value
result := divide(10, 2)
value := result.Fold(
  func(err error) int { return 0 },      // Handle error
  func(val int) int { return val },      // Handle success
)

// Fold array
sum := array.Reduce(
  func(acc, x int) int { return acc + x },
  0,
)(numbers)`}),(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"See also:"})," ",(0,t.jsx)(r.a,{href:"#r",children:"Reduce"})]}),(0,t.jsx)(r.h3,{id:"functor",children:"Functor"}),(0,t.jsxs)(r.p,{children:["A type that can be mapped over. Implements ",(0,t.jsx)(r.code,{children:"Map"})," operation."]}),(0,t.jsx)(i,{file:"functor.go",children:`// Result is a Functor
result := result.Ok(21)
doubled := result.Map(func(x int) int { return x * 2 }) // Result[42]

// Array is a Functor
numbers := []int{1, 2, 3}
doubled := array.Map(func(x int) int { return x * 2 })(numbers) // [2, 4, 6]`}),(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"See also:"})," ",(0,t.jsx)(r.a,{href:"#m",children:"Map"}),", ",(0,t.jsx)(r.a,{href:"#a",children:"Applicative"}),", ",(0,t.jsx)(r.a,{href:"#m",children:"Monad"})]})]}),"\n",(0,t.jsxs)(o,{id:"h",number:"H",title:"H",children:[(0,t.jsx)(r.h3,{id:"higher-order-function",children:"Higher-Order Function"}),(0,t.jsx)(r.p,{children:"A function that takes functions as arguments or returns functions."}),(0,t.jsx)(i,{file:"hof.go",children:`// Takes function as argument
func applyTwice(f func(int) int, x int) int {
  return f(f(x))
}

// Returns function
func makeAdder(x int) func(int) int {
  return func(y int) int {
      return x + y
  }
}`}),(0,t.jsx)(r.h3,{id:"higher-kinded-type-hkt",children:"Higher-Kinded Type (HKT)"}),(0,t.jsx)(r.p,{children:"A type that abstracts over type constructors. Go doesn't support HKT natively, but fp-go works around this limitation."}),(0,t.jsx)(i,{file:"hkt.go",children:`// HKT concept: F[_] where F is a type constructor
// Result[_], Option[_], Array[_] are all type constructors

// fp-go uses workarounds for HKT-like behavior
// See advanced documentation for details`}),(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"See also:"})," ",(0,t.jsx)(r.a,{href:"#t",children:"Type Constructor"})]})]}),"\n",(0,t.jsxs)(o,{id:"i",number:"I",title:"I",children:[(0,t.jsx)(r.h3,{id:"identity",children:"Identity"}),(0,t.jsx)(r.p,{children:"A monad that wraps a value without adding any computational context. Mainly used for teaching monad laws."}),(0,t.jsx)(i,{file:"identity.go",children:`// Identity just wraps a value
id := identity.Of(42)
doubled := identity.Map(func(x int) int { return x * 2 })(id)
value := identity.Unwrap(doubled) // 42`}),(0,t.jsx)(r.h3,{id:"immutability",children:"Immutability"}),(0,t.jsx)(r.p,{children:"Data that cannot be changed after creation. All transformations create new values."}),(0,t.jsx)(i,{file:"immutability.go",children:`// Immutable transformation
original := []int{1, 2, 3}
doubled := array.Map(func(x int) int { return x * 2 })(original)
// original is unchanged: [1, 2, 3]
// doubled is new: [2, 4, 6]`}),(0,t.jsx)(r.h3,{id:"io",children:"IO"}),(0,t.jsx)(r.p,{children:"A type representing a lazy computation that performs side effects."}),(0,t.jsx)(i,{file:"io.go",children:`// IO wraps side effects
func readFile(path string) io.IO[[]byte] {
  return func() []byte {
      data, _ := os.ReadFile(path)
      return data
  }
}

// Compose IO operations
program := function.Pipe2(
  readFile("config.json"),
  io.Map(parseJSON),
  io.Map(validateConfig),
)

// Execute when ready (side effect happens here)
config := program()`}),(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"See also:"})," ",(0,t.jsx)(r.a,{href:"#i",children:"IOResult"}),", ",(0,t.jsx)(r.a,{href:"#e",children:"Effect"})]}),(0,t.jsx)(r.h3,{id:"ioresult",children:"IOResult"}),(0,t.jsx)(r.p,{children:"Combines IO (lazy evaluation) with Result (error handling)."}),(0,t.jsx)(i,{file:"ioresult.go",children:`func readFile(path string) ioresult.IOResult[[]byte] {
  return func() result.Result[[]byte] {
      data, err := os.ReadFile(path)
      return result.FromGoError(data, err)
  }
}

// Compose with automatic error handling
program := function.Pipe2(
  readFile("config.json"),
  ioresult.Chain(parseJSON),
  ioresult.Chain(validateConfig),
)

// Execute and get Result
result := program()`}),(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"See also:"})," ",(0,t.jsx)(r.a,{href:"#i",children:"IO"}),", ",(0,t.jsx)(r.a,{href:"#r",children:"Result"})]})]}),"\n",(0,t.jsxs)(o,{id:"l",number:"L",title:"L",children:[(0,t.jsx)(r.h3,{id:"lazy-evaluation",children:"Lazy Evaluation"}),(0,t.jsx)(r.p,{children:"Delaying computation until the result is needed."}),(0,t.jsx)(i,{file:"lazy.go",children:`// Eager - computed immediately
result := expensiveComputation()

// Lazy - computed when called
lazyResult := lazy.Of(func() int {
  return expensiveComputation()
})

// Computation happens here
value := lazyResult()`}),(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"See also:"})," ",(0,t.jsx)(r.a,{href:"#i",children:"IO"}),", Lazy Type"]}),(0,t.jsx)(r.h3,{id:"lazy-type",children:"Lazy Type"}),(0,t.jsx)(r.p,{children:"A type that defers computation and memoizes the result."}),(0,t.jsx)(i,{file:"lazy-type.go",children:`// Create lazy value
lazyValue := lazy.Of(func() int {
  fmt.Println("Computing...")
  return 42
})

// First call - computes and caches
value1 := lazyValue() // Prints "Computing...", returns 42

// Second call - returns cached value
value2 := lazyValue() // Returns 42 (no print)`}),(0,t.jsx)(r.h3,{id:"lens",children:"Lens"}),(0,t.jsx)(r.p,{children:"An optic for focusing on a part of a data structure for immutable updates."}),(0,t.jsx)(i,{file:"lens.go",children:`// Lens for accessing nested fields
type User struct {
  Name    string
  Address Address
}

type Address struct {
  Street string
  City   string
}

// Create lens for Address.City
cityLens := lens.Compose(
  userAddressLens,
  addressCityLens,
)

// Update city immutably
updated := lens.Set(cityLens, "New York")(user)
// user is unchanged, updated is new User with new city`}),(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"See also:"})," ",(0,t.jsx)(r.a,{href:"#o",children:"Optics"}),", ",(0,t.jsx)(r.a,{href:"#p",children:"Prism"})]})]}),"\n",(0,t.jsxs)(o,{id:"m",number:"M",title:"M",children:[(0,t.jsx)(r.h3,{id:"map",children:"Map"}),(0,t.jsx)(r.p,{children:"Transforms the value inside a context without changing the context."}),(0,t.jsx)(i,{file:"map.go",children:`// Map over Result
result := result.Ok(21)
doubled := result.Map(func(x int) int { return x * 2 }) // Result[42]

// Map over Array
numbers := []int{1, 2, 3}
doubled := array.Map(func(x int) int { return x * 2 })(numbers) // [2, 4, 6]

// Map over Option
opt := option.Some(21)
doubled := option.Map(func(x int) int { return x * 2 })(opt) // Some(42)`}),(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"See also:"})," ",(0,t.jsx)(r.a,{href:"#f",children:"Functor"}),", ",(0,t.jsx)(r.a,{href:"#c",children:"Chain"})]}),(0,t.jsx)(r.h3,{id:"monad",children:"Monad"}),(0,t.jsxs)(r.p,{children:["A type class that supports ",(0,t.jsx)(r.code,{children:"Map"})," (Functor), ",(0,t.jsx)(r.code,{children:"Ap"})," (Applicative), and ",(0,t.jsx)(r.code,{children:"Chain"})," (Monad) operations."]}),(0,t.jsx)(i,{file:"monad.go",children:`// Result is a Monad
result := result.Ok(10)

// Map (Functor)
mapped := result.Map(func(x int) int { return x * 2 })

// Chain (Monad)
chained := result.Chain(func(x int) result.Result[int] {
  return divide(x, 2)
})`}),(0,t.jsx)(n,{title:"Monad laws.",children:(0,t.jsxs)("ol",{children:[(0,t.jsxs)("li",{children:[(0,t.jsx)("strong",{children:"Left identity:"})," ",(0,t.jsx)("code",{children:"return a >>= f"})," \u2261 ",(0,t.jsx)("code",{children:"f a"})]}),(0,t.jsxs)("li",{children:[(0,t.jsx)("strong",{children:"Right identity:"})," ",(0,t.jsx)("code",{children:"m >>= return"})," \u2261 ",(0,t.jsx)("code",{children:"m"})]}),(0,t.jsxs)("li",{children:[(0,t.jsx)("strong",{children:"Associativity:"})," ",(0,t.jsx)("code",{children:"(m >>= f) >>= g"})," \u2261 ",(0,t.jsx)("code",{children:"m >>= (\\x -> f x >>= g)"})]})]})}),(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"See also:"})," ",(0,t.jsx)(r.a,{href:"#f",children:"Functor"}),", ",(0,t.jsx)(r.a,{href:"#a",children:"Applicative"})]}),(0,t.jsx)(r.h3,{id:"monoid",children:"Monoid"}),(0,t.jsx)(r.p,{children:"A type with an associative binary operation and an identity element."}),(0,t.jsx)(i,{file:"monoid.go",children:`// Monoid for addition
// Identity: 0
// Operation: +
sum := monoid.Concat(
  monoid.Sum,
  []int{1, 2, 3, 4},
) // 10

// Monoid for string concatenation
// Identity: ""
// Operation: +
combined := monoid.Concat(
  monoid.String,
  []string{"Hello", " ", "World"},
) // "Hello World"`}),(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"See also:"})," ",(0,t.jsx)(r.a,{href:"#s",children:"Semigroup"})]})]}),"\n",(0,t.jsxs)(o,{id:"o",number:"O",title:"O",children:[(0,t.jsx)(r.h3,{id:"optics",children:"Optics"}),(0,t.jsx)(r.p,{children:"A family of composable tools for accessing and updating immutable data structures."}),(0,t.jsx)(n,{title:"Types of optics.",children:(0,t.jsxs)("ul",{children:[(0,t.jsxs)("li",{children:[(0,t.jsx)("strong",{children:"Lens:"})," focus on a field"]}),(0,t.jsxs)("li",{children:[(0,t.jsx)("strong",{children:"Prism:"})," focus on a variant of a sum type"]}),(0,t.jsxs)("li",{children:[(0,t.jsx)("strong",{children:"Optional:"})," focus on an optional field"]}),(0,t.jsxs)("li",{children:[(0,t.jsx)("strong",{children:"Traversal:"})," focus on multiple elements"]})]})}),(0,t.jsx)(i,{file:"optics.go",children:`// Lens example
updated := lens.Set(nameLens, "Alice")(user)

// Prism example
value := prism.GetOption(rightPrism)(either)

// Traversal example
updated := traversal.Modify(arrayTraversal, double)(numbers)`}),(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"See also:"})," ",(0,t.jsx)(r.a,{href:"#l",children:"Lens"}),", ",(0,t.jsx)(r.a,{href:"#p",children:"Prism"})]}),(0,t.jsx)(r.h3,{id:"option",children:"Option"}),(0,t.jsxs)(r.p,{children:["A type representing an optional value: ",(0,t.jsx)(r.code,{children:"Some(value)"})," or ",(0,t.jsx)(r.code,{children:"None"}),"."]}),(0,t.jsx)(i,{file:"option.go",children:`// Some - has a value
some := option.Some(42)

// None - no value
none := option.None[int]()

// Safe operations
value := option.GetOrElse(func() int { return 0 })(some) // 42
value = option.GetOrElse(func() int { return 0 })(none)  // 0`}),(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"See also:"})," ",(0,t.jsx)(r.a,{href:"#r",children:"Result"}),", ",(0,t.jsx)(r.a,{href:"#e",children:"Either"})]})]}),"\n",(0,t.jsxs)(o,{id:"p",number:"P",title:"P",children:[(0,t.jsx)(r.h3,{id:"partial-application",children:"Partial Application"}),(0,t.jsx)(r.p,{children:"Fixing some arguments of a function to create a new function with fewer arguments."}),(0,t.jsx)(i,{file:"partial.go",children:`// Original function
func add(x, y int) int {
  return x + y
}

// Partially applied
add5 := func(y int) int {
  return add(5, y)
}

result := add5(3) // 8`}),(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"See also:"})," ",(0,t.jsx)(r.a,{href:"#c",children:"Currying"})]}),(0,t.jsx)(r.h3,{id:"pipe",children:"Pipe"}),(0,t.jsx)(r.p,{children:"Applies a value to a sequence of functions left-to-right."}),(0,t.jsx)(i,{file:"pipe.go",children:`// x |> f |> g = g(f(x))
result := function.Pipe3(
  10,                                    // Start with 10
  func(x int) int { return x + 1 },     // 11
  func(x int) int { return x * 2 },     // 22
  func(x int) int { return x - 2 },     // 20
)`}),(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"See also:"})," ",(0,t.jsx)(r.a,{href:"#f",children:"Flow"}),", ",(0,t.jsx)(r.a,{href:"#c",children:"Compose"})]}),(0,t.jsx)(r.h3,{id:"predicate",children:"Predicate"}),(0,t.jsx)(r.p,{children:"A function that returns a boolean."}),(0,t.jsx)(i,{file:"predicate.go",children:`// Predicate: int -> bool
isPositive := func(x int) bool {
  return x > 0
}

// Compose predicates
isEvenAndPositive := predicate.And(isEven, isPositive)

// Use in filter
filtered := array.Filter(isPositive)(numbers)`}),(0,t.jsx)(r.h3,{id:"prism",children:"Prism"}),(0,t.jsx)(r.p,{children:"An optic for focusing on a variant of a sum type."}),(0,t.jsx)(i,{file:"prism.go",children:`// Prism for Either
rightPrism := prism.Right[error, int]()

// Get value if Right
value := prism.GetOption(rightPrism)(either.Right[error](42))
// Some(42)

// Returns None if Left
value = prism.GetOption(rightPrism)(either.Left[int](err))
// None`}),(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"See also:"})," ",(0,t.jsx)(r.a,{href:"#o",children:"Optics"}),", ",(0,t.jsx)(r.a,{href:"#l",children:"Lens"})]}),(0,t.jsx)(r.h3,{id:"pure-function",children:"Pure Function"}),(0,t.jsx)(r.p,{children:"A function that:"}),(0,t.jsxs)(r.ol,{children:["\n",(0,t.jsx)(r.li,{children:"Always returns the same output for the same input"}),"\n",(0,t.jsx)(r.li,{children:"Has no side effects"}),"\n"]}),(0,t.jsx)(i,{file:"pure.go",children:`// Pure - deterministic, no side effects
func add(x, y int) int {
  return x + y
}

// Impure - depends on external state
var counter int
func increment() int {
  counter++
  return counter
}

// Impure - has side effects
func logAndAdd(x, y int) int {
  fmt.Println("Adding", x, y) // Side effect!
  return x + y
}`}),(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"See also:"})," ",(0,t.jsx)(r.a,{href:"#s",children:"Side Effect"}),", ",(0,t.jsx)(r.a,{href:"#r",children:"Referential Transparency"})]})]}),"\n",(0,t.jsxs)(o,{id:"r",number:"R",title:"R",children:[(0,t.jsx)(r.h3,{id:"reader",children:"Reader"}),(0,t.jsx)(r.p,{children:"A monad for dependency injection. Represents a computation that depends on an environment."}),(0,t.jsx)(i,{file:"reader.go",children:`// Reader[Config, User] - computation that needs Config to produce User
func getUser(id string) reader.Reader[Config, User] {
  return func(config Config) User {
      return config.DB.QueryUser(id)
  }
}

// Compose readers
program := function.Pipe2(
  getUser("123"),
  reader.Map(enrichUser),
  reader.Chain(validateUser),
)

// Provide environment and run
user := program(config)`}),(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"See also:"})," ReaderIOResult"]}),(0,t.jsx)(r.h3,{id:"readerioresult",children:"ReaderIOResult"}),(0,t.jsx)(r.p,{children:"Combines Reader (dependency injection), IO (lazy evaluation), and Result (error handling)."}),(0,t.jsx)(i,{file:"readerioresult.go",children:`func fetchUser(id string) readerioresult.ReaderIOResult[Database, error, User] {
  return func(db Database) ioresult.IOResult[User] {
      return func() result.Result[User] {
          user, err := db.Query(id)
          return result.FromGoError(user, err)
      }
  }
}

// Compose with automatic error handling and dependency injection
program := function.Pipe2(
  fetchUser("123"),
  readerioresult.Chain(enrichUser),
  readerioresult.Chain(validateUser),
)

// Provide database and execute
result := program(db)()`}),(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"See also:"})," ",(0,t.jsx)(r.a,{href:"#r",children:"Reader"}),", ",(0,t.jsx)(r.a,{href:"#i",children:"IOResult"})]}),(0,t.jsx)(r.h3,{id:"reduce",children:"Reduce"}),(0,t.jsx)(r.p,{children:"Combines elements of a collection into a single value."}),(0,t.jsx)(i,{file:"reduce.go",children:`// Sum array
sum := array.Reduce(
  func(acc, x int) int { return acc + x },
  0,  // Initial value
)(numbers)

// Product array
product := array.Reduce(
  func(acc, x int) int { return acc * x },
  1,  // Initial value
)(numbers)`}),(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"See also:"})," ",(0,t.jsx)(r.a,{href:"#f",children:"Fold"})]}),(0,t.jsx)(r.h3,{id:"referential-transparency",children:"Referential Transparency"}),(0,t.jsx)(r.p,{children:"An expression is referentially transparent if it can be replaced with its value without changing program behavior."}),(0,t.jsx)(i,{file:"ref-transparency.go",children:`// Referentially transparent
func add(x, y int) int {
  return x + y
}
// add(2, 3) can always be replaced with 5

// Not referentially transparent
func random() int {
  return rand.Int()
}
// random() cannot be replaced with a fixed value`}),(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"See also:"})," ",(0,t.jsx)(r.a,{href:"#p",children:"Pure Function"})]}),(0,t.jsx)(r.h3,{id:"result",children:"Result"}),(0,t.jsxs)(r.p,{children:["A type representing success (",(0,t.jsx)(r.code,{children:"Ok"}),") or failure (",(0,t.jsx)(r.code,{children:"Err"}),"). Recommended for error handling in v2."]}),(0,t.jsx)(i,{file:"result.go",children:`// Ok - success
success := result.Ok(42)

// Err - failure
failure := result.Err[int](errors.New("error"))

// Safe operations
value := result.GetOrElse(func() int { return 0 })(success) // 42
value = result.GetOrElse(func() int { return 0 })(failure)  // 0`}),(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"See also:"})," ",(0,t.jsx)(r.a,{href:"#e",children:"Either"}),", ",(0,t.jsx)(r.a,{href:"#o",children:"Option"})]})]}),"\n",(0,t.jsxs)(o,{id:"s",number:"S",title:"S",children:[(0,t.jsx)(r.h3,{id:"semigroup",children:"Semigroup"}),(0,t.jsx)(r.p,{children:"A type with an associative binary operation."}),(0,t.jsx)(i,{file:"semigroup.go",children:`// Semigroup for addition
sum := semigroup.Concat(
  semigroup.Sum,
  1, 2, 3,
) // 6

// Semigroup for string concatenation
combined := semigroup.Concat(
  semigroup.String,
  "Hello", " ", "World",
) // "Hello World"`}),(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"See also:"})," ",(0,t.jsx)(r.a,{href:"#m",children:"Monoid"})]}),(0,t.jsx)(r.h3,{id:"side-effect",children:"Side Effect"}),(0,t.jsx)(r.p,{children:"An observable interaction with the outside world."}),(0,t.jsx)(n,{title:"Examples of side effects.",children:(0,t.jsx)(r.p,{children:"Reading/writing files. Network requests. Database queries. Printing to console. Modifying global state. Random number generation."})}),(0,t.jsx)(i,{file:"side-effect.go",children:`// Has side effects
func saveUser(user User) error {
  return db.Save(user) // Side effect: database write
}

// Wrap in IO to make explicit
func saveUser(user User) ioresult.IOResult[Unit] {
  return func() result.Result[Unit] {
      err := db.Save(user)
      return result.FromGoError(unit.Unit, err)
  }
}`}),(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"See also:"})," ",(0,t.jsx)(r.a,{href:"#p",children:"Pure Function"}),", ",(0,t.jsx)(r.a,{href:"#i",children:"IO"})]}),(0,t.jsx)(r.h3,{id:"state",children:"State"}),(0,t.jsx)(r.p,{children:"A monad for stateful computations."}),(0,t.jsx)(i,{file:"state.go",children:`// State[S, A] - computation that transforms state S and produces value A
func increment() state.State[int, int] {
  return func(s int) (int, int) {
      newState := s + 1
      return newState, newState // (new state, value)
  }
}

// Compose stateful computations
program := function.Pipe2(
  increment(),
  state.Chain(func(x int) state.State[int, int] {
      return increment()
  }),
)

// Run with initial state
finalState, value := program(0) // (2, 2)`})]}),"\n",(0,t.jsxs)(o,{id:"t",number:"T",title:"T",children:[(0,t.jsx)(r.h3,{id:"traverse",children:"Traverse"}),(0,t.jsx)(r.p,{children:"Transforms a collection of values in a context, collecting the results."}),(0,t.jsx)(i,{file:"traverse.go",children:`// Traverse array with Result
results := array.TraverseResult(func(x int) result.Result[int] {
  if x < 0 {
      return result.Err[int](errors.New("negative"))
  }
  return result.Ok(x * 2)
})(numbers)
// Returns Result[[]int] - all or nothing`}),(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"See also:"})," Sequence"]}),(0,t.jsx)(r.h3,{id:"type-constructor",children:"Type Constructor"}),(0,t.jsx)(r.p,{children:"A type that takes type parameters to produce concrete types."}),(0,t.jsx)(i,{file:"type-constructor.go",children:`// Result is a type constructor
// Result[_] takes a type parameter
type Result[A any] interface {
  // ...
}

// Concrete types:
// Result[int]
// Result[string]
// Result[User]`}),(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"See also:"})," ",(0,t.jsx)(r.a,{href:"#h",children:"Higher-Kinded Type"})]})]}),"\n",(0,t.jsxs)(o,{id:"u",number:"U",title:"U",children:[(0,t.jsx)(r.h3,{id:"unit",children:"Unit"}),(0,t.jsx)(r.p,{children:'A type with only one value, representing "no meaningful value".'}),(0,t.jsx)(i,{file:"unit.go",children:`// Unit type
type Unit struct{}

// Used when you need a value but don't care what it is
func doSomething() result.Result[Unit] {
  // Do something...
  return result.Ok(Unit{})
}`})]}),"\n",(0,t.jsx)(o,{id:"see-also",number:"\u221E",title:"See also",children:(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:"./concepts",children:"Core Concepts"})}),(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:"./concepts/monads",children:"Monads Explained"})}),(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:"./concepts/pure-functions",children:"Pure Functions"})}),(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:"./concepts/composition",children:"Composition"})}),(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:"https://pkg.go.dev/github.com/IBM/fp-go/v2",children:"API Reference"})})]})})]})}function u(e={}){let{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}function h(e,r){throw Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},8453(e,r,n){n.d(r,{R:()=>l,x:()=>a});var i=n(6540);let t={},s=i.createContext(t);function l(e){let r=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),i.createElement(s.Provider,{value:r},e.children)}}}]);
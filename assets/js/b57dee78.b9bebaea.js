"use strict";(self.webpackChunkfp_go_docs=self.webpackChunkfp_go_docs||[]).push([["1923"],{3807(e,n,t){t.r(n),t.d(n,{metadata:()=>i,default:()=>d,frontMatter:()=>o,contentTitle:()=>l,toc:()=>c,assets:()=>a});var i=JSON.parse('{"id":"concepts/higher-kinded-types","title":"Higher-Kinded Types","description":"Understand how fp-go simulates higher-kinded types in Go, and why this matters for generic functional programming.","source":"@site/docs/concepts/higher-kinded-types.md","sourceDirName":"concepts","slug":"/concepts/higher-kinded-types","permalink":"/fp-go/docs/concepts/higher-kinded-types","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":15,"frontMatter":{"sidebar_position":15,"title":"Higher-Kinded Types","hide_title":true,"description":"Understand how fp-go simulates higher-kinded types in Go, and why this matters for generic functional programming."},"sidebar":"tutorialSidebar","previous":{"title":"Effects and IO","permalink":"/fp-go/docs/concepts/effects-and-io"},"next":{"title":"The Zen of Go","permalink":"/fp-go/docs/concepts/zen-of-go"}}'),r=t(4848),s=t(8453);let o={sidebar_position:15,title:"Higher-Kinded Types",hide_title:!0,description:"Understand how fp-go simulates higher-kinded types in Go, and why this matters for generic functional programming."},l,a={},c=[{value:"Regular Types (Kind *)",id:"regular-types-kind-",level:3},{value:"Generic Types (Kind * \u2192 *)",id:"generic-types-kind---",level:3},{value:"Higher-Kinded Types (Kind (* \u2192 *) \u2192 *)",id:"higher-kinded-types-kind-----",level:3},{value:"Go&#39;s Type System",id:"gos-type-system",level:3},{value:"Technique 1: Separate Functions per Type",id:"technique-1-separate-functions-per-type",level:3},{value:"Technique 2: Consistent API",id:"technique-2-consistent-api",level:3},{value:"Technique 3: Code Generation",id:"technique-3-code-generation",level:3},{value:"Type Parameter Order in fp-go v2",id:"type-parameter-order-in-fp-go-v2",level:3},{value:"Example",id:"example",level:3},{value:"1. Learn the Pattern Once",id:"1-learn-the-pattern-once",level:3},{value:"2. Use Type-Specific Functions",id:"2-use-type-specific-functions",level:3},{value:"3. Embrace Go&#39;s Simplicity",id:"3-embrace-gos-simplicity",level:3},{value:"Haskell (Has HKTs)",id:"haskell-has-hkts",level:3},{value:"TypeScript (Simulates HKTs)",id:"typescript-simulates-hkts",level:3},{value:"Go (No HKTs)",id:"go-no-hkts",level:3},{value:"1. Don&#39;t Fight the Type System",id:"1-dont-fight-the-type-system",level:3},{value:"2. Embrace Duplication When Needed",id:"2-embrace-duplication-when-needed",level:3},{value:"3. Use Consistent Patterns",id:"3-use-consistent-patterns",level:3},{value:"4. Focus on Value",id:"4-focus-on-value",level:3}];function p(e){let n={code:"code",em:"em",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components},{Callout:t,CodeCard:i,Compare:o,CompareCol:l,PageHeader:a,Section:c,TLDR:p,TLDRCard:d}=n;return t||u("Callout",!0),i||u("CodeCard",!0),o||u("Compare",!0),l||u("CompareCol",!0),a||u("PageHeader",!0),c||u("Section",!0),p||u("TLDR",!0),d||u("TLDRCard",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a,{eyebrow:"Concepts \xb7 05 / 06",title:"Higher-Kinded",titleAccent:"Types.",lede:"Understand how fp-go simulates higher-kinded types in Go. Learn the patterns, limitations, and practical approaches for generic functional programming.",meta:[{label:"// Difficulty",value:"Advanced"},{label:"// Reading time",value:"12 min \xb7 7 sections"},{label:"// Prereqs",value:"Monads, composition"}]}),"\n",(0,r.jsxs)(p,{children:[(0,r.jsx)(d,{label:"// Go's limitation",prose:!0,value:(0,r.jsxs)(r.Fragment,{children:["No type constructor ",(0,r.jsx)(n.em,{children:"parameters"}),"."]})}),(0,r.jsx)(d,{label:"// fp-go's solution",prose:!0,value:(0,r.jsxs)(r.Fragment,{children:["Consistent API across ",(0,r.jsx)(n.em,{children:"all types"}),"."]})}),(0,r.jsx)(d,{label:"// Trade-off",prose:!0,value:(0,r.jsxs)(r.Fragment,{children:["Some duplication for ",(0,r.jsx)(n.em,{children:"simplicity"}),"."]}),variant:"up"})]}),"\n",(0,r.jsxs)(c,{id:"what-are-hkts",number:"01",title:"What are",titleAccent:"HKTs?",children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Higher-Kinded Types (HKTs)"})," are types that take other types as parameters."]}),(0,r.jsx)(n.h3,{id:"regular-types-kind-",children:"Regular Types (Kind *)"}),(0,r.jsx)(i,{file:"regular-types.go",children:`// Regular types - concrete
int           // A number
string        // Text
User          // A struct`}),(0,r.jsx)(n.h3,{id:"generic-types-kind---",children:"Generic Types (Kind * \u2192 *)"}),(0,r.jsx)(i,{file:"generic-types.go",children:`// Generic types - take one type parameter
Option[int]      // Option of int
Result[string]   // Result of string
Array[User]      // Array of User

// The type constructor:
Option[_]        // Takes a type, returns a type
Result[_]        // Takes a type, returns a type`}),(0,r.jsx)(n.h3,{id:"higher-kinded-types-kind-----",children:"Higher-Kinded Types (Kind (* \u2192 *) \u2192 *)"}),(0,r.jsx)(i,{file:"hkts.go",children:`// HKTs - take a type constructor as parameter
// (This is what Go doesn't support)

// Hypothetical syntax:
Functor[F[_]]    // F is a type constructor
Monad[M[_]]      // M is a type constructor

// Would let us write:
func Map[F[_], A, B](f func(A) B) func(F[A]) F[B]

// Works for ANY F: Option, Result, Array, etc.`})]}),"\n",(0,r.jsxs)(c,{id:"why-no-hkts",number:"02",title:"Why Go doesn't have",titleAccent:"HKTs.",children:[(0,r.jsx)(n.h3,{id:"gos-type-system",children:"Go's Type System"}),(0,r.jsx)(n.p,{children:"Go 1.18+ has generics, but they're limited:"}),(0,r.jsxs)(o,{children:[(0,r.jsx)(l,{kind:"good",children:(0,r.jsx)(i,{file:"go-can-do.go",children:`// \u{2705} Can do: concrete type parameters
func Map[A, B any](f func(A) B, slice []A) []B`})}),(0,r.jsx)(l,{kind:"bad",children:(0,r.jsx)(i,{file:"go-cannot-do.go",children:`// \u{274C} Can't do: type constructor parameters
func Map[F[_], A, B any](f func(A) B, fa F[A]) F[B]
//         ^^^
//         Not allowed in Go`})})]}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Why?"})}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Simpler type system"}),"\n",(0,r.jsx)(n.li,{children:"Easier to implement"}),"\n",(0,r.jsx)(n.li,{children:"Faster compilation"}),"\n",(0,r.jsx)(n.li,{children:"Go philosophy: simplicity over power"}),"\n"]})]}),"\n",(0,r.jsxs)(c,{id:"workarounds",number:"03",title:"How fp-go works",titleAccent:"around this.",children:[(0,r.jsx)(n.p,{children:"fp-go uses several techniques to simulate HKTs:"}),(0,r.jsx)(n.h3,{id:"technique-1-separate-functions-per-type",children:"Technique 1: Separate Functions per Type"}),(0,r.jsxs)(n.p,{children:["Instead of one generic ",(0,r.jsx)(n.code,{children:"Map"}),", we have:"]}),(0,r.jsx)(i,{file:"separate-functions.go",children:`// Option.Map
func Map[B, A any](f func(A) B) func(Option[A]) Option[B]

// Result.Map
func Map[B, A any](f func(A) B) func(Result[A]) Result[B]

// Array.Map
func Map[B, A any](f func(A) B) func([]A) []B

// IO.Map
func Map[B, A any](f func(A) B) func(IO[A]) IO[B]`}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Pros:"})}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u2705 Works in Go"}),"\n",(0,r.jsx)(n.li,{children:"\u2705 Type-safe"}),"\n",(0,r.jsx)(n.li,{children:"\u2705 Clear which type you're using"}),"\n"]}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Cons:"})}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u26A0\uFE0F Code duplication"}),"\n",(0,r.jsx)(n.li,{children:"\u26A0\uFE0F Can't write generic algorithms"}),"\n"]}),(0,r.jsx)(n.h3,{id:"technique-2-consistent-api",children:"Technique 2: Consistent API"}),(0,r.jsx)(n.p,{children:"All types follow the same pattern:"}),(0,r.jsx)(i,{file:"consistent-api.go",children:`// Every monad has these functions:
Of[A](a A) M[A]                              // Put value in monad
Map[B, A](f func(A) B) func(M[A]) M[B]       // Transform value
Chain[B, A](f func(A) M[B]) func(M[A]) M[B]  // Chain operations
Fold[B, A](/* ... */) func(M[A]) B           // Extract value

// Example with Option:
option.Of(42)
option.Map(func(x int) int { return x * 2 })
option.Chain(func(x int) option.Option[int] { return option.Some(x) })
option.Fold(func() int { return 0 }, func(x int) int { return x })

// Example with Result:
result.Ok(42)
result.Map(func(x int) int { return x * 2 })
result.Chain(func(x int) result.Result[int] { return result.Ok(x) })
result.Fold(func(err error) int { return 0 }, func(x int) int { return x })`}),(0,r.jsx)(t,{type:"success",children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Benefit:"})," Learn once, use everywhere."]})}),(0,r.jsx)(n.h3,{id:"technique-3-code-generation",children:"Technique 3: Code Generation"}),(0,r.jsx)(n.p,{children:"fp-go uses code generation to create similar functions for each type:"}),(0,r.jsx)(i,{file:"codegen.go",children:`// Generated from template
//go:generate go run gen.go

// Generates:
// - option/map.go
// - result/map.go
// - array/map.go
// - etc.`}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Benefit:"})," Consistency without manual duplication."]})]}),"\n",(0,r.jsxs)(c,{id:"type-parameters",number:"04",title:"Understanding type",titleAccent:"parameters.",children:[(0,r.jsx)(n.h3,{id:"type-parameter-order-in-fp-go-v2",children:"Type Parameter Order in fp-go v2"}),(0,r.jsx)(n.p,{children:"fp-go v2 reordered type parameters for better inference:"}),(0,r.jsxs)(o,{children:[(0,r.jsx)(l,{kind:"bad",children:(0,r.jsx)(i,{file:"v1-ordering.go",children:`// v1: inferrable parameters first
func Map[A, B any](f func(A) B) func(Option[A]) Option[B]
//       ^  ^
//       |  Can't infer B from function signature
//       Can infer A from function argument`})}),(0,r.jsx)(l,{kind:"good",children:(0,r.jsx)(i,{file:"v2-ordering.go",children:`// v2: non-inferrable parameters first
func Map[B, A any](f func(A) B) func(Option[A]) Option[B]
//       ^  ^
//       |  Can infer A from function argument
//       Can't infer B, so comes first`})})]}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Why?"})," Go can infer trailing type parameters but not leading ones."]}),(0,r.jsx)(n.h3,{id:"example",children:"Example"}),(0,r.jsx)(i,{file:"inference-example.go",children:`// With v2 ordering
opt := option.Some(5)

// Go can infer types
doubled := option.Map(func(x int) string {
  return strconv.Itoa(x * 2)
})(opt)
// Go infers: Map[string, int]
//                 ^      ^
//                 B      A (from function)

// No need to specify:
// option.Map[string, int](...)`})]}),"\n",(0,r.jsxs)(c,{id:"practical-implications",number:"05",title:"Practical",titleAccent:"implications.",children:[(0,r.jsx)(n.h3,{id:"1-learn-the-pattern-once",children:"1. Learn the Pattern Once"}),(0,r.jsx)(n.p,{children:"All fp-go types follow the same pattern:"}),(0,r.jsx)(i,{file:"pattern.go",children:`// Pattern for any monad M:

// Create
M.Of(value)              // or M.Some, M.Ok, etc.

// Transform
M.Map(transform)         // Change the value

// Chain
M.Chain(operation)       // Sequence operations

// Extract
M.Fold(onError, onSuccess)  // Get the value out`}),(0,r.jsx)(n.h3,{id:"2-use-type-specific-functions",children:"2. Use Type-Specific Functions"}),(0,r.jsxs)(o,{children:[(0,r.jsx)(l,{kind:"bad",children:(0,r.jsx)(i,{file:"generic-impossible.go",children:`// Can't write generic code like:
func Process[M[_], A, B](m M[A], f func(A) B) M[B] {
  return M.Map(f)(m)  // Not possible in Go
}`})}),(0,r.jsx)(l,{kind:"good",children:(0,r.jsx)(i,{file:"specific-functions.go",children:`// Instead, write specific functions:
func ProcessOption[A, B](opt option.Option[A], f func(A) B) option.Option[B] {
  return option.Map(f)(opt)
}

func ProcessResult[A, B](res result.Result[A], f func(A) B) result.Result[B] {
  return result.Map(f)(res)
}`})})]}),(0,r.jsx)(n.h3,{id:"3-embrace-gos-simplicity",children:"3. Embrace Go's Simplicity"}),(0,r.jsxs)(t,{type:"info",children:[(0,r.jsx)(n.p,{children:"Instead of fighting Go's type system, work with it:"}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u2705 Use specific types"}),"\n",(0,r.jsx)(n.li,{children:"\u2705 Accept some duplication"}),"\n",(0,r.jsx)(n.li,{children:"\u2705 Focus on clarity"}),"\n"]})]})]}),"\n",(0,r.jsxs)(c,{id:"comparison",number:"06",title:"Comparing with other",titleAccent:"languages.",children:[(0,r.jsx)(n.h3,{id:"haskell-has-hkts",children:"Haskell (Has HKTs)"}),(0,r.jsx)(i,{file:"haskell.hs",lang:"haskell",children:`-- Generic map for any Functor
fmap :: Functor f => (a -> b) -> f a -> f b

-- Works for all:
fmap (+1) (Just 5)        -- Maybe Int
fmap (+1) [1,2,3]         -- List Int
fmap (+1) (Right 5)       -- Either e Int`}),(0,r.jsx)(n.h3,{id:"typescript-simulates-hkts",children:"TypeScript (Simulates HKTs)"}),(0,r.jsx)(i,{file:"typescript.ts",lang:"typescript",children:`// Type-level programming
interface Functor<F> {
map<A, B>(f: (a: A) => B): (fa: F<A>) => F<B>
}

// Works for Option, Result, Array, etc.`}),(0,r.jsx)(n.h3,{id:"go-no-hkts",children:"Go (No HKTs)"}),(0,r.jsx)(i,{file:"go-approach.go",children:`// Separate functions
option.Map[B, A](f func(A) B) func(option.Option[A]) option.Option[B]
result.Map[B, A](f func(A) B) func(result.Result[A]) result.Result[B]
array.Map[B, A](f func(A) B) func([]A) []B

// More verbose, but simpler`})]}),"\n",(0,r.jsxs)(c,{id:"practical-advice",number:"07",title:"Practical",titleAccent:"advice.",children:[(0,r.jsx)(n.h3,{id:"1-dont-fight-the-type-system",children:"1. Don't Fight the Type System"}),(0,r.jsxs)(o,{children:[(0,r.jsx)(l,{kind:"bad",children:(0,r.jsx)(i,{file:"too-generic.go",children:`// \u{274C} Don't try to be too generic
func Process[???](m ???) ??? {
  // Impossible in Go
}`})}),(0,r.jsx)(l,{kind:"good",children:(0,r.jsx)(i,{file:"specific-clear.go",children:`// \u{2705} Write specific, clear code
func ProcessUser(res result.Result[User]) result.Result[UserDTO] {
  return result.Map(toDTO)(res)
}`})})]}),(0,r.jsx)(n.h3,{id:"2-embrace-duplication-when-needed",children:"2. Embrace Duplication When Needed"}),(0,r.jsx)(i,{file:"duplication-ok.go",children:`// Some duplication is okay
func ProcessUsers(users []User) []UserDTO {
  return array.Map(toDTO)(users)
}

func ProcessUserResult(res result.Result[User]) result.Result[UserDTO] {
  return result.Map(toDTO)(res)
}

// Clear and type-safe`}),(0,r.jsx)(n.h3,{id:"3-use-consistent-patterns",children:"3. Use Consistent Patterns"}),(0,r.jsx)(i,{file:"consistent-patterns.go",children:`// Learn the pattern once
// Apply to all types

// Option
option.Map(f)(opt)
option.Chain(g)(opt)

// Result
result.Map(f)(res)
result.Chain(g)(res)

// Array
array.Map(f)(arr)
array.Chain(g)(arr)`}),(0,r.jsx)(n.h3,{id:"4-focus-on-value",children:"4. Focus on Value"}),(0,r.jsxs)(t,{type:"success",children:[(0,r.jsx)(n.p,{children:"HKTs are a means, not an end. Focus on:"}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Clear code"}),"\n",(0,r.jsx)(n.li,{children:"Type safety"}),"\n",(0,r.jsx)(n.li,{children:"Composability"}),"\n",(0,r.jsx)(n.li,{children:"Maintainability"}),"\n"]}),(0,r.jsx)(n.p,{children:"Not on:"}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Maximum abstraction"}),"\n",(0,r.jsx)(n.li,{children:"Minimal duplication"}),"\n",(0,r.jsx)(n.li,{children:"Theoretical purity"}),"\n"]})]})]})]})}function d(e={}){let{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}function u(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},8453(e,n,t){t.d(n,{R:()=>o,x:()=>l});var i=t(6540);let r={},s=i.createContext(r);function o(e){let n=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);
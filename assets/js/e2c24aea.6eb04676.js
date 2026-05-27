"use strict";(self.webpackChunkfp_go_docs=self.webpackChunkfp_go_docs||[]).push([["8459"],{2137(t,e,n){n.r(e),n.d(e,{metadata:()=>i,default:()=>p,frontMatter:()=>o,contentTitle:()=>u,toc:()=>a,assets:()=>c});var i=JSON.parse('{"id":"recipes/testing-pure","title":"Testing Pure Functions","description":"Test pure functions and functional code with fp-go using table-driven tests, property-based testing, and helper functions.","source":"@site/docs/recipes/testing-pure.md","sourceDirName":"recipes","slug":"/recipes/testing-pure","permalink":"/fp-go/docs/recipes/testing-pure","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":16,"frontMatter":{"title":"Testing Pure Functions","hide_title":true,"description":"Test pure functions and functional code with fp-go using table-driven tests, property-based testing, and helper functions.","sidebar_position":16},"sidebar":"recipesSidebar","previous":{"title":"Middleware Patterns","permalink":"/fp-go/docs/recipes/middleware"},"next":{"title":"Testing Effects","permalink":"/fp-go/docs/recipes/testing-effects"}}'),r=n(4848),s=n(8453);let o={title:"Testing Pure Functions",hide_title:!0,description:"Test pure functions and functional code with fp-go using table-driven tests, property-based testing, and helper functions.",sidebar_position:16},u,c={},a=[];function l(t){let e={code:"code",p:"p",strong:"strong",...(0,s.R)(),...t.components},{Callout:n,CodeCard:i,PageHeader:o,Section:u,TLDR:c,TLDRCard:a}=e;return n||d("Callout",!0),i||d("CodeCard",!0),o||d("PageHeader",!0),u||d("Section",!0),c||d("TLDR",!0),a||d("TLDRCard",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o,{eyebrow:"Recipes \xb7 16 / 17",title:"Testing Pure",titleAccent:"Functions",lede:"Test pure functions and functional code with fp-go using table-driven tests, property-based testing, and helper functions for deterministic, reliable tests.",meta:[{label:"Difficulty",value:"Beginner"},{label:"Patterns",value:"6"},{label:"Use Cases",value:"Unit testing, property testing, benchmarking"}]}),"\n",(0,r.jsxs)(c,{children:[(0,r.jsx)(a,{title:"Deterministic Testing",icon:"check",children:(0,r.jsx)(e.p,{children:"Pure functions always return the same output for the same input\u2014no mocks, no setup, just assertions."})}),(0,r.jsx)(a,{title:"Table-Driven Tests",icon:"table",children:(0,r.jsx)(e.p,{children:"Test multiple scenarios efficiently with structured test cases covering edge cases and normal flows."})}),(0,r.jsx)(a,{title:"Property-Based Testing",icon:"zap",children:(0,r.jsx)(e.p,{children:"Verify mathematical properties and laws hold for all inputs, not just specific examples."})})]}),"\n",(0,r.jsxs)(u,{id:"basic-testing",number:"01",title:"Basic",titleAccent:"Testing",children:[(0,r.jsx)(e.p,{children:"Pure functions are the easiest to test\u2014same input always produces same output, no side effects."}),(0,r.jsx)(i,{file:"simple_test.go",children:`package main

import (
  "testing"
  O "github.com/IBM/fp-go/v2/option"
)

func add(a, b int) int {
  return a + b
}

func TestAdd(t *testing.T) {
  tests := []struct {
      name     string
      a, b     int
      expected int
  }{
      {"positive numbers", 2, 3, 5},
      {"negative numbers", -2, -3, -5},
      {"mixed signs", -2, 3, 1},
      {"with zero", 0, 5, 5},
  }
  
  for _, tt := range tests {
      t.Run(tt.name, func(t *testing.T) {
          result := add(tt.a, tt.b)
          if result != tt.expected {
              t.Errorf("add(%d, %d) = %d; want %d", tt.a, tt.b, result, tt.expected)
          }
      })
  }
}
`}),(0,r.jsx)(n,{type:"info",children:(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"Why Pure Functions Are Easy to Test"}),": No setup, no teardown, no mocks\u2014just call the function and assert the result."]})})]}),"\n",(0,r.jsxs)(u,{id:"option-either",number:"02",title:"Testing Option &",titleAccent:"Either",children:[(0,r.jsx)(e.p,{children:"Test Option and Either types with helper functions for cleaner assertions."}),(0,r.jsx)(i,{file:"option_test.go",children:`package main

import (
  "testing"
  O "github.com/IBM/fp-go/v2/option"
)

func divide(a, b float64) O.Option[float64] {
  if b == 0 {
      return O.None[float64]()
  }
  return O.Some(a / b)
}

// Helper for testing Option values
func assertSome[A comparable](t *testing.T, opt O.Option[A], expected A) {
  t.Helper()
  
  if O.IsNone(opt) {
      t.Fatalf("Expected Some(%v), got None", expected)
  }
  
  value := O.GetOrElse(func() A { var zero A; return zero })(opt)
  if value != expected {
      t.Errorf("Expected %v, got %v", expected, value)
  }
}

func assertNone[A any](t *testing.T, opt O.Option[A]) {
  t.Helper()
  
  if O.IsSome(opt) {
      t.Fatalf("Expected None, got Some(%v)", opt)
  }
}

func TestDivide(t *testing.T) {
  t.Run("valid division", func(t *testing.T) {
      result := divide(10, 2)
      assertSome(t, result, 5.0)
  })
  
  t.Run("division by zero", func(t *testing.T) {
      result := divide(10, 0)
      assertNone(t, result)
  })
}
`}),(0,r.jsx)(i,{file:"either_test.go",children:`package main

import (
  "fmt"
  "strconv"
  "testing"
  E "github.com/IBM/fp-go/v2/either"
)

func parseInt(s string) E.Either[error, int] {
  n, err := strconv.Atoi(s)
  if err != nil {
      return E.Left[int](err)
  }
  return E.Right[error](n)
}

// Helper for testing Either values
func assertRight[E, A comparable](t *testing.T, either E.Either[E, A], expected A) {
  t.Helper()
  
  if either.IsLeft() {
      t.Fatalf("Expected Right(%v), got Left(%v)", expected, either.Left())
  }
  
  if either.Right() != expected {
      t.Errorf("Expected %v, got %v", expected, either.Right())
  }
}

func assertLeft[E comparable, A any](t *testing.T, either E.Either[E, A], expectedErr E) {
  t.Helper()
  
  if either.IsRight() {
      t.Fatalf("Expected Left(%v), got Right(%v)", expectedErr, either.Right())
  }
  
  if either.Left() != expectedErr {
      t.Errorf("Expected error %v, got %v", expectedErr, either.Left())
  }
}

func TestParseInt(t *testing.T) {
  t.Run("valid integer", func(t *testing.T) {
      result := parseInt("42")
      assertRight(t, result, 42)
  })
  
  t.Run("invalid integer", func(t *testing.T) {
      result := parseInt("not a number")
      if result.IsRight() {
          t.Error("Expected Left, got Right")
      }
  })
}
`})]}),"\n",(0,r.jsxs)(u,{id:"array-operations",number:"03",title:"Testing Array",titleAccent:"Operations",children:[(0,r.jsx)(e.p,{children:"Test array transformations with table-driven tests for comprehensive coverage."}),(0,r.jsx)(i,{file:"array_test.go",children:`package main

import (
  "testing"
  A "github.com/IBM/fp-go/v2/array"
)

func TestArrayMap(t *testing.T) {
  input := []int{1, 2, 3, 4, 5}
  expected := []int{2, 4, 6, 8, 10}
  
  result := A.Map(func(n int) int {
      return n * 2
  })(input)
  
  if !equalSlices(result, expected) {
      t.Errorf("Expected %v, got %v", expected, result)
  }
}

func TestArrayFilter(t *testing.T) {
  input := []int{1, 2, 3, 4, 5, 6}
  expected := []int{2, 4, 6}
  
  result := A.Filter(func(n int) bool {
      return n%2 == 0
  })(input)
  
  if !equalSlices(result, expected) {
      t.Errorf("Expected %v, got %v", expected, result)
  }
}

func sum(numbers []int) int {
  return A.Reduce(func(acc, n int) int {
      return acc + n
  })(0)(numbers)
}

func TestSum(t *testing.T) {
  tests := []struct {
      name     string
      input    []int
      expected int
  }{
      {"empty array", []int{}, 0},
      {"single element", []int{5}, 5},
      {"multiple elements", []int{1, 2, 3, 4, 5}, 15},
      {"negative numbers", []int{-1, -2, -3}, -6},
  }
  
  for _, tt := range tests {
      t.Run(tt.name, func(t *testing.T) {
          result := sum(tt.input)
          if result != tt.expected {
              t.Errorf("sum(%v) = %d; want %d", tt.input, result, tt.expected)
          }
      })
  }
}

func equalSlices[A comparable](a, b []A) bool {
  if len(a) != len(b) {
      return false
  }
  for i := range a {
      if a[i] != b[i] {
          return false
      }
  }
  return true
}
`})]}),"\n",(0,r.jsxs)(u,{id:"composition",number:"04",title:"Testing",titleAccent:"Composition",children:[(0,r.jsx)(e.p,{children:"Test function composition with Pipe and Flow."}),(0,r.jsx)(i,{file:"composition_test.go",children:`package main

import (
  "strings"
  "testing"
  F "github.com/IBM/fp-go/v2/function"
)

func normalizeString(s string) string {
  return F.Pipe3(
      s,
      strings.TrimSpace,
      strings.ToLower,
      func(s string) string {
          return strings.ReplaceAll(s, " ", "-")
      },
  )
}

func TestNormalizeString(t *testing.T) {
  tests := []struct {
      name     string
      input    string
      expected string
  }{
      {"with spaces", "  Hello World  ", "hello-world"},
      {"mixed case", "FooBar", "foobar"},
      {"already normalized", "hello-world", "hello-world"},
      {"empty string", "", ""},
  }
  
  for _, tt := range tests {
      t.Run(tt.name, func(t *testing.T) {
          result := normalizeString(tt.input)
          if result != tt.expected {
              t.Errorf("normalizeString(%q) = %q; want %q", tt.input, result, tt.expected)
          }
      })
  }
}

var double = func(n int) int { return n * 2 }
var addTen = func(n int) int { return n + 10 }
var toString = func(n int) string { return fmt.Sprintf("%d", n) }

var pipeline = F.Flow3(double, addTen, toString)

func TestPipeline(t *testing.T) {
  tests := []struct {
      name     string
      input    int
      expected string
  }{
      {"positive number", 5, "20"},  // (5 * 2) + 10 = 20
      {"zero", 0, "10"},             // (0 * 2) + 10 = 10
      {"negative number", -3, "4"},  // (-3 * 2) + 10 = 4
  }
  
  for _, tt := range tests {
      t.Run(tt.name, func(t *testing.T) {
          result := pipeline(tt.input)
          if result != tt.expected {
              t.Errorf("pipeline(%d) = %q; want %q", tt.input, result, tt.expected)
          }
      })
  }
}
`})]}),"\n",(0,r.jsxs)(u,{id:"property-testing",number:"05",title:"Property-Based",titleAccent:"Testing",children:[(0,r.jsx)(e.p,{children:"Test mathematical properties and laws that should hold for all inputs."}),(0,r.jsx)(i,{file:"property_test.go",children:`package main

import (
  "testing"
  O "github.com/IBM/fp-go/v2/option"
  M "github.com/IBM/fp-go/v2/monoid"
)

func head[A any](slice []A) O.Option[A] {
  if len(slice) == 0 {
      return O.None[A]()
  }
  return O.Some(slice[0])
}

func TestHeadProperties(t *testing.T) {
  t.Run("non-empty returns Some", func(t *testing.T) {
      inputs := [][]int{
          {1},
          {1, 2},
          {1, 2, 3},
      }
      
      for _, input := range inputs {
          result := head(input)
          if O.IsNone(result) {
              t.Errorf("head(%v) should be Some, got None", input)
          }
      }
  })
  
  t.Run("empty returns None", func(t *testing.T) {
      result := head([]int{})
      if O.IsSome(result) {
          t.Error("head([]) should be None, got Some")
      }
  })
  
  t.Run("returns first element", func(t *testing.T) {
      tests := []struct {
          input    []int
          expected int
      }{
          {[]int{1, 2, 3}, 1},
          {[]int{42}, 42},
          {[]int{-5, 10, 15}, -5},
      }
      
      for _, tt := range tests {
          result := head(tt.input)
          value := O.GetOrElse(func() int { return 0 })(result)
          if value != tt.expected {
              t.Errorf("head(%v) = %d; want %d", tt.input, value, tt.expected)
          }
      }
  })
}

func TestMonoidLaws(t *testing.T) {
  monoid := M.MakeMonoid(
      func() int { return 0 },
      func(a, b int) int { return a + b },
  )
  
  t.Run("left identity", func(t *testing.T) {
      // empty() <> x = x
      x := 5
      result := monoid.Concat(monoid.Empty(), x)
      if result != x {
          t.Errorf("Left identity failed: empty <> %d = %d; want %d", x, result, x)
      }
  })
  
  t.Run("right identity", func(t *testing.T) {
      // x <> empty() = x
      x := 5
      result := monoid.Concat(x, monoid.Empty())
      if result != x {
          t.Errorf("Right identity failed: %d <> empty = %d; want %d", x, result, x)
      }
  })
  
  t.Run("associativity", func(t *testing.T) {
      // (x <> y) <> z = x <> (y <> z)
      x, y, z := 1, 2, 3
      left := monoid.Concat(monoid.Concat(x, y), z)
      right := monoid.Concat(x, monoid.Concat(y, z))
      if left != right {
          t.Errorf("Associativity failed: (%d <> %d) <> %d = %d; %d <> (%d <> %d) = %d",
              x, y, z, left, x, y, z, right)
      }
  })
}
`})]}),"\n",(0,r.jsxs)(u,{id:"benchmarking",number:"06",title:"Benchmarking Pure",titleAccent:"Functions",children:[(0,r.jsx)(e.p,{children:"Benchmark pure functions to measure performance and compare implementations."}),(0,r.jsx)(i,{file:"benchmark_test.go",children:`package main

import (
  "testing"
  A "github.com/IBM/fp-go/v2/array"
)

func BenchmarkArrayMap(b *testing.B) {
  input := A.MakeBy(1000)(func(i int) int { return i })
  
  b.ResetTimer()
  for i := 0; i < b.N; i++ {
      A.Map(func(n int) int {
          return n * 2
      })(input)
  }
}

func BenchmarkArrayFilter(b *testing.B) {
  input := A.MakeBy(1000)(func(i int) int { return i })
  
  b.ResetTimer()
  for i := 0; i < b.N; i++ {
      A.Filter(func(n int) bool {
          return n%2 == 0
      })(input)
  }
}

func sumImperative(numbers []int) int {
  sum := 0
  for _, n := range numbers {
      sum += n
  }
  return sum
}

func sumFunctional(numbers []int) int {
  return A.Reduce(func(acc, n int) int {
      return acc + n
  })(0)(numbers)
}

func BenchmarkSumImperative(b *testing.B) {
  input := A.MakeBy(1000)(func(i int) int { return i })
  
  b.ResetTimer()
  for i := 0; i < b.N; i++ {
      sumImperative(input)
  }
}

func BenchmarkSumFunctional(b *testing.B) {
  input := A.MakeBy(1000)(func(i int) int { return i })
  
  b.ResetTimer()
  for i := 0; i < b.N; i++ {
      sumFunctional(input)
  }
}
`}),(0,r.jsx)(n,{type:"info",children:(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"Running Benchmarks"}),": Use ",(0,r.jsx)(e.code,{children:"go test -bench=. -benchmem"})," to run benchmarks and see memory allocations."]})})]})]})}function p(t={}){let{wrapper:e}={...(0,s.R)(),...t.components};return e?(0,r.jsx)(e,{...t,children:(0,r.jsx)(l,{...t})}):l(t)}function d(t,e){throw Error("Expected "+(e?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}},8453(t,e,n){n.d(e,{R:()=>o,x:()=>u});var i=n(6540);let r={},s=i.createContext(r);function o(t){let e=i.useContext(s);return i.useMemo(function(){return"function"==typeof t?t(e):{...e,...t}},[e,t])}function u(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(r):t.components||r:o(t.components),i.createElement(s.Provider,{value:e},t.children)}}}]);
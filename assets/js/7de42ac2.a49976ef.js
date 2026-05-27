"use strict";(self.webpackChunkfp_go_docs=self.webpackChunkfp_go_docs||[]).push([["5594"],{1859(t,e,r){r.r(e),r.d(e,{metadata:()=>i,default:()=>f,frontMatter:()=>o,contentTitle:()=>l,toc:()=>c,assets:()=>s});var i=JSON.parse('{"id":"recipes/retry","title":"Retry Logic","description":"Implementing retry with exponential backoff","source":"@site/docs/recipes/retry.md","sourceDirName":"recipes","slug":"/recipes/retry","permalink":"/fp-go/docs/recipes/retry","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"sidebar_position":4,"title":"Retry Logic","description":"Implementing retry with exponential backoff","hide_title":true},"sidebar":"recipesSidebar","previous":{"title":"Error Handling Patterns","permalink":"/fp-go/docs/recipes/error-handling"},"next":{"title":"Data Transformation","permalink":"/fp-go/docs/recipes/data-transformation"}}'),n=r(4848),a=r(8453);let o={sidebar_position:4,title:"Retry Logic",description:"Implementing retry with exponential backoff",hide_title:!0},l,s={},c=[];function u(t){let e={p:"p",strong:"strong",...(0,a.R)(),...t.components},{Checklist:r,ChecklistItem:i,CodeCard:o,PageHeader:l,Section:s,TLDR:c,TLDRCard:u}=e;return r||m("Checklist",!0),i||m("ChecklistItem",!0),o||m("CodeCard",!0),l||m("PageHeader",!0),s||m("Section",!0),c||m("TLDR",!0),u||m("TLDRCard",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l,{eyebrow:"Recipes \xb7 04 / 17",title:"Retry",titleAccent:"Logic",lede:"Implement retry logic for operations that may fail transiently, with exponential backoff, jitter, and circuit breaker patterns.",meta:[{label:"Difficulty",value:"Intermediate"},{label:"Patterns",value:"5"},{label:"Use Cases",value:"Network, APIs, Resilience"}]}),"\n",(0,n.jsxs)(c,{children:[(0,n.jsx)(u,{title:"Exponential Backoff",icon:"trending-up",children:(0,n.jsx)(e.p,{children:"Avoid overwhelming systems with constant retries\u2014increase delay exponentially between attempts."})}),(0,n.jsx)(u,{title:"Add Jitter",icon:"shuffle",children:(0,n.jsx)(e.p,{children:"Prevent thundering herd when many clients retry simultaneously\u2014add randomness to backoff delays."})}),(0,n.jsx)(u,{title:"Circuit Breakers",icon:"zap-off",children:(0,n.jsx)(e.p,{children:"Prevent cascading failures in distributed systems\u2014stop retrying after too many consecutive failures."})})]}),"\n",(0,n.jsxs)(s,{id:"basic-retry",number:"01",title:"Basic Retry with",titleAccent:"IOResult",children:[(0,n.jsx)(e.p,{children:"Retry an IO operation a fixed number of times with simple delay between attempts."}),(0,n.jsx)(o,{file:"basic-retry.go",children:`package main

import (
  "errors"
  "fmt"
  "time"
  
  IO "github.com/IBM/fp-go/v2/io"
  IOR "github.com/IBM/fp-go/v2/ioresult"
)

// Simulate an unreliable operation
var attemptCount = 0

func unreliableOperation() IOR.IOResult[string] {
  return IOR.FromIO[error](IO.MakeIO(func() string {
      attemptCount++
      fmt.Printf("Attempt %d\\n", attemptCount)
      
      if attemptCount < 3 {
          return ""
      }
      return "success"
  }))
}

// Retry function
func retry[A any](maxAttempts int, operation func() IOR.IOResult[A]) IOR.IOResult[A] {
  return IOR.FromIO[error](IO.MakeIO(func() A {
      var lastResult IOR.IOResult[A]
      
      for i := 0; i < maxAttempts; i++ {
          lastResult = operation()
          result := lastResult()
          
          if result.IsRight() {
              return result.GetRight()
          }
          
          if i < maxAttempts-1 {
              time.Sleep(100 * time.Millisecond)
          }
      }
      
      // Return last error
      return lastResult().GetRight()
  }))
}

func main() {
  result := retry(5, unreliableOperation)
  outcome := result()
  
  if outcome.IsRight() {
      fmt.Printf("Success: %s\\n", outcome.GetRight())
  } else {
      fmt.Printf("Failed after retries\\n")
  }
}`})]}),"\n",(0,n.jsxs)(s,{id:"exponential-backoff",number:"02",title:"Exponential",titleAccent:"Backoff",children:[(0,n.jsx)(e.p,{children:"Implement exponential backoff to avoid overwhelming the system with rapid retries."}),(0,n.jsx)(o,{file:"exponential-backoff.go",children:`package main

import (
  "fmt"
  "math"
  "time"
  
  IO "github.com/IBM/fp-go/v2/io"
  IOR "github.com/IBM/fp-go/v2/ioresult"
)

type RetryConfig struct {
  MaxAttempts  int
  InitialDelay time.Duration
  MaxDelay     time.Duration
  Multiplier   float64
}

func DefaultRetryConfig() RetryConfig {
  return RetryConfig{
      MaxAttempts:  5,
      InitialDelay: 100 * time.Millisecond,
      MaxDelay:     10 * time.Second,
      Multiplier:   2.0,
  }
}

// Calculate delay with exponential backoff
func calculateDelay(config RetryConfig, attempt int) time.Duration {
  delay := float64(config.InitialDelay) * math.Pow(config.Multiplier, float64(attempt))
  maxDelay := float64(config.MaxDelay)
  
  if delay > maxDelay {
      delay = maxDelay
  }
  
  return time.Duration(delay)
}

// Retry with exponential backoff
func retryWithBackoff[A any](
  config RetryConfig,
  operation func() IOR.IOResult[A],
) IOR.IOResult[A] {
  return IOR.FromIO[error](IO.MakeIO(func() A {
      var lastResult IOR.IOResult[A]
      
      for i := 0; i < config.MaxAttempts; i++ {
          lastResult = operation()
          result := lastResult()
          
          if result.IsRight() {
              return result.GetRight()
          }
          
          if i < config.MaxAttempts-1 {
              delay := calculateDelay(config, i)
              fmt.Printf("Retry %d failed, waiting %v\\n", i+1, delay)
              time.Sleep(delay)
          }
      }
      
      return lastResult().GetRight()
  }))
}

var callCount = 0

func flakeyAPI() IOR.IOResult[string] {
  return IOR.FromIO[error](IO.MakeIO(func() string {
      callCount++
      fmt.Printf("API call %d\\n", callCount)
      
      if callCount < 4 {
          return ""
      }
      return "data"
  }))
}

func main() {
  config := DefaultRetryConfig()
  result := retryWithBackoff(config, flakeyAPI)
  outcome := result()
  
  if outcome.IsRight() {
      fmt.Printf("Success: %s\\n", outcome.GetRight())
  }
}`})]}),"\n",(0,n.jsxs)(s,{id:"conditional-retry",number:"03",title:"Conditional",titleAccent:"Retry",children:[(0,n.jsx)(e.p,{children:"Only retry on specific errors (e.g., transient network errors), stopping immediately for permanent failures."}),(0,n.jsx)(o,{file:"conditional-retry.go",children:`package main

import (
  "errors"
  "fmt"
  "time"
  
  E "github.com/IBM/fp-go/v2/either"
  IO "github.com/IBM/fp-go/v2/io"
  IOE "github.com/IBM/fp-go/v2/ioeither"
)

// Error types
var (
  ErrTransient   = errors.New("transient error")
  ErrPermanent   = errors.New("permanent error")
  ErrRateLimited = errors.New("rate limited")
)

// Check if error is retryable
func isRetryable(err error) bool {
  return err == ErrTransient || err == ErrRateLimited
}

// Retry only retryable errors
func retryOnCondition[E, A any](
  maxAttempts int,
  shouldRetry func(E) bool,
  operation func() IOE.IOEither[E, A],
) IOE.IOEither[E, A] {
  return IOE.FromIO[E](IO.MakeIO(func() A {
      var lastResult IOE.IOEither[E, A]
      
      for i := 0; i < maxAttempts; i++ {
          lastResult = operation()
          result := lastResult()
          
          if E.IsRight(result) {
              return E.GetRight(result)
          }
          
          err := E.GetLeft(result)
          if !shouldRetry(err) {
              fmt.Println("Non-retryable error, stopping")
              return E.GetRight(result)
          }
          
          if i < maxAttempts-1 {
              fmt.Printf("Retryable error, attempt %d\\n", i+1)
              time.Sleep(100 * time.Millisecond)
          }
      }
      
      return lastResult().GetRight()
  }))
}

var apiCallCount = 0

func callAPI() IOE.IOEither[error, string] {
  return IOE.FromIO[error](IO.MakeIO(func() string {
      apiCallCount++
      
      switch apiCallCount {
      case 1:
          fmt.Println("Transient error")
          return ""
      case 2:
          fmt.Println("Rate limited")
          return ""
      case 3:
          fmt.Println("Success")
          return "result"
      default:
          return ""
      }
  }))
}

func main() {
  result := retryOnCondition(5, isRetryable, callAPI)
  outcome := result()
  fmt.Printf("Result: %v\\n", E.IsRight(outcome))
}`})]}),"\n",(0,n.jsxs)(s,{id:"retry-jitter",number:"04",title:"Retry with",titleAccent:"Jitter",children:[(0,n.jsx)(e.p,{children:"Add randomness to backoff to avoid thundering herd problem when many clients retry simultaneously."}),(0,n.jsx)(o,{file:"retry-jitter.go",children:`package main

import (
  "fmt"
  "math"
  "math/rand"
  "time"
  
  IO "github.com/IBM/fp-go/v2/io"
  IOR "github.com/IBM/fp-go/v2/ioresult"
)

type JitterConfig struct {
  MaxAttempts  int
  InitialDelay time.Duration
  MaxDelay     time.Duration
  Multiplier   float64
  JitterFactor float64 // 0.0 to 1.0
}

func DefaultJitterConfig() JitterConfig {
  return JitterConfig{
      MaxAttempts:  5,
      InitialDelay: 100 * time.Millisecond,
      MaxDelay:     10 * time.Second,
      Multiplier:   2.0,
      JitterFactor: 0.3, // 30% jitter
  }
}

// Calculate delay with jitter
func calculateDelayWithJitter(config JitterConfig, attempt int) time.Duration {
  // Base exponential backoff
  delay := float64(config.InitialDelay) * math.Pow(config.Multiplier, float64(attempt))
  
  // Apply max delay cap
  if delay > float64(config.MaxDelay) {
      delay = float64(config.MaxDelay)
  }
  
  // Add jitter: random value between (1-jitter) and (1+jitter)
  jitterRange := delay * config.JitterFactor
  jitter := (rand.Float64() * 2 * jitterRange) - jitterRange
  delay += jitter
  
  // Ensure non-negative
  if delay < 0 {
      delay = 0
  }
  
  return time.Duration(delay)
}

func retryWithJitter[A any](
  config JitterConfig,
  operation func() IOR.IOResult[A],
) IOR.IOResult[A] {
  return IOR.FromIO[error](IO.MakeIO(func() A {
      var lastResult IOR.IOResult[A]
      
      for i := 0; i < config.MaxAttempts; i++ {
          lastResult = operation()
          result := lastResult()
          
          if result.IsRight() {
              return result.GetRight()
          }
          
          if i < config.MaxAttempts-1 {
              delay := calculateDelayWithJitter(config, i)
              fmt.Printf("Attempt %d failed, waiting %v\\n", i+1, delay)
              time.Sleep(delay)
          }
      }
      
      return lastResult().GetRight()
  }))
}

func main() {
  rand.Seed(time.Now().UnixNano())
  
  config := DefaultJitterConfig()
  
  var count = 0
  operation := func() IOR.IOResult[string] {
      return IOR.FromIO[error](IO.MakeIO(func() string {
          count++
          if count < 4 {
              return ""
          }
          return "success"
      }))
  }
  
  result := retryWithJitter(config, operation)
  outcome := result()
  
  if outcome.IsRight() {
      fmt.Printf("Success: %s\\n", outcome.GetRight())
  }
}`})]}),"\n",(0,n.jsxs)(s,{id:"circuit-breaker",number:"05",title:"Circuit Breaker",titleAccent:"Pattern",children:[(0,n.jsx)(e.p,{children:"Prevent cascading failures by stopping retries after too many consecutive failures."}),(0,n.jsx)(o,{file:"circuit-breaker.go",children:`package main

import (
  "fmt"
  "sync"
  "time"
  
  IO "github.com/IBM/fp-go/v2/io"
  IOR "github.com/IBM/fp-go/v2/ioresult"
)

type CircuitState int

const (
  StateClosed CircuitState = iota
  StateOpen
  StateHalfOpen
)

type CircuitBreaker struct {
  maxFailures     int
  resetTimeout    time.Duration
  failureCount    int
  lastFailureTime time.Time
  state           CircuitState
  mu              sync.Mutex
}

func NewCircuitBreaker(maxFailures int, resetTimeout time.Duration) *CircuitBreaker {
  return &CircuitBreaker{
      maxFailures:  maxFailures,
      resetTimeout: resetTimeout,
      state:        StateClosed,
  }
}

func (cb *CircuitBreaker) Call(operation func() IOR.IOResult[string]) IOR.IOResult[string] {
  cb.mu.Lock()
  defer cb.mu.Unlock()
  
  // Check if circuit should transition from Open to HalfOpen
  if cb.state == StateOpen {
      if time.Since(cb.lastFailureTime) > cb.resetTimeout {
          fmt.Println("Circuit transitioning to HalfOpen")
          cb.state = StateHalfOpen
          cb.failureCount = 0
      } else {
          fmt.Println("Circuit is Open, rejecting call")
          return IOR.Left[string](fmt.Errorf("circuit breaker is open"))
      }
  }
  
  // Execute operation
  result := operation()
  outcome := result()
  
  if outcome.IsLeft() {
      cb.failureCount++
      cb.lastFailureTime = time.Now()
      
      if cb.failureCount >= cb.maxFailures {
          fmt.Printf("Circuit opening after %d failures\\n", cb.failureCount)
          cb.state = StateOpen
      }
  } else {
      // Success - reset circuit
      if cb.state == StateHalfOpen {
          fmt.Println("Circuit closing after successful call")
          cb.state = StateClosed
      }
      cb.failureCount = 0
  }
  
  return result
}

func main() {
  cb := NewCircuitBreaker(3, 2*time.Second)
  
  failingOp := func() IOR.IOResult[string] {
      return IOR.Left[string](fmt.Errorf("operation failed"))
  }
  
  // First 3 failures will be attempted
  for i := 0; i < 5; i++ {
      result := cb.Call(failingOp)
      outcome := result()
      fmt.Printf("Call %d: %v\\n", i+1, outcome.IsRight())
      time.Sleep(100 * time.Millisecond)
  }
  
  // Wait for circuit to reset
  fmt.Println("\\nWaiting for circuit to reset...")
  time.Sleep(2 * time.Second)
  
  // Try again - circuit should be HalfOpen
  result := cb.Call(failingOp)
  outcome := result()
  fmt.Printf("After reset: %v\\n", outcome.IsRight())
}`})]}),"\n",(0,n.jsx)(s,{id:"best-practices",number:"06",title:"Best",titleAccent:"Practices",children:(0,n.jsxs)(r,{children:[(0,n.jsx)(i,{status:"required",children:(0,n.jsxs)(e.p,{children:[(0,n.jsx)(e.strong,{children:"Use exponential backoff"})," \u2014 Avoid overwhelming the system with constant retries"]})}),(0,n.jsx)(i,{status:"required",children:(0,n.jsxs)(e.p,{children:[(0,n.jsx)(e.strong,{children:"Add jitter"})," \u2014 Prevent thundering herd when many clients retry simultaneously"]})}),(0,n.jsx)(i,{status:"required",children:(0,n.jsxs)(e.p,{children:[(0,n.jsx)(e.strong,{children:"Limit retry attempts"})," \u2014 Don't retry forever; fail fast when appropriate"]})}),(0,n.jsx)(i,{status:"required",children:(0,n.jsxs)(e.p,{children:[(0,n.jsx)(e.strong,{children:"Retry only transient errors"})," \u2014 Don't retry permanent failures (e.g., 404, validation errors)"]})}),(0,n.jsx)(i,{status:"recommended",children:(0,n.jsxs)(e.p,{children:[(0,n.jsx)(e.strong,{children:"Implement circuit breakers"})," \u2014 Prevent cascading failures in distributed systems"]})}),(0,n.jsx)(i,{status:"recommended",children:(0,n.jsxs)(e.p,{children:[(0,n.jsx)(e.strong,{children:"Log retry attempts"})," \u2014 Track retry behavior for debugging and monitoring"]})}),(0,n.jsx)(i,{status:"optional",children:(0,n.jsxs)(e.p,{children:[(0,n.jsx)(e.strong,{children:"Make retry configurable"})," \u2014 Allow tuning based on specific use cases"]})})]})})]})}function f(t={}){let{wrapper:e}={...(0,a.R)(),...t.components};return e?(0,n.jsx)(e,{...t,children:(0,n.jsx)(u,{...t})}):u(t)}function m(t,e){throw Error("Expected "+(e?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}},8453(t,e,r){r.d(e,{R:()=>o,x:()=>l});var i=r(6540);let n={},a=i.createContext(n);function o(t){let e=i.useContext(a);return i.useMemo(function(){return"function"==typeof t?t(e):{...e,...t}},[e,t])}function l(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(n):t.components||n:o(t.components),i.createElement(a.Provider,{value:e},t.children)}}}]);
"use strict";(self.webpackChunkfp_go_docs=self.webpackChunkfp_go_docs||[]).push([["9124"],{2199(e,r,t){t.r(r),t.d(r,{metadata:()=>i,default:()=>f,frontMatter:()=>l,contentTitle:()=>a,toc:()=>c,assets:()=>o});var i=JSON.parse('{"id":"recipes/error-recovery","title":"Error Recovery","description":"Graceful error recovery strategies","source":"@site/docs/recipes/error-recovery.md","sourceDirName":"recipes","slug":"/recipes/error-recovery","permalink":"/fp-go/docs/recipes/error-recovery","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"sidebar_position":5,"title":"Error Recovery","description":"Graceful error recovery strategies","hide_title":true},"sidebar":"recipesSidebar","previous":{"title":"Validation","permalink":"/fp-go/docs/recipes/validation"},"next":{"title":"Error Handling Patterns","permalink":"/fp-go/docs/recipes/error-handling"}}'),s=t(4848),n=t(8453);let l={sidebar_position:5,title:"Error Recovery",description:"Graceful error recovery strategies",hide_title:!0},a,o={},c=[];function u(e){let r={p:"p",strong:"strong",...(0,n.R)(),...e.components},{Checklist:t,ChecklistItem:i,CodeCard:l,PageHeader:a,Section:o,TLDR:c,TLDRCard:u}=r;return t||g("Checklist",!0),i||g("ChecklistItem",!0),l||g("CodeCard",!0),a||g("PageHeader",!0),o||g("Section",!0),c||g("TLDR",!0),u||g("TLDRCard",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a,{eyebrow:"Recipes \xb7 05 / 17",title:"Error",titleAccent:"Recovery",lede:"Graceful error recovery strategies with fallbacks, cascading sources, and resilient degradation patterns.",meta:[{label:"Difficulty",value:"Intermediate"},{label:"Patterns",value:"7"},{label:"Use Cases",value:"Resilience, Fallbacks, Degradation"}]}),"\n",(0,s.jsxs)(c,{children:[(0,s.jsx)(u,{title:"Always Have a Fallback",icon:"shield",children:(0,s.jsx)(r.p,{children:"Never leave users with no response\u2014provide default values, cached data, or reduced functionality when operations fail."})}),(0,s.jsx)(u,{title:"Degrade Gracefully",icon:"layers",children:(0,s.jsx)(r.p,{children:"Provide reduced functionality rather than complete failure\u2014try multiple sources before giving up."})}),(0,s.jsx)(u,{title:"Log and Monitor",icon:"activity",children:(0,s.jsx)(r.p,{children:"Track errors for debugging while maintaining user experience\u2014high fallback usage indicates underlying issues."})})]}),"\n",(0,s.jsxs)(o,{id:"fallback-values",number:"01",title:"Fallback",titleAccent:"Values",children:[(0,s.jsx)(r.p,{children:"Provide default values when operations fail, ensuring your application always has a valid response."}),(0,s.jsx)(l,{file:"fallback-values.go",children:`package main

import (
  "fmt"
  
  O "github.com/IBM/fp-go/v2/option"
  R "github.com/IBM/fp-go/v2/result"
)

// Get user preference with fallback
func getUserPreference(userID string) R.Result[string] {
  // Simulate database lookup failure
  return R.Left[string](fmt.Errorf("user not found"))
}

func getDefaultPreference() string {
  return "default-theme"
}

func main() {
  // Try to get user preference, fall back to default
  result := getUserPreference("user123")
  preference := R.GetOrElse(getDefaultPreference)(result)
  
  fmt.Printf("Using preference: %s\\n", preference)
  // Output: Using preference: default-theme
}`})]}),"\n",(0,s.jsxs)(o,{id:"cascading-fallbacks",number:"02",title:"Cascading",titleAccent:"Fallbacks",children:[(0,s.jsx)(r.p,{children:"Try multiple sources before giving up, creating a resilient chain of fallback options."}),(0,s.jsx)(l,{file:"cascading-fallbacks.go",children:`package main

import (
  "fmt"
  
  F "github.com/IBM/fp-go/v2/function"
  R "github.com/IBM/fp-go/v2/result"
)

// Try to get config from multiple sources
func getConfigFromFile() R.Result[string] {
  return R.Left[string](fmt.Errorf("file not found"))
}

func getConfigFromEnv() R.Result[string] {
  return R.Left[string](fmt.Errorf("env var not set"))
}

func getConfigFromRemote() R.Result[string] {
  return R.Right[error]("remote-config")
}

func getConfig() R.Result[string] {
  return F.Pipe3(
      getConfigFromFile(),
      R.OrElse(getConfigFromEnv),
      R.OrElse(getConfigFromRemote),
  )
}

func main() {
  config := getConfig()
  value := R.GetOrElse(func() string { return "fallback" })(config)
  
  fmt.Printf("Config: %s\\n", value)
  // Output: Config: remote-config
}`})]}),"\n",(0,s.jsxs)(o,{id:"partial-success",number:"03",title:"Partial",titleAccent:"Success",children:[(0,s.jsx)(r.p,{children:"Handle partial failures in batch operations by collecting both successes and failures."}),(0,s.jsx)(l,{file:"partial-success.go",children:`package main

import (
  "fmt"
  
  A "github.com/IBM/fp-go/v2/array"
  E "github.com/IBM/fp-go/v2/either"
)

type ProcessResult struct {
  Successes []string
  Failures  []error
}

// Process items, collecting both successes and failures
func processItems(items []string) ProcessResult {
  var successes []string
  var failures []error
  
  for _, item := range items {
      result := processItem(item)
      if E.IsRight(result) {
          successes = append(successes, E.GetRight(result))
      } else {
          failures = append(failures, E.GetLeft(result))
      }
  }
  
  return ProcessResult{
      Successes: successes,
      Failures:  failures,
  }
}

func processItem(item string) E.Either[error, string] {
  if len(item) < 3 {
      return E.Left[string](fmt.Errorf("item too short: %s", item))
  }
  return E.Right[error](fmt.Sprintf("processed-%s", item))
}

func main() {
  items := []string{"apple", "ab", "banana", "x", "cherry"}
  result := processItems(items)
  
  fmt.Printf("Successes: %d\\n", len(result.Successes))
  fmt.Printf("Failures: %d\\n", len(result.Failures))
  
  for _, s := range result.Successes {
      fmt.Printf("  \u{2713} %s\\n", s)
  }
  
  for _, f := range result.Failures {
      fmt.Printf("  \u{2717} %s\\n", f.Error())
  }
}`})]}),"\n",(0,s.jsxs)(o,{id:"graceful-degradation",number:"04",title:"Graceful",titleAccent:"Degradation",children:[(0,s.jsx)(r.p,{children:"Provide reduced functionality when full functionality fails, maintaining user experience."}),(0,s.jsx)(l,{file:"graceful-degradation.go",children:`package main

import (
  "fmt"
  
  R "github.com/IBM/fp-go/v2/result"
)

type UserProfile struct {
  Name   string
  Avatar string
  Bio    string
}

type BasicProfile struct {
  Name string
}

// Try to get full profile
func getFullProfile(userID string) R.Result[UserProfile] {
  return R.Left[UserProfile](fmt.Errorf("profile service unavailable"))
}

// Fallback to basic profile
func getBasicProfile(userID string) R.Result[BasicProfile] {
  return R.Right[error](BasicProfile{Name: "User " + userID})
}

// Convert basic to full profile with defaults
func basicToFull(basic BasicProfile) UserProfile {
  return UserProfile{
      Name:   basic.Name,
      Avatar: "default-avatar.png",
      Bio:    "No bio available",
  }
}

func getUserProfile(userID string) UserProfile {
  fullProfile := getFullProfile(userID)
  
  if R.IsRight(fullProfile) {
      return R.GetRight(fullProfile)
  }
  
  // Degrade to basic profile
  basicProfile := getBasicProfile(userID)
  if R.IsRight(basicProfile) {
      return basicToFull(R.GetRight(basicProfile))
  }
  
  // Ultimate fallback
  return UserProfile{
      Name:   "Anonymous",
      Avatar: "default-avatar.png",
      Bio:    "Profile unavailable",
  }
}

func main() {
  profile := getUserProfile("123")
  fmt.Printf("Name: %s\\n", profile.Name)
  fmt.Printf("Avatar: %s\\n", profile.Avatar)
  fmt.Printf("Bio: %s\\n", profile.Bio)
}`})]}),"\n",(0,s.jsxs)(o,{id:"error-logging",number:"05",title:"Error Logging with",titleAccent:"Recovery",children:[(0,s.jsx)(r.p,{children:"Log errors while providing fallback values, maintaining observability without sacrificing user experience."}),(0,s.jsx)(l,{file:"error-logging.go",children:`package main

import (
  "fmt"
  "log"
  
  R "github.com/IBM/fp-go/v2/result"
)

// Tap into error for logging without changing the flow
func tapError[A any](onError func(error)) func(R.Result[A]) R.Result[A] {
  return func(result R.Result[A]) R.Result[A] {
      if R.IsLeft(result) {
          onError(R.GetLeft(result))
      }
      return result
  }
}

func fetchData(id string) R.Result[string] {
  return R.Left[string](fmt.Errorf("network error: timeout"))
}

func main() {
  result := fetchData("123")
  
  // Log error and provide fallback
  logged := tapError[string](func(err error) {
      log.Printf("Error fetching data: %v", err)
  })(result)
  
  value := R.GetOrElse(func() string { return "cached-data" })(logged)
  
  fmt.Printf("Using: %s\\n", value)
}`})]}),"\n",(0,s.jsxs)(o,{id:"timeout-fallback",number:"06",title:"Timeout with",titleAccent:"Fallback",children:[(0,s.jsx)(r.p,{children:"Implement timeout with graceful fallback to prevent indefinite waiting."}),(0,s.jsx)(l,{file:"timeout-fallback.go",children:`package main

import (
  "context"
  "fmt"
  "time"
  
  IO "github.com/IBM/fp-go/v2/io"
  IOR "github.com/IBM/fp-go/v2/ioresult"
)

// Execute with timeout
func withTimeout[A any](
  timeout time.Duration,
  operation func() IOR.IOResult[A],
  fallback func() A,
) IO.IO[A] {
  return IO.MakeIO(func() A {
      ctx, cancel := context.WithTimeout(context.Background(), timeout)
      defer cancel()
      
      resultChan := make(chan A, 1)
      
      go func() {
          result := operation()
          outcome := result()
          if outcome.IsRight() {
              resultChan <- outcome.GetRight()
          }
      }()
      
      select {
      case result := <-resultChan:
          return result
      case <-ctx.Done():
          fmt.Println("Operation timed out, using fallback")
          return fallback()
      }
  })
}

func slowOperation() IOR.IOResult[string] {
  return IOR.FromIO[error](IO.MakeIO(func() string {
      time.Sleep(2 * time.Second)
      return "slow-result"
  }))
}

func main() {
  operation := withTimeout(
      500*time.Millisecond,
      slowOperation,
      func() string { return "fallback-result" },
  )
  
  result := operation()
  fmt.Printf("Result: %s\\n", result)
}`})]}),"\n",(0,s.jsxs)(o,{id:"retry-fallback",number:"07",title:"Retry with",titleAccent:"Fallback",children:[(0,s.jsx)(r.p,{children:"Combine retry logic with fallback values for maximum resilience."}),(0,s.jsx)(l,{file:"retry-fallback.go",children:`package main

import (
  "fmt"
  "time"
  
  IO "github.com/IBM/fp-go/v2/io"
  IOR "github.com/IBM/fp-go/v2/ioresult"
)

func retryWithFallback[A any](
  maxAttempts int,
  operation func() IOR.IOResult[A],
  fallback func() A,
) IO.IO[A] {
  return IO.MakeIO(func() A {
      for i := 0; i < maxAttempts; i++ {
          result := operation()
          outcome := result()
          
          if outcome.IsRight() {
              return outcome.GetRight()
          }
          
          if i < maxAttempts-1 {
              time.Sleep(100 * time.Millisecond)
          }
      }
      
      fmt.Printf("All %d attempts failed, using fallback\\n", maxAttempts)
      return fallback()
  })
}

var attemptNum = 0

func unreliableOp() IOR.IOResult[string] {
  return IOR.FromIO[error](IO.MakeIO(func() string {
      attemptNum++
      fmt.Printf("Attempt %d failed\\n", attemptNum)
      return ""
  }))
}

func main() {
  operation := retryWithFallback(
      3,
      unreliableOp,
      func() string { return "fallback-value" },
  )
  
  result := operation()
  fmt.Printf("Final result: %s\\n", result)
}`})]}),"\n",(0,s.jsx)(o,{id:"best-practices",number:"08",title:"Best",titleAccent:"Practices",children:(0,s.jsxs)(t,{children:[(0,s.jsx)(i,{status:"required",children:(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"Always have a fallback"})," \u2014 Never leave users with no response"]})}),(0,s.jsx)(i,{status:"required",children:(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"Log failures"})," \u2014 Track errors for debugging and monitoring"]})}),(0,s.jsx)(i,{status:"required",children:(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"Degrade gracefully"})," \u2014 Provide reduced functionality rather than complete failure"]})}),(0,s.jsx)(i,{status:"recommended",children:(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"Use timeouts"})," \u2014 Don't wait forever for failing operations"]})}),(0,s.jsx)(i,{status:"recommended",children:(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"Cache when possible"})," \u2014 Use cached data as fallback for fresh data"]})}),(0,s.jsx)(i,{status:"optional",children:(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"Communicate degradation"})," \u2014 Let users know when using fallback/cached data"]})}),(0,s.jsx)(i,{status:"optional",children:(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"Monitor fallback usage"})," \u2014 High fallback usage indicates underlying issues"]})})]})})]})}function f(e={}){let{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}function g(e,r){throw Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},8453(e,r,t){t.d(r,{R:()=>l,x:()=>a});var i=t(6540);let s={},n=i.createContext(s);function l(e){let r=i.useContext(n);return i.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(n.Provider,{value:r},e.children)}}}]);
"use strict";(self.webpackChunkfp_go_docs=self.webpackChunkfp_go_docs||[]).push([["6126"],{1154(e,r,t){t.r(r),t.d(r,{metadata:()=>i,default:()=>p,frontMatter:()=>o,contentTitle:()=>l,toc:()=>c,assets:()=>a});var i=JSON.parse('{"id":"recipes/parallel-tasks","title":"Parallel Tasks","description":"Execute tasks concurrently using functional patterns with fp-go\'s ApplicativePar, Traverse, and Race combinators.","source":"@site/docs/recipes/parallel-tasks.md","sourceDirName":"recipes","slug":"/recipes/parallel-tasks","permalink":"/fp-go/docs/recipes/parallel-tasks","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":12,"frontMatter":{"title":"Parallel Tasks","hide_title":true,"description":"Execute tasks concurrently using functional patterns with fp-go\'s ApplicativePar, Traverse, and Race combinators.","sidebar_position":12},"sidebar":"recipesSidebar","previous":{"title":"HTTP Requests","permalink":"/fp-go/docs/recipes/http-requests"},"next":{"title":"Dependency Injection","permalink":"/fp-go/docs/recipes/dependency-injection"}}'),s=t(4848),n=t(8453);let o={title:"Parallel Tasks",hide_title:!0,description:"Execute tasks concurrently using functional patterns with fp-go's ApplicativePar, Traverse, and Race combinators.",sidebar_position:12},l,a={},c=[];function u(e){let r={code:"code",p:"p",strong:"strong",...(0,n.R)(),...e.components},{Callout:t,Checklist:i,ChecklistItem:o,CodeCard:l,Compare:a,CompareCol:c,PageHeader:u,Section:p,TLDR:m,TLDRCard:d}=r;return t||f("Callout",!0),i||f("Checklist",!0),o||f("ChecklistItem",!0),l||f("CodeCard",!0),a||f("Compare",!0),c||f("CompareCol",!0),u||f("PageHeader",!0),p||f("Section",!0),m||f("TLDR",!0),d||f("TLDRCard",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(u,{eyebrow:"Recipes \xb7 12 / 17",title:"Parallel",titleAccent:"Tasks",lede:"Execute tasks concurrently using functional patterns with fp-go's ApplicativePar, Traverse, and Race combinators.",meta:[{label:"Difficulty",value:"Advanced"},{label:"Patterns",value:"7"},{label:"Use Cases",value:"Concurrent processing, HTTP requests, worker pools"}]}),"\n",(0,s.jsxs)(m,{children:[(0,s.jsx)(d,{title:"Type-Safe Parallelism",icon:"zap",children:(0,s.jsx)(r.p,{children:"Use ApplicativePar for compile-time safe concurrent operations without manual goroutine management."})}),(0,s.jsx)(d,{title:"Controlled Concurrency",icon:"sliders",children:(0,s.jsx)(r.p,{children:"Worker pools and rate limiters prevent resource exhaustion while maximizing throughput."})}),(0,s.jsx)(d,{title:"Race & Timeout",icon:"clock",children:(0,s.jsx)(r.p,{children:"Race multiple operations and implement timeouts to handle slow or failing services gracefully."})})]}),"\n",(0,s.jsxs)(p,{id:"basic-parallel",number:"01",title:"Basic Parallel",titleAccent:"Execution",children:[(0,s.jsxs)(r.p,{children:["Parallel execution allows multiple operations to run concurrently. fp-go provides ",(0,s.jsx)(r.strong,{children:"ApplicativePar"})," for safe parallel operations."]}),(0,s.jsx)(l,{file:"parallel_basic.go",children:`package main

import (
  "fmt"
  "time"
  A "github.com/IBM/fp-go/v2/array"
  IOE "github.com/IBM/fp-go/v2/ioeither"
)

func slowOperation(n int) IOE.IOEither[error, int] {
  return IOE.TryCatch(func() (int, error) {
      time.Sleep(time.Duration(n) * time.Second)
      return n * 2, nil
  })
}

func processSequential(numbers []int) IOE.IOEither[error, []int] {
  return A.Traverse[int](IOE.Applicative[error, int]())(
      slowOperation,
  )(numbers)
}

func processParallel(numbers []int) IOE.IOEither[error, []int] {
  return A.Traverse[int](IOE.ApplicativePar[error, int]())(
      slowOperation,
  )(numbers)
}

func main() {
  numbers := []int{1, 2, 3, 4, 5}
  
  // Sequential: ~15 seconds (1+2+3+4+5)
  start := time.Now()
  result1 := processSequential(numbers)()
  fmt.Printf("Sequential: %v (took %v)\\n", result1.Right(), time.Since(start))
  
  // Parallel: ~5 seconds (max of all)
  start = time.Now()
  result2 := processParallel(numbers)()
  fmt.Printf("Parallel: %v (took %v)\\n", result2.Right(), time.Since(start))
}
`}),(0,s.jsx)(t,{type:"info",children:(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"ApplicativePar vs Applicative"}),": Use ",(0,s.jsx)(r.code,{children:"ApplicativePar"})," for concurrent execution, ",(0,s.jsx)(r.code,{children:"Applicative"})," for sequential. The API is identical\u2014only the execution strategy differs."]})})]}),"\n",(0,s.jsxs)(p,{id:"http-requests",number:"02",title:"Concurrent HTTP",titleAccent:"Requests",children:[(0,s.jsx)(r.p,{children:"Fetch multiple URLs in parallel to reduce total request time."}),(0,s.jsx)(l,{file:"parallel_http.go",children:`package main

import (
  "fmt"
  "io"
  "net/http"
  "time"
  A "github.com/IBM/fp-go/v2/array"
  IOE "github.com/IBM/fp-go/v2/ioeither"
)

type Response struct {
  URL    string
  Status int
  Body   string
}

func fetchURL(url string) IOE.IOEither[error, Response] {
  return IOE.TryCatch(func() (Response, error) {
      resp, err := http.Get(url)
      if err != nil {
          return Response{}, err
      }
      defer resp.Body.Close()
      
      body, err := io.ReadAll(resp.Body)
      if err != nil {
          return Response{}, err
      }
      
      return Response{
          URL:    url,
          Status: resp.StatusCode,
          Body:   string(body),
      }, nil
  })
}

func fetchAllParallel(urls []string) IOE.IOEither[error, []Response] {
  return A.Traverse[string](IOE.ApplicativePar[error, Response]())(
      fetchURL,
  )(urls)
}

func main() {
  urls := []string{
      "https://api.github.com/users/octocat",
      "https://api.github.com/users/torvalds",
      "https://api.github.com/users/gvanrossum",
  }
  
  start := time.Now()
  result := fetchAllParallel(urls)()
  duration := time.Since(start)
  
  if result.IsLeft() {
      fmt.Println("Error:", result.Left())
  } else {
      responses := result.Right()
      fmt.Printf("Fetched %d URLs in %v\\n", len(responses), duration)
      for _, resp := range responses {
          fmt.Printf("  %s: %d (%d bytes)\\n", resp.URL, resp.Status, len(resp.Body))
      }
  }
}
`})]}),"\n",(0,s.jsxs)(p,{id:"worker-pool",number:"03",title:"Worker Pool",titleAccent:"Pattern",children:[(0,s.jsx)(r.p,{children:"Control concurrency level with a fixed worker pool to prevent resource exhaustion."}),(0,s.jsx)(l,{file:"worker_pool.go",children:`package main

import (
  "fmt"
  "sync"
  "time"
  IOE "github.com/IBM/fp-go/v2/ioeither"
)

type WorkerPool[A, B any] struct {
  workers int
  work    func(A) IOE.IOEither[error, B]
}

func NewWorkerPool[A, B any](
  workers int,
  work func(A) IOE.IOEither[error, B],
) *WorkerPool[A, B] {
  return &WorkerPool[A, B]{
      workers: workers,
      work:    work,
  }
}

func (wp *WorkerPool[A, B]) Execute(items []A) IOE.IOEither[error, []B] {
  return func() IOE.Either[error, []B] {
      jobs := make(chan A, len(items))
      results := make(chan IOE.Either[error, B], len(items))
      
      // Start workers
      var wg sync.WaitGroup
      for i := 0; i < wp.workers; i++ {
          wg.Add(1)
          go func() {
              defer wg.Done()
              for item := range jobs {
                  results <- wp.work(item)()
              }
          }()
      }
      
      // Send jobs
      for _, item := range items {
          jobs <- item
      }
      close(jobs)
      
      // Wait for completion
      go func() {
          wg.Wait()
          close(results)
      }()
      
      // Collect results
      output := make([]B, 0, len(items))
      for result := range results {
          if result.IsLeft() {
              return IOE.Left[[]B](result.Left())()
          }
          output = append(output, result.Right())
      }
      
      return IOE.Right[error](output)()
  }
}

func processItem(n int) IOE.IOEither[error, int] {
  return IOE.TryCatch(func() (int, error) {
      time.Sleep(100 * time.Millisecond)
      return n * 2, nil
  })
}

func main() {
  items := []int{1, 2, 3, 4, 5, 6, 7, 8, 9, 10}
  
  pool := NewWorkerPool(3, processItem)
  
  start := time.Now()
  result := pool.Execute(items)()
  duration := time.Since(start)
  
  if result.IsLeft() {
      fmt.Println("Error:", result.Left())
  } else {
      fmt.Printf("Processed %d items in %v with 3 workers\\n", len(result.Right()), duration)
      fmt.Println("Results:", result.Right())
  }
}
`})]}),"\n",(0,s.jsxs)(p,{id:"race-timeout",number:"04",title:"Race &",titleAccent:"Timeout",children:[(0,s.jsx)(r.p,{children:"Race multiple operations and implement timeouts for resilient systems."}),(0,s.jsx)(l,{file:"race_timeout.go",children:`package main

import (
  "fmt"
  "sync"
  "time"
  IOE "github.com/IBM/fp-go/v2/ioeither"
)

func race[A any](operations []IOE.IOEither[error, A]) IOE.IOEither[error, A] {
  return func() IOE.Either[error, A] {
      resultChan := make(chan IOE.Either[error, A], len(operations))
      var wg sync.WaitGroup
      
      for _, op := range operations {
          wg.Add(1)
          go func(operation IOE.IOEither[error, A]) {
              defer wg.Done()
              resultChan <- operation()
          }(op)
      }
      
      go func() {
          wg.Wait()
          close(resultChan)
      }()
      
      // Return first successful result
      var lastErr error
      for result := range resultChan {
          if result.IsRight() {
              return result
          }
          lastErr = result.Left()
      }
      
      return IOE.Left[A](fmt.Errorf("all operations failed: %w", lastErr))()
  }
}

func withTimeout[A any](
  timeout time.Duration,
  operation IOE.IOEither[error, A],
) IOE.IOEither[error, A] {
  timeoutOp := IOE.TryCatch(func() (A, error) {
      time.Sleep(timeout)
      var zero A
      return zero, fmt.Errorf("operation timed out after %v", timeout)
  })
  
  return race([]IOE.IOEither[error, A]{operation, timeoutOp})
}

func slowOperation() IOE.IOEither[error, string] {
  return IOE.TryCatch(func() (string, error) {
      time.Sleep(2 * time.Second)
      return "Completed", nil
  })
}

func main() {
  // Will timeout
  result1 := withTimeout(1*time.Second, slowOperation())()
  if result1.IsLeft() {
      fmt.Println("Result 1:", result1.Left())
  }
  
  // Will succeed
  result2 := withTimeout(3*time.Second, slowOperation())()
  if result2.IsRight() {
      fmt.Println("Result 2:", result2.Right())
  }
}
`})]}),"\n",(0,s.jsxs)(p,{id:"batch-processing",number:"05",title:"Batch",titleAccent:"Processing",children:[(0,s.jsx)(r.p,{children:"Process large datasets in parallel batches for optimal throughput."}),(0,s.jsx)(l,{file:"batch_processing.go",children:`package main

import (
  "fmt"
  "time"
  A "github.com/IBM/fp-go/v2/array"
  IOE "github.com/IBM/fp-go/v2/ioeither"
  F "github.com/IBM/fp-go/v2/function"
)

func processInBatches[A, B any](
  batchSize int,
  process func([]A) IOE.IOEither[error, []B],
) func([]A) IOE.IOEither[error, []B] {
  return func(items []A) IOE.IOEither[error, []B] {
      chunks := A.Chunksof(batchSize)(items)
      
      return F.Pipe2(
          A.Traverse[[]A](IOE.ApplicativePar[error, []B]())(process)(chunks),
          IOE.Map(func(results [][]B) []B {
              return A.Flatten(results)
          }),
      )
  }
}

func processBatch(items []int) IOE.IOEither[error, []int] {
  return IOE.TryCatch(func() ([]int, error) {
      time.Sleep(100 * time.Millisecond)
      return A.Map(func(n int) int { return n * 2 })(items), nil
  })
}

func main() {
  items := A.MakeBy(100)(func(i int) int { return i + 1 })
  
  processor := processInBatches(10, processBatch)
  
  start := time.Now()
  result := processor(items)()
  duration := time.Since(start)
  
  if result.IsLeft() {
      fmt.Println("Error:", result.Left())
  } else {
      fmt.Printf("Processed %d items in %v\\n", len(result.Right()), duration)
  }
}
`})]}),"\n",(0,s.jsxs)(p,{id:"error-handling",number:"06",title:"Error Handling in",titleAccent:"Parallel",children:[(0,s.jsx)(r.p,{children:"Handle errors gracefully in parallel operations with fail-fast or collect-all strategies."}),(0,s.jsxs)(a,{children:[(0,s.jsx)(c,{kind:"bad",children:(0,s.jsx)(l,{file:"fail_fast.go",children:`// Fail fast: stop on first error
func processWithFailFast(items []int) IOE.IOEither[error, []int] {
  return A.Traverse[int](IOE.ApplicativePar[error, int]())(
      func(n int) IOE.IOEither[error, int] {
          if n == 5 {
              return IOE.Left[int](fmt.Errorf("failed on item %d", n))
          }
          return IOE.Right[error](n * 2)
      },
  )(items)
}

func main() {
  items := []int{1, 2, 3, 4, 5, 6, 7, 8}
  result := processWithFailFast(items)()
  
  if result.IsLeft() {
      fmt.Println("Error:", result.Left())
      // Error: failed on item 5
  }
}
`})}),(0,s.jsx)(c,{kind:"good",children:(0,s.jsx)(l,{file:"collect_errors.go",children:`// Collect all: process everything, track errors
type Result[A any] struct {
  Value A
  Error error
}

func processAllWithErrors[A, B any](
  items []A,
  process func(A) IOE.IOEither[error, B],
) []Result[B] {
  results := make([]Result[B], len(items))
  var wg sync.WaitGroup
  
  for i, item := range items {
      wg.Add(1)
      go func(idx int, val A) {
          defer wg.Done()
          result := process(val)()
          if result.IsLeft() {
              results[idx] = Result[B]{Error: result.Left()}
          } else {
              results[idx] = Result[B]{Value: result.Right()}
          }
      }(i, item)
  }
  
  wg.Wait()
  return results
}
`})})]})]}),"\n",(0,s.jsxs)(p,{id:"best-practices",number:"07",title:"Best",titleAccent:"Practices",children:[(0,s.jsxs)(i,{children:[(0,s.jsx)(o,{status:"required",children:(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"Control concurrency level"})," \u2014 Use worker pools to limit goroutines and prevent resource exhaustion"]})}),(0,s.jsx)(o,{status:"required",children:(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"Set timeouts"})," \u2014 Always timeout external operations to prevent hanging forever"]})}),(0,s.jsx)(o,{status:"recommended",children:(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"Handle partial failures"})," \u2014 Collect all results when appropriate instead of failing fast"]})}),(0,s.jsx)(o,{status:"recommended",children:(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"Batch small operations"})," \u2014 Reduce overhead by batching tiny operations together"]})}),(0,s.jsx)(o,{status:"optional",children:(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"Use context for cancellation"})," \u2014 Pass context.Context for graceful shutdown"]})})]}),(0,s.jsx)(l,{file:"best_practices.go",children:`// \u{2705} Good: Controlled concurrency with timeout
pool := NewWorkerPool(10, processItem)
result := withTimeout(5*time.Second, pool.Execute(items))

// \u{274C} Avoid: Unbounded parallelism without timeout
result := A.Traverse[int](IOE.ApplicativePar[error, int]())(
  processItem,
)(thousandsOfItems) // Can overwhelm system
`})]})]})}function p(e={}){let{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}function f(e,r){throw Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},8453(e,r,t){t.d(r,{R:()=>o,x:()=>l});var i=t(6540);let s={},n=i.createContext(s);function o(e){let r=i.useContext(n);return i.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(n.Provider,{value:r},e.children)}}}]);
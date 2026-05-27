"use strict";(self.webpackChunkfp_go_docs=self.webpackChunkfp_go_docs||[]).push([["7220"],{1180(e,n,i){i.r(n),i.d(n,{metadata:()=>t,default:()=>h,frontMatter:()=>c,contentTitle:()=>d,toc:()=>a,assets:()=>l});var t=JSON.parse('{"id":"v2/io","title":"IO","description":"Lazy synchronous side effects with referential transparency - control when effects execute.","source":"@site/docs/v2/io.md","sourceDirName":"v2","slug":"/v2/io","permalink":"/fp-go/docs/v2/io","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":12,"frontMatter":{"title":"IO","hide_title":true,"description":"Lazy synchronous side effects with referential transparency - control when effects execute.","sidebar_position":12},"sidebar":"apiSidebar","previous":{"title":"Either","permalink":"/fp-go/docs/v2/either"},"next":{"title":"IOResult","permalink":"/fp-go/docs/v2/ioresult"}}'),r=i(4848),s=i(8453);let c={title:"IO",hide_title:!0,description:"Lazy synchronous side effects with referential transparency - control when effects execute.",sidebar_position:12},d,l={},a=[{value:"Why IO?",id:"why-io",level:3},{value:"Constructors",id:"constructors",level:3},{value:"Transformations",id:"transformations",level:3},{value:"Combining",id:"combining",level:3},{value:"Time Operations",id:"time-operations",level:3},{value:"Resource Management",id:"resource-management",level:3},{value:"Utilities",id:"utilities",level:3},{value:"Basic Operations",id:"basic-operations",level:3},{value:"Transformations",id:"transformations-1",level:3},{value:"Parallel vs Sequential",id:"parallel-vs-sequential",level:3},{value:"Resource Management",id:"resource-management-1",level:3},{value:"Time-Based Operations",id:"time-based-operations",level:3},{value:"Logging and Debugging",id:"logging-and-debugging",level:3},{value:"Pattern 1: API Calls",id:"pattern-1-api-calls",level:3},{value:"Pattern 2: Caching",id:"pattern-2-caching",level:3},{value:"Pattern 3: Testing with Mocks",id:"pattern-3-testing-with-mocks",level:3},{value:"When to Use IO vs IOResult",id:"when-to-use-io-vs-ioresult",level:3}];function o(e){let n={code:"code",h3:"h3",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components},{ApiTable:i,CodeCard:t,Compare:c,CompareCol:d,PageHeader:l,Section:a}=n;return i||u("ApiTable",!0),t||u("CodeCard",!0),c||u("Compare",!0),d||u("CompareCol",!0),l||u("PageHeader",!0),a||u("Section",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l,{eyebrow:"Reference \xb7 Core Type",title:"IO",lede:"Lazy, synchronous computation that produces a value. IO[A] encapsulates side effects while maintaining referential transparency and composability.",meta:[{label:"Package",value:"github.com/IBM/fp-go/v2/io"},{label:"Type",value:"Monad (func() A)"}]}),"\n",(0,r.jsxs)(a,{id:"overview",number:"01",title:"Overview",children:[(0,r.jsx)(n.p,{children:"IO is simply a function that takes no arguments and returns a value:"}),(0,r.jsx)(t,{file:"type_definition.go",children:`package io

// IO is a lazy computation
type IO[A any] = func() A
`}),(0,r.jsx)(n.h3,{id:"why-io",children:"Why IO?"}),(0,r.jsx)(i,{children:(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Benefit"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"Lazy evaluation"})}),(0,r.jsx)(n.td,{children:"Computations don't execute until explicitly called"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"Referential transparency"})}),(0,r.jsx)(n.td,{children:"Same IO value always describes the same computation"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"Composability"})}),(0,r.jsx)(n.td,{children:"Build complex operations from simple ones without executing"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"Testability"})}),(0,r.jsx)(n.td,{children:"Mock side effects by providing different IO values"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"Explicit effects"})}),(0,r.jsx)(n.td,{children:"Type system tracks which functions have side effects"})]})]})]})}),(0,r.jsxs)(c,{children:[(0,r.jsx)(d,{kind:"bad",children:(0,r.jsx)(t,{file:"eager.go",children:`// \u{274C} Eager - executes immediately
func getTimestamp() time.Time {
  return time.Now()  // Runs NOW
}

// Hard to test
func processData() Result {
  timestamp := getTimestamp()  // Can't control
  return process(timestamp)
}
`})}),(0,r.jsx)(d,{kind:"good",children:(0,r.jsx)(t,{file:"lazy.go",children:`// \u{2705} Lazy with IO - describes computation
func getTimestamp() io.IO[time.Time] {
  return io.Now  // Returns description
}

// Easy to test
func processData() io.IO[Result] {
  return io.Chain(func(t time.Time) io.IO[Result] {
      return io.Of(process(t))
  })(getTimestamp())
}

result := processData()()  // Execute when ready
`})})]})]}),"\n",(0,r.jsxs)(a,{id:"api",number:"02",title:"Core",titleAccent:"API",children:[(0,r.jsx)(n.h3,{id:"constructors",children:"Constructors"}),(0,r.jsx)(i,{children:(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Function"}),(0,r.jsx)(n.th,{children:"Signature"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"Of"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"func Of[A any](value A) IO[A]"})}),(0,r.jsx)(n.td,{children:"Wrap pure value in IO"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"FromImpure"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"func FromImpure(f func()) IO[unit.Unit]"})}),(0,r.jsx)(n.td,{children:"Wrap side effect"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"Now"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"IO[time.Time]"})}),(0,r.jsx)(n.td,{children:"Current time"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"UnixTime"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"IO[int64]"})}),(0,r.jsx)(n.td,{children:"Current Unix timestamp"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"MonotonicTime"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"IO[int64]"})}),(0,r.jsx)(n.td,{children:"Monotonic time in nanoseconds"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"Random"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"IO[int]"})}),(0,r.jsx)(n.td,{children:"Random integer"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"RandomRange"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"func RandomRange(min, max int) IO[int]"})}),(0,r.jsx)(n.td,{children:"Random in range"})]})]})]})}),(0,r.jsx)(n.h3,{id:"transformations",children:"Transformations"}),(0,r.jsx)(i,{children:(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Function"}),(0,r.jsx)(n.th,{children:"Signature"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"Map"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"func Map[A, B any](f func(A) B) func(IO[A]) IO[B]"})}),(0,r.jsx)(n.td,{children:"Transform result"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"Chain"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"func Chain[A, B any](f func(A) IO[B]) func(IO[A]) IO[B]"})}),(0,r.jsx)(n.td,{children:"FlatMap - sequence operations"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"Flatten"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"func Flatten[A any](IO[IO[A]]) IO[A]"})}),(0,r.jsx)(n.td,{children:"Unwrap nested IO"})]})]})]})}),(0,r.jsx)(n.h3,{id:"combining",children:"Combining"}),(0,r.jsx)(i,{children:(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Function"}),(0,r.jsx)(n.th,{children:"Signature"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"Ap"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"func Ap[A, B any](fa IO[A]) func(IO[func(A) B]) IO[B]"})}),(0,r.jsx)(n.td,{children:"Apply function (parallel)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"ApSeq"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"func ApSeq[A, B any](fa IO[A]) func(IO[func(A) B]) IO[B]"})}),(0,r.jsx)(n.td,{children:"Apply function (sequential)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"SequenceArray"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"func SequenceArray[A any]([]IO[A]) IO[[]A]"})}),(0,r.jsx)(n.td,{children:"All-or-nothing (parallel)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"SequenceArraySeq"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"func SequenceArraySeq[A any]([]IO[A]) IO[[]A]"})}),(0,r.jsx)(n.td,{children:"All-or-nothing (sequential)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"TraverseArray"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"func TraverseArray[A, B any](f func(A) IO[B]) func([]A) IO[[]B]"})}),(0,r.jsx)(n.td,{children:"Map and sequence"})]})]})]})}),(0,r.jsx)(n.h3,{id:"time-operations",children:"Time Operations"}),(0,r.jsx)(i,{children:(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Function"}),(0,r.jsx)(n.th,{children:"Signature"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"Delay"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"func Delay(d time.Duration) func(IO[A]) IO[A]"})}),(0,r.jsx)(n.td,{children:"Defer execution by duration"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"After"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"func After(t time.Time) func(IO[A]) IO[A]"})}),(0,r.jsx)(n.td,{children:"Execute after specific time"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"WithDuration"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"func WithDuration[A any](IO[A]) IO[pair.Pair[A, time.Duration]]"})}),(0,r.jsx)(n.td,{children:"Measure execution time"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"WithTime"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"func WithTime[A any](IO[A]) IO[tuple.Tuple3[A, time.Time, time.Time]]"})}),(0,r.jsx)(n.td,{children:"Include start/end times"})]})]})]})}),(0,r.jsx)(n.h3,{id:"resource-management",children:"Resource Management"}),(0,r.jsx)(i,{children:(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Function"}),(0,r.jsx)(n.th,{children:"Signature"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"Bracket"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"func Bracket[R, A any](acquire IO[R], use func(R) IO[A], release func(R, IO[A]) IO[unit.Unit]) IO[A]"})}),(0,r.jsx)(n.td,{children:"Safe resource handling"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"WithResource"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"func WithResource[R, A any](acquire func(...) IO[R], release func(R) IO[unit.Unit]) func(func(R) IO[A]) IO[A]"})}),(0,r.jsx)(n.td,{children:"Resource pattern"})]})]})]})}),(0,r.jsx)(n.h3,{id:"utilities",children:"Utilities"}),(0,r.jsx)(i,{children:(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Function"}),(0,r.jsx)(n.th,{children:"Signature"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"ChainFirst"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"func ChainFirst[A, B any](f IO[B]) func(IO[A]) IO[A]"})}),(0,r.jsx)(n.td,{children:"Side effect, keep original value"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"Logger"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"func Logger() func(string) IO[unit.Unit]"})}),(0,r.jsx)(n.td,{children:"Log message"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"Printf"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"func Printf(format string) func(...any) IO[unit.Unit]"})}),(0,r.jsx)(n.td,{children:"Printf-style logging"})]})]})]})})]}),"\n",(0,r.jsxs)(a,{id:"examples",number:"03",title:"Usage",titleAccent:"Examples",children:[(0,r.jsx)(n.h3,{id:"basic-operations",children:"Basic Operations"}),(0,r.jsx)(t,{file:"basic.go",children:`package main

import (
  "fmt"
  "time"
  IO "github.com/IBM/fp-go/v2/io"
)

func main() {
  // Wrap pure value
  greeting := IO.Of("Hello, World!")
  result := greeting()  // "Hello, World!"
  
  // Current time (lazy)
  now := IO.Now
  timestamp := now()  // time.Time
  
  // Random number
  randomNum := IO.Random
  n := randomNum()  // int
  
  // Side effect
  printHello := IO.FromImpure(func() {
      fmt.Println("Hello!")
  })
  printHello()  // Prints "Hello!"
}
`}),(0,r.jsx)(n.h3,{id:"transformations-1",children:"Transformations"}),(0,r.jsx)(t,{file:"transformations.go",children:`package main

import (
  "fmt"
  "time"
  IO "github.com/IBM/fp-go/v2/io"
  F "github.com/IBM/fp-go/v2/function"
)

func main() {
  // Map: transform result
  doubled := F.Pipe1(
      IO.Of(21),
      IO.Map(func(n int) int { return n * 2 }),
  )
  result := doubled()  // 42
  
  // Chain: sequence operations
  formatted := F.Pipe2(
      IO.Now,
      IO.Chain(func(t time.Time) IO.IO[int64] {
          return IO.Of(t.Unix())
      }),
      IO.Chain(func(unix int64) IO.IO[string] {
          return IO.Of(fmt.Sprintf("Timestamp: %d", unix))
      }),
  )
  output := formatted()  // "Timestamp: 1234567890"
}
`}),(0,r.jsx)(n.h3,{id:"parallel-vs-sequential",children:"Parallel vs Sequential"}),(0,r.jsx)(t,{file:"parallel.go",children:`package main

import (
  "time"
  IO "github.com/IBM/fp-go/v2/io"
)

func main() {
  operations := []IO.IO[int]{
      IO.Delay(100*time.Millisecond)(IO.Of(1)),
      IO.Delay(100*time.Millisecond)(IO.Of(2)),
      IO.Delay(100*time.Millisecond)(IO.Of(3)),
  }
  
  // Parallel execution (~100ms total)
  parallel := IO.SequenceArray(operations)
  results := parallel()  // [1, 2, 3]
  
  // Sequential execution (~300ms total)
  sequential := IO.SequenceArraySeq(operations)
  results = sequential()  // [1, 2, 3]
}
`}),(0,r.jsx)(n.h3,{id:"resource-management-1",children:"Resource Management"}),(0,r.jsx)(t,{file:"resource.go",children:`package main

import (
  "os"
  IO "github.com/IBM/fp-go/v2/io"
)

func processFile(path string) IO.IO[[]byte] {
  return IO.Bracket(
      // Acquire resource
      func() IO.IO[*os.File] {
          return IO.Of(func() *os.File {
              f, _ := os.Open(path)
              return f
          }())
      },
      // Use resource
      func(f *os.File) IO.IO[[]byte] {
          return IO.Of(func() []byte {
              data, _ := io.ReadAll(f)
              return data
          }())
      },
      // Release resource (always runs)
      func(f *os.File, _ IO.IO[[]byte]) IO.IO[unit.Unit] {
          return IO.FromImpure(func() {
              f.Close()
          })
      },
  )
}

func main() {
  data := processFile("config.json")()
  // File is guaranteed to be closed
}
`}),(0,r.jsx)(n.h3,{id:"time-based-operations",children:"Time-Based Operations"}),(0,r.jsx)(t,{file:"time_ops.go",children:`package main

import (
  "fmt"
  "time"
  IO "github.com/IBM/fp-go/v2/io"
)

func main() {
  // Delay execution
  delayed := IO.Delay(time.Second)(IO.Of(42))
  result := delayed()  // Waits 1 second, returns 42
  
  // Measure execution time
  operation := IO.Delay(100 * time.Millisecond)(IO.Of(42))
  withTime := IO.WithDuration(operation)
  value, duration := withTime()
  fmt.Printf("Value: %d, Duration: %v
", value, duration)
  // Value: 42, Duration: ~100ms
}
`}),(0,r.jsx)(n.h3,{id:"logging-and-debugging",children:"Logging and Debugging"}),(0,r.jsx)(t,{file:"logging.go",children:`package main

import (
  IO "github.com/IBM/fp-go/v2/io"
  F "github.com/IBM/fp-go/v2/function"
)

func fetchUser(id string) IO.IO[User] {
  return F.Pipe2(
      IO.ChainFirst(IO.Logger()("Fetching user...")),
      fetchUserFromDB(id),
      IO.ChainFirst(IO.Printf("Fetched user: %+v")),
  )
}

func main() {
  user := fetchUser("123")()
  // Logs: "Fetching user..."
  // Logs: "Fetched user: {ID:123 Name:Alice}"
  // Returns: User{ID: "123", Name: "Alice"}
}
`})]}),"\n",(0,r.jsxs)(a,{id:"patterns",number:"04",title:"Common",titleAccent:"Patterns",children:[(0,r.jsx)(n.h3,{id:"pattern-1-api-calls",children:"Pattern 1: API Calls"}),(0,r.jsx)(t,{file:"api_calls.go",children:`package main

import (
  IO "github.com/IBM/fp-go/v2/io"
  F "github.com/IBM/fp-go/v2/function"
)

func fetchUserData(id string) IO.IO[UserData] {
  return F.Pipe2(
      fetchUser(id),  // IO.IO[User]
      IO.Chain(func(user User) IO.IO[UserData] {
          return IO.Map(func(posts []Post) UserData {
              return UserData{User: user, Posts: posts}
          })(fetchPosts(user.ID))
      }),
  )
}

// Execute when ready
data := fetchUserData("123")()
`}),(0,r.jsx)(n.h3,{id:"pattern-2-caching",children:"Pattern 2: Caching"}),(0,r.jsx)(t,{file:"caching.go",children:`package main

import (
  "sync"
  IO "github.com/IBM/fp-go/v2/io"
)

var cachedData IO.IO[Data]
var once sync.Once

func getCachedData() IO.IO[Data] {
  return func() Data {
      once.Do(func() {
          cachedData = expensiveComputation()
      })
      return cachedData()
  }
}

// First call computes, subsequent calls use cache
data1 := getCachedData()()
data2 := getCachedData()()  // Uses cached value
`}),(0,r.jsx)(n.h3,{id:"pattern-3-testing-with-mocks",children:"Pattern 3: Testing with Mocks"}),(0,r.jsx)(t,{file:"testing.go",children:`package main

import (
  "testing"
  "time"
  IO "github.com/IBM/fp-go/v2/io"
)

type Dependencies struct {
  GetTime   func() IO.IO[time.Time]
  FetchUser func(string) IO.IO[User]
}

func processUser(deps Dependencies, id string) IO.IO[Result] {
  return F.Pipe2(
      deps.GetTime(),
      IO.Chain(func(t time.Time) IO.IO[Result] {
          return IO.Map(func(u User) Result {
              return Result{User: u, Timestamp: t}
          })(deps.FetchUser(id))
      }),
  )
}

func TestProcessUser(t *testing.T) {
  // Mock dependencies
  deps := Dependencies{
      GetTime: func() IO.IO[time.Time] {
          return IO.Of(time.Date(2024, 1, 1, 0, 0, 0, 0, time.UTC))
      },
      FetchUser: func(id string) IO.IO[User] {
          return IO.Of(User{ID: id, Name: "Test User"})
      },
  }
  
  result := processUser(deps, "123")()
  
  assert.Equal(t, "Test User", result.User.Name)
  assert.Equal(t, 2024, result.Timestamp.Year())
}
`}),(0,r.jsx)(n.h3,{id:"when-to-use-io-vs-ioresult",children:"When to Use IO vs IOResult"}),(0,r.jsx)(i,{children:(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Use IO When"}),(0,r.jsx)(n.th,{children:"Use IOResult When"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Side effects that cannot fail"}),(0,r.jsx)(n.td,{children:"File operations that may fail"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Time-based operations"}),(0,r.jsx)(n.td,{children:"HTTP requests"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Random number generation"}),(0,r.jsx)(n.td,{children:"Database queries"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Logging and debugging"}),(0,r.jsx)(n.td,{children:"Any operation that can error"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Need lazy evaluation"}),(0,r.jsx)(n.td,{children:"Need error handling + lazy evaluation"})]})]})]})})]})]})}function h(e={}){let{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}function u(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},8453(e,n,i){i.d(n,{R:()=>c,x:()=>d});var t=i(6540);let r={},s=t.createContext(r);function c(e){let n=t.useContext(s);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);
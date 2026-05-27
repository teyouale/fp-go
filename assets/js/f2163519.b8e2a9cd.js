"use strict";(self.webpackChunkfp_go_docs=self.webpackChunkfp_go_docs||[]).push([["841"],{3272(e,t,r){r.r(t),r.d(t,{metadata:()=>n,default:()=>h,frontMatter:()=>s,contentTitle:()=>o,toc:()=>d,assets:()=>c});var n=JSON.parse('{"id":"v2/statereaderioeither","title":"StateReaderIOEither","description":"The ultimate monad transformer - combines State, Reader, IO, and Either for maximum expressiveness.","source":"@site/docs/v2/statereaderioeither.md","sourceDirName":"v2","slug":"/v2/statereaderioeither","permalink":"/fp-go/docs/v2/statereaderioeither","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":24,"frontMatter":{"title":"StateReaderIOEither","hide_title":true,"description":"The ultimate monad transformer - combines State, Reader, IO, and Either for maximum expressiveness.","sidebar_position":24},"sidebar":"apiSidebar","previous":{"title":"State","permalink":"/fp-go/docs/v2/state"},"next":{"title":"Lazy","permalink":"/fp-go/docs/v2/lazy"}}'),i=r(4848),a=r(8453);let s={title:"StateReaderIOEither",hide_title:!0,description:"The ultimate monad transformer - combines State, Reader, IO, and Either for maximum expressiveness.",sidebar_position:24},o,c={},d=[{value:"When to Use",id:"when-to-use",level:3},{value:"Constructors",id:"constructors",level:3},{value:"State Operations",id:"state-operations",level:3},{value:"Transformations",id:"transformations",level:3},{value:"Dependencies",id:"dependencies",level:3},{value:"Game State Example",id:"game-state-example",level:3},{value:"Session Management",id:"session-management",level:3},{value:"Transaction Processing",id:"transaction-processing",level:3},{value:"Pattern 1: Workflow Engine",id:"pattern-1-workflow-engine",level:3},{value:"Pattern 2: State Machine",id:"pattern-2-state-machine",level:3}];function l(e){let t={code:"code",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components},{ApiTable:r,Callout:n,CodeCard:s,PageHeader:o,Section:c}=t;return r||u("ApiTable",!0),n||u("Callout",!0),s||u("CodeCard",!0),o||u("PageHeader",!0),c||u("Section",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o,{eyebrow:"Reference \xb7 Core Type",title:"StateReaderIOEither",lede:"The ultimate monad transformer. StateReaderIOEither[S, C, E, A] combines stateful computations (State), dependency injection (Reader), lazy evaluation (IO), and error handling (Either).",meta:[{label:"Package",value:"github.com/IBM/fp-go/v2/statereaderioeither"},{label:"Type",value:"func(C) func(S) IO[Either[E, Pair[A, S]]]"}]}),"\n",(0,i.jsxs)(c,{id:"overview",number:"01",title:"Overview",children:[(0,i.jsx)(t.p,{children:"StateReaderIOEither combines all four powerful abstractions:"}),(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"State[S]"}),": Stateful computations"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Reader[C]"}),": Dependency injection"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"IO"}),": Lazy evaluation and side effects"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Either[E]"}),": Error handling"]}),"\n"]}),(0,i.jsx)(s,{file:"type_definition.go",children:`package statereaderioeither

// StateReaderIOEither combines all four abstractions
type StateReaderIOEither[S, C, E, A any] = 
  func(C) func(S) IO[Either[E, pair.Pair[A, S]]]
`}),(0,i.jsx)(t.h3,{id:"when-to-use",children:"When to Use"}),(0,i.jsx)(r,{children:(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Use Case"}),(0,i.jsx)(t.th,{children:"Example"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Complex application state"}),(0,i.jsx)(t.td,{children:"Games, simulations"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Stateful services"}),(0,i.jsx)(t.td,{children:"Session management, transactions"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Advanced scenarios"}),(0,i.jsx)(t.td,{children:"When you need all four capabilities"})]})]})]})}),(0,i.jsxs)(n,{type:"warn",children:[(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Complexity Warning"}),": Most applications don't need this level of complexity. Consider simpler alternatives first:"]}),(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Effect"})," (ReaderIOResult) for most applications"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"State"})," for pure stateful computations"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"ReaderIOEither"})," for effects with dependencies"]}),"\n"]})]})]}),"\n",(0,i.jsxs)(c,{id:"api",number:"02",title:"Core",titleAccent:"API",children:[(0,i.jsx)(t.h3,{id:"constructors",children:"Constructors"}),(0,i.jsx)(r,{children:(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Function"}),(0,i.jsx)(t.th,{children:"Signature"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"Of"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"func Of[S, C, E, A any](value A) StateReaderIOEither[S, C, E, A]"})}),(0,i.jsx)(t.td,{children:"Wrap pure value"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"Left"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"func Left[S, C, E, A any](err E) StateReaderIOEither[S, C, E, A]"})}),(0,i.jsx)(t.td,{children:"Create error"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"Right"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"func Right[S, C, E, A any](value A) StateReaderIOEither[S, C, E, A]"})}),(0,i.jsx)(t.td,{children:"Create success (alias for Of)"})]})]})]})}),(0,i.jsx)(t.h3,{id:"state-operations",children:"State Operations"}),(0,i.jsx)(r,{children:(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Function"}),(0,i.jsx)(t.th,{children:"Signature"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"Get"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"func Get[S, C, E any]() StateReaderIOEither[S, C, E, S]"})}),(0,i.jsx)(t.td,{children:"Get current state"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"Put"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"func Put[S, C, E any](s S) StateReaderIOEither[S, C, E, unit.Unit]"})}),(0,i.jsx)(t.td,{children:"Set new state"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"Modify"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"func Modify[S, C, E any](f func(S) S) StateReaderIOEither[S, C, E, unit.Unit]"})}),(0,i.jsx)(t.td,{children:"Modify state"})]})]})]})}),(0,i.jsx)(t.h3,{id:"transformations",children:"Transformations"}),(0,i.jsx)(r,{children:(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Function"}),(0,i.jsx)(t.th,{children:"Signature"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"Map"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"func Map[S, C, E, A, B any](f func(A) B) func(StateReaderIOEither[S, C, E, A]) StateReaderIOEither[S, C, E, B]"})}),(0,i.jsx)(t.td,{children:"Transform value"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"Chain"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"func Chain[S, C, E, A, B any](f func(A) StateReaderIOEither[S, C, E, B]) func(StateReaderIOEither[S, C, E, A]) StateReaderIOEither[S, C, E, B]"})}),(0,i.jsx)(t.td,{children:"Sequence operations"})]})]})]})}),(0,i.jsx)(t.h3,{id:"dependencies",children:"Dependencies"}),(0,i.jsx)(r,{children:(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Function"}),(0,i.jsx)(t.th,{children:"Signature"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"Ask"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"func Ask[S, C, E any]() StateReaderIOEither[S, C, E, C]"})}),(0,i.jsx)(t.td,{children:"Access dependencies"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"Asks"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"func Asks[S, C, E, A any](f func(C) A) StateReaderIOEither[S, C, E, A]"})}),(0,i.jsx)(t.td,{children:"Access and transform"})]})]})]})})]}),"\n",(0,i.jsxs)(c,{id:"examples",number:"03",title:"Usage",titleAccent:"Examples",children:[(0,i.jsx)(t.h3,{id:"game-state-example",children:"Game State Example"}),(0,i.jsx)(s,{file:"game.go",children:`package main

import (
  "fmt"
  SRIE "github.com/IBM/fp-go/v2/statereaderioeither"
  F "github.com/IBM/fp-go/v2/function"
)

type GameState struct {
  Score int
  Lives int
  Level int
}

type Dependencies struct {
  Logger *log.Logger
}

type GameError struct {
  Message string
}

func IncreaseScore(points int) SRIE.StateReaderIOEither[GameState, Dependencies, GameError, unit.Unit] {
  return func(deps Dependencies) func(state GameState) ioeither.IOEither[GameError, pair.Pair[unit.Unit, GameState]] {
      return func(s GameState) ioeither.IOEither[GameError, pair.Pair[unit.Unit, GameState]] {
          return ioeither.TryCatch(func() (pair.Pair[unit.Unit, GameState], GameError) {
              newState := s
              newState.Score += points
              deps.Logger.Printf("Score increased by %d", points)
              return pair.MakePair(unit.VOID, newState), GameError{}
          })
      }
  }
}

func LoseLife() SRIE.StateReaderIOEither[GameState, Dependencies, GameError, bool] {
  return func(deps Dependencies) func(state GameState) ioeither.IOEither[GameError, pair.Pair[bool, GameState]] {
      return func(s GameState) ioeither.IOEither[GameError, pair.Pair[bool, GameState]] {
          return ioeither.TryCatch(func() (pair.Pair[bool, GameState], GameError) {
              if s.Lives <= 0 {
                  return pair.MakePair(false, s), GameError{Message: "Game Over"}
              }
              newState := s
              newState.Lives--
              deps.Logger.Printf("Life lost. Lives remaining: %d", newState.Lives)
              return pair.MakePair(true, newState), GameError{}
          })
      }
  }
}

func main() {
  deps := Dependencies{Logger: log.New(os.Stdout, "", 0)}
  initialState := GameState{Score: 0, Lives: 3, Level: 1}
  
  game := F.Pipe2(
      IncreaseScore(100),
      SRIE.Chain(func(_ unit.Unit) SRIE.StateReaderIOEither[GameState, Dependencies, GameError, bool] {
          return LoseLife()
      }),
  )
  
  result := game(deps)(initialState)()
  fmt.Printf("%+v
", result)
}
`}),(0,i.jsx)(t.h3,{id:"session-management",children:"Session Management"}),(0,i.jsx)(s,{file:"session.go",children:`package main

import (
  SRIE "github.com/IBM/fp-go/v2/statereaderioeither"
)

type SessionState struct {
  UserID    string
  Token     string
  ExpiresAt time.Time
}

type AppDeps struct {
  DB    *sql.DB
  Cache *Cache
}

type SessionError struct {
  Code    int
  Message string
}

func ValidateSession() SRIE.StateReaderIOEither[SessionState, AppDeps, SessionError, bool] {
  return func(deps AppDeps) func(state SessionState) ioeither.IOEither[SessionError, pair.Pair[bool, SessionState]] {
      return func(s SessionState) ioeither.IOEither[SessionError, pair.Pair[bool, SessionState]] {
          return ioeither.TryCatch(func() (pair.Pair[bool, SessionState], SessionError) {
              if time.Now().After(s.ExpiresAt) {
                  return pair.MakePair(false, s), SessionError{
                      Code:    401,
                      Message: "Session expired",
                  }
              }
              return pair.MakePair(true, s), SessionError{}
          })
      }
  }
}

func RefreshSession() SRIE.StateReaderIOEither[SessionState, AppDeps, SessionError, unit.Unit] {
  return func(deps AppDeps) func(state SessionState) ioeither.IOEither[SessionError, pair.Pair[unit.Unit, SessionState]] {
      return func(s SessionState) ioeither.IOEither[SessionError, pair.Pair[unit.Unit, SessionState]] {
          return ioeither.TryCatch(func() (pair.Pair[unit.Unit, SessionState], SessionError) {
              newState := s
              newState.ExpiresAt = time.Now().Add(30 * time.Minute)
              
              // Update in cache
              deps.Cache.Set(s.UserID, newState)
              
              return pair.MakePair(unit.VOID, newState), SessionError{}
          })
      }
  }
}
`}),(0,i.jsx)(t.h3,{id:"transaction-processing",children:"Transaction Processing"}),(0,i.jsx)(s,{file:"transaction.go",children:`package main

import (
  SRIE "github.com/IBM/fp-go/v2/statereaderioeither"
  F "github.com/IBM/fp-go/v2/function"
)

type TransactionState struct {
  Balance float64
  History []Transaction
}

type BankDeps struct {
  DB     *sql.DB
  Logger *log.Logger
}

type BankError struct {
  Code    string
  Message string
}

func Debit(amount float64) SRIE.StateReaderIOEither[TransactionState, BankDeps, BankError, unit.Unit] {
  return func(deps BankDeps) func(state TransactionState) ioeither.IOEither[BankError, pair.Pair[unit.Unit, TransactionState]] {
      return func(s TransactionState) ioeither.IOEither[BankError, pair.Pair[unit.Unit, TransactionState]] {
          return ioeither.TryCatch(func() (pair.Pair[unit.Unit, TransactionState], BankError) {
              if s.Balance < amount {
                  return pair.MakePair(unit.VOID, s), BankError{
                      Code:    "INSUFFICIENT_FUNDS",
                      Message: "Insufficient balance",
                  }
              }
              
              newState := s
              newState.Balance -= amount
              newState.History = append(newState.History, Transaction{
                  Type:   "DEBIT",
                  Amount: amount,
                  Time:   time.Now(),
              })
              
              deps.Logger.Printf("Debited: $%.2f", amount)
              return pair.MakePair(unit.VOID, newState), BankError{}
          })
      }
  }
}

func Credit(amount float64) SRIE.StateReaderIOEither[TransactionState, BankDeps, BankError, unit.Unit] {
  return func(deps BankDeps) func(state TransactionState) ioeither.IOEither[BankError, pair.Pair[unit.Unit, TransactionState]] {
      return func(s TransactionState) ioeither.IOEither[BankError, pair.Pair[unit.Unit, TransactionState]] {
          return ioeither.TryCatch(func() (pair.Pair[unit.Unit, TransactionState], BankError) {
              newState := s
              newState.Balance += amount
              newState.History = append(newState.History, Transaction{
                  Type:   "CREDIT",
                  Amount: amount,
                  Time:   time.Now(),
              })
              
              deps.Logger.Printf("Credited: $%.2f", amount)
              return pair.MakePair(unit.VOID, newState), BankError{}
          })
      }
  }
}

func Transfer(amount float64) SRIE.StateReaderIOEither[TransactionState, BankDeps, BankError, unit.Unit] {
  return F.Pipe2(
      Debit(amount),
      SRIE.Chain(func(_ unit.Unit) SRIE.StateReaderIOEither[TransactionState, BankDeps, BankError, unit.Unit] {
          return Credit(amount)
      }),
  )
}
`})]}),"\n",(0,i.jsxs)(c,{id:"patterns",number:"04",title:"Common",titleAccent:"Patterns",children:[(0,i.jsx)(t.h3,{id:"pattern-1-workflow-engine",children:"Pattern 1: Workflow Engine"}),(0,i.jsx)(s,{file:"workflow.go",children:`package main

import (
  SRIE "github.com/IBM/fp-go/v2/statereaderioeither"
)

type WorkflowState struct {
  CurrentStep int
  Data        map[string]any
  Completed   bool
}

type WorkflowDeps struct {
  DB     *sql.DB
  Logger *log.Logger
}

type WorkflowError struct {
  Step    int
  Message string
}

func ExecuteStep(step int) SRIE.StateReaderIOEither[WorkflowState, WorkflowDeps, WorkflowError, unit.Unit] {
  return func(deps WorkflowDeps) func(state WorkflowState) ioeither.IOEither[WorkflowError, pair.Pair[unit.Unit, WorkflowState]] {
      return func(s WorkflowState) ioeither.IOEither[WorkflowError, pair.Pair[unit.Unit, WorkflowState]] {
          return ioeither.TryCatch(func() (pair.Pair[unit.Unit, WorkflowState], WorkflowError) {
              deps.Logger.Printf("Executing step %d", step)
              
              newState := s
              newState.CurrentStep = step
              
              // Execute step logic
              // ...
              
              return pair.MakePair(unit.VOID, newState), WorkflowError{}
          })
      }
  }
}
`}),(0,i.jsx)(t.h3,{id:"pattern-2-state-machine",children:"Pattern 2: State Machine"}),(0,i.jsx)(s,{file:"state_machine.go",children:`package main

import (
  SRIE "github.com/IBM/fp-go/v2/statereaderioeither"
)

type MachineState struct {
  Current string
  History []string
}

type MachineDeps struct {
  Logger *log.Logger
}

type MachineError struct {
  From    string
  To      string
  Message string
}

func Transition(to string) SRIE.StateReaderIOEither[MachineState, MachineDeps, MachineError, unit.Unit] {
  return func(deps MachineDeps) func(state MachineState) ioeither.IOEither[MachineError, pair.Pair[unit.Unit, MachineState]] {
      return func(s MachineState) ioeither.IOEither[MachineError, pair.Pair[unit.Unit, MachineState]] {
          return ioeither.TryCatch(func() (pair.Pair[unit.Unit, MachineState], MachineError) {
              // Validate transition
              if !isValidTransition(s.Current, to) {
                  return pair.MakePair(unit.VOID, s), MachineError{
                      From:    s.Current,
                      To:      to,
                      Message: "Invalid transition",
                  }
              }
              
              newState := s
              newState.History = append(newState.History, s.Current)
              newState.Current = to
              
              deps.Logger.Printf("Transitioned: %s -> %s", s.Current, to)
              return pair.MakePair(unit.VOID, newState), MachineError{}
          })
      }
  }
}
`})]}),"\n",(0,i.jsxs)(n,{type:"info",children:[(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"When to Use"}),": StateReaderIOEither is powerful but complex. Use it only when you truly need:"]}),(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Stateful computations"})," that can't be avoided"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Dependency injection"})," for testability"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Lazy evaluation"})," for control flow"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Error handling"})," with specific error types"]}),"\n"]}),(0,i.jsxs)(t.p,{children:["For most cases, ",(0,i.jsx)(t.strong,{children:"Effect"})," (ReaderIOResult) is sufficient and simpler."]})]})]})}function h(e={}){let{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}function u(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},8453(e,t,r){r.d(t,{R:()=>s,x:()=>o});var n=r(6540);let i={},a=n.createContext(i);function s(e){let t=n.useContext(a);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);
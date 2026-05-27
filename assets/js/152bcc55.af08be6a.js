"use strict";(self.webpackChunkfp_go_docs=self.webpackChunkfp_go_docs||[]).push([["1178"],{4787(e,r,t){t.r(r),t.d(r,{metadata:()=>i,default:()=>l,frontMatter:()=>s,contentTitle:()=>c,toc:()=>o,assets:()=>a});var i=JSON.parse('{"id":"v2/readereither","title":"ReaderEither","description":"Dependency injection with custom error handling - Reader + Either without IO.","source":"@site/docs/v2/readereither.md","sourceDirName":"v2","slug":"/v2/readereither","permalink":"/fp-go/docs/v2/readereither","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":18,"frontMatter":{"title":"ReaderEither","hide_title":true,"description":"Dependency injection with custom error handling - Reader + Either without IO.","sidebar_position":18},"sidebar":"apiSidebar","previous":{"title":"Reader","permalink":"/fp-go/docs/v2/reader"},"next":{"title":"ReaderIO","permalink":"/fp-go/docs/v2/readerio"}}'),n=t(4848),d=t(8453);let s={title:"ReaderEither",hide_title:!0,description:"Dependency injection with custom error handling - Reader + Either without IO.",sidebar_position:18},c,a={},o=[{value:"Constructors",id:"constructors",level:3},{value:"Transformations",id:"transformations",level:3},{value:"Basic Usage",id:"basic-usage",level:3}];function h(e){let r={code:"code",h3:"h3",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...e.components},{ApiTable:t,CodeCard:i,PageHeader:s,Section:c}=r;return t||u("ApiTable",!0),i||u("CodeCard",!0),s||u("PageHeader",!0),c||u("Section",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s,{eyebrow:"Reference \xb7 Core Type",title:"ReaderEither",lede:"Combine dependency injection (Reader) with custom error handling (Either). ReaderEither[C, E, A] for pure computations with dependencies and custom errors.",meta:[{label:"Package",value:"github.com/IBM/fp-go/v2/readereither"},{label:"Type",value:"Monad (func(C) Either[E, A])"}]}),"\n",(0,n.jsx)(c,{id:"overview",number:"01",title:"Overview",children:(0,n.jsx)(i,{file:"type_definition.go",children:`package readereither

// ReaderEither combines Reader and Either
type ReaderEither[C, E, A any] = Reader[C, Either[E, A]]
// Which expands to: func(C) Either[E, A]
`})}),"\n",(0,n.jsxs)(c,{id:"api",number:"02",title:"Core",titleAccent:"API",children:[(0,n.jsx)(r.h3,{id:"constructors",children:"Constructors"}),(0,n.jsx)(t,{children:(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Function"}),(0,n.jsx)(r.th,{children:"Signature"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"Right"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"func Right[C, E, A any](value A) ReaderEither[C, E, A]"})}),(0,n.jsx)(r.td,{children:"Create successful value"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"Left"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"func Left[C, E, A any](err E) ReaderEither[C, E, A]"})}),(0,n.jsx)(r.td,{children:"Create error value"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"Of"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"func Of[C, E, A any](value A) ReaderEither[C, E, A]"})}),(0,n.jsx)(r.td,{children:"Alias for Right"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"Ask"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"func Ask[C, E any]() ReaderEither[C, E, C]"})}),(0,n.jsx)(r.td,{children:"Access context"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"Asks"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"func Asks[C, E, A any](f func(C) A) ReaderEither[C, E, A]"})}),(0,n.jsx)(r.td,{children:"Access and transform context"})]})]})]})}),(0,n.jsx)(r.h3,{id:"transformations",children:"Transformations"}),(0,n.jsx)(t,{children:(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Function"}),(0,n.jsx)(r.th,{children:"Signature"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"Map"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"func Map[C, E, A, B any](f func(A) B) func(ReaderEither[C, E, A]) ReaderEither[C, E, B]"})}),(0,n.jsx)(r.td,{children:"Transform success value"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"MapLeft"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"func MapLeft[C, A, E1, E2 any](f func(E1) E2) func(ReaderEither[C, E1, A]) ReaderEither[C, E2, A]"})}),(0,n.jsx)(r.td,{children:"Transform error"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"Chain"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"func Chain[C, E, A, B any](f func(A) ReaderEither[C, E, B]) func(ReaderEither[C, E, A]) ReaderEither[C, E, B]"})}),(0,n.jsx)(r.td,{children:"Sequence operations"})]})]})]})})]}),"\n",(0,n.jsxs)(c,{id:"examples",number:"03",title:"Usage",titleAccent:"Examples",children:[(0,n.jsx)(r.h3,{id:"basic-usage",children:"Basic Usage"}),(0,n.jsx)(i,{file:"basic.go",children:`package main

import (
  RE "github.com/IBM/fp-go/v2/readereither"
)

type Config struct {
  MaxRetries int
  Timeout    time.Duration
}

type ValidationError struct {
  Field   string
  Message string
}

func validateRetries() RE.ReaderEither[Config, ValidationError, int] {
  return RE.Asks(func(cfg Config) either.Either[ValidationError, int] {
      if cfg.MaxRetries < 1 {
          return either.Left[int](ValidationError{
              Field:   "maxRetries",
              Message: "must be at least 1",
          })
      }
      return either.Right[ValidationError](cfg.MaxRetries)
  })
}

func main() {
  cfg := Config{MaxRetries: 3, Timeout: time.Second}
  result := validateRetries()(cfg)
  // Either[ValidationError, int]
}
`})]})]})}function l(e={}){let{wrapper:r}={...(0,d.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}function u(e,r){throw Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},8453(e,r,t){t.d(r,{R:()=>s,x:()=>c});var i=t(6540);let n={},d=i.createContext(n);function s(e){let r=i.useContext(d);return i.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),i.createElement(d.Provider,{value:r},e.children)}}}]);
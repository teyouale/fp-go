"use strict";(self.webpackChunkfp_go_docs=self.webpackChunkfp_go_docs||[]).push([["5840"],{4619(e,r,t){t.r(r),t.d(r,{metadata:()=>a,default:()=>d,frontMatter:()=>l,contentTitle:()=>n,toc:()=>c,assets:()=>o});var a=JSON.parse('{"id":"v2/collections/array-eq","title":"Array - Equality","description":"Equality checking for arrays using the Eq type class.","source":"@site/docs/v2/collections/array-eq.md","sourceDirName":"v2/collections","slug":"/v2/collections/array-eq","permalink":"/fp-go/docs/v2/collections/array-eq","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":8,"frontMatter":{"title":"Array - Equality","hide_title":true,"description":"Equality checking for arrays using the Eq type class.","sidebar_position":8},"sidebar":"apiSidebar","previous":{"title":"Array - Applicative","permalink":"/fp-go/docs/v2/collections/array-ap"},"next":{"title":"Array - Find","permalink":"/fp-go/docs/v2/collections/array-find"}}'),i=t(4848),s=t(8453);let l={title:"Array - Equality",hide_title:!0,description:"Equality checking for arrays using the Eq type class.",sidebar_position:8},n,o={},c=[{value:"Basic Equality",id:"basic-equality",level:3},{value:"Custom Equality",id:"custom-equality",level:3},{value:"String Arrays",id:"string-arrays",level:3}];function u(e){let r={code:"code",h3:"h3",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components},{ApiTable:t,CodeCard:a,PageHeader:l,Section:n}=r;return t||y("ApiTable",!0),a||y("CodeCard",!0),l||y("PageHeader",!0),n||y("Section",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(l,{eyebrow:"Reference \xb7 Collections",title:"Array",titleAccent:"Equality",lede:"Equality checking for arrays using the Eq type class. Compare arrays element-wise with custom equality functions.",meta:[{label:"Package",value:"github.com/IBM/fp-go/v2/array"},{label:"Type Class",value:"Eq"}]}),"\n",(0,i.jsx)(n,{id:"api",number:"01",title:"Core",titleAccent:"API",children:(0,i.jsx)(t,{children:(0,i.jsxs)(r.table,{children:[(0,i.jsx)(r.thead,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.th,{children:"Function"}),(0,i.jsx)(r.th,{children:"Signature"}),(0,i.jsx)(r.th,{children:"Description"})]})}),(0,i.jsx)(r.tbody,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"Eq"})}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"func Eq[A any](eq Eq[A]) Eq[[]A]"})}),(0,i.jsx)(r.td,{children:"Create array equality from element equality"})]})})]})})}),"\n",(0,i.jsxs)(n,{id:"examples",number:"02",title:"Usage",titleAccent:"Examples",children:[(0,i.jsx)(r.h3,{id:"basic-equality",children:"Basic Equality"}),(0,i.jsx)(a,{file:"basic.go",children:`import (
  A "github.com/IBM/fp-go/v2/array"
  E "github.com/IBM/fp-go/v2/eq"
  N "github.com/IBM/fp-go/v2/number"
)

// Create array equality from element equality
arrayEq := A.Eq(N.Eq)

arr1 := []int{1, 2, 3}
arr2 := []int{1, 2, 3}
arr3 := []int{1, 2, 4}

arrayEq.Equals(arr1, arr2)  // true
arrayEq.Equals(arr1, arr3)  // false
`}),(0,i.jsx)(r.h3,{id:"custom-equality",children:"Custom Equality"}),(0,i.jsx)(a,{file:"custom.go",children:`type User struct {
  ID   int
  Name string
}

// Compare by ID only
userEq := E.FromEquals(func(a, b User) bool {
  return a.ID == b.ID
})

arrayUserEq := A.Eq(userEq)

users1 := []User{{ID: 1, Name: "Alice"}}
users2 := []User{{ID: 1, Name: "Alice Updated"}}

arrayUserEq.Equals(users1, users2)  // true (same ID)
`}),(0,i.jsx)(r.h3,{id:"string-arrays",children:"String Arrays"}),(0,i.jsx)(a,{file:"strings.go",children:`import S "github.com/IBM/fp-go/v2/string"

arrayStrEq := A.Eq(S.Eq)

arr1 := []string{"hello", "world"}
arr2 := []string{"hello", "world"}
arr3 := []string{"hello", "go"}

arrayStrEq.Equals(arr1, arr2)  // true
arrayStrEq.Equals(arr1, arr3)  // false
`})]})]})}function d(e={}){let{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}function y(e,r){throw Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},8453(e,r,t){t.d(r,{R:()=>l,x:()=>n});var a=t(6540);let i={},s=a.createContext(i);function l(e){let r=a.useContext(s);return a.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function n(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),a.createElement(s.Provider,{value:r},e.children)}}}]);
"use strict";(self.webpackChunkfp_go_docs=self.webpackChunkfp_go_docs||[]).push([["6828"],{997(e,n,i){i.r(n),i.d(n,{metadata:()=>t,default:()=>p,frontMatter:()=>a,contentTitle:()=>o,toc:()=>c,assets:()=>l});var t=JSON.parse('{"id":"v2/collections/record-chain","title":"Record - Chain","description":"FlatMap operations for maps - transform values to maps and flatten the result.","source":"@site/docs/v2/collections/record-chain.md","sourceDirName":"v2/collections","slug":"/v2/collections/record-chain","permalink":"/fp-go/docs/v2/collections/record-chain","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":16,"frontMatter":{"title":"Record - Chain","hide_title":true,"description":"FlatMap operations for maps - transform values to maps and flatten the result.","sidebar_position":16},"sidebar":"apiSidebar","previous":{"title":"Record - Applicative","permalink":"/fp-go/docs/v2/collections/record-ap"},"next":{"title":"Record - Conversion","permalink":"/fp-go/docs/v2/collections/record-conversion"}}'),r=i(4848),s=i(8453);let a={title:"Record - Chain",hide_title:!0,description:"FlatMap operations for maps - transform values to maps and flatten the result.",sidebar_position:16},o,l={},c=[{value:"Chain - Basic",id:"chain---basic",level:3},{value:"ChainWithIndex",id:"chainwithindex",level:3},{value:"Expanding Configuration",id:"expanding-configuration",level:3},{value:"Dependency Resolution",id:"dependency-resolution",level:3},{value:"Tag Expansion",id:"tag-expansion",level:3},{value:"Nested Data Flattening",id:"nested-data-flattening",level:3},{value:"Permission Expansion",id:"permission-expansion",level:3}];function d(e){let n={code:"code",h3:"h3",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components},{ApiTable:i,Callout:t,CodeCard:a,PageHeader:o,Section:l}=n;return i||g("ApiTable",!0),t||g("Callout",!0),a||g("CodeCard",!0),o||g("PageHeader",!0),l||g("Section",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o,{eyebrow:"Reference \xb7 Collections",title:"Record",titleAccent:"Chain",lede:"FlatMap operations for maps. Transform map values into new maps and flatten the result into a single map.",meta:[{label:"Package",value:"github.com/IBM/fp-go/v2/record"},{label:"Operations",value:"Chain, ChainWithIndex"}]}),"\n",(0,r.jsx)(l,{id:"api",number:"01",title:"Core",titleAccent:"API",children:(0,r.jsx)(i,{children:(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Function"}),(0,r.jsx)(n.th,{children:"Signature"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"Chain"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"func Chain[K comparable, A, B any](Monoid[K, B]) func(func(A) map[K]B) func(map[K]A) map[K]B"})}),(0,r.jsx)(n.td,{children:"Transform and flatten"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"ChainWithIndex"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"func ChainWithIndex[K comparable, A, B any](Monoid[K, B]) func(func(K, A) map[K]B) func(map[K]A) map[K]B"})}),(0,r.jsx)(n.td,{children:"Chain with keys"})]})]})]})})}),"\n",(0,r.jsxs)(l,{id:"examples",number:"02",title:"Usage",titleAccent:"Examples",children:[(0,r.jsx)(n.h3,{id:"chain---basic",children:"Chain - Basic"}),(0,r.jsx)(a,{file:"chain.go",children:`import (
  R "github.com/IBM/fp-go/v2/record"
  M "github.com/IBM/fp-go/v2/monoid"
  F "github.com/IBM/fp-go/v2/function"
)

m := map[string]int{"a": 1, "b": 2}

// Expand each entry into multiple entries
expanded := F.Pipe2(
  m,
  R.Chain(M.MergeMonoid[string, int]())(func(v int) map[string]int {
      return map[string]int{
          fmt.Sprintf("val_%d", v):    v,
          fmt.Sprintf("double_%d", v): v * 2,
      }
  }),
)
// map[string]int{
//   "val_1": 1, "double_1": 2,
//   "val_2": 2, "double_2": 4,
// }
`}),(0,r.jsx)(n.h3,{id:"chainwithindex",children:"ChainWithIndex"}),(0,r.jsx)(a,{file:"chain_index.go",children:`m := map[string]int{"a": 1, "b": 2}

// Use keys in expansion
result := F.Pipe2(
  m,
  R.ChainWithIndex(M.MergeMonoid[string, int]())(
      func(k string, v int) map[string]int {
          return map[string]int{
              k + "_original": v,
              k + "_doubled":  v * 2,
          }
      },
  ),
)
// map[string]int{
//   "a_original": 1, "a_doubled": 2,
//   "b_original": 2, "b_doubled": 4,
// }
`}),(0,r.jsx)(n.h3,{id:"expanding-configuration",children:"Expanding Configuration"}),(0,r.jsx)(a,{file:"config.go",children:`type Config struct {
  Replicas int
  Prefix   string
}

configs := map[string]Config{
  "web": {Replicas: 3, Prefix: "web"},
  "api": {Replicas: 2, Prefix: "api"},
}

// Generate instance names
instances := F.Pipe2(
  configs,
  R.ChainWithIndex(M.MergeMonoid[string, string]())(
      func(service string, cfg Config) map[string]string {
          result := make(map[string]string)
          for i := 0; i < cfg.Replicas; i++ {
              key := fmt.Sprintf("%s-%d", service, i)
              result[key] = fmt.Sprintf("%s-%d.example.com", cfg.Prefix, i)
          }
          return result
      },
  ),
)
// map[string]string{
//   "web-0": "web-0.example.com",
//   "web-1": "web-1.example.com",
//   "web-2": "web-2.example.com",
//   "api-0": "api-0.example.com",
//   "api-1": "api-1.example.com",
// }
`}),(0,r.jsx)(n.h3,{id:"dependency-resolution",children:"Dependency Resolution"}),(0,r.jsx)(a,{file:"deps.go",children:`type Package struct {
  Name         string
  Dependencies []string
}

packages := map[string]Package{
  "app": {
      Name:         "app",
      Dependencies: []string{"lib1", "lib2"},
  },
}

// Flatten dependencies
allDeps := F.Pipe2(
  packages,
  R.Chain(M.MergeMonoid[string, bool]())(
      func(pkg Package) map[string]bool {
          deps := make(map[string]bool)
          for _, dep := range pkg.Dependencies {
              deps[dep] = true
          }
          return deps
      },
  ),
)
// map[string]bool{"lib1": true, "lib2": true}
`}),(0,r.jsx)(n.h3,{id:"tag-expansion",children:"Tag Expansion"}),(0,r.jsx)(a,{file:"tags.go",children:`type Resource struct {
  Name string
  Tags []string
}

resources := map[string]Resource{
  "server1": {
      Name: "server1",
      Tags: []string{"prod", "web"},
  },
  "server2": {
      Name: "server2",
      Tags: []string{"prod", "api"},
  },
}

// Create tag index
tagIndex := F.Pipe2(
  resources,
  R.ChainWithIndex(M.MergeMonoid[string, []string]())(
      func(id string, res Resource) map[string][]string {
          result := make(map[string][]string)
          for _, tag := range res.Tags {
              result[tag] = []string{id}
          }
          return result
      },
  ),
)
// map[string][]string{
//   "prod": ["server1", "server2"],
//   "web": ["server1"],
//   "api": ["server2"],
// }
`})]}),"\n",(0,r.jsxs)(l,{id:"patterns",number:"03",title:"Common",titleAccent:"Patterns",children:[(0,r.jsx)(n.h3,{id:"nested-data-flattening",children:"Nested Data Flattening"}),(0,r.jsx)(a,{file:"flatten.go",children:`type Category struct {
  Name  string
  Items []string
}

categories := map[string]Category{
  "fruits": {
      Name:  "Fruits",
      Items: []string{"apple", "banana"},
  },
  "veggies": {
      Name:  "Vegetables",
      Items: []string{"carrot", "lettuce"},
  },
}

// Flatten to item -> category mapping
itemMap := F.Pipe2(
  categories,
  R.ChainWithIndex(M.MergeMonoid[string, string]())(
      func(catKey string, cat Category) map[string]string {
          result := make(map[string]string)
          for _, item := range cat.Items {
              result[item] = catKey
          }
          return result
      },
  ),
)
// map[string]string{
//   "apple": "fruits",
//   "banana": "fruits",
//   "carrot": "veggies",
//   "lettuce": "veggies",
// }
`}),(0,r.jsx)(n.h3,{id:"permission-expansion",children:"Permission Expansion"}),(0,r.jsx)(a,{file:"permissions.go",children:`type Role struct {
  Name        string
  Permissions []string
}

roles := map[string]Role{
  "admin": {
      Name:        "admin",
      Permissions: []string{"read", "write", "delete"},
  },
  "user": {
      Name:        "user",
      Permissions: []string{"read"},
  },
}

// Create permission -> roles mapping
permMap := F.Pipe2(
  roles,
  R.ChainWithIndex(M.MergeMonoid[string, []string]())(
      func(roleKey string, role Role) map[string][]string {
          result := make(map[string][]string)
          for _, perm := range role.Permissions {
              result[perm] = []string{roleKey}
          }
          return result
      },
  ),
)
// map[string][]string{
//   "read": ["admin", "user"],
//   "write": ["admin"],
//   "delete": ["admin"],
// }
`})]}),"\n",(0,r.jsx)(t,{type:"info",children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Monoid Strategy"}),": The monoid parameter determines how duplicate keys are handled when flattening. Use ",(0,r.jsx)(n.code,{children:"MergeMonoid"})," for last-wins, or custom monoids for other strategies like concatenation or summation."]})})]})}function p(e={}){let{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}function g(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},8453(e,n,i){i.d(n,{R:()=>a,x:()=>o});var t=i(6540);let r={},s=t.createContext(r);function a(e){let n=t.useContext(s);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);
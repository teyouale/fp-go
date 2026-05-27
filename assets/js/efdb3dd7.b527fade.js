"use strict";(self.webpackChunkfp_go_docs=self.webpackChunkfp_go_docs||[]).push([["5987"],{4917(e,n,s){s.r(n),s.d(n,{metadata:()=>r,default:()=>m,frontMatter:()=>t,contentTitle:()=>l,toc:()=>o,assets:()=>d});var r=JSON.parse('{"id":"v2/collections/record","title":"Record (Map)","description":"Functional operations for Go maps with immutable transformations and type-safe lookups.","source":"@site/docs/v2/collections/record.md","sourceDirName":"v2/collections","slug":"/v2/collections/record","permalink":"/fp-go/docs/v2/collections/record","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":11,"frontMatter":{"title":"Record (Map)","hide_title":true,"description":"Functional operations for Go maps with immutable transformations and type-safe lookups.","sidebar_position":11},"sidebar":"apiSidebar","previous":{"title":"NonEmpty Array","permalink":"/fp-go/docs/v2/collections/nonempty-array"},"next":{"title":"Record - Applicative","permalink":"/fp-go/docs/v2/collections/record-ap"}}'),i=s(4848),a=s(8453),c=s(5811);let t={title:"Record (Map)",hide_title:!0,description:"Functional operations for Go maps with immutable transformations and type-safe lookups.",sidebar_position:11},l,d={},o=[{value:"Creating Records",id:"creating-records",level:3},{value:"Lookup and Access",id:"lookup-and-access",level:3},{value:"Updating Records",id:"updating-records",level:3},{value:"Transformation",id:"transformation",level:3},{value:"Filtering",id:"filtering",level:3},{value:"FilterMap",id:"filtermap",level:3},{value:"Reduction",id:"reduction",level:3},{value:"Conversion",id:"conversion",level:3},{value:"Combining Records",id:"combining-records",level:3},{value:"Configuration Management",id:"configuration-management",level:3},{value:"Grouping Data",id:"grouping-data",level:3},{value:"Caching",id:"caching",level:3},{value:"Transform and Filter Chain",id:"transform-and-filter-chain",level:3},{value:"Merge Multiple Maps",id:"merge-multiple-maps",level:3},{value:"Checking Records",id:"checking-records",level:3}];function h(e){let n={code:"code",h3:"h3",hr:"hr",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(c.zY,{eyebrow:"Reference \xb7 Collections",title:"Record (Map)",lede:"Functional operations for Go maps. Treat maps as immutable data structures with type-safe lookups and transformations.",meta:[{label:"Package",value:"github.com/IBM/fp-go/v2/record"},{label:"Type",value:"map[K]V"}]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(c.wn,{num:"1",title:"Core API",children:(0,i.jsx)(c.vr,{children:(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Function"}),(0,i.jsx)(n.th,{children:"Signature"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"Empty"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"func Empty[K comparable, V any]() map[K]V"})}),(0,i.jsx)(n.td,{children:"Create empty map"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"Singleton"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"func Singleton[K comparable, V any](K, V) map[K]V"})}),(0,i.jsx)(n.td,{children:"Single entry map"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"FromEntries"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"func FromEntries[K comparable, V any]([]Tuple2[K, V]) map[K]V"})}),(0,i.jsx)(n.td,{children:"From key-value pairs"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"Lookup"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"func Lookup[V any](K) func(map[K]V) Option[V]"})}),(0,i.jsx)(n.td,{children:"Safe key access"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"Has"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"func Has[K comparable, V any](K, map[K]V) bool"})}),(0,i.jsx)(n.td,{children:"Check key exists"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"UpsertAt"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"func UpsertAt[K comparable, V any](K, V) func(map[K]V) map[K]V"})}),(0,i.jsx)(n.td,{children:"Add or update"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"DeleteAt"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"func DeleteAt[V any](K) func(map[K]V) map[K]V"})}),(0,i.jsx)(n.td,{children:"Remove entry"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"Map"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"func Map[K comparable, A, B any](func(A) B) func(map[K]A) map[K]B"})}),(0,i.jsx)(n.td,{children:"Transform values"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"MapWithIndex"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"func MapWithIndex[K comparable, A, B any](func(K, A) B) func(map[K]A) map[K]B"})}),(0,i.jsx)(n.td,{children:"Transform with keys"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"Filter"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"func Filter[K comparable, V any](func(V) bool) func(map[K]V) map[K]V"})}),(0,i.jsx)(n.td,{children:"Keep matching"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"FilterWithIndex"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"func FilterWithIndex[K comparable, V any](func(K, V) bool) func(map[K]V) map[K]V"})}),(0,i.jsx)(n.td,{children:"Filter with keys"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"FilterMap"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"func FilterMap[K comparable, A, B any](func(A) Option[B]) func(map[K]A) map[K]B"})}),(0,i.jsx)(n.td,{children:"Filter and transform"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"Reduce"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"func Reduce[K comparable, A, B any](func(B, A) B, B) func(map[K]A) B"})}),(0,i.jsx)(n.td,{children:"Fold to value"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"ReduceWithIndex"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"func ReduceWithIndex[K comparable, A, B any](func(K, B, A) B, B) func(map[K]A) B"})}),(0,i.jsx)(n.td,{children:"Reduce with keys"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"Keys"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"func Keys[K comparable, V any](map[K]V) []K"})}),(0,i.jsx)(n.td,{children:"Get all keys"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"Values"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"func Values[K comparable, V any](map[K]V) []V"})}),(0,i.jsx)(n.td,{children:"Get all values"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"ToEntries"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"func ToEntries[K comparable, V any](map[K]V) []Tuple2[K, V]"})}),(0,i.jsx)(n.td,{children:"To key-value pairs"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"Collect"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"func Collect[K comparable, A, B any](func(K, A) B) func(map[K]A) []B"})}),(0,i.jsx)(n.td,{children:"Transform to array"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"Merge"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"func Merge[K comparable, V any](map[K]V) func(map[K]V) map[K]V"})}),(0,i.jsx)(n.td,{children:"Combine maps"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"Union"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"func Union[K comparable, V any](Magma[V]) func(map[K]V) func(map[K]V) map[K]V"})}),(0,i.jsx)(n.td,{children:"Merge with function"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"IsEmpty"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"func IsEmpty[K comparable, V any](map[K]V) bool"})}),(0,i.jsx)(n.td,{children:"Check if empty"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"Size"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"func Size[K comparable, V any](map[K]V) int"})}),(0,i.jsx)(n.td,{children:"Get entry count"})]})]})]})})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsxs)(c.wn,{num:"2",title:"Usage Examples",children:[(0,i.jsx)(n.h3,{id:"creating-records",children:"Creating Records"}),(0,i.jsx)(c.av,{file:"create.go",children:`import (
  R "github.com/IBM/fp-go/v2/record"
  T "github.com/IBM/fp-go/v2/tuple"
)

// Empty map
empty := R.Empty[string, int]()
// map[string]int{}

// Single entry
single := R.Singleton("key", 42)
// map[string]int{"key": 42}

// From entries
entries := []T.Tuple2[string, int]{
  T.MakeTuple2("a", 1),
  T.MakeTuple2("b", 2),
  T.MakeTuple2("c", 3),
}
m := R.FromEntries(entries)
// map[string]int{"a": 1, "b": 2, "c": 3}
`}),(0,i.jsx)(n.h3,{id:"lookup-and-access",children:"Lookup and Access"}),(0,i.jsx)(c.av,{file:"lookup.go",children:`import (
  F "github.com/IBM/fp-go/v2/function"
  O "github.com/IBM/fp-go/v2/option"
)

m := map[string]int{"a": 1, "b": 2, "c": 3}

// Safe lookup - returns Option
value := F.Pipe2(
  m,
  R.Lookup[int]("b"),
)
// Some(2)

notFound := F.Pipe2(
  m,
  R.Lookup[int]("z"),
)
// None

// With default value
result := F.Pipe3(
  m,
  R.Lookup[int]("key"),
  O.GetOrElse(func() int { return 0 }),
)

// Check existence
R.Has("a", m)  // true
R.Has("z", m)  // false
`}),(0,i.jsx)(n.h3,{id:"updating-records",children:"Updating Records"}),(0,i.jsx)(c.av,{file:"update.go",children:`m := map[string]int{"a": 1, "b": 2}

// Add or update
updated := F.Pipe2(
  m,
  R.UpsertAt("c", 3),
)
// map[string]int{"a": 1, "b": 2, "c": 3}

// Replace existing
replaced := F.Pipe2(
  m,
  R.UpsertAt("a", 10),
)
// map[string]int{"a": 10, "b": 2}

// Remove entry
removed := F.Pipe2(
  m,
  R.DeleteAt[int]("b"),
)
// map[string]int{"a": 1}
`}),(0,i.jsx)(n.h3,{id:"transformation",children:"Transformation"}),(0,i.jsx)(c.av,{file:"transform.go",children:`m := map[string]int{"a": 1, "b": 2, "c": 3}

// Map values
doubled := F.Pipe2(
  m,
  R.Map(func(v int) int { return v * 2 }),
)
// map[string]int{"a": 2, "b": 4, "c": 6}

// Map with keys
labeled := F.Pipe2(
  m,
  R.MapWithIndex(func(k string, v int) string {
      return fmt.Sprintf("%s=%d", k, v)
  }),
)
// map[string]string{"a": "a=1", "b": "b=2", "c": "c=3"}
`}),(0,i.jsx)(n.h3,{id:"filtering",children:"Filtering"}),(0,i.jsx)(c.av,{file:"filter.go",children:`m := map[string]int{"a": 1, "b": 2, "c": 3, "d": 4}

// Filter by value
evens := F.Pipe2(
  m,
  R.Filter(func(v int) bool { return v%2 == 0 }),
)
// map[string]int{"b": 2, "d": 4}

// Filter with keys
filtered := F.Pipe2(
  m,
  R.FilterWithIndex(func(k string, v int) bool {
      return k != "a" && v > 1
  }),
)
// map[string]int{"b": 2, "c": 3, "d": 4}
`}),(0,i.jsx)(n.h3,{id:"filtermap",children:"FilterMap"}),(0,i.jsx)(c.av,{file:"filtermap.go",children:`m := map[string]string{
  "a": "123",
  "b": "abc",
  "c": "456",
}

// Parse numbers, skip invalid
numbers := F.Pipe2(
  m,
  R.FilterMap(func(s string) O.Option[int] {
      if n, err := strconv.Atoi(s); err == nil {
          return O.Some(n)
      }
      return O.None[int]()
  }),
)
// map[string]int{"a": 123, "c": 456}
`}),(0,i.jsx)(n.h3,{id:"reduction",children:"Reduction"}),(0,i.jsx)(c.av,{file:"reduce.go",children:`m := map[string]int{"a": 1, "b": 2, "c": 3}

// Sum all values
sum := F.Pipe2(
  m,
  R.Reduce(func(acc, v int) int { return acc + v }, 0),
)
// 6

// Build string with keys
str := F.Pipe2(
  m,
  R.ReduceWithIndex(func(k string, acc string, v int) string {
      return acc + fmt.Sprintf("%s:%d ", k, v)
  }, ""),
)
// "a:1 b:2 c:3 " (order may vary)
`}),(0,i.jsx)(n.h3,{id:"conversion",children:"Conversion"}),(0,i.jsx)(c.av,{file:"convert.go",children:`m := map[string]int{"a": 1, "b": 2, "c": 3}

// Get keys
keys := R.Keys(m)
// []string{"a", "b", "c"} (order may vary)

// Get values
values := R.Values(m)
// []int{1, 2, 3} (order may vary)

// To entries
entries := R.ToEntries(m)
// []Tuple2[string, int]{
//   {Head: "a", Tail: 1},
//   {Head: "b", Tail: 2},
//   {Head: "c", Tail: 3},
// }

// Collect to array
pairs := F.Pipe2(
  m,
  R.Collect(func(k string, v int) string {
      return fmt.Sprintf("%s=%d", k, v)
  }),
)
// []string{"a=1", "b=2", "c=3"} (order may vary)
`}),(0,i.jsx)(n.h3,{id:"combining-records",children:"Combining Records"}),(0,i.jsx)(c.av,{file:"combine.go",children:`m1 := map[string]int{"a": 1, "b": 2}
m2 := map[string]int{"b": 20, "c": 3}

// Merge - right wins
merged := F.Pipe2(
  m1,
  R.Merge(m2),
)
// map[string]int{"a": 1, "b": 20, "c": 3}

// Union with custom merge
import Mg "github.com/IBM/fp-go/v2/magma"

sumMagma := Mg.MakeMagma(func(x, y int) int { return x + y })

combined := F.Pipe2(
  m1,
  R.Union(sumMagma)(m2),
)
// map[string]int{"a": 1, "b": 22, "c": 3}
`})]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsxs)(c.wn,{num:"3",title:"Common Patterns",children:[(0,i.jsx)(n.h3,{id:"configuration-management",children:"Configuration Management"}),(0,i.jsx)(c.av,{file:"config.go",children:`type Config struct {
  Host    string
  Port    int
  Timeout int
}

defaults := map[string]Config{
  "dev":  {Host: "localhost", Port: 8080, Timeout: 30},
  "prod": {Host: "api.example.com", Port: 443, Timeout: 60},
}

// Get config with fallback
config := F.Pipe3(
  defaults,
  R.Lookup[Config]("staging"),
  O.GetOrElse(func() Config { return defaults["dev"] }),
)
`}),(0,i.jsx)(n.h3,{id:"grouping-data",children:"Grouping Data"}),(0,i.jsx)(c.av,{file:"grouping.go",children:`type User struct {
  ID   int
  Name string
  Role string
}

users := []User{
  {ID: 1, Name: "Alice", Role: "admin"},
  {ID: 2, Name: "Bob", Role: "user"},
  {ID: 3, Name: "Charlie", Role: "admin"},
}

// Group by role
import A "github.com/IBM/fp-go/v2/array"

byRole := F.Pipe2(
  users,
  A.Reduce(func(acc map[string][]User, u User) map[string][]User {
      acc[u.Role] = append(acc[u.Role], u)
      return acc
  }, map[string][]User{}),
)
// map[string][]User{
//   "admin": [{Alice}, {Charlie}],
//   "user": [{Bob}],
// }
`}),(0,i.jsx)(n.h3,{id:"caching",children:"Caching"}),(0,i.jsx)(c.av,{file:"cache.go",children:`type Cache map[string]interface{}

cache := R.Empty[string, interface{}]()

// Add to cache
cache = F.Pipe2(
  cache,
  R.UpsertAt("user:1", User{ID: 1, Name: "Alice"}),
)

// Lookup from cache
user := F.Pipe3(
  cache,
  R.Lookup[interface{}]("user:1"),
  O.Map(func(v interface{}) User { return v.(User) }),
  O.GetOrElse(func() User { return fetchUser(1) }),
)
`}),(0,i.jsx)(n.h3,{id:"transform-and-filter-chain",children:"Transform and Filter Chain"}),(0,i.jsx)(c.av,{file:"chain.go",children:`result := F.Pipe3(
  m,
  R.Map(transform),
  R.FilterWithIndex(predicate),
)
`}),(0,i.jsx)(n.h3,{id:"merge-multiple-maps",children:"Merge Multiple Maps"}),(0,i.jsx)(c.av,{file:"merge_multiple.go",children:`merged := F.Pipe3(
  map1,
  R.Merge(map2),
  R.Merge(map3),
)
`}),(0,i.jsx)(n.h3,{id:"checking-records",children:"Checking Records"}),(0,i.jsx)(c.av,{file:"check.go",children:`m := map[string]int{"a": 1, "b": 2}
empty := map[string]int{}

R.IsEmpty(m)      // false
R.IsEmpty(empty)  // true
R.IsNonEmpty(m)   // true
R.Size(m)         // 2
`})]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(c.Pq,{type:"warn",children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Map Iteration Order"}),": Go maps have undefined iteration order. Operations like ",(0,i.jsx)(n.code,{children:"Keys"}),", ",(0,i.jsx)(n.code,{children:"Values"}),", and ",(0,i.jsx)(n.code,{children:"ToEntries"})," may return elements in different orders. Use ",(0,i.jsx)(n.code,{children:"record-ord"})," for ordered operations."]})}),"\n",(0,i.jsx)(c.Pq,{type:"info",children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Immutability"}),": All record operations return new maps without modifying the original. This ensures referential transparency and makes code easier to reason about."]})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(c.is,{prev:{to:"/docs/v2/collections/sequence-traverse",title:"Sequence & Traverse"},next:{to:"/docs/v2/collections/record-ord",title:"Record Ordered"}})]})}function m(e={}){let{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},5811(e,n,s){s.d(n,{Pq:()=>_,eM:()=>F,hg:()=>R,_1:()=>K,av:()=>y,Gs:()=>k,vr:()=>M,x7:()=>p,bY:()=>V,wn:()=>j,zY:()=>m,ju:()=>x,BQ:()=>u,is:()=>w});var r=s(4848),i=s(6540);let a="codeTag_uQ6s",c="warn_PIJZ",t="benchNum_PicT",l="api_M0YO",d="pagerLink_hQ8Y",o="pagerLbl_CteO",h="pagerTtl_t0em";function m({eyebrow:e,title:n,titleAccent:s,lede:i,meta:a}){return(0,r.jsxs)("header",{className:"head_Sp2B",children:[(0,r.jsxs)("div",{className:"headLeft_aDUD",children:[e&&(0,r.jsx)("div",{className:"eyebrow__SSv",children:e}),(0,r.jsxs)("h1",{className:"headTitle_xWjG",children:[n,s?(0,r.jsxs)(r.Fragment,{children:[" ",(0,r.jsx)("em",{children:s})]}):null]}),i&&(0,r.jsx)("p",{className:"lede_Ltdj",children:i})]}),a&&a.length>0&&(0,r.jsx)("aside",{className:"headMeta_kmCF",children:a.map((e,n)=>(0,r.jsxs)("div",{className:"metaRow_drwK",children:[(0,r.jsx)("span",{className:"metaK_SNLg",children:e.label}),(0,r.jsx)("span",{className:"metaV_zAp5",children:e.value})]},n))})]})}function p({children:e}){return(0,r.jsx)("span",{className:"pill_Lzl6",children:e})}function x({children:e}){return(0,r.jsx)("div",{className:"tldr_mz3p",children:e})}function u({label:e,value:n,accent:s,unit:i,description:a,variant:c="default",prose:t}){return(0,r.jsxs)("div",{className:`tldrCard_nSap ${"up"===c?"up_ip1p":"down"===c?"down_x6We":""}`,children:[e&&(0,r.jsx)("div",{className:"tldrK_kP7m",children:e}),(0,r.jsxs)("div",{className:`tldrV_gUPe ${t?"tldrVProse_sV_2":""}`,children:[n,s?(0,r.jsx)("em",{children:s}):null,i?(0,r.jsx)("small",{children:i}):null]}),a&&(0,r.jsx)("div",{className:"tldrD_kfCX",children:a})]})}function j({id:e,number:n,title:s,titleAccent:i,tag:a,lede:c,children:t}){return(0,r.jsxs)("section",{className:"section_B_ST",children:[(0,r.jsxs)("div",{className:"sectionHead_oGCN",children:[(0,r.jsxs)("div",{className:"sectionHeadLeft_bfh9",children:[n&&(0,r.jsx)("span",{className:"sectionNum_qiYt",children:n}),(0,r.jsxs)("h2",{className:"sectionTitle__6nw",id:e,children:[s,i?(0,r.jsxs)(r.Fragment,{children:[" ",(0,r.jsx)("em",{children:i})]}):null]})]}),a&&(0,r.jsx)("span",{className:"sectionTag_se22",children:a})]}),c&&(0,r.jsx)("p",{className:"sectionLede_yuVk",children:c}),t]})}let f=({size:e=14,className:n})=>(0,r.jsx)("svg",{width:e,height:e,viewBox:"0 0 32 32",fill:"currentColor",className:n,"aria-hidden":"true",children:(0,r.jsx)("path",{d:"M13 24l-9-9 1.4-1.4L13 21.2 26.6 7.6 28 9z"})}),g=({size:e=14,className:n})=>(0,r.jsx)("svg",{width:e,height:e,viewBox:"0 0 32 32",fill:"currentColor",className:n,"aria-hidden":"true",children:(0,r.jsx)("path",{d:"M28 10v18H10V10h18m0-2H10a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2z"})}),v=({size:e=12,className:n})=>(0,r.jsx)("svg",{width:e,height:e,viewBox:"0 0 32 32",fill:"currentColor",className:n,"aria-hidden":"true",children:(0,r.jsx)("path",{d:"M18 6L16.6 7.4 24.2 15H4v2h20.2l-7.6 7.6L18 26l10-10z"})}),b=({size:e=12,className:n})=>(0,r.jsx)("svg",{width:e,height:e,viewBox:"0 0 32 32",fill:"currentColor",className:n,"aria-hidden":"true",children:(0,r.jsx)("path",{d:"M14 26l1.4-1.4L7.8 17H28v-2H7.8l7.6-7.6L14 6 4 16z"})});function y({file:e,status:n,copy:s=!0,children:t}){let l=(0,i.useRef)(null),[d,o]=(0,i.useState)(!1);return(0,r.jsxs)("div",{className:"codeCard_fiIG",children:[(0,r.jsxs)("div",{className:"codeBar_SZ78",children:[(0,r.jsx)("span",{className:"codeDot_JDOV"}),e&&(0,r.jsx)("span",{className:"codeFile_uZDd",children:e}),(0,r.jsx)("span",{className:"codeSpacer_nRmZ"}),n?"tested"===n?(0,r.jsx)("span",{className:`${a} ok_rUJx`,children:"tested"}):"warn"===n?(0,r.jsx)("span",{className:`${a} ${c}`,children:"caveat"}):"note"===n?(0,r.jsx)("span",{className:a,children:"note"}):"string"==typeof n?(0,r.jsx)("span",{className:a,children:n}):n:null,s&&(0,r.jsx)("button",{type:"button",className:"codeCopy_fKPb",onClick:()=>{if(!l.current)return;let e=l.current.innerText;"u">typeof navigator&&navigator.clipboard&&navigator.clipboard.writeText(e).then(()=>{o(!0),setTimeout(()=>o(!1),1200)})},"aria-label":"Copy code",children:d?"Copied":(0,r.jsx)(g,{})})]}),(0,r.jsx)("pre",{ref:l,className:"codeBlock_oEWX",children:t})]})}let N={info:({size:e=18,className:n})=>(0,r.jsxs)("svg",{width:e,height:e,viewBox:"0 0 32 32",fill:"currentColor",className:n,"aria-hidden":"true",children:[(0,r.jsx)("path",{d:"M16 2A14 14 0 1 0 30 16 14 14 0 0 0 16 2zm0 26a12 12 0 1 1 12-12 12 12 0 0 1-12 12z"}),(0,r.jsx)("path",{d:"M16 14h-2v2h1v6h-1v2h4v-2h-1v-8zm-.5-5a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 15.5 9z"})]}),warn:({size:e=18,className:n})=>(0,r.jsxs)("svg",{width:e,height:e,viewBox:"0 0 32 32",fill:"currentColor",className:n,"aria-hidden":"true",children:[(0,r.jsx)("path",{d:"M16 23a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 16 23zM15 13h2v8h-2z"}),(0,r.jsx)("path",{d:"M28.7 26.31L17.36 4.27a1.51 1.51 0 0 0-2.72 0L3.3 26.31a1.5 1.5 0 0 0 1.36 2.19h22.69a1.5 1.5 0 0 0 1.35-2.19z"})]}),success:f};function _({type:e="info",title:n,children:s}){let i=N[e];return(0,r.jsxs)("div",{className:`callout_yWfv ${"warn"===e?c:"success"===e?"success_D78d":""}`,children:[(0,r.jsx)("span",{className:"calloutIcon_hdwU",children:(0,r.jsx)(i,{size:18})}),(0,r.jsxs)("div",{className:"calloutBody_Qz4I",children:[n&&(0,r.jsx)("strong",{className:"calloutTitle_MXy4",children:n}),s]})]})}function k({children:e}){return(0,r.jsx)("div",{className:"compare_WfXa",children:e})}function K({kind:e,title:n,pill:s,children:i}){return(0,r.jsxs)("div",{className:`compareCol_nZe9 ${"bad"===e?"bad_pZ5b":"good_EJeo"}`,children:[(0,r.jsxs)("div",{className:"compareHead_vAhW",children:[(0,r.jsx)("span",{children:n??("bad"===e?"Before":"After")}),s&&(0,r.jsx)("span",{className:"comparePill_fmmx",children:s})]}),(0,r.jsx)("div",{className:"compareBody_hP62",children:i})]})}function R({title:e,command:n,columns:s,rows:i}){let[a,c,l,d,o]=s??["Variant","Speed","ns/op","B/op","\u0394"];return(0,r.jsxs)("div",{className:"bench_zMa2",children:[(0,r.jsxs)("div",{className:"benchHead_q6K3",children:[(0,r.jsx)("span",{children:e}),n&&(0,r.jsxs)("span",{className:"benchCmd_iUFI",children:[(0,r.jsx)("span",{className:"benchPrompt_LRr4",children:"$"}),n]})]}),(0,r.jsxs)("table",{className:"benchTable_u8XZ",children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:a}),(0,r.jsx)("th",{style:{width:"40%"},children:c}),(0,r.jsx)("th",{className:t,children:l}),(0,r.jsx)("th",{className:t,children:d}),(0,r.jsx)("th",{className:t,children:o})]})}),(0,r.jsx)("tbody",{children:i.map((e,n)=>{let s="win"===e.barKind?"win_PjNM":"lose"===e.barKind?"lose_A9dr":"",i="good"===e.deltaKind?"deltaGood_dYlm":"bad"===e.deltaKind?"deltaBad_yHEA":t;return(0,r.jsxs)("tr",{className:e.winner?"benchWinner_jDc2":void 0,children:[(0,r.jsx)("td",{className:"benchLabel_uFhm",children:e.label}),(0,r.jsx)("td",{children:null!=e.bar&&(0,r.jsx)("span",{className:"bar_jZ6H",children:(0,r.jsx)("span",{className:"barTrack_lefl",children:(0,r.jsx)("span",{className:`barFill_bMgr ${s}`,style:{width:`${100*Math.max(0,Math.min(1,e.bar))}%`}})})})}),(0,r.jsx)("td",{className:t,children:e.nsOp}),(0,r.jsx)("td",{className:t,children:e.bOp}),(0,r.jsx)("td",{className:i,children:e.delta})]},n)})})]})]})}function M({columns:e,rows:n,children:s}){if(s)return(0,r.jsx)("div",{className:l,children:s});let[i,a,c]=e??["Symbol","Signature","Since"];return(0,r.jsx)("div",{className:l,children:(0,r.jsxs)("table",{className:"apiTable_kmi_",children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:i}),(0,r.jsx)("th",{children:a}),(0,r.jsx)("th",{children:c})]})}),(0,r.jsx)("tbody",{children:n?.map((e,n)=>(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:e.symbol})}),(0,r.jsxs)("td",{children:[(0,r.jsx)("code",{children:e.signature}),e.description&&(0,r.jsx)("div",{className:"apiDesc__siK",children:e.description})]}),(0,r.jsx)("td",{children:e.since&&(0,r.jsx)("code",{children:e.since})})]},n))})]})})}function F({status:e,children:n}){return(0,r.jsx)(r.Fragment,{})}function V({title:e="Steps",items:n,children:s}){let a,c=(a=n||(s?i.Children.toArray(s).filter(e=>i.isValidElement(e)).map(e=>({label:e.props.children,impact:e.props.status,done:!1})):[])).filter(e=>e.done).length;return(0,r.jsxs)("div",{className:"check_Z_XE",children:[(0,r.jsxs)("div",{className:"checkHead__B8i",children:[(0,r.jsx)("span",{children:e}),n&&(0,r.jsxs)("span",{children:[c," / ",a.length," complete"]})]}),(0,r.jsx)("ul",{className:"checkList_ziWk",children:a.map((e,n)=>(0,r.jsxs)("li",{className:`checkItem_jgfw ${e.done?"done_rLON":""}`,children:[(0,r.jsx)("span",{className:"checkBox_TriO",children:e.done&&(0,r.jsx)(f,{size:10})}),(0,r.jsx)("span",{className:"checkLbl_IWQU",children:e.label}),e.impact&&(0,r.jsx)("span",{className:"checkImpact_BaeN",children:e.impact})]},n))})]})}var C=s(5310);function w({prev:e,next:n}){return(0,r.jsxs)("nav",{className:"pager_oMm2",children:[e?(0,r.jsxs)(C.A,{to:e.to,className:d,children:[(0,r.jsxs)("span",{className:o,children:[(0,r.jsx)(b,{})," ",e.label??"Previous"]}),(0,r.jsx)("span",{className:h,children:e.title})]}):(0,r.jsx)("span",{}),n?(0,r.jsxs)(C.A,{to:n.to,className:`${d} next_PLI2`,children:[(0,r.jsxs)("span",{className:o,children:[n.label??"Next"," ",(0,r.jsx)(v,{})]}),(0,r.jsx)("span",{className:h,children:n.title})]}):(0,r.jsx)("span",{})]})}},8453(e,n,s){s.d(n,{R:()=>c,x:()=>t});var r=s(6540);let i={},a=r.createContext(i);function c(e){let n=r.useContext(a);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);
"use strict";(self.webpackChunkfp_go_docs=self.webpackChunkfp_go_docs||[]).push([["8406"],{6160(e,n,s){s.r(n),s.d(n,{default:()=>h});var t=s(4848),i=s(6540),a=s(181);let r="dot_Lv16",o="active_cR4Q",c="spacer_C_ki",l="pill_f9VU",d="k_s7_e",u="seg_cP86",m=[{id:"option",title:"Option \xb7 safe values",code:`package main

import (
	"fmt"
	O "github.com/IBM/fp-go/v2/option"
)

func main() {
	some := O.Some(42)
	none := O.None[int]()
	
	fmt.Println("Some:", some)
	fmt.Println("None:", none)
	
	// Map over option
	doubled := O.Map(func(x int) int { return x * 2 })(some)
	fmt.Println("Doubled:", doubled)
}`,output:"Some: Some(42)\nNone: None\nDoubled: Some(84)"},{id:"either",title:"Either \xb7 error handling",code:`package main

import (
	"fmt"
	E "github.com/IBM/fp-go/v2/either"
)

func divide(a, b int) E.Either[string, int] {
	if b == 0 {
		return E.Left[int]("division by zero")
	}
	return E.Right[string](a / b)
}

func main() {
	result1 := divide(10, 2)
	result2 := divide(10, 0)
	
	fmt.Println("10 / 2 =", result1)
	fmt.Println("10 / 0 =", result2)
}`,output:"10 / 2 = Right(5)\n10 / 0 = Left(division by zero)"},{id:"array",title:"Array \xb7 functional operations",code:`package main

import (
 "fmt"
 A "github.com/IBM/fp-go/v2/array"
)

func main() {
 numbers := []int{1, 2, 3, 4, 5}
 
 // Map: double each number
 doubled := A.Map(func(x int) int {
  return x * 2
 })(numbers)
 
 // Filter: keep only even numbers
 evens := A.Filter(func(x int) bool {
  return x%2 == 0
 })(doubled)
 
 fmt.Println("Doubled:", doubled)
 fmt.Println("Evens:", evens)
}`,output:"Doubled: [2 4 6 8 10]\nEvens: [2 4 6 8 10]"},{id:"pipe",title:"Pipe \xb7 function composition",code:`package main

import (
 "fmt"
 F "github.com/IBM/fp-go/v2/function"
)

func main() {
 addOne := func(x int) int { return x + 1 }
 double := func(x int) int { return x * 2 }
 square := func(x int) int { return x * x }
 
 // Compose functions: (5 + 1) * 2 = 12, then 12^2 = 144
 result := F.Pipe3(
  5,
  addOne,
  double,
  square,
 )
 
 fmt.Println("Result:", result)
}`,output:"Result: 144"},{id:"chain",title:"Chain \xb7 monadic operations",code:`package main

import (
 "fmt"
 O "github.com/IBM/fp-go/v2/option"
)

func safeDivide(a, b int) O.Option[int] {
 if b == 0 {
  return O.None[int]()
 }
 return O.Some(a / b)
}

func main() {
 // Chain operations together
 result := O.Chain(func(x int) O.Option[int] {
  return safeDivide(x, 2)
 })(O.Some(20))
 
 fmt.Println("20 / 2 =", result)
 
 // Chain with None
 none := O.Chain(func(x int) O.Option[int] {
  return safeDivide(x, 0)
 })(O.Some(20))
 
 fmt.Println("20 / 0 =", none)
}`,output:"20 / 2 = Some(10)\n20 / 0 = None"},{id:"fold",title:"Fold \xb7 reduce arrays",code:`package main

import (
 "fmt"
 A "github.com/IBM/fp-go/v2/array"
)

func main() {
 numbers := []int{1, 2, 3, 4, 5}
 
 // Sum all numbers
 sum := A.Reduce(func(acc, x int) int {
  return acc + x
 }, 0)(numbers)
 
 // Product of all numbers
 product := A.Reduce(func(acc, x int) int {
  return acc * x
 }, 1)(numbers)
 
 fmt.Println("Sum:", sum)
 fmt.Println("Product:", product)
}`,output:"Sum: 15\nProduct: 120"}];function p(){let[e,n]=(0,i.useState)(0),[s,a]=(0,i.useState)(m[0].code),[p,h]=(0,i.useState)(m[0].output||""),[x,f]=(0,i.useState)(!1),g=async()=>{f(!0),h("Running...");try{let e=await fetch("https://fpgo-sandbox.fly.dev/v1/exec",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sandbox:"go",command:"run",files:{"":s}})}),n=await e.json();n.ok?h(n.stdout||n.output||"Success!"):h(`Error: ${n.stderr||n.error||"Execution failed"}`)}catch(n){let e=n instanceof Error?n.message:"Failed to execute code";h(`Error: ${e}`)}finally{f(!1)}},b=s.split("\n").length;return(0,t.jsxs)("div",{className:"page_dPHZ",children:[(0,t.jsx)("div",{className:"eyebrow_u5Gl",children:"Playground"}),(0,t.jsxs)("h1",{className:"title_poUY",children:["Try fp-go in your ",(0,t.jsx)("em",{children:"browser."})]}),(0,t.jsx)("p",{className:"sub_ptme",children:"Edit, run and share Go snippets without leaving the docs. Compiled & executed via codapi \u2014 no installs, no setup."}),(0,t.jsx)("div",{className:"snippets_gD6k",children:m.map((s,i)=>(0,t.jsxs)("button",{className:`snippet_ix1e ${i===e?o:""}`,onClick:()=>{n(i),a(m[i].code),h(m[i].output||"")},children:[(0,t.jsx)("span",{className:"ico_lk_P",children:i===e?"\u25CF":"\u25CB"}),s.title]},s.id))}),(0,t.jsxs)("div",{className:"pg_ycDq",children:[(0,t.jsxs)("div",{className:"pgToolbar_tMLW",children:[(0,t.jsx)("div",{className:"pgTabs_ZVa1",children:(0,t.jsxs)("button",{className:`pgTab_AHca ${o}`,children:[(0,t.jsx)("span",{className:r}),"main.go"]})}),(0,t.jsx)("div",{className:c}),(0,t.jsxs)("div",{className:"pgMeta_fZPN",children:[(0,t.jsx)("span",{className:"lbl_i0Kg",children:"Runtime"}),(0,t.jsx)("span",{className:l,children:"go 1.22"}),(0,t.jsx)("span",{className:l,children:"fp-go v2.2.82"})]})]}),(0,t.jsxs)("div",{className:"pgBody_Qht_",children:[(0,t.jsxs)("div",{className:"editor_oZOQ",children:[(0,t.jsx)("div",{className:"gutter_Fgf3",children:Array.from({length:b},(e,n)=>(0,t.jsx)("span",{children:n+1},n+1))}),(0,t.jsx)("textarea",{className:"codeArea_PThp",value:s,onChange:e=>a(e.target.value),spellCheck:!1})]}),(0,t.jsxs)("aside",{className:"side_pcag",children:[(0,t.jsx)("div",{className:"sideTabs_jPNr",children:(0,t.jsx)("button",{className:`sideTab_doG8 ${o}`,children:"Output"})}),(0,t.jsxs)("div",{className:"stdout_Pjjb",children:[(0,t.jsx)("span",{className:"ts_cdPz",children:"// stdout"}),(0,t.jsx)("div",{className:"val_dF1t",children:p})]})]})]}),(0,t.jsxs)("div",{className:"pgActionbar_Tc4V",children:[(0,t.jsxs)("button",{className:"btn_vszI primary_Kbgw",onClick:g,disabled:x,children:[(0,t.jsx)("svg",{width:"14",height:"14",viewBox:"0 0 32 32",fill:"currentColor",children:(0,t.jsx)("path",{d:"M11 23v-14l11 7-11 7z"})}),x?"Running...":"Run",(0,t.jsx)("span",{className:"kbd_Ifl1",children:"\u2318\u21B5"})]}),(0,t.jsx)("div",{className:c}),(0,t.jsxs)("div",{className:"by_V5tH",children:[(0,t.jsxs)("span",{className:"done_Nka7",children:[(0,t.jsx)("svg",{width:"12",height:"12",viewBox:"0 0 32 32",fill:"currentColor",children:(0,t.jsx)("path",{d:"M13 24l-9-9 1.4-1.4L13 21.2 26.6 7.6 28 9z"})}),"Ready"]}),(0,t.jsx)("span",{style:{color:"var(--gray-50)"},children:"\xb7"}),(0,t.jsxs)("span",{children:["powered by ",(0,t.jsx)("a",{href:"https://codapi.org",children:"codapi"})]})]})]}),(0,t.jsxs)("div",{className:"pgStatus___XG",children:[(0,t.jsxs)("span",{className:u,children:[(0,t.jsx)("span",{className:r})," Connected"]}),(0,t.jsxs)("span",{className:u,children:[(0,t.jsx)("span",{className:d,children:"go"}),(0,t.jsx)("span",{className:"v_TPTc",children:"1.22.1"})]}),(0,t.jsx)("div",{className:c}),(0,t.jsx)("span",{className:u,children:(0,t.jsx)("span",{className:d,children:"UTF-8"})})]})]})]})}function h(){return(0,t.jsx)(a.A,{title:"Playground",description:"Try fp-go in your browser with interactive code examples",children:(0,t.jsx)(p,{})})}}}]);
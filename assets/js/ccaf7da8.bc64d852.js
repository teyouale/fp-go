"use strict";(self.webpackChunkfp_go_docs=self.webpackChunkfp_go_docs||[]).push([["2579"],{6679(e,r,t){t.r(r),t.d(r,{metadata:()=>i,default:()=>f,frontMatter:()=>o,contentTitle:()=>l,toc:()=>u,assets:()=>c});var i=JSON.parse('{"id":"recipes/file-operations","title":"File Operations","description":"Functional file I/O patterns","source":"@site/docs/recipes/file-operations.md","sourceDirName":"recipes","slug":"/recipes/file-operations","permalink":"/fp-go/docs/recipes/file-operations","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":11,"frontMatter":{"sidebar_position":11,"title":"File Operations","description":"Functional file I/O patterns","hide_title":true},"sidebar":"recipesSidebar","previous":{"title":"Parsing Data","permalink":"/fp-go/docs/recipes/parsing"},"next":{"title":"HTTP Requests","permalink":"/fp-go/docs/recipes/http-requests"}}'),n=t(4848),s=t(8453);let o={sidebar_position:11,title:"File Operations",description:"Functional file I/O patterns",hide_title:!0},l,c={},u=[];function a(e){let r={p:"p",strong:"strong",...(0,s.R)(),...e.components},{Checklist:t,ChecklistItem:i,CodeCard:o,PageHeader:l,Section:c,TLDR:u,TLDRCard:a}=r;return t||p("Checklist",!0),i||p("ChecklistItem",!0),o||p("CodeCard",!0),l||p("PageHeader",!0),c||p("Section",!0),u||p("TLDR",!0),a||p("TLDRCard",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l,{eyebrow:"Recipes \xb7 11 / 17",title:"File",titleAccent:"Operations",lede:"Perform file I/O operations using functional patterns with IOEither for lazy evaluation, resource safety, and composable file operations.",meta:[{label:"Difficulty",value:"Intermediate"},{label:"Patterns",value:"7"},{label:"Use Cases",value:"File I/O, Data Processing, Logs"}]}),"\n",(0,n.jsxs)(u,{children:[(0,n.jsx)(a,{title:"Lazy Evaluation",icon:"clock",children:(0,n.jsx)(r.p,{children:"Operations don't execute until called\u2014compose file operations without triggering side effects."})}),(0,n.jsx)(a,{title:"Resource Safety",icon:"shield",children:(0,n.jsx)(r.p,{children:"Use bracket for proper cleanup\u2014ensures files are closed even when errors occur."})}),(0,n.jsx)(a,{title:"Composability",icon:"layers",children:(0,n.jsx)(r.p,{children:"Chain multiple file operations\u2014build complex workflows from simple operations."})})]}),"\n",(0,n.jsxs)(c,{id:"reading-files",number:"01",title:"Reading",titleAccent:"Files",children:[(0,n.jsx)(r.p,{children:"Read files with proper error handling and resource management."}),(0,n.jsx)(o,{file:"read-file.go",children:`package main

import (
  "fmt"
  "os"
  IOE "github.com/IBM/fp-go/v2/ioeither"
)

func readFile(path string) IOE.IOEither[error, []byte] {
  return IOE.TryCatch(func() ([]byte, error) {
      return os.ReadFile(path)
  })
}

func readFileAsString(path string) IOE.IOEither[error, string] {
  return IOE.Map(func(data []byte) string {
      return string(data)
  })(readFile(path))
}

func main() {
  result := readFileAsString("config.json")()
  
  if result.IsLeft() {
      fmt.Println("Error reading file:", result.Left())
  } else {
      fmt.Println("File contents:", result.Right())
  }
}`}),(0,n.jsx)(o,{file:"read-lines.go",children:`package main

import (
  "bufio"
  "fmt"
  "os"
  IOE "github.com/IBM/fp-go/v2/ioeither"
  F "github.com/IBM/fp-go/v2/function"
)

func readLines(path string) IOE.IOEither[error, []string] {
  return IOE.TryCatch(func() ([]string, error) {
      file, err := os.Open(path)
      if err != nil {
          return nil, err
      }
      defer file.Close()
      
      var lines []string
      scanner := bufio.NewScanner(file)
      for scanner.Scan() {
          lines = append(lines, scanner.Text())
      }
      
      if err := scanner.Err(); err != nil {
          return nil, err
      }
      
      return lines, nil
  })
}

func countLines(path string) IOE.IOEither[error, int] {
  return F.Pipe1(
      readLines(path),
      IOE.Map(func(lines []string) int {
          return len(lines)
      }),
  )
}

func main() {
  result := countLines("data.txt")()
  
  if result.IsLeft() {
      fmt.Println("Error:", result.Left())
  } else {
      fmt.Printf("File has %d lines\\n", result.Right())
  }
}`})]}),"\n",(0,n.jsxs)(c,{id:"writing-files",number:"02",title:"Writing",titleAccent:"Files",children:[(0,n.jsx)(r.p,{children:"Write and append to files with proper error handling."}),(0,n.jsx)(o,{file:"write-file.go",children:`package main

import (
  "fmt"
  "os"
  IOE "github.com/IBM/fp-go/v2/ioeither"
)

func writeFile(path string, data []byte) IOE.IOEither[error, int] {
  return IOE.TryCatch(func() (int, error) {
      err := os.WriteFile(path, data, 0644)
      if err != nil {
          return 0, err
      }
      return len(data), nil
  })
}

func writeString(path, content string) IOE.IOEither[error, int] {
  return writeFile(path, []byte(content))
}

func main() {
  content := "Hello, functional world!"
  result := writeString("output.txt", content)()
  
  if result.IsLeft() {
      fmt.Println("Error writing file:", result.Left())
  } else {
      fmt.Printf("Wrote %d bytes\\n", result.Right())
  }
}`}),(0,n.jsx)(o,{file:"append-file.go",children:`package main

import (
  "fmt"
  "os"
  IOE "github.com/IBM/fp-go/v2/ioeither"
)

func appendToFile(path, content string) IOE.IOEither[error, int] {
  return IOE.TryCatch(func() (int, error) {
      file, err := os.OpenFile(path, os.O_APPEND|os.O_CREATE|os.O_WRONLY, 0644)
      if err != nil {
          return 0, err
      }
      defer file.Close()
      
      return file.WriteString(content)
  })
}

func appendLine(path, line string) IOE.IOEither[error, int] {
  return appendToFile(path, line+"\\n")
}

func main() {
  result := appendLine("log.txt", "New log entry")()
  
  if result.IsLeft() {
      fmt.Println("Error:", result.Left())
  } else {
      fmt.Printf("Appended %d bytes\\n", result.Right())
  }
}`})]}),"\n",(0,n.jsxs)(c,{id:"resource-management",number:"03",title:"Resource",titleAccent:"Management",children:[(0,n.jsx)(r.p,{children:"Use bracket for safe resource handling that guarantees cleanup."}),(0,n.jsx)(o,{file:"bracket-pattern.go",children:`package main

import (
  "bufio"
  "fmt"
  "os"
  IOE "github.com/IBM/fp-go/v2/ioeither"
)

func withFile[A any](
  path string,
  use func(*os.File) IOE.IOEither[error, A],
) IOE.IOEither[error, A] {
  return IOE.Bracket(
      // Acquire resource
      IOE.TryCatch(func() (*os.File, error) {
          return os.Open(path)
      }),
      // Use resource
      use,
      // Release resource (always called)
      func(file *os.File) IOE.IOEither[error, struct{}] {
          return IOE.TryCatch(func() (struct{}, error) {
              return struct{}{}, file.Close()
          })
      },
  )
}

func readFirstLine(path string) IOE.IOEither[error, string] {
  return withFile(path, func(file *os.File) IOE.IOEither[error, string] {
      return IOE.TryCatch(func() (string, error) {
          scanner := bufio.NewScanner(file)
          if scanner.Scan() {
              return scanner.Text(), nil
          }
          if err := scanner.Err(); err != nil {
              return "", err
          }
          return "", fmt.Errorf("file is empty")
      })
  })
}

func main() {
  result := readFirstLine("data.txt")()
  
  if result.IsLeft() {
      fmt.Println("Error:", result.Left())
  } else {
      fmt.Println("First line:", result.Right())
  }
}`}),(0,n.jsx)(o,{file:"copy-file.go",children:`package main

import (
  "fmt"
  "io"
  "os"
  IOE "github.com/IBM/fp-go/v2/ioeither"
)

func copyFile(src, dst string) IOE.IOEither[error, int64] {
  return IOE.Bracket(
      // Open source file
      IOE.TryCatch(func() (*os.File, error) {
          return os.Open(src)
      }),
      // Copy to destination
      func(srcFile *os.File) IOE.IOEither[error, int64] {
          return IOE.Bracket(
              // Create destination file
              IOE.TryCatch(func() (*os.File, error) {
                  return os.Create(dst)
              }),
              // Copy data
              func(dstFile *os.File) IOE.IOEither[error, int64] {
                  return IOE.TryCatch(func() (int64, error) {
                      return io.Copy(dstFile, srcFile)
                  })
              },
              // Close destination
              func(dstFile *os.File) IOE.IOEither[error, struct{}] {
                  return IOE.TryCatch(func() (struct{}, error) {
                      return struct{}{}, dstFile.Close()
                  })
              },
          )
      },
      // Close source
      func(srcFile *os.File) IOE.IOEither[error, struct{}] {
          return IOE.TryCatch(func() (struct{}, error) {
              return struct{}{}, srcFile.Close()
          })
      },
  )
}

func main() {
  result := copyFile("source.txt", "destination.txt")()
  
  if result.IsLeft() {
      fmt.Println("Error copying file:", result.Left())
  } else {
      fmt.Printf("Copied %d bytes\\n", result.Right())
  }
}`})]}),"\n",(0,n.jsxs)(c,{id:"directory-operations",number:"04",title:"Directory",titleAccent:"Operations",children:[(0,n.jsx)(r.p,{children:"List and walk directory trees with functional patterns."}),(0,n.jsx)(o,{file:"list-directory.go",children:`package main

import (
  "fmt"
  "os"
  A "github.com/IBM/fp-go/v2/array"
  IOE "github.com/IBM/fp-go/v2/ioeither"
  F "github.com/IBM/fp-go/v2/function"
  O "github.com/IBM/fp-go/v2/option"
)

func listDir(path string) IOE.IOEither[error, []os.FileInfo] {
  return IOE.TryCatch(func() ([]os.FileInfo, error) {
      file, err := os.Open(path)
      if err != nil {
          return nil, err
      }
      defer file.Close()
      
      return file.Readdir(-1)
  })
}

func listFiles(path string) IOE.IOEither[error, []string] {
  return F.Pipe2(
      listDir(path),
      IOE.Map(func(entries []os.FileInfo) []string {
          return A.FilterMap(func(entry os.FileInfo) O.Option[string] {
              if !entry.IsDir() {
                  return O.Some(entry.Name())
              }
              return O.None[string]()
          })(entries)
      }),
  )
}

func main() {
  result := listFiles(".")()
  
  if result.IsLeft() {
      fmt.Println("Error:", result.Left())
  } else {
      files := result.Right()
      fmt.Printf("Found %d files:\\n", len(files))
      for _, file := range files {
          fmt.Println(" -", file)
      }
  }
}`})]}),"\n",(0,n.jsxs)(c,{id:"transformations",number:"05",title:"File",titleAccent:"Transformations",children:[(0,n.jsx)(r.p,{children:"Transform file contents with functional pipelines."}),(0,n.jsx)(o,{file:"transform-file.go",children:`package main

import (
  "fmt"
  "strings"
  IOE "github.com/IBM/fp-go/v2/ioeither"
  F "github.com/IBM/fp-go/v2/function"
)

func transformFile(
  input, output string,
  transform func(string) string,
) IOE.IOEither[error, int] {
  return F.Pipe3(
      readFileAsString(input),
      IOE.Map(transform),
      IOE.Chain(func(content string) IOE.IOEither[error, int] {
          return writeString(output, content)
      }),
  )
}

func toUpperCase(input, output string) IOE.IOEither[error, int] {
  return transformFile(input, output, strings.ToUpper)
}

func replaceInFile(input, output, old, new string) IOE.IOEither[error, int] {
  return transformFile(input, output, func(content string) string {
      return strings.ReplaceAll(content, old, new)
  })
}

func main() {
  result := toUpperCase("input.txt", "output.txt")()
  
  if result.IsLeft() {
      fmt.Println("Error:", result.Left())
  } else {
      fmt.Printf("Transformed file, wrote %d bytes\\n", result.Right())
  }
}`}),(0,n.jsx)(o,{file:"process-lines.go",children:`package main

import (
  "fmt"
  "strings"
  A "github.com/IBM/fp-go/v2/array"
  IOE "github.com/IBM/fp-go/v2/ioeither"
  F "github.com/IBM/fp-go/v2/function"
)

func processLines(
  input, output string,
  process func(string) string,
) IOE.IOEither[error, int] {
  return F.Pipe3(
      readLines(input),
      IOE.Map(func(lines []string) []string {
          return A.Map(process)(lines)
      }),
      IOE.Chain(func(lines []string) IOE.IOEither[error, int] {
          content := strings.Join(lines, "\\n")
          return writeString(output, content)
      }),
  )
}

func removeEmptyLines(input, output string) IOE.IOEither[error, int] {
  return F.Pipe3(
      readLines(input),
      IOE.Map(func(lines []string) []string {
          return A.Filter(func(line string) bool {
              return strings.TrimSpace(line) != ""
          })(lines)
      }),
      IOE.Chain(func(lines []string) IOE.IOEither[error, int] {
          content := strings.Join(lines, "\\n")
          return writeString(output, content)
      }),
  )
}

func main() {
  result := removeEmptyLines("input.txt", "output.txt")()
  
  if result.IsLeft() {
      fmt.Println("Error:", result.Left())
  } else {
      fmt.Printf("Processed file, wrote %d bytes\\n", result.Right())
  }
}`})]}),"\n",(0,n.jsxs)(c,{id:"batch-operations",number:"06",title:"Batch",titleAccent:"Operations",children:[(0,n.jsx)(r.p,{children:"Process multiple files sequentially or in parallel."}),(0,n.jsx)(o,{file:"batch-processing.go",children:`package main

import (
  "fmt"
  A "github.com/IBM/fp-go/v2/array"
  IOE "github.com/IBM/fp-go/v2/ioeither"
  F "github.com/IBM/fp-go/v2/function"
)

func processFiles(
  files []string,
  process func(string) IOE.IOEither[error, int],
) IOE.IOEither[error, []int] {
  return A.Traverse[string](IOE.Applicative[error, int]())(
      process,
  )(files)
}

func countLinesInFiles(files []string) IOE.IOEither[error, int] {
  return F.Pipe2(
      processFiles(files, func(file string) IOE.IOEither[error, int] {
          return countLines(file)
      }),
      IOE.Map(func(counts []int) int {
          return A.Reduce(func(acc, n int) int {
              return acc + n
          })(0)(counts)
      }),
  )
}

func main() {
  files := []string{"file1.txt", "file2.txt", "file3.txt"}
  result := countLinesInFiles(files)()
  
  if result.IsLeft() {
      fmt.Println("Error:", result.Left())
  } else {
      fmt.Printf("Total lines across all files: %d\\n", result.Right())
  }
}`})]}),"\n",(0,n.jsxs)(c,{id:"temporary-files",number:"07",title:"Temporary",titleAccent:"Files",children:[(0,n.jsx)(r.p,{children:"Create and use temporary files with automatic cleanup."}),(0,n.jsx)(o,{file:"temp-files.go",children:`package main

import (
  "fmt"
  "os"
  "strings"
  IOE "github.com/IBM/fp-go/v2/ioeither"
  F "github.com/IBM/fp-go/v2/function"
)

func withTempFile[A any](
  pattern string,
  use func(*os.File) IOE.IOEither[error, A],
) IOE.IOEither[error, A] {
  return IOE.Bracket(
      // Create temp file
      IOE.TryCatch(func() (*os.File, error) {
          return os.CreateTemp("", pattern)
      }),
      // Use temp file
      use,
      // Clean up
      func(file *os.File) IOE.IOEither[error, struct{}] {
          return IOE.TryCatch(func() (struct{}, error) {
              name := file.Name()
              file.Close()
              return struct{}{}, os.Remove(name)
          })
      },
  )
}

func processWithTempFile(data string) IOE.IOEither[error, string] {
  return withTempFile("process-*.txt", func(temp *os.File) IOE.IOEither[error, string] {
      return F.Pipe3(
          // Write to temp file
          IOE.TryCatch(func() (int, error) {
              return temp.WriteString(data)
          }),
          // Process temp file
          IOE.Chain(func(_ int) IOE.IOEither[error, string] {
              return readFileAsString(temp.Name())
          }),
          // Transform result
          IOE.Map(strings.ToUpper),
      )
  })
}

func main() {
  result := processWithTempFile("hello world")()
  
  if result.IsLeft() {
      fmt.Println("Error:", result.Left())
  } else {
      fmt.Println("Result:", result.Right())
  }
}`})]}),"\n",(0,n.jsx)(c,{id:"best-practices",number:"08",title:"Best",titleAccent:"Practices",children:(0,n.jsxs)(t,{children:[(0,n.jsx)(i,{status:"required",children:(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Always use bracket for resources"})," \u2014 Ensures cleanup even when errors occur"]})}),(0,n.jsx)(i,{status:"required",children:(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Check file existence"})," \u2014 Verify files exist before operations"]})}),(0,n.jsx)(i,{status:"required",children:(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Use appropriate permissions"})," \u2014 Set correct file permissions (0644, 0600, etc.)"]})}),(0,n.jsx)(i,{status:"recommended",children:(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Handle large files carefully"})," \u2014 Use streaming for large files to avoid memory issues"]})}),(0,n.jsx)(i,{status:"recommended",children:(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Validate paths"})," \u2014 Check and sanitize file paths before use"]})}),(0,n.jsx)(i,{status:"optional",children:(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Use temp files for safety"})," \u2014 Process data in temp files before overwriting originals"]})})]})})]})}function f(e={}){let{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}function p(e,r){throw Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},8453(e,r,t){t.d(r,{R:()=>o,x:()=>l});var i=t(6540);let n={},s=i.createContext(n);function o(e){let r=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),i.createElement(s.Provider,{value:r},e.children)}}}]);
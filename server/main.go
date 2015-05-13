package main

import (
    "fmt"
    "net/http"
    "os"
)

func handler(w http.ResponseWriter, r *http.Request) {
    fmt.Fprintf(w, "Hi there, I love %s!", r.URL.Path[1:])
}

func main() {
    http.HandleFunc("/static/", func(w http.ResponseWriter, r *http.Request) {
        file_to_serve := "/" + r.URL.Path[1:]
        fmt.Println("Serving file " + file_to_serve)
        http.ServeFile(w, r, file_to_serve)
    })
    http.HandleFunc("/", handler)
    bind_to := ":" + os.Getenv("PORT")
    fmt.Println("Listening on ", bind_to)
    http.ListenAndServe(bind_to, nil)
}
FROM golang:1.4

RUN go get github.com/codegangsta/gin

EXPOSE 9000
WORKDIR /go/src/github.com/domasx2/bugzez
CMD ["gin"]
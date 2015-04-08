FROM golang:1.4

RUN go get github.com/revel/revel
RUN go get github.com/revel/cmd/revel

VOLUME ["/go/src/github.com/domasx2/bugzez"]
VOLUME ["/client"]

EXPOSE 9000
CMD ["revel", "run", "github.com/domasx2/bugzez"]
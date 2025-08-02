import http from "http";

const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/html")
    res.writeHead(200, { "Content-Type": "text/html" })
    res.statusCode = 200
    res.end("<h1>Hello World</h1>")
});

server.listen(8080, () => {
    console.log("Server is running on port 8080");
});
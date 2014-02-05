var express = require("express");
var http = require("http");
var app = express();

app.all("*", function(request, response, next) {
    response.writeHead(200, { "Content-Type": "text/plain" });
    next();
});

app.get("/hello/:who", function(req, res) {
    res.end("Hello, " + req.params.who + ".");
    // Fun fact: this has security issues
});

http.createServer(app).listen(1337);
console.log("Server running at http://localhost:1337/");

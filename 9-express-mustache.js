// Start Express
var express = require("express");
var http = require("http");
var app = express();

var mustacheExpress = require('mustache-express');

// Register '.mustache' extension with The Mustache Express
app.engine('mustache', mustacheExpress());

app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');

app.get("/", function(request, response) {
    response.render("index", { message: "hellooooo" });
});

http.createServer(app).listen(1337);
console.log("Server running at http://localhost:1337/");

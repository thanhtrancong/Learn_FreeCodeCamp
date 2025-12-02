require('dotenv').config();
let express = require('express');
let app = express();

console.log("Hello World");

// Root-level middleware - Logger
app.use(function(req, res, next) {
  console.log(req.method + " " + req.path + " - " + req.ip);
  next();
});

// Route GET cho root path "/" - serve HTML file
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// Route GET cho "/json" - serve JSON với env variable
app.get('/json', function(req, res) {
  let message = "Hello json";
  
  if (process.env.MESSAGE_STYLE === "uppercase") {
    message = message.toUpperCase();
  }
  
  res.json({"message": message});
});

// Route GET cho "/now" - chain middleware để add time
app.get('/now', function(req, res, next) {
  req.time = new Date().toString();
  next();
}, function(req, res) {
  res.json({time: req.time});
});

// Route GET cho "/:word/echo" - echo server với route parameter
app.get('/:word/echo', function(req, res) {
  res.json({echo: req.params.word});
});

module.exports = app;
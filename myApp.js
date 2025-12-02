require('dotenv').config();
let express = require('express');
let app = express();

console.log("Hello World");

app.use('/public', express.static(__dirname + '/public'));

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

module.exports = app;
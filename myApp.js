let express = require('express');
let app = express();

console.log("Hello World");

app.use('/public', express.static(__dirname + '/public'));

// Route GET cho root path "/" - serve HTML file
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// Route GET cho "/json" - serve JSON
app.get('/json', function(req, res) {
  res.json({"message": "Hello json"});
});

module.exports = app;
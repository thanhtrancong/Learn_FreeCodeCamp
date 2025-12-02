let express = require('express');
let app = express();

console.log("Hello World");

app.use('/public', express.static(__dirname + '/public'));

// Route GET cho root path "/"
app.get('/', function(req, res) {
  res.send('Hello Express');
});

module.exports = app;
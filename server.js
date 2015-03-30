
// Load dependencies
var express = require('express');

// Create an express app
var app = express();

app.set('port', (process.env.PORT || 8080));

// Support service static HTML from /public directory
app.use(express.static(__dirname + '/'));

app.listen(8080, function() {
  console.log("\nAPI Running at localhost:" + app.get('port'));
});



// Load dependencies
var express = require('express');

// Create an express app
var app = express();

app.set('port', (process.env.PORT || 8080));

// Support service static HTML from /public directory
// app.use(express.static(__dirname + '/'));


// https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions#how-to-configure-your-server-to-work-with-html5mode
app.use('/js', express.static(__dirname + '/js'));
app.use('/css', express.static(__dirname + '/css'));
app.use('/images', express.static(__dirname + '/images'));
app.use('/templates', express.static(__dirname + '/templates'));
app.use('/libs', express.static(__dirname + '/libs'));

app.all('/*', function(req, res, next) {

    // Just send the index.html for other files to support HTML5Mode
    res.sendFile('index.html', { root: __dirname });
});

app.listen(8080, function() {
  console.log("\nAPI Running at localhost:" + app.get('port'));
});
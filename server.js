// Npm dependecies
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// Express appl config
var app = express();
var PORT = process.env.PORT;

// Expose the public directory to access CSS files
app.use(express.static(path.join(__dirname, './app/public')));

// connect operating system to app running it 
// json url and text- app.use registers middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

// Add the application routes
require(path.join(__dirname, './app/routing/apiRoutes'))(app);
require(path.join(__dirname, './app/routing/htmlRoutes'))(app);

// Start listening on PORT
app.listen(PORT, function() {
  console.log('Friend Finder app is listening on PORT: ' + PORT);
});
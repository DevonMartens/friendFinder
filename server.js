// Npm dependecies
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// Express config
var app = express();
var PORT = process.env.PORT || 8080;


// The code below is pretty standard.
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



// connect operating system t
// json url and text- app.use registers middleware

// Add the application routes
require( './routing/apiRoutes.js')(app);
require('./routing/htmlRoutes.js')(app);

// Start listening on PORT
app.listen(PORT, function() {
  console.log('Friend Finder app is listening on PORT: ' + PORT);
});
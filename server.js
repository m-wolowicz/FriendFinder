// =============================================================================
// DEPENDENCIES
// npm packages that we will use to give our server useful functionality
// =============================================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");


// =============================================================================
// EXPRESS CONFIGURATION
// This sets up the basic properties for our express server
// =============================================================================

//This tells node that we are creating an "express" server.
var app = express();

//This sets the initial port. Which we will use in the listener later.
var PORT = process.env.PORT || 8080;

// BodyParser makes it possible for our server to interpret data sent to it.
// The code below is pretty standard.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Uses any static files required by the html files.
app.use(express.static('app/public/'));




// =============================================================================
// ROUTER
// This points our server to a series of "route" files.
// Routes give our server a "map" of how to respond 
// when users visit or request data from various URLs.
// =============================================================================

require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);


// =============================================================================
// LISTENER
// This code effectively "starts" our server so it is listening.
// =============================================================================

app.listen(PORT, function() {
    console.log("From server.js File: App listening on PORT: " + PORT + "\n");
});
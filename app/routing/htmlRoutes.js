	// ==== CONSOLE.LOG TESTING ====
	console.log("\nThe htmlRoutes.js file is working!!!");

// =============================================================================
// DEPENDENCIES
// npm packages that we will use to give our server useful functionality
	var express = require("express");
	var path = require("path");
	var friends = require('../data/friends.js');


// =============================================================================
// ROUTING
	module.exports = function(app) {

		//Static assets folder NECEESSARY to load images when accessing html.
		app.use(express.static("/../public")); 

		//When accessing "/survey", then go to "survey.html" through "/../public/surve.html" path.
		app.get("/survey", function(request, result) {
			result.sendFile(path.join(__dirname, "/../public/survey.html")); 
		});

		//This structure is THE way to assign the default behavior for the app to direct to the home page, UNLESS another specified path (as written above), is established.
		//This MUST BE the last choice among the path list, as is is order dependant.. if the path does not satisfy the other paths, (only) THEN it wil address to the home page.
		app.use(function(request, result) {
			result.sendFile(path.join(__dirname + "/../public/index.html")); 
		});

	}; //End of module.exports = function (app)



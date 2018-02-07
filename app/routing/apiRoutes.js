// ==== CONSOLE.LOG TESTING ====
console.log("The apiRoutes.js file is working!!!\n");

// =============================================================================
// DEPENDENCIES
// npm packages that we will use to give our server useful functionality
	var express = require("express");
	var path = require("path");


// =============================================================================
// LOAD DATA
// We are linking our routes to "data" sources.
// These data sources hold arrays of information.
	var friends = require("../data/friends");

	
// =============================================================================
// ROUTING
	module.exports = function(app) {

		// API GET Request. This code handles when users "visit" a page.
		// When a user visits the link localhost:PORT/api/friends
		// they are shown a JSON of all the possible friends.
		// ---------------------------------------------------------------------
			app.get("/api/friends", function(req, res) {
				res.json(friends);
			});

		// API POST Request. This code handles when a user submits the survey.
		// When a user submits form data (a JSON object) the JSON is pushed to
		// the JavaScript array. User fills out a survey, data is sent to server
		// Then the server saves the data to the friends array
		// Then it handles comparison logic to find a friend.
		// ---------------------------------------------------------------------
			app.post("/api/friends", function(req, res) {

				// We need an object to hold the new bestFriend
				var bestFriend = {
									name: "",
									photo: "",
									friendDiff: 10000 //Default # to beat
								};

				// ==== CONSOLE.LOG TESTING ====
				console.log("\nCurrent request.body: \n" + request.body + "\n");

				//Take results of user's survey POST and parse it.
				var userData = req.body;
				var userName = userData.name;
				var userPhoto = userData.photo;
				var userScore = userData.score;

				//Create variable to hold the total Friend Score Difference
				var totalDifference = 0;	//Set default to 0

				// Begin Comparison Logic with for loop to compare all friends
				for (var i = 0; i < friends.length; i++) {

					// ==== CONSOLE.LOG TESTING ====
					console.log(friends[i].name);

					//Reset totalDifference to 0
					totalDifference = 0;

					//Loop through all the scores for each person.
					for (var a = 0; a < friends[i].score[a]; a++) {
						
						//Calculate the difference between the scores
						//Add them into the totalDifference
						totalDifference += Math.abs(parseInt(userScore[a] - parseInt(friends[i].score[a])));

						//If else statement
						//If the sum of differences is less than the differences of the current best Friend
						if (totalDifference <= bestFriend.friendDiff) {

							//Then reset the bestFriend to the new bestFriend
							bestFriend.name = friends[i].name;
							bestFriend.photo = friends[i].photo;
							bestFriend.friendDiff = totalDifference;
						} //End if statement
					} //End of second for loop
				} //End of first for loop

				//Now we can save the new user's data to the database friends
				//This happens AFTER we check compatibility
				//Otherwise, the check would return the user's info
				friends.push(userData);

				//Return a new JSON with the user's Best Friend.
				//This is used by the modal.
				res.json(bestFriend);

			}); //End of app.post
	}; //End of module.exports = function (app)
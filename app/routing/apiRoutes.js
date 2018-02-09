// ==== CONSOLE.LOG TESTING ====
console.log("\nThe apiRoutes.js file is working!!!");

// =============================================================================
// DEPENDENCIES
// npm packages that we will use to give our server useful functionality
var path = require("path");


// =============================================================================
// LOAD DATA
// We are linking our routes to "data" sources.
// These data sources hold arrays of information.
var friendData = require("../data/friends.js");


// =============================================================================
// ROUTING
module.exports = function(app) {

    // API GET Request. This code handles when users "visit" a page.
    // When a user visits the link localhost:PORT/api/friends
    // they are shown a JSON of all the possible friends.
    // ---------------------------------------------------------------------
    app.get("/api/friendList", function(req, res) {
        res.json(friendData);

        // ==== CONSOLE.LOG TESTING ====
        console.log("\nInformation from the app.get function in api.Routes.js file: " + res.json(friendData));
    });

    // API POST Request. This code handles when a user submits the survey.
    // When a user submits form data (a JSON object) the JSON is pushed to
    // the JavaScript array. User fills out a survey, data is sent to server
    // Then the server saves the data to the friends array
    // Then it handles comparison logic to find a friend.
    // ---------------------------------------------------------------------
    app.post("/api/friendList", function(req, res) {

        var lowestDifferenceInt = 50;
        // ==== CONSOLE.LOG TESTING ====
        console.log("Variable lowestDifferenceInt in apiRoutes.js File is : " + lowestDifferenceInt);

        var chosenMatch;

        friendData.forEach(function(storedUserObject) {

            var difference = 0;
            // ==== CONSOLE.LOG TESTING ====
            console.log("Variable difference1 in apiRoutes.js File is : " + difference);

            for (i = 0; i < storedUserObject.scores.length; i++) {
                // ==== CONSOLE.LOG TESTING ====
                console.log("storedUserObject.scores.length in apiRoutes.js File is : " + storedUserObject.scores.length);

                difference += Math.abs(storedUserObject.scores[i] - req.body.scores[i]);
                // ==== CONSOLE.LOG TESTING ====
                console.log("Variable difference2 in apiRoutes.js File is : " + difference);

            }

            if (difference < lowestDifferenceInt) {

                lowestDifferenceInt = difference;
                // ==== CONSOLE.LOG TESTING ====
                console.log("Variable lowestDifferenceInt2 in apiRoutes.js File is : " + lowestDifferenceInt);

                chosenMatch = storedUserObject;
                // ==== CONSOLE.LOG TESTING ====
                console.log("Variable chosenMatch 2 in apiRoutes.js File is : " + JSON.stringify(chosenMatch));

            } //End of if Statement
        }); //End of friendData.forEach

        friendData.push(req.body);
        // ==== CONSOLE.LOG TESTING ====
        console.log("Variable friendData in apiRoutes.js File is : " + JSON.stringify(friendData));

        res.json(chosenMatch);
        // ==== CONSOLE.LOG TESTING ====
        console.log("\nHERE IS THE BEST FAMOUS FRIEND MATCH Variable chosenMatch 3 in apiRoutes.js File is : " + JSON.stringify(chosenMatch) + "\n");




    }); //End of app.post
}; //End of module.exports = function (app)





//----- Do Not Pay Attention to the code below:

// 	// We need an object to hold the new bestFriend
// 	var bestFriend = {
// 		name: "",
// 		photo: "",
// 		friendDiff: 10000 //Default # to beat
// 	};

// // ==== CONSOLE.LOG TESTING ====
// console.log("\nCurrent request.body: \n" + request.body + "\n");

// //Take results of user's survey POST and parse it.
// var userData = req.body;
// var userName = userData.name;
// var userPhoto = userData.photo;
// var userScore = userData.score;

// //Create variable to hold the total Friend Score Difference
// var totalDifference = 0;	//Set default to 0

// // Begin Comparison Logic with for loop to compare all friends
// for (var i = 0; i < friends.length; i++) {

// // ==== CONSOLE.LOG TESTING ====
// console.log(friends[i].name);

// //Reset totalDifference to 0
// totalDifference = 0;

// //Loop through all the scores for each person.
// for (var a = 0; a < friends[i].score[a]; a++) {

// //Calculate the difference between the scores
// //Add them into the totalDifference
// totalDifference += Math.abs(parseInt(userScore[a] - parseInt(friends[i].score[a])));

// //If else statement
// //If the sum of differences is less than the differences of the current best Friend
// if (totalDifference <= bestFriend.friendDiff) {

// //Then reset the bestFriend to the new bestFriend
// bestFriend.name = friends[i].name;
// bestFriend.photo = friends[i].photo;
// bestFriend.friendDiff = totalDifference;
// } //End if statement
// } //End of second for loop
// } //End of first for loop

// //Now we can save the new user's data to the database friends
// //This happens AFTER we check compatibility
// //Otherwise, the check would return the user's info
// friends.push(userData);

// //Return a new JSON with the user's Best Friend.
// //This is used by the modal.
// res.json(bestFriend);
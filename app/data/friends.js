// =============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer. 
// But you could have it be an empty array as well.
// =============================================================================

var friendData = [
	{
		//Alias Agent Michael Scarn
		"name": "Agent Michael Scarn",
		"photo": "/../public/assets/AgentMichaelScarn.jpeg",
		"scores": [5,1,4,4,5,1,2,5,4,1]
	},
	{
		//Alias Anastasia Beaverhausen
		"name": "Anastasia Beaverhausen",
		"photo": "/../public/assets/AnastasiaBeaverhausen.jpeg",
		"scores": [1,1,4,5,5,2,5,5,5,1]
	},
	{
		//Alias Art Vandelay
		"name": "Art Vandelay",
		"photo": "/../public/assets/ArtVandelay.jpeg",
		"scores": [3,2,3,4,4,4,3,5,1,3]
	},
	{
		//Alias Burt Macklin
		"name": "Burt Macklin",
		"photo": "/../public/assets/BurtMacklin.jpeg",
		"scores": [2,1,4,2,5,2,3,4,1,4]
	},
	{
		//Alias Clive Bixby
		"name": "Clive Bixby",
		"photo": "/../public/assets/CliveBixby.jpeg",
		"scores": [1,4,3,2,3,3,2,5,2,4]
	},
	{
		//Alias Duke Silver
		"name": "Duke Silver",
		"photo": "/../public/assets/DukeSilver.jpeg",
		"scores": [1,2,1,5,3,1,4,2,3,1]
	},
	{
		//Alias Janet Snakehole
		"name": "Janet Snakehole",
		"photo": "/../public/assets/JanetSnakehole.jpeg",
		"scores": [5,3,4,3,2,4,1,5,2,5]
	},
	{
		//Alias Ken Adams
		"name": "Ken Adams",
		"photo": "/../public/assets/KenAdams.jpeg",
		"scores": [2,3,2,1,1,5,2,2,3,1]
	},
	{
		//Alias Ms. Chanandler Bong
		"name": "Ms. Chanandler Bong",
		"photo": "/../public/assets/MsChanandlerBong.jpeg",
		"scores": [1,5,1,4,3,4,5,4,4,2]
	},
	{
		//Alias Regina Phalange
		"name": "Regina Phalange",
		"photo": "/../public/assets/ReginaPhalange.jpeg",
		"scores": [5,1,4,4,5,1,2,5,4,1]
	}
]; //End of friends 'database' array

// Note how we export the array.
//This makes it accessible to other files using require. 
module.exports = friendData;

// ==== CONSOLE.LOG TESTING ====
console.log("\nInformation from the friends.js File as friendData:\n" + JSON.stringify(friendData, null, "   ") + "\n");

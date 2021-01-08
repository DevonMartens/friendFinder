// Path
var path = require('path');

// Import the list of friend entries
var friends = require('../app/friends.js');

// Export API routes
module.exports = function(app) {

	// list of friend entries
	app.get('/api/friends', function(req, res) {
		res.json(friends);
	})

	// get request to get friend with entry
	app.post('/api/friends', function(req, res) {
    
		var userInput = req.body;
   
		var userResponses = userInput.scores;
		

		// find best friend var
		var friendName = '';
		var friendImage = '';
		var totalDifference = 10000; // Make the initial value big for comparison

		// compare all friends in the list
		for (var i = 0; i < friends.length; i++) {
			;

			//  differenes for each question
			var diff = 0;
			for (var j = 0; j < userResponses.length; j++) {
				diff += Math.abs(friends[i].scores[j] - userResponses[j]);
			}
		

			// If lowest difference, record the friend match
			if (diff < totalDifference) {
		

				totalDifference = diff;
				friendName = friends[i].name;
                friendImage = friends[i].photo;
			}
		}

		// Add new user
		friends.push(userInput);

		// Send appropriate response
		res.json({status: 'OK', friendName:friendName, friendImage:friendImage});
	});
};
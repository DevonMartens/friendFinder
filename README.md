# friendFinder
friendFinder - Node and Express Servers

This repository contains my homework for unit 13 of coding boot camp. 

Overview:
I built a compatibility-based "FriendFinder" application -- basically a dating app. This full-stack site will take in results from your users' surveys, then compare their answers with those from other users. The app will then display the name and picture of the user with the best overall match.

Express is to handle routing. 

"Express is a minimal and flexible Node.js web application framework that provides a robust set of features to develop web and mobile applications. It facilitates the rapid development of Node based Web applications." -tutorialspoint.com › nodejs › nodejs_express_framework

About this App:


The survey is 10 questions I created. Each answer is on a scale of 1 to 5 based on how much the user agrees or disagrees with a question.


-The server.js file should requires the basic npm (node) packages: express and path.


-The htmlRoutes.js file includes two routes:

1. A GET Route to /survey which displays the survey page.
2. A default, catch-all route that leads to home.html which displays the home page.



T-he apiRoutes.js file contains two routes:

1. A GET route with the url /api/friends. This is used to display a JSON of all possible friends.
2. A POST routes /api/friends. This is used to handle incoming survey results. This route is also used to handle the compatibility logic.



The data is saved from the application inside of app/data/friends.js as an array of objects. Each of these objects follows the format below.


{
  "name":"Devon",
  "photo":"1234.jpg",
  "scores":[
      5,
      1,
      4,
      4,
      5,
      1,
      2,
      5,
      4,
      1
    ]
}


The users most compatible friend is determined by the following:

Each of the user's results are converted into a simple array of numbers (ex: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]).
The differences are then compared between current user's scores against those from other users, question by question. They are added up and the differences to calculate the totalDifference.

Example:

User 1: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]

User 2: [3, 2, 6, 4, 5, 1, 2, 5, 4, 1]

Total Difference: 2 + 1 + 2 = 5


Once the current user's most compatible friend is found, the app will display the result as a modal pop-up.The modal displays both the name and picture of the closest match.


Key topic covered in this homework and unit:
-http
-Express.js
-Routing
-Postman
-HTTP POST requests
-Express.static()
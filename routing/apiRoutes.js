var path = require("path");
var express = require("express");
var friends = require('../data/friends');
var app = module.exports = express();




app.get("/api/friends", function(req, res) {
  res.json(friends);
});

app.post("/api/friends", function(req, res) {
  
  var bestFriend = {
    name:"",
    photo:"",
    testDiff: Infinity
  };
  
  
  var userData = req.body;
  var userScores = userData.scores;
  var totalDiff;

 for (var i = 0; i < friends.length; i++) {
      var currentFriend = friends[i];
      totalDiff = 0;
  
        for (var x = 0; x < currentFriend.scores.length; x++) {
          var currentFriendScore = currentFriend.scores[x];
          var currentUserScore = userScores[x];

          totalDiff += Math.abs(parseInt(currentUserScore) - parseInt(currentFriendScore));
        }

        if (totalDiff <= bestFriend.testDiff) {
          bestFriend.name = currentFriend.name;
          bestFriend.photo = currentFriend.photo;
          bestFriend.testDiff = totalDiff;
        }
      }
    friends.push(userData);

    res.json(bestFriend);
  });


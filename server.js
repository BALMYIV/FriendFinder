var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var apiRouter = require("./routing/apiRoutes.js");
var htmlRouter = require("./routing/htmlRoutes.js");

var app = express();

var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(apiRouter);
app.use(htmlRouter);


app.listen(PORT, function() {
  console.log("Server is listening on port:"+ PORT);
});



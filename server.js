// Require dependencies
var express = require("express");
var bodyParser = require("body-parser");
var cheerio = require("cheerio");
var mongoose = require("mongoose");
var exphbs = require("express-handlebars");
var request = require("request");

// set the port
var PORT = process.env.PORT || 3000;

//set up express
var app = express();

//set express router
var router = express.Router();

// set public fodler to static directory
app.use(express.static(__dirname = "/public"));

//use router
app.use(router);

//Listen on Port
app.listen(PORT, function() {
    console.log ("Listening on port: " + PORT);

});


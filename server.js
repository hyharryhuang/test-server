var express = require("express");
var bodyParser = require("body-parser");
var app = express();

var url = require('url');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

app.get("*", function(req, res) {
   	var path = url.parse(req.url).pathname;
	res.send('you typed: ' + path);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
	console.log("Listening on " + port);
});
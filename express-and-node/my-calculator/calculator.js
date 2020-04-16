//jshint esversion:6

const express = require("express");

// add ability to parse input
const urlencodedParser = express.urlencoded({extended: true});
const app = express();

app.get("/", function(req, res) {
  // __dirname gives the filepath of the current file,
  // no matter where it is hosted
  res.sendFile(__dirname + "/index.html");
});

app.post("/", urlencodedParser, function(req, res) {
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);
  var result = num1 + num2;
  res.send(num1 + " + " + num2 + " = " + result);
});

app.listen(3000, function() {
  console.log("Listening on port 3000");
});

//jshint esversion:6

const express = require("express");
const urlencodedParser = express.urlencoded({extended: true});
const app = express();

app.use(express.static("public")); // all static files to use


app.get("/", function(req, res) {
  res.sendFile(__dirname + "/signup.html");
});

app.post("/", urlencodedParser, function(req, res) {
  var firstName = req.body.fname;
  var lastName = req.body.lname;
  var email = req.body.email;

  console.log(firstName + " " + lastName + " " + email);
});

app.listen(4444, function() {
  console.log("Listening on port 4444");
});

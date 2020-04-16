//jshint esversion:6

const express = require("express");
const app = express();

/*
get  - request to home/root
Defines what will happen when someone makes a
request for the home root directory
Callback function
  - tells server what to do when request happens
  - request (req)
  - response (resp): tells server how to respond, we must send the response

*/
app.get("/", function(req, res) {
  res.send("<h1>HelloWorld</h1>");
});

app.get("/contact", function(req, res) {
  res.send("Contact me at email@email.com");
});

app.get("/about", function(req, res) {
  res.send("My name is Megan and I like to code, make music, and care for plants");
});

app.get("/hobbies", function(req, res) {
  res.send("<ul><li>Guitar</li><li>Code</li><li>Plants</li></ul>");
});

// tells it to listen on a specific port
// app.listen(3000);
app.listen(3000, function() {
  console.log("Server started on port 3000");
});

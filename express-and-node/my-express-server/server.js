//jshint esversion:6

const express = require("express");
const app = express();

/*
get  - request to home/root
Defines what will happen when someone makes a request for the
home root directory
Callback function
  - tells server what to do when request happens
  - request (req)
  - response (resp): tells server how to respond, we must send the response

*/
app.get("/", function(req, resp) {
  response.send("<h1>HelloWorld</h1>");
});

// tells it to listen on a specific port
// app.listen(3000);
app.listen(3000, function() {
  console.log("Server started on port 3000");
});

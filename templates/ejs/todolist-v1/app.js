//jshint esversion: 6

const express = require("express");
const app = express();

app.set('view engine', 'ejs');

app.get("/", function(req, res) {

  var today = new Date();
  var currDay = today.getDay();
  console.log(currDay);
  var day = "";

  switch (currDay) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
      break;
    default:
      console.log("Error: current day is iqual to: " + currDay);
  }

  res.render('list', {
    kindOfDay: day
  });

});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});

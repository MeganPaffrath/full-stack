//jshint esversion:6

const express = require("express");
const urlencodedParser = express.urlencoded({extended: true});
const app = express();

app.get("/bmicalculator", function(req, res) {
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator", urlencodedParser, function(req, res) {
  console.log(req.body);
  let height = Number(req.body.height);
  let weight = Number(req.body.weight);
  // convert to kg
  weight = weight * 0.453592;
  // convert to m
  height = height * 0.0254;

  let bmi = weight / (height * height);
  let output = "";

  if (bmi < 18.5) {
    output = "You are underweight";
  } else if (bmi < 24.9) {
    output = "You are a normal weight";
  } else if (bmi < 29.9) {
    output = "You are overweight";
  } else {
    output = "You are obese";
  }

  res.send(output + ", your bmi is: " + bmi);

});

app.listen(4444, function() {
  console.log("Listening on port 4444");
});

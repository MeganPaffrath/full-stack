//jshint esversion:6

const express = require("express");
const https = require("https"); // http is nate module in node
const urlencodedParser = express.urlencoded({extended: true});


const app = express();

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", urlencodedParser, function(req, res) {
  // get data from API:
  let location = req.body.cityName;
  let units = "imperial";
  const apiFile = require("../../api-keys.json");
  const apiKey = apiFile.apiKeys.openweathermap;
  console.log(apiKey);

  const url = "https://api.openweathermap.org/data/2.5/weather?q=" + location +
  "&appid=" + "304e3af6c66dd8cf4ea388a73afe1d2a" + "&units=" + units;

  https.get(url, function(response) {
    console.log(response.statusCode);
    response.on("data", function(data) {
      const weatherData = JSON.parse(data);
      try {
        const temp = weatherData.main.temp;
        const description = weatherData.weather[0].description;
        const icon = weatherData.weather[0].icon;
        const preIcon = "http://openweathermap.org/img/wn/";
        const postIcon = "@2x.png";
        const imageHTML = `<img src="${preIcon}${icon}${postIcon}" style="background-color: black;">`;
        res.setHeader('Content-type','text/html');
        res.write(imageHTML);
        res.write("<h1>It is " + temp +
        " degrees in "+ req.body.cityName +"! You can see " + description + ".</h1>");
        res.send();
      } catch(e) {
        res.send("Could not retrieve data for entry.");
        console.log(weatherData);
        console.log("Error: " + e);
      }

    });
  });






  console.log("Post rec.");
});



app.listen(4444, function() {
  console.log("Server running on port 4444");
});

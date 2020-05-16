//jshint esversion:6

const express = require("express");
const urlencodedParser = express.urlencoded({extended: true});
const app = express();
const https = require("https");

app.use(express.static("public")); // all static files to use

// mailchimp
let apiKey, listID, apiKeyLastDigit;

try {
  const apiFile = require("../../private-data.json");
  apiKey = apiFile.apiKeys.mailchimp.api;
  listID = apiFile.apiKeys.mailchimp.listID;
} catch (e) {
  apiKey = process.env.API_KEY;
  listID = process.env.LIST_ID;
}

apiKeyLastDigit = apiKey.charAt(apiKey.length - 1);

// console.log(apiKey + " & " + listID + " & " + apiKeyLastDigit);


app.get("/", function(req, res) {
  res.sendFile(__dirname + "/signup.html");
});

app.post("/", urlencodedParser, function(req, res) {
  const firstName = req.body.fname;
  const lastName = req.body.lname;
  const email = req.body.email;

  const data = {
    members: [
      {
        email_address: email,
        status: "subscribed",
        merge_fields: {
          FNAME: firstName,
          LNAME: lastName
        }
      }
    ]
  };

  const jsonData = JSON.stringify(data); // turn user data to JSON

  const url = `https://us${apiKeyLastDigit}.api.mailchimp.com/3.0/lists/` +
  `${listID}`;
  console.log(url);

  const options = {
    method: "POST",
    auth: "meganpaffrath:" + apiKey,
  };

  const request = https.request(url, options, function(response) {
    if (response.statusCode === 200) {
      res.sendFile(__dirname + "/success.html");
    } else {
      res.sendFile(__dirname + "/failure.html");
    }

    response.on("data", function(data) {
      console.log(JSON.parse(data));
    });
  });

  request.write(jsonData);
  request.end();
});

app.post("/failure", function(req, res) {
  res.redirect("/");
});


app.listen(process.env.PORT || 4444, function() {
  console.log("Listening on port 4444");
});

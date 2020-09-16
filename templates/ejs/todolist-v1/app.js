//jshint esversion: 6

const express = require("express");
const urlencodedParser = express.urlencoded({extended: true});
const app = express();

app.set('view engine', 'ejs');
app.use(express.static("public"));

let items = [];

app.post("/", urlencodedParser, function(req, res) {
  item = req.body.item;
  items.push(item);
  res.redirect("/");
});

app.get("/", function(req, res) {
  var today = new Date();
  var currDay = today.getDay();
  console.log(currDay);

  var options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };

  var day = today.toLocaleDateString("en-US", options);

  res.render('list', {
    kindOfDay: day,
    listItems: items
  });

});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});

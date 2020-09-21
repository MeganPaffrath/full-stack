//jshint esversion: 6

const express = require("express");
const urlencodedParser = express.urlencoded({extended: true});
const app = express();

app.set('view engine', 'ejs');
app.use(express.static("public"));

let items = [];
let workItems =[];

app.post("/", urlencodedParser, function(req, res) {
  item = req.body.item;
  if (req.body.list === "Work") {
    workItems.push(item)
    res.redirect("/work")
  } else {
    items.push(item);
    res.redirect("/")
  }
  // console.log(req.body);
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
    listTitle: day,
    newListItems: items
  });

});

app.get("/work", function(req, res) {
  res.render("list", {listTitle: "Work List", newListItems: workItems});
})

app.post("/work", function(req, res) {
  let item = req.body.newItem;
  workItems.push(item);
  res.redirect("/work");
})

app.get("/about", function(req,res) {
  res.render("about")
})

app.listen(3000, function() {
  console.log("Server started on port 3000");
});

//jshint esversion: 6

const express = require("express");
// Require a node module, allows access to date() funciton
const date = require(__dirname + "/date.js");

// for parsing
const urlencodedParser = express.urlencoded({extended: true});

const app = express();
app.set('view engine', 'ejs');
app.use(express.static("public"));

// you can push to const array, but not assign to a new array
const items = [];
const workItems =[];

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
  const day = date.getDay();

  res.render('list', {
    listTitle: day,
    newListItems: items
  });

});

app.get("/work", function(req, res) {
  res.render("list", {listTitle: "Work List", newListItems: workItems});
})

app.post("/work", function(req, res) {
  const item = req.body.newItem;
  workItems.push(item);
  res.redirect("/work");
})

app.get("/about", function(req,res) {
  res.render("about")
})

app.listen(3000, function() {
  console.log("Server started on port 3000");
});

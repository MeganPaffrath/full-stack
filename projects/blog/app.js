//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require('lodash');
const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


// Variables
let posts = [];
const initialHomeContent = "Welcome to the homepage, the homepage, the homepage. This is the homepage. Yay. Yay Yay.";
const aboutContent = "Oh, cool, an about page";
const contactContent = "My phone number consists of numbers and dashes, good luck!";

app.get("/", (req,res) => {
  res.render("home", 
    {
      initialHomeContent: initialHomeContent,
      posts: posts
    }
  );

  console.log(posts);
})

app.get("/about", (req, res) => {
  res.render("about", {aboutContent: aboutContent});
})

app.get("/contact", (req,res) => {
  res.render("contact", {contactContent: contactContent});
})

app.get("/posts/:post", (req, res) => {
  let postFound = null;
  posts.forEach((item) => {
    const findTitle = _.lowerCase(req.params.post);

    if (findTitle === (_.lowerCase(item.title))) {
      console.log("Look, wer found: ", item);
      postFound = item;
    }
  })

  if (postFound) {
    res.render("post", 
    {
      title: postFound.title,
      content: postFound.content
    }
  );
  } else {
    res.redirect("/");
  }

  

})

app.get("/compose", (req,res) => {
  res.render("compose");
})

app.post("/compose", (req,res) => {
  const post = {
    title: req.body.composeTitle,
    content: req.body.composePost
  };

  posts.push(post);
  res.redirect("/");
})

app.listen(3000, () => {
  console.log("Server started on port 3000");
});

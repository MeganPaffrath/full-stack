[Return](../../README.md)

# RESTful API

- `REST` = REpresentational State Transfer

# How It Works

- Make request
  - HTTP Request
    - Hyper Text Transfer Protocall Request
    - Client makes request to server
  - HTTPS Request
    - HTTP Secure Request
- Server checks to see if request can be fullfilled
  - computation, work out code, communicate with database, ect.
- Server Sends back result
  - Error
    - 404: resource does not exist

# Rules

- Use HTTP Request Verbs
  - Utilize CRUD (create, read, update, delete)
  - GET: read
    - getting data from database
  - POST: create
    - when data posted to server, create entry in db and save for later
  - PUT & PATCH: update
    - PUT - send and entire new entry to replace the previous
    - PATCH - only sending the peice of data that needs to be updated
  - DELETE: delete
    - remove data from db
- Use specific pattern of routes and endpoint URLs
- Collection names should be all lowercase and plural
  - ex: articles

# Build API

- Create directory for API
- npm init -y
- npm i body-parser mongoose ejs express
- touch app.js
  - add server code

```JavaScript
//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require('mongoose');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));

// API ------------------------

// connect to DB
mongoose.connect("mongodb://localhost:27017/wikiDB", {userNewUrlParser: true});

// create schema
const articleSchema = {
  title: String,
  content: String
};

// Create model
const Article = mongoose.model("Article", articleSchema);

// API ------------------------

// port where app is ran
app.listen(3000, function() {
  console.log("Server started on port 3000");
});
```

- Set up MongoDB
  - DB name, collections and collection fields

# Routing

- Use express

  ```JavaScript
  app.get(route, function(req, res){

  })
  ```

- Read from db

  ```JavaScript
  <ModelName>.find(function(err, results){
    // use the found results doc
  });
  ```

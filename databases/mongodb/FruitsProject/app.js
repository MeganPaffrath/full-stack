//jshint esversion:6

const mongoose = require('mongoose');

// connect to mongo w/ mongoose
mongoose.connect("mongodb://localhost:27017/fruitsDB", { useNewUrlParser: true, useUnifiedTopology: true});


const fruitSchema = new mongoose.Schema ({
    name: {
        type: String,
        required: [true, "Why no fruit name?"]
    },
    rating: {
        type: Number,
        min: 1,
        max: 10
    },
    review: String
})

// Mongoose Model:
const Fruit = mongoose.model("FRUIT", fruitSchema);

// Create a document from the model:
const fruit = new Fruit ({
    name: "Apple",
    rating: 5,
    review: "Pretty solid as a fruit, wouldn't feel good to be hit with one"
})

// fruit.save();

const personSchema = new mongoose.Schema ({
    name: String,
    age: Number,
    favoriteFruit: fruitSchema
})

const Person = mongoose.model("PERSON", personSchema);

const person = new Person ({
    name: "John",
    age: 37
})

// person.save();

const kiwi = new Fruit({
    name: "Kiwi",
    score: 10,
    review: "The best"
});

const orange = new Fruit({
    name: "Orange",
    score: 7,
    review: "Good vitamins"
});

const banana = new Fruit({
    name: "Banana",
    score: 4,
    review: "Weird texture"
});

// Fruit.insertMany([kiwi, orange, banana], function(err){
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Successfully saved all the fruit");
//     }
// });

// Fruit.updateOne( {_id: "5f6ae6db61f55019f1413a5c"}, {name: "Peach"} , function(err) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("SUccessfully updated the doc");
//     }
// });

// Delete
// Fruit.deleteOne( {name: "Pineapple" }, function(err){
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Successful deletion");
//     }
// })

// Person.deleteMany({name: "John"}, function(err) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("removed john");
//     }
// });


// Embeded document:
// Lets give a person a favorite fruit
// const personSchema = new mongoose.Schema ({
//     name: String,
//     age: Number,
//     favoriteFruit: fruitSchema // ADDED THIS LINE
// })

const pineapple = new Fruit({
    name: "Pineapple",
    score: 9,
    review: "Great fruit."
});

// pineapple.save();

const amy = new Person({
    name: "Amy",
    age: 12,
    favoriteFruit: pineapple
});

// amy.save();

// Lets give John a favorite fruit
const pear = new Fruit({
    name: "Pear",
    score: 10,
    review: "It's so good"
})

Person.updateOne( {name: "John"}, {favoriteFruit: pear}, function(err) {
    if (err) {
        console.log(err);
    } else {
        console.log("Successful.")
    }
});

// Reading from
Fruit.find(function(err, fruits){
    if (err) {
        console.log(err);
    } else {
        // CLOSE THE CONNECTION
       mongoose.connection.close();
        fruits.forEach(function(fruit){
            console.log(fruit.name);
        })
        // console.log(fruits);
    }
})

// close the connection

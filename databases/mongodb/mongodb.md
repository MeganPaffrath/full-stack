# Mongodb
[Return](../../README.md)
Topics:
* [CRUD](#CRUD)
* [Relationships](#Relationships)

# Get Started
* Can install and use locally or can use with the Native MongoDB Driver
* [Manual](https://docs.mongodb.com/manual/introduction/)

# Using shell
* Start: `mongo`
* confused: `help`
* use a database: `use <dbName>`
* What database am I in?: `db`

# CRUD:
* Create:
    * `db.collection.insertOne()` or `db.collection.insertMany()`
        * if the collection does not exist, that collection will be created
    * Insert JS object:
        ```JavaScript
        db.users.insertOne(
            {
                name: "megan",
                age: "24",
                status: "student"
            }
        )
        ```
* Read:
    * Find:
        * see all: `db.collection.find()`
        * narrow results w/ query: `db.collection.find(query,projection)`
            * projection is optional, can use to specify the fields to return
            * by name: `db.products.find({name: "pencil"})`
            * operators: 
                * greater than: `db.products.find({price: {$gt: 1}})`
                    * returns results w/ price > 1
            * With Projection:
                * `db.products.find({_id: 1}, {name: 1, _id: 0})`
                    * only returns name, ignores id
* Update:
    ```JavaScript
    db.collection.updateOne(
        { _id: 1 }, // filter
        {$set: {count: 1}}
    )
    ```
* Delete
    ```JavaScript
    db.collection.deleteMany(
        { status: "reject" } // deletion filter
    )
    ```

# Relationships
* Embeded Documents: 
    ```JavaScript
    db.products.insert(
        {
            _id: 2,
            name: "pencil",
            price: 1.30,
            stock: 43,
            reviews: [
                { // this is a single document embedded in a product
                    authorName: "Sally",
                    rating: 5,
                    review: "It does what a pencil should do"
                }, 
                { // because this is a document, we can have multiples
                    authorName: "Tim",
                    rating: 1,
                    review: "It has no ink"
                }
            ]
        }
    )
    ```

# Usage
* ODM : Object document mapper
    * mongoose - very popular and simple
* Native MongoDB

## The Native MongoDB Driver

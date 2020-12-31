# Databases

[Back To Main](../README.md)

# Helpful

- Robo 3T
  - Graphic user interface for MongoDB
  - robomongo.org

## When starting w/ any new database

- Learn CRUD Operations (create, read, update, delete)

## Choosing a database

- There are so many out there
- Depending on the data you are storing and the structure of data, you may prefer to use one database over another
- Types: QL vs NoSQL (and most popular)
  - SQL: Structured Query Language
    - MySQL
    - PostgreSQL
  - NoSQL: Not only Structured Query Language
    - mongoDB
    - redis

### SQL - structure and rules

- `relational` - good for keeping relationships about data
- Similar to excel - goups data into tables
- Can be extremely inflexible
- If there is no data somewhere, it will be null

### NoSQL - flexible and adaptable as things come up

- `non-relational` - cant really formulate relationships between data
- Scalable
- Not bound to particular structure
- Does not store null variables
- Mongo uses JSON objects
  - key value pairs
  - records do not have to follow the same structure
- not good for implementing relationships between data

### MySQL vs MongoDB

| Comparison | MySQL                                          | MongoDB                               |
| ---------- | ---------------------------------------------- | ------------------------------------- |
| Age        | very mature                                    | pretty new                            |
| Running    | Table Structure                                | Document Structure                    |
| Schema     | Requires a Scheme (structure) - hard to change | More Flexible to changes              |
|            | Great with relationships                       | not great with complex relationships  |
|            | Scales Vertically                              | Horizontal Scalable - easier to scale |

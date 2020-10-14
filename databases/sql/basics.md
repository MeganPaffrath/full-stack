# Basics
* [Return To SQL](sql.md)
* [Return to Main](../../README.md)
### References: 
* `Murach’s MySQL (3rd Edition)` (Chapter 1)

# Topics
* [Client/Server Systems](#Client/Server-Systems) **
* [Relational Database Model](#Relational-Database-Model) **
* [SQL Statements](#SQL-Statements) ** 

# Client/Server Systems
* 3 hardware components
    * `clients` : PCs, Macs, or workstations on system. Also can be smart devices
    * `server` : computer that stores files and databases of the system. Provides services to client. Often refered to as a `database server` if it stores databases
    * `network` : consists of communication lines and components that connect cleints and the servers of the system
* Software
    * `server software` : stores and manages databases
        * requires a `dataase management system` or `DBMS` for back end processing
    * `client software` : app that does work specified by user
        * `data access API` (application programming interface) helps app and database DBMS communicate
* Communication
    * `SQL` (Structured Query Language) queries are sent from client software through the API. The DBMS recieves a query and returns the query results to the client
    * Application software communicates with Database Management System (DBMS) sending SQL queries through the data access API
# Network System
* Client / User Interface sends user request to application server
* Application server sends SQL queries to Database Server (DBMS)
* DBMS sends results to application server which sends response to client
# Relational Database Model
* Contains multiple tables that contain relationships
* `Primary Key` : uniquely identifies each row
* `Composit Primary Key` : when a primary key uses 2+ columns
# SQL statements
* Common statements:
    * `Data Manipulation Language (DML)`
        * SELECT
        * INSERT
        * UPDATE
        * DELETE
    * `Data Definition Language (DDL)`
        * CREATE DATABASE, DROP DATABASE
        * CREATE TABLE, ALTER TABLE, DROP TABLE
        * CREATE INDEX, ALTER INDEX, DROP INDEX
* Simple Statements
    ```SQL
    SELECT column_one, column_two, column_three,
        column_five + column_four AS columns_added
    FROM some_table
    WHERE column_five + column_four > 15
    ORDER BY column_one
    ```

# Vocabulary
* `Relational Database` : 
* `Table` :
* `Column` :
    * every column has a data type
    * if PK (primary key), it is a primary key
    * if NN (not null), column must have data
    * UQ (unique value)
    * B : binary, and more attributes
    * can have a default value
    * can have an auto incremented column
* `Row` :
* `Cell` : 
* `Primary Key` : A column in table that will help identify the rows uniquely
* `Foreign Key` : Reference to the primary key in the reference table. There can be a one to many relationship. One row from reference table (containing primary key) can have multiple rows in another table (containing foreign key)
* `Composite Primary Key` : Combination of 2 or 3 columns together to make a primary key
* `Non-primary key (unique key)` : Dont help identify rows uniquely, but they cannot be null or duplicates
* `Index` : Tell system "this is the column I will most frequently be using"
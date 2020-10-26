# Two Or More Tables
Reference: `murach's MySQL 3rd Edition by Joel Murach` Chapter 4
* [Back to SQL](sql.md)
* [Return To Main](../../README.md)


# Topics
* [Relationships](#Relationships)
    * Primary Key, Foreign Key
* [Joins](#Joins) **
    * Inner Join, Outer Join, Ad Hoc
* [Using Clause](#Using-Clause) **
* [On Clauces](#On-Clause) **

---
# Relationships
* It is important to note where the `primary key` and `foreign key`s are in the tables that you will be joining
---
# Joins
* Purpose: to get common data
* Types:
    * Ad Hoc
    * Implicit
    * Inner Join
    * Outer Join (Left and Right Outer Join)
## Ad Hoc
* The 2 tables are not related by primary and foreign keys
* Join by similar columns
    * Might need to use multiple columns (EX: first and last name )
## Inner Join
* Looks at data where BOTH tables have the data
* Every row in the left table (first one mentioned) matches  with every row in the right tables
```SQL
-- All the records that match produce a row
-- A person will have multiple rows if there are multiple items for that person
SELECT *
FROM db.people p 
    JOIN db.items i
    ON p.person_id = i.person_id
```
## Outer Join
* `Left Outer Join`
    * Retrieve unmatched rows from first table (left table)
    * Retrieves null records from right table
* `Right outer Join`
    * Retrieve unmatched rows from second table (right table)
    * retrieves NULL records from the left table
## NATURAL Join
* used to join two columns with same name
    ```SQL
    FROM table
        NATURAL JOIN table_2
    ```
## Equijoin
## Cross Join
* Gives combination of table one and table two
* like cartesian product
```SQL
FROM table_1
    CROSS JOIN table_2
```
## Union
* Combines two queries
## Combined Joins
---
# Using Clause

---
# On Clause

# More



# Multiple Tables - OLD
## Join Types
* [Inner Join](#Inner-Join)
* [Outer Join](#Outer-Join) - Left, right, and full
* [Cross Join](#Cross-Join)
* [Union](#Union)
* [Combind Joins](#Combine-Joins)

## Inner Join
* Ex of inner join w/ alias:
    ```SQL
    SELECT some_list
    FROM some_table
        [Inner] JOIN another_table t2 ON some_condition
    ```
* Single Table Inner Join:
    * Only show instruments with the same price of another instrument:
    ```SQL
    SELECT DISTINCT v1.instrument_name, v1.list_price
    FROM instruments v1 JOIN instruments v2
	    ON v1.list_price = v2.list_price
        AND v1.instrument_id != v2.instrument_id
    ORDER BY instrument_name;
    ```

# Vocab
* Join
* Join Condidtion
* Inner Join
* Ad Hoc Relationship
* Qualified column name
* Table alias
* Schema
* Self-join
* Explicit syntax (SQL-92)
* Implicit syntax : have condition where 2 tables are joined
    * where x = y
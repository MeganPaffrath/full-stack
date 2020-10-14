
# SQL
[Return](../../README.md)

Contents:
* [Basics](basics.md)
    * client/server systems
    * relational database model
    * SQL statements
* [Single Tables](single-table.md) - NEED TO MOVE CONTENT
    * SELECT clause
    * WHERE clause
        * LIKE and REGEX
* [Two+ Tables](two-or-more-tables.md) - NEED TO MOVE CONTENT
* [Update Tables](update-tables.md) - Personal Rating: (4.5/5)
    * Make a copy of a table
    * delete a table
    * Insert rows (new and from other tables)
    * Update rows
    * Delete Rows
* [Summary Queries](summary-queries.md)
* [subqueries](subqueries.md)




# Move Content:
* [Select Examples](#Select-Examples)
* [Multiple Tables](#Multiple-Tables)


# Multiple Tables
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

## Outer Join
* Outer Join Types
    * Left Outer Join
    * Right Outer Join
    * Full Outer Join
## Cross Join

## Union
## Combine Joins

* Add: USING and NATURAL keywords
* ADD `GROUP BY`
* `DEFAULT`
* `HAVING` vs `WHERE` and when to use each
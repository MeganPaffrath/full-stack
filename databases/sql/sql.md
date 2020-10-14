
# SQL
[Return](../../README.md)

Contents:
* [Basics](basics.md)
    * client/server systems
    * Relational database model
    * SQL statements
* [Single Tables](single-table.md) - NEED TO MOVE CONTENT
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

## SELECT Statements
### 5 Clauses:
* SELECT
* FROM
* WHERE
* ORDER BY
* LIMIT

### Select Examples
* Select all items from table:
    ```SQL
    SELECT * FROM table_name
    ```
* Retrieve rows, calculate a row, only show rows where requirement is met, and sort by calculated row
    ```SQL
    SELECT row_one, row_two, row_three,
        row_one + row_two + row_three AS total_row
    FROM table_name
    WHERE total_row > 20 -- will only show what fits this req.
    ORDER BY total_row DESC -- can be either ASC/DESC
    ```
* Only show when value in range
    ```SQL
    SELECT some_date
    FROM date_table
    WHERE some_date BETWEEN '2019-01-01' AND '2020-01-30'
    ```
* Avoid duplicate rows
    ```SQL
    SELECT DISTINCT item
    FROM some_table
    ```
* Using `IN` and `NOT`
    ```SQL
    where some_state NOT IN ('CA', 'OR', 'WA')
    ```
* Using `LIKE`
    ```SQL
    WHERE city_name LIKE 'SAN%'
    ```
    will retrieve: San Fran, San Diego, ect.
* using ORDER BY
    * can use column postions
    * first item in list gets precidence
* LIMIT clause
    * limmits output amount
* Using `REGEXP`
    * `WHERE city REGEXP '^SA'` => Santa Ana, Sacramento
    * `WHERE city REEXP 'NA&+$'` => Pasade`na`,Santa A`na` 
* Column specification can be coded with:
    * all columns in a base table
    * column name in table
        * Ex with renaming
            ```
            SQL SELECT var_x AS "Full Names"
            ```
    * with calculation
        ```SQL
        SELECT item_one - item_two AS the_item
        ```
        ```SQL
        SELECT CONCAT(first_name, ' ', last_name) as full_name
        ```
    * with a function
        * Get first letters to form initials
            ```SQL
            SELECT first_name, last_name,
                CONCAT(LEFT(first_name, 1), LEFT(last_name, 1)) AS initials
            FROM some_table
            ```
### Functions:
* date format:
    * `DATE_FORMAT(date, format_string)`
    ```SQL
    SELECT DATE_FORMAT(date, '%m/%d/%y') AS 'MM/DD/YY',
        DATE_FORMAT(date, '%e-%b-%Y') AS 'DD/Mon/YYYY'
    FROM some_table
    ```
* Rounding: `ROUND(number[, number_of_decimal_places])`
    ```SQL
    SELECT some_number,
        ROUND(someNumber, 2) AS two_deci
    FROM some_table
    ```
* CONCAT
    * Get first letters to form initials
    ```SQL
    SELECT first_name, last_name,
        CONCAT(LEFT(first_name, 1), LEFT(last_name, 1)) AS initials
    FROM some_table
    ```
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
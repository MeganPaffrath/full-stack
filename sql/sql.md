# SQL

## SELECT Statements
### 5 Clauses:
* SELECT
* FROM
* WHERE
* ORDER BY
* LIMIT

### Examples
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
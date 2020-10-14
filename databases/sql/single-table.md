# Single Table
Reference: `Murach's MySQL 3rd Edition by Joel Murach` (Chapter 1-3)
* [Back to SQL](sql.md)
* [Return](../../README.md)

# Topics
* [SELECT Statements](#SELECT-Statements)
* [Select Examples](#Select-Examples)

# SELECT Statements
## Basic Select:
* Basic SELECT contains 5 Clauses:
    * SELECT, FROM, WHERE, ORDER BY, LIMIT
    ```SQL
    SELECT select_list -- required
    FROM table_source
    WHERE search_condition
    ORDER BY order_by_list - DESC / ASC
    LIMIT row_limit
    ```
* Select all items from table:
    ```SQL
    SELECT * FROM db.table_name
    ```
* More on Clauses
    * SELECT
        * unique only
            ```SQL
            SELECT DISTINCT column_one
            ```
    * WHERE
        * Only get items where the value is between 2 values:
            ```SQL
            WHERE date BETWEEN '2018-03-11' AND '2019-21-25'
            ```
        * Where something does not occur
            ```SQL
            WHERE NOT col_one < 0 -- where column is not negative
            ```
        * Contain certain values with regex (`LIKE and REGEXP`)
            ```SQL
            WHERE city LIKE 'SAN%' -- gets all cities that start w/ San
            ```
        * Where expression is null
            ```
            WHERE expression IS [NOT] NULL
            ```
    * ORDER BY item_to_order
        * `ORDER BY item DESC` or `ORDER BY item ASC`
    * LIMIT from, until
        * LIMIT 2, 5
            * gives 3rd record thorugh 5th record
# LIKE
* % : Starts with (Ex: 'T%' anything starting with T)
* _
# REGEXP
* ^ : look for pattern at beginning of string
    ```SQL
    WHERE city REGEXP '^SA' -- all cities STARTING with SA
    ```
* $ : match the ending character 
    ```SQL
    WHERE city REGEXP 'NA$' -- alll cities ending in NA
    ```
* . : any character
* [charlist] : any values in brackets will be chosen
* [char1-char2] : list of values in range
* | : or



# Select Examples
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
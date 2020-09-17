# SQL

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
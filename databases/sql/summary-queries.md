# Summary Queries
Reference: `murach's MySQL 3rd Edition by Joel Murach` Chapter 6
* [Back to SQL](sql.md)
* [Return](../README.md)

We want to analyze the records that we fetch

## Aggregate Functions : take list of values & returns output
* `ALL` = Select every keyword
* `DISTICT` = only unique values
* Functions:
    * AVG ([ALL|DISTICT] expression)
    * SUM ([ALL|DISTICT] expression)
    * MIN ([ALL|DISTICT] expression)
    * MAX ([ALL|DISTICT] expression)
    * COUNT ([ALL|DISTICT] expression)
    * COUNT (*)
## Summary Query
* EX: fetching total net income from all days
    ```SQL
    SELECT COUNT(*) AS number_of_rows,
        SUM(income_col - expences_col) AS net_income,
        ROUND(AVG(expences_col, 2)) AS avg_expences,
        MAX(expences_col) AS worst_spend_day,
        MIN(expences_col) AS best_spend_day
    FROM money_table

    -- IGNORE DUPLICATES:
    SELECT count(DISTINCT invoice_date) AS row_count, SUM(invoice_total) 
    FROM ap.invoices
    WHERE invoice_total - payment_total - credit_total > 0;
    ```
    * NOTE: you must COMPLETELY understand your tables and what you are trying to fetch. First query gave 11 results, and second gave 9.
    * count() will take; "*" , column number (1, 2, ...), column name, ...

## Group Specified Results, then Filtering and Ordering the results:
```SQL
SELECT some_column
FROM some_table
WHERE column_x >= column_y
GROUP BY column_x
HAVING <some condition>
ORDER BY column_y
```
* `GROUP BY`:
    * Let's you analyze elements of the table `by group`
    ```SQL
    -- Get total sum for each item of item_id
    SELECT item_id, SUM(cost_amount) FROM cost_table
    GROUP BY item_id; -- for each item_id you get one value for the sum
    ```
* `HAVING`:
    * Let't you determine output after using `GROUP BY`
## Summary with a final summary row
```SQL
SELECT person_id, COUNT(*) AS item_count,
    SUM(item_total) AS item_total
FROM some_table
GROUP BY person_id WITH ROLLUP -- this specifies that we want a summary row that gives a sum of all of the rows

-- same idea as
SELECT COUNT(*), SUM(item_total) FROM some_table
```
* We can use the GROUPING() function to specify text for a cell
    ```SQL
    -- if grouping function returns 1, the cell is NULL
    SELECT IF (GROUPING(some_value) = 1, 'New String', some_value) AS some_value
    ...
    ...
    --- to ONLY display summary rows:
    HAVING GROUPING(some_value) = 1 or GROUPING(another_value) = 1
    ```
## The OVER clause
* Important class for aggregate functions
* The over class converts the `aggregate functions` into `aggregate window` functions
* `OVER()`: the window is all of the results
* `OVER(PARTITION BY some_item)`
* `UNBOUNDED PRECEDING` : begining of window
* `UNBOUNDED FOLLOWING` : end window

## Naming a window
```SQL
WINDOW window_name AS
    ([partition_clause] [order_clause] [Frame_clasue])
```

## Things to understand better:
* the OVER clause
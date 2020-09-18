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
        SUM(income_col - expences_col) AS net_income
    FROM money_table
    ```


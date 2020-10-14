# Coding Subqueries
### References: 
* `Murach’s MySQL (3rd Edition)` (Chapter 7)
### Main Topics:
* Subqueries
    * Keywords: [ALL](#The-ALL-keyword), [ANY](#The-ANY-keyword)

---
* `Subquery` : a query inside of another query
    * constructed same way as regular query
* When do we use subqueries?
    * Can get same result from both
    * Sometimes subqueries are logically easier, many programmers pick this method
    * Time constraints:
        * `Joins are usually faster than subqueries`
    * Advantages of joins:
        * Can inculde columns from two different tables
        * Join is more intuitive when two tables are related by primary key and foreign key relationship
    * Advantages of subqueries:
        * Subquery can pass an aggregate value to the main query
        * Subquery is more intuitive when it uses ad hoc relationship
        * Long and complex queries can be easier to code using subqueries
* Can use subqueries in... 
    * In `WHERE` and `HAVING` clauses as search condition
    * in `FROM` clause as table specification
    * In `SELECT` clause as column specification
    * also can be in insert and delete statements

## Examples
* Subquery in WHERE:
    ```SQL
    SELECT some_column, another_column, count_column
    FROM some_table 
    -- "FROM some_table s" (often useful to use alias)
    -- can access alias in subquery
    WHERE another_column > -- DATA TYPES MUST MATCH
        (SELECT AVG(count_column)
        FROM some_table)
    ORDER BY some_column 
    ```
## The ALL keyword
| Condition | Equivalent Expression |
 | -- | -- |
 |x > ALL (1,2) | x > 2 |
 | x < ALL (1,2) | x < 1 |
 | x = ALL (1,2) | (x = 1) AND (x = 2) |
 | x <> ALL (1,2) | x NOT IN (1,2) |
* When we say > ALL, we are looking at the greatest result from the subquery.
## The ANY keyword
| Condition | Equivalent Expression |
 | -- | -- |
 |x > ANY (1,2) | x > 1 |
 | x < ANY (1,2) | x < 2 |
 | x = ANY (1,2) | x IN (1,2) |
 | x <> ANY (1,2) | (x <> 1) OR (x <> 2) |

 ## EXISTS operator
 * `WHERE [NOT] EXISTS (subquery)`
    * For all records, see if subquery has results or not

## Definitions
* `Inline View` : Having a subquery inside a from clause

## Complex Queries:
* When you have multiple subqueries, `it is important to have an alias for each subquery`
* Procedure
    * State the problem to be solved
    * Use psuedocode to outline query
    * code subqueries and test them to be sure they return correctly
    * code and test final query
---
## End Questions:
* Where can you write a subquery?
    * Within the WHERE, HAVING, FROM and SELECT clauses of SELECT statement. Also, can be in insert and delete
* Describe the difference between correlated an noncorrelated subqueries
* Describe the use of common table expressions (CTEs)
* What is an inline view?
    * Having a subquery inside a from clause
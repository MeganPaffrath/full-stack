# Update Tables
Reference: `murach's MySQL 3rd Edition by Joel Murach` Chapter 5
* [Back to SQL](sql.md)
* [Return](../README.md)

## Updates
* Operations should only be done after certain validations
    * Ex: you cannot move backwards easily once something is deleted
* For testing, first make a copy of table

## Create copy of table:
* Creating a copy does not copy primary or foreign keys
```SQL
CREATE TABLE table_copy AS -- as result of following select query:
SELECT *
FROM first_Tablev
WHERE some_column IS NOT NULL;
```
* After running - `mush refresh` DB
## Delete A table
```
DROP TABLE table_name;
```
## Insert Rows
* Using a Column List:
    * dont have to input to every column
    ```SQL
    INSERT [INTO] table_name [(column_list)]
    VALUES (expression_1[, expression_2]....) [,
        expression_1[, expression_2]...)]...
    ```
    ```SQL
    INSERT INTO table_name
        (col_1, col_2, col_3)
    VALUES
        ('123', 334, 'done', NULL),
        ('555', 135, 'not done', NULL);

    ```
* Without a Column List:
    * input for EACH column:
    ```SQL
    INSERT INTO table_name VALUES
        ('123', 334, 'done', NULL),
        ('333', 123, 'not done', NULL);
    ```
    * Know what all the columns are and each of their data types
* Insert using a subquery (select statement)
    ```SQL
    INSERT INTO table_name [(column_list)]
    SELECT * -- some select statement
    FROM some_table
    ```

## Update Rows:
* Single Row:
    ```SQL
    UPDATE some_table -- table to update
    SET first_name = 'Jerry', -- info to modify
        score = 1234.12
    WHERE user_id = 25 -- search condition
    ```
* Multiple rows with same ID
    ```SQL
    UPDATE some_table
    SET favorite_color = 'red'
    WHERE personality_type = 6; -- all people with this type personality like red
    ```

* When updating contents
    * the IDE you are using may or may not have a safe update mode
        * in safe mode you must have primary key or froeign key to update a row
    * Safe update prevents you from updating rows if the WHERE clauses is ommitted or does not refer to primary OR foreign key
    * MySQL: turn off safe update
        * edit->preferences->editor node->Safe Updates then restart

## Deleting Rows
* Delete Multiple Rows:
    ```SQL
    DELETE FROM some_table
    WHERE some_value = 12 -- every row w/ this gets deleted
    ```
* Delete w/ subquery
    ```SQL
    DELETE FROM some_table
    WHERE item_id IN
        (SELECT some_col -- delete w/ select
        FROM some_table
        WHERE some_value = 4)
    ```
* WARNING: if you turn safe update off and oit WHERE, all rows will be deleted
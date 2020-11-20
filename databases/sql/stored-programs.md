# Language Skills for writing Stored Programs

## References:

- `Murach's MySQL 3rd Edition by Joel Murach` (Chapter 13)
- [Video: SQL Server Programming pt12 - cursors](https://www.youtube.com/watch?v=RHRjLd0bEaQ)

## Links:

- [Back to SQL](sql.md)
- [Return](../../README.md)

# Stored Porgrams

- stored procedure
- stored function
- trigger
- event

# Statement blocks

- keep between BEGIN and END
- can name procedure

```SQL
CREATE PROCEDURE demo_var()
BEGIN
  DECLARE data VARCAR(50);
  SET data_v = 30;
  SELECT current_date() as "Todaysdate";
END
call demo_var()
```

# Flow of execution

- IF...ELSEIF...ELSE
- CASE...WHEN...ELSE
- WHILE...Do...LOOP
- REPEAT...UNTIL...END REPEAT
- DECLARE CURSOR FOR
- DECLARE...HANDLER

# Variables

- Declare var:
  - `DECLARE variable_name data_type [DEFAULT literal_value]`
- Set Var
  - ` SET var_name = {literal_val|expression}
- setting var to seleccted val

```
SELECT col_1[, col_2]...
INTO var_name_1[, var_name_2]...
```

# Repeat loop

```
REPEAT
  SET i = i + 1;
UNTIL i - 5;
END REPEAT;
```

# Cursor

```SQL
CREATE PROCEDURE demo_cursor()
BEGIN
  -- initialize test val for if no vals in cursor
  DECLARE no_records INT DEFAULT FALSE;
  -- DECLARE variables
  DECLARE var_1 VARCHAR(50);
  DECLARE var_2 char(2);
  DECLARE data_gathered VARCHAR(1000) DEFAULT "";

  -- First declare the cursor
  DECLARE cursor_name CURSOR
    FOR SELECT * from table_name

  -- open
  OPEN cursor_name;

  -- if no records found
  DECLARE CONTINUE handler for NOT FOUND
    SET no_records = TRUE;

  -- loop through results (while there are still records)
  WHILE no_records=FALSE DO
    FETCH cursor_name INTO var_1, var_2;
    SET data_gathered = CONCAT(data_gathered, var_1, " ", var_2, "; ");
  END WHILE;

  -- close cursor
  CLOSE cursor_name;

  SELECT data_gatehred AS "data";
END

```

1. Declare Cursor

```SQL
DECLARE cursor_name CURSOR
  FOR SELECT * FROM table_name
```

2. Open the Cursor, then do the work

```SQL
OPEN cursor_name
```

3. Close the Cursor

```
CLOSE cursor_name
```

4. Remove references to the cursor (good housekeeping)

```SQL
DEALLOCATE cursor_name
```

## On cursors:

- Declare cursor
  - `DECLARE cursor_name CURSOR FOR select_statement;`
- Declare handler
  - `DECLARE CONTINUE HANDLER FOR NOT FOUND handler_statement;`
- open cursor
  - `OPEN cursor_name`
- get column vals
  - `FETCH cursor_name INT variable1[, var2][, var3]...`
- close cursor
  - `CLOSE cursor_name`
- remove reference to cursor (good housekeeping)
  - `DEALLOCATE cursor_name`

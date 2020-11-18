# Language Skills for writing Stored Programs

Reference: `Murach's MySQL 3rd Edition by Joel Murach` (Chapter 13)

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

- Declare
  - `DECLARE cursor_name CURSOR FOR select_statement;`
- Declare handler
  - `DECLARE CONTINUE HANDLER FOR NOT FOUND handler_statement;`
- open cursor
  - `OPEN cursor_name`
- get column vals
  - `FETCH cursor_name INT variable1[, var2][, var3]...`
- close cursor
  - `CLOSE cursor_name`

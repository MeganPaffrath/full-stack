# Using Functions - Scalar Functions

Reference: `Murach's MySQL 3rd Edition by Joel Murach` (Chapter 9)

- [Back to SQL](sql.md)
- [Return](../../README.md)

# Functions

- will help us retreive data in the correct format

## String Functions

- CONCAT(str[,str]...)
  - append strings together
- CONCAT_WS(sep, str1[,str2]...)
  - with seperator
  - specify seperator between strings
- LTRIM(str)
  - remove spaces in the string before series of characters
- RTRIM(str)
  - remove spaces after series of characters in string
- TRIM([[BOTH|LEADING|TRAILING] [remove] FROM] str)
  - can specify which side(s) and what to remove from the string
- LENGTH(str)
- LOCATE(find,search[,start])
  - search for specific thing
  - find: want to find
  - search: where to search
  - start: where to start the search
- LEFT(str,length)
  - return number of chars from begining of string
- RIGHT(str,length)
  - return number of chars from the end of string
- SUBSTRING_INDEX(str,delimiter, count)
  - get index of a substring
- SUBSTRING(str,start[,length])
  - get a string from a string
- REPLACE(serach, find, replace)
  - replace what is searched for in find string
- INSERT(str, start, length, insert)
- REVERSE(str)
- LOWER(str) : convert to all lowercase
- UPPER(str)
  -LPAD(str,length,pad) : padding on left side
- RPAD(str,length, pad) : padding on right
- SPACE(count) : number of space chars
- REPEAT(str, count) : repeat specified str count times

## Numeric Functions

- ROUND(number[,length])
  - round number to the nearest number
  - length is length after the decimal point
- TRUNCATE(number, length)
  - drop values after the decimal point
  - length is length after decimal point
- CEILING(number)
  - return smalles numb >= the number
- FLOOR(numb)
  - return largest number <= the number
- ABS(numb) : make positive
- SIGN(numb)
  - returns the sign of the number (1 for positive, -1 for negative, 0 if value is 0)
- SQRT(numb)
- POWER(number, power) : the number raised to power
- RAND([integer])
  - random number between 0 and integer
  - no integer, rand val between 0 and 1

# Date functions

- NOW()
  - PST current
  - can change time zone for curr session if you want to
  - gives date and time
- SYSDATE()
  - gives date and time
- CURRENT_TIMESTAMP()
  - gives date and time
- CURDATE()
  - local date
- CURRENT_DATE()
  - local date
- CURTIME()
  - locat time
- CURRENT_TIME()
  - local time
- UTC_DATE()
  - curr date in utc
- UTC_TIME()
  - curr time in utc

`if using different time zones, best to use UTC time`

## Parsing funcitons for date/time

- DAYOFMONTH(date)
- MONTH(date)
- YEAR(date)
- HOUR(date)
- MINUTE(time)
- SECOND(time)
- DAYOFWEEK(date)
- QUARTER(date)
- DAYOFYEAR(date)
- WEEK(date[,first])
- LAST_DAY(date)
- DAYNAME(date)
- MONTHNAME(date)
- EXTRACT(unit from date)
  - UNITS:
    - SECOND, MINUTE, HOUR, DAY, MONTH, YEAR, MINUTE_SECOND, HOUR_MINUTE, DAY_HOUR, YEAR_MONTH, HOUR_SECOND, DAY_MINUTE, DAY_SECOND

## Functions calculating dates and times

- DATE_ADD(date, INTERVAL expression unit) : example increase by 5 days
- DATE_SUB(date, INTERVAL expression unit)
- DATEDIFF(date1, date2)
- TO_DAYS(date)
- TIME_TO_SEC(time)

# Date / time

...

# The CASE function

- case example:

```SQL
SELECT column, some_value
  CASE some_value
    WHEN 1 then `value was 1`
    WHEN 2 THEN `value was 2`
    WHEN 3 THEN `value was 3`
  END as value_column
FROM some_table
```

# IF function

- Format
  - `IF(test expression, if_true_statement, otherwise_expression)`
- Example

  ```SQL
  SELECT some_value,
    IF(some_value = 5, 'Equals 5', 'Not 5')
    AS five
  FROM some_table
  ```

  # IFNULL function

  - Format
    - `IFNULL(test_expression, replacement_value)`
  - Example
    ```SQL
    SELECT payment
      IFNULL(payment, 'no payment made') AS paid_date
    FROM payment_table
    ```

# Regular expression functions

- REGEX_LIKE(expr, pattern)
- REGEX_INSTR(expr, pattern [, start])
- REGEXP_SUBSTR(expr, pattern [, start])
- REGEXP_REPLACE(expr, pattern, replace[, start])

# Ranking funcitons

- ROW_NUMBER() : OVER([partition_clause] order_clause)
- RANK() : OVER([partition_clause] order_clause)
- DENSE_RANK() : OVER([partition_clause] order_clause)
- NTILE(integer_expression) : OVER([partition_clause] order_clause)

* These functions help us do grouping, help us create window functions for non-agregate

# NTILE function

```SQL
SELECT terms_description
  NTIME(2) over (ORDER BY terms_id) as tile2,
  NTIME(3) over (ORDER BY terms_id) as tile3,
  NTIME(4) over (ORDER BY terms_id) as tile4,
FROM terms
```

# LAG function

- function that helps refer to values in the other rows in results secition
  - get data from previous row

# PERCENT_RANK and CUME_DIST

- PERCENT_RANK

* CUME_DIST

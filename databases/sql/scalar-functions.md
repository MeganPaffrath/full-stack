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

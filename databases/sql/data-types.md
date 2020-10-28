# Data Types

Reference: `Murach's MySQL 3rd Edition by Joel Murach` (Chapter 8)

- [Back to SQL](sql.md)
- [Return](../../README.md)

# Types

- Character
  - CHAR : helps store FIXED LENGTH data
    - ex: state CA, IL, NY ... (all have 2 letters)
    - each character = 4 bytes
  - VARCHAR : takes MAX LENGTH data can have
    - bytes used = 4 bytes \* char count + 1 to store length
  - Character types
    - Latin1
    - utf8mb3
    - utf8mb4 : default, supports all multilingual languages
      - most commonly used.
    - unicode standard
- Numeric
  - Integer types (no decimal point)
    - BIGINT - 8 bytes
    - INT - 4 bytes
    - MEDIUMINT - 3 bytes
    - SMALLINT - 2 bytes
    - TINYINT - 1 byte
  - Attributes
    - UNSIGNED - only positive numbers
    - ZEROFILL - pads 0's before the number
      - INT(4) ZEROFILL
        - for value 99 -> 0099
  - Digits
    - significant digits = number of digets both before and after decimal point
  - Real numbers
    - floats - smaller - hold up to 7 significant digits
    - doubles - larger - hold up to 15 significant digits
    - decimal(10, 3) - takes 2 inputs, (max significant digits, number of digits after decimal point)
- Date and time
  - DATE
  - TIME
  - DATETIME
  - TIMESTAMP
  - YEAR[(4)]
- Large Object (LOB) - (Ex: video)
- Spatial (ex: geographical data for maps)
- JSON - help store all JS object notations

- ENUM and SET
  - ENUM ('YES', 'NO', 'MAYBE')
    - multiple values that can exist

# Conversions

```SQL
SELECT column_int CONCAT('$', column_int)
FROM some_table
```

## CAST and CONVERT

```SQL
CAST(expression AS cast_type)
```

```SQL
CONVERT(expression, cast_type)
```

- CAST types
- CHAR, DATE, DATETIME, TIME, SIGNED [INTEGER], UNSIGENED [INTEGER], DECIMAL [ (M[,D]) ]

# FORMAT and CHAR

- FORMAT(number,decimal)
  - FORMAT(1234567.8901,2) -> 1,234,567.89
  - FORMAT(123.4, 4) -> 123.4000
  - FORMAT(123.45, 0) -> 123
- CHAR
  - return binary string for specific int
  - CHAR(9) : Tab
  - CHAR(10) : line feed (beginning of line)
  - CHAR(13) : carriage return (new line)

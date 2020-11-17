# Database Creation

Reference: `Murach's MySQL 3rd Edition by Joel Murach` (Chapter 11)

- [Back to Databases](../databases.md.md)
- [Return](../../README.md)

# Creating a database

- CREATE DATABASE [IF NOT EXISTS] db_name
- CREATE DATABASE db_name
- CREATE DATABASE IF NOt EXISTS db_name

# Drop Database

- DROP DATABASE [IF EXISTS] db_name
- DROP DATABASE db_name
- DROP DATABASE IF EXISTS db_name

# The USE statement

- USE db_name
- USE db

# Common column attributes

- NOT NULL
- UNIQUE
- DEFAULT default_val
- AUTO_INCREMENT

```SQL
CREATE TABLE invoices
(
  invoice_id       INT    NOT NULL    UNIQUE,
  vendor_id        INT        NOT NULL,
  invoice_number      VARCHAR(50)     NOT NULL,
  invoice_date    DATE,
  invoice_total   DECIMAL(9,2)   NOT NULL,
  payment_total   DECIMAL(9,2)           DEFAULT 0
)
```

# Table level primary key constraints

- can put constraint such as primary key or foreign key

```SQL
CREATE TABLE vendors
(
  vendor_id   INT   AUTO_INCREMENT,
  vendor_name VARCHAR(50)   NOT NULL,
  CONSTRAINT vendors_pk   PRIMARY KEY (vendor_id),
  CONSTRAINT vendor_name_uq   UNIQUE (vendor_name)
)
```

# Modify columns

- add, drop column, modify, rename column

```SQL
ALTER TABLE table_name
ADD new_column DATE -- with data type of date
```

```SQL
ALTER TABLE table_name
DROP COLUMN some_column
```

```SQL
ALTER TABLE table_name
RENAME COLUMN some_column TO new_name
```

```SQL
ALTER TABLE table_name
RENAME COLUMN some_column TO new_name
```

```SQL
RENAME TABLE table_name TO new_name

TRUNCATE TABLE some_table

DROP TABLE another_table -- removes all constraints
```

```SQL
CREATE UNIQUE INDEX some_index_name
  ON some_table (some_column DESC)
```

# Collations

- Collation names
  - ci: case insensitive, cs: case-sensitive, ai: accent-insensitive, as: accent-sensitive, bin: binary

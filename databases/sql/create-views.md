# Create Views

Reference: `Murach's MySQL 3rd Edition by Joel Murach` (Chapter 12)

- [Back to SQL](sql.md)
- [Return](../../README.md)

- Views are like virtual tables that work on a few columns of a table

# Create view

```SQL
CREATE VIEW some_view AS
  SELECT col_one, col_two
  FROM some_table

```

- we can join a view and another table
- we can treat view just as a table

# DROP view

- careful, this removes it permanantly

```SQL
DROP VIEW some_view
```

# Benefits of views

- design independent
- data security
- simplified queries
- updatability

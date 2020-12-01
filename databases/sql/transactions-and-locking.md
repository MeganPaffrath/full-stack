# Using Transactions and Locking

Reference: `murach's MySQL 3rd Edition by Joel Murach` Chapter 14

- [Back to SQL](sql.md)
- [Return](../README.md)

# Concepts

- handling multiple user's querying the same database
- Lock certian rows of table
- Let user query unlocked rows

# Transactions

- What it is:
  - group of sql queries put together in a logical unit
  - Related statements are put inside a transaction
  - Start of transaction: START TRANSACTION
  - ends: COMMIT (if not errors in transaction) or ROLLBACK (undo)
  - Maintain relationship between tables
  - save data properly
- When to use
  - when you code 2+ INSERT, UPDATE, or DELETE statements that affect related data
  - when you move rows from one table to another w/ INSERT and DELETE statements
  - Whenever the failure of INSERT, UPDATE, or DELETE would violate data integrity
- SAVEPOINT
  - Points wehre statements are saved, statements before this point get saved
- ROLLBACK TO SAVEPOINT: roll back to the point where we saved

# Locking

- Prevents concurrency problems
  - Lost updates
  - Dirty reads
  - Nonrepeatable reads
  - Phantom reads

# Isolation levels

- What each isolation level prevents:
  - READ UNCOMMITTED: none
  - READ COMMITED: Dirty reads
  - REPEATABLE READ L dirty reads, lost updates, nonrepeatable reads
  - SERIALIZABLE : All problems prevented

# Preventing deadlocks

- dont allow transactions to remain open for long
- only use transaction isolation level when necessary (dont use mroe than needed)
- Only make changes when you have nearly exclusive access
- Consider locking for within transactions


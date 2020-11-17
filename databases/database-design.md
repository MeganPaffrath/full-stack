# Database Design

Reference: `Murach's MySQL 3rd Edition by Joel Murach` (Chapter 10)

- [Back to Databases](databases.md.md)
- [Return](../README.md)

# Design

- how many tables?
- whats relationship?
- how many rows and columns?
- how can we normalize database?
  - make easy and efficient to query

# Data structure design

- identify entities/objects in the real world
- for every object in real world, what are the characterisics?
  - create columns and such accordingly
- tables represent objects
  - rows represent instanstes of entities
  - columns represnet the characteristics of each entity instance

## Steps in design

1. identify data elements
2. subdivide each element into smallest useful components
3. identify the tables & assign columns
4. identify relationships: primary and foreign keys
5. review whetehr the data structure is normalized
6. identify indexes

# For efficiency

- divide information into multiple columns
  - ex:
    - names - different row for first and last names
    - addresses - broken into street, city, state, zip

# Things to consider

- 2 tables with a many to many relationship
  - use a linking table

# Normalization

- the process of refining the database

# Terms

- Entity
- Attribute - characteristics of entity
- Instance - instances of entity/objects of entity table
- Entity-relationship (ER) modeling
- Referential integrity
- Declarative referential integrity (DRI)
- Foreign key constraint
- orphaned row
- Normalization
- Data redundancy
- Unnormalized data structure
- normalized data structure
- normal form

# EER Diagrams

- show relationsips between 2 entities

## EER Approaches

- Forward engineering (recomended)
  - in design phase, identify the tables needed and relationsips needed
  - start by creating ER diagram, then generate sql scripts to generate tables and inserting data into tables
  - (plus sign in MySQL)
- Reverse engineering
  - generate ER diagram from data you already have
  - (greater than icon in MySQL)

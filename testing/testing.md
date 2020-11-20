# Testing

[Return](../README.md)

# Topics

- [A/B Testing](#A/B-Testing)
- [Black Box Testing](#Black-Box-Testing)
- [Integration Testing](#Integration-Testing)
- [Unit Testing](#Unit-Testing)
- [Manual Testing](#Manual-Testing)
- [White Box Testing](#White-Box-Testing)
- To Add:
  - Functional Testing
    - what system actually does
  - Smoke Tests
  - Automated Tests
  - Acceptance Tests

# A/B Testing

- testing 2 web elements to determine which performs better

# Black Box Testing

- aka:
  - input-output testing
  - behavioral testing
  - specification based testing
- Eveluate the functionality without looking at internal code structure
- Only test the functionality to make sure it behaves as expected

# Integration Testing

- modules are combined and tested in groups
- test how data transfers between modules
- `Top Down` approach: higher level modules tested first
- `Bottom up` approach: lower level modules tested first
- `functional increment` and `sandwich` approaches are combinations of top to down and bottom to up

# Unit Testing

- Testing the smallest components of an application
- Must keep modules small and testable
- Cannot be connected to external integration, database, ect.
- Often requires use of mock objects
  - fake/stub objects inserted into components
- Each componenet needs to be able to do one thing VERY well
- Use in memory testing
  - need small testable components

# Manual Testing

- testing by human use, not very effective

# White Box Testing

- AKA:
  - Glass/clear box testing
  - Structural testing
- Based on internal code structure
- Usually done at unit level (unit tests)
- Techniques: statement coverage, branch coverage, path coverage

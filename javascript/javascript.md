# JavaScript
[Back To Main](../README.md)

## Variables
* Local variables = created within a function and can only be used inside the function
* Global variables = were created outside of the function and can be accessed anywhere
* In if, else, while, (curly brace code)
  * var is Global - typically want to AVOID this keyword
  * let and const are just variables and will be local
* Types:
  * `var x = 1`:
  * `let y = 1`:
  * `const z = 1`: cannot be changed once given a value
    * Objects: You can push items into a const array, but assigning a new array to the variable would not work
    * Arrays: you can change the values assosiated with keys, but you cannot overwrite an object`

## Other

* A Class example:
```JavaScript
class Person {
  constructor(personName) {
    this.name = personName;
  }

  about() {
    return `Hello, ${this.name}`;
  }
}
```

* Inheritance:
```JavaScript
class Singer extends Person {
  constructor(personName) {
    super(personName); // parent constructor
    this.instrument = "vocals";
  }

  sing() {
    return "Some song lyrics";
  }
}
```

## This
* Has 2 uses!
  * this points to an instance of an object from within its class def.
  * In JS there is a secondary feature:
    * also keeps track of `execution context` (often based on where func was called from)

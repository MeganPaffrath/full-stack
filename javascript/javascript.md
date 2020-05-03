# JavaScript
[Back To Main](README.md)

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

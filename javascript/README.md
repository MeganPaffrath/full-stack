# JavaScript

[Back To Main](../README.md)

# References

- [Linkedin Learning Course](https://www.linkedin.com/learning/javascript-essential-training-3/what-is-javascript?u=26123450)

# Index

- [Introduction](#Introduction)
- [Basics](#Basics)
- [Data](#Data)
  - data types
  - conditional
- [Functions]
- [Objects]
- [Functions and Objects]
- [DOM]
- [Loops]

# Introduction

- **JavaScript** is a scripting language that runs in browser and interacts with CSS and HTML to determine what the user can see and do
- JavaScript stays running in the background and allows for changes of the web site
- Tools and Such :
  - ECMAScript (ES6)
    - JS conforms to ECMAScript standard
    - ECMAScript is a standard, it is used by the browser to interpret JS
  - **jQuery** - Library of JS functions
  - TypeScript, CoffeScript, ...
- **Transcompilers**
  - convert source code into another language / version
  - **Babel** - translates ES6 to be runable by older JS engines
- **JS Frameworks**
  - React
  - Vue.js
  - AngularJS
- Serverside tools
  - Node.js - can use JS as a server side programming language

# Basics

- Browsers (test code in all availible browsers)
  - Chrome, Firefox, Edge, Opera, Brave
- The normal way to reference script file from HTML

  ```HTML
  <html>
    <head>
      <!-- HEAD CONTENT -->
    </head>
    <body>
      <!-- BODY CONTENT HERE -->

        <script src="script.js"></script>
    </body>
  </html>
  ```

- Utilizeing defer or async:

  ```HTML
  <html>
    <head>
      <title>Page title</title>
      <!--
        script is executed when the page has finished parsing
       -->
      <script src="script.js" defer></script>
    </head>
    <body>
      <!-- BODY CONTENT HERE -->


    </body>
  </html>
  ```

## Conventions

- JS is case sensitive - var and Var are different variables
- whitespace matters for readability (humans) but not to JS
- end each statement with a semicolon (not required by JS, but good for readability)

```JavaScript
// Variables
var camelCaseVar;

// objects and classes start w/ uppercase
var date = Date();

// Constants are all caps
const CONSTANTVAR = 55;
```

# Data

## There are multiple ways to assign variables

```JavaScript
var a = 1;
var b = 2;
var sum1 = a + b;

var c, d, sum;
c = 3;
b = 4;
sum = c + d;

var e = 5, f = 6, sum = e + f;
```

## Data types

```JavaScript
// numeric
var a = 2, b = 2.3, c = -3.235;

// string
var d = "a string";
var e = 'another string';
var f = 'String with "quotation" marks';
var g = "Another string with \"quotation\" marks";

// boolean
var tVal = true;
var fVal = false;

// null
var emptlyButNotUndef = null;

// undefined
var undefVar;

// Symbol

// get datatype
console.log(typeof tVal); // would return boolean

// all others return proper data type except...
console.log(typeof emptlyButNotUndef); // would return object
```

## Math

- Operations: +, -, /, \*
- Keep in mind precedence
- Shorthand math
  - +=, -=, \*=, /=
- Unary operators
  - a++, ++a, b--, --b
    - if a is 1
      - ++a = 2
      - but a++ = 1

## String

- String concatenation

  ```JavaScript
  var a = "first string";
  var b = 2;

  var ab = a + b; // equals: "first string2"
  var sub = a - b; // equals: NaN (not a number)
  ```

## Conditionals

```JavaScript
if (someValue == 3) {
  // do something
} else {
  // do something else
}
```

<!--
# OLD
## Callback Functions
## Variables

- Local variables = created within a function and can only be used inside the function
- Global variables = were created outside of the function and can be accessed anywhere
- In if, else, while, (curly brace code)
  - var is Global - typically want to AVOID this keyword
  - let and const are just variables and will be local
- Types:
  - `var x = 1`:
  - `let y = 1`:
  - `const z = 1`: cannot be changed once given a value
    - Objects: You can push items into a const array, but assigning a new array to the variable would not work
    - Arrays: you can change the values assosiated with keys, but you cannot overwrite an object`

## Other

- A Class example:

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

- Inheritance:

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

- Has 2 uses!
  - this points to an instance of an object from within its class def.
  - In JS there is a secondary feature:
    - also keeps track of `execution context` (often based on where func was called from) -->

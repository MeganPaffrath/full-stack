# JavaScript

[Back To Main](../README.md)

# References

- [Linkedin Learning Course](https://www.linkedin.com/learning/javascript-essential-training-3/what-is-javascript?u=26123450)
- [JavaScript Tutorial 1h - Video](https://www.youtube.com/watch/W6NZfCO5SIk)

# Future resources?

- [Learn JS](https://www.learn-js.org/)
- [Kahn Academy - Review JS](https://www.khanacademy.org/computing/computer-programming/html-css-js/html-css-js-intro/a/review-javascript)
- [JS drawing and animation](https://www.khanacademy.org/computing/computer-programming/programming)

# Index

- [Basics](#Basics)
  - [What is it?](#What-Is-It?)
- [Variables](#Variables)
  - [Primitives](#Primitives)
- [Functions](#Functions)
- [Common Things](#Common-Things)
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

# Basics

## What Is It?

- **JavaScript** is a scripting language that runs in browser and interacts with CSS and HTML to determine what the user can see and do
  - it stays running in the background and allows for changes of the web site
- JavaScript is used to write logic that creates features:
  - user registration
  - online shopping
  - scheduling meetings
  - writing messages
- JavaScript is the only frontend coding language
- `Framework` : improved version of vanilla JS, makes writing JS code easier
  - Most popular JS frameworks
    - Frontend
      - React.js
      - Angular
      - Vue.js
    - Backend
      - Node.js

## Where does it run?

- In browser, throught the JavaScript Engine
  - FireFox: SpiderMonkey
  - Chrome: v8
- Outside of browser:
  - Node: The open source JS v8 engine was embedded into C++ program
    - JS code is passed to Node and ran

## More Basics

- ECMAScript (ES6) is a specification that JavaScript abides by
- Best practice to put script tag at the bottom of body
  - We want to make sure the the script is properly rendered
- JS is a dynamic language
  - there are 2 types of programming languages:
    - static (statically typed)
      - when declaring a variable, the type of the variable is set and cannot change
    - dynamic (dynamically typed)
      - the type of variable can change during runtime

# Variables

```JavaScript
let name; // declare variable
console.log(name); // undefined
name = 'Megan';
console.log(name); // "Megan"

const pi = 3.14; // const is for variables that will not change
```

- Variable name rules:
  - cannot be reserved keywords
  - should be meaningful
  - cannot start with a number
  - cannot start with a space or hyphen (-)
  - are case-sensitive (firstName and FirstName are different)
  - use lower camel case : (firstName, lastName)
- Best practice
  - declare variables on separate lines

## Primitives

- Primitives: value Types
  - strings, numbers, booleans, undefined, null

```JavaScript
let firstName = 'Megan'; // string litteral
let age = 25; // number literal
let isPerson = true; // boolean literal
let lastName; // undefined
let favoriteColor = null; // null - explicitly cleared value
```

## Reference Types

- objects, arrays, functions

### Objects

```JavaScript
let person = { // object
  name: 'Megan', // key value pairs (properties of obj)
  age: 25
}

// dot notation
person.name = 'Bob';

// bracket notation
// because sometimes we dont know name of target property until runtime
person['name'] = 'Abby';
```

### Arrays

```JavaScript
let colors = ['red', 'blue'];
colors[2] = 1; // ["red", "blue", 1]
console.log(colors.length); // 3
```

## Type of

- Because JS is a dynamically typed language, the types of variables can change

```JavaScript
let age = 30;
typeof age // "number"
age = 33.1
typeof age // number
age = "Megan"
typeof age // string
```

# Functions

- Function with parameter
- An argument is the value supplied for a parameter

  ```JavaScript
  function hello(fName, lName) { // name is a parameter
    console.log("Hello " + fName + " " + lName);
  }

  // Here, "Megan" is an argument.
  hello("Megan", "Paffrath"); // console: Hello Megan Paffrath
  ```

- a function that returns a value

  ```JavaScript
  function square(number) {
    return number * number;
  }

  console.log(square(3)); // console: 9
  ```

# Common Things

- map, filter, reduce, find, findIndex
  - [JavaScript Examples](./map-filter-reduce-find.js)

# Introduction

- Tools and Such :
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

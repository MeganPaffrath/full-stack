# React
[Back To Main](../README.md)

#### Content:
* [Basics](#Basics)
* [JSX](#JSX)
* [Components](#Components)
  * [Function Components](#Function-Components)
  * [Class Components](#Class-Components)

React is a JS library for building user interfaces, it is component based.

## Basics
### Parcel
* Use `Parcel.js` for production builds
  * Install globally: `npm install -g parcel-bundler`
  * It is a bundler - it combines multiple modules into a few modules for deployment
  * Other bundlers consist of `Webpack` and `Rollup.js`
  * For production build we must use relative urls:
    * `parcel build <entry file> --public-url ./`

### Note
* React DOM uses camelCase unlike standard HTML attribute names and CSS style

### Getting Started
index.html:
```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8" />
	<link rel="stylesheet" href="index.css" />
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
	<title>React App</title>
</head>
  <body>
  	<noscript>You need to enable JavaScript to run this app.</noscript>
  	<div id="root"></div>
  	<script src="index.js"></script>
  </body>
</html>
```
index.js:
```JavaScript
import React from "react";
import ReactDOM from "react-dom";

const topic = <h1>Some Topic</h1>; // JSX

ReactDOM.render( <section>// function call to React to render content
    {topic}
    <h2> Content that gets rendered </h2>
    </section>,
    document.getElementById("root") // renders content into "root"
);
```
Use parcel to run: `parcel index.html`

## JSX
* We can store html into a JS variable
* Example w/ variable substitution
```javascript
let myNumber = 24;
function hoursInYear() {
  return myNumber*365;
}
let someDiv = <div>
              <p>There are {myNumber} hours in a day.</p>
              <p>There are {hoursInYear()} hours in a year.</p>
              </div>;
```
* React will render an array of JSX elements just like a bunch of HTML
  * each element needs a unique key
  ```JavaScript
  let example = [
      <p key="i1">First para</p>,
      <p key="i2">Second para</p>,
      <p key="i3">Third para</p>
  ]
  ```
  * `IMPORTANT`: not doing this properly may give errors in console. Might not effect build. Be careful with this. Check errors and fix them.
  * Transforming an array of JS Obj to HTML elements:
    * Array.map() : for everything
      * map can be used to generate array containing all contents
      * remember to add keys to each jsx element in array
    * Array.filter() : to select those that match a specification
* JSX naturally prevents injection attacks. When we have an element within {variable}, it will always HTML escape it.
  * it is safe to put user input into JSX

## Components
### Function Components
* We can have functions return jsx expressions
```JavaScript
function SomeFunction(props) { // note: function name upperCC
    return <h1>Hello, {props.name}</h1>;
}
let contents = <section>
    <SomeFunction name="Megan" /> // attribute val is fed into func.
</section>
```
  * Function begins w/ capital letter and returns JSX => react interprets this to be a component

### Class Components
* `Look into react hooks`
* Class Component Example
```JavaScript
class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {show: "Page"}; // state has special meaning to react
    }
}
render() {
  return <div>{someJSXElement}</div>
}
```
* Use state variable to keep track of data/page status
  * When a component's state is changed => react calls render() to update
  * To modify state: `setState()`
  * When to change: user interactions, network interactions, timer for updates

#### Bind
* Sometimes we need to bind a function so that we do not loose the context of `this`

#### Arrays
* To modify arrays: we need to use concat rather than push. This returns a new array. Then setState() to make the array variable the new array.
* To remove item: use `Array.filter`
* To update elements, use `Array.map`
* These both return new arrays, we can then use setState() to update the array

#### Objects
* To update objects
```JavaScript
// if this contains a this.user:
user = {fName: "Megan", lName: "Paffrath", userID: "23952"};
// Then...
// use Object.assign() => creates a copy of the object
let newUser = Object.assign({}, this.state.user);
this.setState({user: newUser}); // React will see these changes
```

## Data Flow
* Data flows down.
  * we don't know anything about components we use (if they are stateful or stateless)
  * ex: state is not accessible to any component other than the one that owns and sets it.
* A component can pass its state down as props to its children components

## Rendering

## Interactivity
* Form-like components : Controlled Components
  *

## Component Life Cycle
* class components enable our components to be a part of the component life cycle
* Deciding what components to show and where to keep data
  * add variables to remember data/information from user
    * state
  *

# React
[Back To Main](../README.md)

#### Content:
* [Basics](#Basics)
* [JSX](#JSX)

React is a JS library for building user interfaces, it is component based.

## Basics
### Parcel
* Use `Parcel.js` for production builds
  * Install globally: `npm install -g parcel-bundler`
  * It is a bundler - it combines multiple modules into a few modules for deployment
  * Other bundlers consist of `Webpack` and `Rollup.js`
  * For production build we must use relative urls:
    * `parcel build <entry file> --public-url ./`

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

## Function Components

## Rendering

## Class Components
* `Look into react hooks`

## Interactivity

## Component Life Cycle

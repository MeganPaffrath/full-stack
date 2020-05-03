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
ReactDOM.render( // function call to React to render content
    <h1> Content that gets rendered </h1>,
    document.getElementById("root") // renders content into "root"
);
```
Use parcel to run: `parcel index.html`

## JSX


## Function Components

## Rendering

## Class Components
* `Look into react hooks`

## Interactivity

## Component Life Cycle

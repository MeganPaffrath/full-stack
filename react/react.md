# React

[Back To Main](../README.md)

# Getting Started

- Quick Start: `npx create-react-app <app-name> `
- Start App: `npm start`
- For React Router: `npm i react-router-dom`

# OLD:

#### Content:

- [Get Started -> Build](#Get-Started-->-Build)
- [Component Life Cycle](#Component-Life-Cycle)
- [Modularization](#Modularization)
- [State](#State)
- [Props](#Props)
- [Accessibility](#Accessibility)
- [Packages](#Packages)

# Get Started -> Build

- Getting Started:
  - `sudo npm install -g create-react-app`
  - `create-react-app <app-name>`
- Production build:
  - `npm run build` : used to make a production build within build folder
    - can be served with a static server
  - Run locally before deploying:
    - `sudo npm install serve -g`
    - `serve -s build` : runs on localhost:5000

# Component Life Cycle

- `Mounting` : Whenever component is added to the DOM
- `Updating` : new props, setState(), forceUpdate()
- `Unmounting` : Whenever component is taken away
- Life cycle methods:
  - Only availible when using class syntax, cant use with function components.
  - `render()` : the only required method of the component lifecycle
    - whenever updates/changes made, render is called
  - `constructor()` : called before component is mounted
    - good place to initialize state
    - can bind event handler methods to this class using constructor
  - `componentDidMount()` : renders as soon as the component is mounted
  - `componentDidUpdate()` : renders whenever the component is updated (occurs on state changes)
  - `componentWillUnmount()` : used for any cleanup before unmounting

# Modularization

- Break code down into components to keep code cleaner and to make it easier to work with others

# State

- Good rule of thumb to keep State in the root of the tree.
  - Parent component then can bass state down to it's children
  - Read more about "Lifting State Up" in react documentation [TO-DO]
- setState
  - Set state is asynchronous, so if you are relying on the previous state to set a value, you can use a callback function within function to setState

# Props

- Default Props

```JavaScript
// in the event that there are no values, this value is used instead
  static defaultProps = {
    books: [
      {"title": "Some Title", "author": "Some Author", "pages": 0}
    ]
  }
```

- Also, when using a function to process data, the properties passed into the function can be given default values
  ```JavaScript
  const Item = ({name="No Name Provided}") {
    return (
      <h1>{item}</h1>
    )
  }
  ```

# Accessibility

- create-react-app helps warn us when we are doing anything wrong in terminal (ex: not giving alt text to an image)
- Check out Accessibility on documentation [TO-DO]

# Packages

## Proptypes

- Used to make sure all of our properties being supplied are of the correct type
- `import PropTypes from 'prop-types'`
  - To install: `npm install prop-types --save`
- Example of defining types:
  ```JavaScript
  Book.propTypes = {
    title: PropTypes.string,
    author: PropTypes.string,
    pages: PropTypes.number,
    freeBookmark: PropTypes.bool
  }
  ```

# Old Content - UPDATE AND REMOVE

#### Content:

- [Helpful Things](#Helpful-Things)
- [Basics](#Basics)
- [JSX](#JSX)
- [Components](#Components)
  - [Function Components](#Function-Components)
  - [Class Components](#Class-Components)

## Basics

### Parcel

- Use `Parcel.js` for production builds
  - Install globally: `npm install -g parcel-bundler`
  - It is a bundler - it combines multiple modules into a few modules for deployment
  - Other bundlers consist of `Webpack` and `Rollup.js`
  - For production build we must use relative urls:
    - `parcel build <entry file> --public-url ./`

### Note

- React DOM uses camelCase unlike standard HTML attribute names and CSS style

### Getting Started

index.html:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <!-- <link rel="stylesheet" href="index.css" /> -->
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />
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

// Import Class Components
import Charts from "./Charts";

function Title(props) {
    return (
      <div className="title">
        <h1>App Title</h1>
      </div>
    );
  }


class App extends React.Component {
constructor(props) {
    super(props); // Must call
    this.state = {
        item: 'value'
    };
}

render() {
    const title = <Title />;

    return (
        <main>
            {title}
            <Charts/>
        </main>
    );
}
}

ReactDOM.render(<App/>,
document.getElementById("root")
);
```

Use parcel to run: `parcel index.html`

## JSX

- We can store html into a JS variable
- Example w/ variable substitution

```javascript
let myNumber = 24;
function hoursInYear() {
  return myNumber * 365;
}
let someDiv = (
  <div>
    <p>There are {myNumber} hours in a day.</p>
    <p>There are {hoursInYear()} hours in a year.</p>
  </div>
);
```

- React will render an array of JSX elements just like a bunch of HTML
  - each element needs a unique key
  ```JavaScript
  let example = [
      <p key="i1">First para</p>,
      <p key="i2">Second para</p>,
      <p key="i3">Third para</p>
  ]
  ```
  - `IMPORTANT`: not doing this properly may give errors in console. Might not effect build. Be careful with this. Check errors and fix them.
  - Transforming an array of JS Obj to HTML elements:
    - Array.map() : for everything
      - map can be used to generate array containing all contents
      - remember to add keys to each jsx element in array
    - Array.filter() : to select those that match a specification
- JSX naturally prevents injection attacks. When we have an element within {variable}, it will always HTML escape it.
  - it is safe to put user input into JSX

## Components (Class and Function Components)

### Function Components

- We can have functions return jsx expressions

```JavaScript
function SomeFunction(props) { // note: function name upperCC
    return <h1>Hello, {props.name}</h1>;
}
let contents = <section>
    <SomeFunction name="Megan" /> // attribute val is fed into func.
</section>
```

- Function begins w/ capital letter and returns JSX => react interprets this to be a component

### Class Components

Class Component Example (MyComponent.js):

```JavaScript
//jshint esversion: 6
import React from "react";
import ReactDOM from "react-dom";

class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        item: "value"
      };
    }
    render() {
      return <div>This is a component!</div>
    }
}

export default MyComponent;
```

Import into index.js:

```JavaScript
// Comonents
import Halves from "./Halves";
```

Return in render:

```JavaScript
render() {
  return (
    <main>
      <MyComponent/>
    </main>
  );
}
```

- Use state variable to keep track of data/page status
  - When a component's state is changed => react calls render() to update
  - To modify state: `setState()`
  - When to change: user interactions, network interactions, timer for updates

#### Bind

- Sometimes we need to bind a function so that we do not loose the context of `this`

#### Arrays

- To modify arrays: we need to use concat rather than push. This returns a new array. Then setState() to make the array variable the new array.
- To remove item: use `Array.filter`
- To update elements, use `Array.map`
- These both return new arrays, we can then use setState() to update the array

#### Objects

- To update objects

```JavaScript
// if this contains a this.user:
user = {fName: "Megan", lName: "Paffrath", userID: "23952"};
// Then...
// use Object.assign() => creates a copy of the object
let newUser = Object.assign({}, this.state.user);
this.setState({user: newUser}); // React will see these changes
```

## Data Flow

- Data flows down.
  - we don't know anything about components we use (if they are stateful or stateless)
  - ex: state is not accessible to any component other than the one that owns and sets it.
- A component can pass its state down as props to its children components

## Rendering

## Interactivity

- ## Form-like components : Controlled Components

## Component Life Cycle

- class components enable our components to be a part of the component life cycle
- Deciding what components to show and where to keep data
  - add variables to remember data/information from user
    - state
  -

## To Do:

- `Look into react hooks`

### Learning More - Courses

- Linkedin Learning:
  - React Recipes
  - React: Lifecycles
  - React: Components, Context, and Accessibility
- Keep an eye on the React Blog to know about any changes

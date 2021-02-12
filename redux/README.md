# Redux

# Sources

- [Redux for Beginners - Video](https://www.youtube.com/watch?v=CVpUuw9XSjY)
- [React Redux Tutorial Series - Videos](https://www.youtube.com/watch?v=9boMnm5X9ak&list=PLC3y8-rFHvwheJHvseC3I0HuYI2f46oAK)

# Outline

- [Basics](#Basics)
- [Get Started](#Get-Started)
- [React](#React)

# Basics

- What is Redux?
  - A predictable state container for JavaScript Apps
- Used with
  - any UI library or framework (React, Angular, Vue, vanilla JS)
- State container for an entire application

# React

## React-Redux

- The official Redux UI binding library for React
  - lets you combine React and Redux

# Other

- What about react context (preventing prop drilling) and hooks (useContext + useReducer) ?
  - Can do what Redux does, but Redux was released sooner.....

# Get Started

```
npx create-react-app app-name
cd app-name
npm install redux react-redux
```

# Notes

- store : holds all data of application
- action : a function describing what should be done
- reducer : describes how actions transform the state
- dispatch : executes the action (sends action to reducer, reducer then checks what to do and updates store)

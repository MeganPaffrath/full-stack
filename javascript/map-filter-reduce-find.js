var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.

function double(x) {
  return x*2;
}

const mapNumbs = numbers.map(double);

console.log(mapNumbs)

//Filter - Create a new array by keeping the items that return true.

const filterNumbers = numbers.filter(function(num) {
  return num < 10;
});

console.log(filterNumbers);

//Reduce - Accumulate a value by doing something to each item in an array.

var reducedNumber = numbers.reduce(function (accumulator, currentNumber) {
  return accumulator += currentNumber;
})

console.log(reducedNumber);

// Basic Idea:
var rN = 0;
numbers.forEach(function(currNum) {
  rN += currNum;
});

console.log(rN);

//Find - find the first item that matches from an array.
var firstFound = numbers.find(function (num) {
  return num > 10;
});

console.log(firstFound);

//FindIndex - find the index of the first item that matches.
var firstIndex = numbers.findIndex(function (num) {
  return num > 10;
});

console.log(firstIndex);
// Regular function ex:
const squaredNums = numbers.map(function (x) {
  return x * x;
});

console.log("Squared: " + squaredNums);

// With Arrow Function:
const stillSquared = numbers.map((x) => {
  return x * x;
});

console.log("Still Squared: " + stillSquared);

// Cleaner Arrow Function:
const stillSquaredArrow = numbers.map((x) => x * x);

console.log("Still SquaredArrow: " + stillSquaredArrow);
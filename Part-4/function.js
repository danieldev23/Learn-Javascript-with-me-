// function (hàm)
// Declare function
// syntax: function functionName(parameters) {
// your code here
//}
function sum(a, b) {
  return a + b;
}
// sum() : invoke function
console.log(sum(5, 9)); // 14

const tong = sum;
function average(a, b, fn) {
  const total = fn(a, b);
  return total / 2;
}
let result = average(1, 6, tong);
console.log(`Average ${result}`); // Average 3.5

// Anonymous function
// Hoisted
const name = function () {
  console.log("Danieldev");
};
name();
// IIFE function -> Immediately invoke function excution
(function () {
  // running when program starting
  console.log("This is IIFE function");
})();

// scope : Phạm vi truy cập
// Global scope, function scope
let nameh = "Huy IT"; // Global scope
function logYourName() {
  var firstName = "Huy"; // function scope
  console.log(firstName); //
}
logYourName(); //
var res; // global scope
let message;
if (2 > 0) {
  message = "Hello Danieldev"; // block scope
  // var -> hoisted
}

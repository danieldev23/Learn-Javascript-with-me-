// const and let
const number = 100;
console.log(number);
// number = 200;

let otherNumber = 200;
otherNumber = 500;
console.log(otherNumber);
const myName = "Dang Quoc Huy" // Dang Quoc Huy
console.log(myName);

// var is hoisting
// Data types: Number, String, Boolean, Undefined, Null
// Const and let is not hoisting
// var sẽ bị hoisting 
// khi mà khai báo biến chưa gán giá trị gì cả ví dụ var a;
// var a; // undefined
// console.log(a); // undefined

var a;
console.log(a);
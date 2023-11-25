// type coercion
// + - * /
// weird 
console.log(1 + 2); //3
console.log(10 + "10"); // 1010
console.log("10" + 10); // 1010
// 10 --> "10" + "10" -> "1010"
console.log(String(10) + "10"); // 1010
console.log("10" - 10); // 0 Number("10") -> 10 - 10 = 0

console.log(null + undefined); // NaN
console.log("" - 1); // Number("") = 0 - 1 = -1
console.log(false - true); // -1
console.log(null - 1); // -1

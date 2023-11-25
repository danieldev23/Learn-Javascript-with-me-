// lose equality == vs strict equality === 

console.log('== vs ==='); // == vs ===
console.log(10 == "10"); // "10" == "10" true
console.log(true == 1); // Number(true) = 1 -> 1 == 1 => true
console.log(1 == "01"); // Number("01") = 1 => 1 == 1 => true
console.log(null == ""); // "null" != "" -> false

console.log(typeof 10); // number
console.log(10 === "10"); // false
console.log(10 !== "10"); // true
console.log(true == "true"); // false
// !== 
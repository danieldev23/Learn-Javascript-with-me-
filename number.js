// số nguyên: 1 2 3 ... 999
// số thập phân: 1.2 3.5 6.9 -> 9.8

console.log(5 + 7);
console.log(typeof (10)); // number

const number = "4.8";
const number2 = "9.9";
console.log(parseInt(number2)); // 9
console.log(parseFloat(number)); // 4.8

const number3 = -16;
console.log(Math.abs(number3)); // 16

// Math.floor(value) --> Làm tròn xuống ví dụ: 4.3 -> 4
console.log(Math.floor(4.3)); // 4
// Math.ceil(value) --> làm tròn trên: 9.8 --> 10
console.log(Math.ceil(9.8)); // 10
// Math.round(value) --> Làm tròn gần nhất ví dụ: 4.3 --> 4
console.log(Math.round(4.3)); // 4

// toFixed(number) ví dụ: 0.33333 -> 0.33
// toFixed(2)
console.log((1 / 3).toFixed(2)); // 0.33333 --> 0.33

console.log(Math.ceil(Math.random() * 10)); // Số ngẫu nhiên 

console.log(`Max is: ${Math.max(1, 4, 5, 6, 7)}`); //Max is: 7

console.log(`Min is: ${Math.min(1, 4, 5, 6, 7)}`); //Max is: 1

console.log(`3 mũ 2 = ${Math.pow(3, 2)}`); // 3 mũ 2 = 9 

// isNaN(value) vs Number.isNan(value)
// NaN -> Not a number

console.log((isNaN("Huy IT"))); // true
console.log(isNaN('1234455')); // false


console.log(Number.isNaN("123456")); // false
console.log(Number.isNaN(NaN)); // true

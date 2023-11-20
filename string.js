// string(Chuỗi)
"Hi Everyone!";
"My name is Dang Quoc Huy";
`I am fullstack JavaScript Developer`

// double quotes, single quotes, backticks (template literal)
const name = "Đặng Quốc Huy";
// console.log(name);
// console.log(typeof(name));
const job = "Fullstack JavaScript Developer"

const newStr = "My name is Danieldev and I am a Fullstack Js Developer";
const newStr2 = `My name is ${name} and I am a Fullstack Js Developer`;

console.log(newStr2);

// ${var_name} Template literal ->

const newStr3 = `My name is ${name} and I am a Blogger`;
// Length of String using var_name.length

console.log(newStr3.length); // length of string 43
console.log(newStr3);

const myJob = "  Fullstack Js Developer";
// split method 
console.log(myJob.split(" ")); // [ 'Fullstack', 'Js', 'Developer' ]
console.log(myJob.split(""));
// [ 'F','u','l','l','s','t'a'c'k'J's'D'e'v'e'l'o'p'e'r']

console.log(myJob.toLowerCase()); // fullstack js developer 
console.log(myJob.toUpperCase()); // FULLSTACK JS DEVELOPER 

console.log(myJob.startsWith("Fullstack")); // true
console.log(myJob.startsWith("huy")); // false

console.log(myJob.endsWith("Developer")); // true
console.log(myJob.endsWith("Designer")); // false

console.log(myJob.includes("Huy")); // false
console.log(myJob.includes("Js")); // true

// lay vi tri cua ki tu dung indexOf()
console.log(myJob.indexOf("J")); // Index: 10
console.log(myJob.lastIndexOf("e")); // Last index of: 20

console.log(myJob.replace("Developer", "Designer")); //Replace: Fullstack Js Designer 
console.log(myJob.repeat(2)) // Fullstack Js DeveloperFullstack Js Developer 


// slice(start, end)
console.log(myJob.slice(0, 9)); // Fullstack 
console.log(myJob.slice(-5)); // loper


// trim: remove space left and right
console.log(myJob.trim());
console.log(myJob.trimStart()); //
console.log(myJob.trimEnd()); //
const myJob1 = "Designer";
console.log(myJob1.charAt(5)); // n
// substr -> Lấy ra một phần của chuỗi(string) 
// Ví dụ substr(start_index, length: số lượng kí tự muốn lấy)
console.log(myJob1.substr(1, 5)); // esign

// substring -> lấy ra các kí tự
// substring(start_index, start_end)
console.log(myJob1.substring(1, 5)); // esig
const myJob_Future = "       Fullstack JavaScript Developer";
// Loại bỏ khoảng trống 2 bên, đưa tát cả về chữ IN HOA, thay chữ Developer thành chữ Developer and Software Engineer, sau đó repeat lại 2 lần

console.log(`My string is: ${myJob_Future.trim()
    .replace("Developer", "Software Engineer")
    .toUpperCase()
    .repeat(2)}`) // FULLSTACK JAVASCRIPT SOFTWARE ENGINEERFULLSTACK JAVASCRIPT SOFTWARE ENGINEER 


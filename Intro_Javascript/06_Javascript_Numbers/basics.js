// 🧠 1️⃣ Number Type in JavaScript

// JavaScript এ সব numeric value Number type।

let num = 123.456;

console.log(num.toFixed(2)); // "123.46" (round to 2 decimals)
console.log(num.toString()); // "123.456" (convert to string)
console.log(Number.isInteger(num)); // false



// Integer (পূর্ণসংখ্যা)

let age = 25;


// Decimal (দশমিক সংখ্যা)

let price = 199.99;


// JS এ আলাদা int বা float type নেই, সব Number type।
// 2️⃣ Basic Arithmetic Operations
let a = 10;
let b = 3;

console.log("Addition:", a + b);       // 13
console.log("Subtraction:", a - b);    // 7
console.log("Multiplication:", a * b); // 30
console.log("Division:", a / b);       // 3.3333333333333335
console.log("Remainder:", a % b);      // 1
console.log("Exponent:", a ** b);      // 1000 (10^3)

// 3️⃣ Special Number Values

Infinity

console.log(1 / 0); // Infinity


-Infinity

console.log(-1 / 0); // -Infinity


// NaN (Not a Number)

let x = "Hello" / 2;
console.log(x); // NaN


Number.MAX_VALUE & Number.MIN_VALUE

console.log(Number.MAX_VALUE); // সবচেয়ে বড় সংখ্যা
console.log(Number.MIN_VALUE); // সবচেয়ে ছোট positive number
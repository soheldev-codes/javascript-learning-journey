// ===============================
// JavaScript Comparison Operators
// ===============================

// 1. Number Comparison
let a = 10;
let b = 5;

console.log(a > b);    // true
console.log(a < b);    // false
console.log(a >= b);   // true
console.log(a <= b);   // false
console.log(a == b);   // false
console.log(a != b);   // true


// 2. == vs === (Very Important)
let x = 5;
let y = "5";

console.log(x == y);    // true (only value check)
console.log(x === y);   // false (value + type check)


// 3. != vs !==
console.log(x != y);    // false
console.log(x !== y);   // true


// 4. String Comparison
let city1 = "Dhaka";
let city2 = "Chittagong";

console.log(city1 === city2); // false
console.log(city1 !== city2); // true


// 5. Boolean Comparison
let isLoggedIn = true;

console.log(isLoggedIn === true);  // true
console.log(isLoggedIn === false); // false


// 6. Real-life Example (Condition)
let age = 20;

if (age >= 18) {
  console.log("You are eligible to vote");
} else {
  console.log("You are not eligible to vote");
}


// 7. Comparison Result Always Boolean
let result = a > b;
console.log(result); // true

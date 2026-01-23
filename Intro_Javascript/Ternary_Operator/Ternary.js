// ===================================
// Ternary Operator (If-Else Shorthand)
// ===================================

// 1. Basic if-else
let age = 20;

if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Child");
}

// Same logic using ternary
let result = age >= 18 ? "Adult" : "Child";
console.log(result);


// 2. Pass / Fail example
let marks = 40;

let status = marks >= 33 ? "Pass" : "Fail";
console.log(status);


// 3. Boolean based ternary
let isLoggedIn = true;

let message = isLoggedIn ? "Welcome User" : "Please Login";
console.log(message);


// 4. Using logical condition
let hasEmail = false;
let hasPhone = true;

let loginStatus = hasEmail || hasPhone
  ? "Login Possible"
  : "Login Not Possible";

console.log(loginStatus);


// 5. Nested ternary (Advanced)
let score = 75;

let grade =
  score >= 80 ? "A+" :
  score >= 70 ? "A" :
  score >= 60 ? "B" :
  "Fail";

console.log(grade);

// ===================================
// Logical NOT Operator (!)
// ===================================

// 1. Basic NOT
let isLoggedIn = true;

console.log(!isLoggedIn); // false
console.log(isLoggedIn);  // true


// 2. Using NOT in if condition
// 📌 এখানে !isLoggedIn মানে true, তাই প্রথম block execute হয়।
if (!isLoggedIn) {
  console.log("Please Login");
} else {
  console.log("Welcome User");
}


// 3. Combining NOT with AND (&&)

// 📌 age >= 18 && hasID === true → false
// 📌 !false → true → entry denied

let age = 17;
let hasID = false;

if (!(age >= 18 && hasID === true)) {
  console.log("Entry Denied");
} else {
  console.log("Entry Allowed");
}


// 4. Combining NOT with OR (||)
// 📌 OR এর result false → !false → true → code execute হয়

let hasEmail = false;
let hasPhone = false;

if (!(hasEmail || hasPhone)) {
  console.log("Login Not Possible");
} else {
  console.log("Login Possible");
}


// 5. NOT in Ternary Operator
let isAdmin = false;

let access = !isAdmin ? "Access Denied" : "Access Granted";
console.log(access);

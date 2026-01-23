// ===================================
// Logical Operators in JavaScript
// ===================================

// 1. AND (&&) Operator
let age = 20;
let hasID = true;

if (age >= 18 && hasID === true) {
  console.log("Entry Allowed");
} else {
  console.log("Entry Denied");
}


// 2. OR (||) Operator
let hasEmail = false;
let hasPhone = true;

if (hasEmail || hasPhone) {
  console.log("Login Possible");
} else {
  console.log("Login Not Possible");
}


// 3. AND vs OR Difference
let marks = 75;
let attendance = 70;

if (marks >= 80 && attendance >= 75) {
  console.log("Scholarship Approved");
} else {
  console.log("Scholarship Not Approved");
}


// 4. Multiple Conditions Together
let username = "admin";
let password = "1234";

if (username === "admin" && password === "1234") {
  console.log("Login Successful");
} else {
  console.log("Invalid Credentials");
}


// 5. OR based decision
let isAdmin = false;
let isModerator = true;

if (isAdmin || isModerator) {
  console.log("Access Granted");
} else {
  console.log("Access Denied");
}

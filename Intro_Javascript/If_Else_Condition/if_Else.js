// ===================================
// Conditional Branching: if - else
// ===================================

// Condition true হলে → if

// Condition false হলে → else


// 1. Simple if
let age = 20;

if (age >= 18) {
  console.log("Adult");
}


// 2. if - else
let marks = 30;

if (marks >= 33) {
  console.log("Pass");
} else {
  console.log("Fail");
}


// 3. if - else if - else (Multiple Branch)
let score = 65;

if (score >= 80) {
  console.log("Grade A+");
} else if (score >= 70) {
  console.log("Grade A");
} else if (score >= 60) {
  console.log("Grade B");
} else {
  console.log("Fail");
}


// 4. Branching with Boolean
let isLoggedIn = false;

if (isLoggedIn) {
  console.log("Welcome User");
} else {
  console.log("Please Login");
}


// 5. Comparison based branching
let x = 10;
let y = 15;

if (x > y) {
  console.log("x is greater");
} else {
  console.log("y is greater");
}


// 6. Multiple condition branching
// একাধিক condition একসাথে ব্যবহার করা যায়।
let age2 = 22;
let hasID = true;

if (age2 >= 18 && hasID === true) {
  console.log("Entry Allowed");
} else {
  console.log("Entry Denied");
}


// 7. Nested if (if inside if)
// একটা if এর ভিতরে আরেকটা if ব্যবহার করা হলে তাকে Nested if বলে।
let balance = 500;
let hasCard = true;

if (hasCard) {
  if (balance >= 300) {
    console.log("Transaction Successful");
  } else {
    console.log("Insufficient Balance");
  }
} else {
  console.log("No Card Found");
}

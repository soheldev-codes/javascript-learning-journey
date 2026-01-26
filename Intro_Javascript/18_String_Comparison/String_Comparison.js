// =======================================
// JavaScript String Comparison
// lowercase | uppercase | trim
// =======================================

// Example 1: lowercase
let name1 = "SoHeL";
console.log(name1.toLowerCase()); // sohel

// Example 2: uppercase
let country = "bangladesh";
console.log(country.toUpperCase()); // BANGLADESH

// Example 3: trim
let email = "  user@gmail.com  ";
console.log(email.trim()); // user@gmail.com

// -------------------------------
// Proper string comparison
let userInput = "  SoHeL ";
let savedName = "sohel";

let cleanInput = userInput.trim().toLowerCase();

if (cleanInput === savedName) {
  console.log("Name matched ✅");
} else {
  console.log("Name not matched ❌");
}

// -------------------------------
// Real-life example: login check
let inputUsername = "  ADMIN ";
let systemUsername = "admin";

if (inputUsername.trim().toLowerCase() === systemUsername) {
  console.log("Login successful");
} else {
  console.log("Login failed");
}

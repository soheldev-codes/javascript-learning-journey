// =======================================
// JavaScript String Methods
// slice | concat | join | includes
// =======================================

// -------- slice()
let course = "JavaScript Learning";
console.log(course.slice(0, 10)); // JavaScript
console.log(course.slice(11));    // Learning
console.log(course.slice(-8));    // Learning

// -------- concat()
let firstName = "Sohel";
let lastName = "Rana";
let fullName = firstName.concat(" ", lastName);
console.log(fullName);

// -------- join() (array to string)
let words = ["I", "love", "JavaScript"];
let sentence = words.join(" ");
console.log(sentence);

let numbers = [1, 2, 3, 4];
console.log(numbers.join("-"));

// -------- includes()
let message = "I am learning JavaScript";

console.log(message.includes("JavaScript")); // true
console.log(message.includes("Python"));     // false

// -------- real-life example
let searchText = "react";
let title = "Learn React with JavaScript";

if (title.toLowerCase().includes(searchText.toLowerCase())) {
  console.log("Search matched ✅");
} else {
  console.log("Search not found ❌");
}

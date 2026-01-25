// =======================================
// JavaScript String & String vs Array
// =======================================

// String example
let message = "JavaScript";
console.log(message);
console.log(message.length);
console.log(message[0]);

// String is immutable
message[0] = "j";
console.log("After change attempt:", message);

// Array example
let languages = ["JavaScript", "HTML", "CSS"];
console.log(languages);

// Array is mutable
languages[1] = "React";
console.log("After change:", languages);

// Loop through string
for (let char of message) {
  console.log("Char:", char);
}

// Loop through array
for (let lang of languages) {
  console.log("Language:", lang);
}

// Convert string to array
let word = "Hello";
let charArray = word.split("");
console.log(charArray);

// Convert array to string
let joined = charArray.join("");
console.log(joined);

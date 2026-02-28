// =======================================
// Reverse a String in 4 Different Ways
// =======================================

// -------- Way 1: split + reverse + join
let text1 = "JavaScript";
let reversed1 = text1.split("").reverse().join("");
console.log("Way 1:", reversed1);


// -------- Way 2: Using for loop
let text2 = "Programming";
let reversed2 = "";

for (let i = text2.length - 1; i >= 0; i--) {
  reversed2 += text2[i];
}
console.log("Way 2:", reversed2);


// -------- Way 3: Using while loop
let text3 = "Developer";
let reversed3 = "";
let index = text3.length - 1;

while (index >= 0) {
  reversed3 += text3[index];
  index--;
}
console.log("Way 3:", reversed3);


// -------- Way 4: Using for...of loop ✅
let text4 = "Bangladesh";
let reversed4 = "";

for (let char of text4) {
  reversed4 = char + reversed4;
}
console.log("Way 4 (for...of):", reversed4);


// -------- Function example
function reverseString(str) {
  let result = "";
  for (let ch of str) {
    result = ch + result;
  }
  return result;
}

console.log("Function result:", reverseString("sohel123"));

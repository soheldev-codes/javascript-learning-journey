// =======================================
// Array Traversal using for & while Loop
// =======================================

let numbers = [10, 20, 30, 40, 50];

// =======================================
// 🔹 Traversal using for loop
// =======================================

console.log("Traversal using for loop:");

for (let i = 0; i < numbers.length; i++) {
  console.log("Index:", i, "Value:", numbers[i]);
}

// =======================================
// 🔹 Traversal using while loop
// =======================================

console.log("Traversal using while loop:");

let index = 0;

while (index < numbers.length) {
  console.log("Index:", index, "Value:", numbers[index]);
  index++;
}

// =======================================
// 🔹 Real-life example
// Sum of all elements
// =======================================

let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

console.log("Sum using for loop:", sum);

// Using while loop
let total = 0;
let i = 0;

while (i < numbers.length) {
  total += numbers[i];
  i++;
}

console.log("Sum using while loop:", total);

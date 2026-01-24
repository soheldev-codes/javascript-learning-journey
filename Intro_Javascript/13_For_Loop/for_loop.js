// ===============================
// JavaScript for Loop
// ===============================

// 1. Simple for loop
for (let i = 1; i <= 5; i++) {
  console.log(i);
}


// 2. Print numbers from 0 to 10
for (let i = 0; i <= 10; i++) {
  console.log(i);
}


// 3. Print even numbers (0–10)
for (let i = 0; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}


// 4. Sum of numbers (1–5)
let sum = 0;

for (let i = 1; i <= 5; i++) {
  sum = sum + i;
}

console.log("Sum:", sum);


// 5. Loop through array
// 📌 Array এর প্রতিটা element access করতে loop খুব useful।
let fruits = ["Apple", "Banana", "Mango"];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}


// 6. Reverse loop
for (let i = 5; i >= 1; i--) {
  console.log(i);
}

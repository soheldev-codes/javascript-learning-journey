// ===============================
// JavaScript While Loop Practice
// ===============================

// Example 1: Print 1 to 5
let count = 1;
while (count <= 5) {
  console.log(count);
  count++;
}

// Example 2: Even & Odd numbers (1–20)
let num = 1;
while (num <= 20) {
  if (num % 2 === 0) {
    console.log("Even:", num);
  }
  num++;
}

let num1 = 1;
while (num1 <= 20) {
  if (num1 % 2 !== 0) {
    console.log("Odd:", num1);
  }
  num1++;
}

// Example 3: Reverse counting
let n = 5;
while (n >= 1) {
  console.log("Reverse:", n);
  n--;
}

// Example 4: Sum of numbers
let i = 1;
let sum = 0;
while (i <= 5) {
  sum += i;
  i++;
}
console.log("Sum:", sum);

// Example 5: Multiplication table
let m = 1;
while (m <= 10) {
  console.log(`2 x ${m} = ${2 * m}`);
  m++;
}

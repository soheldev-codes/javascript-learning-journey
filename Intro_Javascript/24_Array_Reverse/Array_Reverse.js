// =======================================
// Reversing an Array (With & Without reverse())
// =======================================

// -------- Original array
let numbers = [1, 2, 3, 4, 5];

// =======================================
// 🔹 Way 1: Using reverse() method
// ⚠️ reverse() original array change করে
// =======================================

let reversedWithMethod = [...numbers].reverse();
console.log("Using reverse():", reversedWithMethod);
console.log("Original array:", numbers);

// =======================================
// 🔹 Way 2: Using for loop (without reverse)
// =======================================

let reversedFor = [];

for (let i = numbers.length - 1; i >= 0; i--) {
  reversedFor.push(numbers[i]);
}

console.log("Using for loop:", reversedFor);

// =======================================
// 🔹 Way 3: Using while loop
// =======================================

let reversedWhile = [];
let index = numbers.length - 1;

while (index >= 0) {
  reversedWhile.push(numbers[index]);
  index--;
}

console.log("Using while loop:", reversedWhile);

// =======================================
// 🔹 Way 4: Using for...of loop
// =======================================

let reversedForOf = [];

for (let num of numbers) {
  reversedForOf.unshift(num); // সামনে add করা
}

console.log("Using for...of:", reversedForOf);

// =======================================
// 🔹 Real-life example function
// =======================================

function reverseArray(arr) {
  let result = [];
  for (let item of arr) {
    result.unshift(item);
  }
  return result;
}

console.log(reverseArray(["a", "b", "c"]));

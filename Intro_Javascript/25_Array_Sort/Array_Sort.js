// =======================================
// Sort an Array - Problems & Solutions
// =======================================

// ---------------------------------------
// Problem 1: Sort numbers in ascending order
// ---------------------------------------

let numbers = [5, 2, 9, 1, 7];

numbers.sort((a, b) => a - b);
console.log("Ascending:", numbers); // [1, 2, 5, 7, 9]

// ---------------------------------------
// Problem 2: Sort numbers in descending order
// ---------------------------------------

let numbers2 = [10, 3, 6, 1, 8];

numbers2.sort((a, b) => b - a);
console.log("Descending:", numbers2); // [10, 8, 6, 3, 1]

// ---------------------------------------
// Problem 3: Sort strings alphabetically
// ---------------------------------------

let fruits = ["banana", "apple", "orange", "mango"];

fruits.sort();
console.log("Sorted strings:", fruits);

// ---------------------------------------
// Problem 4: Sort strings (case-insensitive)
// ---------------------------------------

let names = ["sohel", "Rana", "abul", "Karim"];

names.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
console.log("Case insensitive:", names);

// ---------------------------------------
// Problem 5: Sort array without using sort()
// ---------------------------------------

let arr = [4, 1, 3, 2];
let sortedArr = [];

while (arr.length > 0) {
  let min = arr[0];
  let minIndex = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
      minIndex = i;
    }
  }

  sortedArr.push(min);
  arr.splice(minIndex, 1);
}

console.log("Without sort():", sortedArr);

// ---------------------------------------
// Problem 6: Sort array of objects by price
// ---------------------------------------

let products = [
  { name: "Laptop", price: 60000 },
  { name: "Mobile", price: 25000 },
  { name: "Tablet", price: 30000 }
];

products.sort((a, b) => a.price - b.price);
console.log("Sorted by price:", products);

// ==================================
// JavaScript for...of & for...in Loop
// ==================================

// for...of with Array
let colors = ["Red", "Green", "Blue"];
for (let color of colors) {
  console.log("Color:", color);
}

// for...of with String
let language = "JS";
for (let char of language) {
  console.log("Character:", char);
}

// for...in with Object
let person = {
  name: "Rahim",
  age: 22,
  country: "Bangladesh"
};

for (let key in person) {
  console.log(key + ":", person[key]);
}

// for...in with Array index
let numbers = [10, 20, 30];
for (let index in numbers) {
  console.log("Index:", index, "Value:", numbers[index]);
}

// Problem: Sum of array
let values = [5, 10, 15];
let total = 0;

for (let v of values) {
  total += v;
}
console.log("Total:", total);

// =======================================
// Introduction to JavaScript Objects
// Properties & Values
// =======================================

// -------- Creating an object
let person = {
  name: "Sohel",
  age: 22,
  isStudent: true,
  country: "Bangladesh"
};

console.log(person);

// -------- Accessing properties (Dot notation)
console.log(person.name);       // Sohel
console.log(person.age);        // 22

// -------- Accessing properties (Bracket notation)
console.log(person["country"]); // Bangladesh

// -------- Modifying property value
person.age = 23;
console.log("Updated age:", person.age);

// -------- Adding new property
person.profession = "Developer";
console.log(person);

// -------- Deleting a property
delete person.isStudent;
console.log(person);

// -------- Object properties & values
console.log("Keys:", Object.keys(person));
console.log("Values:", Object.values(person));

// -------- Loop through object (for...in)
for (let key in person) {
  console.log(key + ":", person[key]);
}

// -------- Real-life example
let product = {
  title: "Laptop",
  price: 65000,
  inStock: true
};

if (product.inStock) {
  console.log(product.title + " is available");
} else {
  console.log(product.title + " is out of stock");
}

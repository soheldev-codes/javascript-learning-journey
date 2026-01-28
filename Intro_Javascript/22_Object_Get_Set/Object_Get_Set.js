// =======================================
// Multiple Ways to GET & SET Object Properties
// =======================================

// -------- Sample object
let user = {
  name: "Sohel",
  age: 22,
  city: "Dhaka",
  isActive: true
};

console.log(user);

// =======================================
// 🔹 GET Object Properties
// =======================================

// 1️⃣ Dot notation (most common)
console.log(user.name);
console.log(user.age);

// 2️⃣ Bracket notation
console.log(user["city"]);
console.log(user["isActive"]);

// 3️⃣ Using variable key (dynamic access)
let keyName = "name";
console.log(user[keyName]); // Sohel

// 4️⃣ Destructuring
let { name, age } = user;
console.log(name);
console.log(age);

// 5️⃣ Loop (for...in)
for (let key in user) {
  console.log(key + ":", user[key]);
}

// =======================================
// 🔹 SET Object Properties
// =======================================

// 1️⃣ Dot notation set
user.age = 23;
console.log("Updated age:", user.age);

// 2️⃣ Bracket notation set
user["city"] = "Chattogram";
console.log("Updated city:", user.city);

// 3️⃣ Add new property
user.profession = "Developer";
console.log(user);

// 4️⃣ Dynamic property set
let newKey = "email";
user[newKey] = "sohel@example.com";
console.log(user);

// 5️⃣ Update inside loop
for (let key in user) {
  if (key === "isActive") {
    user[key] = false;
  }
}
console.log("After loop update:", user);

// =======================================
// 🔹 Real-life example
let product = {
  title: "Mobile",
  price: 25000
};

let field = "price";
product[field] = 23000; // discount applied

console.log(product);

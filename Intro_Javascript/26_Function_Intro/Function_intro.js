// =======================================
// Introduction to JavaScript Functions
// =======================================

// -------- 1️⃣ Simple function (no parameter)
function greet() {
  console.log("Hello, Welcome to JavaScript!");
}

greet();
greet();

// -------- 2️⃣ Function with parameter
function sayHello(name) {
  console.log("Hello " + name);
}

sayHello("Sohel");
sayHello("Rana");

// -------- 3️⃣ Function with return
function add(a, b) {
  return a + b;
}

let result = add(5, 3);
console.log("Sum:", result);

// -------- 4️⃣ Function with multiple parameters
function multiply(x, y) {
  return x * y;
}

console.log("Multiply:", multiply(4, 5));

// -------- 5️⃣ Real-life example
function calculateDiscount(price) {
  return price - 100;
}

let finalPrice = calculateDiscount(500);
console.log("Final Price:", finalPrice);

// -------- 6️⃣ Function expression
const square = function (num) {
  return num * num;
};

console.log("Square:", square(6));

// -------- 7️⃣ Arrow function (modern JS)
const subtract = (a, b) => a - b;
console.log("Subtract:", subtract(10, 4));

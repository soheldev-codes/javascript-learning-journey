// =======================================
// Different Types of Function Parameters
// =======================================


function greet(name) { // name = parameter
  console.log("Hello", name);
}

greet("Sohel"); // "Sohel" = argument


// -------- 1️⃣ Normal (Required) Parameter
function square(num) {
  return num * num;
}

console.log(square(5));

// -------- 2️⃣ Multiple Parameters
function add(a, b) {
  return a + b;
}

console.log(add(3, 7));

// -------- 3️⃣ Default Parameter
function greet(name = "Guest") {
  return "Hello " + name;
}

console.log(greet("Sohel"));
console.log(greet()); // no argument passed

// -------- 4️⃣ Rest Parameter (...)
// multiple argument handle করার জন্য
function sumAll(...numbers) {
  let sum = 0;
  for (let num of numbers) {
    sum += num;
  }
  return sum;
}

console.log(sumAll(1, 2, 3));
console.log(sumAll(5, 10, 15, 20));

// -------- 5️⃣ Object Parameter
function printUser(user) {
  return user.name + " - " + user.age;
}

console.log(printUser({ name: "Sohel", age: 22 }));

// -------- 6️⃣ Destructured Object Parameter
function showProduct({ title, price }) {
  return title + " costs " + price;
}

console.log(showProduct({ title: "Laptop", price: 60000 }));

// -------- 7️⃣ Array Parameter
function getFirstElement(arr) {
  return arr[0];
}

console.log(getFirstElement([10, 20, 30]));

// -------- 8️⃣ Destructured Array Parameter
function getCoordinates([x, y]) {
  return "X: " + x + ", Y: " + y;
}

console.log(getCoordinates([5, 8]));

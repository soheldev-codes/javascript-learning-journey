// =======================================
// Function return & set return value
// =======================================

// -------- 1️⃣ Function with return
function sum(a, b) {
  return a + b;
}

let total = sum(10, 5);
console.log("Total:", total);

// -------- 2️⃣ Return value used in calculation
function multiply(x, y) {
  return x * y;
}

let result = multiply(4, 5) + 10;
console.log("Result:", result);

// -------- 3️⃣ Return string
function getFullName(firstName, lastName) {
  return firstName + " " + lastName;
}

let fullName = getFullName("Sohel", "Rana");
console.log("Full Name:", fullName);

// -------- 4️⃣ Return boolean
function isAdult(age) {
  return age >= 18;
}

let check = isAdult(20);
console.log("Is Adult:", check);

// -------- 5️⃣ Return array
function getNumbers() {
  return [1, 2, 3, 4];
}

let nums = getNumbers();
console.log(nums);

// -------- 6️⃣ Return object
function getUser() {
  return {
    name: "Sohel",
    role: "Developer"
  };
}

let user = getUser();
console.log(user.name);

// -------- 7️⃣ return vs console.log
function demo() {
  console.log("Hello"); // only prints
  return "World";       // sends value
}

let value = demo();
console.log(value);

// -------- 8️⃣ return stops function
function testReturn() {
  return "Done";
  console.log("This will not run"); // Unreachable code. This code will never be Show Or Exicuted
}

console.log(testReturn());

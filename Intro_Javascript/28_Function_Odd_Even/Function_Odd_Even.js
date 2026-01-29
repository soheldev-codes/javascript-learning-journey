// =======================================
// Recap & Conditional Return (Odd / Even)
// =======================================

// -------- 1️⃣ Simple odd-even check
function checkOddEven(number) {
  if (number % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

let result1 = checkOddEven(10);
console.log("10 is:", result1);

let result2 = checkOddEven(7);
console.log("7 is:", result2);

// -------- 2️⃣ Return boolean (true / false)
function isEven(num) {
  return num % 2 === 0;
}

let check1 = isEven(8);
console.log("Is 8 even?", check1);

let check2 = isEven(5);
console.log("Is 5 even?", check2);

// -------- 3️⃣ Using return value in condition
function oddEvenMessage(num) {
  if (isEven(num)) {
    return num + " is an Even number";
  }
  return num + " is an Odd number";
}

console.log(oddEvenMessage(12));
console.log(oddEvenMessage(9));

// -------- 4️⃣ Arrow function version
const oddEvenArrow = (n) => {
  return n % 2 === 0 ? "Even" : "Odd";
};

console.log("Arrow:", oddEvenArrow(20));
console.log("Arrow:", oddEvenArrow(13));

// -------- 5️⃣ Real-life style example
function checkSeatNumber(seat) {
  if (seat % 2 === 0) {
    return "Window Seat";
  }
  return "Aisle Seat";
}

let seatType = checkSeatNumber(15);
console.log("Seat 15:", seatType);

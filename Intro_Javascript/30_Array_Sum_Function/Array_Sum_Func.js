// =======================================
// Sum of all numbers in an array using function
// =======================================

// -------- 1️⃣ Basic function with for loop
function sumArray(numbers) {
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  return sum;
}

let result1 = sumArray([1, 2, 3, 4, 5]);
console.log("Sum:", result1); // 15


// -------- 2️⃣ Using for...of loop
function sumArrayForOf(arr) {
  let total = 0;

  for (let num of arr) {
    total += num;
  }

  return total;
}

console.log("Sum (for...of):", sumArrayForOf([10, 20, 30]));


// -------- 3️⃣ Using while loop
function sumArrayWhile(arr) {
  let sum = 0;
  let index = 0;

  while (index < arr.length) {
    sum += arr[index];
    index++;
  }

  return sum;
}

console.log("Sum (while):", sumArrayWhile([5, 5, 5]));


// -------- 4️⃣ Real-life style example
function calculateTotalPrice(prices) {
  let total = 0;

  for (let price of prices) {
    total += price;
  }

  return total;
}

let cartPrices = [500, 1200, 800];
let totalPrice = calculateTotalPrice(cartPrices);
console.log("Total Cart Price:", totalPrice);

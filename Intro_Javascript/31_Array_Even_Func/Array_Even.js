// =======================================
// Return all the even numbers of an array
// =======================================

// -------- 1️⃣ Using for loop
function getEvenNumbers(arr) {
  let evenNumbers = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evenNumbers.push(arr[i]);
    }
  }

  return evenNumbers;
}

console.log(getEvenNumbers([1, 2, 3, 4, 5, 6]));


// -------- 2️⃣ Using for...of loop
function getEvenNumbersForOf(numbers) {
  let result = [];

  for (let num of numbers) {
    if (num % 2 === 0) {
      result.push(num);
    }
  }

  return result;
}

console.log(getEvenNumbersForOf([10, 15, 20, 25, 30]));


// -------- 3️⃣ Using while loop
function getEvenNumbersWhile(arr) {
  let even = [];
  let index = 0;

  while (index < arr.length) {
    if (arr[index] % 2 === 0) {
      even.push(arr[index]);
    }
    index++;
  }

  return even;
}

console.log(getEvenNumbersWhile([7, 8, 9, 10, 12]));


// -------- 4️⃣ Real-life style example
function getEvenSeatNumbers(seats) {
  let evenSeats = [];

  for (let seat of seats) {
    if (seat % 2 === 0) {
      evenSeats.push(seat);
    }
  }

  return evenSeats;
}

let seatNumbers = [1, 2, 3, 4, 5, 6];
console.log("Even seats:", getEvenSeatNumbers(seatNumbers));

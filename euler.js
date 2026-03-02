// Project Euler #1
// Find the sum of all multiples of 3 or 5 below 1000.

let sum = 0;

for (let i = 1; i < 1000; i++) {        // below 1000, not including it
  if (i % 3 === 0 || i % 5 === 0) {     // divisible by 3 or 5?
    sum += i;                            // yes — add to running total
  }
}

console.log(sum);                        // print the answer

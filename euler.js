// Project Euler #1
// https://projecteuler.net/problem=1
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Find the sum of all multiples of 3 or 5 below 1000.

export function sumMultiples(limit) {
  let sum = 0;

  for (let i = 1; i < limit; i++) {        // below limit, not including it
    if (i % 3 === 0 || i % 5 === 0) {     // divisible by 3 or 5?
      sum += i;                            // yes — add to running total
    }
  }

  return sum;
}

console.log(sumMultiples(1000));           // print the answer

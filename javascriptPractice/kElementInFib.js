/* 
Description

▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔

Q. Write a function which returns the Kth element of the Fibonacci sequence. The Fibonacci sequence is defined as a sequence in which each number is the sum of the preceding two numbers in the sequence. For the purpose of this question, the first two terms of the sequence are both 1, i.e. fib(0) = fib(1) = 1.

Approach
Create an array storing the answers at each index. Start with [1, 1], representing that the first answers are 1, 1. Iterate from 2 to k, adding the sum of the two previous locations.
*/

function fib(k) {
  // number -> number
  if (k < 2) return 1;

  return fib(k - 1) + fib(k - 2);
}

// Test Cases

console.log(fib(0)); // 1

console.log(fib(5)); // 8

console.log(fib(11)); // 144

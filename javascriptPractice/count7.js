// TODO count 7 recursion
/*
Details
In this task, we will practice working through a recursion problem.
Prompt
Given a non-negative int n, return the count of the occurrences of 7 as a digit, so for example 717 yields 2. (no loops).
Note that mod (%) by 10 yields the rightmost digit (126 % 10 is 6), while dividing (/) by 10 removes the rightmost digit (126 / 10 is 12).

*/

// Function Signature
function count7(n) {
  if (n === 0) return 0;

  if (n % 10 === 7) return 1 + count7(Math.floor(n / 10));

  return count7(Math.floor(n / 10));
}

console.log(count7(717) == 2);
console.log(count7(7) == 1);
console.log(count7(5) == 0);
console.log(count7(123) == 0);
console.log(count7(77) == 2);
console.log(count7(7123) == 1);
console.log(count7(771237) == 3);
console.log(count7(771737) == 4);
console.log(count7(47571) == 2);
console.log(count7(777777) == 6);
console.log(count7(70701277) == 4);
console.log(count7(777576197) == 5);
console.log(count7(99999) == 0);
console.log(count7(99799) == 1);

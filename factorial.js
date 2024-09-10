/*
Prompt
In mathematics, the factorial of a non-negative integer N, denoted as N!, is the multiplication product of all positive integers <= N. Compute the result recursively (without loops).

Expected Runtime
Time: O(N) to calculate N digits
Space: O(N) to store N frames on the function call stack
Examples
print(factorial(3) = 6)
print(factorial(5) = 120)
*/

// Function Signature
function factorial(n) {
  if (n === 1) return 1;

  return n * factorial(n - 1);
}

console.table([
  factorial(12) === 479001600,
  factorial(10) === 3628800,
  factorial(5) === 120,
  factorial(3) === 6,
  factorial(2) === 2,
  factorial(1) === 1,
]);

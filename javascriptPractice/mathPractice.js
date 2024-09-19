/*
Q. Given two binary numbers represented as strings a and b, return their sum as a binary string.

Examples:

Given: a = 1 & b = 11 // returns 100
Given: a = 101 & b = 110 // returns 1011
Approach:

You could use a built-in function to convert given strings into integers, calculate their sum, and convert the sum back to the string in a binary form although this is not the point of the problem.
One of the other approaches we could take is computing the sum bit-by-bit:
Start from the lowest bit and compute the carry for the lowest bit.
If the lowest bit of a has 1-bit, add 1 to the carry, and the same steps apply to b.
Possible carry for the lowest bit at this point are: 00, 01, 10 (in binary).
Append this lowest bit of the carry to the sum and repeat the same steps for the next bit.
Don't forget to reverse the sum to a string.
*/

function solution(a, b) {
  let total = parseInt(a, 2) + parseInt(b, 2);
  return total.toString(2);
}
a: '1';
b: '1';
('10');

a: '1';
b: '11';

('100');

a: '101';
b: '110';
('1011');

/*
 Q. Given an integer, determine if it is a power of two. Do not use built-in functions or operators to solve this problem.
 
 Examples:
 
 Given: 27 // returns false
 Given: 256 // returns true
 
 */

function solution(num) {
  if (num <= 0) return false;

  while (num % 2 == 0) {
    num = num / 2;
  }
  return num == 1;
}

64;

// // TODO use this for friday

// /*
// The decimal system uses the digits 0-9, the binary system uses the digits 0 and 1, and the hexadecimal system uses the digits 0-9 and the letters A-F. The ternary system is a base-3 numeral system that uses the digits 0, 1, and 2. Given a number n.

// Given an integer, write a function that converts the number into its base-3 representation. Return the result as a string.

// Target runtime and space complexity:
// Time: O(log n) to parse each digit in the number n
// Space: O(n) to create up to n stack frames

// // Approach 1 Time Complexity =>
// write plan here

// // Approach 2 Time Comp[lexity ->
// write plan here

// to convert to binary % 2
// */

// // Function Signature:
// function convertToBase3(number) {
//   function convert(number) {
//     // const currNum = number % 3;
//     // const restToProcess = (number - currNum) / 3;
//     // return (
//     //   (restToProcess !== 0 ? convert(restToProcess) : '') + currNum.toString()
//     // );
//     let remainder = number % 2;
//     let newNum = Math.floor(number / 2);
//     return (newNum !== 0 ? convert(newNum) : '') + remainder.toString();
//   }

//   // special case to include the negative sign
//   if (number < 0) {
//     return '-' + convert(Math.abs(number));
//   }
//   return convert(number);
// }

// console.log(convertToBase3(0) == '0');
// console.log(convertToBase3(1) == '1');
// console.log(convertToBase3(2) == '10');
// console.log(convertToBase3(3) == '11');
// console.log(convertToBase3(4) == '100');
// console.log(convertToBase3(-5) == '-101');
// // console.log(convertToBase3(10) === '101');
// // console.log(convertToBase3(30) === '1010');
// // console.log(convertToBase3(31) === '1011');
// // console.log(convertToBase3(32) === '1012');
// // console.log(convertToBase3(-33) === '-1020');
// // console.log(convertToBase3(92) === '10102');

// /*
// Problem

// The decimal system uses the digits 0-9, the binary system uses the digits 0 and 1, and the hexadecimal system uses the digits 0-9 and the letters A-F. The ternary system is a base-3 numeral system that uses the digits 0, 1, and 2. Given a number n.
// Given an integer, write a function that converts the number into its base-3 representation. Return the result as a string.

// Target runtime and space complexity:
// Time: O(log n) to parse each digit in the number n
// Space: O(n) to create up to n stack frames

// // Approach 1  =>
// write plan
// if n < 0, then we will return a negative
// Use Math.abs(n)
// Remainder = n % 3

// // Approach 2  ->
// write plan here

// n = 1253
// n % 10 = 3
// Math.floor(n / 10) = 125

// Examples:
// console.log(convertToBase3(0) === "0")
// console.log(convertToBase3(1) === "1")
// console.log(convertToBase3(2) === "2")
// console.log(convertToBase3(3) === "10")
// console.log(convertToBase3(4) === "11")
// console.log(convertToBase3(-5) === "-12")

// 3 * 1 = 3 remainder is 0 then you get 10
// */

// // Function Signature:
// // function convertToBase3(n) {
// //   function helper(n) {
// //     const reminder = n % 3;
// //     const newN = (n - reminder) / 3;
// //     console.log('reminder >>> ', reminder);
// //     if (newN === 0) return reminder.toString();
// //     return helper(newN) + reminder.toString();
// //   }

// //   return n < 0 ? '-' + helper(Math.abs(n)) : helper(n);
// // }

// // Nicks
// // function convertToBase3(number) {
// //   function convert(number) {

// //     let remainder = number % 3;
// //     let newNum = Math.floor(number / 3);
// //     if ( newNum === 0 ) return remainder.toString()

// //     return  convert(newNum)  + remainder.toString();
// //   }

// //   // special case to include the negative sign
// //   if (number < 0) {
// //     return '-' + convert(Math.abs(number));
// //   }
// //   return convert(number);
// // }

// // Solution

// // function convertToBase3(number) {

// //   function convert(number) {
// //     const currNum = number % 3;
// //     const restToProcess = (number - currNum) / 3;
// //     return (restToProcess !== 0 ? convert(restToProcess) : '') + currNum.toString();
// //   }

// //   // special case to include the negative sign
// //   if (number < 0) {
// //     return "-" + convert(Math.abs(number));
// //   }
// //   return convert(number);
// // }

// // console.log(convertToBase3(0) === '0');
// // console.log(convertToBase3(1) === '1');
// // console.log(convertToBase3(2) === '2');
// // console.log(convertToBase3(3) === '10');
// // console.log(convertToBase3(4) === '11');
// // console.log(convertToBase3(-5) === '-12');
// // console.log(convertToBase3(10) === '101');
// // console.log(convertToBase3(30) === '1010');
// // console.log(convertToBase3(31) === '1011');
// // console.log(convertToBase3(32) === '1012');
// // console.log(convertToBase3(-33) === '-1020');
// // console.log(convertToBase3(92) === '10102');

const f = (n) => (n <= 1 ? 1 : n * f(n - 1));

let g = f(5);
console.log(g);
// function f1(a) {
// if (a == 0) return 1
// return a * f1(a - 1)
// }

// function main() {
//   const f2 =
// }

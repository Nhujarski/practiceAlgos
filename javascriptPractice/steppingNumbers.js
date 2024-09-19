// Given two integers ‘m’ and ’n’, find count of all the stepping numbers in range [m, n].
// A number is called stepping number if all adjacent digits have an absolute difference of 1.
// 321 is a Stepping Number while 421 is not.

// Input: m = 11, n = 25
// Output: 3
// /*
// Approach:
// loop through from m to n;
// check each number and see if all the digits have an absolute value of 1

// example num is 13
// num / 10 = 1
// num % 10 = 3
// if abs value is 1 then increment count
// return count

// use map to store curr num at the key and value could be array of steps?
// 25-11,
// 11-25,

// 12 is a stepping number
// 1 and 2 is 1

// 13 is not a stepping number
// why?
// 1 and 3 is 2
// if Math.abs(1-3) === 1?

// 12123

// 12, 21, 23

// */
// m = 110
// function countSteps(m,n) {
//   let count = 0;

//   for(let i = m; i <= n; i++ ) {
//     let frontNum = i / 10; 11
//     let backNum = i % 10; 0
//     for(let j = frontNum / 10; j <= frontNum; j++) {
//       j = 1;
//       j <= 11;

//     }

//     }

//   }
//   return count
// }

// def helper(num) {
//       let num = m;
//     let lastDigit = m%10;
//     num /= 10;
//     while(num>0) {
//       let currentDigit = num % 10;
//       if(currentDigit - lastDigit != 1) {
//         return false;
//       }
//       lastDigit = currentDigit;
//       num /= 10;
// }

// 1234
// lastDigit - 4
// 123
// currentDigir - 3

// 4-3==1

// lastDigit = 3
// 12
// currentDigit = 2
// 3-2 == 1

// console.log(countSteps(11,25))

// console.log(countSteps(110,112))
// 110
// 1-1-0

// 1-1, 1-0
// 11, 0
// 1-1, 1-0
//  helper(num)
//  let front = num / 10
//  let back = num % 10
//  if front >= 10 {
//   helper(front)
//  }

//  helper()

// front 11
// back = 0
// 11
// frontNum = 1
// backNum = 1
// 1-1 = 0;
// 12
// forntNum = 1
// backNum = 2
// 1-2 = 1
// count++ 1
// 13
// frontNum = 1
// backNum = 3
// 1-3 = 2
// 21
// frontNum = 2
// backNum = 1
// 2-1 = 1
// count++ 1

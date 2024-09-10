/*
Prompt
You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.
Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer newFlowers, return true if all newFlowers can be planted in the flowerbed without violating the no-adjacent-flowers rule.


Examples
Input: flowerbed = [1,0,0,0,1], n = 1
Output: true

Input: flowerbed = [1,0,0,0,1], n = 2
Output: false

Input: flowerbed = [0,0,1], n = 1
Output: true



*/

// 0 == no plant || 1 == 1 plant planted

function canPlantFlowers(flowerbed, n) {
  flowerbed.unshift(0);
  flowerbed.push(0);
  //  itrerate over the array
  // check curr val and next val
  //  if curr val is 0 and nxt val = 0 then we can plant flower at curr
  // subtract 1 from n after we planted flower
  // if n === 0 return out if not keep iterating
  // look for next pair of 0s
  for (let i = 1; i < flowerbed.length - 1; i++) {
    if (n === 0) return true;
    let prev = flowerbed[i - 1];
    let curr = flowerbed[i];
    let next = flowerbed[i + 1];

    if (prev === 0 && curr === 0 && next === 0) {
      flowerbed[i] = 1;
      n--;
    }
  }

  return n <= 0;
}
// console.log(canPlantFlowers([0,1], 1) === false)
// console.log( canPlantFlowers([0,0,1],1) === true)

// console.log( canPlantFlowers([1,0,0,0,1], 2) === false)
console.table([
  canPlantFlowers([0], 1) === true,
  canPlantFlowers([1], 1) === false,
  canPlantFlowers([0, 0], 1) === true,
  canPlantFlowers([0, 0], 2) === false,
  canPlantFlowers([1, 0], 1) === false,
  canPlantFlowers([0, 1], 1) === false,
  canPlantFlowers([1, 1], 1) === false,
  canPlantFlowers([0, 0, 0], 1) === true,
  canPlantFlowers([0, 0, 0], 2) === true,
  canPlantFlowers([0, 0, 0], 3) === false,
  canPlantFlowers([1, 1, 1, 1, 1, 1, 1], 0) === true,
  canPlantFlowers([1, 1, 1, 1, 1, 1, 1], 1) === false,
  canPlantFlowers([1, 0, 0, 0, 1], 1) === true,
  canPlantFlowers([1, 0, 0, 0, 1], 2) === false,
  canPlantFlowers([0, 0, 1], 1) === true,
]);

/* // Q. Given an unsorted array, perform insertion sort in ascending order.
  
  // Examples:
  
  // • Given an array: [1] // returns [1]
  
  // • Given an array: [3, 1, 2, 4] // returns [1, 2, 3, 4]
  
  */

// ANSWER

// function canPlantFlowers(flowerbed, newFlowers) {
//   // add zeros to both ends
//   flowerbed.unshift(0)
//   flowerbed.push(0)

//   for (let i = 1; i < flowerbed.length - 1; i++) {
//     if (newFlowers === 0)
//       return true

//     if (flowerbed[i - 1] === 0
//       && flowerbed[i] === 0
//       && flowerbed[i + 1] === 0) {

//       flowerbed[i] = 1
//       newFlowers--
//     }
//   }

//   return newFlowers <= 0
// }

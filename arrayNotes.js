/*

array

- list of items
- ordered in some way
- access items by index in array
- contiguous memory block
- constant time access
- constant time append
- linear time insert / prepend


0  1  2  3  4  5  6  7
x  x  x  x  x  x  x  x  
a  b  c  d  e  f  g  h  

append 8 items = 8 operations


0  1  2  3  4  5  6  7  8  9  10 11 12 13 14 15 
x  x  x  x  x  x  x  x  x  x  x  x  x  x  x  x 
a  b  c  d  e  f  g  h  i  a  a  a  a  a  a  a  

9th append = 8 + 1
9 appends = 8 + 8 + 1 = 17

16 appends = 8 + 8 + 8 = 24 = 16 * 1.5


*/

// find the sum of an array
// accumulator pattern
function sum(arr) {
  // starting value for the accumulator
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    // update the accumulator with the element
    sum += arr[i];
  }

  return sum;
}
// let arr = []
// console.log(arr.reduce((a, b) => a + b))

// find the max value of an array
// "best value" patern
function max(arr) {
  if (arr.length === 0) return arr;
  // start with a "starting" value
  let max = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    // conditionally replace the value
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

let arr = [1, 2, 3, 4, 5];
console.log(arr.reduce((a, b) => Math.max(a, b)));

console.log(max([]));
/*
  1 > 2  false
  false > 3 false
  ...
  false > 5  -> false
  
  */

// console.log(max([1,2,3,4]))

// store 10 integers, how much memory do i need to allocate?
// how about storing 10 dictionaries?
// 10 booleans?

// 1 2 3 4 5 1 2 3 4 5
/*
  [
    {
      "key1": "value1",
      "key2": "value2",
    }
    ...
  ]
  
  [ 0x123, 0x567, 0x122, ...]
  
  4 or 8 bytes per value
  
  2d arrays?
  */

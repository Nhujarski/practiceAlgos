/*
Given an array of positive integers, find the first element 
that occurs k number of times. If no element occurs k times, 
return -1, and you may assume k is greater than 0.

Examples:
• Given an array: [1, 2, 2, 3, 3], k: 2 // returns 2
• Given an array: [], k: 1 // returns -1

The standard solution is to use a dictionary to keep track of 
the number of repetitions. Early return when you find an 
element that hits k repeats.

Time: O(N)
Space: O(N)

The original solution, but do not return early. Build up the 
full dictionary of counts. Iterate through the array again and 
return the first one whose count is greater than k. Discuss how 
this does not change the overall runtime or space complexity.

Time & Space: O(n)

For each element, iterate through the rest of the array to see 
if it is repeated k times. If it is, return it. Otherwise, go 
onto the next element. Walk through how this approach is O(n^2) 
runtime.

Time: O(n^2)
Space: 

edge cases:
all unique
k > array.length
k = 0
empty array

*/

function firstToKBruteForce(array, k) {
  for (let i = 0; i < array.length; i++) {
    let count = 1;
    let targetValue = array[i];
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] === targetValue) count++;
      if (count >= k) return array[i];
    }
  }
  return -1;
}

// The original solution, but do not return early. Build up the
// full dictionary of counts. Iterate through the array again and
// return the first one whose count is greater than k. Discuss how
// this does not change the overall runtime or space complexity.

// Time & Space: O(n)

/*
const example = [ 0, 1, 2, 3, 4, 5, 5, 4, 3, 2, 1 ], const k = 2
{"0":1, "1":2}
*/

function firstToKFullHash(array, k) {
  if (array.length < k || array.length === 0) return -1;

  let hash = {};

  for (let i = 0; i < array.length; i++) {
    if (!hash[array[i]]) {
      hash[array[i]] = 1;
    } else {
      hash[array[i]] += 1;
    }
  }

  for (let key in hash) {
    if (hash[key] >= k) {
      return key;
    }
  }
}

function firstToKEarly(array, k) {
  if (array.length < k || array.length === 0) return -1;

  let hash = {};

  for (let i = 0; i < array.length; i++) {
    let key = array[i];
    hash[key] = (hash[key] || 0) + 1;
    // hash[key] = (hash[key] ? hash[key] : 0) + 1;
    // hash[key] ? hash[key]++ : hash[key] = 0;
    if (hash[key] >= k) return key;
  }
  return -1;
}

// [1, 2, 3] k = 2
// [ 0, 1, 2, 3, 4, 5, 5, 4, 3, 2, 1 ], k = 2
// [], k = 5

/*
Given an array of N integers, generate all permutations of the given array.

Target runtime and space complexity:
O(N!) time, O(N) space; N = length of input
Examples:
Some examples:
[1] -> [1]
[1, 2] -> [[1, 2], [2, 1]]

[1, 2, 3] -> [
  [1, 2, 3], 
  [1, 3, 2], 
  [2, 1, 3],
  [2, 3, 1],
  [3, 1, 2], 
  [3, 2, 1],
]
*/

// Function Signature:
function get_permutations(arr) {
  // do stuff
  let ans = [];
  function helper(part) {
    if (part.length === arr.length) {
      ans.push([...part]);
      return;
    } else {
      for (let x of arr) {
        if (!part.includes(x)) {
          part.push(x);
          helper(part);
          part.pop();
        }
      }
    }
  }
  helper([]);
  return ans;
}

// Function Signature:
function get_permutations1(array) {
  if (array.length === 0) return [[]];

  let first = array[0];
  //let perms  = get_permutations(array.slice(1));
  let permutations = [];

  for (let perm of get_permutations(array.slice(1))) {
    for (let i = 0; i <= perm.length; i++) {
      permutations.push([...perm.slice(0, i), first, ...perm.slice(i)]);
    }
  }

  return permutations;
}

console.log(get_permutations([1])); // [1] -> [1]

console.log(get_permutations([1, 2])); //[1, 2] -> [[1, 2], [2, 1]]

console.log(get_permutations([1, 2, 3])); //
// [1, 2, 3] -> [
//   [1, 2, 3],
//   [1, 3, 2],
//   [2, 1, 3],
//   [2, 3, 1],
//   [3, 1, 2],
//   [3, 2, 1],
// ]

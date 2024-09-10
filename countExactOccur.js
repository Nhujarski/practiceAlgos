/* 
Prompt
Given an array and a target count X, return the number of elements that is repeated exactly X times.

Expected Runtime
Time: O(N) to iterate through the length N array
Space: O(N) to store up to N elements
Examples
[1, 2, 3, 1, 2, 3], 2 => 3
[1, 2, 3, 1, 2, 3], 3 => 0
[1, 3, 3, 5, 5, 5, 5, 5, 3], 3 => 1

*/

// Function Signature
function countExactOccurrences(arr, exactOccurrences) {
  let count = 0;
  let map = new Map();

  for (const num of arr) {
    map.set(num, (map.get(num) || 0) + 1);
  }
  for (const [key, value] of map) {
    if (value === exactOccurrences) count++;
  }

  return count;
}

let arr = [1, 2, 3, 1, 2, 3];
console.table([
  countExactOccurrences(arr, 2) === 3,
  countExactOccurrences(arr, 3) === 0,
]);

arr = [1, 3, 3, 5, 5, 5, 5, 5, 3];
console.table([
  countExactOccurrences(arr, 1) === 1,
  countExactOccurrences(arr, 3) === 1,
  countExactOccurrences(arr, 5) === 1,
]);

arr = [10, 10, 10, 10];
console.table([
  countExactOccurrences(arr, 1) === 0,
  countExactOccurrences(arr, 3) === 0,
  countExactOccurrences(arr, 4) === 1,
  countExactOccurrences(arr, 6) === 0,
]);

arr = [100];
console.table([
  countExactOccurrences(arr, 1) === 1,
  countExactOccurrences(arr, 5) === 0,
  countExactOccurrences(arr, 100) === 0,
]);

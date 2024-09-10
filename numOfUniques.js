/* 
Q. Given an unsorted array, return the number of unique elements that appear only once in the array.



Examples:

• Given an array: [3, 1, 1, 2, 3, 1, 1, 1, 4] // returns 2 (unique elements: 2 and 4)

• Given an array: [1] // returns 1 (unique element: 1)


*/

function numUniques(array) {
  let map = new Map();
  let count = 0;

  for (let el of array) {
    map.set(el, (map.get(el) || 0) + 1);
  }
  for (let [key, value] of map) {
    if (value === 1) count++;
  }

  return count;
}

// Test Cases

console.log(numUniques([])); // 0

console.log(numUniques([3, 1, 1, 2, 3, 1, 1, 1, 4])); // 2

console.log(numUniques([1])); // 1

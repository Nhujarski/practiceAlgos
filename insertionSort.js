/* 
Q. Given an unsorted array, perform insertion sort in ascending order.



Examples:

• Given an array: [1] // returns [1]

• Given an array: [3, 1, 2, 4] // returns [1, 2, 3, 4]

Approach:
// write approach here 

*/

function insertionSort(array) {
  if (array.length <= 1) return array;
  // Write your code here.
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[i]) {
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
  }
  return array;
}

// Test Cases

console.log(insertionSort([])); // []

console.log(insertionSort([1])); // [1]

console.log(insertionSort([3, 1, 2, 4])); // [1, 2, 3, 4]

console.log(insertionSort([-10, 1, 3, 8, -13, 32, 9, 5])); // [-13, -10, 1, 3, 5, 8, 9, 32]

/* 

Q. Given an unsorted array, perform bubble sort in ascending order.



Examples:

• Given an array: [1] // returns [1]

• Given an array: [3, 1, 2, 4] // returns [1, 2, 3, 4]
*/

function bubbleSort(arr) {
  // Write your code here.
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

// Test Cases

console.log(bubbleSort([])); // []

console.log(bubbleSort([1])); // [1]

console.log(bubbleSort([3, 1, 2, 4])); // [1, 2, 3, 4]

console.log(bubbleSort([-10, 1, 3, 8, -13, 32, 9, 5])); // [-13, -10, 1, 3, 5, 8, 9, 32]

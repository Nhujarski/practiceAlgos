/* 
Q. Given a sorted array of unique positive integers and a target integer, check if the array contains a target using binary search and return its index. If the array does not contain the target, return -1.



Note:

• Indexes (indices) follow the zero-based numbering rule (i.e. the index of the first element of an array is 0, not 1). 



Examples:

• Given an array: [1, 2, 3, 6, 8, 13, 113, 153, 200], target: 1 // returns 0

• Given an array: [1, 2, 3, 6, 8, 13, 113, 153, 200], target: 200 // returns 8

• Given an array: [1, 2, 3, 6, 8, 13, 113, 153, 200], target: 154 // returns -1


*/

function binarySearch(array, target) {
  // Write your code here.
  let left = 0;
  let right = array.length - 1;
  while (left <= right) {
    let mid = Math.ceil(left + (right - left) / 2);

    if (array[mid] === target) {
      return mid;
    } else if (target < array[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return -1;
}

// Test Cases

var array = [1, 2, 3, 6, 8, 13, 113, 153, 200];
console.table([
  binarySearch(array, 1) == 0, // 0
  binarySearch(array, 200) == 8, // 8
  binarySearch(array, 8) == 4, // 4
  binarySearch(array, 154) == -1, // -1)
]);

// TODO review merge sort

/* 

Q. Given an unsorted array, perform merge sort in ascending order.



Examples:

• Given an array: [1] // returns [1]

• Given an array: [3, 1, 2, 4] // returns [1, 2, 3, 4]

*/

function merge(leftArr, rightArr) {
  let output = [];
  let leftIdx = 0;
  let rightIdx = 0;

  while (leftIdx < leftArr.length && rightIdx < rightArr.length) {
    let leftEL = leftArr[leftIdx];
    let rightEl = rightArr[rightIdx];

    if (leftEL < rightEl) {
      output.push(leftEL);
      leftIdx++;
    } else {
      output.push(rightEl);
      rightIdx++;
    }
  }
  return [...output, ...leftArr.slice(leftIdx), ...rightArr.slice(rightIdx)];
}

function mergeSort(array) {
  console.log(array.length <= 1);
  if (array.length <= 1) return array;

  let mid = Math.ceil(array.length / 2);
  let left = array.slice(0, mid);
  let right = array.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
}

// Test Cases

console.log(mergeSort([]) === []); // []

console.log(mergeSort([1]) === [1]); // [1]

// console.log(mergeSort([3, 1, 2, 4]) == [1, 2, 3, 4]) // [1, 2, 3, 4]

// console.log(mergeSort([-10, 1, 3, 8, -13, 32, 9, 5]) == [-13, -10, 1, 3, 5, 8, 9, 32]) // [-13, -10, 1, 3, 5, 8, 9, 32]

// Prompt
// Given an array, reverse every sub-array formed by consecutive k elements.
// Function Signature

function reverse(arr, k) {
  if (arr.length === 0 || k > arr.length) return arr;
  let i = 0;
  let length = arr.length;
  while (i < length) {
    let left = i;
    let right = Math.min(i + k - 1, length - 1);
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;

    i += k;
  }
  return arr;
}

// console.log('expeccted: [], output: ', reverse([]));
// console.log('expeccted: [1,2], output: ', reverse([1, 2], 5));
//Input:
// arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// k = 3
// Output:
// [3, 2, 1, 6, 5, 4, 9, 8, 7]
//
// console.log(
// 'expected: [3, 2, 1, 6, 5, 4, 9, 8, 7], output: ',
// reverse([1, 2, 3, 4, 5, 6, 7, 8, 9], 3)
// );

console.log(
  'expected: [3, 2, 1, 6, 5, 4], output: ',
  reverse([1, 2, 3, 4, 5, 6], 3)
);

console.log('1, 2, 3, 4, k = 1 => 2, 3, 4, 1', reverse([1, 2, 3, 4], 1));
// Input:
// arr = [1, 2, 3, 4, 5, 6, 7, 8]
// k = 10
// Output:
// [8, 7, 6, 5, 4, 3, 2, 1]

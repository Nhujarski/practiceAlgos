// TODO min and max recusion

/* 

Prompt
Given an array, write 2 recursive functions to find the minimum and maximum element in an array. You may use the min(a,b) and max(a,b) functions to shorthand picking the minimum and maximum between 2 values.

Expected Runtime
Time: O(n) where n is the length of the array
Space: O(n) to store a call stack frame for each array index
*/

// Function Signature
function findMin(arr) {
  let result = arr.pop();
  if (arr.length > 0) {
    let next = findMin(arr);
    if (next < result) {
      result = next;
    }
  }
  return result;
}

function findMax(arr) {
  let result = arr.pop();
  if (arr.length > 0) {
    let next = findMax(arr);
    if (next > result) {
      result = next;
    }
  }
  return result;
}

console.table([
  findMin([12, 1234, 45, 67, 1]) === 1,
  findMin([10, 20, 30]) === 10,
  findMin([30, 20, 10]) === 10,
  findMin([20, 10, 30]) === 10,
  findMin([10, 20, 30, 10]) === 10,
  findMin([10, 10, 10, 10]) === 10,
  findMin([6]) === 6,
  findMin([8, 6, 7, 5, 3, 7]) === 3,
  findMin([-10, -5, -3, -30]) === -30,

  findMax([12, 1234, 45, 67, 1]) === 1234,
  findMax([10, 20, 30]) === 30,
  findMax([30, 20, 10]) === 30,
  findMax([20, 10, 30]) === 30,
  findMax([10, 20, 30, 10]) === 30,
  findMax([10, 10, 10, 10]) === 10,
  findMax([6]) === 6,
  findMax([8, 6, 7, 5, 3, 7]) === 8,
  findMax([-10, -5, -3, -30]) === -3,
]);

/*

Prompt
Given an array, write 2 recursive functions to find the index of the minimum and maximum element in an array. If there's a tie-breaker, return the first occurrence.

Expected Runtime
Time: O(n) where n is the length of the array
Space: O(n) to store a call stack frame for each array index
Examples
print(findMinIndex([12, 1234, 45, 67, 1]) == 4)
print(findMinIndex([10, 20, 30]) == 0)
print(findMinIndex([8, 6, 7, 5, 3, 7]) == 4)

print(findMaxIndex([12, 1234, 45, 67, 1]) == 1)
print(findMaxIndex([10, 20, 30]) == 2)
print(findMaxIndex([8, 6, 7, 5, 3, 7]) == 0)



*/

// Function Signature
function findMinIndex(arr) {
  if (arr.length == 1) return 0;

  let minIndex = findMinIndex(arr.slice(1)) + 1;

  if (arr[0] <= arr[minIndex]) return 0;

  return minIndex;
}

function findMaxIndex(arr) {
  if (arr.length === 1) {
    return 0;
  }

  let maxIndex = findMaxIndex(arr.slice(1)) + 1;

  if (arr[0] >= arr[maxIndex]) return 0;

  return maxIndex;
}

console.log(findMinIndex([12, 1234, 45, 67, 1]) == 4);
console.log(findMinIndex([10, 20, 30]) == 0);
console.log(findMinIndex([30, 20, 10]) == 2);
console.log(findMinIndex([20, 10, 30]) == 1);
console.log(findMinIndex([10, 20, 30, 10]) == 0);
console.log(findMinIndex([10, 10, 10, 10]) == 0);
console.log(findMinIndex([11]) == 0);
console.log(findMinIndex([8, 6, 7, 5, 3, 7]) == 4);
console.log(findMinIndex([-10, -5, -3, -30]) == 3);
console.log(findMinIndex([15, 11]) == 1);
console.log(findMinIndex([15, 11, 12, 13, 14]) == 1);
console.log(findMinIndex([15, 17, 16, 12, 13, 14]) == 3);

console.log(findMaxIndex([12, 1234, 45, 67, 1]) == 1);
console.log(findMaxIndex([10, 20, 30]) == 2);
console.log(findMaxIndex([30, 20, 10]) == 0);
console.log(findMaxIndex([20, 10, 30]) == 2);
console.log(findMaxIndex([10, 20, 30, 10]) == 2);
console.log(findMaxIndex([10, 10, 10, 10]) == 0);
console.log(findMaxIndex([11]) == 0);
console.log(findMaxIndex([8, 6, 7, 5, 3, 7]) == 0);
console.log(findMaxIndex([-10, -5, -3, -30]) == 2);
console.log(findMaxIndex([15, 11]) == 0);
console.log(findMaxIndex([15, 11, 12, 13, 14]) == 0);
console.log(findMaxIndex([15, 17, 16, 12, 13, 14]) == 1);

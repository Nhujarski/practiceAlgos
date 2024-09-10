// TODO find left peaks

/*
Prompt
Given an array of integers, return a sub-array of 'Left Peaks'. A Left Peak is defined as an element that is greater or equal in value to all elements to its right.


Expected Runtime
Time: O(N) to iterate through the length N array
Space: O(N) to store up to N elements

Examples
find_left_peaks([1, 2, 5, 3, 1, 2]) => [5, 3, 2]
find_left_peaks([3, 2, 1]) => [3, 2, 1]

*/

// Function Signature
function find_left_peaks(arr) {
  let stack = [];
  if (arr.length === 0) return stack;

  for (let i = 0; i < arr.length; i++) {
    while (stack && stack[stack.length - 1] < arr[i]) {
      stack.pop();
    }

    stack.push(arr[i]);
  }
  console.log(stack);
  return stack;
}

console.log(find_left_peaks([]) == []);
console.log(find_left_peaks([1, 2, 5, 3, 1, 2]) == [5, 3, 2]); //[5, 3, 2]
console.log(find_left_peaks([3, 2, 1]) == [3, 2, 1]);
console.log(find_left_peaks([1, 2, 3]) == [3]);
console.log(find_left_peaks([10, 4, 6, 3, 5]) == [10, 6, 5]);
console.log(
  find_left_peaks([1, 2, 3, 5, 5, 5, 4, 5, 3, 2, 1]) == [5, 5, 5, 5, 3, 2, 1]
);
console.log(
  find_left_peaks([1, 2, 3, 5, 5, 5, 4, 6, 5, 3, 2, 1]) == [6, 5, 3, 2, 1]
);
console.log(find_left_peaks([5, 5, 5, 5, 5]) == [5, 5, 5, 5, 5]);

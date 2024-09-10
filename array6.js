// TODO look at array 6 solution

// Prompt
// Given an array of ints, compute recursively the number of times that the value 6 appears in the array. We'll use the convention of considering only the part of the array that begins at the given index. In this way, a recursive call can pass index+1 to move down the array. The initial call will pass in index as 0.

// Function Signature
function array6(nums, index) {
  if (index >= nums.length) return 0;

  const foundSix = nums[index] == 6 ? 1 : 0;
  return foundSix + array6(nums, index + 1);
}

console.table([
  array6([1, 2, 6], 0) == 1,
  array6([6, 6], 0) == 2,
  array6([1, 2, 3, 4], 0) == 0,
  array6([1, 6, 3, 6, 6], 0) == 3,
  array6([6], 0) == 1,
  array6([1], 0) == 0,
  array6([], 0) == 0,
  array6([6, 2, 3, 4, 6, 5], 0) == 2,
  array6([6, 5, 6], 0) == 2,
]);

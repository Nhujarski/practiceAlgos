// You have a set of integers s, which originally contains all the numbers from 1 to n. Unfortunately, due to some error, one of the numbers in s got duplicated to another number in the set, which results in repetition of one number and loss of another number.

// You are given an integer array nums representing the data status of this set after the error.

// Find the missing number and return it.

// Example 1:
// Input: nums = [1,2,2,4]
// Output: 3

// Example 2:
// Input: nums = [1,1]
// Output: 2

function solution(nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      return nums[i] + 1;
    }
  }
}

// failing [1, 2, 3, 4, 6, 6] & [2, 3, 3]
// should Output 5 // [1,2,3,4,5,6]

console.log(solution([1, 2, 2, 4]), '==', 3);
console.log(solution([1, 1]), '== 2');

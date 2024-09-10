/* 
Given an array of distinct integers nums and a target integer target, return the number of possible combinations that add up to target.

The test cases are generated so that the answer can fit in a 32-bit integer.

Input: nums = [1,2,3], target = 4
Output: 7
Explanation:
The possible combination ways are:
(1, 1, 1, 1)
(1, 1, 2)
(1, 2, 1)
(1, 3)
(2, 1, 1)
(2, 2)
(3, 1)
Note that different sequences are counted as different combinations.

*/

var combinationSum4 = function (nums, target) {
  if (!nums) {
    return 0;
  }
  let dp = [1];
  for (let i = 1; i <= target; i++) {
    let temp = 0;
    for (let j = 0; j < nums.length; j++) {
      let num = nums[j];
      if (i - num === 0) {
        temp++;
      } else if (i - num > 0) {
        temp += dp[i - num];
      }
    }
    dp[i] = temp;
  }
  return dp[target];
};

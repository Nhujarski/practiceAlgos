/* 
Given an integer array nums of unique elements, return all possible subsets (the power set).

The solution set must not contain duplicate subsets. Return the solution in any order.
*/

function subsets(nums) {
  const res = [];
  const track = [];

  const backtrack = (nums, start) => {
    res.push(track.slice());
    for (let i = start; i < nums.length; i++) {
      track.push(nums[i]);
      backtrack(nums, i + 1);
      track.pop();
    }
  };

  backtrack(nums, 0);
  return res;
}
console.log(subsets([1, 2, 3]));

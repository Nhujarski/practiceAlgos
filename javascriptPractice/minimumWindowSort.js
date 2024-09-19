// TODO review advanced array concept
/*
'''
❓ PROMPT
Given an array, find the length of the smallest subarray in it which, when sorted, will sort the whole array.

Example(s)
Input: [1, 2, 5, 3, 7, 10, 9, 12]
Output: 5
Explanation: We need to sort only the subarray [5, 3, 7, 10, 9] to make the whole array sorted.

Input: [1, 3, 2, 0, -1, 7, 10]
Output: 5
Explanation: We need to sort only the subarray [1, 3, 2, 0, -1] to make the whole array sorted.
 

🔎 EXPLORE
List your assumptions & discoveries:
 

Insightful & revealing test cases:
 

🧠 BRAINSTORM
What approaches could work?
Algorithm 1:
Time: O()
Space: O()
 

📆 PLAN
Outline of algorithm #: 
 

🛠️ IMPLEMENT
function shortestWindowSort(arr) {
def shortestWindowSort(arr: list[int]) -> int:
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/

function shortestWindowSort(nums) {
  let max = -Infinity;
  let end = -1;

  for (let i = 0; i < nums.length; i++) {
    max = Math.max(max, nums[i]);
    if (nums[i] < max) {
      end = i;
    }
  }

  let start = 0;
  let min = Infinity;

  for (let i = nums.length - 1; i >= 0; i--) {
    min = Math.min(min, nums[i]);
    if (nums[i] > min) {
      start = i;
    }
  }
  console.log(nums.slice(start, end + 1));
  return end - start + 1;
}

console.log(shortestWindowSort([1, 2, 5, 3, 7, 10, 9, 12]) == 5);
console.log(shortestWindowSort([1, 3, 2, 0, -1, 7, 10]) == 5);
console.log(shortestWindowSort([1, 2, 3]) == 0);
console.log(shortestWindowSort([3, 2, 1]) == 3);

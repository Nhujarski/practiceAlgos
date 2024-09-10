/*
'''
❓ PROMPT
Given an array, find the length of the smallest subarray in it which, when sorted, will sort the whole array.

Example(s)
      |        
                 |
Input: [1, 2, 5, 3, 7, 10, 9, 12]
Output: 5
Explanation: We need to sort only the subarray [5, 3, 7, 10, 9] to make the whole array sorted.

        
Input: [1, 3, 2, 0, -1, 7, 10]
Output: 5
Explanation: We need to sort only the subarray [1, 3, 2, 0, -1] to make the whole array sorted.
 

🔎 EXPLORE
State your assumptions & discoveries:
 

Create examples & test cases:
 

🧠 BRAINSTORM
What approaches could work? Consider data structures or algorithmic patterns.
Analyze the space & time complexity.
Approach 1:
Time: O()
Space: O()
 

📆 PLAN
High-level outline of approach #: 
 

🛠️ IMPLEMENT
Find the first element out of sorted order from the left and from the right. These two elements will be the bounds of the candidate subarray that needs to be sorted. However, this candidate subarray will only be valid if (i) there are no elements left of the subarray which are larger than the minimum of the subarray, and (ii) there are no elements of the subarray which are smaller than the maximum of the subarray. If either of these conditions is false, extend the array left or right to ensure that those elements fall within the final subarray to be sorted.
 

🧪 VERIFY
Run your examples & test cases.
Methodically analyze and debug issue(s).

'''

** Approach:
use 2 pointer sliding window approach
find the first value thats lower than the prev.

*/

/*
Example(s)
        l
                    e
              s          
Input: [1, 2, 5, 3, 7, 10, 9, 11, 12]
                    +
        - 
Output: 5
Explanation: We need to sort only the subarray [5, 3, 7, 10, 9] to make the whole array sorted.
if the the thing at arr[min - 1] is grteater than the thing at arr[min] move start to min - 1
if arr[max + 1] is greater than arr[max] move end to max + 1;
*/

// function shortestWindowSort(arr) {
//   const middle = Math.floor(arr.length / 2)
//   let left = middle
//   let right = middle
//   let min = middle
//   let max = middle
//   let startUnsorted = middle
//   let endUnsorted = middle
//   while (left > -1){
//     if (arr[left] < arr[min]){
//       min = left
//     }
//     else {
//       startUnsorted = left
//     }
//   }

//   while (){

//   }
//   return end - start + 1
// }

function shortestWindowSort(nums) {
  const sortedArray = [...nums];

  sortedArray.sort((a, b) => a - b);

  let start = 0;
  let end = nums.length - 1;

  while (
    (sortedArray[start] === nums[start] || sortedArray[end] === nums[end]) &&
    start <= end
  ) {
    if (sortedArray[start] === nums[start]) start++;
    if (sortedArray[end] === nums[end]) end--;
  }

  // nums is an ascending array at beginning
  if (start > end) return 0;

  return end - start + 1;
}

function shortestWindowSort(nums) {
  if (nums.length < 2) return 0;
  let clone = nums.map((a, i) => ({ a, i }));
  clone.sort((a, b) => a.a - b.a);
  let result = 0,
    i = 0,
    j = nums.length - 1;
  while (i < nums.length && clone[i].i == i++);
  while (j > -1 && clone[j].i == j--);
  return Math.max(0, j - i + 3);
}

console.table([
  shortestWindowSort([1, 2, 5, 3, 7, 10, 9, 12]) == 5,
  shortestWindowSort([1, 3, 2, 0, -1, 7, 10]) == 5,
  shortestWindowSort([1, 2, 3]) == 0,
  shortestWindowSort([3, 2, 1]) == 3,
]);

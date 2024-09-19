/*
'''
Given an array of integers and an integer k, you need to find the total number of continuous subarrays whose sum equals to k.  

Write-up: https://leetcode.com/problems/subarray-sum-equals-k/
 

EXAMPLE(S)
countSubarraySum([1, 2, 3], 3) == 2 because (1,2), (3)
 

FUNCTION SIGNATURE
func numSubarrays(input: [Int], target: Int) -> Int
'''
*/

// FUNCTION SIGNATURE
function numSubarrays(input, target) {
  //[9] K = 2
  //1 1 1  k =2
  let count = 0;
  if (!input || input.length < 1) {
    return count;
  }

  let left = 0;
  let right = 1;
  let rSum = input[left];

  while (right < input.length) {
    if (rSum === target) {
      count += 1;
      left = right;
      if (left === input.length - 1) {
        break;
      }
      right = left + 1;
      rSum = input[left];
    }
    if (input[left] == target || input[right] == target) {
      left = right + 1;
      right = left + 1;
      count += 1;
    }

    if (left == right) {
      right++;
    }
    // console.log("left:" ,input[left], " right: ",input[right], "rSum: ",rSum);
    rSum += input[right];
    right++;
  }
  return count;
}
/*
  We can solve this problem using a dictionary to record the cumulative sum at each element and map it to the number of times that sum has been seen. If we ever find a non-nil entry for the key at cumulative sum - k, we know for sure that some subarray must have summed to k, and the value at that key will tell us the number of subarrays that have summed to k at that point. Note that the number of subarrays that sum to k at particular key may be greater than 1 if some elements of the subarray are negative. We initialize the dictionary with a mapping of [0: 1] for the case where the first element of the array is exactly equal to k, in which case we want to return 1 for the key currSum - k = 0.
  
  */

function countSubarraySum(nums, k) {
  let currSum = 0;
  const seenSums = { 0: 1 };
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    currSum += nums[i];
    count += seenSums[currSum - k] || 0;
    console.log(currSum - k, ' ', { seenSums });
    seenSums[currSum] = (seenSums[currSum] || 0) + 1;
  }
  console.log({ seenSums }, { count });
  return count;
}

/*
    {
      0 : 2
    -1 : 1
    1: 1
    }
    count  =1
    */
console.log(countSubarraySum([1, 1, 1], 2) == 2); // (1,1), (1, 1)
console.log(countSubarraySum([1, 2, 3, -1, 4], 3) == 3); // (1,2), (3), (-1, 4)

/*
  [] => 0 
  
  
  ([1, 1, 1], 2
  
    l = 0 r = 0
    arr[l] = rSum
  
    l = 0 r = 1
    rSum+= r
    2
    l=r
    r=l+1
    rSum = arr[r]+arr[l]
  
  */

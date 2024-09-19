// An array is monotonic if it is either monotone increasing or monotone decreasing.

// An array nums is monotone increasing if for all i <= j, nums[i] <= nums[j]. An array nums is monotone decreasing if for all i <= j, nums[i] >= nums[j].

// Given an integer array nums, return true if the given array is monotonic, or false otherwise.

const isMonotonic = (nums) => {
  let dec = true;
  let inc = true;

  for (let i = 1; i < nums.length; i++) {
    dec = dec && nums[i - 1] >= nums[i];
    if (dec === true && nums[i - 1] >= nums[i] === true) {
      dec = true;
    } else if (inc === true && nums[i - 1] <= nums[i] === true) {
      inc = true;
    } else {
      inc = false;
      dec = false;
    }

    // console.log('dec >>> ', dec)
    // console.log('inc >>> ', inc)
  }

  return dec || inc;
};

// Input: nums = [1,2,2,3]
// Output: true
console.log(isMonotonic([1, 2, 2, 3]) == true);

// Input: nums = [6,5,4,4]
// Output: true
console.log(isMonotonic([6, 5, 4, 4]) == true);

// Input: nums = [1,3,2]
// Output: false
console.log(isMonotonic([1, 3, 2]) == false);

// 1 => true
console.log(isMonotonic([1]) == true);

// TODO rotate array k times

function rotateLeft(nums, k) {
  k = k % nums.length;
  nums.reverse();
  reverseSubarray(nums, 0, nums.length - k);
  reverseSubarray(nums, nums.length - k, nums.length);
  return nums;
}

function reverseSubarray(nums, start, end) {
  const mid = Math.floor((end - start) / 2);
  for (let i = 0; i < mid; i++) {
    const a = start + i;
    const b = end - 1 - i;
    const temp = nums[a];
    nums[a] = nums[b];
    nums[b] = temp;
  }
}
// our solution
// function rotate(array, k){
//   let stack = []

//   let newAArr = array.slice(0, k)
//   for( let i = k; i < array.length; i++ ) {
//     stack.push(array[i])

//   }
//   for( let j = newAArr.length - 1; j >= 0; j--) {
//     stack.push(newAArr[j])
//   }
//   return stack
// }

console.log('1, 2, 3, 4, k = 1 => 2, 3, 4, 1', rotateLeft([1, 2, 3, 4], 1));

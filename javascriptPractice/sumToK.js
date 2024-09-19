// Now we're going to apply two different patterns to the same problem and see how the code looks and how it affects the runtime.
// The task here is to determine if an array contains a pair that adds up to a value, k. The array is sorted ahead of time.
// Just like many problems in computer science and software engineering, there are multiple ways to solve the problem, but they often have different time or space complexity, or there are other tradeoffs.
// Learning to recognize these decision points is an important step in becoming a strong software engineer.

function sumToK(arr, k) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === k) {
        return true;
      }
    }
  }
  return false;
}

function sumToK_twoPointer(array, k) {
  let i = 0;
  let j = array.length - 1;

  while (i < j) {
    const sum = array[i] + array[j];
    if (sum === k) {
      return true;
    } else if (sum > k) {
      j--;
    } else if (sum < k) {
      i++;
    }
  }

  return false;
}
console.log('expected true >> ', sumToK([1, 5, 8, 10, 13, 18], 15) === true);
console.log(sumToK_twoPointer([1, 5, 8, 10, 13, 18], 15) === true);

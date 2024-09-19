/*
Prompt
Let's practice recursion by converting functions to and from recursive implementations. Copy the started code in the language of your choice below, then implement the missing functions and test!
While reading the recursive implementation of recursiveFactorial as well as writing recursiveMax, consider the following:
What is my base case?
Which arguments do I need?
What do I do at each recursive step?
Spend no more than 20 minutes on the two functions.
*/

function recursiveFactorial(x) {
  if (x <= 1) return 1;
  else return x * recursiveFactorial(x - 1);
}

function iterativeFactorial(x) {
  // TODO: implement
  let fac = 1;
  for (let i = x; i > 0; i--) {
    fac = fac * i;
  }
  return fac;
}

function iterativeMax(arr) {
  let result = arr.length > 0 ? arr[0] : null;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > result) result = arr[i];
  }

  return result;
}

function recursiveMax(arr, curMax = null, i = 0) {
  // TODO: implement
  // curMax is an argument that defaults to null if not specified when calling recursiveMax()
  // i is an argument that defaults to 0 if not specified when calling recursiveMax()
  // return null if array is empty
  if (i < arr.length) {
    return recursiveMax(arr, Math.max(curMax, arr[i]), i + 1);
  }
  return curMax;
}

// console.log(iterativeFactorial(3) === 6)
console.table([
  iterativeFactorial(0) === 1,
  iterativeFactorial(1) === 1,
  iterativeFactorial(3) === 6,
  iterativeFactorial(4) === 24,
  iterativeFactorial(10) === 3628800,

  recursiveMax([4, 2, 7]) === 7,
  recursiveMax([1, -5, 0]) === 1,
  recursiveMax([1, 2, 7]) === 7,
  recursiveMax([1, 0, -5]) === 1,
]);

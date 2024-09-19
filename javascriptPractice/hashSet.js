// Prompt
// Given an array and a target count X, return true if there are fewer than X distinct values in the array. For example, given [1, 2, 2, 3, 3], 4 return true because there are only 3 distinct values 1, 2 and 3.

function fewerThanTargetDistinct(input, target) {
  let hash = {};
  let count = 0;
  for (let i = 0; i < input.length; i++) {
    let key = input[i];

    if (key in hash) {
      hash[key] += 1;
    } else {
      hash[key] = 1;
      count++;
    }
  }
  return count < target ? true : false;
}

console.log(
  'expected: false, ouput: ',
  fewerThanTargetDistinct([1, 2, 2, 3, 3], 3)
);
console.log(
  'expected true, output: ',
  fewerThanTargetDistinct([1, 2, 2, 3, 3], 4)
);

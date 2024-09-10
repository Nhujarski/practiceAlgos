// Prompt
// Given two arrays of equal length, return an array summing them together with the second array being traversed in reverse.
// Function Signature

function sumInReverse(arr1, arr2) {
  if (arr1 == [] && arr2 == []) return [];
  let solution = [];

  for (let i = 0; i < arr1.length; i++) {
    for (let j = arr2.length - 1; j >= 0; j--) {
      solution.push(arr1[i] + arr2[j]);
      i++;
    }
  }
  return solution;
}

console.log(JSON.stringify(sumInReverse([], [])) === JSON.stringify([]));
console.log(JSON.stringify(sumInReverse([5], [7])) === JSON.stringify([12]));
console.log(
  JSON.stringify(sumInReverse([1, 2, 3], [10, 20, 30])) ===
    JSON.stringify([31, 22, 13])
);
console.log(
  JSON.stringify(sumInReverse([1, 2, 3, 4], [40, 30, 20, 10])) ===
    JSON.stringify([11, 22, 33, 44])
);

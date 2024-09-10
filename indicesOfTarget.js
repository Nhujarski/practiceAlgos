// Prompt
// Given an array and a target value X, return an array of all indices containing value X.

function indicesOfTarget(input, target) {
  let idxArr = [];
  if (input === []) return [];
  if (input.length === 1 && input[0] !== target) return [];
  for (let i = 0; i < input.length; i++) {
    if (input[i] === target) {
      idxArr.push(i);
    }
  }
  return idxArr;
}

console.log('should be [] >>', indicesOfTarget([], 1));
console.log('should be [0] >>', indicesOfTarget([5], 5));
console.log('should be [] >>', indicesOfTarget([5], 1));
console.log('should be [0] >>', indicesOfTarget([1], 1));
console.log('should be [] >>', indicesOfTarget([10, 20, 30], 1));
console.log('should be [1] >>', indicesOfTarget([10, 20, 30], 20));
console.log('should be [0,1,2] >>', indicesOfTarget([30, 30, 30], 30));
console.log('should be[2,3] >>', indicesOfTarget([3, 2, 5, 5, 1], 5));

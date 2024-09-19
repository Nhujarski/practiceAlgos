/* 
Prompt
Given a target integer X, iterate from X to 1 and return a matrix sequence where each array starts with the current iteration and goes down to 1. Each iteration should decrement the array size and values until it reaches 1.
[
[X, ..., 5, 4, 3, 2, 1],
...
...
...
[5, 4, 3, 2, 1],
[4, 3, 2, 1],
[3, 2, 1],
[2, 1],
[1]
]

*/

// Function Signature
function generateSequence(target) {
  if (target === 0) return [];
  let matrix = [];

  for (let i = target; i > 0; i--) {
    let arr = [];
    for (let j = i; j > 0; j--) {
      arr.push(j);
    }

    matrix.push(arr);
  }
  return matrix;
}

console.log(generateSequence(0)); // []
console.log(generateSequence(1)); // [[1]]
console.log(generateSequence(2)); //[[2,1], [1]]
console.log(generateSequence(3)); //[[3,2,1], [2,1], [1]]
console.log(generateSequence(4)); //[[4,3,2,1], [3,2,1], [2,1], [1]]

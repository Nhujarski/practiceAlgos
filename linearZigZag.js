/*
Details
In this task, we will practice working through a arrays problem.
Prompt
Given a two dimensional array, output a new one dimensional array with the elements of the input in zig zag order. This means that the first row will be in the output from first to last, but the second row will be the reverse, last to first, then the third is back to normal order again, each row the opposite order of the ones before and after.

Expected Runtime
O(n) both time and space, n is the total number of elements in the matrix
Examples
const matrix = [
  [1, 2, 3],
  [4, 5, 6]
];

console.log(JSON.stringify(linearizeZigZag(matrix)) 
=== JSON.stringify([1,2,3,6,5,4]))
 */

// Function Signature
function linearizeZigZag(matrix) {
  let answer = [];
  for (let i = 0; i < matrix.length; i++) {
    if (i % 2 === 0) {
      for (let j = 0; j < matrix[i].length; j++) {
        answer.push(matrix[i][j]);
      }
    } else {
      for (let j = matrix[i].length - 1; j >= 0; j--) {
        answer.push(matrix[i][j]);
      }
    }
  }
  return answer;
}

let matrix = [[]];
console.log(JSON.stringify(linearizeZigZag(matrix)) === JSON.stringify([]));

matrix = [[1]];
console.log(JSON.stringify(linearizeZigZag(matrix)) === JSON.stringify([1]));

matrix = [[1, 2, 3]];
console.log(
  JSON.stringify(linearizeZigZag(matrix)) === JSON.stringify([1, 2, 3])
);

matrix = [[1], [4], [7]];
console.log(
  JSON.stringify(linearizeZigZag(matrix)) === JSON.stringify([1, 4, 7])
);

matrix = [
  [1, 2, 3],
  [4, 5, 6],
];
console.log(
  JSON.stringify(linearizeZigZag(matrix)) === JSON.stringify([1, 2, 3, 6, 5, 4])
);

matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(
  JSON.stringify(linearizeZigZag(matrix)) ===
    JSON.stringify([1, 2, 3, 6, 5, 4, 7, 8, 9])
);

// Prompt
// Given a square matrix mat, return the sum of the matrix diagonals.
// Only include the sum of all the elements on the primary diagonal and all the elements on the secondary diagonal that are not part of the primary diagonal.
// Function Signature

function diagonalSum(matrix) {
  let total = 0;

  for (let i = 0; i < matrix.length; i++) {
    if (i === matrix.length - 1 - i) {
      total += matrix[i][i];
    } else {
      total += matrix[i][i];
      total += matrix[i][matrix.length - 1 - i];
    }
  }

  return total;
}

let mat = [
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 1],
];

let mat2 = [];
let mat3 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log('Output: 8', diagonalSum(mat));
console.log('Output: 0', diagonalSum(mat2));
console.log('Output: 25', diagonalSum(mat3));

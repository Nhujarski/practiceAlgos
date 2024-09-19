/* 
Given a 2D integer array matrix, return the transpose of matrix.

The transpose of a matrix is the matrix flipped over its main diagonal, switching the matrix's row and column indices.



 

Example 1:

Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [[1,4,7],[2,5,8],[3,6,9]]
Example 2:

Input: matrix = [[1,2,3],[4,5,6]]
Output: [[1,4],[2,5],[3,6]]

*/

function transpose(matrix) {
  const transposed = [];

  /* Create idx for current column */
  let column = 0;

  /* Get length of each subarray in matrix */
  let length = matrix[0].length;

  /* Create a variable to hold each new row */
  let newRow = [];

  /* While current column (idx) is less than # of elems in each subarray; push matrix[i][column] */
  while (column < length) {
    for (let i = 0; i < matrix.length; i++) {
      newRow.push(matrix[i][column]);
    }

    transposed.push(newRow);
    newRow = [];
    column++;
  }

  return transposed;
}

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(transpose(matrix)); // expected [[1,4,7],[2,5,8],[3,6,9]]

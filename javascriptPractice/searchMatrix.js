/* 
You are given an m x n integer matrix matrix with the following two properties:

Each row is sorted in non-decreasing order.
The first integer of each row is greater than the last integer of the previous row.
Given an integer target, return true if target is in matrix or false otherwise.
*/

// O(r + c) where r is the number of rows and c is the number of columns
function searchMatrix(matrix, target) {
  const rows = matrix.length;
  const columns = matrix[0].length;

  let r = 0,
    c = columns - 1;
  while (r < rows && c >= 0) {
    const val = matrix[r][c];
    if (val === target) return true;
    if (val < target) {
      r++;
    } else {
      c--;
    }
  }
  return false;
}

//MINE
const searchMatrix = function (matrix, target) {
  for (let i = 0; i < matrix.length; i++) {
    if (matrix[i].includes(target)) return true;
  }
  return false;
};

var searchMatrix = function (matrix, target) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === target) return true;
    }
  }
  return false;
};

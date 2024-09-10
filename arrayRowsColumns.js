/* 
In this task, we will practice working through a multidimensional arrays problem.
Prompt
This exercise is great for building a solid understanding of working with complex data structures.
Write functions that take a multidimensional array as input and then output a single dimensional array. Start with the elements in increasing row major order, meaning the first row from beginning to end, then the second row, etc. Then move on to column major, which is the first column from beginning to end and then the second, etc.
You can use this template to get started:

*/

function linearizeRowMajor(matrix) {
  let result = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      result.push(matrix[i][j]);
    }
  }

  return result;
}

function linearizeColumnMajor(matrix) {
  const result = [];
  for (let c = 0; c < matrix[0].length; c++) {
    for (let r = 0; r < matrix.length; r++) {
      result.push(matrix[r][c]);
    }
  }

  return result;
}

let matrix = [[]];
console.log(JSON.stringify(linearizeRowMajor(matrix)) === JSON.stringify([]));
console.log(
  JSON.stringify(linearizeColumnMajor(matrix)) === JSON.stringify([])
);

matrix = [[1]];
console.log(JSON.stringify(linearizeRowMajor(matrix)) === JSON.stringify([1]));
console.log(
  JSON.stringify(linearizeColumnMajor(matrix)) === JSON.stringify([1])
);

matrix = [[1, 2, 3]];
console.log(
  JSON.stringify(linearizeRowMajor(matrix)) === JSON.stringify([1, 2, 3])
);
console.log(
  JSON.stringify(linearizeColumnMajor(matrix)) === JSON.stringify([1, 2, 3])
);

matrix = [[1], [4], [7]];
console.log(
  JSON.stringify(linearizeRowMajor(matrix)) === JSON.stringify([1, 4, 7])
);
console.log(
  JSON.stringify(linearizeColumnMajor(matrix)) === JSON.stringify([1, 4, 7])
);
matrix = [
  [1, 2, 3],
  [4, 5, 6],
];
console.log(
  JSON.stringify(linearizeRowMajor(matrix)) ===
    JSON.stringify([1, 2, 3, 4, 5, 6])
);
console.log(
  JSON.stringify(linearizeColumnMajor(matrix)) ===
    JSON.stringify([1, 4, 2, 5, 3, 6])
);

matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(
  JSON.stringify(linearizeRowMajor(matrix)) ===
    JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8, 9])
);
console.log(
  JSON.stringify(linearizeColumnMajor(matrix)) ===
    JSON.stringify([1, 4, 7, 2, 5, 8, 3, 6, 9])
);

matrix = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
];
console.log(
  JSON.stringify(linearizeRowMajor(matrix)) ===
    JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15])
);
console.log(
  JSON.stringify(linearizeColumnMajor(matrix)) ===
    JSON.stringify([1, 6, 11, 2, 7, 12, 3, 8, 13, 4, 9, 14, 5, 10, 15])
);

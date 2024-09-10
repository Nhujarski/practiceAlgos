/* 
Details
In this task, we will practice working through a 2d array problem.
Prompt
In this task, we're going to apply basic 2-dimensional matrix traversals to solve some simple problems. While working on these, look out for other patterns you may have seen previously. Each of these takes the row- and column-major traversals and composites them with simpler ideas you have almost certainly encountered in one-dimensional problems.
This task is two similar problems in one:
First, write a function that returns the average of the smallest values in each column.

Write a new version of this function that returns the average of the smallest value in each row.

Remember that since we represent a matrix as nested arrays (an array of arrays), many problems on a matrix can be broken down into two array patterns. This makes them easier to reason about and code.
Function Signature
function averageColumnMinimum(matrix)
function averageRowMinimum(matrix)
Expected Runtime
O(n), where n is the total number of element in the 2D array (matrix)

Examples
matrix = [
  [32, 23, 3],
  [23,  7, 5]];
console.log(averageColumnMinimum(matrix) === 11) // average(23, 7, 3) = 11
console.log(averageRowMinimum(matrix) === 4) // average(5, 3) = 4

// Approach*
have a sum
loop over columns and find smaller value
add that to sum
return sum / matrix[0].length

Approach
The key to both of these is to choose the correct traversal strategy and then adapt them to solve the problem at hand. There is a different problem to be solved at each level, row and column. The inner level requires finding a minimum. The outer level sums the minimums in order to produce an average by dividing at the end.
In the solution to averageColumnMinimum() there are comments that call out these subproblems explicitly.
*/

// function averageColumnMinimum(matrix){
//   let sum = 0;
//   for ( let c = 0; c < matrix[0].length; c++) {
//     for(let r = 0; r < matrix.length; r++) {
//       if(matrix[r + 1][c]) {
//         console.log(matrix[r][c + 1])
//           sum += matrix[r][c]
//       } else {
//         // sum += matrix[r + 1][c]
//       }
//     }
//   }
//   console.log({sum})
// }

// function averageColumnMinimum(matrix) {
//   if (matrix.length === 0 || matrix[0].length === 0)
//     return 0;

//   // Initialize a variable to sum the column minimums.
//   // This is an accumulator pattern.
//   let total = 0;

//   // Iterate through each column
//   for (let c = 0; c < matrix[0].length; c++) {

//     // Find the minimum in this column.
//     // This is a "find the best answer" pattern.
//     let min = Infinity;
//     for (let r = 0; r < matrix.length; r++) {
//       // choose the smaller of the two options
//       min = Math.min(min, matrix[r][c]);
//     }

//     total += min; // accumulate the new minimum into our total
//   }

//   return total / matrix[0].length;
// }

function averageRowMinimum(matrix) {
  if (matrix.length === 0 || matrix[0].length === 0) return 0;

  let sum = 0;

  for (let r = 0; r < matrix.length; r++) {
    let min = Infinity;
    for (let c = 0; c < matrix[r].length; c++) {
      min = Math.min(min, matrix[r][c]);
    }
    sum += min;
  }
  return sum / matrix.length;
}

//col 1 = 23 , col 2 = 7, col 3  // smallest value in col - get average
//row 1 = 3 , row 2 = 5 // smallest value in rows - get average
let matrix = [
  [32, 23, 3],
  [23, 7, 5],
];

// console.log(averageColumnMinimum(matrix) === 11) // average(23, 7, 3) = 11
console.log(averageRowMinimum(matrix)); // average(5, 3) = 4

matrix = [[]];
// console.log(averageColumnMinimum(matrix) === 0)
console.log(averageRowMinimum(matrix) === 0);

matrix = [[5]];
// console.log(averageColumnMinimum(matrix) === 5)
console.log(averageRowMinimum(matrix) === 5);

matrix = [[1, 2, 3]];
// console.log(averageColumnMinimum(matrix) === 2)
console.log(averageRowMinimum(matrix) === 1);

matrix = [[1], [4], [7]];
// console.log(averageColumnMinimum(matrix) === 1)
console.log(averageRowMinimum(matrix) === 4);

matrix = [
  [5, 5, 5],
  [5, 5, 5],
];
// console.log(averageColumnMinimum(matrix) === 5)
console.log(averageRowMinimum(matrix) === 5);

matrix = [
  [32, 23, 3],
  [23, 7, 5],
];
// console.log(averageColumnMinimum(matrix) === 11) // average(23, 7, 3) = 11
console.log(averageRowMinimum(matrix) === 4); // average(5, 3) = 4

/* 
  Prompt
  Given a two dimensional array, output a new one dimensional array with the elements of the input in zig zag order. This means that the first row will be in the output from first to last, but the second row will be the reverse, last to first, then the third is back to normal order again, each row the opposite order of the ones before and after.
  */

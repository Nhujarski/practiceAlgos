//TODO look at this matrix problem and understand it.

/* 
Given a m x n matrix mat and an integer k, return a matrix answer where each answer[i][j] is the sum of all elements mat[r][c] for:

i - k <= r <= i + k,
j - k <= c <= j + k, and
(r, c) is a valid position in the matrix.

That is, for each element calculate the sum of all elements K distance away from this index in a square. Set that value in your answer matrix in the corresponding position.

Notice that for any k, the size of the area to be summed is a square of size 2k + 1 on each side. All of the positions in that area are distance k away from the center.
*/

function matrixSum(mat, k) {
  const m = mat.length;
  const n = mat[0].length;
  const answer = new Array(m);

  for (let i = 0; i < m; i++) {
    answer[i] = new Array(n).fill(0);
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      for (let r = Math.max(i - k, 0); r <= Math.min(i + k, m - 1); r++) {
        for (let c = Math.max(j - k, 0); c <= Math.min(j + k, n - 1); c++) {
          answer[i][j] += mat[r][c];
        }
      }
    }
  }

  return answer;
}

// The function first initializes a matrix answer with the same dimensions as mat and fills it with zeroes.
// Then it iterates over each element of mat and computes the sum of all elements mat[r][c] that are k distance away from that element in a square.
// The Math.max() and Math.min() functions are used to ensure that the indices r and c stay within the bounds of the matrix.
//  Finally, the function returns the answer matrix.

// TODO understand pascals triangle.
/* 
Given an integer numRows, return the first numRows of Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:
*/
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  var result = new Array(numRows);
  for (var i = 0; i < numRows; i++) {
    result[i] = [];
    for (var j = 0; j <= i; j++) {
      result[i].push(triangle(i, j));
    }
  }
  function triangle(m, n) {
    if (n === 0) {
      return 1;
    } else if (m == n) {
      return 1;
    } else {
      return ((m + 1 - n) / n) * arguments.callee(m, n - 1);
    } //	Equivalent to: else { return ((m+1-n)/n)*triangle(m, n-1); }
  }
  return result;
};
/* 
var generate = function(numRows) {
    let result = [];
    let array = [];
    if(numRows >= 1){
        result.push([1]);
    }
    for(let i = 2; i <= numRows; i++){
        array[0] = 1;
        for(let j = 1; j < i; j++){
            array[j] = result[i - 2][j - 1] + (result[i - 2][j] || 0);   
        }
        result.push(array);
        array = [];
    }
    console.log('nth row>>>',result[numRows-1])
    return result;
};
*/

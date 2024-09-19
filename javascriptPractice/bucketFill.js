/*

Given a 2D array represenging a black and white canvas, and a pixel location (x, y), 
implement "bucket fill" starting at position (x, y).
e.g.
Input canvas:
 [[0, 0, 0, 1],
  [0, 0, 1, 0],
  [0, 1, 0, 0],
  [1, 0, 0, 0]]

If (x, y) = (2,2), then the final canvas will be
 [[0, 0, 0, 1],
  [0, 0, 1, 1],
  [0, 1, 1, 1],
  [1, 1, 1, 1]]
 
x = 2, y = 2
     0.  1. 2. 3
  0 [[0, 0, 0, 1],

  1 [0, 0, 1, 0],

  2 [0, 0, 0, 0], x - 1, y; 
           ^
        x, y-1   x, y-1; 
        ^
  3 [1, 0, 0, 0]]


*/

function bucketFill(arr, x, y) {
  if (arr[x][y] === 1) return arr;

  function helper(arr, x, y) {
    if (arr[x][y] === 0) {
      arr[x][y] = 1;
    } else {
      x += 1;
      y += 1;
    }
    helper(arr, x, y);
    helper(arr, x - 1, y);
    helper(arr, x, y - 1);
    helper(arr, x - 1, y - 1);
  }
  helper(arr, x, y);
  return arr;
}

/*. 
  
  helper( arr, x,y)
  
  helpr(arr,x-1,y)
  helpr(arr,x-1,y-1)
  helpr(arr,x-1,y)
  helpr(arr,x,y-1)
  
  finsal canvas:
       0  1  2. 3  
    0[[0, 0, 0, 1],
    1[0, 0, 1, 1],
    2[0, 1, 1, 1],
    3[1, 1, 1, 1]] 
  
  
  input array; x = 2 y = 2
      0.  1. 2.  3
    0 [[0, 0, 0, 1],
  
    1 [0, 1, 1, 0],
  
    2 [0, 1, 0, 0],
  
    3 [1, 0, 0, 0]]
    iteratiopn 1:
    row = 2
    col = 2
    arr[2][2] = 0
    arr[1][2] = 1
    arr[2][1] = 1
    arr[1][1] = 0
  
     if(arr[2][2] === 0 )
  
    */
// console.log(bucketFill())

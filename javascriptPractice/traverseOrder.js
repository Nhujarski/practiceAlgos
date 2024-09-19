// Given the root of a binary tree, return the preorder traversal of its nodes' values as an array of values.

// Implement this iteratively, not recursively. The test cases will still pass if you implement it recursively, but please do not use recursion in your solution.

// Example:

//                  1
//                 / \
//                2   5
//               / \
//              3   4
// will return [1, 2, 3, 4, 5]

function solution(root) {
  let seen = [root];
  let sol = [];
  while (seen.length) {
    let curr = seen.shift();
    sol.push(curr.value);
    if (curr.left) {
      seen.push(curr.left);
    } else if (curr.right) seen.push(curr.right);
  }
  return sol;
}

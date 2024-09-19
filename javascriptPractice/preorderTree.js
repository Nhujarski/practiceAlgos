//TODO preorder tree

/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
// Iterative
var preorder = function (root) {
  if (!root) return [];
  let stack = [];
  let sol = [];
  let curr = root;
  stack.push(curr);
  while (stack.length > 0) {
    let curr = stack.pop();
    sol.push(curr.val);
    for (let i = curr.children.length - 1; i >= 0; i--) {
      if (curr.children[i]) stack.push(curr.children[i]);
    }
  }
  return sol;
  // Time Complexity: O(N)
  // Space Complexity: O(H)
};

// Recursive
var preorder = function (root) {
  let res = [];
  function dfsTraversal(root) {
    if (!root) return;
    res.push(root.val);
    for (let child of root.children) {
      dfsTraversal(child);
    }
  }
  dfsTraversal(root);
  return res;
  // Time Complexity: O(N)
  // Space Complexity: O(H)
};

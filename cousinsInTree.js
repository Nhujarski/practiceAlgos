// TODO cousins in a tree
/*
Given the root of a binary tree with unique values and the values of two different nodes of the tree x and y, return true if the nodes corresponding to the values x and y in the tree are cousins, or false otherwise.

Two nodes of a binary tree are cousins if they have the same depth with different parents.

Note that in a binary tree, the root node is at the depth 0, and children of each depth k node are at the depth k + 1.
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function (root, x, y) {
  if (x == root.val || y == root.val || !root) return false;
  let parentX;
  let depthX;
  let parentY;
  let depthY;
  let queue = [{ node: root, depth: 0 }];
  while (queue.length > 0) {
    let { node, depth } = queue.shift();
    if (node.left) {
      queue.push({ node: node.left, depth: depth + 1 });
      if (node.left.val == x) {
        parentX = node.val;
        depthX = depth + 1;
      }
      if (node.left.val == y) {
        parentY = node.val;
        depthY = depth + 1;
      }
    }
    if (node.right) {
      queue.push({ node: node.right, depth: depth + 1 });
      if (node.right.val == x) {
        parentX = node.val;
        depthX = depth + 1;
      }
      if (node.right.val == y) {
        parentY = node.val;
        depthY = depth + 1;
      }
    }
    if (parentX && parentY && depthX && depthY) break;
  }
  return parentX !== parentY && depthX === depthY;
  // Time Complexity: O(n)
  // Space Complexity: O(n)
};
console.log(isCousins([1, 2, 3, 4], 4, 3));

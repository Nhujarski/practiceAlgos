// TODO min depth of tree
/* 
Given a binary tree, find its minimum depth.

The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

Note: A leaf is a node with no children.


*/

var minDepth = function (root) {
  if (!root) {
    return 0;
  }
  if (!root.left && !root.right) {
    return 1;
  }
  let left = Infinity;
  let right = Infinity;
  if (root.left) left = minDepth(root.left);
  if (root.right) right = minDepth(root.right);
  return 1 + Math.min(left, right);
};

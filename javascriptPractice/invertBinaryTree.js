// TODO invert Binary tree
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
 * @return {TreeNode}
 */
var invertTree = function (root) {
  const traverse = (root) => {
    if (!root) return;

    let tmp = root.left;
    root.left = root.right;
    root.right = tmp;

    traverse(root.left);
    traverse(root.right);
  };

  traverse(root);
  return root;
};

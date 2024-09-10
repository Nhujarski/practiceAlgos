/* 

Description

▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔

Q. Given a binary tree, count the number of elements in the tree.



Example:

• Given a binary tree:

                 1

                / \

               7   3

              / \

             4   5

// returns 5
*/

class TreeNode {
  constructor(value = 0, leftChild = null, rightChild = null) {
    this.value = value;

    this.left = leftChild;

    this.right = rightChild;
  }
}

function countTree(root) {
  let leftCount = 0;
  let rightCount = 0;

  function helper(root) {
    if (root === null) return leftCount + rightCount;

    if (root.left) {
      leftCount++;
      helper(root.left);
    }
    if (root.right) {
      rightCount++;
      helper(root.right);
    }
    return leftCount + rightCount + 1;
  }

  return helper(root);
}

// Test Cases

console.log(countTree(null) === 0); // 0

console.log(countTree(new TreeNode(1, new TreeNode(2), new TreeNode(3))) === 3); // 3

console.log(
  countTree(
    new TreeNode(
      2,
      new TreeNode(29, new TreeNode(26)),
      new TreeNode(4, null, new TreeNode(2, new TreeNode(9)))
    )
  ) === 6
); // 6

console.log(countTree(new TreeNode()) === 1); // 1

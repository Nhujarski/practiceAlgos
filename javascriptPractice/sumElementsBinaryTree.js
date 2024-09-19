/* 
Description

▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔

Q. Given a binary tree, sum all elements in the tree.



Example:

• Given a binary tree:

                 1

                / \

               7   3

              / \

             4   5

// returns 20
*/

class TreeNode {
  constructor(value = 0, leftChild = null, rightChild = null) {
    this.value = value;

    this.left = leftChild;

    this.right = rightChild;
  }
}

function sumBT(root) {
  if (root === null) return 0;
  let visited = [];
  let sum = 0;
  let curr = root;
  visited.push(curr);
  while (visited.length) {
    curr = visited.shift();
    sum += curr.value;
    if (curr.left) visited.push(curr.left);
    if (curr.right) visited.push(curr.right);
  }

  return sum;
}

// Test Cases

console.log(sumBT(null) == 0); // 0

console.log(sumBT(new TreeNode(1, new TreeNode(2), new TreeNode(3))) == 6); // 6

console.log(sumBT(new TreeNode(1)) == 1); // 1

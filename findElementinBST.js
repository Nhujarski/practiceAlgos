/*

Q. Given a binary tree and a target element's value, determine if the tree contains the target using depth first search (DFS).



Examples:

• Given a binary tree:

                 3

                / \

              29   4

              /     \

             2       2

                    /

                   9

• For target: 1 // returns False

• For target: 2 // returns True*/

class TreeNode {
  constructor(value = 0, leftChild = null, rightChild = null) {
    this.value = value;

    this.left = leftChild;

    this.right = rightChild;
  }
}

function DFSTree(root, target) {
  if (root === null) return false;
  let queue = [];
  let curr = root;
  queue.push(curr);
  // Write your code here.
  while (queue.length) {
    curr = queue.shift();
    if (curr.value === target) return true;
    if (curr.left) queue.push(curr.left);
    if (curr.right) queue.push(curr.right);
  }
  return false;
}

// Test Cases

var tree1 = new TreeNode(
  3,
  new TreeNode(29, new TreeNode(2)),
  new TreeNode(4, null, new TreeNode(2, new TreeNode(9)))
);

console.log(DFSTree(null, 1) == false); // false

console.log(DFSTree(tree1, 9) == true); // true

console.log(DFSTree(tree1, 1) == false); // false

console.log(DFSTree(tree1, 2) == true); // true

console.log(DFSTree(new TreeNode(1), 2) == false); // false

// TODO binary tree insert

/*
 Given a BST and a target element's value, insert the target in the appropriate position.
* [execution time limit] 4 seconds (js)
* [input] tree.integer root root of the tree
* [input] integer target target element's value to be inserted
* [output] tree.integer root of the updated tree


also linked list
*/
class TreeNode {
  constructor(value = 0, leftChild = null, rightChild = null) {
    this.value = value;
    this.left = leftChild;
    this.right = rightChild;
  }
}

function targetBT(root, target) {
  let curr = root;
  let newNode = new TreeNode(target);

  while (curr) {
    if (curr.value < target) {
      if (curr.right) {
        curr = curr.right;
      } else {
        curr.right = newNode;
        return root;
      }
    } else {
      if (curr.left) {
        curr = curr.left;
      } else {
        curr.left = newNode;
        return root;
      }
    }
  }
  // return root
}

let tree = new TreeNode(
  8,
  new TreeNode(3, new TreeNode(1), new TreeNode(6)),
  new TreeNode(10, null, new TreeNode(14))
);

console.log(targetBT(tree, 11));
console.log(targetBT(tree, 2));

// TODO closest val in bst

function findClosestValueInBst(tree, target) {
  // Write your code here.
  let closest = [];
  function helper(curr, minDiff) {
    if (!curr) return;
    if (Math.abs(target - curr.value) < minDiff) {
      closest[0] = curr.value;
      minDiff = Math.abs(target - curr.value);
    }

    if (curr.left) helper(curr.left, minDiff);
    if (curr.right) helper(curr.right, minDiff);
  }
  helper(tree, Infinity);
  return closest[0];
}

// This is the class of the input tree. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Do not edit the line below.

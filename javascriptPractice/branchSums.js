// TODO come back to this tree taversal problem branchSums

/*
write a functiuon that take in a Binary tree and returns a list of its branch sums in order from leftmost to rightmost sum.
*/

// This is the class of the input root.
// Do not edit it.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function branchSums(root, sum = 0, sol = []) {
  const currSum = root.value + sum;

  if (!root.left && !root.right) {
    sol.push(currSum);
  }

  if (root.left) {
    branchSums(root.left, currSum, sol);
  }

  if (root.right) {
    branchSums(root.right, currSum, sol);
  }
  return sol;
}

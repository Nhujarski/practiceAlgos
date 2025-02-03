/* 
Find the min value in a Binary Tree.
*/

const Denque = require('denque');

class TreeNode {
  constructor(val = null, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function findMinValue(root) {
  let min = Infinity;
  const deque = new Denque();
  deque.push(root);
  while (deque.length) {
    let curr = deque.pop();

    if (curr.val < min) {
      min = curr.val;
    }
    if (curr.left) deque.unshift(curr.left);
    if (curr.right) deque.unshift(curr.right);
  }
  return min;
}

let tree = new TreeNode(2, new TreeNode(1), new TreeNode(3));
console.log(findMinValue(tree), '<<< this should be 1');

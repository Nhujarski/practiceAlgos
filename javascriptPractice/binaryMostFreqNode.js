/* 
In this task, we will practice working through a binary tree problem.

Prompt
Given a binary tree with node values represented as integers, find and return the most frequent node value.
You can assume there will always be a most frequent node and that there are no ties.

class Node:
  def __init__(self, val, left=None, right=None):
    self.val = val
    self.left = left
    self.right = right


Expected Runtime
Time: O(N) to traverse the tree with N nodes
Space: O(N) to store up to N nodes
*/

class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

// Function Signature
function findMostFrequentNodeValue(root) {
  let hash = {};
  let curr = root;
  let queue = [];
  let max = -Infinity;
  let val = 0;
  queue.push(curr);
  while (queue.length) {
    curr = queue.shift();
    hash[curr.val] = (hash[curr.val] || 0) + 1;
    if (hash[curr.val] > max) {
      max = hash[curr.val];
      val = curr.val;
    }

    if (curr.left) queue.push(curr.left);
    if (curr.right) queue.push(curr.right);
  }

  return val;
}

let root = new Node(5);
console.log(findMostFrequentNodeValue(root) == 5);

root = new Node(5, new Node(10), new Node(5));
console.log(findMostFrequentNodeValue(root) == 5);

root = new Node(6, new Node(6, new Node(6), new Node(6)), new Node(6));
console.log(findMostFrequentNodeValue(root) == 6);

root = new Node(5, new Node(10, new Node(1), new Node(7)), new Node(1));
console.log(findMostFrequentNodeValue(root) == 1);

/* 
Today, you will be giving the problem to print a tree level by level.
Print the value of each node in a level, followed by a new line character at the end of each level

Target runtime and space complexity:
Runtime: O(n)
Examples:
Input:
   3
 2  4
1    5
Output:</br>
3</br>
24</br>
15

// Approach:
bfs search keep track of next level in an array
use stack and push current elements to new array
have a a queue
use while loop to traverse while theres items in the queue



*/

class TreeNode {
  constructor(value = 0, leftChild = null, rightChild = null) {
    this.value = value;

    this.left = leftChild;

    this.right = rightChild;
  }
}

// Function Signature:
function printByLevel(node) {
  if (!node) {
    return '';
  }

  let stack = [node];
  let next = [];
  let result = [];

  while (stack.length) {
    const current = stack.shift();

    result.push(current.value);

    if (current.left) {
      next.push(current.left);
    }

    if (current.right) {
      next.push(current.right);
    }

    if (!stack.length) {
      console.log(result + '\n');
      stack = next;
      next = [];
      result = [];
    }
  }
}

function printByLevel(node) {
  if (!node) {
    return [];
  }

  let queue = [node];

  while (queue.length) {
    let len = queue.length;
    let level = [];

    for (let i = 0; i < len; i++) {
      let current = queue.shift();

      level.push(current.value);
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }
    console.log({ level });
  }
}

// Solution
const printByLevel = (node) => {
  if (!node) {
    return [];
  }

  const nodes = [];
  const queue = [node];

  while (queue.length) {
    const len = queue.length;
    const level = [];

    for (let i = 0; i < len; i++) {
      const node = queue.shift();

      level.push(node.val);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    console.log(level);
  }
};

let tree = new TreeNode(1); // 1
console.log(printByLevel(tree)); // 1

tree = new TreeNode(1, new TreeNode(2), new TreeNode(3));
console.log(printByLevel(tree)); // 1,23

tree = new TreeNode(1, new TreeNode(2, new TreeNode(3)));
console.log(printByLevel(tree)); // 1,2,3

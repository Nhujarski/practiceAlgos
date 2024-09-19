/* 
Prompt
Given a binary tree, find all nodes that have only one child. Return an array of node values representing each single-child parent in any order.


Expected Runtime
Time: O(N) to traverse all N nodes in the tree
Space: O(H) to store up to the max height H of the tree at any given time
Examples
           1
       2       3
     _   4   _   _
    
should return [2]
           12
       3       4
    1    _   6   _
    
should return [3, 4]
*/

class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

// Function Signature
function hasSingleChildren(root) {
  let soluttion = [];
  let curr = root;

  function helper(curr) {
    if (!curr) return [];

    if (curr) {
      if ((curr.left && !curr.right) || (!curr.left && curr.right)) {
        soluttion.push(curr.value);
      }
    }

    helper(curr.left);
    helper(curr.right);
  }
  helper(curr);
  return soluttion;
}

// console.log(JSON.stringify(hasSingleChildren(null)) === JSON.stringify([]))

let root = new Node(1);
// console.log(JSON.stringify(hasSingleChildren(root)) === JSON.stringify([]))

//   1
// 2
root = new Node(1, new Node(2));
console.log(
  JSON.stringify(new Set(hasSingleChildren(root))) ===
    JSON.stringify(new Set([1]))
);

//   1
// 2   3
root = new Node(1, new Node(2), new Node(3));
console.log(JSON.stringify(hasSingleChildren(root)) === JSON.stringify([]));

//     1
//  2     3
// _ 4   _ _
root = new Node(1, new Node(2, null, new Node(4)), new Node(3));
console.log(
  JSON.stringify(new Set(hasSingleChildren(root))) ===
    JSON.stringify(new Set([2]))
);

//     12
//  3     4
// 1 _   6 _
root = new Node(12, new Node(3, new Node(1)), new Node(4, new Node(6)));
console.log(
  JSON.stringify(new Set(hasSingleChildren(root))) ===
    JSON.stringify(new Set([3, 4]))
);

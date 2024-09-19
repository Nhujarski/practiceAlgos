/*

Given a binary tree, give all nodes that have only one child an additional child with the value of zero. For example, if a node has only a left child, add a right child with value zero. If a node has only a right child, add a left child with value zero.

Function Description
solution has the following parameters:

root: the root of the tree

Returns:
The root of the tree
*/

class TreeNode {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function child(root) {
  let stack = [root];
  while (stack.length) {
    let currNode = stack.pop();
    /// checking if only right
    if (currNode.right && !currNode.left) {
      currNode.left = new TreeNode(0);
    }
    /// checking if only left
    if (currNode.left && !currNode.right) {
      currNode.right = new TreeNode(0);
    }
    if (currNode.left) stack.push(currNode.left);
    if (currNode.right) stack.push(currNode.right);
  }
  return root;
}

let root = new TreeNode(
  1,
  new TreeNode(2, new TreeNode(3, null), null),
  new TreeNode(1)
);

console.log(child(root));
// {
//     "value": 1,
//     "left": {
//         "value": 2,
//         "left": {
//             "value": 3,
//             "left": null,
//             "right": null
//         },
//         "right": null
//     },
//     "right": {
//         "value": 1,
//         "left": null,
//         "right": null
//     }
// }

// {
//     "value": 1,
//     "left": {
//         "value": 2,
//         "left": {
//             "value": 3,
//             "left": null,
//             "right": null
//         },
//         "right": {
//             "value": 0,
//             "left": null,
//             "right": null
//         }
//     },
//     "right": {
//         "value": 1,
//         "left": null,
//         "right": null
//     }
// }

/*
Given a binary tree and a depth, remove all nodes that are lower than that depth.

Function Description
replaceNodeValuesBT has the following parameters:

root: the root of the tree
depth: the max depth. This value will be >= 0

Returns:
The root of the tree
*/

// function depths(root, depth) {

// }

// Error Output
// root:
// {
//     "value": 1,
//     "left": {
//         "value": 2,
//         "left": {
//             "value": 2,
//             "left": null,
//             "right": null
//         },
//         "right": null
//     },
//     "right": {
//         "value": 1,
//         "left": null,
//         "right": null
//     }
// }
// depth: 0

// expects:
// {
//     "value": 1,
//     "left": null,
//     "right": null
// }

// root:
// {
//     "value": 1,
//     "left": {
//         "value": 1,
//         "left": {
//             "value": 1,
//             "left": null,
//             "right": null
//         },
//         "right": {
//             "value": 1,
//             "left": null,
//             "right": null
//         }
//     },
//     "right": {
//         "value": 1,
//         "left": {
//             "value": 1,
//             "left": null,
//             "right": null
//         },
//         "right": {
//             "value": 1,
//             "left": null,
//             "right": null
//         }
//     }
// }
// depth: 1

// {
//     "value": 1,
//     "left": {
//         "value": 1,
//         "left": null,
//         "right": null
//     },
//     "right": {
//         "value": 1,
//         "left": null,
//         "right": null
//     }
// }

//
// Binary trees are already defined with this interface:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }
function solution(root) {
  let stack = root ? [root] : [];
  let hashmap = {};
  let mostFrequentNode = null;

  while (stack.length) {
    let node = stack.pop();

    hashmap[node.value] ? hashmap[node.value]++ : (hashmap[node.value] = 1);

    if (!mostFrequentNode) {
      mostFrequentNode = node.value;
    } else {
      if (hashmap[node.value] > hashmap[mostFrequentNode]) {
        mostFrequentNode = node.value;
      }
    }

    if (node.left) stack.push(node.left);
    if (node.right) stack.push(node.right);
  }
  return mostFrequentNode;
}
/*
Given a binary tree and a depth, remove all nodes that are lower than that depth.

Function Description
replaceNodeValuesBT has the following parameters:

root: the root of the tree
depth: the max depth. This value will be >= 0

Returns:
The root of the tree
*/

class TreeNode {
  constructor(value = 0, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}
/*
Given a non-empty binary tree, find the maximum path sum.
A path is any sequence of nodes from some starting node to any node in the tree along the parent-child connections. The path must contain at least one node and does not need to go through the root.
Example:

Given a tree:
           1
          / \    
         2   3
        /     
      -1   
// returns 6  (1 + 2 + 3)

*/
// https://leetcode.com/problems/binary-tree-maximum-path-sum/description/

function maxPathSum(root) {
  let globalMax = -Infinity; // To handle cases where all values are negative

  function dfs(node) {
    if (node === null) {
      return 0;
    }

    // Recursively get the maximum path sums for left and right children
    let leftMax = Math.max(dfs(node.left), 0); // If the path sum is negative, ignore it
    let rightMax = Math.max(dfs(node.right), 0);

    // Calculate the maximum path sum through the current node
    let localMax = node.value + leftMax + rightMax;

    // Update the global maximum path sum
    globalMax = Math.max(globalMax, localMax);

    // Return the maximum sum of the path that includes the current node
    return node.value + Math.max(leftMax, rightMax);
  }

  dfs(root);
  return globalMax;
}

let tree = new TreeNode(
  1,
  new TreeNode(3, new TreeNode(-1), null),
  new TreeNode(4)
);
console.log(maxPathSum(tree)); // 8

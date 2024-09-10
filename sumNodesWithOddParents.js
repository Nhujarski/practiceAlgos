/*
Given a binary tree, return the sum of all nodes with an odd-valued parent node.

Approach:
For this problem, you can:
Keep a global sum, or use a local value and propagate.
DFS through the input tree.
At each step, add to the node sum only if the parent node (which should be passed in) is an odd value (modulo 2 !== 0).
Return your node value sum.

Target runtime and space complexity:
O(n), where n = # of nodes in tree
 */

class TreeNode {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}
// our solution
// Function Signature:
function sumNodesWithOddParent(root) {
  let visited = [];
  let curr = root;
  let sum = 0;
  visited.push(curr);

  while (visited.length) {
    curr = visited.shift();
    if (curr.value % 2 !== 0) {
      if (curr.left && curr.right) {
        sum += curr.left.value + curr.right.value;
      } else if (curr.left && !curr.right) {
        sum += curr.left.value;
      } else if (curr.right && !curr.left) {
        sum += curr.right.value;
      }
    }
    if (curr.left) visited.push(curr.left);
    if (curr.right) visited.push(curr.right);
  }
  return sum;
}

// their solution
// function sumNodesWithOddParent(root) {
//   let sum = 0;

//   function dfs(node, parentValue) {
//     if (!node) return;

//     if (parentValue && parentValue % 2 != 0) {
//       sum += node.value;
//     }

//     if (node.left) dfs(node.left, node.value);
//     if (node.right) dfs(node.right, node.value);
//   }

//   dfs(root);
//   return sum;
// }
/*
  input
          6
      7      8
    2  7    1  3
  
  output
          6
      7      8
    2  7    1  3
    
  2+7
  
  */
let test1 = new TreeNode(
  6,
  new TreeNode(7, new TreeNode(2, null, null), new TreeNode(7, null, null)),
  new TreeNode(8, new TreeNode(1, null, null), new TreeNode(3, null, null))
);

let test2 = new TreeNode(
  2,
  new TreeNode(5, null, null),
  new TreeNode(9, null, null)
);
let test4 = new TreeNode(
  2,
  new TreeNode(5, new TreeNode(1, null, null), new TreeNode(1, null, null)),
  new TreeNode(9, new TreeNode(1, null, null), new TreeNode(1, null, null))
);

/*
  
                6
          7            8
      2*     7*      1    3
     9  _  1*  4*  _  _  _  5*
     
     2 + 7 + 1 + 4 + 5 = 19
  
  */

let test3 = new TreeNode(
  6,
  new TreeNode(
    7,
    new TreeNode(2, new TreeNode(9, null, null), null),
    new TreeNode(7, new TreeNode(1, null, null)),
    new TreeNode(4, null, null)
  ),
  new TreeNode(
    8,
    new TreeNode(1, null, null),
    new TreeNode(3, null, new TreeNode(5, null, null))
  )
);

console.log(sumNodesWithOddParent(test1)); // 9
console.log(sumNodesWithOddParent(test2)); // 0
console.log(sumNodesWithOddParent(test3)); // 19
console.log(sumNodesWithOddParent(test4)); // 4

// sum even parents

function sumNodesWithEvenParent(root) {
  let sum = 0;
  if (!root) {
    return 0;
  }
  function helper(root) {
    if (root.value % 2 === 0) {
      if (root.left) {
        sum += root.left.value;
        helper(root.left);
      }
      if (root.right) {
        sum += root.right.value;
        helper(root.right);
      }
    }
  }
  helper(root);
  return sum;
}

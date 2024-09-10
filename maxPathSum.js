class TreeNode {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

/*
   Given a non-empty binary tree, find the maximum path sum.
  A path is any sequence of nodes from some starting node to any node in the tree along the parent-child connections. The path must contain at least one node and does not need to go through the root.
  
  
  Given a tree:
             1
            / \    
           2   3
          /     
        -1   
  // returns 6  (1 + 2 + 3)
  
  Approach:
  declare sum varible
  decalre maxSum
  declare stack = [root]
  iteate through tree
  decalre curr = stack.pop()
  add curr.value to sum
  check to see which is greater maxSum = Math.max(sum,maxSum) 
  
  at the end return maxSum
  
  */

// function maxPathSum(root) {

// }

function maxPathSum(root) {
  if (!root) {
    return 0;
  }
  let maxSum = -Infinity;

  let leftTreeSum = Math.max(0, maxPathSum(root.left));
  let rightTreeSum = Math.max(0, maxPathSum(root.right));

  return Math.max(maxSum, leftTreeSum + rightTreeSum) + root.value;
}

console.log(
  maxPathSum(
    new TreeNode(1, new TreeNode(2, new TreeNode(-1), null), new TreeNode(3))
  )
);

let tree = new TreeNode(
  1,
  new TreeNode(3, new TreeNode(-1), null),
  new TreeNode(4)
);
/* 
  Given a tree:
             1
            / \    
           3   4
          /     
        -1   
  */
console.log(maxPathSum(tree)); // 8

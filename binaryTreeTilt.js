/*
'''
🔎 EXPLORE
What are some other insightful & revealing test cases?
 

🧠 BRAINSTORM
What approaches could work?
Algorithm 1:
Time: O()
Space: O()
 

📆 PLAN
Outline of algorithm #: 
 

🛠️ IMPLEMENT
Write your algorithm.
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
Given the root of a binary tree, return the sum of every tree node's tilt.

The tilt of a tree node is the absolute difference between the sum of all left subtree node values and all right subtree node values. 
If a node does not have a left child, then the sum of the left subtree node values is treated as 0. 
The rule is similar if the node does not have a right child.
*/
var findTilt = function (root) {
  const tilt = { val: 0 };
  dfs(root, tilt);
  return tilt.val;
};

function dfs(root, tilt) {
  if (!root) return 0;
  let left = dfs(root.left, tilt);
  let right = dfs(root.right, tilt);
  tilt.val += Math.abs(left - right);
  return root.val + left + right;
}

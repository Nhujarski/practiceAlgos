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
*/
var addOneRow = function (root, v, d, level = 1) {
  if (!root) return;
  if (d === 1) {
    const newRoot = new TreeNode(v);
    newRoot.left = root;
    return newRoot;
  } else if (d === level + 1) {
    const oldLeft = root.left;
    const oldRight = root.right;
    root.left = new TreeNode(v);
    root.right = new TreeNode(v);
    root.left.left = oldLeft;
    root.right.right = oldRight;
  } else {
    addOneRow(root.left, v, d, level + 1);
    addOneRow(root.right, v, d, level + 1);
  }
  return root;
};

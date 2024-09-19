/*
'''
❓ PROMPT
Suppose you are given the root of a *Node* class for a supposed N-ary tree.

This *Node* class has a *children* method that returns a list of *Node* children.

However, this tree is actually corrupted! There may be edges in the *children* class that break the basic rules of trees, resulting in possible cycles or multiple parents.

How many edges do you need to remove from this faulty tree to construct a valid tree?

Example(s)
    1
  /   \
  2   3
   \ /
    4
return 1
Explanation: 4 has two parents. We can remove any one of them to create a valid tree.

    1 <--
  /   \ |
  2   3 |
   \    |
    4 --|
return 1
Explanation: 4 loops back to the root (1). We can remove this back edge to create a valid tree.
 

🔎 EXPLORE
List your assumptions & discoveries:
 

Insightful & revealing test cases:
 

🧠 BRAINSTORM
What approaches could work?
Algorithm 1:
Time: O()
Space: O()
 

📆 PLAN
Outline of algorithm #: 
 

🛠️ IMPLEMENT
class Node {
  constructor(value, children = []) {
      this.value = value
      this.children = children
  }
}

function edgesAwayFromTree(root) {

class Node:
  def __init__(self, value, children=[]):
    self.value = value
    self.children = children

def edgesAwayFromTree(root: Node) -> int:
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/

class Node {
  constructor(value, children = []) {
    this.value = value;
    this.children = children;
  }
}

function edgesAwayFromTree(root) {
  let counter = 0;
  let visited = new Set();
  function dfs(curr) {
    if (visited.has(curr)) {
      counter++;
      return;
    }

    visited.add(curr);
    for (let child of curr.children) {
      dfs(child);
    }
  }

  dfs(root);
  return counter;
}

let node4 = new Node(4);
let root = new Node(1, [new Node(2, [node4]), new Node(3, [node4])]);
console.log(edgesAwayFromTree(root) === 1);

node4 = new Node(4);
root = new Node(1, [new Node(2, [node4]), new Node(3)]);
node4.children = [root];
console.log(edgesAwayFromTree(root) === 1);

root = new Node(1, [new Node(2), new Node(3)]);
console.log(edgesAwayFromTree(root) === 0);

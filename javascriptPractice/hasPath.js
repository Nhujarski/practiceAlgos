//TODO go over graph problem

/*
'''
❓ PROMPT
Given a starting node in a graph and a target, traverse the graph using BFS and return true if a node with the target value exists, and false otherwise.

Example(s)
1 --- 2
|
3
node.hasPathTo(3) == True
node.hasPathTo(4) == False 
 

🔎 EXPLORE
State your assumptions & discoveries:
 

Create examples & test cases:
 

🧠 BRAINSTORM
What approaches could work? Consider data structures or algorithmic patterns.
Analyze the space & time complexity.
Approach 1:
Time: O()
Space: O()
 

📆 PLAN
High-level outline of approach #: 
 

🛠️ IMPLEMENT
class Node {
  constructor(val, children = []) {}
  hasPathTo(target) {}
}

class Node:
  def __init__(self, val, children=[]):
  def hasPathTo(self, target: int) -> bool:
 

🧪 VERIFY
Run your examples & test cases.
Methodically analyze and debug issue(s).

'''
*/

class Node {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }

  hasPathTo(target) {
    if (!this) return false;

    if (this.val === target) return true;

    const queue = [this];
    const visited = new Set();

    while (queue.length) {
      const curr = queue.shift();

      if (curr.val === target) return true;

      visited.add(curr.val);

      for (const child of curr.children) {
        if (!visited.has(child.val)) {
          queue.push(child);
        }
      }
    }

    return false;
  }
}

const exampleGraph = new Node(12, [
  new Node(18, [new Node(1), new Node(4, [new Node(3), new Node(9)])]),
]);

console.table([
  exampleGraph.hasPathTo(9) === true, // true, Node(12) -> Node(9)
  exampleGraph.hasPathTo(14) === false, // false, Node(12) -> Node(14)
  exampleGraph.hasPathTo() === false, // false, Node(12) -> null
  exampleGraph.hasPathTo(3) === true, // true, Node(12) -> Node(3)
]);

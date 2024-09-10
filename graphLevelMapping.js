//TODO review level mapping

/*
'''
❓ PROMPT
Suppose you are given an edge list for an undirected graph.
You can assume that all nodes in this graph have at least one edge, so a vertex list is unnecessary.

From a given start node, return a mapping of the distance to a list of nodes.

Example(s)
Input:
edges = [('A', 'B'), ('A', 'C'), ('A', 'D'), ('D', 'E'), ('C', 'D')]
start = 'A'
                C-----|
                |     |
                |     |
          B --- A --- D --- E

Output:
{
    0: ['A'],
    1: ['B', 'C', 'D'],
    2: ['E'],
}
 

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
function getLevelMapping(edgeList, startNode) {
def getLevelMapping(edgeList: list, startNode) -> dict:
 

🧪 VERIFY
Run your examples & test cases.
Methodically analyze and debug issue(s).

'''
*/

function toAdjList(edgeList) {
  let output = {};
  for (let [v1, v2] of edgeList) {
    output[v1] = [];
    output[v2] = [];
  }
  for (let [v1, v2] of edgeList) {
    output[v1].push(v2);
    output[v2].push(v1);
  }
  return output;
}

function getLevelMapping(edgeList, startNode) {
  let adjList = toAdjList(edgeList);
  let q = [];
  q.push([startNode, 0]);
  let visited = new Set();
  visited.add(startNode);
  let output = {};

  while (q.length) {
    let [curr, dist] = q.shift();
    if (dist in output) {
      output[dist].push(curr);
    } else {
      output[dist] = [curr];
    }
    for (let neighbor of adjList[curr]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        q.push([neighbor, dist + 1]);
      }
    }
  }
  return output;
}

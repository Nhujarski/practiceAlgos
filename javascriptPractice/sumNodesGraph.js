/*
'''
❓ PROMPT
Given a vertex and edge list of nodes and a start node for an undirected graph return the sum of all the nodes IDs accessible from the start node. For practice's sake, do this in BFS order.

Example(s)
vertexList: [1, 2, 3, 4, 5]
edgeList: [(1, 2), (2, 3), (1, 3)]

1--2
| /
3      4    5

sumNodes(vertexList, edgeList, 1) -> 6

Node 1 has access to 2 and 3. The sum of all these nodes is 6. Nodes 4 and 5 aren't accessible.
 

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
function sumNodes(vertexList, edgeList, startNode) {
def sumNodes(vertexList: list, edgeList: list, startNode: int) -> int:
 

🧪 VERIFY
Run your examples & test cases.
Methodically analyze and debug issue(s).

'''
*/

function toAdjacencyList(vertexList, edgeList) {
  if (vertexList.length === 0) return {};

  const adjacencyList = {};

  // map each vertex to a key and assign an empty array as the value
  for (const vertex of vertexList) {
    adjacencyList[vertex] = [];
  }

  // map all edges from edgeList to corresponding vertex in adjacencyList
  for (const [v1, v2] of edgeList) {
    adjacencyList[v1].push(v2);
    adjacencyList[v2].push(v1);
  }

  return adjacencyList;
}

// ********************* //
// *** Main Function *** //
// ********************* //
function sumNodes(vertexList, edgeList, startNode) {
  const adjacencyList = toAdjacencyList(vertexList, edgeList);

  if (vertexList.indexOf(startNode) === -1) return 0;

  const visited = new Set();
  let sum = 0;
  const queue = [startNode];

  while (queue.length) {
    const current = queue.shift();

    if (visited.has(current)) continue;

    visited.add(current);
    sum += current;

    const neighbors = adjacencyList[current];

    for (const neighbor of neighbors) {
      queue.push(neighbor);
    }
  }

  return sum;
}

let vertexList = [1, 2, 3, 4, 5];
let edgeList = [
  [1, 2],
  [2, 3],
  [1, 3],
];
console.log({ edgeList });
console.log(sumNodes(vertexList, edgeList, 1)); //-> 6
// sumNodes(vertexList, edgeList, 10000) //-> 0
// sumNodes(vertexList, edgeList, 4) //-> 4

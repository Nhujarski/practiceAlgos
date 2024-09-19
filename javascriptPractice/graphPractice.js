// TODO practice graphs
/* 
Adjacency List:
* Can take up less space in sparse graphs
* Faster to iterate over all edges 
- Can be slower to lookup specfic edge

Adjacency matrix:
- Takes up more time in sparse graphs 
- Slower to iterate over all edges
* Faster to lookup specifc Edge
*/

class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }
  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (edge) => edge !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (edge) => edge !== vertex1
    );
  }
  removeVertex(vertex) {
    const list = this.adjacencyList[vertex];
    for (let i = 0; i < list.length; i++) {
      this.removeEdge(vertex, list[i]);
    }
    delete this.adjacencyList[vertex];
  }
  dfsRecur(vertex) {
    const result = [];
    const visited = new Set();
    const list = this.adjacencyList;

    (function dfs(start) {
      if (!start) return null;
      visited.add(start);
      result.push(start);
      list[start].forEach((neighbor) => {
        if (!visited.has(neighbor)) {
          return dfs(neighbor);
        }
      });
    })(vertex);
    return result;
  }
  dfsIterative(start) {
    let stack = [start];
    let result = [];
    const visited = new Set();

    let vertex;

    visited.add(start);
    while (stack.length > 0) {
      vertex = stack.pop();
      result.push(vertex);
      const list = this.adjacencyList;

      list[vertex].forEach((n) => {
        if (!visited.has(n)) {
          visited.add(n);
          stack.push(n);
        }
      });
    }
    return result;
  }
  bfs(start) {
    let q = [start];
    let result = [];
    let visited = new Set();

    while (q.length > 0) {
      let curr = q.shift();
      visited.add(curr);
      result.push(curr);
      for (const neighbor of this.adjacencyList[curr]) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          q.push(neighbor);
        }
      }
    }
    return result;
  }
}

let g = new Graph();
g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addVertex('D');
g.addVertex('E');
g.addVertex('F');

g.addEdge('A', 'B');
g.addEdge('A', 'C');
g.addEdge('B', 'D');
g.addEdge('C', 'E');
g.addEdge('D', 'E');
g.addEdge('D', 'F');
g.addEdge('E', 'F');

console.log(g.bfs('A'));

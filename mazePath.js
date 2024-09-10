/*
'''
You're given a 2d array with 1's and 0's. 1's represent walls, and 0's represent open, walkable space. A robot starts on the top left and goes down to the bottom right. This robot can move in any the cardinal (NSEW) direction, not diagonals.

Output the shortest path a robot should take from the top left to the bottom right. If there are multiple shortest paths, any path is valid. If there is no valid path, return None/null.
 

EXAMPLE(S)
Maze:
0 0 0 0
1 1 0 0
0 0 0 1
0 1 1 0
0 0 0 0

getMazePath(maze) -> [(0, 0), (0, 1), (0, 2), (1, 2), (2, 2), (2, 1), (2, 0), (3, 0), (4, 0), (4, 1), (4, 2), (4, 3)]

Explanation: The robot needs to travel around the two rows of walls. We're representing the path returned by annotating it with Xs.
x x x 0
1 1 x 0
x x x 1
x 1 1 0
x x x x
 

FUNCTION SIGNATURE
def getMazePath(maze):
'''
*/

function get_neighbors(maze, i, j) {
  let neighbors = new Set();
  if (i > 0 && maze[i - 1][j] != 1) neighbors.add([i - 1, j]);
  if (i < maze.length - 1 && maze[i + 1][j] != 1) neighbors.add([i + 1, j]);
  if (j > 0 && maze[i][j - 1] != 1) neighbors.add([i, j - 1]);
  if (j < maze[0].length - 1 && maze[i][j + 1] != 1) neighbors.add([i, j + 1]);
  return neighbors;
}

function getMazePath(maze) {
  // write code here

  if (maze.length == 0) return [];
  if (maze[0].length == 0) return [];

  let q = [];
  let visited = new Set();
  // # Seed with the current node and path
  let start_node = [0, 0];
  let start_path = [0, 0];
  q.push(start_node, start_path);
  visited.add([0, 0]);
  let target = [maze.length - 1, maze[0].length - 1];

  while (q.length > 0) {
    let curr_node = q.pop();

    let path = q.pop();

    if (curr_node == target) {
      return path;
    }
    let neighbors = get_neighbors(maze, curr_node[0], curr_node[1]);

    for (const neighbor of neighbors) {
      if (visited.has(neighbor)) continue;

      visited.add(neighbor);
      let newpath = [...path];
      console.log({ newpath });
      newpath.push(neighbor);
      //   q.push(neighbor, newpath);
      console.log({ neighbor });
    }
  }
  return null;
}
let maze = [[0, 0, 0, 0]];
// let maze2 = [
//   [0, 0, 0, 0],
//   [1, 1, 0, 0],
//   [0, 0, 0, 1],
//   [0, 1, 1, 0],
//   [0, 0, 0, 0],
// ];
console.log(getMazePath(maze));
// console.log(getMazePath(maze2));
// [(0, 0), (0, 1), (0, 2), (1, 2), (2, 2), (2, 1), (2, 0), (3, 0), (4, 0), (4, 1), (4, 2), (4, 3)]
// let maze2 = [];
// console.log(getMazePath(maze2));

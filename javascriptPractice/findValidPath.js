const solution = (maze, startRow, startCol, destRow, destCol) => {
  // Helper function to check if a cell is valid and unvisited
  const isValid = (row, col) => {
    return (
      row >= 0 &&
      row < maze.length &&
      col >= 0 &&
      col < maze[0].length &&
      maze[row][col] === 0
    );
  };

  // Helper function for depth-first search
  const dfs = (row, col) => {
    // Mark the current cell as visited
    maze[row][col] = 2;

    // Check if we've reached the destination
    if (row === destRow && col === destCol) {
      return true;
    }

    // Explore neighbors (up, down, left, right)
    const neighbors = [
      [row - 1, col],
      [row + 1, col],
      [row, col - 1],
      [row, col + 1],
    ];

    for (const [r, c] of neighbors) {
      if (isValid(r, c) && dfs(r, c)) {
        return true; // Found a path to the destination
      }
    }

    return false; // No path found from this cell
  };

  // Call the DFS function to start the search
  return dfs(startRow, startCol);
};

// Example usage:
const maze = [
  [0, 1, 0, 0],
  [0, 0, 0, 1],
  [0, 1, 0, 0],
  [0, 0, 0, 0],
];

const startRow = 0;
const startCol = 0;
const destRow = 3;
const destCol = 3;

const canReachDestination = solution(
  maze,
  startRow,
  startCol,
  destRow,
  destCol
);
console.log(canReachDestination); // Output: true

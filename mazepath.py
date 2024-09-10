# # 
# '''
# You're given a 2d array with 1's and 0's. 1's represent walls, and 0's represent open, walkable space. A robot starts on the top left and goes down to the bottom right. This robot can move in any the cardinal (NSEW) direction, not diagonals.

# Output the shortest path a robot should take from the top left to the bottom right. If there are multiple shortest paths, any path is valid. If there is no valid path, return None/null.
 

# EXAMPLE(S)
# Maze:
# 0 0 0 0
# 1 1 0 0
# 0 0 0 1
# 0 1 1 0
# 0 0 0 0

# getMazePath(maze) -> [(0, 0), (0, 1), (0, 2), (1, 2), (2, 2), (2, 1), (2, 0), (3, 0), (4, 0), (4, 1), (4, 2), (4, 3)]

# Explanation: The robot needs to travel around the two rows of walls. We're representing the path returned by annotating it with Xs.
# x x x 0
# 1 1 x 0
# x x x 1
# x 1 1 0
# x x x x
 

# FUNCTION SIGNATURE
# def getMazePath(maze):
# '''
# 

from collections import deque

def get_neighbors(maze, i, j):
    neighbors = set()
    if i > 0 and maze[i-1][j] != 1:
        neighbors.add((i -1, j))
    if i < len(maze) - 1 and maze[i+1][j] != 1:
        neighbors.add((i + 1, j))
    if j > 0 and maze[i][j-1] != 1:
        neighbors.add((i, j - 1))
    if j < len(maze[0]) - 1 and maze[i][j+1] != 1:
        neighbors.add((i, j + 1))
    return neighbors

def getMazePath(maze):
    if len(maze) == 0:
        return []
    if len(maze[0]) == 0:
        return []

    q = deque()
    visited = set()
    # Seed with the current node and path
    start_node = (0, 0)
    start_path = [(0, 0)]
    q.append((start_node, start_path))
    visited.add((0, 0))

    target = (len(maze) - 1, len(maze[0]) - 1)
    while q:
        curr_node, path = q.popleft()
        print('q>>>',q)
        print("curr node",curr_node)
        if curr_node == target:
            return path
        neighbors = get_neighbors(maze, curr_node[0], curr_node[1])
        for neighbor in neighbors:
            if neighbor not in visited:
                visited.add(neighbor)
                newpath = list(path)
                newpath.append(neighbor)
                q.append((neighbor, newpath))
    return None

maze = [
  [0, 0, 0, 0],
  [1, 1, 0, 0],
  [0, 0, 0, 1],
  [0, 1, 1, 0],
  [0, 0, 0, 0],
]

#  [(0, 0), (0, 1), (0, 2), (1, 2), (2, 2), (2, 1), (2, 0), (3, 0), (4, 0), (4, 1), (4, 2), (4, 3)]

print(getMazePath(maze))
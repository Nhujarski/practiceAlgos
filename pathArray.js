// TODO practice path arrays

// // Q. Given an array of integers that represents a path, determine if you reach the end of the array after following the path. Start with element 0 and move forward x number of steps, which can be negative which means move backward.

// The last index of the array will always have 0.

// Example:
// Input: [1, 2, 0, -1]
// Output: false
// Explanation: Starting at 0, the first path is 1, so take 1 step forward where you get to a path with the value 2. Then you take 2 more steps forward to land on a path with the value -1. Then take a step backward to land on a path with the value 0. Since 0 does not do anything, you get stuck at that point. Thus this returns false.

// Example:
// Input: [3, -1, 2, -1, 0]
// Output: true
// Explanation: Starting at 0, the first path is 3 so take 3 steps forward to land on a path with the value -1. Then take a step backward to land on a path with the value 2. Then take 2 steps forward to land on a path with the value 0. There are no further moves and you're at the end of the array so this returns true.

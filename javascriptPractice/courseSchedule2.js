// There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.

// For example, the pair[0, 1], indicates that to take course 0 you have to first take course 1.
// Return the ordering of courses you should take to finish all courses.If there are many valid answers, return any of them.If it is impossible to finish all courses, return an empty array.

//   Example 1:

// Input: numCourses = 2, prerequisites = [[1, 0]]
// Output: [0, 1]
// Explanation: There are a total of 2 courses to take.To take course 1 you should have finished course 0. So the correct course order is[0, 1].

//   Example 2:

// Input: numCourses = 4, prerequisites = [[1, 0], [2, 0], [3, 1], [3, 2]]
// Output: [0, 2, 1, 3]
// Explanation: There are a total of 4 courses to take.To take course 3 you should have finished both courses 1 and 2. Both courses 1 and 2 should be taken after you finished course 0.
// So one correct course order is[0, 1, 2, 3].Another correct ordering is[0, 2, 1, 3].

//   Example 3:

// Input: numCourses = 3, prerequisites = []
// Output: [0,2,1]

// Input: numCourse = 3, prerequisistes = [[1,0]]
// Output: [2,0,1]

/* 
create map, let map = new Map()
create output arr, let output = []

iterate through prereqs using for loop over 
store prereq[i][1] as key 
the value would be an array [] if it doesnt exist,  or push in prereq[i][0]

loop through map,
loop through keys value array 
check and see if that val is in output, output.includes(value[i])
 && check if map.get(value[i]).includes(key)
if it does return []
else: if not add it, if it is then do nothing and move onto next iteration.

return output
*/

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function (numCourses, prerequisites) {
  let graph = new Map();
  let output = [];

  for (let i = 0; i < prerequisites.length; i++) {
    let [prereqA, prereqB] = prerequisites[i];
    if (!graph.has(prereqB)) {
      graph.set(prereqB, [prereqA]);
    } else {
      graph.get(prereqB).push(prereqA);
    }
  }
  console.log(graph);
  for (const [key, value] of graph) {
    for (let i = 0; i < value.length; i++) {
      console.log('value at i >>>', value[i]);
      if (
        graph.has(value[i]) &&
        !graph.get(value[i]).includes(key) &&
        !output.includes(value[i])
      ) {
        output.push(value[i]);
      } else {
        return [];
      }
    }
  }
  return output;
};

// let numCourses = 4, prerequisites = [[1, 0], [2, 0], [3, 1], [3, 2]]

console.log(
  findOrder(4, [
    [1, 0],
    [2, 0],
    [3, 1],
    [3, 2],
  ])
); // Output: [0, 2, 1, 3]

let preReq = {};
for (let i = 0; i < numCourses; i++) {
  preReq[i] = [];
}

for (let [crs, req] of prerequisites) {
  preReq[crs].push(req);
}

let cycle = new Set();
let output = [];

function dfs(cre) {
  if (cycle.has(cre)) {
    return false;
  }

  if (output.includes(cre)) {
    return true;
  }

  cycle.add(cre);
  for (let crs of preReq[cre]) {
    if (!dfs(crs)) {
      return false;
    }
  }

  cycle.delete(cre);
  output.push(cre);
  return true;
}

for (let cre = 0; cre < numCourses; cre++) {
  if (!dfs(cre)) {
    return [];
  }
}
return output;

// https://leetcode.com/problems/course-schedule-ii/description/

// // Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.

// // Input: [1,2,3]
// // Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

// /*
//         1           2           3
//       2   3       3   1       2     1
//      3     2     1      3    1        2
// */

// // for num in input:
// //   add to Array
// //     for num in input:
// //        if not in array:
// //           add
// //           pop
// //         for num in input
// //           if not in array:
// //             add
// //             pop
// //   pop

// //Input: nums = [0,1]
// // Output: [[0,1],[1,0]]

// // Input: nums = [1]
// // Output: [[1]]

// // nums = [1,2,3]
// // cur = [1]
// function permutations(nums) {
//   const result = [];
//   function bactrack(current = [], used = new Set()) {
//     if (current.length === nums.length) {
//       result.push([...current]);
//       return;
//     }
//     for (const num of nums) {
//       if (used.has(num)) continue;

//       current.push(num);
//       used.add(num);

//       bactrack(current, used);

//       current.pop();
//       used.delete(num);
//     }
//   }
//   bactrack();
//   return result;
// }

// console.log(permutations([1, 2, 3]));
// console.log(permutations([0, 1]));
// console.log(permutations([1]));

// /*
//   void findSolutions(n, other params) :
//       if (found a solution) :
//           solutionsFound = solutionsFound + 1;
//           displaySolution();
//           if (solutionsFound >= solutionTarget) :
//               System.exit(0);
//           return

//       for (val = first to last) :
//           if (isValid(val, n)) :
//               applyValue(val, n);
//               findSolutions(n+1, other params);
//               removeValue(val, n);
//   */

// /*
//   function outer(outerArg, outerArg, ...): finalResult {
//     let privateState;
//     function inner(innerArg, innerArg, ...): innerResult {
//       // check base case
//       // split up the problem
//       for each interesting case:
//         potentialAnswer = inner(innerArg, ...)

//       return merge(potentialAnswer, ...)
//     }
//     let finalResult = transform(inner(innerArg, ...));
//     return finalResult
//   }
//   */

//   // Given a collection of numbers, nums, that might contain duplicates, return all possible unique permutations in any order.

// // Input: nums = [1,1,2]
// // Output:
// // [[1,1,2],
// //  [1,2,1],
// //  [2,1,1]]

// // Input: nums = [1,2,3]
// // Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

// /*
// iterating over nums, building map
// adding count of num to map
// checking to see if item is in collection
// adding it in the collection
// subtracting count if already in there
// [1, 2, 3]
// '1,2,3'

// */

// function permute(nums){
//     const result = []
//     nums.sort()
//     const used = new Set()
//     // const countMap = new Map()
//     // for(const num of nums){
//     //   const count = (countMap.get(num) || 0) + 1
//     //   countMap.set(num, count)
//     // }

//     function backtrack(current=[]){
//       const sorted = [...current].sort()
//       if (nums.length === current.length && nums.toString() === sorted.toString()){
//         result.push([...current])
//         used.add(sorted)
//       }
//       for(const num of nums){
//   // i think we only want to mess with used in the base case
//   //sounds good. gotta go!

//         current.push(num)
//         backtrack(current, used)
//         current.pop()
//       }

//     }
//     backtrack()
//   }

//   console.log(permute([1,1,2]))
//   console.log(permute([1,2,3]))

// here's the python solution i got working with all of our ideas! thanks for a great session guys :)

function permute(nums) {
  nums.sort();
  let resultSet = new Set();
  let result = [];
  function dfs(path = []) {
    if (path.length == nums.length) {
      if (path.sort() == nums) {
        if (!resultSet.includes(path.toString())) {
          result.push(path.copy());
          resultSet.add(str(path.copy()));
        }
        return;
      }
    }

    for (const num in nums) {
      path.push(num);
      dfs(path);
      path.pop();
    }
  }
  dfs();
  return result;
}

// Awesome! sounds good thanks again
console.log(permute([1, 1, 2]));
console.log(permute([1, 2, 3]));

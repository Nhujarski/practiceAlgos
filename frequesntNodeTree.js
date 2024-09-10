/*

Problem

Given a binary tree with node values represented as integers, find and return the least occurring  tree node value (eg: 3).
You can assume there will always be a valid answer (no duplicate frequencies or invalid arrangements).
*/

class TreeNode {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}
// Function Signature:
function findLeastFrequentNodeValue(root) {
  console.log(root);
}

let tree = new TreeNode(2, new TreeNode(2, new TreeNode(1)));

console.log(findLeastFrequentNodeValue(tree)); // 1
tree = new TreeNode(
  1,
  new TreeNode(1, new TreeNode(1), new TreeNode(1)),
  new TreeNode(1, new TreeNode(1), new TreeNode(1))
);
console.log(findLeastFrequentNodeValue(tree)); // 1
/*

Problem

Given a binary tree with node values represented as integers, find and return the least occurring  tree node value (eg: 3).
You can assume there will always be a valid answer (no duplicate frequencies or invalid arrangements).

Example 1

           1
       2       _
     2   _   _   _
    
  should return Node(1)

           1
       1       1
    1    1   1   1
    
    should return Node(1)

    Approach:
    iterate through tree
    use hash
    start coutn
    iterate through hash
    return smallest coutn
*/

class TreeNode {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}
// Function Signature:
// function findLeastFrequentNodeValue(root) {
//   // const countMap = new Map()
//   const countHash = {}
//   let minCount = Infinity
//   let minVal
//   function traverse(root){
//     if (!root) return
//     const count = (countHash[root.value] || 0) + 1
//     countHash[root.value] = count
//     traverse(root.left)
//     traverse(root.right)
//   }
//   traverse(root)
//   for (const[val, count] of Object.entries(countHash)){
//     if (count < minCount){
//       minCount = count
//       minVal = val
//     }
//   }
//   console.log(countHash)

//   // for (const [val, count] of countMap){
//   //   if (count < minCount){
//   //     minCount = count
//   //     minVal = val
//   //   }
//   // }
//   return minVal
// }

//      1
//   2     3
// 2   4 4   5

function findLeastFrequentNodeValue(root) {
  const visited = root ? [root] : [];
  let hash = new Map();

  let min = Infinity;
  let minVal;

  while (visited.length) {
    // const size = visited.length
    // for (let i = 0; i<size; i++){
    const curr = visited.shift();
    const count = (hash.get(curr.value) || 0) + 1;
    hash.set(curr.value, count);

    if (curr.left) visited.push(curr.left);

    if (curr.right) visited.push(curr.right);
    // }
  }

  for (const [val, count] of hash) {
    if (count < min) {
      min = count;
      minVal = val;
    }
  }
  return minVal;
}

tree = new TreeNode(
  6,
  new TreeNode(2, new TreeNode(2), new TreeNode(2)),
  new TreeNode(2, new TreeNode(1), new TreeNode(1))
);

console.log(findLeastFrequentNodeValue(tree)); // 1
tree = new TreeNode(
  1,
  new TreeNode(1, new TreeNode(1), new TreeNode(1)),
  new TreeNode(1, new TreeNode(1), new TreeNode(1))
);
console.log(findLeastFrequentNodeValue(tree)); // 1

// their solution
// function findLeastOccurringNode(root) {
//   const frequencies = new Map();

//   function dfs(node) {
//     if (!node) return;

//     frequencies.set(node.val, (frequencies.get(node.val) || 0) + 1);

//     dfs(node.left);
//     dfs(node.right);
//   }

//   dfs(root);

//   let resultVal;
//   let currentMin = Infinity;

//   for (const [nodeVal, currentFrequency] of frequencies) {
//     if (currentFrequency < currentMin) {
//       resultVal = nodeVal;
//       currentMin = currentFrequency;
//     }
//   }

//   return resultVal;
// }

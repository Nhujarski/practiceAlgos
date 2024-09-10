/* 

*/

class Test {
  constructor(test_name = '', printTests = false) {
    this.total_count = 0;

    this.problem_count = 0;

    this.total_score = 0;

    this.problem_score = 0;

    this.current_problem = '';

    this.failed_problems = [];

    console.log(`Beginning Test: ${test_name}`);
  }

  // Test Helpers

  test(expected_outcome, outcome, case_num) {
    if (expected_outcome == outcome) {
      return this.passed(case_num);
    }

    return this.failed(case_num);
  }

  testMultipleCases(possible_outcomes, outcome, case_num) {
    var possible_outcome;

    for (possible_outcome of possible_outcomes) {
      if (this.compareArrays(possible_outcome, outcome)) {
        return this.passed(case_num);
      }
    }

    return this.failed(case_num);
  }

  testForArrays(expected_outcome, outcome, case_num) {
    if (this.compareArrays(expected_outcome, outcome)) {
      return this.passed(case_num);
    }

    return this.failed(case_num);
  }

  compareArrays(array1, array2) {
    return (
      array1.length === array2.length &&
      array1.filter((a, i) =>
        Array.isArray(a) ? !this.compareArrays(a, array2[i]) : array2[i] !== a
      ).length === 0
    );
  }

  testMatchAny(expected_outcome, outcome, case_num) {
    if (this.isEqual(expected_outcome, outcome)) {
      return this.passed(case_num);
    }

    return this.failed(case_num);
  }

  isEqual(array1, array2) {
    var sortedArr1 = [];

    var sortedArr2 = [];

    for (var a1 of array1) {
      sortedArr1.push(a1.sort());
    }

    for (var a2 of array2) {
      sortedArr2.push(a2.sort());
    }

    return this.compareArrays(sortedArr1.sort(), sortedArr2.sort());
  }

  // Test Logistics

  startProblem(problemName) {
    this.current_problem = problemName;

    this.problem_score = 0;

    this.problem_count = 0;

    this.failed_problems = [];
  }

  passed(case_num) {
    this.total_score += 1;

    this.problem_score += 1;

    this.problem_count += 1;

    this.total_count += 1;
  }

  failed(case_num) {
    this.problem_count += 1;

    this.total_count += 1;

    this.failed_problems.push(case_num);
  }

  endProblem() {
    console.log(
      `\n   ${this.current_problem} Score: ${this.problem_score} / ${this.problem_count}`
    );

    if (this.failed_problems.length > 0) {
      console.log(`   ** Failed Test Cases: ${this.failed_problems}`);
    }
  }

  printFinal() {
    console.log(`\nTotal Score: ${this.total_score} / ${this.total_count}`);
  }
}

var test = new Test('');

class ListNode {
  constructor(value = 0, next = null) {
    this.value = value;

    this.next = next;
  }
}

function arrayify(head) {
  var ptr = head;

  var array = [];

  while (ptr != null) {
    array.push(ptr.value);

    ptr = ptr.next;
  }

  return array;
}

function arrayifyTree(root) {
  if (!root) {
    return [];
  }

  var queue = [];

  var array = [];

  queue.push(root);

  while (queue.length !== 0) {
    var node = queue.shift();

    array.push(node.value);

    if (node.left) {
      queue.push(node.left);
    }

    if (node.right) {
      queue.push(node.right);
    }
  }

  return array;
}

/* 
  Q. Given a non-empty binary tree, find the maximum path sum.
  
  
  
  Note:
  
  • A path is any sequence of nodes from some starting node to any node in the tree along the parent-child connections. The path must contain at least one node and does not need to go through the root.
  
  
  
  Example:
  
  • Given a binary tree: 
  
             1
  
            / \    
  
           2   3
  
          /     
  
        -1   
  
  // returns 6 (1 + 2 + 3)
  */

class TreeNode {
  constructor(value = 0, leftChild = null, rightChild = null) {
    this.value = value;

    this.left = leftChild;

    this.right = rightChild;
  }
}

// function mps(root) {
//   let maxSum = -Infinity;

//   function dfs(node) {
//     if (!node) return 0;

//     const left = dfs(node.left);
//     const right = dfs(node.right);

//     console.log('node val', left);

//     maxSum = Math.max(maxSum, node.value + left.value + right.value);
//     console.log({ maxSum });
//     return node.value + Math.max(left.value, right.value);
//   }

//   dfs(root);

//   return maxSum === -Infinity ? 0 : maxSum;
// }

var maxPathSum = function (root) {
  let maxSum = -Infinity;
  const helper = (root) => {
    if (!root) {
      return 0;
    }

    const sumL = Math.max(0, helper(root.left, maxSum));
    const sumR = Math.max(0, helper(root.right, maxSum));

    maxSum = Math.max(maxSum, sumL + sumR + root.value);

    return root.value + Math.max(sumR, sumL);
  };
  helper(root);
  return maxSum;
};

// Test Cases
let tree = new TreeNode(1, new TreeNode(2), new TreeNode(3));
console.log(maxPathSum(tree) === 6); // 6

let tree2 = new TreeNode(1, new TreeNode(2), new TreeNode(-4));
console.log(maxPathSum(tree2) == 3); //3
// test.test(18, mps(new TreeNode(1, new TreeNode(2, new TreeNode(4), new TreeNode(5)), new TreeNode(3, new TreeNode(6), new TreeNode(7)))), 2)

// test.test(3, mps(), 3)

// test.test(7, mps(new TreeNode(1, new TreeNode(-5, new TreeNode(6)), new TreeNode(5))), 4)

// test.test(21, mps(new TreeNode(1, new TreeNode(-10, new TreeNode(3, new TreeNode(5, new TreeNode(13), new TreeNode(-1)), new TreeNode(-1))), new TreeNode(-5, new TreeNode(-20), new TreeNode(-21)))), 5)

// test.endProblem();

/* 

✏️ Description

▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔

Q. Given an array of integers sorted in ascending order, convert it to a height balanced BST.



Note:

• A height-balanced binary tree is a binary tree in which the depth of the two subtrees of every node never differ by more than 1.

• You must pick the smaller number when picking the "middle." In other words, when there are two numbers to choose from to pick the next child node, choose the smaller value (see example below).



Example:
                                                node.left = helper(i + 1)
• Given an array: [-10,-3,0,5,9]
                          ^
                          mid
  [-10,-3,-1,0,5,9,10]

// returns:

                0

               / \    

             -10   5 

               \    \

               -3    9



1. Choose 0 as a root node.

2. For left child node of 0, you have -10 and -3. According to the rule, you choose the smaller value -10.

3. Similar for choosing the right child node of 0, you are left with 5 and 9. Since 5 is smaller than 9, 5 becomes the right child node.

// Approach 
find lowest val thats greater than 0
find next lowest number push to left 
find next greater number push to right
repeat loop until length of nums
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

function arrayify(head) {
  var ptr = head;

  var array = [];

  while (ptr != null) {
    array.push(ptr.value);

    ptr = ptr.next;
  }

  return array;
}

class TreeNode {
  constructor(value = 0, leftChild = null, rightChild = null) {
    this.value = value;
    this.left = leftChild;
    this.right = rightChild;
  }
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
    [-10,-3,0,5,9], mid = 0, start = 0, end = 1 
          s
          e
      m
  
  */

function sortedArrayToBST(nums) {
  function helper(nums, start, end) {
    if (nums.length === 0 || start > end) {
      return null;
    }
    const mid = Math.floor((start + end) / 2);
    let root = new TreeNode(nums[mid]);
    root.left = helper(nums, start, mid - 1); // stores the result of this in left var
    root.right = helper(nums, mid + 1, end); // stores result of right call in right var
    return root;
  }
  // mid = left + right / 2
  // left side = mid -1 / recur left
  // right side = mid + 1 / recur right
  return helper(nums, 0, nums.length - 1);
}

/* 
  Approach
  One thing to watch out for (as is common with arrays) is to make sure not to modify / slice the array in any way, as that will lead to unintended runtime / space consequences.
  This is another problem that if you were an expert on the subject, you should be able to implement trivially, maybe in 5 minutes flat for the first attempt and even faster for subsequent ones.
  */
// THE SOLUTION
// var sortedArrayToBST = function(nums) {

//   function helper(nums, start, end) {
//     if (nums.length === 0 || start > end) {
//       return null
//     }

//     const middle = Math.floor((start + end)/2)
//     const root = new TreeNode(nums[middle])
//     root.left = helper(nums, start, middle-1)
//     root.right = helper(nums, middle+1, end)
//     return root
//   }

//   return helper(nums, 0, nums.length-1)
// }

// Test Cases

test.startProblem('Convert Sorted Array to BST');

test.testForArrays([2, 1, 3], arrayifyTree(sortedArrayToBST([1, 2, 3])), 1);

test.testMultipleCases(
  [
    [0, -3, 9, -10, 5],
    [0, -10, 9, -3, 5],
    [0, -10, 5, -3, 9],
    [0, -3, 5, -10, 9],
  ],
  arrayifyTree(sortedArrayToBST([-10, -3, 0, 5, 9])),
  2
);

test.testForArrays([], arrayifyTree(sortedArrayToBST([])), 3);

test.endProblem();

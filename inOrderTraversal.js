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
  Q. Given a binary tree, return the in-order traversal of its nodes' values. You must use iterative approach.
  
  
  
  In-order traversal:
  
  1. Traverse the left subtree.
  
  2. Visit the root.
  
  3. Traverse the right subtree.
  
  
  
  Example:
  
  • Given a binary tree:
  
             1
  
            / \
  
           2   3
  
  // returns [2, 1, 3]
  */

function inOrderTraversal(root) {
  if (!root) return [];
  let seen = [];
  let sol = [];

  while (true) {
    if (root) {
      seen.push(root);
      root = root.left;
    } else {
      if (seen.length === 0) {
        break;
      }
      root = seen.pop();
      sol.push(root.value);
      root = root.right;
    }
  }
  return sol;
}

// this is wrong
/* 
  res, stack = [], []
      while True:
          while root:
              stack.append(root)
              root = root.left
          if not stack:
              return res
          node = stack.pop()
          res.append(node.val)
          root = node.right
  */

// Test Cases

test.startProblem('In-Order Traversal');

var tree1 = new TreeNode(1, new TreeNode(2), new TreeNode(3));

var tree2 = new TreeNode(
  1,
  new TreeNode(2, new TreeNode(4), new TreeNode(5)),
  new TreeNode(3)
);

var tree3 = new TreeNode(
  1,
  new TreeNode(
    2,
    new TreeNode(4, new TreeNode(8), new TreeNode(9)),
    new TreeNode(5)
  ),
  new TreeNode(3, new TreeNode(6), new TreeNode(7))
);

// test.testForArrays([], inOrderTraversal(null), 1)

test.testForArrays([2, 1, 3], inOrderTraversal(tree1), 2);

test.testForArrays([4, 2, 5, 1, 3], inOrderTraversal(tree2), 3);

test.testForArrays([8, 4, 9, 2, 5, 1, 6, 3, 7], inOrderTraversal(tree3), 4);

test.endProblem();

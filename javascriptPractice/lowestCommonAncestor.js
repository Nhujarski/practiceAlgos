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
  Q. Given a binary tree, find the lowest common ancestor of two given nodes in the tree and return its value. A node can be its own ancestor.
  
  
  
  Examples:
  
  • Given a binary tree: 
  
                       10
  
                      /  \
  
                    5     12
  
                   / \    /    
  
                  3   6  11
  
  • For node1: 3, node2: 6 // returns 5
  
  • For node1: 11, node2: 6 // returns 10
  
  
  */
// TODO ancestor of binary tree
function lca(root, node1, node2) {
  if (!root) return null;
  if (root.value === node1.value || root.value === node2.value)
    return root.value;

  let left = lca(root.left, node1, node2);
  let right = lca(root.right, node1, node2);

  if (left && right) {
    return root.value;
  } else {
    return left || right;
  }
}

/*
   if not root:
              return None
          elif root.val == p.val or root.val == q.val:
              return root
          l = self.lowestCommonAncestor(root.left, p, q)
          r = self.lowestCommonAncestor(root.right, p, q)
          if l and r:
              return root
          else:
              return l or r
  */

// Test Cases

test.startProblem('Lowest Common Ancestor');

var tree1 = new TreeNode(
  10,
  new TreeNode(5, new TreeNode(3), new TreeNode(6)),
  new TreeNode(12, new TreeNode(11))
);

test.test(5, lca(tree1, tree1.left.left, tree1.left.right), 1);

test.test(10, lca(tree1, tree1.right.left, tree1.left.right), 2);

test.test(10, lca(tree1, tree1.left.right, tree1), 3);

test.test(12, lca(tree1, tree1.right, tree1.right.left), 4);

test.test(10, lca(tree1, tree1.left.right, tree1.right.left), 5);

test.endProblem();

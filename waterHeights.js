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
// TODO revisit water heights
/*
Q. Given an array of non-negative integers, where each integer represents the height of a pillar of width 1, the water will be poured over all the pillars. Return the surface area enclosed by these pillars from the front. Spilled water should be ignored. 



Example:

• Given an array: [1, 0, 2, 0, 3]

            |    -> "*" is  water trapped by the pillars

          |*|    -> "|" is the one unit of the height of a pillar

        |*|*|       

        -----

// returns 3
*/

const wa = (heights) => {
  const maxes = Array.from(heights).fill(0);

  let leftMax = 0;
  let rightMax = 0;

  /* Establish left-side maximum / iterate from left */
  for (let i = 0; i < heights.length; i++) {
    maxes[i] = leftMax;
    leftMax = Math.max(leftMax, heights[i]);
  }

  /* Define right-side maximum / iterate from right */
  for (let i = heights.length - 1; i > 0; i--) {
    const minHeight = Math.min(rightMax, maxes[i]);
    if (heights[i] < minHeight) {
      maxes[i] = minHeight - heights[i];
    } else {
      maxes[i] = 0;
    }
    rightMax = Math.max(rightMax, heights[i]);
  }

  /* Sum and return maxes */
  return maxes.reduce((partialSum, a) => partialSum + a, 0);
};

// Test Cases

test.startProblem('Water Area');

test.test(0, wa([]), 1);

test.test(0, wa([0, 0, 0, 0]), 2);

test.test(0, wa([0, 1, 0, 0]), 3);

test.test(0, wa([0, 1, 1, 0]), 4);

test.test(1, wa([0, 1, 0, 1]), 5);

test.test(4, wa([5, 0, 0, 0, 0, 1]), 6);

test.test(3, wa([1, 0, 2, 0, 3]), 7);

test.test(0, wa([1, 2, 3, 4, 5, 6, 7, 8]), 8);

test.endProblem();

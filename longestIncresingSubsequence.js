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
  Q. Given a non-empty array of integers, find its longest increasing subsequence.
  
  Note:
  • A subsequence of an array is a set of numbers that aren't necessarily adjacent in the array but in the same order as they appear. 
  
  Examples:
  • Given an array: [2, 3, -1] // returns [2, 3]
  • Given an array: [99, 1, 3, 4, 5, 100] // returns [1, 3, 4, 5, 100] 
  
  */
/*
  '''
  🔎 EXPLORE
  What are some other insightful & revealing test cases?
   
  
  🧠 BRAINSTORM
  What approaches could work?
  Algorithm 1:
  Time: O()
  Space: O()
   
  
  📆 PLAN
  Outline of algorithm #: 
   
  
  🛠️ IMPLEMENT
  Write your algorithm.
   
  
  🧪 VERIFY
  Run tests. Methodically debug & analyze issues.
  
  '''
  */
// MINE
// function longestIncreasingSubsequence(array) {
//   // Write your code here.
//   let sol = []
//   let subsequence = []
//   for ( let i = 0; i < array.length; i++) {
//     if(!subsequence.includes(array[i])) {
//       subsequence.push(array[i])
//       if(array[i] > array[i+1]) {
//         subsequence.push(array[i+1])
//       } else {
//         sol[i] = subsequence
//         subsequence = []
//       }
//     }
//   }

//   return
// }

// SOLUTION
const longestIncreasingSubsequence = (sequence) => {
  // Keep track of LIS at each index of input
  const lengths = Array(sequence.length).fill(1);

  // Iterate through array with two pointers, find LIS for each index of input
  for (let i = 0; i < sequence.length; i++) {
    for (let j = 0; j < i; j++) {
      if (sequence[j] < sequence[i]) {
        lengths[i] = Math.max(lengths[i], lengths[j] + 1);
      }
    }
  }
  console.log(Math.max(...lengths));
  // Return max of LIS array
  return Math.max(...lengths);
};

// Test Cases
test.startProblem('Longest Increasing Subsequence');
test.testForArrays([0], longestIncreasingSubsequence([0]), 1);
test.testForArrays([2, 3], longestIncreasingSubsequence([2, 3, -1]), 2);
// test.testForArrays([1, 3, 4, 5, 100], longestIncreasingSubsequence([99, 1, 3, 4, 5, 100]), 3)
// test.testForArrays([-23, 1, 3, 6, 9, 55], longestIncreasingSubsequence([3, 6, -23, 10, 8, 1, 3, 15, 6, 9, 55]), 4)
test.endProblem();

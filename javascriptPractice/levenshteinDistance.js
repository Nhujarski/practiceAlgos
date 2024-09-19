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
Q. Given two strings, return the minimum number of operations to edit the first string to get the second string. Three operations to consider are:
      1. insertion of a character
      2. deletion of a character
      3. substitution of a character for another 

Examples:
• Given strings: str1 = "abc", str2 = "ab" // returns 1
• Possible operations: delete "c"
• Given strings: str1 = "abc", str2 = "c" // returns 2
• Possible operations: delete "a", delete "b"

To solve the problem using dynamic programming, we need to find a way to break down the problem into smaller subproblems that are easier to solve. In this case, we can do this by considering each prefix of the input strings and computing the minimum number of edits needed to transform one prefix into the other.
Here's how the Python solution does this:
It initializes a two-dimensional array dp of size m+1 by n+1, where m and n are the lengths of the input strings a and b.
It sets the first row and column of the array to the numbers 0 through m and 0 through n, respectively. This represents the minimum number of edits needed to transform the empty string into any prefix of a or b.
It then iterates over the characters of a and b using two nested loops, starting from the second row and column. For each pair of characters, it does the following:
If the characters are the same, it sets the corresponding entry in the dp array to the value of the entry in the previous row and column (i.e., the minimum number of edits needed to transform the previous prefix of a into the previous prefix of b).
If the characters are different, it sets the corresponding entry in the dp array to the minimum of the following three values:
The value of the entry in the previous row (i.e., the minimum number of edits needed to transform the previous prefix of a into the current prefix of b, plus one extra edit to delete the last character of a).
The value of the entry in the previous column (i.e., the minimum number of edits needed to transform the current prefix of a into the previous prefix of b, plus one extra edit to insert the last character of b).
The value of the entry in the previous row and column (i.e., the minimum number of edits needed to transform the previous prefix of a into the previous prefix of b, plus one extra edit to substitute the last character of a with the last character of b).
After the loops, the function returns the value of the last entry in the dp array, which represents the minimum number of edits needed to transform a into b.

*/

function levenshteinDistance(a, b) {
  // Write your code here.
  const m = a.length;
  const n = b.length;
  const dp = [];

  for (let i = 0; i <= m; i++) {
    dp[i] = [i];
    for (let j = 1; j <= n; j++) {
      if (i === 0) {
        dp[i][j] = j;
      } else if (a[i - 1] === b[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;
      }
    }
  }

  return dp[m][n];
}

// Test Cases
test.startProblem('Levenshtein Distance');
test.test(1, levenshteinDistance('abc', 'adbc'), 1);
test.test(10, levenshteinDistance('formation', 'buildschool'), 2);
test.test(0, levenshteinDistance('', ''), 3);
test.test(0, levenshteinDistance('coding', 'coding'), 4);
test.test(5, levenshteinDistance('apple', 'pineApple'), 5);
test.test(10, levenshteinDistance('af12312fasfesf', 'afase1iu3wfuwi'), 6);
test.endProblem();

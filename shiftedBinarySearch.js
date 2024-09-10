/*
Q. Given a shifted sorted array of distinct integers and a target integer, determine if the array contains a target value by returning its index. Otherwise, return -1. Elements in the array are shifted by some amount (left or right).



Examples:

• Given an array: [6, 7, 1, 2, 3, 4, 5], target: 1 // returns: 2

• Given an array: [9, 15, 30, -33, 3, 7], target: 0 // returns: -1


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

function sbs(input, target) {
  if (!input) return input;
  let start = 0;
  let end = input.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (input[mid] === target) {
      return mid;
    }
    if (input[start] < input[mid]) {
      if (input[start] <= target && target <= input[mid]) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    } else {
      if (input[mid] <= target && target <= input[end]) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
  }
  return -1;
}

// Test Cases

test.startProblem('Shifted Binary Search');

test.test(8, sbs([43, 51, 73, 78, 79, 0, 1, 3, 13, 35], 13), 1);

test.test(2, sbs([7, 26, 110, 2], 110), 2);

test.test(5, sbs([45, 60, 69, 74, 75, 0, 1, 3, 33, 39], 0), 3);

test.test(-1, sbs([30, 37, 44, 67, 68, 75, 77, 268, 0, 1, 19], 269), 4);

test.test(0, sbs([30, 37, 44, 67, 68, 75, 77, 268, 0, 1, 19], 30), 5);

test.endProblem();

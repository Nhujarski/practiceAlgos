// Prompt
// Q. Given an unsorted array, perform selection sort in ascending order.

// Examples:
// • Given an array: [1] // returns [1]
// • Given an array: [3, 1, 2, 4] // returns [1, 2, 3, 4]

function selectionSort(array) {
  if (array.length === 0 || array.length === 1) return array;
  for (let i = 0; i < array.length; i++) {
    let min = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
    }
    if (min !== i) {
      let temp = array[i];
      array[i] = array[min];
      array[min] = temp;
    }
  }
  return array;
}

// Test Cases
// console.log(selectionSort([])) // []
// console.log(selectionSort([1])) // [1]
// console.log(selectionSort([3, 1, 2, 4])) // [1, 2, 3, 4]
// console.log(selectionSort([-10, 1, 3, 8, -13, 32, 9, 5])) // [-13, -10, 1, 3, 5, 8, 9, 32]

//  Prompt
// Given an array of distinct integers arr, find all pairs of elements with the minimum absolute difference of any two elements.
// Return a list of pairs in ascending order(with respect to pairs), each pair [a, b] follows

const minimumAbsDifference = (arr) => {
  let sol = [];
  let sorted = selectionSort(arr);
  let minDiff = Infinity;
  let curDiff;

  for (let i = 0; i < sorted.length - 1; i++) {
    if (sorted[i] > sorted[i + 1]) {
      curDiff = sorted[i] - sorted[i + 1];
    } else {
      curDiff = sorted[i + 1] - sorted[i];
    }

    if (curDiff > minDiff) {
      break;
    } else if (curDiff === minDiff) {
      sol.push([sorted[i], sorted[i + 1]]);
    } else if (curDiff < minDiff) {
      minDiff = curDiff;
      sol.pop();
      sol.push([sorted[i], sorted[i + 1]]);
    }
  }
  return sol;
};

console.log('expected: [[1,3]]', minimumAbsDifference([1, 3, 6, 10, 15]));
console.log(
  'expected: [[1,2],[2,3],[3,4]]',
  minimumAbsDifference([4, 2, 1, 3])
);
console.log('expected >>> [[0,1],[4,3]]', minimumAbsDifference([0, 1, 4, 3]));

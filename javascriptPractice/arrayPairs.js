// Finding all pairs is one of the basic patterns that frequently comes up, especially in brute force algorithms. Understanding and proficiently applying this pattern will often jump-start progress on other problems, even if in the end there may be a way to do something more efficiently.
// To illustrate this pattern, write a function that takes an array and prints out all of the pairs of elements from the array.

const printAllPairs = (arr) => {
  if (arr.length === 0 || arr.length === 1) return console.log('no output');
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      console.log(`(${arr[i]}, ${arr[j]})`);
    }
  }
};

printAllPairs([]);

// no output

printAllPairs([5]);

// no output

// printAllPairs([1, 2, 3, 4, 5])

// (1, 2)
// (1, 3)
// (1, 4)
// (1, 5)
// (2, 3)
// (2, 4)
// (2, 5)
// (3, 4)
// (3, 5)
// (4, 5)

printAllPairs([5, 8, 5, 8]);

// (5, 8)
// (5, 5)
// (5, 8)
// (8, 5)
// (8, 8)
// (5, 8)

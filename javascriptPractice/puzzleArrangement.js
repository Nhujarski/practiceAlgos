/* 
Details
In this task, we will practice working through a Hash Table / Hash Set problem.

Prompt
Given an array of integers representing puzzle pieces and an integer targetSize, return the number of arrangements whose size sums to targetSize.
An arrangement is a contiguous, non-empty sequence of pieces within an array.


*/

// Function Signature
function puzzleArrangements(pieces, targetSize) {
  let numArrangements = 0;
  let currentSize = 0;

  const sums = new Map();
  sums.set(0, 1);

  for (const pieceSize of pieces) {
    currentSize += pieceSize;

    if (sums.has(currentSize - targetSize))
      numArrangements += sums.get(currentSize - targetSize);

    sums.set(currentSize, (sums.get(currentSize) || 0) + 1);
  }

  return numArrangements;
}

console.table([
  puzzleArrangements([1, 1, 1], 2) === 2,
  puzzleArrangements([1, 1, 1], 1) === 3,
  puzzleArrangements([1, 2, 3], 3) === 2,
  puzzleArrangements([1, 2, 3], 5) === 1,
  puzzleArrangements([1, 2, 3], 6) === 1,
  puzzleArrangements([1, 2, 3], 10) === 0,
  puzzleArrangements([5, 3, 2, 4, 1], 8) === 1,
  puzzleArrangements([5, 3, 2, 4, 1], 7) === 1,
  puzzleArrangements([5, 3, 1, 4], 8) === 2,
  puzzleArrangements([5, 3, 1, 4], 7) === 0,
  puzzleArrangements([5, 2, 1, 2, 4], 7) === 2,
  puzzleArrangements([5, 3, 2, 4, 1], 14) === 1,
  puzzleArrangements([5, 3, 2, 4, 1], 15) === 1,
  puzzleArrangements([5, 3, 2, 4, 1], 16) === 0,
  puzzleArrangements([], 0) === 0,
  puzzleArrangements([], 2) === 0,
]);

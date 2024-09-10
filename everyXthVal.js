// Prompt
// Given an array and a number X, return an array containing every *X*th number in the input array.

function everyXth(input, x) {
  if (input === [] || input.length < x) return [];
  if (input.length === 1) return input;

  let sol = [];

  for (let i = x - 1; i < input.length; i += x) {
    sol.push(input[i]);
  }
  return sol;
}

console.log(JSON.stringify(everyXth([], 1000)) === JSON.stringify([]));

console.log(JSON.stringify(everyXth([5], 1)) === JSON.stringify([5]));

console.log(JSON.stringify(everyXth([5], 2)) === JSON.stringify([]));

console.log(
  JSON.stringify(everyXth([1, 2, 3, 4, 5, 6], 2)) === JSON.stringify([2, 4, 6])
);

console.log(
  JSON.stringify(everyXth([1, 2, 3, 4, 5, 6], 3)) === JSON.stringify([3, 6])
);

console.log(
  JSON.stringify(everyXth([1, 2, 3, 4, 10, 6], 5)) === JSON.stringify([10])
);

console.log(
  JSON.stringify(everyXth([1, 2, 3, 4, 10, 6], 8)) === JSON.stringify([])
);

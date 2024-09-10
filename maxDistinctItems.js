function maxDistinctItems(n, arr, k) {
  // Sort the array in ascending order of costs
  arr.sort((a, b) => a - b);

  let distinctItems = arr.length;
  let currentCost = 0;

  // Iterate through each item
  for (let i = 1; i <= n; i++) {
    // Check if the item is not already bought
    if (!arr.includes(i)) {
      currentCost += i;

      // Check if the current cost is within the budget
      if (currentCost <= k) {
        distinctItems++;
      } else {
        break;
      }
    }
  }

  return distinctItems;
}

// Example usage:
let n = 10;
let arr = [1, 3, 8];
let k = 10;

let result = maxDistinctItems(n, arr, k);
console.log({ result }); // Output: 5

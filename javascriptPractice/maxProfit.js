// Prompt
// Given an array of floats that represents the movement in the share price of a company over time, design an algorithm that determines the maximum profit that could have been made by buying and then selling a single share over the time period. The buy must occur before the sell.

function max_profit(prices) {
  if (prices.length === 0) return prices;
  let min = Infinity;
  let max = 0;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] - min > max) {
      max = prices[i] - min;
    }
    if (prices[i] < min) {
      min = prices[i];
    }
  }
  return max;
}

console.log('expected 5, output:  >>> ', max_profit([7, 1, 5, 3, 6, 4]));
console.log('expected [] >>> ', max_profit([]));
console.log('expected 0, output:  >>> ', max_profit([7, 6, 4, 3, 1]));

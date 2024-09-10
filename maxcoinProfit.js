// TODO understand Max Profit Solution

/*
'''
In front of you is a row of N coins, with values v1, v2, ..., vn.

You are asked to play the following game. You and an opponent take turns choosing either the first or last coin from the row, removing it from the row, and receiving the value of the coin.

Write a program that returns the maximum amount of money you can win with certainty, if you move first, assuming your opponent plays optimally.
 

EXAMPLE(S)
[10, 24, 5, 9] => 33
 


'''
*/
// FUNCTION SIGNATURE
function maxProfit(coins) {}

// Recursive / Backtracking Solution
// This solution is not good because it is exponential runtime. Use dynamic programming to remember the solution to the subproblems.
function maxProfit(coins) {
  function helper(start, count) {
    if (count === 1) {
      return coins[start];
    } else if (count === 2) {
      return Math.max(coins[start], coins[start + 1]);
    }

    return Math.max(
      coins[start] +
        Math.min(helper(start + 1, count - 2), helper(start + 2, count - 2)),
      coins[start + count - 1] +
        Math.min(helper(start, count - 2), helper(start + 1, count - 2))
    );
  }

  return helper(0, coins.length);
}

console.log(maxProfit([10, 24, 5, 9])); // => 33

/* 
 This is a solution to a problem that involves maximizing profit by selecting a subset of coins. Let's break it down step by step.

The function `maxProfit(coins)` takes an array of coins as input and returns the maximum profit that can be obtained.

Inside the function, there is a nested helper function `helper(start, count)` that is recursively called to compute the maximum profit.

The `start` parameter represents the starting index of the current subarray of coins being considered, and the `count` parameter represents the number of coins in the subarray.

The base cases are as follows:

- If `count` is equal to 1, it means there is only one coin in the subarray. In this case, the function returns the value of that coin.
- If `count` is equal to 2, there are two coins in the subarray. The function returns the maximum value between the two coins.

For subarrays with more than two coins, the function calculates the maximum profit by considering two possibilities:

1. The first coin is selected, and the remaining subarray is recursively processed. The maximum profit is computed as the sum of the value of the first coin and the minimum between the profits obtained from the next two subarrays: `helper(start + 1, count - 2)` and `helper(start + 2, count - 2)`.

2. The last coin is selected, and the remaining subarray is recursively processed. The maximum profit is computed as the sum of the value of the last coin and the minimum between the profits obtained from the previous two subarrays: `helper(start, count - 2)` and `helper(start + 1, count - 2)`.

The function then returns the maximum value obtained from the two possibilities using `Math.max()`.

To start the computation, the `helper` function is initially called with `start` set to 0 (the beginning of the coins array) and `count` set to the length of the coins array.

By recursively considering different subarrays and selecting the maximum profit at each step, the function eventually computes and returns the maximum possible profit that can be obtained from the given set of coins.

Note that the solution assumes that `coins` is a valid array containing numeric values representing the values of the coins.


The time complexity of the provided code is exponential, specifically O(2^n), where n is the number of coins in the input array.

The recursive function helper is called recursively with two different subproblems: one where the first coin is selected, and another where the last coin is selected. In each recursive call, the function is called again twice with smaller subproblems. This branching factor of 2^n results in an exponential time complexity.

The main factors contributing to the exponential time complexity are:

The recursive function is called twice in each recursive call, resulting in a branching factor of 2.
The function is recursively called with smaller subproblems, reducing the problem size by 2 in each step.
The recursion continues until the base cases are reached, where the count variable is either 1 or 2.
As the number of coins increases, the number of recursive calls grows exponentially, leading to a significant increase in the overall running time of the algorithm. This can become inefficient for large inputs.
*/

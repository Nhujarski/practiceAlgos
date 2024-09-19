//TODO understand knapsack problem
/*
'''
0-1 Knapsack

Given a set of items, each with a weight and a value, determine the number of each item to include in a collection so that the total weight is less than or equal to a given limit and the total value is as large as possible. You may take either 0 or 1 of each item.
 


FUNCTION SIGNATURE
func knapsack(items: [Int: Int], limit: Int) -> Int
i = weights, j = limit

if j < i
    memo[i][j] = memo[i - 1][j] # 10
else
    memo[i][j] = max(
            value[i] + memo[i - 1][j - i], # 10 + 0
            memo[i - 1][j] # 11
        )
weight 1 2 3 5
val    4 5 6 10
limit 6
EXAMPLE(S)
{1: 4, 2: 5, 3: 6, 5: 10}, 5 => 11
{1: 4, 2: 5, 3: 6, 5: 10}, 6 => 15

   0 1 2 3  4  5  6
 0 0 0 0 0  0  0  0
 1 0 4 4 4  4  4  4
 2 0 4 5 9  9  9  9
 3 0 4 5 9 10 11 15
 5 0 4 5 9 10 11 15
 
example 2: 
items wt: [1,3,4,5] val: [1,4,5,7]
example as 2D matrix
total cols = total weight or limit + 1
total rows =  weights or items.length

        current wt
val|wt  0 1 2 3 4 5 6 7 
1    1  0 1 1 1 1 1 1 1
4    3  0 1 1 4 5 5 5 5
5    4  0 1 1 4 5 6 6 9
7    5  0 1 1 4 5 7 8 9

formula = Math.max(current val[wt] + (current wt -  wt))
look for item at t[0][current wt -  wt]
Math.max(7 + 1,9) = 9

FUNCTION SIGNATURE
func knapsack(items: [Int: Int], limit: Int) -> Int 
'''
*/

function knapsack(items, weights, limit) {
  let memo = new Array(weights.length + 1)
    .fill()
    .map(() => new Array(limit + 1).fill(0));
  for (let i = 1; i < weights.length + 1; i++) {
    let weight = weights[i - 1];

    for (let j = 1; j < limit + 1; j++) {
      if (j < weight) {
        memo[i][j] = memo[i - 1][j];
      } else {
        memo[i][j] = Math.max(
          items[i - 1] + memo[i - 1][j - weight],
          memo[i - 1][j]
        );
      }
    }
    console.log(memo);
  }

  return memo[weights.length][limit];
}

// console.log(knapsack([4, 5, 6, 10], [1, 2, 3, 5], 5) === 11);

console.log(knapsack([99], [3], 3) === 99);
console.log();
// console.log(knapsack([99], [10], 3) === 0);
// console.log(knapsack([99], [3], 10) === 99);
// console.log(knapsack([6, 9, 13], [1, 2, 3], 5) === 22);
// console.log(knapsack([6, 9, 13], [1, 2, 3], 3) === 15);
// console.log(knapsack([6, 10, 12, 15, 1], [1, 2, 3, 4, 5], 10) === 43);
// console.log(knapsack([20, 5, 10, 40, 15, 25], [1, 2, 3, 8, 7, 4], 10) === 60);
// console.log(knapsack([4, 5, 6, 10], [1, 2, 3, 5], 5) === 11);
// console.log(knapsack([4, 5, 6, 10], [1, 2, 3, 5], 6) === 15);
// console.log(knapsack([4, 5, 6, 10], [1, 2, 10, 5], 5) == 10);
// console.log(knapsack([4, 5, 6, 10], [20, 2, 10, 5], 5) == 10);
// console.log(knapsack([20, 5, 10, 40, 15, 25], [1, 2, 3, 8, 7, 4], 9) === 60);
/* 
REFACTOR THIS
def knapsack(items, weights, limit):
    memo = [[0 for i in range(limit + 1)] for j in range(len(weights) + 1)]
    for i in range(1, len(weights) + 1):
        weight = weights[i - 1]
        for j in range(1, limit + 1):
            if j < weight:
                memo[i][j] = memo[i - 1][j] # 10
            else:
                memo[i][j] = max(
                        items[i - 1] + memo[i - 1][j - weight], # 10 + 0
                        memo[i - 1][j] # 11
                )
    return memo[len(weights)][limit]
*/

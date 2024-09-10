/*
Problem

Given an array of length n, consolidate the sum created by adding index pairs until there's only a single index.

Target runtime and space complexity:
Time: O(n2) to run through parts of the n length array n times
Space: O(n) if it is done in place, otherwise O(n2) when creating new arrays
Examples:
[1, 2, 3, 4, 5] => 48

Explanation:
The next array would be [3, 5, 7, 9] because [1+2, 2+3, 3+4, 4+5]
The next array would be [8, 12, 16] because [3+5, 5+7, 7+9]
The next array would be [20, 28] because [8+12, 12+16]
The final answer would be [48] because [20+28] and there are not enough operands to add

Here's our explanation of the solution:
Create an output array and iterate through the input, summing pairs. Call the function recursively on the output. The base case is when the array is length 1.

Approach:

//write approach Here

*/

// Function Signature:
function reduceSum(input) {
  if (input.length == 0) {
    return 0;
  }
  if (input.length == 1) {
    return input[0];
  }
  let output = [];
  for (let i = 0; i < input.length - 1; i++) {
    output.push(input[i] + input[i + 1]);
  }
  // return helper(input)
  return reduceSum(output);
}

// Function Signature:
function reduceSum(input) {
  if (input.length == 0) {
    return 0;
  }
  if (input.length == 1) {
    return input[0];
  }
  let output = [];

  function helper(input) {
    if (input.length === 1) return;
    output.push(input[0] + input[1]);
    return helper(input.slice(1));
  }
  helper(input);
  return reduceSum(output);
}

console.log(reduceSum([1, 2, 3, 4, 5]) == 48);
console.log(reduceSum([5]) == 5);
console.log(reduceSum([]) == 0);
console.log(reduceSum([1, 3, 5]) == 12);
console.log(reduceSum([-5, 5]) == 0);
console.log(reduceSum([-5, 5, -5, 5]) == 0);
console.log(reduceSum([-5, 5, 5, -5]) == 20);

/*
  
       #edge case
      if len(input) == 1:
          return input[0]
  
      #edge case 
      if len(input) == 0:
          return 0
      
      output = []
  
      def helper(input):
          if len(input) == 1:
              return
              
          output.append(input[0] + input[1]) )
          return helper(input[1:]) 
  
      helper(input)
  
      return reduceSum(output)
      
  
  
  print(reduceSum([5])) #5
  print(reduceSum([1,3,5])) # 12
  # [1,3,5]
  # [4,8]
  #
  print(reduceSum([])) #0
  print(reduceSum([1,2,3,4,5])) #48
  
  */

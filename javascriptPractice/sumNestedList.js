// TODO come back and learn to flatten list

/* 
Prompt
Given a nested array where each element may be 1) an integer or 2) an array, whose elements themselves may be integers or further arrays, compute the sum of all the integers in the nested array.
What is the shape or pattern of this nested array structure?
As a follow on, modify this code to multiply each list sum by it's depth in the nesting. [1, 2] returns 3 since (1 + 2) is only inside of one array. But [1, [2, 3]] now evaluates to 11 because the (2 + 3) is at depth 2, so 5 * 2 is 10, then add the one for 11.
*/

function sumNestedList(list) {
  let sum = 0;
  for (let i = 0; i < list.length; i++) {
    if (Array.isArray(list[i])) {
      sum += sumNestedList(list[i]);
    } else {
      sum += list[i];
    }
  }
  return sum;
}

console.log(sumNestedList([1, 2, 3]) == 6);
console.log(sumNestedList([1, [1, 2, 3], 3]) == 10);
console.log(sumNestedList([1, [1, [1, [1, [1]]]]]) == 5);

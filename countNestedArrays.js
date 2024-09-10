/*
'''
Count Nested Arrays

Given a nested array where each element may be 1) an integer or 2) an array, whose elements themselves may be integers or further arrays, count the total number of arrays.

What is the shape or pattern of this nested array structure? There can be empty lists but never None/null.
 

EXAMPLE(S)
countArrays([1, 2, 3]) == 1
countArrays([1, [1, 2, 3], 3]) == 2
countArrays([1, [1, [1, [1, [1]]]]]) == 5
countArrays([]) == 1
 

FUNCTION SIGNATURE
function countArrays(array) {
def countArrays(nestedList: list) -> int:

Time: O(n), where n is the total non-array elements in the arrays

Space: O(d), where d is the depth of the deepest nesting, since a stack frame is needed for each recursive call.

Approach:
let count = 1;
function helper(arr)
base case: when we reach closing bracket or arr.length return 
loop through arr 
check to see if element at arr[i] is an array or int;
if it is an array, increment count and call helper()


main function call helper(array)
return count
*/

/*

Time: O(n), where n is the total non-array elements in the arrays
Space: O(d), where d is the depth of the deepest nesting, since a stack frame is needed for each recursive call.

*/

function countArrays(array) {
  if (array.length === 0) return 1;
  let count = 1;

  function helper(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        count++;
        helper(arr[i]);
      }
    }
  }
  helper(array, 0);
  return count;
}

function countArrays(array) {
  if (array == null) return 0;

  let sumTotal = 1; // always count itself

  array.forEach((element) => {
    if (Array.isArray(element)) sumTotal += countArrays(element);
  });

  return sumTotal;
}

console.log(countArrays([1, 2, 3]) == 1);
console.log(countArrays([1, [1, 2, 3], 3]) == 2);
console.log(countArrays([1, [1, [1, [1, [1]]]]]) == 5);
console.log(countArrays([1, [2, 2], [3, 3], [4, 4], 5]) == 4);
console.log(countArrays([1, [2, [], 2], [3, [6], 3], [4, 4], 5]) == 6);
console.log(countArrays([[[[[[[[[[[[[]]]]]]]]]]]]]) == 13);
console.log(countArrays([]) == 1);
console.log(countArrays([[]]) == 2);
console.log(countArrays([[], [], []]) == 4);
// console.log(countArrays(null) == 0)

/* 
  . Given a linked list, sum all elements in the list.
  
  Examples:
  • Given a linked list: 1 ➞ 4 ➞ 5 // returns 10
  • Given a linked list: 1 // returns 1
  */

class ListNode {
  constructor(value = 0, next = null) {
    this.value = value;
    this.next = next;
  }
}

function sum(node) {
  if (!node) return 0;
  return node.value + sum(node.next);
}

// Test Cases
var LL1 = new ListNode(1, new ListNode(4, new ListNode(5)));
console.log(sum(null)); // 0
console.log(sum(LL1)); // 10
console.log(sum(new ListNode(1))); // 1

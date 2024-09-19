/* 
Prompt
Given an array, return the first element is repeated if you were to traverse the array from left to right.

Expected Runtime
Time: O(N) to iterate through the length N list optimally otherwise O(n2) to loop through the length N array for each N index
Space: O(N) to track the array elements

*/

// Function Signature
function firstRepeatedElement(input) {
  let newSet = new Set();

  for (let num of input) {
    if (!newSet.has(num)) {
      newSet.add(num);
    } else {
      return num;
    }
  }
  return null;
}

console.log(firstRepeatedElement([]) == null);
console.log(firstRepeatedElement([5]) == null);
console.log(firstRepeatedElement([5, 5]) == 5);
console.log(firstRepeatedElement([5, 10]) == null);
console.log(firstRepeatedElement([1, 2, 3, 4]) == null);
console.log(firstRepeatedElement([1, 2, 1, 3]) == 1);
console.log(firstRepeatedElement([7, 7, 1, 1]) == 7);
console.log(firstRepeatedElement([2, 8, 8, 8]) == 8);
console.log(firstRepeatedElement([1, 2, 3, 2, 1, 1]) == 2);

/* 
In this task, we will practice working through a recursion problem.
Prompt
We have a number of bunnies, each with two big floppy ears. We want to compute the total number of ears across all the bunnies recursively, without loops or multiplication.

Expected Runtime
Time: O(n) where n is the number of bunnies
Space: O(n) where n is the number of stack frames because one is created for each bunny
Examples
print(bunnyEars(3) == 6)
print(bunnyEars(5) == 10)

//Approach
easy way and not right is to return bunnies * 2
recursively return 2 + bunnyEars(bunnies -1) 
base case if no bunnies return 0
*/

// Function Signature
function bunnyEars(bunnies) {
  if (!bunnies) return 0;

  return 2 + bunnyEars(bunnies - 1);
}

console.log(bunnyEars(12) == 24);
console.log(bunnyEars(10) == 20);
console.log(bunnyEars(5) == 10);
console.log(bunnyEars(3) == 6);
console.log(bunnyEars(2) == 4);
console.log(bunnyEars(1) == 2);
console.log(bunnyEars(0) == 0);

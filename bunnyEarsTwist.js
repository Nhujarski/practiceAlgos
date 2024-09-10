/* 
Details
In this task, we will practice working through a recursion problem.
Prompt
We have bunnies standing in a line, numbered 1, 2, ... The odd bunnies (1, 3, ..) have the usual 2 ears. The even bunnies (2, 4, ..) we'll say have 3 ears because they each have a raised foot. Recursively return the number of "ears" in the bunny line 1, 2, ... n (without loops or multiplication).

Expected Runtime
Time: O(n) where n is the number of bunnies
Space: O(n) where n is the number of stack frames because one is created for each bunny
Examples
print(bunnyEarsTwist(2) = 5)
print(bunnyEarsTwist(3) = 7)
print(bunnyEarsTwist(5) = 12)

// wanna take the number and - 1 
if bunnies % 2 === 0 its even so we increment by 3 else its odd so increment by 2

*/

// Function Signature
function bunnyEarsTwist(bunnies) {
  if (bunnies === 0) return 0;

  if (bunnies % 2 === 0) {
    return 3 + bunnyEarsTwist(bunnies - 1);
  } else {
    return 2 + bunnyEarsTwist(bunnies - 1);
  }
}

console.log(bunnyEarsTwist(12) == 30);
console.log(bunnyEarsTwist(10) == 25);
console.log(bunnyEarsTwist(5) == 12);
console.log(bunnyEarsTwist(3) == 7);
console.log(bunnyEarsTwist(2) == 5);
console.log(bunnyEarsTwist(1) == 2);
console.log(bunnyEarsTwist(0) == 0);

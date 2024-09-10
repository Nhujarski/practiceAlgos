// TODO review flapjacks

/* 
Prompt
A restaurant has a dedicated cook making flapjacks (pancakes) in the mornings. First, they're removed from the griddle and added to a stack as they're ready. Then, servers remove them from the stack to serve customers. The manager wants to serve fresh flapjacks, meaning they never want the stack to be taller than 4. At the same time, they want the stack never to be empty so that no orders have to wait for pancakes.
Write a function that takes a series of numbers representing flapjacks being added and removed from the stack (positive for fresh off the grill, negative for an order being served). Return a tuple (or pair), where the first value is true or false to reflect if the manager's constraints are always satisfied, and the second value is the max height of the stack.


*/

// Function Signature
function goldilockFlapjacks(pancakes) {
  let isValid = true;
  let maxHeight = 0;
  let currHeight = 0;

  for (let i = 0; i < pancakes.length; i++) {
    currHeight = currHeight + pancakes[i];
    if (currHeight <= 0) {
      isValid = false;
    }
    maxHeight = Math.max(maxHeight, currHeight);
  }
  if (maxHeight > 4) {
    isValid = false;
  }
  return [isValid, maxHeight];
}

console.table([
  JSON.stringify(goldilockFlapjacks([2])) === JSON.stringify([true, 2]),
  JSON.stringify(goldilockFlapjacks([-2])) === JSON.stringify([false, 0]),
  JSON.stringify(goldilockFlapjacks([4])) === JSON.stringify([true, 4]),
  JSON.stringify(goldilockFlapjacks([5])) === JSON.stringify([false, 5]),
  JSON.stringify(goldilockFlapjacks([4, -2, 1, -2])) ===
    JSON.stringify([true, 4]),
  JSON.stringify(goldilockFlapjacks([2, -1, 1, -1, 1])) ===
    JSON.stringify([true, 2]),
  JSON.stringify(goldilockFlapjacks([4, -2, 1, -2, 4])) ===
    JSON.stringify([false, 5]),
  JSON.stringify(goldilockFlapjacks([4, -2, 1, -2, -4])) ===
    JSON.stringify([false, 4]),
]);

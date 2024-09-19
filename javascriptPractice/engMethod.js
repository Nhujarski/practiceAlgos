// TODO bubble sort

/* Engineering Method Bootamp

https://coda.io/d/Mentor-Handbook_dCCsAkrAoaJ/Engineering-Method_supPP

1. Thoroughly understand the problem
 - conditions? Constraints?
 - Basic requirements
 - inputs/outputs
 - edge cases
2. Identify and explore possible solutions
3. Choose a solution (and make a plan)
4. Build it!
5. Test

Problem:
Given an array of 0s, 1s and 2s, sort them and return a sorted version of the array.

Questions:
- Empty? Sure.
- Dsc or asc? Don't care.
- In place or new array? In place!
- duplicates end up next to each other

Possible solutions:
- two pointer O(n), constant space
- two pass approach: move all the 0s, then move all the 1s (this is bubble sort!!) O(n)
- classic sorting algorithms (quicksort, mergesort, selection sort, insertion sort) O(n^2) or O(nlog)
- count the number of occurances of each value in a hashtable and then write them back into the list O(n), also constance space (only three values!!!)
- call a built in sort() O(nlogn)

*/

// Utilities DO NOT DELETE

class LLNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class BTNode {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function list2str(head) {
  const parts = [];

  while (head) {
    parts.push(head.value);
    head = head.next;
  }

  return `[${parts.join(' -> ')}]`;
}

// *******************************************

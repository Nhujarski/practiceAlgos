/* 
Construct a zigzag tree from an array (alternating right and left child), starting with right.

Example:
Input: [1, 2, 3, 4, 5]
Output:
          1
            \
              2
             /
          3
            \
              4
             /
          5

*/
// Binary trees are already defined with this interface:
class Tree {
  constructor(value = 0, leftChild = null, rightChild = null) {
    this.value = value;
    this.left = leftChild;
    this.right = rightChild;
  }
}

function solution(array) {
  let head = new Tree(array[0]);
  if (array.length === 1) return head;
  console.log(array[0]);
  let curr = head;
  for (let i = 1; i < array.length; i++) {
    if (array[i] > curr.value) {
      curr.right = new Tree(array[i]);
    } else {
      curr.left = new Tree(array[i]);
    }
    curr = curr.next;
  }
  return head;
}

console.log(solution([1]));
// console.log(solution([1, 2, 3]));

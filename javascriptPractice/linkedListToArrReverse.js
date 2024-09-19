// Prompt
// Given a linked list, return an array with all the elements in reverse.

class Node {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

function createLLInReverse(node) {
  let cur = node;
  let reverse = [];
  while (cur) {
    reverse.unshift(cur.val);
    cur = cur.next;
  }
  return reverse;
}
// Test Cases

let head = new Node(4, new Node(9, new Node(14)));
console.log(
  JSON.stringify(createLLInReverse(head)) === JSON.stringify([14, 9, 4])
);

// 5 -> 10 -> 15 -> 20
head = new Node(5, new Node(10, new Node(15, new Node(20))));
console.log(
  JSON.stringify(createLLInReverse(head)) === JSON.stringify([20, 15, 10, 5])
);

// 5
head = new Node(5);
console.log(JSON.stringify(createLLInReverse(head)) === JSON.stringify([5]));

// 5 -> 10
head = new Node(5, new Node(10));
console.log(
  JSON.stringify(createLLInReverse(head)) === JSON.stringify([10, 5])
);

// 5 -> 5 -> 10 -> 10
head = new Node(5, new Node(5, new Node(10, new Node(10))));
console.log(
  JSON.stringify(createLLInReverse(head)) === JSON.stringify([10, 10, 5, 5])
);

// 5 -> 5 -> 5
head = new Node(5, new Node(5, new Node(5)));
console.log(
  JSON.stringify(createLLInReverse(head)) === JSON.stringify([5, 5, 5])
);

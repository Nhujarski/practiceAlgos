// Prompt
// Given a linked list, return the second to last element's value.

class Node {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

function secondToLast(head) {
  if (head === null || head.next === null) return null;
  let cur = head;

  while (cur.next) {
    if (cur.next.next === null) {
      return cur.val;
    }
    cur = cur.next;
  }
}

var LL1 = new Node(1, new Node(4, new Node(5)));
let L2 = new Node(2);
var LL3 = new Node(1, new Node(4, new Node(5, new Node(7))));

console.log('expected: 4, output:  >>>', secondToLast(LL1));
console.log('expected: null, output:  >>> ', secondToLast(L2));
console.log('expected: null, output:  >>> ', secondToLast(null));
console.log('expected: 5, output:  >>>', secondToLast(LL3));

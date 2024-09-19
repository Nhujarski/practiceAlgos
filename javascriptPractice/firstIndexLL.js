// Prompt
// Given a linked list and a target value, return the index of the first occurrence of that value in the linked list. The index should be zero-indexed.

class Node {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

function firstIndexInLL(node, target) {
  if (node === null) return -1;
  let index = 0;
  let cur = node;

  while (cur) {
    // console.log('cur val >>> ', cur.val)
    if (cur.val !== target) {
      index += 1;
      // console.log('index in if >>> ',index)
    } else {
      // console.log('index in else >>>> ', index)
      return index;
    }

    cur = cur.next;
  }
  return -1;
}

let list1 = new Node(1, new Node(2, new Node(3, new Node(4, new Node(5)))));
let list2 = new Node(2);
let list3 = new Node(
  -1,
  new Node(-2, new Node(-3, new Node(-4, new Node(-5))))
);
let list4 = new Node(1, new Node(2, new Node(3, new Node(2, new Node(1)))));

console.log(firstIndexInLL(null, 12) === -1);
console.log(firstIndexInLL(list1, 9) === -1);
console.log(firstIndexInLL(list1, 3) === 2);
console.log(firstIndexInLL(list2, 2) === 0);
console.log(firstIndexInLL(list2, 1) === -1);
console.log(firstIndexInLL(list3, -2) === 1);
console.log(firstIndexInLL(list4, 2) === 1);
console.log(firstIndexInLL(list4, 1) === 0);

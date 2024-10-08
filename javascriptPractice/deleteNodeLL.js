/*
Q. Given a sorted linked list of unique integers, remove a node with the target value from the list.



Examples:

• Given a linked list: -1 ➞ 1 ➞ 3 ➞ 4, target: 1 // returns -1 ➞ 3 ➞ 4

• Given a linked list: 5, target: 3 // returns 5
 */

class ListNode {
  constructor(value = 0, next = null) {
    this.value = value;

    this.next = next;
  }
}

function arrayify(head) {
  let ptr = head;

  var array = [];

  while (ptr != null) {
    array.push(ptr.value);

    ptr = ptr.next;
  }

  return array;
}

function remove(head, target) {
  if (!head) return new ListNode(target);
  let prev = head;

  while (prev) {
    let curr = prev.next;
    if (prev.value === target) {
      head = prev.next;
    }
    if (curr) {
      if (curr.value === target) {
        prev.next = curr.next;
      }
    }
    prev = prev.next;
  }
  return head;
}

function remove(node, value) {
  if (!node) return node;

  const sentinel = new ListNode(0, node);

  let curr = sentinel;

  while (curr && curr.next) {
    if (curr.next.value === value) curr.next = curr.next.next;
    else curr = curr.next;
  }

  return sentinel.next;
}

// Test Cases

var LL1 = new ListNode(-1, new ListNode(1, new ListNode(3, new ListNode(4))));

console.log(arrayify(remove(LL1, 1))); // [-1, 3, 4]

console.log(arrayify(remove(LL1, -1))); // [3, 4]

var LL1 = remove(LL1, -1); // Notice we expect this one to return a new head!

console.log(arrayify(remove(LL1, 4))); // [3]

console.log(arrayify(remove(LL1, 5))); // [3]

console.log(arrayify(remove(new ListNode(1), 1))); // []

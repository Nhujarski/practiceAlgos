// Prompt
// Given integers X and Y, return the head of a linked list with X nodes with value Y

class Node {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

function toString(head) {
  if (!head) return '<empty>';

  let parts = [];
  while (head) {
    parts.push(head.val);
    head = head.next;
  }

  return parts.join(' -> ');
}

function createLL(count, value) {
  if (count === 0) return null;
  let head = new Node(value);
  let curr = head;

  while (count > 0) {
    curr.next = new Node(value);
    curr = curr.next;
    count--;
  }

  console.log(head.next);
  return head.next;
}

console.table([
  toString(createLL(0, 1000)) === '<empty>',
  toString(createLL(1, 999)) === '999',
  toString(createLL(2, 88)) === '88 -> 88',
  toString(createLL(3, 4)) === '4 -> 4 -> 4',
  toString(createLL(5, 3)) === '3 -> 3 -> 3 -> 3 -> 3',
  toString(createLL(6, 6)) === '6 -> 6 -> 6 -> 6 -> 6 -> 6',
  toString(createLL(2, -10)) === '-10 -> -10',
  toString(createLL(3, 0)) === '0 -> 0 -> 0',
]);

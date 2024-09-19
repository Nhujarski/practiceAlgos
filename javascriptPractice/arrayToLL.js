// Prompt
// Given an array containing numbers, convert this to a singly linked list and return the head of the list.

class Node {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

function toString(head) {
  if (!head) {
    return '<empty>';
  }

  let parts = [];
  while (head) {
    parts.push(head.val.toString());
    head = head.next;
  }

  return parts.join(' -> ');
}

function arrayToLL(array) {
  if (array === []) return array;
  let head = new Node(0);
  let cur = head;
  for (let i = 0; i < array.length; i++) {
    cur.next = new Node(array[i]);
    cur = cur.next;
  }
  return head.next;
}

console.log(toString(arrayToLL([])) == '<empty>');
console.log(toString(arrayToLL([1])) == '1');
console.log(toString(arrayToLL([1, 2])) == '1 -> 2');
console.log(toString(arrayToLL([1, 2, 3])) == '1 -> 2 -> 3');
console.log(toString(arrayToLL([5, 0, 3])) == '5 -> 0 -> 3');
console.log(toString(arrayToLL([8, 7, 8, 8])) == '8 -> 7 -> 8 -> 8');
console.log(toString(arrayToLL([8, 7, 8, 8, 7])) == '8 -> 7 -> 8 -> 8 -> 7');

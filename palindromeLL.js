// Prompt
// Given an array, create a palindrome linked list by iterating through the array forwards and backwards. The last element should not be repeated.

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

function createPalindromeLL(array) {
  if (!array.length) return null;

  let sentinel = new Node();
  let curr = sentinel;

  for (let i = 0; i < array.length; i++) {
    curr.next = new Node(array[i]);
    curr = curr.next;
  }

  for (let i = array.length - 2; i >= 0; i--) {
    curr.next = new Node(array[i]);
    curr = curr.next;
  }

  return sentinel.next;
}

// console.log(createPalindromeLL([1,2,3]))
console.log(toString(createPalindromeLL([])) === '<empty>');

console.log(toString(createPalindromeLL([99])) === '99');

console.log(toString(createPalindromeLL([4, 2])) === '4 -> 2 -> 4');

console.log(
  toString(createPalindromeLL([1, 4, 5])) === '1 -> 4 -> 5 -> 4 -> 1'
);

console.log(
  toString(createPalindromeLL([4, 9, 14])) === '4 -> 9 -> 14 -> 9 -> 4'
);

console.log(
  toString(createPalindromeLL([20, 15, 10, 5])) ===
    '20 -> 15 -> 10 -> 5 -> 10 -> 15 -> 20'
);

console.log(
  toString(createPalindromeLL([5, 5, 5, 5])) ===
    '5 -> 5 -> 5 -> 5 -> 5 -> 5 -> 5'
);

console.log(
  toString(createPalindromeLL([1, 2, 3, 2, 1])) ===
    '1 -> 2 -> 3 -> 2 -> 1 -> 2 -> 3 -> 2 -> 1'
);

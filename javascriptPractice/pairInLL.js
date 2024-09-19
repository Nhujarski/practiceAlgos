// Prompt
// Given a linked list, return the number of values that occurred exactly twice.

class Node {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

// Function Signature

function numPairs(head) {
  let hash = {};
  let curr = head;
  let count = 0;

  while (curr) {
    if (!hash[curr.val]) {
      hash[curr.val] = 1;
    } else {
      hash[curr.val] += 1;
    }
    curr = curr.next;
  }

  for (let key in hash) {
    if (hash[key] === 2) {
      count++;
    }
  }
  return count;
}

let head1 = new Node(
  1,
  new Node(2, new Node(2, new Node(3, new Node(3, new Node(3)))))
);
let head2 = new Node(5, new Node(5, new Node(10, new Node(20))));
let head3 = new Node(5, new Node(5, new Node(10, new Node(10))));
let head4 = new Node(5, new Node(5, new Node(5, new Node(10))));
let head5 = new Node(5, new Node(10, new Node(10, new Node(10))));
let head6 = new Node(4);
let head7 = new Node(5, new Node(5));
let head8 = new Node(5, new Node(5, new Node(5, new Node(5))));
let head9 = new Node(6, new Node(9));
let head10 = new Node(5, new Node(5, new Node(5, new Node(10, new Node(10)))));
let head11 = new Node(
  6,
  new Node(5, new Node(5, new Node(5, new Node(5, new Node(6)))))
);

console.table([
  numPairs(null) == 0,
  numPairs(head1) == 1,
  numPairs(head2) == 1,
  numPairs(head3) == 2,
  numPairs(head4) == 0,
  numPairs(head5) == 0,
  numPairs(head6) == 0,
  numPairs(head7) == 1,
  numPairs(head8) == 0,
  numPairs(head9) == 0,
  numPairs(head10) == 1,
  numPairs(head11) == 1,
]);

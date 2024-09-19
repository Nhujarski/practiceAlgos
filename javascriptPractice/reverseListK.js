function reverseListK(head, k) {
  let cur = head;
  let prev = null;
  for (let i = 0; i < k; i++) {
    if (!cur) return prev;
    const temp = cur.next;
    cur.next = prev;
    prev = cur;
    cur = temp;
  }
  head.next = reverseListK(cur, k);
  return prev;
}
/*
   2 - 1 - 3-4-5-6
  2 -1 - 4- 3- 6-5
  */
function reverseList(head) {
  let cur = head;
  let prev = null;
  while (cur) {
    const temp = cur.next;
    cur.next = prev;
    prev = cur;
    cur = temp;
  }
  return prev;
}

class Node {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

const LL1 = new Node(
  1,
  new Node(2, new Node(3, new Node(4, new Node(5, new Node(6)))))
);

// console.log(JSON.stringify(reverseList(LL1))) // 6-5-4-3-2-1

console.log(JSON.stringify(reverseListK(LL1, 2))); // 2-1-4-3-6-5
// console.log(JSON.stringify(reverseListK(LL1, 3))) // 3-2-1-6-5-4
// console.log(JSON.stringify(reverseListK(LL1, 4))) // 4-3-2-1-6-5

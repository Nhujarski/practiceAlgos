/* 
Q. Given a linked list, return the kth element from the end of the list.

   If the k exceeds the length of the list, return -1.



Examples:

• Given a linked list: 13 ➞ 1 ➞ 5 ➞ 3 ➞ 7 ➞ 10, k: 1 // returns 10

• Given a linked list: 13 ➞ 1 ➞ 5 ➞ 3 ➞ 7 ➞ 10, k: 7 // returns -1
*/

class ListNode {
  constructor(value = 0, next = null) {
    this.value = value;

    this.next = next;
  }
}

function kthFromLast(head, k) {
  let slow = head;
  let fast = head;
  let count = 0;
  for (let i = 0; i < k; i++) {
    if (fast) {
      fast = fast.next;
      count++;
    }
  }
  if (k > count) {
    return -1;
  }
  while (fast) {
    slow = slow.next;
    fast = fast.next;
  }

  return slow.value;
}

function removeKthAfterMid(head, k) {
  let slow = head;
  let fast = head;
  for (let i = 0; i <= k; i++) {
    if (fast) {
      fast = fast.next;
    }
  }

  while (fast) {
    slow = slow.next;
    fast = fast.next;
  }
  slow.next = null;
  return head;
}
// Test Cases

var LL1 = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))));

// console.log(kthFromLast(LL1, 1)); // 10

// console.log(kthFromLast(LL1, 3)); // 3

// console.log(kthFromLast(LL1, 6)); // 13

// console.log(kthFromLast(LL1, 7)); // -1
console.log(removeKthAfterMid(LL1, 2)); // 1 -> 2

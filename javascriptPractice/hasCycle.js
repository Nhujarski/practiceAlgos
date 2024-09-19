/*
  Given a linked list, determine if it has a cycle.
  Function Signature: 
  def has_cycle(head: ListNode) -> bool
  Target runtime and space complexity:
  O(N)
  Examples:

  // approach:
  two pointers fast and slow
  fast moves twice as fast as slow : slow = slow.next, fast = fast.next.next
 while fast && fast.next && slow && slow.next 
 if slow = fast return true
 after while loop return false  
*/

class ListNode {
  constructor(value = 0, next = null) {
    this.value = value;
    this.next = next;
  }
}

function has_cycle(head) {
  if (!head || !head.next) return false;
  let fast = head.next;
  let slow = head;
  while (fast) {
    if (fast === slow) return true;
    if (fast.next) fast = fast.next.next;
    else return false;
    slow = slow.next;
  }
  return false;
}

let list = new ListNode(1);
list.next = list;
console.log(has_cycle(list)); // true
console.log(has_cycle(null)); // false

list = new ListNode(1, new ListNode(2, new ListNode(3, list)));
console.log(has_cycle(list) === true); // true
/* 
  Input: null
  
  Output: False
  
  Input:
  1 →
  ↑_↓
  Output: True
  */

let node_0 = new ListNode(1);
let node_1 = new ListNode(2);
let node_2 = new ListNode(3);
let node_3 = new ListNode(4);
let node_4 = new ListNode(4);

node_0.next = node_1;
node_1.next = node_2;
node_2.next = node_3;
node_3.next = node_4;
node_4.next = node_2;
console.log(has_cycle(node_0)); // true

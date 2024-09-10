/* 
Q. Given a sorted linked list, insert an element in the appropriate position.

Examples:
• Given a linked list: 1 ➞ 3 ➞ 4, target: 2 // returns 1 ➞ 2 ➞ 3 ➞ 4
• Given an empty linked list, target: 1  // returns 1
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

function insert(head, target) {
  if (!head) return new ListNode(target);
  let node = new ListNode(target);

  let dumb = new ListNode(0);
  dumb.next = head;
  let curr = dumb;

  while (curr) {
    if (!curr.next || target < curr.next.value) {
      const next = curr.next;
      curr.next = node;
      curr.next.next = next;
      break;
    }
    curr = curr.next;
  }

  return dumb.next;
}

// Test Cases
var LL1 = new ListNode(1, new ListNode(3, new ListNode(4)));
var LL2 = new ListNode(-3, new ListNode(-2, new ListNode(-1)));
console.log(arrayify(insert(LL1, 2))); // [1, 2, 3, 4]
console.log(arrayify(insert(LL2, -4))); // [-4, -3, -2, -1]
console.log(arrayify(insert(LL2, 0))); // [-3, -2, -1, 0]
// console.log(arrayify(insert(null, 1))) // [1]

// SOLUTION

// O(N) time
// function insert(head, target) {
//   if (!head) return new ListNode(target)

//   let dummyHead = new ListNode(0) // fake head -- lol
//   dummyHead.next = head // real head ;)
//   let node = dummyHead // 0

//   while (node) {
//     if (!node.next || target < node.next.value) {
//       const next = node.next;
//       node.next = new ListNode(target);
//       node.next.next = next;
//       break;
//     }

//     node = node.next;
//   }

//   return dummyHead.next;
// }

// // O(N) time
// function insert(head, target) {
//   let node = head
//   if (!node) {
//     return new ListNode(target);
//   } else if (target < node.value) {
//     return new ListNode(target, node);
//   } else {
//     node.next = insert(node.next, target);
//   }

//   return head;
// }

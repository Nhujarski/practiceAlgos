/*

Problem
  Given a linked list, delete (k) nodes after the middle.

  If (n) is the length of the list, the middle node is [n / 2] using zero-based indexing.
  Return the head of the modified list.

Function Signature: 
  function removeKAfterMiddle(head, k)

Target runtime and space complexity:
  Time: O(n) to iterate through the N node linked list
  Space: O(1) to store a constant number of variables

list = [1, 2, 3, 4], k = 2 => [1, 2]
list = [1], k = 0 => [1]
list = [1], k = 2 => [1]
list = [2, 9, 4, 1, 7], k = 3 => [2, 9 4]

// Approach 
if head is null or empty return empty list 
if k = 0 return head 

1. slow and faster pointer
loop (while faster pointer is not null)
  move slow pointer ahead
  move faster pointer ahead of slow pointer K times
while fast is not null move slow to next and move fast to next
at the end of while loop set slow.next = null 
return head or list 

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

// Function Signature:
function removeKAfterMiddle(head, k) {
  if (!head) return [];
  if (k === 0) return head;

  let slow = head;
  let fast = head;

  //  if (k % 2 == 0)
  //    k += 1;

  for (let i = 0; k % 2 === 0 ? i <= k : i < k; i++) {
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

var LL1 = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))));
console.log(arrayify(removeKAfterMiddle(LL1, 2))); // 1 -> 2

var LL2 = new ListNode(1);
console.log(arrayify(removeKAfterMiddle(LL2, 0))); // 1

var LL3 = new ListNode(1);
console.log(arrayify(removeKAfterMiddle(LL3, 2))); // 1

// 2 9 4 1 7
//     ^     ^
// ^   ^
//       i
var LL1 = new ListNode(
  2,
  new ListNode(9, new ListNode(4, new ListNode(1, new ListNode(7))))
);
console.log(arrayify(removeKAfterMiddle(LL1, 3))); // 2 -> 9 -> 4

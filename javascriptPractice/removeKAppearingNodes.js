/*
Remove K-Appearing Nodes from Unsorted List

Given the head node of a singly linked list, find nodes where they have already appeared (k) or more times.
Return the head node of the new linked list, after deleting/removing the nodes.
If a node appears more than once in a list, only the nodes that are kth or higher must be deleted. You can still retain the nodes leading up to the kth occurrence.

Examples:

Example 1
4 -> 3 -> 4 -> 1 -> 5, k = 2 should return 4 -> 3 -> 1 -> 5

Example 2
1 -> 1 -> 2, k = 2 should return 1 -> 2

Example 3
1 -> 2 -> 3, k = 3 should return 1 -> 2 -> 3

// Approach 
check iif we have a head 
if not return head []
create map
keep track of prev node and current node
iterate over list
check if our number of times seen is equal to k - 1
then remove it from list
else count it.
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

function removeKAppearingNodes(head, k) {
  if (!head) return head;

  let map = new Map();
  let prev = new ListNode(0, head);
  let current = head;

  while (current) {
    if (map.get(current.value) == k - 1) {
      prev.next = current.next;
    } else {
      map.set(current.value, (map.get(current.value) || 0) + 1);
    }
    prev = current;
    current = current.next;
  }
  return head;
}

var LL1 = new ListNode(
  4,
  new ListNode(3, new ListNode(4, new ListNode(1, new ListNode(5))))
);
var LL2 = new ListNode(1, new ListNode(1, new ListNode(2)));
var LL3 = new ListNode(1, new ListNode(2, new ListNode(3)));

console.log(arrayify(removeKAppearingNodes(LL1, 2)), '===', [4, 3, 1, 5]);
console.log(arrayify(removeKAppearingNodes(LL2, 2)), '===', [1, 2]);
console.log(arrayify(removeKAppearingNodes(LL3, 3)), '===', [1, 2, 3]);

//test
// list = [4, 3, 4, 1, 5], k = 2 => [4, 3, 1, 5]
// list = [1, 1, 2] => k = 2 => [1, 2]
// list = [1, 2, 3] => k = 3 => [1, 2, 3]

// # Python3

// class Node():
//     def __init__(self, val):
//         self.val= val
//         self.next = None

// def removeKAppearingNodes(head, k):
//     if not head.next:
//         return head

//     curr = head
//     prev = None

//     # Use hashmap to track frequency per node
//     seen = {}

//     # Iterate and adjust list in-place
//     while curr != None:
//         # Check if already seen
//         alreadySeen = seen[curr.val]

//         # If current already seen, check if meets threshold (k - 1)
//         if alreadySeen and alreadySeen >= k - 1:
//             # Delete it
//             prev.next = curr.next
//             curr = curr.next
//             continue
//         else if alreadySeen:
//             # Increment it
//             seen[curr.val] += 1
//         else:
//             # Insantiate it
//             seen[curr.val] = 1

//         # Move to next node
//         prev = curr
//         curr = curr.next

//     # Return adjusted list by head node
//     return head

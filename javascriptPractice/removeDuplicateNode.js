/*
Prompt
Given the head node of a singly linked list, remove all the nodes with values that appear more than once. Return the head node of the new linked list, after removing all the duplicate nodes.
class Node:
  def __init__(self, val, next = None):
    self.val = val
    self.next = next

def toString(head: Node) -> None:
  if not head:
    return "<empty>"

  parts = []
  while head:
    parts.append(str(head.val))
    head = head.next

  return " -> ".join(parts)

Expected Runtime
Time: O(n) to iterate through the entire list twice
Space: O(n) to track the duplicates

*/
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
    parts.push(head.val.toString());
    head = head.next;
  }

  return parts.join(' -> ');
}

// Function Signature
function removeDuplicateNodes(head) {
  let map = new Map();
  let curr = head;
  let sentinal = new Node(-1);
  let newHead = sentinal;

  while (curr) {
    map.set(curr.val, (map.get(curr.val) || 0) + 1);
    curr = curr.next;
  }
  for (const [key, val] of map) {
    if (val === 1) {
      if (sentinal) sentinal.next = new Node(key);
      if (sentinal) sentinal = sentinal.next;
    }
  }
  return newHead.next;
}

let head = null;
console.log(toString(removeDuplicateNodes(head)) == '<empty>');

head = new Node(1); // # 1
console.log(toString(removeDuplicateNodes(head)) == '1');

head = new Node(1, new Node(1, new Node(2))); //# 1 -> 1 -> 2
console.log(toString(removeDuplicateNodes(head)) == '2');

head = new Node(1, new Node(2, new Node(3))); //# 1 -> 2 -> 3
console.log(toString(removeDuplicateNodes(head)) == '1 -> 2 -> 3');

head = new Node(6, new Node(4, new Node(8, new Node(3, new Node(4))))); //# 6 -> 4 -> 8 -> 3 -> 4
console.log(toString(removeDuplicateNodes(head)) == '6 -> 8 -> 3');

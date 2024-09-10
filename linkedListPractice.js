// Q. Given a linked list, sum all elements in the list.

// Examples:
// • Given a linked list: 1 ➞ 4 ➞ 5 // returns 10
// • Given a linked list: 1 // returns 1

// TODO studdy linkedList recursion

class ListNode {
  constructor(value = 0, next = null) {
    this.value = value;
    this.next = next;
  }
}

function sum(node) {
  // Write your code here.
  let sum = 0;
  let cur = node;
  while (cur) {
    sum += cur.value;
    cur = cur.next;
  }
  return sum;
}

// Nick's
function sum(node, total = 0) {
  if (!node) return total;
  let cur = node;
  total += cur.value;

  return sum(node.next, total);
}

function sum(node) {
  function helper(curr) {
    if (curr == null) return 0; //last node

    return curr.value + helper(curr.next);
  }
  return helper(node);
}

function count(node) {
  function helper(curr) {
    if (curr === null) return 0;

    return helper(curr.next) + 1;
  }
  return helper(node);
}

function max(node) {
  function helper(curr) {
    if (curr === null) return -Infinity;

    return Math.max(helper(curr.next), curr.value);
  }
  return helper(node);
}

function append(node) {
  if (node == null) return new ListNode(100);

  function helper(curr) {
    if (curr.next === null) {
      curr.next = new ListNode(100);
      return node;
    }

    return helper(curr.next);
  }
  return helper(node);
}
//iterative
function append(head, target) {
  if (!head) {
    head = new ListNode(target);
    return head;
  }

  let curr = head;

  while (curr.next) {
    curr = curr.next;
  }
  curr.next = new ListNode(target);
  return head;
}

// Test Cases
var LL1 = new ListNode(1, new ListNode(4, new ListNode(5))); //-> null (0)
// console.log(append(null)); // 0
// console.log(JSON.stringify(append(LL1))); // 10
// console.log(append(new ListNode(1))); // 1
console.log(count(LL1)); // 3
//https://coda.io/d/_dQj6eI0mP1R/Core-Algorithms_suE63#_lu8VX

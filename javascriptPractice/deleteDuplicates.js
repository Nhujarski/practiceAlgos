/*  
Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.

 
*/
var deleteDuplicates = function (head) {
  let curr = head;
  while (curr !== null) {
    while (curr.next !== null && curr.next.val === curr.val) {
      curr.next = curr.next.next;
    }
    curr = curr.next;
  }
  return head;
};

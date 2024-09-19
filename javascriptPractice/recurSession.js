// TODO come back and learn recur.

/*
Concept : Recursion 

function which calls itself with base case 
- code reusability 
- to get reapeated till the time base case is hit

- recursive call which means when do you want to call the function again
- base case - identify the endpoint  ERROR : Stack memory overflow 
- preparing results - might involving merging/sorting 
- Example - merge sort 


Given a linked list , find the sum of all nodes using recursion , 
2) print the nodes from backward 

1->2->3->4->5
5 4 3 2 1
15

Edge case/assumptions/observations :
1. Empty list , return 0 ;
2. List is singly-linked list, not circular 


Q : Given an array , find max in that

if index==len(array):
    return ;
  
return max(arr[index],maximum(index+1))


Approach 2 : 
//base case
if index==len(array):
    return max;

//recursive call  
max = max(max,array[index])
maximum(index+1)
 
Follow - up :
Q . Print fibonacci series 
0 1 1 2 3 5 8 ...



*/

class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

function sumOfNodes(node) {
  //base case
  if (!node) {
    return 0;
  }
  //recursive call
  return node.val + sumOfNodes(node.next);
}

const LL1 = new ListNode(1, new ListNode(2, new ListNode(3)));
//console.log(printBack(LL1));

printBackV1(LL1);
function printBackV1(node) {
  //base case
  if (!node) {
    return 0;
  }
  //recursive call
  printBack(node.next);
}

// TODO look at this recursion probelm from Temis session
/*
Given a linked list with each node representing a digit in an integer, add 1 to the number. The head holds the most significant digit and tail holds the least significant digit.

9 -> 9
1 -> 0 -> 0

1 -> 2 -> 3 -> 4


9 -> 9 -> -> 9

function recur(params){
  //Before call

  carrya = recur(params)

  //After Call
}

// define a recursive function
// if head null, return null
// if head next is null
//    check if integer is 9, change node val to 0, return the carry of 1
// else change node val to node value plus 1, return 0 

// define a variable that will get the return of the recursive call 
// keep calling the recursive call by passing it the next elem in ll until it reaches null

// node.val + carry % 10, equals val
  node.val = val
// node.val + carry / 10, equals carry
  return carry

// carry = recurFunction()
// if carry > 0
  create new head with carry as node.val and attach to current head
// return newHead
// else if carry === 0
  return head
*/

/*
loop through ll and add elelments to stack

top of our stack is now the least significant digit

node = stack.pop()
val = node.val + 1
carry = val/10
node.val = val
while(!stack.isEmpty()) {
  node = stack.pop()
  val = node.val + carry
  carry = val/10
  node.val = val
}

if(carry)
  add new node(1)

*/
function recursive(head) {
  let node = head;

  if (!head) {
    return null;
  }

  const helper = (helperNode) => {
    let val;

    if (helperNode.next === null) {
      val = helperNode.val + 1;
      carry = val / 10;
      helperNode.val = val;

      return carry;
    }

    carry = helper(helperNode.next);

    val = helperNode.val + 1;
    carry = val / 10;
    helperNode.val = val;
  };

  let carry = helper(node);

  if (carry > 0) {
    let newHead = new Node(carry);
    newHead.next = head;
    return newHead;
  }

  return head;
}

function iterAdd1(head) {
  const stack = [];
  let curr = head;
  while (curr) {
    stack.push(curr);
    curr = curr.next;
  }
  let node = stack.pop();
  let val = node.val + 1;
  let carry = val / 10;

  while (stack) {
    node = stack.pop();
    val = node.val + 1;
    node.val = val;
  }
  if (carry) {
    const newHead = new Node(1, node);
    return newHead;
  }
  return node;
}

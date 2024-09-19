class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

var mergeTwoLists = function (l1, l2) {
  let h = new ListNode();
  let c = h;

  while (l1 && l2) {
    if (l2.val < l1.val) [l2, l1] = [l1, l2];
    c.next = l1;
    c = c.next;
    l1 = l1.next;
  }

  if (l1) c.next = l1;
  if (l2) c.next = l2;

  return h.next;
};

const mergeTwoLists = (l1, l2) => {
  if (!l1) {
    return l2;
  } else if (!l2) {
    return l1;
  } else if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2);
    return l1;
  } else {
    l2.next = mergeTwoLists(l1, l2.next);
    return l2;
  }
};

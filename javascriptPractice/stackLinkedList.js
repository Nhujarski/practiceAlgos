class LLNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LLStack {
  constructor() {
    this.count = 0;
    this.top = new LLNode('top');
  }

  push(newValue) {
    const newNode = new LLNode(newValue, this.top.next);
    this.top.next = newNode;
    this.count++;
  }

  pop() {
    if (this.count === 0) {
      return undefined; // or throw exception?
    }
    const node = this.top.next;
    this.top.next = node.next;
    node.next = null;
    this.count--;
    return node.value;
  }

  size() {
    return this.count;
  }
}

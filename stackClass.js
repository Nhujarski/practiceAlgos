// TODO Stack Class

class MinStack {
  constructor() {
    this.val = [];
    this.index = [];
  }

  push(x) {
    this.val.push(x);
    if (!this.index.length) {
      this.index.push(0);
      return;
    }
    if (x <= this.val[this.index[this.index.length - 1]]) {
      this.index.push(this.val.length - 1);
    }
  }

  pop() {
    if (!this.val.length) {
      return;
    }
    if (this.index[this.index.length - 1] === this.val.length - 1) {
      this.index.pop();
    }
    this.val.pop();
  }

  top() {
    return this.val[this.val.length - 1];
  }

  getMin() {
    return this.val[this.index[this.index.length - 1]];
  }
}

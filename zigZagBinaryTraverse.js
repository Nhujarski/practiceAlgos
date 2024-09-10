// TODO Zig zag traverse
/* 
Given the root of a binary tree, return the zigzag level order traversal of its nodes' values. (i.e., from left to right, then right to left for the next level and alternate between).


*/
var zigzagLevelOrder = function (root) {
  if (!root) return [];
  let stack = [root];
  let result = [];
  let level = 1;
  while (stack.length) {
    const children = [];
    let len = stack.length;
    for (let i = 0; i < len; i++) {
      if (level === 1) {
        children.push(stack[i].val);
      } else {
        children.unshift(stack[i].val);
      }
      stack[i].left && stack.push(stack[i].left);
      stack[i].right && stack.push(stack[i].right);
    }
    result.push(children);
    level *= -1;
    stack.splice(0, len);
  }
  return result;
};

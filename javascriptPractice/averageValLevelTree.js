// /*
// Q. Given the root of a binary tree, return average values of nodes on each level starting from the root in an array form.

//      1
//    2  3
// returns [1, 2.5]

//      5
//    2   6
//   1 3    8
// returns [5,4,4]
// */

// function solution(root) {
//   let seen = [root];
//   while (seen.length) {
//     let curr = seen.pop();
//     seen.push(curr.value);
//     if (curr.left) seen.push(curr.left);
//     if (curr.right) seen.push(curr.right);
//     console.log({ seen });
//   }
// }

var arr = ['first', 'second', 'third', 'fourth'];

for (var i = 0; i < 3; ++i) {
  setTimeout(() => {
    console.log(i);
    console.log(arr[i]);
  }, 2500);
}
// function math(operation, x) {
//   const OPERATIONS = {
//     '*': (a, b) => a * b,
//     '/': (a, b) => a / b,
//     '+': (a, b) => a + b,
//     '-': (a, b) => a - b,
//   };
//   return function (y) {
//     return OPERATIONS[operation](x, y);
//   };
// }

// const mul = math('*', 5);
// const add = math('+', mul(2));

// console.log(typeof add);
// console.log(add(math('-', 25)(20)));

// TODO max depth if statements

/* 
Prompt
Many teams use a type of tool called a linter to scan code to ensure it follows certain standards and best practices. One common rule a linter might check for is the depth of nesting of control flow. Functions with many levels of nesting are often overly complex, hard to read or modify, and can be bug farms. We're going to write a function to determine the depth of control flow for if-statements so that teams will be automatically notified if it gets too deep.
In Visual Basic (an old language I hope most of you never need to use), if statements are bounded by four keywords: if, elseif, else, and endif. Given a sequence of these keywords, return the max nesting depth or -1 if the structure is incorrect.
The structure is incorrect when:
The first keyword is anything other than an if.
If and endif keywords do not pair up or are out of order.
An else or elseif is not inside an if.
There are two else blocks in a row.
An elseif follows an else at a given level.
Start by implementing this with only if, and endif. Then add support for else. Once that is working, modify the code to support elseif as well.

*/

function vbNesting(controlFlow) {
  const stack = [];
  let maxDepth = 0;

  for (let i = 0; i < controlFlow.length; i++) {
    const nextKeyword = controlFlow[i];
    if (nextKeyword === 'if') {
      stack.push('if');
      maxDepth = Math.max(maxDepth, stack.length);
    } else if (nextKeyword === 'endif') {
      const topKeyword = stack.pop();
      if (topKeyword === undefined) {
        return -1;
      }
    } else if (nextKeyword === 'elseif' || nextKeyword === 'else') {
      const topKeyword = stack.pop();
      if (topKeyword === 'if' || topKeyword === 'elseif') {
        stack.push(nextKeyword);
      } else {
        // the topKeyWord is "else" or "endif"
        return -1;
      }
    }
  }

  return stack.length === 0 ? maxDepth : -1;
}

console.log(vbNesting(['if']) == -1);
console.log(vbNesting(['endif']) == -1);
console.log(vbNesting(['if', 'endif']) == 1);
console.log(vbNesting(['if', 'if', 'if', 'endif', 'endif', 'endif']) == 3);
console.log(
  vbNesting(['if', 'if', 'if', 'endif', 'endif', 'if', 'endif', 'endif']) == 3
);
console.log(vbNesting(['if', 'else', 'endif']) == 1);
console.log(vbNesting(['if', 'endif', 'if', 'endif']) == 1);
console.log(vbNesting(['if', 'if', 'endif', 'endif']) == 2);
console.log(vbNesting(['else']) == -1);
console.log(vbNesting(['endif', 'if']) == -1);
console.log(vbNesting(['if', 'else', 'if', 'endif', 'endif']) == 2);
console.log(
  vbNesting(['if', 'endif', 'if', 'elseif', 'else', 'endif', 'endif']) == -1
);
console.log(vbNesting(['if', 'elseif', 'elseif', 'elseif', 'endif']) == 1);
console.log(vbNesting(['if', 'elseif', 'else', 'endif']) == 1);
console.log(vbNesting(['if', 'if', 'elseif', 'else', 'endif', 'endif']) == 2);
console.log(vbNesting(['if', 'endif', 'if', 'elseif', 'else', 'endif']) == 1);
console.log(vbNesting(['if', 'else', 'elseif', 'endif']) == -1);
console.log(vbNesting(['if', 'else', 'else', 'endif']) == -1);

//TODO revisit this code for parens
/*
Details
In this task, we will practice working through a recursion problem.
Prompt
Given a string that contains exactly 1 pair of parentheses, compute recursively a new string made of only the parentheses and their contents, so "xyz(abc)123" yields "(abc)".

Expected Runtime
Time: O(L) where L is the length of the string
Space: O(L^2) where L is the length of the string to create each stack frame and to concatenate and slice a new length L string on each frame
Examples
print(parenBit("xyz(abc)123") == "(abc)")
print(parenBit("x(hello)") == "(hello)")
print(parenBit("(xy)1") == "(xy)")

//Approach
call recur to iterate over the string
want to start from first paren and keep concatging till we hit the last
return that word

*/

// Function Signature
function parenBit(word) {
  function strip(index, openBracketIndex) {
    if (word[index] == ')') return word.slice(openBracketIndex, index + 1);

    if (word[index] == '(') openBracketIndex = index;

    return strip(index + 1, openBracketIndex);
  }

  return strip(0, '');
}

console.table([
  parenBit('xyz(abc)123') === '(abc)',
  parenBit('x(hello)') === '(hello)',
  parenBit('(xy)1') === '(xy)',
  parenBit('not really (possible)') === '(possible)',
  parenBit('(abc)') === '(abc)',
  parenBit('(abc)xyz') === '(abc)',
  parenBit('(abc)x') === '(abc)',
  parenBit('(x)') === '(x)',
  parenBit('()') === '()',
  parenBit('res (ipsa) loquitor') === '(ipsa)',
  parenBit('hello(not really)there') === '(not really)',
  parenBit('ab(ab)ab') === '(ab)',
  parenBit('ab(ab)ab') === '(ab)',
]);

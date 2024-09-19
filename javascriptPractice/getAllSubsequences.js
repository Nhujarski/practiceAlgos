/*Define a subsequence of a string s to be a list of characters from s such that the characters appear in the same order in the list and in s.
For instance, for the string abcd, a, ab, and acd are valid subsequences, whereas db is not, since b comes before d in the original string.
Given an input string, return all subsequences of the string except the empty string.
*/

function getAllSubsequences(str) {
  const output = [];
  const stack = [];

  function permute(index) {
    if (index === str.length) {
      if (stack.length > 0) {
        output.push(stack.join(''));
      }
      return;
    }

    // without the character
    permute(index + 1);

    // with the character
    stack.push(str[index]);
    permute(index + 1);
    stack.pop();
  }

  permute(0);

  return output;
}

console.log(JSON.stringify(getAllSubsequences('')) === JSON.stringify([]));
console.log(JSON.stringify(getAllSubsequences('a')) === JSON.stringify(['a']));
console.log(
  JSON.stringify(getAllSubsequences('ab')) === JSON.stringify(['b', 'a', 'ab'])
);
console.log(
  JSON.stringify(getAllSubsequences('abc')) ===
    JSON.stringify(['c', 'b', 'bc', 'a', 'ac', 'ab', 'abc'])
);
console.log(
  JSON.stringify(getAllSubsequences('abcd')) ===
    JSON.stringify([
      'd',
      'c',
      'cd',
      'b',
      'bd',
      'bc',
      'bcd',
      'a',
      'ad',
      'ac',
      'acd',
      'ab',
      'abd',
      'abc',
      'abcd',
    ])
);
console.log(
  JSON.stringify(getAllSubsequences('1A')) === JSON.stringify(['A', '1', '1A'])
);
console.log(
  JSON.stringify(getAllSubsequences('1A2b')) ===
    JSON.stringify([
      'b',
      '2',
      '2b',
      'A',
      'Ab',
      'A2',
      'A2b',
      '1',
      '1b',
      '12',
      '12b',
      '1A',
      '1Ab',
      '1A2',
      '1A2b',
    ])
);
console.log(getAllSubsequences('jesitony').length === 255);

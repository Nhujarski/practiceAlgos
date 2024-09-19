// TODO recusiomn count skipped
/* 
Prompt
We'll say that a "skipped pair" in a string is two instances of a char separated by a char. So "AxA" the A's make a pair. Pair's can overlap, so "AxAxA" contains 3 skipped pairs -- 2 for A and 1 for x. Recursively compute the number of skipped pairs in the given string.

*/

// Function Signature
function countSkippedPairs(word) {
  function helper(word, start) {
    if (word.length <= start + 2) {
      return 0;
    }

    if (word[start] == word[start + 2]) {
      return 1 + helper(word, start + 1);
    }

    return helper(word, start + 1);
  }

  return helper(word, 0);
}

console.log(countSkippedPairs('axa') == 1);
console.log(countSkippedPairs('axax') == 2);
console.log(countSkippedPairs('axbx') == 1);
console.log(countSkippedPairs('hi') == 0);
console.log(countSkippedPairs('hihih') == 3);
console.log(countSkippedPairs('ihihhh') == 3);
console.log(countSkippedPairs('ihjxhh') == 0);
console.log(countSkippedPairs('') == 0);
console.log(countSkippedPairs('a') == 0);
console.log(countSkippedPairs('aa') == 0);
console.log(countSkippedPairs('aaa') == 1);

//TODO sub str practice

/* 
Prompt:
Given a string and a non-empty substring sub, compute recursively the size of the largest substring which starts and ends with the given sub string and return its length, including the length of the substrings. When sub is multiple characters, they may overlap with each other and share characters.

Approach
Recursively remove a single character from the beginning of the word while the beginning of the string does not match the string sub. Similarly, recursively remove a single character from the end of the string while the end of the string does not match the string sub. Eventually, either the word will be less than the length of sub, in which case it cannot contain the string, or the start and end of the word will contain sub.
There are 2 base cases. Return zero when the larger string is less than the length of the substring because it is impossible to contain the string sub. Return the length of the word when the word starts and ends with the string sub.
*/

// Function Signature
function strDist(word, sub) {
  if (word.length < sub.length) return 0;

  if (
    word.slice(0, sub.length) === sub &&
    word.slice(word.length - sub.length) === sub
  )
    // base case when the word starts and ends with "sub"
    return word.length;

  if (word.slice(0, sub.length) !== sub)
    // remove the first character
    return strDist(word.slice(1), sub);

  // remove the last character
  return strDist(word.slice(0, word.length - 1), sub);
}

console.log(strDist('catcowcat', 'cat') == 9);
console.log(strDist('catcowcat', 'cow') == 3);
console.log(strDist('cccatcowcatxx', 'cat') == 9);
console.log(strDist('abccatcowcatcatxyz', 'cat') == 12);
console.log(strDist('ooowhwhwooo', 'whw') == 5);
console.log(strDist('xyx', 'x') == 3);
console.log(strDist('xyx', 'y') == 1);
console.log(strDist('xyx', 'z') == 0);
console.log(strDist('z', 'z') == 1);
console.log(strDist('x', 'z') == 0);
console.log(strDist('', 'z') == 0);
console.log(strDist('hiHellohihihi', 'hi') == 13);
console.log(strDist('hiHellohihihi', 'hih') == 5);
console.log(strDist('hiHellohihihi', 'o') == 1);
console.log(strDist('hiHellohihihi', 'll') == 2);

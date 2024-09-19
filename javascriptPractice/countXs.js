// TODO count xs solution

/* 
Prompt
Given a string, compute recursively (no loops) the number of lowercase 'x' chars in the string.


Expected Runtime
Time: O(L) where L is the length of the string
Space: O(L) where L is the length of the string when using an index or O(L^2) when slicing new strings

Examples:
print(countX("xxhixx") == 4)
print(countX("xhixhix") == 3)
print(countX("hi") == 0)
*/

// Function Signature
function countX(word) {
  if (word.length <= 0) return 0;

  if (word[0] === 'x') {
    console.log('sub str >>> ', word.substring(1));
    return 1 + countX(word.substring(1));
  } else {
    console.log('sub str 2 >>> ', word.substring(1));

    return countX(word.substring(1));
  }
}

console.log(countX('xxhixx') === 4);

// console.table([
//   countX("xxhixx") === 4,
//   countX("xhixhix") === 3,
//   countX("hiX") === 0,
//   countX("XXXhXXX") === 0,
//   countX("x") === 1,
//   countX("") === 0,
//   countX("hihi") === 0,
//   countX("hiAAhi12hi") === 0,
// ])

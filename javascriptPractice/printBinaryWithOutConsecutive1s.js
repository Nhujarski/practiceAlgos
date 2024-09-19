/* 
Given an integer maxLen, print all binary strings of size maxLen that don't have 1s next to each other. That is, no string should contain the substring 11, 111, 1111, 11111, etc. You can assume maxLen > 0.

Target runtime and space complexity:
Time: O(2n) where n is the length of the binary string. There are n indexes and each index can be either 0 or 1 with some small exceptions
Space: O(n) because the stack can reach n recursive frames before being torn down

Examples:
printBinaryWithoutConsecutive1s(maxLen=2)
00
01
10

printBinaryWithoutConsecutive1s(maxLen=3)
000
001
010
100
101

*/

// Function Signature:
function printBinaryWithoutConsecutive1s(maxLen) {
  if (maxLen < 1) return;

  function helper(result) {
    if (result.length === maxLen) {
      console.log(result);
      return;
    }

    if (result[result.length - 1] !== '1') helper(result + '1');
    helper(result + '0');
  }

  helper('0');
  helper('1');
}

printBinaryWithoutConsecutive1s(1);
// 0
// 1

console.log('=======');
printBinaryWithoutConsecutive1s(2);
// 00
// 01
// 10

console.log('=======');
printBinaryWithoutConsecutive1s(3);
// 000
// 001
// 010
// 100
// 101

console.log('=======');
printBinaryWithoutConsecutive1s(4);
// 0000
// 0001
// 0010
// 0100
// 0101
// 1000
// 1001
// 1010

console.log('=======');
printBinaryWithoutConsecutive1s(5);
// 00000
// 00001
// 00010
// 00100
// 00101
// 01000
// 01001
// 01010
// 10000
// 10001
// 10010
// 10100
// 10101

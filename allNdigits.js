/*

Prompt:

The decimal system uses the digits 0-9, the binary system uses the digits 0 and 1, and the hexadecimal system uses the digits 0-9 and the letters A-F.  The ternary system is a base-3 numeral system that uses the digits 0, 1, and 2.
Given a number n, write a function that prints out all n-digit ternary numbers.

Expected Runtime:
Time: O(3n) to generate each of the 3 possibilities for all n positions
Space: O(n) to create up to n stack frames

Examples:
Numbers starting with zero shouldn't normally be included but the ternary representing the zero value is a valid 1-digit ternary. No other strings should start with a "0"!
generateNDigitTernaries(1) == [
  "0","1","2"]

generateNDigitTernaries(2) == [
  "10","11","12","20","21","22"]
*/

// Function Signature
function generateNDigitTernaries(n) {
  const output = [];
  const stack = [];

  function permute() {
    if (stack.length === n) {
      output.push(stack.join(''));
      return;
    }
    for (let i = 0; i < 3; i++) {
      stack.push(i);
      permute();
      stack.pop();
    }
  }

  // single digit is a special case
  if (n == 1) {
    output.push('0');
  }

  for (let i = 1; i < 3; i++) {
    stack.push(i);
    permute();
    stack.pop();
  }

  return output;
}

console.log(
  JSON.stringify(generateNDigitTernaries(1)) === JSON.stringify(['0', '1', '2'])
);
console.log(
  JSON.stringify(generateNDigitTernaries(2)) ===
    JSON.stringify(['10', '11', '12', '20', '21', '22'])
);
console.log(
  JSON.stringify(generateNDigitTernaries(3)) ===
    JSON.stringify([
      '100',
      '101',
      '102',
      '110',
      '111',
      '112',
      '120',
      '121',
      '122',
      '200',
      '201',
      '202',
      '210',
      '211',
      '212',
      '220',
      '221',
      '222',
    ])
);
console.log(generateNDigitTernaries(4).length === 54);
console.log(generateNDigitTernaries(5).length === 162);
console.log(generateNDigitTernaries(6).length === 486);
console.log(generateNDigitTernaries(7).length === 1458);
console.log(generateNDigitTernaries(8).length === 4374);
console.log(generateNDigitTernaries(9).length === 13122);
console.log(generateNDigitTernaries(10).length === 39366);

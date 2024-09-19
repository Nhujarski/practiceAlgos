/* 
One simple way to encrypt a string is to "rotate" every alphanumeric character by a certain amount. Rotating a character means replacing it with another character that is a certain number of steps away in normal alphabetic or numerical order.
For example, if the string "Zebra-493?" is rotated 3 places, the resulting string is "Cheud-726?". Every alphabetic character is replaced with the character 3 letters higher (wrapping around from Z to A), and every numeric character replaced with the character 3 digits higher (wrapping around from 9 to 0). Note that the non-alphanumeric characters remain unchanged.
Given a string and a rotation factor, return an encrypted string.
Signature
string rotationalCipher(string input, int rotationFactor)
Input
1 <= |input| <= 1,000,000
0 <= rotationFactor <= 1,000,000
Output
Return the result of rotating input a number of times equal to rotationFactor.
Example 1
input = Zebra-493?
rotationFactor = 3
output = Cheud-726?


*/

function rotationalCipher(input, rotationFactor) {
  // Helper function to rotate a single character
  function rotateCharacter(char, factor) {
    if (char.match(/[a-z]/i)) {
      // Rotate alphabetic characters
      const isUpperCase = char === char.toUpperCase();
      const startCode = isUpperCase ? 'A'.charCodeAt(0) : 'a'.charCodeAt(0);
      const rotatedCode =
        ((char.charCodeAt(0) - startCode + factor) % 26) + startCode;
      return String.fromCharCode(rotatedCode);
    } else if (char.match(/[0-9]/)) {
      // Rotate numeric characters
      const rotatedDigit = (parseInt(char) + factor) % 10;
      return rotatedDigit.toString();
    } else {
      // Non-alphanumeric characters remain unchanged
      return char;
    }
  }

  // Apply rotation to each character in the input string
  const rotatedString = input
    .split('')
    .map((char) => rotateCharacter(char, rotationFactor))
    .join('');

  return rotatedString;
}

// Example usage
const input = 'Zebra-493?';
const rotationFactor = 3;
const output = rotationalCipher(input, rotationFactor);
console.log(output); // Output: Cheud-726?

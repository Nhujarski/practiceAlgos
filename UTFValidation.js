// TODO UTF validation

/* 
Given an integer array data representing the data, return whether it is a valid UTF-8 encoding (i.e. it translates to a sequence of valid UTF-8 encoded characters).

A character in UTF8 can be from 1 to 4 bytes long, subjected to the following rules:

For a 1-byte character, the first bit is a 0, followed by its Unicode code.
For an n-bytes character, the first n bits are all one's, the n + 1 bit is 0, followed by n - 1 bytes with the most significant 2 bits being 10.
This is how the UTF-8 encoding would work:

     Number of Bytes   |        UTF-8 Octet Sequence
                       |              (binary)
   --------------------+-----------------------------------------
            1          |   0xxxxxxx
            2          |   110xxxxx 10xxxxxx
            3          |   1110xxxx 10xxxxxx 10xxxxxx
            4          |   11110xxx 10xxxxxx 10xxxxxx 10xxxxxx
x denotes a bit in the binary form of a byte that may be either 0 or 1.

Note: The input is an array of integers. Only the least significant 8 bits of each integer is used to store the data. This means each integer represents only 1 byte of data.

Input: data = [197,130,1]
Output: true
Explanation: data represents the octet sequence: 11000101 10000010 00000001.
It is a valid utf-8 encoding for a 2-bytes character followed by a 1-byte character.

Input: data = [235,140,4]
Output: false
Explanation: data represented the octet sequence: 11101011 10001100 00000100.
The first 3 bits are all one's and the 4th bit is 0 means it is a 3-bytes character.
The next byte is a continuation byte which starts with 10 and that's correct.
But the second continuation byte does not start with 10, so it is invalid.

// Approach:
Instead of converting the int to strings and doing lots of substring/pad zeros for string.length !== 8, we can just use bitwise shift to get the bits we need:


*/

var validUtf8 = function (data) {
  let count = 0; //count for following bytes of the same character
  for (let i = 0; i < data.length; i++) {
    if (!count) {
      if (data[i] >> 5 === 0b110) count = 1;
      else if (data[i] >> 4 === 0b1110) count = 2;
      else if (data[i] >> 3 === 0b11110) count = 3;
      else if (data[i] >> 7) return false;
    } else {
      if (data[i] >> 6 !== 0b10) return false;
      count--;
    }
  }

  return !count;
};

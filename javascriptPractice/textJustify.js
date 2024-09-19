/* 
Given an array of strings words and a width maxWidth, format the text such that each line has exactly maxWidth characters and is fully (left and right) justified.

You should pack your words in a greedy approach; that is, pack as many words as you can in each line. Pad extra spaces ' ' when necessary so that each line has exactly maxWidth characters.

Extra spaces between words should be distributed as evenly as possible. If the number of spaces on a line does not divide evenly between words, the empty slots on the left will be assigned more spaces than the slots on the right.

For the last line of text, it should be left-justified, and no extra space is inserted between words.


*/

/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function (words, maxWidth) {
  const res = [];
  let buf = [];
  let width = maxWidth;

  // Greedy pack each line
  // when that fails add the line to the result with the added padding
  // and start a new line
  words.forEach((word) => {
    // Check if the word fits in the current line
    // A word fits if theres enough room for the word and
    // a space between it and the word to the left
    if (word.length <= width - buf.length) {
      buf.push(word);
      width -= word.length;
    } else {
      // The word did not fit on the line, send this line for padding
      addWordToResult(res, buf.slice(), maxWidth);

      // Start a new line with the current word
      buf = [word];
      // reset the current line width
      width = maxWidth - word.length;
    }
  });

  // This is the final lines processing
  // According the rules this should only be left justified
  // so add all padding to the right not between the words
  if (buf.length) {
    let str = buf.join(' ');
    str += ' '.repeat(maxWidth - str.length);
    res.push(str);
  }

  return res;
};

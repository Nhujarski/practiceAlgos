/* 
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.


*/

var isPalindrome = function (s) {
  //regex to replace anything not a letter
  s = s.replace(/[^a-z0-9]/gi, '').toLowerCase();
  let i = 0;
  let j = s.length - 1;
  while (i < j) {
    //check i from front and j from back
    if (s[i] !== s[j]) return false;
    i++;
    j--;
  }
  return true;
};
console.log(isPalindrome('A man, a plan, a canal: Panama'));

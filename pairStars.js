// TODO study this
/* 
Details
In this task, we will practice working through a recursion problem.
Prompt
Given a string, compute recursively a new string where identical chars that are adjacent in the original string are separated from each other by a "*".

*/

// Function Signature
function pairStars(word, index = 0) {
  if (index === word.length) {
    return '';
  }
  const substring = pairStars(word, index + 1);

  if (word[index] === substring[0]) {
    return word[index] + '*' + substring;
  }
  return word[index] + substring;
}

console.log(pairStars('hello') === 'hel*lo');
console.log(pairStars('xxyy') === 'x*xy*y');
console.log(pairStars('aaaa') === 'a*a*a*a');
console.log(pairStars('aaab') === 'a*a*ab');
console.log(pairStars('aa') === 'a*a');
console.log(pairStars('a') === 'a');
console.log(pairStars('') === '');
console.log(pairStars('noadjacent') === 'noadjacent');
console.log(pairStars('abba') === 'ab*ba');
console.log(pairStars('abbba') === 'ab*b*ba');

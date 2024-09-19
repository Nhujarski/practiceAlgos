/* 
You're given a string of words. You need to find the word "Nemo", and return a string like this: "I found Nemo at [the order of the word you find Nemo]!".

If you can't find Nemo, return "I can't find Nemo :(".

Examples
findNemo("I am finding Nemo !") ➞ "I found Nemo at 4!"

findNemo("Nemo is me") ➞ "I found Nemo at 1!"

findNemo("I Nemo am") ➞ "I found Nemo at 2!"

*/

function findNemo(sentence) {
  const sentenceArr = sentence.split(' ');
  if (sentenceArr.includes('Nemo')) {
    return `I found Nemo at ${sentenceArr.indexOf('Nemo') + 1}`;
  } else {
    return "I can't find Nemo :(";
  }
}

// console.log(findNemo('I am finding Nemo !')); //➞ "I found Nemo at 4!"

// console.log(findNemo('Nemo is me')); //➞ "I found Nemo at 1!"

// console.log(findNemo('I Nemo am')); //➞ "I found Nemo at 2!"

console.log(isNaN('a'));
function sum() {
  let answer = 0;
  for (let i = 0; i < arguments.length; i++) {
    if (!isNaN(arguments[i])) {
      answer += arguments[i];
    }
  }
  return answer;
}
console.log(sum(1, 2, 3, 4, 5, 'a', NaN)); // 15

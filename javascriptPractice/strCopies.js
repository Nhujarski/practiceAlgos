/* 
Details
In this task, we will practice working through a recursion problem.
Prompt
Given a string and a non-empty substring sub, compute recursively if at least n copies of sub appear in the string somewhere, possibly with overlapping. N will be non-negative.

Expected Runtime
Time: O(L) where L is the length of the larger string
Space: O(L) where L is the length of the string when using an index or O(L^2) when slicing new strings
Examples
print(strCopies("catcowcat", "cat", 2) == True)
print(strCopies("catcowcat", "cow", 2) == False)
print(strCopies("catcowcat", "cow", 1) == True)

// Apprach 
if word is longer than sub, return false 
break down word inot smaller wors(slice)

*/

// Function Signature
function strCopies(word, sub, n) {
  if (n === 0) return true;
  if (word.length < sub.length) return false;
  if (word.slice(0, sub.length) === sub) {
    return strCopies(word.slice(1), sub, n - 1);
  }
  return strCopies(word.slice(1), sub, n);
}

console.log(strCopies('cowcatcat', 'cat', 2) == true);
console.log(strCopies('catcowcat', 'cow', 2) == false);
console.log(strCopies('catcowcat', 'cow', 1) == true);
console.log(strCopies('iiijjj', 'i', 3) == true);
console.log(strCopies('iiijjj', 'i', 4) == false);
console.log(strCopies('iiijjj', 'ii', 2) == true);
console.log(strCopies('iiijjj', 'ii', 3) == false);
console.log(strCopies('iiijjj', 'x', 3) == false);
console.log(strCopies('iiijjj', 'x', 0) == true);
console.log(strCopies('iiiiij', 'iii', 3) == true);
console.log(strCopies('iiiiij', 'iii', 4) == false);
console.log(strCopies('ijiiiiij', 'iiii', 2) == true);
console.log(strCopies('ijiiiiij', 'iiii', 3) == false);
console.log(strCopies('dogcatdogcat', 'dog', 2) == true);

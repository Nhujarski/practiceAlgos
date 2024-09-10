// TODO understand stacks and recursion on this.

/* 
Prompt

Given a set of characters, a minimum length, and a maximum length, generate all strings that can be created using characters from the set between those lengths inclusively.
This algorithm requires a large time and space complexity to enumerate all the possibilities. You should be able to get this to either time out or run out of memory even on rather small lengths.

*/

// Function Signature
function generatePasswords(validCharacters, minLength, maxLength) {
  const passwords = [];
  const letters = [];

  function helper() {
    if (letters.length > maxLength) return; // base case

    if (letters.length >= minLength && letters.length <= maxLength) {
      passwords.push(letters.join(''));
    }

    for (let i = 0; i < validCharacters.length; i++) {
      letters.push(validCharacters[i]); // append
      helper();
      letters.pop(); // undo after recursion
    }
  }

  helper();

  return passwords;
}

console.log(
  JSON.stringify(generatePasswords(['a', 'b', 'c', 'd'], 0, 0)) ===
    JSON.stringify([''])
);
console.log(
  JSON.stringify(generatePasswords(['a', 'b', 'c', 'd'], 0, 1)) ===
    JSON.stringify(['', 'a', 'b', 'c', 'd'])
);
console.log(
  JSON.stringify(generatePasswords(['a', 'b', 'c', 'd'], 1, 1)) ===
    JSON.stringify(['a', 'b', 'c', 'd'])
);
console.log(
  JSON.stringify(generatePasswords(['a', 'b'], 3, 3)) ===
    JSON.stringify(['aaa', 'aab', 'aba', 'abb', 'baa', 'bab', 'bba', 'bbb'])
);
console.log(
  JSON.stringify(generatePasswords(['a'], 2, 4)) ===
    JSON.stringify(['aa', 'aaa', 'aaaa'])
);
console.log(
  JSON.stringify(generatePasswords(['a'], 2, 4)) ===
    JSON.stringify(['aa', 'aaa', 'aaaa'])
);
console.log(
  JSON.stringify(generatePasswords(['a', 'b', 'c'], 2, 3)) ===
    JSON.stringify([
      'aa',
      'aaa',
      'aab',
      'aac',
      'ab',
      'aba',
      'abb',
      'abc',
      'ac',
      'aca',
      'acb',
      'acc',
      'ba',
      'baa',
      'bab',
      'bac',
      'bb',
      'bba',
      'bbb',
      'bbc',
      'bc',
      'bca',
      'bcb',
      'bcc',
      'ca',
      'caa',
      'cab',
      'cac',
      'cb',
      'cba',
      'cbb',
      'cbc',
      'cc',
      'cca',
      'ccb',
      'ccc',
    ])
);

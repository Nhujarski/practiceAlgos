// TODO study anagram

var isAnagram = function (s1, s2) {
  if (s1.length !== s2.length) return false;
  const frequencies = new Map();

  for (const char of s1) {
    frequencies.set(char, (frequencies.get(char) || 0) + 1);
  }
  for (const char of s2) {
    if (frequencies.has(char) && frequencies.get(char) > 0) {
      frequencies.set(char, frequencies.get(char) - 1);
    } else {
      return false;
    }
  }
  return true;
};

console.log(isAnagram('anagram', 'nagaram'));

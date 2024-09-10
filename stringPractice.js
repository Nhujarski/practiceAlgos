function solution(string) {
  let newStr = string.trim();

  let trimmedStr = newStr.split(' ');
  let concat = [];

  for (let i = 0; i < trimmedStr.length; i++) {
    if (trimmedStr[i] !== '') {
      concat.push(trimmedStr[i]);
    }
  }
  console.log('???', concat);
  return concat.join(' ');
}

function solution(string) {
  if (string.length === 0) {
    return string;
  }
  return string
    .split(sub)
    .filter((str) => str !== sub)
    .join(' ');
}

// return full.split(sub).filter(str => str !== sub).join(" ")

/* loop over full;
  check if full.slice(i,sub.length + i ) === sub
  full.splice(i,sub.length + i)
  return full 
  
  
  
  Q. Given a substring sub and an input string full, remove all non-overlapping occurrences of sub from full.
  
  Input: full: "abc" & sub: "ab"
  Expected Output: "c"
  Input: full: "ababab" & sub: "b"
  Expected Output: "aaa"
  Input: full: "abcabcabcabcabc" & sub: "abcba"
  Expected Output: "abcabcabcabcabc"
  because "abcba" doesn't appears in the 'full' string.
  */
function solution(full, sub) {
  return full.split(sub).join('');
}
// split.filter((str) => str !== )
console.log(solution('abc', 'bc'));

// full: "abc"
// sub: "bc"

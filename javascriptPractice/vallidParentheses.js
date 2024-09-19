var isValid = function (s) {
  if (s === '') return false;
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      stack.push(')');
    } else if (s[i] === '[') {
      stack.push(']');
    } else if (s[i] === '{') {
      stack.push('}');
    } else {
      // encountered a closing bracket
      if (s[i] !== stack.pop()) {
        return false;
      }
    }
  }
  return stack.length === 0;
};

console.table([
  isValid('{[]}') == true,
  isValid('{}') == true,
  isValid('{[}') === false,
  isValid('') == false,
]);

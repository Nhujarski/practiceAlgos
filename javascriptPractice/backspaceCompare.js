// TODO stack problem
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
  let sStack = [];
  let tStack = [];

  for (const c of s) {
    if (c === '#') sStack.pop();
    else sStack.push(c);
  }

  for (const c of t) {
    if (c === '#') tStack.pop();
    else tStack.push(c);
  }

  return sStack.join('') === tStack.join('');
};

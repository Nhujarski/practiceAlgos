// TODO look at solution for trailing zeroes.
/**
 * @param {number} n
 * @return {number}
 */

var trailingZeroes = function (n) {
  if (n == 0) return n;

  return Math.floor(n / 5) + trailingZeroes(n / 5);
};

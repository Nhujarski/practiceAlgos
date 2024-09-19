// TODO euclids GCD study

/* 
Prompt
Euclid's algorithm for finding the greatest common divisor (GCD) of two numbers a and b is:
gcd(a, 0) := a
gcd(a, b) := gcd(b, a mod b)
Write a function which implements Euclid's algorithm and finds the GCD of two numbers.
*/

// function euclidGCD(a, b) {
//   if ( a == 0 || b == 0) return a || b

//  if ( a > b ) return euclidGCD(b, a % b)
//  else if ( b > a ) return euclidGCD(a, b % a)
// }

function euclidGCD(a, b) {
  if (b === 0) {
    return a;
  }
  return euclidGCD(b, a % b);
}

console.log(euclidGCD(9, 27) == 9);
console.log(euclidGCD(27, 9) == 9);
console.log(euclidGCD(3, 1) == 1);

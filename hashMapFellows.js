// Prompt
// Given an input dictionary mapping Fellows (as string names) to skill ratings, return true if you're able to pair up Fellows with matching skill ratings with no Fellows leftover.

function canMatchFellows(dictionary) {
  let pairs = [];

  for (let key in dictionary) {
    if (!pairs.includes(dictionary[key])) {
      pairs.push(dictionary[key]);
    } else {
      pairs.pop();
    }
  }
  return pairs.length > 0 ? false : true;
}

let dictionary = { oliver: 3, pixel: 3, pinky: 5, tobey: 5 };
console.log(canMatchFellows(dictionary) == true);

dictionary = { oliver: 3, pixel: 4, pinky: 5, tobey: 5 };
console.log(canMatchFellows(dictionary) === false);

dictionary = { oliver: 3, pixel: 3, pinky: 3 };
console.log(canMatchFellows(dictionary) == false);

dictionary = { oliver: 3, pixel: 3, pinky: 5, tobey: 5, paavo: 1 };
console.log(canMatchFellows(dictionary) == false);

dictionary = { oliver: 3, pixel: 3, pinky: 3, tobey: 3 };
console.log(canMatchFellows(dictionary) == true);

console.log(canMatchFellows({ oliver: 1 }) == false);

console.log(canMatchFellows({}) == true);

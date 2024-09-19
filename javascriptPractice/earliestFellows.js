/* 
Prompt:
We have Fellows at Formation that are waiting for their resume to be reviewed. Given an input dictionary mapping from Fellow name to an integer representing the timestamp they requested a review, return an array of Fellows that arrived earliest (at the exact same time)

*/

// Function Signature
function earliestFellows(fellowTimes) {
  let earliestTime = Infinity;
  let currEarlyFellows = [];

  for (const name in fellowTimes) {
    const time = fellowTimes[name];

    if (time < earliestTime) {
      earliestTime = time;
      currEarlyFellows = [name];
    } else if (time === earliestTime) {
      currEarlyFellows.push(name);
    }
  }

  return currEarlyFellows;
}

console.log(JSON.stringify(earliestFellows(new Map())) === JSON.stringify([]));

let map = { oliver: 3 };
console.log(
  JSON.stringify(earliestFellows(map)) === JSON.stringify(['oliver'])
);

map = { oliver: 3, tobey: 3 };
console.log(
  JSON.stringify(earliestFellows(map)) === JSON.stringify(['oliver', 'tobey'])
);

map = { oliver: 3, pinky: 4, pixel: 2, tobey: 1 };
console.log(JSON.stringify(earliestFellows(map)) === JSON.stringify(['tobey']));

map = { oliver: 3, pinky: 1, pixel: 2, tobey: 1 };
console.log(
  JSON.stringify(earliestFellows(map)) === JSON.stringify(['pinky', 'tobey'])
);

map = { tony: 3, jess: 1, paavo: 2, zoe: 1, ariel: 2, jono: 1, angus: 3 };
console.log(
  JSON.stringify(earliestFellows(map)) ===
    JSON.stringify(['jess', 'zoe', 'jono'])
);

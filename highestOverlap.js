/*

Prompt
Given an input dictionary mapping from the name of Fellows to their numerical skill rating, return the skill rating with the highest number of Fellows.

 */

// Function Signature
function highestSkillOverlap(fellowSkills) {
  if (!fellowSkills) return null;
  let map = {};
  let repeat;
  let max = -Infinity;
  for (let key in fellowSkills) {
    map[fellowSkills[key]] = (map[fellowSkills[key]] || 0) + 1;
    if (map[fellowSkills[key]] > max) {
      max = map[fellowSkills[key]];
      repeat = fellowSkills[key];
    }
  }
  return repeat;
}

console.log(highestSkillOverlap(new Map()) === null);

let fellowSkills = { oliver: 3 };
console.log(highestSkillOverlap(fellowSkills) === 3);

fellowSkills = { oliver: 3, tobey: 3 };
console.log(highestSkillOverlap(fellowSkills) === 3);

fellowSkills = { oliver: 3, pinky: 4, pixel: 2, tobey: 1 };
console.log(
  highestSkillOverlap(fellowSkills) >= 1 &&
    highestSkillOverlap(fellowSkills) <= 4
);

fellowSkills = { oliver: 3, pinky: 1, pixel: 2, tobey: 1 };
console.log(highestSkillOverlap(fellowSkills) === 1);

fellowSkills = { tony: 3, jess: 1, paavo: 2, zoe: 1, jono: 2, angus: 3 };
console.log(
  highestSkillOverlap(fellowSkills) >= 1 &&
    highestSkillOverlap(fellowSkills) <= 3
);

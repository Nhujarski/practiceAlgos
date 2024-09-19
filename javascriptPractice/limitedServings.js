// Prompt
// You're a bartender, and you have to look out for your patrons - you don't want them to drink too much. Assume everyone is having the same drink, and everyone has the same set amount of "allowed servings".
// Given an array of patrons (denoted by their names, eg: Adrian), and an integer value representing "allowed servings", return True if someone attempts to go over the allowed number of servings per person.
// Otherwise, False if no one drinks too much.

// Can you think of any data structures that might help?

function limitedServings(patrons, allowedServings) {
  if (patrons.length === 0) return patrons;
  let hash = {};
  for (let i = 0; i < patrons.length; i++) {
    if (!hash[patrons[i]]) {
      hash[patrons[i]] = 1;
    } else {
      hash[patrons[i]] += 1;
    }
  }
  for (let key in hash) {
    if (hash[key] > allowedServings) {
      return true;
    } else {
      return false;
    }
  }
}

console.log(limitedServings([], 3) == false);
console.log(
  limitedServings(['Joe', 'Bart', 'Larry', 'Joe', 'Carl', 'Doug', 'Joe'], 2) ==
    true
);
console.log(limitedServings(['Joe', 'Joe'], 3) == false);
console.log(limitedServings(['Joe', 'Joe', 'Adrian', 'Adrian'], 3) == false);
console.log(limitedServings(['Adrian', 'Bart', 'Carl', 'Doug'], 1) == false);
console.log(limitedServings(['Adrian', 'Bart', 'Carl'], 0) == true);

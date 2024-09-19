// TODO add this to coderpad for sesison at 2

// You're the shift manager at a new ice cream store opening. To make sure everyone has the chance to get a taste of the new flavors, there is a limit of one serving per person.

// You notice that people are not following this rule and are coming back into the line to get another serving of ice cream.

// Given an array of people's names, return True if you come across a person you've already seen in line. Otherwise, False.

// Can you think of any data structures that might help?

// For example ['Pixel', 'Pinky', 'Oliver'] returns false
// [] => false

// Approach 1 Time Complexity => O(n) Space O(n)
// Create a Hashmap of key value pairs to track how many times each person came
// Iterate through the Hasmap and if the value is greater than 1 return True
// Early Return when setting key value pair check if value is greater than 1

// Approach 2 O(n)^2 Space O(1)
// Nested Array check if each value appears more than once
// [1,2,3,4,5,6,7]
// 1
// check the whole Array
// 2 check the whole Array

const testCase1 = ['Pixel', 'Pinky', 'Oliver'];
const testCase2 = ['Pinky', 'Pinky', 'Oliver'];
const testCase3 = [];

function seenYouBefore(patrons) {
  if (patrons.length === 0) return false;
  let hash = {};

  for (let i = 0; i < patrons.length; i++) {
    let key = patrons[i];
    if (!hash[key]) {
      hash[key] = 1;
    } else {
      hash[key] += 1;
      return true;
    }
  }
  return false;
}

// console.log(seenYouBefore(testCase1))
// console.log(seenYouBefore(testCase2))
// console.log(seenYouBefore(testCase3))

// Approach 3
// Use a set to track patrons
// if a patron is already in the set the return true

const seenYouBeforeSet = (patronsArray) => {
  const patronsSet = new Set();
  for (let patron of patronsArray) {
    if (patronsSet.has(patron)) {
      return true;
    }
    patronsSet.add(patron);
  }
  return false;
};

// console.log(seenYouBeforeSet(testCase1))
// console.log(seenYouBeforeSet(testCase2))
// console.log(seenYouBeforeSet(testCase3))

/*

Concept : Sets / Dictionay or Maps

1. Sets - holds distinct values/ no duplicates
2. Dictionay or Maps - key : value kind of structure


Maps/Dictionary/Sets :

insertion : O(1)
lookup/retrieval : O(1)
deletion : O(1)


Question : 
1. Find whether all elements in an array are unique or not , return true if yes otherwise false
input : [1,2,3]

2. Return true if there exist 2 elements in an array that sum to 0. ([1, -1] => true)

3. Return true if all elements in an array has a count of k ([1, 1, 2, 2], k = 2 => true)

Follow-up : 

Q: Internal working of maps

Q: Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.


*/

function uniqueElements(input) {
  if (!input || input.length === 0) {
    return false;
  }
  let mySet = new Set();

  for (let num of input) {
    if (mySet.has(num)) return false;
    mySet.add(num);
  }

  return true;
}

// let input = [1,2,3,3];
// console.log(uniqueElements(input));

function twoSum(input2, k) {
  if (!input2 || input2.length === 0) {
    return false;
  }

  let mySet = new Set();

  for (let num of input2) {
    let remainder = k - num;

    if (mySet.has(remainder)) {
      return true;
    } else {
      mySet.add(num);
    }
  }
  return false;
}
// let input2 = [0]
// console.log(twoSum(input2,0))

function hasCount(arr, k) {
  let map = {};

  for (let i = 0; i < arr.length; i++) {
    let key = arr[i];
    if (!map[key]) {
      map[key] = 1;
    } else {
      map[key] += 1;
    }
  }

  for (let key in map) {
    if (map[key] !== k) {
      return false;
    }
  }
  return true;
}

let input = [1, 1, 2];

console.log(hasCount(input, 2));

/*
Recursion on Arrays :
Recursion - 
-- base case
-- recursive call 

function recursiveFunc(input){
  //base case
  
  //some code (optional)

  //recursive call or in simple words, call to the function back with new state

  //some code(optional)
}

// if base case is not present/incorrect what would happen ?
will keep running resuting in stack overflow

arrays : 
1.they have indexes and elements on those indexes
2.we have info around their length


Questions : 
Q 1: Given an integer array and an integer, find whether the integer exists in the array. Return a boolean.

Q 2 : Given an integer array and an integer, find the frequency of  integer in the array. 

Q3 : Given an integer and a list of integers, find their frequency in the array
input: arr = [1,2,3,1,1,1,1] length = n
       targetIntegers = [1,2] length = m


Approach :

Q1
base case : index == array.length 
            index == array.length - 1      
recursive call =  find(array,targetNumber,index++)

base case : (!arr.len)
            element = arr.pop()
recursive call :  find(arr, int)

********************************************************************
Q2:
base case: when index equal to array.length, return 0. 
recursive call: 
   - check if integer equal to array[index], return + 1 count and call 
     for the next recursive call with incrementing index by 1. 
********************************************************************
Q3 : 
base case:

recursive call:
                

Follow-up questions : 
Q:1 Reverse an array using Recursion
Q:2 Given an array containing 0s and 1s , segregate 0s and 1s, all 0s on left side, all 1s on right
Q:3 Given an linked list containing 0s and 1s , segregate 0s and 1s, all 0s on left side, all 1s on right
Q:4 Generate all possible string combinations (can be tried at later stage)
input : abc ; ouptut: abc,bca,cab,cba,bac,acb (iteration+recursion)

*/

function findInt(arr, int) {
  if (!arr.length) return false;
  return int === arr.pop() ? true : findInt(arr, int);
}

function find(array, targetNumber, index) {
  if (index === array.length) {
    return false;
  } else if (array[index] === targetNumber) {
    return true;
  }

  return find(array, targetNumber, index++);
}

function checkCount(array, index, target) {
  if (array.length === index) return 0;

  return array[index] === target ? 1 : 0 + checkCount(array, index + 1, target);
}

function findFreq(arr, targetInts) {
  const countMap = new Map();
  const freqMap = new Map();
  function helper(arr) {
    //base case
    if (!arr.length) {
      return;
    }

    //some logical part of code
    let el = arr.pop();
    const count = (countMap.get(el) || 0) + 1;
    countMap.set(el, count);

    //recursive call
    helper(arr);
  }
  helper(arr);
  for (let i = 0; i < targetInts.length; i++) {
    const count = countMap.get(targetInts[i]) || 0;
    freqMap.set(targetInts[i], count);
  }
  return freqMap;
}

console.log(findFreq([1, 2, 3, 1, 1, 1, 1], [1, 2, 9]));

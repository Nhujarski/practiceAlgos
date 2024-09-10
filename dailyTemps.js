/* 
Given an array of integers temperatures represents the daily temperatures, return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature. If there is no future day for which this is possible, keep answer[i] == 0 instead.

 

Example 1:

Input: temperatures = [73,74,75,71,69,72,76,73]
Output: [1,1,4,2,1,1,0,0]
*/

var dailyTemperatures = function (T) {
  let ans = new Array(T.length);
  ans.fill(0);
  let stack = [];
  for (let i = 0, j = 1; j < T.length && i < T.length; i++) {
    while (stack.length && T[stack.peek()] < T[i]) {
      ans[stack.peek()] = i - stack.pop();
    }

    stack.push(i);
  }

  return ans;
};

Array.prototype.peek = function () {
  return this[this.length - 1];
};

function dailyTemperatures(temps) {
  let diffDays = [];

  for (let i = 0; i < temps.length; i++) {
    diffDays[i] = 0;
    for (let j = i + 1; j < temps.length; j++) {
      if (temps[j] > temps[i]) {
        diffDays[i] = j - i;
        break;
      }
    }
  }
  return diffDays;
}

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));

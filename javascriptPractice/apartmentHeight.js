/*
Your roommate tasks you with finding a new apartment on one condition: the view can't be blocked by
another apartment.
You're given a list of buildings, specifically apartment elevations. For some reason, the owners of each
building have agreed to represent it as an array of integers denoting the height of each apartment (eg:
[1, 2, 3, 4] or [19, 14, 21, 12, 5] )
If one apartment height (eg: 1 ) is lesser than another apartment to its right (eg: 4 ), then the first
apartment's view will be blocked
For example [1, 2, 3, 4] would only return [4] . In the case of [19, 14, 21, 12, 5] , there
would be multiple valid apartments ( [21, 12, 5] ).
Return a list of viable apartments for you and your roommate.
*/

function solution(apartments) {
  let n = apartments.length;
  let answer = [];

  for (let current = 0; current < n; current++) {
    // If the current building is taller,
    // it will block the shorter building's ocean view to its left.
    // So we pop all the shorter buildings that have been added before.
    while (
      answer.length &&
      apartments[answer.length - 1] <= apartments[current]
    ) {
      answer.pop();
    }
    answer.push(apartments[current]);
  }

  return answer;
}

console.log(solution([1, 2, 3, 4])); // output = [4]
console.log(solution([19, 14, 21, 12, 5])); // output = [21,12,5]

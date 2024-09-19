/* 
Details
In this task, we will practice working through a dictionary problem.
Prompt
Given an array of Fellows representing nominations for a Rising Tide Award at Formation, return the name of the winning Fellow with the most number of nominations

*/

// Function Signature
function risingTideWinner(nominations) {
  if (nominations.length === 0) return null;
  let winner = '';
  let winningVotes = 0;
  const votes = {};

  for (const fellow of nominations) {
    votes[fellow] = (votes[fellow] || 0) + 1;

    if (votes[fellow] == winningVotes && fellow > winner) {
      winner = fellow;
    } else if (votes[fellow] > winningVotes) {
      winner = fellow;
      winningVotes = votes[fellow];
    }
  }
  return winner;
}

console.log(risingTideWinner([]) == null);
console.log(risingTideWinner(['pinky']) == 'pinky');
console.log(
  risingTideWinner(['tony', 'zoe', 'jess', 'jono', 'paavo']) == 'zoe'
);
console.log(risingTideWinner(['oliver', 'pixel', 'pinky', 'pixel']) == 'pixel');
console.log(
  risingTideWinner(['oliver', 'pixel', 'pinky', 'pixel', 'pinky']) == 'pixel'
);
console.log(
  risingTideWinner(['oliver', 'pixel', 'pinky', 'pinky', 'pixel']) == 'pixel'
);

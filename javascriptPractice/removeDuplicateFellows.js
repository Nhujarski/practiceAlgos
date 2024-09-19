/* 
In this task, we will practice working through a set problem.
Prompt
There was a bug in the Formation session tool that accidentally duplicated some Fellows in sessions. Given an array of names representing Fellows in a session, remove an array of all Fellows with duplicates removed. The array must be in the same order as it appeared in the input.
Follow-up question:
If instead of creating an output array, you simply removed the Fellows in place, what would be the impact on the runtime of the algorithm?

Expected Runtime
Time: O(N) to iterate through the length N array
Space: O(N) to store up to N elements

Examples
["oliver", "pixel", "oliver", "pinky"] => ["oliver", "pixel", "pinky"]
*/

// Function Signature
function removeDuplicateFellows(fellows) {
  let arr = [];
  let set = new Set();

  for (const fellow of fellows) {
    if (!set.has(fellow)) {
      set.add(fellow);
      arr.push(fellow);
    }
  }
  console.log({ arr });
  return arr;
}

console.table([
  JSON.stringify(
    removeDuplicateFellows(['oliver', 'pixel', 'oliver', 'pinky'])
  ) === JSON.stringify(['oliver', 'pixel', 'pinky']),

  JSON.stringify(removeDuplicateFellows([])) === '[]',

  JSON.stringify(removeDuplicateFellows(['Oliver', 'oliver'])) ===
    JSON.stringify(['Oliver', 'oliver']),

  JSON.stringify(removeDuplicateFellows(['pinky'])) ===
    JSON.stringify(['pinky']),

  JSON.stringify(removeDuplicateFellows(['pinky', 'pinky', 'pinky'])) ===
    JSON.stringify(['pinky']),

  JSON.stringify(removeDuplicateFellows(['pinky', 'paavo'])) ===
    JSON.stringify(['pinky', 'paavo']),
]);

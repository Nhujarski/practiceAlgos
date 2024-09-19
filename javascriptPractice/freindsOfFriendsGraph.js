/*
'''
❓ PROMPT
Given a vertex and edge list of users of a social network and two user IDs, return whether they are friends of friends.

Example(s)
users = ["Jeff", "Susan", "Ed", "Fred", "Jason", "Zach"]
friends = [("Jeff", "Susan"), ("Jeff", "Fred"), ("Susan", "Ed"), ("Ed", "Fred"), ("Jason", "Zach")]

Jeff---|
 |     |
Susan  |   Jason - Zach
 |     |
Sarah  |
 |     |
 Ed - Fred

isFOF(users, friends, "Jeff", "Ed") -> True
isFOF(users, friends, "Jeff", "Susan") -> False
isFOF(users, friends, "Jeff", "Jeff") -> False

 

🔎 EXPLORE
State your assumptions & discoveries:
 

Create examples & test cases:
 

🧠 BRAINSTORM
What approaches could work? Consider data structures or algorithmic patterns.
Analyze the space & time complexity.
Approach 1:
Time: O()
Space: O()
 

📆 PLAN
High-level outline of approach #: 
 

🛠️ IMPLEMENT
function isFOF(vertex_list, edge_list, user1, user2) {
def isFOF(vertex_list: list[str], edge_list: list, user1: str, user2: str) -> bool:
 

🧪 VERIFY
Run your examples & test cases.
Methodically analyze and debug issue(s).

'''
adj helper:
take in vertex list and. edge list
loop over vertexlist and create obj with edges array []
{
  v:[e,e,e...]
  ...
}
// */
// function adjList(edgeList, vertexList) {
//   let adjacentList = {};
//   for (let i = 0; i < vertexList.length; i++) {
//     adjacentList[vertexList[i]] = [];
//   }
//   for (let i = 0; i < edgeList.length; i++) {
//     adjacentList[edgeList[i][0]].push(edgeList[i][1]);
//     adjacentList[edgeList[i][1]].push(edgeList[i][0]);
//   }
//   return adjacentList;
// }
// /*
//   loop obver adj list for user1 and see if user2 exists in that arr []
//   or check if user1 is in user2
//   */
// function isFOF(vertexList, edgeList, user1, user2) {
//   let list = adjList(edgeList, vertexList);
//   if (!list[user1] || !list[user2]) return false;
//   let visited = new Set();
//   let friendsToCheck = [user1];

//   while (friendsToCheck.length > 0) {
//     let current = friendsToCheck.pop();
//     if (current === user2) return true;
//     visited.add(current);
//     for (const friend of list[current]) {
//       if (visited.has(friend)) continue;
//       friendsToCheck.push(friend);
//     }
//   }
//   return false;
// }

// let users = ['Jeff', 'Susan', 'Ed', 'Fred', 'Jason', 'Zach'];
// let friends = [
//   ['Jeff', 'Fred'],
//   ['Susan', 'Ed'],
//   ['Ed', 'Fred'],
//   ['Jason', 'Zach'],
// ];

// // Jeff---|
// //  |     |
// // Susan  |   Jason - Zach
// //  |     |
// //  Ed - Fred
// console.log(isFOF(users, friends, 'Foo', 'Bar')); // false
// console.log(isFOF(users, friends, 'Jeff', 'Fred')); // true

/*
'''
❓ PROMPT
Given a vertex and edge list of users of a social network and two user IDs, return whether they are friends of friends.

Example(s)
users = ["Jeff", "Susan", "Ed", "Fred", "Jason", "Zach"]
friends = [("Jeff", "Susan"), ("Jeff", "Fred"), ("Susan", "Ed"), ("Ed", "Fred"), ("Jason", "Zach")]

Jeff---|
 |     |
Susan  |   Jason - Zach
 |     |
Sarah  |      Sarah
 |     |
 Ed - Fred

isFOF(users, friends, "Jeff", "Ed") -> True
isFOF(users, friends, "Jeff", "Susan") -> False
isFOF(users, friends, "Jeff", "Jeff") -> False

 

🔎 EXPLORE
State your assumptions & discoveries:
 

Create examples & test cases:
 

🧠 BRAINSTORM
What approaches could work? Consider data structures or algorithmic patterns.
Analyze the space & time complexity.
Approach 1:
Time: O()
Space: O()
 

📆 PLAN
High-level outline of approach #: 
 

🛠️ IMPLEMENT
function isFOF(vertex_list, edge_list, user1, user2) {
def isFOF(vertex_list: list[str], edge_list: list, user1: str, user2: str) -> bool:
 

🧪 VERIFY
Run your examples & test cases.
Methodically analyze and debug issue(s).

'''
adj helper:
take in vertex list and. edge list
loop over vertexlist and create obj with edges array []
{
  v:[e,e,e...]
  ...
}
*/
function adjacencyList(edgeList) {
  const adjList = {};
  for (const edge of edgeList) {
    adjList[edge[0]] = [];
    adjList[edge[1]] = [];
  }
  for (const edge of edgeList) {
    adjList[edge[1]].push(edge[0]);
    adjList[edge[0]].push(edge[1]);
  }
  console.log(adjList);

  return adjList;
}
/* 
  loop obver adj list for user1 and see if user2 exists in that arr []
  or check if user1 is in user2 
  */
function isFOF(edgeList, user1, user2) {
  let list = adjacencyList(edgeList);
  if (!list[user1] || !list[user2]) return false;
  let visited = new Set();
  let friendsToCheck = [user1];

  while (friendsToCheck.length > 0) {
    let current = friendsToCheck.pop();
    if (current === user2) return true;
    visited.add(current);
    for (const friend of list[current]) {
      if (visited.has(friend)) continue;
      friendsToCheck.push(friend);
    }
  }
  return false;
}

// users = ['Jeff', 'Susan', 'Ed', 'Fred', 'Jason', 'Zach'];
friends = [
  ['Jeff', 'Fred'],
  ['Fred', 'Sara'],
];

// Jeff---|
//  |     |
// Susan  |   Jason - Zach
//  |     |
//  Ed - Fred
// console.log(isFOF( friends, 'Foo', 'Bar')); // false
console.log(isFOF(friends, 'Jeff', 'Fred')); // true

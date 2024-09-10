// Prompt
// Given an array of arrays representing relations  child, parent1, and parent2 in each row, print a string representing all children of each parent.
// For example: Ben is the parent of James, Jen. The formatting doesn't matter, as long as all children are represented in the final output.

// Examples
// Input: []
// Output: 'No family relations'

// Input: [
//   ["James", "Ben", "Lisa"],
//   ["George", "Taylor", "Fred"],
//   ["Jen", "Ben", "Gloria"]
// ]
// Output:
// 'Ben is the parent of James, Jen'
// 'Lisa is the parent of James'
// 'Taylor is the parent of George'
// 'Fred is the parent of George'
// 'Gloria is the parent of Jen'

function parentToChild(relations) {
  if (relations.length === 0 || relations[0].length === 0)
    return 'No family relations';

  const parentToChildren = new Map();

  for (const [child, p1, p2] of relations) {
    mapToParent(p1, child, parentToChildren);
    mapToParent(p2, child, parentToChildren);
  }

  let parentRelationships = [];
  for (const [parent, child] of parentToChildren)
    parentRelationships.push(parent + ' is the parent of ' + child);

  return parentRelationships.join('\n');
}

const mapToParent = (parent, child, parentToChildren) => {
  if (parentToChildren.has(parent)) {
    parentToChildren.set(parent, [...parentToChildren.get(parent), child]);
  } else {
    parentToChildren.set(parent, [child]);
  }
};

let relations = [];
console.log(parentToChild(relations) === 'No family relations');

relations = [['James', 'Ben', 'Lisa']];
console.log(
  parentToChild(relations) ===
    '\
  Ben is the parent of James\n\
  Lisa is the parent of James'
);

relations = [
  ['James', 'Ben', 'Lisa'],
  ['George', 'Taylor', 'Fred'],
  ['Jen', 'Ben', 'Gloria'],
];
console.log(
  parentToChild(relations) ===
    '\
  Ben is the parent of James,Jen\n\
  Lisa is the parent of James\n\
  Taylor is the parent of George\n\
  Fred is the parent of George\n\
  Gloria is the parent of Jen'
);

relations = [
  ['Justine', 'Tony', 'Jessica'],
  ['Paavo', 'Jessica', 'Tony'],
  ['Zoe', 'Jessica', 'Tony'],
  ['Benana', 'Ben', 'Ana'],
  ['Egg', 'Rooster', 'Hen'],
  ['Eggart', 'Duck', 'Hen'],
  ['Mule', 'Horse', 'Donkey'],
];
console.log(
  parentToChild(relations) ===
    '\
  Tony is the parent of Justine,Paavo,Zoe\n\
  Jessica is the parent of Justine,Paavo,Zoe\n\
  Ben is the parent of Benana\n\
  Ana is the parent of Benana\n\
  Rooster is the parent of Egg\n\
  Hen is the parent of Egg,Eggart\n\
  Duck is the parent of Eggart\n\
  Horse is the parent of Mule\n\
  Donkey is the parent of Mule'
);

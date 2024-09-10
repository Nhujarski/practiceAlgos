// Prompt
// You're given a comma-separated string of names, and you want to print how many times each name appeared. For each person that appears, you should print a string {name} appeared {x} times., in order of appearance.
// To properly compare results in the test suite, return an array of strings joined by a newline as the result of your method.
// return myArr.join("\n")

function printNameFreq(names) {
  if (names === '') return 'Nobody appeared.';

  let myArr = [];
  let hash = {};

  let namesArr = names.split(',');
  for (let i = 0; i < namesArr.length; i++) {
    if (!hash[namesArr[i].trim()]) {
      hash[namesArr[i].trim()] = 1;
    } else {
      hash[namesArr[i].trim()] += 1;
    }
  }

  for (let key in hash) {
    let str = `${key} appeared ${hash[key]} ${
      hash[key] === 1 ? 'time' : 'times'
    }.`;
    myArr.push(str.trim());
  }
  console.log('.my arr >>>  ', myArr.join('\n'));
  return myArr.join('\n');
}

console.log(printNameFreq('') == 'Nobody appeared.');

console.log(printNameFreq('Tony') == 'Tony appeared 1 time.');

console.log(
  printNameFreq('Tony, Jessica') ==
    'Tony appeared 1 time.\n\
  Jessica appeared 1 time.'
);

console.log(printNameFreq('Tony, Tony, Tony') == 'Tony appeared 3 times.');

console.log(
  printNameFreq('Tony, Jessica, Paavo, Zoe') ==
    'Tony appeared 1 time.\n\
  Jessica appeared 1 time.\n\
  Paavo appeared 1 time.\n\
  Zoe appeared 1 time.'
);

console.log(
  printNameFreq('Tony, Jessica, Paavo, Jessica, Tony, Zoe') ==
    'Tony appeared 2 times.\n\
  Jessica appeared 2 times.\n\
  Paavo appeared 1 time.\n\
  Zoe appeared 1 time.'
);

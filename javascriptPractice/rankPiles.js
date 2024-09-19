// Prompt
// Given an array of integers representing piles of rocks (e.g., 3 means 3 rocks), modify the input array to rank the piles from 1 to N, representing the least to the most quantity of rocks.
// That is, the pile with the lowest count of rocks should be ranked 1, the second lowest should be 2, and so on.
// You may use built-in functions provided by your programming language.

// Input: [10, 8, 15, 12, 6, 20, 1]
// Output: [4, 3, 6, 5, 2, 7, 1]
// Input: [3, 4, 1]
// Output: [2, 3, 1]
// Input: [2, 1]
// Output: [2, 1]

//sort piles and get the index + 1
//make a hash table where the value of the sorted array is the key and the index + 1 is the value
//iterate over the hash and compare it to piles
//return a new array where piles[value] == hash[key] return the value in new array
//key would be rocks rank will be value eg: { '1': 1, "3":2, '4':3}
// // rank would be

//   function rankPiles(piles) {
//     console.log('piles up top', piles)
//     let solution = []
//     piles.forEach((el) => solution.push(el))
//     //make a new sorted array of piles
//     let sortedArr = piles.sort((a, b) => a - b)
//     //make a hash table to store sorted array
//     let sortedHash = {}
//     //iterate over sorted arr and put in hash where where arr[i] : i+1
//     for(let i = 0; i < sortedArr.length; i++){
//       sortedHash[i + 1 ] = sortedArr[i]

//     }
//     //make an empty results array
//     //iterate over hash and push into results arr where piles[i] === hash[key] push hash[value]
//     //return resultarray
//     console.log('piles>>> ', piles)
//   for ( let i = 0; i < solution.length; i++ ) {
//     for ( let key in sortedHash) {
//       if ( solution [i] === sortedHash[key]) {
//         solution [i] = parseInt(key)
//       }
//     }
//   }
//   return solution

//   }

//Solution
const rankPiles = (piles) => {
  const ranks = new Map();

  for (let i = 0; i < piles.length; i++) ranks.set(piles[i], i);

  const sortedKeys = [...ranks.keys()].sort((a, b) => a - b);
  console.log({ sortedKeys });

  let rank = 1;
  for (const key of sortedKeys) {
    piles[ranks.get(key)] = rank;
    console.log('ranks key >>>', ranks.get(key));
    //piles[6] -> 1 rank = 1
    // piles[4] -> 6 rank = 2
    // piles[1] -> 8 rank = 3
    // piles[0] -> 10 rank = 4
    rank += 1;
  }

  return piles;
};

// console.log(rankPiles([]))
// console.log(rankPiles([1]))
// console.log(rankPiles(1, 3, 4, 5, 8))
// console.log(rankPiles([3, 4, 1]))
console.log(rankPiles([10, 8, 15, 12, 6, 20, 1]));

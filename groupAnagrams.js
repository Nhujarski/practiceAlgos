function groupAnagrams(words) {
  const dict = {};
  const result = [];

  for (const w of words) {
    const sorted = w.split('').sort().join('');
    if (dict[sorted] === undefined) {
      dict[sorted] = [];
      result.push(dict[sorted]);
    }
    dict[sorted].push(w);
  }

  return result;
}

// function groupAnagrams(input){
//   if(!input) return input
//   let output = []
//   let dict = {}
//   let idx  = 0;
//   for(const word of input) {
//       let temp = word.split('').sort().join('')
//       if(dict[temp] === undefined){
//         dict[temp] = idx
//         output.push([word])
//         idx++
//       } else {
//         output[dict[temp]].push(word)
//       }
//   }
//   if(output.length === 1) return output[0]
//   return output
// }

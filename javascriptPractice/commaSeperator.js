// Prompt

// Given an array of strings, combine them into one string, comma separated except for the last two pair, which should be separated with the word "and". We don't want an Oxford comma, so given ["Sam", "Grant", "Jenny"], return "Sam, Grant and Jenny".

// Function Signature
// my solution
// function commaSeparate(input) {
//   let str = ''
//   if ( input.length === 0 ) {
//     return ''
//   } else if (input.length === 1) {
//     str = input[0]
//     return str
//   } else if( input.length === 2) {
//     str = `${input[0]} and ${input[1]}`
//     return str
//   }
//   let sliced = input.slice(0,input.length - 1)
//   let joined = sliced.join(', ')
//   str = `${joined} and ${input[input.length - 1]}`
//   return str;
// }

function commaSeparate(input) {
  const output = [];

  for (let i = 0; i < input.length; i++) {
    if (output.length > 0) {
      // need a separator
      if (i === input.length - 1) output.push(' and ');
      else output.push(', ');
    }

    output.push(input[i]);
  }

  return output.join('');
}

console.log(commaSeparate([]) == '');

console.log(commaSeparate(['Sophie']) == 'Sophie');

console.log(commaSeparate(['Daniel', 'Craig']) == 'Daniel and Craig');

console.log(
  commaSeparate(['Oliver', 'Pixel', 'Fido']) == 'Oliver, Pixel and Fido'
);

console.log(
  commaSeparate(['Jono', 'Paavo', 'Tony', 'me']) == 'Jono, Paavo, Tony and me'
);

console.log(commaSeparate(['John', 'John', 'John']) == 'John, John and John');

console.log(commaSeparate(['Sean', 'John', 'Sean']) == 'Sean, John and Sean');

function printSubSequences(word, subseq = '') {
  if (word.length === 0) {
    console.log('/' + subseq + '/');
    return;
  }
  printSubSequences(word.slice(1), subseq + word[0]);
  printSubSequences(word.slice(1), subseq);
}
console.log(printSubSequences('abcd'));

function isPlural(word) {
  return word[word.length - 1] === 's';
}

console.log(isPlural('dogs'));
console.log(isPlural('dog'));
console.log(isPlural('cats'));
console.log(isPlural('cat'));
console.log(isPlural('airplanes'));

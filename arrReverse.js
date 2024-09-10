// Problem Statement: Write a function that takes an array and reverses its elements in place. Do not use built-in methods!

const reverse = (arr) => {
  let i = 0;
  let j = arr.length - 1;

  while (i < j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    i++;
    j--;
  }
  return arr;
};

console.log(reverse([]) == []);
console.log(reverse([5]) == [5]);
console.log(reverse([5, 10]) == [10, 5]);
console.log(reverse([5, 10, 15]) == [15, 10, 5]);
console.log(reverse([5, 10, 15, 20]) == [20, 15, 10, 5]);
console.log(reverse([1, 2, 3, 4, 5]) == [5, 4, 3, 2, 1]);

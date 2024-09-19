function reduce(callback, initalVal, arr) {
  let result = initalVal;
  for (let i = 0; i < arr.length; i++) {
    result = callback(result, arr[i]);
  }
  return result;
}

const sum = (sum, num) => {
  sum += num;
  return sum;
};
const array = [1, 2, 3, 4];
console.log(reduce(sum, 0, array));

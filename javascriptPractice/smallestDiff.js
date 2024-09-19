function smallestDiff(arr1, arr2) {
  let sol = [0, 0];
  let min = Infinity;

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      let currDiff = Math.abs(arr1[i] - arr2[j]);
      if (currDiff < min) {
        min = currDiff;
        sol[0] = arr1[i];
        sol[1] = arr2[j];
      }
    }
  }
  return sol;
}

console.log(smallestDiff([1, 2, 3, 4], [5, 6, 7, 8])); // [4,5]

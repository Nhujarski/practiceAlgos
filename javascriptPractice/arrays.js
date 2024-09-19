// test data
const testData = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const k = 3;
// Print out every value
// const printArray = (arr) => {
//   for (let i = 0; i < arr.length; i++) {
//     console.log(' printArray',arr[i]);
//   }
// }
// Print out every other value
// const printEveryOtherValue = (arr) => {
//   for (let i = 0; i < arr.length; i+= 2) {
//     console.log(' printEveryOtherValue',arr[i]);
//   }
// }
// Print out every other value, skipping the first one
// const printEveryOtherValueSkipFirst = (arr) => {
//   for ( let i = 1; i < arr.length; i += 2) {
//     console.log(arr[i])
//   }
// }
// Add a second parameter, k, and now print out every kth value, starting with the first.
// const printEveryKth = (arr,k) => {
//   for ( let i = 0; i < arr.length; i += k) {
//     console.log(arr[i]);
//   }
// }
// Finally, print all of these again in reverse:
// Every element starting with the last
// const printReverse = (arr) => {
//   for(let i = arr.length - 1; i >= 0; i--){
//     console.log(arr[i])
//   }
// }
// Every other element starting with the last index
// const printReverseEveryOtherValue = (arr) => {
//   for ( let i = arr.length - 1; i>=0; i-=2 ) {
//     console.log(arr[i])
//   }
// }
// Every other element skipping the last index
// const printReverseEveryOtherValueSkipLast = (arr) => {
//   for (let i = arr.length - 2; i >= 0; i -= 2) {
//     console.log(arr[i])
//   }
// }
// Every kth element starting with the last
// const printReverseEveryKth = (arr,k) => {
//   for (let i = arr.length - 1; i >= 0; i -= k) {
//     console.log(arr[i])
//   }
// }

// printArray(testData);  // 0,1,2,3,4,5,6,7,8,9,10,
// printEveryOtherValue(testData);  // 0,2,4,6,8,10,
// printEveryOtherValueSkipFirst(testData);  // 1,3,5,7,9
// printEveryKth(testData, k); // 0,3,6,9
// printReverse(testData); //10,9,8,7,6,5,4,3,2,1,0,
// printReverseEveryOtherValue(testData); // 10,8,6,4,2,0,
// printReverseEveryOtherValueSkipLast(testData); // 9,7,5,3,1
// printReverseEveryKth(testData, k); // 10,7,4,1

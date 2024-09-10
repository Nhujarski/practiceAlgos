//https://docs.opencv.org/4.x/d4/d86/group__imgproc__filter.html#ga4ff0f3318642c4f469d0e11f242f3b6c

// output always same length as input image
// k is always odd
// input is all 0s or 1s (binary)

// [0, 1, 0], 3 => [1, 1, 1]
// [0, 1, 0, 0], 3 => [1, 1, 1, 0]
// [1, 0, 0, 0], 3 => [1, 1, 0, 0]
// [1, 0, 0, 0], 5 => [1, 1, 1, 0]
// [0, 1, 0, 1], 3 => [1, 1, 1, 1]

// [1,0,0,0,0,0,0,1,0,0,0,0,0,1,0], k=10

//       [1, 0, 0, 1, 0, 0, 0, 0, 0, 1,]
//  1  1  1  1  1
back = -2, remaining = 5
back = -1, remaining = 4
back = 0, remaining = 5
back = 3, remaining = 4
      1, 1, 1, 1, 0, 0, 0, 0, 0, 1,]
//           1  1  1  1  1
//                             1  1  1  1  1
//       [1, 1, 1, 1, 1, 1, 0, 1, 1, 1,]
/* 
Approach:
loop through array
find the first 1
if aarr[left] or arr[right] == 0
k = ; change the right two 0s and left two 0s to 1s
swap


Loop through array
if index is 1:
// enter subloop setting k elements to 1
for each element in index - k/2 to index + k/2:
  element = 1

*/
function dilate(img, k) {

let output = [...img]
for(let i = 0; i < img.length; i++) {
if(img[i] === 1) {
  let lower_bound = i - Math.floor(k / 2)
  let upper_bound = i + Math.ceil(k / 2)
  console.log(lower_bound, upper_bound)
  for(let j = Math.max(0, lower_bound);
          j < Math.min(upper_bound, img.length);
          j++) {
    output[j] = 1
  }
}
}
return output
}

console.log(dilate([0,1,0],3)) // [1,1,1]
console.log(dilate([0,1,0,0,0,1],3)) 
console.log(dilate([1, 1, 1, 0], 5)) 

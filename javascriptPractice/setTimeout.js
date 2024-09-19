// practicing set timeout for a type speed challange

// setTimeout(() => {
//   console.log('1 second passed ');
// }, 1000);

let milliSec = 0;
let seconds = 0;
let minutes = 0;
setInterval(() => {
  milliSec += 1;
  if (milliSec > 60) {
    seconds += 1;
    milliSec = 0;
  }
  if (seconds > 60) {
    minutes += 1;
    seconds = 0;
  }
  console.log(`${minutes}.${seconds}.${milliSec}`);
}, 100);

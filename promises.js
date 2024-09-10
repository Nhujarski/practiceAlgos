// let p = new Promise((resolve, reject) => {
//   let a = 1 + 1;
//   if (a == 2) {
//     resolve('Success');
//   } else {
//     reject('Failed');
//   }
// });
// p.then((message) => console.log(`this is in the then: ${message}`)).catch(
//   (message) => console.log(`this is in the catch: ${message}`)
// );

const { resolveModuleName } = require('typescript');

const userLeft = false;
const userWatchingCatMeme = true;

function watchTutorial(callback, errorCallback) {
  if (userLeft) {
    errorCallback({
      name: 'User Left',
      message: ':(',
    });
  } else if (userWatchingCatMeme) {
    errorCallback({
      name: 'User Watching Cat Meme',
      message: ' WebDevSimplified < Cat',
    });
  } else {
    callback('Thumbs up and Subscribe!');
  }
}

// watchTutorial(
//   (message) => {
//     console.log(`Success ${message}`);
//   },
//   (error) => {
//     console.log(`${error.name} ${error.message}`);
//   }
// );

function watchTutorialPromise() {
  return new Promise((resolve, reject) => {
    if (userLeft) {
      reject({
        name: 'User Left',
        message: ':(',
      });
    } else if (userWatchingCatMeme) {
      reject({
        name: 'User Watching Cat Meme',
        message: ' WebDevSimplified < Cat',
      });
    } else {
      resolve('Thumbs up and Subscribe!');
    }
  });
}

// watchTutorialPromise()
//   .then((message) => console.log(message))
//   .catch((error) => console.log(` ${error.name} ${error.message}`));

const recordVid1 = new Promise((resolve, reject) => {
  resolve('video 1 recording');
});

const recordVid2 = new Promise((resolve, reject) => {
  resolve('video 2 recording');
});

const recordVid3 = new Promise((resolve, reject) => {
  resolve('video 3 recording');
});

Promise.all([recordVid1, recordVid2, recordVid3]).then((messages) =>
  messages.map((message) => console.log(message))
);

// TODO  dogs to ask practice queues

/* 
Prompt
Oliver the Dog is missing his favorite hat and is asking his friends at the dog park if they've seen it. Each dog either has seen it or suggests a list of other dogs to ask. Return the name of the dog who has seen the hat. Oliver starts out by asking his best friend. This function will take two parameters. The first is a map of dogs to a list of their friends. The second is Oliver's best friend, who Oliver will ask first.
One of the most common uses of a queue is to keep a list of "work to be done". Just like doing housework, often new things get added to the to-do list while doing some other task. New jobs get added to the end of the queue, and when one is complete, the next one is taken from the top of the list.

Nicks Approach:
iterate through dogs
find the best friend
look at the value and add that to asked queue
remove it onces seen and add next asked to queue
once you fid the key with val of HAT return key


Approach:
Use a queue to keep a list of dogs to ask. Start with Oliver's best friend in the queue. On every loop iteration, pull the first name off of the queue and look for the "HAT" and if not, add that dog's suggestions to the queue.
Be sure to keep track of dogs you have already asked so you don't get stuck in an infinite loop!
*/

// Function Signature
function findHat(dogs, bestFriend) {
  const dogsToAsk = [bestFriend];
  const dogsAlreadyAsked = new Set();

  while (dogsToAsk.length > 0) {
    const nextDogToAsk = dogsToAsk.pop();
    if (dogsAlreadyAsked.has(nextDogToAsk)) {
      continue;
    }

    if (dogs[nextDogToAsk][0] === 'HAT') {
      return nextDogToAsk;
    }

    dogsAlreadyAsked.add(nextDogToAsk);
    const newDogsToAsk = dogs[nextDogToAsk];
    dogsToAsk.unshift(...newDogsToAsk);
  }

  return "Couldn't find the hat";
}

let dogs = {
  Carter: ['Fido', 'Ivy'],
  Ivy: ['HAT'], // Ivy has seen the hat
  Loki: ['Snoopy'],
  Pepper: ['Carter'],
  Snoopy: ['Pepper'],
  Fido: [],
};
console.log(findHat(dogs, 'Loki') == 'Ivy');
console.log(findHat(dogs, 'Snoopy') == 'Ivy');
console.log(findHat(dogs, 'Ivy') == 'Ivy');
console.log(findHat(dogs, 'Fido') == "Couldn't find the hat");

dogs = {
  Zoe: ['Jono'],
  Jono: ['Angus'], // dead-end, circular knowledge
  Angus: ['Jono'], // dead-end, circular knowledge
  Paavo: ['Zoe', 'Oliver'],
  Oliver: ['HAT'],
};
console.log(findHat(dogs, 'Paavo') == 'Oliver');
console.log(findHat(dogs, 'Oliver') == 'Oliver');
console.log(findHat(dogs, 'Zoe') == "Couldn't find the hat");
console.log(findHat(dogs, 'Angus') == "Couldn't find the hat");
console.log(findHat(dogs, 'Jono') == "Couldn't find the hat");

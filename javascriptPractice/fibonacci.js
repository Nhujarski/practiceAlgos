//TODO fibb for tonights session

// program to display fibonacci sequence using recursion
function fibonacci(num) {
  if (num <= 1) {
    return 1;
  } else {
    return fibonacci(num - 1) + fibonacci(num - 2);
  }
}

function printFib(num) {
  for (let i = 0; i < num; i++) {
    console.log(fibonacci(i));
  }
}
console.log(fibonacci(5));

console.log(printFib(6));

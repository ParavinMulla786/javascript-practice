// Write a function to add two numbers.
function addition(a, b) {
  return a + b;
}

console.log(addition(20, 40));

function isPrime(num) {
  if (num <= 1) return false;

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

console.log(isPrime(7)); 
console.log(isPrime(10)); 
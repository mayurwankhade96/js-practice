const number = parseInt(prompt("Enter a positive integer"));
let isPrime = true;

if (number === 1) {
  console.log("1 is neither prime nor composite number.");
} else if (number > 1) {
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      isPrime = false;
      break;
    }
  }
}

if (isPrime) {
  console.log(`${number} is prime`);
} else {
  console.log(`${number} is a not prime number`);
}
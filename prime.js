function isPrime(number) {
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
}

isPrime(5);
isPrime(6);
isPrime(2);

// Extend the program to take a range of number as input and output the Prime Numbers in that range.

function getPrimeNumbers(range) {
  let isPrime = true;
  for (let i = 2; i <= range; i++) {
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        isPrime = false;
      }
    }
    if (isPrime === true) {
      console.log(i);
    } else {
      isPrime = true;
    }
  }
}

getPrimeNumbers(15);

// Write a program that computes a factorial of a number taken as input.
// 5 Factorial – 5! = 1 * 2 * 3 * 4 * 5

function getFactorial(number) {
  let f = 1;

  for (let i = 1; i <= number; i++) {
    f = f * i;
  }

  console.log(f);
}

getFactorial(5);
getFactorial(8);
getFactorial(4);

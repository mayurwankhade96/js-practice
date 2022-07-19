function getFibonacci(numberOfTerms) {
  let num1 = 0;
  let num2 = 1;
  console.log(num1);
  console.log(num2);

  for (let i = 1; i <= numberOfTerms; i++) {
    let nextNum = num1 + num2;
    console.log(nextNum);
    num1 = num2;
    num2 = nextNum;
  }
}

getFibonacci(8);

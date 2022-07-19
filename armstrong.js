function isArmstrongNumber(number) {
  const NUMBER_OF_DIGITS = (number + "").length;
  let sum = 0;
  let temp = number;

  while (temp > 0) {
    remainder = temp % 10;
    sum = sum + remainder ** NUMBER_OF_DIGITS;
    temp = parseInt(temp / 10);
  }

  if (sum === number) {
    console.log(`${number} is armstrong`);
  } else {
    console.log(`${number} is not an armstrong`);
  }
}

isArmstrongNumber(25);

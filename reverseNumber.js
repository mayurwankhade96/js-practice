function reverseNumber(number) {
  let reverse = 0;

  while (number != 0) {
    let remainder = number % 10;
    reverse = reverse * 10 + remainder;
    number = parseInt(number / 10);
  }

  console.log(reverse);
}

reverseNumber(53);
reverseNumber(1544879);

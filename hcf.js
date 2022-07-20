function getHcf(num1, num2) {
  let hcf = 0;
  for (let i = 1; i <= num1 && i <= num2; i++) {
    if (num1 % i === 0 && num2 % i === 0) {
      hcf = i;
    }
  }

  console.log(hcf);
}

getHcf(60, 72);
getHcf(50, 500);

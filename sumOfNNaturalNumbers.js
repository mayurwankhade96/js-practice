var sum = 0,
  n;

n = parseInt(prompt("Enter any number: "));

while (n >= 1) {
  sum = sum + n;
  n = n - 1;
}
alert("Sum is " + sum);

// using temporary variable
function swapNumber1(a, b) {
  let temp;

  temp = a;
  a = b;
  b = temp;

  console.log(`value of a and b after swapping is ${a}, ${b}`);
}

swapNumber1(5, 6);

// using es6 destructuring
function swapNumber2(a, b) {
  [a, b] = [b, a];

  console.log(`value of a and b after swapping is ${a}, ${b}`);
}

swapNumber2(15, 200);

// using arithmetic operators
function swapNumber3(a, b) {
  a = a + b;
  b = a - b;
  a = a - b;

  console.log(`value of a and b after swapping is ${a}, ${b}`);
}

swapNumber3(123, 564);

// using bitwise XOR operator
function swapNumber4(a, b) {
  a = a ^ b;
  b = a ^ b;
  a = a ^ b;

  console.log(`value of a and b after swapping is ${a}, ${b}`);
}

swapNumber4(444, 555);

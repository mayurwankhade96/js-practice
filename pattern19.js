//         5
//       4 5 4
//     3 4 5 4 3
//   2 3 4 5 4 3 2
// 1 2 3 4 5 4 3 2 1
//   2 3 4 5 4 3 2
//     3 4 5 4 3
//       4 5 4
//         5

function pattern43(numberOfRows) {
  let string = "";

  for (let i = 1; i <= numberOfRows; i++) {
    for (let j = 1; j <= numberOfRows - i; j++) {
      string = string + " ";
    }
    for (let k = 1; k <= i; k++) {
      string = string + (numberOfRows - i + k);
    }
    for (let k = 2; k <= i; k++) {
      string = string + (numberOfRows - k + 1);
    }
    string = string + "\n";
  }
  for (let i = 1; i <= numberOfRows - 1; i++) {
    for (let j = 1; j <= i; j++) {
      string = string + " ";
    }
    for (let k = 2; k <= numberOfRows - i + 1; k++) {
      string = string + (k + i - 1);
    }
    for (let k = numberOfRows - i; k >= 2; k--) {
      string = string + (k + i - 1);
    }
    string = string + "\n";
  }

  console.log(string);
}

pattern43(5);

//         5
//       5 4 5
//     5 4 3 4 5
//   5 4 3 2 3 4 5
// 5 4 3 2 1 2 3 4 5
//   5 4 3 2 3 4 5
//     5 4 3 4 5
//       5 4 5
//         5

function pattern44(numberOfRows) {
  let string = "";

  for (let i = 1; i <= numberOfRows; i++) {
    for (let j = 1; j <= numberOfRows - i; j++) {
      string = string + " ";
    }
    for (let k = 1; k <= i; k++) {
      string = string + (numberOfRows - k + 1);
    }
    for (let k = 2; k <= i; k++) {
      string = string + (numberOfRows - i + k);
    }
    string = string + "\n";
  }
  for (let i = 1; i <= numberOfRows - 1; i++) {
    for (let j = 1; j <= i; j++) {
      string = string + " ";
    }
    for (let k = numberOfRows - i; k >= 1; k--) {
      string = string + (k + i);
    }
    for (let k = 2; k <= numberOfRows - i; k++) {
      string = string + (k + i);
    }
    string = string + "\n";
  }

  console.log(string);
}

pattern44(5);

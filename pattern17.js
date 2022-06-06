// * * * * * * * * *
//   * * * * * * *
//     * * * * *
//       * * *
//         *

function pattern34(numberOfRows) {
  let string = "";

  for (let i = 1; i <= numberOfRows; i++) {
    for (let j = 1; j < i; j++) {
      string = string + " ";
    }
    for (let k = 1; k <= 2 * numberOfRows - (2 * i - 1); k++) {
      string = string + "*";
    }
    string = string + "\n";
  }

  console.log(string);
}

pattern34(5);

// 5 5 5 5 5 5 5 5 5
//   4 4 4 4 4 4 4
//     3 3 3 3 3
//       2 2 2
//         1

function pattern35(numberOfRows) {
  let string = "";

  for (let i = 1; i <= numberOfRows; i++) {
    for (let j = 1; j < i; j++) {
      string = string + " ";
    }
    for (let k = 1; k <= 2 * numberOfRows - (2 * i - 1); k++) {
      string = string + (numberOfRows - i + 1);
    }
    string = string + "\n";
  }

  console.log(string);
}

pattern35(5);

// I I I I I I I I I
//   G G G G G G G
//     E E E E E
//       C C C
//         A

function pattern36(numberOfRows) {
  let string = "";

  for (let i = 1; i <= numberOfRows; i++) {
    for (let j = 1; j < i; j++) {
      string = string + " ";
    }
    for (let k = 1; k <= 2 * numberOfRows - (2 * i - 1); k++) {
      string =
        string + String.fromCharCode(64 + (2 * numberOfRows - (2 * i - 1)));
    }
    string = string + "\n";
  }

  console.log(string);
}

pattern36(5);

// 1 2 3 4 5 6 7
//   1 2 3 4 5
//     1 2 3
//       1

function pattern37(numberOfRows) {
  let string = "";

  for (let i = 1; i <= numberOfRows; i++) {
    for (let j = 1; j < i; j++) {
      string = string + " ";
    }
    for (let k = 1; k <= 2 * numberOfRows - (2 * i - 1); k++) {
      string = string + k;
    }
    string = string + "\n";
  }

  console.log(string);
}

pattern37(4);

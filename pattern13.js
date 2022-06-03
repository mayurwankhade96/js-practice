// * * * * *
//   * * * *
//     * * *
//       * *
//         *

function pattern22(numberOfRows) {
  let string = "";

  for (let i = 1; i <= numberOfRows; i++) {
    for (let j = 1; j <= i - 1; j++) {
      string = string + " ";
    }

    for (let k = 1; k <= numberOfRows - i + 1; k++) {
      string = string + "*";
    }
    string = string + "\n";
  }

  console.log(string);
}

pattern22(5);

// 5 5 5 5 5
//   4 4 4 4
//     3 3 3
//       2 2
//         1

function pattern23(numberOfRows) {
  let string = "";

  for (let i = 1; i <= numberOfRows; i++) {
    for (let j = 1; j <= i - 1; j++) {
      string = string + " ";
    }

    for (let k = 1; k <= numberOfRows - i + 1; k++) {
      string = string + (numberOfRows - i + 1);
    }
    string = string + "\n";
  }

  console.log(string);
}

pattern23(5);

// A B C D E
//   A B C D
//     A B C
//       A B
//         A

function pattern24(numberOfRows) {
  let string = "";

  for (let i = 1; i <= numberOfRows; i++) {
    for (let j = 1; j <= i - 1; j++) {
      string = string + " ";
    }

    for (let k = 1; k <= numberOfRows - i + 1; k++) {
      string = string + String.fromCharCode(64 + k);
    }
    string = string + "\n";
  }

  console.log(string);
}

pattern24(5);

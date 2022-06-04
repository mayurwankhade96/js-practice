//         *
//       * * *
//     * * * * *
//   * * * * * * *
// * * * * * * * * *

function pattern25(numberOfRow) {
  let string = "";

  for (let i = 1; i <= numberOfRow; i++) {
    for (let j = 1; j <= numberOfRow - i; j++) {
      string = string + " ";
    }

    for (let k = 1; k <= 2 * i - 1; k++) {
      string = string + "*";
    }

    string = string + "\n";
  }

  console.log(string);
}

pattern25(5);

//         1
//       2 2 2
//     3 3 3 3 3
//   4 4 4 4 4 4 4
// 5 5 5 5 5 5 5 5 5

function pattern26(numberOfRow) {
  let string = "";

  for (let i = 1; i <= numberOfRow; i++) {
    for (let j = 1; j <= numberOfRow - i; j++) {
      string = string + " ";
    }

    for (let k = 1; k <= 2 * i - 1; k++) {
      string = string + i;
    }

    string = string + "\n";
  }

  console.log(string);
}

pattern26(5);

//         A
//       C C C
//     E E E E E
//   G G G G G G G
// I I I I I I I I I

function pattern27(numberOfRow) {
  let string = "";

  for (let i = 1; i <= numberOfRow; i++) {
    for (let j = 1; j <= numberOfRow - i; j++) {
      string = string + " ";
    }

    for (let k = 1; k <= 2 * i - 1; k++) {
      string = string + String.fromCharCode(64 + (2 * i - 1));
    }

    string = string + "\n";
  }

  console.log(string);
}

pattern27(5);

//         1
//       1 2 3
//     1 2 3 4 5
//   1 2 3 4 5 6 7
// 1 2 3 4 5 6 7 8 9

function pattern28(numberOfRow) {
  let string = "";

  for (let i = 1; i <= numberOfRow; i++) {
    for (let j = 1; j <= numberOfRow - i; j++) {
      string = string + " ";
    }

    for (let k = 1; k <= 2 * i - 1; k++) {
      string = string + k;
    }

    string = string + "\n";
  }

  console.log(string);
}

pattern28(5);

//         A
//       C B A
//     E D C B A
//   G F E D C B A
// I H G F E D C B A

function pattern29(numberOfRow) {
  let string = "";

  for (let i = 1; i <= numberOfRow; i++) {
    for (let j = 1; j <= numberOfRow - i; j++) {
      string = string + " ";
    }

    for (let k = 1; k <= 2 * i - 1; k++) {
      string = string + String.fromCharCode(64 + (2 * i - k));
    }

    string = string + "\n";
  }

  console.log(string);
}

pattern29(5);

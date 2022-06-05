//         0
//       1 0 1
//     2 1 0 1 2
//   3 2 1 0 1 2 3
// 4 3 2 1 0 1 2 3 4

function pattern30(numberOfRows) {
  let string = "";

  for (let i = 1; i <= numberOfRows; i++) {
    for (let j = 1; j <= numberOfRows - i; j++) {
      string = string + " ";
    }

    for (let k = 1; k <= i; k++) {
      string = string + (i - k);
    }
    for (let k = 2; k <= i; k++) {
      string = string + (k - 1);
    }
    string = string + "\n";
  }

  console.log(string);
}

pattern30(5);

//         A
//       B A B
//     C B A B C
//   D C B A B C D
// E D C B A B C D E

function pattern31(numberOfRows) {
  let string = "";

  for (let i = 1; i <= numberOfRows; i++) {
    for (let j = 1; j <= numberOfRows - i; j++) {
      string = string + " ";
    }

    for (let k = 1; k <= i; k++) {
      string = string + String.fromCharCode(65 + i - k);
    }
    for (let k = 2; k <= i; k++) {
      string = string + String.fromCharCode(65 + k - 1);
    }
    string = string + "\n";
  }

  console.log(string);
}

pattern31(5);

//         1
//       1 2 1
//     1 2 3 2 1
//   1 2 3 4 3 2 1
// 1 2 3 4 5 4 3 2 1

function pattern32(numberOfRows) {
  let string = "";

  for (let i = 1; i <= numberOfRows; i++) {
    for (let j = 1; j <= numberOfRows - i; j++) {
      string = string + " ";
    }

    for (let k = 1; k <= i; k++) {
      string = string + k;
    }
    for (let k = 2; k <= i; k++) {
      string = string + (i - k + 1);
    }
    string = string + "\n";
  }

  console.log(string);
}

pattern32(5);

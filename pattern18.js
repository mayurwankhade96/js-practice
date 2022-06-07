//     *
//    * *
//   * * *
//  * * * *
// * * * * *
//  * * * *
//   * * *
//    * *
//     *

function pattern38(numberOfRows) {
  let string = "";

  for (let i = 1; i <= numberOfRows; i++) {
    for (let j = 1; j <= numberOfRows - i; j++) {
      string = string + " ";
    }

    for (let k = 1; k <= i; k++) {
      string = string + "* ";
    }
    string = string + "\n";
  }

  for (let i = 1; i <= numberOfRows - 1; i++) {
    for (let j = 1; j <= i; j++) {
      string = string + " ";
    }
    for (let k = 1; k <= numberOfRows - i; k++) {
      string = string + "* ";
    }
    string = string + "\n";
  }

  console.log(string);
}

pattern38(5);

//     1
//    1 2
//   1 2 3
//  1 2 3 4
// 1 2 3 4 5
//  1 2 3 4
//   1 2 3
//    1 2
//     1

function pattern39(numberOfRows) {
  let string = "";

  for (let i = 1; i <= numberOfRows; i++) {
    for (let j = 1; j <= numberOfRows - i; j++) {
      string = string + " ";
    }

    for (let k = 1; k <= i; k++) {
      string = string + k + " ";
    }
    string = string + "\n";
  }

  for (let i = 1; i <= numberOfRows - 1; i++) {
    for (let j = 1; j <= i; j++) {
      string = string + " ";
    }
    for (let k = 1; k <= numberOfRows - i; k++) {
      string = string + k + " ";
    }
    string = string + "\n";
  }

  console.log(string);
}

pattern39(5);

//     4
//    4 3
//   4 3 2
//  4 3 2 1
// 4 3 2 1 0
//  4 3 2 1
//   4 3 2
//    4 3
//     4

function pattern40(numberOfRows) {
  let string = "";

  for (let i = 1; i <= numberOfRows; i++) {
    for (let j = 1; j <= numberOfRows - i; j++) {
      string = string + " ";
    }

    for (let k = 1; k <= i; k++) {
      string = string + (numberOfRows - k) + " ";
    }
    string = string + "\n";
  }

  for (let i = 1; i <= numberOfRows - 1; i++) {
    for (let j = 1; j <= i; j++) {
      string = string + " ";
    }
    for (let k = 1; k <= numberOfRows - i; k++) {
      string = string + (numberOfRows - k) + " ";
    }
    string = string + "\n";
  }

  console.log(string);
}

pattern40(5);

//    3
//   2 3
//  1 2 3
// 0 1 2 3
//  1 2 3
//   2 3
//    3

function pattern41(numberOfRows) {
  let string = "";

  for (let i = 1; i <= numberOfRows; i++) {
    for (let j = 1; j <= numberOfRows - i; j++) {
      string = string + " ";
    }

    for (let k = 1; k <= i; k++) {
      string = string + (numberOfRows - i + k - 1) + " ";
    }
    string = string + "\n";
  }

  for (let i = 1; i <= numberOfRows - 1; i++) {
    for (let j = 1; j <= i; j++) {
      string = string + " ";
    }
    for (let k = 1; k <= numberOfRows - i; k++) {
      string = string + (i + k - 1) + " ";
    }
    string = string + "\n";
  }

  console.log(string);
}

pattern41(4);

//     E
//    D E
//   C D E
//  B C D E
// A B C D E
//  B C D E
//   C D E
//    D E
//     E

function pattern42(numberOfRows) {
  let string = "";

  for (let i = 1; i <= numberOfRows; i++) {
    for (let j = 1; j <= numberOfRows - i; j++) {
      string = string + " ";
    }

    for (let k = 1; k <= i; k++) {
      string =
        string + String.fromCharCode(65 + numberOfRows - i + k - 1) + " ";
    }
    string = string + "\n";
  }

  for (let i = 1; i <= numberOfRows - 1; i++) {
    for (let j = 1; j <= i; j++) {
      string = string + " ";
    }
    for (let k = 1; k <= numberOfRows - i; k++) {
      string = string + String.fromCharCode(65 + i + k - 1) + " ";
    }
    string = string + "\n";
  }

  console.log(string);
}

pattern42(5);

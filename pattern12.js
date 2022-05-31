//               *
//             * *
//           * * *
//         * * * *
//       * * * * *
//     * * * * * *
//   * * * * * * *
// * * * * * * * *

function pattern19(numberOfRows) {
  let string = "";

  for (let i = 1; i <= numberOfRows; i++) {
    // printing spaces
    for (let j = 1; j <= numberOfRows - i; j++) {
      string = string + " ";
    }

    // printing star
    for (let k = 1; k <= i; k++) {
      string = string + "*";
    }
    string = string + "\n";
  }

  console.log(string);
}

pattern19(5);

//             1

//           2 2

//         3 3 3

//       4 4 4 4

//     5 5 5 5 5

//   6 6 6 6 6 6

// 7 7 7 7 7 7 7

function pattern20(numberOfRows) {
  let string = "";

  for (let i = 1; i <= numberOfRows; i++) {
    // printing spaces
    for (let j = 1; j <= numberOfRows - i; j++) {
      string = string + " ";
    }

    // printing numbers
    for (let k = 1; k <= i; k++) {
      string = string + i;
    }
    string = string + "\n";
  }

  console.log(string);
}

pattern20(7);

//                   A
//                 A B
//               A B C
//             A B C D
//           A B C D E
//         A B C D E F
//       A B C D E F G
//     A B C D E F G H
//   A B C D E F G H I
// A B C D E F G H I J

function pattern21(numberOfRows) {
  let string = "";

  for (let i = 1; i <= numberOfRows; i++) {
    // printing spaces
    for (let j = 1; j <= numberOfRows - i; j++) {
      string = string + " ";
    }

    // printing numbers
    for (let k = 1; k <= i; k++) {
      string = string + String.fromCharCode(64 + k);
    }
    string = string + "\n";
  }

  console.log(string);
}

pattern21(10);

//     *
//    * *
//   *   *
//  *	    *
// *	     *

function pattern45(numberOfRows) {
  let string = "";

  for (let i = 1; i <= numberOfRows; i++) {
    for (j = numberOfRows - i; j >= 1; j--) {
      string = string + " ";
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
      if (k === 1 || k === 2 * i - 1) {
        string = string + "*";
      } else {
        string = string + " ";
      }
    }
    string = string + "\n";
  }

  console.log(string);
}

pattern45(5);

//    *	      *
//     *	   *
//      *   *
//       * *
//        *

function pattern46(numberOfRows) {
  let string = "";

  for (let i = 1; i <= numberOfRows; i++) {
    for (let j = 2; j <= i; j++) {
      string = string + " ";
    }
    for (let k = 2 * numberOfRows - (2 * i - 1); k >= 1; k--) {
      if (k === 2 * numberOfRows - (2 * i - 1) || k === 1) {
        string = string + "*";
      } else {
        string = string + " ";
      }
    }
    string = string + "\n";
  }

  console.log(string);
}

pattern46(5);

//     1
//    2 2
//   3   3
//  4     4
// 5       5

function pattern47(numberOfRows) {
  let string = "";

  for (let i = 1; i <= numberOfRows; i++) {
    for (let j = numberOfRows - 1; j >= i; j--) {
      string = string + " ";
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
      if (k === 1 || k === 2 * i - 1) {
        string = string + i;
      } else {
        string = string + " ";
      }
    }
    string = string + "\n";
  }

  console.log(string);
}

pattern47(5);

//     E
//    D D
//   C   C
//  B	    B
// A	     A

function pattern48(numberOfRows) {
  let string = "";

  for (let i = 1; i <= numberOfRows; i++) {
    for (let j = numberOfRows - 1; j >= i; j--) {
      string = string + " ";
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
      if (k === 1 || k === 2 * i - 1) {
        string = string + String.fromCharCode(65 + (numberOfRows - i));
      } else {
        string = string + " ";
      }
    }
    string = string + "\n";
  }

  console.log(string);
}

pattern48(5);

// 1	     1
//  2	    2
//   3   3
//    4 4
//     5

function pattern49(numberOfRows) {
  let string = "";

  for (let i = 1; i <= numberOfRows; i++) {
    for (let j = 1; j < i; j++) {
      string = string + " ";
    }
    for (let k = 2 * numberOfRows - (2 * i - 1); k >= 1; k--) {
      if (k === 1 || k === 2 * numberOfRows - (2 * i - 1)) {
        string = string + i;
      } else {
        string = string + " ";
      }
    }
    string = string + "\n";
  }

  console.log(string);
}

pattern49(5);

// D     D
//  C   C
//   B B
//    A

function pattern50(numberOfRows) {
  let string = "";

  for (let i = 1; i <= numberOfRows; i++) {
    for (let j = 1; j < i; j++) {
      string = string + " ";
    }
    for (let k = 2 * numberOfRows - (2 * i - 1); k >= 1; k--) {
      if (k === 1 || k === 2 * numberOfRows - (2 * i - 1)) {
        string = string + String.fromCharCode(65 + (numberOfRows - i));
      } else {
        string = string + " ";
      }
    }
    string = string + "\n";
  }

  console.log(string);
}

pattern50(4);

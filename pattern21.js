// *****
// *   *
// *   *
// *   *
// *****

function pattern51(numberOfRows) {
  let string = "";

  for (let i = 1; i <= numberOfRows; i++) {
    for (let j = 1; j <= numberOfRows; j++) {
      if (i === 1 || i === numberOfRows) {
        string = string + "*";
      } else if (j === 1 || j === numberOfRows) {
        string = string + "*";
      } else {
        string = string + " ";
      }
    }
    string = string + "\n";
  }

  console.log(string);
}

pattern51(10);

// *
// **
// * *
// *  *
// *   *
// ******

function pattern52(numberOfRows) {
  let string = "";

  for (let i = 1; i <= numberOfRows; i++) {
    for (let j = 1; j <= i; j++) {
      if (i === 1 || i === numberOfRows) {
        string = string + "*";
      } else if (j === 1 || j === i) {
        string = string + "*";
      } else {
        string = string + " ";
      }
    }
    string = string + "\n";
  }

  console.log(string);
}

pattern52(8);

//     *
//    * *
//   *   *
//  *     *
// *********

function pattern53(numberOfRows) {
  let string = "";

  for (let i = 1; i <= numberOfRows; i++) {
    for (let j = numberOfRows - 1; j >= i; j--) {
      string = string + " ";
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
      if (i === 1 || i === numberOfRows) {
        string = string + "*";
      } else if (k === 1 || k === 2 * i - 1) {
        string = string + "*";
      } else {
        string = string + " ";
      }
    }
    string = string + "\n";
  }

  console.log(string);
}

pattern53(6);

//  *****       *****
//    ****     ****
//      ***   ***
//        ** **
//          *

function pattern55(numberOfRows) {
  let string = "";

  for (let i = 1; i <= numberOfRows; i++) {
    for (let j = 2; j <= 2 * i - 1; j++) {
      string = string + " ";
    }
    for (let k = 4 * numberOfRows - (4 * i - 1); k >= 1; k--) {
      if (k <= numberOfRows - i + 1 || k > 3 * numberOfRows - 3 * i) {
        string = string + "*";
      } else {
        string = string + " ";
      }
    }
    string = string + "\n";
  }

  console.log(string);
}

pattern55(5);

// 1
// 0 1
// 1 0 1
// 0 1 0 1
// 1 0 1 0 1
// 0 1 0 1 0 1
// 1 0 1 0 1 0 1

function pattern56(numberOfRows) {
  let string = "";

  for (let i = 1; i <= numberOfRows; i++) {
    for (let j = 1; j <= i; j++) {
      if (i % 2 === 0) {
        if (j % 2 === 0) {
          string = string + 1;
        } else {
          string = string + 0;
        }
      } else {
        if (j % 2 !== 0) {
          string = string + 1;
        } else {
          string = string + 0;
        }
      }
    }
    string = string + "\n";
  }

  console.log(string);
}

pattern56(10);

// *
// **
// **
// ****
// ****
// ******
// ******
// ********
// ********
// **********
// **********

function pattern57(numberOfRows) {
  let string = "";

  for (let i = 1; i <= numberOfRows; i++) {
    for (let j = 1; j <= i; j++) {
      if (i % 2 !== 0) {
        if (j === i && j !== 1) {
          continue;
        }
      }
      string = string + "*";
    }
    string = string + "\n";
  }

  console.log(string);
}

pattern57(7);

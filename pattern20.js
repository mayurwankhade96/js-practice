//     *
//    * *
//   *   *
//  *	  *
// *	   *

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
//     *	 *
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

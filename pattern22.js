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

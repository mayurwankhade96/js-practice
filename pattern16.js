//     5
//    5 4
//   5 4 3
//  5 4 3 2
// 5 4 3 2 1

function pattern33(numberOfRows) {
  let string = "";

  for (let i = 1; i <= numberOfRows; i++) {
    for (let j = 1; j <= numberOfRows - i; j++) {
      string = string + " ";
    }
    for (let k = 1; k <= i; k++) {
      string = string + (numberOfRows - k + 1) + " ";
    }
    string = string + "\n";
  }

  console.log(string);
}

pattern33(5);

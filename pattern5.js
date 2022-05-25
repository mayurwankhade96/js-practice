// 1 1 1 1
// 2 2 2 2
// 3 3 3 3
// 4 4 4 4

function pattern5(rowCount) {
  let string = "";

  for (let row = 1; row <= rowCount; row++) {
    for (let column = 1; column <= rowCount; column++) {
      string = string + row + " ";
    }
    string = string + "\n";
  }

  console.log(string);
}

pattern5(10);

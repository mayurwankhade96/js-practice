// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

function pattern4(rowCount) {
  let string = "";

  for (let row = 1; row <= rowCount; row++) {
    for (let column = 1; column <= row; column++) {
      string = string + column + " ";
    }
    string = string + "\n";
  }

  console.log(string);
}

pattern4(10);

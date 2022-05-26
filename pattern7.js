// 5 5 5 5 5
// 4 4 4 4 4
// 3 3 3 3 3
// 2 2 2 2 2
// 1 1 1 1 1

function pattern7(numberOfRows) {
  let string = "";

  for (let i = numberOfRows; i >= 1; i--) {
    for (let j = 1; j <= numberOfRows; j++) {
      string = string + i + " ";
    }
    string = string + "\n";
  }

  console.log(string);
}

pattern7(10);

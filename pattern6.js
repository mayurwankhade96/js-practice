// 1 2 3 4 5
// 1 2 3 4 5
// 1 2 3 4 5
// 1 2 3 4 5
// 1 2 3 4 5

function pattern6(numberOfRows) {
  let string = "";

  for (let i = 1; i <= numberOfRows; i++) {
    for (let j = 1; j <= numberOfRows; j++) {
      string = string + j + " ";
    }
    string = string + "\n";
  }

  console.log(string);
}

pattern6(10);

// 1 1 1 1
// 2 2 2
// 3 3
// 4

function pattern15(numberOfRows) {
  let string = "";

  for (let i = 1; i <= numberOfRows; i++) {
    for (let j = 1; j <= numberOfRows + 1 - i; j++) {
      string = string + i + " ";
    }
    string = string + "\n";
  }

  console.log(string);
}

pattern15(9);

// 1 2 3 4 5
// 1 2 3 4
// 1 2 3
// 1 2
// 1

function pattern16(numberOfRows) {
  let string = "";

  for (let i = 1; i <= numberOfRows; i++) {
    for (let j = 1; j <= numberOfRows + 1 - i; j++) {
      string = string + j + " ";
    }
    string = string + "\n";
  }

  console.log(string);
}

pattern16(9);

// 5 4 3 2 1
// 5 4 3 2
// 5 4 3
// 5 4
// 5

// J I H G F E D C B A
// J I H G F E D C B
// J I H G F E D C
// J I H G F E D
// J I H G F E
// J I H G F
// J I H G
// J I H
// J I
// J

//  5 4 3 2 1
//  5 4 3 2 1
//  5 4 3 2 1
//  5 4 3 2 1
//  5 4 3 2 1

function pattern10(numberOfRows) {
  let string = "";

  for (let i = 1; i <= numberOfRows; i++) {
    for (j = numberOfRows; j >= 1; j--) {
      string = string + j + " ";
    }
    string = string + "\n";
  }

  console.log(string);
}

pattern10(10);

// D D D D
// C C C C
// B B B B
// A A A A

function pattern11(numberOfRows) {
  let string = "";

  for (let i = numberOfRows; i >= 1; i--) {
    for (let j = 1; j <= numberOfRows; j++) {
      string = string + String.fromCharCode(i + 64) + " ";
    }
    string = string + "\n";
  }

  console.log(string);
}

pattern11(4);

// D C B A
// D C B A
// D C B A
// D C B A

function pattern12(numberOfRows) {
  let string = "";

  for (let i = 1; i <= numberOfRows; i++) {
    for (let j = numberOfRows; j >= 1; j--) {
      string = string + String.fromCharCode(j + 64) + " ";
    }
    string = string + "\n";
  }

  console.log(string);
}

pattern12(4);

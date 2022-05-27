// A A A A A
// B B B B B
// C C C C C
// D D D D D
// E E E E E

function pattern8(numberOfRows) {
  let string = "";

  for (let i = 1; i <= numberOfRows; i++) {
    for (let j = 1; j <= numberOfRows; j++) {
      string = string + String.fromCharCode(i + 64) + " ";
    }
    string = string + "\n";
  }

  console.log(string);
}

pattern8(5);

// A B C D E
// A B C D E
// A B C D E
// A B C D E
// A B C D E

function pattern9(numberOfRows) {
  let string = "";

  for (let i = 1; i <= numberOfRows; i++) {
    for (let j = 1; j <= numberOfRows; j++) {
      string = string + String.fromCharCode(j + 64) + " ";
    }
    string = string + "\n";
  }

  console.log(string);
}

pattern9(5);

// A
// B B
// C C C
// D D D D

function pattern13(numberOfRows) {
  let string = "";

  for (let i = 1; i <= numberOfRows; i++) {
    for (let j = 1; j <= i; j++) {
      string = string + String.fromCharCode(i + 64) + " ";
    }
    string = string + "\n";
  }

  console.log(string);
}

pattern13(10);

// A
// A B
// A B C
// A B C D

function pattern14(numberOfRows) {
  let string = "";

  for (let i = 1; i <= numberOfRows; i++) {
    for (let j = 1; j <= i; j++) {
      string = string + String.fromCharCode(j + 64) + " ";
    }
    string = string + "\n";
  }

  console.log(string);
}

pattern14(10);

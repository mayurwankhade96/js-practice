// *
// * *
// * * *
// * * * *
// * * * * *

function pattern1(rowCount) {
  let string = "";

  for (let row = 1; row <= rowCount; row++) {
    for (let column = 1; column <= row; column++) {
      string = string + "* ";
    }
    // when one row is printed, we need to add a new line
    string = string + "\n";
  }
  console.log(string);
}

pattern1(5);

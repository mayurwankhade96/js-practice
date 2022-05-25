// * * * * * * * * * *
// * * * * * * * * *
// * * * * * * * *
// * * * * * * *
// * * * * * *
// * * * * *
// * * * *
// * * *
// * *
// *

function pattern3(rowCount) {
  let string = "";

  for (let row = 1; row <= rowCount; row++) {
    for (let column = 1; column <= rowCount - row + 1; column++) {
      string = string + "* ";
    }
    string = string + "\n";
  }

  console.log(string);
}

pattern3(5);

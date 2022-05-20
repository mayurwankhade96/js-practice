// *
// * *
// * * *
// * * * *
// * * * * *
// * * * * * *
// * * * * * * *
// * * * * * * * *
// * * * * * * * * *
// * * * * * * * * * *

let string = "";

for (let row = 1; row <= 10; row++) {
  for (let column = 1; column <= row; column++) {
    string = string + "* ";
  }
  // when one row is printed, we need to add a new line
  string = string + "\n";
}

console.log(string);

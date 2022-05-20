// * * * * * * * * * *
// * * * * * * * * * *
// * * * * * * * * * *
// * * * * * * * * * *
// * * * * * * * * * *
// * * * * * * * * * *
// * * * * * * * * * *
// * * * * * * * * * *
// * * * * * * * * * *
// * * * * * * * * * *

let string = "";

for (let row = 1; row <= 10; row++) {
  for (let column = 1; column <= 10; column++) {
    string = string + "* ";
  }
  string = string + "\n";
}
console.log(string);

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

function pattern2(rowCount) {
  let string = "";

  for (let row = 1; row <= rowCount; row++) {
    for (let column = 1; column <= rowCount; column++) {
      string = string + "* ";
    }
    string = string + "\n";
  }
  console.log(string);
}

pattern2(5);

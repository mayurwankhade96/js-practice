// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

let string = "";

for (let row = 1; row <= 5; row++) {
  for (let column = 1; column <= row; column++) {
    string = string + column + " ";
  }
  string = string + "\n";
}

console.log(string);

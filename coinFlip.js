// Write a program to simulate a coin flip and print out "Heads" or "Tails" accordingly.
const IS_HEADS = 1;

let resultCheck = Math.floor(Math.random() * 2);
if (resultCheck === IS_HEADS) {
  console.log("Heads");
} else {
  console.log("Tails");
}

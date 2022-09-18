let myString = "EElllzzzzzzzeroo";

let newString = myString.split("").filter((c, i) => {
  return myString[i] !== myString[i + 1];
}).reduce((c, n) => {
  return `${c}${n}`;
});

console.log(newString);
// Elzero
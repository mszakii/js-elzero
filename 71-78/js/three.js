let myArray = ["E", "l", "z", ["e", "r"], "o"];

// Elzero

let newArray = myArray.map((c, e) => {
  return typeof c == "object" ? c.join("") : c;
}).join("").split("");

console.log(newArray);
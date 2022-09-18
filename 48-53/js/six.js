let start = 0;
let swappedName = "elZerO";

// code

let newName = [];
for (let i = start; i < swappedName.length; i++) {
  if (swappedName[i] === swappedName[i].toUpperCase()) {
    newName.push(swappedName[i].toLowerCase());
  } else {
    newName.push(swappedName[i].toUpperCase());
  }
}

console.log(newName.join(""));
// Output
"ELzERo"
let theName = "Elzero";

// First method
console.log(theName.split(""));

// Second method
let arr = [];
for (let i = 0; i < theName.length; i++) {
  arr.push(theName[i]);
}
console.log(arr);

// Third method
console.log([...theName]);

// Fourth method
console.log(Array.from(new Set([...theName])));

// Five's method
console.log(Array.from(theName));

// Six's method
console.log(Object.assign([], theName));

// Needed Output
// ['E', 'l', 'z', 'e', 'r', 'o']
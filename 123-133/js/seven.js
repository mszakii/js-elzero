let numsOne = [1, 2, 3];
let numsTwo = [4, 5, 6];

console.log(numsOne.concat(numsTwo));

let numsOnex = numsOne;

numsOnex.push(...numsTwo);

console.log(numsOnex);

console.log([...numsOne,  ...numsTwo]);

console.log(`${numsOne},${numsTwo}`.split(","));

// Needed Output
// [1, 2, 3, 4, 5, 6]
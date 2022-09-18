let chars = ["A", "B", "C", "D", "E", 10, 15, 6];

// chars.splice(3, [chars[3], chars[0], chars[1], chars[2]]);

console.log(chars.copyWithin(3));

// Needed Output
// ['A', 'B', 'C', 'A', 'B', 'C', 'D', 'E']

let charsB = ["A", "B", "C", 20, "D", "E", 10, 15, 6];

let arrB = [];

charsB.filter((c) => typeof c === "string" ? arrB.push(c) : "");

console.log(charsB.copyWithin(3));

console.log(`${arrB.slice(0, 4)},${arrB.slice(0, 5)}`.split(","));

// Needed Output
// ['A', 'B', 'C', 'D', 'A', 'B', 'C', 'D', 'E']

let charsC = ["Z", "Y", "A", "D", "E", 10, 1];

console.log(charsC.copyWithin(2));

// Needed Output
// ["Z", "Y", "Z", "Y", "A", "D", "E"]

let charsD = ["A", "B", "C", "D", "E", 10, 15, 6];

console.log(charsD.sort());

console.log(charsD.sort().copyWithin(0, 3, 6));
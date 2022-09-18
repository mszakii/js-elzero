let theNumber = 100020003000;

let s = new Set([...theNumber.toString()]);

s.delete(`${+false}`);

s = parseInt(Array.from(s).join(""));

// Needed Output
// 123

// let x = parseInt(Array.from(new Set([...theNumber.toString()])).slice(0).join(""));


// second method 
let r = [];

Array.from(new Set([...theNumber.toString()])).forEach(e => e !== "0" ? r.push(e) : "");

r = parseInt(r.join(""))
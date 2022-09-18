let setOfNumbers = new Set([10]);

setOfNumbers.add([20]).add([setOfNumbers.size]);

console.log(setOfNumbers);

console.log([...setOfNumbers][[...setOfNumbers].length - 1][0]);

/*let e = [...setOfNumbers].join();
e = e.split(",");
console.log(+e[e.length - 1]);*/

// Needed Output
// Set(3) {10, 20, 2}
// 2
let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

// [-1, -10, 10, 20, -5, -3]

let result = numsAndStrings
  .filter((e) => !isNaN(parseInt(e)))
  .map((e) => -e);

console.log(result);
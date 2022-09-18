let nums = [2, 12, 11, 5, 10, 1, 99];

// 500

let result = nums.reduce((curr, acc) => {
  return acc % 2 == 0 ? acc * curr : acc + curr;
}, 1);

console.log(result);
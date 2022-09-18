let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

// Elzero

// map + join
// let result = mix.map((el) => isNaN(parseInt(el)) ? el : "").join("");

// filter + join
// let result = mix.filter((e) => typeof e == "string").join("");

// map (given) [solved]

let result = mix
.map((e) => typeof e == "string" ? e :"")
.reduce((c, n) => `${c}${n}`);

console.log(result);
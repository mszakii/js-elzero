/*
  Challenge 1
*/

let a = 10;
let b = "20";
let c = 80;

console.log(++a + +b++ + +c++ - +a++);
console.log(++a + -b + +c++ - -a++ + +a);
console.log(--c + +b + --a * +b++ - +b * a + --a - +true);

/*
  [++a] [+]
  [++a]
  - Value: 11
  - Explain: preincrement
  [+]
  - Explain: Unary Operator
  [11+20+80-11] (100)
*/

/*
  Challenge 2
*/

let d = "-100";
let e = "20";
let f = 30;
let g = true;

// Only Use Variables Value
// Do Not Use Variable Twice

console.log(-d % f ** ++g *e); // 2000

/*
  d => -100
  e => "20"
  f => 30
  g => 2
*/

console.log(++e * g + -d + ++f); // 173

/*
  21 * 2 + 100 + 31 => 173
*/
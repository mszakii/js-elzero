let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";

let solution = "???????";

solution = myString
  .split(",") // remove "," and make arr
  .filter((el) => isNaN(parseInt(el)))
  // remve numbers
  .map((el) => el == "_" ? " " : el)
  // remove "_"
  .reduce((c, a) => `${c}${a}`)
  // joining array [!] to separate "EE"
  .split("");


solution.pop();
solution.shift();

solution = solution.join("");

console.log(solution);
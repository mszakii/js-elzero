let a = 1_00;
let b = 2_00.5;
let c = 1e2;
let d = 2.4;

// Find smallest nameber and return integer
console.log(Math.round(d));

// use a + d to get 10000
console.log(Math.pow(a, Math.trunc(d)));
// get number 2 from d variable
console.log(Math.floor(d));
console.log(Math.trunc(d));
console.log(Math.round(d));
console.log(+d.toFixed());
console.log(parseInt(d));
// use b + d to get
console.log((Math.floor(b) / Math.ceil(d)).toFixed(2)); // 66.67 => string

console.log(+(Math.floor(b) / Math.ceil(d)).toFixed()); // 66.67 => string
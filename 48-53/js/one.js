let start = 10;
let end = 100;
let exclude = 40;

// code
let i = start;
for (; i <= end; i += start) {
  i != exclude ? console.log(i) : false;
}

// Output
10
20
30
50
60
70
80
90
100
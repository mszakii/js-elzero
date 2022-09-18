let input = prompt("Example: 5-10");

input = input.split("-");

let value = [];

if (+input[0] > +input[1]) {
  value.push(input[1]);
  value.push(input[0]);
} else {
  value = input;
}

let result = [];

for (let i = 0; i <= value[1]; i++) {
  if (+value[0] != +value[1]) {
    result.push(+value[0]++);
  }
}
result.push(+value[1]);
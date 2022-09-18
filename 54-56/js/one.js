let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let index = 0;
let counter = 0;

// code
do {
  if (typeof friends[index] !== "number") {
    if (friends[index][0] != "A") {
      counter++;
      console.log(`${counter} => ${friends[index]}`);
    }
  }
  index++;
} while (counter <= 2);

// Output
"1 => Sayed"
"2 => Mahmoud"
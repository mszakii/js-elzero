let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";

// code

let n = letter.length;
for (let i = letter.length; i < friends.length; i++) {
  if (friends[i].toLowerCase().startsWith(letter)) {
    continue;
  }
  console.log(`${n++} => ${friends[i]}`);
}

// Output
"1 => Sayed"
"2 => Eman"
"3 => Mahmoud"
"4 => Osama"
"5 => Sameh"
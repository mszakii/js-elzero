let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Write 3 Solutions
// M1
for (let i=0; i < haystack.length; i++) {
  if (needle === haystack[i]) {
    console.log("Found");
  }
}

// M2

const filter = haystack.filter(haystack => {
  let re = needle == haystack;
  if (re == 1) {
    console.log("Found");
  }
});

// M3
if (haystack.includes(needle)) {
  console.log("Found");
}
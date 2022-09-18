function checkStatus(a, b, c) {
  // a
  if (typeof a === "string") {
    var name = a;
  } else if (typeof a === "number") {
    var age = a;
  } else {
    var available = a;
  }
  // b
  if (typeof b === "string") {
    var name = b;
  } else if (typeof b === "number") {
    var age = b;
  } else {
    var available = b;
  }
  // c
  if (typeof c === "string") {
    var name = c;
  } else if (typeof c === "number") {
    var age = c;
  } else {
    var available = c;
  }
  // available
  if (available) {
    var isAv = "Available For Hire";
  } else {
    var isAv = "Not Available For Hire";
  }
  // print
  console.log(`Hello ${name}, Your Age Is ${age}, You Are ${isAv}`);
}

// Needed Output
checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"
function ageInTime(theAge) {
  if (theAge > 10 && theAge < 100) {
    let Months = theAge * 12;
    let weeks = Months * 4;
    let Days = theAge * 365;
    let Hours = Days * 24;
    let Minutes = Hours * 60;
    let Seconds = Minutes * 60;
    // print
    console.log(`Months => ${Months}`);
    console.log(`weeks => ${weeks}`);
    console.log(`Days => ${Days}`);
    console.log(`Hours => ${Hours}`);
    console.log(`Minutes => ${Minutes}`);
    console.log(`Seconds => ${Seconds}`);
  } else {
    console.log("Age Out Of Range");
  }
}

// Needed Output
ageInTime(110); // Age Out Of Range
ageInTime(38); // Months Example => 456 Months
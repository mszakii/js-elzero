function specialMix(...data) {
  // Your Code Here
  let result = 0;
  for (let i = 0; i < data.length; i++) {
    if (typeof data[i] == "number") {
      result += data[i];
    } else {
      if (parseInt(data[i]) > 0) {
        result += parseInt(data[i]);
      }
    }
  }
  if (result === 0) {
    return "All Is Strings";
  } else {
    return result;
  }
}

console.log(specialMix(10, 20, 30)); // 60
console.log(specialMix("10Test", "Testing", "20Cool")); // 30
console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
console.log(specialMix("Test", "Cool", "Test")); // All Is Strings
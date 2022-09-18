let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

// Your Code Here
allArrs = allArrs.concat(arr1, arr2).sort();

console.log(allArrs.slice(-(arr1.length)).join("").toLowerCase()); // fxy
document.body.style.fontFamily = "Arial";

let input = document.forms[0][0];
let result = document.querySelector('.result');

input.oninput = function () {
  if (this.value == "") {
    result.innerHTML = `{0} USD Dollar = {0} Egyptian Pound`;
  } else {
    result.innerHTML = `{${this.value}} USD Dollar = {${this.value * 18.75}} Egyptian Pound`;
  }
  preventDefault();
};
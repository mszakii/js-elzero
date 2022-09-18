let submit = document.querySelector('[type="submit"');

let inputs = document.querySelectorAll('.input');

let number = inputs[0];
let text = inputs[1];
let select = inputs[2];

let results = document.querySelector(".results");

submit.onclick = function (e) {
  e.preventDefault();
  for (let i = 0; i < number.value; i++) {
    let ele = document.createElement(select.value);
    ele.textContent = text.value;
    results.appendChild(ele);
  }
};

console.log('yev');
let inputs = document.querySelectorAll(".input");

if (sessionStorage.text) {
  inputs[0].value = sessionStorage.text;
}

if (sessionStorage.email) {
  inputs[1].value = sessionStorage.email;
}

if (sessionStorage.password) {
  inputs[2].value = sessionStorage.password;
}

if (sessionStorage.select) {
  inputs[3].value = sessionStorage.select;
}

inputs.forEach((e) => {
  e.addEventListener('blur', (e) => {
    let value = e.currentTarget.value;
    let type = e.currentTarget.getAttribute("type");
    sessionStorage.setItem(type, value);
  });
});
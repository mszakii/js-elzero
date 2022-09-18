let fonts = document.querySelector("#font");
let colors = document.querySelector("#color");
let sizes = document.querySelector("#size");

if (localStorage.font) {
  text.style.fontFamily = localStorage.font;
  document.querySelector(`[value="${localStorage.font}"]`).setAttribute("selected", "");
}

if (localStorage.color) {
  text.style.color = localStorage.color;
  document.querySelector(`[value="${localStorage.color}"]`).setAttribute("selected", "");
}

if (localStorage.si) {
  text.style.fontSize = localStorage.si;
  document.querySelector(`[value="${localStorage.si}"]`).setAttribute("selected", "");
}

fonts.onblur = function () {
  localStorage.setItem("font", font.value);
  text.style["fontFamily"] = localStorage["font"];
};

colors.onblur = function () {
  localStorage.setItem("color", color.value);
  text.style["color"] = localStorage["color"];
};

sizes.onblur = function () {
  localStorage.setItem("si", size.value);
  text.style["fontSize"] = localStorage["si"];
};
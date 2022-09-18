let divs = document.querySelectorAll('div');

let one = --divs.length;
let onev = --divs.length;
let zero = --onev;

let title = divs[zero].getAttribute(divs[zero].attributes[1].name);
let titleTwo = divs[one].getAttribute(divs[one].attributes[1].name);

let text = divs[zero].innerHTML;
let textTwo = divs[one].innerHTML;

divs[zero].setAttribute(divs[zero].attributes[1].name, titleTwo);
divs[zero].innerHTML = textTwo;

divs[one].setAttribute(divs[one].attributes[1].name, title);
divs[one].innerHTML = `${text} ${divs.length}`;
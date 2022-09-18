let divs = document.querySelectorAll('div img');

divs.forEach((e) => {
  e.setAttribute('src', 'https://elzero.org/wp-content/themes/elzero/imgs/logo.png');
  e.setAttribute('alt', 'Elzero logo');
});

document.body.style.background = "#000";

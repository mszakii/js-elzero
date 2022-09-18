let imgs = document.querySelectorAll('img');

imgs.forEach((e) => {
  if (e.getAttribute('alt')) {
    e.setAttribute('alt', 'Old');
  } else {
    e.setAttribute('alt', 'Elzero New');
  }
});
let counter = 10;

count.innerHTML = counter;

for (let i = 1; i <= counter; i++) {
  setTimeout(function() {
    if (counter <= 10) {
      count.innerHTML = `0${counter -= 1}`;
    } else {
      count.innerHTML = counter -= 1;
    }
  }, i * 1000);
}


function createSelectBox(startYear, endYear) {
  document.body.appendChild(document.createElement('select'));
  for (let opt = startYear; opt <= endYear; opt++) {
    let option = document.createElement("option");
    option.innerHTML = opt;
    option.setAttribute("value", opt)
    document.querySelector("select").appendChild(option);
  }
}
createSelectBox(2000, 2021);
// var controls
let artTitle = "Hello",
    artDes = "Elzero Web School",
    artDate = "25\\10";
// article
let art = `
  <div class="card">
    <h3>${artTitle} Elzero</h3>
    <p>${artDes}</p>
    <span>${artDate}</span>
  </div>
`;
document.write(art.repeat(4));
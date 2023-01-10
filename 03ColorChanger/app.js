let canvasEl = document.querySelector("#canvas");
let btnEl = document.querySelector("#button");

function colourChanger() {
  let helperStr = "ABCDEF0123456789";
  let init = "#";
  for (let i = 0; i < 6; i++) {
    let random = Math.floor(Math.random() * helperStr.length);
    let res = helperStr[random];
    init += res;
  }
  return init;
}
colourChanger();

btnEl.addEventListener("click", () => {
  canvasEl.style.backgroundColor = colourChanger();
});

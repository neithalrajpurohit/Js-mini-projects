let inputEl = document.querySelector("#input");
let btn = document.querySelector("#submit");
let img = document.querySelector("#img");

btn.addEventListener("click", async () => {
  let vals = inputEl.value;
  img.setAttribute(
    "src",
    `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${vals}`
  );
});

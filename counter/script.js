let h1El = document.querySelector("#result");
let btn1El = document.querySelector(".btn1");
let btn2El = document.querySelector(".btn2");
let btn3El = document.querySelector(".reset");

let count = 0;

function increment() {
  count = count + 1;
  return count;
}
function decrement() {
  count = count - 1;
  return count;
}
function reset() {
  count = 0;
  return count;
}

btn1El.addEventListener("click", () => {
  count++;
  h1El.textContent = count;
});

btn2El.addEventListener("click", () => {
  count--;
  h1El.textContent = count;
});

btn3El.addEventListener("click", () => {
  count = 0;
  h1El.textContent = count;
});

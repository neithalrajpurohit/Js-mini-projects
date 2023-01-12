// const container;
// const error;

let inputEl = document.querySelector("#dob");
let resultEl = document.querySelector(".desc");
let yearsEL = document.querySelector("#years");
let monthsEl = document.querySelector("#months");
let daysEl = document.querySelector("#days");

inputEl.addEventListener("change", (e) => {
  getAge(e);
  displayAll(e);
});
function getAge(e) {
  let date = new Date(e.target.value).getFullYear();
  let curr = new Date().getFullYear();
  let res = curr - date - 1;
  resultEl.textContent = `Your age is ${res}`;
  return res;
}
function displayAll(e) {
  let date = new Date(e.target.value);

  let year = getAge(e);

  //   let currYear = new Date().getFullYear();

  let month = date.getMonth();
  let currMonth = new Date().getMonth();

  let days = date.getDay();
  let currDay = new Date().getDay();

  yearsEL.textContent = `${year} `;
  monthsEl.textContent = `${Math.abs(currMonth - month - 1)} `;
  daysEl.textContent = `${currDay - days - 1} `;
}

function calcAge() {}

function displayAge() {}

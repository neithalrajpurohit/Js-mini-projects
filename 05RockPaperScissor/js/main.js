let userScoreVal = document.querySelector("#userScoreVal");
let compScoreVal = document.querySelector("#compScoreVal");

let user_stat = document.querySelector("#result-user-stat");
let comp_stat = document.querySelector("#result-comp-stat");
let final_stat = document.querySelector("#result-final-stat");

let uS = 0;
let cS = 0;

let uC = "";
let cC = "";

function handleClick(e) {
  uC = e.target.getAttribute("alt");
  computerChoice();
}

function computerChoice() {
  if (uC === "rock") {
    let choice = ["paper", "scissors"];
    let random = Math.floor(Math.random() * choice.length);
    let res = choice[random];
    cC = res;
    console.log(res);
    checkWinner();
  } else if (uC === "paper") {
    let choice = ["rock", "scissors"];
    let random = Math.floor(Math.random() * choice.length);
    let res = choice[random];
    cC = res;
    checkWinner();
  } else if (uC === "scissors") {
    let choice = ["paper", "rock"];
    let random = Math.floor(Math.random() * choice.length);
    let res = choice[random];
    cC = res;
    checkWinner();
  }
}
function checkWinner() {
  if (uC === "rock" && cC === "paper") {
    cS++;
    compScoreVal.textContent = cS;
  } else if (uC === "rock" && cC === "scissors") {
    uS++;
    userScoreVal.textContent = uS;
  } else if (uC === "paper" && cC === "scissors") {
    cS++;
    compScoreVal.textContent = cS;
  } else if (uC === "paper" && cC === "rock") {
    uS++;
    userScoreVal.textContent = uS;
  } else if (uC === "scissors" && cC === "paper") {
    uS++;
    userScoreVal.textContent = uS;
  } else if (uC === "scissors" && cC === "rock") {
    cS++;
    compScoreVal.textContent = cS;
  }
  console.log(uC, cC);
  if (uS > cS) {
    final_stat.textContent = `Winner user`;
  } else if (cS > uS) {
    final_stat.textContent = `Winner comp`;
  }
}

let img = document.querySelectorAll(".choice");
console.log(img);
img.forEach((item) => {
  item.addEventListener("click", handleClick);
});

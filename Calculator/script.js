let stack = [];
let operators = [];

let inputEl = document.querySelector(".textview");

function insert(num) {
  if (!isNaN(num)) {
    stack.push(num);
    inputEl.value = num;
  } else if (
    num === "+" ||
    num === "-" ||
    num === "*" ||
    num === "/" ||
    num === "%"
  ) {
    operators.push(num);
  } else if (num === "=") {
    equals();
  }
  num = 0;
}

function equals() {
  let firstDig = stack[0];
  let secondDig = stack[1];
  let res = 0;
  switch (operators[0]) {
    case "+": {
      res = firstDig + secondDig;
      break;
    }
    case "-": {
      res = firstDig - secondDig;
      break;
    }
    case "*": {
      res = firstDig * secondDig;
      break;
    }
    case "/": {
      res = firstDig / secondDig;
      break;
    }
    case "%": {
      res = firstDig % secondDig;
      break;
    }
  }
  console.log(res);
  stack = [];
  operators = [];
  inputEl.value = res;
  res = 0;
}

function clean() {
  inputEl.value = 0;
  stack = [];
  operators = [];
}

function back() {}

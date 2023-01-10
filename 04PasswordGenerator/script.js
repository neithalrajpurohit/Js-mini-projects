const resultEl = document.getElementById("result");
const lengthEl = document.getElementById("length");
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");
const generateEl = document.getElementById("generate");
const clipboardEl = document.getElementById("clipboard");

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol,
};

clipboardEl.addEventListener("click", () => {});

generateEl.addEventListener("click", () => {
  generatePassword(
    lowercaseEl.checked,
    uppercaseEl.checked,
    numbersEl.checked,
    symbolsEl.checked,
    lengthEl.value
  );
});

function generatePassword(lower, upper, number, symbol, length) {
  console.log(lower, upper, number, symbol, length);
  let str = "";
  for (let i = 0; i <= Number(length - 1); i++) {
    if (lower) {
      str += randomFunc.lower();
    }
    if (upper) {
      str += randomFunc.upper();
    }
    if (number) {
      str += randomFunc.number();
    }
    if (symbol) {
      str += randomFunc.symbol();
    }
  }
  console.log(length);
  resultEl.textContent = str.substring(0, length);
}

function getRandomLower() {
  let str = "abcdefghijklmnopqrstuvwxyz";
  let random = Math.floor(Math.random() * str.length);
  return str[random];
  //   console.log(str[random]);
}
getRandomLower();

function getRandomUpper() {
  let str = "abcdefghijklmnopqrstuvwxyz";
  let random = Math.floor(Math.random() * str.length);
  return str[random].toUpperCase();
}
getRandomUpper();

function getRandomNumber() {
  let num = "1234567890";
  let random = Math.floor(Math.random() * num.length);
  return random;
  //   console.log(random);
}
getRandomNumber();

function getRandomSymbol() {
  let sym = "!@#$%^&*()_+}{?/>.<,\\'";
  let random = Math.floor(Math.random() * sym.length);
  //   console.log(sym[random]);
  return sym[random];
}
getRandomSymbol();

//  selecting elements

let inputField = document.querySelector("#text");
let convertBtn = document.querySelector("#convert-btn");
let camelCase = document.querySelector("#camel-case");
let pascalCase = document.querySelector("#pascal-case");
let snakeCase = document.querySelector("#snake-case");
let screamingSnakeCase = document.querySelector("#screaming-snake-case");
let KebabCase = document.querySelector("#kebab-case");
let screamingKebabCase = document.querySelector("#screaming-kebab-case");

function camelCases(str) {
  let arr = str.split(" ");
  let newStr = "";
  for (let i = 0; i <= arr.length - 1; i++) {
    let val = arr[i];
    let output = val.substring(1);
    let res = val[0].toUpperCase();
    let final = res + output;
    newStr += final;
  }
  return newStr[0].toLowerCase() + newStr.substring(1);
  // console.log(newStr[0].toLowerCase() + newStr.substring(1));
}
// camelCase("hello idiot how are you");

function pascalCases(str) {
  let arr = str.split(" ");
  let newStr = "";
  for (let i = 0; i <= arr.length - 1; i++) {
    let val = arr[i];
    let output = val.substring(1);
    let res = val[0].toUpperCase();
    let final = res + output;
    newStr += final;
  }
  return newStr;
  // console.log(newStr);
}
// pascalCase("hello idiot how are you");

function snakeCases(str) {
  let arr = str.split(" ");
  console.log(arr);
  let newArr = arr.join("_");
  // console.log(newArr);
  return newArr;
}

// pascalCase("hello idiot how are you");

function screamingSnakeCases(str) {
  let arr = str.split(" ");
  let newArr = arr.join("_");
  let res = newArr[0].toUpperCase() + newArr.substring(1);
  return res;
  // console.log(res);
}
// screamingSnakeCase("hello how are you");

function KebabCases(str) {
  let arr = str.split(" ");
  let newArr = arr.join("-");
  return newArr;
  // console.log(newArr);
}
// KebabCase("hello how are you");

function screamingKebabCases(str) {
  let arr = str.split(" ");
  let join = arr.join("-");
  console.log(join);
  let caps = join[0].toUpperCase() + join.substring(1);
  // console.log(caps);
  return caps;
}
// screamingKebabCase("hello idiot how are you?");

convertBtn.addEventListener("click", () => {
  let val = inputField.value;
  let res = camelCases(val);
  let res1 = pascalCases(val);
  let res2 = snakeCases(val);
  let res3 = screamingSnakeCases(val);
  let res4 = KebabCases(val);
  let res5 = screamingKebabCases(val);

  camelCase.textContent = res;
  pascalCase.textContent = res1;
  snakeCase.textContent = res2;
  screamingSnakeCase.textContent = res3;
  KebabCase.textContent = res4;
  screamingKebabCase.textContent = res5;

  inputField.value = "";
});

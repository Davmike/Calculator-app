"use strict";

const rangeInput = document.getElementById("rangeInput");
const numberResult = document.querySelector(".number-result");
const number = document.querySelectorAll(".number");
const body = document.body;

const equal = document.querySelector(".equal");
const resetBtn = document.querySelector(".reset-btn");
const del = document.querySelector(".del");

let resultOfNumber = "";

rangeInput.addEventListener("input", (event) => {
  if (event.target.value === "1") {
    body.classList.remove("theme-2");
    body.classList.remove("theme-3");
  }
  if (event.target.value === "2") {
    body.classList.remove("theme-3");
    body.classList.add("theme-2");
  }
  if (event.target.value === "3") {
    body.classList.remove("theme-2");
    body.classList.add("theme-3");
  }
});

number.forEach((element) => {
  element.addEventListener("click", () => {
    console.log(resultOfNumber);
    if (resultOfNumber.length <= 13) {
      const buttonText = element.textContent;
      // if (buttonText === "x") {
      //   resultOfNumber += "*";
      // } else {
      //   resultOfNumber += buttonText;
      // }
      resultOfNumber += buttonText;
      numberResult.textContent = resultOfNumber;
    }
  });
});

equal.addEventListener("click", () => {
  resultOfNumber = resultOfNumber.replace("x", "*");
  const resultNum = eval(resultOfNumber);
  resultOfNumber = resultNum.toString();
  numberResult.textContent = resultNum;
});

del.addEventListener("click", () => {
  resultOfNumber = resultOfNumber.slice(0, -1);
  numberResult.textContent = resultOfNumber;
  if (resultOfNumber === "") {
    numberResult.textContent = 0;
  }
});

resetBtn.addEventListener("click", () => {
  resultOfNumber = "";
  numberResult.textContent = 0;
});
